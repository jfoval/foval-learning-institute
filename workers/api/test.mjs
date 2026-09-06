// End-to-end test against `wrangler dev --local`, with a stub mail endpoint so the
// six-digit code can be read back instead of mailed. Run:
//   node mailstub (any endpoint that records the body) on MAIL_ENDPOINT
//   npx wrangler dev --local --port 8788
//   node workers/api/test.mjs
import fs from 'node:fs';

const API = process.env.API || 'http://127.0.0.1:8788';
const ORIGIN = 'http://localhost:4173';
const MAIL = process.env.MAIL_FILE || '/tmp/claude-0/-home-user-foval-learning-institute/ee0c4b56-99c2-5474-8451-461b98cd2ebb/scratchpad/lastmail.json';

let pass = 0, fail = 0;
const ok = (name, cond, extra = '') => { if (cond) { pass++; console.log('  ok  ', name); } else { fail++; console.log('  FAIL', name, extra); } };

const call = (path, { method = 'GET', body, token, origin = ORIGIN } = {}) => {
  const headers = {};
  if (origin) headers.Origin = origin;
  if (body) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined, redirect: 'manual' })
    .then(async r => ({ status: r.status, headers: r.headers, body: await r.text().then(t => { try { return JSON.parse(t); } catch { return t; } }) }));
};
const codeFromMail = () => (JSON.parse(fs.readFileSync(MAIL, 'utf8')).text.match(/\b(\d{6})\b/) || [])[1];

const email = `learner-${Date.now()}@example.com`;

console.log('origin policy');
ok('no Origin header is refused', (await call('/auth/session', { origin: null })).status === 403);
ok('a strange Origin is refused', (await call('/auth/session', { origin: 'https://evil.example' })).status === 403);
ok('preflight answers 204', (await call('/auth/session', { method: 'OPTIONS' })).status === 204);

console.log('email sign-in');
ok('a bad address is rejected', (await call('/auth/email/start', { method: 'POST', body: { email: 'not-an-address' } })).status === 400);
const start = await call('/auth/email/start', { method: 'POST', body: { email } });
ok('asking for a code succeeds', start.status === 200 && start.body.sent === true, JSON.stringify(start.body));
const code = codeFromMail();
ok('a six-digit code was mailed', /^\d{6}$/.test(code || ''), code);

const wrong = String((Number(code) + 1) % 1000000).padStart(6, '0');
ok('the wrong code is refused', (await call('/auth/email/verify', { method: 'POST', body: { email, code: wrong } })).status === 401);
const verified = await call('/auth/email/verify', { method: 'POST', body: { email, code } });
ok('the right code returns a session', verified.status === 200 && typeof verified.body.token === 'string', JSON.stringify(verified.body));
const token = verified.body.token;
ok('the code cannot be reused', (await call('/auth/email/verify', { method: 'POST', body: { email, code } })).status === 401);

console.log('sessions');
ok('the session is recognised', (await call('/auth/session', { token })).body.signedIn === true);
ok('a made-up token is not', (await call('/auth/session', { token: 'nonsense' })).body.signedIn === false);
ok('state needs a session', (await call('/state')).status === 401);

console.log('state sync and merge');
const DAY = 86400000, now = Date.now();
const first = {
  progress: { 'how-to-learn-anything': { '01-learning-is-not-performance': { done: true, score: 0.8, at: now - DAY } } },
  review: { 'how-to-learn-anything/01-learning-is-not-performance/0': { ease: 2.5, interval: 1, due: now + DAY, reps: 1, lapses: 0, last: true } },
  activity: { '2026-09-05': 3 },
  prefs: { hoursPerWeek: 8 }, name: 'Learner One',
};
const pushed = await call('/state', { method: 'PUT', token, body: first });
ok('a first push is accepted', pushed.status === 200, JSON.stringify(pushed.body).slice(0, 200));
const pulled = await call('/state', { token });
ok('progress comes back', pulled.body.state.progress['how-to-learn-anything']['01-learning-is-not-performance'].done === true);
ok('the review item comes back', pulled.body.state.review['how-to-learn-anything/01-learning-is-not-performance/0'].reps === 1);
ok('prefs come back', pulled.body.state.prefs.hoursPerWeek === 8);
ok('the name comes back', pulled.body.state.name === 'Learner One');

// A second device that has never seen the first device's work, and has some of its own.
const second = {
  progress: {
    'how-to-learn-anything': {
      '01-learning-is-not-performance': { done: false, score: 0.6, at: now - 2 * DAY },
      '02-how-memory-works': { done: true, score: 0.9, at: now },
    },
  },
  review: { 'how-to-learn-anything/01-learning-is-not-performance/0': { ease: 2.4, interval: 1, due: now - DAY, reps: 0, lapses: 1, last: false } },
  activity: { '2026-09-05': 1, '2026-09-06': 5 },
  prefs: { hoursPerWeek: 3 }, name: '',
};
const merged = (await call('/state', { method: 'PUT', token, body: second })).body.state;
ok('a done lesson stays done', merged.progress['how-to-learn-anything']['01-learning-is-not-performance'].done === true);
ok('the higher score wins', merged.progress['how-to-learn-anything']['01-learning-is-not-performance'].score === 0.8);
ok('the other device adds its lesson', merged.progress['how-to-learn-anything']['02-how-memory-works'].done === true);
ok('the further-ahead review item wins', merged.review['how-to-learn-anything/01-learning-is-not-performance/0'].reps === 1);
ok('the larger day tally wins', merged.activity['2026-09-05'] === 3);
ok('a new day is added', merged.activity['2026-09-06'] === 5);
ok('this device sets the hours', merged.prefs.hoursPerWeek === 3);
ok('an empty name does not erase the name', merged.name === 'Learner One');

const again = await call('/state', { method: 'PUT', token, body: merged });
ok('pushing the same state again writes nothing', again.body.wrote === 0, `wrote ${again.body.wrote}`);

console.log('signing out');
ok('sign-out succeeds', (await call('/auth/signout', { method: 'POST', token })).status === 200);
ok('the session is dead', (await call('/state', { token })).status === 401);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
