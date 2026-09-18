# The podcast pipeline: how an episode is made, what it costs, and the order to do them in

*Written 2026-09-18, the day the method was settled. This is the operating manual. The reasoning
behind each choice is in `docs/DECISIONS.md` section 7; the command that drives it is
`.claude/commands/make-podcast.md`; the code is `scripts/podcast.mjs`. Read this one first.*

---

## 1. The method, in one paragraph

We write the script, because that is where the editorial standards live. We rent the voices, because
they are a commodity. The whole episode is rendered in **one call** to **Gemini 2.5 Pro TTS** on
Google's own API, which is the only arrangement tested that holds two hosts steady for seven minutes
with no fade and no seam. **Haley speaks first in every script.** The returned audio is measured
before anything is uploaded. Nothing is ever re-sent automatically.

The hosts are **John, the teaching voice (S1, the Charon voice)** and **Haley, the curious one (S2,
the Aoede voice)**. They are the sound of the institute and do not change without John.

---

## 2. What it costs, measured rather than estimated

Google bills Gemini TTS on **audio out**, not text in. This matters: a request that goes wrong and
returns forty minutes of silence is billed for forty minutes. The guards in section 4 exist because
that happened.

| What | Rate |
|---|---|
| Audio out | $20.00 per million tokens |
| Text in | $1.00 per million tokens |
| Audio tokens per second of speech | about 26 |
| Audio tokens per word of script | about 8.7 |

**So an episode costs about $0.000174 a word, or 17 cents per thousand words.**

The one measured episode, How to Learn Anything lesson 1: 1,103 words, 9,617 audio tokens, six and a
half minutes of audio, **billed $0.19**. The estimator printed by `podcast.mjs render` assumes 150
words a minute and comes out about 20% high, which is the direction an estimator should err.

**A normal 900 to 1,300 word episode costs 16 to 23 cents.** Budget **$0.22** as the working figure.

**Confirmed over a whole course.** How to Learn Anything's eight episodes were rendered on
2026-09-18 and billed **$1.61 in total, $0.20 each**, every one passing on its first attempt. The
per-episode spread was $0.17 to $0.23.

### What finishing the institute costs

Fifty-three episodes are owed as of 2026-09-18, How to Learn Anything having been finished that
day. At measured rates:

| Course | Term | Episodes owed | Scripts ready | Estimated cost |
|---|---|---|---|---|
| Logic and Argument | 1 | 10 | 3 | $2.24 |
| Writing Clearly | 1 | 9 | 0 | $1.96 |
| Personal Finance | 2 | 10 | 3 | $2.16 |
| Algebra Essentials | 5 | 6 | 0 | $1.31 |
| Python Basics | 6 | 6 | 0 | $1.31 |
| Bible Basics | 8 | 12 | 1 | $2.61 |
| **Total** | | **53** | **7** | **about $11** |

Writing a script costs nothing at the API. Only the render spends.

### The spend cap, and how to read it

Google AI Studio holds a **monthly spend cap**, visible at
[aistudio.google.com/spend](https://aistudio.google.com/spend), which resets on the first of the
month. On 2026-09-18 it stood at **$23.39 spent against a $30.00 cap**, so about $6.61, or roughly
thirty episodes, was left in September. Nearly all of that $23.39 was one afternoon's debugging
mistake, not episodes: see section 4.

Check that page before a long run. When the cap is hit, requests fail rather than overcharging, so
the failure mode is a wasted minute, not a surprise bill.

---

## 3. The order to work in

The rule from `CLAUDE.md` is that a course is finished when every lesson is at standard **and** every
lesson has an episode. So the podcast is always the last step, and a course's content has to be
settled before a cent is spent on its audio, or the audio gets paid for twice.

**As of 2026-09-18 all seven live courses are through Stage 4 and the voice pass, so every one of
them is ready for episodes.** Nothing is waiting on content.

The order is **Core term order**, which is the order a learner meets the courses, with How to Learn
Anything first because it is also the closest to done. Finishing Term 1 first means the entry point
to the Core has complete audio before anything deeper does. Within a course, go lesson by lesson in
number order. One episode per session; finish a course before starting the next.

1. **How to Learn Anything, lessons 2 to 8.** Term 1. Seven episodes, about $1.33. All seven scripts
   are written, fact-checked and open with Haley, so this is pure rendering. First because it
   returns the institute's first complete course to complete.
2. **Logic and Argument, all ten.** Term 1. About $2.24. Lessons 1 to 3 have scripts; seven need
   writing, which costs nothing.
3. **Writing Clearly, all nine.** Term 1. About $1.96. The voice pass finished 2026-09-17. No
   scripts yet. **Finishing this one completes Term 1 of the Core.**
4. **Personal Finance, all ten.** Term 2. About $2.16. Lessons 1 to 3 have scripts.
5. **Algebra Essentials, all six.** Term 5. About $1.31. Voice pass finished 2026-09-17.
6. **Python Basics, all six.** Term 6. About $1.31.
7. **Bible Basics, all twelve.** Term 8. About $2.61. Lesson 2 has a script.

Courses not yet written, starting with Reading Well, get their episodes as part of their own build
and never enter this list. `curriculum/audio-debt.yaml` is the ledger and it only shrinks.

## 4. The five rules that keep the money in the account

Every one of these was bought with real money on 2026-09-17, when about $25 went out in an afternoon
and only a few cents of it became audio. They are enforced in `scripts/podcast.mjs`, not just
written here.

1. **Never send `temperature` or `seed`.** Either one makes this model return silence, sometimes
   forty minutes of it, and Google bills for the silence. The request carries only what Google's own
   example carries, plus `maxOutputTokens`.
2. **Always cap `maxOutputTokens`** from the script's word count. A runaway then costs about 33
   cents instead of $1.70.
3. **Use curl, not Node's `fetch`.** `fetch` abandons a response whose headers take more than five
   minutes. Google keeps rendering and keeps billing, and the caller sees a network error and thinks
   nothing happened. A Pro render of a full episode takes five to six minutes, so this is the normal
   case, not the edge case.
4. **Never re-send automatically.** This is the big one. The $25 was a retry loop wrapped around
   rule 3: each timeout started a fresh billed render of the same episode. `podcast.mjs` now stops
   on any failure and says so. Spending again is always a fresh, explicit `render --go`, and every
   attempt is logged with what it was billed in
   `audio-out/work/<school>/<course>/<id>/manifest.json`.
5. **One request at a time.** A new billing account has a spend-rate limit that rejects parallel Pro
   requests outright.

A sixth, cheaper rule: **a render that already passed is never paid for again.** `render --go` on an
episode that has passed copies the kept attempt and exits.

---

## 5. Why Haley speaks first

Gemini 2.5 Pro gives the **first turn of the transcript to the second speaker's voice**, whatever the
label says. Measured over five renders, it never once got it right. With John written first, Haley's
voice reads "I'm John", then reads her own line too, and the whole episode is in one voice.

The fix costs nothing: Haley welcomes, John follows.

```
S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in <course>, on the lesson called <title>.
```

`scripts/podcast.mjs` refuses a script that opens with `S1:` before any money is spent, and the gate
checks the first six seconds of the returned audio for Haley's voice as a backstop. All fifteen
existing scripts were swapped on 2026-09-18.

---

## 6. The gate: what is checked before an episode can be uploaded

The render measures the audio it got back and refuses to go further if any of this fails.

| Check | What it catches |
|---|---|
| **Opening** | first six seconds must be Haley, or the voices are swapped |
| **Level** | mean volume no quieter than -30 dBFS |
| **Fade** | last minute no more than 6 dB under the first, the old defect |
| **Both voices** | each host holds at least 15% of the voiced frames |
| **Length** | speech within 0.6 to 1.7 times what the word count predicts, catching truncation and invented lines |
| **Match** | each host's median pitch within 6% of `scripts/podcast/hosts.json` |

`hosts.json` holds the reference fingerprint of the two voices, taken from the episode John approved
by ear on 2026-09-18 (John at 94 Hz, Haley at 200 Hz). It is what keeps episode 40 sounding like
episode 1. **Resetting it means nothing rendered before it is known to match**, so the command
refuses to overwrite it without `--force`, and that is John's decision, not a passing one.

The pitch measurement counts octave errors, because a female voice at 200 Hz otherwise reads as a
male voice at 100 Hz and a single-voice episode passes a two-voice check. That mistake was made on
2026-09-17 and caught by John's ear, not by the code.

---

## 7. The loop, per episode

```bash
node scripts/podcast.mjs plan   courses/<school>/<course>/lessons/<id>.md
```

1. **Gate on the content.** The lesson must be through Stage 4 and the voice pass. If it is not,
   stop; rendering audio for a lesson that is about to be rewritten pays for it twice.
2. **Write the script** if there is not one, with `/make-podcast <lesson>`. 900 to 1,100 words,
   about six minutes, Haley opening. Every figure and claim must appear in the lesson.
3. **Fact-check it** in a fresh-context subagent against the lesson, then record the verdict in the
   script's `checked:` frontmatter. `podcast.mjs` refuses to spend money without it.
4. **Dry run**, which sends nothing: `node scripts/podcast.mjs render <lesson>`. Confirm the cost and
   that Haley opens.
5. **Render**, one call: `node scripts/podcast.mjs render <lesson> --go`. Five to six minutes.
6. **Listen**, and read the per-30-second profile it prints. The level should hold flat and both
   hosts should be present to the last line.
7. **Upload and stamp**: `node scripts/podcast.mjs upload <lesson>` then `stamp`.
8. **Lower the debt** by one in `curriculum/audio-debt.yaml`, in the same commit, and delete the
   entry at zero.
9. **`npm run validate`**, and commit the script and the stamped lesson. Nothing generated is
   committed: the build writes to git-ignored `dist/` and the Pages workflow publishes it from CI.

If step 5 fails, read what it says, fix the cause, and run it again deliberately. Do not wrap it in a
loop. That is rule 4, and it cost $25 to learn.

`node scripts/podcast.mjs gate <lesson> [--file=<mp3>]` runs the gate on any file without uploading,
which is how to check a kept attempt or re-check something already live. It spends nothing.

### Working alongside another session

More than one session works on this institute at once: on 2026-09-18 the podcast run and the
phone-chart run were both live, and in a single working copy a `git add -A` from either would have
swept the other's half-finished lesson into the wrong commit. Measured over twelve hours of that
day, fifty commits touched `docs/QUEUE.md` twenty-seven times and the generated files under `site/`
fourteen times each, so the overlap is not hypothetical.

**Give each session its own working copy.** A second clone costs about 27 MB plus its own
`npm ci`, and both sit on `main` and push to it exactly as two people would:

```bash
git clone "Foval Learning Institute" "Foval Institute (podcasts)"
```

Then point the clone's `origin` at the real remote, copy `.env.local` across (it is git-ignored and
holds `GEMINI_API_KEY`), and run `npm ci`. One was set up this way on 2026-09-18 at
`~/Desktop/Foval Institute (podcasts)`.

**Whatever copy you are in, stage what you touched, by name:**

```bash
git add courses/<school>/<course>/lessons/<id>.md courses/<school>/<course>/podcast/<id>.script.md curriculum/audio-debt.yaml
```

Run `git status` first and read it. A file you did not touch is somebody else's work in progress;
leave it rather than committing it for them. Pull before you push, and expect `docs/QUEUE.md` to be
the one file two sessions genuinely contend for, because it is the shared marching order.
