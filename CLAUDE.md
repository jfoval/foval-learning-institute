# Foval Learning Institute — instructions for Claude Code

Foval Learning Institute is a free, open, general-education online university. Content lives in this repo as Markdown; a build script compiles it into a static site. Read this file, then the document relevant to your task.

## Start here in a new session
- `docs/BACKLOG.md` — what is in flight, what is next, and every request from John that isn't built yet. Read it first, keep it current.

## Read these before working on content
- `docs/VALUES.md` — what the institute stands on. Every decision, and every piece of feedback, runs against this.
- `docs/EDITORIAL_STANDARDS.md` — what a lesson must be (depth, truth, neutrality, pedagogy). Non-negotiable.
- `docs/STYLE_GUIDE.md` — how it must sound: a professor talking to one student. No em dashes, no AI vocabulary, no salesy talk. Every lesson gets a voice pass.
- `docs/FEEDBACK_LOOP.md` — how learner feedback becomes lesson improvements.
- `docs/CONTENT_PIPELINE.md` — the staged process and the slash commands that run it.
- `curriculum/TAXONOMY.md` — the map of schools and courses. Single source of truth for what exists.
- `curriculum/core-path.yaml` — the recommended progression, used by the site.

## Layout
- `courses/<school>/<course-id>/` — course.yaml, research/, lessons/, assessments/
- `site/` — the static site. `site/data/courses.js` is GENERATED; never edit it by hand.
- `scripts/build.mjs` — compiles courses/ into site/data/. `npm run build`, `npm run validate`.
- `scripts/core-path.mjs` — keeps TAXONOMY.md and core-path.yaml agreeing and generates the Core list. Runs inside `npm run validate` and `npm run build`; `npm run path -- --write` to regenerate.
- `templates/` — starting points for course.yaml, lessons, SOURCES, OUTLINE, REVIEWS.
- `.claude/commands/` — pipeline stages: /new-course, /research-course, /outline-course, /draft-lesson, /review-lesson, /fact-check, /neutrality-audit, /status.
- `docs/PLATFORM_ROADMAP.md` — where the platform is going (accounts, review system, credentials, social).

## Rules
1. Never draft a lesson without the course's `research/SOURCES.md` in context. If it doesn't exist, run Stage 1 first.
2. One lesson per drafting session. Do not batch-generate lessons.
3. Reviews run in fresh-context subagents, never in the same context as the draft.
4. Every lesson change: run `npm run validate` before committing. Run `npm run build` and commit `site/data/courses.js` when publishing.
4b. Every course on the map carries a placement decision in the `Path` column of `curriculum/TAXONOMY.md`: a term (`T1` to `T8`) if it belongs on the Foval Core, or `elective` if it does not. Adding a course to the map means making that call in the same edit, following "Placing a course on the Core" in TAXONOMY.md, and adding it to `curriculum/core-path.yaml` when it is on the Core. `npm run validate` fails on a blank cell or on the two files disagreeing. The numbered term list in TAXONOMY.md is generated: `npm run path -- --write`, never by hand.
5. When a course's status changes, update both `course.yaml` and its row in `curriculum/TAXONOMY.md`. Statuses are planned → research → drafting → published. There is no "review" state and no owner sign-off gate: a course goes live when its lessons have passed Stage 4 and the voice pass, and improves afterwards through the feedback loop. The build includes only `status: published` courses. Never hold a course for the owner to review.
6. Sensitive domains (standards Part 3.4) require the neutrality audit before publish. No exceptions.
6b. School of Christian Studies courses carry `standpoint: christian` and follow standards 3.7: taught from within the faith, labelled as such, objections engaged at full strength. Neutral schools never assert or mock religious claims either way.
7. Never use an em dash in any prose that learners will read. Search for "—" before committing content.
8. Lesson content format: YAML frontmatter (title, minutes, objectives, quiz) + Markdown body. `:::callout Title`, `:::exercise Title`, `:::predict Question` (body is the hidden answer), `:::checkpoint Question` (body is the hidden answer), `:::figure <url> | <alt>` (body is the caption with credit and licence), and `:::video <youtube url> | <title>` (body is why to watch) blocks, each closed with `:::`, render as styled elements; predict and checkpoint hide their body behind a button. Media rules are in standards 4.5: real images with credits, YouTube only for video, charts drawn from real data, nothing decorative or AI-generated. Raw HTML is allowed but discouraged.
9. Site code is plain HTML/CSS/JS with no framework and no build step. Keep it that way; it must run fast on cheap phones.
10. Commit messages: short imperative subject; body says what changed and why. Content commits name the course and lesson.

## Local preview
`npm run build && npm run serve` then open http://localhost:4173
