# Foval Learning Institute — instructions for Claude Code

Foval Learning Institute is a free, open, general-education online university. Content lives in this
repo as Markdown; a build script compiles it into a static site. Read this file, then
`docs/QUEUE.md`, then the document relevant to your task and nothing else.

## Start here in a new session
- `docs/QUEUE.md` — the marching order: what is in flight, what is next, what is blocked. Read it
  first and keep it current **in the same commit as the work**, not at the end of the session.
- Nested `CLAUDE.md` files load when you work in their directory: `courses/`, `site/`, `scripts/`.
  Do not restate their rules here.

## Read when the task calls for it, not before
- `docs/DECISIONS.md` — what is settled and must not be re-opened, with the reasoning. Check it
  before asking John anything.
- `docs/CHANGELOG.md` — what has shipped. Check here before rebuilding something that is done.
- `docs/VALUES.md` — what the institute stands on. Every decision, and every piece of feedback,
  runs against this.
- `docs/EDITORIAL_STANDARDS.md` — what a lesson must be (depth, truth, neutrality, pedagogy).
  Non-negotiable.
- `docs/STYLE_GUIDE.md` — how it must sound: a professor talking to one student. No em dashes, no
  AI vocabulary, no salesy talk. Every lesson gets a voice pass.
- `docs/CONTENT_PIPELINE.md` — the staged process and the slash commands that run it.
- `docs/PODCAST_PIPELINE.md` — how an episode is made, what it costs, and the order to render in.
  Read it before spending anything on audio.
- `docs/FEEDBACK_LOOP.md` — how learner feedback becomes lesson improvements.
- `docs/SOURCE_NOTES.md` — standing judgements about particular sources. Stage 1 reading.
- `docs/PLATFORM_ROADMAP.md` — where the platform is going, and the specs for work not started.
- `curriculum/TAXONOMY.md` and `curriculum/core-path.yaml` — the map of schools and courses, and
  the order to take them in. `scripts/CLAUDE.md` has the contract between them.

## Layout
- `courses/<school>/<course-id>/` — course.yaml, research/, lessons/, assessments/, podcast/
- `site/` — the static site. See `site/CLAUDE.md`
- `scripts/` — build, validate and the tools. See `scripts/CLAUDE.md`
- `templates/` — starting points for course.yaml, lessons, SOURCES, OUTLINE, a review entry
- `.claude/commands/` — the pipeline stages, each carrying the craft knowledge for its stage:
  /new-course, /research-course, /outline-course, /draft-lesson, /review-lesson, /fact-check,
  /neutrality-audit, /voice-pass (a tool now, not a stage), /make-podcast, /triage-feedback,
  /status

## Rules
1. **Content rules live in `courses/CLAUDE.md`** and load when you work there: SOURCES before
   drafting, one lesson per session, reviews in fresh contexts, no em dashes, the lesson format and
   the `:::` block grammar, sensitive domains and the Christian standpoint.
2. **Site rules live in `site/CLAUDE.md`**: plain HTML, CSS and JS with no framework and no build
   step, the built site is generated into git-ignored `dist/`, check both themes at phone and
   desktop width.
3. **Build and validator rules live in `scripts/CLAUDE.md`**: what `npm run validate` enforces, and
   the contract between `curriculum/TAXONOMY.md` and `curriculum/core-path.yaml`.
4. **Run `npm run validate` before every commit, and check its exit code rather than its output.**
   That is the whole rule now. **The built site is not in git**: `npm run build` writes everything
   into git-ignored `dist/`, and the Pages workflow builds it in CI and publishes what it built, so
   there is nothing generated to commit and nothing to keep in step. `site/` is source, and the
   build never writes to it. This replaced a rule that said to commit the build output, which cost
   two CI failures on 2026-09-17 and, over twelve hours of two sessions working at once, fourteen
   mechanical conflicts on each of three generated files. `docs/PODCAST_PIPELINE.md` has the
   reasoning under "Working alongside another session".
5. **A course status change edits `course.yaml` and its TAXONOMY.md row in the same commit.**
   Statuses are planned → research → drafting → published. There is no "review" state and no owner
   sign-off gate: a course goes live once its lessons have passed Stage 4 and the voice pass, and
   improves afterwards through the feedback loop. The build ships only `status: published` courses.
   Never hold a course for John to review. `npm run validate` fails if the two disagree.
6. **Audio gates "finished", not "published".** A course goes live when every lesson has passed
   Stage 4: set `status: published`, no audio required. A course is not **finished** until every
   lesson has an episode rendered, uploaded and stamped, and that word is not used loosely.
   `npm run validate` fails on a published course that owes more episodes than
   `curriculum/audio-debt.yaml` records, so **a course being published adds its lesson count to
   that file in the same commit**. An existing entry may still only shrink. Drafting runs ahead as
   far as tokens allow; episodes trail it in Core term order as budget allows.
   `docs/DECISIONS.md` §2 has the reasoning.
7. **Commit messages:** short imperative subject; body says what changed and why. Content commits
   name the course and lesson.
8. **Finish the job without asking permission for the routine parts of it.** When work is done and
   `npm run validate` exits 0, merge it to `main` rather than asking whether to. **Work that is not
   on `main` is not done, because the live site serves `main`.** Content sessions commit straight to
   `main` and pull first; platform work gets a branch.
   **John often runs two sessions at once, usually one on episodes and one on lessons, so stage your
   own files by name and never `git add -A` or `git commit -a`.** On 2026-09-17 and 18 a broad add
   swept another session's in-progress work into two unrelated commits. Nothing was lost, because
   the work happened to be finished, but the history now says the wrong thing about who changed
   what, and the next one could commit something half-written. If `git status` shows files you did
   not touch, leave them: that is the other session working, not a dirty tree to tidy. Make the ordinary judgement calls (which term
   a course belongs in, whether a suggestion duplicates something on the map, how to word a note)
   and say what you decided and why. Bring John a decision only when it changes what the institute
   claims or teaches, when it would spend money or create an account, or when two readings of a
   request would produce genuinely different work.
9. **If a rule needs shouting, write a check instead.** Two rules here were paragraphs in capitals
   because each had been broken once, and capitals do not prevent a repeat. Both are now in
   `npm run validate` and one line of prose. Do the same with the next one.

## Local preview
`npm run build && npm run serve` then open http://localhost:4173
