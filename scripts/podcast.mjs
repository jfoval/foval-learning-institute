// Podcast pipeline, the mechanical half. The editorial half (writing the two-host
// script from the lesson and fact-checking it in a fresh-context subagent) is the
// /make-podcast command; this script takes over once a checked script file exists.
//
//   node scripts/podcast.mjs plan   <lesson.md>          where this lesson's episode stands
//   node scripts/podcast.mjs render <lesson.md>          dry run: parse, cost, request shape
//   node scripts/podcast.mjs render <lesson.md> --go     spend money, write the MP3
//   node scripts/podcast.mjs upload <lesson.md>          MP3 to R2 via wrangler
//   node scripts/podcast.mjs stamp  <lesson.md>          write audio: into the lesson frontmatter
//   node scripts/podcast.mjs all    <lesson.md> --go     render, upload, stamp
//
// Paths are all derived from the lesson path, so there is one argument everywhere:
//   lesson   courses/<school>/<course>/lessons/<id>.md
//   script   courses/<school>/<course>/podcast/<id>.script.md      (in git: it is content)
//   mp3      audio-out/<school>/<course>/<id>.mp3                  (git-ignored)
//   R2       foval-audio/<school>/<course>/<id>.mp3
//   public   https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/<school>/<course>/<id>.mp3
//
// Guards, all deliberate:
//   - render --go refuses a script whose frontmatter has no `checked:` entry, because the
//     fact-check happens before money is spent, never after.
//   - render --go refuses an estimate over $2 without --force. A normal episode is ~$0.30.
//   - FAL_KEY is read from the environment, falling back to .env.local, which is git-ignored.
//
// The fal request shape below is the one that rendered the first real episode on
// 2026-09-06 (bible-basics 02, $0.32). The voices are the institute's hosts, chosen by
// John by ear: S1 is John (the Carter preset), S2 is Haley (Alice). Change them only if
// John changes the hosts.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUCKET = "foval-audio";
const PUBLIC_BASE = "https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev";
const SPEAKERS = [{ preset: "Carter [EN]" }, { preset: "Alice [EN]" }];
const COST_PER_MINUTE = 0.04;
const COST_CAP = 2;

const args = process.argv.slice(2);
const cmd = args[0];
const lessonArg = args.find((a, i) => i > 0 && !a.startsWith("--"));
const GO = args.includes("--go");
const FORCE = args.includes("--force");

if (!["plan", "render", "upload", "stamp", "all"].includes(cmd) || !lessonArg) {
  console.error("Usage: node scripts/podcast.mjs <plan|render|upload|stamp|all> <courses/.../lessons/NN-slug.md> [--go] [--force]");
  process.exit(1);
}

/* ---------- derive every path from the lesson ---------- */
const lessonPath = path.resolve(lessonArg);
const rel = path.relative(ROOT, lessonPath).split(path.sep);
// courses/<school>/<course>/lessons/<id>.md
if (rel[0] !== "courses" || rel[3] !== "lessons" || rel.length !== 5 || !rel[4].endsWith(".md")) {
  console.error(`Not a lesson path: ${lessonArg}\nExpected courses/<school>/<course>/lessons/<id>.md`);
  process.exit(1);
}
if (!fs.existsSync(lessonPath)) { console.error(`No such lesson: ${lessonArg}`); process.exit(1); }
const [, school, course] = rel;
const id = rel[4].replace(/\.md$/, "");
const scriptPath = path.join(ROOT, "courses", school, course, "podcast", `${id}.script.md`);
const mp3Path = path.join(ROOT, "audio-out", school, course, `${id}.mp3`);
const r2Key = `${school}/${course}/${id}.mp3`;
const publicUrl = `${PUBLIC_BASE}/${r2Key}`;
const show = p => path.relative(ROOT, p);

/* ---------- .env.local fallback for FAL_KEY ---------- */
if (!process.env.FAL_KEY) {
  const envFile = path.join(ROOT, ".env.local");
  if (fs.existsSync(envFile)) {
    const m = fs.readFileSync(envFile, "utf8").match(/^FAL_KEY=(.+)$/m);
    if (m) process.env.FAL_KEY = m[1].trim();
  }
}

/* ---------- script parsing (same grammar as podcast-compare.mjs) ---------- */
function readScript() {
  if (!fs.existsSync(scriptPath)) {
    console.error(`No script at ${show(scriptPath)}.\nWrite one with /make-podcast ${show(lessonPath)} (it must be fact-checked before rendering).`);
    process.exit(1);
  }
  const raw = fs.readFileSync(scriptPath, "utf8");
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const checked = fmMatch ? /^checked:/m.test(fmMatch[1]) : false;
  const body = raw.replace(/^---[\s\S]*?\n---\n/, "");
  const turns = [...body.matchAll(/^S([12]):\s*([\s\S]*?)(?=\n\s*\nS[12]:|\s*$)/gm)]
    .map(m => ({ speaker: Number(m[1]), text: m[2].replace(/\s+/g, " ").trim() }))
    .filter(t => t.text);
  if (!turns.length) { console.error(`No S1:/S2: turns found in ${show(scriptPath)}.`); process.exit(1); }
  const words = turns.reduce((n, t) => n + t.text.split(/\s+/).length, 0);
  const minutes = words / 150; // a normal two-host pace
  return { turns, words, minutes, checked };
}

/* ---------- render on fal VibeVoice ---------- */
async function render() {
  const { turns, words, minutes, checked } = readScript();
  const cost = minutes * COST_PER_MINUTE;
  const body = {
    script: turns.map(t => `Speaker ${t.speaker}: ${t.text}`).join("\n"),
    speakers: SPEAKERS,
  };
  console.log(`${show(scriptPath)}: ${turns.length} turns, ${words} words, about ${minutes.toFixed(1)} minutes`);
  console.log(`estimated cost on VibeVoice 7B: $${cost.toFixed(2)}   fact-checked: ${checked ? "yes" : "NO"}`);

  if (!GO) {
    console.log("\nDry run. Nothing sent, nothing spent. Add --go to render. Request that would be POSTed:");
    console.log(`  POST https://queue.fal.run/fal-ai/vibevoice/7b`);
    console.log(`  ${JSON.stringify(body).slice(0, 300)}...`);
    return;
  }
  if (!checked) {
    console.error("\nRefusing to spend money on an unchecked script: its frontmatter has no `checked:` entry.");
    console.error("Fact-check it in a fresh-context subagent first (that is the /make-podcast flow), record the verdict in `checked:`, then rerun.");
    process.exit(1);
  }
  if (cost > COST_CAP && !FORCE) {
    console.error(`\nEstimate $${cost.toFixed(2)} is over the $${COST_CAP} guard. A normal episode is ~$0.30. Add --force if this is intended.`);
    process.exit(1);
  }
  if (!process.env.FAL_KEY) { console.error("\nNo FAL_KEY in the environment or .env.local."); process.exit(1); }

  const headers = { Authorization: `Key ${process.env.FAL_KEY}`, "Content-Type": "application/json" };
  let res = await fetch("https://queue.fal.run/fal-ai/vibevoice/7b", { method: "POST", headers, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`fal answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
  let data = await res.json();
  const statusUrl = data.status_url || data.status;
  // Cold starts have run 13 minutes; the poll budget is 20.
  process.stdout.write("rendering");
  for (let i = 0; i < 240; i++) {
    await new Promise(r => setTimeout(r, 5000));
    const s = await (await fetch(statusUrl, { headers })).json();
    if (s.status === "COMPLETED") { data = await (await fetch(data.response_url, { headers })).json(); break; }
    if (s.status === "FAILED") throw new Error("fal reported FAILED: " + JSON.stringify(s).slice(0, 300));
    process.stdout.write(".");
    if (i === 239) throw new Error("still not done after 20 minutes; check the fal dashboard before re-sending");
  }
  const url = data?.audio?.url || data?.audio_url || data?.url;
  if (!url) throw new Error("no audio in the response: " + JSON.stringify(data).slice(0, 300));
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  fs.mkdirSync(path.dirname(mp3Path), { recursive: true });
  fs.writeFileSync(mp3Path, buf);
  console.log(`\nwrote ${show(mp3Path)} (${(buf.length / 1024 / 1024).toFixed(1)} MB). Listen before uploading.`);
}

/* ---------- upload to R2 ---------- */
async function upload() {
  if (!fs.existsSync(mp3Path)) { console.error(`No MP3 at ${show(mp3Path)}. Render first.`); process.exit(1); }
  console.log(`uploading ${show(mp3Path)} to ${BUCKET}/${r2Key} ...`);
  execFileSync("npx", ["wrangler", "r2", "object", "put", `${BUCKET}/${r2Key}`, "--file", mp3Path, "--content-type", "audio/mpeg", "--remote"], { stdio: "inherit", cwd: ROOT });
  const head = await fetch(publicUrl, { method: "HEAD" });
  if (!head.ok) { console.error(`Upload ran but ${publicUrl} answers ${head.status}. Check the bucket before stamping.`); process.exit(1); }
  console.log(`live: ${publicUrl}`);
}

/* ---------- stamp audio: into the lesson frontmatter ---------- */
function stamp() {
  const src = fs.readFileSync(lessonPath, "utf8");
  const fm = src.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) { console.error(`${show(lessonPath)} has no frontmatter to stamp.`); process.exit(1); }
  const line = `audio: ${publicUrl}`;
  let out;
  if (/^audio:.*$/m.test(fm[1])) {
    if (fm[1].includes(line)) { console.log(`already stamped: ${show(lessonPath)}`); return; }
    out = src.replace(fm[0], fm[0].replace(/^audio:.*$/m, line));
  } else {
    // after the minutes: line, where the other lessons carry it
    const inner = /^minutes:.*$/m.test(fm[1])
      ? fm[1].replace(/^(minutes:.*)$/m, `$1\n${line}`)
      : `${line}\n${fm[1]}`;
    out = src.replace(fm[0], `---\n${inner}\n---`);
  }
  fs.writeFileSync(lessonPath, out);
  console.log(`stamped ${show(lessonPath)} with ${line}\nRun npm run validate, and npm run build if the course is published.`);
}

/* ---------- plan: where does this episode stand ---------- */
async function plan() {
  const y = v => v ? "yes" : "no";
  const script = fs.existsSync(scriptPath);
  const checked = script && readScript().checked;
  const mp3 = fs.existsSync(mp3Path);
  const stamped = fs.readFileSync(lessonPath, "utf8").includes(`audio: ${publicUrl}`);
  let live = false;
  try { live = (await fetch(publicUrl, { method: "HEAD" })).ok; } catch { /* offline is fine */ }
  console.log(`${school}/${course}/${id}`);
  console.log(`  script  ${show(scriptPath)}  ${y(script)}${script ? ` (fact-checked: ${y(checked)})` : ""}`);
  console.log(`  mp3     ${show(mp3Path)}  ${y(mp3)}`);
  console.log(`  R2      ${publicUrl}  ${live ? "live" : "not there"}`);
  console.log(`  lesson  audio: stamped  ${y(stamped)}`);
  const next = !script ? `/make-podcast ${show(lessonPath)}`
    : !checked ? "fact-check the script and record the verdict in its `checked:` frontmatter"
    : !mp3 && !live ? `node scripts/podcast.mjs render ${show(lessonPath)} --go`
    : !live ? `node scripts/podcast.mjs upload ${show(lessonPath)}`
    : !stamped ? `node scripts/podcast.mjs stamp ${show(lessonPath)}`
    : "done";
  console.log(`  next    ${next}`);
}

/* ---------- go ---------- */
try {
  if (cmd === "plan") await plan();
  if (cmd === "render") await render();
  if (cmd === "upload") await upload();
  if (cmd === "stamp") stamp();
  if (cmd === "all") { await render(); if (GO) { await upload(); stamp(); } }
} catch (e) {
  console.error(`\nFAILED: ${e.message}`);
  process.exit(1);
}
