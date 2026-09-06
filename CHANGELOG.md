# Changelog

All notable changes to Foval Learning Institute: courses published, platform features, standards revisions. Newest first.

## 2026-09-04
- Repository made public; site live at https://jfoval.github.io/foval-learning-institute/
- Added the School of Christian Studies (15th school) and standpoint-course rules (Editorial Standards 3.7)
- Incorporated Peterson Academy research into the roadmap: audio mode, "Ask this lesson", public changelog, community rules before social features
- Began *How to Learn Anything* through the full content pipeline
- Founded: curriculum map, editorial standards, content pipeline, static site with Path, Review, and transcript, four placeholder courses

## 2026-09-04 (later)
- *How to Learn Anything* (8 lessons, final test, two-week project) completed through the full pipeline: research, outline, drafts, four-pass reviews with primary-source fact-checks, style-guide voice pass. Status: review, awaiting the owner's read-through.
- Added `docs/STYLE_GUIDE.md` and a fifth "voice" reviewer; `/voice-pass` command.
- Feedback ask on every lesson; `docs/FEEDBACK_LOOP.md`; `/triage-feedback` command.
- Predict-first and checkpoint blocks, worked-example gaps, and free recall before every quiz.
- Revised Keystone Arch mark installed (header, icon, certificate seal).

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

## 2026-09-05 (later)
- Hero video (Pexels, free licence), quieter type, no italics, larger tagline, schools section.
- Media in lessons: figure and video blocks, standards 4.5, drafting brief updated; all new drafts include charts, images, videos, and links.
- Logic and Argument: 10 lessons drafted, lesson 1 reviewed. Bible Basics: lessons 1–8 drafted, 9–12 in progress.
- Custom domain www.fovallearninginstitute.org configured on Pages (DNS pending at Namecheap).
- `docs/BACKLOG.md` added as the handoff document.

## 2026-09-06
- Homepage: a "What makes this different" section below the hero. Three panels (thinking while you read, spaced review, the Christian Standpoint label) and John's one ask about the feedback form. Every picture is a real screenshot of the live site, captured at phone and desktop width in both themes and swapped with `<picture>` on `prefers-color-scheme`, so a dark reader never gets a photograph of a light page.
- Fixed: the Review card's "Next" button was visible before the reader answered, because `.btn { display: inline-flex }` outranks the user agent's `[hidden]` rule.
- Researched what to put in front of D1 for accounts and wrote `docs/AUTH_OPTIONS.md`, a decision memo with four options and a recommendation. Corrected `BACKLOG.md` 8b, which still said accounts were blocked on a Supabase project slot; they are not, and have not been since the move to Cloudflare.
- Accounts and cross-device sync built as a Cloudflare Worker over D1 (`workers/api/`): sign in with Google or a six-digit code by email, and progress, review schedule and streak merge across devices. Signing in cannot lose local progress. Written and tested (28 Worker checks, 12 browser checks); not deployed, and inert until `window.FOVAL_API` is set. Deploy steps in `workers/api/README.md`.
- Homepage: added "A lesson page is more than words", a strip of four real captures from published courses (a marked quiz with its explanation, an exercise, a Python code block, the transcript). Swipeable on phones. Charts and video still have no published course to photograph; that panel is queued on Bible Basics or Logic publishing.
- Researched the podcast question properly and wrote `docs/PODCAST_OPTIONS.md`. Gemini Notebook does now have an audio-overview API, but only on the Enterprise tier at about $135 a month, so the workable path is a script written and fact-checked here, rendered by a two-voice TTS at about $0.13 a lesson.
