// Measures whether a quiz can be passed without reading the lesson.
//
// Stage 3's defect list says to measure this rather than eyeball it, because
// eyeballing has failed repeatedly: one lesson shipped with the key as the
// longest option in five of six items, so "always pick the longest" scored 83%
// against a 70% pass mark, and another was six for six.
//
// Four strategies are scored against the 70% pass mark, and each one that
// passes is a defect:
//
//   longest   pick the longest option every time
//   shortest  pick the shortest
//   index A/B/C/D  always pick the same position
//
// Those four are the verdict: a quiz one of them beats is gameable and this
// script exits non-zero on it.
//
// Three more things are reported as ADVICE and do not make a quiz gameable:
// the option-length spread per item (target: about 15 characters), adjacent
// repeats of the same answer index, and answer positions never used. These were
// counted in the verdict until 2026-09-19, when eighteen quizzes were reported
// under the headline "a reader could game" while not one of them was beaten by
// any strategy. A check that cries wolf on everything gets read as noise, and
// this one was: item 6 of docs/QUEUE.md had been carrying the eighteen for days.
// A wide spread only matters when the long option is the key, so the advisory
// line now says how many of the wide items have their key as the longest, which
// is the number worth acting on.
//
// Usage: node scripts/check-quiz-shape.cjs [path ...]   (default: every lesson
// and assessment in courses/)
const fs = require("fs"), path = require("path"), yaml = require("js-yaml");
const L = "ABCDEF";
const PASS = 0.7;

// Paths are relative to the repo, not the shell's cwd, so this runs from anywhere.
const ROOT = path.resolve(__dirname, "..");
const dirs = p => fs.readdirSync(p, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name);
function allFiles() {
  const out = [];
  for (const s of dirs(path.join(ROOT, "courses")))
    for (const c of dirs(path.join(ROOT, "courses", s)))
      for (const d of ["lessons", "assessments"]) {
        const p = path.join(ROOT, "courses", s, c, d);
        if (fs.existsSync(p)) for (const f of fs.readdirSync(p)) if (f.endsWith(".md")) out.push(path.relative(process.cwd(), path.join(p, f)));
      }
  return out;
}

const files = process.argv.length > 2 ? process.argv.slice(2) : allFiles();
let bad = 0, lumpy = 0;
const lumpyLines = [];

for (const f of files) {
  const m = fs.readFileSync(f, "utf8").match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  // A quiz whose frontmatter does not parse must not be reported as clean.
  let d; try { d = yaml.load(m[1]); } catch (e) { bad++; console.log(`\n${f}  frontmatter does not parse: ${e.reason || e.message}`); continue; }
  const q = ((d || {}).quiz || (d || {}).questions || []).filter(it => Array.isArray(it.options) && it.options.length);
  if (q.length < 3) continue;

  const lens = q.map(it => it.options.map(o => String(o).length));
  const score = pick => q.filter((it, i) => pick(lens[i], it) === it.answer).length / q.length;

  const strategies = {
    longest: score(l => l.indexOf(Math.max(...l))),
    shortest: score(l => l.indexOf(Math.min(...l))),
  };
  const width = Math.min(L.length, Math.max(...q.map(it => it.options.length)));
  for (let k = 0; k < width; k++) strategies["index " + L[k]] = score(() => k);

  const beats = Object.entries(strategies).filter(([, v]) => v >= PASS);
  const spreads = lens.map(l => Math.max(...l) - Math.min(...l));
  const wide = spreads.filter(s => s > 25).length;
  // Of the wide items, how many hand the reader the answer by being longest.
  const wideAndLongest = q.filter((it, i) => spreads[i] > 25 && lens[i].indexOf(Math.max(...lens[i])) === it.answer).length;
  const indices = q.map(it => L[it.answer]).join("");
  let repeats = 0;
  for (let i = 1; i < q.length; i++) if (q[i].answer === q[i - 1].answer) repeats++;
  const unused = [...L].slice(0, width).filter(c => !indices.includes(c));

  const notes = beats.map(([k, v]) => `${k} scores ${Math.round(v * 100)}%, at or above the ${PASS * 100}% pass mark`);
  const advice = [];
  if (wide) advice.push(`${wide} item(s) with an option-length spread over 25 characters (widest ${Math.max(...spreads)})`
    + (wideAndLongest ? `, and in ${wideAndLongest} of them the key is the longest option` : `, none of them with the key as the longest option`));
  if (repeats >= 2) advice.push(`${repeats} adjacent repeats of the same answer position (${indices})`);
  if (unused.length) advice.push(`answer position(s) never used: ${unused.join(", ")}`);

  if (notes.length) {
    bad++;
    console.log(`\nGAMEABLE  ${f}  ${q.length} items, keys ${indices}`);
    for (const n of notes) console.log("   " + n);
    for (const a of advice) console.log("   also: " + a);
  } else if (advice.length) {
    lumpy++;
    lumpyLines.push(`\n${f}  ${q.length} items, keys ${indices}`);
    for (const a of advice) lumpyLines.push("   " + a);
  }
}

if (bad) console.log(`\n${bad} quiz(zes) a reader could game by option shape. Rebalance before shipping.`);
else console.log("No quiz is passable by option shape alone.");

if (lumpy) {
  console.log(lumpyLines.join("\n"));
  console.log(`\nAdvice only: ${lumpy} quiz(zes) are lumpy in shape without being winnable by it. ` +
    `Worth a rebalance when the lesson is next open; not a reason to hold anything.`);
}
process.exit(bad ? 1 : 0);
