# Changelog

What has shipped, newest first. Courses published, platform changes, and decisions that changed how
the institute works. Items move here out of `BACKLOG.md` when they are done.

Everything from the founding onwards is here. Entries before 2026-09-06 came from the old root
`CHANGELOG.md`, which was merged into this file on 2026-09-06 so there is only one changelog.

## 2026-09-08 (night, later) — Stage 2 outline for Writing Clearly, and a mistake worth recording

**Nine lessons**, in `research/OUTLINE.md`, with a twenty-item test blueprint and a project. The
sequence puts the evidence first and the advice second: what actually happens when someone reads you,
then put the point where the reader is looking, characters and actions, keep the subject next to the
verb, topic and stress position, concision that is actually teachable, shape at the document level,
rules and where they come from, and revising and testing it on a real reader. The four placeholder
lessons survive only as parts of four of those.

Two lessons are flagged as hard. Lesson 5 carries the deepest idea in the course and will come out as
hand-waving unless its central example, a paragraph that repairs itself with nothing added or deleted,
is genuinely convincing; build the example first. Lesson 8 tells the Strunk and Pullum story and could
easily become a hit piece; the test is whether a reader who loves *The Elements of Style* finishes it
feeling fairly treated.

**The mistake.** Stage 2's command says to update `course.yaml` outcomes to match the outline, and
doing that put eight promises describing nine unwritten lessons onto a live course page serving four
placeholders. That is the same defect as an overstated `minutes:`, committed within hours of fixing
every overstated `minutes:` on the site. It was caught before pushing and reverted: `course.yaml` again
describes what the course actually delivers, and the outline's copy waits in OUTLINE.md to land lesson
by lesson. `.claude/commands/outline-course.md` now carries the exception, alongside the one added to
`research-course.md` earlier for `status: drafting`. **The general rule for the two rebuilds still to
come: on a live course, every field a learner can see describes the lessons that exist today.**

## 2026-09-08 (night) — Stage 1 research for Writing Clearly

Queue item 2 begins. The course about writing well has been live since launch as four placeholder
lessons averaging 452 words with no citations, no links and no research behind them, so it is being
replaced rather than improved. `courses/communication-and-people/clear-writing/research/SOURCES.md`
is the first research it has ever had.

**The spine is the reader-expectation tradition rather than the rule tradition.** Gopen and Swan's
"The Science of Scientific Writing" (1990) was read in full and its seven structural principles are
quoted verbatim, along with the caveat that matters as much as they do: "None of these
reader-expectation principles should be considered 'rules.'" Williams' *Style* supplies the same core
from another direction, characters as subjects and actions as verbs. The concrete, testable rules come
from GOV.UK, which writes for a country where "1 in 6 adults in England have very poor literacy
skills" and which answers the clever writer's objection directly: "people with higher levels of
literacy prefer plain English because it allows them to understand the information as quickly as
possible." The US federal plain-language guide adds the thing no popular writing course teaches, how
to test a draft on real readers, with paraphrase testing needing six to nine people.

**The file records what was not read, and why that governs the drafting.** Strunk and White has not
been opened, and the only source in the file that quotes it is Pullum, who is attacking it: that is
defect 10 in the backlog's own list, sitting on the course's central contested question. Sommers
(1980) has not been read because the free copy is a scanned image with no extractable text, and it is
the load-bearing source for the editing lesson. No primary peer-reviewed critique of readability
formulas was reachable. All three are marked as gaps to close before the lessons that depend on them.
Pullum's own qualifier is recorded too, because it is the kind that gets trimmed: his objection is
"not the style advice in *Elements*, which might best be described the way The Hitchhiker's Guide to
the Galaxy describes Earth: mostly harmless." His charge is against the grammar.

**Two process notes.** The course stays `status: published` while it is rebuilt, because the build
ships only published courses and setting it to `drafting` would delete a live course from the site;
`.claude/commands/research-course.md` now carries that exception. And four `course.yaml` files were
showing learners a level vocabulary the map does not use, "Beginner" and "All levels" against
Foundation/Core/Advanced; all seven courses now agree with their row in TAXONOMY.md.

## 2026-09-08 (evening) — the honesty pass: reading times, images, and every chart defect

Queue item 1. Nothing here needed research and all of it was a small lie to a learner.

**`minutes:` is now measured, and the measurement is a script.** `npm run minutes`
(`scripts/reading-time.mjs`) reports claimed against modelled time for every lesson; `--write` fixes
the ones that are materially out. **31 of 51 lessons were rewritten.** How to Learn Anything was
understated by 20 to 30 minutes a lesson, Logic lesson 8 by 45, Bible Basics lesson 11 by 80 (it
claimed 75 minutes for 14,908 words), and the three pre-pipeline stub courses were overstated by up
to five times, one claiming 30 minutes for 274 words.

The model is documented in the script's header. Two things about it are worth keeping. Its reading
rate was not picked, it was **solved for from the values a human had already measured by hand**
during Stage 4: 988 reading minutes over 111,027 words in Bible Basics gives 110 wpm for a course
read with a Bible open, and 540 over 74,961 in Logic gives 140 for everything else. And an exercise
is costed **per numbered step plus any duration it states about itself**, not at a flat rate: a first
version priced every exercise at three minutes and wanted to cut forty minutes off lessons that were
already right, which is how the flat rate was caught. A second version read "twenty minutes" out of
How to Learn Anything's *subject matter* and added ninety minutes to a lesson about study
scheduling, so the duration parser now requires a cue word at the start of a sentence and caps its
contribution. Where the model and a hand-set number disagree by less than ten minutes, or by less
than fifteen percent, the hand-set number stands.

**Images: 294 MB down to 2.8 MB.** Ten Bible Basics `:::figure` blocks hotlinked full-size Wikimedia
originals, including a **256 MB** Google Art Project scan of Rembrandt's *Return of the Prodigal Son*
and the 6.7 MB Treaty of Kadesh, on a site whose rule 9 says it must run fast on cheap phones. They
now use the `/thumb/.../960px-` form. Three were left alone: their originals are already smaller than
the thumbnail would be, which is why they were measured rather than converted blindly.

**Every SVG defect on the site is cleared.** Bible Basics lesson 1's four sub-legible labels are at
font-size 15. All ten `--line-strong`/`--navy` token collisions are gone, across lessons 2, 6, 7 and
8, not just the two the backlog named. The pair is byte-identical in both themes, so an axis, a
spine or a legend swatch was rendering in the same colour as a category. In every case the author
had already written a grey literal fallback beside the token, so the intent was on record and the
fix was `--text-2`. Two charts needed more: lesson 7's idealist bar and lesson 2's eleven-chapter
Acts 1 and 2 sliver would then have collided with a category already on `--text-2`, so both are now
outlines rather than solid blocks. That reads better in both cases, and gives a general rule: **when
a chart needs a fifth treatment and the palette has four strong colours, the fifth is an outline,
not a second grey.** Two clipped labels were also brought inside their viewBoxes. Every changed
chart was checked by eye in both themes.

The site's remaining sixteen validator warnings are all in the three stub courses and go away when
those are rebuilt. Bible Basics, Logic and Argument, How to Learn Anything and Personal Finance are
warning-free.

## 2026-09-08 (later still) — the whole map goes on the Core, and a real map page

**John's model, and it is now the frame every doc uses.** There are three ways into the institute:
the **Foval Core** is the way through all of the knowledge, in order; the **courses** are there for
anyone to take whatever they want; and a **questionnaire** will build a path shaped to the person.

**Every course is on the Core. The elective tier is gone.** John's call, made after asking why Data
Analysis and Project Management were nowhere on the path. They were marked `elective`, which the map
defined as deliberately off the spine and forbidden from `core-path.yaml`, and 122 of the 174
courses were in that state, which meant 122 courses with no ordering at all. The tradeoff was put to
him plainly, that the Core stops being a two-year general-education spine and becomes the whole
curriculum, and he chose to place everything.

- `curriculum/core-path.yaml` rewritten: **174 courses across 25 terms of seven**, sequenced so
  nothing arrives before what it needs. Tools, then the habits of running yourself, then the body and
  the household, people, quantitative foundations, computing, and from there the world in
  chronological order with the sciences, business, mathematics and computer science slotted after the
  courses they continue. Every term mixes at least two schools.
- `curriculum/TAXONOMY.md`: every Path cell is now a term. The intro, the design principles, the
  status key and "Placing a course on the Core" are rewritten; the term-choosing rule now leads with
  prerequisites and "how soon is it useful" rather than "does the Core need it".
- `scripts/core-path.mjs` no longer accepts `elective` and says so in the failure message. It still
  fails on a blank cell, on the two files disagreeing, and on a course that is on one and not the
  other, so all 174 stay placed.
- `CLAUDE.md` rule 4b and `docs/CONTENT_PIPELINE.md` Stage 0 updated to match.

**`#/map` is a real page.** The homepage's "the full map" link and the Courses page's "curriculum"
link both went to `curriculum/TAXONOMY.md` on GitHub, which asked a learner to read a Markdown table
in someone else's product to find out what was coming. `scripts/build.mjs` now parses TAXONOMY.md
into `window.FOVAL_MAP` and the site renders all 174 courses grouped by school, each with its term,
level, standpoint and one-line note, live ones linked and the rest marked as being written, with a
school filter. No GitHub links remain on the homepage. This also closes two of the six repo links
that were blocking the repo going private (backlog §13); `#/standards` is the last one.

**The Path page holds 25 terms without becoming a wall.** A term with nothing written yet folds into
a `<details>`, so the full route stays visible and in order while the page opens on the five terms a
learner can start today. Checked at phone and desktop width in both themes.

**`docs/BACKLOG.md` cut from 1,063 lines to 680.** Its own rule says shipped work moves to this file
and gets deleted there, and that had been ignored for weeks. The custom domain, the About page, the
homepage redesign, the core-path enforcement work and the renaissance-man gap review were all
already recorded here and are gone from the backlog. The lesson-splits rule and the scripture
licensing policy stayed, trimmed to the operative rule with the reasoning left here. What remains is
live work only.

## 2026-09-08 (later) — Stage 4 cut from five reviewers to one, and the marching order reset

**Why.** John asked whether any review steps were overkill for moving forward. They were. This file
had recorded since Bible Basics lesson 6 that one subagent doing all five review passes in its own
fresh context ran about 100k tokens and found everything the five-agent version found on the same
lesson, and the command still launched five every time, at 600k to 900k a lesson. That measurement
sat unacted-on through two courses' worth of reviews.

**What changed.**
- `.claude/commands/review-lesson.md` rewritten around two tiers. Tier A, one reviewer in a fresh
  context running every applicable pass, is now the default. Tier B, five reviewers in parallel, is
  reserved for sensitive domains under standards 3.4, standpoint courses, and lessons a Tier A pass
  sent back for heavy rewriting.
- The neutrality pass is skipped, with a line in REVIEWS.md recording the call, on lessons with no
  contested or value claims.
- On procedural courses the fact-check is executed rather than fetched: run the code, work the
  arithmetic.
- The second full review pass is no longer the default; it runs on a trigger.
- A pre-pipeline stub is replaced, not reviewed.
- `CLAUDE.md` rules 2 and 3 and `docs/CONTENT_PIPELINE.md` Stage 4 updated to match. Rule 2 now
  allows two lessons a session on procedural courses.

Nothing was cut that had caught something real: the fresh context, the adversarial fact-check, the
en-dash and em-dash sweep, reading every SVG by eye, measuring quiz option shapes, and full Tier B
on anything contested all stand.

**Also this session.** An audit of all seven live courses against John's read of the site. He was
right that the three pre-pipeline courses are the weak point: Clear Writing, Algebra Essentials and
Python Basics average 452, 444 and 464 words a lesson against Bible Basics' 13,160 and Logic's
9,380, and all three are Core courses. He was already served on three things he thought were
outstanding: every existing podcast episode was re-rendered on Gemini earlier the same day, the
Foval Core is laid out and validator-enforced across 52 courses in 8 terms, and How to Learn
Anything is complete with all eight episodes. `docs/BACKLOG.md` section 0b is rewritten around that.

**Two decisions from John, both closed.** Charon and Aoede stay as the host voices, so the twenty-one
owed episodes render on them and the question does not come back. And the three stub courses stay
live while they are rebuilt in place, rather than being unpublished, because taking them down would
drop the site to four courses and hole Terms 1 and 2 of the Core for weeks.

## 2026-09-08 (later the same day)

**The Bible: What It Is and How to Read It is published.** Twelve lessons, a twenty-two item final
test and a two-week reading project. It is the second course to go live this week and the first with a
`standpoint: christian` label, which means every lesson had to state the positions it disagrees with in
their own holders' terms, and that is where most of the review effort went.

- **Lessons 9 to 12 went through Stage 4**, five fresh-context reviewers each for 9 and 10, seven across
  11 and 12, plus four targeted Stage 1 research tasks to close gaps the reviews found.
- **What the reviews caught, in order of seriousness.** Lesson 11 ran Byzantine Text priority together
  with Received Text priority and attributed the merged position to a scholar who has published against
  one of them, sourcing both to two books written *against* the position that nobody here had opened; it
  now has a section in Robinson's and Hodges's own words, with the roughly 1,800 places the two texts
  differ verified from three independent counts. Lesson 10's argument from Jesus' view of Scripture, the
  course's own load-bearing claim, faced no objection while every other position in the lesson had a
  reply printed against it. Lesson 11 gave the complementarian side of the gender-language dispute a
  preface and gave the other side its corpus research. Lesson 10 promised "what others make of it" and
  delivered the academy, with no Jewish or Islamic doctrine of these books at all. Lesson 12 justified
  daily reading with the spacing literature, which measures re-study of the same material and does not
  support a linear reading plan. Lesson 12 also quoted Augustine saying what his correspondent said.
- **The Chicago Statement was quoted in its permissive half for the third time in this course**, against
  a standing instruction the research file had recorded twice. Both limiting clauses are now cited, and
  the research file's own article number for the 1982 statement turned out to be wrong, which is part of
  why the instruction kept being hard to follow.
- **Two validator bugs, both of which had been hiding real defects.** The SVG legibility checks matched
  only on the `<text>` tag, so a chart could put every font size on a `<g>` wrapper and pass with 24
  sub-legible labels while other lessons were flagged for the same fault; the check now resolves
  inheritance. And the answers-in-plain-prose check looked only eight lines ahead and missed one common
  phrasing, so it fired on six lessons doing it correctly and missed two that were not. Both fixed in
  `scripts/build.mjs`.
- **Four of the twelve lessons understated their own reading time**, one by a factor of three. A learner
  plans an evening around that number.
- **One item was left open rather than papered over**: the strongest King James Only position is named
  and distinguished but not stated in its advocates' own words, because that research did not land in
  time. The lesson says so in the text instead of summarising the view from its critics.

## 2026-09-08

**The podcast engine changed: Gemini 3.1 Flash TTS on fal, replacing VibeVoice 7B.** John listened
to Gemini-rendered episodes on fal and called them leaps and bounds better. Same scripts on both
sides, so it was a fair comparison, and the decision took one listen.

- `scripts/podcast.mjs` now posts to `fal-ai/gemini-3.1-flash-tts` in multi-speaker mode. Billing
  changed shape with it, from $0.04 a generated minute to $0.05 per 1,000 characters in, which is
  about $0.30 to $0.50 an episode. Near enough that cost played no part in the choice.
- The hosts are unchanged, their voices are new, because the VibeVoice presets do not exist on this
  model: **John is Charon** (calm, professional male), **Haley is Aoede** (warm female).
- The request gained `style_instructions`, which VibeVoice had no equivalent for: two hosts in
  conversation, unhurried and warm, thinking aloud rather than reading, never announcer-bright.
- **All nine live episodes were re-rendered** from their existing fact-checked scripts and uploaded
  over the same R2 keys, so no lesson frontmatter changed and no page needed rebuilding. Cost $2.96.
- `docs/PODCAST_OPTIONS.md` records that its own recommendation lost, and why the reasoning was
  wrong: it argued from what each model was built for and from reviews of an older Gemini
  generation, and neither survived one listen. Architecture picks the candidates; ears decide.

## 2026-09-06 (priority reset session)

**Priority reset by John.** He asked why a session was improving Personal Finance when Logic and
Argument and Bible Basics were nearly finished and still invisible. The marching order in
`docs/BACKLOG.md` had the placeholder courses ahead of the two drafted ones; it was wrong, and it
is rewritten. Publishing a finished course now outranks improving a live one. The backlog also
gained the course status table that would have made the mistake obvious, and a rule to update the
backlog in the same commit as the work rather than at session end, which this session had not been
doing.

**Personal Finance lesson 6, "What you actually keep" (taxes)**

- New lesson, the first of the five that `research/OUTLINE.md` planned. Bracket slicing, marginal
  versus effective rate, deductions versus credits, payroll tax, phase-outs and cliffs, withholding.
- Every figure computed from the IRS 2025 brackets, the $15,750 standard deduction and the SSA
  contribution and benefit base, with two charts drawn from those numbers and checked at 375px in
  both themes. One of them draws the whole tax bill on the same scale as the salary, which is the
  effective rate made visible as a length.
- Five fresh-context reviewers found two arithmetic errors that mattered (a predict block claiming
  a bracket crossing that does not happen, and two wrong answers in the practice key), three
  mechanism gaps (itemising, refundable credits, the underpayment penalty), seven neutrality
  findings, and a voice that was not yet the course's voice (12 contractions per 4,500 words
  against lesson 4's 71 per 3,500). All applied. Full log in the course's `research/REVIEWS.md`.
- **A process finding worth repeating:** the neutrality audit caught that this lesson had been
  drafted for a 3.4-sensitive domain with no tax research in `SOURCES.md` at all, and traced the
  lesson's worst finding straight to that gap. A "Taxes" section was added to `SOURCES.md` before
  any fix was applied, covering the mechanics sources, the benefit-cliff literature, and four
  contested questions with their positions.

**Personal Finance: Stage 2 re-outline and an honest course.yaml**

- `research/OUTLINE.md`: the five live lessons recorded and left unrenumbered, then lessons 6 to 10
  planned in full to close the scope gaps `SOURCES.md` had logged (taxes, retirement-account
  machinery, insurance, housing, scams). Taxes precedes accounts because the Roth choice is a bet
  on a marginal rate; scams closes the course because it defends everything before it. Plus the
  24-item course-end test blueprint and the one-page-plan project with its rubric, which standard
  4.4 requires once a course passes six lessons.
- `course.yaml` now describes the course a learner can actually take today. It had been promising a
  renting-versus-buying outcome that no lesson delivered, so that came out until lesson 9 delivers
  it, and `estimated_hours` went from 2.1 to 4.2 to 5.0 as lesson 6 landed.

**Homepage: the One ask panel keeps its side padding on phones**

- The `max-width: 860px` rule flattened every `.why-row` to `padding: 1.75rem 0`, and `.why-ask`
  was caught by it. But `.why-ask` is a tinted panel with a 4px oxblood rule down its left edge,
  not a plain row, so zeroing the horizontal padding put its text hard against that rule at phone
  width. Reported by John with a screenshot. Fixed at 1.15rem, checked at 375px in both themes.

## 2026-09-06 (podcast pipeline session)

**How to Learn Anything lesson 8: media pass (eighth of eight; item 2b complete)**

- The Dewald sleep-and-grades correlations (0.07, 0.10, −0.13) drawn at actual size on the
  full −1..1 scale a correlation can take, which is the section's own argument made visible.
- Barbara Oakley's TEDx talk embedded in the procrastination section with its length stated
  (18 minutes, flagged as save-for-after).
- Ten verified links: the open-access May & Elder review, Gollwitzer 1999 and the 2006
  meta-analysis, Steel 2007, Duckworth 2016, Rasch & Born free on PMC, Dewald, Lim &
  Dinges, the Guzey critique of Why We Sleep, and linked Go deeper entries.
- With this, every lesson of the flagship course carries media per standards 4.5: five data
  charts, two teaching diagrams, six videos (four of them the cited researchers speaking),
  and verified links throughout. The gocognitive channel (interviews with Bjork, Baddeley
  and others) proved to be the course's video goldmine and is noted in the backlog.

**How to Learn Anything lesson 7: media pass (seventh of eight)**

- A horizontal bar chart of Macnamara, Hambrick and Oswald (2014): variance in performance
  explained by practice, by domain (26/21/18/4/under 1), with the professions bar in
  oxblood and its "not distinguishable from zero" caveat on the bar. Drawn from figures
  already fact-checked into the lesson's debate section.
- Verified links: the Ericsson 1993 paper as a free PDF, the 2014 meta-analysis DOI, the
  open-access Ericsson & Harwell reply at Frontiers, and the open-access preregistered
  replication at Royal Society Open Science, in body and Go deeper.
- No embed: Ericsson short-form video does not exist except an Amazon-branded clip, which
  the no-sponsored-content rule excludes; his 27-minute final interview is linked in Go
  deeper with its length stated.

**How to Learn Anything lesson 6: media pass (sixth of eight)**

- A fading-the-guidance diagram (worked example → completion problem → problems alone →
  mixed types) with the three-in-a-row rule under the arrows, placed in the fade stage of
  the worked example. No data chart: the lesson's key numbers live inside predict blocks
  and a chart beside them would print the hidden answers.
- No video embedded: the only Sweller material on YouTube is hour-long podcasts, which fail
  the "say why to watch and how long" test for an embed; Ollie Lovell's free written
  interview series with Sweller went into Go deeper instead.
- Nine verified links: Sweller & Cooper 1985, Kalyuga 2003, both Chi papers (DOIs),
  open-access Bisra 2018 and Sweller 2019 at Springer, Dunlosky at AFT, and the Lovell
  series.

**How to Learn Anything lesson 5: media pass (fifth of eight)**

- A grouped bar chart of Rohrer and Taylor (2007) experiment 2: blocked versus interleaved,
  during practice (89/60) and a week later (20/63), placed after the worked example so it
  does not spoil the predict block that holds the same numbers.
- Bjork's gocognitive clip on the benefits of interleaving practice (6 minutes).
- Verified links: the 2007 paper at Springer, the 2015 classroom study free on ERIC, DOIs
  for the 2020 trial and Brunmair & Richter, the EEF review page, and linked Go deeper
  entries including RetrievalPractice.org and Learning Scientists interleaving guides.

**How to Learn Anything lesson 4: media pass (fourth of eight)**

- A bar chart of the ridgeline study's four horizons: best gap 1/11/21/21 days for tests
  7/35/70/350 days out, with each gap's share of the horizon under the axis, drawn from the
  lesson's own verified table.
- Bjork's gocognitive clip on the theory of disuse and the role of forgetting (7 minutes),
  embedded at the top of the mechanism section it argues for.
- Verified links: both Cepeda papers as free PDFs from Cepeda's own York site (2006 review
  and 2008 ridgeline), Latimier 2021 at Springer, and DOIs for the Carpenter 2012, Kang
  2016, and Carpenter 2022 Go deeper entries.

**How to Learn Anything lesson 3: media pass (third of eight)**

- A stacked-bar chart of Karpicke and Blunt (2011) experiment 2, Table 1: the same 120
  students as two bars, what happened on the test (101/6/13) against what they predicted
  (30/31/59). The exact counts were verified against the paper's PDF before drawing.
- Bjork's "The Power of Testing" (LastingLearning, 3½ minutes) embedded after the founding
  study; verified via oEmbed.
- Seven verified links: Dunlosky 2013 DOI, both Purdue learning-lab PDFs (Roediger &
  Karpicke 2006, Karpicke & Blunt 2011), Yang 2021 DOI, Agarwal 2021 at Springer, plus
  linked Go deeper entries including RetrievalPractice.org and its main guide PDF.

**How to Learn Anything lesson 2: media pass (second of eight)**

- A two-stores bottleneck diagram (new material → working memory → long-term memory, with the
  gold return arrow for stored chunks), drawn inline with theme tokens and checked in both
  themes at both widths.
- Alan Baddeley's five-minute gocognitive interview on how long-term and working memory
  relate, embedded where the two stores are introduced; availability verified via oEmbed.
- Body links, all verified live: Miller 1956 full text at Classics in the History of
  Psychology, Cowan 2001 on PubMed, Willingham's "What Will Improve a Student's Memory?" at
  AFT, and the open-access Sweller, van Merriënboer & Paas 2019 at Springer. The lesson's
  no-links warning is gone.

**How to Learn Anything lesson 1: media pass (marching-order item 2b, first of eight)**

- A line chart of the Roediger and Karpicke (2006) crossover, drawn inline from the six real
  percentages with theme tokens, direct value labels, and the source in the caption. The
  standards name this exact chart as the kind worth drawing.
- Robert Bjork explaining storage versus retrieval strength in his own words: a five-minute
  gocognitive interview embedded where the model is introduced. Availability verified via
  YouTube oEmbed before embedding.
- Six links in the body, each to a verified free copy: Bjork & Bjork 2011 and Soderstrom &
  Bjork 2015 (Bjork lab PDFs), Roediger & Karpicke 2006 and Karpicke & Blunt 2011 (Purdue
  learning-lab PDFs), Kornell & Bjork 2008 (Bjork lab), Dunlosky et al. 2013 (DOI). Go deeper
  entries linked too. The lesson's "no links in the body" lint warning is gone.
- Verified by headless capture in both themes at phone and desktop width: chart legible
  everywhere, video poster loads, no token collisions (one --navy/--line-strong collision the
  linter caught was fixed before commit).

**How to Learn Anything: the six shipped answer leaks fixed; the lint now bites**

- Marching-order item 2(a). The six prompts in the live course that told the reader to answer
  before reading on and then printed the answer in plain prose (lessons 1, 2, 3, 5 twice, 7)
  are `:::checkpoint` blocks now, so the answer sits behind the button the way the pedagogy
  intends. Wording preserved; in lesson 3 the answer was split from the narrative that follows
  it so only the answer hides.
- The answer-leak lint in `scripts/build.mjs` was promoted from a warning to a build failure on
  published courses, now that no published course trips it. Drafts still warn (eight remain,
  in Bible Basics and Logic 9) and those will block publishing until fixed.
- Verified in the served site: the new blocks render as the standard Check-yourself component
  with the answer in a closed details element, and no stray `:::` fences reached the build.

**The podcast pipeline is built: marching-order item 1 is done**

- `scripts/podcast.mjs`: plan / render / upload / stamp, all driven by the lesson path alone
  (script, MP3, R2 key and public URL derived from it). Dry-run by default; refuses to render
  a script whose frontmatter carries no `checked:` fact-check entry; $2 cost cap without
  `--force`; upload verifies the public R2 URL answers before stamping; `FAL_KEY` read from
  `.env.local` automatically. The fal request shape is the one that rendered the first episode.
- `/make-podcast <lesson>` command: gates on the lesson being settled (review, voice pass,
  media pass), writes the six-minute John/Haley script from the lesson only, fact-checks it in
  a fresh-context subagent before any money is spent, then renders, uploads, and stamps.
- Stage 6 (podcast) added to `docs/CONTENT_PIPELINE.md`; the feedback loop became Stage 7.
- Episode scripts are content and now live in git at
  `courses/<school>/<course>/podcast/<id>.script.md`; the lesson 2 script moved there from
  `scripts/podcast/samples/`. Rendered MP3s go to git-ignored `audio-out/` and R2, never git.
- Verified against the live lesson 2 episode: plan reports it done end to end, the dry-run
  estimate ($0.34) matches the real spend ($0.32), and stamping is idempotent.

## 2026-09-06 (podcast setup session)

**The first podcast episode exists, and the plumbing around it**

- Fourth research pass on the engine question after John asked "are you sure?": VibeVoice on
  fal.ai confirmed (memo updated with the community-fork provenance, the reseller pricing, and
  ElevenLabs v3 promoted to challenger); John then chose fal himself.
- fal.ai account created by John with $10 credits; API key in git-ignored `.env.local`.
- Bible Basics lesson 2 rendered as a 6-minute two-host episode for $0.32: script written by hand
  from the lesson, fact-checked in a fresh-context subagent (five nits found and fixed before
  rendering), rendered on VibeVoice 7B.
- R2 activated by John; bucket `foval-audio` created, public dev URL enabled, episode uploaded.
- Lessons take `audio:` frontmatter; the lesson page renders a gold-topped Listen block with the
  synthetic-voices disclosure. Live when Bible Basics publishes.
- Homepage feature card 08 became a real capture of the player (new `tile-podcast` screenshot
  target); the typographic teaser and its `feature-soon` CSS removed.
- `podcast-compare.mjs` request shapes verified against live docs; ElevenLabs binary response and
  2,000-character batching fixed, Gemini default bumped to 3.1 Flash TTS, poll budget raised to
  20 minutes after a 13-minute cold start.

## 2026-09-06

**Homepage redesign (approved by John, live)**

- The hero keeps Oxford navy but the library video shows through more, closed by a gold rule.
  Motion throughout, all gated on prefers-reduced-motion: staggered hero entrance, scroll-reveal
  on sections and cards, count-up stats, sliding nav underlines.
- The "more than words" strip became eight numbered feature cards: dimmed screenshots that come
  forward on hover with a sliding description; a two-column grid on phones. Card 08 is a
  typographic teaser for the podcast (no mockups of unbuilt features).
- Three credited Pexels photographs as full-bleed bands with navy scrims and gold rules; a
  centred closing CTA band. Credit files sit beside each image in `site/assets/media/`.
- Copy cut roughly in half across the hero, panels, and the ask. Gold and oxblood now do
  structural work: section-rule tabs, panel dashes, card subject lines, hero stats.
- Link previews (iMessage etc.) had been grabbing a quiz screenshot; `index.html` now carries
  Open Graph and Twitter tags pointing at a branded card, regenerated with `npm run card`
  (`scripts/social-card.mjs`).
- Housekeeping: the stranded `claude/foval-platform-work-zllo4u` branch (homepage screenshots,
  accounts worker) was merged into `main`; FLI shirt ideas noted in the backlog for the swag store.

**Curriculum map**

- Added 12 courses. Four were requested by name: Graphic Design Fundamentals (M. Wesley),
  Computer Science Foundations and Technology Leadership: CTO and CIO (John), and a widened
  Statistics for Citizens covering the normal distribution. Eight more filled breadth gaps:
  Forecasting, Why Nations Diverged, How Things Work, Drawing and Visual Thinking, Practical Civics,
  Project Management, Process Improvement, How Markets Work, How to Learn a Language.
- Practical Civics: Being Useful in Public Life joined the Foval Core in term 6. The Core is
  52 courses; the map is 174.
- Added the Capstone row, which had been on the Core with no row on the map.

**Placement is now enforced**

- Every course row in `curriculum/TAXONOMY.md` carries a **Path** cell: a term (`T1` to `T8`) or
  `elective`. `scripts/core-path.mjs` checks that the map and `curriculum/core-path.yaml` agree in
  both directions and fails the build on a blank or invalid cell, so a course cannot reach the map
  without a placement decision. It runs inside `npm run validate` and `npm run build`.
- The numbered Core list in TAXONOMY.md is generated from `core-path.yaml`
  (`npm run path -- --write`). Maintained by hand it had drifted: two courses numbered 18, term 5
  out by one, and two philosophy courses collapsed into one line.
- "Placing a course on the Core" in TAXONOMY.md documents how to choose a term. `/new-course` makes
  it the first step and CLAUDE.md carries it as rule 4b.

**Fixed on the live site**

- Four entries in `core-path.yaml` had unquoted titles containing commas, which YAML read as extra
  keys. The Path page had been showing "Early Modern World", "The Age of Revolutions", "The Modern
  World" and "Meaning" with their titles cut off at the comma. The checker now rejects unexpected
  keys so it cannot recur.

**Docs**

- `docs/CONTENT_PIPELINE.md` said nothing publishes without a human sign-off, which contradicts
  CLAUDE.md rule 5. Corrected.
- Backlog section 13 records how to use Alex Hormozi's material in the business courses: what to
  take from his teaching craft, what he is as a source under standards 2.2 and 2.5, and what to
  cross-check every claim against.

**Platform: homepage, accounts, and the funding promise**

- Homepage: a "What makes this different" section below the hero. Three panels (thinking while you read, spaced review, the Christian Standpoint label) and John's one ask about the feedback form. Every picture is a real screenshot of the live site, captured at phone and desktop width in both themes and swapped with `<picture>` on `prefers-color-scheme`, so a dark reader never gets a photograph of a light page.
- Fixed: the Review card's "Next" button was visible before the reader answered, because `.btn { display: inline-flex }` outranks the user agent's `[hidden]` rule.
- Researched what to put in front of D1 for accounts and wrote `docs/AUTH_OPTIONS.md`, a decision memo with four options and a recommendation. Corrected `BACKLOG.md` 8b, which still said accounts were blocked on a Supabase project slot; they are not, and have not been since the move to Cloudflare.
- Accounts and cross-device sync built as a Cloudflare Worker over D1 (`workers/api/`): sign in with Google or a six-digit code by email, and progress, review schedule and streak merge across devices. Signing in cannot lose local progress. Written and tested (28 Worker checks, 12 browser checks); not deployed, and inert until `window.FOVAL_API` is set. Deploy steps in `workers/api/README.md`.
- Homepage: added "A lesson page is more than words", a strip of four real captures from published courses (a marked quiz with its explanation, an exercise, a Python code block, the transcript). Swipeable on phones. Charts and video still have no published course to photograph; that panel is queued on Bible Basics or Logic publishing.
- Researched the podcast question properly and wrote `docs/PODCAST_OPTIONS.md`. Gemini Notebook does now have an audio-overview API, but only on the Enterprise tier at about $135 a month, so the workable path is a script written and fact-checked here, rendered by a two-voice TTS at about $0.13 a lesson.
- Homepage: a fourth panel showing a real chart from a lesson, and the strip grown to six tiles including the six-act map and the free-recall box. The chart and the map come from Bible Basics, which is still drafting; publishing it is now a dependency of the homepage being honest. The video embed still cannot be captured from a web session, because the network policy there blocks YouTube.
- `npm run build:drafts` compiles drafting courses into the site so a draft can be read in the real thing. Preview only; never commit the output.
- The linter now catches SVG labels wider than their own viewBox, which the browser clips silently. Nine of them across Bible Basics and Logic, including both chart source captions in Bible Basics lesson 2. `scripts/text-width.mjs` holds real Arial metrics, checked against Chromium over all 252 labels in the repo; because `system-ui` differs by platform, a label can fit on a Mac and be clipped on Android, so the check has a hard tier and a warning tier.
- `docs/PODCAST_OPTIONS.md` rewritten after a harder look at the unofficial and open-source routes. Recommendation changed from Gemini Flash TTS to VibeVoice on fal.ai: open weights, built for multi-speaker long-form, $0.04 a generated minute, about $13 for every lesson currently live, and no lock-in because the model can be self-hosted later.
- `npm run shots` regenerates every homepage screenshot from one script (`scripts/screenshots.mjs`), driving the Chrome already installed on the machine. It refuses to write a file when the thing it is photographing did not load, so a blocked YouTube embed cannot ship as a blank player. Adds `playwright-core` as the first devDependency.
- Copy: "No accounts" in the footer and "No account" in the page description became "no account needed to learn", which stays true once accounts ship, and the README no longer promises "no ads, ever" while that is under discussion.
- Funding promise narrowed rather than broken. The site said "no ads" flatly in five places, which would have become a lie the day any sponsorship appeared. It now promises the part that is worth something and can be held forever: nothing about you tracked, profiled or sold, nothing you read used to decide what you get shown, and no advertisement, sponsor slot, affiliate link or paid placement in any lesson, assessment or review card. That last one is Editorial Standards 4.5 now, not just marketing copy. Changed together across VALUES.md, the standards, the roadmap, the About page, the footer and the README. No advertising has been built and none is planned yet.
- Dropped the tracking promise as well, on John's call: the site no longer promises that nothing about a learner is tracked, profiled or sold. The one forward-looking promise left about funding is the editorial one, that no lesson, assessment or review card ever carries an advertisement or paid placement. Present-tense statements of fact about what is actually stored were kept, because accurate disclosure is not the same thing as a promise.
- Third pass on the podcast research after John pushed back that it was not deep enough. Play.ai PlayNote, the closest thing to a commercial NotebookLM API, shut down permanently on 31 December 2025 after Meta acquired PlayAI, taking around 40,000 customers' accounts and audio with it and offering no migration. Browser automation of NotebookLM works but authenticates as a real Google account, and NotebookLM has no suspension of its own, so a flag disables the whole account, which is the same account the sign-in backend depends on. Recommendation is unchanged and better supported: our own script, rendered by an open-weights voice model.
- Fixed the hero never going full width. It was written as a full-bleed band but its negative margins only cancelled the page padding, so above about 1200px the header ran edge to edge and the hero stopped dead with white either side. Content column widened from 1100 to 1280 at the same time.
- Pilot podcast script written by hand from How to Learn Anything lesson 3, and `scripts/podcast-compare.mjs` to render it on VibeVoice, Gemini and ElevenLabs. Dry run by default, $0.79 for all three engines on the four minute sample. Writing the script by hand rather than generating it means the comparison needs no LLM key and demonstrates the point that the script is the half the editorial standards apply to.

## 2026-09-05 (later)
- Hero video (Pexels, free licence), quieter type, no italics, larger tagline, schools section.
- Media in lessons: figure and video blocks, standards 4.5, drafting brief updated; all new drafts include charts, images, videos, and links.
- Logic and Argument: 10 lessons drafted, lesson 1 reviewed. Bible Basics: lessons 1–8 drafted, 9–12 in progress.
- Custom domain www.fovallearninginstitute.org configured on Pages (DNS pending at Namecheap).
- `docs/BACKLOG.md` added as the handoff document.

## 2026-09-05
- Custom domain live and secure at https://www.fovallearninginstitute.org, with HTTPS enforced.
- Bible Basics switched from the ESV to the NET Bible across all twelve lessons; Editorial Standards 4.7 added, covering which translation to quote and why. The ESV's free allowance excludes Creative Commons works and Bible reference works, and this course is both.
- Bible Basics lessons 1 and 2 through Stage 4 review and fixed. Logic and Argument lesson 2 reviewed, findings recorded, fixes pending.
- `scripts/build.mjs` now lints every lesson including drafts: em dashes, ESV quotations, unparseable frontmatter, dark SVG fills, sub-15px SVG labels, link-free bodies, and argument displays whose conclusion would render inside the previous premise.
- Nine argument displays in Logic lessons 4, 5 and 7 fixed; they had been rendering with the conclusion folded into the last premise.
- SVG text and shape fills across 13 lessons converted to theme tokens so diagrams follow the reader's light or dark theme.
- Feedback endpoint live: Cloudflare Worker (`workers/feedback/`) backed by a D1 database, wired into the site. Write-only, origin-restricted, stores no IP or user agent. Read with `npm run feedback`.
- Value 9 reworded from open source code to openness about the teaching, in `docs/VALUES.md` and on the About page.
- "About" added to the main navigation; footer rebuilt as a real two-column menu.
- Custom domain DNS added at Namecheap: parking records removed, four GitHub Pages A records on `@` and `www` CNAME to `jfoval.github.io`. Waiting on propagation before HTTPS is enforced.
- Added the About John page at `#/about-john`, linked from the About page and the footer, with his headshot at `site/assets/media/john-foval.jpg`.
- Renamed to **Foval Learning Institute**. Tagline: Faith. Knowledge. Life. Free for everyone. Repo is now github.com/jfoval/foval-learning-institute; site at jfoval.github.io/foval-learning-institute.
- Added `docs/VALUES.md`, the nine values every decision and every piece of feedback runs against. Shown on the About page.
- Removed the "review" status and the owner sign-off gate. Courses go live when they finish the pipeline and improve through the feedback loop; the owner reads them as a learner.

## 2026-09-04 (later)
- *How to Learn Anything* (8 lessons, final test, two-week project) completed through the full pipeline: research, outline, drafts, four-pass reviews with primary-source fact-checks, style-guide voice pass. Status: review, awaiting the owner's read-through.
- Added `docs/STYLE_GUIDE.md` and a fifth "voice" reviewer; `/voice-pass` command.
- Feedback ask on every lesson; `docs/FEEDBACK_LOOP.md`; `/triage-feedback` command.
- Predict-first and checkpoint blocks, worked-example gaps, and free recall before every quiz.
- Revised Keystone Arch mark installed (header, icon, certificate seal).

## 2026-09-04
- Repository made public; site live at https://jfoval.github.io/foval-learning-institute/
- Added the School of Christian Studies (15th school) and standpoint-course rules (Editorial Standards 3.7)
- Incorporated Peterson Academy research into the roadmap: audio mode, "Ask this lesson", public changelog, community rules before social features
- Began *How to Learn Anything* through the full content pipeline
- Founded: curriculum map, editorial standards, content pipeline, static site with Path, Review, and transcript, four placeholder courses
