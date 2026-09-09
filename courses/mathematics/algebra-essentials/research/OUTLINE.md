# Outline: Algebra Essentials

*Stage 2, written 2026-09-09, after the Stage 1 research and before any drafting. This is a
**rebuild**: five placeholder lessons averaging 444 words are being replaced, not improved. Per the
pipeline's rule on live courses being rebuilt, `status` stays `published` throughout, because the
build ships only published courses and setting it to `drafting` would delete a live course from the
site. Per `.claude/commands/outline-course.md`, `course.yaml` keeps describing what the course
actually delivers until the lessons land.*

## The shape, and the one decision everything follows from

The consensus sequence is forced: a variable, then equivalence, then solving, then representing a
relationship, then two relationships at once. Nothing can move.

What is not forced, and what this rebuild is really about, is **what a lesson is made of**. The
research says a procedural lesson built as exposition-then-exercises fails, and that the format with
evidence behind it is worked example, then the same example with a step removed, then a problem. So
every lesson here has the same internal shape:

1. **The question the idea answers**, in a situation with numbers in it.
2. **A fully worked example**, every step shown, including the step everyone skips.
3. **A completion problem**: the same shape, worked to the second-to-last line, with the reader
   asked to finish it before the answer is revealed. This is the `:::predict` or `:::checkpoint`
   block, and it is not optional.
4. **The misconception that lives here**, met directly with the arithmetic that exposes it.
5. **Problems**, interleaved through the lesson rather than banked at the end.

**Six lessons, not five.** The fifth stub tries to carry systems and word problems together. The
research makes the case that translating a sentence into an equation is where the most consequential
misconception in the subject lives, so it gets a lesson.

## Lesson sequence

### 1. What a letter is (~35 min)

- **Objectives:** say what a variable stands for and what it does not; evaluate an expression for a
  given value; write an expression for a described quantity.
- **Core ideas:** a letter stands for a **number**, not for a thing or a label. `3a` is three times
  some number, and the number can change, which is what "variable" means. Expression against
  equation: an expression has a value once you know the letters; an equation is a claim.
- **Worked example:** a phone plan at $12 a month plus $0.05 a minute, written as `12 + 0.05m`, then
  evaluated for three values of `m`. The point of three values is that the reader sees the same
  expression give different numbers, which is the whole content of the word "variable".
- **Completion problem:** the same plan with a different rate, worked to the last line.
- **Misconception, met head on:** letters as labels. Give `2a + 3b` and ask what it equals if `a` is
  apples and `b` is bananas; the question has no answer, and the reason is that `a` is not apples,
  it is **how many** apples. Then the fruit-salad error `2a + 3b = 5ab` and why it fails on numbers.
- **Practice:** four expressions to evaluate, three to write.

### 2. Equals means the same size (~35 min)

- **Objectives:** state what `=` claims; test whether an equation is true for a given value; keep an
  equation true by doing the same thing to both sides.
- **Core ideas:** the sign is a claim of equality, not an instruction to compute. **This is the
  lesson the misconception research says decides the course**, so it is taught with operations on
  both sides from the first line: `8 + 4 = 7 + 5` before anything of the form `8 + 4 = ?`.
- **Mechanism:** the balance. Both pans hold the same weight; anything you do to one pan you do to
  the other or it tips. This picture carries all the way to lesson 4 and is worth drawing properly.
- **Worked example:** `8 + 4 = __ + 5`, which is the item where fewer than 10% of school students in
  any grade give the right answer. Work it as a balance rather than as a sum.
- **Completion problem:** `13 + 6 = __ + 9`, worked to the second-to-last line.
- **Misconception:** "the answer goes after the equals sign". Show `7 = 3 + 4` and ask whether it is
  wrong. It is not, and the discomfort the reader may feel is the misconception being visible.
- **Practice:** true-or-false equations; find the missing number; write an equation that is true.

### 3. Solving, and why the moves are legal (~45 min)

- **Objectives:** solve a linear equation in one unknown; justify each step by what it does to both
  sides; check a solution by substitution.
- **Core ideas:** solving is not a ritual. Each move preserves the claim, which is why it is allowed,
  and the goal is to get the unknown alone. Collecting like terms and expanding brackets arrive here
  as tools in service of solving rather than as separate topics, which is what the old lesson 2 got
  wrong by teaching simplification with no reason for it.
- **Worked examples:** (a) `3x + 5 = 20`, every step annotated with what was done to both sides.
  (b) The wrinkle: `4(x - 2) = 2x + 6`, with a bracket, an unknown on both sides, and a negative,
  which is where the minus-sign error lives.
- **Completion problem:** `5x - 3 = 2x + 9`, worked to the line before the last.
- **Misconception:** the minus sign belongs to the term. `7 - 3x = 1` is not `4x = 1`, and the
  arithmetic check with a number shows why in one line.
- **Practice:** six equations of rising difficulty, each with the check by substitution required,
  because checking is the habit that makes the rest self-correcting.

### 4. Lines: a picture of a relationship (~45 min)

- **Objectives:** read a straight-line graph for its slope and intercept; write `y = mx + c` for a
  described situation; interpret slope as a rate in the situation's own units.
- **Core ideas:** a straight line is what a constant rate looks like. The intercept is where you
  start and the slope is what happens per unit, and both mean something in the situation, which is
  the point of the lesson. Reading a slope as "the rate" rather than as "rise over run" is what makes
  the idea usable outside the maths lesson.
- **Mechanism, drawn:** one line with its intercept and slope marked, and the same relationship as a
  table and as an equation, so the reader sees three representations of one thing.
- **Worked example:** the phone plan from lesson 1 as a graph, so the course's first expression comes
  back as a line and the reader sees `12` and `0.05` in the picture.
- **Completion problem:** a taxi fare with a different flag rate, table given, equation to finish.
- **Misconception:** slope as a number with no units, and steeper-means-bigger without asking bigger
  in what.
- **Practice:** read three lines; write two equations from situations; one graph to draw.
- **Spaced review:** lesson 1's evaluation is what generates the table.

### 5. Turning a sentence into an equation (~40 min)

- **Objectives:** translate a described relationship into an equation; check a translation by
  substituting numbers; identify and repair a reversed relationship.
- **Core ideas:** this lesson exists because of the evidence. Word-order matching produces `6S = P`
  from "six times as many students as professors", and the check that catches it takes ten seconds:
  **put numbers in**. Six professors, thirty-six students, does the equation hold?
- **Worked example:** the student-professor problem itself, worked wrongly first in the way the
  research says people get it wrong, then tested with numbers, then repaired. Showing the wrong
  answer first is deliberate and is the only place in the course we do it, because the reader has
  to see their own instinct produce it.
- **Completion problem:** a different multiplicative comparison, worked to the check.
- **Misconception:** covered as the lesson's spine rather than as an aside. Also the static-comparison
  reading, where `6S = P` is defended as "six students for each professor", which is a sentence about
  a picture rather than a claim about two numbers.
- **The honest note the research requires:** this error is produced by particular teaching rather
  than by minds in general, and the evidence is that it is common in some educational contexts and
  nearly absent in others. Say so, because a reader who makes it should not conclude anything about
  themselves.
- **Practice:** six sentences to translate, each requiring the numerical check.

### 6. Two unknowns at once (~45 min)

- **Objectives:** solve a system of two linear equations by substitution and by elimination; say what
  the solution means graphically; recognise when a system has no solution or infinitely many.
- **Core ideas:** two relationships, one pair of numbers that satisfies both. The graph is where the
  meaning is (the crossing point), and the algebra is how you find it exactly.
- **Worked examples:** (a) substitution on a system with an easy isolate. (b) The wrinkle:
  elimination where the coefficients do not match and one equation has to be scaled first, which is
  the step learners find arbitrary and which the balance picture from lesson 2 justifies.
- **Completion problem:** finished by the reader, then checked in both equations, since checking in
  only one is the classic slip.
- **Misconception:** a solution is a **pair**, not a number, and both equations have to hold.
- **Practice:** four systems, mixed methods, plus one with no solution so the reader meets parallel
  lines and knows what the algebra looks like when it happens.
- **Closes the course:** a short note on what comes next (quadratics, factoring, exponents) and where
  to get it, which is OpenStax and Khan Academy rather than us.

## Assessments

Six lessons, so 4.4 requires a course-end test and at least one project.

- **Course-end test:** eighteen items, weighted toward solving and translation, with at least a third
  requiring the learner to produce an equation rather than to manipulate one they are given. Two
  items are misconception items drawn straight from the research: the `8 + 4 = __ + 5` item and a
  student-professor variant.
- **Project:** the reader takes something with a real rate in their own life (a pay rate, a tariff, a
  subscription, a recipe that scales), writes the relationship as an equation, graphs it, uses it to
  answer a question they actually have, and checks the answer against reality. One page. The rubric
  rewards the check against reality more than the algebra, because an equation that disagrees with
  the world is the most useful thing a beginner can find.

## Neutrality

**The neutrality pass is skipped for every lesson in this course**, per the Stage 4 rule, and the
reason is recorded here and will be recorded in REVIEWS.md: there are no contested or value claims in
solving a linear equation. The one place a value question could enter, whether algebra should be
required of everybody, is a policy argument the course does not raise.

## Risks

- **The temptation to write about algebra rather than to teach it.** This drafter's prose habits work
  against this course. The test for every paragraph is whether a reader could do something after it
  that they could not do before.
- **Notation in Markdown.** The site renders Markdown without a maths typesetter, so equations are
  written in plain text with backticks. Keep them simple, and check every one renders as intended
  rather than as accidental emphasis or a broken list.
- **Every calculation must be executed.** A wrong sign in a worked example is not a typo in this
  subject; it teaches the error.
