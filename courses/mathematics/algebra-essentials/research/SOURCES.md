# Sources: Algebra Essentials

*Stage 1 research, written 2026-09-09, for the rebuild of a course that has been live since
September 2026 with five placeholder lessons averaging 444 words. This is a **procedural** course
under the pipeline's rules: two lessons a drafting session are allowed, the Stage 4 fact-check is
executed rather than fetched (work every calculation), and the neutrality pass is skipped with a
line in REVIEWS.md saying why. Everything below was verified live on 2026-09-09.*

## What makes an algebra course different from the other courses here

Every other course in this institute teaches things a reader can be persuaded of. Algebra has to be
**done**, and the research below is almost entirely about the gap between a learner who can follow a
worked solution and one who can produce it. That gap is the design problem for this course, and it
is why the lessons are built around worked examples with steps removed rather than around
explanation followed by exercises.

## Open textbooks and curricula, for the map of what belongs

- **OpenStax, *Elementary Algebra 2e*** (openstax.org/books/elementary-algebra-2e), free to read
  online under **CC BY-NC-SA 4.0**, which means we may link it freely and quote it with attribution.
  This is the reference skeleton for scope: the language of algebra, integers and fractions,
  properties of real numbers, solving linear equations, graphs and slope, systems of equations,
  polynomials, factoring, rational expressions, roots and radicals, quadratics. Our five-lesson
  course covers roughly its chapters 1 to 5, which is the right cut for a foundation course: the
  material that everything else in mathematics and in this institute's science courses stands on.
- **Khan Academy, Algebra basics and Algebra 1** (khanacademy.org). Free, mastery-based, with an
  exercise engine we cannot match and should not try to. **Link it as the place to get more
  practice**, which is the thing a text cannot supply, and do not compete with it on drill.
- The consensus sequence across OpenStax, Khan and any US state's standards is the same and is worth
  stating because it constrains the outline: **number and operation, then the idea of a variable,
  then equivalence and simplification, then solving, then representing relationships (graphs), then
  more than one relationship at once (systems)**. Nothing later makes sense with an earlier piece
  missing, which is unusual and is why an algebra course cannot be read out of order.

## The misconceptions, which in this subject are the whole curriculum

Unlike a prose course, the research here is specific, replicated, and directly usable. Each of these
should be met head-on in the lesson where it lives rather than mentioned in a misconceptions list.

- **The equals sign is read as "and the answer is".** McNeil, Grandau, Knuth, Alibali, Stephens,
  Hattikudur & Krill, "Middle-school students' understanding of the equal sign: the books they read
  can't help", *Cognition and Instruction* 24(3), 2006, 367 to 385 (free PDF, cladlab.nd.edu). Two
  findings matter for us. **The operational reading is a byproduct of arithmetic practice**, not of
  age: the paper cites Carpenter and colleagues finding that when first through sixth graders were
  asked what goes in the box in `8 + 4 = __ + 5`, **"fewer than 10% in any grade gave the correct
  answer and performance did not improve with age"**. And it is a **context** effect rather than a
  fixed trait: presenting equations with operations on both sides is the single best way to elicit a
  relational reading, and the textbooks they examined almost never do it, presenting the sign instead
  in "operations equals answer" form.
  - **Direct instruction for this course:** teach `=` as a claim that two things are the same size,
    introduce it with operations on both sides (`8 + 4 = 7 + 5`) before ever using it to mean
    "compute this", and use the balance image throughout. This is lesson 1 and lesson 3 material and
    it is the highest-value single decision in the course.
- **The reversal error.** Clement, Lochhead & Monk (1981) and Clement, "Algebra word problem
  solutions: thought processes underlying a common misconception", *Journal for Research in
  Mathematics Education*, 1982. In the student-professor problem, given "there are six times as many
  students as professors" and asked to write an equation with S and P, **37% of engineering freshmen
  got it wrong**, and Clement et al. report that **68% of the incorrect responses were `6S = P`**
  rather than the correct `S = 6P`. Two mechanisms are proposed and both are teachable:
  **word-order matching** (writing the symbols in the order the sentence says them) and **static
  comparison** (reading the equation as a label on a picture rather than as a numerical claim).
  - **The honest qualification**, from Soneira and colleagues, "Insights into the reversal error from
    a study with South African and Spanish prospective primary teachers", *Pythagoras*, 2021 (free at
    ERIC): the error is **not a universal fact about minds**. In their samples, nearly all Spanish
    errors were reversals while the South African group barely made them, which the authors attribute
    to differences in curriculum and instruction. So teach it as a trap that specific teaching
    produces, not as something the reader is doomed to.
  - **Direct instruction:** the fix that works is to **test the equation with a number** before
    trusting it. Six professors and thirty-six students: does `6S = P` hold? 216 against 6, so no.
    That check takes ten seconds and it is the most transferable habit in the course.
- **Letters as labels rather than as numbers.** The literature on this is old and consistent
  (Küchemann's categories; MacGregor and Stacey): learners read `3a` as "three apples", which works
  until it does not, and then produces `2a + 3b = 5ab`. The lesson has to be explicit that a letter
  stands for a **number**, not for a thing.
- **The minus sign attaches to the term, not to the operation.** The single most common source of
  arithmetic slips in solving, and it is worth its own worked treatment rather than a warning.

## Evidence on how to teach it, which changes the shape of the lessons

- **Sweller & Cooper, "The use of worked examples as a substitute for problem solving in learning
  algebra", *Cognition and Instruction* 2(1), 1985, 59 to 89.** Across five experiments with study
  time controlled, learners who studied **worked examples** rather than solving equivalent problems
  went on to solve similar problems in **about half the time with roughly a fifth of the errors**.
  The honest limit, which the authors and later work both note: the advantage is largest on problems
  of the same type and does not automatically transfer to varied problems.
  - **Direct instruction:** every idea in this course arrives as a fully worked example first, then a
    worked example with the last step removed for the reader to supply, then a problem. The
    "completion problem" middle step is the part most courses skip and it is what the research
    supports.
- **What this implies for the exercises.** A prose lesson can put its practice at the end. A
  procedural lesson cannot, because the reader who reads eight paragraphs and then meets a problem
  has been passive for eight paragraphs. Practice is interleaved with exposition throughout.

## Contested questions

There are almost none here, which is why the neutrality pass is skipped. Two exist and neither
affects what we teach:

- **How much drill, and when.** Reasonable people disagree about the balance between conceptual
  understanding and procedural fluency, and the evidence is that they build each other rather than
  competing (Rittle-Johnson and colleagues on iterative development). The course teaches both and
  says so.
- **Whether algebra should be required of everybody** is a live education-policy argument. It is not
  this course's business, and the course does not mention it.

## Safety and honesty notes

- **Every worked calculation in this course must be executed, not written from memory.** The
  fact-check for this course is running the arithmetic, and a wrong sign in a worked example teaches
  the error directly.
- **Never present a rule without the reason it works.** "Do the same to both sides" is not a
  convention; it follows from what an equation claims. A course that teaches the moves without the
  claim produces exactly the learner the misconception research describes.

## Open concerns about scope

- The live course promises six outcomes including "translate word problems into algebra", which the
  five stub lessons do not deliver in any real form. Either the rebuild delivers it or the outcome
  comes out; on the research above, **it should be delivered**, because the reversal error lives
  there and it is the most consequential misconception in the subject.
- `estimated_hours: 2.3` is a placeholder from the stub era and will be wrong after the rebuild.
- Nothing in the course teaches **quadratics, factoring or exponents**. That is a defensible cut for
  a foundation course and should be stated in the course description rather than left implicit, with
  a pointer at OpenStax for the reader who wants the next thing.
