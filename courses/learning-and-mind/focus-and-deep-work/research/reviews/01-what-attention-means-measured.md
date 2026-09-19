# Reviews: Focus and Deep Work lesson 1

## 2026-09-19 — Lesson 01 — Stage 4, all passes, Tier A
**Reviewer:** one subagent in a fresh context. **Verdicts as returned:** **depth FAIL**, **fact-check
FAIL**, neutrality pass with one fix, **pedagogy FAIL**, cold start pass, voice and media pass with
fixes.

### Findings

1. **[critical] C1. Defect 20 in its purest form.** The predict block's whole mechanism is the
   course's own reasoning, admitted in footnote 5, with **no marker and no inline label anywhere in
   the block**, and its third reason stated flatly as fact. The hedge a reader cannot reach is the
   shape defect 22's first form takes.
2. **[critical] C2. Pedagogy 4.3.** Two of six items applied the idea to a case outside the lesson,
   against a standard of half, and **item 3 re-used the checkpoint's own case with a gender
   attached**.
3. **[major] M1.** "Re-examined in the last five years" is wrong for one of the three, which is
   2016. `SOURCES.md` carried the same error and it was inherited.
4. **[major] M2.** The course's main refusal rested on a false premise, stated three times: that
   every source is a snapshot or a single session. Killingsworth and Gilbert is experience sampling
   with time-lag analyses, which a snapshot cannot support. **The conclusion was right and the
   reason was wrong**, on the lesson's load-bearing sentence.
5. **[major] M3.** Scope table row 4 said "student and general samples" where `SOURCES.md` says
   overwhelmingly student, and the lesson's own next paragraph says mostly students.
6. **[major] M4.** The three-way attention taxonomy has no source anywhere in the research file, and
   the example given for the rule did not instantiate it: the brain-drain categories are memory,
   attention and general cognitive performance, and memory is not one of the three named.
7. **[major] M5.** "The association shows up clearly" and "the difference is not small" both
   over-sell a pooled effect the source itself calls small.
8. **[major] M6.** Three checkable claims carried their markers forty to eighty-five lines from the
   point of use, and the checkpoint carried none.
9. **[major] M7.** Decision 3's boundary was drawn on the three things the outline anticipated and
   missed a fourth: **Time Management lesson 5 also gives the CHI 2008 experiment's scope and
   abstract**, which is the paper lesson 2 is built on.
10. **[major] M8.** Two claims about what most readers will do, stated as fact, where this repo's
    own convention is to mark them as expectations.
11. **[medium] D1 to D8.** One quiz item with no absolute-free option; only two think-blocks; "the
    two clearest results come from the lab" when one of the two is a field study; bold at 25.6 per
    1,000 words against 18.3 and 12.1 in the two nearest comparators, with a one-line-moral tic; an
    unsourced superlative inside the course's best-handled refusal; `course.yaml` promising Time
    Management lesson 5's material; one and a half worked examples against the standard's two; and
    a misconception section carrying none of the outline's three.
12. **[low] L1 to L11.** Two unchecked superlatives, a cell and a footnote disagreeing on
    recruitment, an arithmetic slip on how many lessons the split appears in, a fraction left
    hanging, "several" for "one", a "Here is" opener, a dropped politeness measure in the scope
    table, no primary-source links in the prose, and a note that the standards 3.4 call was made at
    Stage 2.

### Clean on inspection
**All five read-level statements string-matched `SOURCES.md` word for word**, and what each licenses
holds up, which is the defect the previous course failed three times. Nothing on the `unread:` line
is cited. **The scope table was checked cell by cell**: every figure in rows 1 to 3 exact, row 4's
counts exact, and only the "on whom" cell wrong. Decision 6's refusal declines in three places that
agree without telling the reader they are wrong. Decision 3's boundary is correct on the three
things the outline named. Quiz mechanics clean: all four indices, no adjacent repeat, key never sole
longest, spreads inside 15, no distractor named by position. Contractions 5.8 per 1,000, inside the
band, which is the first time defect 15 has not recurred on a first draft. Block headers on single
lines. `minutes` exact, which the reviewer notes is the first lesson where it was not understated.
Cold start verified against `npm run taught` and against the named lessons' own objectives.

### Applied
All of them, in `Focus 1: apply Stage 4 review`. Three quiz items replaced with cases outside the
lesson; the predict block's reasoning labelled inline with its marker; the refusal's premise
narrowed to what is true; a second predict block added on the scope table, which is also the fix for
the missing second worked example; the misconception section rebuilt on the outline's three plus two
of the lesson's own; and the bold count cut.

**M7 changed lesson 2 as well**, which is the more useful half of that finding: lesson 2 now says
Time Management lesson 5 gives this experiment's headline, that a reader meeting it there has met
the conclusion and not the study, and what this course adds.
