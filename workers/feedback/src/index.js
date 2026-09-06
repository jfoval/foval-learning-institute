// Foval Learning Institute: lesson feedback endpoint.
// Write-only on purpose. Reading is done with `wrangler d1 execute`, so a leaked
// URL cannot be used to pull learner feedback back out.

const ALLOWED_ORIGINS = new Set([
  "https://www.fovallearninginstitute.org",
  "https://fovallearninginstitute.org",
  "https://jfoval.github.io",
  // Plain http while GitHub Pages is still issuing the TLS certificate. Once
  // https_enforced is on, Pages redirects http to https and these can go.
  "http://www.fovallearninginstitute.org",
  "http://fovallearninginstitute.org",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
]);

const MAX_BODY = 20000;   // bytes
const MAX_TEXT = 4000;    // chars per free-text field
const MAX_ID = 128;       // chars for course, lesson, site

function cors(origin) {
  const h = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) h["Access-Control-Allow-Origin"] = origin;
  return h;
}

const json = (body, status, origin) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(origin) },
  });

const clip = (v, n) => (typeof v === "string" ? v.slice(0, n).trim() : "");

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
    if (request.method !== "POST") return json({ error: "Send a POST." }, 405, origin);
    // Require a known Origin. Browsers always send one on a cross-origin POST, so this
    // costs the real site nothing and stops the most casual scripted writes.
    if (!origin || !ALLOWED_ORIGINS.has(origin)) return json({ error: "Origin not allowed." }, 403, origin);

    const len = Number(request.headers.get("Content-Length") || 0);
    if (len > MAX_BODY) return json({ error: "Body too large." }, 413, origin);

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: "Body must be JSON." }, 400, origin);
    }

    const course = clip(data.course, MAX_ID);
    const lesson = clip(data.lesson, MAX_ID);
    if (!course || !lesson) return json({ error: "course and lesson are required." }, 400, origin);

    const clarityRaw = parseInt(data.clarity, 10);
    const clarity = clarityRaw >= 1 && clarityRaw <= 4 ? clarityRaw : null;
    const struggled = clip(data.struggled, MAX_TEXT);
    const improve = clip(data.improve, MAX_TEXT);

    // Nothing was actually said. Accept it quietly rather than storing an empty row.
    if (clarity === null && !struggled && !improve) return json({ ok: true, stored: false }, 200, origin);

    // Deliberately not stored: IP address, user agent, anything identifying.
    // Progress is private to the learner's browser and feedback should be too.
    await env.DB.prepare(
      `INSERT INTO feedback (course, lesson, clarity, struggled, improve, site, client_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(course, lesson, clarity, struggled, improve, clip(data.site, MAX_ID), clip(data.at, 64) || null)
      .run();

    return json({ ok: true, stored: true }, 200, origin);
  },
};
