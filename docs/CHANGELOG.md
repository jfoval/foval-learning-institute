# Changelog

What has shipped, newest first. Courses published, platform changes, and decisions that changed how
the institute works. Items move here out of `BACKLOG.md` when they are done.

Everything from the founding onwards is here. Entries before 2026-09-06 came from the old root
`CHANGELOG.md`, which was merged into this file on 2026-09-06 so there is only one changelog.

## 2026-09-06 (podcast pipeline session)

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
