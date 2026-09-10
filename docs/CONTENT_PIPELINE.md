# Content Pipeline: How Courses Get Built with Claude Code

## The definition of done, which is the thing this pipeline is for

**A course is finished when every lesson has been through Stage 4 and the voice pass, the assessments
exist, and every lesson has a podcast episode live and stamped.** Nothing less counts, whatever it is
called. A course with ten reviewed lessons and no audio is not done, it is two thirds done, and
saying otherwise has already cost this project one wrong turn: on 2026-09-09 a session declared
Personal Finance Fundamentals complete with zero of its ten episodes made and moved on to the next
course.

So the order for every course is:

1. Stage 0 to 3: scaffold, research, outline, draft.
2. Stage 4: review, and the voice pass.
3. Assessments, if the course has six or more lessons (standard 4.4).
4. **Stage 6: an episode for every lesson**, via `/make-podcast`, each one rendered, uploaded and
   stamped.
5. Only then, the next course.

**Do not batch the audio to the end of the queue and do not leave it for a later session.** A course
you have moved on from is a course nobody comes back to.


This is the operating manual for producing Foval courses at quality and at scale. It exists because the default way of using an AI to write courses (ask for a course, get a course) produces shallow content. The pipeline below is designed so that depth is structural, not a matter of hoping the model tries hard.

## The core idea

**Separate the stages, and give each stage the right inputs.** Research happens before outlining. Outlining before drafting. Drafting one lesson at a time with the research in context. Review in a fresh session by a reviewer whose only job is to find problems. Nothing is published until it passes review and the voice pass. There is no owner sign-off gate: see rule 5 in `CLAUDE.md`. A course goes live when its lessons have passed Stage 4, and it keeps improving through the feedback loop.

Each stage is a slash command in `.claude/commands/`. Each produces a file in the course folder. The files are the memory: any future session can pick up where the last one left off by reading them.

## Course folder anatomy

```
courses/<school>/<course-id>/
  course.yaml            metadata, outcomes, status
  research/
    SOURCES.md           the canonical references the course is built from  (stage 1)
    OUTLINE.md           lesson-by-lesson plan with objectives              (stage 2)
    reviews/             one file per lesson: review findings and resolutions (stage 4)
      <lesson-id>.md     that lesson's whole review history
      course-wide.md     findings belonging to no single lesson
      README.md          the layout
  lessons/
    01-slug.md           one lesson per file, frontmatter + Markdown         (stage 3)
    02-slug.md
  assessments/           optional: course-end test, projects                (stage 3)
    final-test.md
    project-*.md
```

Templates for each file are in `templates/`.

## The stages

### Stage 0: Choose and brief — `/new-course <school> <id> "<Title>"`
Pick a course from `curriculum/TAXONOMY.md`. If it is not on the map yet, add the row first, including its **Path** cell: the term it sits in. Every course on the map is on the Foval Core, so this is a question of *when* a learner should take it, not *whether* it belongs. That decision is required, not deferred, and `npm run validate` fails without it. The rule for choosing is "Placing a course on the Core" in TAXONOMY.md. The course also goes into `curriculum/core-path.yaml`, in the position it should be taken inside its term.

Then create the folder from `templates/`. Fill in `course.yaml`: audience, prerequisites, what the learner will be able to do. Set `status: research`.

### Stage 1: Research — `/research-course <path>`
The most important stage. Claude uses web search and fetch to find and read:
- The two or three textbooks universities actually assign for this subject, and their tables of contents
- Syllabi from strong university courses on the topic (MIT OCW, Stanford, Oxford, Yale Open Courses, etc.)
- The primary sources, if any (original texts, key papers, official guidance)
- Expert consensus statements and, for contested topics, the best statement of each major position
- The common misconceptions experts complain about
- The best free resources already online, so we link rather than duplicate

Output: `research/SOURCES.md`. It is not a bibliography; it is a working document that says *what each source is good for* and *what the field considers essential*. A good SOURCES.md is 1,000 to 3,000 words. Set `status: drafting` when done.

### Stage 2: Outline — `/outline-course <path>`
From SOURCES.md, produce `research/OUTLINE.md`: the lesson sequence, each with objectives, key ideas, worked examples to include, misconceptions to address, exercises, and which sources it draws on. Also decide the assessments (final test, projects). Update `course.yaml` outcomes to match.

### Stage 3: Draft — `/draft-lesson <path> <n>`
Draft **one lesson**, with SOURCES.md, OUTLINE.md, EDITORIAL_STANDARDS.md, and the previous lesson in context. One lesson per session keeps the model's attention on depth. Output: `lessons/NN-slug.md`. Run `npm run validate` after each.

### Stage 4: Review — `/review-lesson <path> <n>`
Review in a **fresh context**, so the reviewer is not anchored on the draft's own framing. The review is tiered, because reviewing every lesson as though it were a contested one is how this pipeline got expensive:

- **Tier A, one reviewer, the default**, at roughly 100k tokens a lesson.
- **Tier B, one reviewer per pass in parallel**, at 600k to 900k. Reserved for sensitive domains (standards 3.4), standpoint courses, and any lesson a Tier A pass sent back for heavy rewriting.

**`.claude/commands/review-lesson.md` is the single source for how a review runs**: how to pick the tier, how to brief the reviewer, the five passes, what the linter catches and what it cannot. Do not restate it here; a rule stated in two places is a rule that will be updated in one.

The passes are depth (Part 1), fact-check (Part 2), neutrality (Part 3), pedagogy (Part 4), and voice and media (the style guide and 4.5). **The neutrality pass is skipped, with a line in that lesson's review file saying so, on a lesson with no contested or value claims in it.** On a procedural course the fact-check is executed rather than fetched: run the code, work the arithmetic.

**A stub is replaced, not reviewed.** A pre-pipeline placeholder of a few hundred words costs as much to review as a real lesson and returns nothing. Run Stage 1 and Stage 2 on the course and draft it fresh.

Findings go to `research/reviews/<lesson-id>.md` with IDs, the fixes are applied, and a "Resolutions applied" note records what was deliberately not fixed. A second full pass runs only when the first found wrong facts, a failed neutrality check, or a third of the lesson generic. Not out of caution.

### Stage 5: Publish
When every lesson has passed Stage 4 and the voice pass, set `status: published`, run `npm run build`, commit, push. GitHub Pages deploys. There is no separate sign-off gate: the owner reads courses as a learner, and that reading, together with everyone else's feedback, is Stage 7.

### Stage 6: Podcast — `/make-podcast <path/to/lesson.md>`
**Every lesson gets its podcast when its content settles** (after the Stage 4 review, the
voice pass, and the media pass), never before, so audio is not paid for twice. The episode
is a six-minute two-host conversation: John (S1, the teaching voice) and Haley (S2, the
curious one). The command writes the script from the lesson (every claim must appear in
the lesson; the script adds nothing), fact-checks it in a fresh-context subagent before
any money is spent, then hands off to `scripts/podcast.mjs` to render on Gemini 3.1 Flash
TTS via fal (~$0.40 an episode), upload to R2, and stamp `audio:` into the lesson frontmatter.
The script lives at `courses/<school>/<course>/podcast/<lesson-id>.script.md` and is
committed; the MP3 lives in R2, never in git. Publishing does not wait for podcasts: a
settled lesson can go live and get its episode after.

### Stage 7: Feedback loop
This is how lessons get better after they're live, and it never ends. Learner feedback (from the form on every lesson, GitHub Issues, or later the platform's feedback table) runs through `/triage-feedback`, which sorts it against `docs/VALUES.md` and the standards: what makes a lesson clearer, deeper, or more honest is built in; what would make it shallower, slanted, or softer on the truth is declined with a reason. Everything is logged in the lesson's review file. Content is versioned in git, so every change is traceable. See `docs/FEEDBACK_LOOP.md`.

## Working practices that protect quality

- **One lesson per drafting session on a prose course.** Never "write all 8 lessons". Quality collapses after the second. On a procedural course whose lessons are short and mechanical (programming, arithmetic, algebra), two per session is fine and has been measured as no worse; the depth in those lessons lives in the worked examples and the exercises, not in sustained argument.
- **Research file in context, always.** If SOURCES.md is not loaded, the draft is being written from vibes.
- **Fresh eyes for review.** Reviews run in subagents or new sessions. A model reviewing its own draft in the same context is far too kind to it.
- **Adversarial fact-check.** The fact-checker's prompt says "assume there are errors; find them."
- **Read on a phone.** Most learners will be on one; the owner reads every course that way, as a learner, after it's live.
- **Log everything in the lesson's `research/reviews/<lesson-id>.md`.** Future sessions and future contributors need the history.
- **Prefer linking to duplicating.** If MIT OCW has the perfect lecture, link it in "Go deeper" and write the lesson around it rather than re-explaining it worse.
- **Update the map.** When a course changes status, update its row in `curriculum/TAXONOMY.md`.

## Throughput

Realistic pace with this pipeline: one lesson researched, drafted, and reviewed per one to two hours of Claude Code time, plus human reading time. A ten-lesson course is a week of part-time work. That is slow compared to "generate a course in five minutes" and it is the reason the content will be worth something.

To scale: run drafting for different courses in parallel sessions or worktrees, since they share no state. Reviews can run as parallel subagents. Research can be batched: research several courses in one school together, since sources overlap.

## Status reporting — `/status`
Prints every course, its status, lesson count, review state, and what the next action is.
