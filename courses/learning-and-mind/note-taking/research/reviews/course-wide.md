# Course-wide review notes: Note-Taking and Personal Knowledge

## 2026-09-19 — after lessons 1 and 2

**Three things both lessons did, and they are worth fixing once rather than twice.**

**No link in the teaching prose.** Both lessons put every link in Go deeper and Sources, and both
reviewers raised it separately. The primary should be reachable where its figure is quoted, and
both lessons now link it there.

**An expectation stated as a result.** Each lesson labels one of its own expectations correctly and
then states another one flatly a few hundred words later. The convention exists in the same file
both times, which is what makes it worth recording: the drafter is not unaware of it, it is not
reapplying it.

**Bold runs broken by editing rather than by drafting.** Both lessons shipped unbalanced `**` runs
that render as literal asterisks, and every one came from a scripted bold-density cut rather than
from writing. A repo-wide scan found fourteen across five courses, three of them live.
`npm run validate` now fails on them.

**And one thing to watch as the course goes on.** Lessons 4 and 5 are the two the earlier lessons
point at most often, and lesson 2 pointed at the wrong one of the pair for the volume finding. Until
they exist, every forward reference in this course should be checked against `research/OUTLINE.md`
rather than against memory of the plan.
