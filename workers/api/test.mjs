// End-to-end test against `wrangler dev --local`. Run:
//   npx wrangler d1 execute foval-feedback --local --file=schema.sql --cwd workers/api
//   npx wrangler dev --local --port 8788 --cwd workers/api
//   node workers/api/test.mjs
// The reset check writes a code with scripts/reset-code.mjs --local, so it exercises the
// same script John runs.
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const API = process.env.API || 'http://127.0.0.1:8788';
const ORIGIN = 'http://localhost:4173';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

let pass = 0, fail = 0;
const ok = (name, cond, extra = '') => { if (cond) { pass++; console.log('  ok  ', name); } else { fail++; console.log('  FAIL', name, extra); } };

// Locally the client can set CF-Connecting-IP (in production Cloudflare overwrites it), so
// each call gets its own address and only the limiter check below shares one.
const call = (p, { method = 'GET', body, token, origin = ORIGIN, ip = crypto.randomUUID() } = {}) => {
  const headers = { 'CF-Connecting-IP': ip };
  if (origin) headers.Origin = origin;
  if (body) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(API + p, { method, headers, body: body ? JSON.stringify(body) : undefined, redirect: 'manual' })
    .then(async r => ({ status: r.status, headers: r.headers, body: await r.text().then(t => { try { return JSON.parse(t); } catch { return t; } }) }));
};

// The same derivation the browser does in site/assets/app.js (passwordKey). The PBKDF2
// check below pins the two together.
const derive = (username, password) =>
  crypto.pbkdf2Sync(password, `foval-login-v1:${username}`, 600000, 32, 'sha256').toString('base64url');

const stamp = Date.now().toString(36).slice(-6);
const alice = `alice_${stamp}`, bob = `bob_${stamp}`;
const aliceKey = derive(alice, 'correct horse battery');

console.log('the key');
ok('a derived key is 43 base64url characters', /^[A-Za-z0-9_-]{43}$/.test(aliceKey));
ok('it depends on the username', derive(bob, 'correct horse battery') !== aliceKey);

console.log('origin policy');
ok('no Origin header is refused', (await call('/auth/session', { origin: null })).status === 403);
ok('a strange Origin is refused', (await call('/auth/session', { origin: 'https://evil.example' })).status === 403);
ok('preflight answers 204', (await call('/auth/session', { method: 'OPTIONS' })).status === 204);

console.log('sign-up');
ok('a short username is refused', (await call('/auth/signup', { method: 'POST', body: { username: 'ab', email: 'a@example.com', key: aliceKey } })).status === 400);
ok('a username with spaces is refused', (await call('/auth/signup', { method: 'POST', body: { username: 'al ice', email: 'a@example.com', key: aliceKey } })).status === 400);
ok('a bad email is refused', (await call('/auth/signup', { method: 'POST', body: { username: alice, email: 'nope', key: aliceKey } })).status === 400);
ok('a raw password instead of a key is refused', (await call('/auth/signup', { method: 'POST', body: { username: alice, email: 'a@example.com', key: 'hunter2' } })).status === 400);
const up = await call('/auth/signup', { method: 'POST', body: { username: alice.toUpperCase(), email: 'Alice@Example.com', key: aliceKey, name: 'Alice' } });
ok('a good sign-up returns a session', up.status === 200 && typeof up.body.token === 'string', JSON.stringify(up.body));
ok('the username is stored lowercase', up.body.user?.username === alice);
ok('the email is stored lowercase', up.body.user?.email === 'alice@example.com');
ok('the same username is taken', (await call('/auth/signup', { method: 'POST', body: { username: alice, email: 'b@example.com', key: aliceKey } })).status === 409);
let aToken = up.body.token;

console.log('sign-in');
ok('the wrong password is refused', (await call('/auth/signin', { method: 'POST', body: { username: alice, key: derive(alice, 'wrong') } })).status === 401);
ok('an unknown username gets the same answer', (await call('/auth/signin', { method: 'POST', body: { username: `nobody_${stamp}`, key: aliceKey } })).status === 401);
const inn = await call('/auth/signin', { method: 'POST', body: { username: alice, key: aliceKey } });
ok('the right password signs in', inn.status === 200 && inn.body.user?.name === 'Alice', JSON.stringify(inn.body));
ok('the session is recognised', (await call('/auth/session', { token: inn.body.token })).body.user?.username === alice);
ok('a made-up token is not', (await call('/auth/session', { token: 'nonsense' })).body.signedIn === false);
ok('state needs a session', (await call('/state')).status === 401);

console.log('lockout');
const lockee = `lock_${stamp}`;
await call('/auth/signup', { method: 'POST', body: { username: lockee, email: 'l@example.com', key: derive(lockee, 'right') } });
for (let i = 0; i < 10; i++) await call('/auth/signin', { method: 'POST', body: { username: lockee, key: derive(lockee, 'x' + i) } });
ok('ten wrong passwords lock the account', (await call('/auth/signin', { method: 'POST', body: { username: lockee, key: derive(lockee, 'right') } })).status === 429);

console.log('rate limit');
const tries = [];
for (let i = 0; i < 22; i++) tries.push((await call('/auth/signin', { method: 'POST', ip: `limit-${stamp}`, body: { username: `nobody_${stamp}`, key: aliceKey } })).status);
ok('one address trying too fast is slowed down', tries.includes(429) && tries[0] !== 429, tries.join(','));

console.log('state sync and merge');
const DAY = 86400000, now = Date.now();
const first = {
  progress: { 'how-to-learn-anything': { '01-learning-is-not-performance': { done: true, score: 0.8, at: now - DAY } } },
  review: { 'how-to-learn-anything/01-learning-is-not-performance/0': { ease: 2.5, interval: 1, due: now + DAY, reps: 1, lapses: 0, last: true } },
  activity: { '2026-09-05': 3 },
  prefs: { hoursPerWeek: 8 }, name: 'Learner One',
};
const pushed = await call('/state', { method: 'PUT', token: aToken, body: first });
ok('a first push is accepted', pushed.status === 200, JSON.stringify(pushed.body).slice(0, 200));
const pulled = await call('/state', { token: aToken });
ok('progress comes back', pulled.body.state.progress['how-to-learn-anything']['01-learning-is-not-performance'].done === true);
ok('the review item comes back', pulled.body.state.review['how-to-learn-anything/01-learning-is-not-performance/0'].reps === 1);
ok('prefs come back', pulled.body.state.prefs.hoursPerWeek === 8);
ok('the name comes back', pulled.body.state.name === 'Learner One');

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
const merged = (await call('/state', { method: 'PUT', token: aToken, body: second })).body.state;
ok('a done lesson stays done', merged.progress['how-to-learn-anything']['01-learning-is-not-performance'].done === true);
ok('the higher score wins', merged.progress['how-to-learn-anything']['01-learning-is-not-performance'].score === 0.8);
ok('the other device adds its lesson', merged.progress['how-to-learn-anything']['02-how-memory-works'].done === true);
ok('the further-ahead review item wins', merged.review['how-to-learn-anything/01-learning-is-not-performance/0'].reps === 1);
ok('the larger day tally wins', merged.activity['2026-09-05'] === 3);
ok('a new day is added', merged.activity['2026-09-06'] === 5);
ok('this device sets the hours', merged.prefs.hoursPerWeek === 3);
ok('an empty name does not erase the name', merged.name === 'Learner One');
const again = await call('/state', { method: 'PUT', token: aToken, body: merged });
ok('pushing the same state again writes nothing', again.body.wrote === 0, `wrote ${again.body.wrote}`);

console.log('friends');
const bobUp = await call('/auth/signup', { method: 'POST', body: { username: bob, email: 'bob@example.com', key: derive(bob, 'bobs password'), name: 'Bob' } });
const bToken = bobUp.body.token;
ok('a stranger cannot see progress', (await call(`/friends/${alice}`, { token: bToken })).status === 404);
ok('an unknown username cannot be added', (await call('/friends/request', { method: 'POST', token: bToken, body: { username: `ghost_${stamp}` } })).status === 404);
ok('you cannot add yourself', (await call('/friends/request', { method: 'POST', token: bToken, body: { username: bob } })).status === 400);
ok('bob asks alice', (await call('/friends/request', { method: 'POST', token: bToken, body: { username: alice } })).body.status === 'requested');
let aList = (await call('/friends', { token: aToken })).body;
ok('alice sees the request', aList.incoming.some(r => r.username === bob && r.name === 'Bob'));
ok('bob sees it pending', (await call('/friends', { token: bToken })).body.outgoing.some(r => r.username === alice));
ok('still not friends: no progress', (await call(`/friends/${alice}`, { token: bToken })).status === 404);
ok('alice accepts', (await call('/friends/accept', { method: 'POST', token: aToken, body: { username: bob } })).body.status === 'friends');
const bList = (await call('/friends', { token: bToken })).body;
const aliceRow = bList.friends.find(f => f.username === alice);
ok('bob lists alice with her lesson count', aliceRow && aliceRow.lessonsDone === 2, JSON.stringify(aliceRow));
ok('and her latest lesson', aliceRow?.latest?.lesson === '02-how-memory-works');
ok('the request is gone', bList.outgoing.length === 0);
const detail = (await call(`/friends/${alice}`, { token: bToken })).body;
ok('bob sees what alice finished', detail.done?.['how-to-learn-anything']?.['02-how-memory-works'] > 0);
ok('but not her scores', !JSON.stringify(detail).includes('0.9'));

console.log('cheers');
ok('a cheer on an unfinished lesson is refused', (await call('/cheer', { method: 'POST', token: bToken, body: { username: alice, course: 'how-to-learn-anything', lesson: '03-nope' } })).status === 400);
ok('bob cheers a finished lesson', (await call('/cheer', { method: 'POST', token: bToken, body: { username: alice, course: 'how-to-learn-anything', lesson: '02-how-memory-works' } })).status === 200);
ok('cheering twice is harmless', (await call('/cheer', { method: 'POST', token: bToken, body: { username: alice, course: 'how-to-learn-anything', lesson: '02-how-memory-works' } })).status === 200);
aList = (await call('/friends', { token: aToken })).body;
ok('alice has one unseen cheer from bob', aList.cheers.length === 1 && aList.cheers[0].username === bob && !aList.cheers[0].seen);
ok('bob\'s page remembers he cheered', (await call(`/friends/${alice}`, { token: bToken })).body.cheered.includes('how-to-learn-anything/02-how-memory-works'));
await call('/cheers/seen', { method: 'POST', token: aToken });
ok('marking seen sticks', (await call('/friends', { token: aToken })).body.cheers[0].seen === true);
ok('bob\'s own list shows no cheers from himself', (await call('/friends', { token: bToken })).body.cheers.length === 0);

console.log('password changes');
ok('a change with the wrong current password fails', (await call('/auth/password', { method: 'POST', token: aToken, body: { oldKey: derive(alice, 'wrong'), newKey: derive(alice, 'new one') } })).status === 401);
const changed = await call('/auth/password', { method: 'POST', token: aToken, body: { oldKey: aliceKey, newKey: derive(alice, 'new one') } });
ok('a change with the right one works', changed.status === 200 && changed.body.token);
ok('it signs out the other sessions', (await call('/auth/session', { token: inn.body.token })).body.signedIn === false);
aToken = changed.body.token;
ok('the old password no longer works', (await call('/auth/signin', { method: 'POST', body: { username: alice, key: aliceKey } })).status === 401);
ok('the new one does', (await call('/auth/signin', { method: 'POST', body: { username: alice, key: derive(alice, 'new one') } })).status === 200);

console.log('reset codes');
const issued = JSON.parse(execFileSync('node', ['scripts/reset-code.mjs', alice, '--local', '--json'], { cwd: ROOT, encoding: 'utf8' }));
ok('the script finds the email on file', issued.email === 'alice@example.com');
ok('and issues a code', /^[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(issued.code), issued.code);
ok('a wrong code is refused', (await call('/auth/reset', { method: 'POST', body: { username: alice, code: 'AAAA-AAAA', key: derive(alice, 'reset') } })).status === 401);
const reset = await call('/auth/reset', { method: 'POST', body: { username: alice, code: issued.code.toLowerCase().replace('-', ' '), key: derive(alice, 'reset') } });
ok('the right code, however typed, resets', reset.status === 200 && reset.body.token, JSON.stringify(reset.body));
ok('it signs out every other session', (await call('/auth/session', { token: aToken })).body.signedIn === false);
ok('the code works once', (await call('/auth/reset', { method: 'POST', body: { username: alice, code: issued.code, key: derive(alice, 'again') } })).status === 401);
ok('the new password works', (await call('/auth/signin', { method: 'POST', body: { username: alice, key: derive(alice, 'reset') } })).status === 200);
aToken = reset.body.token;

console.log('removing and deleting');
ok('bob removes alice', (await call('/friends/remove', { method: 'POST', token: bToken, body: { username: alice } })).status === 200);
ok('and can no longer see her', (await call(`/friends/${alice}`, { token: bToken })).status === 404);
ok('she is gone from his list', (await call('/friends', { token: bToken })).body.friends.length === 0);
await call('/friends/request', { method: 'POST', token: aToken, body: { username: bob } });
ok('deleting alice succeeds', (await call('/account', { method: 'POST', token: aToken })).body.deleted === true);
ok('her request to bob went with her', (await call('/friends', { token: bToken })).body.incoming.length === 0);
ok('her username is free again', (await call('/auth/signin', { method: 'POST', body: { username: alice, key: derive(alice, 'reset') } })).status === 401);

console.log('signing out');
ok('sign-out succeeds', (await call('/auth/signout', { method: 'POST', token: bToken })).status === 200);
ok('the session is dead', (await call('/state', { token: bToken })).status === 401);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
