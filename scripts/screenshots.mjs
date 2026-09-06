// Regenerate the homepage screenshots in site/assets/media/screens/.
//
//   npm run shots              every target
//   npm run shots -- video     one target (any name from TARGETS below)
//   npm run shots -- --list    what the targets are and which need a draft build
//
// Uses the Chrome already installed on this machine, so there is no browser download.
// Set CHROME_CHANNEL=msedge, or CHROME_PATH=/path/to/chrome, if Chrome is somewhere odd.
//
// Some targets photograph a course that is still `drafting`, which the normal build
// leaves out of the site. Run `npm run build:drafts` first, then `npm run build`
// afterwards, and check `git diff site/data/courses.js` is empty before committing.
//
// Every shot is taken four ways: light and dark, phone and desktop, except the tiles,
// which are narrow objects that a phone frames best at any width. The <picture> element
// in app.js picks between them, so the file names here are load-bearing.

import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(ROOT, "site");
const OUT = path.join(SITE, "assets", "media", "screens");
const PORT = Number(process.env.SHOTS_PORT || 4180);
const BASE = `http://localhost:${PORT}/`;

const HTLA = "how-to-learn-anything";
const BIBLE = "bible-basics";

/* ---------- boxes that need more than a selector ---------- */
// The whole term fits at desktop width. On a phone it would be cropped to a height that
// cuts the labelled row off, so photograph the labelled row with its neighbours instead.
const standpointBox = (page, v) => page.evaluate(narrow => {
  window.scrollTo(0, 0);
  const li = [...document.querySelectorAll(".path-list li")].find(e => e.textContent.includes("Christian Standpoint"));
  if (!li) return null;
  let top = li, n = narrow ? 2 : 99;
  while (n-- > 0 && top.previousElementSibling) top = top.previousElementSibling;
  const el = narrow ? null : li.closest(".term");
  const a = (el || top).getBoundingClientRect(), b = (el || li).getBoundingClientRect(), pad = 14;
  const x = Math.max(0, a.left + scrollX - pad), y = Math.max(0, a.top + scrollY - pad);
  return { x, y, width: Math.min(document.documentElement.scrollWidth - x, a.width + pad * 2), height: b.bottom + scrollY - y + pad };
}, !!v.mobile);

// An inline chart, whole. This used to stop above the last line of text, because that line
// is the source caption and it was wider than its own viewBox, so the browser clipped it and
// a photograph of it looked like a mistake. The viewBox is fixed and the linter guards it, so
// the caption is in the picture now: a chart that does not name its source is worth less.
const svgBox = (page, i) => page.evaluate(i => {
  window.scrollTo(0, 0);
  const svg = document.querySelectorAll(".lesson-content svg")[i];
  if (!svg) return null;
  const r = svg.getBoundingClientRect();
  const col = svg.closest(".lesson-body").getBoundingClientRect();
  const pad = 12, left = Math.min(col.left, r.left), right = Math.max(col.right, r.right);
  return { x: Math.max(0, left + scrollX - pad), y: Math.max(0, r.top + scrollY - pad), width: right - left + pad * 2, height: r.height + pad * 2 };
}, i);

// The default: an element, in a fixed window for the tiles so they are all one shape.
const elementBox = (page, sel, { nth = 0, anchor = "top", pad = 14, tile = false }) => page.evaluate(([sel, nth, anchor, pad, tile]) => {
  window.scrollTo(0, 0);
  const el = document.querySelectorAll(sel)[nth];
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (!tile) {
    return { x: Math.max(0, r.left + scrollX - pad), y: Math.max(0, r.top + scrollY - pad), width: r.width + pad * 2, height: r.height + pad * 2 };
  }
  const col = (el.closest(".lesson-body, .page") || document.querySelector(".page")).getBoundingClientRect();
  const width = Math.round(col.width), height = Math.round(width * 4 / 3);
  const opt = anchor === "options" ? el.querySelector("label") : null;
  const top = opt ? opt.getBoundingClientRect().top : r.top;
  const y = anchor === "bottom" ? r.bottom + scrollY + 8 - height : top + scrollY - 8;
  return { x: Math.round(col.left + scrollX), y: Math.max(0, Math.round(y)), width, height };
}, [sel, nth, anchor, pad, tile]);

/* ---------- what to photograph ----------
   sel      a CSS selector, or a function given the page that returns a clip box
   widths   "both" for light/dark at phone and desktop, "phone" for the strip tiles
   draft    true if it lives in a course that is not published yet
   anchor   'top' (default), 'options' (skip a long question stem), 'bottom'
   pad      pixels of page around the element                                        */
const TARGETS = {
  predict: { page: `#/course/${HTLA}/lesson/03-retrieval-practice`, sel: ".think.predict", widths: "both",
    before: p => p.evaluate(() => { document.querySelector(".think.predict details").open = true; }) },
  feedback: { page: `#/course/${HTLA}/lesson/03-retrieval-practice`, sel: ".feedback-ask", widths: "both" },
  review: { page: "#/review", sel: ".review-card", widths: "both", pad: 2, seed: true },
  standpoint: { page: "#/path", sel: standpointBox, widths: "both", desktopWidth: 900 },
  chart: { page: `#/course/${BIBLE}/lesson/02-one-story`, sel: p => svgBox(p, 0), widths: "both", draft: true },

  "tile-quiz": { page: `#/course/${HTLA}/lesson/01-learning-is-not-performance`, sel: ".q", nth: 1, widths: "phone",
    anchor: "options", before: answerTheQuiz },
  "tile-map": { page: `#/course/${BIBLE}/lesson/02-one-story`, sel: p => svgBox(p, 1), widths: "phone", draft: true },
  "tile-exercise": { page: `#/course/${HTLA}/lesson/01-learning-is-not-performance`, sel: ".exercise", widths: "phone" },
  "tile-recall": { page: `#/course/${HTLA}/lesson/02-how-memory-works`, sel: ".recall", widths: "phone", before: fillRecall },
  "tile-code": { page: "#/course/python-basics/lesson/04-loops", sel: ".lesson-content pre", nth: 1, widths: "phone" },
  "tile-transcript": { page: "#/my-learning", sel: "#main .eyebrow", widths: "phone", seed: true },
  "tile-video": { page: `#/course/${BIBLE}/lesson/01-finding-your-way-around`, sel: ".video-fig", widths: "phone",
    draft: true, needsYouTube: true, before: loadVideo },
  "tile-podcast": { page: `#/course/${BIBLE}/lesson/02-one-story`, sel: ".podcast", widths: "phone", draft: true },
};

/* ---------- a plausible learner, so the Review page and the transcript have something on them ---------- */
const DAY = 86400000;
function seedState() {
  const now = Date.now();
  const done = ["01-learning-is-not-performance", "02-how-memory-works", "03-retrieval-practice"];
  const counts = { "01-learning-is-not-performance": 5, "02-how-memory-works": 6, "03-retrieval-practice": 5 };
  const progress = { [HTLA]: {} }, review = {}, activity = {};
  done.forEach((l, i) => { progress[HTLA][l] = { done: true, score: 0.8 + i * 0.04, at: now - (6 - i) * DAY }; });
  done.forEach((l, li) => {
    for (let q = 0; q < counts[l]; q++) {
      const seen = (li * 7 + q * 3) % 5;
      review[`${HTLA}/${l}/${q}`] = { ease: 2.5, interval: 1 + seen, due: now + (seen - 2) * DAY, reps: seen, lapses: q % 2, last: seen !== 1 };
    }
  });
  for (let d = 0; d < 6; d++) activity[new Date(now - d * DAY).toISOString().slice(0, 10)] = 3;
  return { "foval.progress.v1": progress, "foval.review.v1": review, "foval.activity.v1": activity };
}

/* ---------- page actions ---------- */
async function answerTheQuiz(page) {
  const answers = await page.evaluate(() => window.FOVAL_COURSES
    .find(c => c.id === "how-to-learn-anything").lessons[0].quiz.map(q => q.answer));
  await page.evaluate(a => {
    // One right, one deliberately wrong, so the screenshot shows both markings.
    a.forEach((correct, i) => {
      const pick = i === 1 ? (correct + 1) % 4 : correct;
      document.querySelector(`input[name="q${i}"][value="${pick}"]`).checked = true;
    });
  }, answers);
  await page.click("#quizForm button[type=submit]");
  await page.waitForSelector(".q label.correct");
}
// The embed is lazy-loaded and sits a long way down the lesson, so the browser never asks
// YouTube for it while the page is parked at the top. Scroll it into view the way a reader
// would, then let the player fetch its poster before the needsYouTube check reads the result.
async function loadVideo(page) {
  await page.evaluate(() => document.querySelector(".video-fig").scrollIntoView({ block: "center" }));
  await page.waitForTimeout(400);
}
async function fillRecall(page) {
  await page.evaluate(() => {
    const t = document.querySelector("#recallBox");
    t.value = "Storage strength vs retrieval strength. Retrieval strength is how easy something is to reach right now, storage strength is how well it is built in. Rereading raises retrieval and barely touches storage, which is why it feels";
    t.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await page.waitForTimeout(150);
}

/* ---------- the smallest static server that will do ---------- */
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".mp4": "video/mp4", ".webmanifest": "application/manifest+json" };
function serve() {
  return new Promise(resolve => {
    const s = http.createServer((req, res) => {
      const rel = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html";
      const file = path.join(SITE, rel);
      if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end("not found"); }
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
      fs.createReadStream(file).pipe(res);
    });
    s.listen(PORT, "127.0.0.1", () => resolve(s));
  });
}

/* ---------- run ---------- */
const args = process.argv.slice(2).filter(a => a !== "--");
if (args.includes("--list")) {
  for (const [name, t] of Object.entries(TARGETS)) {
    console.log(`${name.padEnd(16)} ${t.widths.padEnd(8)} ${t.draft ? "needs npm run build:drafts" : ""}${t.needsYouTube ? "  needs YouTube reachable" : ""}`);
  }
  process.exit(0);
}
const wanted = args.length ? args : Object.keys(TARGETS);
const unknown = wanted.filter(n => !TARGETS[n]);
if (unknown.length) { console.error(`No such target: ${unknown.join(", ")}. Try --list.`); process.exit(1); }

// Imported here, not at the top, so `--list` works before anyone has run npm install.
let chromium;
try {
  ({ chromium } = await import("playwright-core"));
} catch {
  console.error("playwright-core is not installed. Run `npm install` in the repo root and try again.");
  console.error("It drives the Chrome already on this machine; it does not download a browser.");
  process.exit(1);
}

const courses = fs.readFileSync(path.join(SITE, "data", "courses.js"), "utf8");
if (wanted.some(n => TARGETS[n].draft) && !courses.includes(`"id": "${BIBLE}"`)) {
  console.error(`${wanted.filter(n => TARGETS[n].draft).join(", ")} photograph a drafting course that is not in site/data/courses.js.`);
  console.error("Run `npm run build:drafts` first, then `npm run build` afterwards to put it back.");
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });
const server = await serve();
const launch = { channel: process.env.CHROME_CHANNEL || "chrome" };
if (process.env.CHROME_PATH) { delete launch.channel; launch.executablePath = process.env.CHROME_PATH; }
let browser;
try {
  browser = await chromium.launch(launch);
} catch (e) {
  console.error(`Could not start Chrome (${e.message.split("\n")[0]}).`);
  console.error("Set CHROME_PATH to the browser binary, or CHROME_CHANNEL to msedge, and try again.");
  server.close(); process.exit(1);
}

const VIEWS = [
  { key: "desktop", width: 1280, height: 1200, scale: 1, raw: false },
  { key: "phone", width: 390, height: 900, scale: 2, mobile: true, raw: true },
];
const written = [], skipped = [];
for (const scheme of ["light", "dark"]) {
  for (const v of VIEWS) {
    const names = wanted.filter(n => TARGETS[n].widths === "both" || v.mobile);
    if (!names.length) continue;
    const ctx = await browser.newContext({
      viewport: { width: v.width, height: v.height }, deviceScaleFactor: v.scale,
      isMobile: !!v.mobile, hasTouch: !!v.mobile, colorScheme: scheme, reducedMotion: "reduce",
    });
    await ctx.addInitScript(seed => {
      for (const [k, val] of Object.entries(seed)) localStorage.setItem(k, JSON.stringify(val));
      // Fix the review shuffle so light and dark photograph the same card. It changes
      // which real question comes up first and nothing else.
      let n = 0; Math.random = () => ((n = (n * 1103515245 + 12345) % 2147483648) / 2147483648);
    }, seedState());
    const page = await ctx.newPage();

    for (const name of names) {
      const t = TARGETS[name];
      const tile = t.widths === "phone";
      // Some targets want a narrower window than a full desktop; a full-width term list
      // has to be shrunk past legibility to fit a homepage panel.
      if (!v.mobile && t.desktopWidth) await page.setViewportSize({ width: t.desktopWidth, height: v.height });

      let youTubeOk = false;
      // The poster image is what decides whether this photographs as a picture or as a black
      // box, and it comes from i.ytimg.com. Watch for that, not for the embed document, which
      // arrives fine on a machine where the poster never does.
      const watch = r => { if (/i\.ytimg\.com\/vi/.test(r.url()) && r.status() < 400) youTubeOk = true; };
      if (t.needsYouTube) page.on("response", watch);

      await page.goto(BASE + t.page, { waitUntil: "networkidle" });
      if (typeof t.sel === "string") await page.waitForSelector(t.sel);
      if (t.before) await t.before(page);
      if (t.needsYouTube) {
        // The player takes several seconds to fetch its poster, far longer than the rest of
        // the page, so wait on the poster itself rather than on a fixed guess.
        if (!youTubeOk) {
          try {
            await page.waitForResponse(r => /i\.ytimg\.com\/vi/.test(r.url()) && r.status() < 400, { timeout: 25000 });
          } catch { /* youTubeOk stays false, and the check below reports it */ }
        }
        page.off("response", watch);
        if (!youTubeOk) {
          // Better no file than a screenshot of an empty player.
          skipped.push(`${name}: YouTube did not load, so the embed would photograph as a blank box. Run this where youtube-nocookie.com is reachable.`);
          if (!v.mobile && t.desktopWidth) await page.setViewportSize({ width: v.width, height: v.height });
          continue;
        }
        // The player fades the poster and its title bar in. Photographed mid-fade it comes out
        // with a half-drawn title across the picture, so let the animation settle.
        await page.waitForTimeout(4000);
      }

      const box = typeof t.sel === "function" ? await t.sel(page, v) : await elementBox(page, t.sel, { nth: t.nth, anchor: t.anchor, pad: t.pad, tile });
      if (!box) { skipped.push(`${name}: nothing matched on the page.`); continue; }
      const file = path.join(OUT, `${name}-${scheme}-${tile ? "phone" : v.key}.png`);
      if (t.needsYouTube) {
        // A cross-origin player paints black in a fullPage capture wherever the page is
        // scrolled, so photograph the viewport with the embed actually sitting in it. The
        // header is sticky, so drop below it or it lands across the top of the picture.
        await page.evaluate(top => {
          const head = document.querySelector(".site-header");
          const off = head && getComputedStyle(head).position === "sticky" ? head.getBoundingClientRect().height + 8 : 8;
          // The stylesheet asks for smooth scrolling, which would leave the position still
          // moving when the shot is taken. Jump instead.
          window.scrollTo({ top: Math.max(0, top - off), behavior: "instant" });
        }, box.y);
        await page.waitForTimeout(1200);
        // Read the element back once the scroll has settled rather than working the offset out
        // in advance, so the clip lines up with where the embed actually ended up.
        const y = await page.evaluate(sel => Math.round(document.querySelector(sel).getBoundingClientRect().top - 8), t.sel);
        await page.screenshot({ path: file, clip: { ...box, y }, scale: v.raw ? "device" : "css" });
      } else {
        await page.screenshot({ path: file, fullPage: true, clip: box, scale: v.raw ? "device" : "css" });
      }
      written.push(path.relative(ROOT, file));

      if (!v.mobile && t.desktopWidth) await page.setViewportSize({ width: v.width, height: v.height });
    }
    await ctx.close();
  }
}
await browser.close();
server.close();

console.log(written.length ? `wrote ${written.length} file(s):\n  ${written.join("\n  ")}` : "wrote nothing");
if (skipped.length) console.warn(`\nskipped:\n  ${skipped.join("\n  ")}`);
