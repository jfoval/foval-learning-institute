// Foval Learning Institute: accounts and learner state.
//
// Sign in with Google, or with a six-digit code mailed to an address. No passwords:
// hashing one costs 50 to 100 ms of CPU and the Workers Free plan allows 10 ms, so
// passwords are the one sign-in method that would put this on a paid plan. See
// docs/AUTH_OPTIONS.md for the whole argument.
//
// The session token is returned in the JSON body and sent back as `Authorization:
// Bearer`. It is not an HttpOnly cookie, because the site is served from a different
// origin than this Worker and third-party cookies are on their way out. When the site
// moves to Cloudflare Pages (docs/PLATFORM_ROADMAP.md, "Going private") and shares an
// origin with this Worker, switch
// to an HttpOnly, Secure, SameSite=Lax cookie and delete the bearer path.
//
// Secrets, set with `wrangler secret put`:
//   AUTH_SECRET           random 32+ bytes, HMAC key for sign-in codes and OAuth state
//   GOOGLE_CLIENT_ID      OAuth client, web application
//   GOOGLE_CLIENT_SECRET
//   RESEND_API_KEY        for the sign-in code emails
// Vars in wrangler.jsonc: SITE_ORIGIN, MAIL_FROM.

const ALLOWED_ORIGINS = new Set([
  "https://www.fovallearninginstitute.org",
  "https://fovallearninginstitute.org",
  "https://jfoval.github.io",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
]);

const SESSION_DAYS = 60;
const CODE_TTL_MS = 10 * 60 * 1000;
const CODE_MAX_ATTEMPTS = 5;
const CODE_MAX_PER_HOUR = 5;
const STATE_TTL_MS = 10 * 60 * 1000;      // Google round trip
const MAX_BODY = 512 * 1024;
const MAX_SYNC_ROWS = 5000;               // per state push, per table

/* ---------- small helpers ---------- */

const enc = new TextEncoder();
const b64url = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const randomToken = (bytes = 32) => b64url(crypto.getRandomValues(new Uint8Array(bytes)));

async function sha256(text) {
  return b64url(await crypto.subtle.digest("SHA-256", enc.encode(text)));
}
async function hmac(secret, text) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64url(await crypto.subtle.sign("HMAC", key, enc.encode(text)));
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
const num = (v, d = 0) => (Number.isFinite(Number(v)) ? Number(v) : d);
const clip = (v, n) => (typeof v === "string" ? v.slice(0, n).trim() : "");

async function readJson(request) {
  if (Number(request.headers.get("Content-Length") || 0) > MAX_BODY) throw new Error("too large");
  return await request.json();
}

/* ---------- users and sessions ---------- */

async function findOrCreateUser(env, { email, name, provider, providerUserId, verified }) {
  const existing = await env.DB.prepare("SELECT id, name FROM users WHERE email = ?").bind(email).first();
  let userId = existing?.id;
  const now = new Date().toISOString().replace("T", " ").slice(0, 19);

  if (!userId) {
    userId = crypto.randomUUID();
    await env.DB.batch([
      env.DB.prepare("INSERT INTO users (id, email, email_verified, name, created_at, last_seen_at) VALUES (?, ?, ?, ?, ?, ?)")
        .bind(userId, email, verified ? 1 : 0, clip(name, 120), now, now),
      env.DB.prepare("INSERT OR IGNORE INTO profiles (user_id, display_name, updated_at) VALUES (?, ?, ?)")
        .bind(userId, clip(name, 120), Date.now()),
    ]);
  } else {
    await env.DB.prepare("UPDATE users SET last_seen_at = ?, email_verified = MAX(email_verified, ?), name = CASE WHEN name = '' THEN ? ELSE name END WHERE id = ?")
      .bind(now, verified ? 1 : 0, clip(name, 120), userId).run();
  }
  await env.DB.prepare("INSERT OR IGNORE INTO identities (provider, provider_user_id, user_id) VALUES (?, ?, ?)")
    .bind(provider, providerUserId, userId).run();
  return userId;
}

async function createSession(env, userId) {
  const token = randomToken();
  const now = Date.now();
  await env.DB.prepare("INSERT INTO sessions (token_hash, user_id, created_at, expires_at, last_used_at) VALUES (?, ?, ?, ?, ?)")
    .bind(await sha256(token), userId, now, now + SESSION_DAYS * 86400000, now).run();
  return token;
}

// Returns { userId, email, name } or null. Touches last_used_at at most once a day, so a
// day of reading lessons costs one write rather than one per request.
async function authenticate(env, request) {
  const header = request.headers.get("Authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!token) return null;
  const hash = await sha256(token);
  const row = await env.DB.prepare(
    `SELECT s.user_id, s.expires_at, s.last_used_at, u.email, u.name
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = ?`).bind(hash).first();
  if (!row) return null;
  const now = Date.now();
  if (row.expires_at <= now) {
    await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(hash).run();
    return null;
  }
  if (now - row.last_used_at > 86400000) {
    await env.DB.prepare("UPDATE sessions SET last_used_at = ? WHERE token_hash = ?").bind(now, hash).run();
  }
  return { userId: row.user_id, email: row.email, name: row.name };
}

/* ---------- email sign-in codes ---------- */

async function sendCode(env, email, code) {
  if (!env.RESEND_API_KEY) throw new Error("no mail sender configured");
  const r = await fetch(env.MAIL_ENDPOINT || "https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [email],
      subject: `${code} is your Foval sign-in code`,
      text: [
        `Your sign-in code is ${code}.`,
        "",
        "It works once and expires in ten minutes.",
        "If you did not ask to sign in, you can ignore this. Nothing has changed on your account.",
        "",
        "Foval Learning Institute",
      ].join("\n"),
    }),
  });
  if (!r.ok) throw new Error(`mail send failed: ${r.status}`);
}

async function startEmailSignIn(env, body, origin) {
  const email = normEmail(body.email);
  if (!validEmail(email)) return json({ error: "That does not look like an email address." }, 400, origin);

  const now = Date.now();
  const prior = await env.DB.prepare("SELECT window_at, sent_count FROM login_codes WHERE email = ?").bind(email).first();
  let windowAt = prior?.window_at ?? now;
  let sentCount = prior?.sent_count ?? 0;
  if (now - windowAt > 3600000) { windowAt = now; sentCount = 0; }
  if (sentCount >= CODE_MAX_PER_HOUR) {
    return json({ error: "Too many codes asked for. Try again in an hour." }, 429, origin);
  }

  const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, "0");
  await env.DB.prepare(
    `INSERT INTO login_codes (email, code_hash, expires_at, attempts, sent_at, window_at, sent_count)
     VALUES (?, ?, ?, 0, ?, ?, ?)
     ON CONFLICT(email) DO UPDATE SET
       code_hash = excluded.code_hash, expires_at = excluded.expires_at, attempts = 0,
       sent_at = excluded.sent_at, window_at = excluded.window_at, sent_count = excluded.sent_count`)
    .bind(email, await hmac(env.AUTH_SECRET, `${email}:${code}`), now + CODE_TTL_MS, now, windowAt, sentCount + 1).run();

  await sendCode(env, email, code);
  // Deliberately the same answer whether or not the address has an account here.
  return json({ ok: true, sent: true }, 200, origin);
}

async function verifyEmailSignIn(env, body, origin) {
  const email = normEmail(body.email);
  const code = clip(body.code, 6);
  if (!validEmail(email) || !/^\d{6}$/.test(code)) return json({ error: "Check the address and the six-digit code." }, 400, origin);

  const row = await env.DB.prepare("SELECT code_hash, expires_at, attempts FROM login_codes WHERE email = ?").bind(email).first();
  const bad = () => json({ error: "That code is wrong or has expired. Ask for a new one." }, 401, origin);
  if (!row || row.expires_at <= Date.now()) return bad();
  if (row.attempts >= CODE_MAX_ATTEMPTS) {
    await env.DB.prepare("DELETE FROM login_codes WHERE email = ?").bind(email).run();
    return bad();
  }
  if (!timingSafeEqual(row.code_hash, await hmac(env.AUTH_SECRET, `${email}:${code}`))) {
    await env.DB.prepare("UPDATE login_codes SET attempts = attempts + 1 WHERE email = ?").bind(email).run();
    return bad();
  }
  await env.DB.prepare("DELETE FROM login_codes WHERE email = ?").bind(email).run();

  const userId = await findOrCreateUser(env, { email, name: "", provider: "email", providerUserId: email, verified: true });
  const token = await createSession(env, userId);
  return json({ ok: true, token, user: { email, name: "" } }, 200, origin);
}

/* ---------- Google ---------- */

async function googleStart(env, url) {
  if (!env.GOOGLE_CLIENT_ID) return new Response("Google sign-in is not configured.", { status: 503 });
  const issued = Date.now();
  const nonce = randomToken(16);
  const state = `${issued}.${nonce}.${await hmac(env.AUTH_SECRET, `${issued}.${nonce}`)}`;
  const auth = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  auth.searchParams.set("client_id", env.GOOGLE_CLIENT_ID);
  auth.searchParams.set("redirect_uri", `${url.origin}/auth/google/callback`);
  auth.searchParams.set("response_type", "code");
  auth.searchParams.set("scope", "openid email profile");
  auth.searchParams.set("state", state);
  auth.searchParams.set("prompt", "select_account");
  return Response.redirect(auth.toString(), 302);
}

async function googleCallback(env, url) {
  const back = (params) => Response.redirect(`${env.SITE_ORIGIN}/#/signin?${params}`, 302);
  const state = url.searchParams.get("state") || "";
  const code = url.searchParams.get("code") || "";
  const [issued, nonce, sig] = state.split(".");
  if (!code || !issued || !nonce || !sig) return back("error=state");
  if (!timingSafeEqual(sig, await hmac(env.AUTH_SECRET, `${issued}.${nonce}`))) return back("error=state");
  if (Date.now() - Number(issued) > STATE_TTL_MS) return back("error=expired");

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${url.origin}/auth/google/callback`,
      grant_type: "authorization_code",
    }),
  });
  if (!tokenRes.ok) return back("error=google");
  const { id_token: idToken } = await tokenRes.json();
  if (!idToken) return back("error=google");

  // The id_token came straight from Google's token endpoint over TLS in a request we
  // made ourselves, so reading the claims is enough; there is no third party in the path
  // whose signature we would be checking.
  let claims;
  try {
    claims = JSON.parse(atob(idToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
  } catch { return back("error=google"); }
  const issuers = ["accounts.google.com", "https://accounts.google.com"];
  if (!issuers.includes(claims.iss) || claims.aud !== env.GOOGLE_CLIENT_ID) return back("error=google");
  if (!claims.exp || Number(claims.exp) * 1000 <= Date.now()) return back("error=expired");
  const email = normEmail(claims.email);
  if (!validEmail(email) || claims.email_verified === false) return back("error=email");

  const userId = await findOrCreateUser(env, {
    email, name: claims.name || "", provider: "google", providerUserId: String(claims.sub), verified: true,
  });
  const token = await createSession(env, userId);
  return back(`token=${encodeURIComponent(token)}`);
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

/* ---------- router ---------- */

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });

    // Google redirects the browser here with no Origin header, so those two routes are
    // outside the origin check. Everything else is called by our own page with fetch.
    if (path === "/auth/google/start") return googleStart(env, url);
    if (path === "/auth/google/callback") return googleCallback(env, url);

    if (!origin || !ALLOWED_ORIGINS.has(origin)) return json({ error: "Origin not allowed." }, 403, origin);

    try {
      if (path === "/auth/email/start" && request.method === "POST") return await startEmailSignIn(env, await readJson(request), origin);
      if (path === "/auth/email/verify" && request.method === "POST") return await verifyEmailSignIn(env, await readJson(request), origin);

      const me = await authenticate(env, request);

      if (path === "/auth/session" && request.method === "GET") {
        return me ? json({ signedIn: true, user: { email: me.email, name: me.name } }, 200, origin) : json({ signedIn: false }, 200, origin);
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
      if (path === "/account" && request.method === "POST") {
        // Sign out everywhere and delete everything. Value 1: no lock on the door,
        // and no lock on the way out either.
        // Explicit rather than relying on ON DELETE CASCADE being switched on.
        await env.DB.batch([
          "review_items", "lesson_progress", "study_sessions", "profiles", "sessions", "identities",
        ].map(t => env.DB.prepare(`DELETE FROM ${t} WHERE user_id = ?`).bind(me.userId))
          .concat([env.DB.prepare("DELETE FROM users WHERE id = ?").bind(me.userId)]));
        return json({ ok: true, deleted: true }, 200, origin);
      }
      return json({ error: "No such endpoint." }, 404, origin);
    } catch (err) {
      const message = String(err && err.message || err);
      if (message === "too large") return json({ error: "Body too large." }, 413, origin);
      console.error(path, message);
      return json({ error: "Something broke on our side." }, 500, origin);
    }
  },
};
