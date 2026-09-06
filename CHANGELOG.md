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
