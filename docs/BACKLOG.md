# Backlog and Handoff

*Last updated 2026-09-06. Read this first in a new session, after `CLAUDE.md`. It is the single list of what is in flight, what is next, and what John has asked for that isn't built yet. Keep it current: when something ships, move it to `docs/CHANGELOG.md` and delete it here.*

## 0. Work that is not on `main` is not done

The live site serves `main`. A platform session on 2026-09-06 left thirteen commits on a branch
while John refreshed his browser wondering why a layout fix had not appeared. That is the whole
lesson. `CLAUDE.md` rule 11 is the rule; this is the reminder at the top of the page you read first.

Merge when `npm run validate` exits 0 and anything visual has been checked in both themes at phone
and desktop width. `git pull --rebase origin main` first: content sessions push there too, and on
2026-09-06 two of them did while a third was mid-merge.

## 0b. THE MARCHING ORDER (set by John, 2026-09-06). Work this queue top to bottom.

John set the priority at the end of the podcast session: bring everything currently live up to
the standard the new lessons set, finish the two in-flight courses, podcast all of it, and only
then start the next course. A fresh session picks up **the topmost unfinished item** below, does
one session-sized bite of it, updates this list, and pushes to `main`. Do not skip ahead and do
not start new courses until this queue is empty. Constraints that shape the pace: a Stage 4
review cycle is 600k to 900k tokens (one lesson per sitting), rate limits are shared, two
parallel sessions is the ceiling. A platform session must not touch `courses/` or `curriculum/`
(see below); items 2 to 5 are content work, item 1 is platform work, so they can run in parallel.

1. ~~**Build the podcast pipeline.**~~ **DONE 2026-09-06.** `scripts/podcast.mjs`
   (plan/render/upload/stamp, dry-run by default, refuses to render an unchecked script or
   spend over $2 without `--force`) plus `/make-podcast <lesson>` (writes the script, fresh-
   context fact-check before money, then render/upload/stamp). Stage 6 added to
   `docs/CONTENT_PIPELINE.md`. Details in the changelog.
2. **How to Learn Anything up to the new standard.** The flagship, and what the homepage
   photographs. (a) ~~Fix the six answer leaks and promote the lint~~ DONE 2026-09-06: all six
   are `:::checkpoint` blocks now, and the leak lint fails the build on published courses.
   (b) Media pass per standards 4.5 on all eight lessons:
   real images with credits, charts from real data, YouTube where someone explains it better,
   links in the body. One or two lessons per session. **Lesson 1 done 2026-09-06** (crossover
   chart from the Roediger and Karpicke data, Bjork's own five-minute gocognitive video on the
   two strengths, six body links to free PDFs of the cited papers, every URL verified live;
   the gocognitive channel likely has clips for later lessons too). **Lesson 2 done the same
   day** (two-stores bottleneck diagram, Baddeley's gocognitive interview on working versus
   long-term memory, links to Miller 1956 full text, Cowan 2001, Willingham's AFT article,
   and the open-access Sweller 2019). **Lesson 3 done** (result-versus-prediction stacked
   bars from Karpicke & Blunt's Table 1, Bjork's "Power of Testing" clip, seven verified
   links). **Lesson 4 done** (best-gap-by-horizon bar chart from Cepeda 2008, Bjork's
   theory-of-disuse clip, links incl. both Cepeda PDFs from the author's site). **Lesson 5
   done** (Rohrer & Taylor practice-versus-test grouped bars, Bjork's interleaving clip,
   eight verified links incl. the 2015 classroom paper free on ERIC). **Lesson 6 done**
   (fading-the-guidance diagram, nine links incl. open-access Bisra 2018 and Ollie Lovell's
   Sweller interviews; no video embedded because no good short one exists, only hour-long
   podcasts, which went into Go deeper instead). **Lesson 7 done** (Macnamara
   variance-by-domain bar chart, links incl. the Ericsson 1993 PDF and both open-access
   debate papers; Ericsson's last interview linked in Go deeper, not embedded, because it
   runs 27 minutes and the only short clip is Amazon-branded). **Lesson 8 done, so the
   media pass (2b) is COMPLETE on all eight lessons 2026-09-06** (Dewald correlations drawn
   at actual size on the full −1..1 scale, Oakley's TEDx talk, ten verified links incl. the
   Why We Sleep critique). Next for this course: (c), podcasts, one episode per session via
   /make-podcast, starting with lesson 1.
   (c) Podcast each lesson as it settles.
3. **The four placeholder courses** (Python, Algebra, Personal Finance, Writing Clearly), which
   are live and have never been through the pipeline. For each, in this order: run Stage 1
   research to produce `research/SOURCES.md`, then Stage 4 reviews lesson by lesson against it
   (the redraft decision comes out of the reviews; some lessons may survive, some need
   rewriting), voice pass, media pass, podcasts. They stay live while improving. Start with
   Personal Finance (most consequential if wrong), then Python, Algebra, Writing Clearly.
4. **Bible Basics to published.** Lesson 3's review cycle finished (check `research/REVIEWS.md`
   for how far it got), lessons 4 to 12 reviewed, lesson 1's eight open findings closed, the
   neutrality audit where 3.4 domains are touched, assessments built (folder is empty), then
   the one-time split/renumber pass (7b; seams are marked in-file), then `status: published` in
   both course.yaml and TAXONOMY.md. Publishing this course is a homepage-honesty dependency.
   Podcasts for all lessons after the renumber (lesson 2's episode regenerates then, ~$0.32).
5. **Logic and Argument to published.** Lesson 2's recorded fixes applied first (they are a
   work order in `research/REVIEWS.md`), lessons 3 to 10 reviewed, assessments built
   (OUTLINE.md lines 140 to 143 specify them), publish, podcasts.
6. **Queue empty: stop.** John starts the next Foval Core course in its own session
   (`/new-course` etc.), with the podcast as a standard pipeline stage from then on.

## 1. Pipeline state right now

*Rewritten 2026-09-06 at the end of the marching-order session. This is the handoff.*

### If you are starting fresh, read this paragraph first

Nothing is half-finished on disk; the working tree is clean and `main` is pushed. The last
session worked the marching order (0b) top down and closed its first two items: **the podcast
pipeline is built** (`scripts/podcast.mjs` + `/make-podcast`, dry-run tested against the live
lesson 2 episode) and **How to Learn Anything is at the new standard**: the six answer leaks
fixed (lint now fails published builds), and the media pass done on all eight lessons (five
data charts, two diagrams, six videos, verified links throughout; every visual checked in both
themes at phone and desktop width). So the topmost unfinished work is now, in order:
**(1) podcast How to Learn Anything, one episode per session** — the lessons are settled, so
`/make-podcast courses/learning-and-mind/how-to-learn-anything/lessons/01-...md` is the next
command, ~$0.30 an episode from the fal credits; **(2) Personal Finance into the pipeline**
(0b item 3); and, runnable in parallel by a second content session, **the reviews that were
already queued**: Bible Basics lesson 3 (check `research/REVIEWS.md` for how far its cycle
got) and Logic and Argument lesson 2, whose recorded fixes are still unapplied. Everything
shipped on 2026-09-06 is in `docs/CHANGELOG.md`; sections 10 to 13 here are new course
requests and notes, none started or urgent.

**Tricks the media pass proved, worth reusing on the placeholder courses:** the gocognitive
YouTube channel is short interviews with the researchers the lessons actually cite (Bjork,
Baddeley, and more); verify every URL before it goes in (curl the PDFs, YouTube's oEmbed
endpoint for videos; several candidates failed and were swapped); verify chart numbers
against the paper itself when the lesson doesn't carry them; and place charts so they don't
sit beside a `:::predict` whose hidden answer they would print.

**One thing changed that affects how you work:** adding a course to `curriculum/TAXONOMY.md` now
requires a `Path` cell (a Core term or `elective`) and `npm run validate` fails without it. See
rule 4b in `CLAUDE.md`.

### What a platform session owns, and what it must not touch

Two content sessions ran in parallel on 2026-09-06, one on `courses/foundations/**` and one on
`courses/christian-studies/**`. A platform session owns `site/`, `workers/`, `scripts/` and `docs/`
and **must not edit anything under `courses/` or `curriculum/`**. If a content change is needed,
note it here and leave it. Two are noted and still outstanding: the media pass on How to Learn
Anything (section 7) and the clipped SVG labels (section 8e).

### Live on the site

Five courses, 28 lessons: How to Learn Anything (8), Python (6), Algebra (5), Personal Finance (5),
Writing Clearly (4). The four besides How to Learn Anything predate the standards and have not been
through the pipeline. The site is live and secure at https://www.fovallearninginstitute.org.

### Bible Basics (`courses/christian-studies/bible-basics`, `standpoint: christian`)

12 lessons drafted. **Lesson 1 reviewed and fixed. Lesson 2 reviewed and fixed. Lesson 3 was in its
review cycle when the session ended; check `research/REVIEWS.md` for how far it got and re-run
whatever is missing.** Lessons 4 to 12 not reviewed. Assessments folder empty.

Course-wide work already done, so do not redo it: every lesson now quotes the **NET Bible** with the
required notice (the ESV was unusable, see 8d below); `SOURCES.md` corrected in five places at
source so the errors stop propagating; all SVG text and shape fills tokenised for the dark theme;
all frontmatter parses.

Still open on lesson 1 (recorded in REVIEWS.md, eight findings): Fee & Stuart and Longman & Dillard
still uncited though SOURCES.md names the first as the origin of the lesson's central idea; no
failure case for the shelf rule (Jonah is researched and unused); Hayes's own words on "Old
Testament"; the Psalm 9/10 attribution; the two-block arrangement of the Letters; two missing
misconceptions.

### Logic and Argument (`courses/foundations/logic-and-argument`)

10 lessons drafted, **status `drafting`, never been live**. Lesson 1 reviewed in an earlier session.
**Lesson 2: all five reviews are recorded in `research/REVIEWS.md` as a work order and the fixes are
NOT applied. Start there.** Lessons 3 to 10 not reviewed. Assessments folder empty; `OUTLINE.md`
lines 140 to 143 fully specify both the 20-item final test and the project rubric.

Already fixed course-wide: nine argument displays in lessons 4, 5 and 7 that rendered with the
conclusion swallowed into the last premise (lesson 2's three remain, in its fix pass); SVG fills
tokenised.

### What a Stage 4 cycle costs

Roughly 600k to 900k tokens per lesson across seven agents (five reviewers, an orchestrator, a fix
pass), and it produces 30 to 45 findings. Budget one lesson per sitting. Rate limits are the real
constraint and are shared across sessions; two parallel sessions is the ceiling before they starve
each other.

### How to run one (this works; earlier attempts stalled)

One orchestrator agent per lesson that: reads the standards, the style guide, SOURCES.md and BOTH
courses' REVIEWS.md; launches five reviewers **in a single message with `run_in_background: false`**
so it blocks until they return (backgrounding them makes the orchestrator end its turn and lose the
work); consolidates into REVIEWS.md with finding IDs; applies the fixes; appends "Resolutions
applied" including what it chose not to fix and why.

### Defects this drafter repeats, confirmed across three lessons in two courses

1. **Research gathered at Stage 1 and never used.** The largest category every time. Named textbooks
   uncited, verified passages unquoted, explicit SOURCES.md instructions dropped. Lesson 2 of Bible
   Basics had eleven such items.
2. **Citing sources that were never read.** Logic lesson 2 cites Hurley and Copi as authorities while
   SOURCES.md records neither chapter was opened. The worst class, because it is an integrity
   problem rather than an error.
3. **Diagrams that contradict the lesson.** One taught the misconception its own quiz punished; one
   put a ninth-century-BC object below fifth-century-BC events in a timeline; one was drawn on three
   different scales while its caption claimed one.
4. **Self-checks that print their own answer** in plain body text instead of hiding it behind
   `:::predict` or `:::checkpoint`. Found in all three lessons reviewed.
5. **Quiz items answerable by option shape alone**: the key being the only hedged option, the only
   one that applies the method, or the longest. Bible Basics also never uses answer index 3; Logic
   lesson 2 does, so check rather than assume.
6. **Contested claims asserted as settled** in the direction that favours the course's position.
7. **Voice tics**: "Here is" section openers, paragraphs ending on a compressed one-line moral,
   pipeline vocabulary in learner-facing headings ("worked example", "the mechanism", "Do it now").
8. **`minutes` understating real load** by a third to a half.

### What the linter now catches, so reviewers need not

`scripts/build.mjs` lints every lesson including drafts. Findings fail the build on a published
course and warn with "[draft: fix before publishing]" on a draft. It checks: em dashes; ESV
quotations; frontmatter that does not parse and quiz items that lost their question or options;
SVG text and shape fills hardcoded dark; SVG labels under font-size 15; **SVG labels wider than
their own viewBox, which the browser clips silently**; bodies with no links; and argument displays
whose conclusion line would be folded into the previous premise.

The viewBox rule is worth understanding before acting on it. Node cannot measure text, so
`scripts/text-width.mjs` holds real Arial advance widths, checked against Chromium over all 252
labels in the repo. The catch is that these SVGs ask for `system-ui`, which is a different typeface
per platform: the true width ran between 0.97 and 1.13 times the Arial estimate, so **a label can
fit on a Mac and be clipped on Android**. The rule therefore has two tiers. Over the box even in the
narrow font is a finding (build failure on a published course). Over it only in the wide font is a
warning, and that tier can over-report slightly; the fix is cheap either way, so give it the room.

## 2. Custom domain (DONE 2026-09-06)

John bought `fovallearninginstitute.org` at Namecheap. `site/CNAME` contains `www.fovallearninginstitute.org` and GitHub Pages is set to that custom domain.

**Done 2026-09-05:** the two Namecheap parking records (CNAME `www` to `parkingpage.namecheap.com` and the URL Redirect on `@`) were deleted and these five records added and saved in Advanced DNS:

| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |
| CNAME | www | jfoval.github.io | Automatic |

**Done.** DNS propagated, GitHub issued a Let's Encrypt certificate (valid to 5 December, auto-renewing), and HTTPS is enforced. `http://` returns 301 to `https://`, and the apex 301s to `www`. Getting the certificate issued needed the custom domain removed and immediately re-added in the Pages settings after two hours of GitHub not issuing one; that is the documented fix and it worked within a minute. Live at https://www.fovallearninginstitute.org.

## 3. About page with John's bio (shipped 2026-09-05)

Done. `#/about-john` in `site/assets/app.js` (`viewAboutJohn`), linked from the About page and the footer, headshot at `site/assets/media/john-foval.jpg` (his own photo, no credit line needed), `.portrait` style in `styles.css`. If John wants changes, edit `viewAboutJohn`.

## 4. Personalised learning path from a questionnaire (not started)

A third way in, alongside the Foval Core and free choice. Spec:

- **Questionnaire** at `#/plan`: age band; what they want out of it (be well-read / practical skills / faith / career / all of it); time per week; current strengths and gaps (self-rated across the 15 schools, three levels); a few life-goal prompts (start a business, understand the Bible, be a better thinker, manage money, get healthier, be more self-reliant); how they like to learn (reading, listening, doing).
- **Engine:** a scoring table from answers to school weights, then a path assembled from `curriculum/core-path.yaml` plus TAXONOMY courses: always starts with How to Learn Anything and one thinking-tools course; weights the rest by goals; respects prerequisites; sizes each term to the time budget. Deterministic and explainable: the page shows *why* each course is there. Phase 1 can be client-side JS; Phase 3 could use Claude to write the rationale text.
- **Attach to profile:** the plan is saved (localStorage now; Supabase profile in Phase 2) as the learner's active path; the Path page then shows *their* path with the same progress dots, "next up", and time estimates; "switch to the Core" and "rebuild my plan" buttons.
- Data file: `curriculum/planner.yaml` with the question list and weights, so it's editable without touching code.

## 5. Accomplishments page, sharing, and credentials (not started)

- **Achievements page** at `#/achievements`: a clean, screenshot-friendly layout (fixed max width about 600px, the Keystone Arch mark, the learner's name, courses completed with dates, lessons, hours, retention score, streak, certificates). Designed so a plain screenshot looks like a credential: generous margins, no UI chrome, the institute name and URL in a footer line.
- **Share buttons:** copy link, share to X/LinkedIn/Facebook via their share URLs, "copy as image" using a canvas render of the card (html-to-image via cdnjs, or an SVG template rendered to PNG). Native share on phones via `navigator.share`.
- **Verifiable certificates** need Phase 2 (accounts) so a certificate ID can be looked up at `/verify/<id>`; until then the share page is self-attested and says so.
- **Accreditation:** documented in `docs/PLATFORM_ROADMAP.md` Phase 3. Realistic path: Open Badges 3.0 issuance, LinkedIn "Add to profile" fields, employer or institution partnerships, and rigorous public assessments. Formal accreditation as a degree-granting institution is a multi-year regulatory process; revisit when there are learners and a track record. Research options for a certificate mark that is honest ("Foval Learning Institute Certificate of Completion, not accredited credit").

## 6. Podcast for every lesson (FIRST EPISODE LIVE 2026-09-06; PIPELINE BUILT later that day)

**Where this stands now, after the setup session on 2026-09-06 (read this, skip the history below
unless you need it):**

- **The engine is chosen: VibeVoice 7B on fal.ai.** John asked "are you sure?" and a fourth
  research pass (recorded in `docs/PODCAST_OPTIONS.md`) confirmed it; he then called it himself.
  His fal.ai account exists, has $10 of credits, and its API key lives in **`.env.local`**
  (git-ignored) as `FAL_KEY`. `source .env.local` before rendering.
- **The first real episode exists.** Bible Basics lesson 2, a 6-minute two-host script written by
  hand from the lesson (now at `courses/christian-studies/bible-basics/podcast/02-one-story.script.md`,
  the canonical location the pipeline derives), fact-checked in a
  fresh-context subagent (PASS WITH NITS; all five nits fixed before rendering), rendered for
  $0.32. **The hosts are named: John and Haley** (John's call, 2026-09-06; male voice is John,
  female is Haley). The voice presets are being chosen by ear from the four clean English
  presets (Carter/Frank male, Alice/Maya female; "Mary" carries background music, ruled out);
  `scripts/podcast/samples/voice-test.script.md` is the 40-second snippet used to compare them.
  Custom voices via a reference clip (`audio_url`, presets ignored) are the fallback if no
  preset satisfies, but need a rights-cleared sample.
- **R2 is live.** John activated R2 on the Cloudflare account; bucket `foval-audio`, public at
  `https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev`. Objects go at
  `<school>/<course>/<lesson>.mp3`. Upload:
  `npx wrangler r2 object put foval-audio/<path> --file <mp3> --content-type audio/mpeg --remote`.
  The r2.dev URL is rate-limited and fine for now; move to a custom domain
  (audio.fovallearninginstitute.org) if it ever matters.
- **The site plays it.** Lessons take an `audio:` frontmatter URL; `scripts/build.mjs` passes it
  through and the lesson page renders a gold-topped "Listen: this lesson as a conversation" block
  (`.podcast` in styles.css) with the synthetic-voices disclosure the standards require. Lesson 2
  carries the URL now; it goes live when Bible Basics publishes.
- **Homepage card 08 is now a real screenshot** (`tile-podcast-{light,dark}-phone.png`, target in
  `scripts/screenshots.mjs`), replacing the typographic teaser; the `feature-soon` CSS was removed
  with it. Like the chart panel, it photographs a drafting course, which John already approved.
- **`scripts/podcast-compare.mjs` request shapes are now verified against the live docs** and two
  bugs are fixed (ElevenLabs returns raw MP3 and caps requests at 2,000 characters, so it batches
  and concatenates; Gemini default model is now `gemini-3.1-flash-tts-preview`). fal cold starts
  ran 13 minutes on the first render, so the poll budget is 20 minutes.
- **Built 2026-09-06: `scripts/podcast.mjs` and `/make-podcast <lesson>`.** One argument (the
  lesson path) drives everything; script, MP3, R2 key and public URL are all derived from it.
  Guards: dry-run by default, no render without a `checked:` fact-check entry in the script's
  frontmatter, $2 cost cap without `--force`, upload verifies the public URL answers before
  anyone stamps. `FAL_KEY` is read from `.env.local` automatically. Episode scripts are content
  and live in git at `courses/<school>/<course>/podcast/<id>.script.md`; MP3s go to git-ignored
  `audio-out/` and R2. Nothing is owed by John: **the voices are chosen (John is the Carter
  preset, Haley is Alice, picked by ear 2026-09-06)** and the lesson 2 episode was regenerated
  with the named intro and sign-off and re-uploaded to the same R2 URL. `podcast-compare.mjs`
  carries Carter/Alice as the defaults now.
- **Regenerate lesson 2's audio after the split/renumber pass** (7b): the episode covers the
  whole current lesson, so when it becomes two lessons the audio must be redone (~$0.32).

---

### History: how the decision was made (kept for the reasoning)

**John approved starting this at the end of the homepage session on 2026-09-06.** The homepage
already advertises it as feature card 08 ("in the works now"). Pick up at "After that" below:
build `scripts/podcast.mjs` and the player, using the route the memo recommends.

Full memo: **`docs/PODCAST_OPTIONS.md`**, which now evaluates all four routes by name. John pushed
back twice that the research was not deep enough and he was right both times: the second pass named
Podcastfy without evaluating it and missed Play.ai PlayNote entirely. Two findings from the third
pass change the shape of the decision.

**Play.ai PlayNote is dead.** It was exactly the thing everyone wants: a commercial API with
`synthesisStyle: "podcast"` and two voices, around 40,000 customers, marketed as "NotebookLM but
with any voice, custom prompts and API access". Meta acquired PlayAI in July 2025 and the platform
shut down permanently on **31 December 2025**, deleting accounts, saved audio, voice clones and every
API endpoint with no migration path. Any guide still recommending it is stale. It is also the
strongest argument on the page for preferring a model whose weights we can download.

**Browser automation risks the whole Google Account, not just the tool.**
`israelbls/notebooklm-podcast-automator` (113 stars, 34 forks, FastAPI wrapping Playwright) works.
But it authenticates by keeping a Chrome profile permanently signed in to a real Google account, and
NotebookLM has no suspension of its own: a flag disables the entire Google Account. `workers/api/`
uses a Google OAuth client for sign-in, so putting audio generation on that account means one
automated abuse flag takes out John's email, his Drive, and every learner's ability to sign in to the
institute, together. The standards objection stands underneath that anyway: the script would be
Google's, and Editorial Standards 2 wants it checked.

**Podcastfy is alive and good, and solves the half we should own.** 6,500 stars, actively
maintained, your own OpenAI/Google/ElevenLabs keys. What it automates is source in, script out,
audio out. The script generation is the part we specifically do not want to outsource, and stripping
it out leaves one function. Worth reading for its prompt design; not worth adding Python to a Node
repo with two npm packages in it.

**The framing that matters.** "NotebookLM quality" is two things: the two-host script, and voices
that stay themselves for twelve minutes and hand over cleanly. We are better placed than Google on
the first, because we wrote the lesson and we have a fact-check stage. The second is a model you
can rent or download.

**Ruled out.** The official audio-overview API is Gemini Notebook Enterprise only: fifteen-licence
minimum, about $135 a month. The unofficial library that drives the consumer product is free and
genuinely works, but it hands the script back to Google, so the audio would carry our name with
nothing here having written or checked it. That objection is about standards 2, not about terms of
service, and it applies equally to generating them by hand in the app.

**Recommended: VibeVoice on fal.ai at $0.04 a generated minute, with a script we write and check.**
About **$0.48** a twelve-minute lesson, **$13** for all 28 lessons live today, about $670 for all
1,400 planned. VibeVoice is Microsoft's open-weights model built for multi-speaker long-form (up to
90 minutes, four speakers, stable voice identity, clean turn-taking), which is the specific thing
people mean by "it sounds like NotebookLM". Being open weights, it is also the only option with no
lock-in: if fal changes its pricing we run the same model ourselves and get the same voices.

This **replaces the earlier recommendation of Gemini Flash TTS** ($0.13 a lesson), which was chosen
on price before the multi-speaker models had been looked at properly. The $0.35 a lesson difference
is a rounding error against what it buys.

Podcastfy and Open Notebook are the open orchestration layers and are worth reading, but neither
has a step that checks the script against the source, which is the whole difference between our
audio and everyone else's. Read their prompt design, write our own thin Node script.

**The pilot is written and the comparison tool is built. It needs one account and one command.**

- `scripts/podcast/samples/how-to-learn-anything-03.script.md` is a real four minute two-host
  script, written **by hand** from lesson 3 of How to Learn Anything. Every figure in it appears in
  the lesson and traces to the lesson's own sources. Writing it by hand is the point, twice over: it
  means the comparison needs no LLM key, and it is the concrete form of the argument that the script
  is the half we own. The hosts are unnamed so the comparison survives John picking names.
- `node scripts/podcast-compare.mjs <script.md>` renders it on VibeVoice via fal, Gemini Flash TTS
  and ElevenLabs, skipping any engine with no key. **Dry run by default; nothing is spent without
  `--go`.** For this sample: $0.16, $0.04 and $0.59, so **$0.79 for all three**.
- **Caveat written into the file, do not skip it:** the fal and ElevenLabs request shapes were
  written from docs the authoring session could not reach, because Claude Code web blocks
  `fal.run` and `api.elevenlabs.io`. The parsing, cost guard, polling and file handling are tested;
  a field name may need one correction. The dry run prints exactly what it would POST. **This tool
  cannot run from a web session at all**, for the same egress reason.

**Waiting on John:** a fal.ai account (nobody here can create it; it needs his email and a card),
then `FAL_KEY=... node scripts/podcast-compare.mjs scripts/podcast/samples/how-to-learn-anything-03.script.md --go`,
then his ears. Also two host names, which become the sound of the institute.

**After that:** build `scripts/podcast.mjs` and a `/make-podcast` command, about a day. MP3s go to
**Cloudflare R2** (free tier 10 GB, no egress charge), not git: 6 MB a lesson is 8 GB at full scale
against a 1 GB soft limit on Pages.

Needs from John: a fal.ai account (and optionally Google AI Studio and ElevenLabs for the
comparison), an R2 bucket on the existing Cloudflare account, approval to spend, and two host names.
Nothing has been spent and no accounts created.

## 7. Homepage: what makes the institute unique (shipped 2026-09-06; redesigned and John-approved later that day)

**Redesign addendum (2026-09-06, commits `54f069a` and `5453101`, approved by John):** the section
below still exists but reshaped. The strip is now eight numbered feature cards (`showcase()` in
`app.js`): screenshots rest dimmed and come forward on hover with a sliding description; a
two-column grid on phones (John rejected the swipe carousel twice, do not bring it back); card 08
is a typographic podcast teaser, so the "named in the ask block, not a panel" sentence below is
outdated. Panel shots sit on gold-topped mats (offset outline frames failed, do not bring those
back either). Three credited Pexels photo bands (`study-*.jpg` + `-CREDIT.txt` in
`site/assets/media/`), scroll-reveal motion in `app.js` `reveal()`, hero kept Oxford navy per John,
copy cut hard (his standing rule: one or two short sentences per panel). Link previews now use
`site/assets/media/social-card.png` via og:/twitter: meta in `index.html`; regenerate with
`npm run card` after brand changes. The transcript/My-learning capture predates the gold
section-rule tabs; consider `npm run shots` next time captures are touched.

Live below the hero as `whySection()` in `site/assets/app.js`, styled under "Home: what makes this
different" in `styles.css`. Three panels, then John's one ask, laid out as alternating rows so each
screenshot gets enough width to be legible instead of shrinking to an unreadable thumbnail.

The screenshots are real captures of the live site at `site/assets/media/screens/`. Four files per
panel: `<name>-{light,dark}-{phone,desktop}.png`, chosen by a `<picture>` element on
`prefers-color-scheme` and viewport width, so a dark reader never gets a photograph of a light page
and a phone gets the phone capture. Verified rendering in all four combinations.

Below the four panels sits a strip of six tiles, "A lesson page is more than words": a marked quiz
question with its explanation, the six-act map from Bible Basics, an exercise, the free-recall box
part filled, a Python code block, and the transcript stat cards. They are phone captures at every
width, because each is a narrow object that a phone frames best, and on a phone the strip becomes one
swipeable row rather than two thousand pixels of scrolling.

The section is now about 3,700px tall on a desktop and 4,100px on a phone, which is long for a
homepage. If it needs trimming, the tiles are the part to cut, not the panels.

**The chart panel is live and it photographs an unpublished course. John's call, 2026-09-06:**
"Go ahead and screenshot it now and don't put coming soon. I'll have it up before anyone really
comes here anyways." So the "Drawn, photographed, and linked" panel and the "Maps of the material"
tile are captures of **bible-basics lesson 2**, which is `status: drafting` and therefore not on the
site. **Publishing Bible Basics is now a dependency of the homepage being honest**, not just a
content milestone. Until it publishes, the homepage shows a lesson a visitor cannot open.

Lesson 2 was chosen because it is reviewed and settled; lessons 3 and up are still in review and
their screenshots would go stale. If lesson 2 is edited, retake the two images.

**The video tile is done.** `tile-video-{light,dark}-phone.png` were captured on John's Mac and the
seventh entry is in `WHY_TILES`. It still cannot be captured from a Claude Code web session, where
the network policy blocks YouTube and the capture script refuses to write a blank player, so retake
it on a machine with ordinary internet.

Getting it took three fixes to `scripts/screenshots.mjs`, all of which matter to anyone retaking it:

- The embed is `loading="lazy"` and sits a long way down the lesson, so nothing requested YouTube at
  all while the page sat at the top. The target now scrolls it into view first.
- The check for "did YouTube load" watched `youtube.com`, which answers fine even when the poster
  never arrives. It now watches `i.ytimg.com`, the poster itself, which is what actually decides
  whether the tile is a picture or a black box, and waits on it rather than on a fixed timeout.
- A cross-origin player paints **black** in a `fullPage` capture wherever the page is scrolled, so
  the video target photographs the viewport with the embed sitting in it, dropped below the sticky
  header. `html { scroll-behavior: smooth }` means the scroll position has to be read back after it
  settles, not worked out in advance.

Check the two PNGs by eye after retaking. A green run is not proof: the guard passing only means
YouTube answered, and the first two runs here wrote files that were entirely black.

**Every screenshot in the section is now regenerated by `scripts/screenshots.mjs`**, so this is one
command on any machine with ordinary internet:

```
npm install
npm run build:drafts                 # the chart, map and video live in a drafting course
npm run shots -- tile-video          # or `npm run shots` for all twelve targets
npm run build                        # put site/data/courses.js back
git diff --stat site/data/courses.js # must be empty before committing
```

It drives the Chrome already installed on the machine, so there is no browser download; set
`CHROME_CHANNEL=msedge` or `CHROME_PATH=...` if it cannot find one. `npm run shots -- --list` prints
the targets. The strip is seven tiles now: four across at desktop width wrapping to three, and one
swipeable row on a phone.

**All 34 files were regenerated together on 6 September 2026**, not just the video, because the
committed ones predated `c84af0e` (the hero going full width and the content column widening) and so
were photographs of a narrower column than the site has now. Heights moved with it: the predict
block grew 58px on a phone, the review card 112px. Every one was checked by eye in both themes,
including the SVG targets, where nothing came out white on white. If you change the site's layout or
type, retake the lot rather than one target, or the panels stop matching each other.

The chart photograph used to stop above its own source caption, because that caption was wider than
its viewBox and the browser clipped it. Both are fixed now: the viewBox is wide enough, the linter
guards it, and `svgBox` no longer crops. The homepage chart names where its numbers came from, and
`Act 6, Revelation: 22` keeps its descenders. If a caption ever looks cut again, fix the chart, not
the capture script.

The one new dependency this adds is `playwright-core` in `devDependencies`. It is dev-only, never
served to a learner, and it deliberately does not bundle a browser. Rule 9 is about what the site
ships, not what the toolchain uses, but it is a dependency and worth knowing about.

The podcast is named in the ask block as not built yet, in one line, rather than given a panel. It
gets a panel when it exists (see section 6).

**Content note for whoever owns `courses/`:** How to Learn Anything is the institute's shop window.
It used to have no images, charts, video or links in any lesson body; the media pass under
standards 4.5 was **done on all eight lessons on 2026-09-06** (see 0b item 2), so the shop window
now shows what a Foval lesson is. If a homepage capture ever photographs one of these lessons,
the new charts and video blocks are what it should show.

## 7b. Lesson splits: SETTLED. Do not re-open with John.

**John's instruction, 2026-09-06:** "I want lessons and courses to be as long as they need to be to
do what they should do. Splitting doesn't concern me that much but makes sense you don't want an
individual lesson to go on forever. Do what you think is best."

**The standing rule, which needs no further approval:**

1. Split a lesson when it holds two ideas that each stand alone with a natural stopping point
   between them, which is the test standard 1.3 already sets. Do not split on length alone; 1.3 has
   no ceiling and tells reviewers never to flag length by itself.
2. Do not renumber as you go. Mark each seam with an HTML comment saying where it falls and what
   each half would need, and record it here.
3. Do the renumbering **once**, as a required step before the course goes to `status: published`.
   Rename the files, rewrite every "lesson N" reference in the lessons, OUTLINE.md and SOURCES.md,
   then verify by grepping for pointers to lessons that no longer exist.
4. While doing that pass, switch prose references from numbers to titles where it reads naturally.
   "The genre lesson" survives any reordering; "lesson 3" does not. That removes this problem
   permanently for this course and the 140 planned ones.

Nothing is published while this is pending, so no learner meets an over-long lesson in the meantime.

**Confirmed seams so far:** lesson 2 (after the Act 3 map, before "Three levels at once"); lesson 3
(after the proportions chart, before "What a biblical story is doing"); lesson 4 is a candidate
flagged by its drafter at the heading "What a prophet was", unconfirmed until it is reviewed.

---

### Why this needs no decision from John (background)


Stage 4 reviews grow lessons. Lesson 2 went from 5,400 to 8,700 words in its fix pass, and its real
runtime is about 110 minutes. Under Editorial Standards 1.3 that is **not** a defect: there is no
ceiling, and reviewers are told never to flag length on its own. The test 1.3 actually sets is
whether a lesson holds two ideas that each stand alone and a reader would benefit from a quiz and a
rest between them.

**Lesson 2 passes that test.** The seam is between the map (six acts, five covenants, the Act 3
timeline) and reading with the map (the three levels, Ruth, Jeremiah 29). The first half stands
alone and leaves a learner with something real. Lesson 4 is a second candidate, flagged by its
drafter, with the seam at the heading "What a prophet was"; that one is unconfirmed until lesson 4
is reviewed.

**The splits are deliberately deferred.** Lessons are referenced by ordinal number in prose, and
there are **274 such references** in this course (188 across the lessons, 47 in OUTLINE.md, 39 in
SOURCES.md). Inserting one lesson invalidates about 200 of them, and the migration must be repeated
for every later split. Doing it once, after all twelve lessons are reviewed and every seam is known,
costs one careful scripted pass. Doing it per lesson costs three or four, each with a fresh chance
of leaving a pointer aimed at the wrong lesson.

**So: finish the reviews at twelve lessons, collect the seams, then do one renumbering pass** that
renames the files, rewrites every "lesson N" reference in lessons, OUTLINE.md and SOURCES.md, and is
verified by grepping for references to lessons that no longer exist. Each confirmed seam is marked
in the lesson with an HTML comment (`<!-- SPLIT SEAM: ... -->`) so the eventual split is mechanical.

**Updated 2026-09-06 after lesson 3.** The pattern is now measured, not suspected. Reviews grow
lessons by roughly two to three times, because almost every finding asks for *more* teaching, not
less: a missing worked example, an objection engaged at full strength, a practice item for an
objective that had none.

| Lesson | minutes before | after | words after |
|---|---|---|---|
| 1 | 40 | 70 | ~7,000 |
| 2 | 45 | 90 | 8,700 |
| 3 | 45 | **150** | ~8,900 |

Three lessons reviewed, **two are split candidates** (2 and 3), and lesson 4 is a third flagged by
its own drafter. So the finished course is realistically **16 to 18 lessons, not 12**. The outline
was written for lessons that were undertaught.

**The deferral still holds, for one reason: nothing is published.** No learner can reach a
150-minute lesson, because the course is `status: drafting` and the build excludes it. The bad
experience is hypothetical until publish, so the renumbering can still happen once, at the end,
after every seam is known. Splitting now would mean renumbering three or four times.

**But the renumber is no longer optional and must happen before `status: published`.** Treat it as
a required step in the Definition of Done for this course, not a nice-to-have.

**Worth considering at that point:** referencing lessons by title rather than number would remove
this problem permanently, for this course and for the other 140 planned. A pointer reading "the
genre lesson" survives any reordering; "lesson 3" does not.
## 8. Swag store and donations (not started)

- **Store:** print-on-demand with no inventory. Recommended: Fourthwall (free, creator-focused, handles fulfilment and taxes, custom domain support) or Printful connected to a simple Shopify/Big Cartel storefront. Start with three to five items using the Keystone Arch mark and the tagline: a heavyweight tee (navy, gold mark), a crewneck, a dad cap, a mug, and a bookmark or print of the crest. Design files: export the mark and lockup as high-resolution PNG/SVG from `design/crest-keystone-arch-v2.html`. Link from the footer ("Store") and a small line on the About page. John must create the store account; the agent can prepare the artwork and product copy.
- **Donate:** a `#/support` page and a footer link. Copy from John: "We're constantly using tons of tokens to expand our offerings and make updates. We'd appreciate anything you can do to pitch in if it becomes something you find valuable over time. Cheers!" Options: GitHub Sponsors (fits the open repo), Ko-fi or Buy Me a Coffee (simplest), Stripe Payment Link (lowest fees). John must create the account; then it's one link.
- **FLI ideas** (subtle, not the main thing): "FLI" reads as "fly": a light touch such as "Fly high with us" on the support page or the store, and donors as members of "the FLI Club" with a small mark on their achievements page and early access to new courses. Alternative expansions to consider for a tagline or a store line: "Faith, Learning, Ideas"; "Faith. Learning. Integrity."; "Free Learning Institute". Keep it to one or two places; the institute's name stays the main thing.

**Funding, settled 2026-09-06 over two passes.** John raised that he may want some advertising later
to keep the main site free as it grows. The old copy promised "no ads" flatly in five places,
including `VALUES.md` value 1, so it was a promise that would have had to be broken publicly.

First pass narrowed it to a data promise plus an editorial one. John then cut the data half too:
"take off the tracking promise too. No need to over promise." So **the only forward-looking promise
left about funding is the editorial one**:

- **No lesson, assessment, or review card ever carries an advertisement, sponsor slot, affiliate
  link, or paid placement.** This is Editorial Standards 4.5, not marketing copy: a sponsor beside a
  fact-checked claim changes how the claim reads, and the reader cannot tell which sentences were
  bought. It also closes the affiliate-link door, which is how this usually erodes.
- Sponsorship, if it ever happens, goes on pages that teach nothing, and is labelled.

**Deliberately no longer promised anywhere:** that nothing about a learner is tracked, profiled or
sold, and that nothing they read decides what they get shown. Those were removed on purpose, not by
oversight. Do not put them back without asking John.

**What stayed, and why it is different.** Present-tense statements of fact about how the thing works
today are not promises and were kept: "your progress is saved in this browser and never sent
anywhere" in the footer, and on the account pages, that we hold an email address and progress and
nothing else. Removing accurate disclosure would be worse than making no promise, not safer. The rule
going forward: **describe what actually happens, do not promise what will never happen.**

**Open, and it becomes real the day any advertising or analytics is added:** there is no privacy
policy anywhere in the repo or on the site. Nothing needs one today (the only thing leaving the
browser is anonymous lesson feedback, and the feedback Worker deliberately stores no IP or user
agent). An ad network or an analytics script would change that, and most ad networks set cookies
whether or not you asked them to. Worth deciding deliberately rather than discovering.

Changed together across `VALUES.md`, `EDITORIAL_STANDARDS.md` 4.5, `PLATFORM_ROADMAP.md`, the About
page, the footer and the README, so no two places contradict each other. **Nothing about ads has been
built and no decision has been made to run any.** This settles only what the institute is allowed to
do if John chooses to.

## 8b. Accounts backend: NOT blocked. Corrected 2026-09-06.

**The old entry here was wrong and has been replaced.** It said accounts were blocked on a Supabase
free-tier project slot, waiting on John to delete an empty project. That stopped being true when the
project moved to Cloudflare. There is a working Cloudflare account, a deployed Worker and a D1
database (`workers/feedback/`, database `foval-feedback`), proven end to end on the live site. D1 is
a real SQL database and it is enough for profiles, lesson progress, review items and study sessions.
Nothing is blocked. Accounts simply have not been built.

Do not go back to Supabase for this. It reopens the project-slot problem the Cloudflare move already
solved and puts a second vendor in the path of every sign-in. (The old investigation is still worth
keeping for one fact: the paused **John Project**, ref `ebkuhylfhyfretagpczf`, was confirmed empty on
2026-09-05, `auth.users` 0 rows, `storage.buckets` 0 rows, not referenced by any repo or deployment.
It is safe for John to delete whenever he wants the slot back. Nothing here needs it.)

**Decided and built, 2026-09-06.** The options and the tradeoffs are in **`docs/AUTH_OPTIONS.md`**.
John picked: write the session layer in the Worker we already have, ship Google sign-in and six-digit
email codes first, add email-and-password later. Passwords are the one method that needs the $5 a
month Workers Paid plan, because hashing costs 50 to 100 ms and Workers Free allows 10 ms of CPU.

**`workers/api/` is written and tested and NOT deployed.** 28 Worker checks and 12 browser checks
pass against a local D1. It is inert until `window.FOVAL_API` in `site/index.html` is set to the
deployed URL; while that is empty the site behaves exactly as before, with no sign-in link and no
network calls, which is what is on `main` now.

**What is left, and it needs John, because it needs credentials and two free accounts:** the deploy
steps are written out in `workers/api/README.md`. In short: apply `schema.sql` to the existing
`foval-feedback` database, create a Google OAuth client and a Resend account (both free), set four
secrets with `wrangler secret put`, `wrangler deploy`, then set `FOVAL_API`. That order matters;
setting `FOVAL_API` first gives every visitor a broken sign-in page.

**One thing to improve as soon as the site moves to Cloudflare Pages (8c):** the session token is a
bearer token in `localStorage`, not an HttpOnly cookie, because the site and the Worker are on
different origins today and third-party cookies are being phased out. Once they share an origin,
switch to an HttpOnly, Secure, SameSite=Lax cookie and delete the bearer path. It is a real security
improvement, not a tidy-up.

**One design constraint that comes out of the research and holds under any option:** since
1 September 2026 D1 free-plan queries *fail* when the daily caps are hit, and the binding cap is
**100,000 row writes a day**, not storage. So progress is one row per learner per course, updated in
place, and review items flush on a timer and on sign-out rather than on every answered card. The
browser stays the source of truth and the site keeps working with no network.

**Session note:** `wrangler` is not authenticated in the agent sessions running on Claude Code on the
web, and the network policy there blocks `workers.dev` and the live site. The Worker can be written
and tested locally in such a session, but the deploy needs credentials.

## 8c. Going private: what has to move first (opened 2026-09-05)

John confirmed the codebase does not need to be public; it is only public because free GitHub Pages requires it. Value 9 has been rewritten in `docs/VALUES.md` and on the About page so "open" now promises openness about the *teaching* (sources named, disagreement shown, revisions recorded) rather than open source code. The "Content and code on GitHub" footer link is removed.

**Do not make the repo private yet.** GitHub Pages will not serve a private repo on a free account, so flipping it today takes the live site down. Order of operations: move static hosting to Cloudflare Pages (free, serves private repos, custom domain, fast HTTPS), repoint DNS, *then* flip the repo to private.

**Six site links still point into the public repo** and will 404 for visitors the moment it is private. All are in `site/assets/app.js` via the `REPO` constant:

| Line | What | Replace with |
|---|---|---|
| 185 | "The full map" on the home page, to `curriculum/TAXONOMY.md` | an on-site `#/map` page generated from TAXONOMY.md at build time |
| 202 | "curriculum" link on the Courses page, same target | same `#/map` page |
| 286 | "Report a problem" on every lesson, opens a GitHub issue | the feedback endpoint (see §9) |
| 555 | "editorial standards" on the About page | an on-site `#/standards` page generated from `docs/EDITORIAL_STANDARDS.md` |
| 565 | About page "Contribute" paragraph | done, rewritten, no longer links to GitHub |
| `site/index.html` footer | "Content and code on GitHub" | done, removed |

The build script would need to render TAXONOMY.md and EDITORIAL_STANDARDS.md into `site/data/` as HTML so those pages work without the repo. That is the real prerequisite, and it is worth doing anyway since both read better on the site than on GitHub.

## 8d. Scripture licensing: settled, and why (2026-09-06)

The course quoted the ESV under a permission the lesson described as "up to 500 verses in
non-commercial use". That is not what Crossway's terms say, and two of the real conditions ruled it
out: the ESV **may not be quoted in any work published under a Creative Commons licence**, which
this repo is, and the free allowance **excludes Bible reference works**, which a course on how to
read the Bible arguably is. The required Crossway notice was also absent from the whole site.

The course now quotes the **NET Bible**: no verse cap for non-commercial use, no exclusion for
openly licensed works, no exclusion for reference works, and its translators' notes are themselves
worth teaching from. Policy is Editorial Standards **4.7**: NET by default, JPS 1917 for the Tanakh
or when describing how Jews read a passage, Brenton for the Septuagint, KJV where the familiar
wording is the subject, short comparative snippets from copyrighted versions where comparing
renderings is the teaching, and a note that our own open licence does not extend to quoted
scripture. **The 500-verse running count is gone.** If a plan ever requires counting again, the plan
is wrong.

One consequence worth John's eye: the NET renders Isaiah 7:14 as "this young woman", not "virgin".
Lesson 4 keeps the NET as its voice, says plainly that many English Bibles read "virgin", and rests
the Christian reading on the Septuagint's *parthenos* and Matthew's use of it, which is where the
lesson already rested it. The argument is unaffected; the texture of the passage changed.

## 8e. Known defects not yet fixed, course-wide

- **28 lessons have no links in the body** (was 38 before the How to Learn Anything media pass),
  against 4.5. Warned by the linter. Needs per-lesson
  judgement about which sources to link, so it belongs in each lesson's review pass.
- **SVG labels under font-size 15** in several lessons. Warned by the linter. Raising a font size in
  a fixed viewBox can overflow, so each needs the viewBox widened rather than a blind bump. Logic
  lesson 10's SVG is the worst and is the anti-pattern, not the template: it hardcodes colours and
  uses font-size 9 and 10.
- **Answer leaks: the six published ones are FIXED (2026-09-06) and the lint is promoted.** All
  six in How to Learn Anything (lessons 1, 2, 3, 5 twice, 7) are `:::checkpoint` blocks now,
  and the lint fails the build on a published course. Eight remain in drafts (seven in Bible
  Basics, one in Logic 9); they warn with the draft tag and will block those courses'
  publishing, which is the point. Find them: `npm run validate | grep "prints the answer"`.
- **Ten SVG token collisions**, where a chart uses two tokens that resolve to the same colour to
  tell two things apart. `--line-strong` and `--navy` are byte-identical in both themes (`#0f2a4a`
  light, `#c9d3e2` dark), so those charts render as one solid block. Logic lesson 9's is the worst:
  its caption describes a "grey bar" that is not grey and never was. Also in bible-basics 2, 6 and
  7. The build now warns on each (`npm run validate | grep "render identically"`).
- **Five lessons still carry greys outside the palette** in SVG fills.
- ~~**Nine SVG labels run past their own viewBox and are silently clipped by the browser.**~~ Fixed
  on 6 September 2026, and the linter now holds the line. Eight were real and each took the fix its
  own shape allowed: bible-basics 02's chart and map got a wider viewBox with `max-width` widened to
  match, so the drawing keeps 1 unit to 1 pixel instead of shrinking; 05, 11, logic 09 and 12 had
  their captions wrapped onto a second line, which is what lesson 11 already did; 04's annotation
  moved to a centred line under the rows; 09's label started further left. The ninth, logic 10's
  "concession feeds the qualifier", was **never clipped at all**: it is `transform="rotate(90 ...)"`,
  so it takes up its line height across the page and not its length, and the linter was measuring it
  as if it ran left to right. The linter now projects the rotation and skips transforms it cannot
  reason about, so that false positive is gone.
- ~~**A blank line inside an `<svg>` silently truncates the chart.**~~ Found and fixed the same day.
  Markdown ends a raw HTML block at a blank line, so `marked` closed the `<svg>` early and handed
  the rest to the paragraph parser: the words still reached the built HTML, which is why nothing
  caught it, but the shapes after the blank line rendered outside the chart and never drew. It had
  taken **all ten** of bible-basics 01's labels, **thirty-nine of forty-three** in lesson 08, and
  **sixteen of twenty-five** in lesson 11, which was showing one translation out of ten. The linter
  now fails the build on a blank line inside an `<svg>`. If you write a chart, do not put blank
  lines between its groups.
- **The four placeholder courses** (Python, Algebra, Personal Finance, Writing Clearly) are live and
  have never been through the pipeline. They are the largest untouched quality risk on the site,
  because they are the ones learners can actually read today.

## 9. Smaller items

- ~~Feedback endpoint~~ **done 2026-09-05**: Cloudflare Worker + D1, live at `https://foval-feedback.johnfoval.workers.dev`, wired into `site/index.html`. Read it with `npm run feedback`. See `docs/FEEDBACK_LOOP.md` and `workers/feedback/`.
- Four placeholder courses through the pipeline (research, outline, redraft, review) or off the site before promotion.
- Term milestones ("Foundations" etc.) on the Path page when a term is complete.
- Audio mode and "Ask this lesson" are on the roadmap (Phase 2 and 3).
- The taxonomy's `Christian standpoint` labels are now capitalised as "Christian Standpoint" everywhere the site shows them; keep that form.
- Swag store (asked by John 2026-09-06): when it exists, make shirts playing on the FLI initials, in the vein of "I'm so FLI" and "Learning to FLI". Funny but cool; keep the mark and the Caslon/Plex system so they still look like the institute.

## 10. Course requests from people (opened 2026-09-06)

Requests that came in by text message, not through the feedback form. All are now rows in
`curriculum/TAXONOMY.md` with status `planned`; none has a folder yet. A folder gets created when
research begins (`/research-course`).

| Course | School | Requested by | Why |
|---|---|---|---|
| Graphic Design Fundamentals | Literature and the Arts | M. Wesley | Wants to take it himself. First outside request for a course. |
| Statistics for Citizens (existing row, note widened) | Foundations | M. Wesley | Asked for "intro to statistics and the normal distribution". The existing course already covers averages, sampling and correlation; the note now names spread and the normal distribution explicitly so the outline has to teach the bell curve properly, including where it does not apply. |
| Computer Science Foundations | Computer Science and AI | John | Part of the "speciality technology courses" ask. Sits between How Computers Work and Data Structures and Algorithms: computation and its limits, complexity, languages and compilers, memory, concurrency. |
| Technology Leadership: CTO and CIO | Computer Science and AI | John | The other half of that ask. The executive job rather than the craft: architecture and build-vs-buy, budgets and vendors, security posture, team structure, roadmaps, talking to a board. Marked Advanced because it assumes the technical courses under it. |

**Data science basics (John).** Deliberately not a new row. The path already exists and adding a
"Data Science" course would duplicate three others: Statistics for Citizens, then Statistics and
Probability (Mathematics), then Data Analysis (Computer Science and AI), with Machine Learning
Fundamentals after it. If those four are built in that order they are the data science basics. Worth
raising with John only if he wants them bundled and labelled as one track on the Path page, which is
a packaging decision, not a new course.

**Where each sits on the Core.** Every course on the map now carries a placement decision (see
below). Graphic Design Fundamentals, Computer Science Foundations and Technology Leadership are all
`elective`: they are specialities, and the Core is what a broadly educated adult needs rather than
everything worth teaching. Statistics for Citizens was already on the Core in term 2 and stays there.

**Ordering.** These four are all `planned` behind a queue that is already long: two courses are
mid-review (Bible Basics, Logic and Argument) and four live placeholder courses have never been
through the pipeline (§8e). Nothing here jumps that queue without John saying so. Graphic Design
Fundamentals is the one with a named person waiting on it, which is the strongest reason on the list
to move a course up.

## 11. Core-path placement is now enforced (built 2026-09-06)

The map and the Core had no link between them, so a new course could be added and simply never
considered for the Foval Core. Nothing was checking, and two files were describing the Core by hand.

**What is in place now.**

- `curriculum/TAXONOMY.md` has a **Path** column on every course row. Its value is a term (`T1` to
  `T8`) or the word `elective`. That cell is the placement decision, recorded on the map itself.
- `scripts/core-path.mjs` checks that TAXONOMY.md and `curriculum/core-path.yaml` agree: every row
  has a valid Path cell, every row marked `Tn` is in that term of the path file, every path entry
  has a row on the map, every `elective` is absent from the path, and no school lists a course
  twice. It runs inside `npm run validate` and `npm run build`, and exits non-zero on any of those.
  A new row with a blank Path cell fails the build, which is the whole point: a course cannot reach
  the map without someone deciding where it belongs.
- TAXONOMY.md's numbered term list is generated from `core-path.yaml` between HTML comment markers
  by `npm run path -- --write`. It used to be maintained by hand and had drifted: two courses
  numbered 18, term 5 numbering out by one, and "History of Western Philosophy I and II" collapsed
  into one line.
- "Placing a course on the Core" in TAXONOMY.md is the decision rule: does the Core need it, what
  does it need first, which term's theme, does the term still balance, where in the term.
  `/new-course` now makes the placement its first step, and CLAUDE.md carries it as rule 4b.

**Four real bugs it caught immediately.** Four entries in `core-path.yaml` had unquoted titles
containing commas inside a YAML flow mapping, so the comma started a new key. The live Path page was
showing "Early Modern World", "The Age of Revolutions", "The Modern World" and "Meaning" with their
titles cut off at the comma. Fixed and rebuilt. The checker now rejects any entry with keys other
than id, school, title, optional and standpoint, so that class of error cannot come back.

**Also.** The Capstone was on the Core but had no row on the map. It now has one, in Foundations.
Current shape: 165 courses, 51 on the Core across 8 terms, 114 electives.

## 12. Renaissance-man gaps: what John suggested, what was already there, what got added (2026-09-06)

John brainstormed a list of what makes someone broadly capable: design, art, music appreciation,
business operations, accounting, geography, how politics works and how to be politically valuable,
economics, investing and how the stock market really works, famous books, project management, Lean
Six Sigma, forecasting, and the Guns Germs and Steel question.

**Nine of those were already on the map** and need building, not adding: Art History, How to Listen
to Music, Operations and Systems, Small Business Operations, Accounting and Financial Statements,
World Geography, American Government and the Constitution (plus Comparative Government, Political
Philosophy, Political Economy), the four economics courses, Investing and Real Estate, and Great
Books I to III with Shakespeare and Mythology. Design was added earlier the same day.

**Nine courses added, all `elective`:**

| Course | School | What it covers that nothing else did |
|---|---|---|
| Forecasting: Thinking About What Happens Next | Foundations | John's "predicting the future". Base rates, calibration, scenario thinking, the Tetlock findings. Probability and Decisions teaches the maths; this teaches the practice. |
| Why Nations Diverged | History | John's "Guns Germs and Steel". Diamond, Acemoglu and Robinson, McCloskey and Mokyr, and the objections to each. A live debate, which is the only honest way to teach it under standards 3.4. Economic History tells the story; this argues about the cause. |
| How Things Work: Engineering for Everyone | Natural Sciences | Structures, engines, electricity, materials, how things fail. A gap nobody named but the most renaissance-man subject on the list. |
| Drawing and Visual Thinking | Literature and the Arts | Making, not only looking. Pairs with Graphic Design Fundamentals; Art History is appreciation. |
| Practical Civics: Being Useful in Public Life | Economics, Government, and Law | John's "how to be politically valuable", which is the one thing the government courses miss. They teach how the system is designed; this teaches how to move it. |
| Project Management | Business and Enterprise | Scope, schedule, risk, dependencies; agile and waterfall compared on merits. |
| Process Improvement: Lean and Six Sigma | Business and Enterprise | The real content under the belt certifications: variation, flow, SPC, Toyota, theory of constraints, and where it does not fit. |
| How Markets Work | Money | John's "day trading, how the stock market works". Mechanics first, then the evidence, which is that most day traders lose money. Investing covers portfolios; this covers plumbing and speculation. |
| How to Learn a Language | Learning and Mind | Not on John's list and a clear gap for a broadly educated person. |

**Why all electives.** The Core is already 51 courses and roughly two years. Every addition raises
what the institute claims an educated adult must know, so the bar is high. See "Placing a course on
the Core" in TAXONOMY.md.

**Practical Civics is on the Core.** John's call, 2026-09-06. It sits in term 6, after Political
Philosophy and before Great Books III, which puts it after American Government and the Constitution
in term 5 and next to Political Economy. The reasoning: knowing how the system is designed without
knowing how to act in it is half an education. Term 6 is now seven courses, the same size as term 5,
so the balance rule in "Placing a course on the Core" still holds. The Core is 52 courses.

**Considered and not added.** Systems Thinking (Mental Models covers the same ground; revisit if
that course's outline turns out not to). Photography (Drawing and Graphic Design cover seeing and
composition). Playing an instrument (hard to teach honestly at a distance without a teacher).
Chess and strategy games (fun, not general education). Latin or Greek (real value for reading the
sources, but a large investment for a narrow return; revisit if Great Books demand grows).

**Nothing here jumps the queue.** All 174 courses on the map, minus the six with folders, are
`planned`. The build order is still governed by §1 and §8e.

## 13. Alex Hormozi as a source and as a teaching model (opened 2026-09-06)

John reads Hormozi and likes how he distils business concepts. This is a note for whoever runs
`/research-course` on Sales, Marketing, Entrepreneurship, Copywriting or Small Business Operations.
**Do not delete this when the backlog is trimmed. Copy it into each of those courses'
`research/SOURCES.md` at Stage 1.**

### What he actually is

Alex Hormozi built and sold gym businesses (Gym Launch, Prestige Labs), and with Leila Hormozi runs
[Acquisition.com](https://www.acquisition.com/), which buys stakes in founder-owned companies. He
has written [$100M Offers](https://www.amazon.com/100M-Offers-People-Stupid-Saying/dp/1737475731)
(2021), [$100M Leads](https://www.amazon.com/100M-Leads-Strangers-Stuff-Acquisition-com/dp/1737475774)
(2023) and [$100M Money Models](https://www.amazon.com/100M-Money-Models-Make-Acquisition-com/dp/1963349156)
(2025), plus a Lost Chapters volume. The books are cheap or free, and the free content is the top of
a funnel into his firm's deal flow and products. That is stated openly by him; it is a declared
interest, not a hidden one, and the courses should say so once rather than insinuate it.

### The pedagogy is the part worth taking

This is genuinely good teaching craft and most of it transfers straight into our lessons:

1. **One idea per unit, and the idea gets a name.** "Grand Slam Offer", "the value equation". A named
   idea is recallable a month later. Our lessons often teach a concept without ever naming it.
2. **A formula or checklist the learner can apply before finishing the page.** The value equation is
   dream outcome times perceived likelihood of achievement, divided by time delay times effort and
   sacrifice. Whatever else it is, it is a thing you can run your own offer through in two minutes.
3. **Before and after with real numbers.** He shows the weak version and the rebuilt version side by
   side. That is exactly what standards 4.2 asks for and what our business drafts will otherwise
   skip.
4. **Naming the common mistake explicitly** rather than only teaching the correct method.
5. **Short sentences and no throat-clearing**, which is our style guide already.

Points 1 to 4 are worth writing into `docs/STYLE_GUIDE.md` or the business courses' outlines as
requirements, independent of whether we cite him at all.

### What he is not, under standards 2.2 and 2.5

His material is a **primary source on how one successful operator thinks and what he did**. It is
not evidence that the methods cause the results. The evidence problems are ordinary and worth
stating plainly in the lesson rather than hiding:

- **Survivorship and selection.** We hear from the operator whose gyms worked. The base rate of
  people who ran the same playbook and failed is unobserved.
- **Self-reported figures**, not audited, and mostly from one sector cluster: gyms, supplements,
  agencies, and information products.
- **Frameworks, not findings.** The value equation is a useful heuristic with no measurement behind
  the multiplication. Teach it as a practitioner's model, labelled that way, not as a result.
- Standard 2.5 already covers this: "Never present a guru's claim as settled." Business advice is a
  contested-empirical domain under 3.1, so his claims get the same treatment as anyone's.

### So: cite him, and cross-check him

Use him for what he is good at, always paired with the research literature:

| Where he is used | Cross-check against |
|---|---|
| Offers, pricing, value framing | Nagle, *The Strategy and Tactics of Pricing* (the standard text); Kahneman and Tversky on framing and reference points |
| Lead generation, channels, advertising | Byron Sharp, *How Brands Grow* and the Ehrenberg-Bass work on penetration and mental availability, which pushes hard against niche-offer thinking and is the strongest opposing case |
| Sales conversations | Neil Rackham, *SPIN Selling*, one of the few sales books built on observed calls; Dixon and Adamson, *The Challenger Sale*, with the caveat that its underlying analysis has been questioned |
| Anything about entrepreneurial odds | Scott Shane, *The Illusions of Entrepreneurship*; BLS and Kauffman business survival data. This is the antidote to survivorship and belongs in the Entrepreneurship course regardless |
| Management and operations claims | Bloom and Van Reenen, the World Management Survey work, which is the actual causal evidence that management practices move performance |

**The best use of him is as a worked example of two things at once.** Teach the value equation,
apply it to a real offer, and then, in the same lesson, teach why his own results cannot tell us
whether it works. A learner who can admire a framework and still ask for the base rate has got
something out of the course that no business book gives them. That is a Foval lesson and nobody
else's.

### Next step

Nothing to build yet. When the first business course reaches Stage 1, the researcher reads at least
$100M Offers and $100M Leads in full (not summaries, per rule 1 and the repeated defect of citing
unread sources in §1), records in SOURCES.md which specific claims come from him and which come from
the research literature, and marks every Hormozi claim with what kind of claim it is under 3.1.
