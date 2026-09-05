# Backlog and Handoff

*Last updated 2026-09-05. Read this first in a new session, after `CLAUDE.md`. It is the single list of what is in flight, what is next, and what John has asked for that isn't built yet. Keep it current: when something ships, move it to `CHANGELOG.md` and delete it here.*

## 1. Pipeline state right now

**Published and live:** How to Learn Anything (8 lessons, final test, project; fully reviewed and voice-passed). Four placeholder courses (Python, Personal Finance, Algebra, Writing Clearly) are live but were written before the standards existed and have NOT been through the pipeline.

**Logic and Argument** (`courses/foundations/logic-and-argument`): research done, outline done (10 lessons), all 10 lessons drafted with media and predict/checkpoint blocks. Reviews: lesson 1 done. Lessons 2 and 3 reviews were killed by a rate limit mid-run and must be re-run from scratch. Lessons 4–10 not yet reviewed. Assessments (final test, project) not yet drafted. Decisions pending from drafters: split lesson 5 into "samples and analogies" / "causes and best explanations" (drafter says the seam is clean; quiz items 1–3 / 4–6 already divide); lesson 1 minutes set to 60 by the reviewer. SOURCES.md corrections noted in REVIEWS.md (Copi enthymemes in ch. 7 sec. 7.5; Govier ch. 4 title; the "warrant" definition is Toulmin, Rieke & Janik 1984).

**The Bible: What It Is and How to Read It** (`courses/christian-studies/bible-basics`, `standpoint: christian`): research done, outline done (12 lessons), ALL 12 lessons drafted (with media, predict/checkpoint blocks, verified sources). No reviews yet. Assessments not yet drafted. Decision pending: split lesson 4 into "Covenant made: reading the law" / "Covenant enforced: reading the prophets" (drafter recommends it; seam is the heading "What a prophet was"). Running verse count for the ESV 500-verse permission: lesson 1: 6; lesson 2: 21; lesson 3: 18; lesson 4: 21; lesson 5: 22–29; lesson 6: 22; lesson 7: 24–30; lesson 8: 6 (+2 NRSVue). lesson 9: 14; lesson 10: 15; lesson 11: 4 ESV; lesson 12: 18. Roughly 190–210 in total; keep it under 500 or switch overflow quotations to the NET Bible.

**Build rule:** `scripts/build.mjs` now includes only courses with `status: published`, so unreviewed drafts never reach the live site. Set `published` only when every lesson has passed Stage 4.

**To finish both courses:** for each unreviewed lesson run the five-pass review (`.claude/commands/review-lesson.md`, one orchestrator per lesson, children launched with run_in_background false, two or three at a time when the agent limit bites); apply the splits; draft assessments with the assessments brief used for How to Learn Anything (20-item final test with letter-referenced explanations and spread keys; project with rubric); run `npm run validate`, `npm run build`, commit `site/data/courses.js`, set `status: published` in both course.yaml files and TAXONOMY rows; add a CHANGELOG line. Rate limits: each lesson agent costs 150k–250k tokens; reviews with five children cost more. Launch in batches and expect to resume.

**How to Learn Anything media pass:** the 8 lessons predate the media rule (standards 4.5). Run one agent per lesson to add primary-source links, a chart of the real data where numbers are the point (Cepeda's ridgeline, the Roediger & Karpicke crossover, Rohrer's blocked/interleaved curves), a Wikimedia image only where it teaches, and a verified YouTube video where a lecture explains better. Same rules as the drafting brief.

**Folder rename:** John asked to rename `~/Desktop/Foval University` to `~/Desktop/Foval Learning Institute`. Do it only when no agents are running, as the last act of a session, then copy the memory directory `~/.claude/projects/-Users-johnfoval-Desktop-Foval-University/memory/` to the new path's project directory so notes carry over, and tell John to start the next session from the new folder.

## 2. Custom domain (in progress; needs John's DNS)

John bought `fovallearninginstitute.org` at Namecheap. Done: `site/CNAME` contains `www.fovallearninginstitute.org` and GitHub Pages is set to that custom domain. **John must add these DNS records in Namecheap (Advanced DNS):**

| Type | Host | Value |
|---|---|---|
| CNAME | www | jfoval.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Then, once DNS resolves (up to an hour), run `gh api -X PUT repos/jfoval/foval-learning-institute/pages -f https_enforced=true` and check https://www.fovallearninginstitute.org. Update `REPO`-derived links only if the repo moves; the site itself uses relative paths. Update the memory file with the live URL.

## 3. About page with John's bio (not started)

A page at `#/about-john` (linked from the About page and footer) with John's headshot and a short bio in the style guide's voice, first person. **Needs from John:** the headshot image file (I cannot access LinkedIn; the feed URL he gave requires login) and confirmation of where he's from. Content he gave, to be written up, not padded:

- Who he is and where he's from.
- Was in Talented and Gifted as a young kid; did reasonably well in school; was interested in so much as a child that the structure of school was hard even though he enjoyed learning.
- Went to LSU briefly; living life was more interesting at the time, so he went straight into working and never graduated. That decision has served him well, and he has always kept loving learning.
- Has always been drawn to a renaissance-man mentality; general studies suited him; likes big breadth of knowledge with reasonable depth in each.
- Works in AI, where knowledge is unusually accessible; thought it would be valuable to organise and compile the knowledge inside powerful AI models alongside the vast information of the internet into free courses, so anyone who wanted unbiased information and valuable life skills could come, grow, and learn.

Design: one column, headshot at the top left in a square with a thin navy border, no italics, plain headings. Put the image at `site/assets/media/john-foval.jpg` with a credit line if it isn't his own.

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

## 6. Podcast for every lesson (not started; John learns best this way)

Goal: a two-voice conversational audio version of each lesson, playable on the lesson page.

- **NotebookLM** has no public API for Audio Overviews as of the last check; generation is manual in the app (upload the lesson Markdown as a source, click Generate Audio Overview, download the file). Workable for a first batch of 8–20 lessons by hand, not for hundreds. Also check whether Google has since released an API (Gemini API "audio overview" or NotebookLM Enterprise).
- **Better automated option:** generate a conversation script from the lesson with Claude (two named hosts, a curious learner and a teacher, following the style guide, ~10–15 minutes, covering the reason to care, the mechanism, the worked examples, and the misconceptions, and never inventing facts not in the lesson), then render with a multi-speaker TTS: Gemini 2.5 TTS multi-speaker, ElevenLabs (two voices, dialogue mode), or OpenAI TTS. Store MP3s under `site/assets/audio/<course>/<lesson>.mp3` (or a CDN if the repo gets heavy; GitHub Pages has a 1 GB soft limit, so plan for external storage early: Cloudflare R2 free tier).
- **Pipeline:** `scripts/podcast.mjs` that takes a lesson path, writes `audio/<lesson>.script.md`, calls the TTS API, writes the MP3, and adds `audio: <path>` to the lesson frontmatter; the build renders an `<audio>` player at the top of the lesson with a "Listen instead" label and a transcript toggle. Add a `/make-podcast <lesson>` command. Scripts get a light fact-check against the lesson before rendering.
- Style: warm, real conversation, no hype, no "welcome to the show" filler. The hosts should be named and consistent across the institute.

## 7. Homepage: what makes the institute unique (not started)

Add a section below the hero with three or four panels, each with a real screenshot (not a mockup) from the live site: a lesson with a chart and a video; a predict block open; the Review page; the feedback form. Copy, in the style guide's voice: written from the sources and fact-checked; you think as you read; knowledge that stays through spaced review; a podcast for every lesson (once built); Christian Studies taught honestly and labelled; and the one ask: *"We provide this free. The one thing we ask is that you help make it better: when a lesson is unclear or could be better, say so in the form at the bottom of every lesson. We read all of it and use it."* Screenshots go under `site/assets/media/screens/`, taken at phone and desktop width.

## 8. Swag store and donations (not started)

- **Store:** print-on-demand with no inventory. Recommended: Fourthwall (free, creator-focused, handles fulfilment and taxes, custom domain support) or Printful connected to a simple Shopify/Big Cartel storefront. Start with three to five items using the Keystone Arch mark and the tagline: a heavyweight tee (navy, gold mark), a crewneck, a dad cap, a mug, and a bookmark or print of the crest. Design files: export the mark and lockup as high-resolution PNG/SVG from `design/crest-keystone-arch-v2.html`. Link from the footer ("Store") and a small line on the About page. John must create the store account; the agent can prepare the artwork and product copy.
- **Donate:** a `#/support` page and a footer link. Copy from John: "We're constantly using tons of tokens to expand our offerings and make updates. We'd appreciate anything you can do to pitch in if it becomes something you find valuable over time. Cheers!" Options: GitHub Sponsors (fits the open repo), Ko-fi or Buy Me a Coffee (simplest), Stripe Payment Link (lowest fees). John must create the account; then it's one link.
- **FLI ideas** (subtle, not the main thing): "FLI" reads as "fly": a light touch such as "Fly high with us" on the support page or the store, and donors as members of "the FLI Club" with a small mark on their achievements page and early access to new courses. Alternative expansions to consider for a tagline or a store line: "Faith, Learning, Ideas"; "Faith. Learning. Integrity."; "Free Learning Institute". Keep it to one or two places; the institute's name stays the main thing.

## 9. Smaller items

- Feedback endpoint: John to create a free Supabase project; set `window.FOVAL_FEEDBACK_ENDPOINT` and headers in `site/index.html`. Until then, feedback saves locally.
- Four placeholder courses through the pipeline (research, outline, redraft, review) or off the site before promotion.
- Term milestones ("Foundations" etc.) on the Path page when a term is complete.
- Audio mode and "Ask this lesson" are on the roadmap (Phase 2 and 3).
- The taxonomy's `Christian standpoint` labels are now capitalised as "Christian Standpoint" everywhere the site shows them; keep that form.
