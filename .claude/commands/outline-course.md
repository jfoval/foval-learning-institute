---
description: Stage 2. Produce research/OUTLINE.md, the lesson-by-lesson plan
argument-hint: <courses/school/course-id>
---
You are doing Stage 2 (Outline) of the Foval Learning Institute content pipeline for `$ARGUMENTS`.

**Run `npm run taught $ARGUMENTS` first, and read the output.** The Core is taken in order, so this
course may build on everything earlier on the path and must assume nothing later. The command
prints both halves, and the second half is the one that bites: **earlier courses that are not
written yet teach nothing**, whatever the map says they will cover one day. Python Basics assumes a
terminal on the strength of Digital Literacy, which is a Term 1 course that does not exist. If your
course needs something and the course that will teach it is unwritten, your course teaches it.

Read first: `docs/EDITORIAL_STANDARDS.md`, `$ARGUMENTS/course.yaml`, `$ARGUMENTS/research/SOURCES.md` (required; if it does not exist, stop and say Stage 1 must run first), and `templates/OUTLINE.md`.

Produce `$ARGUMENTS/research/OUTLINE.md`. For each lesson: title, 2–4 testable objectives (verbs: explain, calculate, identify, compare, apply, build), the core ideas, the mechanism to explain, the worked examples to include (at least two, one with a wrinkle), the misconceptions to address, the practice exercises, which sources it draws on, and how it connects to previous and next lessons. Sequence for how the ideas build, not how textbooks list chapters. Plan spaced review: later lessons revisit earlier ideas.

### How long a lesson should be

**The unit is the objective, not the word.** A course covers what its subject needs, and a lesson
runs as long as teaching its objectives properly takes. There is no word target and there is not
going to be one: setting a number makes the drafter write to the number.

What replaces it is a floor and a ceiling, and neither is about length.

**The floor is completeness, not size.** For every objective the lesson claims, it must carry: the
idea explained against a concrete case, at least one fully worked example, the misconception that
actually lives there, and practice the reader does rather than reads. If all four are not there,
the lesson is thin however many words it has, and the fix is to teach it properly rather than to
pad it. If they cannot all fit, it is two lessons. A lesson coming in under about 25 measured
minutes is worth a second look for this, as a signal and not as a rule.

**The ceiling is one sitting.** A learner should be able to start and finish a lesson in a sitting.
Around 90 measured minutes is the edge of that. Past it, either split the lesson or write one line
in the outline saying why this one earns the length. Bible Basics averages 137 minutes and has the
lowest think-block density in the institute (1.3 per 1,000 words of prose, against Algebra's 2.9),
which is the shape to avoid: long and comparatively passive. It stays as it is; it is not a model.

**Never set the target against the thing being replaced.** Python Basics was outlined at "1,800 to
2,600 words a lesson, against the stubs' 463" and froze at the six lesson files its live URLs
already used. Both numbers describe the stubs rather than the subject, and the course shipped
without a setup lesson because six inherited slots had no room for one.

**Say the reasoning in the outline**: how many lessons and why, what is deliberately left out, and
what courses downstream on the Core will need this one to have taught.

Also plan assessments: a course-end test blueprint and at least one project with deliverable and rubric for courses of 6+ lessons.

Then update `course.yaml`: outcomes to match the outline, and `prerequisites`. (There is no hours field; the site sums the lessons' measured `minutes:`.) Summarise the plan and flag anything in the outline that would be hard to do well.

**Exception, for a live course being rebuilt in place.** `course.yaml`'s summary, description and outcomes are shown to learners on the course page. Updating them to match an outline whose lessons do not exist yet puts promises on a page that cannot keep them, which is the same defect as an overstated `minutes:`. **Leave them describing what the course currently delivers**, and move the outline's copy in lesson by lesson as the lessons land. The new wording lives in OUTLINE.md until then. See `docs/DECISIONS.md` §8.
