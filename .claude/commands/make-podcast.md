---
description: Stage 6. Write, fact-check, render, and publish one lesson's podcast episode
argument-hint: <path/to/lesson.md>
---
Produce the podcast episode for the lesson at `$ARGUMENTS`. The episode is a two-host
conversation: S1 is **John**, the teaching voice; S2 is **Haley**, the curious one. The
engine is Gemini 2.5 Pro TTS on Google's own API, the whole episode in one call, about
$0.22. John is the Charon voice and Haley is Aoede. One episode per session.

**Read `docs/PODCAST_PIPELINE.md` before spending anything.** It carries the measured cost,
the order courses are to be rendered in, and the five rules that exist because about $25 went
out in one afternoon on 2026-09-17. The short version of those rules: never send `temperature`
or `seed`, always cap `maxOutputTokens`, use curl not fetch, **never re-send automatically**,
and one request at a time. They are enforced in `scripts/podcast.mjs`; do not work around them.

**Gate first: the lesson must be settled.** Podcast only after the Stage 4 review, the
voice pass, and the media pass are done, never before, so audio is not paid for twice.
Check the lesson's `research/reviews/<lesson-id>.md` and the course status. If the lesson is not settled, stop
and say what is still owed. Also run `node scripts/podcast.mjs plan $ARGUMENTS` — if an
episode is already live and stamped, stop.

**1. Write the script**, at `courses/<school>/<course>/podcast/<lesson-id>.script.md`
(create the folder if needed). Model it on
`courses/christian-studies/bible-basics/podcast/02-one-story.script.md`, the first real
episode:

- Frontmatter: `source:` (the lesson path), `written_by:`, `about:`, `speakers: 2`,
  `approx_minutes:`. Leave `checked:` out until step 2 has actually run.
- Body: alternating `S1:` / `S2:` turns separated by blank lines. Nothing else renders.
- **Haley (S2) speaks first. Always.** The model gives the first turn to the second speaker's
  voice whatever the label says, so John written first means Haley reads his line and the whole
  episode comes out in one voice. `podcast.mjs` refuses an S1 opening before any money is spent.
  The opening is: `S2: Welcome in. This is the Foval Learning Institute podcast, where the two
  of us talk a lesson through. I'm Haley.` then `S1: And I'm John. Today we're in <course>...`
- Length: 900–1,100 words, about six minutes. A long lesson still gets a six-minute
  episode; the episode sells the lesson, it does not replace it.
- Intro names the podcast, both hosts, the course, and the lesson title. Sign-off sends
  the listener to the full lesson at Foval Learning Institute dot org and asserts nothing
  factual beyond that.
- **Every figure and claim must appear in the lesson.** Nothing from your own knowledge,
  however true. The script is a reading of the lesson, and the lesson has been through
  review; the script has not.
- Write for the ear: numbers spelled out ("nine hundred and eighteen"), no citations read
  aloud, no markdown, no stage directions, no em dashes (`courses/CLAUDE.md` rule 4 applies to scripts too).
  Haley pushes with real questions and restates the hard parts; she is not a yes-machine.
- For a `standpoint: christian` course, keep the lesson's own labelling of the faith
  commitment in the script.

**2. Fact-check in a fresh-context subagent, before any money is spent.** Launch one
subagent whose prompt contains only: the script file path, the lesson file path, and this
instruction: "Assume the script contains errors and find them. Verify every claim, figure,
name, and quote in the script against the lesson (the lesson is the sole source of truth;
the script may not add anything the lesson does not say). Check the standpoint labelling
is preserved if the lesson's course teaches from one. Verdict: PASS, PASS WITH NITS (list
them), or FAIL (list findings)." Fix every finding in the script file. Then, and only
then, add the `checked:` frontmatter entry recording the date, the verdict, and that all
findings were fixed. `scripts/podcast.mjs` refuses to render a script without it.

**3. Render, upload, stamp.**

```
node scripts/podcast.mjs render $ARGUMENTS          # dry run: confirm cost (~$0.22) and shape
node scripts/podcast.mjs render $ARGUMENTS --go     # ONE call; GEMINI_API_KEY comes from .env.local
node scripts/podcast.mjs upload $ARGUMENTS          # to R2; verifies the public URL answers
node scripts/podcast.mjs stamp $ARGUMENTS           # writes audio: into the lesson frontmatter
```

The render takes five to six minutes for one episode; that is normal, not a hang. It measures the
audio it gets back and refuses to continue if the opening is in the wrong voice, the level is low or
fades, a host is missing, the length is wrong for the word count, or either host is more than 6% off
the reference in `scripts/podcast/hosts.json`. It then prints a per-30-second profile: the level
should hold flat and both hosts should be present to the last line. Listen before uploading.

**If the render fails, do not run it in a loop.** Read what it says, fix the cause, and run it again
once, deliberately. Every attempt is kept with what it was billed in
`audio-out/work/<school>/<course>/<id>/manifest.json`, and a render that already passed is copied
rather than paid for again. If a call times out, check
[aistudio.google.com/usage](https://aistudio.google.com/usage) before re-sending: a request that
failed on our side may have completed, and been billed, on Google's.

**4. Lower the debt.** Subtract one from this course's entry in `curriculum/audio-debt.yaml`, in the
same commit as the stamp, and delete the entry when it reaches zero. `npm run validate` fails if the
ledger and the lessons disagree in either direction, which is what stops the count drifting.

**5. Finish.** `npm run validate`; `npm run build` and commit `site/data/courses.js` too
if the course is published. Commit the script and the stamped lesson together, naming the
course and lesson. The MP3 itself lives in R2 and git-ignored `audio-out/`, never in git.
