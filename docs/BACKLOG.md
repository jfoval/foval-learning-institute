# Backlog and Handoff

*Last updated 2026-09-05. Read this first in a new session, after `CLAUDE.md`. It is the single list of what is in flight, what is next, and what John has asked for that isn't built yet. Keep it current: when something ships, move it to `CHANGELOG.md` and delete it here.*

## 1. Pipeline state right now

*Rewritten 2026-09-06 at the end of a long session. This is the handoff.*

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

## 6. Podcast for every lesson (researched twice on 2026-09-06, awaiting John)

Full memo, rewritten after John pushed back and asked for a harder look at the unofficial and
open-source routes: **`docs/PODCAST_OPTIONS.md`**. He was right to push; the answer changed.

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

**Next, in order:** pick two host names (John's call, they become the sound of the institute);
render one lesson on VibeVoice, Gemini and ElevenLabs for about **$2.50** and let John's ears
decide; then build `scripts/podcast.mjs` and a `/make-podcast` command, about a day. MP3s go to
**Cloudflare R2** (free tier 10 GB, no egress charge), not git: 6 MB a lesson is 8 GB at full scale
against a 1 GB soft limit on Pages.

Needs from John: a fal.ai account (and optionally Google AI Studio and ElevenLabs for the
comparison), an R2 bucket on the existing Cloudflare account, approval to spend, and two host names.
Nothing has been spent and no accounts created.

## 7. Homepage: what makes the institute unique (shipped 2026-09-06)

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

**Still missing: the video, and it needs John's PC.** Every Bible Basics lesson embeds a YouTube
explainer with a note on why to watch. It cannot be photographed from a Claude Code web session,
because the network policy there blocks YouTube and the embed renders as an empty box. The capture
script refuses to write a file in that case rather than shipping a blank player, which is why
`tile-video-*.png` does not exist yet.

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
the targets. Once `tile-video-{light,dark}-phone.png` exist, add one entry to `WHY_TILES` in
`app.js`; the panel copy already describes the video, so no copy changes.

The one new dependency this adds is `playwright-core` in `devDependencies`. It is dev-only, never
served to a learner, and it deliberately does not bundle a browser. Rule 9 is about what the site
ships, not what the toolchain uses, but it is a dependency and worth knowing about.

The podcast is named in the ask block as not built yet, in one line, rather than given a panel. It
gets a panel when it exists (see section 6).

**Content note for whoever owns `courses/`:** How to Learn Anything is the institute's shop window
and it currently has no images, no charts, no video and no links in any lesson body. That is the
media pass under standards 4.5 and it is the single highest-value content job for the homepage.

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

- **38 lessons have no links in the body**, against 4.5. Warned by the linter. Needs per-lesson
  judgement about which sources to link, so it belongs in each lesson's review pass.
- **SVG labels under font-size 15** in several lessons. Warned by the linter. Raising a font size in
  a fixed viewBox can overflow, so each needs the viewBox widened rather than a blind bump. Logic
  lesson 10's SVG is the worst and is the anti-pattern, not the template: it hardcodes colours and
  uses font-size 9 and 10.
- **Five lessons still carry greys outside the palette** in SVG fills.
- **Nine SVG labels run past their own viewBox and are silently clipped by the browser**, now caught
  by the linter (see section 1). Two of them are the source captions on both charts in bible-basics
  lesson 2, so the line naming where the numbers came from loses its last words. Measured in
  Chromium: bible-basics 02 (two labels), 04, 05 and logic-and-argument 10 are clipped outright;
  bible-basics 09, 11, 12 and logic 09 are clipped only in a wide system font, which is why they
  survive a look on one machine. The fix is a wider viewBox or a shorter label, never a smaller font.
  **The homepage chart screenshot is cropped above bible-basics 02's caption because of this. Retake
  it once the label is fixed** so the source line is visible: see section 7.
- **The four placeholder courses** (Python, Algebra, Personal Finance, Writing Clearly) are live and
  have never been through the pipeline. They are the largest untouched quality risk on the site,
  because they are the ones learners can actually read today.

## 9. Smaller items

- ~~Feedback endpoint~~ **done 2026-09-05**: Cloudflare Worker + D1, live at `https://foval-feedback.johnfoval.workers.dev`, wired into `site/index.html`. Read it with `npm run feedback`. See `docs/FEEDBACK_LOOP.md` and `workers/feedback/`.
- Four placeholder courses through the pipeline (research, outline, redraft, review) or off the site before promotion.
- Term milestones ("Foundations" etc.) on the Path page when a term is complete.
- Audio mode and "Ask this lesson" are on the roadmap (Phase 2 and 3).
- The taxonomy's `Christian standpoint` labels are now capitalised as "Christian Standpoint" everywhere the site shows them; keep that form.
