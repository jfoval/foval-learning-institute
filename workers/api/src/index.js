// Foval Learning Institute: accounts, learner state, friends.
//
// Sign in with a username and a password. The password never reaches this Worker: the
// browser stretches it with PBKDF2-SHA256 at 600,000 rounds, salted with the username,
// and sends the 32-byte result. The Worker stores a salted SHA-256 of that. A leaked
// users table still costs an attacker the full 600,000 rounds per guess, and the Worker
// spends microseconds of CPU rather than the 50 to 100 ms that server-side stretching
// would, which is what keeps this on the Workers Free plan's 10 ms. docs/AUTH_OPTIONS.md.
//
// No email is ever sent. The address a learner gives is kept on record; a forgotten
// password is a message to John, who runs `npm run reset-code <username>` and mails the
// one-time code to the address on file himself. workers/api/README.md, "Password resets".
//
// The session token is returned in the JSON body and sent back as `Authorization:
// Bearer`. It is not an HttpOnly cookie, because the site is served from a different
// origin than this Worker and third-party cookies are on their way out. When the site
// moves to Cloudflare Pages (docs/PLATFORM_ROADMAP.md, "Going private") and shares an
// origin with this Worker, switch to an HttpOnly, Secure, SameSite=Lax cookie and delete
// the bearer path.
//
// Bindings in wrangler.jsonc: DB, and two rate limiters, AUTH_LIMIT (per IP, never
// stored) and SOCIAL_LIMIT (per account). Either may be absent in a test, and then
// nothing is limited. Vars: ADMIN_USERNAMES, comma-separated, the accounts that may
// open #/admin.

const ALLOWED_ORIGINS = new Set([
  "https://www.fovallearninginstitute.org",
  "https://fovallearninginstitute.org",
  "https://jfoval.github.io",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
]);

const SESSION_DAYS = 60;
const LOCK_AFTER = 10;                    // wrong passwords in a row
const LOCK_MS = 15 * 60 * 1000;
const RESET_MAX_ATTEMPTS = 5;
const MAX_BODY = 512 * 1024;
const MAX_SYNC_ROWS = 5000;               // per state push, per table
const MAX_FRIENDS = 200;
const MAX_PENDING = 50;                   // outgoing requests not yet answered
const TRAFFIC_DAILY_CAP = 20000;          // page views counted per UTC day; see schema.sql
const RESET_TTL_MS = 48 * 3600 * 1000;

/* ---------- small helpers ---------- */

const enc = new TextEncoder();
const b64url = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const randomToken = (bytes = 32) => b64url(crypto.getRandomValues(new Uint8Array(bytes)));

async function sha256(text) {
  return b64url(await crypto.subtle.digest("SHA-256", enc.encode(text)));
}
// Comparison that does not leak where two strings first differ.
function timingSafeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function cors(origin) {
  const h = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) h["Access-Control-Allow-Origin"] = origin;
  return h;
}
const json = (body, status, origin) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...cors(origin) } });

const normEmail = e => String(e ?? "").trim().toLowerCase();
const validEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length <= 254;
const normUsername = u => String(u ?? "").trim().toLowerCase();
const validUsername = u => /^[a-z0-9_]{3,20}$/.test(u);
const validKey = k => typeof k === "string" && /^[A-Za-z0-9_-]{43}$/.test(k);   // 32 bytes, base64url
const num = (v, d = 0) => (Number.isFinite(Number(v)) ? Number(v) : d);
const clip = (v, n) => (typeof v === "string" ? v.slice(0, n).trim() : "");
const nowText = () => new Date().toISOString().replace("T", " ").slice(0, 19);

async function readJson(request) {
  if (Number(request.headers.get("Content-Length") || 0) > MAX_BODY) throw new Error("too large");
  return await request.json();
}

// True when the limiter says no. The IP is the key and is never written anywhere.
async function limited(binding, key) {
  if (!binding) return false;
  try { return !(await binding.limit({ key })).success; } catch { return false; }
}

/* ---------- passwords and sessions ---------- */

const hashKey = (salt, key) => sha256(`${salt}:${key}`);

async function newPassword(key) {
  const salt = randomToken(16);
  return { salt, hash: await hashKey(salt, key) };
}

async function createSession(env, userId) {
  const token = randomToken();
  const now = Date.now();
  await env.DB.prepare("INSERT INTO sessions (token_hash, user_id, created_at, expires_at, last_used_at) VALUES (?, ?, ?, ?, ?)")
    .bind(await sha256(token), userId, now, now + SESSION_DAYS * 86400000, now).run();
  return token;
}

// Returns { userId, username, email, name } or null. Touches last_used_at at most once a
// day, so a day of reading lessons costs one write rather than one per request.
async function authenticate(env, request) {
  const header = request.headers.get("Authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!token) return null;
  const hash = await sha256(token);
  const row = await env.DB.prepare(
    `SELECT s.user_id, s.expires_at, s.last_used_at, u.username, u.email, p.display_name
       FROM sessions s JOIN users u ON u.id = s.user_id LEFT JOIN profiles p ON p.user_id = s.user_id
      WHERE s.token_hash = ?`).bind(hash).first();
  if (!row) return null;
  const now = Date.now();
  if (row.expires_at <= now) {
    await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(hash).run();
    return null;
  }
  if (now - row.last_used_at > 86400000) {
    await env.DB.batch([
      env.DB.prepare("UPDATE sessions SET last_used_at = ? WHERE token_hash = ?").bind(now, hash),
      env.DB.prepare("UPDATE users SET last_seen_at = ? WHERE id = ?").bind(nowText(), row.user_id),
    ]);
  }
  return { userId: row.user_id, username: row.username, email: row.email, name: row.display_name || "" };
}

const publicUser = me => ({ username: me.username, email: me.email, name: me.name });

async function signUp(env, body, origin) {
  const username = normUsername(body.username);
  const email = normEmail(body.email);
  const name = clip(body.name, 120);
  if (!validUsername(username)) return json({ error: "A username is 3 to 20 letters, numbers or underscores." }, 400, origin);
  if (!validEmail(email)) return json({ error: "That does not look like an email address." }, 400, origin);
  if (!validKey(body.key)) return json({ error: "Something went wrong preparing your password. Reload and try again." }, 400, origin);

  const taken = await env.DB.prepare("SELECT 1 FROM users WHERE username = ?").bind(username).first();
  if (taken) return json({ error: "That username is taken." }, 409, origin);

  const userId = crypto.randomUUID();
  const pw = await newPassword(body.key);
  const now = nowText();
  try {
    await env.DB.batch([
      env.DB.prepare("INSERT INTO users (id, username, email, pw_salt, pw_hash, created_at, last_seen_at) VALUES (?, ?, ?, ?, ?, ?, ?)")
        .bind(userId, username, email, pw.salt, pw.hash, now, now),
      env.DB.prepare("INSERT OR IGNORE INTO profiles (user_id, display_name, updated_at) VALUES (?, ?, ?)")
        .bind(userId, name, Date.now()),
    ]);
  } catch (err) {
    // Two sign-ups racing for one name: the UNIQUE constraint settles it.
    if (/UNIQUE/i.test(String(err && err.message))) return json({ error: "That username is taken." }, 409, origin);
    throw err;
  }
  const token = await createSession(env, userId);
  return json({ ok: true, token, user: { username, email, name } }, 200, origin);
}

async function signIn(env, body, origin) {
  const username = normUsername(body.username);
  const bad = () => json({ error: "That username and password do not match." }, 401, origin);
  if (!validUsername(username) || !validKey(body.key)) return bad();

  const u = await env.DB.prepare("SELECT id, email, pw_salt, pw_hash, failed_logins, locked_until FROM users WHERE username = ?").bind(username).first();
  if (!u) return bad();
  const now = Date.now();
  if (u.locked_until > now) {
    return json({ error: "Too many wrong passwords. Try again in fifteen minutes." }, 429, origin);
  }
  if (!timingSafeEqual(u.pw_hash, await hashKey(u.pw_salt, body.key))) {
    const failed = u.failed_logins + 1;
    await env.DB.prepare("UPDATE users SET failed_logins = ?, locked_until = ? WHERE id = ?")
      .bind(failed >= LOCK_AFTER ? 0 : failed, failed >= LOCK_AFTER ? now + LOCK_MS : 0, u.id).run();
    return bad();
  }
  if (u.failed_logins) await env.DB.prepare("UPDATE users SET failed_logins = 0 WHERE id = ?").bind(u.id).run();
  const token = await createSession(env, u.id);
  const p = await env.DB.prepare("SELECT display_name FROM profiles WHERE user_id = ?").bind(u.id).first();
  return json({ ok: true, token, user: { username, email: u.email, name: p?.display_name || "" } }, 200, origin);
}

// A reset code from John. It replaces the password, signs out every device, and signs
// this one in.
async function resetWithCode(env, body, origin) {
  const username = normUsername(body.username);
  const code = String(body.code ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  const bad = () => json({ error: "That code is wrong or has expired. Ask John for a new one." }, 401, origin);
  if (!validUsername(username) || !code || !validKey(body.key)) return bad();

  const row = await env.DB.prepare(
    "SELECT r.user_id, r.code_hash, r.expires_at, r.attempts FROM reset_codes r JOIN users u ON u.id = r.user_id WHERE u.username = ?")
    .bind(username).first();
  if (!row || row.expires_at <= Date.now()) return bad();
  if (row.attempts >= RESET_MAX_ATTEMPTS) {
    await env.DB.prepare("DELETE FROM reset_codes WHERE user_id = ?").bind(row.user_id).run();
    return bad();
  }
  if (!timingSafeEqual(row.code_hash, await sha256(code))) {
    await env.DB.prepare("UPDATE reset_codes SET attempts = attempts + 1 WHERE user_id = ?").bind(row.user_id).run();
    return bad();
  }
  const pw = await newPassword(body.key);
  await env.DB.batch([
    env.DB.prepare("UPDATE users SET pw_salt = ?, pw_hash = ?, failed_logins = 0, locked_until = 0 WHERE id = ?").bind(pw.salt, pw.hash, row.user_id),
    env.DB.prepare("DELETE FROM reset_codes WHERE user_id = ?").bind(row.user_id),
    env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(row.user_id),
  ]);
  const token = await createSession(env, row.user_id);
  return json({ ok: true, token }, 200, origin);
}

async function changePassword(env, me, body, origin) {
  if (!validKey(body.oldKey) || !validKey(body.newKey)) return json({ error: "Fill in both passwords." }, 400, origin);
  const u = await env.DB.prepare("SELECT pw_salt, pw_hash FROM users WHERE id = ?").bind(me.userId).first();
  if (!u || !timingSafeEqual(u.pw_hash, await hashKey(u.pw_salt, body.oldKey))) {
    return json({ error: "Your current password is not right." }, 401, origin);
  }
  const pw = await newPassword(body.newKey);
  await env.DB.batch([
    env.DB.prepare("UPDATE users SET pw_salt = ?, pw_hash = ? WHERE id = ?").bind(pw.salt, pw.hash, me.userId),
    env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(me.userId),
  ]);
  // Every other device is signed out; this one gets a fresh session.
  const token = await createSession(env, me.userId);
  return json({ ok: true, token }, 200, origin);
}

async function changeEmail(env, me, body, origin) {
  const email = normEmail(body.email);
  if (!validEmail(email)) return json({ error: "That does not look like an email address." }, 400, origin);
  await env.DB.prepare("UPDATE users SET email = ? WHERE id = ?").bind(email, me.userId).run();
  return json({ ok: true, user: { ...publicUser(me), email } }, 200, origin);
}

/* ---------- friends and cheers ---------- */

const findUser = (env, username) =>
  env.DB.prepare("SELECT u.id, u.username, p.display_name AS name FROM users u LEFT JOIN profiles p ON p.user_id = u.id WHERE u.username = ?")
    .bind(normUsername(username)).first();
const areFriends = async (env, a, b) =>
  Boolean(await env.DB.prepare("SELECT 1 FROM friends WHERE user_id = ? AND friend_id = ?").bind(a, b).first());

async function befriend(env, a, b) {
  const now = Date.now();
  await env.DB.batch([
    env.DB.prepare("INSERT OR IGNORE INTO friends (user_id, friend_id, since) VALUES (?, ?, ?)").bind(a, b, now),
    env.DB.prepare("INSERT OR IGNORE INTO friends (user_id, friend_id, since) VALUES (?, ?, ?)").bind(b, a, now),
    env.DB.prepare("DELETE FROM friend_requests WHERE (from_id = ? AND to_id = ?) OR (from_id = ? AND to_id = ?)").bind(a, b, b, a),
  ]);
}

// Everything the Friends page needs in one call: friends with a one-line summary each,
// requests both ways, and the cheers this learner has been sent.
async function listFriends(env, me) {
  const [friends, recent, incoming, outgoing, cheers] = await Promise.all([
    env.DB.prepare(
      `SELECT u.username, p.display_name AS name, f.since,
              (SELECT COUNT(*) FROM lesson_progress lp WHERE lp.user_id = u.id AND lp.done = 1) AS lessons_done,
              (SELECT MAX(day) FROM study_sessions s WHERE s.user_id = u.id) AS last_day
         FROM friends f JOIN users u ON u.id = f.friend_id LEFT JOIN profiles p ON p.user_id = u.id
        WHERE f.user_id = ? ORDER BY last_day DESC, u.username`).bind(me.userId).all(),
    env.DB.prepare(
      `SELECT u.username, lp.course, lp.lesson, lp.at
         FROM friends f JOIN users u ON u.id = f.friend_id JOIN lesson_progress lp ON lp.user_id = u.id
        WHERE f.user_id = ? AND lp.done = 1
          AND lp.at = (SELECT MAX(at) FROM lesson_progress x WHERE x.user_id = u.id AND x.done = 1)`).bind(me.userId).all(),
    env.DB.prepare(
      `SELECT u.username, p.display_name AS name, r.at FROM friend_requests r JOIN users u ON u.id = r.from_id
         LEFT JOIN profiles p ON p.user_id = u.id WHERE r.to_id = ? ORDER BY r.at DESC`).bind(me.userId).all(),
    env.DB.prepare(
      `SELECT u.username, r.at FROM friend_requests r JOIN users u ON u.id = r.to_id WHERE r.from_id = ? ORDER BY r.at DESC`).bind(me.userId).all(),
    env.DB.prepare(
      `SELECT u.username, p.display_name AS name, c.course, c.lesson, c.at, c.seen FROM cheers c JOIN users u ON u.id = c.from_id
         LEFT JOIN profiles p ON p.user_id = u.id WHERE c.to_id = ? ORDER BY c.at DESC LIMIT 50`).bind(me.userId).all(),
  ]);
  const latest = {};
  for (const r of recent.results) latest[r.username] = { course: r.course, lesson: r.lesson, at: r.at };
  return {
    friends: friends.results.map(f => ({
      username: f.username, name: f.name || "", since: f.since,
      lessonsDone: f.lessons_done, lastDay: f.last_day || null, latest: latest[f.username] || null,
    })),
    incoming: incoming.results.map(r => ({ username: r.username, name: r.name || "", at: r.at })),
    outgoing: outgoing.results.map(r => ({ username: r.username, at: r.at })),
    cheers: cheers.results.map(c => ({ username: c.username, name: c.name || "", course: c.course, lesson: c.lesson, at: c.at, seen: !!c.seen })),
  };
}

// A friend's page: the lessons they have finished and when, and the days they studied.
// Scores and the review bank stay private even from friends.
async function friendDetail(env, me, username, origin) {
  const them = await findUser(env, username);
  if (!them || !(await areFriends(env, me.userId, them.id))) return json({ error: "You can only see the progress of your friends." }, 404, origin);
  const since = new Date(Date.now() - 120 * 86400000).toISOString().slice(0, 10);
  const [progress, days, mine] = await Promise.all([
    env.DB.prepare("SELECT course, lesson, at FROM lesson_progress WHERE user_id = ? AND done = 1").bind(them.id).all(),
    env.DB.prepare("SELECT day FROM study_sessions WHERE user_id = ? AND day >= ? AND count > 0").bind(them.id, since).all(),
    env.DB.prepare("SELECT course, lesson FROM cheers WHERE from_id = ? AND to_id = ?").bind(me.userId, them.id).all(),
  ]);
  const done = {};
  for (const r of progress.results) (done[r.course] ||= {})[r.lesson] = r.at;
  return json({
    ok: true, username: them.username, name: them.name || "", done,
    days: days.results.map(r => r.day), cheered: mine.results.map(r => `${r.course}/${r.lesson}`),
  }, 200, origin);
}

async function social(env, me, path, body, origin) {
  if (path === "/cheers/seen") {
    await env.DB.prepare("UPDATE cheers SET seen = 1 WHERE to_id = ? AND seen = 0").bind(me.userId).run();
    return json({ ok: true }, 200, origin);
  }

  const them = await findUser(env, body.username);
  if (!them) return json({ error: "No one has that username. Check the spelling with your friend." }, 404, origin);
  if (them.id === me.userId) return json({ error: "That is you." }, 400, origin);
  const friends = await areFriends(env, me.userId, them.id);

  if (path === "/friends/request") {
    if (friends) return json({ ok: true, status: "friends" }, 200, origin);
    const theyAsked = await env.DB.prepare("SELECT 1 FROM friend_requests WHERE from_id = ? AND to_id = ?").bind(them.id, me.userId).first();
    if (theyAsked) { await befriend(env, me.userId, them.id); return json({ ok: true, status: "friends" }, 200, origin); }
    const counts = await env.DB.prepare(
      "SELECT (SELECT COUNT(*) FROM friends WHERE user_id = ?) AS f, (SELECT COUNT(*) FROM friend_requests WHERE from_id = ?) AS r")
      .bind(me.userId, me.userId).first();
    if (counts.f >= MAX_FRIENDS) return json({ error: `You have ${MAX_FRIENDS} friends, which is the most an account can have.` }, 400, origin);
    if (counts.r >= MAX_PENDING) return json({ error: "You have a lot of requests nobody has answered yet. Cancel some first." }, 400, origin);
    await env.DB.prepare("INSERT OR IGNORE INTO friend_requests (from_id, to_id, at) VALUES (?, ?, ?)").bind(me.userId, them.id, Date.now()).run();
    return json({ ok: true, status: "requested" }, 200, origin);
  }
  if (path === "/friends/accept") {
    const asked = await env.DB.prepare("SELECT 1 FROM friend_requests WHERE from_id = ? AND to_id = ?").bind(them.id, me.userId).first();
    if (!asked && !friends) return json({ error: "That request is no longer there." }, 404, origin);
    await befriend(env, me.userId, them.id);
    return json({ ok: true, status: "friends" }, 200, origin);
  }
  if (path === "/friends/remove") {
    // Declines their request, cancels mine, or ends a friendship: whichever applies.
    await env.DB.batch([
      env.DB.prepare("DELETE FROM friends WHERE (user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)").bind(me.userId, them.id, them.id, me.userId),
      env.DB.prepare("DELETE FROM friend_requests WHERE (from_id = ? AND to_id = ?) OR (from_id = ? AND to_id = ?)").bind(me.userId, them.id, them.id, me.userId),
    ]);
    return json({ ok: true, status: "none" }, 200, origin);
  }
  if (path === "/cheer") {
    const course = clip(body.course, 128), lesson = clip(body.lesson, 128);
    if (!friends) return json({ error: "You can only cheer a friend." }, 403, origin);
    const done = await env.DB.prepare("SELECT 1 FROM lesson_progress WHERE user_id = ? AND course = ? AND lesson = ? AND done = 1")
      .bind(them.id, course, lesson).first();
    if (!done) return json({ error: "They have not finished that one yet." }, 400, origin);
    await env.DB.prepare("INSERT OR IGNORE INTO cheers (from_id, to_id, course, lesson, at) VALUES (?, ?, ?, ?, ?)")
      .bind(me.userId, them.id, course, lesson, Date.now()).run();
    return json({ ok: true }, 200, origin);
  }
  return json({ error: "No such endpoint." }, 404, origin);
}

/* ---------- learner state ---------- */

async function getState(env, me) {
  const [progress, review, activity, profile] = await Promise.all([
    env.DB.prepare("SELECT course, lesson, done, score, at FROM lesson_progress WHERE user_id = ?").bind(me.userId).all(),
    env.DB.prepare("SELECT item_key, ease, interval, due, reps, lapses, last FROM review_items WHERE user_id = ?").bind(me.userId).all(),
    env.DB.prepare("SELECT day, count FROM study_sessions WHERE user_id = ?").bind(me.userId).all(),
    env.DB.prepare("SELECT display_name, hours_per_week FROM profiles WHERE user_id = ?").bind(me.userId).first(),
  ]);
  const out = { progress: {}, review: {}, activity: {}, prefs: { hoursPerWeek: profile?.hours_per_week ?? 5 }, name: profile?.display_name || "" };
  for (const r of progress.results) {
    (out.progress[r.course] ||= {})[r.lesson] = { done: !!r.done, score: r.score ?? undefined, at: r.at };
  }
  for (const r of review.results) {
    out.review[r.item_key] = { ease: r.ease, interval: r.interval, due: r.due, reps: r.reps, lapses: r.lapses, last: r.last === null ? null : !!r.last };
  }
  for (const r of activity.results) out.activity[r.day] = r.count;
  return out;
}

// Merge rules, the same on the server as in the browser: a lesson stays done once it is
// done, the higher score wins, a review item keeps the later due date and the higher rep
// count, and the day counter keeps the larger tally. Nothing here can lose progress.
function mergeState(server, client) {
  const out = { progress: {}, review: {}, activity: {}, prefs: {}, name: "" };

  for (const src of [server.progress || {}, client.progress || {}]) {
    for (const [course, lessons] of Object.entries(src)) {
      for (const [lesson, s] of Object.entries(lessons || {})) {
        const cur = (out.progress[course] ||= {})[lesson] || {};
        out.progress[course][lesson] = {
          done: Boolean(cur.done || s.done),
          score: Math.max(num(cur.score, -1), num(s.score, -1)) < 0 ? undefined : Math.max(num(cur.score, -1), num(s.score, -1)),
          at: Math.max(num(cur.at), num(s.at)),
        };
      }
    }
  }
  for (const src of [server.review || {}, client.review || {}]) {
    for (const [key, s] of Object.entries(src)) {
      const cur = out.review[key];
      if (!cur || num(s.reps) > num(cur.reps) || (num(s.reps) === num(cur.reps) && num(s.due) > num(cur.due))) {
        out.review[key] = {
          ease: num(s.ease, 2.5), interval: num(s.interval, 1), due: num(s.due, Date.now()),
          reps: num(s.reps), lapses: Math.max(num(cur?.lapses), num(s.lapses)),
          last: s.last === null || s.last === undefined ? null : Boolean(s.last),
        };
      }
    }
  }
  for (const src of [server.activity || {}, client.activity || {}]) {
    for (const [day, n] of Object.entries(src)) out.activity[day] = Math.max(num(out.activity[day]), num(n));
  }
  out.prefs.hoursPerWeek = num(client.prefs?.hoursPerWeek, num(server.prefs?.hoursPerWeek, 5));
  out.name = clip(client.name, 120) || clip(server.name, 120) || "";
  return out;
}

function countRows(state) {
  const lessons = Object.values(state.progress || {}).reduce((n, c) => n + Object.keys(c || {}).length, 0);
  return { lessons, review: Object.keys(state.review || {}).length, days: Object.keys(state.activity || {}).length };
}

async function putState(env, me, client, origin) {
  const server = await getState(env, me);
  const merged = mergeState(server, client);
  const size = countRows(merged);
  if (size.lessons > MAX_SYNC_ROWS || size.review > MAX_SYNC_ROWS || size.days > MAX_SYNC_ROWS) {
    return json({ error: "That is more progress than a person can have. Nothing was saved." }, 413, origin);
  }

  const stmts = [];
  if (merged.name !== server.name || merged.prefs.hoursPerWeek !== server.prefs.hoursPerWeek) {
    stmts.push(env.DB.prepare("INSERT INTO profiles (user_id, display_name, hours_per_week, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET display_name = excluded.display_name, hours_per_week = excluded.hours_per_week, updated_at = excluded.updated_at")
      .bind(me.userId, merged.name, merged.prefs.hoursPerWeek, Date.now()));
  }
  for (const [course, lessons] of Object.entries(merged.progress)) {
    for (const [lesson, s] of Object.entries(lessons)) {
      // Only write rows the server does not already agree with.
      const was = server.progress?.[course]?.[lesson];
      if (was && was.done === s.done && num(was.score, -1) === num(s.score, -1) && num(was.at) === num(s.at)) continue;
      stmts.push(env.DB.prepare("INSERT INTO lesson_progress (user_id, course, lesson, done, score, at) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(user_id, course, lesson) DO UPDATE SET done = excluded.done, score = excluded.score, at = excluded.at")
        .bind(me.userId, clip(course, 128), clip(lesson, 128), s.done ? 1 : 0, s.score ?? null, num(s.at)));
    }
  }
  for (const [key, s] of Object.entries(merged.review)) {
    const was = server.review?.[key];
    if (was && was.due === s.due && was.reps === s.reps && was.last === s.last && was.ease === s.ease) continue;
    stmts.push(env.DB.prepare("INSERT INTO review_items (user_id, item_key, ease, interval, due, reps, lapses, last) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(user_id, item_key) DO UPDATE SET ease = excluded.ease, interval = excluded.interval, due = excluded.due, reps = excluded.reps, lapses = excluded.lapses, last = excluded.last")
      .bind(me.userId, clip(key, 256), s.ease, s.interval, s.due, s.reps, s.lapses, s.last === null ? null : (s.last ? 1 : 0)));
  }
  for (const [day, n] of Object.entries(merged.activity)) {
    if (num(server.activity?.[day]) === num(n)) continue;
    stmts.push(env.DB.prepare("INSERT INTO study_sessions (user_id, day, count) VALUES (?, ?, ?) ON CONFLICT(user_id, day) DO UPDATE SET count = MAX(study_sessions.count, excluded.count)")
      .bind(me.userId, clip(day, 10), num(n)));
  }

  // D1 batches run in one transaction, so a half-written sync is not possible.
  for (let i = 0; i < stmts.length; i += 50) await env.DB.batch(stmts.slice(i, i + 50));

  return json({ ok: true, state: merged, wrote: stmts.length }, 200, origin);
}

/* ---------- help requests and page views ---------- */

const TICKET_KINDS = new Set(["reset", "report", "question", "other"]);

async function createTicket(env, me, body, origin) {
  const kind = TICKET_KINDS.has(body.kind) ? body.kind : "other";
  const email = normEmail(body.email || me?.email);
  const username = me?.username || normUsername(body.username).slice(0, 20);
  const message = clip(body.message, 4000);
  if (!validEmail(email)) return json({ error: "Give an email address so John can answer." }, 400, origin);
  if (kind !== "reset" && !message) return json({ error: "Say what you need." }, 400, origin);
  await env.DB.prepare("INSERT INTO tickets (at, kind, username, email, message) VALUES (?, ?, ?, ?, ?)")
    .bind(Date.now(), kind, username, email, message).run();
  return json({ ok: true }, 200, origin);
}

// The route as the app sees it, with anything personal taken out. Unknown shapes are
// counted as "(other)" rather than stored as sent.
function normPath(raw) {
  let p = String(raw ?? "").split("?")[0].slice(0, 160);
  if (!/^\/[a-z0-9/_-]*$/i.test(p)) return "(other)";
  p = p.replace(/^\/friends\/[^/]+$/, "/friends/:user");
  if (p.startsWith("/admin")) return null;       // John's own page views are not traffic
  return p;
}

async function countHit(env, body, origin) {
  const path = normPath(body.path);
  if (path === null) return json({ ok: true }, 200, origin);
  const day = new Date().toISOString().slice(0, 10);
  const total = await env.DB.prepare("SELECT COALESCE(SUM(views), 0) AS n FROM traffic WHERE day = ?").bind(day).first();
  if (total.n >= TRAFFIC_DAILY_CAP) return json({ ok: true, capped: true }, 200, origin);
  await env.DB.prepare(
    `INSERT INTO traffic (day, path, views, visits) VALUES (?, ?, 1, ?)
     ON CONFLICT(day, path) DO UPDATE SET views = views + 1, visits = visits + excluded.visits`)
    .bind(day, path, body.visit ? 1 : 0).run();
  return json({ ok: true }, 200, origin);
}

/* ---------- admin ---------- */

const isAdmin = (env, me) => Boolean(me) &&
  String(env.ADMIN_USERNAMES || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean).includes(me.username);

// The same code scripts/reset-code.mjs writes: eight characters with no 0/O or 1/I/L.
async function issueResetCode(env, userId) {
  const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const raw = Array.from(crypto.getRandomValues(new Uint8Array(8)), b => ALPHABET[b % ALPHABET.length]).join("");
  await env.DB.prepare(
    `INSERT INTO reset_codes (user_id, code_hash, expires_at, attempts) VALUES (?, ?, ?, 0)
     ON CONFLICT(user_id) DO UPDATE SET code_hash = excluded.code_hash, expires_at = excluded.expires_at, attempts = 0`)
    .bind(userId, await sha256(raw), Date.now() + RESET_TTL_MS).run();
  return `${raw.slice(0, 4)}-${raw.slice(4)}`;
}

async function admin(env, path, request, url, origin) {
  const day = n => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);

  if (path === "/admin/summary") {
    const [counts, daily, top, signups] = await Promise.all([
      env.DB.prepare(`SELECT
          (SELECT COUNT(*) FROM users) AS users,
          (SELECT COUNT(*) FROM users WHERE created_at >= datetime('now', '-7 days')) AS users_7d,
          (SELECT COUNT(*) FROM users WHERE last_seen_at >= datetime('now', '-7 days')) AS active_7d,
          (SELECT COUNT(*) FROM friends) / 2 AS friendships,
          (SELECT COUNT(*) FROM cheers) AS cheers,
          (SELECT COUNT(*) FROM lesson_progress WHERE done = 1) AS lessons_done,
          (SELECT COUNT(*) FROM tickets WHERE status = 'open') AS open_tickets,
          (SELECT COUNT(*) FROM feedback) AS feedback,
          (SELECT COUNT(*) FROM feedback WHERE triaged = 0) AS feedback_new`).first(),
      env.DB.prepare("SELECT day, SUM(views) AS views, SUM(visits) AS visits FROM traffic WHERE day >= ? GROUP BY day ORDER BY day").bind(day(29)).all(),
      env.DB.prepare("SELECT path, SUM(views) AS views FROM traffic WHERE day >= ? GROUP BY path ORDER BY views DESC LIMIT 15").bind(day(6)).all(),
      env.DB.prepare("SELECT substr(created_at, 1, 10) AS day, COUNT(*) AS n FROM users WHERE created_at >= ? GROUP BY day ORDER BY day").bind(day(29)).all(),
    ]);
    return json({ ok: true, counts, daily: daily.results, top: top.results, signups: signups.results, cap: TRAFFIC_DAILY_CAP }, 200, origin);
  }
  if (path === "/admin/users") {
    const rows = await env.DB.prepare(
      `SELECT u.username, u.email, p.display_name AS name, u.created_at, u.last_seen_at,
              (SELECT COUNT(*) FROM lesson_progress lp WHERE lp.user_id = u.id AND lp.done = 1) AS lessons_done,
              (SELECT COUNT(*) FROM friends f WHERE f.user_id = u.id) AS friends
         FROM users u LEFT JOIN profiles p ON p.user_id = u.id ORDER BY u.created_at DESC`).all();
    return json({ ok: true, users: rows.results }, 200, origin);
  }
  if (path === "/admin/tickets") {
    const status = url.searchParams.get("status") === "closed" ? "closed" : "open";
    const rows = await env.DB.prepare(
      `SELECT t.*, u.email AS email_on_file FROM tickets t LEFT JOIN users u ON u.username = t.username
        WHERE t.status = ? ORDER BY t.at DESC LIMIT 200`).bind(status).all();
    return json({ ok: true, tickets: rows.results }, 200, origin);
  }
  if (path === "/admin/feedback") {
    const rows = await env.DB.prepare("SELECT * FROM feedback ORDER BY id DESC LIMIT 100").all();
    return json({ ok: true, feedback: rows.results }, 200, origin);
  }
  if (request.method !== "POST") return json({ error: "No such endpoint." }, 404, origin);
  const body = await readJson(request);
  if (path === "/admin/ticket") {
    const status = body.status === "closed" ? "closed" : "open";
    await env.DB.prepare("UPDATE tickets SET status = ?, note = ?, closed_at = ? WHERE id = ?")
      .bind(status, clip(body.note, 4000), status === "closed" ? Date.now() : null, num(body.id)).run();
    return json({ ok: true }, 200, origin);
  }
  if (path === "/admin/reset-code") {
    const u = await env.DB.prepare("SELECT id, username, email FROM users WHERE username = ?").bind(normUsername(body.username)).first();
    if (!u) return json({ error: "No account has that username." }, 404, origin);
    return json({ ok: true, username: u.username, email: u.email, code: await issueResetCode(env, u.id) }, 200, origin);
  }
  return json({ error: "No such endpoint." }, 404, origin);
}

/* ---------- router ---------- */

const ACCOUNT_TABLES_BY_USER = ["review_items", "lesson_progress", "study_sessions", "profiles", "sessions", "reset_codes"];

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
    if (!origin || !ALLOWED_ORIGINS.has(origin)) return json({ error: "Origin not allowed." }, 403, origin);

    try {
      if (request.method === "POST" && (path === "/auth/signup" || path === "/auth/signin" || path === "/auth/reset")) {
        if (await limited(env.AUTH_LIMIT, request.headers.get("CF-Connecting-IP") || "local")) {
          return json({ error: "Too many tries from here. Wait a minute and try again." }, 429, origin);
        }
        const body = await readJson(request);
        if (path === "/auth/signup") return await signUp(env, body, origin);
        if (path === "/auth/signin") return await signIn(env, body, origin);
        return await resetWithCode(env, body, origin);
      }

      if (path === "/hit" && request.method === "POST") {
        if (await limited(env.SOCIAL_LIMIT, `hit:${request.headers.get("CF-Connecting-IP") || "local"}`)) return json({ ok: true }, 200, origin);
        return await countHit(env, await readJson(request), origin);
      }

      const me = await authenticate(env, request);

      if (path === "/ticket" && request.method === "POST") {
        if (await limited(env.AUTH_LIMIT, request.headers.get("CF-Connecting-IP") || "local")) {
          return json({ error: "Too many tries from here. Wait a minute and try again." }, 429, origin);
        }
        return await createTicket(env, me, await readJson(request), origin);
      }
      if (path === "/auth/session" && request.method === "GET") {
        return me ? json({ signedIn: true, user: { ...publicUser(me), admin: isAdmin(env, me) } }, 200, origin) : json({ signedIn: false }, 200, origin);
      }
      if (path === "/auth/signout" && request.method === "POST") {
        const header = request.headers.get("Authorization") || "";
        if (header.startsWith("Bearer ")) {
          await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256(header.slice(7).trim())).run();
        }
        return json({ ok: true }, 200, origin);
      }

      if (!me) return json({ error: "Sign in first." }, 401, origin);
      if (path === "/state" && request.method === "GET") return json({ ok: true, state: await getState(env, me) }, 200, origin);
      if (path === "/state" && request.method === "PUT") return await putState(env, me, await readJson(request), origin);
      if (path === "/auth/password" && request.method === "POST") return await changePassword(env, me, await readJson(request), origin);
      if (path === "/account/email" && request.method === "POST") return await changeEmail(env, me, await readJson(request), origin);

      if (path.startsWith("/admin/")) {
        return isAdmin(env, me) ? await admin(env, path, request, url, origin) : json({ error: "No such endpoint." }, 404, origin);
      }
      if (path === "/friends" && request.method === "GET") return json({ ok: true, ...(await listFriends(env, me)) }, 200, origin);
      if (path.startsWith("/friends/") && request.method === "GET") {
        return await friendDetail(env, me, decodeURIComponent(path.slice("/friends/".length)), origin);
      }
      if (request.method === "POST" && ["/friends/request", "/friends/accept", "/friends/remove", "/cheer", "/cheers/seen"].includes(path)) {
        if (await limited(env.SOCIAL_LIMIT, me.userId)) return json({ error: "Slow down a little and try again in a minute." }, 429, origin);
        return await social(env, me, path, path === "/cheers/seen" ? {} : await readJson(request), origin);
      }

      if (path === "/account" && request.method === "POST") {
        // Sign out everywhere and delete everything. Value 1: no lock on the door,
        // and no lock on the way out either.
        // Explicit rather than relying on ON DELETE CASCADE being switched on.
        const id = me.userId;
        await env.DB.batch([
          ...ACCOUNT_TABLES_BY_USER.map(t => env.DB.prepare(`DELETE FROM ${t} WHERE user_id = ?`).bind(id)),
          env.DB.prepare("DELETE FROM friends WHERE user_id = ? OR friend_id = ?").bind(id, id),
          env.DB.prepare("DELETE FROM friend_requests WHERE from_id = ? OR to_id = ?").bind(id, id),
          env.DB.prepare("DELETE FROM cheers WHERE from_id = ? OR to_id = ?").bind(id, id),
          // Help requests carry the email too, and "every row" has to mean it.
          env.DB.prepare("DELETE FROM tickets WHERE username = ?").bind(me.username),
          env.DB.prepare("DELETE FROM users WHERE id = ?").bind(id),
        ]);
        return json({ ok: true, deleted: true }, 200, origin);
      }
      return json({ error: "No such endpoint." }, 404, origin);
    } catch (err) {
      const message = String(err && err.message || err);
      if (message === "too large") return json({ error: "Body too large." }, 413, origin);
      if (err instanceof SyntaxError) return json({ error: "That request was not valid JSON." }, 400, origin);
      console.error(path, message);
      return json({ error: "Something broke on our side." }, 500, origin);
    }
  },
};
