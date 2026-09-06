// Render one two-host script on up to three voice engines, so John can pick by ear.
//
//   node scripts/podcast-compare.mjs scripts/podcast/samples/how-to-learn-anything-03.script.md
//       dry run: parses, estimates cost, prints the request it would send, spends nothing
//   node scripts/podcast-compare.mjs <script.md> --go
//       actually renders, into audio-samples/
//   ... --only vibevoice        just one engine
//
// Keys, whichever you have. An engine with no key is skipped, not an error.
//   FAL_KEY              fal.ai, for VibeVoice          about $0.04 a generated minute
//   GEMINI_API_KEY       Google AI Studio               about $0.012 per 1k characters
//   ELEVENLABS_API_KEY   ElevenLabs text to dialogue    about $0.000184 a character
//
// This cannot be run from a Claude Code web session: the egress policy there blocks
// fal.run and api.elevenlabs.io. Run it on a machine with ordinary internet.
//
// Request shapes verified against the live docs on 2026-09-06 (fal model page, ElevenLabs
// API reference, Google AI TTS docs). Two things the first draft had wrong, now fixed:
// ElevenLabs returns raw MP3 bytes rather than JSON, and caps each request at 2,000
// characters total, so long scripts are sent in batches and the MP3s concatenated.
// Nothing is spent until --go.

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith("--"));
const GO = args.includes("--go");
const only = args.includes("--only") ? args[args.indexOf("--only") + 1] : null;
const OUT = path.resolve("audio-samples");

if (!file) { console.error("Usage: node scripts/podcast-compare.mjs <script.md> [--go] [--only <engine>]"); process.exit(1); }

/* ---------- parse ---------- */
const raw = fs.readFileSync(file, "utf8");
const body = raw.replace(/^---[\s\S]*?\n---\n/, "");
const turns = [...body.matchAll(/^S([12]):\s*([\s\S]*?)(?=\n\s*\nS[12]:|\s*$)/gm)]
  .map(m => ({ speaker: Number(m[1]), text: m[2].replace(/\s+/g, " ").trim() }))
  .filter(t => t.text);
if (!turns.length) { console.error("No S1:/S2: turns found in that file."); process.exit(1); }

const chars = turns.reduce((n, t) => n + t.text.length, 0);
const words = turns.reduce((n, t) => n + t.text.split(/\s+/).length, 0);
const minutes = words / 150;   // 150 words a minute is a normal two-host pace

/* ---------- engines ---------- */
// Cost per engine for THIS script, so the estimate is about the thing being rendered.
const ENGINES = {
  vibevoice: {
    key: "FAL_KEY",
    label: "VibeVoice 7B on fal.ai",
    cost: () => minutes * 0.04,
    note: "billed per generated minute, rounded to the nearest 15 seconds",
  },
  gemini: {
    key: "GEMINI_API_KEY",
    label: "Gemini 3.1 Flash TTS, two speakers",
    cost: () => (chars / 1000) * 0.012,
    note: "billed per character in, audio out",
  },
  elevenlabs: {
    key: "ELEVENLABS_API_KEY",
    label: "ElevenLabs text to dialogue",
    cost: () => chars * 0.000184,
    note: "billed per character",
  },
};

/* ---------- request shapes: THE PART TO VERIFY ---------- */
const REQUESTS = {
  // fal queues the job and returns a status url to poll.
  vibevoice: () => ({
    url: "https://queue.fal.run/fal-ai/vibevoice/7b",
    headers: { Authorization: `Key ${process.env.FAL_KEY}`, "Content-Type": "application/json" },
    body: {
      // The institute's voices, chosen by John by ear on 2026-09-06: S1 is John (Carter),
      // S2 is Haley (Alice). Change these only if John changes the hosts.
      script: turns.map(t => `Speaker ${t.speaker}: ${t.text}`).join("\n"),
      speakers: [{ preset: "Carter [EN]" }, { preset: "Alice [EN]" }],
    },
    queued: true,
  }),
  gemini: () => ({
    url: `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_TTS_MODEL || "gemini-3.1-flash-tts-preview"}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    headers: { "Content-Type": "application/json" },
    body: {
      contents: [{ parts: [{ text: turns.map(t => `Speaker${t.speaker}: ${t.text}`).join("\n") }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          multiSpeakerVoiceConfig: {
            speakerVoiceConfigs: [
              { speaker: "Speaker1", voiceConfig: { prebuiltVoiceConfig: { voiceName: "Charon" } } },
              { speaker: "Speaker2", voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
            ],
          },
        },
      },
    },
    // Gemini returns base64 PCM, which needs a WAV header before anything will play it.
    pcm: true,
  }),
  // ElevenLabs caps each text-to-dialogue request at 2,000 characters across all inputs,
  // so the turns are sent in batches and the returned MP3s concatenated. Same-format MP3
  // streams concatenate cleanly enough for a listening comparison.
  elevenlabs: () => {
    const voice = t => t.speaker === 1 ? (process.env.ELEVEN_VOICE_1 || "JBFqnCBsd6RMkjVDRZzb")
                                       : (process.env.ELEVEN_VOICE_2 || "EXAVITQu4vr4xnSDxMaL");
    const batches = [];
    let batch = [], size = 0;
    for (const t of turns) {
      if (size + t.text.length > 1900 && batch.length) { batches.push(batch); batch = []; size = 0; }
      batch.push({ text: t.text, voice_id: voice(t) }); size += t.text.length;
    }
    if (batch.length) batches.push(batch);
    return {
      url: "https://api.elevenlabs.io/v1/text-to-dialogue?output_format=mp3_44100_128",
      headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY, "Content-Type": "application/json" },
      bodies: batches.map(inputs => ({ inputs, model_id: "eleven_v3" })),
      body: { inputs: batches[0], model_id: "eleven_v3", batches: batches.length }, // for the dry-run printout
      binary: true,
    };
  },
};

/* ---------- a WAV header, for the one engine that returns raw samples ---------- */
function wav(pcm, rate = 24000, channels = 1, bits = 16) {
  const h = Buffer.alloc(44), byteRate = rate * channels * bits / 8;
  h.write("RIFF", 0); h.writeUInt32LE(36 + pcm.length, 4); h.write("WAVE", 8);
  h.write("fmt ", 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20);
  h.writeUInt16LE(channels, 22); h.writeUInt32LE(rate, 24); h.writeUInt32LE(byteRate, 28);
  h.writeUInt16LE(channels * bits / 8, 32); h.writeUInt16LE(bits, 34);
  h.write("data", 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

async function render(name) {
  const req = REQUESTS[name]();

  if (req.binary) {
    // One or more requests, each answering with raw MP3 bytes; concatenate in order.
    const parts = [];
    for (const body of req.bodies) {
      const r = await fetch(req.url, { method: "POST", headers: req.headers, body: JSON.stringify(body) });
      if (!r.ok) throw new Error(`${r.status} ${(await r.text()).slice(0, 300)}`);
      parts.push(Buffer.from(await r.arrayBuffer()));
      process.stdout.write(".");
    }
    return { ext: "mp3", buf: Buffer.concat(parts) };
  }

  let res = await fetch(req.url, { method: "POST", headers: req.headers, body: JSON.stringify(req.body) });
  if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 300)}`);
  let data = await res.json();

  if (req.queued) {
    // Poll until the job finishes. fal returns status_url and response_url.
    const statusUrl = data.status_url || data.status;
    // Cold-starting the 7B model plus long audio can take well over ten minutes;
    // the first real render sat IN_QUEUE for six and IN_PROGRESS for seven more.
    for (let i = 0; i < 240; i++) {
      await new Promise(r => setTimeout(r, 5000));
      const s = await (await fetch(statusUrl, { headers: req.headers })).json();
      if (s.status === "COMPLETED") { data = await (await fetch(data.response_url, { headers: req.headers })).json(); break; }
      if (s.status === "FAILED") throw new Error("fal reported FAILED: " + JSON.stringify(s).slice(0, 300));
      process.stdout.write(".");
    }
  }

  if (req.pcm) {
    const b64 = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!b64) throw new Error("no audio in the response: " + JSON.stringify(data).slice(0, 300));
    return { ext: "wav", buf: wav(Buffer.from(b64, "base64")) };
  }
  const url = data?.audio?.url || data?.audio_url || data?.url;
  if (url) return { ext: path.extname(new URL(url).pathname).slice(1) || "mp3", buf: Buffer.from(await (await fetch(url)).arrayBuffer()) };
  throw new Error("could not find the audio in the response: " + JSON.stringify(data).slice(0, 300));
}

/* ---------- go ---------- */
const picked = Object.keys(ENGINES).filter(n => !only || n === only);
const ready = picked.filter(n => process.env[ENGINES[n].key]);
const missing = picked.filter(n => !process.env[ENGINES[n].key]);

console.log(`${path.basename(file)}: ${turns.length} turns, ${words} words, ${chars} characters, about ${minutes.toFixed(1)} minutes of audio\n`);
let total = 0;
for (const n of picked) {
  const c = ENGINES[n].cost(); total += ready.includes(n) ? c : 0;
  console.log(`  ${ENGINES[n].label.padEnd(34)} $${c.toFixed(3).padStart(6)}   ${ready.includes(n) ? "ready" : `no ${ENGINES[n].key}, skipping`}`);
}
console.log(`\n  estimated spend this run: $${total.toFixed(2)}`);
if (missing.length) console.log(`  set ${missing.map(n => ENGINES[n].key).join(", ")} to include the rest`);

if (!GO) {
  console.log("\nDry run. Nothing was sent and nothing was spent. Add --go to render.");
  console.log("Requests that would be sent (check these against the current API docs):\n");
  for (const n of ready) {
    const r = REQUESTS[n]();
    console.log(`  ${n}: POST ${r.url.replace(/key=[^&]+/, "key=REDACTED")}`);
    console.log(`  ${JSON.stringify(r.body).slice(0, 300)}...\n`);
  }
  process.exit(0);
}
if (!ready.length) { console.error("\nNo keys set, so there is nothing to render."); process.exit(1); }

fs.mkdirSync(OUT, { recursive: true });
const stem = path.basename(file).replace(/\.script\.md$/, "");
for (const n of ready) {
  process.stdout.write(`\n${ENGINES[n].label}: `);
  try {
    const { ext, buf } = await render(n);
    const out = path.join(OUT, `${stem}.${n}.${ext}`);
    fs.writeFileSync(out, buf);
    console.log(` wrote ${path.relative(process.cwd(), out)} (${(buf.length / 1024 / 1024).toFixed(1)} MB)`);
  } catch (e) {
    console.log(` FAILED: ${e.message}`);
    console.log(`   The request shape for ${n} is the part this session could not verify. Compare it against the current docs and fix the REQUESTS block.`);
  }
}
console.log("\nListen to them back to back before deciding. The thing to listen for is whether a voice flattens out over the four minutes, which is where the cheap engines are said to give way.");
