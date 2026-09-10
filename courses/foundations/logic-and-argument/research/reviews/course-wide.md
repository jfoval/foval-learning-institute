# Reviews: Logic and Argument — course-wide

Append-only. Newest at the bottom.

## COURSE-WIDE: the unread-source defect, measured and now enforced, 2026-09-06

Three separate Stage 4 reviews (lessons 2, 4 and 5) independently found the same defect: lessons
citing textbooks that this course's own SOURCES.md records as never opened. Rather than fix it a
fourth time by hand, it is now measured and linted.

`scripts/build.mjs` reads a machine-readable line from each course's `research/SOURCES.md`:

    <!-- unread: Hurley, Copi, Govier, Weston -->

and flags any lesson citing one of those names. Drafting courses warn; published courses fail the
build, so this cannot reach a learner. The list lives beside the research because the person who
decides a book is unread is the person writing the research file.

**Measured scope on this course: 20 findings across 8 of 10 lessons.**

| Lesson | Hurley | Copi | Govier | Weston |
|---|---|---|---|---|
| 01 what an argument is | 1 | 1 | 4 | |
| 02 valid and sound | fixed | fixed | | |
| 03 conditionals | 4 | 2 | | |
| 04 syllogisms | 6 | 4 | 3 | |
| 05 inductive strength | 7 | 2 | 5 | 8 |
| 07 reconstruction and charity | 1 | 1 | 6 | |
| 08 fallacies | 2 | | 1 | |
| 09 reasoning in the news | | | | 9 |
| 10 building an argument | | | 5 | 21 |

Lesson 10 cites Weston 21 times, so a substantial part of that lesson rests on a book nobody in
this repo has read. Lesson 2 is done and is the worked example of the fix: re-source to works that
are free, openly licensed and actually read. Knachel's *Fundamental Methods of Logic* and Van
Cleave's *Introduction to Logic and Critical Thinking*, both CC BY 4.0 on LibreTexts, between them
cover validity, soundness, the deductive/inductive distinction, the categorical forms, the Venn
method and the 256/15/24 count. The SEP and IEP entries cover the history and the disputes. Weston
is the hard case, because chapter IV was genuinely read and the rest was not, so every Weston
citation needs checking against which chapter it draws on rather than a blanket swap.

**Also measured, same sweep: 6 of 10 lessons have no links in the body at all** (04, 05, 06, 07, 09,
10), against 13 in lesson 1 and 23 in lesson 8. And every lesson reviewed so far has understated
its own `minutes` (35 to 60, 40 to 70, 50 to 65, 40 to 60, 55 to 70), which is a drafting-template
problem rather than a per-lesson one.

---
