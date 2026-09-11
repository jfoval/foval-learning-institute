// Tests for the build and its lints. `npm test` runs them with node's own runner; no dependency.
//
// The build is a script, not a library, so the lint tests run it as a child process over a
// throwaway tree (FOVAL_ROOT) holding one published course with one lesson. Each case swaps in
// a lesson that must fail a specific check and asserts the build exits 1 naming it. A check that
// stops firing is the bug these exist to catch: a green build gets trusted.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { renderBody } from "../build.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..", "..");
const BUILD = path.join(REPO, "scripts", "build.mjs");

/* ---------- renderBody ---------- */

test("a blank line inside a code fence inside a ::: block does not split the <pre>", () => {
  const md = [":::exercise Try it", "", "```python", "x = 1", "", "print(x)", "```", "", ":::"].join("\n");
  const html = renderBody(md);
  const pre = html.match(/<pre>[\s\S]*?<\/pre>/g) || [];
  assert.equal(pre.length, 1, "one code block");
  assert.ok(!/<p>/.test(pre[0]), "no <p> inside the <pre>");
  assert.ok(pre[0].includes("x = 1\n\nprint(x)"), "the blank line survives inside the code");
});

test("predict and checkpoint hide their body behind a details element", () => {
  const html = renderBody(":::predict What prints?\n\nThe number 3.\n\n:::");
  assert.ok(html.includes('<div class="think predict">'));
  assert.ok(html.includes("<summary>Show the answer</summary>"));
  assert.ok(html.includes("<p>The number 3.</p>"));
});

test("citation markers link to their Sources entry, outside code, and tables get a wrapper", () => {
  const html = renderBody("A claim.[1] Not `x[1]` and not [2].\n\n| a | b |\n|---|---|\n| 1 | 2 |\n\n## Sources\n\n1. [One](https://example.org).\n");
  assert.ok(html.includes('<sup class="cite"><a href="#src-1">1</a></sup>'));
  assert.ok(html.includes('<li id="src-1">'));
  assert.ok(html.includes("<code>x[1]</code>"), "code is untouched");
  assert.ok(html.includes("not [2]."), "a marker with no entry stays text");
  assert.ok(html.includes('<div class="table-wrap"><table>'));
});

test("figure and video render from the header line", () => {
  const fig = renderBody(":::figure img/x.jpg | A thing\n\nCredit: someone, CC BY.\n\n:::");
  assert.ok(fig.includes('<img src="img/x.jpg" alt="A thing"'));
  const vid = renderBody(":::video https://youtu.be/abcdefghijk | Title\n\nWhy watch.\n\n:::");
  assert.ok(vid.includes("youtube-nocookie.com/embed/abcdefghijk"));
});

/* ---------- the lints, over a fixture tree ---------- */

const GOOD_LESSON = `---
title: A good lesson
minutes: 20
objectives:
  - Do a thing
quiz:
  - q: Which is it?
    options:
      - The first, which is wrong for a reason
      - The second, which is the right one here
      - The third, wrong for another reason
    answer: 1
    explain: The second is right.
---
A paragraph with a [link](https://example.org/one).

:::predict What happens next?

Nothing much.

:::

## Sources

1. [Example](https://example.org/one).
`;

const COURSE_YAML = `id: sample
title: Sample Course
school: foundations
subject: Foundations
level: Foundation
status: published
summary: A sample.
description: A sample course for the tests.
outcomes:
  - Do a thing
prerequisites: []
sensitive_domain: false
`;

const TAXONOMY = `# Map

## 1. School of Foundations — \`foundations\`

| Course | Level | Status | Path | Notes |
|---|---|---|---|---|
| Sample Course | Foundation | published | T1 | A sample. |
`;

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "foval-test-"));
  const course = path.join(root, "courses", "foundations", "sample");
  fs.mkdirSync(path.join(course, "lessons"), { recursive: true });
  fs.mkdirSync(path.join(course, "podcast"), { recursive: true });
  fs.mkdirSync(path.join(root, "curriculum"), { recursive: true });
  fs.mkdirSync(path.join(root, "site", "assets"), { recursive: true });
  fs.mkdirSync(path.join(root, "site", "data"), { recursive: true });
  fs.writeFileSync(path.join(course, "course.yaml"), COURSE_YAML);
  fs.writeFileSync(path.join(course, "lessons", "01-good.md"), GOOD_LESSON);
  fs.writeFileSync(path.join(root, "curriculum", "TAXONOMY.md"), TAXONOMY);
  fs.writeFileSync(path.join(root, "curriculum", "core-path.yaml"), "terms: []\n");
  fs.writeFileSync(path.join(root, "curriculum", "audio-debt.yaml"), "owed:\n  sample: 1\n");
  fs.copyFileSync(path.join(REPO, "site", "assets", "styles.css"), path.join(root, "site", "assets", "styles.css"));
  return { root, course };
}

function check(root) {
  const r = spawnSync(process.execPath, [BUILD, "--check"], { env: { ...process.env, FOVAL_ROOT: root }, encoding: "utf8" });
  return { status: r.status, out: r.stdout + r.stderr };
}

test("the fixture course validates clean", () => {
  const { root } = fixture();
  const r = check(root);
  assert.equal(r.status, 0, r.out);
  assert.ok(r.out.includes("ok: 1 courses, 1 lessons"), r.out);
});

// Each case: a name, a transform of the good lesson (or a file to add), and the phrase the
// failure must name.
const CASES = [
  ["an em dash", s => s.replace("A paragraph", "A paragraph — with a dash"), "em dash"],
  ["a spaced en dash as punctuation", s => s.replace("A paragraph", "A paragraph – with a dash"), "spaced en dash"],
  ["an unspaced en dash in a range is allowed", s => s.replace("A paragraph", "Read Mark 16:9–20 first. A paragraph"), null],
  ["a spaced en dash inside a quotation is allowed", s => s.replace("A paragraph", 'The title "Meat – what to know" is quoted. A paragraph'), null],
  ["Windows line endings", s => s.replace(/\n/g, "\r\n"), "Windows line endings"],
  ["a Markdown footnote", s => s.replace("A paragraph", "A claim.[^1] A paragraph").replace("## Sources", "[^1]: A note.\n\n## Sources"), "footnote"],
  ["an unclosed ::: block", s => s.replace("\n:::\n\n## Sources", "\n\n## Sources"), "never closed"],
  ["a nested ::: block", s => s.replace("Nothing much.", ":::callout Inner\n\nNested.\n\n:::\n\nNothing much."), "do not nest"],
  ["a ::: fence with text after it", s => s.replace("\n:::\n\n## Sources", "\n::: and more\n\n## Sources"), "fence with text after it"],
  ["an ESV quotation", s => s.replace("A paragraph", '"In the beginning" (Genesis 1:1, ESV). A paragraph'), "ESV"],
  ["an answer revealed in prose", s => s.replace("A paragraph", "Do this one yourself before you read on.\n\nHere's mine: the answer.\n\nA paragraph"), "answer"],
  ["a quiz option holding an unquoted colon", s => s.replace("- The third, wrong for another reason", "- Third: wrong for a reason"), "not text"],
  ["a blank line inside an svg", s => s.replace("A paragraph", '<svg viewBox="0 0 100 100" role="img" aria-label="x">\n<rect x="0" y="0" width="10" height="10" fill="var(--navy, #0f2a4a)"/>\n\n</svg>\n\nA paragraph'), "inside an <svg>"],
  ["an svg label wider than its viewBox", s => s.replace("A paragraph", '<svg viewBox="0 0 100 40" role="img" aria-label="x">\n<text x="10" y="20" font-size="16" fill="var(--text, #111418)">This label is far wider than one hundred units</text>\n</svg>\n\nA paragraph'), "past its viewBox"],
  ["a conclusion folded into a numbered premise", s => s.replace("A paragraph", "1. All men are mortal.\n2. Socrates is a man.\nC: Socrates is mortal.\n\nA paragraph"), "conclusion"],
];

for (const [name, mutate, phrase] of CASES) {
  test(`${phrase ? "fails on" : "accepts"} ${name}`, () => {
    const { root, course } = fixture();
    fs.writeFileSync(path.join(course, "lessons", "01-good.md"), mutate(GOOD_LESSON));
    const r = check(root);
    if (phrase) {
      assert.equal(r.status, 1, `expected a failure for ${name}\n${r.out}`);
      assert.ok(r.out.includes(phrase), `expected the failure to say "${phrase}"\n${r.out}`);
    } else {
      assert.equal(r.status, 0, r.out);
    }
  });
}

test("the same lints run over assessments", () => {
  const { root, course } = fixture();
  fs.mkdirSync(path.join(course, "assessments"));
  fs.writeFileSync(path.join(course, "assessments", "final-test.md"), GOOD_LESSON.replace("A paragraph", "A paragraph — with a dash"));
  const r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("assessments/final-test.md") && r.out.includes("em dash"), r.out);
});

test("course.yaml must carry sensitive_domain, and standpoint only under christian-studies", () => {
  const { root, course } = fixture();
  fs.writeFileSync(path.join(course, "course.yaml"), COURSE_YAML.replace("sensitive_domain: false\n", "standpoint: christian\n"));
  const r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("sensitive_domain"), r.out);
  assert.ok(r.out.includes("standpoint"), r.out);
});

test("an empty course.yaml is reported, not a crash", () => {
  const { root, course } = fixture();
  fs.writeFileSync(path.join(course, "course.yaml"), "# nothing here\n");
  const r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("is empty"), r.out);
  assert.ok(!r.out.includes("TypeError"), r.out);
});

test("estimated_hours is refused", () => {
  const { root, course } = fixture();
  fs.writeFileSync(path.join(course, "course.yaml"), COURSE_YAML + "estimated_hours: 3\n");
  const r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("estimated_hours"), r.out);
});

test("a published course with six lessons needs a final test", () => {
  const { root, course } = fixture();
  for (let i = 2; i <= 6; i++) fs.writeFileSync(path.join(course, "lessons", `0${i}-more.md`), GOOD_LESSON);
  fs.writeFileSync(path.join(root, "curriculum", "audio-debt.yaml"), "owed:\n  sample: 6\n");
  const r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("no final test"), r.out);
});

test("the audio debt ledger is a ceiling in both directions", () => {
  const { root } = fixture();
  fs.writeFileSync(path.join(root, "curriculum", "audio-debt.yaml"), "owed:\n  sample: 2\n");
  let r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("still says 2"), r.out);
  fs.writeFileSync(path.join(root, "curriculum", "audio-debt.yaml"), "owed: {}\n");
  r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes('have no "audio:"'), r.out);
});

test("an audio stamp needs a fact-checked script beside the lesson", () => {
  const { root, course } = fixture();
  fs.writeFileSync(path.join(course, "lessons", "01-good.md"), GOOD_LESSON.replace("minutes: 20", "minutes: 20\naudio: https://example.org/ep.mp3"));
  fs.writeFileSync(path.join(root, "curriculum", "audio-debt.yaml"), "owed: {}\n");
  let r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes('no "checked:" entry'), r.out);
  fs.writeFileSync(path.join(course, "podcast", "01-good.script.md"), "---\nchecked: 2026-09-10 PASS\n---\nS1: Hello.\n");
  r = check(root);
  assert.equal(r.status, 0, r.out);
});

test("course.yaml status must agree with the TAXONOMY row, and the row must exist", () => {
  const { root } = fixture();
  fs.writeFileSync(path.join(root, "curriculum", "TAXONOMY.md"), TAXONOMY.replace("| published |", "| drafting |"));
  let r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("rule 5"), r.out);
  fs.writeFileSync(path.join(root, "curriculum", "TAXONOMY.md"), TAXONOMY.replace(/\| Sample Course.*\n/, ""));
  r = check(root);
  assert.equal(r.status, 1, r.out);
  assert.ok(r.out.includes("no row"), r.out);
});
