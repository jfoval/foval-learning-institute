/* state.mjs names the next action for every course, and a session acts on what it says without
   re-deriving it. So the one thing it must not do is name the wrong lesson.
   Both cases below are bugs the first draft actually shipped on 2026-09-18 and that reading the
   output against the tree caught: it counted how many scripts a course had and used that as an
   index, so Bible Basics (one script, and it is lesson 2) was told to write lesson 1's again; and
   it told a drafting course with one finished lesson to publish. */
import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const STATE = path.join(REPO, "scripts", "state.mjs");

function tree({ status = "published", lessons = 3, scriptsFor = [], audioFor = [], budget = { monthlyCapUSD: 30 } } = {}) {
  const arguments0budget = budget;
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "foval-state-"));
  const dir = path.join(root, "courses", "foundations", "sample");
  fs.mkdirSync(path.join(dir, "lessons"), { recursive: true });
  fs.mkdirSync(path.join(dir, "podcast"), { recursive: true });
  fs.mkdirSync(path.join(dir, "research", "reviews"), { recursive: true });
  fs.mkdirSync(path.join(root, "curriculum"), { recursive: true });
  fs.writeFileSync(path.join(root, "curriculum", "core-path.yaml"), "terms: []\n");
  fs.mkdirSync(path.join(root, "scripts", "podcast"), { recursive: true });
  fs.writeFileSync(path.join(root, "scripts", "podcast", "budget.json"), JSON.stringify(arguments0budget));
  fs.mkdirSync(path.join(root, "audio-out", "work"), { recursive: true });
  fs.writeFileSync(path.join(dir, "course.yaml"), `id: sample\nschool: foundations\nstatus: ${status}\n`);
  fs.writeFileSync(path.join(dir, "research", "SOURCES.md"), "s\n");
  fs.writeFileSync(path.join(dir, "research", "OUTLINE.md"), "o\n");
  for (let i = 1; i <= lessons; i++) {
    const name = `0${i}-lesson.md`;
    const audio = audioFor.includes(i) ? "audio: https://example.org/e.mp3\n" : "";
    fs.writeFileSync(path.join(dir, "lessons", name), `---\ntitle: L${i}\n${audio}---\n\nBody words here.\n`);
    fs.writeFileSync(path.join(dir, "research", "reviews", name), "reviewed\n");
    if (scriptsFor.includes(i)) fs.writeFileSync(path.join(dir, "podcast", `0${i}-lesson.script.md`), "---\nchecked: PASS\n---\nS2: Hi.\n");
  }
  return root;
}

const run = root => spawnSync(process.execPath, [STATE], { env: { ...process.env, FOVAL_ROOT: root }, encoding: "utf8" }).stdout;

test("the next script is the first lesson missing one, not the Nth lesson", () => {
  // One script, and it is lesson 2. Naming "lesson 1 + 1" would ask for lesson 2 again.
  const out = run(tree({ scriptsFor: [2] }));
  assert.ok(/make-podcast \S*01-lesson\.md/.test(out), out);
  assert.ok(!/make-podcast \S*02-lesson\.md/.test(out), out);
});

test("the next render is the first lesson missing an episode", () => {
  const out = run(tree({ scriptsFor: [1, 2, 3], audioFor: [1, 3] }));
  assert.ok(/render \S*02-lesson\.md/.test(out), out);
});

test("a drafting course is told to draft the next lesson, never to publish", () => {
  const out = run(tree({ status: "drafting", lessons: 1 }));
  assert.ok(/draft-lesson \S*sample 2/.test(out), out);
  // Match the action itself, not the word: "publish" also appears in the legend and in the
  // draft action's own reminder to publish at the last lesson.
  const action = out.split("\n").find(l => l.trim().startsWith("sample "));
  assert.ok(!/publish: status/.test(action), action);
});


/* THE single next action. John's ask, 2026-09-18: start a session, say "keep going", and be told
   what to do rather than handed a list of seven per-course actions. The priority rule is the part
   that has to be right, so all three branches are pinned here. */

const MONTH = new Date().toISOString().slice(0, 7);
const SPENT = { monthlyCapUSD: 30, incidents: [{ month: MONTH, amountUSD: 30 }] };

test("with budget and a ready script, the one action is to render", () => {
  const out = run(tree({ scriptsFor: [1, 2, 3] }));
  assert.ok(/DO THIS NOW {2}\(render\)/.test(out), out);
  assert.ok(/podcast\.mjs render \S*01-lesson\.md --go/.test(out), out);
});

test("with budget but no script ready, rendering is not proposed", () => {
  const out = run(tree({ scriptsFor: [] }));
  assert.ok(!/DO THIS NOW {2}\(render\)/.test(out), out);
  assert.ok(/DO THIS NOW {2}\(script\)/.test(out), out);
});

test("with the cap spent, rendering is not proposed even with scripts ready", () => {
  const out = run(tree({ scriptsFor: [1, 2, 3], budget: SPENT }));
  assert.ok(!/DO THIS NOW {2}\(render\)/.test(out), out);
});

test("a render already done is not proposed again", () => {
  const out = run(tree({ scriptsFor: [1, 2, 3], audioFor: [1] }));
  assert.ok(/podcast\.mjs render \S*02-lesson\.md --go/.test(out), out);
});

test("exactly one action is proposed, never a list", () => {
  const out = run(tree());
  assert.equal((out.match(/DO THIS NOW/g) || []).length, 1, out);
});
