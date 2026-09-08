---
description: Stage 6. Write, fact-check, render, and publish one lesson's podcast episode
argument-hint: <path/to/lesson.md>
---
Produce the podcast episode for the lesson at `$ARGUMENTS`. The episode is a two-host
conversation: S1 is **John**, the teaching voice; S2 is **Haley**, the curious one. The
rendered voices are fixed in `scripts/podcast.mjs`: the engine is Gemini 3.1 Flash TTS on
fal, John is the Charon voice and Haley is Aoede. One episode per session.

**Gate first: the lesson must be settled.** Podcast only after the Stage 4 review, the
voice pass, and the media pass are done, never before, so audio is not paid for twice.
Check the course's `research/REVIEWS.md` and status. If the lesson is not settled, stop
and say what is still owed. Also run `node scripts/podcast.mjs plan $ARGUMENTS` — if an
episode is already live and stamped, stop.

**1. Write the script**, at `courses/<school>/<course>/podcast/<lesson-id>.script.md`
(create the folder if needed). Model it on
`courses/christian-studies/bible-basics/podcast/02-one-story.script.md`, the first real
episode:

- Frontmatter: `source:` (the lesson path), `written_by:`, `about:`, `speakers: 2`,
  `approx_minutes:`. Leave `checked:` out until step 2 has actually run.
- Body: alternating `S1:` / `S2:` turns separated by blank lines. Nothing else renders.
- Length: 900–1,100 words, about six minutes. A long lesson still gets a six-minute
  episode; the episode sells the lesson, it does not replace it.
- Intro names the podcast, both hosts, the course, and the lesson title. Sign-off sends
  the listener to the full lesson at Foval Learning Institute dot org and asserts nothing
  factual beyond that.
- **Every figure and claim must appear in the lesson.** Nothing from your own knowledge,
  however true. The script is a reading of the lesson, and the lesson has been through
  review; the script has not.
- Write for the ear: numbers spelled out ("nine hundred and eighteen"), no citations read
  aloud, no markdown, no stage directions, no em dashes (rule 7 applies to scripts too).
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
node scripts/podcast.mjs render $ARGUMENTS          # dry run: confirm cost (~$0.40) and shape
node scripts/podcast.mjs render $ARGUMENTS --go     # spends money; FAL_KEY comes from .env.local
node scripts/podcast.mjs upload $ARGUMENTS          # to R2; verifies the public URL answers
node scripts/podcast.mjs stamp $ARGUMENTS           # writes audio: into the lesson frontmatter
```

Rendering usually takes a couple of minutes; the poll budget is 20. If the render fails, check the fal
dashboard before re-sending, so the same job is not paid for twice.

**4. Finish.** `npm run validate`; `npm run build` and commit `site/data/courses.js` too
if the course is published. Commit the script and the stamped lesson together, naming the
course and lesson. The MP3 itself lives in R2 and git-ignored `audio-out/`, never in git.
