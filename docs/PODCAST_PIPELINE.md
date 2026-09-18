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

**`npm run state`.** It prints the episodes each course still owes and what they cost at the
measured $0.22, and the total outstanding, computed from the lessons themselves. The table that
used to sit here was hand-maintained and went stale within a day of being written, which is the
whole argument for not writing derived numbers into prose (`scripts/CLAUDE.md` has the rule).

Writing a script costs nothing at the API. Only the render spends.

### The spend cap, and how to read it

**`npm run state` prints it.** Cap, what is left, what production has actually cost per episode,
and any accident recorded separately. The cap itself lives in `scripts/podcast/budget.json` and is
the Google AI Studio monthly cap at [aistudio.google.com/spend](https://aistudio.google.com/spend),
which resets on the first. Raise it there first, then in that file. Google's page is the authority;
the repo's figure is the best estimate it can make on its own.

**The ceiling is not an allowance.** It limits what can be spent in a month; it is not a balance
that expires, and unspent headroom is money John still has. Render because episodes are owed, never
to use the cap up. A rule that urged the second was written on 2026-09-18 and removed the same day.

**Accidents are counted against the cap and kept out of the cost of an episode**, and the
difference matters. September carries about $23.39 from the runaway retry loop of 2026-09-17, which
Google charged and which produced almost no audio anyone kept. Against the cap it is real money
gone. Against the question "what does an episode cost" it is nothing at all, and folding it in
would treble the answer. Production has billed **$0.20 an episode across eight episodes**, and that
is the number to plan with.

John raises the cap as budget allows and asks only to be told when it is running out. `npm run
state` warns under five episodes and again at zero, so say so at session start rather than waiting
to be asked.

When the cap is hit, requests fail rather than overcharging, so the failure mode is a wasted minute
and not a surprise bill.

---

## 3. The order to work in

The rule from `CLAUDE.md` is that a course is finished when every lesson is at standard **and** every
lesson has an episode. So the podcast is always the last step, and a course's content has to be
settled before a cent is spent on its audio, or the audio gets paid for twice.

**As of 2026-09-18 all seven live courses are through Stage 4 and the voice pass, so every one of
them is ready for episodes.** Nothing is waiting on content.

The order is **Core term order**, which is the order a learner meets the courses. Finishing Term 1
first means the entry point to the Core has complete audio before anything deeper does. Within a
course, go lesson by lesson in number order, and finish a course before starting the next.

**Which course and which lesson is next: `npm run state`.** It names the first lesson actually
missing an episode, which is not always the lowest-numbered one. The numbered list that used to sit
here is gone; within a day of being written its first item was already wrong, because How to Learn
Anything had been finished and the list still asked for its seven episodes.

Courses not yet written get their episodes the same way as everything else, trailing their
own drafting. `curriculum/audio-debt.yaml` is the ledger.

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
3a. **And do not kill a render in flight, for the same reason.** Stopping the process does not
   stop Google. It is generating audio on its side and billing for it, and killing curl only
   means you do not receive what you paid for. On 2026-09-18 a twelve-episode chain was stopped
   with Bible Basics lesson 1 about seven minutes in, which is right at the end of a long render,
   and the money went with nothing kept. **If a chain has to stop, let the current render finish
   and stop before the next one starts.** `podcast.mjs` now detects this after the fact: the
   `attempt-N.request.json` it writes is deleted the moment the request returns, so a leftover one
   means a call was killed, and the next render on that episode says so loudly before spending.

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

## 4a. The length ceiling, which is not the same as the cost band

**A script over about 1,417 spoken words is refused before anything is sent.** The model returns at
most 16,384 output tokens, `podcast.mjs` allows itself 90% of that, and at 150 words a minute and
26 audio tokens a second that works out to about 1,417 words. Past it the episode would be cut off
mid-sentence, and Google would bill for what it did render.

This is a different thing from the 1,000 to 1,200 word band in `/make-podcast`, which is about
cost. The band is advice; the ceiling is a wall.

**Write to about 1,200 and check the dry run before the fact-check.** `node scripts/podcast.mjs
render <lesson>` now prints the refusals on a dry run, not only under `--go`, which is the change
made on 2026-09-18 after a session trimmed a script twice against a limit it could not see.
Checking first matters because **shortening a script is new text and the fact-check has to run
again**, so a script that is written long costs two fact-checks instead of one. Those second passes
are not a formality: on 2026-09-18 they caught a truncated quotation that dropped one of the two
faults Strunk names, a hedge narrowed from "government writers" to "writers", and three of Haley's
questions left pointing at lines the cut had removed.

Dense lessons do not fit whole. Cut whole exchanges rather than shaving words, say in the sign-off
what the episode left out, and remember the episode sells the lesson rather than replacing it.

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

## 6. The gate: a sanity check, not a quality judgement

**Two things fail, and both mean Google returned something broken rather than an episode that could
be better:** silence where audio should be, and a length wildly out of step with the script, which
is truncation or a runaway. That is all.

Everything else in the table below is still measured and still printed under "measured, not a
problem". None of it decides anything.

**This was cut back on 2026-09-18, on John's instruction, and it is not to be tightened again
without him.** It used to fail an episode on seven measurements. He had listened to every episode
the settled pipeline produced and they were fine; what the fine-grained thresholds actually did was
flag small variances that did not matter and invite a session to spend $0.22 rendering the same
thing again. An episode that sounds wrong is caught by an ear, and the answer is one deliberate
re-render, not a threshold.

The one guard that stayed is on the script side, where it costs nothing: a script opening with
`S1:` is refused before any money is sent, which is what stops a whole episode coming out in one
voice.

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

## 8. What writing and checking scripts has taught, measured

These paragraphs lived in `docs/QUEUE.md` until 2026-09-19, where they were read by every session
whether it was touching audio or not, and were slowly turning the marching order into an archive.
They are craft, not queue: read them before writing or checking a script. Root `CLAUDE.md` already
sends you here for that.

**A repair fails again about half the time, measured across two rounds on ten Reading Well scripts.**
Five of the six scripts sent for a second round had passed their first-round repairs, and the sixth
failed again on the same sentence in a quieter form: a sign-off telling the listener the lesson
carried a whole passage it does not. The fix that works is to brief the re-checker with **what the
repair was for**, not just to ask for another read. Three rounds is the point of diminishing return:
lesson 6's fourth pass returned a Latin spelling and two paragraph-distance slips and nothing else.

**A script fact-check earns its keep, and the failures are not the ones you would guess.** Of the
twenty-odd scripts written on 2026-09-18, about half came back FAIL. Almost none of the failures
were invented facts. They were: a quotation spoken in words the cited translation does not have,
three separate times; a cross-reference to the wrong lesson in a course built on cross-references;
a count in a sign-off that the repair itself had falsified; a hedge dropped so that an argued claim
arrived settled; and, once, a whole direction, where every compression in an episode narrowed the
range of positions and weakened the side the course disagrees with. **Prompt the check for those**,
not for whether the numbers are right, and on a standpoint course ask explicitly whether anything
the episode keeps quietly takes a side.

**A maths script needs a different check from a prose one, learned on 2026-09-18.** A listener
cannot see a bracket, so every bracket is opened and closed aloud ("bracket, minus one, close
bracket, squared"), every product is spoken with its "times", and any expression that could parse
two ways by ear is said in pieces. The fact-check prompt for a maths lesson asks the reviewer to
redo every calculation **and** to read the script as a listener hears it: the first algebra script
said the same spoken phrase equalled plus one in one turn and minus one four turns later, which is
invisible on the page and fatal in audio.

**What a script for a long lesson looks like, learned over seventeen of them on 2026-09-18.** The
ceiling is about 1,417 spoken words and the dense lessons do not fit. Choose two or three of the
lesson's sections and take them properly, rather than touring all of them; then **say in the
sign-off what the episode left out**, by name. Logic 5 takes one of its four families of inductive
argument, Logic 6 takes two of its three errors, and both are better episodes for it. Cut whole
exchanges, never shave words: shaving costs a dozen edits and loses the hedges, and every
fact-check tonight found the same thing, that what a cut removes first is a qualifier. Write them with
`/make-podcast <lesson>`, stopping after the fact-check. Several a session is fine. Take one course
all the way to *written* before starting the next.

**The 1,417-word ceiling is about 150 words tighter than it needs to be, measured 2026-09-18.**
`scripts/podcast.mjs` computes the refusal from `WPM = 150`, and across the twenty one episodes
rendered with durations recorded the real rate is about 167 words a minute. Logic 4 is the clean
case: 1,413 words came back as 511 seconds of audio and 12,787 audio tokens, against the 14,745 the
guard assumed. So the true ceiling is nearer 1,570 words. **Do not raise the constant on this
note**: the guard is doing its job and a wrong ceiling in the other direction costs money. It is
here so that a session shortening a good script knows it is cutting against a conservative wall,
and so that whoever next touches that file can widen it on evidence. The same constant makes every
script's `approx_minutes` wrong; the six Python and Algebra scripts written tonight say 8, the
older ones still say 6 over 1,400 words.
