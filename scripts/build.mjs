// Build: compile courses/**/course.yaml + lessons/*.md into site/data/courses.js
// Usage: node scripts/build.mjs [--check] [--drafts]
//
// --drafts also compiles courses that are still `drafting`, so a draft can be read in the
// real site before it is published. The output is a PREVIEW: never commit site/data/courses.js
// after a --drafts build. Run a plain `npm run build` to put it back.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { marked } from "marked";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { estimateTextWidth, FONT_SPREAD } from "./text-width.mjs";

const CHECK = process.argv.includes("--check");
const DRAFTS = process.argv.includes("--drafts");
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COURSES_DIR = path.join(ROOT, "courses");
const OUT = path.join(ROOT, "site", "data", "courses.js");
const PATH_FILE = path.join(ROOT, "curriculum", "core-path.yaml");
const errors = [];
const warn = [];

marked.setOptions({ gfm: true, breaks: false });

function renderBlocks(md) {
  // :::callout Title / :::exercise Title ... ::: → styled div
  // :::predict Question / :::checkpoint Question ... ::: → question with the body hidden behind a button
  return md.replace(/^:::(callout|exercise|predict|checkpoint|figure|video)[ \t]*(.*)\r?\n([\s\S]*?)^:::[ \t]*$/gm, (_, kind, title, body) => {
    if (kind === "figure") {
      // :::figure <src> | <alt text>   body = caption (markdown), should include the credit and licence
      const [src, alt = ""] = title.split("|").map(s => s.trim());
      return `<figure class="fig"><img src="${src}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy"><figcaption>${marked.parseInline(body.trim())}</figcaption></figure>`;
    }
    if (kind === "video") {
      // :::video <youtube or youtube-nocookie URL> | <title>   body = why to watch it (markdown)
      const [url, vtitle = "Video"] = title.split("|").map(s => s.trim());
      const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
      const embed = m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : url;
      return `<figure class="fig video-fig"><iframe class="video" src="${embed}" title="${vtitle.replace(/"/g, "&quot;")}" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><figcaption>${marked.parseInline(body.trim())}</figcaption></figure>`;
    }
    if (kind === "predict" || kind === "checkpoint") {
      const label = kind === "predict" ? "Predict first" : "Check yourself";
      return `<div class="think ${kind}"><b>${label}</b><p class="think-q">${marked.parseInline(title.trim())}</p><details><summary>Show the answer</summary>${marked.parse(body.trim())}</details></div>`;
    }
    return `<div class="${kind}"><b>${title.trim()}</b>${marked.parse(body.trim())}</div>`;
  });
}
function parseFrontmatter(src, file) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) { errors.push(`${file}: missing frontmatter`); return { meta: {}, body: src }; }
  try { return { meta: yaml.load(m[1]) || {}, body: m[2] }; }
  catch (e) { errors.push(`${file}: bad YAML frontmatter: ${e.message}`); return { meta: {}, body: m[2] }; }
}
function req(obj, keys, where) {
  for (const k of keys) if (obj[k] === undefined || obj[k] === "" || (Array.isArray(obj[k]) && !obj[k].length)) errors.push(`${where}: missing "${k}"`);
}

const courses = [];
for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
  const schoolDir = path.join(COURSES_DIR, school.name);
  for (const cdir of fs.readdirSync(schoolDir, { withFileTypes: true }).filter(d => d.isDirectory())) {
    const dir = path.join(schoolDir, cdir.name);
    const yamlPath = path.join(dir, "course.yaml");
    if (!fs.existsSync(yamlPath)) { warn.push(`${dir}: no course.yaml, skipped`); continue; }
    const rel = path.relative(ROOT, yamlPath);
    let meta;
    try { meta = yaml.load(fs.readFileSync(yamlPath, "utf8")); } catch (e) { errors.push(`${rel}: ${e.message}`); continue; }
    req(meta, ["id", "title", "school", "subject", "level", "status", "summary", "description", "outcomes"], rel);
    if (meta.id !== cdir.name) errors.push(`${rel}: id "${meta.id}" must match folder name "${cdir.name}"`);
    if (meta.school !== school.name) errors.push(`${rel}: school "${meta.school}" must match folder "${school.name}"`);
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
      quiz.forEach((q, i) => {
        if (!q.q || !Array.isArray(q.options) || q.options.length < 2) errors.push(`${file}: quiz #${i + 1} needs a question and 2+ options`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${file}: quiz #${i + 1} answer index out of range`);
      });
      const words = body.split(/\s+/).filter(Boolean).length;
      if (words < 250) warn.push(`${file}: only ${words} words; depth standard expects substantially more`);
      return { id: f.replace(/\.md$/, ""), title: lm.title, minutes: lm.minutes, video: lm.video, objectives: Array.isArray(lm.objectives) ? lm.objectives : [], quiz, content: marked.parse(renderBlocks(body)) };
    });
    // assessments: final test (has quiz) and projects
    const aDir = path.join(dir, "assessments");
    const aFiles = fs.existsSync(aDir) ? fs.readdirSync(aDir).filter(f => f.endsWith(".md")).sort() : [];
    const assessments = aFiles.map(f => {
      const file = path.relative(ROOT, path.join(aDir, f));
      const { meta: am, body } = parseFrontmatter(fs.readFileSync(path.join(aDir, f), "utf8"), file);
      req(am, ["title"], file);
      const quiz = Array.isArray(am.quiz) ? am.quiz : [];
      quiz.forEach((q, i) => {
        if (!q.q || !Array.isArray(q.options) || q.options.length < 2) errors.push(`${file}: item #${i + 1} needs a question and 2+ options`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${file}: item #${i + 1} answer index out of range`);
      });
      const type = am.type || (quiz.length ? "test" : "project");
      return { id: f.replace(/\.md$/, ""), title: am.title, type, minutes: am.minutes || 0, pass_mark: am.pass_mark || 0.8, quiz, content: marked.parse(renderBlocks(body)) };
    });
    courses.push({ ...meta, lessons, assessments });
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
  const light = css.slice(0, css.indexOf("@media (prefers-color-scheme: dark)"));
  const dark = css.slice(css.indexOf("@media (prefers-color-scheme: dark)"));
  for (const [scope, text] of [["light", light], ["dark", dark]]) {
    for (const m of text.matchAll(/(--[a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) out[scope][m[1]] = m[2].toLowerCase();
  }
  // A token not restated in the dark block keeps its light value.
  for (const [k, v] of Object.entries(out.light)) if (!(k in out.dark)) out.dark[k] = v;
  return out;
})();

function lintLessons() {
  for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    for (const cdir of fs.readdirSync(path.join(COURSES_DIR, school.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
      const lessonsDir = path.join(COURSES_DIR, school.name, cdir.name, "lessons");
      if (!fs.existsSync(lessonsDir)) continue;
      // A draft quoting the wrong translation must not block the deploy of courses that
      // are already live. Drafts warn; published courses fail the build.
      let published = false;
      try { published = yaml.load(fs.readFileSync(path.join(COURSES_DIR, school.name, cdir.name, "course.yaml"), "utf8")).status === "published"; } catch {}
      const fail = m => (published ? errors : warn).push(published ? m : m + " [draft: fix before publishing]");
      for (const f of fs.readdirSync(lessonsDir).filter(f => f.endsWith(".md"))) {
        const file = path.relative(ROOT, path.join(lessonsDir, f));
        const src = fs.readFileSync(path.join(lessonsDir, f), "utf8");

        // Frontmatter must parse even in a draft. The main build only reads published
        // courses, so a YAML error in a draft stays invisible until the day it is
        // published, which is the worst possible moment to find it. A colon inside an
        // unquoted value is the usual cause; wrap the value in a >- block.
        try {
          const fmText = src.split(/^---$/m)[1];
          const fm = yaml.load(fmText);
          if (fm && Array.isArray(fm.quiz)) {
            fm.quiz.forEach((q, i) => {
              if (!q || !q.q || !Array.isArray(q.options) || q.options.length < 2)
                fail(`${file}: quiz #${i + 1} lost its question or options when the frontmatter parsed; check for an unquoted value containing a colon`);
            });
          }
        } catch (e) {
          fail(`${file}: frontmatter does not parse as YAML (${e.reason || e.message}); a colon inside an unquoted value is the usual cause`);
        }

        // Rule 7: never an em dash in learner-facing prose.
        if (src.includes("\u2014")) fail(`${file}: contains an em dash (CLAUDE.md rule 7)`);

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
        const small = [...src.matchAll(/<text[^>]*font-size="(\d+)"/g)].map(m => +m[1]).filter(n => n < 15);
        if (small.length) warn.push(`${file}: ${small.length} SVG label(s) under font-size 15; they render below ~10px on a phone (4.6)`);

        // 4.6: a label wider than its own viewBox is clipped by the browser, silently, on
        // every device. It cost bible-basics lesson 2 the last word of both its chart
        // captions, including the one naming the source. Node cannot measure text, so this
        // uses real Arial advance widths (scripts/text-width.mjs). Checked against Chromium
        // over all 252 labels in the repo, the estimate never ran more than 3% over the
        // truth and usually a little under, so it under-reports rather than crying wolf.
        for (const [, attrs, body] of src.matchAll(/<text([^>]*)>([^<]*)<\/text>/g)) {
          const size = Number((attrs.match(/font-size="(\d+(?:\.\d+)?)"/) || [])[1]);
          const x = Number((attrs.match(/\bx="(-?\d+(?:\.\d+)?)"/) || [])[1]);
          if (!size || !Number.isFinite(x) || !body.trim()) continue;
          // The viewBox this label sits in is the last one opened before it.
          const boxes = [...src.slice(0, src.indexOf(body)).matchAll(/viewBox="\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+[\d.]+"/g)];
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

        // 4.2: a prompt that tells the reader to answer before reading on, followed by the
        // answer in plain prose, is recognition wearing retrieval's clothes. Only :::predict
        // and :::checkpoint bodies render behind a button. Three lessons in a row shipped this
        // and three hand reviews caught it; the fourth should not have to.
        {
          const lines = src.split("\n");
          let depth = 0;
          lines.forEach((line, i) => {
            if (/^:::\w/.test(line)) depth++;
            else if (/^:::\s*$/.test(line)) depth = Math.max(0, depth - 1);
            if (depth > 0) return;                       // already inside a hidden block
            if (!/\b(before you read on|before reading on|do this one yourself|do it yourself|write this one|try to build the counterexample|cover the answer)\b/i.test(line)) return;
            const ahead = lines.slice(i + 1, i + 9);
            if (ahead.some(l => /^:::(predict|checkpoint)/.test(l))) return;
            warn.push(`${file}:${i + 1}: asks the reader to answer before reading on, then prints the answer in plain prose. Only :::predict and :::checkpoint hide their body. Quoted: "${line.trim().slice(0, 70)}"`);
          });
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

        // 4.5: a lesson that links nothing hides its sources.
        const body = src.split(/^---$/m).slice(2).join("---");
        const sourcesAt = body.search(/^## Sources/m);
        const prose = sourcesAt === -1 ? body : body.slice(0, sourcesAt);
        if (!/\]\(https?:\/\//.test(prose)) warn.push(`${file}: no links in the body; 4.5 asks for plain Markdown links in the text, not only in the Sources list`);
      }
    }
  }
}
lintLessons();

if (warn.length) console.warn(warn.map(w => "warn: " + w).join("\n"));
if (errors.length) { console.error(errors.map(e => "ERROR: " + e).join("\n")); process.exit(1); }
if (CHECK) { console.log(`ok: ${courses.length} courses, ${courses.reduce((n, c) => n + c.lessons.length, 0)} lessons`); process.exit(0); }

let corePath = { terms: [] };
try { corePath = yaml.load(fs.readFileSync(PATH_FILE, "utf8")); } catch (e) { console.warn("warn: could not read core-path.yaml: " + e.message); }
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `/* GENERATED by scripts/build.mjs from courses/ and curriculum/core-path.yaml — do not edit by hand. */\nwindow.FOVAL_COURSES = ${JSON.stringify(courses, null, 1)};\nwindow.FOVAL_PATH = ${JSON.stringify(corePath)};\n`);
console.log(`built ${courses.length} courses, ${courses.reduce((n, c) => n + c.lessons.length, 0)} lessons -> ${path.relative(ROOT, OUT)}`);

/* ---------- cache busting ----------
   The site had none, and it cost a whole afternoon: a deploy went out, the live server
   had the new CSS, and the browser kept serving the old one. Worse, sw.js pinned its
   cache to a hardcoded name, so the service worker never dropped stale assets either.
   Every deploy was invisible to anyone who had visited before.

   So: stamp a short content hash onto each asset reference in index.html, and onto the
   service worker's cache name. An asset's URL now changes when, and only when, its bytes
   change, which is the one thing a browser will always respect. */
const SITE = path.join(ROOT, "site");
const hash = file => crypto.createHash("sha256").update(fs.readFileSync(path.join(SITE, file))).digest("hex").slice(0, 8);

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
if (DRAFTS) console.warn("\nPREVIEW BUILD: drafting courses are in this output. Do NOT commit site/data/courses.js.\nRun `npm run build` to put it back.");
