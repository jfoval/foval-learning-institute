/* The state of the institute, computed from the filesystem.
 *
 * This exists because a session's first job was reading prose in five files and reconciling it,
 * and prose drifts. On 2026-09-18 a review found five places still telling a session to commit a
 * build that had moved the day before, two different cost tables for the same courses, and the
 * wrong TTS engine named in the pipeline doc. Every one was somewhere a session would act
 * confidently and wrongly.
 *
 * So: facts that can be derived are derived, every run, and nothing here is written down anywhere
 * else. Read this at session start. Prose is for reasoning and decisions; this is for facts.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { fileURLToPath } from "node:url";

// FOVAL_ROOT points this at another tree, the same as build.mjs; scripts/tests/ uses it.
const ROOT = process.env.FOVAL_ROOT ? path.resolve(process.env.FOVAL_ROOT) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COURSES = path.join(ROOT, "courses");
const read = p => fs.readFileSync(p, "utf8");
const dirs = p => { try { return fs.readdirSync(p, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name); } catch { return []; } };
const files = (p, ext) => { try { return fs.readdirSync(p).filter(f => f.endsWith(ext)).sort(); } catch { return []; } };

const TERMS = (() => {
  try {
    const cp = yaml.load(read(path.join(ROOT, "curriculum", "core-path.yaml"))) || {};
    const m = {};
    (cp.terms || []).forEach((t, i) => (t.courses || []).forEach(c => { m[c.id] = i + 1; }));
    return m;
  } catch { return {}; }
})();

const courses = [];
for (const school of dirs(COURSES)) {
  for (const id of dirs(path.join(COURSES, school))) {
    const dir = path.join(COURSES, school, id);
    let meta; try { meta = yaml.load(read(path.join(dir, "course.yaml"))); } catch { continue; }
    if (!meta) continue;
    const lessons = files(path.join(dir, "lessons"), ".md");
    const body = f => { const t = read(path.join(dir, "lessons", f)); return (t.split(/^---$/m).slice(2).join("---").match(/\S+/g) || []).length; };
    const has = (sub, f) => fs.existsSync(path.join(dir, sub, f));
    courses.push({
      id, school, status: meta.status, term: TERMS[id] ?? null,
      lessons: lessons.length,
      words: lessons.length ? Math.round(lessons.reduce((n, f) => n + body(f), 0) / lessons.length) : 0,
      // Held as the LIST of lessons still missing each thing, not a count. Bible Basics has one
      // script and it is lesson 2, so "the Nth lesson" is the wrong lesson to name next.
      noReview: lessons.filter(f => !has("research/reviews", f)),
      noScript: lessons.filter(f => !has("podcast", f.replace(/\.md$/, ".script.md"))),
      noEpisode: lessons.filter(f => !/^audio:\s*\S/m.test(read(path.join(dir, "lessons", f)).split(/^---$/m)[1] || "")),
      outline: has("research", "OUTLINE.md"), sources: has("research", "SOURCES.md"),
      tests: files(path.join(dir, "assessments"), ".md").length,
      next: null,
    });
    const c = courses[courses.length - 1];
    c.reviewed = c.lessons - c.noReview.length;
    c.scripts  = c.lessons - c.noScript.length;
    c.episodes = c.lessons - c.noEpisode.length;
  }
}

/* The next action per course, in the order the pipeline actually runs. One rule, one place.
   Two things this gets right that a count would not: it names the first lesson actually MISSING
   the thing (Bible Basics' one script is lesson 2, so "lesson 1" would be wrong), and it never
   tells a drafting course to publish, because how many lessons it is meant to have lives in prose
   in research/OUTLINE.md and this script does not guess at it. */
for (const c of courses) {
  const lesson = f => `courses/${c.school}/${c.id}/lessons/${f}`;
  const n = f => Number(f.slice(0, 2));
  c.next =
    !c.sources ? `/research-course courses/${c.school}/${c.id}` :
    !c.outline ? `/outline-course courses/${c.school}/${c.id}` :
    c.status !== "published"
      ? `/draft-lesson courses/${c.school}/${c.id} ${c.lessons + 1}   (of however many research/OUTLINE.md plans; publish at the last one)` :
    c.noReview.length ? `/review-lesson courses/${c.school}/${c.id} ${n(c.noReview[0])}   (no review file; ${c.noReview.length} unfiled)` :
    c.noScript.length ? `/make-podcast ${lesson(c.noScript[0])}   (script only, free, ${c.noScript.length} to go)` :
    c.noEpisode.length ? `node scripts/podcast.mjs render ${lesson(c.noEpisode[0])} --go   ($0.22, ${c.noEpisode.length} to go)` :
    "finished";
}

const order = (a, b) => (a.term ?? 99) - (b.term ?? 99) || a.id.localeCompare(b.id);
courses.sort(order);

const state = c => c.status !== "published" ? c.status
  : c.episodes >= c.lessons ? "FINISHED"
  : c.scripts >= c.lessons ? "written"
  : "published";

const pad = (s, n) => String(s).padEnd(n);
console.log(`\nSTATE OF THE INSTITUTE   ${new Date().toISOString().slice(0, 10)}   (computed; nothing here is written down elsewhere)\n`);
console.log(pad("COURSE", 24) + pad("T", 3) + pad("STATE", 11) + pad("LESSON", 7) + pad("REVFILE", 8) + pad("SCRIPT", 7) + pad("EPISODE", 8) + pad("AVG WORDS", 10) + "TO RENDER");
for (const c of courses) {
  console.log(pad(c.id, 24) + pad(c.term ?? "-", 3) + pad(state(c), 11) + pad(c.lessons, 7) +
    pad(`${c.reviewed}`, 8) + pad(`${c.scripts}`, 7) + pad(`${c.episodes}`, 8) + pad(c.words, 10) + (c.status === "published" && c.noEpisode.length ? `$${(c.noEpisode.length * 0.22).toFixed(2)}` : "-"));
}

const live = courses.filter(c => c.status === "published");
const sum = (a, k) => a.reduce((n, c) => n + c[k], 0);
console.log(`\n${live.length} published, ${courses.length - live.length} in progress. ` +
  `${sum(live, "lessons")} live lessons. Scripts ${sum(live, "scripts")}/${sum(live, "lessons")} (free). ` +
  `Episodes ${sum(live, "episodes")}/${sum(live, "lessons")} (about $${((sum(live, "lessons") - sum(live, "episodes")) * 0.22).toFixed(2)} outstanding).`);

console.log(`\nREVFILE counts review files at research/reviews/<lesson>.md. A lesson can have been reviewed`);
console.log(`without one: Logic 9 and 10 were (commits 0258956, e0832bb) but their findings went into`);
console.log(`course-wide.md instead. A missing file means the record is incomplete, not that the work is.`);
console.log(`\nTHREE STATES  published = lessons through Stage 4, live on the site`);
console.log(`              written   = + every lesson has a fact-checked script (free; finish this before the next course)`);
console.log(`              FINISHED  = + every lesson has an episode (costs money; trails, in term order)`);

/* Audio budget, from what was actually billed rather than from a figure typed into a document.
   Every render logs its billed amount in audio-out/work/.../manifest.json, so the month's spend is
   a sum, not a memory. John raises the cap at aistudio.google.com/spend as budget allows and asks
   only to be told when it runs out; this is what tells him. The previous version of this number
   lived in a sentence in docs/PODCAST_PIPELINE.md and was stale the day after it was written. */
function budget() {
  let cap = null, prior = {};
  try {
    const b = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts", "podcast", "budget.json"), "utf8"));
    cap = b.monthlyCapUSD; prior = b.priorSpendUSD || {};
  } catch { return; }
  const work = path.join(ROOT, "audio-out", "work");
  if (!fs.existsSync(work)) return;
  const now = new Date(), key = now.toISOString().slice(0, 7);
  let month = 0, all = 0, attempts = 0, monthAttempts = 0;
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (e.name !== "manifest.json") continue;
      let m; try { m = JSON.parse(fs.readFileSync(p, "utf8")); } catch { continue; }
      for (const a of m.attempts || []) {
        const b = Number(a.billed) || 0;
        all += b; attempts++;
        if (String(a.sent || "").slice(0, 7) === key) { month += b; monthAttempts++; }
      }
    }
  })(work);
  // Spend the manifests cannot see: September carries the 2026-09-17 debugging afternoon, which
  // ran through tooling that has since been deleted. Reporting the manifest sum alone would say
  // $28 free in a month that has about $5, and John renders against this number.
  const unseen = Number(prior[key]) || 0;
  const spent = month + unseen;
  const left = cap - spent;
  const each = 0.22;
  console.log(`
AUDIO BUDGET  ${key}: $${spent.toFixed(2)} of a $${cap.toFixed(2)} cap${unseen ? `  ($${month.toFixed(2)} from ${monthAttempts} render(s) logged here, plus $${unseen.toFixed(2)} in budget.json that no manifest saw)` : `, over ${monthAttempts} render(s)`}.`);
  console.log(`              $${left.toFixed(2)} left, about ${Math.floor(left / each)} more episode(s) at $${each.toFixed(2)}. aistudio.google.com/spend is the authority.`);
  console.log(`              $${all.toFixed(2)} billed all time over ${attempts} render(s).`);
  if (left < each) console.log(`              *** THE CAP IS SPENT. Tell John: raise it at aistudio.google.com/spend, then edit scripts/podcast/budget.json. Rendering will fail until then. ***`);
  else if (left < each * 5) console.log(`              *** Running low: fewer than five episodes left this month. Worth telling John. ***`);
}
budget();

console.log(`\nNEXT ACTION, PER COURSE, IN CORE TERM ORDER`);
for (const c of courses) if (c.next !== "finished") console.log(`  ${pad(c.id, 24)} ${c.next}`);
const doneCourses = courses.filter(c => c.next === "finished").map(c => c.id);
if (doneCourses.length) console.log(`  finished: ${doneCourses.join(", ")}`);
console.log("");
