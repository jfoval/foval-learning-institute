# Decisions: settled, do not re-open

Things John has decided, or that were settled after a real failure, and that a new session should
not spend his time asking about again. Each entry says what was decided, when, and the reasoning
worth keeping, because a decision without its reasoning gets re-litigated the first time it is
inconvenient.

**This file is not read at session start.** Read the entry when you are about to touch the thing.
If you think one of these is wrong, say so and say why; do not quietly do the other thing.

---

## 1. What the institute is building, and the three ways into it

John's model, stated 2026-09-08. No document should contradict it.

1. **The Foval Core** (`#/path`) is **the way through all of the knowledge**: every course the
   institute teaches, in the order it should be taken. 174 courses, 25 terms of seven.
2. **The courses** (`#/courses`, and `#/map` for the full 174) are there for anyone to take
   whatever they want, in any order. Every course stands alone.
3. **A questionnaire** builds a path shaped to the person: their age, goals, time, and what they
   already know. Not started; the spec is in `docs/PLATFORM_ROADMAP.md`.

### There is no elective tier

Until 2026-09-08 the Core was a curated 52-course spine of about two years and the other 122
courses were marked `elective` with no ordering at all, so a learner who wanted Data Analysis or
Project Management had no idea what came before it. John chose to place everything. **A course
worth putting on the map is worth telling a learner when to take it.** The cost, accepted
deliberately, is that the Core is no longer a two-year programme, and the docs say so.
`curriculum/core-path.yaml` is the source of truth and `npm run validate` fails if a course is on
the map and not on the path, or the other way round. **Do not quietly reintroduce an elective
tier.**

---

## 2. The definition of done

**A course is finished when every lesson is at standard AND every lesson has a podcast episode,
live and stamped.** John's definition, stated repeatedly, restated on 2026-09-09 after a session
declared Personal Finance complete with zero of ten episodes made and started the next course.

The order inside every course, live or new, is fixed: research, outline, draft, Stage 4, voice
pass, assessments, **an episode for every lesson**, and only then the next course. The order
across courses is also fixed: finish the live courses first, each one completely, then go back to
the top of the Foval Core and work down it in order.

It is root `CLAUDE.md` rule 6, the head of `docs/CONTENT_PIPELINE.md`, and, since it kept being
lost as prose, a check: `npm run validate` fails on a published course whose lessons lack an
`audio:` stamp beyond the debt written down in `curriculum/audio-debt.yaml`.

---

## 3. Work that is not on `main` is not done

The live site serves `main`. A platform session on 2026-09-06 left thirteen commits on a branch
while John refreshed his browser wondering why a layout fix had not appeared. That is the whole
lesson, and it is root `CLAUDE.md` rule 8.

**Two process rules came out of real failures and both still bind:**

- **Content sessions commit to `main` and pull first. Do not open a branch for lesson work.** On
  2026-09-06 two sessions gave Logic lessons 2 to 8 a full Stage 4 cycle each, one on `main` and
  one on a branch, and diverged for nine hours without either noticing. Main's versions were kept,
  not because they were longer (the branch's were) but because **main's session could reach
  primary sources and the branch's container could not**. Its lesson 8 built a teaching point on
  Robinson's ecological correlation as +0.619 when the true figure is negative, because the 2009
  IJE reprint typesets minus signs faintly enough that text extraction drops them. *Length is not
  quality, and a review that cannot reach the sources is not a fact-check.* The alternative text
  survives as the tag `superseded/logic-stage4-alt-2026-09-06`. Platform work, like this
  restructure, is different and does belong on a branch.
- **Update `docs/QUEUE.md` in the same commit as the work, not at the end of the session.** A
  session that dies mid-task should leave the next one a true picture. If you launch subagents,
  write down what they are reviewing before you launch them.

---

## 4. Stage 4 is one reviewer by default

John asked directly whether there were review steps that were overkill. There were. Changed
2026-09-08. The whole of it is in `.claude/commands/review-lesson.md`; the decision is that Tier B,
five reviewers in parallel at 600k to 900k tokens, is now reserved for sensitive domains under
standards 3.4, standpoint courses, and lessons a Tier A review sent back for heavy rewriting.
One reviewer in a fresh context runs about 100k and, measured on the same lesson, found everything
the five found.

Nothing was cut that had ever caught something alone: the fresh context, the adversarial
fact-check, the dash sweep, reading every SVG by eye, measuring quiz option shapes, and full Tier B
on anything contested. Across the lessons then remaining that was roughly 25M subagent tokens down
to about 5M.

---

## 5. Lesson splits

**John's instruction, 2026-09-06:** "I want lessons and courses to be as long as they need to be to
do what they should do. Splitting doesn't concern me that much but makes sense you don't want an
individual lesson to go on forever. Do what you think is best."

The standing rule, which needs no further approval:

1. Split a lesson when it holds two ideas that each stand alone with a natural stopping point
   between them, which is the test standard 1.3 already sets. Do not split on length alone; 1.3
   has no ceiling and tells reviewers never to flag length by itself.
2. Do not renumber as you go. Mark each seam with an HTML comment saying where it falls and what
   each half would need.
3. Do the renumbering **once**, as a required step before the course goes to `status: published`.
   Rename the files, rewrite every "lesson N" reference in the lessons, OUTLINE.md and SOURCES.md,
   then grep for pointers to lessons that no longer exist.
4. While doing that pass, switch prose references from numbers to titles where it reads naturally.
   "The genre lesson" survives any reordering; "lesson 3" does not.

The reasoning is in `docs/CHANGELOG.md` under 2026-09-06. **Split-seam comments in Bible Basics
lessons cite this as "BACKLOG 7b", which was its old address.** They are lesson files and were not
edited by the documentation restructure; this section is what they point at.

---

## 6. Scripture licensing

The ESV **may not be quoted in any work published under a Creative Commons licence**, which this
repo is, and its free allowance **excludes Bible reference works**, which a course on how to read
the Bible arguably is. Bible Basics had been quoting it under a permission that does not exist.

Policy is Editorial Standards **4.7**: **NET Bible by default** (no verse cap for non-commercial
use, no exclusion for openly licensed works or reference works, and its translators' notes are
worth teaching from), JPS 1917 for the Tanakh or when describing how Jews read a passage, Brenton
for the Septuagint, KJV where the familiar wording is the subject, short comparative snippets from
copyrighted versions where comparing renderings is the teaching, and a note that our own open
licence does not extend to quoted scripture. **The 500-verse running count is gone. If a plan ever
requires counting again, the plan is wrong.** Some SOURCES.md entries still carry old running
counts; they are history, not instructions.

One consequence: the NET renders Isaiah 7:14 as "this young woman", not "virgin". Lesson 4 keeps
the NET as its voice, says plainly that many English Bibles read "virgin", and rests the Christian
reading on the Septuagint's *parthenos* and Matthew's use of it, which is where it already rested.

---

## 7. Podcasts: engine, hosts, and the voice drift

The operating instructions are in `.claude/commands/make-podcast.md` and the research behind the
choice is in `docs/PODCAST_OPTIONS.md`. What is settled:

- **Engine: Gemini 3.1 Flash TTS on fal** (`fal-ai/gemini-3.1-flash-tts`), multi-speaker, $0.05 per
  1,000 characters in, about $0.30 to $0.50 an episode. It replaced VibeVoice 7B on 2026-09-08
  after John listened to both, and every episode that existed was re-rendered from its existing
  fact-checked script and re-uploaded over the same R2 key, so no lesson frontmatter changed.
  **Do not switch engines without asking John.**
- **The hosts are John (Charon) and Haley (Aoede). SETTLED, and re-settled on 2026-09-09.** They
  were switched that day to Iapetus and Erinome, the only pair of Google's 30 prebuilt voices whose
  published characteristic is simply "Clear", on the reasoning that a characterful descriptor gives
  a generative model something to act. **John reversed it within the hour and declined a sample
  render.** His reason is the better one: the live episodes are Charon and Aoede, and matching what
  exists beats a theory about descriptors. Changing a host voice means re-rendering every episode
  in the institute, because the hosts have to sound the same everywhere.
- **The voice drift is accepted, and the pitch check is a report rather than a gate.** Both settled
  with John on 2026-09-09, asked directly with the alternatives costed. He does not want the
  episodes redone and does not want a review step on every render, and he is right that pitch is a
  weak proxy: it catches a host recast outright and misses the drift he actually hears.
  **The cause was found.** Gemini's presets are a strong steer, not a hard constraint, and
  `temperature` was never set, whose default on fal is 1. Measured across How to Learn Anything's
  eight episodes, median opening-minute pitch ran 140 Hz to 173 Hz, and on a pitch-band count
  episode 4 had 16% of voiced frames in the male range and episode 5 18% in the female range.
  Fixed forward: `temperature: 0.25`, host descriptions taken out of `style_instructions` (a
  casting note invites recasting), and a post-render pitch check that refuses to upload a file
  missing a male-range or a female-range voice, overridable with `--force`. Each rendering session
  gets its own pair of hosts and **Gemini cannot be forced**: its fal endpoint takes prompt,
  speakers, style, language, temperature and output format, with no seed and no reference audio.
- **If it is ever re-opened, the two routes are priced.**
  `fal-ai/elevenlabs/text-to-dialogue/eleven-v3` has fixed library voices, a `seed`, a stability
  control and multi-speaker in one call at $0.10 per 1,000 characters, about $0.70 an episode; and
  `fal-ai/minimax/voice-clone` returns a permanent `custom_voice_id` from a reference clip kept in
  the repo, the most locked-down option, but single-speaker per call, so every turn is a separate
  render stitched with ffmpeg. Either means re-rendering every live episode so the institute
  matches, which is the real cost, around $8.
- **A lesson gets its episode only once its content has settled.** Rendering audio for a lesson
  that is about to be replaced pays for it twice.

---

## 8. The three placeholder courses stay live while they are rebuilt

John's call, 2026-09-08, asked directly. Writing Clearly, Algebra Essentials and Python Basics were
pre-pipeline stubs of about 450 words a lesson. Taking them down would have dropped the site from
seven courses to four and holed the first terms of the Core for weeks. The honesty pass is what
makes leaving them up defensible, because the thing that was untrue about them was the `minutes:`
label, not the prose.

Two consequences, each of which was learned by making the mistake:

- **Status stays `published` while a live course is rebuilt.** The build ships only published
  courses, so setting one to `drafting` deletes a live course from the site.
  `.claude/commands/research-course.md` carries this exception.
- **`course.yaml`'s outcomes are not updated to match the outline** until the lessons land.
  Doing it on Writing Clearly put eight promises on a course page serving four placeholder lessons,
  which is exactly the kind of lie the honesty pass had just finished removing. The outline's copy
  waits in OUTLINE.md and lands lesson by lesson. `.claude/commands/outline-course.md` carries it.

---

## 9. Why the live courses come before Core order

Settled with John 2026-09-08. He asked directly why the queue was not simply following the Foval
Core, since Reading Well sits at position 2 in Term 1 and Writing Clearly at position 3. The answer
is that he had earlier told the session to fix the live courses first, and he confirmed the call:
*"nah keep going the way you were going, once those are caught up we'll go back to Reading Well and
then proceed in order one at a time."*

The reasoning worth keeping: **a live bad course does more damage than a missing one**, and Writing
Clearly already had its research and outline done, so switching away would have thrown that away.
After the live courses are finished the queue is strict Core Path order.

---

## 10. Funding, advertising, and what the institute promises

Settled 2026-09-06 over two passes. John raised that he may want some advertising later to keep the
main site free as it grows. The old copy promised "no ads" flatly in five places, including
`VALUES.md` value 1, so it was a promise that would have had to be broken publicly.

The first pass narrowed it to a data promise plus an editorial one. John then cut the data half
too: "take off the tracking promise too. No need to over promise." **The only forward-looking
promise left about funding is the editorial one:**

- **No lesson, assessment, or review card ever carries an advertisement, sponsor slot, affiliate
  link, or paid placement.** This is Editorial Standards 4.5, not marketing copy: a sponsor beside
  a fact-checked claim changes how the claim reads, and the reader cannot tell which sentences were
  bought. It also closes the affiliate-link door, which is how this usually erodes.
- Sponsorship, if it ever happens, goes on pages that teach nothing, and is labelled.

**Deliberately no longer promised anywhere:** that nothing about a learner is tracked, profiled or
sold, and that nothing they read decides what they get shown. Those were removed on purpose, not by
oversight. Do not put them back without asking John.

**What stayed, and why it is different.** Present-tense statements of fact about how the thing
works today are not promises and were kept: "your progress is saved in this browser and never sent
anywhere" in the footer, and on the account pages, that we hold an email address and progress and
nothing else. Removing accurate disclosure would be worse than making no promise, not safer. The
rule going forward: **describe what actually happens, do not promise what will never happen.**

**Open, and it becomes real the day any advertising or analytics is added:** there is no privacy
policy anywhere in the repo or on the site. Nothing needs one today, since the only thing leaving
the browser is anonymous lesson feedback and the feedback Worker deliberately stores no IP or user
agent. An ad network or an analytics script changes that, and most ad networks set cookies whether
or not you asked. Worth deciding deliberately rather than discovering.

Changed together across `VALUES.md`, `EDITORIAL_STANDARDS.md` 4.5, `PLATFORM_ROADMAP.md`, the About
page, the footer and the README, so no two places contradict each other. **Nothing about ads has
been built and no decision has been made to run any.** This settles only what the institute is
allowed to do if John chooses to.

---

## 11. Accounts: Cloudflare, not Supabase

Corrected 2026-09-06. An older entry said accounts were blocked on a Supabase free-tier project
slot, waiting on John to delete an empty project. That stopped being true when the project moved to
Cloudflare. **Nothing is blocked. Accounts simply have not been built.** The state of the work and
the deploy steps are in `docs/PLATFORM_ROADMAP.md` Phase 2 and `workers/api/README.md`; the options
and tradeoffs are in `docs/AUTH_OPTIONS.md`.

**Do not go back to Supabase for this.** It reopens the project-slot problem the Cloudflare move
already solved and puts a second vendor in the path of every sign-in. (The old investigation is
worth keeping for one fact: the paused **John Project**, ref `ebkuhylfhyfretagpczf`, was confirmed
empty on 2026-09-05, `auth.users` 0 rows, `storage.buckets` 0 rows, not referenced by any repo or
deployment. It is safe for John to delete whenever he wants the slot back.)

John picked the shape too: write the session layer in the Worker we already have, ship Google
sign-in and six-digit email codes first, add email and password later. Passwords are the one method
that needs the $5 a month Workers Paid plan, because hashing costs 50 to 100 ms and Workers Free
allows 10 ms of CPU.

---

## 12. Data science is not a new course

Deliberately not a row on the map. The path already exists and adding a "Data Science" course would
duplicate three others: Statistics for Citizens, then Statistics and Probability (Mathematics),
then Data Analysis (Computer Science and AI), with Machine Learning Fundamentals after it. If those
four are built in that order they are the data science basics. Worth raising with John only if he
wants them bundled and labelled as one track on the Path page, which is a packaging decision rather
than a new course.
