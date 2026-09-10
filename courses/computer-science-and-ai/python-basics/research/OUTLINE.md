# Outline: Introduction to Programming with Python

*Stage 2. Built from SOURCES.md. Sequence for how ideas build, not how textbooks list chapters.*

## The three decisions this outline makes, and why

**1. Error-reading is woven through, starting in lesson 1.** SOURCES.md left this open between a
seventh lesson and weaving. Weaving wins. Harvard's CS50P teaches exceptions in week 3 and Sweigart
gives debugging its own chapter right after functions, but both are ten-week courses that can
afford to wait, and neither waits as long as our stubs do, which never mention errors at all. A
learner meets `SyntaxError` about ninety seconds after they start. So **every lesson introduces
exactly one new error type, in the place where that error naturally happens**, and lesson 1 teaches
how to read a traceback from the bottom up. The running count: L1 `SyntaxError` and `NameError`,
L2 `TypeError`, L3 `ValueError`, L4 `ZeroDivisionError`, L5 `TypeError` for wrong arity, L6
`IndexError` and `KeyError`. By lesson 6 the learner has met the seven errors that make up almost
every beginner traceback, and has met each one while doing the thing that causes it.

**2. Reading before writing, in every lesson.** Lister et al. 2004 found novices weak at predicting
a program's output and weaker still at completing one, and read that as the cause of the failure to
write code. So each lesson's first interactive block is a `:::predict` on code the learner has not
written, and the writing exercise comes after. This also makes the notional machine (Sorva 2013) an
explicit objective rather than something we hope gets absorbed: **the phrase "what are the names
worth now?" is the spine of this course**, and Python Tutor is linked in lesson 1 and used again in
3, 5 and 6.

**3. The file names do not change.** `01-first-program.md` through `06-collections.md` stay,
because the course is live and those URLs are in the site's data. Titles, objectives and every word
of body text are replaced.

## Lesson sequence

Target 1,800 to 2,600 words a lesson, against the stubs' 463. `minutes:` is measured with
`npm run minutes`, never guessed.

### 1. Your first program, and your first error (`01-first-program.md`, ~14 min)

- **Objectives:** run a Python program two ways, in the interpreter and from a file; explain what
  each line of a traceback tells you; identify a `SyntaxError` and a `NameError` from the message
  alone; apply the edit-run-read loop to fix a broken three-line program.
- **Core ideas:** a program is a sequence of instructions carried out in order. Python has two
  front doors, the interactive interpreter (fast, forgets everything) and a `.py` file (slow to
  start, remembers). `print()` shows a value to a person. **A traceback is not a punishment, it is
  the machine telling you where it stopped and why**, and it is read from the bottom up: the last
  line names the error and the line above it points at your code.
- **Mechanism to explain:** what actually happens when you press Enter. Python reads the whole file
  and checks it can be parsed *before* running a single line, which is why a missing colon on line
  40 stops line 1 from running. This one paragraph explains a beginner's most confusing early
  experience and no stub lesson in this course contains anything like it.
- **Worked examples:** (a) simple: three lines that print a greeting, run in the interpreter, then
  saved as a file and run again, with the difference in behaviour shown (the interpreter echoes the
  value of an expression; the file does not). (b) with a wrinkle: the same program twice, once with
  a missing closing bracket and once with `pint` for `print`. **The first prints nothing at all;
  the second prints "Hello." and then the traceback.** That contrast is the lesson: output before a
  traceback proves the program started, so the fault was found during the run rather than before
  it, and a learner can use that on their own code immediately.

  ~~The wrinkle was originally planned as "the reported line number is the line after the
  mistake".~~ **Struck 2026-09-10, on running it.** That was true of older Pythons. On 3.14 a
  missing bracket gives `SyntaxError: '(' was never closed` pointing at the correct line, and the
  caret markers under the failing expression arrived in 3.11 (PEP 657). Nothing in this course may
  claim the line number is misleading.
- **Misconceptions to address:** that errors mean you are bad at this (the geek gene, below); that
  the traceback is noise to scroll past; that the line number in a `SyntaxError` is always the line
  with the mistake; that the interpreter and a file are the same thing.
- **The geek gene, handled here and only here.** One short section, in the lesson where a learner
  first fails at something. State that the popular belief that some people simply cannot program is
  not supported: Bornat retracted "The camel has two humps" in 2014 and said he does not believe in
  "programming sheep and non-programming goats"; Patitsas et al. found only 5.8% of 778 grade
  distributions passed tests of multimodality, and found professors primed to expect bimodality saw
  more of it in ambiguous data. Then do not overclaim in the other direction: programming is
  genuinely hard, and the difficulty is real even though the gene is not.
- **Practice:** `:::predict` on what a two-line program prints before running it. `:::exercise` fix
  three supplied broken programs, one `SyntaxError`, one `NameError`, one that runs and prints the
  wrong thing (which is the point: no error is not the same as correct).
- **Media:** a link to [Python Tutor](https://pythontutor.com/), which is where "what are the names
  worth now?" gets answered visually for the rest of the course, and to
  [the official tutorial's chapter 2](https://docs.python.org/3/tutorial/interpreter.html) with the
  caveat that it is written for programmers new to Python, not for people new to programming.
- **Version note:** the improved error messages that suggest "did you mean print?" arrived in 3.11.
  Show a 3.14 traceback, and say that on an older Python the same mistake gives a barer message, so
  a learner on 3.10 is not confused by our screenshots. **3.10 reaches end of life in October
  2026**, so say which version to install and why.
- **Sources:** official tutorial ch. 1 to 2; CS50P week 0; Bornat 2014 retraction; Patitsas et al.
  ICER 2016. *All four of the research names are on the `unread:` line: the claims above may be
  stated from the abstracts and the retraction, which was read, but Sorva, Lister, Patitsas and
  Kaczmarczyk may not be cited in a lesson until someone opens them.*
- **Connects:** leads to lesson 2, which needs a way to keep a value around between lines.

### 2. Names and values (`02-variables.md`, ~16 min)

- **Objectives:** explain what `=` does, in terms of names and values rather than equality;
  predict the value of a name after a sequence of assignments; identify the type of a value and
  explain why `"2" + "2"` is `"22"`; apply `int()` and `float()` to convert what `input()` returns.
- **Core ideas:** `=` is an instruction, not a claim. It evaluates the right side first, completely,
  then makes the name on the left refer to that result. Four types carry this whole course: `int`,
  `float`, `str`, `bool`. `input()` **always** returns a string, even when the user typed 7.
  f-strings put values into text.
- **Mechanism to explain:** right side first, then bind. This single rule dissolves `total = total +
  n`, which is the sentence beginners object to on the grounds that a thing cannot equal itself plus
  something. It does not equal it; it is being replaced by it. Trace `a = 3; b = a; a = 10` and show
  that `b` is still 3, because `b` was bound to the *value*, not tethered to the name.
- **Worked examples:** (a) simple: collect a name and a birth year with `input()`, compute an age,
  print a sentence with an f-string. This is where `int(input(...))` earns its keep, because
  without the conversion the subtraction raises `TypeError`. Show the failure first, then the fix.
  (b) with a wrinkle: `0.1 + 0.2` printed, giving `0.30000000000000004`, and `0.1 + 0.2 == 0.3`
  giving `False`. Explain in three sentences: floats are binary fractions, a tenth is no more exactly
  representable in binary than a third is in decimal, and the fix is to compare with a tolerance or
  to work in whole units (pence, not pounds). Cite
  [the tutorial's chapter 15](https://docs.python.org/3/tutorial/floatingpoint.html), which exists
  for exactly this.
- **Misconceptions to address:** `=` read as equality; `b = a` read as a permanent link; the belief
  that `input()` gives you a number if the user typed one; `"2" + "2"` expected to be 4; `is` versus
  `==` (state the rule as "use `==`; use `is` only with `None`", and say plainly that `is`
  sometimes appears to work on small numbers because of an implementation detail, which is worse
  than it never working).
- **Practice:** `:::predict` a four-line swap-two-names puzzle. `:::checkpoint` "what does
  `input()` return when the user types 7?" `:::exercise` a unit converter that reads a number and
  prints it in two other units, which forces the conversion and the f-string together.
- **Sources:** Guttag ch. 2; Think Python ch. 2; official tutorial ch. 3 and 15.
- **Connects:** builds on lesson 1's run-and-read loop; leads to lesson 3, which needs values to
  compare.
- **Spaced review of:** tracebacks. The `TypeError` in worked example (a) is read using lesson 1's
  bottom-up method, out loud, in one sentence.

### 3. Making decisions (`03-conditions.md`, ~16 min)

- **Objectives:** explain the difference between `=` and `==`; predict which branch of an
  `if`/`elif`/`else` chain runs; apply `and`, `or` and `not` to combine conditions; identify which
  values Python treats as false without a comparison.
- **Core ideas:** a comparison produces a `bool`. `if` runs a block only when its condition is
  true. In a chain, **exactly one branch runs, the first true one**, and the order is therefore part
  of the logic and not a matter of taste. Indentation is the syntax, not the formatting. Empty
  things are falsy: `0`, `0.0`, `""`, `[]`, `{}`, `None`.
- **Mechanism to explain:** why the chain short-circuits at the first true test, and what that
  means for ordering. Also **short-circuit evaluation in `and` and `or`**: `if n != 0 and total / n
  > 5` is safe precisely because Python never evaluates the right side when the left is false. That
  is a mechanism, it is testable, and it is missing from the stub lesson entirely.
- **Worked examples:** (a) simple: a grader that maps a score to a letter with `elif`. Then **break
  it deliberately** by putting `score >= 70` first, run it on 95, get "C", and show why: the chain
  stops at the first true test. The stub lesson asserts this in one sentence; the rebuilt lesson
  makes the reader watch it happen. (b) with a wrinkle: validating input. `int(input(...))` on the
  word "seven" raises `ValueError`, so guard with `.isdigit()` first, and show the negative-number
  case where `.isdigit()` returns `False` for `"-3"`, which is the wrinkle inside the wrinkle.
- **Misconceptions to address:** `if x = 5` (a `SyntaxError`, and say so); the belief that every
  true branch runs; the belief that `else` is required; `if x == True` instead of `if x`; chained
  comparison, where `1 < x < 10` really does work in Python and does not in most languages, so a
  learner should know it is a Python-specific gift.
- **Practice:** `:::predict` which of four branches runs for a given input. `:::exercise` the
  positive/negative/zero and even/odd task from the stub, kept because it is a good task, plus a
  second one that requires ordering the chain correctly.
- **Media:** a small inline SVG of the `if`/`elif`/`else` chain as a single path with three exits,
  in the site palette, labelled directly, readable at phone width. One idea: only one exit is
  taken.
- **Sources:** official tutorial ch. 4; Think Python ch. 5; Sweigart ch. 2.
- **Connects:** builds on lesson 2's types and truth; leads to lesson 4, where the condition
  controls repetition instead of a single choice.
- **Spaced review of:** `int(input())` from lesson 2, now with the failure that lesson 2 did not
  handle.

### 4. Repeating work (`04-loops.md`, ~18 min)

- **Objectives:** compare `for` and `while` and explain when each is the right choice; build an
  accumulator loop that totals and counts; predict the output of a loop over `range()`; identify an
  off-by-one error and an unguarded empty case.
- **Core ideas:** `for` when you know what you are going through, `while` when you are waiting for
  something to become true. `range(1, 10)` stops at 9, and the reason is that Python's ranges are
  half-open so that `range(n)` has exactly `n` items and consecutive ranges join without overlap.
  **The accumulator pattern**: set a total to zero before the loop, add inside it, use it after.
- **Mechanism to explain:** why the accumulator's initialisation has to be outside the loop, traced
  with the names shown at each pass. This is the notional-machine lesson of the course and it gets
  a Python Tutor link with the exact program in it.
- **Worked examples:** (a) simple: total and average a fixed list of numbers with `for`, showing
  the state of `total` and `count` at each pass in a small table. (b) with a wrinkle: the same job
  with `while` and a sentinel, reading numbers from the user until they type `done`, which
  introduces two faults at once. The empty case, where the user types `done` immediately and the
  average divides by zero, giving `ZeroDivisionError`; and the infinite loop, shown deliberately,
  with `Ctrl-C` as the way out and the missing update as the cause.
- **Misconceptions to address:** `range(1, 10)` expected to include 10; a total reset inside the
  loop; the belief that `while` and `for` are interchangeable; modifying a list while looping over
  it (mention, defer the demonstration to lesson 6 where lists are the subject).
- **Practice:** `:::predict` the output of a `range()` loop with a step. `:::exercise` write a loop
  that counts how many of a list of numbers are above their own average, which requires two passes
  and is a genuine desirable difficulty.
- **Sources:** Guttag ch. 3, which is the model for teaching whole small programs before
  abstraction; official tutorial ch. 4; Sweigart ch. 3.
- **Connects:** builds on lesson 3's conditions, which now control repetition; leads directly to
  lesson 5, because by the end of this lesson the learner has written the same three lines three
  times and has a felt reason to want a function. **This is Guttag's ordering and it is deliberate:
  the pain comes before the remedy.**
- **Spaced review of:** truthiness (a `while` condition on a non-empty string), and traceback
  reading on `ZeroDivisionError`.

### 5. Functions (`05-functions.md`, ~18 min)

- **Objectives:** explain the difference between returning a value and printing one; build a
  function with parameters and a return value; predict what a name is worth inside and outside a
  function; apply a function to remove the repetition written in lesson 4.
- **Core ideas:** a function is a named piece of program that takes inputs and gives back a value.
  `def` creates it; calling it runs it; `return` hands a value back **and stops the function**.
  Parameters are the names in the definition, arguments are the values at the call. Names made
  inside a function are gone when it ends.
- **Mechanism to explain:** **return versus print, which is the single most-taught confusion in
  every source in SOURCES.md and deserves the most careful paragraph in this course.** A function
  that prints has done something a person can see and given the program nothing. A function that
  returns has given the program a value and shown nobody anything. Demonstrate with the same
  function written both ways, then `total = add(2, 3) * 2`, which works with the returning version
  and gives `TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'` with the printing
  one. **That specific traceback is the whole lesson in one line** and it is why `None` gets
  introduced here rather than in the abstract.
- **Worked examples:** (a) simple: take the repeated three lines from lesson 4 and lift them into
  `average(numbers)`, showing the before and after side by side. (b) with a wrinkle: a function
  with an early `return` inside an `if`, so the reader sees that `return` exits immediately and the
  lines after it never run. Add a second parameter with a default value, and the call by keyword,
  because that is how a learner will read other people's code an hour later.
- **Misconceptions to address:** printing when you meant to return; expecting a function to change
  a name outside itself; calling `average` instead of `average(numbers)` and getting `<function
  average at 0x...>` printed, which is baffling and takes one sentence to explain; the arity
  `TypeError` when you pass two arguments to a one-parameter function. **Mutable default arguments
  are named in SOURCES.md but deferred**: it needs lists, which arrive in lesson 6, and it is a
  trap rather than a foundation. A callout in lesson 6 instead.
- **Practice:** `:::predict` what a small function returns given an input it was not shown with.
  `:::checkpoint` "what does a function return if it has no `return`?" `:::exercise` refactor a
  supplied twenty-line program with three copies of the same block into one function and three
  calls, which is the transfer test for this lesson.
- **Sources:** Guttag ch. 4; Think Python ch. 3 and 6; official tutorial ch. 4; CS50P week 0.
- **Connects:** builds on lesson 4's repetition; leads to lesson 6, where functions take collections
  as parameters.
- **Spaced review of:** the accumulator from lesson 4, now inside a function; the `=` mechanism from
  lesson 2, now used to explain scope.

### 6. Lists and dictionaries (`06-collections.md`, ~20 min)

- **Objectives:** build and index a list, and explain why the first item is at 0; apply a dictionary
  to look something up by name rather than by position; explain what aliasing is and predict the
  effect of `b = a` followed by `b.append(...)`; identify `IndexError` and `KeyError` from the
  message.
- **Core ideas:** a list is an ordered, mutable sequence, indexed from 0, and negative indices count
  from the end. A dictionary maps keys to values, and is the right shape whenever the natural
  question is "what is the value *for* this thing" rather than "what is the *n*th thing". Both are
  looped over with `for`, and `.items()` gives a dictionary's pairs.
- **Mechanism to explain:** **mutability and aliasing, which is Guttag's chapter 5 emphasis and the
  reason this lesson exists at all.** A list name refers to the list; two names can refer to the
  same list; changing it through one is visible through the other. Contrast with lesson 2's `a = 3;
  b = a; a = 10`, where nothing was shared, and say exactly what is different: integers are
  immutable, so `a = 10` rebinds rather than changes. Then `b = a[:]` or `list(a)` as the copy.
  Python Tutor, again, with two arrows pointing at one box.
- **Worked examples:** (a) simple: build a list of readings, index it, slice it, loop it, and count
  how many pass a test, reusing lesson 4's accumulator on a real collection. (b) with a wrinkle: a
  word-frequency counter over a sentence, which needs a dictionary, needs the "key not there yet"
  case (`KeyError`, then `.get(word, 0)` as the fix), and is the first program in the course that
  composes four plans at once: split, iterate, guard, accumulate. **This is the multi-plan
  composition that the rainfall literature says does not come free with the parts**, and it is
  placed here deliberately so that the project the learner meets next is not the first time they
  have seen one.
- **Misconceptions to address:** off-by-one on the last index (`items[len(items)]` raises
  `IndexError`); the belief that `b = a` copies; expecting a dictionary to be ordered by key (it
  preserves *insertion* order, guaranteed since 3.7, which is a different promise); using a list
  where a dictionary is the right shape. **Callout: the mutable default argument trap**, deferred
  here from lesson 5, now that lists exist.
- **Practice:** `:::predict` the aliasing result before running it. `:::exercise` given a list of
  names and a dictionary of scores, print the names of everyone above the average, which requires a
  list, a dictionary, a function, a loop and a condition, all five previous lessons at once.
- **Where this leads,** the closing section of the course: files, modules, classes, testing,
  regular expressions, and virtual environments, each in one sentence with a link. Say plainly that
  six lessons do not reach classes and that this is a choice, not an oversight, and point at CS50P
  and Automate the Boring Stuff as the two honest next steps, one academic and one practical. Also
  the honest note on **`pip` and virtual environments**: installing a package runs code from the
  internet on your machine at install time, typosquatting on PyPI is an active campaign, and
  `venv` exists so you do not break the Python your operating system depends on. A callout and two
  links, which is the minimum honest treatment in a six-lesson course.
- **Sources:** Guttag ch. 5; official tutorial ch. 5 and 12; Think Python ch. 9 to 10; Sweigart
  ch. 6 to 7.
- **Spaced review of:** everything. This lesson's exercise is the course's integration point.

## The AI question

**One section, in lesson 1, after the geek gene section, and nowhere else.** The learner very
likely has a model open in another tab, and a course that pretends otherwise is lying about the
room it is being read in. The line to take, and it follows from Lister rather than from taste: a
model will happily write code you cannot read, and reading is the skill that predicts whether you
can write. So use it to explain a traceback or a line you do not understand, and do not use it to
produce the exercise you were about to learn from. Point at **Using AI Effectively** (Term 1 of the
Core) rather than duplicating it. Cite Denny, Prather, Becker et al., "Computing Education in the
Era of Generative AI", *CACM* 2023, whose abstract was read; **the paper is not on the unread line
because only its abstract's claims are used, but a lesson quoting anything beyond the abstract must
open it first.**

## Assessments

The stub course has no `assessments/` directory. Standard 4.4 requires both a course-end test and a
project for a course of six or more lessons.

### Course-end test (`assessments/final-test.md`)

**Fifteen items, four options each, pass mark 70%, drawing on all six lessons.** At least eight of
the fifteen must require applying an idea to code the learner has not seen, per standard 4.3. The
blueprint, by lesson and by kind:

| Lesson | Items | Recall | Application |
|---|---|---|---|
| 1. Running code and tracebacks | 2 | 1 | 1 (given a traceback, name the fault) |
| 2. Names and values | 3 | 1 | 2 (trace a sequence of assignments; predict a type) |
| 3. Decisions | 2 | 0 | 2 (which branch runs; fix a mis-ordered chain) |
| 4. Repetition | 3 | 1 | 2 (predict a `range()` output; find the off-by-one) |
| 5. Functions | 3 | 1 | 2 (return vs print; what a name is worth after a call) |
| 6. Collections | 2 | 1 | 1 (predict an aliasing result) |

Interleave rather than block: do not run the items in lesson order, so that the learner has to
work out which idea applies before applying it (standard 4.2). Every distractor is a mistake a
half-understanding learner actually makes, taken from the misconceptions list in each lesson above,
not invented. Every `explain` teaches, especially for the wrong answers.

### Project: the readings summariser (`assessments/project-readings-summary.md`)

**This is Soloway's rainfall problem, reworded.** SOURCES.md proposed it and the reason holds: it
is the canonical multi-plan beginner task, most studies put success under 20%, and it exercises
every one of the six lessons. It is reworded away from rainfall because the point is the
composition, not the meteorology, and a learner should be able to pick their own readings.

**Deliverable:** one `.py` file, thirty to sixty lines, that reads numbers typed one per line, stops
when the user types `done`, ignores any value below zero with a message saying it was ignored, and
then reports how many valid readings there were, their total, their average to one decimal place,
and the highest and lowest. If there were no valid readings it says so and does not crash.

**Steps, given as five, because plan composition is the thing being taught and handing over an
undecomposed problem is what produces the under-20% result:** (1) read one number and print it back;
(2) loop until the sentinel, collecting into a list; (3) reject the invalid ones; (4) compute the
four summary figures in a function that takes the list; (5) handle the empty case.

**Rubric, five criteria, each pass or not:**

| Criterion | What passes |
|---|---|
| It runs | No traceback on a normal run |
| The sentinel works | `done` ends input; the reading before it is included |
| Invalid readings | Negatives excluded from the count, total and average, and reported |
| The empty case | Typing `done` first prints a message, not `ZeroDivisionError` |
| It is composed | The summary is computed in a function that takes the list and returns the figures, not printed from inside the loop |

The last criterion is the one that matters and the one most submissions will miss, which is the
finding the rainfall literature has been reproducing since the 1980s. Say so in the project's own
"how you did" section: **this problem defeats most people the first time, and that is the reason it
is here rather than a reason to feel bad.**

## Neutrality notes

A programming course is not a sensitive domain under standard 3.4, and no neutrality audit is
required. Three claims in it are nonetheless contested rather than settled and are handled as
standard 3.1 type-2 questions:

- **The geek gene** (lesson 1). Handled by citing the retraction and the grade-distribution study
  and by *not* overclaiming in reply: the evidence is against innate bimodality, and that is not the
  same as saying programming is easy or that everyone will find it equally quick.
- **AI assistants for beginners** (lesson 1). Evidence is early and moving. Give the reasoning
  (reading predicts writing) rather than a rule, and attribute the concern to the researchers
  rather than asserting it in our own voice.
- **Python as a first language** (lesson 6, "where this leads"). Name the real tradeoff rather than
  selling: dynamic typing defers error discovery to runtime, which is precisely why this course
  spends six lessons teaching you to read tracebacks. Do not claim Python is objectively the best
  first language; serious people disagree and SOURCES.md records why.

Per `docs/DECISIONS.md` §8, `course.yaml`'s summary, description, outcomes and `estimated_hours`
are **not** updated to match this outline. They describe what the six live stub lessons currently
deliver, and the outline's copy lands lesson by lesson as the lessons do. The replacement outcomes
are the objectives listed above; `estimated_hours` should reach about **5.5** when all six lessons
are at target length, up from the current 2.8, and moves in steps as each lesson lands.
