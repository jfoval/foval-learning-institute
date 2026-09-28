/* Foval Learning Institute: client-side app. Plain JS, no build step, no backend.
   State lives in localStorage and is designed to map 1:1 onto the Phase 2 sync tables. */
(function () {
  "use strict";

  const COURSES = window.FOVAL_COURSES || [];
  const PATH = window.FOVAL_PATH || { terms: [] };
  const MAP = window.FOVAL_MAP || [];
  const SUBJECTS = [...new Set(COURSES.map(c => c.subject))];
  const PASS_MARK = 0.7;
  const REPO = "https://github.com/jfoval/foval-learning-institute";
  // Feedback endpoint: when set, feedback is POSTed here as JSON (Supabase REST insert, Formspree, or any endpoint).
  // Leave empty to keep feedback in this browser and offer the GitHub issue route. See docs/FEEDBACK_LOOP.md.
  const FEEDBACK_ENDPOINT = window.FOVAL_FEEDBACK_ENDPOINT || "";
  const FEEDBACK_HEADERS = window.FOVAL_FEEDBACK_HEADERS || { "Content-Type": "application/json" };
  // Accounts backend (workers/api). Empty until the Worker is deployed and this is set in
  // index.html; while it is empty the site behaves exactly as it did before, with progress
  // in this browser only and no network calls. See docs/AUTH_OPTIONS.md.
  const API = window.FOVAL_API || "";
  const K = { progress: "foval.progress.v1", review: "foval.review.v1", activity: "foval.activity.v1", prefs: "foval.prefs.v1", auth: "foval.auth.v1" };
  const main = document.getElementById("main");
  const DAY = 86400000;

  /* ---------- storage ----------
     Every localStorage call goes through these. Storage can be full, blocked, or absent
     (private mode, some embedded browsers), and a bare call there throws and kills the page. */
  const lsGet = k => { try { return localStorage.getItem(k); } catch { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); return true; } catch { return false; } };
  const lsRemove = k => { try { localStorage.removeItem(k); } catch { /* nothing to remove */ } };
  const load = (k, d) => { try { return JSON.parse(lsGet(k)) ?? d; } catch { return d; } };
  let saveWarned = false;
  const save = (k, v) => {
    if (lsSet(k, JSON.stringify(v)) || saveWarned) return;
    // Once per page load, not silently: a learner who just passed a quiz should know it did not stick.
    saveWarned = true;
    alert("Your progress could not be saved in this browser: its storage is full or blocked. The page still works, but nothing you do here will be remembered.");
  };
  const today = () => new Date().toISOString().slice(0, 10);
  function logActivity() { const a = load(K.activity, {}); a[today()] = (a[today()] || 0) + 1; save(K.activity, a); }
  function streak() {
    const a = load(K.activity, {}); let n = 0; const d = new Date();
    if (!a[today()]) d.setDate(d.getDate() - 1);
    while (a[d.toISOString().slice(0, 10)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  const prefs = () => load(K.prefs, { hoursPerWeek: 5 });

  /* ---------- account and sync ----------
     The browser stays the source of truth. Signing in never replaces local progress; it
     merges with the server (a lesson stays done, the higher score wins, a review item
     keeps the further-ahead schedule) and the merged result comes back. Writes are
     batched on a timer because D1's free plan counts row writes, not requests. */
  const account = () => load(K.auth, null);
  let navChecked = 0;   // when the Friends link last asked whether anything is waiting
  function setAccount(a) {
    const was = (account() || {}).token;
    if (a) save(K.auth, a);
    else lsRemove(K.auth);
    if ((a || {}).token !== was) navChecked = 0;   // a sync rewrites this too; only a new session re-asks
    updateNav();
  }
  const signedIn = () => Boolean(API && account() && account().token);

  async function apiCall(path, { method = "GET", body, token, keepalive } = {}) {
    const headers = {};
    if (body) headers["Content-Type"] = "application/json";
    const t = token || (account() || {}).token;
    if (t) headers.Authorization = `Bearer ${t}`;
    const r = await fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined, keepalive });
    const data = await r.json().catch(() => ({}));
    if (r.status === 401 && t) { setAccount(null); throw new Error("Your session expired. Log in again."); }
    if (!r.ok) throw new Error(data.error || `Request failed (${r.status})`);
    return data;
  }

  const localState = () => ({
    progress: load(K.progress, {}), review: load(K.review, {}), activity: load(K.activity, {}),
    prefs: prefs(), name: lsGet("foval.name") || "",
  });

  // Merged progress carries done, score and at. Anything else the browser keeps on a
  // lesson, feedback above all, is local and must survive the write-back.
  function applyState(state) {
    const local = load(K.progress, {}), next = {};
    for (const [cid, lessons] of Object.entries(state.progress || {})) {
      next[cid] = {};
      for (const [lid, v] of Object.entries(lessons)) next[cid][lid] = Object.assign({}, (local[cid] || {})[lid], v);
    }
    for (const [cid, lessons] of Object.entries(local)) {
      next[cid] = Object.assign({}, lessons, next[cid] || {});
    }
    save(K.progress, next);
    save(K.review, state.review || {});
    save(K.activity, state.activity || {});
    if (state.prefs) save(K.prefs, state.prefs);
    if (state.name) lsSet("foval.name", state.name);
    backfillReviewBank();
  }

  let syncTimer = null, syncing = false;
  async function syncNow(keepalive) {
    if (!signedIn() || syncing) return null;
    syncing = true;
    try {
      const r = await apiCall("/state", { method: "PUT", body: localState(), keepalive });
      applyState(r.state);
      setAccount(Object.assign({}, account(), { syncedAt: Date.now() }));
      return r.state;
    } finally { syncing = false; }
  }
  function scheduleSync() {
    if (!signedIn()) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => syncNow().catch(() => { /* the browser still has it */ }), 15000);
  }

  /* progress */
  const lessonState = (cid, lid) => (load(K.progress, {})[cid] || {})[lid] || null;
  function markLesson(cid, lid, data) {
    const p = load(K.progress, {}); p[cid] = p[cid] || {};
    p[cid][lid] = Object.assign({}, p[cid][lid], data, { at: Date.now() });
    save(K.progress, p); logActivity(); scheduleSync();
  }
  const courseItems = c => [...c.lessons, ...(c.assessments || [])];

  /* ---------- lesson content ----------
     data/courses.js is the index: every course and lesson without the lesson HTML or quiz.
     A course's rendered lessons live in data/content/<id>.js, fetched the first time a reader
     opens that course and merged onto the lesson records here, so the rest of the app can keep
     reading l.content and l.quiz as it always did. It used to be one 3.4 MB file loaded
     before the home page could paint. */
  const contentLoads = new Map();
  function loadContent(c) {
    if (!c) return Promise.resolve();
    if (c._loaded) return Promise.resolve();
    if (contentLoads.has(c.id)) return contentLoads.get(c.id);
    const p = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = c.content;
      s.onload = () => {
        const data = (window.FOVAL_CONTENT || {})[c.id];
        if (!data) return reject(new Error("no content"));
        for (const l of c.lessons) { const d = data.lessons[l.id] || {}; l.content = d.content || ""; l.quiz = d.quiz || []; }
        for (const a of c.assessments || []) { const d = data.assessments[a.id] || {}; a.content = d.content || ""; a.quiz = d.quiz || []; }
        c._loaded = true; resolve();
      };
      s.onerror = () => { contentLoads.delete(c.id); reject(new Error("failed to load " + c.content)); };
      document.head.appendChild(s);
    });
    contentLoads.set(c.id, p);
    return p;
  }
  function courseProgress(c) {
    const items = courseItems(c);
    const done = items.filter(l => (lessonState(c.id, l.id) || {}).done).length;
    return { done, total: items.length, pct: Math.round(100 * done / items.length) };
  }
  const courseStarted = c => Boolean(load(K.progress, {})[c.id]);
  const courseComplete = c => { const p = courseProgress(c); return p.done === p.total; };

  /* review bank (spaced repetition, SM-2 style) */
  function addToReviewBank(c, l) {
    const bank = load(K.review, {});
    l.quiz.forEach((q, qi) => {
      const key = `${c.id}/${l.id}/${qi}`;
      if (!bank[key]) bank[key] = { ease: 2.5, interval: 1, due: Date.now() + DAY, reps: 0, lapses: 0, last: null };
    });
    save(K.review, bank);
  }
  // Every finished lesson's questions belong in the bank, however the lesson got finished:
  // passed here, synced from another device, pasted in by hand, or passed before the bank
  // existed. Only the missing ones are added, from the index's quiz counts, so no course
  // content has to load. A backlog is spread over the next week rather than landing at once.
  function backfillReviewBank() {
    const prog = load(K.progress, {}), bank = load(K.review, {});
    let added = 0;
    for (const c of COURSES) {
      for (const l of c.lessons) {
        if (!(prog[c.id] || {})[l.id]?.done) continue;
        for (let qi = 0; qi < (l.quizCount || 0); qi++) {
          const key = `${c.id}/${l.id}/${qi}`;
          if (bank[key]) continue;
          bank[key] = { ease: 2.5, interval: 1, due: Date.now() + DAY * (1 + (added++ % 7)), reps: 0, lapses: 0, last: null };
        }
      }
    }
    if (added) { save(K.review, bank); scheduleSync(); }
    return added;
  }
  function gradeReview(key, correct) {
    const bank = load(K.review, {}); const it = bank[key]; if (!it) return;
    if (correct) {
      it.reps += 1;
      it.interval = it.reps === 1 ? 1 : it.reps === 2 ? 3 : Math.round(it.interval * it.ease);
      it.ease = Math.min(3.0, it.ease + 0.1);
    } else {
      it.reps = 0; it.lapses += 1; it.interval = 1; it.ease = Math.max(1.3, it.ease - 0.2);
    }
    it.last = correct; it.due = Date.now() + it.interval * DAY;
    save(K.review, bank); logActivity(); scheduleSync();
  }
  // A bank key resolves against the index even before the course's quiz is loaded, so the
  // home page can count what is due; q is only present once loadContent has run.
  function resolveKey(key) {
    const [cid, lid, qi] = key.split("/");
    const c = byId(cid); const l = c && c.lessons.find(x => x.id === lid);
    if (!l || !(Number(qi) < (l.quiz ? l.quiz.length : l.quizCount))) return null;
    return { c, l, q: l.quiz ? l.quiz[Number(qi)] : null, key };
  }
  function reviewStats() {
    const bank = load(K.review, {}); const keys = Object.keys(bank).filter(k => resolveKey(k));
    const due = keys.filter(k => bank[k].due <= Date.now());
    const answered = keys.filter(k => bank[k].last !== null);
    const retention = answered.length ? Math.round(100 * answered.filter(k => bank[k].last).length / answered.length) : null;
    const nextDue = keys.length ? Math.min(...keys.map(k => bank[k].due)) : null;
    return { total: keys.length, due, retention, nextDue };
  }

  /* ---------- helpers ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = id => COURSES.find(c => c.id === id);
  // A course's length is the measured minutes of everything in it, assessments included. The
  // cards used to sum lessons only, so the number on the tile disagreed with the syllabus below it.
  const totalMinutes = c => courseItems(c).reduce((n, l) => n + (l.minutes || 0), 0);
  const fmtHours = mins => mins < 60 ? `${mins} min` : `${Math.round(mins / 60 * 10) / 10} h`;
  const SCHOOLS = [
    { name: "Foundations", line: "Logic, evidence, and how to think." },
    { name: "Mathematics", line: "Arithmetic to calculus, for understanding." },
    { name: "Natural Sciences", line: "How the physical world works." },
    { name: "History", line: "What happened, and how we know." },
    { name: "Philosophy & Religion", line: "The big questions and the traditions." },
    { name: "Literature & Arts", line: "The best that has been thought and made." },
    { name: "Economics, Government & Law", line: "Money, power, and rules." },
    { name: "Computer Science & AI", line: "Understanding and building with computers." },
    { name: "Business & Enterprise", line: "Creating value and getting paid for it." },
    { name: "Money", line: "Personal finance from first principles." },
    { name: "Health & the Body", line: "What the evidence says about staying well." },
    { name: "Practical Life & Self-Reliance", line: "Competence in the physical world." },
    { name: "Communication & People", line: "Working with other humans." },
    { name: "Learning & Mind", line: "How to learn anything." },
    { name: "Christian Studies", line: "The Bible, the faith, and the case for it." },
  ];
  const STANDPOINT = { christian: "Taught from within the Christian tradition. This course makes the case; it does not pretend to be neutral." };
  const spName = sp => sp ? sp.charAt(0).toUpperCase() + sp.slice(1) + " Standpoint" : "";
  const spLabel = sp => sp ? `<span class="standpoint-tag">${esc(spName(sp))}</span>` : "";
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function setActiveNav(path) {
    document.querySelectorAll(".site-nav a").forEach(a => {
      const href = a.getAttribute("href").slice(1);
      a.classList.toggle("active", path === href || (href !== "/" && path.startsWith(href)));
    });
  }
  const noMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealer = (!noMotion && "IntersectionObserver" in window)
    ? new IntersectionObserver(entries => {
        for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); revealer.unobserve(e.target); }
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 })
    : null;
  function reveal() {
    if (!revealer) return;
    main.querySelectorAll(".section, .path-next, .card, .school, .why-row, .feature, .band").forEach(el => {
      // stagger siblings so grids ripple in rather than land as one block
      const sibs = Array.prototype.filter.call(el.parentElement.children, s => s.classList.contains(el.classList[0]));
      const i = sibs.indexOf(el);
      if (i > 0) el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 70}ms`);
      el.classList.add("reveal");
      revealer.observe(el);
    });
  }
  function countUp() {
    if (noMotion) return;
    main.querySelectorAll(".stat b").forEach(el => {
      if (!/^\d+$/.test(el.textContent)) return;
      const n = Number(el.textContent), dur = 900, t0 = performance.now();
      el.textContent = "0";
      requestAnimationFrame(function tick(t) {
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = String(Math.round(n * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      });
    });
  }
  function render(html, title) {
    main.innerHTML = html;
    main.removeAttribute("aria-busy");
    document.title = title ? `${title} · Foval Learning Institute` : "Foval Learning Institute";
    // A new page, not a scroll: jump, never animate up from the foot of a long lesson.
    window.scrollTo({ top: 0, behavior: "instant" });
    // Put keyboard and screen-reader focus on the new content rather than leaving it on
    // whatever link was just clicked, which is gone.
    main.focus({ preventScroll: true });
    reveal();
  }
  // Routes that fetch a course's content first. The token stops a slow load from painting
  // over a page the reader has already moved on from.
  let routeSeq = 0;
  async function withContent(c, view) {
    const token = ++routeSeq;
    main.setAttribute("aria-busy", "true");
    try { await loadContent(c); }
    catch { if (token === routeSeq) render(`<div class="empty"><h2>Could not load this course</h2><p>Check your connection and try again.</p><a class="btn btn-primary" href="#/">Go home</a></div>`, "Not loaded"); return; }
    if (token === routeSeq) view();
  }

  /* ---------- shared pieces ---------- */
  function courseCard(c) {
    const p = courseProgress(c); const started = courseStarted(c);
    return `
      <a class="card" href="#/course/${c.id}">
        <span class="eyebrow">${esc(c.subject)}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.summary)}</p>
        ${spLabel(c.standpoint)}
        <div class="card-meta">
          <span class="card-level">${esc(c.level)}</span>
          <span>${c.lessons.length} lessons</span>
          <span>${fmtHours(totalMinutes(c))}</span>
        </div>
        ${started ? `<div class="progress"><i style="width:${p.pct}%"></i></div><div class="progress-label">${p.done} of ${p.total} lessons complete</div>` : ""}
      </a>`;
  }
  function nextOnPath() {
    for (const t of PATH.terms) for (const e of t.courses) { const c = byId(e.id); if (c && !courseComplete(c)) return c; }
    return null;
  }

  /* Screenshots of the real site, taken at phone and desktop width in both themes.
     Four files per shot: <name>-{light,dark}-{phone,desktop}.png in assets/media/screens/.
     Never a mockup: if a feature has no live course to photograph, it gets no panel. */
  const SHOTS = "assets/media/screens/";
  function shot(name, alt, caption) {
    return `<figure class="shot">
        <picture>
          <source media="(prefers-color-scheme: dark) and (max-width: 700px)" srcset="${SHOTS}${name}-dark-phone.png">
          <source media="(prefers-color-scheme: dark)" srcset="${SHOTS}${name}-dark-desktop.png">
          <source media="(max-width: 700px)" srcset="${SHOTS}${name}-light-phone.png">
          <img src="${SHOTS}${name}-light-desktop.png" alt="${esc(alt)}" loading="lazy" decoding="async">
        </picture>
        <figcaption>${esc(caption)}</figcaption>
      </figure>`;
  }

  function tilePicture(name, alt) {
    return `<picture>
        <source media="(prefers-color-scheme: dark)" srcset="${SHOTS}${name}-dark-phone.png">
        <img src="${SHOTS}${name}-light-phone.png" alt="${esc(alt)}" loading="lazy" decoding="async">
      </picture>`;
  }

  /* The seven points as numbered feature cards. The screenshot fills the card and the
     point sits on a navy scrim at its foot; hover or keyboard focus zooms the capture
     and reveals the line. On touch there is no hover, so the line is always shown and
     the cards become one swipeable row. */
  function showcase() {
    return `<div class="feature-grid">
      ${WHY_TILES.map((t, i) => `<figure class="feature" tabindex="0">
        ${tilePicture(t[0], t[3])}
        <span class="feature-num">${String(i + 1).padStart(2, "0")}</span>
        <figcaption class="feature-label"><b>${esc(t[1])}</b><span>${esc(t[2])}</span></figcaption>
      </figure>`).join("")}
    </div>`;
  }

  const WHY_TILES = [
    ["tile-quiz", "The quiz argues back", "Right and wrong are marked, then it says why yours was wrong.",
      "A quiz question after answering, one option marked correct in green, the chosen one marked wrong in red, and the explanation beginning below."],
    ["tile-video", "Watch it explained", "When somebody has already explained it better in six minutes, the lesson embeds it and says why.",
      "An embedded video at the foot of a lesson section, with a caption saying how long it is and why it is worth watching."],
    ["tile-map", "Maps of the material", "A whole library on one page, with the dates, the covenants and the gaps.",
      "A timeline of the Bible in six acts, from creation to new creation, marking the covenants, the fall of Samaria in 722 BC, the exile in 586 BC and the four hundred years with no book in it."],
    ["tile-exercise", "Work to do", "At least one thing per lesson that you do on paper, before the quiz.",
      "An exercise block headed Do it now, asking the reader to audit their own study habits."],
    ["tile-recall", "Recall before the quiz", "Close the page and write what you remember. Then the questions open.",
      "The free recall box at the foot of a lesson, part filled with a learner's own summary and a running word count."],
    ["tile-code", "Real material", "Code you run, data you read, sources you can go and check.",
      "A Python lesson showing three runnable for-loops with their output in comments, and the paragraph explaining range."],
    ["tile-transcript", "A record that adds up", "Lessons, hours, retention, streak. What you can still do, not what you saw.",
      "The transcript page showing courses completed, lessons completed, hours of study, questions in the review bank, retention and day streak."],
    ["tile-podcast", "Lessons you can listen to", "Two voices talk the lesson through, from a script checked against it line by line. Every lesson gets one as its content settles.",
      "The listen block at the top of a lesson, with an audio player and a note saying the voices are synthetic and the script was checked against the lesson."],
  ];

  const WHY_PANELS = [
    {
      shot: ["predict",
        "A lesson paused at a question, with the answer revealed under a button after the reader has committed to a guess.",
        "How to Learn Anything, lesson 3"],
      title: "You think while you read",
      body: "Reading is the weakest way to learn. So a lesson stops, asks what you think happens next, and only then tells you.",
    },
    {
      shot: ["chart",
        "A chart from a Bible course showing that of the Bible's 1,189 chapters, 918 sit in one act, the story of Israel.",
        "The Bible: What It Is and How to Read It, lesson 2"],
      title: "Drawn, photographed, and linked",
      body: "Charts drawn from real counts. Photographs of the real thing, credited and licensed. Nothing is decoration.",
    },
    {
      shot: ["review",
        "The Review page showing a question from a completed lesson, with the four answer options and the number due today.",
        "The Review page, mid session"],
      title: "It comes back until it stays",
      body: "Every question you pass comes back tomorrow, then next week, then next month. Your transcript shows what you can still recall.",
    },
    {
      shot: ["standpoint",
        "The Path page showing a Christian Studies course carrying a Christian Standpoint label next to its title.",
        "The Foval Core, term three"],
      title: "Faith courses say so on the label",
      body: "Christian Studies teaches from inside the faith, and says so on the label. Every other school stays on neutral ground.",
    },
  ];

  function whyPanels() {
    return `
      <section class="section why">
        <div class="section-head"><h2>What makes this different</h2></div>
        <p class="why-lede">Written from the standard references, then read again for accuracy and balance. Everything below is a photograph of the live site.</p>
        <div class="why-rows">
          ${WHY_PANELS.map(p => `<div class="why-row">${shot(...p.shot)}<div class="why-copy"><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div></div>`).join("")}
        </div>
      </section>`;
  }

  function whyMore() {
    return `
      <section class="section why">
        <div class="section-head"><h2>A lesson page is more than words</h2><p>Reading is where a lesson starts, not where it stops.</p></div>
        ${showcase()}
        <div class="why-rows">
          <div class="why-row why-ask">
            ${shot("feedback",
              "The feedback form at the foot of a lesson, asking how clear it was and what would have made it better.",
              "The foot of every lesson")}
            <div class="why-copy">
              <h3>One ask</h3>
              <p class="ask-line">We provide this free. The one thing we ask: when a lesson is unclear, say so in the form at its foot. We read all of it and use it.</p>
            </div>
          </div>
        </div>
      </section>`;
  }

  /* ---------- views ---------- */
  function viewHome() {
    const lessons = COURSES.reduce((n, c) => n + c.lessons.length, 0);
    const started = COURSES.filter(courseStarted);
    const rs = reviewStats();
    const liveSchools = new Set(COURSES.map(c => c.subject));
    render(`
      <section class="hero-wrap">
        <div class="hero-media">${noMotion ? `<img src="assets/media/hero-poster.jpg" alt="" decoding="async">` : `<video autoplay muted loop playsinline poster="assets/media/hero-poster.jpg" onerror="this.style.display='none'"><source src="assets/media/hero.mp4" type="video/mp4"></video>`}</div>
        <div class="hero-inner">
          <div>
            <span class="eyebrow">Faith. Knowledge. Life. Free for everyone.</span>
            <h1>A real education, free, for anyone who wants one.</h1>
            <p class="lede">History, philosophy, mathematics, science, and Scripture, alongside what most schools skip: money, sales, health, and how to think. Checked against the sources and taught the way a good professor talks.</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="#/path">Start the path</a>
              <a class="btn btn-secondary" href="#/courses">Browse the courses</a>
            </div>
          </div>
          <div class="hero-card-dark">
            <h3>How it works</h3>
            <ul class="principles">
              <li>Follow the Core, or jump into any course you like</li>
              <li>You think as you read: predict, check yourself, do the work</li>
              <li>Questions you've passed come back on a schedule, so it stays learned</li>
              <li>A transcript tallies everything you can actually do</li>
            </ul>
            <div class="stat-row">
              <div class="stat"><b>${COURSES.length}</b><span>courses live</span></div>
              <div class="stat"><b>${lessons}</b><span>lessons</span></div>
              <div class="stat"><b>$0</b><span>forever</span></div>
            </div>
          </div>
        </div>
      </section>
      ${rs.due.length ? `<div class="path-next"><div><h3>${rs.due.length} question${rs.due.length === 1 ? "" : "s"} due for review</h3><p>A few minutes now keeps it from fading.</p></div><a class="btn btn-primary" href="#/review">Review now</a></div>` : ""}
      ${started.length ? `<section class="section"><div class="section-head"><h2>Continue</h2><p><a href="#/my-learning">Your page →</a></p></div><div class="grid">${started.filter(c => !courseComplete(c)).slice(0, 3).map(courseCard).join("")}</div></section>` : ""}
      ${whyPanels()}
      <section class="band">
        <img src="assets/media/study-laptop.jpg" alt="A man studying alone at a library desk in the evening, a laptop and open books in front of him" loading="lazy" decoding="async">
        <div class="band-inner">
          <h2>An hour of real study beats a day of scrolling.</h2>
          <p>Everything here is built for that hour: lessons that make you work, questions that come back until they stay, and a record of what you can still do.</p>
          <a class="btn btn-gold" href="#/path">Start the path</a>
        </div>
      </section>
      ${whyMore()}
      <section class="section">
        <div class="section-head"><h2>Courses</h2><p><a href="#/courses">See all</a></p></div>
        <div class="grid">${COURSES.slice(0, 6).map(courseCard).join("")}</div>
      </section>
      <section class="band band-right">
        <img src="assets/media/study-notes.jpg" alt="A student writing in a notebook at a desk by a bright window" loading="lazy" decoding="async">
        <div class="band-inner">
          <h2>Bring a notebook.</h2>
          <p>Every lesson asks for real work on paper before the quiz opens. Slow is fine. Slow is the point.</p>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Fifteen schools</h2><p><a href="#/map">The full map</a></p></div>
        <div class="schools">${SCHOOLS.map(s => `<div class="school"><b>${esc(s.name)}</b><span>${esc(s.line)}</span>${liveSchools.has(s.name) ? "" : "<br><span class='soon'>courses in progress</span>"}</div>`).join("")}</div>
      </section>
      <section class="band band-center">
        <img src="assets/media/study-lamp.jpg" alt="A desk lamp lighting a stack of books and a notebook against a dark bookshelf" loading="lazy" decoding="async">
        <div class="band-inner">
          <h2>Class is always in session.</h2>
          <p>No term dates, no tuition, no application. Pick a course and begin tonight.</p>
          <div class="btn-row"><a class="btn btn-gold" href="#/path">Start the path</a><a class="btn btn-ghost" href="#/courses">Browse the courses</a></div>
        </div>
      </section>
    `);
    countUp();
  }

  // Every course the institute intends to teach, written or not, grouped by school. This is the
  // page the homepage's "full map" link used to send people to GitHub for.
  function viewMap(slug) {
    const total = MAP.reduce((n, sc) => n + sc.courses.length, 0);
    const live = MAP.reduce((n, sc) => n + sc.courses.filter(c => byId(c.id)).length, 0);
    const shown = slug ? MAP.filter(sc => sc.slug === slug) : MAP;
    const row = c => {
      const course = byId(c.id);
      const tags = [`Term ${c.term}`, c.level];
      if (c.standpoint) tags.push(spName(c.standpoint));
      const meta = `<span class="map-meta">${tags.map(esc).join(" · ")}</span>`;
      const title = course
        ? `<a href="#/course/${course.id}">${esc(c.title)}</a> <span class="map-live">live</span>`
        : `${esc(c.title)} <span class="map-soon">being written</span>`;
      return `<li class="map-row"><div class="map-title">${title}</div>${meta}<p class="map-note">${esc(c.note || "")}</p></li>`;
    };
    render(`
      <span class="eyebrow">The full map</span>
      <h1>Everything the institute is building.</h1>
      <p class="lede" style="max-width:42rem;color:var(--text-2)">${total} courses across ${MAP.length} schools. ${live} are written and open now; the rest are planned and being built one at a time. Every course has a place on <a href="#/path">the Foval Core</a>, so the term number tells you roughly when to take it.</p>
      <div class="filters" style="margin:1.25rem 0 1.75rem">
        <button class="chip ${!slug ? "active" : ""}" data-school="">All schools</button>
        ${MAP.map(sc => `<button class="chip ${sc.slug === slug ? "active" : ""}" data-school="${esc(sc.slug)}">${esc(sc.name)}</button>`).join("")}
      </div>
      ${shown.map(sc => `<section class="map-school">
        <h2>${esc(sc.name)}</h2>
        <ol class="map-list">${sc.courses.map(row).join("")}</ol>
      </section>`).join("")}
    `, "The full map");
    main.querySelectorAll("[data-school]").forEach(b => b.addEventListener("click", () => {
      const v = b.dataset.school; location.hash = v ? `#/map?school=${encodeURIComponent(v)}` : "#/map";
    }));
  }

  function viewCourses(subject) {
    const list = subject ? COURSES.filter(c => c.subject === subject) : COURSES;
    render(`
      <span class="eyebrow">Catalog</span>
      <h1>All courses</h1>
      <p class="muted">Every course is free and self-paced. Take them in any order, or <a href="#/path">follow the path</a>.</p>
      <div class="filters">
        <button class="chip ${!subject ? "active" : ""}" data-subject="">All</button>
        ${SUBJECTS.map(s => `<button class="chip ${s === subject ? "active" : ""}" data-subject="${esc(s)}">${esc(s)}</button>`).join("")}
      </div>
      <div class="grid">${list.map(courseCard).join("")}</div>
      <p class="muted" style="margin-top:2rem">These are the courses you can take today. <a href="#/map">The full map</a> shows all ${MAP.reduce((n, sc) => n + sc.courses.length, 0)} courses across ${MAP.length} schools, including the ones still being written.</p>
    `, "Courses");
    main.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
      const s = b.dataset.subject; location.hash = s ? `#/courses?subject=${encodeURIComponent(s)}` : "#/courses";
    }));
  }

  function viewPath() {
    const pr = prefs(); const next = nextOnPath();
    const terms = PATH.terms.map((t, ti) => {
      let remainingMin = 0;
      const items = t.courses.map(e => {
        const c = byId(e.id);
        if (!c) return `<li><span class="path-item soon"><span class="path-dot"></span><span>${esc(e.title)}${e.optional ? " <span class='path-meta'>(optional)</span>" : ""}${e.standpoint ? " <span class='path-meta'>· " + esc(spName(e.standpoint)) + "</span>" : ""}</span><span class="path-meta">being written</span></span></li>`;
        const p = courseProgress(c); const done = p.done === p.total;
        if (!done) remainingMin += totalMinutes(c) * (1 - p.done / p.total);
        return `<li><a class="path-item" href="#/course/${c.id}"><span class="path-dot ${done ? "done" : courseStarted(c) ? "active" : ""}"></span><span>${esc(c.title)}${e.optional ? " <span class='path-meta'>(optional)</span>" : ""}${c.standpoint ? " <span class='path-meta'>· " + esc(spName(c.standpoint)) + "</span>" : ""}</span><span class="path-meta">${done ? "complete" : courseStarted(c) ? `${p.pct}%` : fmtHours(totalMinutes(c))}</span></a></li>`;
      }).join("");
      const live = t.courses.filter(e => byId(e.id)).length;
      const weeks = remainingMin ? Math.max(1, Math.round(remainingMin / 60 / pr.hoursPerWeek)) : 0;
      const head = `<span class="term-num">${ti + 1}</span><div><h2 style="margin:0">${esc(t.title)}</h2><p>${esc(t.theme)}</p></div>`;
      const foot = `<p class="path-meta" style="margin:.5rem 0 0">${live ? `${live} of ${t.courses.length} courses live` : `${t.courses.length} courses, being written`}${weeks ? ` · about ${weeks} week${weeks === 1 ? "" : "s"} of live content left at ${pr.hoursPerWeek} h/week` : ""}</p>`;
      // Every term is open, written or not. The whole route is the point of the page: a learner
      // sees what is coming and where it sits, not only what can be started today. (It used to
      // fold the unwritten terms away; John's call, 2026-09-10, is that they all show.)
      return `<section class="term${live ? "" : " term-soon"}">
        <div class="term-head">${head}</div>
        <ol class="path-list">${items}</ol>
        ${foot}
      </section>`;
    }).join("");
    render(`
      <span class="eyebrow">The Foval Core</span>
      <h1>The whole route, in the order it builds.</h1>
      <p class="lede" style="max-width:40rem;color:var(--text-2)">Every course the institute teaches, placed so that nothing arrives before what it needs. Tools first, then the habits of running yourself, then numbers, the world, the physical world, and the skills of making a living. Follow it straight through, start at any term, or ignore it entirely and <a href="#/courses">browse the courses</a>: every one of them stands alone.</p>
      <div class="budget"><label for="hpw">I can give about</label><select id="hpw">${[1, 2, 3, 5, 8, 12, 20].map(h => `<option value="${h}" ${h === pr.hoursPerWeek ? "selected" : ""}>${h} hour${h === 1 ? "" : "s"}</option>`).join("")}</select><span>a week.</span></div>
      ${next ? `<div class="path-next"><div><h3>Next up: ${esc(next.title)}</h3><p>${esc(next.summary)}</p></div><a class="btn btn-primary" href="#/course/${next.id}">${courseStarted(next) ? "Continue" : "Start"}</a></div>` : `<div class="path-next"><div><h3>You've finished every live course on the path.</h3><p>More are being written. Keep your knowledge fresh in <a href="#/review">Review</a>.</p></div></div>`}
      ${terms}
    `, "Path");
    main.querySelector("#hpw").addEventListener("change", e => { save(K.prefs, { ...prefs(), hoursPerWeek: Number(e.target.value) }); scheduleSync(); route(); });
  }

  function viewCourse(id) {
    const c = byId(id); if (!c) return viewNotFound();
    const p = courseProgress(c);
    const nextItem = courseItems(c).find(l => !(lessonState(c.id, l.id) || {}).done) || c.lessons[0];
    const nextHref = c.lessons.includes(nextItem) ? `#/course/${c.id}/lesson/${nextItem.id}` : `#/course/${c.id}/assessment/${nextItem.id}`;
    const complete = p.done === p.total;
    const assess = c.assessments || [];
    render(`
      <div class="course-hero">
        <div>
          <span class="eyebrow">${esc(c.subject)} · ${esc(c.level)}</span>
          <h1>${esc(c.title)}</h1>
          ${c.standpoint ? `<div class="standpoint">${esc(STANDPOINT[c.standpoint] || c.standpoint)}</div>` : ""}
          <p class="lede">${esc(c.description)}</p>
          <h2 class="h3">What you'll learn</h2>
          <ul class="outcomes">${(c.outcomes || []).map(o => `<li>${esc(o)}</li>`).join("")}</ul>
        </div>
        <aside class="course-aside">
          <dl>
            <dt>Lessons</dt><dd>${c.lessons.length}${assess.length ? ` + ${assess.length} assessment${assess.length === 1 ? "" : "s"}` : ""}</dd>
            <dt>Time</dt><dd>${fmtHours(totalMinutes(c))}</dd>
            <dt>Level</dt><dd>${esc(c.level)}</dd>
            <dt>Cost</dt><dd>Free</dd>
          </dl>
          ${courseStarted(c) ? `<div class="progress"><i style="width:${p.pct}%"></i></div><div class="progress-label">${p.done} of ${p.total} complete</div>` : ""}
          <div class="btn-row">
            ${complete ? `<a class="btn btn-primary" href="#/certificate/${c.id}">View certificate</a>` : `<a class="btn btn-primary" href="${nextHref}">${courseStarted(c) ? "Continue" : "Start course"}</a>`}
          </div>
        </aside>
      </div>
      <h2>Syllabus</h2>
      <ol class="lesson-list">
        ${c.lessons.map((l, i) => { const st = lessonState(c.id, l.id) || {}; return `<li class="${st.done ? "lesson-done" : ""}"><a href="#/course/${c.id}/lesson/${l.id}"><span class="lesson-num">${st.done ? "✓" : i + 1}</span><span>${esc(l.title)}</span><span class="lesson-time">${l.minutes} min</span></a></li>`; }).join("")}
      </ol>
      ${assess.length ? `<h2 style="margin-top:2rem">Assessments</h2>
      <ol class="lesson-list">
        ${assess.map(a => { const st = lessonState(c.id, a.id) || {}; return `<li class="${st.done ? "lesson-done" : ""}"><a href="#/course/${c.id}/assessment/${a.id}"><span class="lesson-num">${st.done ? "✓" : a.type === "test" ? "T" : "P"}</span><span>${esc(a.title)}<span class="path-meta" style="margin-left:.5rem">${a.type === "test" ? "final test" : "project"}</span></span><span class="lesson-time">${a.minutes >= 60 ? fmtHours(a.minutes) : a.minutes + " min"}</span></a></li>`; }).join("")}
      </ol>` : ""}
    `, c.title);
  }

  function viewLesson(courseId, lessonId) {
    const c = byId(courseId); if (!c) return viewNotFound();
    const idx = c.lessons.findIndex(l => l.id === lessonId); if (idx < 0) return viewNotFound();
    return withContent(c, () => viewLessonLoaded(c, idx));
  }
  function viewLessonLoaded(c, idx) {
    const l = c.lessons[idx]; const prev = c.lessons[idx - 1], next = c.lessons[idx + 1];
    const st = lessonState(c.id, l.id) || {};
    const hasQuiz = Array.isArray(l.quiz) && l.quiz.length > 0;
    const issueUrl = `${REPO}/issues/new?title=${encodeURIComponent(`Lesson feedback: ${c.title} / ${l.title}`)}&body=${encodeURIComponent(`Course: ${c.id}\nLesson: ${l.id}\n\nWhat was unclear, wrong, or missing:\n\n`)}`;
    // The lesson list comes after the article in the DOM, so a keyboard or screen-reader user
    // reaches the lesson first; the stylesheet puts it on the left at desktop width.
    render(`
      <div class="lesson-layout">
        <article class="lesson-body">
          <div class="breadcrumb"><a href="#/courses">Courses</a> / <a href="#/course/${c.id}">${esc(c.title)}</a> / Lesson ${idx + 1}</div>
          <h1>${esc(l.title)}</h1>
          <p class="muted">${l.minutes} min ${st.done ? "· <span style='color:var(--success)'>Completed</span>" : ""}</p>
          ${l.audio ? `<div class="podcast"><b>Listen: this lesson as a conversation</b><audio controls preload="none" src="${esc(l.audio)}"></audio><p class="muted small">Two hosts talk the lesson through. The voices are synthetic; the script was written from this lesson and checked against it, and asserts nothing the lesson does not.</p></div>` : ""}
          ${l.objectives && l.objectives.length ? `<div class="objectives"><b>In this lesson you will learn to</b><ul>${l.objectives.map(o => `<li>${esc(o)}</li>`).join("")}</ul></div>` : ""}
          ${l.video ? `<iframe class="video" src="${esc(l.video)}" title="${esc(l.title)}" allowfullscreen loading="lazy"></iframe>` : ""}
          <div class="lesson-content">${l.content}</div>
          ${hasQuiz ? `<section class="recall"><h2>Before the quiz: write what you remember</h2><p class="muted">Close your notes. In the box, write everything you can recall from this lesson, in your own words. Two minutes. This is the single most useful thing you can do with a lesson, and it is harder than it sounds.</p><textarea id="recallBox" rows="6" placeholder="What was the main idea? What were the examples? What surprised you?"></textarea><p class="muted small" id="recallNote"></p></section>` : ""}
          ${hasQuiz ? renderQuiz(l) : `<div class="quiz"><h2>Finished reading?</h2><button class="btn btn-primary" id="markDone">${st.done ? "Completed ✓" : "Mark lesson complete"}</button></div>`}
          ${renderFeedback(c, l, st, issueUrl)}
          <nav class="lesson-nav">
            ${prev ? `<a class="btn btn-secondary" href="#/course/${c.id}/lesson/${prev.id}">← ${esc(prev.title)}</a>` : `<a class="btn btn-secondary" href="#/course/${c.id}">← Course home</a>`}
            ${next ? `<a class="btn btn-secondary" href="#/course/${c.id}/lesson/${next.id}">${esc(next.title)} →</a>` : `<a class="btn btn-primary" href="#/course/${c.id}">Finish course →</a>`}
          </nav>
        </article>
        <aside class="lesson-side" aria-label="Lessons in this course">
          <p class="side-title"><a href="#/course/${c.id}">${esc(c.title)}</a></p>
          <ol>${c.lessons.map(x => { const s = lessonState(c.id, x.id) || {}; return `<li><a class="${x.id === l.id ? "current" : ""}" href="#/course/${c.id}/lesson/${x.id}"${x.id === l.id ? ' aria-current="page"' : ""}><span class="tick">${s.done ? "✓" : ""}</span><span>${esc(x.title)}</span></a></li>`; }).join("")}</ol>
        </aside>
      </div>
    `, l.title);
    const fbForm = main.querySelector("#feedbackForm");
    if (fbForm) fbForm.addEventListener("submit", e => { e.preventDefault(); submitFeedback(c, l, fbForm); });
    const recall = main.querySelector("#recallBox");
    if (recall) recall.addEventListener("input", () => { const n = recall.value.trim().split(/\s+/).filter(Boolean).length; main.querySelector("#recallNote").textContent = n ? `${n} words. Keep going until nothing else comes, then take the quiz.` : ""; });
    const markBtn = main.querySelector("#markDone");
    if (markBtn) markBtn.addEventListener("click", () => { markLesson(c.id, l.id, { done: true }); markBtn.textContent = "Completed ✓"; afterComplete(c); });
    if (hasQuiz) wireQuiz(c, l);
  }

  function renderFeedback(c, l, st, issueUrl) {
    const fb = st.feedback || {};
    return `<section class="feedback-ask" id="feedbackAsk">
      <h2>Help make this lesson better</h2>
      <p>This is a real ask, not a formality. Every lesson here gets rewritten based on what learners tell us: where it was confusing, what was missing, what you had to look up elsewhere. Your answers go straight into the next version. Two minutes of honesty from you makes this easier for the next thousand people.</p>
      <form id="feedbackForm">
        <p class="stem">How clear was this lesson?</p>
        <div class="fb-scale">${[["1", "Lost most of the way"], ["2", "Some parts confused me"], ["3", "Mostly clear"], ["4", "Clear throughout"]].map(([v, t]) => `<label><input type="radio" name="clarity" value="${v}" ${fb.clarity === v ? "checked" : ""}> ${t}</label>`).join("")}</div>
        <label class="fb-field">What did you struggle with, or have to reread? Be specific: which section, which idea.<textarea name="struggled" rows="3">${esc(fb.struggled || "")}</textarea></label>
        <label class="fb-field">What would have made it better? A missing example, a clearer explanation, something cut, something added.<textarea name="improve" rows="3">${esc(fb.improve || "")}</textarea></label>
        <div class="btn-row" style="margin-top:.75rem"><button class="btn btn-primary" type="submit">${fb.sent ? "Update my feedback" : "Send feedback"}</button><a class="btn btn-secondary" href="${issueUrl}" target="_blank" rel="noopener">Report an error</a></div>
        <p class="muted small" id="feedbackNote">${fb.sent ? "Thank you. Your feedback is saved" + (FEEDBACK_ENDPOINT ? " and sent." : " in this browser.") : ""}</p>
      </form>
    </section>`;
  }
  async function submitFeedback(c, l, form) {
    const data = Object.fromEntries(new FormData(form).entries());
    const record = { course: c.id, lesson: l.id, clarity: data.clarity || null, struggled: (data.struggled || "").trim(), improve: (data.improve || "").trim(), at: new Date().toISOString(), site: location.hostname };
    const p = load(K.progress, {}); p[c.id] = p[c.id] || {}; p[c.id][l.id] = Object.assign({}, p[c.id][l.id], { feedback: { ...record, sent: true } }); save(K.progress, p);
    const note = form.querySelector("#feedbackNote");
    if (!FEEDBACK_ENDPOINT) { note.textContent = "Thank you. Saved in this browser. Once the feedback service is switched on, it will be sent automatically."; return; }
    try {
      const r = await fetch(FEEDBACK_ENDPOINT, { method: "POST", headers: FEEDBACK_HEADERS, body: JSON.stringify(record) });
      note.textContent = r.ok ? "Thank you. Sent. It will be read before the next revision of this lesson." : "Saved here, but sending failed. It will be kept in this browser.";
    } catch { note.textContent = "Saved here, but sending failed (offline?). It will be kept in this browser."; }
  }

  function renderQuiz(l, passMark = PASS_MARK) {
    return `<section class="quiz" aria-label="Lesson quiz">
      <h2>Check your understanding</h2>
      <p class="muted">Score ${Math.round(passMark * 100)}% or better to pass.${passMark === PASS_MARK ? " Questions you pass join your review bank." : " Closed book: no looking back at the lessons."}</p>
      <form id="quizForm">
        ${l.quiz.map((q, qi) => `<div class="q" data-q="${qi}"><p class="stem">${qi + 1}. ${esc(q.q)}</p>${q.options.map((o, oi) => `<label><input type="radio" name="q${qi}" value="${oi}" required> <span><b class="opt-letter">${"ABCDEF"[oi]}.</b> ${esc(o)}</span></label>`).join("")}</div>`).join("")}
        <button class="btn btn-primary" type="submit">Submit answers</button>
        <div class="quiz-result" id="quizResult" aria-live="polite"></div>
      </form></section>`;
  }
  function wireQuiz(c, l, passMark = PASS_MARK, isTest = false) {
    const form = main.querySelector("#quizForm"); const result = main.querySelector("#quizResult");
    form.addEventListener("submit", e => {
      e.preventDefault(); let correct = 0;
      l.quiz.forEach((q, qi) => {
        const box = form.querySelector(`[data-q="${qi}"]`);
        const chosen = Number(form.querySelector(`input[name="q${qi}"]:checked`).value);
        // Colour alone is not a mark; each option also says in words what it is.
        box.querySelectorAll("label").forEach((lab, oi) => {
          lab.classList.remove("correct", "wrong"); lab.querySelectorAll(".mark").forEach(m => m.remove());
          const tag = oi === q.answer ? (oi === chosen ? "Correct" : "Right answer") : oi === chosen ? "Your answer" : "";
          if (oi === q.answer) lab.classList.add("correct"); else if (oi === chosen) lab.classList.add("wrong");
          if (tag) lab.insertAdjacentHTML("beforeend", `<span class="mark">${tag}</span>`);
        });
        if (chosen === q.answer) correct++;
        if (q.explain) { let ex = box.querySelector(".explain"); if (!ex) { ex = document.createElement("p"); ex.className = "explain"; box.appendChild(ex); } ex.textContent = q.explain; }
      });
      const score = correct / l.quiz.length; const passed = score >= passMark;
      result.className = "quiz-result " + (passed ? "pass" : "fail");
      result.textContent = passed ? `${correct} of ${l.quiz.length} correct. ${isTest ? "Passed." : "Lesson complete. These questions will come back in Review."}` : `${correct} of ${l.quiz.length} correct. ${isTest ? "Not yet. Review the lessons and retake after a day." : "Review the lesson and try again."}`;
      // A retake never lowers the recorded score; the transcript keeps the best.
      const was = lessonState(c.id, l.id) || {};
      markLesson(c.id, l.id, { done: passed || Boolean(was.done), score: Math.max(score, was.score || 0) });
      if (passed) { if (!isTest) addToReviewBank(c, l); afterComplete(c); const ask = main.querySelector("#feedbackAsk"); if (ask) { ask.classList.add("nudge"); setTimeout(() => ask.scrollIntoView({ behavior: "smooth", block: "start" }), 900); } }
    });
  }
  function afterComplete(c) {
    if (courseComplete(c)) {
      const nav = main.querySelector(".lesson-nav");
      if (nav && !nav.querySelector(".cert-link")) nav.insertAdjacentHTML("beforeend", `<a class="btn btn-primary cert-link" href="#/certificate/${c.id}">🎓 Get your certificate</a>`);
    }
  }

  /* ---------- Assessments ---------- */
  function viewAssessment(courseId, aid) {
    const c = byId(courseId); if (!c) return viewNotFound();
    const a = (c.assessments || []).find(x => x.id === aid); if (!a) return viewNotFound();
    return withContent(c, () => viewAssessmentLoaded(c, a));
  }
  function viewAssessmentLoaded(c, a) {
    const st = lessonState(c.id, a.id) || {};
    const lessonsDone = c.lessons.every(l => (lessonState(c.id, l.id) || {}).done);
    const isTest = a.type === "test" && a.quiz.length;
    render(`
      <article class="lesson-body" style="margin:0 auto">
        <div class="breadcrumb"><a href="#/courses">Courses</a> / <a href="#/course/${c.id}">${esc(c.title)}</a> / ${isTest ? "Final test" : "Project"}</div>
        <h1>${esc(a.title)}</h1>
        <p class="muted">${a.minutes >= 60 ? fmtHours(a.minutes) : a.minutes + " min"} ${st.done ? "· <span style='color:var(--success)'>Completed" + (st.score !== undefined ? " · " + Math.round(st.score * 100) + "%" : "") + "</span>" : ""}</p>
        ${!lessonsDone ? `<div class="callout"><b>Finish the lessons first</b><p>This ${isTest ? "test" : "project"} draws on the whole course. You can read it now; complete every lesson before you attempt it.</p></div>` : ""}
        <div class="lesson-content">${a.content}</div>
        ${isTest ? renderQuiz({ ...a, quiz: a.quiz }, a.pass_mark) : `<div class="quiz"><h2>Done with the project?</h2><p class="muted">Mark it complete when your deliverable meets the rubric. Be honest; nobody checks but you, and the point is what you learned.</p><button class="btn btn-primary" id="markDone">${st.done ? "Completed ✓" : "Mark project complete"}</button></div>`}
        <nav class="lesson-nav"><a class="btn btn-secondary" href="#/course/${c.id}">← Course home</a></nav>
      </article>
    `, a.title);
    const markBtn = main.querySelector("#markDone");
    if (markBtn) markBtn.addEventListener("click", () => { markLesson(c.id, a.id, { done: true }); markBtn.textContent = "Completed ✓"; afterComplete(c); });
    if (isTest) wireQuiz(c, a, a.pass_mark, true);
  }

  /* ---------- Review (spaced repetition) ---------- */
  function viewReview(mode) {
    const rs = reviewStats();
    if (!rs.total) {
      return render(`<div class="empty"><h2>Your review bank is empty</h2><p>Pass any lesson quiz and its questions start coming back here on a schedule that keeps them fresh.</p><a class="btn btn-primary" href="#/path">Start learning</a></div>`, "Review");
    }
    // The questions live with each course's content; fetch every course the bank draws on.
    const bank = load(K.review, {});
    const ids = [...new Set(Object.keys(bank).map(k => k.split("/")[0]))].map(byId).filter(Boolean);
    const token = ++routeSeq;
    main.setAttribute("aria-busy", "true");
    Promise.all(ids.map(loadContent)).then(() => { if (token === routeSeq) viewReviewLoaded(mode, rs, bank); })
      .catch(() => { if (token === routeSeq) render(`<div class="empty"><h2>Could not load your questions</h2><p>Check your connection and try again.</p><a class="btn btn-primary" href="#/">Go home</a></div>`, "Review"); });
  }
  function viewReviewLoaded(mode, rs, bank) {
    let queue = mode === "practice" ? shuffle(Object.keys(bank).filter(k => resolveKey(k))).slice(0, 10) : shuffle([...rs.due]);
    if (!queue.length) {
      const days = Math.max(0, Math.ceil((rs.nextDue - Date.now()) / DAY));
      return render(`
        <span class="eyebrow">Review</span><h1>All caught up.</h1>
        <div class="stats">
          <div class="stat-card"><b>${rs.total}</b><span>questions in your bank</span></div>
          <div class="stat-card"><b>${rs.retention === null ? "–" : rs.retention + "%"}</b><span>retention</span></div>
          <div class="stat-card"><b>${days}</b><span>day${days === 1 ? "" : "s"} until next review</span></div>
          <div class="stat-card"><b>${streak()}</b><span>day streak</span></div>
        </div>
        <p class="muted">Nothing is due. Come back when it is, or practise a random set now (practice still reschedules what you get wrong).</p>
        <div class="btn-row"><a class="btn btn-secondary" href="#/review?mode=practice">Practise 10 random</a><a class="btn btn-secondary" href="#/path">Back to the path</a></div>
      `, "Review");
    }
    let i = 0, right = 0;
    render(`
      <span class="eyebrow">Review · ${mode === "practice" ? "practice set" : `${queue.length} due`}</span>
      <h1 style="font-size:1.6rem">Keep it fresh.</h1>
      <div id="card"></div>
    `, "Review");
    const showCard = () => {
      if (i >= queue.length) {
        main.querySelector("#card").innerHTML = `<div class="review-card"><div class="stem">Done. ${right} of ${queue.length} right.</div><p class="muted">${mode === "practice" ? "Practice: wrong answers come back tomorrow; right ones keep the schedule they had." : "Right answers come back later; wrong ones come back tomorrow."}</p><div class="btn-row"><a class="btn btn-primary" href="#/review">Back to Review</a><a class="btn btn-secondary" href="#/my-learning">See your transcript</a></div></div>`;
        return;
      }
      const it = resolveKey(queue[i]); if (!it) { i++; return showCard(); }
      const { c, l, q, key } = it;
      main.querySelector("#card").innerHTML = `
        <div class="review-card">
          <div class="from">${esc(c.title)} · <a href="#/course/${c.id}/lesson/${l.id}">${esc(l.title)}</a></div>
          <div class="stem">${esc(q.q)}</div>
          <div class="review-opts">${q.options.map((o, oi) => `<button data-oi="${oi}"><b class="opt-letter">${"ABCDEF"[oi]}.</b> ${esc(o)}</button>`).join("")}</div>
          <div id="explain"></div>
          <div class="review-foot"><span>${i + 1} of ${queue.length}</span><button class="btn btn-primary" id="nextBtn" hidden>Next →</button></div>
        </div>`;
      main.querySelectorAll(".review-opts button").forEach(b => b.addEventListener("click", () => {
        const oi = Number(b.dataset.oi); const correct = oi === q.answer;
        main.querySelectorAll(".review-opts button").forEach((x, xi) => {
          x.disabled = true;
          const tag = xi === q.answer ? (xi === oi ? "Correct" : "Right answer") : xi === oi ? "Your answer" : "";
          if (xi === q.answer) x.classList.add("correct"); else if (xi === oi) x.classList.add("wrong");
          if (tag) x.insertAdjacentHTML("beforeend", `<span class="mark">${tag}</span>`);
        });
        if (correct) right++;
        // Practice reschedules only what was missed, as the page says; a due review grades both ways.
        if (mode !== "practice" || !correct) gradeReview(key, correct);
        main.querySelector("#explain").innerHTML = `<div class="review-explain">${correct ? "Right." : "Not quite."} ${esc(q.explain || "")}</div>`;
        const nb = main.querySelector("#nextBtn"); nb.hidden = false; nb.focus();
        nb.addEventListener("click", () => { i++; showCard(); });
      }));
    };
    showCard();
  }

  /* ---------- My learning / transcript ---------- */
  function viewMyLearning() {
    const started = COURSES.filter(courseStarted);
    const prog = load(K.progress, {});
    let lessonsDone = 0, minutes = 0;
    COURSES.forEach(c => c.lessons.forEach(l => { if ((prog[c.id] || {})[l.id]?.done) { lessonsDone++; minutes += l.minutes || 0; } }));
    const finished = started.filter(courseComplete); const rs = reviewStats();
    // Me is where a signed-in learner reaches their account; the nav has no separate slot for it.
    const me = signedIn() ? `<p class="me-links">@${esc((account() || {}).username || "")} · <a href="#/friends">Friends</a> · <a href="#/signin">Account settings</a></p>` : "";
    if (!started.length) {
      return render(`<div class="empty"><h2>Nothing here yet</h2>${me}<p>Start any course and your transcript begins.</p><a class="btn btn-primary" href="#/path">Start the path</a></div>`, "My learning");
    }
    render(`
      <span class="eyebrow">Transcript</span>
      <h1>My learning</h1>
      ${me}
      <div class="stats">
        <div class="stat-card"><b>${finished.length}</b><span>courses completed</span></div>
        <div class="stat-card"><b>${lessonsDone}</b><span>lessons completed</span></div>
        <div class="stat-card"><b>${fmtHours(minutes)}</b><span>of study</span></div>
        <div class="stat-card"><b>${rs.total}</b><span>questions in review bank</span></div>
        <div class="stat-card"><b>${rs.retention === null ? "–" : rs.retention + "%"}</b><span>retention</span></div>
        <div class="stat-card"><b>${streak()}</b><span>day streak</span></div>
      </div>
      ${rs.due.length ? `<div class="path-next"><div><h3>${rs.due.length} due for review</h3><p>Keep your retention up.</p></div><a class="btn btn-primary" href="#/review">Review now</a></div>` : ""}
      <section class="section"><h2>In progress</h2><div class="grid">${started.filter(c => !courseComplete(c)).map(courseCard).join("") || "<p class='muted'>Nothing in progress.</p>"}</div></section>
      ${finished.length ? `<section class="section"><h2>Completed</h2><ul class="lesson-list">${finished.map(c => `<li><a href="#/certificate/${c.id}"><span class="lesson-num">✓</span><span>${esc(c.title)}</span><span class="lesson-time">certificate</span></a></li>`).join("")}</ul></section>` : ""}
      <section class="section">
        <h3>Your data</h3>
        <p class="muted">${API ? `Everything is stored in this browser. ${signedIn() ? `It also syncs to <a href="#/signin">your account</a>, so it follows you between devices.` : `<a href="#/signin">Log in</a> and it follows you between devices. You can also move it by hand.`}` : "Everything is stored in this browser only. Export it to move to another device, or clear it. Accounts with sync are on the roadmap."}</p>
        <div class="btn-row">
          <button class="btn btn-secondary" id="exportBtn">Copy my data</button>
          <button class="btn btn-secondary" id="importBtn">Paste my data</button>
          <button class="btn btn-secondary" id="resetBtn">Clear everything</button>
        </div>
      </section>
    `, "My learning");
    main.querySelector("#exportBtn").addEventListener("click", async () => {
      const json = JSON.stringify({ progress: load(K.progress, {}), review: load(K.review, {}), activity: load(K.activity, {}), prefs: prefs(), name: lsGet("foval.name") || "" });
      try { await navigator.clipboard.writeText(json); alert("Copied. Paste it on your other device under 'Paste my data'."); } catch { prompt("Copy this text:", json); }
    });
    main.querySelector("#importBtn").addEventListener("click", () => {
      const txt = prompt("Paste your data:"); if (!txt) return;
      try { const d = JSON.parse(txt); if (d.progress) save(K.progress, d.progress); if (d.review) save(K.review, d.review); if (d.activity) save(K.activity, d.activity); if (d.prefs) save(K.prefs, d.prefs); if (d.name) lsSet("foval.name", d.name); route(); }
      catch { alert("That didn't look like Foval data."); }
    });
    main.querySelector("#resetBtn").addEventListener("click", () => {
      if (confirm("Clear all progress, review history, and streaks in this browser? This cannot be undone.")) { Object.values(K).forEach(lsRemove); lsRemove("foval.name"); route(); }
    });
  }

  function viewCertificate(id) {
    const c = byId(id); if (!c) return viewNotFound();
    const p = courseProgress(c);
    if (p.done < p.total) return render(`<div class="empty"><h2>Not quite yet</h2><p>Finish all ${p.total} lessons to earn this certificate.</p><a class="btn btn-primary" href="#/course/${c.id}">Back to course</a></div>`, "Certificate");
    const name = lsGet("foval.name") || "";
    const date = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    render(`
      <div class="cert">
        <img class="cert-seal" src="assets/mark.svg" alt="Foval Learning Institute seal">
        <span class="eyebrow">Foval Learning Institute</span>
        <h2>Certificate of Completion</h2>
        <p>This certifies that</p>
        <h3>${name ? esc(name) : "________________"}</h3>
        <p>has completed all ${c.lessons.length} lessons${(c.assessments || []).some(a => a.type === "test") ? " and passed the final test" : ""} of</p>
        <h3>${esc(c.title)}</h3>
        <p class="muted">${date}</p>
      </div>
      <div class="btn-row" style="justify-content:center">
        <button class="btn btn-secondary" id="nameBtn">${name ? "Change name" : "Add your name"}</button>
        <button class="btn btn-primary" id="printBtn">Print / save as PDF</button>
      </div>
    `, "Certificate");
    main.querySelector("#nameBtn").addEventListener("click", () => { const n = prompt("Name to show on the certificate:", name); if (n !== null) { lsSet("foval.name", n.trim()); route(); } });
    main.querySelector("#printBtn").addEventListener("click", () => window.print());
  }

  function viewAbout() {
    render(`
      <div class="prose">
        <span class="eyebrow">About</span>
        <h1>What we stand on</h1>
        <p class="lede">Faith. Knowledge. Life. Free for everyone. Good teaching should not be rationed by price, and a real education should cover the great questions, the practical skills of living well, and the faith that gives both their meaning. Foval Learning Institute is free, open, and built to make you well-read, hard to fool, and useful.</p>
        <h2>The values</h2>
        <ol>
          <li><strong>Free, for everyone.</strong> No tuition, no paywalls, no account needed to learn, and no lesson carries an advertisement.</li>
          <li><strong>Truth, and honesty about it.</strong> What is known, how it is known, and what is not settled. Every claim sourced and fact-checked.</li>
          <li><strong>Faith, taught honestly.</strong> The School of Christian Studies teaches from within the Christian faith and says so on every course. The rest of the institute teaches on neutral ground and never mocks belief or unbelief.</li>
          <li><strong>Depth over polish.</strong> Written from the standard references, with worked examples and the mistakes experts know beginners make.</li>
          <li><strong>The whole person.</strong> Books and street smarts: history and philosophy alongside money, sales, health, and survival.</li>
          <li><strong>Plain speech.</strong> A good professor talking to one student across a table.</li>
          <li><strong>Learning that lasts.</strong> You think while you read, do the work before the quiz, and come back on a schedule so it stays learned.</li>
          <li><strong>Built with the people learning from it.</strong> Every lesson asks for feedback. What makes it better gets built in; what would make it shallower or slanted is set aside, with a reason.</li>
          <li><strong>Open about the teaching.</strong> Every lesson names its sources, so you can check us. Where a question is contested, the disagreement is shown rather than quietly settled.</li>
        </ol>
        <h2>What we teach</h2>
        <p>Fifteen schools: thinking tools, mathematics, the natural sciences, history, philosophy and religion, literature and the arts, economics and government, computer science and AI, business, money, health, practical self-reliance, communication, learning itself, and Christian Studies. The Foval Core is a recommended path through them, in the order that builds best.</p>
        <h2>How we keep it honest</h2>
        <p>Every lesson is written from the standard references in its field, fact-checked in a separate pass, and audited for neutrality: settled questions are taught as settled, contested ones are taught as contested with every major position given its strongest case, and value questions are described rather than decided. The full standard is public in the <a href="${REPO}/blob/main/docs/EDITORIAL_STANDARDS.md" target="_blank" rel="noopener">editorial standards</a>.</p>
        <h2>How it works</h2>
        <ol>
          <li><strong>Learn.</strong> Follow the path or pick any course. Lessons include worked examples, practice, and a quiz that tests understanding.</li>
          <li><strong>Keep it.</strong> Questions you've passed come back on a lengthening schedule in <a href="#/review">Review</a>, so what you learn stays learned.</li>
          <li><strong>Prove it.</strong> Your transcript tallies everything. Finish a course and print a certificate.</li>
        </ol>
        <h2>Privacy</h2>
        <p>${API
          ? `No account is needed to read anything here, and there never will be. Your progress is stored in your own browser. If you <a href="#/signin">log in</a>, it also syncs to our database so it follows you between devices, and then we hold your username, the email address you gave us, your friends list and that progress, and nothing else. Your password is scrambled on your own device before it is sent, so we never see it. Friends you accept see the lessons you finish and the days you study, never your scores. Your email is used for password resets and occasional news from the institute, and is never sold or shared. We also count how many times each page is viewed, with no cookies and nothing that says who you are. You can delete the account and every row of it from the account page, or move your progress by hand from <a href="#/my-learning">your page</a>.`
          : `No account is needed. Your progress is stored in your own browser and never sent anywhere. Export it from <a href="#/my-learning">your page</a> to move devices.`}</p>
        <h2>Tell us when it's wrong</h2>
        <p>Every lesson has a feedback form at the bottom and a "Report a problem" link. Both are read. What makes a lesson clearer, deeper, or more accurate gets built in, and what would make it shallower or slanted is set aside with a reason. That is the only thing the institute asks of you.</p>
        <h2>Who built it</h2>
        <p>One person started this. <a href="#/about-john">More about John Foval</a>.</p>
      </div>
    `, "About");
  }

  function viewAboutJohn() {
    render(`
      <div class="prose">
        <img class="portrait" src="assets/media/john-foval.jpg" width="800" height="788" alt="John Foval" loading="lazy">
        <span class="eyebrow">About</span>
        <h1>John Foval</h1>
        <p class="lede">I built Foval Learning Institute. Here's where it came from.</p>
        <p>I'm in the Baton Rouge area of Louisiana and I work in AI.</p>
        <h2>School and me</h2>
        <p>I was in Talented and Gifted as a young kid and I did fine in school after that. Grades were never the problem. I was interested in way too many things at once, and school wants you in one room, on one subject, on somebody else's clock. I liked learning. I was not good at that.</p>
        <h2>LSU, briefly</h2>
        <p>I went to LSU for a while and didn't finish. Living life was more interesting to me at the time, so I went straight to work. I'm not going to dress that up as a plan. It worked out, and I kept on loving learning the whole way, school or no school.</p>
        <h2>Breadth</h2>
        <p>I've always been drawn to a renaissance man kind of mentality, and general studies suited me for that reason. I want wide breadth of knowledge with reasonable depth in each part of it. That's what the Foval Core is built to give you.</p>
        <h2>Why this exists</h2>
        <p>Working in AI means I see up close how much knowledge is sitting inside these models, and how much more is sitting on the internet next to it. Very little of it is arranged so a person can actually learn from it. Putting it into real courses seemed worth doing. So that's what this is. Free, for anybody who wants straight information and skills worth having.</p>
        <h2>One ask</h2>
        <p>If a lesson is wrong, unclear, or could be better, tell me. There's a form at the bottom of every one. I read what comes in and I use it.</p>
        <p class="muted"><a href="#/about">What we stand on</a></p>
      </div>
    `, "John Foval");
  }

  /* ---------- sign in ----------
     A username and a password. The password never leaves this page: passwordKey stretches
     it with PBKDF2 (600,000 rounds, salted with the username) and only the result is sent.
     That is what lets the Worker stay on the free plan without storing anything a leaked
     table would make cheap to crack. workers/api/src/index.js has the other half. */
  const HELP_EMAIL = window.FOVAL_HELP_EMAIL || "";

  async function passwordKey(username, password) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits(
      { name: "PBKDF2", hash: "SHA-256", salt: new TextEncoder().encode(`foval-login-v1:${username}`), iterations: 600000 }, base, 256);
    return btoa(String.fromCharCode(...new Uint8Array(bits))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  const cleanUsername = u => String(u || "").trim().toLowerCase();

  // A form's note line and a busy state for its submit button, shared by every account form.
  function formKit(form) {
    const note = form.querySelector(".signin-note");
    const btn = form.querySelector("button[type=submit]");
    return {
      say(text, bad) { note.textContent = text; note.className = "signin-note" + (bad ? " bad" : ""); },
      busy(on) { btn.disabled = on; },
    };
  }
  const field = (label, name, type, extra = "") =>
    `<label class="fb-field">${label}<input type="${type}" name="${name}" ${extra}></label>`;
  const newPasswordFields = (label = "Password") =>
    field(`${label} <span class="muted">(at least 8 characters)</span>`, "password", "password", `autocomplete="new-password" minlength="8" required`) +
    field("The same again", "password2", "password", `autocomplete="new-password" minlength="8" required`);
  function checkNewPassword(form, kit) {
    if (form.password.value.length < 8) { kit.say("Use at least 8 characters.", true); return false; }
    if (form.password.value !== form.password2.value) { kit.say("The two passwords are not the same.", true); return false; }
    return true;
  }
  function signedInAs(r, username) {
    const u = r.user || {};
    setAccount({ token: r.token, username: u.username || username, email: u.email || "", name: u.name || "", syncedAt: 0 });
    if (u.name && !lsGet("foval.name")) lsSet("foval.name", u.name);
  }

  function viewSignIn(params) {
    if (!API) return viewNotFound();
    const a = account();
    if (a && a.token) return viewSignedIn(a);
    const creating = params.get("new") === "1";

    render(`
      <div class="prose signin">
        <span class="eyebrow">Your account</span>
        <h1>${creating ? "Make an account." : "Log in."}</h1>
        <p class="lede">You do not need an account to learn here, and you never will. An account carries your completed lessons, your review schedule and your streak between devices, and lets you add friends and follow each other's progress. Nothing you have done in this browser is lost by signing in; it is merged in.</p>
        ${creating ? `
        <form id="signupForm">
          ${field("Username <span class=\"muted\">(3 to 20 letters, numbers or _; your friends find you by it)</span>", "username", "text", `autocomplete="username" autocapitalize="none" spellcheck="false" pattern="[A-Za-z0-9_]{3,20}" maxlength="20" required`)}
          ${field("Your name <span class=\"muted\">(optional; what your friends see)</span>", "name", "text", `autocomplete="name" maxlength="120"`)}
          ${field("Email address", "email", "email", `autocomplete="email" required`)}
          <p class="muted" style="font-size:.9rem;margin:-.25rem 0 .5rem">Used if you forget your password, and now and then for news from the institute.</p>
          ${newPasswordFields()}
          <div class="btn-row"><button class="btn btn-primary" type="submit">Make my account</button></div>
          <p class="signin-note" aria-live="polite"></p>
        </form>
        <p>Already have one? <a href="#/signin">Log in</a>.</p>
        <p class="muted">By making an account you agree to the <a href="#/community">community rules</a>. They are short.</p>` : `
        <form id="signinForm">
          ${field("Username", "username", "text", `autocomplete="username" autocapitalize="none" spellcheck="false" required`)}
          ${field("Password", "password", "password", `autocomplete="current-password" required`)}
          <div class="btn-row"><button class="btn btn-primary" type="submit">Log in</button></div>
          <p class="signin-note" aria-live="polite"></p>
        </form>
        <p><a href="#/reset">Forgot your password?</a></p>
        <p>New here? <a href="#/signin?new=1">Make an account</a>. It takes a minute.</p>`}
        <h2>What we keep</h2>
        <p>Your username, your name if you give one, your email address, and the progress you can already see on <a href="#/my-learning">your page</a>. Your email is used for password resets and, now and then, for news from the institute; it is never sold or shared. Your password is scrambled on your own device before it is sent, so we never see or store it. Your friends see the lessons you finish and the days you study; nobody else sees anything. You can delete the whole account from the account page.</p>
      </div>
    `, creating ? "Make an account" : "Log in");

    if (creating) {
      const form = main.querySelector("#signupForm"), kit = formKit(form);
      form.addEventListener("submit", async e => {
        e.preventDefault();
        const username = cleanUsername(form.username.value);
        if (!/^[a-z0-9_]{3,20}$/.test(username)) return kit.say("A username is 3 to 20 letters, numbers or underscores.", true);
        if (!checkNewPassword(form, kit)) return;
        kit.busy(true); kit.say("Making your account.");
        try {
          const key = await passwordKey(username, form.password.value);
          const r = await apiCall("/auth/signup", { method: "POST", body: { username, key, email: form.email.value.trim(), name: form.name.value.trim() } });
          signedInAs(r, username);
          location.hash = "#/signin";
          route();
        } catch (err) { kit.say(err.message, true); kit.busy(false); }
      });
    } else {
      const form = main.querySelector("#signinForm"), kit = formKit(form);
      form.addEventListener("submit", async e => {
        e.preventDefault();
        const username = cleanUsername(form.username.value);
        kit.busy(true); kit.say("Signing in.");
        try {
          const key = await passwordKey(username, form.password.value);
          signedInAs(await apiCall("/auth/signin", { method: "POST", body: { username, key } }), username);
          route();   // already on #/signin, so setting the hash would fire no event
        } catch (err) { kit.say(err.message, true); kit.busy(false); }
      });
    }
  }

  // No email goes out from here. A forgotten password is a message to John, who sends a
  // one-time code to the address on file (npm run reset-code). workers/api/README.md.
  function viewReset() {
    if (!API) return viewNotFound();
    const mail = HELP_EMAIL
      ? `mailto:${HELP_EMAIL}?subject=${encodeURIComponent("Foval password reset")}&body=${encodeURIComponent("Username: \n\nPlease send me a reset code.")}`
      : "";
    render(`
      <div class="prose signin">
        <span class="eyebrow">Your account</span>
        <h1>Forgot your password?</h1>
        <p class="lede">There is no automatic reset yet. A person handles it, usually within a day.</p>
        <h2>1. Ask for a code</h2>
        ${HELP_EMAIL
          ? `<p>Send a request with your username and <strong>the email address you signed up with</strong>. The code is only ever sent to the address on your account, never to one given in a request, so nobody else can take it over.</p>
             <div class="btn-row"><a class="btn btn-secondary" href="#/help?kind=reset">Ask for a reset code</a></div>
             <p class="muted">Or email <a href="${mail}">${esc(HELP_EMAIL)}</a> from that address.</p>`
          : `<p>Resets are not open yet. Your progress is still in this browser, and nothing is lost.</p>`}
        <h2>2. Use the code</h2>
        <form id="resetForm">
          ${field("Username", "username", "text", `autocomplete="username" autocapitalize="none" spellcheck="false" required`)}
          ${field("Reset code", "code", "text", `autocomplete="one-time-code" autocapitalize="characters" spellcheck="false" placeholder="ABCD-EFGH" required`)}
          ${newPasswordFields("New password")}
          <div class="btn-row"><button class="btn btn-primary" type="submit">Set my new password</button></div>
          <p class="signin-note" aria-live="polite"></p>
        </form>
        <p class="muted">A code works once and lasts 48 hours. Setting a new password signs you out on every other device.</p>
      </div>
    `, "Reset your password");
    const form = main.querySelector("#resetForm"), kit = formKit(form);
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const username = cleanUsername(form.username.value);
      if (!checkNewPassword(form, kit)) return;
      kit.busy(true); kit.say("Checking the code.");
      try {
        const key = await passwordKey(username, form.password.value);
        const r = await apiCall("/auth/reset", { method: "POST", body: { username, code: form.code.value, key } });
        setAccount({ token: r.token, username, email: "", name: "", syncedAt: 0 });
        location.hash = "#/signin";
      } catch (err) { kit.say(err.message, true); kit.busy(false); }
    });
  }

  function viewSignedIn(a) {
    const last = a.syncedAt ? new Date(a.syncedAt).toLocaleString() : "not yet";
    render(`
      <div class="prose signin">
        <span class="eyebrow">Your account</span>
        <h1 id="whoami">${a.username ? "@" + esc(a.username) : "You are signed in."}</h1>
        <p class="muted">Last synced: <span id="lastSync">${esc(last)}</span>. Your progress syncs on its own a few seconds after you finish a lesson or a review, and when you close the tab.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="#/friends">Friends</a>
          <button class="btn btn-secondary" id="syncBtn">Sync now</button>
          <button class="btn btn-secondary" id="signoutBtn">Sign out</button>
        </div>
        <p class="signin-note" id="signinNote" aria-live="polite"></p>

        <h2>Email on record</h2>
        <form id="emailForm">
          ${field("Used for password resets and, now and then, news from the institute", "email", "email", `autocomplete="email" value="${esc(a.email || "")}" required`)}
          <div class="btn-row"><button class="btn btn-secondary" type="submit">Save</button></div>
          <p class="signin-note" aria-live="polite"></p>
        </form>

        <h2>Change your password</h2>
        <form id="pwForm">
          ${field("Current password", "current", "password", `autocomplete="current-password" required`)}
          ${newPasswordFields("New password")}
          <div class="btn-row"><button class="btn btn-secondary" type="submit">Change password</button></div>
          <p class="signin-note" aria-live="polite"></p>
        </form>

        <h2>Leaving</h2>
        <p>Signing out leaves everything in this browser exactly as it is; it only forgets the account. Deleting the account removes your username, email, friends and every row of your progress from our database, permanently. Your copy in this browser is untouched either way.</p>
        <div class="btn-row"><button class="btn btn-secondary" id="deleteBtn">Delete my account</button></div>
      </div>
    `, "Your account");

    const noteEl = main.querySelector("#signinNote");
    const say = (text, bad) => { noteEl.textContent = text; noteEl.className = "signin-note" + (bad ? " bad" : ""); };

    // Fill in anything this browser does not know yet (after a reset, say).
    apiCall("/auth/session").then(r => {
      if (!r.signedIn) return route();
      setAccount(Object.assign({}, account(), r.user));
      const who = main.querySelector("#whoami"); if (who) who.textContent = "@" + r.user.username;
      const em = main.querySelector("#emailForm input"); if (em && !em.value) em.value = r.user.email || "";
    }).catch(() => {});
    if (!a.syncedAt) {
      say("Merging this browser with your account.");
      syncNow().then(() => { say("Merged. Everything you had here is on your account."); const el = main.querySelector("#lastSync"); if (el) el.textContent = new Date().toLocaleString(); })
        .catch(err => say(err.message, true));
    }
    main.querySelector("#syncBtn").addEventListener("click", async () => {
      say("Syncing.");
      try { await syncNow(); say("Synced."); main.querySelector("#lastSync").textContent = new Date().toLocaleString(); }
      catch (err) { say(err.message, true); }
    });
    main.querySelector("#signoutBtn").addEventListener("click", async () => {
      try { await syncNow(); } catch { /* sign out anyway */ }
      try { await apiCall("/auth/signout", { method: "POST" }); } catch { /* the token is going in the bin regardless */ }
      setAccount(null); route();
    });
    main.querySelector("#deleteBtn").addEventListener("click", async () => {
      if (!confirm("Delete your account, your friends list and every row of your progress from our database? This cannot be undone. Your copy in this browser is not touched.")) return;
      try { await apiCall("/account", { method: "POST" }); setAccount(null); route(); }
      catch (err) { say(err.message, true); }
    });

    const emailForm = main.querySelector("#emailForm"), emailKit = formKit(emailForm);
    emailForm.addEventListener("submit", async e => {
      e.preventDefault(); emailKit.busy(true);
      try {
        const r = await apiCall("/account/email", { method: "POST", body: { email: emailForm.email.value.trim() } });
        setAccount(Object.assign({}, account(), { email: r.user.email })); emailKit.say("Saved.");
      } catch (err) { emailKit.say(err.message, true); }
      emailKit.busy(false);
    });
    const pwForm = main.querySelector("#pwForm"), pwKit = formKit(pwForm);
    pwForm.addEventListener("submit", async e => {
      e.preventDefault();
      if (!checkNewPassword(pwForm, pwKit)) return;
      const username = (account() || {}).username;
      if (!username) return pwKit.say("Reload the page and try again.", true);
      pwKit.busy(true); pwKit.say("Changing it.");
      try {
        const [oldKey, newKey] = await Promise.all([passwordKey(username, pwForm.current.value), passwordKey(username, pwForm.password.value)]);
        const r = await apiCall("/auth/password", { method: "POST", body: { oldKey, newKey } });
        setAccount(Object.assign({}, account(), { token: r.token }));
        pwForm.reset(); pwKit.say("Changed. Your other devices have been signed out.");
      } catch (err) { pwKit.say(err.message, true); }
      pwKit.busy(false);
    });
  }

  /* ---------- friends ----------
     Add people by username, see the lessons they finish and the days they study, and
     cheer a finished lesson. A cheer is private: only the person cheered sees it, and
     nothing is counted in public. No feed, no ranking. docs/PLATFORM_ROADMAP.md, Phase 4. */
  const itemTitle = (cid, lid) => {
    const c = COURSES.find(x => x.id === cid);
    const item = c && courseItems(c).find(x => x.id === lid);
    return { course: c ? c.title : cid, lesson: item ? item.title : lid, href: c && item ? `#/course/${c.id}/${c.lessons.includes(item) ? "lesson" : "assessment"}/${item.id}` : "" };
  };
  function ago(when) {
    if (!when) return "";
    const t = typeof when === "number" ? when : Date.parse(when + "T12:00:00");
    const days = Math.floor((Date.now() - t) / DAY);
    return days <= 0 ? "today" : days === 1 ? "yesterday" : days < 30 ? `${days} days ago` : new Date(t).toLocaleDateString();
  }
  const who = p => p.name ? `${esc(p.name)} <span class="muted">@${esc(p.username)}</span>` : `@${esc(p.username)}`;
  function streakFrom(days) {
    const set = new Set(days); let n = 0; const d = new Date();
    if (!set.has(today())) d.setDate(d.getDate() - 1);
    while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function needSignIn(title) {
    render(`<div class="empty"><h2>${title}</h2><p>Friends need an account, so you can find each other. Reading and learning never do.</p><div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="#/signin?new=1">Make an account</a><a class="btn btn-secondary" href="#/signin">Log in</a></div></div>`, title);
  }

  async function viewFriends() {
    if (!API) return viewNotFound();
    if (!signedIn()) return needSignIn("Learn alongside your friends");
    const seq = ++routeSeq;
    let data;
    try { data = await apiCall("/friends"); }
    catch (err) { if (seq === routeSeq) render(`<div class="empty"><h2>Could not load your friends</h2><p>${esc(err.message)}</p><a class="btn btn-primary" href="#/friends">Try again</a></div>`, "Friends"); return; }
    if (seq !== routeSeq) return;

    const unseen = data.cheers.filter(c => !c.seen);
    render(`
      <span class="eyebrow">Friends · <a href="#/signin">your account</a></span>
      <h1>Learning alongside.</h1>
      ${data.cheers.length ? `<section class="section"><h2>Cheers for you</h2><ul class="friend-list">${data.cheers.slice(0, 12).map(c => { const t = itemTitle(c.course, c.lesson); return `<li class="${c.seen ? "" : "fresh"}"><span>${who(c)} cheered <a href="${t.href}">${esc(t.lesson)}</a><br><span class="muted">${esc(t.course)} · ${c.seen ? "" : "<strong>new</strong>, "}${ago(c.at)}</span></span></li>`; }).join("")}</ul></section>` : ""}
      ${data.incoming.length ? `<section class="section"><h2>Asking to be friends</h2><ul class="friend-list">${data.incoming.map(r => `<li><span>${who(r)}</span><span class="btn-row"><button class="btn btn-primary btn-sm" data-act="accept" data-u="${esc(r.username)}">Accept</button><button class="btn btn-secondary btn-sm" data-act="remove" data-u="${esc(r.username)}">Decline</button></span></li>`).join("")}</ul></section>` : ""}
      <section class="section signin">
        <h2>Add a friend</h2>
        <form id="addForm">
          ${field("Their username", "username", "text", `autocapitalize="none" spellcheck="false" required`)}
          <div class="btn-row"><button class="btn btn-secondary" type="submit">Send a request</button></div>
          <p class="signin-note" aria-live="polite"></p>
        </form>
        <p class="muted">Yours is <strong>@${esc((account() || {}).username || "")}</strong>. Tell a friend, and they can add you.</p>
      </section>
      <section class="section"><h2>Your friends</h2>
        ${data.friends.length ? `<ul class="friend-list">${data.friends.map(f => { const t = f.latest && itemTitle(f.latest.course, f.latest.lesson); return `<li><span><a href="#/friends/${encodeURIComponent(f.username)}">${who(f)}</a><br><span class="muted">${f.lessonsDone} lesson${f.lessonsDone === 1 ? "" : "s"} finished${t ? ` · latest: ${esc(t.lesson)}` : ""}${f.lastDay ? ` · studied ${ago(f.lastDay)}` : ""}</span></span><a class="btn btn-secondary btn-sm" href="#/friends/${encodeURIComponent(f.username)}">See progress</a></li>`; }).join("")}</ul>`
          : `<p class="muted">No friends yet. Add someone by their username above.</p>`}
      </section>
      ${data.outgoing.length ? `<section class="section"><h2>Waiting for an answer</h2><ul class="friend-list">${data.outgoing.map(r => `<li><span>@${esc(r.username)} <span class="muted">· asked ${ago(r.at)}</span></span><button class="btn btn-secondary btn-sm" data-act="remove" data-u="${esc(r.username)}">Cancel</button></li>`).join("")}</ul></section>` : ""}
      <p class="muted" style="margin-top:2rem">Friends see the lessons you finish and the days you study, not your quiz scores. <a href="#/community">Community rules</a>.</p>
    `, "Friends");

    // Opening this page is seeing the cheers; requests stay counted until they are answered.
    setFriendsBadge(data.incoming.length);
    if (unseen.length) apiCall("/cheers/seen", { method: "POST" }).catch(() => {});
    main.querySelectorAll("button[data-act]").forEach(b => b.addEventListener("click", async () => {
      if (b.dataset.act === "remove" && b.textContent === "Remove" && !confirm(`Remove @${b.dataset.u} from your friends?`)) return;
      b.disabled = true;
      try { await apiCall(`/friends/${b.dataset.act}`, { method: "POST", body: { username: b.dataset.u } }); viewFriends(); }
      catch (err) { alert(err.message); b.disabled = false; }
    }));
    const form = main.querySelector("#addForm"), kit = formKit(form);
    form.addEventListener("submit", async e => {
      e.preventDefault();
      kit.busy(true);
      try {
        const r = await apiCall("/friends/request", { method: "POST", body: { username: cleanUsername(form.username.value) } });
        if (r.status === "friends") return viewFriends();
        kit.say("Sent. They will see it on their Friends page."); form.reset();
        setTimeout(viewFriends, 1200);
      } catch (err) { kit.say(err.message, true); }
      kit.busy(false);
    });
  }

  async function viewFriend(username) {
    if (!API) return viewNotFound();
    if (!signedIn()) return needSignIn("Log in to see your friends");
    const seq = ++routeSeq;
    let f;
    try { f = await apiCall(`/friends/${encodeURIComponent(username)}`); }
    catch (err) { if (seq === routeSeq) render(`<div class="empty"><h2>Not someone you can see</h2><p>${esc(err.message)}</p><a class="btn btn-primary" href="#/friends">Your friends</a></div>`, "Friends"); return; }
    if (seq !== routeSeq) return;

    const cheered = new Set(f.cheered);
    const done = [];
    for (const [cid, lessons] of Object.entries(f.done)) for (const [lid, at] of Object.entries(lessons)) done.push({ cid, lid, at });
    done.sort((x, y) => y.at - x.at);
    const courses = COURSES.map(c => ({ c, n: courseItems(c).filter(x => (f.done[c.id] || {})[x.id]).length, total: courseItems(c).length })).filter(x => x.n);
    const cheerBtn = (cid, lid) => cheered.has(`${cid}/${lid}`)
      ? `<span class="cheered">Cheered ✓</span>`
      : `<button class="btn btn-secondary btn-sm" data-c="${esc(cid)}" data-l="${esc(lid)}">Cheer</button>`;

    render(`
      <div class="breadcrumb"><a href="#/friends">Friends</a> / @${esc(f.username)}</div>
      <h1>${esc(f.name || "@" + f.username)}</h1>
      ${f.name ? `<p class="muted">@${esc(f.username)}</p>` : ""}
      <div class="stats">
        <div class="stat-card"><b>${done.length}</b><span>lessons finished</span></div>
        <div class="stat-card"><b>${courses.filter(x => x.n === x.total).length}</b><span>courses completed</span></div>
        <div class="stat-card"><b>${streakFrom(f.days)}</b><span>day streak</span></div>
        <div class="stat-card"><b>${f.days.filter(d => Date.parse(d) > Date.now() - 7 * DAY).length}</b><span>days studied this week</span></div>
      </div>
      <section class="section"><h2>Recently finished</h2>
        ${done.length ? `<ul class="friend-list">${done.slice(0, 20).map(d => { const t = itemTitle(d.cid, d.lid); return `<li><span><a href="${t.href}">${esc(t.lesson)}</a><br><span class="muted">${esc(t.course)} · ${ago(d.at)}</span></span>${cheerBtn(d.cid, d.lid)}</li>`; }).join("")}</ul>`
          : `<p class="muted">Nothing finished yet. When they finish a lesson it shows up here, and you can cheer it.</p>`}
      </section>
      ${courses.length ? `<section class="section"><h2>Courses</h2><ul class="lesson-list">${courses.map(x => `<li><a href="#/course/${x.c.id}"><span class="lesson-num">${x.n === x.total ? "✓" : ""}</span><span>${esc(x.c.title)}</span><span class="lesson-time">${x.n} of ${x.total}</span></a></li>`).join("")}</ul></section>` : ""}
      <div class="btn-row" style="margin-top:2rem"><button class="btn btn-secondary" id="removeBtn">Remove from friends</button></div>
    `, f.name || "@" + f.username);

    main.querySelectorAll("button[data-c]").forEach(b => b.addEventListener("click", async () => {
      b.disabled = true;
      try {
        await apiCall("/cheer", { method: "POST", body: { username: f.username, course: b.dataset.c, lesson: b.dataset.l } });
        b.outerHTML = `<span class="cheered">Cheered ✓</span>`;
      } catch (err) { alert(err.message); b.disabled = false; }
    }));
    main.querySelector("#removeBtn").addEventListener("click", async () => {
      if (!confirm(`Remove @${f.username} from your friends? You will stop seeing each other's progress.`)) return;
      try { await apiCall("/friends/remove", { method: "POST", body: { username: f.username } }); location.hash = "#/friends"; }
      catch (err) { alert(err.message); }
    });
  }

  // Signed out, the Me slot is a Log in button. Signed in it is Me again, with Friends after
  // it, counting anything waiting there. Six links is the most a phone's nav holds; the
  // account page is linked from Me and from Friends. Signed out, a learner's own progress
  // is still at #/my-learning, linked from the footer and the home page.
  function updateNav() {
    const nav = document.querySelector(".site-nav"), me = document.getElementById("meLink");
    if (!nav || !me || !API) return;
    const on = signedIn();
    let fr = document.getElementById("friendsLink");
    me.setAttribute("href", on ? "#/my-learning" : "#/signin");
    me.textContent = on ? "Me" : "Log in";
    me.classList.toggle("nav-login", !on);
    if (!on) { if (fr) fr.remove(); return; }
    if (!fr) { nav.insertAdjacentHTML("beforeend", `<a href="#/friends" id="friendsLink">Friends</a>`); fr = document.getElementById("friendsLink"); }
    if (Date.now() - navChecked > 60000) {
      navChecked = Date.now();
      apiCall("/friends").then(d => setFriendsBadge(d.incoming.length + d.cheers.filter(c => !c.seen).length)).catch(() => {});
    }
  }
  function setFriendsBadge(n) {
    const fr = document.getElementById("friendsLink");
    if (fr) fr.innerHTML = n ? `Friends <span class="nav-dot" aria-label="${n} new">${n}</span>` : "Friends";
  }

  function viewCommunity() {
    render(`
      <div class="prose">
        <span class="eyebrow">Community</span>
        <h1>The rules for friends.</h1>
        <p class="lede">The social side here is small on purpose: you add people you know, you see what they finish, and you cheer them on. There is no feed, no comments and no ranking. These rules cover the little that other people can see of you.</p>
        <h2>What others can see</h2>
        <p>Anyone who has your username can send you a friend request. Only people you accept see anything more: your name if you gave one, the lessons you finish and when, and the days you study. Nobody sees your quiz scores, your review bank or your email address.</p>
        <h2>The rules</h2>
        <ol>
          <li><strong>Pick a decent username and name.</strong> Nothing obscene, hateful or pretending to be someone else.</li>
          <li><strong>Only add people you know</strong>, or who asked you to. A request someone declines stays declined; do not keep sending it.</li>
          <li><strong>Encourage.</strong> That is what cheers are for.</li>
        </ol>
        <h2>When something goes wrong</h2>
        <p>You can decline a request or remove a friend at any time, and they are not told. If someone breaks these rules, ${API ? `<a href="#/help?kind=report">report them</a>` : "tell us through the feedback form on any lesson"} with their username and what happened.</p>
        <p>An account that breaks these rules can have its name changed or be deleted. Every such decision is written down with the reason, and you can ask for it to be looked at again by replying to the message that told you. Nobody is ever removed for criticising Foval.</p>
      </div>
    `, "Community rules");
  }

  /* ---------- help ----------
     A request goes into the tickets table and John works it from #/admin. Nothing is
     mailed; he answers from his own inbox. */
  const HELP_KINDS = { reset: "I forgot my password", report: "Report someone", question: "A question or a problem", other: "Something else" };
  function viewHelp(params) {
    if (!API) return viewNotFound();
    const a = account() || {};
    const kind = HELP_KINDS[params.get("kind")] ? params.get("kind") : "question";
    render(`
      <div class="prose signin">
        <span class="eyebrow">Help</span>
        <h1>Ask for help.</h1>
        <p class="lede">This goes to John, who reads every one and answers by email, usually within a day.</p>
        <form id="helpForm">
          <label class="fb-field">What is it about?<select name="kind">${Object.entries(HELP_KINDS).map(([k, v]) => `<option value="${k}"${k === kind ? " selected" : ""}>${v}</option>`).join("")}</select></label>
          ${field("Your username <span class=\"muted\">(if you have one)</span>", "username", "text", `autocapitalize="none" spellcheck="false" maxlength="20" value="${esc(a.username || "")}"`)}
          ${field("Your email address", "email", "email", `autocomplete="email" required value="${esc(a.email || "")}"`)}
          <p class="muted" id="resetHint" style="font-size:.9rem;margin:-.25rem 0 .5rem"${kind === "reset" ? "" : " hidden"}>For a password reset, use the address you signed up with. The code only ever goes to the address on your account.</p>
          <label class="fb-field">What happened, or what do you need?<textarea name="message" rows="5" maxlength="4000"></textarea></label>
          <div class="btn-row"><button class="btn btn-primary" type="submit">Send</button></div>
          <p class="signin-note" aria-live="polite"></p>
        </form>
        <p class="muted">Or write to <a href="mailto:${esc(HELP_EMAIL)}">${esc(HELP_EMAIL)}</a>.</p>
      </div>
    `, "Help");
    const form = main.querySelector("#helpForm"), kit = formKit(form);
    form.kind.addEventListener("change", () => { main.querySelector("#resetHint").hidden = form.kind.value !== "reset"; });
    form.addEventListener("submit", async e => {
      e.preventDefault(); kit.busy(true);
      try {
        await apiCall("/ticket", { method: "POST", body: { kind: form.kind.value, username: cleanUsername(form.username.value), email: form.email.value.trim(), message: form.message.value.trim() } });
        form.innerHTML = `<p class="signin-note">Sent. John will answer at ${esc(form.email.value.trim())}.</p>`;
      } catch (err) { kit.say(err.message, true); kit.busy(false); }
    });
  }

  /* ---------- page views ----------
     One small request per page, counted by day and page on the Worker. No cookie, no id:
     "visit" only says whether this is the first page this tab has shown. */
  let lastHit = "";
  function countView(path) {
    if (!API || path === lastHit || path.startsWith("/admin")) return;
    lastHit = path;
    let visit = false;
    try { visit = !sessionStorage.getItem("foval.seen"); sessionStorage.setItem("foval.seen", "1"); } catch { /* counted as a view only */ }
    // text/plain keeps it a simple request, so there is no preflight round trip.
    fetch(API + "/hit", { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ path, visit }), keepalive: true }).catch(() => {});
  }

  /* ---------- admin ----------
     John's page. Not linked anywhere; the Worker refuses every /admin call from anyone not
     in ADMIN_USERNAMES, so the page itself holds nothing. */
  const day = t => new Date(t).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  const csvCell = v => /[",\n]/.test(String(v ?? "")) ? `"${String(v).replace(/"/g, '""')}"` : String(v ?? "");
  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = Object.assign(document.createElement("a"), { href: url, download: name });
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function viewAdmin(params) {
    if (!API || !signedIn()) return viewNotFound();
    const tab = ["tickets", "users", "traffic", "feedback"].includes(params.get("tab")) ? params.get("tab") : "tickets";
    const status = params.get("status") === "closed" ? "closed" : "open";
    const seq = ++routeSeq;
    let sum, data;
    try {
      [sum, data] = await Promise.all([
        apiCall("/admin/summary"),
        tab === "tickets" ? apiCall(`/admin/tickets?status=${status}`) : tab === "users" ? apiCall("/admin/users") : tab === "feedback" ? apiCall("/admin/feedback") : Promise.resolve({}),
      ]);
    } catch { if (seq === routeSeq) viewNotFound(); return; }
    if (seq !== routeSeq) return;
    const c = sum.counts;
    const tabs = [["tickets", `Tickets${c.open_tickets ? ` (${c.open_tickets})` : ""}`], ["users", `Sign-ups (${c.users})`], ["traffic", "Traffic"], ["feedback", `Lesson feedback${c.feedback_new ? ` (${c.feedback_new} new)` : ""}`]];

    render(`
      <span class="eyebrow">Admin · private</span>
      <h1>The institute, today.</h1>
      <div class="stats">
        <div class="stat-card"><b>${c.users}</b><span>accounts, ${c.users_7d} this week</span></div>
        <div class="stat-card"><b>${c.active_7d}</b><span>active this week</span></div>
        <div class="stat-card"><b>${sum.daily.reduce((n, d) => n + d.visits, 0)}</b><span>visits, last 30 days</span></div>
        <div class="stat-card"><b>${c.lessons_done}</b><span>lessons finished by accounts</span></div>
        <div class="stat-card"><b>${c.friendships}</b><span>friendships, ${c.cheers} cheers</span></div>
        <div class="stat-card"><b>${c.open_tickets}</b><span>open tickets</span></div>
      </div>
      <nav class="filters admin-tabs" aria-label="Admin sections">${tabs.map(([k, v]) => `<a class="chip${k === tab ? " active" : ""}" href="#/admin?tab=${k}"${k === tab ? ' aria-current="page"' : ""}>${v}</a>`).join("")}</nav>
      <div id="adminBody">${tab === "tickets" ? adminTickets(data.tickets, status) : tab === "users" ? adminUsers(data.users) : tab === "feedback" ? adminFeedback(data.feedback) : adminTraffic(sum)}</div>
    `, "Admin");

    if (tab === "users") {
      main.querySelector("#exportBtn").addEventListener("click", () => {
        const rows = [["username", "email", "name", "joined", "last_seen", "lessons_done"], ...data.users.map(u => [u.username, u.email, u.name, u.created_at, u.last_seen_at, u.lessons_done])];
        download(`foval-signups-${today()}.csv`, rows.map(r => r.map(csvCell).join(",")).join("\n") + "\n", "text/csv");
      });
      main.querySelector("#copyBtn").addEventListener("click", async e => {
        const list = [...new Set(data.users.map(u => u.email).filter(Boolean))].join(", ");
        try { await navigator.clipboard.writeText(list); e.target.textContent = "Copied"; } catch { prompt("Copy these:", list); }
      });
    }
    if (tab === "tickets") wireTickets(data.tickets, status);
  }

  function adminTickets(tickets, status) {
    const other = status === "open" ? "closed" : "open";
    return `
      <p class="muted">${tickets.length} ${status}. <a href="#/admin?tab=tickets&status=${other}">Show ${other}</a>.</p>
      ${tickets.length ? tickets.map(t => {
        const mismatch = t.kind === "reset" && t.email_on_file && t.email_on_file !== t.email;
        return `<article class="ticket" data-id="${t.id}">
          <header><strong>${esc(HELP_KINDS[t.kind] || t.kind)}</strong><span class="muted">${new Date(t.at).toLocaleString()}</span></header>
          <p>${t.username ? `@${esc(t.username)} · ` : ""}<a href="mailto:${esc(t.email)}">${esc(t.email)}</a>${t.kind === "reset" ? (t.email_on_file ? (mismatch ? ` · <span class="bad">not the address on file (${esc(t.email_on_file)})</span>` : " · matches the address on file") : ` · <span class="bad">no account by that username</span>`) : ""}</p>
          ${t.message ? `<p class="ticket-msg">${esc(t.message)}</p>` : ""}
          <label class="fb-field">Your note<textarea rows="2" data-note>${esc(t.note)}</textarea></label>
          <div class="btn-row">
            ${t.kind === "reset" && t.email_on_file ? `<button class="btn btn-primary btn-sm" data-act="code">Make a reset code</button>` : ""}
            <button class="btn btn-secondary btn-sm" data-act="${status === "open" ? "close" : "reopen"}">${status === "open" ? "Close" : "Reopen"}</button>
            <button class="btn btn-secondary btn-sm" data-act="save">Save note</button>
          </div>
          <div class="reset-out" hidden></div>
        </article>`;
      }).join("") : `<p class="muted">Nothing ${status}.</p>`}`;
  }
  function wireTickets(tickets, status) {
    main.querySelectorAll(".ticket").forEach(box => {
      const t = tickets.find(x => String(x.id) === box.dataset.id);
      const note = () => box.querySelector("[data-note]").value;
      box.querySelectorAll("button[data-act]").forEach(b => b.addEventListener("click", async () => {
        b.disabled = true;
        try {
          if (b.dataset.act === "code") {
            const r = await apiCall("/admin/reset-code", { method: "POST", body: { username: t.username } });
            const body = `Hi,\n\nHere is the code to reset the password for ${r.username}: ${r.code}\n\nGo to https://www.fovallearninginstitute.org/#/reset, enter your username, this code and a new password. It works once and expires in 48 hours.\n\nIf you did not ask for this, ignore it. Nothing changes until the code is used.\n\nJohn\nFoval Learning Institute`;
            const out = box.querySelector(".reset-out");
            out.hidden = false;
            out.innerHTML = `<p>Code <strong class="code">${esc(r.code)}</strong>, good for 48 hours. Send it to <strong>${esc(r.email)}</strong>, the address on file, and nowhere else.</p>
              <div class="btn-row"><a class="btn btn-primary btn-sm" href="mailto:${esc(r.email)}?subject=${encodeURIComponent("Your Foval password reset")}&body=${encodeURIComponent(body)}">Write the email</a></div>`;
            box.querySelector("[data-note]").value = (note() ? note() + "\n" : "") + `Reset code made ${new Date().toLocaleDateString()}, for ${r.email}.`;
            b.disabled = false;
            return;
          }
          const next = b.dataset.act === "close" ? "closed" : b.dataset.act === "reopen" ? "open" : status;
          await apiCall("/admin/ticket", { method: "POST", body: { id: t.id, status: next, note: note() } });
          if (next !== status) box.remove(); else { b.textContent = "Saved"; b.disabled = false; }
        } catch (err) { alert(err.message); b.disabled = false; }
      }));
    });
  }

  function adminUsers(users) {
    return `
      <div class="btn-row" style="margin-top:0"><button class="btn btn-primary btn-sm" id="exportBtn">Export CSV</button><button class="btn btn-secondary btn-sm" id="copyBtn">Copy all emails</button></div>
      <p class="muted">The CSV has username, email, name, join date, last seen and lessons finished. It imports into Mailchimp, Buttondown or Substack as it is.</p>
      <div class="table-wrap"><table class="admin-table">
        <thead><tr><th>Username</th><th>Email</th><th>Name</th><th>Joined</th><th>Last seen</th><th>Lessons</th><th>Friends</th></tr></thead>
        <tbody>${users.map(u => `<tr><td>@${esc(u.username)}</td><td>${esc(u.email)}</td><td>${esc(u.name || "")}</td><td>${esc(u.created_at.slice(0, 10))}</td><td>${esc(u.last_seen_at.slice(0, 10))}</td><td>${u.lessons_done}</td><td>${u.friends}</td></tr>`).join("") || `<tr><td colspan="7" class="muted">No accounts yet.</td></tr>`}</tbody>
      </table></div>`;
  }

  // Thirty days of views as one series of bars. Days with no row are drawn as zero, so the
  // gaps are real. Each bar's number is in its label and in the table under it.
  function adminTraffic(sum) {
    const byDay = Object.fromEntries(sum.daily.map(d => [d.day, d]));
    const days = Array.from({ length: 30 }, (_, i) => new Date(Date.now() - (29 - i) * DAY).toISOString().slice(0, 10))
      .map(d => byDay[d] || { day: d, views: 0, visits: 0 });
    const max = Math.max(1, ...days.map(d => d.views));
    const total = days.reduce((n, d) => n + d.views, 0), visits = days.reduce((n, d) => n + d.visits, 0);
    const signups = Object.fromEntries(sum.signups.map(s => [s.day, s.n]));
    return `
      <h2>Page views per day, last 30 days</h2>
      <p class="muted">${total} views in ${visits} visits. Most in a day: ${max === 1 && !total ? 0 : max}. Counted by the site itself: no cookies, no IP addresses. Counting stops for the day at ${sum.cap.toLocaleString()} views to protect the database's free write limit.</p>
      <div class="bars" role="img" aria-label="Page views per day for the last 30 days, ${total} in all">
        ${days.map(d => `<div class="bar-col" title="${day(d.day + "T12:00:00Z")}: ${d.views} views, ${d.visits} visits${signups[d.day] ? `, ${signups[d.day]} sign-ups` : ""}"><div class="bar" style="height:${(100 * d.views / max).toFixed(1)}%"></div></div>`).join("")}
      </div>
      <div class="bars-axis"><span>${day(days[0].day + "T12:00:00Z")}</span><span>today</span></div>
      <h2>Top pages, last 7 days</h2>
      <div class="table-wrap"><table class="admin-table">
        <thead><tr><th>Page</th><th>Views</th></tr></thead>
        <tbody>${sum.top.map(t => `<tr><td>${esc(t.path)}</td><td>${t.views}</td></tr>`).join("") || `<tr><td colspan="2" class="muted">Nothing counted yet.</td></tr>`}</tbody>
      </table></div>
      <h2>By day</h2>
      <div class="table-wrap"><table class="admin-table">
        <thead><tr><th>Day</th><th>Views</th><th>Visits</th><th>Sign-ups</th></tr></thead>
        <tbody>${days.slice().reverse().filter(d => d.views || signups[d.day]).map(d => `<tr><td>${esc(d.day)}</td><td>${d.views}</td><td>${d.visits}</td><td>${signups[d.day] || 0}</td></tr>`).join("") || `<tr><td colspan="4" class="muted">Nothing counted yet.</td></tr>`}</tbody>
      </table></div>`;
  }

  function adminFeedback(rows) {
    return rows.length ? rows.map(f => {
      const t = itemTitle(f.course, f.lesson);
      return `<article class="ticket"><header><strong><a href="${t.href}">${esc(t.lesson)}</a></strong><span class="muted">${esc(f.received_at)}${f.triaged ? " · triaged" : ""}</span></header>
        <p class="muted">${esc(t.course)}${f.clarity ? ` · clarity ${f.clarity}/5` : ""}</p>
        ${f.struggled ? `<p><b>Struggled with:</b> ${esc(f.struggled)}</p>` : ""}${f.improve ? `<p><b>Would improve:</b> ${esc(f.improve)}</p>` : ""}${f.site ? `<p><b>About the site:</b> ${esc(f.site)}</p>` : ""}</article>`;
    }).join("") + `<p class="muted">The newest hundred. Triage happens with <code>/triage-feedback</code>, which marks them.</p>` : `<p class="muted">No feedback yet.</p>`;
  }

  function viewNotFound() { render(`<div class="empty"><h2>Page not found</h2><a class="btn btn-primary" href="#/">Go home</a></div>`, "Not found"); }

  /* ---------- router ---------- */
  function route() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?"); const params = new URLSearchParams(qs || "");
    setActiveNav(path); updateNav(); countView(path); let m;
    if (path === "/") return viewHome();
    if (path === "/courses") return viewCourses(params.get("subject"));
    if (path === "/path") return viewPath();
    if (path === "/map") return viewMap(params.get("school"));
    if (path === "/review") return viewReview(params.get("mode"));
    if ((m = path.match(/^\/course\/([^/]+)\/lesson\/([^/]+)$/))) return viewLesson(m[1], m[2]);
    if ((m = path.match(/^\/course\/([^/]+)\/assessment\/([^/]+)$/))) return viewAssessment(m[1], m[2]);
    if ((m = path.match(/^\/course\/([^/]+)$/))) return viewCourse(m[1]);
    if ((m = path.match(/^\/certificate\/([^/]+)$/))) return viewCertificate(m[1]);
    if (path === "/my-learning") return viewMyLearning();
    if (path === "/signin") return viewSignIn(params);
    if (path === "/reset") return viewReset();
    if (path === "/friends") return viewFriends();
    if ((m = path.match(/^\/friends\/([^/]+)$/))) return viewFriend(decodeURIComponent(m[1]));
    if (path === "/community") return viewCommunity();
    if (path === "/help") return viewHelp(params);
    if (path === "/admin") return viewAdmin(params);
    if (path === "/about") return viewAbout();
    if (path === "/about-john") return viewAboutJohn();
    viewNotFound();
  }
  window.addEventListener("hashchange", route);

  // Citation markers link to their entry in the lesson's Sources list. In a hash-routed app a
  // plain #src-7 link would change the route, so the jump is done here without touching the hash.
  main.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#src-"]');
    if (!a) return;
    const target = main.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ block: "start", behavior: noMotion ? "instant" : "smooth" });
    target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true });
  });

  if (API) {
    updateNav();
    const help = document.getElementById("helpLink"); if (help) help.hidden = false;
    // The footer's promise has to stay true now that progress can leave the browser.
    const privacy = document.getElementById("privacyLine");
    if (privacy) privacy.textContent = "No paywalls, and no account needed to learn. Without an account your progress stays in this browser; with one it syncs so it follows you between devices. We count page views, with no cookies and nothing that identifies you.";
    // Pull anything the other device did, but not on every page load.
    if (signedIn() && Date.now() - ((account() || {}).syncedAt || 0) > 300000) syncNow().catch(() => {});
    // keepalive so the flush survives the page going away.
    const flush = () => { if (signedIn()) { clearTimeout(syncTimer); syncNow(true).catch(() => {}); } };
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(); });
  }

  backfillReviewBank();
  route();
})();
