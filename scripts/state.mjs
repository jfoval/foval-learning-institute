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

const checkedScript = (dir, lessonFile) => {
  const p = path.join(dir, "podcast", lessonFile.replace(/\.md$/, ".script.md"));
  try { return /^checked:/m.test(fs.readFileSync(p, "utf8").split(/^---$/m)[1] || ""); } catch { return false; }
};

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
      // A script without a `checked:` entry is a draft, not a script. "Written" means every lesson
      // has a FACT-CHECKED script, so counting files made this report say a course was written
      // while one of its scripts had never been read by anyone. Same test as build.mjs uses to
      // gate an audio stamp.
      noScript: lessons.filter(f => !checkedScript(dir, f)),
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
  let cap = null, prior = {}, out = null;
  try {
    const b = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts", "podcast", "budget.json"), "utf8"));
    cap = b.monthlyCapUSD; prior = b.incidents || [];
  } catch { return null; }
  // audio-out/ is git-ignored, so a fresh clone has none until its first render. That is zero spend
  // recorded locally, not "no budget": bailing here meant a second working copy would never be told
  // it could render. Incidents in budget.json still count, because they are committed.
  const work = path.join(ROOT, "audio-out", "work");
  const haveWork = fs.existsSync(work);
  const now = new Date(), key = now.toISOString().slice(0, 7);
  let month = 0, all = 0, attempts = 0, monthAttempts = 0;
  if (haveWork) (function walk(d) {
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
  /* Accidents are counted against the cap and kept out of the cost of an episode. September
     carries about $23.39 from a runaway retry loop on 2026-09-17: a session wrapped a render in a
     retry, each attempt timed out locally while Google kept rendering and billing. Google charged
     it, so the cap is really that much smaller; almost none of it became audio, so it says nothing
     about what an episode costs. Reporting either half alone is wrong in a different direction. */
  const incidents = (prior || []).filter(x => x.month === key);
  const lost = incidents.reduce((n, x) => n + (Number(x.amountUSD) || 0), 0);
  const spent = month + lost;
  const left = cap - spent;
  const each = monthAttempts ? month / monthAttempts : 0.22;
  console.log(`
AUDIO BUDGET  ${key}: $${left.toFixed(2)} left of a $${cap.toFixed(2)} cap, about ${Math.floor(left / (each || 0.22))} more episode(s).`);
  console.log(`              production: $${month.toFixed(2)} over ${monthAttempts} episode(s), $${each.toFixed(2)} each.`);
  if (lost) for (const x of incidents) console.log(`              not production: $${x.amountUSD.toFixed(2)} lost to an accident (${String(x.what).split(".")[0]}). Counts against the cap, never against the cost of an episode.`);
  console.log(`              Headroom, not an allowance: unspent is money John still has. Render only what is owed.`);
  console.log(`              aistudio.google.com/spend is the authority; he raises the cap as he can afford it.`);
  out = { left, each: each || 0.22 };
  console.log(`              all time, production only: $${all.toFixed(2)} over ${attempts} render(s).`);
  return out;
  if (left < each) console.log(`              *** THE CAP IS SPENT. Tell John: raise it at aistudio.google.com/spend, then edit scripts/podcast/budget.json. Rendering will fail until then. ***`);
  else if (left < each * 5) console.log(`              *** Running low: fewer than five episodes left this month. Worth telling John. ***`);
}
const money = budget();

console.log(`\nNEXT ACTION, PER COURSE, IN CORE TERM ORDER`);
for (const c of courses) if (c.next !== "finished") console.log(`  ${pad(c.id, 24)} ${c.next}`);
const doneCourses = courses.filter(c => c.next === "finished").map(c => c.id);
if (doneCourses.length) console.log(`  finished: ${doneCourses.join(", ")}`);
console.log("");

/* THE next action, not a list of them.
   John's ask, 2026-09-18: start a session, say "keep going", and have it know.

   TWO BUDGETS, AND THEY ARE NOT THE SAME THING. Confusing them produced a wrong rule here once,
   so it is written down.

   - **John's Claude usage** is the perishable one. It resets weekly and he wants it spent: writing
     lessons and writing podcast scripts both come out of it. An unused week is gone. This is the
     budget a session is actually racing.
   - **The Gemini API spend** is his own money, paid in as he can afford it, with a monthly ceiling
     at aistudio.google.com/spend that he raises when he has the budget. **Unspent headroom is not
     lost; it is money he still has.** There is never a reason to hurry a render in order to "use
     up" the cap, and a rule that did so was spending his money for no reason.

   So: render when there is headroom and a script is ready, because episodes are genuinely owed and
   a render costs almost nothing in Claude usage. Never render to burn a cap. Otherwise work the
   earliest term on the Core with any outstanding work, lessons before scripts, which is what makes
   Terms 1 and 2 finish first when the whole Core is a multi-year build. */
function nextAction(courses, money) {
  const lessonFiles = c => { try { return fs.readdirSync(path.join(COURSES_DIR, c.school, c.id, "lessons")).filter(f => f.endsWith(".md")).sort(); } catch { return []; } };
  if (money && money.left >= money.each) {
    for (const c of courses) {
      if (c.status !== "published") continue;
      const ready = c.noEpisode.filter(f => !c.noScript.includes(f));
      if (!ready.length) continue;
      const n = Math.min(Math.floor(money.left / money.each), ready.length);
      return { what: "render",
        line: `node scripts/podcast.mjs render courses/${c.school}/${c.id}/lessons/${ready[0]} --go`,
        why: `${c.id} owes episodes and has ${ready.length} script(s) ready. $${money.left.toFixed(2)} of headroom is left this month, enough for ${n} of them, and a render costs almost no Claude usage. Render, listen, upload, stamp, lower the debt, commit. Then run this again.` };
    }
  }
  for (const c of courses) {
    if (c.next === "finished") continue;
    // The pipeline has stages and this is the one action a session will act on without
    // checking, so it must not name a stage the course is not ready for. On 2026-09-19 it told a
    // session to draft lesson 1 of a course whose only research file was SOURCES.md, because it
    // tracked OUTLINE.md and then never looked at it. Stage 1 and Stage 2 come first, in order.
    if (c.status !== "published" && !c.sources) return { what: "research",
      line: `/research-course courses/${c.school}/${c.id}`,
      why: `${c.id} is the earliest term with work outstanding and has no research/SOURCES.md. Nothing can be drafted without it: courses/CLAUDE.md rule 1. Run Stage 1, then this will move you on.` };
    if (c.status !== "published" && !c.outline) return { what: "outline",
      line: `/outline-course courses/${c.school}/${c.id}`,
      why: `${c.id} is the earliest term with work outstanding. Its research is done and it has no research/OUTLINE.md, so there is no plan saying how many lessons it has or what each one teaches. Run Stage 2, then this will move you on.` };
    if (c.status !== "published") return { what: "draft",
      line: `/draft-lesson courses/${c.school}/${c.id} ${c.lessons + 1}`,
      why: `${c.id} is the earliest term with work outstanding and is still drafting. Draft lesson ${c.lessons + 1}, review it in a fresh context, then keep going to the next one for as long as the budget lasts. research/OUTLINE.md says how many it has. At the last one, publish it and add its lesson count to curriculum/audio-debt.yaml.` };
    if (c.noReview.length) return { what: "review",
      line: `/review-lesson courses/${c.school}/${c.id} ${Number(c.noReview[0].slice(0, 2))}`,
      why: `${c.id} has ${c.noReview.length} lesson(s) with no review file.` };
    if (c.noScript.length) return { what: "script",
      line: `/make-podcast courses/${c.school}/${c.id}/lessons/${c.noScript[0]}`,
      why: `${c.id} is the earliest term not yet WRITTEN. It owes ${c.noScript.length} script(s), which cost nothing at the API. Write them, stopping after the fact-check, until the course is written. Then this will move you on.` };
  }
  return { what: "new course", line: "/new-course", why: "Every live course is written. Start the next course on the Core path." };
}

const act = nextAction(courses, money);
console.log(`\n${"=".repeat(78)}\nDO THIS NOW  (${act.what})\n\n  ${act.line}\n`);
for (const l of act.why.match(/.{1,74}(\s|$)/g) || []) console.log(`  ${l.trim()}`);
console.log(`\n  Commit what you touched, by name, with docs/QUEUE.md in the same commit.`);
console.log(`  Then run npm run state again and do whatever it says next.\n${"=".repeat(78)}`);
