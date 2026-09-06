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
SVG text and shape fills hardcoded dark; SVG labels under font-size 15; bodies with no links; and
argument displays whose conclusion line would be folded into the previous premise.

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

## 6. Podcast for every lesson (not started; John learns best this way)

Goal: a two-voice conversational audio version of each lesson, playable on the lesson page.

- **NotebookLM** has no public API for Audio Overviews as of the last check; generation is manual in the app (upload the lesson Markdown as a source, click Generate Audio Overview, download the file). Workable for a first batch of 8–20 lessons by hand, not for hundreds. Also check whether Google has since released an API (Gemini API "audio overview" or NotebookLM Enterprise).
- **Better automated option:** generate a conversation script from the lesson with Claude (two named hosts, a curious learner and a teacher, following the style guide, ~10–15 minutes, covering the reason to care, the mechanism, the worked examples, and the misconceptions, and never inventing facts not in the lesson), then render with a multi-speaker TTS: Gemini 2.5 TTS multi-speaker, ElevenLabs (two voices, dialogue mode), or OpenAI TTS. Store MP3s under `site/assets/audio/<course>/<lesson>.mp3` (or a CDN if the repo gets heavy; GitHub Pages has a 1 GB soft limit, so plan for external storage early: Cloudflare R2 free tier).
- **Pipeline:** `scripts/podcast.mjs` that takes a lesson path, writes `audio/<lesson>.script.md`, calls the TTS API, writes the MP3, and adds `audio: <path>` to the lesson frontmatter; the build renders an `<audio>` player at the top of the lesson with a "Listen instead" label and a transcript toggle. Add a `/make-podcast <lesson>` command. Scripts get a light fact-check against the lesson before rendering.
- Style: warm, real conversation, no hype, no "welcome to the show" filler. The hosts should be named and consistent across the institute.

## 7. Homepage: what makes the institute unique (not started)

Add a section below the hero with three or four panels, each with a real screenshot (not a mockup) from the live site: a lesson with a chart and a video; a predict block open; the Review page; the feedback form. Copy, in the style guide's voice: written from the sources and fact-checked; you think as you read; knowledge that stays through spaced review; a podcast for every lesson (once built); Christian Studies taught honestly and labelled; and the one ask: *"We provide this free. The one thing we ask is that you help make it better: when a lesson is unclear or could be better, say so in the form at the bottom of every lesson. We read all of it and use it."* Screenshots go under `site/assets/media/screens/`, taken at phone and desktop width.

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


## 8b. Supabase backend: blocked on a free-tier project slot (investigated 2026-09-05)

Accounts, cross-device sync, verifiable certificates, the achievements page, and a working feedback endpoint all unblock together once there is a Supabase project. John asked the agent to set it up; the agent is signed in to his dashboard (GitHub OAuth, his session).

**The blocker.** Supabase free tier allows 2 projects per member. John Org already has 3: **Mainline** (active), **math-quest** (active), **John Project** (paused). Supabase therefore refuses both *creating* a new project and *resuming* the paused one. Existing projects are grandfathered; only new/resumed ones are blocked.

**Ways out:** delete one project, upgrade the org to Pro ($25/month, John must purchase), or repurpose an existing project. Repurposing sidesteps the limit because it creates nothing, but repurposing John Project still needs a resume, which is blocked, so a slot has to be freed either way.

**What John Project is: settled 2026-09-05. It is empty.** Ref `ebkuhylfhyfretagpczf`. Its database backup was downloaded from the paused project (works without resuming) and read locally. The only object in the `public` schema is a table called `keepalive` holding just `id` and `created_at`, which is the standard trick for pinging a free project so it does not auto-pause. Everything else in the dump is Supabase's own `auth`, `storage` and `realtime` system schemas. `auth.users` has 0 rows and `storage.buckets` has 0 rows. It is not Memory-App's backend (Memory-App's schema would show `profiles`, `content_sets`, `items`, `reviews`, `card_results`) and it is not referenced by any repo, Actions secret, Vercel project, or local file. It is a throwaway with nothing in it. Safe to delete. A copy of the dump is in John's Downloads as `db_cluster-23-08-2026@00-45-32.backup.gz`.

**The plan, awaiting one click from John.** Reusing the project would need a resume, which the free-tier limit blocks, so the working path is: John deletes John Project at https://supabase.com/dashboard/project/ebkuhylfhyfretagpczf/settings/general (the agent does not perform permanent deletions), which frees a slot, then the agent creates a fresh project named `foval-learning-institute` and builds the schema, RLS, and auth from the Phase 2 spec in `docs/PLATFORM_ROADMAP.md`. Net project count stays at 3. Cost stays $0.

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
- **The four placeholder courses** (Python, Algebra, Personal Finance, Writing Clearly) are live and
  have never been through the pipeline. They are the largest untouched quality risk on the site,
  because they are the ones learners can actually read today.

## 9. Smaller items

- ~~Feedback endpoint~~ **done 2026-09-05**: Cloudflare Worker + D1, live at `https://foval-feedback.johnfoval.workers.dev`, wired into `site/index.html`. Read it with `npm run feedback`. See `docs/FEEDBACK_LOOP.md` and `workers/feedback/`.
- Four placeholder courses through the pipeline (research, outline, redraft, review) or off the site before promotion.
- Term milestones ("Foundations" etc.) on the Path page when a term is complete.
- Audio mode and "Ask this lesson" are on the roadmap (Phase 2 and 3).
- The taxonomy's `Christian standpoint` labels are now capitalised as "Christian Standpoint" everywhere the site shows them; keep that form.
