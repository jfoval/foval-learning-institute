// Build: compile courses/**/course.yaml + lessons/*.md, plus site/, into git-ignored dist/.
// Usage: node scripts/build.mjs [--check] [--drafts]
//
// site/ is source and this never writes to it. The Pages workflow runs the build in CI and
// publishes dist/, so nothing generated belongs in git.
//
// --drafts also compiles courses that are still `drafting`, so a draft can be read in the
// real site before it is published. That output is a PREVIEW; run a plain `npm run build`
// to put dist/ back to what CI would publish.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { marked } from "marked";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { estimateTextWidth, FONT_SPREAD } from "./text-width.mjs";

const CHECK = process.argv.includes("--check");
const DRAFTS = process.argv.includes("--drafts");
// FOVAL_ROOT points the build at another tree. scripts/tests/ uses it to run the checks over
// fixture lessons that must fail; nothing else should set it.
const ROOT = process.env.FOVAL_ROOT ? path.resolve(process.env.FOVAL_ROOT) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Run only when invoked as a script, so the tests can import renderBody without a build.
const isMain = Boolean(process.argv[1]) && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
const COURSES_DIR = path.join(ROOT, "courses");
// site/ is SOURCE and the build never writes to it; everything generated lands in dist/, which is
// git-ignored. Before 2026-09-18 the build wrote into site/ and the generated files were committed,
// which meant every content commit also carried a regenerated courses.js and freshly stamped
// index.html and sw.js. Over twelve hours of two sessions working in parallel that was fourteen
// touches of each, all of them mechanical conflicts, and a CI step existed only to check the
// committed copies were current. None of it reached anyone: the Pages workflow runs `npm run build`
// itself and publishes what it just built, so the committed output was never deployed.
const SRC = path.join(ROOT, "site");
const DIST = path.join(ROOT, "dist");
const OUT = path.join(DIST, "data", "courses.js");
const PATH_FILE = path.join(ROOT, "curriculum", "core-path.yaml");
const errors = [];
const warn = [];

marked.setOptions({ gfm: true, breaks: false });

// Render a lesson body: the ::: blocks first, held back behind placeholders so that the
// outer Markdown pass cannot re-parse the HTML they produce. It used to run straight into
// marked.parse(renderBlocks(body)), and Markdown ends a raw-HTML block at the first blank
// line, so a blank line inside a fenced code block inside a ::: block split the <pre> and
// re-parsed the rest as Markdown. That shipped: Python Basics lesson 3 served a <p> inside
// its <pre> on the live site. checkRenderedHtml below fails the build if it happens again.
export function renderBody(md) {
  const held = [];
  const withPlaceholders = renderBlocks(md, held);
  let html = marked.parse(withPlaceholders);
  // The placeholder is an HTML comment on its own line; marked may wrap it in a <p>.
  held.forEach((rendered, i) => {
    html = html.replace(new RegExp(`(?:<p>\\s*)?<!--FOVAL-BLOCK-${i}-->(?:\\s*</p>)?`), () => rendered);
  });
  return linkCitations(wrapTables(html));
}

// A wide table has to scroll inside its own box on a phone. The stylesheet used to do that with
// `table { display: block }`, which strips the table's semantics for a screen reader; a wrapper
// keeps them.
function wrapTables(html) {
  return html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>");
}

// Lessons cite with [n] and list the sources under "## Sources". The markers rendered as plain
// text, 1,449 of them, so on a phone a reader could not get from a claim to its source. Each
// marker becomes a link to its entry, and each entry gets an id. Markers are matched only in
// text, outside tags and outside code, and only when the numbered entry exists, so "readings[0]"
// in a Python lesson is left alone.
function linkCitations(html) {
  const head = html.match(/<h2[^>]*>Sources<\/h2>\s*/);
  if (!head) return html;
  const listStart = head.index + head[0].length;
  let list, listEnd;
  const known = new Set();
  if (html.startsWith("<ol", listStart)) {
    // The usual shape: a numbered list, one entry each.
    listEnd = html.indexOf("</ol>", listStart);
    if (listEnd < 0) return html;
    const startAttr = html.slice(listStart, html.indexOf(">", listStart)).match(/start="(\d+)"/);
    let n = startAttr ? Number(startAttr[1]) : 1;
    list = html.slice(listStart, listEnd).replace(/<li>/g, () => { known.add(n); return `<li id="src-${n++}">`; });
  } else {
    // The other shape a few courses use: paragraphs opening with the marker, "[1] Author, ...".
    listEnd = listStart;
    list = "";
    for (const m of html.slice(listStart).matchAll(/<p>\[(\d+)\]/g)) { known.add(Number(m[1])); }
    if (!known.size) return html;
    list = html.slice(listStart).replace(/<p>\[(\d+)\]/g, (m, k) => `<p id="src-${k}">[${k}]`);
    listEnd = html.length;
  }
  const cite = seg => seg.replace(/(?<!\w)\[(\d+)\]/g, (m, k) => known.has(Number(k)) ? `<sup class="cite"><a href="#src-${k}">${k}</a></sup>` : m);
  // Walk the body before the list: skip code, and inside the rest touch only text nodes.
  const body = html.slice(0, listStart).split(/(<pre>[\s\S]*?<\/pre>|<code>[\s\S]*?<\/code>)/g)
    .map((part, i) => i % 2 ? part : part.split(/(<[^>]+>)/g).map((p, j) => j % 2 ? p : cite(p)).join(""))
    .join("");
  return body + list + html.slice(listEnd);
}

function renderBlocks(md, held) {
  // :::callout Title / :::exercise Title ... ::: → styled div
  // :::predict Question / :::checkpoint Question ... ::: → question with the body hidden behind a button
  return md.replace(/^:::(callout|exercise|predict|checkpoint|figure|video)[ \t]*(.*)\r?\n([\s\S]*?)^:::[ \t]*$/gm, (_, kind, title, body) => {
    const hold = (htmlOut) => {
      if (!held) return htmlOut;
      held.push(htmlOut);
      return `<!--FOVAL-BLOCK-${held.length - 1}-->`;
    };
    if (kind === "figure") {
      // :::figure <src> | <alt text>   body = caption (markdown), should include the credit and licence
      const [src, alt = ""] = title.split("|").map(s => s.trim());
      return hold(`<figure class="fig"><img src="${src}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy"><figcaption>${marked.parseInline(body.trim())}</figcaption></figure>`);
    }
    if (kind === "video") {
      // :::video <youtube or youtube-nocookie URL> | <title>   body = why to watch it (markdown)
      const [url, vtitle = "Video"] = title.split("|").map(s => s.trim());
      const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
      const embed = m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : url;
      return hold(`<figure class="fig video-fig"><iframe class="video" src="${embed}" title="${vtitle.replace(/"/g, "&quot;")}" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><figcaption>${marked.parseInline(body.trim())}</figcaption></figure>`);
    }
    if (kind === "predict" || kind === "checkpoint") {
      const label = kind === "predict" ? "Predict first" : "Check yourself";
      return hold(`<div class="think ${kind}"><b>${label}</b><p class="think-q">${marked.parseInline(title.trim())}</p><details><summary>Show the answer</summary>${marked.parse(body.trim())}</details></div>`);
    }
    return hold(`<div class="${kind}"><b>${title.trim()}</b>${marked.parse(body.trim())}</div>`);
  });
}
function parseFrontmatter(src, file) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) { errors.push(`${file}: missing frontmatter`); return { meta: {}, body: src }; }
  try { return { meta: yaml.load(m[1]) || {}, body: m[2] }; }
  catch (e) { errors.push(`${file}: bad YAML frontmatter: ${e.message}`); return { meta: {}, body: m[2] }; }
}
// yaml.load("") is null, and an empty or comment-only course.yaml used to crash the build with a
// TypeError that named no file. Every reader of course.yaml goes through here.
function readCourseYaml(file) {
  const rel = path.relative(ROOT, file);
  let meta;
  try { meta = yaml.load(fs.readFileSync(file, "utf8")); } catch (e) { errors.push(`${rel}: ${e.message}`); return null; }
  if (!meta || typeof meta !== "object") { errors.push(`${rel}: is empty; copy templates/course.yaml and fill it in`); return null; }
  return meta;
}
function req(obj, keys, where) {
  for (const k of keys) if (obj[k] === undefined || obj[k] === "" || (Array.isArray(obj[k]) && !obj[k].length)) errors.push(`${where}: missing "${k}"`);
}
// Quiz shape: a question, at least two options, and an in-range answer index.
// Types are checked separately by checkQuizTypes, which the lint pass runs over
// every lesson, draft or published.
// A code block that has been split by the outer Markdown pass shows up as a <p> (or a
// stray </code></pre>) inside the <pre>. CLAUDE.md rule 9: this is a check, not a warning
// in prose. It caught a corrupted block already shipped in Python Basics lesson 3.
function checkRenderedHtml(html, file) {
  for (const m of html.matchAll(/<pre><code[\s\S]*?<\/code><\/pre>/g)) {
    if (/<p>|<\/p>/.test(m[0])) {
      errors.push(`${file}: a fenced code block was split by the Markdown pass and re-parsed (a <p> is inside its <pre>). A blank line inside a code fence that sits inside a ::: block used to do this.`);
      break;
    }
  }
  return html;
}

function checkQuizShape(quiz, file, label) {
  quiz.forEach((q, i) => {
    const at = `${file}: ${label} #${i + 1}`;
    if (!q || !q.q || !Array.isArray(q.options) || q.options.length < 2) errors.push(`${at} needs a question and 2+ options`);
    else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${at} answer index out of range`);
  });
}
// A YAML plain scalar cannot contain ": ", so an unquoted option like
//   - Orthodoxy: the church received it
// parses as a mapping rather than a string. The frontmatter still parses, so the
// shape check above passes, and the site renders options through String(), which
// turns an object into the literal text "[object Object]". One published lesson
// shipped that way. Check the types, not just the shape.
// The same trap catches `objectives:`, which the lesson page renders through esc() into a
// <li>. Bible Basics lesson 9 shipped "Work an unfamiliar disputed passage: read the note in a
// modern Bible..." and the colon turned the objective into a mapping, so the live page listed
// "[object Object]" as one of the five things the learner would learn. It sat there through a
// full Stage 4 cycle because the reviewer read the Markdown, where it looks fine, rather than
// the page. Found on 2026-09-18 by opening the lesson at phone width for an unrelated reason.
function checkObjectiveTypes(objectives, file, report) {
  if (!Array.isArray(objectives)) return;
  const kind = v => (Array.isArray(v) ? "a list" : v === null ? "empty" : typeof v);
  objectives.forEach((o, i) => {
    if (typeof o !== "string") report(`${file}: objective ${i + 1} is not text (it parsed as ${kind(o)}) and would reach the learner as "[object Object]"; check for an unquoted value containing a colon, and wrap it in a >- block`);
  });
}

function checkQuizTypes(quiz, file, label, report) {
  const kind = v => (Array.isArray(v) ? "a list" : v === null ? "empty" : typeof v);
  const hint = "check for an unquoted value containing a colon";
  quiz.forEach((q, i) => {
    if (!q || !Array.isArray(q.options)) return;
    const at = `${file}: ${label} #${i + 1}`;
    if (q.q !== undefined && typeof q.q !== "string") report(`${at} question is not text (it parsed as ${kind(q.q)}); ${hint}`);
    q.options.forEach((o, j) => {
      if (typeof o !== "string") report(`${at} option ${"ABCDEFGH"[j] || j + 1} is not text (it parsed as ${kind(o)}) and would reach the learner as "[object Object]"; ${hint}`);
    });
    // explain is optional: the courses that predate the standards omit it.
    if (q.explain !== undefined && typeof q.explain !== "string") report(`${at} explain is not text (it parsed as ${kind(q.explain)}); ${hint}`);
  });
}

const ORIGIN = "https://www.fovallearninginstitute.org";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const textOf = html => html.replace(/<[^>]+>/g, " ").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const fmtHours = mins => mins < 60 ? `${mins} min` : `${Math.round(mins / 6) / 10} h`;

function writeStaticPages(shell, courses) {
  const SITE = DIST;
  // The shell is index.html after stamping, with the app's scripts removed, the empty <main>
  // replaced, and every relative URL made absolute so the page works from /courses/x/y/.
  const base = shell
    .replace(/<script src="data\/courses\.js[^"]*"><\/script>\s*/g, "")
    .replace(/<script src="assets\/app\.js[^"]*"><\/script>\s*/g, "")
    .replace(/href="#\//g, 'href="/#/').replace(/href="assets\//g, 'href="/assets/').replace(/src="assets\//g, 'src="/assets/')
    .replace(/href="manifest\.webmanifest"/g, 'href="/manifest.webmanifest"').replace(/register\("sw\.js"\)/g, 'register("/sw.js")');
  const page = ({ url, title, description, body, type = "article" }) => {
    const head = `<title>${esc(title)} · Foval Learning Institute</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${ORIGIN}${url}">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="Foval Learning Institute">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${ORIGIN}${url}">
  <meta property="og:image" content="${ORIGIN}/assets/media/social-card.png">
  <meta property="og:image:width" content="2400">
  <meta property="og:image:height" content="1260">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${ORIGIN}/assets/media/social-card.png">`;
    return base
      .replace(/<title>[\s\S]*?<\/title>[\s\S]*?<meta name="twitter:image"[^>]*>/, head)
      .replace(/<main id="main" class="page"[^>]*><\/main>/, `<main id="main" class="page">${body}</main>`);
  };
  const write = (url, html) => {
    const file = path.join(SITE, url.replace(/^\//, ""), "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
  };
  const urls = [{ loc: "/", priority: "1.0" }];
  const blurb = s => { const t = textOf(s); return t.length > 155 ? t.slice(0, 152).replace(/\s+\S*$/, "") + "…" : t; };

  fs.rmSync(path.join(SITE, "courses"), { recursive: true, force: true });
  for (const c of courses) {
    const cUrl = `/courses/${c.id}/`;
    const minutes = [...c.lessons, ...(c.assessments || [])].reduce((n, x) => n + (Number(x.minutes) || 0), 0);
    const app = `/#/course/${c.id}`;
    write(cUrl, page({
      url: cUrl, title: c.title, description: c.summary, type: "website",
      body: `
      <div class="course-hero">
        <div>
          <span class="eyebrow">${esc(c.subject)} · ${esc(c.level)}</span>
          <h1>${esc(c.title)}</h1>
          ${c.standpoint === "christian" ? `<div class="standpoint">Taught from within the Christian tradition. This course makes the case; it does not pretend to be neutral.</div>` : ""}
          <p class="lede">${esc(c.description)}</p>
          <h2 class="h3">What you'll learn</h2>
          <ul class="outcomes">${(c.outcomes || []).map(o => `<li>${esc(o)}</li>`).join("")}</ul>
        </div>
        <aside class="course-aside">
          <dl>
            <dt>Lessons</dt><dd>${c.lessons.length}${c.assessments.length ? ` + ${c.assessments.length} assessment${c.assessments.length === 1 ? "" : "s"}` : ""}</dd>
            <dt>Time</dt><dd>${fmtHours(minutes)}</dd>
            <dt>Level</dt><dd>${esc(c.level)}</dd>
            <dt>Cost</dt><dd>Free</dd>
          </dl>
          <div class="btn-row"><a class="btn btn-primary" href="${app}">Start the course</a></div>
          <p class="muted small">Quizzes, progress and review run in the app. No account needed.</p>
        </aside>
      </div>
      <h2>Syllabus</h2>
      <ol class="lesson-list">
        ${c.lessons.map((l, i) => `<li><a href="${cUrl}${l.id}/"><span class="lesson-num">${i + 1}</span><span>${esc(l.title)}</span><span class="lesson-time">${l.minutes} min</span></a></li>`).join("")}
      </ol>
      ${c.assessments.length ? `<h2 style="margin-top:2rem">Assessments</h2>
      <ol class="lesson-list">
        ${c.assessments.map(a => `<li><a href="/#/course/${c.id}/assessment/${a.id}"><span class="lesson-num">${a.type === "test" ? "T" : "P"}</span><span>${esc(a.title)}<span class="path-meta" style="margin-left:.5rem">${a.type === "test" ? "final test" : "project"}</span></span><span class="lesson-time">${a.minutes >= 60 ? fmtHours(a.minutes) : a.minutes + " min"}</span></a></li>`).join("")}
      </ol>` : ""}`,
    }));
    urls.push({ loc: cUrl, priority: "0.8" });

    c.lessons.forEach((l, i) => {
      const lUrl = `${cUrl}${l.id}/`;
      const prev = c.lessons[i - 1], next = c.lessons[i + 1];
      const firstPara = (l.content.match(/<p>([\s\S]*?)<\/p>/) || [])[1] || "";
      const description = blurb(l.objectives.length ? `${c.title}: ${l.objectives[0]}.` : firstPara);
      const appLesson = `/#/course/${c.id}/lesson/${l.id}`;
      write(lUrl, page({
        url: lUrl, title: `${l.title} (${c.title}, lesson ${i + 1})`, description,
        body: `
      <article class="lesson-body" style="margin:0 auto">
        <div class="breadcrumb"><a href="/#/courses">Courses</a> / <a href="${cUrl}">${esc(c.title)}</a> / Lesson ${i + 1}</div>
        <h1>${esc(l.title)}</h1>
        <p class="muted">${l.minutes} min</p>
        ${l.audio ? `<div class="podcast"><b>Listen: this lesson as a conversation</b><audio controls preload="none" src="${esc(l.audio)}"></audio><p class="muted small">Two hosts talk the lesson through. The voices are synthetic; the script was written from this lesson and checked against it, and asserts nothing the lesson does not.</p></div>` : ""}
        ${l.objectives.length ? `<div class="objectives"><b>In this lesson you will learn to</b><ul>${l.objectives.map(o => `<li>${esc(o)}</li>`).join("")}</ul></div>` : ""}
        ${l.video ? `<iframe class="video" src="${esc(l.video)}" title="${esc(l.title)}" allowfullscreen loading="lazy"></iframe>` : ""}
        <div class="lesson-content">${l.content}</div>
        <div class="quiz"><h2>Check your understanding</h2><p>${l.quiz.length ? `This lesson has a ${l.quiz.length}-question quiz. Pass it and the questions come back on a schedule in Review, so what you learned stays learned.` : "Mark the lesson complete in the app to keep your place."} Your progress is saved in your browser; no account needed.</p><div class="btn-row"><a class="btn btn-primary" href="${appLesson}">Open this lesson in the app</a></div></div>
        <nav class="lesson-nav">
          ${prev ? `<a class="btn btn-secondary" href="${cUrl}${prev.id}/">← ${esc(prev.title)}</a>` : `<a class="btn btn-secondary" href="${cUrl}">← Course home</a>`}
          ${next ? `<a class="btn btn-secondary" href="${cUrl}${next.id}/">${esc(next.title)} →</a>` : `<a class="btn btn-primary" href="${app}">Finish course →</a>`}
        </nav>
      </article>`,
      }));
      urls.push({ loc: lUrl, priority: "0.6" });
    });
  }
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(SITE, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${ORIGIN}${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join("\n")}\n</urlset>\n`);
  console.log(`wrote ${urls.length - 1} static pages under dist/courses/ and sitemap.xml`);
}

if (isMain) main();
function main() {
const courses = [];
for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
  const schoolDir = path.join(COURSES_DIR, school.name);
  for (const cdir of fs.readdirSync(schoolDir, { withFileTypes: true }).filter(d => d.isDirectory())) {
    const dir = path.join(schoolDir, cdir.name);
    const yamlPath = path.join(dir, "course.yaml");
    if (!fs.existsSync(yamlPath)) { warn.push(`${dir}: no course.yaml, skipped`); continue; }
    const rel = path.relative(ROOT, yamlPath);
    const meta = readCourseYaml(yamlPath);
    if (!meta) continue;
    req(meta, ["id", "title", "school", "subject", "level", "status", "summary", "description", "outcomes"], rel);
    if (meta.id !== cdir.name) errors.push(`${rel}: id "${meta.id}" must match folder name "${cdir.name}"`);
    if (meta.school !== school.name) errors.push(`${rel}: school "${meta.school}" must match folder "${school.name}"`);
    // Standards 3.4 and 3.7. The field decides whether the neutrality audit is mandatory, so
    // an absent field is a decision nobody made: four of seven courses had none, including
    // Personal Finance, whose tax lesson is exactly the 3.4 case.
    if (typeof meta.sensitive_domain !== "boolean") errors.push(`${rel}: "sensitive_domain" must be true or false (standards 3.4); it decides whether the neutrality audit is mandatory`);
    if (school.name === "christian-studies" && meta.standpoint !== "christian") errors.push(`${rel}: courses under christian-studies carry "standpoint: christian" (standards 3.7)`);
    if (school.name !== "christian-studies" && meta.standpoint) errors.push(`${rel}: "standpoint" belongs only to christian-studies courses; every other school teaches on neutral ground`);
    if (meta.estimated_hours !== undefined) errors.push(`${rel}: "estimated_hours" is no longer read; delete it. The site sums the measured minutes of every lesson and assessment.`);
    if (meta.status !== "published" && !DRAFTS) { warn.push(`${rel}: status ${meta.status}, not built (only published courses go to the site)`); continue; }

    const lessonsDir = path.join(dir, "lessons");
    const files = fs.existsSync(lessonsDir) ? fs.readdirSync(lessonsDir).filter(f => f.endsWith(".md")).sort() : [];
    if (!files.length) { warn.push(`${rel}: no lessons yet, skipped`); continue; }
    const lessons = files.map(f => {
      const file = path.relative(ROOT, path.join(lessonsDir, f));
      const { meta: lm, body } = parseFrontmatter(fs.readFileSync(path.join(lessonsDir, f), "utf8"), file);
      req(lm, ["title", "minutes"], file);
      const quiz = Array.isArray(lm.quiz) ? lm.quiz : [];
      if (!quiz.length) warn.push(`${file}: no quiz (lesson will use "mark complete")`);
      checkQuizShape(quiz, file, "quiz");
      const words = body.split(/\s+/).filter(Boolean).length;
      if (words < 250) warn.push(`${file}: only ${words} words; depth standard expects substantially more`);
      return { id: f.replace(/\.md$/, ""), title: lm.title, minutes: lm.minutes, video: lm.video, audio: lm.audio, objectives: Array.isArray(lm.objectives) ? lm.objectives : [], quiz, content: checkRenderedHtml(renderBody(body), file) };
    });
    // assessments: final test (has quiz) and projects
    const aDir = path.join(dir, "assessments");
    const aFiles = fs.existsSync(aDir) ? fs.readdirSync(aDir).filter(f => f.endsWith(".md")).sort() : [];
    const assessments = aFiles.map(f => {
      const file = path.relative(ROOT, path.join(aDir, f));
      const { meta: am, body } = parseFrontmatter(fs.readFileSync(path.join(aDir, f), "utf8"), file);
      req(am, ["title"], file);
      const quiz = Array.isArray(am.quiz) ? am.quiz : [];
      checkQuizShape(quiz, file, "item");
      checkQuizTypes(quiz, file, "item", m => errors.push(m));
      const type = am.type || (quiz.length ? "test" : "project");
      return { id: f.replace(/\.md$/, ""), title: am.title, type, minutes: am.minutes || 0, pass_mark: am.pass_mark || 0.8, quiz, content: checkRenderedHtml(renderBody(body), file) };
    });
    // Standard 4.4: six or more lessons means a course-end test. Every live course complies;
    // this keeps it so.
    if (lessons.length >= 6 && !assessments.some(a => a.type === "test"))
      errors.push(`${rel}: ${lessons.length} lessons and no final test; standard 4.4 asks for assessments/final-test.md on a course of six or more lessons`);
    // One number for a course's length, from the measured minutes of everything in it. There
    // used to be an estimated_hours field as well, which nothing displayed and which drifted:
    // Bible Basics said 12 while its lessons alone summed to 27.
    const minutes = [...lessons, ...assessments].reduce((n, x) => n + (Number(x.minutes) || 0), 0);
    courses.push({ ...meta, hours: Math.round(minutes / 6) / 10, lessons, assessments });
  }
}

/* ---------- lint every lesson, published or not ----------
   These run over drafts too, because a draft is where a defect is cheap to fix.
   Findings here are the ones a Stage 4 review caught by hand and should never
   have to catch again. See docs/EDITORIAL_STANDARDS.md 4.5, 4.6 and 4.7. */
// The site's two palettes, read from the stylesheet so the check tracks the real thing.
const TOKENS = (() => {
  const out = { light: {}, dark: {} };
  let css = "";
  try { css = fs.readFileSync(path.join(ROOT, "site", "assets", "styles.css"), "utf8"); } catch { return out; }
  const DARK = "@media (prefers-color-scheme: dark)";
  const at = css.indexOf(DARK);
  // If the dark block is renamed or moved, slicing at -1 would silently read the whole file as
  // "light" and one byte as "dark". Say so instead.
  if (at < 0) { errors.push(`site/assets/styles.css: no "${DARK}" block; the palette reader in scripts/build.mjs expects the light tokens before it and the dark ones inside it`); return out; }
  const light = css.slice(0, at);
  const dark = css.slice(at);
  for (const [scope, text] of [["light", light], ["dark", dark]]) {
    for (const m of text.matchAll(/(--[a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) out[scope][m[1]] = m[2].toLowerCase();
  }
  // A token not restated in the dark block keeps its light value.
  for (const [k, v] of Object.entries(out.light)) if (!(k in out.dark)) out.dark[k] = v;
  return out;
})();

// Lessons whose prose has gone stiff, collected across the whole run and reported as one
// line rather than one warning each. The check is right and the debt is real (twenty
// lessons on 2026-09-18), but twenty separate warnings is a wall a session learns to
// scroll past, and docs/VERIFICATION.md records that a warning nobody reads is worse than
// no warning at all. One line names the worst and gives the count.
const STIFF = [];

function lintLessons() {
  for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
      // Assessments get the same lint as lessons. They used not to, so a final test could
      // carry an em dash, an unclosed ::: or an answer in prose and validate clean.
      const courseDir = path.join(COURSES_DIR, school.name, cdir.name);
      const lintFiles = [];
      for (const sub of ["lessons", "assessments"]) {
        const d = path.join(courseDir, sub);
        if (fs.existsSync(d)) for (const f of fs.readdirSync(d).filter(f => f.endsWith(".md"))) lintFiles.push([d, f]);
      }
      if (!lintFiles.length) continue;
      // A draft quoting the wrong translation must not block the deploy of courses that
      // are already live. Drafts warn; published courses fail the build.
      let published = false;
      try { published = yaml.load(fs.readFileSync(path.join(COURSES_DIR, school.name, cdir.name, "course.yaml"), "utf8")).status === "published"; } catch {}
      const fail = m => (published ? errors : warn).push(published ? m : m + " [draft: fix before publishing]");
      // `<!-- unread: Hurley, Copi -->` in research/SOURCES.md names works the course has
      // NOT read. Keeping the list beside the research is the point: whoever decides a book
      // is unread is the person writing the research file.
      //
      // A work can be partly read, which is the common case once someone starts closing the
      // debt: Weston's chapter IV was read and recorded here while chapters I and VI to VIII
      // were not, so lesson 9 cites it honestly and lesson 10 does not. An entry may name the
      // lessons it does not apply to, `Weston (except 09)`, so the flag keeps firing where the
      // citation is still unsupported. The exemption belongs in SOURCES.md beside the entry
      // that records which chapter was read; anywhere else and the two drift apart.
      let unreadWorks = [];
      try {
        const sm = fs.readFileSync(path.join(COURSES_DIR, school.name, cdir.name, "research", "SOURCES.md"), "utf8");
        const m = sm.match(/<!--\s*unread:\s*([^>]*?)\s*-->/i);
        if (m) unreadWorks = m[1].split(",").map(x => x.trim()).filter(Boolean).map(entry => {
          const e = entry.match(/^(.*?)\s*\(\s*except\s+([^)]*)\)$/i);
          return e ? { name: e[1].trim(), except: e[2].split(/[,\s]+/).filter(Boolean) } : { name: entry, except: [] };
        });
      } catch {}
      for (const [lessonsDir, f] of lintFiles) {
        const file = path.relative(ROOT, path.join(lessonsDir, f));
        const src = fs.readFileSync(path.join(lessonsDir, f), "utf8");

        // Frontmatter must parse even in a draft. The main build only reads published
        // courses, so a YAML error in a draft stays invisible until the day it is
        // published, which is the worst possible moment to find it.
        //
        // js-yaml knows the line and column and this check used to throw them away,
        // printing a guess at the cause instead. docs/QUEUE.md carried that as a defect
        // for weeks and it was the most frequently hit one in the repo: three lessons
        // drafted on 2026-09-18 tripped it five times between them, and every hunt began
        // by re-parsing the file by hand in node to find out where. The line number and
        // the offending text are now reported, and the three known causes are listed
        // rather than the one. The message also gives the line within the whole file,
        // not within the frontmatter, so it is clickable.
        try {
          const fmText = src.split(/^---$/m)[1];
          const fm = yaml.load(fmText);
          if (fm && Array.isArray(fm.quiz)) {
            fm.quiz.forEach((q, i) => {
              if (!q || !q.q || !Array.isArray(q.options) || q.options.length < 2)
                fail(`${file}: quiz #${i + 1} lost its question or options when the frontmatter parsed; check for an unquoted value containing a colon`);
            });
            checkQuizTypes(fm.quiz, file, "quiz", fail);
            checkObjectiveTypes(fm.objectives, file, fail);
          }
        } catch (e) {
          // e.mark.line is 0-based and relative to the frontmatter text, which itself
          // starts on the file's second line (after the opening `---`), so +2 puts it
          // back into file coordinates.
          const at = e.mark && typeof e.mark.line === "number" ? e.mark.line + 2 : null;
          const srcLines = src.split("\n");
          // YAML notices a malformed scalar at the NEXT mapping entry, not at the value
          // itself, so the reported line is reliably one past the mistake. Print both and
          // say which is which, because the line above is the one to edit.
          const at2 = at ? (srcLines[at - 1] || "").trim() : "";
          const at1 = at && at > 1 ? (srcLines[at - 2] || "").trim() : "";
          const where = at ? `:${at}` : "";
          const shown = at
            ? ` The mistake is almost always the line BEFORE the one YAML names, because a malformed value is only noticed at the next entry. Line ${at - 1}: "${at1.slice(0, 80)}" <- start here. Line ${at}: "${at2.slice(0, 80)}".`
            : "";
          fail(`${file}${where}: frontmatter does not parse as YAML (${e.reason || e.message}).${shown} Three known causes, in order of how often they bite: a colon followed by a space inside an unquoted value; a value beginning with a quotation mark, which YAML reads as a quoted scalar so anything after the closing quote is a syntax error; and a value beginning with a backtick. Wrap the value in a >- block, or reword it.`);
        }

        // courses/CLAUDE.md rule 4: never an em dash in learner-facing prose, and the en dash
        // is the same rule (the convention is " to "). The en dash half was prose only, and
        // fifteen files carried one when the check landed.
        // Rule 4 also says "quoted text keeps what its author wrote", and the en dash check below
        // has always honoured that by stripping blockquotes and quoted strings first. This one did
        // not, so the two halves of one rule disagreed, and a verbatim quotation of a real document
        // that happened to contain an em dash could not be used at all. Found 2026-09-18 while
        // quoting Hansard, whose 1875 transcription marks an interrupted speech with one. Both
        // halves now strip the same thing.
        {
          const unquoted = src.split("\n").filter(l => !l.startsWith(">")).join("\n").replace(/"[^"\n]*"/g, "");
          if (unquoted.includes("\u2014")) fail(`${file}: contains an em dash outside a quotation (courses/CLAUDE.md rule 4)`);
        }
        // Every tool in scripts/ splits frontmatter on "\n---\n". This build accepted CRLF, so
        // a Windows-saved lesson built fine and was invisible to the quiz checks and the
        // reading-time measure. One rule, one place: lessons are LF.
        // Citations are [n] with a numbered Sources list; the build links them. Markdown footnotes
        // ([^n] and [^n]: lines) are not rendered by marked, so every one reached the reader as
        // literal text. Six Python lessons shipped ninety-eight of them.
        if (/\[\^\w+\]/.test(src)) fail(`${file}: uses a Markdown footnote ([^n]), which the renderer does not support; cite with [n] and a numbered entry under "## Sources"`);
        if (src.includes("\r")) fail(`${file}: has Windows line endings (CR); save it with LF, or the quiz and minutes tools will not see its frontmatter`);
        // An unspaced en dash is a range or a pair (Mark 16:9\u201320, Macnamara\u2013Hambrick) and stays.
        // A spaced one is punctuation, which is the em dash by another name. Quoted text keeps
        // whatever its author wrote, so quotations and blockquotes are stripped first.
        {
          const unquoted = src.split("\n").filter(l => !l.startsWith(">")).join("\n").replace(/"[^"\n]*"/g, "");
          if (/ \u2013 /.test(unquoted)) fail(`${file}: uses a spaced en dash as punctuation; write " to ", a comma, or a full stop instead (courses/CLAUDE.md rule 4)`);
        }

        // 4.6: SVG text drawn in a fixed dark colour disappears on the dark theme.
        // Text sitting on a coloured bar is fine, so only flag fills outside a bar's own colours.
        const darkText = [...src.matchAll(/<text[^>]*fill="(#[0-9a-fA-F]{3,6})"/g)]
          .map(m => m[1].toLowerCase())
          .filter(hex => {
            const h = hex.length === 4 ? "#" + [...hex.slice(1)].map(c => c + c).join("") : hex;
            const [r, g, b] = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
            return (0.299 * r + 0.587 * g + 0.114 * b) < 140; // dark on a dark ground
          });
        if (darkText.length) warn.push(`${file}: ${darkText.length} SVG <text> fill(s) hardcoded dark (${[...new Set(darkText)].join(", ")}); use var(--text, ...) or var(--text-2, ...) so they survive the dark theme`);

        // The mirror of the dark-fill rule, and easy to miss. White label text was safe
        // while bars were a fixed dark colour. Once the bars became var(--navy) they flip
        // light on the dark theme, and the white text on them disappears. Any hardcoded
        // fill on SVG text is now a bug: use a token, or put the label outside the bar
        // with a colour swatch, which is what bible-basics lesson 3 does.
        const lightText = [...src.matchAll(/<text[^>]*fill="(#[0-9a-fA-F]{3,6})"/g)]
          .map(m => m[1].toLowerCase())
          .filter(hex => {
            const h = hex.length === 4 ? "#" + [...hex.slice(1)].map(c => c + c).join("") : hex;
            const [r, g, b] = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
            return (0.299 * r + 0.587 * g + 0.114 * b) >= 140;
          });
        if (lightText.length) warn.push(`${file}: ${lightText.length} SVG <text> fill(s) hardcoded light (${[...new Set(lightText)].join(", ")}); these sat on bars that are now themed, so they vanish on the dark theme. Put labels outside the bar with a swatch, as bible-basics lesson 3 does.`);

        // 4.6: shape fills matter as much as text fills. A navy marker on a dark ground
        // vanishes even when its label re-themes correctly, which leaves a chart with
        // labels and no bars.
        const darkShapes = [...src.matchAll(/<(?:rect|circle|line|path|polygon|ellipse|polyline)\b[^>]*?(?:fill|stroke)="(#[0-9a-fA-F]{3,6})"/g)]
          .map(m => m[1].toLowerCase())
          .filter(hex => {
            const h = hex.length === 4 ? "#" + [...hex.slice(1)].map(c => c + c).join("") : hex;
            const [r, g, b] = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
            return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
          });
        if (darkShapes.length) warn.push(`${file}: ${darkShapes.length} SVG shape fill(s) hardcoded dark (${[...new Set(darkShapes)].join(", ")}); markers and rules vanish on the dark theme even when their labels do not`);

        // A blank line inside a raw HTML block ends it, so Markdown closes the <svg> early and
        // hands the rest to the paragraph parser. The chart still looks fine in the source and
        // its words still appear in the built HTML, so nothing catches it except opening the
        // page: the shapes after the blank line simply never draw. It cost bible-basics 01 all
        // ten of its labels and lesson 08 thirty-nine of its forty-three.
        {
          let inSvg = false;
          src.split("\n").forEach((line, i) => {
            if (line.includes("<svg")) inSvg = true;
            if (inSvg && !line.trim()) {
              fail(`${file}: blank line ${i + 1} sits inside an <svg>. Markdown ends the raw HTML block there, so everything after it renders outside the chart and never draws. Delete the blank line.`);
              inSvg = false;
            }
            if (line.includes("</svg>")) inSvg = false;
          });
        }

        // 4.6: labels below about 15 viewBox units are unreadable once an SVG is scaled to phone width.
        // font-size and fill inherit, so a label can carry neither attribute itself and still be
        // 9px white text. Reading only the <text> tag missed every such label: bible-basics
        // lesson 10 put all 24 of its labels on <g> wrappers and passed both checks with nothing
        // above 11 units. Walk the tags and resolve what each <text> actually inherits.
        const effectiveLabels = () => {
          const out = [];
          const stack = [{}];
          const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
          for (const m of src.matchAll(/<(\/?)(g|text|svg)\b([^>]*)>/g)) {
            const [, closing, name, rest] = m;
            const selfClosing = rest.trimEnd().endsWith("/");
            if (closing) { if (name !== "text") stack.pop(); continue; }
            const own = attrs(m[0]);
            const inherited = { ...stack[stack.length - 1], ...own };
            if (name === "text") out.push(inherited);
            else if (!selfClosing) stack.push(inherited);
          }
          return out;
        };
        const labels = effectiveLabels();
        const small = labels.map(l => parseFloat(l["font-size"])).filter(n => n && n < 15);
        if (small.length) warn.push(`${file}: ${small.length} SVG label(s) under font-size 15; they render below ~10px on a phone (4.6)`);

        // The rule above uses a bare 15 as the floor, which silently assumes a viewBox about
        // 520 units wide. A chart scales to its container, so what a reader actually sees is
        // font-size x (container / viewBox width), and a wide viewBox shrinks every label.
        // `scripts/CLAUDE.md` had this written down as something the linter could not see.
        // It can now: measured in the real page at a 375px viewport, a chart's container is
        // 343px, so that is the number modelled here. Bible Basics lesson 9 renders its
        // 15-unit labels at 8.0px on a phone, and 34 other charts sit at 8.8px.
        {
          const PHONE_PX = 343, FLOOR_PX = 10;
          for (const m of src.matchAll(/<svg[^>]*viewBox="([-\d.\s]+)"/g)) {
            const vbW = parseFloat(m[1].trim().split(/\s+/)[2]);
            if (!vbW) continue;
            const end = src.indexOf("</svg>", m.index);
            const seg = src.slice(m.index, end < 0 ? src.length : end);
            const sizes = [...seg.matchAll(/font-size="([\d.]+)"/g)].map(x => parseFloat(x[1])).filter(Boolean);
            if (!sizes.length) continue;
            const eff = Math.min(...sizes) * PHONE_PX / vbW;
            if (eff < FLOOR_PX)
              warn.push(`${file}: chart with viewBox width ${vbW} renders its smallest label at ${eff.toFixed(1)}px on a phone, under the ${FLOOR_PX}px floor (4.6). Narrow the viewBox or raise the font-size.`);
          }
        }

        // 4.6: a label wider than its own viewBox is clipped by the browser, silently, on
        // every device. It cost bible-basics lesson 2 the last word of both its chart
        // captions, including the one naming the source. Node cannot measure text, so this
        // uses real Arial advance widths (scripts/text-width.mjs). Checked against Chromium
        // over all 252 labels in the repo, the estimate never ran more than 3% over the
        // truth and usually a little under, so it under-reports rather than crying wolf.
        for (const m of src.matchAll(/<text([^>]*)>([^<]*)<\/text>/g)) {
          const [, attrs, body] = m;
          const size = Number((attrs.match(/font-size="(\d+(?:\.\d+)?)"/) || [])[1]);
          const x = Number((attrs.match(/\bx="(-?\d+(?:\.\d+)?)"/) || [])[1]);
          if (!size || !Number.isFinite(x) || !body.trim()) continue;
          // The viewBox this label sits in is the last one opened before it.
          // Slice at the tag's own position, not the first occurrence of the label text: a
          // label like "Year" also appears in prose, which sent 263 of 873 labels to the
          // wrong chart or to none, and a label with no chart is skipped below.
          const boxes = [...src.slice(0, m.index).matchAll(/viewBox="\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+[\d.]+"/g)];
          const vbWidth = boxes.length ? Number(boxes[boxes.length - 1][1]) : 0;
          if (!vbWidth) continue;
          const advance = estimateTextWidth(body, size, /font-weight="(bold|[6-9]00)"/.test(attrs));
          // A rotated label takes up its line height across the page, not its length: turned on
          // its side, a long caption is only as wide as its font is tall. Project the advance
          // onto the x axis instead of assuming the text runs left to right.
          const transform = (attrs.match(/transform="([^"]*)"/) || [])[1];
          const rotate = transform && (transform.match(/rotate\(\s*(-?\d+(?:\.\d+)?)/) || [])[1];
          // Any other transform moves the label in ways this cannot reason about. Skip those
          // rather than measure the wrong box and report a label that is really fine.
          if (transform && !rotate) continue;
          const rad = (Number(rotate) || 0) * Math.PI / 180;
          const width = Math.abs(advance * Math.cos(rad)) + Math.abs(size * Math.sin(rad));
          const anchor = (attrs.match(/text-anchor="(\w+)"/) || [])[1] || "start";
          const left = anchor === "middle" ? x - width / 2 : anchor === "end" ? x - width : x;
          if (left + width > vbWidth) {
            fail(`${file}: SVG label "${body.trim().slice(0, 45)}" runs about ${Math.round(left + width - vbWidth)} units past its viewBox (${vbWidth} wide); the browser clips the end of it on every device. Shorten it, drop the font size, or widen the viewBox.`);
          } else if (left + width * FONT_SPREAD > vbWidth) {
            // Fits in Arial, does not fit in the widest system font. That means it is clipped
            // for some readers and not others, which is why it survives a look on one machine.
            warn.push(`${file}: SVG label "${body.trim().slice(0, 45)}" fits its viewBox (${vbWidth} wide) in a narrow system font but not a wide one, so it is clipped for some readers and not others. Give it about ${Math.round(left + width * FONT_SPREAD - vbWidth)} more units of room.`);
          }
        }

        // A :::predict or :::checkpoint renders its header line as the visible question and
        // hides its body behind a "Show the answer" button. A header that is a label rather
        // than a question ("Before you read on", "Quick check") therefore hides the question
        // along with the answer, and the reader sees a button and nothing to predict. Four
        // Python Basics lessons shipped twelve blocks like that. The header has to carry the
        // question, which in practice means it ends in a question mark.
        {
          // Only the generic labels. A header like "Model answers for tasks 3 and 4" is the
          // other legitimate use, where an :::exercise above states the questions and the
          // block reveals the answers, and eleven Bible Basics blocks do that correctly.
          // An earlier version also flagged any short header without a question mark, which
          // caught all eleven of those and nothing else.
          const LABELS = /^(before you (read on|start|look)|quick check|check yourself|your turn|predict first|find the fault|try it|pause here|think first|read this one|one more)\W*$/i;
          src.split("\n").forEach((line, i) => {
            const m = line.match(/^:::(predict|checkpoint)[ \t]*(.*)$/);
            if (!m) return;
            const header = m[2].trim();
            if (!header)
              warn.push(`${file}:${i + 1}: :::${m[1]} with no header, so the reader sees no question at all. The header line is the visible half; the body is hidden.`);
            else if (LABELS.test(header))
              warn.push(`${file}:${i + 1}: :::${m[1]} header reads as a label, not a question: "${header}". The header is what the reader sees; a question in the body is hidden with the answer.`);
          });
        }

        // A `:::` block that never closes swallows the rest of the lesson. Bible Basics
        // lesson 9 shipped with `::: The committee's conclusion: "..."`, a closing fence with
        // the next paragraph run onto the same line, so the fence matched neither the opener
        // pattern nor the closer. The figure's caption ate 5,236 characters, about 800 words
        // and a second figure, and `:::figure` captions render with parseInline, so all of it
        // came out as one run of text inside a photo caption. A green build for months.
        {
          const lines = src.split("\n");
          let depth = 0, openedAt = 0;
          lines.forEach((line, i) => {
            if (/^:::\w/.test(line)) {
              if (depth === 0) openedAt = i + 1;
              depth++;
              // The renderer does not nest: it matches an opener to the first bare ::: after
              // it. A nested block would pass this tracker and render broken, so it is refused.
              if (depth > 1) fail(`${file}:${i + 1}: a ::: block opens inside the one from line ${openedAt}. Blocks do not nest; close the outer one first.`);
            }
            else if (/^:::[ \t]*$/.test(line)) depth = Math.max(0, depth - 1);
            else if (/^:::/.test(line))
              fail(`${file}:${i + 1}: a ::: fence with text after it on the same line. A closing fence must be ::: alone; an opening one must be :::kind. Quoted: "${line.trim().slice(0, 70)}"`);
          });
          if (depth > 0)
            fail(`${file}: a ::: block opened at line ${openedAt} is never closed, so it swallows the rest of the lesson.`);
        }

        // A ::: block's body parses with breaks:false, so consecutive lines join into one
        // paragraph. That is right for prose and wrong for a list, and Markdown only rescues
        // the markers it knows: "- x" and "1. x" become real lists, while "(a) x" does not.
        // So a hand-lettered list inside a block renders as a wall of run-on text. Writing
        // Clearly lesson 3 shipped a ten-item diagnosis exercise that way, unusable on a phone,
        // and three other blocks in two courses did the same. Blank lines between the items fix
        // it; courses/CLAUDE.md says so in prose, and this is the check behind it.
        {
          const lines = src.split("\n");
          let depth = 0, run = 0, startLine = 0;
          const marker = ln => /^\s*(\([a-z0-9]{1,3}\)|[a-z0-9]{1,3}\))\s/i.test(ln);
          const flush = () => {
            if (run >= 2) fail(`${file}:${startLine}: ${run} hand-lettered list items in a row inside a ::: block, with no blank line between them. The body parses with breaks:false, so they render as one run-on paragraph. Put a blank line between each item.`);
            run = 0;
          };
          lines.forEach((line, i) => {
            if (/^:::\w/.test(line)) { depth++; flush(); return; }
            if (/^:::[ \t]*$/.test(line)) { depth = Math.max(0, depth - 1); flush(); return; }
            if (depth === 0) { flush(); return; }
            if (marker(line)) { if (!run) startLine = i + 1; run++; } else flush();
          });
          flush();
        }

        // 4.2: a prompt that tells the reader to answer before reading on, followed by the
        // answer in plain prose, is recognition wearing retrieval's clothes. Only :::predict
        // and :::checkpoint bodies render behind a button. Three lessons in a row shipped this
        // and three hand reviews caught it; the fourth should not have to. Fails the build on
        // a published course (promoted 2026-09-06 once the six shipped ones were fixed).
        {
          const lines = src.split("\n");
          let depth = 0;
          lines.forEach((line, i) => {
            if (/^:::\w/.test(line)) depth++;
            else if (/^:::\s*$/.test(line)) depth = Math.max(0, depth - 1);
            if (depth > 0) return;                       // already inside a hidden block
            if (!/\b(before you read on|before reading on|before you read my answer|before you read mine|before I do|do this one yourself|do it yourself|do the next one yourself|write this one|write it down before|try to build the counterexample|cover the answer)\b/i.test(line)) return;
            // Look ahead for the hidden block that holds the answer. An eight-line window was
            // too small: a "Now do it yourself" heading is regularly followed by a long
            // :::exercise and only then by the :::checkpoint carrying the answers, which made
            // this fire on six lessons that were doing it correctly. Scan to the next heading
            // instead, so the window is the section rather than a fixed count.
            const ahead = [];
            for (let k = i + 1; k < lines.length; k++) {
              if (/^#{1,6}\s/.test(lines[k])) break;
              ahead.push(lines[k]);
            }
            if (ahead.some(l => /^:::(predict|checkpoint)/.test(l))) return;
            fail(`${file}:${i + 1}: asks the reader to answer before reading on, then prints the answer in plain prose. Only :::predict and :::checkpoint hide their body. Quoted: "${line.trim().slice(0, 70)}"`);
          });

          // The rule above asks whether a hidden block appears anywhere before the next
          // heading, which a lesson can satisfy while still printing the answer first.
          // Bible Basics lesson 9 did exactly that: "Now do the next step before I do",
          // then the answer in plain prose, then a :::checkpoint on a different question
          // twelve lines later, and the build passed. So also fail the reveal itself,
          // wherever it stands outside a hidden block. This one cannot be routed around
          // by adding an unrelated block further down.
          depth = 0;
          lines.forEach((line, i) => {
            if (/^:::\w/.test(line)) depth++;
            else if (/^:::\s*$/.test(line)) depth = Math.max(0, depth - 1);
            if (depth > 0) return;
            if (/^\s*(?:Here(?:'s| is) mine|Mine is|My answer|Here(?:'s| is) my answer|Here(?:'s| is) what I)\b/i.test(line))
              fail(`${file}:${i + 1}: reveals the answer in plain prose, outside :::predict or :::checkpoint. Quoted: "${line.trim().slice(0, 70)}"`);
          });
        }

        // A block's header is ONE PHYSICAL LINE. renderBlocks captures it with
        // /^:::(kind)[ \t]*(.*)\r?\n/, and `.` does not match a newline, so a header wrapped
        // at the file's usual column silently becomes a fragment: everything after the first
        // line falls into the body, behind the reveal button on a :::predict or :::checkpoint.
        // The question the reader is shown then breaks mid-clause and the instruction they are
        // meant to act on before reading on is hidden.
        //
        // Found on 2026-09-19 by a Stage 4 reviewer reading build.mjs rather than the rendered
        // page, in nine blocks across four Time Management lessons, all written in one session
        // by a drafter wrapping prose to 100 columns. Every published course was clean, because
        // their headers happen to be short. Nothing in the pipeline would have caught it: the
        // markdown is valid, validate was green, and the defect is invisible in the source.
        //
        // The test is a continuation rather than a length: a body whose first line opens with a
        // lowercase letter while the header does not end a sentence is a wrapped header. A title
        // followed by a numbered list or a quotation is the normal case and passes.
        {
          const re = /^:::(callout|exercise|predict|checkpoint)[ \t]*(.*)\r?\n([\s\S]*?)^:::[ \t]*$/gm;
          let b;
          while ((b = re.exec(src)) !== null) {
            const title = b[2].trim(), first = (b[3].split("\n")[0] || "").trim();
            if (/^[a-z]/.test(first) && !/[.?!]$/.test(title))
              fail(`${file}: the :::${b[1]} header is wrapped onto a second line, so the reader is shown only "${title.slice(-45)}" and the rest is hidden in the body. A block header must be one physical line, however long it runs.`);
          }
        }

        // Mental Fitness outline decision 1: every lesson carries the same crisis callout, word for
        // word, directly after its opening. The numbers live in this one string, so a number that
        // changes is one edit here and one in each lesson, and a lesson that drops the box or keeps
        // an old number fails. Root rule 10: a safety rule that needed shouting became a check.
        if (cdir.name === "mental-fitness" && path.basename(lessonsDir) === "lessons") {
          const CRISIS = ":::callout If you're struggling right now\nThis course is education, not care. If you're thinking about suicide or self-harm, or don't feel able to keep yourself safe, contact emergency services (911 in the US and Canada, 999 in the UK, 112 across the EU, 000 in Australia) or a crisis line: call or text 988 in the US and Canada, call Samaritans on 116 123 in the UK and Ireland, or Lifeline on 13 11 14 in Australia. Elsewhere, findahelpline.com lists free, confidential lines by country.\n:::";
          if (!src.replace(/\r\n/g, "\n").includes(CRISIS))
            fail(`${file}: the crisis callout is missing or differs from the standard text. Every Mental Fitness lesson carries it word for word (research/OUTLINE.md decision 1); the text is in scripts/build.mjs.`);
        }

        // Nutrition outline decision 1: the same safety callout on every lesson, word for word, for
        // the same reason as Mental Fitness's: a reader can arrive at any lesson from a search engine,
        // and the helpline numbers live in this one string.
        if (cdir.name === "nutrition" && path.basename(lessonsDir) === "lessons") {
          const NUTRITION_SAFETY = ":::callout Before you change anything\nThis course is education, not advice about your own diet. If you're pregnant or trying to be, have diabetes or kidney disease, take a medicine such as warfarin, or are deciding what a child should eat, talk to a doctor or a registered dietitian first. If food, eating or your weight has started to feel out of your control, tell a doctor, or call Beat on 0808 801 0677 in the UK or ANAD's peer-support helpline on 1-888-375-7767 in the US.\n:::";
          if (!src.replace(/\r\n/g, "\n").includes(NUTRITION_SAFETY))
            fail(`${file}: the safety callout is missing or differs from the standard text. Every Nutrition lesson carries it word for word (research/OUTLINE.md decision 1); the text is in scripts/build.mjs.`);
        }

        // STYLE_GUIDE: contractions. "Their absence is the fastest way to sound like a
        // manual." Four consecutive Digital Literacy lessons were sent back by Stage 4 for
        // this and nothing else would have caught it: 1 in 4,739 body words on lesson 8,
        // 2 in 4,659 on lesson 9, 3 in 4,822 on lesson 10, 5 in 3,401 on lesson 12, against
        // 36 in lesson 1 and 27 in lesson 7 of the same course. Reviews closed it three
        // times and it came back each time, which is root CLAUDE.md rule 10's trigger:
        // if a rule needs shouting, write a check instead.
        //
        // The rate is deliberately generous. This is a floor to catch prose that has gone
        // stiff, not a target to write towards, and a lesson quoting a lot of standards
        // language will sit nearer it honestly. Possessives are excluded, because "the
        // site's address" is not a contraction and counting it hides the defect.
        {
          const body = src.split(/^---$/m).slice(2).join("---");
          // An unbalanced `**` run renders as literal asterisks on the page and the emphasis
          // it was meant to carry disappears. Nothing here caught it before, and on 2026-09-19 a
          // repo-wide scan found fourteen across five courses, three of them live. Every one came
          // from an edit rather than from drafting: cutting one bold span out of a pair, or
          // wrapping a span that was already wrapped. Two Stage 4 reviewers found two of them by
          // eye in the same afternoon, which is the wrong way to find a mechanical defect.
          for (const para of body.split(/\n\n+/)) {
            const runs = (para.match(/\*\*/g) || []).length;
            const quad = /\*\*\*\*/.test(para);
            if (runs % 2 === 0 && !quad) continue;
            const where = para.replace(/\s+/g, " ").slice(0, 70);
            fail(`${file}: ${quad ? "four asterisks in a row" : "an odd number of ** runs"} in the paragraph beginning "${where}". It renders as literal asterisks and loses the emphasis.`);
          }

          const words = body.split(/\s+/).filter(Boolean).length;
          if (words >= 1200) {
            const hits = body.match(/[A-Za-z]+'(t|re|ve|ll|m|d|s)\b/g) || [];
            const POSSESSIVE_OK = new Set(["it's", "that's", "here's", "there's", "what's", "let's", "he's", "she's", "who's"]);
            const contractions = hits.filter(h => !h.endsWith("'s") || POSSESSIVE_OK.has(h.toLowerCase()));
            const per1000 = (contractions.length / words) * 1000;
            if (per1000 < 2.5) {
              // A draft is a lesson somebody is working on now, so the warning is
              // actionable and goes next to the file. A published lesson is pre-existing
              // debt and goes into the one-line summary, which is the split that keeps
              // this useful: on 2026-09-18 the summary correctly caught a draft and
              // buried it behind three assessment files that have been stiff for weeks.
              if (published) STIFF.push({ file, n: contractions.length, words, per1000 });
              else warn.push(`${file}: ${contractions.length} contractions in ${words} body words (${per1000.toFixed(1)} per 1,000; this repo's lessons run 5 to 8). The style guide calls their absence "the fastest way to sound like a manual". [draft: fix before publishing]`);
            }
            // The other end, added 2026-09-18. The floor above had only ever caught prose
            // that reads like a manual, and a drafter told to fix it overshot: three
            // consecutive Using AI Effectively drafts came in at 12.2, 15.4 and 17.4 per
            // 1,000 while a fourth, written the same afternoon, sat at 0.0. Two separate
            // reviews found the oscillation by hand and asked for a check rather than a
            // third note, which is root CLAUDE.md rule 10.
            //
            // The ceiling is 14 rather than 8 on purpose. The band is where this repo's
            // lessons sit, not a rule, and a lesson may legitimately run chattier than the
            // average; 14 is comfortably clear of every published lesson and catches the
            // overcorrection, which is the thing that actually happened. Published courses
            // are exempt: this has never been a defect anybody shipped, and a warning on
            // twenty live lessons would bury the drafts, which is the mistake the floor
            // above already made once.
            else if (per1000 > 14 && !published) {
              warn.push(`${file}: ${contractions.length} contractions in ${words} body words (${per1000.toFixed(1)} per 1,000; this repo's lessons run 5 to 8). Overshooting the band reads as an overcorrection rather than as a voice. [draft: fix before publishing]`);
            }
          }
        }

        // /draft-lesson defect 5: "pick the longest option" must not pass the quiz. Bible
        // Basics lesson 8 shipped with the key longest in five of six items, scoring 83%
        // against a 70% pass mark for a reader who read nothing. Measured, not eyeballed,
        // because eyeballing is exactly what missed it. Ties do not count: the failure is
        // the key being the sole longest often enough to be a strategy.
        {
          try {
            const fm = yaml.load(src.split(/^---$/m)[1]);
            if (fm && Array.isArray(fm.quiz) && fm.quiz.length >= 3) {
              let soleLongest = 0, counted = 0;
              const indices = [];
              for (const q of fm.quiz) {
                if (!q || !Array.isArray(q.options) || typeof q.answer !== "number") continue;
                counted++;
                indices.push(q.answer);
                const lens = q.options.map(o => String(o).length);
                const max = Math.max(...lens);
                if (lens[q.answer] === max && lens.filter(l => l === max).length === 1) soleLongest++;
              }
              if (counted >= 3 && soleLongest / counted > 0.5)
                warn.push(`${file}: the correct option is the sole longest in ${soleLongest} of ${counted} quiz items, so "pick the longest" beats reading the lesson. Lengthen the distractors rather than trimming the key, which is usually longest because it is the one carrying the reasoning.`);
              const distinct = new Set(indices).size;
              if (counted >= 4 && distinct <= 2)
                warn.push(`${file}: the quiz uses only ${distinct} of the four answer positions across ${counted} items, which is guessable. Spread the key across all four.`);
              let runs = 0;
              for (let i = 1; i < indices.length; i++) if (indices[i] === indices[i - 1]) runs++;
              if (counted >= 4 && runs >= Math.ceil(counted / 2))
                warn.push(`${file}: ${runs} of the quiz's answer positions repeat the one before them, which is a pattern a reader can ride.`);
            }
          } catch { /* frontmatter parse failures are reported by their own check above */ }
        }

        // 4.6: two different tokens that resolve to the same colour cannot distinguish two
        // things. Logic lesson 9 drew a background track in var(--line-strong) and its value
        // bar in var(--navy), and those are byte-identical in both themes, so the chart
        // rendered as one solid block under a caption describing a grey bar that was not there.
        {
          const svgs = src.match(/<svg[\s\S]*?<\/svg>/g) || [];
          for (const svg of svgs) {
            const used = [...new Set([...svg.matchAll(/(?:fill|stroke)="var\((--[a-z0-9-]+)/g)].map(m => m[1]))];
            for (const theme of ["light", "dark"]) {
              const seen = new Map();
              for (const tok of used) {
                const v = TOKENS[theme][tok];
                if (!v) continue;
                if (seen.has(v)) warn.push(`${file}: an SVG uses ${seen.get(v)} and ${tok} to tell two things apart, but both are ${v} on the ${theme} theme, so they render identically. Pick tokens that differ, or put a label on each.`);
                else seen.set(v, tok);
              }
            }
          }
        }

        // 4.7: the ESV cannot be quoted in this project. See the standard for why.
        if (/\(([^)]*,\s*)?ESV\)/.test(src)) fail(`${file}: quotes the ESV, which our licence terms do not permit (Editorial Standards 4.7); use the NET, JPS 1917, Brenton or KJV`);

        // A conclusion line written straight after numbered premises, outside a code
        // fence, is swallowed into the last premise by the markdown list parser. The
        // learner then sees the conclusion glued to a premise. Logic and Argument
        // lesson 1 sets the house form: a fenced block, premises, a rule, then "C:".
        {
          const outside = src.split("```").filter((_, i) => i % 2 === 0).join("\n");
          const swallowed = (outside.match(/^\d+\.[^\n]*\n(?:C|Conclusion):/gm) || []).length;
          if (swallowed) fail(`${file}: ${swallowed} argument display(s) put a conclusion line directly after a numbered premise outside a code fence; the markdown parser folds it into the premise. Fence the display and separate the conclusion with a rule.`);
        }

        // Integrity, standard 2.1 and OUTLINE's "read-it-or-omit-it". Three Stage 4 reviews
        // in this repo caught lessons citing textbooks that the course's own SOURCES.md
        // records as never opened (confirmed "against several course summaries rather than
        // the edition itself", "from memory of the 14th ed."). A hand review should not have
        // to find that a fourth time. SOURCES.md declares the unread works in one machine
        // readable line, `<!-- unread: Hurley, Copi -->`, and citing one here is a defect.
        if (unreadWorks.length) {
          const lessonId = f.replace(/\.md$/, "");
          for (const w of unreadWorks) {
            if (w.except.some(x => lessonId === x || lessonId.startsWith(x + "-"))) continue;
            const re = new RegExp(`\\b${w.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
            const n = (src.match(re) || []).length;
            if (n) fail(`${file}: cites ${w.name} ${n} time(s), but this course's research/SOURCES.md lists ${w.name} as not actually read. Read it and record it, or re-source the claim. See the "unread:" line in SOURCES.md.`);
          }
        }

        // 4.5: a lesson that links nothing hides its sources. Assessments are exempt: a test
        // is questions and a project is a brief.
        if (path.basename(lessonsDir) === "lessons") {
          const body = src.split(/^---$/m).slice(2).join("---");
          const sourcesAt = body.search(/^## Sources/m);
          const prose = sourcesAt === -1 ? body : body.slice(0, sourcesAt);
          if (!/\]\(https?:\/\//.test(prose)) warn.push(`${file}: no links in the body; 4.5 asks for plain Markdown links in the text, not only in the Sources list`);

          /* The teaching prose, not just the body. Five consecutive Note-Taking lessons put every
             link in "Go deeper" and "Sources" while quoting an open-access paper on page one, and
             five consecutive reviews raised it and fixed it in place. Root CLAUDE.md rule 10: the
             sixth draft doing it again is a check, not a rule. A paper quoted where the reader
             meets it should be reachable from there. */
          const deeperAt = prose.search(/^## Go deeper/m);
          const teaching = deeperAt === -1 ? prose : prose.slice(0, deeperAt);
          if (/\]\(https?:\/\//.test(prose) && !/\]\(https?:\/\//.test(teaching))
            warn.push(`${file}: every link sits in Go deeper or Sources; none in the teaching prose, where the reader meets the source being quoted (4.5)`);

          /* A passage left in twice. Two distinct routes have produced one in this repo, both
             during a fix pass and both invisible in the diff: a block promoted out of a
             :::checkpoint and not deleted from it, and a scripted edit that inserted rather than
             replaced. Neither showed up in any other check. Compares 25-word spans. */
          {
            const words = teaching.replace(/```[\s\S]*?```/g, " ").replace(/<svg[\s\S]*?<\/svg>/g, " ")
              /* Quoted source material is repeated on purpose: a passage block-quoted and then
                 worked over line by line, a verse given in full and again at its climax. Strip
                 block quotes and anything inside quotation marks before comparing, or the check
                 fires on three lessons that are doing exactly what they should. */
              .replace(/^>.*$/gm, " ").replace(/"[^"]*"/g, " ").replace(/\u201c[^\u201d]*\u201d/g, " ")
              /* Emphasis added or removed on one copy would otherwise hide the duplicate, which is
                 the likeliest difference between two copies of the same passage. */
              .replace(/[*`]/g, "")
              .split(/\s+/).filter(Boolean);
            const seen = new Map();
            for (let i = 0; i + 25 <= words.length; i++) {
              const span = words.slice(i, i + 25).join(" ");
              if (seen.has(span)) {
                warn.push(`${file}: the same 25-word passage appears twice, beginning "${words.slice(i, i + 9).join(" ")}...". A fix pass that copies rather than moves leaves one of these and the diff does not show it.`);
                break;
              }
              seen.set(span, i);
            }
          }

          /* Part 2: a marker a reader can click has to resolve, and the Sources list should be
             what the lesson was written from rather than a reading list bolted on.
             Two failures, weighted differently. A marker with no entry is broken for a learner,
             so it fails a published course. A majority of entries never cited means the lesson is
             not citing what it was written from; that warns, because one or two uncited is
             ordinary (a source read, listed, and the sentence it supported cut in review) and a
             warning on every such lesson would be noise nobody reads.
             Personal Finance 6 had nine sources and not one marker in its prose when this was
             written, and Python 2 four of five; everything else sat at one to three.
             Code is stripped first: items[0] and a bracketed year are not citations. Both source
             conventions in the repo, "1. Author" and "[1] Author", are accepted. */
          const clean = prose.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
          const cited = new Set([...clean.matchAll(/\[(\d{1,2})\]/g)].map(m => +m[1]).filter(n => n > 0));
          const listed = [...new Set([...(sourcesAt === -1 ? "" : body.slice(sourcesAt)).matchAll(/^(?:\[(\d{1,2})\]|(\d{1,2})\.)\s/gm)].map(m => +(m[1] ?? m[2])))];
          if (listed.length) {
            const dangling = [...cited].filter(n => !listed.includes(n)).sort((a, b) => a - b);
            if (dangling.length) fail(`${file}: the prose cites [${dangling.join("], [")}] but the Sources list has no such entry. A marker a reader can click has to resolve.`);
            const uncited = listed.filter(n => !cited.has(n));
            if (uncited.length > listed.length / 2) warn.push(`${file}: ${uncited.length} of ${listed.length} sources are never cited in the prose (${uncited.join(", ")}). Standards Part 2: cite what the lesson was written from, or drop the entry.`);
          }
        }
      }
    }
  }
}
lintLessons();

/* ---------- repeated passages across a course's lessons ----------
   courses/CLAUDE.md rule 2 allows a session to draft several lessons, which is how John uses the
   token budget he has. The failure that comes with it is repetition: lessons written in one
   context reuse each other's examples, figures and sentences, and the drafter cannot see it
   because all of it reads as familiar. A reader meeting the same worked example twice loses trust
   in both.

   Sentences of twelve words or more, normalised, appearing in two different lessons of one course.
   Twelve is high enough that an accidental collision is rare and a deliberate callback is usually
   reworded rather than copied. Code, SVG, block headers and the Sources list are stripped first:
   a repeated citation is correct, and two lessons printing the same three lines of Python is the
   point. Warns rather than fails, because a course may legitimately restate one sentence and only
   a person can say which. */
// Two kinds of repetition are deliberate and must not be warned on, because a warning a session
// learns to ignore is worse than no warning. A sentence is exempt only if it is listed here with
// the reason, which keeps the judgement in one place a person can read.
//   - Clear Writing 6 quotes two sentences of lesson 5's worked paragraph on purpose, and says it
//     is doing so, because the whole section is about what a concision pass does to that paragraph.
//   - Bible Basics repeats its standpoint disclosure in every lesson that makes a standpoint claim,
//     which is what standards 3.7 and courses/CLAUDE.md rule 6 ask for.
//   - Mental Fitness carries the same crisis callout in every lesson, word for word, and a separate
//     check enforces that it is identical (its outline's decision 1).
//   - Nutrition carries the same safety callout in every lesson, word for word, enforced the same way.
const REPETITION_EXEMPT = [
  "that cost is far more than the four hundred thousand pounds left in this year s capital budget",
  "this course holds the christian reading and says so on its first line",
  "if you re thinking about suicide or self harm or don t feel able to keep yourself safe",
  "if you re pregnant or trying to be have diabetes or kidney disease take a medicine such as warfarin",
  "if food eating or your weight has started to feel out of your control tell a doctor",
];

function checkRepetition() {
  for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
      const lessonsDir = path.join(COURSES_DIR, school.name, cdir.name, "lessons");
      if (!fs.existsSync(lessonsDir)) continue;
      const seen = new Map();
      for (const f of fs.readdirSync(lessonsDir).filter(f => f.endsWith(".md")).sort()) {
        let body = fs.readFileSync(path.join(lessonsDir, f), "utf8").split(/^---$/m).slice(2).join("---");
        body = body.replace(/^## Sources[\s\S]*$/m, "")
                   // HTML comments are not read by a learner. Bible Basics carries split-seam
                   // notes in four lessons that are identical by design and invisible on the page.
                   .replace(/<!--[\s\S]*?-->/g, "")
                   .replace(/<svg[\s\S]*?<\/svg>/g, "")
                   .replace(/```[\s\S]*?```/g, "")
                   .replace(/^:::.*$/gm, "");
        for (const raw of body.split(/(?<=[.?!])\s+/)) {
          const norm = raw.toLowerCase().replace(/\[[^\]]*\]\([^)]*\)/g, " ").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
          if (norm.split(" ").length < 12) continue;
          if (!seen.has(norm)) seen.set(norm, new Set());
          seen.get(norm).add(f);
        }
      }
      for (const [norm, files] of seen) {
        if (files.size < 2) continue;
        if (REPETITION_EXEMPT.some(x => norm.includes(x))) continue;
        warn.push(`${path.relative(ROOT, lessonsDir)}: the same sentence appears in ${[...files].map(f => f.replace(/\.md$/, "")).join(" and ")}: "${norm.slice(0, 90)}...". Lessons drafted in one session reuse each other; give the second one its own example rather than rewording this.`);
      }
    }
  }
}
checkRepetition();

/* ---------- a course whose lessons all share one answer sequence is guessable across the course
   Each lesson's own quiz can pass every shape check above and the course can still hand a learner
   one key. Habits and Self-Discipline shipped seven lessons all running 0,2,1,3,0,2: every
   individual requirement met, and a reader who noticed the pattern in lesson 1 had the key to
   forty-two items. Found by a Stage 4 reviewer on 2026-09-19, which is a check's job rather than a
   reviewer's. Neighbouring lessons are what matter: a learner takes them in order. ---------- */
function checkAnswerSequences() {
  for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
      const lessonsDir = path.join(COURSES_DIR, school.name, cdir.name, "lessons");
      if (!fs.existsSync(lessonsDir)) continue;
      const seqs = [];
      for (const f of fs.readdirSync(lessonsDir).filter(f => f.endsWith(".md")).sort()) {
        try {
          const fm = yaml.load(fs.readFileSync(path.join(lessonsDir, f), "utf8").split(/^---$/m)[1]);
          if (!fm || !Array.isArray(fm.quiz) || fm.quiz.length < 4) continue;
          const idx = fm.quiz.filter(q => q && typeof q.answer === "number").map(q => q.answer);
          if (idx.length >= 4) seqs.push([f, idx.join(",")]);
        } catch { /* a frontmatter that will not parse is reported by its own check */ }
      }
      for (let i = 1; i < seqs.length; i++) {
        if (seqs[i][1] !== seqs[i - 1][1]) continue;
        warn.push(`${path.relative(ROOT, lessonsDir)}: ${seqs[i - 1][0].replace(/\.md$/, "")} and ${seqs[i][0].replace(/\.md$/, "")} have the same quiz answer sequence, ${seqs[i][1]}. A learner takes them one after the other and carries the key from the first into the second. Permute one of them.`);
      }

      // Neighbours matching is the obvious failure and not the one that happens. Two Stage 4
      // reviews on 2026-09-19 found the same course-wide shape twice over, and neither trips the
      // neighbour check. First: every lesson running one cycle started a position later each
      // time, which is what /draft-lesson defect 16's "rotate by the lesson number" produces.
      // Second, after that was fixed by hand: every lesson still sharing one permutation
      // pattern, a,b,c,d,b,a, so item 5 repeated item 2 and item 6 repeated item 1 in all seven.
      // A reader who spots the shape once gets two items free in every other lesson.
      //
      // Both are the same defect seen through different lenses, so the check is written on the
      // general form: relabel each sequence by order of first appearance and compare the
      // patterns. 0,2,1,3,0,2 and 2,1,3,0,2,1 both reduce to 0,1,2,3,0,1, and so does every
      // rotation of any 4-cycle.
      if (seqs.length >= 3) {
        const shape = str => {
          const seen = new Map();
          return str.split(",").map(x => {
            if (!seen.has(x)) seen.set(x, seen.size);
            return seen.get(x);
          }).join(",");
        };
        const first = shape(seqs[0][1]);
        if (seqs.every(s => shape(s[1]) === first)) {
          warn.push(`${path.relative(ROOT, lessonsDir)}: all ${seqs.length} lessons' quiz answer sequences share one permutation pattern (${first}, reading each lesson's own first-seen position as 0). No two neighbours match, so the check above passes, and a reader who works the shape out once gets the repeated positions free in every lesson. Give each lesson its own irregular sequence.`);
        }
      }
    }
  }
}
checkAnswerSequences();

/* ---------- root CLAUDE.md rule 6: a published course owes an episode for every lesson ----------
   "A course is finished when every lesson is at standard AND every lesson has a podcast
   episode." That was a shouting paragraph in CLAUDE.md because it had been ignored once. A
   paragraph cannot stop it happening again; this can.

   The debt that already existed when the rule landed is written down in
   curriculum/audio-debt.yaml and is a ceiling, so it can only shrink. Everything else fails.
   See the header of that file. */
function checkAudio() {
  let owed = {}, debt = {};
  const debtFile = path.join(ROOT, "curriculum", "audio-debt.yaml");
  try {
    debt = yaml.load(fs.readFileSync(debtFile, "utf8")) || {};
    owed = debt.owed || {};
  } catch (e) { errors.push(`curriculum/audio-debt.yaml: ${e.message}`); return; }

  // "The debt may only shrink" was checked only as equality with the current count, so raising
  // a number in the same commit as a new lesson passed. The committed version is the ratchet.
  //
  // Only the `git show` is allowed to fail quietly, and only because a fresh checkout with no HEAD
  // has nothing to ratchet against. The comparison below runs outside that catch on purpose: when
  // it was inside, a ReferenceError in this function disabled the entire check and every test still
  // printed "ok". That happened on 2026-09-18 and was caught by testing the check rather than
  // trusting it. A guard that can silently stop guarding is worse than no guard.
  let prev = null;
  try {
    prev = yaml.load(execFileSync("git", ["show", "HEAD:curriculum/audio-debt.yaml"], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] })) || {};
  } catch { /* not a git checkout, or no HEAD yet: nothing to ratchet against */ }

  // Lesson count for a published course id, or null. Used by the ratchet: a course may open a
  // ledger line at its full lesson count on the commit that publishes it, and never otherwise.
  const lessonCount = id => {
    for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
      for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
        const dir = path.join(COURSES_DIR, school.name, cdir.name);
        let meta;
        try { meta = yaml.load(fs.readFileSync(path.join(dir, "course.yaml"), "utf8")); } catch { continue; }
        if (!meta || meta.id !== id || meta.status !== "published") continue;
        try { return fs.readdirSync(path.join(dir, "lessons")).filter(f => f.endsWith(".md")).length; } catch { return null; }
      }
    }
    return null;
  };

  if (prev) {
    // A reset is the one way the debt may grow: episodes that shipped are being deliberately
    // withdrawn and re-rendered, which is John's call and nobody else's. It authorises exactly the
    // raises it names, and only in the commit that introduces it: once `reset.date` matches the
    // committed file, the same block authorises nothing, so the ratchet is back on the next commit.
    // Compare the dates by value. YAML parses an unquoted 2026-09-18 into a Date, and two Dates
    // are never `!==`-equal by identity, so an identity comparison made every reset look new and
    // the single-commit guarantee did not hold. A test caught it; the earlier by-hand check had
    // not, because it happened to fail on the raises number instead.
    const day = v => v == null ? "" : (v instanceof Date ? v.toISOString().slice(0, 10) : String(v).trim());
    const reset = (debt.reset && day(debt.reset.date) !== day((prev.reset || {}).date)) ? debt.reset : null;
    if (reset && (!reset.reason || !reset.raises)) errors.push(`curriculum/audio-debt.yaml: a reset needs a "reason" and a "raises" map saying which course goes to which number.`);
    const allowedRaise = (id, n) => !!(reset && reset.raises && reset.raises[id] === n);
    for (const [id, n] of Object.entries(owed)) {
      const was = (prev.owed || {})[id];
      if (allowedRaise(id, n)) continue;
      // A newly published course may open its own line, and only at its full lesson count.
      // DECISIONS.md section 2: audio gates "finished", not "published", so a course goes live
      // owing every episode and the ledger is where that is counted. At the full count and no
      // lower: a course that already has some episodes cannot get a fresh line hiding partial
      // debt, because the exact-match check further down would then refuse the number anyway.
      if (was === undefined && n === lessonCount(id)) continue;
      if (was === undefined) errors.push(`curriculum/audio-debt.yaml: "${id}" was not in the committed file, and ${n} is not its lesson count (${lessonCount(id) ?? "no such published course"}). A course may open a line here only when it publishes, owing an episode for every lesson; after that the number only shrinks. To withdraw episodes that shipped, record a reset (see the header of that file).`);
      else if (n > was) errors.push(`curriculum/audio-debt.yaml: "${id}" went from ${was} to ${n}. The debt ledger only shrinks; render the episode instead, or record a reset (see the header of that file).`);
    }
  }

  const seen = new Set();
  for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
      const dir = path.join(COURSES_DIR, school.name, cdir.name);
      let meta;
      try { meta = yaml.load(fs.readFileSync(path.join(dir, "course.yaml"), "utf8")); } catch { continue; }
      if (!meta || meta.status !== "published") continue;

      const lessonsDir = path.join(dir, "lessons");
      if (!fs.existsSync(lessonsDir)) continue;
      const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith(".md")).sort();
      if (!files.length) continue;

      const missing = files.filter(f => {
        const fm = fs.readFileSync(path.join(lessonsDir, f), "utf8").split(/^---$/m)[1] || "";
        const stamped = /^audio:\s*\S/m.test(fm);
        // A stamp means an episode was rendered from a fact-checked script (/make-podcast). The
        // script is committed beside the lesson with a `checked:` entry; a stamp without one is
        // an episode nobody checked, or a hand-typed URL.
        if (stamped) {
          const script = path.join(dir, "podcast", f.replace(/\.md$/, ".script.md"));
          let checked = false;
          try { checked = /^checked:/m.test(fs.readFileSync(script, "utf8").split(/^---$/m)[1] || ""); } catch {}
          if (!checked) errors.push(`${path.relative(ROOT, path.join(lessonsDir, f))}: has an "audio:" stamp but ${path.relative(ROOT, script)} is missing or has no "checked:" entry. Every episode comes from a fact-checked script; see /make-podcast.`);
        }
        return !stamped;
      });

      const allowed = owed[meta.id];
      seen.add(meta.id);
      const where = path.relative(ROOT, dir);

      if (allowed === undefined) {
        if (missing.length) errors.push(
          `${where}: status is published and ${missing.length} of ${files.length} lesson(s) have no "audio:" in their frontmatter (${missing.map(f => f.replace(/\.md$/, "")).join(", ")}). ` +
          `Root CLAUDE.md rule 6: a course is not finished until every lesson has an episode. Render them with /make-podcast, or, only for debt that predates the rule, record it in curriculum/audio-debt.yaml.`);
      } else if (missing.length > allowed) {
        errors.push(
          `${where}: curriculum/audio-debt.yaml allows ${allowed} episode(s) owed, but ${missing.length} lesson(s) have no "audio:" (${missing.map(f => f.replace(/\.md$/, "")).join(", ")}). ` +
          `The debt is a ceiling and it may not grow: a new lesson gets its episode before the next lesson is drafted.`);
      } else if (missing.length < allowed) {
        errors.push(
          `${where}: curriculum/audio-debt.yaml still says ${allowed} episode(s) owed but only ${missing.length} lesson(s) lack "audio:". ` +
          `Lower it to ${missing.length}${missing.length ? "" : " (or delete the entry, since the course is now finished)"} in the same commit as the episode.`);
      }
    }
  }
  for (const id of Object.keys(owed)) {
    if (!seen.has(id)) errors.push(`curriculum/audio-debt.yaml: "${id}" is not a published course folder; delete the entry.`);
  }
}
checkAudio();

/* ---------- rule 5: course.yaml status and the TAXONOMY.md row must agree ----------
   Two places record the same fact and a session updates one of them. core-path.mjs already
   checks the Path cell against core-path.yaml; this is the same job for the Status cell. */
function checkStatusAgreement() {
  const taxFile = path.join(ROOT, "curriculum", "TAXONOMY.md");
  let lines;
  try { lines = fs.readFileSync(taxFile, "utf8").split("\n"); } catch { return; }
  const norm = s => String(s).toLowerCase().replace(/\s+/g, " ").trim();
  const rows = new Map();
  let school = null;
  lines.forEach((line, i) => {
    const h = line.match(/^## \d+\. School of .*? — `([a-z0-9-]+)`/);
    if (h) { school = h[1]; return; }
    if (line.startsWith("## ")) { school = null; return; }
    if (!school || !line.startsWith("|")) return;
    const c = line.split("|").slice(1, -1).map(x => x.trim());
    if (c.length !== 5 || c[0] === "Course" || /^-+$/.test(c[0])) return;
    rows.set(`${school}::${norm(c[0])}`, { status: c[2], line: i + 1 });
  });

  for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
      const rel = path.relative(ROOT, path.join(COURSES_DIR, school.name, cdir.name, "course.yaml"));
      let meta;
      try { meta = yaml.load(fs.readFileSync(path.join(ROOT, rel), "utf8")); } catch { continue; }
      if (!meta) continue;   // already reported by readCourseYaml
      const row = rows.get(`${school.name}::${norm(meta.title)}`);
      // An error, not a warning: as a warning, rule 5's agreement check could be skipped by
      // omitting the row.
      if (!row) { errors.push(`${rel}: no row in curriculum/TAXONOMY.md for "${meta.title}" under ${school.name}; the map lists every course (root CLAUDE.md rule 5).`); continue; }
      if (row.status !== meta.status) errors.push(
        `${rel}: status "${meta.status}" but TAXONOMY.md:${row.line} says "${row.status}". CLAUDE.md rule 5: a status change edits both, in the same commit.`);
    }
  }
}
checkStatusAgreement();

// One line for the whole run, not one per lesson. See the note beside STIFF.
if (STIFF.length) {
  STIFF.sort((x, y) => x.per1000 - y.per1000);
  const worst = STIFF.slice(0, 3).map(x => `${path.basename(x.file)} (${x.n} in ${x.words})`).join(", ");
  warn.push(`voice: ${STIFF.length} lesson(s) run under 2.5 contractions per 1,000 body words, where this repo's lessons run 5 to 8. The style guide calls their absence "the fastest way to sound like a manual". Stiffest: ${worst}. This is mostly pre-existing debt on published courses; fix a lesson when you are already editing it rather than making a pass of it.`);
}

if (warn.length) console.warn(warn.map(w => "warn: " + w).join("\n"));
if (errors.length) { console.error(errors.map(e => "ERROR: " + e).join("\n")); process.exit(1); }
/* Script coverage, reported as one line rather than a warning per course.
   A podcast script costs nothing at the API; only the render spends. So a course is written when
   every lesson is at standard AND every lesson has a fact-checked script, and rendering trails
   behind at whatever the month's budget allows (DECISIONS.md section 2). This line is how the
   gap stays visible without a warning nobody can clear today. It never fails the build: the
   thing that fails is an audio stamp with no script beside it, which checkAudio already does. */
function scriptCoverage() {
  let lessons = 0, scripts = 0;
  const short = [];
  for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
      const dir = path.join(COURSES_DIR, school.name, cdir.name);
      let meta;
      try { meta = yaml.load(fs.readFileSync(path.join(dir, "course.yaml"), "utf8")); } catch { continue; }
      if (!meta || meta.status !== "published") continue;
      let files = [];
      try { files = fs.readdirSync(path.join(dir, "lessons")).filter(f => f.endsWith(".md")); } catch { continue; }
      // A file is not a script until someone has checked it: `checked:` is the same gate checkAudio
      // puts in front of an audio stamp, and "written" in DECISIONS.md section 2 says fact-checked.
      const have = files.filter(f => {
        const p = path.join(dir, "podcast", f.replace(/\.md$/, ".script.md"));
        try { return /^checked:/m.test(fs.readFileSync(p, "utf8").split(/^---$/m)[1] || ""); } catch { return false; }
      }).length;
      lessons += files.length; scripts += have;
      if (have < files.length) short.push(`${meta.id} ${files.length - have}`);
    }
  }
  if (lessons) console.log(scripts === lessons
    ? `ok: ${scripts} of ${lessons} lessons have a podcast script`
    : `scripts: ${scripts} of ${lessons} lessons have one; ${lessons - scripts} to write (free at the API) -> ${short.join(", ")}`);
}
scriptCoverage();

if (CHECK) { console.log(`ok: ${courses.length} courses, ${courses.reduce((n, c) => n + c.lessons.length, 0)} lessons`); process.exit(0); }

/* ---------- mirror the source site into dist/ ----------
   Everything below writes into dist/, so it starts as a clean copy of site/ minus the instructions
   file, which is for whoever edits the source and has no business being served. Rebuilding the
   mirror each time is what guarantees a deleted source file cannot survive in the output. */
fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(SRC, DIST, { recursive: true, filter: src => path.basename(src) !== "CLAUDE.md" });

let corePath = { terms: [] };
try { corePath = yaml.load(fs.readFileSync(PATH_FILE, "utf8")); } catch (e) { console.warn("warn: could not read core-path.yaml: " + e.message); }

/* The whole map, for the site's /map page. Every course the institute intends to teach, not just
   the ones that are written. It used to be a link out to TAXONOMY.md on GitHub, which asked a
   learner to read a Markdown table in someone else's product to find out what is coming. */
const TAX_FILE = path.join(ROOT, "curriculum", "TAXONOMY.md");
function readMap() {
  const src = fs.readFileSync(TAX_FILE, "utf8").split("\n");
  const normT = (t) => t.toLowerCase().replace(/[\u2013\u2014-]/g, "-").replace(/\s+/g, " ").trim();
  const ids = new Map();
  (corePath.terms || []).forEach((t, i) => (t.courses || []).forEach((c) => {
    ids.set(`${c.school}::${normT(c.title)}`, { id: c.id, term: i + 1, standpoint: c.standpoint, optional: !!c.optional });
  }));
  const schools = []; let cur = null;
  for (const line of src) {
    const h = line.match(/^## \d+\. (School of .*?) — `([a-z0-9-]+)`/);
    if (h) { cur = { slug: h[2], name: h[1].replace(/^School of /, ""), courses: [] }; schools.push(cur); continue; }
    if (line.startsWith("## ")) { cur = null; continue; }
    if (!cur || !line.startsWith("|")) continue;
    const c = line.split("|").slice(1, -1).map((x) => x.trim());
    if (c.length !== 5 || c[0] === "Course" || /^-+$/.test(c[0])) continue;
    const meta = ids.get(`${cur.slug}::${normT(c[0])}`) || {};
    cur.courses.push({ title: c[0], level: c[1], status: c[2], note: c[4], ...meta });
  }
  return schools;
}
let map = [];
try { map = readMap(); } catch (e) { console.warn("warn: could not read TAXONOMY.md for the map: " + e.message); }

/* ---------- output ----------
   Two kinds of file. `data/courses.js` is the index: every course and lesson record without
   the lesson HTML, which is what the home, catalog, path, review and transcript pages need.
   `data/content/<course>.js` holds one course's rendered lessons and assessments, fetched by
   the app when a reader opens that course. It used to be one 3.4 MB file, loaded before the
   home page could paint. */
const SITE = DIST;
const hash = file => crypto.createHash("sha256").update(fs.readFileSync(path.join(SITE, file))).digest("hex").slice(0, 8);
const GEN = "/* GENERATED by scripts/build.mjs from courses/, curriculum/core-path.yaml and curriculum/TAXONOMY.md — do not edit by hand. */\n";
const contentDir = path.join(SITE, "data", "content");
fs.mkdirSync(contentDir, { recursive: true });
for (const stale of fs.readdirSync(contentDir)) if (!courses.some(c => `${c.id}.js` === stale)) fs.unlinkSync(path.join(contentDir, stale));
const index = courses.map(c => {
  // The quiz goes with the content: it is read only on the lesson page and in Review, and it was
  // 460 KB of the index.
  const strip = x => { const { content, quiz, ...rest } = x; return { ...rest, quizCount: quiz.length }; };
  const pack = x => ({ content: x.content, quiz: x.quiz });
  const content = { lessons: Object.fromEntries(c.lessons.map(l => [l.id, pack(l)])), assessments: Object.fromEntries((c.assessments || []).map(a => [a.id, pack(a)])) };
  const file = path.join("data", "content", `${c.id}.js`);
  fs.writeFileSync(path.join(SITE, file), `${GEN}window.FOVAL_CONTENT = window.FOVAL_CONTENT || {};\nwindow.FOVAL_CONTENT[${JSON.stringify(c.id)}] = ${JSON.stringify(content)};\n`);
  return { ...c, lessons: c.lessons.map(strip), assessments: (c.assessments || []).map(strip), content: `${file}?v=${hash(file)}` };
});
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${GEN}window.FOVAL_COURSES = ${JSON.stringify(index)};\nwindow.FOVAL_PATH = ${JSON.stringify(corePath)};\nwindow.FOVAL_MAP = ${JSON.stringify(map)};\n`);
console.log(`built ${courses.length} courses, ${courses.reduce((n, c) => n + c.lessons.length, 0)} lessons -> ${path.relative(ROOT, OUT)} (${Math.round(fs.statSync(OUT).size / 1024)} KB) + data/content/`);

/* ---------- cache busting ----------
   The site had none, and it cost a whole afternoon: a deploy went out, the live server
   had the new CSS, and the browser kept serving the old one. Worse, sw.js pinned its
   cache to a hardcoded name, so the service worker never dropped stale assets either.
   Every deploy was invisible to anyone who had visited before.

   So: stamp a short content hash onto each asset reference in index.html, and onto the
   service worker's cache name. An asset's URL now changes when, and only when, its bytes
   change, which is the one thing a browser will always respect. */
const stamped = { "assets/styles.css": hash("assets/styles.css"), "assets/app.js": hash("assets/app.js"), "data/courses.js": hash("data/courses.js") };
const indexPath = path.join(SITE, "index.html");
let html = fs.readFileSync(indexPath, "utf8");
for (const [asset, h] of Object.entries(stamped)) {
  const re = new RegExp(`(["'])${asset.replace(/[.]/g, "\\.")}(\\?v=[0-9a-f]+)?\\1`, "g");
  html = html.replace(re, `$1${asset}?v=${h}$1`);
}
if (html !== fs.readFileSync(indexPath, "utf8")) fs.writeFileSync(indexPath, html);

const swPath = path.join(SITE, "sw.js");
const swVersion = crypto.createHash("sha256").update(Object.values(stamped).join()).digest("hex").slice(0, 8);
let sw = fs.readFileSync(swPath, "utf8").replace(/const CACHE = "foval-[0-9a-zA-Z]+";/, `const CACHE = "foval-${swVersion}";`);
// The precache list has to carry the same query strings, or the worker caches one URL
// and the page asks for another.
sw = sw.replace(/const CORE = \[[^\]]*\];/, `const CORE = ["./", "./index.html", ${Object.entries(stamped).map(([a, h]) => `"./${a}?v=${h}"`).join(", ")}, "./manifest.webmanifest"];`);
fs.writeFileSync(swPath, sw);
console.log(`stamped assets: ${Object.entries(stamped).map(([a, h]) => `${path.basename(a)}=${h}`).join(" ")}, sw cache foval-${swVersion}`);

/* ---------- static pages, sitemap ----------
   The app is one hash-routed page, so a crawler or a link preview saw one page with one title
   for all sixty-one lessons, and nothing here could be found by searching for it. Every course
   and lesson now also exists as a plain HTML page under /courses/, built from the same shell as
   index.html with the lesson's own title, description and canonical URL. It is a reading copy:
   the quiz, progress and review live in the app, and the page links there. These pages and the
   sitemap are generated at deploy and not committed (see .gitignore). */
if (!DRAFTS) writeStaticPages(html, courses);
if (DRAFTS) console.warn("\nPREVIEW BUILD: drafting courses are in dist/. Run `npm run build` before you trust\nwhat you see; nothing here is committed either way.");
}
