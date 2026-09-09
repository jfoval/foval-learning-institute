# Reviews: Algebra Essentials

*Stage 4 records for the rebuild that began 2026-09-09. This course is **procedural** under the
pipeline's rules, which changes three things and they are recorded here once rather than argued
in every session.*

## Standing decisions for this course

- **The neutrality pass is skipped on every lesson**, per the Stage 4 rule and the outline's
  neutrality section. There are no contested or value claims in evaluating an expression or solving
  a linear equation. The one place a value question could enter, whether algebra should be required
  of everybody, is an education-policy argument the course does not raise. Auditing "solve for x"
  for ideological balance would be money spent on nothing.
- **The fact-check is executed, not fetched.** Every worked example, table row, exercise answer,
  quiz option and quiz explanation is computed by the reviewer rather than checked against a source.
  A wrong sign in a worked example teaches the error directly.
- **Two lessons a session is allowed**, as the pipeline permits for procedural courses.

---

## Lessons 1 and 2 — Stage 4, Tier A, 2026-09-09

Rebuilt from placeholders of 396 and 381 words. One reviewer, fresh context, executing every
calculation.

### The two findings that justify executing the arithmetic

**A1. A quiz explanation gave the wrong solution to its own equation.** Lesson 2 item 4 said
`n + 5 = 12` is "true for exactly one value, thirteen". It is true at **seven**. The error sat
inside an explanation about equations being true for exactly one value, so it taught the mistake at
the precise point it mattered. Fixed.

**A2. Both diagnostics in lesson 1's checkpoint described slips that cannot produce the numbers
they were attached to.** The lesson said a reader who got 4 had probably computed `3 × 4 - 4` and
then squared, which gives 64, and that a reader who got 128 had multiplied 3 by 4 twice, which gives
48. Neither route reaches its stated answer, and 128 is not reachable by any plausible slip. The
real routes are that 4 comes from reading `x²` as `2x` and 64 from subtracting before squaring, and
the lesson now says so. **A wrong diagnosis of a wrong answer is worse than no diagnosis**, because
the reader who made the slip is told they made a different one.

### Research handling

**A3. The research was in `SOURCES.md` and cited nowhere in the lessons.** Lesson 2's entire opening
rests on the finding that fewer than ten percent of school students in any grade solve
`8 + 4 = box + 5`, stated in the lesson's own voice with no marker and no sources section. Defect 1
in the standing list. Both lessons now carry a `## Sources` section and footnote markers.

**A4. A claim that was not in the research at all.** The lesson asserted that the commonest wrong
answer is 12 and the second commonest is 17, and lesson 2's first quiz item then **graded the
learner on that ranking**. `SOURCES.md` supports neither the ranking nor either position. Both
mechanisms are real and are explained correctly; only the rank was invented. The lesson now says two
wrong answers dominate and does not rank them, and the quiz item no longer turns on which is
commoner. **Worth naming as a pattern: an invented fact is most dangerous when a quiz tests it**,
because the learner is then marked wrong for not believing it.

**A5. An overstated research claim.** "People read the equals sign correctly when they meet it in
varied shapes" was a probabilistic effect stated as a rule. Now "much more likely to read the sign
as a claim".

**A6. A misnamed error.** Writing `3 - 2n` for "three less than twice a number" was called "the
reversal error". In the literature the reversal error is specifically the multiplicative comparison
producing `6S = P`; word-order matching is one of its two proposed mechanisms, and it is the
mechanism at work here. Reworded, and Clement is now named.

### The thing the rebuild exists to do, and had not done

**A7. Neither lesson contained a completion problem.** This is the format the whole rebuild is built
around: the outline specifies it at step 3 of every lesson and `SOURCES.md` records that Sweller and
Cooper's worked-example evidence is the reason for it, calling it "the part most courses skip". What
the lessons actually had were fresh problems posed cold, which is a different and weaker thing. Both
lessons now have a genuine one, worked to the second-to-last line with the reader finishing it.
**Check this specifically in every remaining lesson of this course**, because it is easy to write a
predict block that looks like a completion problem and is not.

**A8. The practice answers were printed in plain body text two lines below the questions.** Defect 4,
and it destroys the retrieval value of the block. Both sets are now inside `:::checkpoint` blocks,
which the site hides behind a button.

### Smaller, all applied

The ASCII letter `x` was being used as a multiplication sign in a course that teaches `x` as the
variable, including in `n x 0 = n`, which is genuinely ambiguous; `×` throughout now. Every "lesson
5" cross-reference pointed at the wrong lesson, because the rebuild renumbers to six lessons and the
renumbering has not landed, so they are now descriptive ("the lesson on turning sentences into
equations") and will survive it. Three notations for squaring inside one lesson, now one. A stem that
asked "which means the same as" and offered values as options. Four "Here is" openers and a run of
one-line morals.

### Media

The balance diagram was redrawn. The original baked three lines of ordinary prose into the image as
`<text>` at font-size 15 in a 584-wide viewBox, which on a 360-pixel phone renders at about nine
pixels. **The linter's font-size floor does not catch this, because it does not model the scale
factor**, and that is worth knowing for every chart in the institute: a wide viewBox on a phone
shrinks every label in it. The caption is now Markdown beneath the figure and the viewBox is 420
wide, so the labels render near their intended size on a phone.

### Not fixed, and owed by this course

- **`assessments/` does not exist.** The outline blueprints an eighteen-item test and a project, and
  standard 4.4 requires both for a course of six or more lessons. Owed before the rebuild is done.
- **`estimated_hours: 2.3` is the stale stub value** and will be wrong until all six lessons land.
- **The renumbering to six lessons** happens once, when lesson 5 (translation) is written, per the
  standing rule on lesson splits.
