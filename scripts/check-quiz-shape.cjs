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
// It also reports the length spread per item (target: about 15 characters) and
// adjacent repeats of the same answer index.
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
let bad = 0;

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
  const indices = q.map(it => L[it.answer]).join("");
  let repeats = 0;
  for (let i = 1; i < q.length; i++) if (q[i].answer === q[i - 1].answer) repeats++;
  const unused = [...L].slice(0, width).filter(c => !indices.includes(c));

  const notes = [];
  if (beats.length) notes.push(...beats.map(([k, v]) => `${k} scores ${Math.round(v * 100)}%, at or above the ${PASS * 100}% pass mark`));
  if (wide) notes.push(`${wide} item(s) with an option-length spread over 25 characters (widest ${Math.max(...spreads)})`);
  if (repeats >= 2) notes.push(`${repeats} adjacent repeats of the same answer position (${indices})`);
  if (unused.length) notes.push(`answer position(s) never used: ${unused.join(", ")}`);

  if (notes.length) {
    bad++;
    console.log(`\n${f}  ${q.length} items, keys ${indices}`);
    for (const n of notes) console.log("   " + n);
  }
}
console.log(bad ? `\n${bad} quiz(zes) a reader could game. Rebalance before shipping.`
                : "No quiz is passable by option shape alone.");
