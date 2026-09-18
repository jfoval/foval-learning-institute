// Podcast pipeline, the mechanical half. The editorial half (writing the two-host
// script from the lesson and fact-checking it in a fresh-context subagent) is the
// /make-podcast command; this script takes over once a checked script file exists.
//
//   node scripts/podcast.mjs plan      <lesson.md>        where this lesson's episode stands
//   node scripts/podcast.mjs render    <lesson.md>        dry run: parse, cost, request shape; spends nothing
//   node scripts/podcast.mjs render    <lesson.md> --go   ONE call to Google, about $0.25, then the gate
//   node scripts/podcast.mjs upload    <lesson.md>        MP3 to R2 via wrangler
//   node scripts/podcast.mjs stamp     <lesson.md>        write audio: into the lesson frontmatter
//   node scripts/podcast.mjs all       <lesson.md> --go   render, upload, stamp
//   node scripts/podcast.mjs profile   <lesson.md>        per-30-second level and voice report on the MP3
//   node scripts/podcast.mjs reference <lesson.md>        set the host reference fingerprints from its MP3
//
// Paths are all derived from the lesson path, so there is one argument everywhere:
//   lesson   courses/<school>/<course>/lessons/<id>.md
//   script   courses/<school>/<course>/podcast/<id>.script.md      (in git: it is content)
//   mp3      audio-out/<school>/<course>/<id>.mp3                  (git-ignored)
//   attempts audio-out/work/<school>/<course>/<id>/                 (git-ignored; every attempt kept)
//   R2       foval-audio/<school>/<course>/<id>.mp3
//   public   https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/<school>/<course>/<id>.mp3
//
// THE ENGINE: Gemini 2.5 Pro TTS on Google's own API, the whole episode in ONE call. Settled with
// John by ear on 2026-09-17 after everything else was measured (docs/DECISIONS.md §7): the single
// Pro call holds both hosts for the whole episode with no fade and no seams, which neither Gemini
// 3.1 Flash in one call (it fades to a whisper) nor Flash in chunks (each chunk is a fresh casting
// of Charon) could do. S1 is John (Charon), S2 is Haley (Aoede). Do not change either without him.
//
// MONEY, and the rules that keep it in the account. Google bills TTS on audio OUT ($20 a million
// audio tokens, about 26 a second, so a six-minute episode is about $0.22) plus text in ($1 a
// million tokens, a cent). fal billed on text in, which quietly protected us; this API does not.
// Learned on 2026-09-17 at a cost of about $25:
//   1. `temperature` or `seed` in generationConfig makes this model return silence, sometimes
//      forty minutes of it, billed. Neither is ever sent. The request carries only what Google's
//      own example carries, plus maxOutputTokens.
//   2. maxOutputTokens is set from the word count, so a runaway is capped at about 1.6 times the
//      expected length, roughly $0.35, never $1.70.
//   3. The HTTP call is curl, because Node's fetch drops a response whose headers take more than
//      five minutes, and Google then finishes rendering and bills for it anyway.
//   4. NOTHING IS RE-SENT AUTOMATICALLY. If the call fails or the result fails the gate, this
//      script stops and says so. The attempt is kept. Spending again is a fresh `render --go`, and
//      the manifest counts attempts so the total is always visible. A render that passed is never
//      paid for twice: `render --go` on a passed episode says so and exits.
//   5. One call at a time. Google's spend-rate limit on a new billing account rejects parallel
//      Pro requests, and each rejection is a wasted minute, not a wasted dollar, but still.
//
// THE OPENING. Pro gives the first turn of a transcript to the second speaker's voice, every time,
// whatever the label says (measured on five renders). So Haley opens every episode: the first turn
// of every script is S2. The script parser refuses anything else, before any money is spent.
//
// THE GATE, on the returned audio, before it can be uploaded:
//   opening  the first six seconds are in Haley's band (if not, the voices are swapped);
//   Only two things FAIL: silence where audio should be, and a length wildly out of step with the
//   script (truncation or a runaway). Everything else below is measured and printed and decides
//   nothing, since 2026-09-18. The thresholds that used to fail an episode were flagging variances
//   John could not hear and inviting paid re-renders.
//   voices   both hosts' pitch bands populated;
//   length   spoken duration within LENGTH_MIN..LENGTH_MAX of what the word count predicts;
//   match    when scripts/podcast/hosts.json exists, each host's median pitch within MATCH_PITCH of
//            it, so every episode in the institute is the same John and the same Haley.
// `reference` writes hosts.json from an episode John has approved; it refuses to overwrite
// without --force, because resetting it means nothing rendered before it is known to match.

import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// FOVAL_ROOT points this at another tree, the same as build.mjs and state.mjs. scripts/tests/
// uses it to run the spend guards over a fixture: this is the only code here that costs money,
// and until 2026-09-18 none of its guards had a test.
const ROOT = process.env.FOVAL_ROOT ? path.resolve(process.env.FOVAL_ROOT) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUCKET = "foval-audio";
const PUBLIC_BASE = "https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev";
const MODEL = "gemini-2.5-pro-preview-tts";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
const HOSTS = { 1: { name: "John", voice: "Charon" }, 2: { name: "Haley", voice: "Aoede" } };
const HOSTS_FILE = path.join(ROOT, "scripts", "podcast", "hosts.json");
const PRICE_AUDIO_PER_M = 20, PRICE_TEXT_PER_M = 1;
const TOKENS_PER_SECOND = 26;      // measured: 11,080 audio tokens for 443 s
const WPM = 150;
const OUTPUT_TOKEN_CEILING = 16384; // the model's own limit, about ten minutes
const COST_CAP = 0.6;
const LENGTH_MIN = 0.6, LENGTH_MAX = 1.7;
const LEVEL_FLOOR = -30, LEVEL_SPREAD = 6;   // measured and printed; these no longer fail anything
const SILENCE_FLOOR = -45;                   // fails: effectively no audio at all
const SANE_MIN = 0.35, SANE_MAX = 2.5;       // fails: truncation or a runaway, not a variation
// Two different questions, and they need two different tolerances. Both numbers below are set from
// eight rendered episodes and John's ear on all of them, not from theory.
//
//   within an episode  the only one a listener can actually hear, because nobody A/Bs minute six of
//                      one episode against minute two of another. Across the eight: 0.0, 1.8, 1.9,
//                      4.1, 5.2, 5.3, 7.2 and 9.9%. John listened to the lot and called them all
//                      good, including the 9.9% one, so 10% sits just above what he cannot hear.
//                      Worth keeping tight: what he DID hear on the retired engine was a 12% jump
//                      at a chunk seam, and a step is far more audible than the same number spread
//                      smoothly over seven minutes.
//   between episodes   this one has never caught a real defect and has cost money being wrong. It
//                      rejected lesson 2 at 6.2%, which John then approved by ear, and across the
//                      eight John's overall pitch ranged 85 to 103 Hz with every episode sounding
//                      like the same man. So it is no longer a similarity test, it is an identity
//                      test: 20% is where a genuinely different voice lives (Pro's Charon and
//                      Flash's are 20% apart), and normal variation will never reach it again.
const MATCH_PITCH = 0.20, DRIFT_MAX = 0.10, MATCH_MIN_FRAMES = 80;
const CURL_MAX_SECONDS = 1500;

const args = process.argv.slice(2);
const cmd = args[0];
const lessonArg = args.find((a, i) => i > 0 && !a.startsWith("--"));
const GO = args.includes("--go");
const FORCE = args.includes("--force");

if (!["plan", "render", "upload", "stamp", "all", "profile", "reference", "gate"].includes(cmd) || !lessonArg) {
  console.error("Usage: node scripts/podcast.mjs <plan|render|upload|stamp|all|profile|reference|gate> <courses/.../lessons/NN-slug.md> [--go] [--force] [--file=<mp3>]");
  process.exit(1);
}

/* ---------- derive every path from the lesson ---------- */
const lessonPath = path.resolve(lessonArg);
const rel = path.relative(ROOT, lessonPath).split(path.sep);
if (rel[0] !== "courses" || rel[3] !== "lessons" || rel.length !== 5 || !rel[4].endsWith(".md")) {
  console.error(`Not a lesson path: ${lessonArg}\nExpected courses/<school>/<course>/lessons/<id>.md`);
  process.exit(1);
}
if (!fs.existsSync(lessonPath)) { console.error(`No such lesson: ${lessonArg}`); process.exit(1); }
const [, school, course] = rel;
const id = rel[4].replace(/\.md$/, "");
const scriptPath = path.join(ROOT, "courses", school, course, "podcast", `${id}.script.md`);
const mp3Path = path.join(ROOT, "audio-out", school, course, `${id}.mp3`);
const workDir = path.join(ROOT, "audio-out", "work", school, course, id);
const manifestPath = path.join(workDir, "manifest.json");
const r2Key = `${school}/${course}/${id}.mp3`;
const publicUrl = `${PUBLIC_BASE}/${r2Key}`;
const show = p => path.relative(ROOT, p);

/* ---------- keys from .env.local ---------- */
function envKey(name) {
  if (process.env[name]) return process.env[name];
  const envFile = path.join(ROOT, ".env.local");
  if (fs.existsSync(envFile)) {
    const m = fs.readFileSync(envFile, "utf8").match(new RegExp(`^${name}=(.+)$`, "m"));
    if (m) return m[1].trim().replace(/^(["'])(.*)\1$/, "$2");
  }
  return null;
}

/* ---------- script parsing ---------- */
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
  if (turns[0].speaker !== 2) {
    console.error(`${show(scriptPath)} opens with S1. Haley (S2) has to speak first: the engine gives the first turn to the second voice whatever the label says. Swap the intro so Haley welcomes and John follows, then rerun.`);
    process.exit(1);
  }
  const words = turns.reduce((n, t) => n + t.text.split(/\s+/).length, 0);
  const prompt = "TTS the following conversation between John and Haley:\n" + turns.map(t => `${HOSTS[t.speaker].name}: ${t.text}`).join("\n");
  const seconds = words / WPM * 60;
  const maxTokens = Math.min(OUTPUT_TOKEN_CEILING, Math.ceil(seconds * TOKENS_PER_SECOND * 1.6));
  const textTokens = Math.ceil(prompt.length / 4);
  const cost = seconds * TOKENS_PER_SECOND * PRICE_AUDIO_PER_M / 1e6 + textTokens * PRICE_TEXT_PER_M / 1e6;
  const worst = maxTokens * PRICE_AUDIO_PER_M / 1e6 + textTokens * PRICE_TEXT_PER_M / 1e6;
  return { turns, words, seconds, prompt, maxTokens, cost, worst, checked };
}

/* ---------- manifest of attempts ---------- */
function loadManifest() { try { return JSON.parse(fs.readFileSync(manifestPath, "utf8")); } catch { return { attempts: [] }; } }
function saveManifest(m) { fs.mkdirSync(workDir, { recursive: true }); fs.writeFileSync(manifestPath, JSON.stringify(m, null, 2)); }
function scriptHash(prompt) { let h = 0; for (const c of prompt) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h.toString(16); }

/* ---------- render: one call ---------- */
async function render() {
  const s = readScript();
  const hash = scriptHash(s.prompt);
  const manifest = loadManifest();
  const passed = manifest.attempts.find(a => a.hash === hash && a.passed);
  console.log(`${show(scriptPath)}: ${s.turns.length} turns, ${s.words} words, about ${(s.seconds / 60).toFixed(1)} minutes; fact-checked: ${s.checked ? "yes" : "NO"}`);
  console.log(`one call to ${MODEL}: expected cost $${s.cost.toFixed(2)}, capped at $${s.worst.toFixed(2)} by maxOutputTokens ${s.maxTokens}; attempts so far on this script: ${manifest.attempts.filter(a => a.hash === hash).length}`);
  if (passed) {
    fs.copyFileSync(path.join(workDir, passed.file), mp3Path);
    console.log(`already rendered and passed (${passed.file}); copied to ${show(mp3Path)}. Not spending again.`);
    return;
  }
  /* The three refusals below used to fire only on --go, so a dry run said "expected cost $0.32"
     about a script the renderer would not send. On 2026-09-18 that cost a session two rounds of
     trimming against a limit it could not see. Say them on the dry run too; --go still exits. */
  if (!GO) {
    const blockers = [];
    if (!s.checked) blockers.push("no `checked:` entry in the frontmatter, so --go will refuse to spend");
    if (s.worst > COST_CAP) blockers.push(`worst case $${s.worst.toFixed(2)} is over the $${COST_CAP} guard`);
    if (s.seconds * TOKENS_PER_SECOND > OUTPUT_TOKEN_CEILING * 0.9) blockers.push(`about ${Math.round(s.seconds * TOKENS_PER_SECOND)} audio tokens against the model's ${OUTPUT_TOKEN_CEILING}: it would be cut off. At ${WPM} words a minute the ceiling is about ${Math.floor(OUTPUT_TOKEN_CEILING * 0.9 * WPM / 60 / TOKENS_PER_SECOND)} spoken words, and this script has ${s.words}`);
    if (blockers.length) console.log("\n--go would refuse this script:\n" + blockers.map(b => "  - " + b).join("\n"));
    console.log("\nDry run. Nothing sent, nothing spent. Add --go to render. Request that would be POSTed:");
    console.log(`  POST ${ENDPOINT}`);
    console.log(`  generationConfig: { responseModalities: [AUDIO], maxOutputTokens: ${s.maxTokens}, speechConfig: John=${HOSTS[1].voice}, Haley=${HOSTS[2].voice} }   (no temperature, no seed: either one returns silence, billed)`);
    console.log(`  prompt starts: ${JSON.stringify(s.prompt.slice(0, 120))}...`);
    return;
  }
  if (!s.checked) { console.error("\nRefusing to spend money on an unchecked script: its frontmatter has no `checked:` entry."); process.exit(1); }
  if (s.worst > COST_CAP && !FORCE) { console.error(`\nWorst case $${s.worst.toFixed(2)} is over the $${COST_CAP} guard. Add --force if this is intended.`); process.exit(1); }
  if (s.seconds * TOKENS_PER_SECOND > OUTPUT_TOKEN_CEILING * 0.9 && !FORCE) { console.error(`\nThis script expects about ${Math.round(s.seconds * TOKENS_PER_SECOND)} audio tokens against the model's ${OUTPUT_TOKEN_CEILING}; it would be cut off. Shorten it, or --force.`); process.exit(1); }
  const key = envKey("GEMINI_API_KEY");
  if (!key) { console.error("\nNo GEMINI_API_KEY in the environment or .env.local."); process.exit(1); }

  const body = {
    contents: [{ parts: [{ text: s.prompt }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      maxOutputTokens: s.maxTokens,
      speechConfig: { multiSpeakerVoiceConfig: { speakerVoiceConfigs: [1, 2].map(n => ({ speaker: HOSTS[n].name, voiceConfig: { prebuiltVoiceConfig: { voiceName: HOSTS[n].voice } } })) } },
    },
  };
  fs.mkdirSync(workDir, { recursive: true });
  const n = manifest.attempts.length + 1;
  const file = `attempt-${n}.mp3`;
  const reqFile = path.join(workDir, `attempt-${n}.request.json`);
  fs.writeFileSync(reqFile, JSON.stringify(body));
  console.log(`sending attempt ${n} (one request, no automatic retry; a long render is normal, up to a few minutes)...`);
  const t0 = Date.now();
  const res = spawnSync("curl", ["-s", "--max-time", String(CURL_MAX_SECONDS), "-X", "POST", "-H", "Content-Type: application/json", "-H", `x-goog-api-key: ${key}`, "--data-binary", `@${reqFile}`, ENDPOINT], { maxBuffer: 1 << 30, encoding: "utf8" });
  fs.unlinkSync(reqFile);
  const entry = { n, file, hash, sent: new Date().toISOString(), seconds: Math.round((Date.now() - t0) / 1000) };
  let data;
  try { data = JSON.parse(res.stdout); } catch { data = null; }
  if (res.status !== 0 || !data || data.error) {
    entry.error = data?.error ? JSON.stringify(data.error).slice(0, 300) : `curl exit ${res.status}: ${(res.stderr || res.stdout || "").slice(0, 200)}`;
    manifest.attempts.push(entry); saveManifest(manifest);
    console.error(`\nFAILED: ${entry.error}`);
    console.error("Not re-sending. Check https://aistudio.google.com/usage before rendering again: a request that timed out here may still have completed, and been billed, on Google's side.");
    process.exit(1);
  }
  const part = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
  entry.finish = data.candidates?.[0]?.finishReason;
  entry.audioTokens = data.usageMetadata?.candidatesTokenCount;
  entry.textTokens = data.usageMetadata?.promptTokenCount;
  entry.billed = ((entry.audioTokens || 0) * PRICE_AUDIO_PER_M + (entry.textTokens || 0) * PRICE_TEXT_PER_M) / 1e6;
  if (!part) {
    entry.error = "no audio in the response: " + JSON.stringify(data).slice(0, 200);
    manifest.attempts.push(entry); saveManifest(manifest);
    console.error(`\nFAILED: ${entry.error}`); process.exit(1);
  }
  const rate = +(part.inlineData.mimeType.match(/rate=(\d+)/)?.[1] || 24000);
  const wavPath = path.join(workDir, `attempt-${n}.wav`);
  fs.writeFileSync(wavPath, wav(Buffer.from(part.inlineData.data, "base64"), rate));
  execFileSync("ffmpeg", ["-v", "error", "-y", "-i", wavPath, "-ar", "24000", "-ac", "1", "-c:a", "libmp3lame", "-b:a", "128k", path.join(workDir, file)]);
  fs.unlinkSync(wavPath);
  console.log(`attempt ${n}: finish ${entry.finish}, ${entry.audioTokens} audio tokens, billed about $${entry.billed.toFixed(2)}, ${entry.seconds}s to render`);

  const check = gate(path.join(workDir, file), s);
  Object.assign(entry, check);
  manifest.attempts.push(entry); saveManifest(manifest);
  console.log(`gate: ${check.summary}`);
  /* A gate failure AFTER the render is advisory, and deliberately not an error.
     The money is already spent and the file is already on disk. Exiting 1 here made a good
     episode look like a failed job, and the old message said "to spend again, run render --go
     once more", which is an invitation to pay twice for a file that may be perfectly fine. John
     raised it on 2026-09-18: the cost comes from re-rendering on a flag that did not matter.
     The evidence is that the gate has never rejected anything on the settled pipeline: all eight
     How to Learn Anything episodes passed on the first attempt.
     The real block stays where it belongs, on `upload`, which still refuses without --force. So
     nothing that fails the gate reaches R2 without somebody saying so, and nothing gets rendered
     twice because a number was slightly off. */
  if (check.notes.length) console.log(`measured, not a problem: ${check.notes.join("; ")}.`);
  if (!check.ok) {
    console.warn(`\nBROKEN AUDIO, not a variation: ${check.why.join("; ")}.`);
    console.warn(`The episode is kept at ${show(path.join(workDir, file))} and has been paid for.`);
    console.warn(`LISTEN TO IT FIRST. If it sounds right, it is right: upload it with\n  node scripts/podcast.mjs upload ${lessonArg} --force`);
    console.warn(`Only render again if your own ears say it is actually wrong. That is the step that costs money.`);
  }
  fs.mkdirSync(path.dirname(mp3Path), { recursive: true });
  fs.copyFileSync(path.join(workDir, file), mp3Path);
  console.log(`\nwrote ${show(mp3Path)}. Listen before uploading.`);
  profile(mp3Path);
}

function wav(pcm, rate = 24000) {
  const h = Buffer.alloc(44);
  h.write("RIFF", 0); h.writeUInt32LE(36 + pcm.length, 4); h.write("WAVE", 8);
  h.write("fmt ", 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(rate, 24); h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34);
  h.write("data", 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

/* ---------- the gate ---------- */
function gate(file, s) {
  const a = analyse(file);
  const open = analyse(file, 0, 6);
  const ref = loadHosts();
  /* Only audio Google got wrong fails: silence, or a length wildly out of step with the script.
     Everything below that is measured, printed, and decides nothing. Cut back from seven failing
     checks on 2026-09-18 on John's instruction. He had listened to every episode the settled
     pipeline produced and they were fine; the fine-grained thresholds were flagging variances that
     did not matter and inviting a session to spend $0.22 rendering the same thing again. The one
     guard that stayed is on the script side, where it costs nothing: an S1 opening is refused
     before any money is sent. */
  const why = [], notes = [];
  const ratio0 = a.speaking / s.seconds;
  if (a.level < SILENCE_FLOOR || a.speaking < 5) why.push(`${a.speaking.toFixed(0)}s of audible speech at ${a.level.toFixed(1)} dBFS in a ${a.seconds.toFixed(0)}s file: silence, not an episode`);
  else if (ratio0 < SANE_MIN) why.push(`${a.speaking.toFixed(0)}s of speech against about ${s.seconds.toFixed(0)}s expected for ${s.words} words: truncated, not a variation`);
  else if (ratio0 > SANE_MAX) why.push(`${a.speaking.toFixed(0)}s of speech against about ${s.seconds.toFixed(0)}s expected for ${s.words} words: a runaway, not a variation`);

  if (open.voiced >= 20 && open.high < open.low) notes.push(`the first six seconds read as John's band rather than Haley's`);
  if (a.level < LEVEL_FLOOR) notes.push(`level ${a.level.toFixed(1)} dBFS is on the quiet side`);
  if (a.seconds > 120) {
    const first = analyse(file, 0, 60).level, last = analyse(file, Math.max(0, a.spoken - 60), 60).level;
    if (first - last > LEVEL_SPREAD) notes.push(`the last minute is ${(first - last).toFixed(1)} dB under the first`);
  }
  if (a.low < 0.15) notes.push(`John's band is thin (${(a.low * 100).toFixed(0)}%)`);
  if (a.high < 0.15) notes.push(`Haley's band is thin (${(a.high * 100).toFixed(0)}%)`);

  // Within-episode drift: each host's median in the last third of the SPEECH against the first
  // third. It measures a.spoken, the span up to the last audible frame, not the file duration, so
  // trailing silence cannot drag the window. The figure goes in the summary line: a threshold whose
  // number nobody can see is a threshold nobody can calibrate, and the first version of this check
  // was set from an ad-hoc script that measured a different window than the gate did.
  const drift = {};
  if (a.spoken > 180) {
    const t = a.spoken / 3;
    const first = analyse(file, 0, t), last = analyse(file, 2 * t, t);
    for (const [host, name] of [["john", "John"], ["haley", "Haley"]]) {
      if (first[host].frames < MATCH_MIN_FRAMES || last[host].frames < MATCH_MIN_FRAMES) continue;
      drift[host] = { d: Math.abs(Math.log(last[host].med / first[host].med)), from: first[host].med, to: last[host].med };
      if (drift[host].d > DRIFT_MAX) notes.push(`${name} drifts ${(drift[host].d * 100).toFixed(1)}% across the episode (${first[host].med.toFixed(0)} Hz in the first third, ${last[host].med.toFixed(0)} in the last)`);
    }
  }
  const match = {};
  if (ref) for (const [host, name] of [["john", "John"], ["haley", "Haley"]]) {
    if (a[host].frames < MATCH_MIN_FRAMES) continue;
    match[host] = Math.abs(Math.log(a[host].med / ref[host].med));
    if (match[host] > MATCH_PITCH) notes.push(`${name} is ${(match[host] * 100).toFixed(1)}% off the reference pitch (${a[host].med.toFixed(0)} vs ${ref[host].med.toFixed(0)} Hz), which is a different voice, not a variation`);
  }
  const m = h => match[h] !== undefined ? `${(match[h] * 100).toFixed(1)}%` : "n/a";
  const dr = h => drift[h] ? `${(drift[h].d * 100).toFixed(1)}% (${drift[h].from.toFixed(0)}->${drift[h].to.toFixed(0)} Hz)` : "n/a";
  const summary = `${a.level.toFixed(1)} dBFS, John ${(a.low * 100).toFixed(0)}% at ${a.john.med.toFixed(0)} Hz, Haley ${(a.high * 100).toFixed(0)}% at ${a.haley.med.toFixed(0)} Hz, ${a.speaking.toFixed(0)}s of speech in ${a.seconds.toFixed(0)}s, opening ${open.high >= open.low ? "Haley" : "JOHN"}`
    + `; drift across the episode John ${dr("john")} Haley ${dr("haley")}`
    + (ref ? `; off reference John ${m("john")} Haley ${m("haley")}` : "");
  return { ok: !why.length, why, notes, passed: !why.length, level: a.level, low: a.low, high: a.high, seconds: a.seconds, speaking: a.speaking, john: a.john, haley: a.haley, summary };
}

// Decodes to mono 16 kHz and measures: mean level, the share of voiced frames in each host's pitch
// band (autocorrelation, with an octave check so a female voice is not counted as a male one),
// each host's median pitch, and how long the speech runs.
function analyse(file, start = 0, dur = 0) {
  const sr = 16000;
  const argsIn = ["-v", "quiet", ...(dur ? ["-ss", String(start), "-t", String(dur)] : []), "-i", file, "-f", "f32le", "-ac", "1", "-ar", String(sr), "-"];
  const raw = execFileSync("ffmpeg", argsIn, { maxBuffer: 1 << 28 });
  const x = new Float32Array(raw.buffer, raw.byteOffset, Math.floor(raw.length / 4));
  const w = 0.04 * sr, hop = 0.02 * sr;
  const lo = [], hi = []; let voiced = 0, sumSq = 0, loudFrames = 0, frames = 0, lastLoud = 0;
  for (let i = 0; i + w < x.length; i += hop) {
    frames++;
    let e = 0; for (let k = 0; k < w; k++) e += x[i + k] * x[i + k];
    sumSq += e; const rms = Math.sqrt(e / w);
    if (rms < 0.01) continue;
    loudFrames++; lastLoud = i;
    if (rms < 0.02) continue;
    let mean = 0; for (let k = 0; k < w; k++) mean += x[i + k]; mean /= w;
    let r0 = 0; for (let k = 0; k < w; k++) { const v = x[i + k] - mean; r0 += v * v; }
    if (r0 <= 0) continue;
    const corr = lag => { let s = 0; for (let k = 0; k + lag < w; k++) s += (x[i + k] - mean) * (x[i + k + lag] - mean); return s / r0; };
    let best = 0, bestLag = 0;
    for (let lag = Math.floor(sr / 300); lag < Math.floor(sr / 70); lag++) { const r = corr(lag); if (r > best) { best = r; bestLag = lag; } }
    if (!(best > 0.35 && bestLag)) continue;
    voiced++;
    let p = sr / bestLag;
    if (p < 140 && corr(Math.round(bestLag / 2)) >= best * 0.9) p *= 2;   // octave error: it is really the higher voice
    if (p < 140) lo.push(p); else if (p > 165) hi.push(p);
  }
  const level = frames ? 20 * Math.log10(Math.sqrt(sumSq / (frames * w)) + 1e-9) : -99;
  const med = a => { a.sort((p, q) => p - q); return a.length ? a[a.length >> 1] : 0; };
  return {
    level, voiced, low: voiced ? lo.length / voiced : 0, high: voiced ? hi.length / voiced : 0,
    seconds: x.length / sr, spoken: (lastLoud + w) / sr, speaking: loudFrames * hop / sr,
    john: { med: med(lo), frames: lo.length }, haley: { med: med(hi), frames: hi.length },
  };
}
function loadHosts() { try { return JSON.parse(fs.readFileSync(HOSTS_FILE, "utf8")); } catch { return null; } }

/* ---------- profile ---------- */
function profile(file) {
  let dur;
  try { dur = parseFloat(execFileSync("ffprobe", ["-v", "quiet", "-show_entries", "format=duration", "-of", "csv=p=0", file]).toString()); }
  catch { console.log("profile skipped: ffprobe is not on the path"); return; }
  const ref = loadHosts();
  console.log("profile (per 30 s): level dBFS, share of voiced frames and median pitch per host" + (ref ? ", and distance from the reference" : ""));
  for (let s = 0; s < dur; s += 30) {
    const a = analyse(file, s, Math.min(30, dur - s));
    const h = (fp, r) => fp.frames < MATCH_MIN_FRAMES ? "   n/a      " : `${String(fp.med.toFixed(0)).padStart(4)} Hz` + (ref ? ` ${(Math.abs(Math.log(fp.med / r.med)) * 100).toFixed(1).padStart(4)}%` : "");
    console.log(`  ${String(s).padStart(3)}s  ${a.level.toFixed(1).padStart(6)}  John ${String(Math.round(a.low * 100)).padStart(3)}% ${h(a.john, ref?.john)}  Haley ${String(Math.round(a.high * 100)).padStart(3)}% ${h(a.haley, ref?.haley)}${a.voiced < 50 ? "  (little speech)" : ""}`);
  }
}

/* ---------- gate a file without uploading it ---------- */
// Exists so the gate itself can be tested against known-good and known-bad audio. A gate nobody
// can run on demand is a gate nobody checks.
function gateOnly() {
  const fileArg = args.find(a => a.startsWith("--file="))?.split("=")[1];
  const file = fileArg ? path.resolve(fileArg) : mp3Path;
  if (!fs.existsSync(file)) { console.error(`No MP3 at ${show(file)}.`); process.exit(1); }
  const check = gate(file, readScript());
  console.log(`${show(file)}\n  ${check.summary}`);
  console.log(check.ok ? "  OK" : `  BROKEN: ${check.why.join("; ")}`);
  if (check.notes.length) console.log(`  measured, not a problem: ${check.notes.join("; ")}`);
  if (!check.ok) process.exit(1);
}

/* ---------- reference ---------- */
function reference() {
  const fileArg = args.find(a => a.startsWith("--file="))?.split("=")[1];
  const file = fileArg ? path.resolve(fileArg) : mp3Path;
  if (!fs.existsSync(file)) { console.error(`No MP3 at ${show(file)}. Render first, or pass --file=<mp3>.`); process.exit(1); }
  const a = analyse(file);
  if (a.john.frames < MATCH_MIN_FRAMES || a.haley.frames < MATCH_MIN_FRAMES) { console.error(`Both hosts need to speak in the reference; John ${a.john.frames} frames, Haley ${a.haley.frames}.`); process.exit(1); }
  if (fs.existsSync(HOSTS_FILE) && !FORCE) { console.error(`${show(HOSTS_FILE)} exists. Resetting it means nothing rendered so far is known to match; ask John, then add --force.`); process.exit(1); }
  const out = { set: new Date().toISOString().slice(0, 10), engine: MODEL, from: show(file), john: a.john, haley: a.haley };
  fs.writeFileSync(HOSTS_FILE, JSON.stringify(out, null, 2) + "\n");
  console.log(`wrote ${show(HOSTS_FILE)}: John ${a.john.med.toFixed(0)} Hz, Haley ${a.haley.med.toFixed(0)} Hz, from ${show(file)}`);
}

/* ---------- upload to R2 ---------- */
async function upload() {
  if (!fs.existsSync(mp3Path)) { console.error(`No MP3 at ${show(mp3Path)}. Render first.`); process.exit(1); }
  // Re-run the gate on the file about to be published. It costs nothing and it is the only thing
  // standing between R2 and a stale MP3: audio-out/ holds renders from retired engines, and on
  // 2026-09-18 `plan` cheerfully offered to upload a fal-era file from 8 September for a lesson
  // whose new render had just failed. A stamped URL serving the wrong audio is worse than no audio.
  const s = readScript();
  const check = gate(mp3Path, s);
  console.log(`gate on ${show(mp3Path)}: ${check.summary}`);
  if (!check.ok && !FORCE) {
    console.error(`\nRefusing to upload: ${check.why.join("; ")}.`);
    console.error("Render it again, or add --force if you have listened to this exact file and want it live.");
    process.exit(1);
  }
  if (!check.ok) console.log("--force: uploading a file that fails the gate, on the explicit say-so of whoever ran this.");
  console.log(`uploading ${show(mp3Path)} to ${BUCKET}/${r2Key} ...`);
  execFileSync("npx", ["--yes", "wrangler@4", "r2", "object", "put", `${BUCKET}/${r2Key}`, "--file", mp3Path, "--content-type", "audio/mpeg", "--remote"], { stdio: "inherit", cwd: ROOT });
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
    const inner = /^minutes:.*$/m.test(fm[1])
      ? fm[1].replace(/^(minutes:.*)$/m, `$1\n${line}`)
      : `${line}\n${fm[1]}`;
    out = src.replace(fm[0], `---\n${inner}\n---`);
  }
  fs.writeFileSync(lessonPath, out);
  console.log(`stamped ${show(lessonPath)} with ${line}\nRun npm run validate, and npm run build if the course is published.`);
}

/* ---------- plan ---------- */
async function plan() {
  const y = v => v ? "yes" : "no";
  const script = fs.existsSync(scriptPath);
  let checked = false, opensRight = false;
  if (script) {
    const raw = fs.readFileSync(scriptPath, "utf8");
    checked = /^checked:/m.test(raw.match(/^---\n([\s\S]*?)\n---\n/)?.[1] || "");
    opensRight = /^S2:/m.test(raw.replace(/^---[\s\S]*?\n---\n/, "").trimStart().split("\n")[0]);
  }
  const manifest = loadManifest();
  const mp3 = fs.existsSync(mp3Path);
  const stamped = fs.readFileSync(lessonPath, "utf8").includes(`audio: ${publicUrl}`);
  let live = false;
  try { live = (await fetch(publicUrl, { method: "HEAD" })).ok; } catch { /* offline is fine */ }
  console.log(`${school}/${course}/${id}`);
  console.log(`  script  ${show(scriptPath)}  ${y(script)}${script ? ` (fact-checked: ${y(checked)}, Haley opens: ${y(opensRight)})` : ""}`);
  console.log(`  render  attempts ${manifest.attempts.length}, spent about $${manifest.attempts.reduce((n, a) => n + (a.billed || 0), 0).toFixed(2)}, passed: ${y(manifest.attempts.some(a => a.passed))}`);
  console.log(`  mp3     ${show(mp3Path)}  ${y(mp3)}${mp3 && !manifest.attempts.some(a => a.passed) ? "  (no passing render: this file predates the current pipeline, do not upload it)" : ""}`);
  console.log(`  R2      ${publicUrl}  ${live ? "live" : "not there"}`);
  console.log(`  lesson  audio: stamped  ${y(stamped)}`);
  const passed = manifest.attempts.some(a => a.passed);
  const next = !script ? `/make-podcast ${show(lessonPath)}`
    : !checked ? "fact-check the script and record the verdict in its `checked:` frontmatter"
    : !opensRight ? "swap the intro so Haley (S2) speaks first"
    : !passed ? `node scripts/podcast.mjs render ${show(lessonPath)} --go`
    : !mp3 ? `node scripts/podcast.mjs render ${show(lessonPath)} --go`
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
  if (cmd === "reference") reference();
  if (cmd === "gate") gateOnly();
  if (cmd === "profile") { if (!fs.existsSync(mp3Path)) throw new Error(`No MP3 at ${show(mp3Path)}`); profile(mp3Path); }
  if (cmd === "all") { await render(); if (GO) { await upload(); stamp(); } }
} catch (e) {
  console.error(`\nFAILED: ${e.message}`);
  process.exit(1);
}
