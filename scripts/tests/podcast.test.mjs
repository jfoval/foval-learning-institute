/* The spend guards in scripts/podcast.mjs.
 *
 * This is the only code in the repo that costs money, and until 2026-09-18 none of its guards had
 * a test. They were written after about $25 went out in one afternoon on 2026-09-17, and
 * scripts/CLAUDE.md says not to loosen them, but nothing would have caught it if a refactor did.
 * That is exactly the shape of the audio-debt bug: a guard that stops guarding while everything
 * still prints fine.
 *
 * Every test here runs without the network. Each guard exits before the request is built, so a
 * test that reaches the network is itself the failure. GEMINI_API_KEY is cleared as a backstop:
 * if a guard ever stops firing, the run dies on the missing key instead of spending.
 */
import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const POD = path.join(REPO, "scripts", "podcast.mjs");

const TURN = "S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.\n\nS1: And I'm John, and this is a turn of ordinary length that stands in for real teaching prose.\n\n";

function fixture({ checked = true, opensWithJohn = false, repeats = 6 } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "foval-pod-"));
  const dir = path.join(root, "courses", "foundations", "sample");
  fs.mkdirSync(path.join(dir, "lessons"), { recursive: true });
  fs.mkdirSync(path.join(dir, "podcast"), { recursive: true });
  fs.writeFileSync(path.join(dir, "lessons", "01-lesson.md"), "---\ntitle: L\n---\n\nBody.\n");
  const body = opensWithJohn
    ? "S1: And I'm John, opening the episode, which the engine will read in Haley's voice.\n\nS2: Welcome in.\n\n"
    : TURN.repeat(repeats);
  fs.writeFileSync(path.join(dir, "podcast", "01-lesson.script.md"),
    `---\nsource: x\n${checked ? "checked: 2026-09-18 PASS, fresh-context fact-check, all findings fixed\n" : ""}speakers: 2\n---\n\n${body}`);
  return root;
}

const run = (root, ...args) => {
  const env = { ...process.env, FOVAL_ROOT: root };
  delete env.GEMINI_API_KEY;                       // backstop: never reach a billable call
  const r = spawnSync(process.execPath, [POD, "render", path.join(root, "courses/foundations/sample/lessons/01-lesson.md"), ...args], { env, encoding: "utf8" });
  return { status: r.status, out: r.stdout + r.stderr };
};

test("a script opening with S1 is refused, before anything is sent", () => {
  const r = run(fixture({ opensWithJohn: true }), "--go");
  assert.equal(r.status, 1, r.out);
  assert.ok(/opens with S1/.test(r.out), r.out);
  assert.ok(/Haley \(S2\) has to speak first/.test(r.out), r.out);
});

test("--go on a script with no checked: entry refuses to spend", () => {
  const r = run(fixture({ checked: false }), "--go");
  assert.equal(r.status, 1, r.out);
  assert.ok(/unchecked script/.test(r.out), r.out);
});

test("without --go it is a dry run: nothing sent, nothing spent", () => {
  const r = run(fixture());
  assert.equal(r.status, 0, r.out);
  assert.ok(/Dry run\. Nothing sent, nothing spent/.test(r.out), r.out);
});

test("the dry run shows a request carrying no temperature and no seed", () => {
  // Either one makes this model return silence, sometimes forty minutes of it, and Google bills
  // for the silence. PODCAST_PIPELINE section 4 rule 1.
  const r = run(fixture());
  assert.ok(/no temperature, no seed/.test(r.out), r.out);
  assert.ok(!/temperature":/.test(r.out), r.out);
});

test("maxOutputTokens is always capped", () => {
  const r = run(fixture());
  assert.ok(/maxOutputTokens (\d+)/.test(r.out), r.out);
  assert.ok(Number(r.out.match(/maxOutputTokens (\d+)/)[1]) <= 16384, r.out);
});

test("a script too long for one call is refused rather than truncated", () => {
  const r = run(fixture({ repeats: 400 }), "--go");
  assert.equal(r.status, 1, r.out);
  assert.ok(/over the \$|would be cut off/.test(r.out), r.out);
});

test("the source carries no temperature or seed at all", () => {
  // Belt and braces: the guard above reads the printout, this reads the request builder.
  const src = fs.readFileSync(POD, "utf8");
  const body = src.slice(src.indexOf("const body = {"), src.indexOf("const body = {") + 600);
  assert.ok(!/temperature/.test(body), body);
  assert.ok(!/\bseed\b/.test(body), body);
});

/* The gate, against real audio.
 *
 * VERIFICATION.md listed this as a known gap on the grounds that testing it needs fixture audio.
 * ffmpeg can generate the fixtures, so it does not. This matters more since 2026-09-18, when the
 * gate was cut back from seven failing checks to two on John's instruction: the fine-grained ones
 * flagged variances he could not hear and invited paid re-renders. What is left has to still catch
 * the two things that mean Google returned something broken, and has to stay quiet otherwise.
 */
const haveFfmpeg = spawnSync("ffmpeg", ["-version"], { encoding: "utf8" }).status === 0;

function audioFixture(root, make) {
  const dir = path.join(root, "courses", "foundations", "sample");
  const mp3 = path.join(dir, "fixture.mp3");
  make(mp3);
  return mp3;
}

const gateOn = (root, mp3) => {
  const env = { ...process.env, FOVAL_ROOT: root };
  delete env.GEMINI_API_KEY;
  const r = spawnSync(process.execPath, [POD, "gate", path.join(root, "courses/foundations/sample/lessons/01-lesson.md"), `--file=${mp3}`], { env, encoding: "utf8" });
  return { status: r.status, out: r.stdout + r.stderr };
};

test("the gate calls silence broken", { skip: !haveFfmpeg }, () => {
  const root = fixture();
  const mp3 = audioFixture(root, f => spawnSync("ffmpeg", ["-v", "quiet", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", "120", "-q:a", "9", f, "-y"]));
  const r = gateOn(root, mp3);
  assert.equal(r.status, 1, r.out);
  assert.ok(/silence, not an episode/.test(r.out), r.out);
});

test("the gate calls a truncated file truncated, not silence", { skip: !haveFfmpeg }, () => {
  // 19s of real speech is not silence, and saying so sends the reader after the wrong cause.
  const root = fixture();
  const mp3 = audioFixture(root, f => spawnSync("ffmpeg", ["-v", "quiet", "-f", "lavfi", "-i", "sine=frequency=120:r=24000", "-t", "8", "-q:a", "9", f, "-y"]));
  const r = gateOn(root, mp3);
  assert.equal(r.status, 1, r.out);
  assert.ok(/truncated, not a variation/.test(r.out), r.out);
  assert.ok(!/silence, not an episode/.test(r.out), r.out);
});

test("the gate does not fail an episode for anything but silence or length", { skip: !haveFfmpeg }, () => {
  // A tone at roughly the right duration is nothing like two hosts talking: wrong pitch, one
  // "voice", flat level. Before 2026-09-18 that failed on four counts. It must now pass, because
  // none of those are Google returning broken audio.
  const root = fixture({ repeats: 1 });
  const mp3 = audioFixture(root, f => spawnSync("ffmpeg", ["-v", "quiet", "-f", "lavfi", "-i", "sine=frequency=120:r=24000", "-t", "16", "-q:a", "9", f, "-y"]));
  const r = gateOn(root, mp3);
  assert.equal(r.status, 0, r.out);
  assert.ok(/measured, not a problem/.test(r.out), r.out);
});

test("a manifest from the old chunked pipeline does not crash the renderer", () => {
  // Before the one-call rewrite, a manifest was a `chunks` map and had no top-level `attempts`
  // array. `manifest.attempts.find(...)` then threw "Cannot read properties of undefined" and the
  // render died before anything was sent. No money at risk, and it stopped Personal Finance dead
  // on 2026-09-18 with a message that named nothing useful. A legacy manifest should read as
  // "nothing has been rendered on this pipeline yet", which is true.
  const root = fixture();
  const work = path.join(root, "audio-out", "work", "foundations", "sample", "01-lesson");
  fs.mkdirSync(work, { recursive: true });
  fs.writeFileSync(path.join(work, "manifest.json"), JSON.stringify({
    chunks: { 0: { hash: "deadbeef", attempts: [{ file: "chunk-01.attempt-1.mp3", ok: false }] } },
  }));
  const r = run(root);
  assert.equal(r.status, 0, r.out);
  assert.ok(/Dry run\. Nothing sent, nothing spent/.test(r.out), r.out);
  assert.ok(!/Cannot read properties of undefined/.test(r.out), r.out);
  assert.ok(/attempts so far on this script: 0/.test(r.out), r.out);
});
