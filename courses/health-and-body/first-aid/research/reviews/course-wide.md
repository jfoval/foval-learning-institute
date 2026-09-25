# Reviews: First Aid and CPR, course-wide

Findings that belong to no single lesson. Lesson reviews are one file each in this directory.

## 2026-09-24 — from lesson 5's Stage 4

- **Quiz keys drift across lessons, not only within one.** Lesson 5's first four keys matched lesson
  2's and were a one-step rotation of lesson 4's (defect 16 spread over three lessons, which the
  neighbour check in `npm run validate` does not see). Fixers: compare the new sequence against
  every earlier lesson of the course, not the previous one only.
- **Law entries in SOURCES recorded the subsections that suited the lesson.** D36 carried (a)'s
  first half, (b)(1) and (c)(1)(B); the drafter then wrote "nothing in it requires training" and a
  gloss on "perceived" into the gap, and two reviewers caught it only by reading the statute. Any
  later lesson that quotes a statute (lesson 1's state laws, lesson 7's overdose laws) should have
  its fixer read the whole section once, not the recorded excerpts.
- **Lesson length.** Lessons 2, 3 and 5 each measure 100 to 140 minutes against the outline's
  roughly 65. Each is honest and not padded, and each review recorded a natural seam. A course-wide
  decision on whether to split any of them belongs to John, via `docs/QUEUE.md`, not to a fixer.

## 2026-09-24 — from lesson 4's Stage 4

Restored by the orchestrator: lesson 4's fixer wrote these first and lesson 5's fixer, running at
the same time, recreated the file over them. The fix brief now says to append, never create.

- **The AHA's "almost immediate" hedge has dropped in two lessons** (3 and 4, each restored at
  review). Any lesson quoting the AHA on compression-only survival should be checked for it.
- **S6 may not be described as "read in full"**; its read level is as SOURCES records it, and
  lesson 4's Sources entry was corrected to match.
- **Drowning's sequence splits by rescuer, not by country** (ILCOR 2025: compressions first for lay
  people, breaths first for trained duty-to-respond rescuers). Lesson 6 keeps that framing.
- **The course needs `assessments/final-test.md`** before `npm run build:drafts` will pass with six
  or more lessons, and before publishing. The outline's Assessments section has the blueprint.
