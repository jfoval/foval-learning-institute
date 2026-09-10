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

---

## Lessons 3 and 4 — Stage 4, Tier A, 2026-09-09

Solving, and lines. Same procedural rules: arithmetic executed, neutrality skipped.

**Everything in both bodies and both practice sets computed correctly.** The reviewer ran all ten
worked equations, both tables, the slope from two points, the printer crossover and all twelve
practice answers. The quiz shapes were the best measured on this project: all four indices in both,
no adjacent repeat, spreads of two to six characters, and "pick the longest" scoring 17% and 0%.

### The findings that mattered

**A9. A quiz item had two correct answers and the explanation called the valid one wrong.** Lesson 3
item 3 offered "`x = -3`, since eight minus twenty three is minus fifteen, then divide by five",
which is a legitimate route: add `5x` to both sides, subtract 23, divide. The explanation said it
"mislabels the arithmetic". Rewritten so the distractor is genuinely broken.

**A10. Two more wrong diagnoses of wrong answers, which is A2 for the third time in this course.**
The predict block said a reader who got minus four had "moved the `2x` without changing its sign",
a route that actually gives the right answer; the real route is combining `x` and `-2x` as `-3x`.
And an explanation said a check had been wasted by a careless test value, when the two expressions
in question differ by twelve at every value, so no test value could agree. **This drafter reaches
for a plausible-sounding cause rather than tracing the arithmetic backwards. Every "if you got X,
you probably did Y" must be executed before it ships.**

**A11. Lesson 4 had no completion problem, and the block that looked like one was the weakest
version of the pattern.** It asked the reader to check an answer the page had printed three lines
above. Lesson 3's was genuine. Lesson 4 now has the second taxi the outline specified, with its
table given and the equation to finish. **Ask of every think-block: what is withheld?**

**A12. The diagram had four separate defects and the validator caught none of them.** The `$15`
label marked $14.09 because the y-axis stopped short while the plotted line ran nineteen pixels
above the top of it; the slope label was struck through by the line; the gold used for it is 3.14:1
on white, under the 4.5:1 needed; and the viewBox was 480 wide, which is the phone-shrinking defect
this course fixed one lesson earlier. Redrawn at 420 with tick marks, an axis that contains its own
line, and the label in oxblood well clear. Verified in the browser: no overflow, no overlap, no
label crossed by the data line.

**A13. Practice-answer blocks collapsed into a single list item.** A numbered list with no blank
lines between items renders as one `<li>` containing all six answers. Both fixed.

Smaller: two quiz options whose stated route did not produce their own number, "ninety pence" in a
dollar course, a superlative wider than the source supports, three pipeline-flavoured headings, and
a moral about checking restated five times. Lesson 3 was entirely abstract against an outline that
asks every lesson to open in a situation with numbers in it; two of its problems now have one.

## 2026-09-09, Stage 4 on lesson 5 (turning a sentence into an equation), Tier A

One reviewer, fresh context, all passes. **Neutrality skipped** per the standing decision recorded
above: the reviewer was asked to reopen it if the lesson carried a contested or value claim, and
found none. The one place it looked, the "honest note" about the reversal error not being universal,
it judged a fair reading of Soneira, with one over-claim fixed under B4.

### The findings that mattered

**B1. The final practice item declared a correct equation wrong, and its "correct version" was the
same equation.** The item asked the reader to show that `8T = C` is wrong for "eight times as many
cats as tortoises". With `C` cats and `T` tortoises, `8T = C` **is** the correct answer, and the
model answer got there by swapping the letters, which is the reversal the lesson exists to kill. The
stem was meant to read `8C = T`, which is what the answer text actually works. Fixed. **This was the
last item of the lesson and it tested the lesson's whole point, so it would have taught the error as
the cure for the error.**

**B2. The lesson's one "wrinkle" example blamed word-order matching for something word order cannot
produce.** For "a jacket costs twelve dollars more than three times the price of a shirt", the words
arrive j, 12, 3, s, so transcribing them in order gives `j = 12 + 3s`, which is **correct**. The
draft claimed the habit produces `3j + 12 = s`, which no reading of the word order yields. Replaced
with `j + 12 = 3s`, which does follow from the words and which the numbers kill: 84 against 60. This
is A10 for the fourth time on this course, and the rule from 2026-09-09 caught it exactly as
intended.

**B3. A quiz item claimed a trap it never set.** Item 3's explanation said the word-order habit
reaches for an equation with `A` and `9` adjacent and that "both of the equations shaped that way are
wrong", but the equation word order actually produces, `A - 9 = D`, was not among the four options.
It is now, replacing a weaker distractor, so the item tests the misconception the body teaches.

**B4. Two claims over-reached their sources, and one borrowed evidence from a different error.** The
body said different teaching "does not build" the reversal error, and a quiz explanation said the
second study "rules out" universality; two convenience samples support neither, and SOURCES.md is
careful about this. Both softened. Worse, the same explanation rejected an option about age using
the equals-sign research from lesson 2, which is about `8 + 4 = __ + 5` and says nothing about the
reversal error. Rewritten to rest on the Soneira comparison itself.

**B5. Three heavy research claims and no `## Sources` section, while a quiz item graded the reader
on one of them.** The Clement figures and the whole Soneira comparison were in the lesson's own
voice with no citation, and quiz item 4 marks the learner right or wrong on Soneira. A Sources
section with both citations is in, with markers in the body. **An uncited claim is most dangerous
when a quiz tests it.**

**B6. The one link supporting the research was dead.** `people.umass.edu/~clement/pdf/algebra_word_problem_solutions.pdf`
returns 404. Replaced with the 1981 Clement, Lochhead and Monk paper on the same host, verified 200,
with its description corrected: it is a scan, and it is the 1981 companion rather than the 1982 JRME
paper. The Soneira study is linked at ERIC, also verified.

**B7. A sample size and a date that no source supports.** The draft said the problem was put to "a
hundred and fifty engineering students at an American university in 1980". SOURCES.md records the
percentages only, and 1980 is the year of neither paper. Cut to what is supported.

Smaller and fixed: the `36` label in the bar chart was gold on white at 3.14:1, which is A12 from
lesson 4 recurring, now oxblood; the bars were in a 5.95 ratio while the caption said six; two "Here
is" openers; a sentence about the lesson's own layout ("that last step is worth its own line"); the
ten-second moral stated three times, now twice; and `minutes: 40` against a measured 50.

Not fixed, deliberately: the reviewer noted zero contractions in the lesson and suggested several.
Two were added where they read naturally. The rest were left, because this course's prose is
arithmetic-heavy and contractions inserted for their own sake read worse than their absence.

### The rule this review adds

**A distractor's stem and its model answer must be executed against each other, not just the answer
against the source.** B1 slipped through the drafter's own arithmetic check because the answer text
was internally correct: 256 against 4 is right, for a different equation than the one the stem
printed. Check the stem.

### Still owed by this course

Lesson 6's Stage 4, the renumbering to six lessons, `assessments/`, `estimated_hours`, and **six
podcast episodes**, without which the course is not finished.
