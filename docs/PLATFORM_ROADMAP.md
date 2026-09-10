# Platform Roadmap

How Foval Learning Institute gets from a static prototype to a full learning platform with accounts, progress sync, continual review, social accountability, and credentials, without ever compromising "free for everyone" or "works on any device".

## Principles

1. **Content is the product; the platform serves it.** Content lives in git as Markdown, forever. Every platform decision must keep that true.
2. **Free means free.** No paywalls, and no advertising inside a lesson. Infrastructure must cost near zero at small scale and scale cheaply; static hosting plus a free-tier backend does this. If sponsorship ever covers the bill, it goes on pages that teach nothing, and it is labelled. See VALUES.md value 1.
3. **Any device, first.** Phone-first responsive design, installable as a web app, lessons readable offline. Native apps only if a web app cannot do something we need.
4. **No lock-in.** Learner data is exportable. Accounts are optional for reading; required only for sync and social features.
5. **Ship in phases.** Each phase is usable on its own.

---

## Phase 0: Prototype (done)

- Static site: catalog, course pages, lessons, quizzes, browser-local progress, certificates.
- Content pipeline: Markdown sources, build script, editorial standards, slash commands.
- Four starter courses at `review` status.

## Phase 1: Content engine and public launch

**Goal:** a live site with a growing set of courses that meet the standards.

- GitHub Pages deploy on every push (`.github/workflows/pages.yml`).
- Progressive Web App: manifest and service worker so the site installs on phones and lessons read offline.
- **Path page**: the Foval Core as a guided progression. Shows where you are, what's next, what's coming soon. Any course can still be taken in any order.
- **Review page (continual testing)**: spaced-repetition review across every quiz question from every lesson you've completed. Questions come back on a schedule that lengthens each time you get them right and resets when you miss. This is the "keep it fresh" feature and it works entirely in the browser from day one.
- **Transcript**: a running tally of every lesson and course completed, hours studied, questions answered, current retention rate.
- **Public changelog**: `docs/CHANGELOG.md` lists every course published and every platform change. No indefinite "beta".
- **Feedback**: a "Was this lesson clear?" thumbs up/down plus a comment link on every lesson. In Phase 1 this opens a prefilled GitHub Issue; in Phase 2 it writes to the feedback table.
- Run the content pipeline on the first Core courses. Target: the whole of Term 1 and Term 2 of the Core published.

**Stack:** plain HTML/CSS/JS, no framework, no build beyond `scripts/build.mjs`. This is deliberate: fastest on cheap phones, trivially hostable, and anyone can contribute.

## Phase 2: Accounts and sync

**Goal:** sign in on any device and your progress follows you.

- **Backend: Cloudflare Worker plus D1** (`workers/api/`). Superseded the original Supabase plan when the project moved to Cloudflare in September 2026; the Worker and database were already deployed and proven by the feedback endpoint. Written and tested, not yet deployed. Alternatives weighed in `docs/AUTH_OPTIONS.md`.
- **Auth:** Google sign-in and a six-digit code by email. Not passwords: hashing one costs 50 to 100 ms of CPU and the Workers Free plan allows 10 ms, so passwords alone would put this on a paid plan for a method the other two already cover. Add them if learners ask.
- **Tables:** `users`, `identities`, `sessions`, `login_codes` for the sign-in itself; `profiles`, `lesson_progress` (user, course, lesson, done, score, at), `review_items` (user, item key, ease, interval, due, reps, lapses, last), `study_sessions` (for streaks and hours). Feedback keeps its own table and its own write-only Worker.
- **Sync strategy:** the browser stays the source of truth; on sign-in, merge local progress with the server (a lesson stays done, the higher score wins, a review item keeps the schedule further ahead, the larger day tally wins). Signing in cannot lose progress. No feature is lost for signed-out users, and nothing here needs an account to work. Writes are batched on a timer because D1's free plan counts row writes and, since 1 September 2026, fails queries once the daily cap is hit.
- **Content stays static.** The site keeps loading `courses.js` from GitHub Pages; only learner state goes to D1. The two can never be out of step in a way that matters.
- Migration path: Phase 1's local progress format is designed to map 1:1 onto these tables.
### State of the work: written, tested, NOT deployed

`workers/api/` is written and tested: 28 Worker checks and 12 browser checks pass against a local
D1. It is inert until `window.FOVAL_API` in `site/index.html` is set to the deployed URL; while
that is empty the site behaves exactly as before, with no sign-in link and no network calls, which
is what is on `main`. Nothing is blocked; accounts simply have not been built. See
`docs/DECISIONS.md` §11 for why this is Cloudflare and not Supabase.

**What is left needs John**, because it needs credentials and two free accounts. The steps are in
`workers/api/README.md`: apply `schema.sql` to the existing `foval-feedback` database, create a
Google OAuth client and a Resend account (both free), set four secrets with `wrangler secret put`,
`wrangler deploy`, then set `FOVAL_API`. **That order matters**; setting `FOVAL_API` first gives
every visitor a broken sign-in page. `wrangler` is not authenticated in agent sessions on Claude
Code on the web, and the network policy there blocks `workers.dev` and the live site, so a session
there can write and test the Worker but cannot deploy it.

**One thing to improve as soon as the site moves to Cloudflare Pages:** the session token is a
bearer token in `localStorage`, not an HttpOnly cookie, because the site and the Worker are on
different origins today and third-party cookies are being phased out. Once they share an origin,
switch to an HttpOnly, Secure, SameSite=Lax cookie and delete the bearer path. That is a real
security improvement, not a tidy-up.

**One design constraint that holds under any option:** since 1 September 2026 D1 free-plan queries
*fail* when the daily caps are hit, and the binding cap is **100,000 row writes a day**, not
storage. So progress is one row per learner per course, updated in place, and review items flush on
a timer and on sign-out rather than on every answered card. The browser stays the source of truth
and the site keeps working with no network.

- **Audio mode**: every lesson gets a narrated audio version (generated from the lesson text, reviewed for pronunciation), with playback speed control, so a course can be taken on a walk or a commute. Offline download comes free with the PWA cache.

## Phase 3: Assessment and credentials

**Goal:** completing a Foval course means something.

- **Course-end tests**: drawn from the whole course, timed, randomised item order, pass mark 80%.
- **Projects**: deliverable plus rubric. Self-assessed against the rubric in Phase 3; peer-reviewed in Phase 4.
- **AI-assisted feedback on free-response work**: written exercises and projects get feedback from Claude against the rubric. Not grading, feedback. Humans (and later peers) grade.
- **"Ask this lesson"**: a question box on every lesson that answers only from that lesson's text and its cited sources, quoting the passage it drew on. Grounded, so it cannot drift from the reviewed content. Capped per user per day.
- **Verified certificates**: each certificate gets a unique ID and a public verification page (`/verify/<id>`), so anyone can confirm it's real. This is what makes a LinkedIn credential meaningful.
- **LinkedIn**: certificates carry the fields LinkedIn's "Add to profile" flow needs (name, issuer, issue date, credential ID, credential URL). One click adds it. Every certificate states plainly that Foval is not an accredited institution and the credential is not academic credit.
- **Open Badges**: issue certificates in the Open Badges 3.0 standard (the open, verifiable credential format used by universities and employers), so they work in any badge wallet. The Foval Core completion becomes a single, serious credential: the "Foval Core Diploma".
- **Accreditation, honestly:** formal accreditation as a degree-granting institution is a multi-year regulatory process and mostly not what a free general-education project should chase. What *is* achievable and worth more to most learners: rigorous, verifiable, public assessments; a transcript anyone can check; content quality that earns a reputation; and partnerships with employers or other institutions who agree to recognise Foval credentials. Reputation is earned by the tests being hard and the content being good. Build that first.

## Phase 4: Social and accountability

**Goal:** learning with people you know, without turning into a social network.

- **Rules first**: community guidelines, moderation procedure, and an appeals process are written and published before any social feature switches on. Moderation decisions are logged. Removing someone for criticising Foval is never a valid reason.
- **Connections**: add friends and family by username. See each other's transcript, streak, and what you're each studying now. That's it. No feed, no likes.
- **Study groups**: a small group takes a course together on a shared schedule; a group page shows everyone's progress on it. Works for families, couples, book clubs, teams.
- **Accountability**: opt-in weekly email or push to your connections: "Alex finished Logic and Argument this week." Opt-in nudges when you go quiet.
- **Discussion per lesson**: a thread under each lesson for questions and answers. Moderated. Good answers get folded back into the lesson via the content pipeline.
- **Peer review** for projects: reviewers are learners who have completed the course; rubric-guided.

## Personalised learning path from a questionnaire (not started)

The third way in, alongside the Foval Core and free choice. Spec:

- **Questionnaire** at `#/plan`: age band; what they want out of it (be well-read / practical skills / faith / career / all of it); time per week; current strengths and gaps (self-rated across the 15 schools, three levels); a few life-goal prompts (start a business, understand the Bible, be a better thinker, manage money, get healthier, be more self-reliant); how they like to learn (reading, listening, doing).
- **Engine:** a scoring table from answers to school weights, then a path assembled from `curriculum/core-path.yaml` plus TAXONOMY courses: always starts with How to Learn Anything and one thinking-tools course; weights the rest by goals; respects prerequisites; sizes each term to the time budget. Deterministic and explainable: the page shows *why* each course is there. Phase 1 can be client-side JS; Phase 3 could use Claude to write the rationale text.
- **Attach to profile:** the plan is saved (localStorage now; the accounts database in Phase 2) as the learner's active path; the Path page then shows *their* path with the same progress dots, "next up", and time estimates; "switch to the Core" and "rebuild my plan" buttons.
- Data file: `curriculum/planner.yaml` with the question list and weights, so it is editable without touching code.

## Accomplishments page, sharing, and credentials (not started)

- **Achievements page** at `#/achievements`: a clean, screenshot-friendly layout (fixed max width about 600px, the Keystone Arch mark, the learner's name, courses completed with dates, lessons, hours, retention score, streak, certificates). Designed so a plain screenshot looks like a credential: generous margins, no UI chrome, the institute name and URL in a footer line.
- **Share buttons:** copy link, share to X/LinkedIn/Facebook via their share URLs, "copy as image" using a canvas render of the card (html-to-image via cdnjs, or an SVG template rendered to PNG). Native share on phones via `navigator.share`.
- **Verifiable certificates** need Phase 2 (accounts) so a certificate ID can be looked up at `/verify/<id>`; until then the share page is self-attested and says so.
- **Accreditation** is covered in Phase 3 above. Research options for a certificate mark that is honest ("Foval Learning Institute Certificate of Completion, not accredited credit").

## Swag store and donations (not started)

- **Store:** print-on-demand with no inventory. Recommended: Fourthwall (free, creator-focused, handles fulfilment and taxes, custom domain support) or Printful connected to a simple Shopify/Big Cartel storefront. Start with three to five items using the Keystone Arch mark and the tagline: a heavyweight tee (navy, gold mark), a crewneck, a dad cap, a mug, and a bookmark or print of the crest. Design files: export the mark and lockup as high-resolution PNG/SVG from `design/crest-keystone-arch-v2.html`. Link from the footer ("Store") and a small line on the About page. **John must create the store account**; the agent can prepare the artwork and product copy.
- **Shirt ideas John asked for, 2026-09-06:** play on the FLI initials, in the vein of "I'm so FLI" and "Learning to FLI". Funny but cool; keep the mark and the Caslon/Plex system so they still look like the institute.
- **Donate:** a `#/support` page and a footer link. Copy from John: "We're constantly using tons of tokens to expand our offerings and make updates. We'd appreciate anything you can do to pitch in if it becomes something you find valuable over time. Cheers!" Options: GitHub Sponsors (fits the open repo), Ko-fi or Buy Me a Coffee (simplest), Stripe Payment Link (lowest fees). **John must create the account**; then it is one link.
- **FLI ideas** (subtle, not the main thing): "FLI" reads as "fly": a light touch such as "Fly high with us" on the support page or the store, and donors as members of "the FLI Club" with a small mark on their achievements page and early access to new courses. Alternative expansions for a tagline or a store line: "Faith, Learning, Ideas"; "Faith. Learning. Integrity."; "Free Learning Institute". Keep it to one or two places; the institute's name stays the main thing.

The funding and advertising policy this all sits under is settled: `docs/DECISIONS.md` §10.

## Going private: what has to move first (opened 2026-09-05)

John confirmed the codebase does not need to be public; it is only public because free GitHub Pages requires it. Value 9 has been rewritten in `docs/VALUES.md` and on the About page so "open" now promises openness about the *teaching* (sources named, disagreement shown, revisions recorded) rather than open source code. The "Content and code on GitHub" footer link is removed.

**Do not make the repo private yet.** GitHub Pages will not serve a private repo on a free account, so flipping it today takes the live site down. Order of operations: move static hosting to Cloudflare Pages (free, serves private repos, custom domain, fast HTTPS), repoint DNS, *then* flip the repo to private.

**Two site links still point into the public repo** and will 404 for visitors the moment it is private. Both are in `site/assets/app.js` via the `REPO` constant:

| What | Replace with |
|---|---|
| "Report a problem" on every lesson, opens a GitHub issue | the feedback endpoint, which already exists |
| "editorial standards" on the About page | an on-site `#/standards` page generated from `docs/EDITORIAL_STANDARDS.md` at build time |

The two "full map" links were the third case and are **done, 2026-09-08**: `#/map` is a real page, generated from TAXONOMY.md by `scripts/build.mjs` into `window.FOVAL_MAP`. `#/standards` is the same job on a different file and is the last one left.

## Course requests from people (opened 2026-09-06)

Requests that came in by text message, not through the feedback form. All are rows in `curriculum/TAXONOMY.md` with status `planned`; none has a folder yet. A folder gets created when research begins (`/research-course`).

| Course | School | Requested by | Why | Term |
|---|---|---|---|---|
| Graphic Design Fundamentals | Literature and the Arts | M. Wesley | Wants to take it himself. First outside request for a course. | T23 |
| Statistics for Citizens (existing row, note widened) | Foundations | M. Wesley | Asked for "intro to statistics and the normal distribution". The existing course already covers averages, sampling and correlation; the note now names spread and the normal distribution explicitly so the outline has to teach the bell curve properly, including where it does not apply. | T5 |
| Computer Science Foundations | Computer Science and AI | John | Part of the "speciality technology courses" ask. Sits between How Computers Work and Data Structures and Algorithms: computation and its limits, complexity, languages and compilers, memory, concurrency. | T20 |
| Technology Leadership: CTO and CIO | Computer Science and AI | John | The executive job rather than the craft: architecture and build-vs-buy, budgets and vendors, security posture, team structure, roadmaps, talking to a board. Advanced, because it assumes the technical courses under it. | T20 |

**Ordering.** All four are `planned` behind the queue in `docs/QUEUE.md`. Nothing here jumps that queue without John saying so. Graphic Design Fundamentals is the one with a named person waiting on it, which is the strongest reason on this list to move a course up. Data science is deliberately not a fifth row: `docs/DECISIONS.md` §12.

## Smaller open items

- Term milestones ("Foundations" and so on) on the Path page when a term is complete.
- An on-site `#/standards` page generated from `docs/EDITORIAL_STANDARDS.md`, which is also the last blocker on going private.
- Audio mode in the player and "Ask this lesson" are Phase 2 and Phase 3 above.
- The taxonomy's `Christian standpoint` labels are capitalised as "Christian Standpoint" everywhere the site shows them; keep that form.

## Fun, without being cheesy

The line: fun that comes from the *learning* being satisfying, not from stickers layered on top. Things that pass that bar:

- **The transcript itself.** Watching a real record of everything you know grow is the core satisfaction. Make it beautiful and shareable.
- **Retention score.** The Review system produces an honest number: how much of what you've learned you can still recall. Keeping it high is a real game.
- **Streaks, quietly.** A study streak shown on your dashboard, never nagged about.
- **Great questions.** Quiz questions that are genuinely interesting puzzles ("A ship leaves Rome in 50 BC...") rather than recall. Fun comes from good problems.
- **Milestones with substance.** Finishing a Core term earns a named milestone ("Foundations") with a page showing what you can now do. Not a badge with a cartoon.
- **Capstone.** The Core ends with teaching something to someone else and writing it up. That's the graduation.
- **Reading lists and "go deeper".** Learners who finish a course get a curated next-reads list. Intrinsic reward.
- **Occasional wit in the writing.** The standards allow humour that serves clarity. A course that's a pleasure to read is the most durable fun there is.

Things that fail the bar and we won't do: points for logging in, cartoon mascots, confetti, leaderboards, "XP".

## What we took from Peterson Academy

`docs/INSPIRATION.md` researched Peterson Academy in detail. Adopted: the roughly eight-hour course as the standard unit with total hours on every card; per-lesson quizzes plus a course final; a term-structured core with prerequisite and follow-up links; audio mode with playback speed and offline; a lecture-grounded "Ask" feature; course sequences rather than one-offs; a public changelog. Deliberately different: free rather than $399 a year; a published balance policy with a review pass instead of a stated mission against "indoctrination"; written and project assessment rather than lecture-only; community rules and appeals before any social feature; verifiable certificates that say what they are; and coverage of the gaps they leave (computer science, AI, statistics, chemistry, languages, and the whole practical strand).

## Devices

- **Phase 1**: responsive web, PWA install, offline lesson cache.
- **Phase 2**: push notifications via the PWA for review reminders (opt-in).
- **Later, if needed**: wrap the PWA with Capacitor for App Store / Play Store listings. Same code.

## Cost projection

| Scale | Hosting | Backend | Total / month |
|---|---|---|---|
| Launch to 10k users | GitHub Pages or Cloudflare Pages: $0 | Workers Free plus D1 free: $0 | $0 |
| 10k–100k users | Cloudflare Pages: $0 | Workers Paid $5 plus D1 usage | ~$5 to $15 |
| 100k+ | Cloudflare Pages: $0 | Workers Paid plus D1 at volume | ~$25 to $100 |

The free plan runs out on row writes before anything else: 100,000 a day, which is roughly
ten thousand learners finishing a course on the same day. Workers Paid at $5 a month is the
first thing to buy, and it also unlocks email and password sign-in.

AI-assisted feedback (Phase 3) is the one meaningfully variable cost; cap it per user per month.

## What we are not building

A video platform (link to great lectures instead), a marketplace for instructors, a social feed, or anything we could only afford by selling the learner's attention.
