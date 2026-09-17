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
//   node scripts/podcast.mjs profile <lesson.md>         per-30-second level and voice report on the MP3
//
// Flags: --go spends money; --force overrides the cost cap and stitches an episode whose chunk
// failed every attempt; --fresh throws away the chunk work directory and pays for every chunk again.
//
// Paths are all derived from the lesson path, so there is one argument everywhere:
//   lesson   courses/<school>/<course>/lessons/<id>.md
//   script   courses/<school>/<course>/podcast/<id>.script.md      (in git: it is content)
//   mp3      audio-out/<school>/<course>/<id>.mp3                  (git-ignored)
//   chunks   audio-out/work/<school>/<course>/<id>/                 (git-ignored; every attempt kept)
//   R2       foval-audio/<school>/<course>/<id>.mp3
//   public   https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/<school>/<course>/<id>.mp3
//
// Guards, all deliberate:
//   - render --go refuses a script whose frontmatter has no `checked:` entry, because the
//     fact-check happens before money is spent, never after.
//   - render --go refuses an estimate over $2 without --force. A normal episode is ~$0.30.
//   - FAL_KEY is read from the environment, falling back to .env.local, which is git-ignored.
//
// The engine is Gemini 3.1 Flash TTS on fal, multi-speaker. It replaced VibeVoice 7B on
// 2026-09-08: John listened to both and the Gemini episodes are plainly better, so every
// episode was re-rendered from the same scripts. Billing is per character in rather than
// per minute out, $0.05 per 1,000 characters, which comes to about $0.50 an episode.
//
// The voices are the institute's hosts: S1 is John (Charon) and S2 is Haley (Aoede), and this is
// SETTLED. They were briefly changed to Iapetus and Erinome on 2026-09-09, the only pair of
// Google's 30 prebuilt voices whose published characteristic is simply "Clear", on the reasoning
// that a characterful descriptor gives a generative model something to act. John reversed it the
// same day: the twelve live episodes are Charon and Aoede, and matching them matters more than a
// theory about descriptors. Do not change the hosts without asking him.
//
// TEMPERATURE is 0.25 (fal's default is 1). Set on 2026-09-09 when John first noticed the hosts
// drifting; it helped at the margins and did not fix the thing he hears, which is below.
//
// WHY EPISODES ARE RENDERED IN CHUNKS. Until 2026-09-17 each episode was one call carrying the
// whole script, 6,000 to 8,300 characters. Profiling the fourteen episodes that existed, every one
// showed the same shape: the level decays steadily from the first minute to the last (Personal
// Finance 2 runs from an RMS of 0.06 at the start to 0.003 at the end) and the male band drops out
// with it, so John (Charon) ends the episode whispering or replaced. Several ended in two minutes
// of near silence. Google's own TTS docs say consistency drifts on outputs longer than a few
// minutes and tell you to split the transcript; production reports put the practical ceiling for
// two-speaker calls at about 3,000 characters. So: the script is cut at turn boundaries into
// chunks of about CHUNK_TARGET characters, a minute or so of audio each, every chunk is its own
// call with the same two voices, and the chunks are level-matched and joined with ffmpeg. Billing
// is per character, so the episode costs the same as before.
//
// THE GATE, per chunk, before any stitching. Each chunk has to pass three checks or it is rendered
// again on its own (about six cents), never the whole episode:
//   level    mean volume no quieter than LEVEL_FLOOR dBFS, and within LEVEL_SPREAD dB of the median
//            chunk, which is what catches a host fading to a whisper;
//   voices   when both hosts speak in the chunk, both the low band (Charon) and the high band
//            (Aoede) must be populated; a one-host chunk must sit mostly in that host's band;
//   length   the spoken duration must sit between LENGTH_MIN and LENGTH_MAX of what the word count
//            predicts, which catches truncation and invented lines.
// A chunk that fails RETRIES times is reported and the render stops, so a bad chunk is never
// uploaded and never silently accepted. --force renders the episode with the best attempt.
//
// NOTHING IS PAID FOR TWICE. Every attempt is kept under audio-out/work/<school>/<course>/<id>/
// with a manifest recording the prompt hash, the check results and which attempt passed. A rerun,
// a crash, or a second `render` reuses every chunk that already passed and only sends the ones
// that are missing or failed. --fresh discards the work directory and pays for everything again;
// use it only when the script text has changed, and the manifest notices that anyway because the
// prompt hash changes.
//
// WHAT THIS DOES NOT DO. Gemini has no seed and takes no reference audio, so two chunks are not
// guaranteed to be the same rendition of Charon. What chunking buys is that every minute starts
// from the fresh state the model produces at the top of a call, which is the state John listened
// to and approved, instead of minute six of a drift. The alternatives with a real lock
// (ElevenLabs text-to-dialogue with a seed, MiniMax voice-clone) are priced in DECISIONS.md
// section 7. Do not switch engines or hosts without asking John.

import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUCKET = "foval-audio";
const PUBLIC_BASE = "https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev";
const ENDPOINT = "https://queue.fal.run/fal-ai/gemini-3.1-flash-tts";
const SPEAKERS = [
  { speaker_id: "John", voice: "Charon" },
  { speaker_id: "Haley", voice: "Aoede" },
];
const STYLE = "Unhurried and conversational, thinking aloud rather than reading aloud. Keep each speaker's voice exactly as configured and consistent from start to finish. Never announcer-bright.";
const TEMPERATURE = 0.25;
const COST_PER_1K_CHARS = 0.05;
const COST_CAP = 2;
const CHUNK_TARGET = 1100;     // characters; about a minute of two-host audio
const CHUNK_MAX = 1700;        // a single long turn may push a chunk past the target, never past this
const CONCURRENCY = 4;         // chunk renders in flight at once
const RETRIES = 3;             // attempts per chunk before giving up
const WPM = 150;               // words a minute, for the length check
const LENGTH_MIN = 0.6, LENGTH_MAX = 1.7;
const LEVEL_FLOOR = -30;       // dBFS mean volume; whispering lands around -40
const LEVEL_SPREAD = 6;        // dB below the median chunk that counts as a fade
const LEVEL_TARGET = -20;      // dBFS mean volume every chunk is gained to before stitching
const GAP_SECONDS = 0.35;      // silence between chunks

const args = process.argv.slice(2);
const cmd = args[0];
const lessonArg = args.find((a, i) => i > 0 && !a.startsWith("--"));
const GO = args.includes("--go");
const FORCE = args.includes("--force");
const FRESH = args.includes("--fresh");

if (!["plan", "render", "upload", "stamp", "all", "profile"].includes(cmd) || !lessonArg) {
  console.error("Usage: node scripts/podcast.mjs <plan|render|upload|stamp|all|profile> <courses/.../lessons/NN-slug.md> [--go] [--force] [--fresh]");
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
const workDir = path.join(ROOT, "audio-out", "work", school, course, id);
const r2Key = `${school}/${course}/${id}.mp3`;
const publicUrl = `${PUBLIC_BASE}/${r2Key}`;
const show = p => path.relative(ROOT, p);

/* ---------- .env.local fallback for FAL_KEY ---------- */
if (!process.env.FAL_KEY) {
  const envFile = path.join(ROOT, ".env.local");
  if (fs.existsSync(envFile)) {
    const m = fs.readFileSync(envFile, "utf8").match(/^FAL_KEY=(.+)$/m);
    if (m) process.env.FAL_KEY = m[1].trim().replace(/^(["'])(.*)\1$/, "$2");   // a quoted value keeps its quotes otherwise
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
  const minutes = words / WPM; // a normal two-host pace
  return { turns, words, minutes, checked };
}

/* ---------- cut the script into chunks at turn boundaries ---------- */
function chunkTurns(turns) {
  const chunks = [];
  let cur = [], size = 0;
  for (const t of turns) {
    const len = t.text.length + 8;
    if (cur.length && (size + len > CHUNK_MAX || size >= CHUNK_TARGET)) { chunks.push(cur); cur = []; size = 0; }
    cur.push(t); size += len;
  }
  if (cur.length) chunks.push(cur);
  return chunks.map((ts, i) => {
    const prompt = ts.map(t => `${SPEAKERS[t.speaker - 1].speaker_id}: ${t.text}`).join("\n");
    const words = ts.reduce((n, t) => n + t.text.split(/\s+/).length, 0);
    const speakers = [...new Set(ts.map(t => t.speaker))];
    const hash = createHash("sha1").update(prompt).digest("hex").slice(0, 12);
    return { i, prompt, words, speakers, hash, chars: prompt.length };
  });
}

/* ---------- render on fal, Gemini 3.1 Flash TTS, one chunk per call ---------- */
async function render() {
  const { turns, words, minutes, checked } = readScript();
  const chunks = chunkTurns(turns);
  const chars = chunks.reduce((n, c) => n + c.chars, 0);
  const cost = (chars / 1000) * COST_PER_1K_CHARS;
  console.log(`${show(scriptPath)}: ${turns.length} turns, ${words} words, about ${minutes.toFixed(1)} minutes`);
  console.log(`estimated cost on Gemini 3.1 Flash TTS: $${cost.toFixed(2)} (${chars} characters in ${chunks.length} chunks)   fact-checked: ${checked ? "yes" : "NO"}`);

  const manifest = loadManifest(chunks);
  const todo = chunks.filter(c => !manifest.chunks[c.i]?.passed);
  const todoCost = (todo.reduce((n, c) => n + c.chars, 0) / 1000) * COST_PER_1K_CHARS;
  if (todo.length < chunks.length) console.log(`${chunks.length - todo.length} of ${chunks.length} chunks already passed in ${show(workDir)}; ${todo.length} to render, about $${todoCost.toFixed(2)}`);

  if (!GO) {
    console.log("\nDry run. Nothing sent, nothing spent. Add --go to render. Chunks:");
    for (const c of chunks) console.log(`  ${String(c.i + 1).padStart(2)}  ${String(c.chars).padStart(5)} chars  ${String(c.words).padStart(4)} words  hosts ${c.speakers.map(n => SPEAKERS[n - 1].speaker_id).join("+")}  ${manifest.chunks[c.i]?.passed ? "passed, will reuse" : "to render"}`);
    console.log(`  POST ${ENDPOINT} per chunk with speakers ${JSON.stringify(SPEAKERS)}, temperature ${TEMPERATURE}`);
    return;
  }
  if (!checked) {
    console.error("\nRefusing to spend money on an unchecked script: its frontmatter has no `checked:` entry.");
    console.error("Fact-check it in a fresh-context subagent first (that is the /make-podcast flow), record the verdict in `checked:`, then rerun.");
    process.exit(1);
  }
  if (cost > COST_CAP && !FORCE) {
    console.error(`\nEstimate $${cost.toFixed(2)} is over the $${COST_CAP} guard. A normal episode is ~$0.40. Add --force if this is intended.`);
    process.exit(1);
  }
  if (todo.length && !process.env.FAL_KEY) { console.error("\nNo FAL_KEY in the environment or .env.local."); process.exit(1); }

  fs.mkdirSync(workDir, { recursive: true });
  // Render the missing chunks, CONCURRENCY at a time, each retried on its own until it passes.
  let spent = 0;
  const queue = [...todo];
  const failures = [];
  async function worker() {
    while (queue.length) {
      const c = queue.shift();
      const entry = manifest.chunks[c.i] ||= { hash: c.hash, attempts: [] };
      for (let attempt = entry.attempts.length + 1; attempt <= RETRIES; attempt++) {
        const file = path.join(workDir, `chunk-${String(c.i + 1).padStart(2, "0")}.attempt-${attempt}.mp3`);
        await renderChunk(c, file);
        spent += (c.chars / 1000) * COST_PER_1K_CHARS;
        const check = checkChunk(file, c);
        entry.attempts.push({ file: path.basename(file), ...check });
        if (check.ok) { entry.passed = path.basename(file); saveManifest(manifest); console.log(`  chunk ${c.i + 1} attempt ${attempt}: ok  (${check.summary})`); break; }
        saveManifest(manifest);
        console.log(`  chunk ${c.i + 1} attempt ${attempt}: FAILED ${check.why.join(", ")}  (${check.summary})`);
      }
      if (!entry.passed) failures.push(c);
    }
  }
  if (todo.length) {
    console.log(`rendering ${todo.length} chunks, ${CONCURRENCY} at a time...`);
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, todo.length) }, worker));
    console.log(`spent about $${spent.toFixed(2)} this run`);
  }

  // The level check is relative to the median chunk, so it is applied again across the whole set
  // now that every chunk exists: a chunk that passed the floor alone can still be the odd one out.
  const levels = chunks.map(c => manifest.chunks[c.i]?.passed ? manifest.chunks[c.i].attempts.find(a => a.file === manifest.chunks[c.i].passed).level : null);
  const median = medianOf(levels.filter(v => v !== null));
  const faded = chunks.filter((c, i) => levels[i] !== null && levels[i] < median - LEVEL_SPREAD);
  for (const c of faded) {
    console.log(`  chunk ${c.i + 1}: passed alone but sits ${(median - levels[c.i]).toFixed(1)} dB under the median chunk; re-rendering`);
    delete manifest.chunks[c.i].passed;
  }
  if (faded.length && !failures.length) {
    saveManifest(manifest);
    queue.push(...faded);
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, faded.length) }, worker));
  }

  if (failures.length) {
    console.error(`\n${failures.length} chunk(s) failed every attempt: ${failures.map(c => c.i + 1).join(", ")}. Attempts and checks are in ${show(path.join(workDir, "manifest.json"))}.`);
    if (!FORCE) { console.error("Not stitching. Listen to the attempts, then rerun render (it reuses the chunks that passed) or add --force to stitch the best attempt of each."); process.exit(1); }
    for (const c of failures) {
      const best = manifest.chunks[c.i].attempts.slice().sort((a, b) => b.score - a.score)[0];
      manifest.chunks[c.i].passed = best.file; manifest.chunks[c.i].forced = true;
    }
    saveManifest(manifest);
  }

  stitch(chunks.map(c => ({ file: path.join(workDir, manifest.chunks[c.i].passed), level: manifest.chunks[c.i].attempts.find(a => a.file === manifest.chunks[c.i].passed).level })));
  const buf = fs.readFileSync(mp3Path);
  console.log(`\nwrote ${show(mp3Path)} (${(buf.length / 1024 / 1024).toFixed(1)} MB, ${chunks.length} chunks). Listen before uploading.`);
  profile(mp3Path);
}

async function renderChunk(c, file) {
  const body = {
    prompt: c.prompt,
    speakers: SPEAKERS,
    style_instructions: STYLE,
    temperature: TEMPERATURE,
    language_code: "English (US)",
    output_format: "mp3",
  };
  const headers = { Authorization: `Key ${process.env.FAL_KEY}`, "Content-Type": "application/json" };
  const res = await fetch(ENDPOINT, { method: "POST", headers, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`fal answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
  let data = await res.json();
  const statusUrl = data.status_url || data.status;
  for (let i = 0; ; i++) {
    await new Promise(r => setTimeout(r, 3000));
    const s = await (await fetch(statusUrl, { headers })).json();
    if (s.status === "COMPLETED") { data = await (await fetch(data.response_url, { headers })).json(); break; }
    if (s.status === "FAILED") throw new Error(`chunk ${c.i + 1}: fal reported FAILED: ` + JSON.stringify(s).slice(0, 300));
    if (i === 200) throw new Error(`chunk ${c.i + 1}: still not done after 10 minutes; check the fal dashboard before re-sending`);
  }
  const url = data?.audio?.url || data?.audio_url || data?.url;
  if (!url) throw new Error(`chunk ${c.i + 1}: no audio in the response: ` + JSON.stringify(data).slice(0, 300));
  fs.writeFileSync(file, Buffer.from(await (await fetch(url)).arrayBuffer()));
}

/* ---------- the manifest: what has been rendered and what passed ---------- */
function manifestPath() { return path.join(workDir, "manifest.json"); }
function loadManifest(chunks) {
  let m = { chunks: {} };
  if (FRESH && fs.existsSync(workDir)) { fs.rmSync(workDir, { recursive: true }); console.log(`--fresh: discarded ${show(workDir)}`); }
  if (fs.existsSync(manifestPath())) {
    try { m = JSON.parse(fs.readFileSync(manifestPath(), "utf8")); } catch { m = { chunks: {} }; }
  }
  // A chunk whose text changed since it was rendered is stale, whatever the manifest says.
  for (const c of chunks) {
    const e = m.chunks[c.i];
    if (e && (e.hash !== c.hash || (e.passed && !fs.existsSync(path.join(workDir, e.passed))))) delete m.chunks[c.i];
  }
  for (const k of Object.keys(m.chunks)) if (Number(k) >= chunks.length) delete m.chunks[k];
  return m;
}
function saveManifest(m) { fs.mkdirSync(workDir, { recursive: true }); fs.writeFileSync(manifestPath(), JSON.stringify(m, null, 2)); }

/* ---------- the per-chunk gate ---------- */
// Decodes the chunk once to mono 16 kHz and measures three things: the mean level, how much of the
// voiced audio sits in each host's pitch band (autocorrelation), and how long the speech runs
// against what the word count predicts. Returns { ok, why, level, low, high, seconds, score }.
function analyse(file, start = 0, dur = 0) {
  const sr = 16000;
  const argsIn = ["-v", "quiet", ...(dur ? ["-ss", String(start), "-t", String(dur)] : []), "-i", file, "-f", "f32le", "-ac", "1", "-ar", String(sr), "-"];
  const raw = execFileSync("ffmpeg", argsIn, { maxBuffer: 1 << 28 });
  const x = new Float32Array(raw.buffer, raw.byteOffset, Math.floor(raw.length / 4));
  const w = 0.04 * sr, hop = 0.02 * sr;
  const f0 = []; let sumSq = 0, loudFrames = 0, frames = 0, lastLoud = 0;
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
    let best = 0, bestLag = 0;
    for (let lag = Math.floor(sr / 300); lag < Math.floor(sr / 70); lag++) {
      let s = 0; for (let k = 0; k + lag < w; k++) s += (x[i + k] - mean) * (x[i + k + lag] - mean);
      const r = s / r0; if (r > best) { best = r; bestLag = lag; }
    }
    if (best > 0.35 && bestLag) f0.push(sr / bestLag);
  }
  const level = frames ? 20 * Math.log10(Math.sqrt(sumSq / (frames * w)) + 1e-9) : -99;
  const low = f0.length ? f0.filter(v => v < 140).length / f0.length : 0;
  const high = f0.length ? f0.filter(v => v > 165).length / f0.length : 0;
  const seconds = x.length / sr, spoken = (lastLoud + w) / sr, speaking = loudFrames * hop / sr;
  return { level, low, high, seconds, spoken, speaking, voiced: f0.length };
}
function checkChunk(file, c) {
  const a = analyse(file);
  const expected = c.words / WPM * 60;
  const ratio = a.speaking / expected;
  const why = [];
  if (a.level < LEVEL_FLOOR) why.push(`level ${a.level.toFixed(1)} dBFS under the ${LEVEL_FLOOR} floor`);
  if (c.speakers.length === 2) {
    if (a.low < 0.15) why.push(`John's band nearly empty (${(a.low * 100).toFixed(0)}%)`);
    if (a.high < 0.15) why.push(`Haley's band nearly empty (${(a.high * 100).toFixed(0)}%)`);
  } else {
    const share = c.speakers[0] === 1 ? a.low : a.high;
    if (share < 0.4) why.push(`${SPEAKERS[c.speakers[0] - 1].speaker_id} alone but only ${(share * 100).toFixed(0)}% in that band`);
  }
  if (ratio < LENGTH_MIN) why.push(`speech ${a.speaking.toFixed(0)}s is short for ${c.words} words (expected about ${expected.toFixed(0)}s)`);
  if (ratio > LENGTH_MAX) why.push(`speech ${a.speaking.toFixed(0)}s is long for ${c.words} words (expected about ${expected.toFixed(0)}s)`);
  const score = -why.length * 10 + a.level / 10 + Math.min(a.low, a.high);
  const summary = `${a.level.toFixed(1)} dBFS, low ${(a.low * 100).toFixed(0)}% high ${(a.high * 100).toFixed(0)}%, ${a.speaking.toFixed(0)}s of speech in ${a.seconds.toFixed(0)}s`;
  return { ok: !why.length, why, level: a.level, low: a.low, high: a.high, seconds: a.seconds, spoken: a.spoken, speaking: a.speaking, score, summary };
}
function medianOf(v) { const s = v.slice().sort((a, b) => a - b); return s.length ? s[Math.floor(s.length / 2)] : 0; }

/* ---------- stitch: gain-match every chunk to LEVEL_TARGET, trim tails, join with a short gap ---------- */
function stitch(parts) {
  const inputs = [], filters = [];
  parts.forEach((p, i) => {
    inputs.push("-i", p.file);
    const gain = (LEVEL_TARGET - p.level).toFixed(2);
    // trim trailing silence, gain to target, then pad a gap after the chunk
    filters.push(`[${i}:a]aformat=sample_rates=24000:channel_layouts=mono,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.25,areverse,volume=${gain}dB,apad=pad_dur=${GAP_SECONDS}[a${i}]`);
  });
  const concat = parts.map((_, i) => `[a${i}]`).join("") + `concat=n=${parts.length}:v=0:a=1,alimiter=limit=0.95[out]`;
  fs.mkdirSync(path.dirname(mp3Path), { recursive: true });
  execFileSync("ffmpeg", ["-v", "error", "-y", ...inputs, "-filter_complex", filters.join(";") + ";" + concat, "-map", "[out]", "-c:a", "libmp3lame", "-b:a", "128k", mp3Path], { stdio: "inherit" });
}

/* ---------- profile: the per-30-second report on a finished file ---------- */
// The same measurement as the gate, printed per half minute across the whole episode. A good
// episode holds a flat level and both bands from the first line to the last; the old single-call
// renders fell 20 dB and lost the low band by the end, which is what this exists to show.
function profile(file) {
  let dur;
  try { dur = parseFloat(execFileSync("ffprobe", ["-v", "quiet", "-show_entries", "format=duration", "-of", "csv=p=0", file]).toString()); }
  catch { console.log("profile skipped: ffprobe is not on the path"); return; }
  console.log("profile (per 30 s): level dBFS, share of voiced frames in John's band and Haley's band");
  for (let s = 0; s < dur; s += 30) {
    const a = analyse(file, s, Math.min(30, dur - s));
    console.log(`  ${String(s).padStart(3)}s  ${a.level.toFixed(1).padStart(6)}  John ${String(Math.round(a.low * 100)).padStart(3)}%  Haley ${String(Math.round(a.high * 100)).padStart(3)}%${a.voiced < 50 ? "  (little speech)" : ""}`);
  }
}

/* ---------- upload to R2 ---------- */
async function upload() {
  if (!fs.existsSync(mp3Path)) { console.error(`No MP3 at ${show(mp3Path)}. Render first.`); process.exit(1); }

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
  if (cmd === "profile") { if (!fs.existsSync(mp3Path)) throw new Error(`No MP3 at ${show(mp3Path)}`); profile(mp3Path); }
  if (cmd === "all") { await render(); if (GO) { await upload(); stamp(); } }
} catch (e) {
  console.error(`\nFAILED: ${e.message}`);
  process.exit(1);
}
