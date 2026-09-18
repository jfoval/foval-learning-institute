/* check-quiz-shape.cjs answers two different questions and used to give them one answer.
   "Can a reader pass this without reading the lesson?" is a verdict: a quiz beaten by pick-the-
   longest, pick-the-shortest, or always-pick-B is gameable and the script exits non-zero.
   "Is the shape lumpy?" is advice: a wide option-length spread, a lumpy key, an unused position.
   On 2026-09-19 the script counted both in one number and reported eighteen quizzes under the
   headline "a reader could game", when not one of the eighteen was beaten by any strategy. The
   eighteen sat in docs/QUEUE.md unactioned because the report could not be believed. These tests
   are so the two do not merge back together. */
import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SHAPE = path.join(REPO, "scripts", "check-quiz-shape.cjs");

/* `items` is a list of [answerIndex, [option lengths]]. Options are padded strings, since the
   script measures length and nothing else about them. */
function lessonWith(items) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "foval-quiz-"));
  const quiz = items.map(([answer, lens], n) =>
    `  - q: Question ${n + 1}?\n` +
    `    options:\n` + lens.map(l => `      - "${"x".repeat(l)}"\n`).join("") +
    `    answer: ${answer}\n` +
    `    explain: Because of the reason.\n`).join("");
  const f = path.join(dir, "lesson.md");
  fs.writeFileSync(f, `---\ntitle: Sample\nminutes: 10\nquiz:\n${quiz}---\n\nBody.\n`);
  return f;
}

const run = f => spawnSync("node", [SHAPE, f], { encoding: "utf8" });

test("a quiz where the key is the longest option every time is gameable, and fails", () => {
  const r = run(lessonWith([[3, [10, 10, 10, 60]], [3, [10, 10, 10, 60]], [3, [10, 10, 10, 60]],
                            [3, [10, 10, 10, 60]], [3, [10, 10, 10, 60]]]));
  assert.match(r.stdout, /GAMEABLE/);
  assert.match(r.stdout, /longest scores 100%/);
  assert.notStrictEqual(r.status, 0, "a gameable quiz must fail the check");
});

test("always-pick-the-same-position is caught as gameable", () => {
  const r = run(lessonWith([[1, [20, 20, 20, 20]], [1, [20, 20, 20, 20]], [1, [20, 20, 20, 20]],
                            [1, [20, 20, 20, 20]], [1, [20, 20, 20, 20]]]));
  assert.match(r.stdout, /index B scores 100%/);
  assert.notStrictEqual(r.status, 0);
});

test("a wide spread that does not hand over the answer is advice, not a failure", () => {
  // Every item has a 50-character spread, and the long option is never the key.
  const r = run(lessonWith([[0, [20, 20, 20, 70]], [1, [20, 20, 20, 70]], [2, [20, 20, 20, 70]],
                            [3, [70, 20, 20, 20]], [0, [20, 20, 20, 70]], [2, [20, 20, 70, 20]]]));
  assert.match(r.stdout, /No quiz is passable by option shape alone/);
  assert.match(r.stdout, /Advice only/);
  assert.doesNotMatch(r.stdout, /GAMEABLE/);
  assert.strictEqual(r.status, 0, "lumpy shape alone must not fail the check");
});

test("the advice says how many wide items have the key as the longest option", () => {
  const r = run(lessonWith([[3, [20, 20, 20, 70]], [3, [20, 20, 20, 70]], [0, [20, 20, 20, 70]],
                            [1, [20, 20, 20, 70]], [2, [20, 20, 20, 70]], [0, [20, 20, 20, 70]]]));
  // Two of the six hand it over; that is the number worth acting on, not the six.
  assert.match(r.stdout, /in 2 of them the key is the longest option/);
  assert.strictEqual(r.status, 0);
});

test("a balanced quiz reports nothing at all", () => {
  const r = run(lessonWith([[0, [30, 32, 28, 31]], [2, [30, 29, 31, 30]], [1, [28, 30, 30, 31]],
                            [3, [31, 30, 29, 30]], [2, [30, 31, 28, 30]], [0, [29, 30, 31, 30]]]));
  assert.match(r.stdout, /No quiz is passable by option shape alone/);
  assert.doesNotMatch(r.stdout, /Advice only/);
  assert.strictEqual(r.status, 0);
});
