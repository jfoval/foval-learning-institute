# Sources: Introduction to Programming with Python

<!-- unread: Guttag, Matthes, Sorva, Lister, Kaczmarczyk, Fisler, Seppälä -->

*The line above is read by `scripts/build.mjs`, and the linter fails any lesson that cites a work
named on it. Every name there is a work whose **table of contents, abstract or press summary** was
read this session but whose **text was not**. Guttag and Matthes were seen only as contents
listings from booksellers and publisher pages. Sorva 2013, Lister et al. 2004, Kaczmarczyk et al.
2010, Fisler 2014 and Seppälä et al. 2015 were read as abstracts and database records; the
Kaczmarczyk PDF 404ed. **Patitsas et al. 2016 came off this line on 2026-09-10**, when the paper
itself was read while drafting lesson 1; what was read is recorded under "Contested questions"
below. Their findings are recorded below because they shaped
the outline, but **a lesson may not cite them until someone opens them and moves the name off this
line.** The rule is read-it-or-omit-it.*

*Stage 1 research. Written before any lesson is drafted. This is a working document: for each
source, say what it is good for and what it establishes.*

**Research date: 10 September 2026.** Everything below marked "read" was fetched in full this
session. Everything marked "TOC only" or "abstract only" was not.

**Status note.** `course.yaml` stays at `status: published` through this rebuild. The build ships
only published courses, so setting it to `drafting` would delete a live course from the site.
Python Basics is one of the three pre-pipeline placeholders covered by `docs/DECISIONS.md` §8: six
stub lessons averaging 463 words, which learners can read today, and which get replaced underneath
a course that stays up.

## Target: which Python

**Python 3.14, released 7 October 2025, is the current stable release** (python.org developer
guide, versions page, read). Its end of life is October 2030. 3.13 is also in bugfix maintenance
until October 2029; 3.12 and 3.11 are security-fix only; **3.10 reaches end of life in October
2026, next month**, so no lesson should tell a learner that 3.10 is a fine version to start on.

Consequences for drafting. Every code sample must run on 3.10 through 3.14 unless the lesson is
specifically teaching a newer feature, because that is the range a learner will actually meet on a
Mac, a school Chromebook, a Raspberry Pi and a Codespace. Two things this rules out of the current
stubs: nothing may depend on the improved error messages that only 3.11+ gives (they should be
*shown*, and their absence on older versions mentioned), and f-strings are safe everywhere in
range, so the stubs' use of them is fine.

## Canonical textbooks

- **Guttag, *Introduction to Computation and Programming Using Python: With Application to
  Computational Modeling and Understanding Data* (3rd ed., MIT Press, 2021, ISBN
  9780262542364).** **TOC only.** The book behind MIT 6.0001/6.0002 and the most academically
  serious of the intro texts. Contents, part one: 1 Getting Started; 2 Introduction to Python; 3
  Some Simple Numerical Programs; 4 Functions, Scoping, and Abstraction; 5 Structured Types and
  Mutability; 6 Recursion and Global Variables; 7 Modules and Files; 8 Testing and Debugging; 9
  Exceptions and Assertions; 10 Classes and Object-Oriented Programming; 11 A Simplistic
  Introduction to Algorithmic Complexity. Part two runs 12 to 26 into algorithms, plotting,
  optimisation, Monte Carlo simulation, statistics, pandas and machine learning. Includes a Python
  3.8 quick reference. **What it establishes for us:** the ordering decision that chapter 3 comes
  *before* functions. Guttag teaches you to write a whole small numerical program, badly, with
  nothing but branching and iteration, before he gives you abstraction. That is a deliberate
  pedagogical choice and it is the opposite of "functions first". It is the sequence our outline
  should follow, because a learner who has felt the pain of repeating themselves has a reason to
  want a function.
- **Matthes, *Python Crash Course* (3rd ed., No Starch Press, 2023).** **TOC only, from the
  publisher listing.** The best-selling beginner Python book in the trade market, as distinct from
  the university market. Part I is the language (setup, variables and simple data types, lists,
  working with lists, if statements, dictionaries, user input and while loops, functions, classes,
  files and exceptions, testing); Part II is three projects (an arcade game with Pygame, data
  visualisation with Matplotlib and Plotly, a Django web application). **What it establishes:** the
  project-first instinct of the trade books, and the fact that lists come very early, before
  conditionals, which is not what the academic texts do. Worth noting as a live disagreement rather
  than copying.
- **Downey, *Think Python* (3rd ed., 2023, O'Reilly; free online at
  allendowney.github.io/ThinkPython, CC BY-NC-SA 4.0).** **TOC read, plus chapter 9 opened on 2026-09-10** while reviewing lesson 6: section 9.10 is titled "Aliasing" and opens "If `a` refers to an object and you assign `b = a`, then both variables refer to the same object", and section 9.3 covers copying with both the full slice and `list()`. Chapters: 1 Programming as a
  way of thinking; 2 Variables and Statements; 3 Functions; 4 Functions and Interfaces; 5
  Conditionals and Recursion; 6 Return Values; 7 Iteration and Search; 8 Strings and Regular
  Expressions; 9 Lists; 10 Dictionaries; 11 Tuples; 12 Text Analysis and Generation; 13 Files and
  Databases; 14 to 17 classes and inheritance; 18 Python Extras; 19 Final thoughts. **What it
  establishes:** functions at chapter 3, before conditionals, and recursion introduced *with*
  conditionals rather than later. Downey's is the strongest statement of the "functions early"
  school. The third edition is written for Jupyter notebooks and every chapter runs in Colab,
  which matters for our "how do I run this" lesson.
- **Sweigart, *Automate the Boring Stuff with Python* (3rd ed.; full text free at
  automatetheboringstuff.com under CC BY-NC-SA 3.0).** **TOC read, plus chapter 2 opened on
  2026-09-10** while reviewing lesson 3: it uses the word "flowchart" 26 times across 18 images, so
  the claim that it spends longer than most books on flow-control diagrams is checked rather than
  assumed. Chapters 3 and 5 are still TOC only. Part 1: 1 Python Basics; 2
  if-else and Flow Control; 3 Loops; 4 Functions; **5 Debugging**; 6 Lists; 7 Dictionaries and
  Structuring Data; 8 Strings and Text Editing; 9 Regular Expressions; 10 Reading and Writing
  Files; 11 Organizing Files; 12 Command Line Programs. Part 2 is 13 to 24, the practical
  applications: web scraping, Excel, Google Sheets, SQLite, PDF and Word, CSV/JSON/XML, scheduling,
  email, graphs and images, OCR, keyboard and mouse control, speech. **What it establishes:** a
  whole chapter on debugging, placed immediately after functions and before lists. No other book in
  this list treats debugging as a topic with its own chapter that early. Given that the tracing
  research below says novices cannot predict what their own code does, this is the single most
  defensible structural idea in any of these books, and our outline takes it.

**Licensing note.** Think Python, Automate the Boring Stuff and Composing Programs are all
**CC BY-NC-SA**: non-commercial. Foval publishes under CC-BY-SA. We therefore **link to them and
never adapt or reproduce their text, exercises or examples**, for exactly the reason standard 4.7
gives about Bible translations: our licence is not ours to extend over someone else's material, and
an NC clause is incompatible with what we promise in value 9. Every worked example in this course
must be written from scratch.

## University syllabi consulted

- **MIT 6.0001, Introduction to Computer Science and Programming in Python (Fall 2016, OCW).**
  **Read.** Text: Guttag 2nd ed. Twelve sessions: computation fundamentals and branching and
  iteration; string manipulation and approximation methods (guess-and-check, bisection, Newton
  Raphson); functions; tuples, lists and dictionaries; recursion; object-oriented programming;
  program efficiency; searching and sorting. Grading: problem sets 30%, "finger exercises" 10%,
  midterm 20%, final 40%. Aimed at "those with minimal programming experience across all majors".
  **What it establishes:** the 10% for finger exercises. MIT gives a tenth of the grade purely for
  doing small, frequent, low-stakes exercises, separately from the real problem sets. That is
  retrieval practice with an institutional budget behind it, and it maps directly onto standard 4.2
  and onto our `:::exercise` and `:::predict` blocks.
- **Harvard CS50P, CS50's Introduction to Programming with Python (David Malan, cs50.harvard.edu/python).**
  **Read.** Ten weeks: 0 Functions, Variables; 1 Conditionals; 2 Loops; **3 Exceptions**; 4
  Libraries; **5 Unit Tests**; 6 File I/O; 7 Regular Expressions; 8 Object-Oriented Programming; 9
  Et Cetera. Plus a final project. **What it establishes, and it is the most surprising finding of
  this session:** Harvard puts **exceptions at week 3, before libraries**, and **unit tests at week
  5, before file handling**. Most courses, including our own stubs, treat error handling as an
  advanced topic and testing as a professional one. CS50P treats both as beginner topics, on the
  reasoning that a beginner's program crashes constantly and a beginner has no way to know whether
  their code works. Our six-lesson budget cannot carry a whole lesson on unit tests, but it can and
  must carry error handling, and the stub course has none at all.
- **Berkeley CS61A, Structure and Interpretation of Computer Programs.** Its text is **DeNero,
  *Composing Programs* (3rd ed., composingprograms.com/3ed, CC BY-NC-SA 4.0)**, a derivative of
  Abelson and Sussman's SICP rewritten in Python. **Read: the front matter only; only chapter 1,
  Functions, is complete in the third edition, sections 1.1 Getting Started to 1.7 Recursive
  Functions, with chapters 2 to 4 promised "this semester".** **What it establishes:** the far end
  of the "functions first" school. CS61A spends an entire chapter on functions, environments and
  recursion before it will discuss data. This is the right course for someone who wants computer
  science; it is the wrong model for a two-to-three-hour foundation course, and saying why in the
  "where this leads" section of our last lesson is useful to a learner deciding what to do next.
- **The official Python Tutorial (docs.python.org/3/tutorial, 3.14).** **Read.** 1 Whetting Your
  Appetite; 2 Using the Python Interpreter; 3 An Informal Introduction to Python; 4 More Control
  Flow Tools; 5 Data Structures; 6 Modules; 7 Input and Output; 8 Errors and Exceptions; 9 Classes;
  10 to 11 standard library tours; **12 Virtual Environments and Packages**; 13 What Now?; 14
  Interactive Input Editing; **15 Floating-Point Arithmetic: Issues and Limitations**; 16 Appendix.
  **Important caveat, stated in the tutorial itself:** it is written for "programmers new to
  Python", not for people new to programming. We should link it as the reference to graduate to,
  and never as the place to start. Chapter 15 is the correct citation for the `0.1 + 0.2` problem
  and chapter 12 for virtual environments.

## Primary sources

- **PEP 20, "The Zen of Python", Tim Peters, 19 August 2004.** **Read in full.** Nineteen
  aphorisms. The four that earn a place in a beginners' course, because each settles an argument a
  beginner is about to have with themselves: *"Explicit is better than implicit"*, *"Readability
  counts"*, *"Errors should never pass silently. Unless explicitly silenced"*, and *"There should
  be one-- and preferably only one --obvious way to do it"*. The last is worth quoting with its
  own punctuation, which is deliberately wrong, and with the joke that follows it: *"Although that
  way may not be obvious at first unless you're Dutch"* (Guido van Rossum is Dutch). Note that the
  list has 19 lines though Peters said there were 20; the missing one has never been written. Also
  runnable: `import this`.
- **PEP 8, the style guide for Python code.** Not fetched in full this session; the four-space
  indent, `snake_case` for functions and variables and 79-column line limit are safe to state, but
  **any direct quotation must be checked against the PEP at fact-check time.**

## What the field considers essential

Every source above teaches these, and in roughly this dependency order. This is the outline's
backbone.

1. **A way to run code, and the loop of edit, run, read the error.** The tutorial's chapter 2, and
   CS50P's whole week 0. Beginners fail here before they fail at anything else, and the failure is
   environmental, not conceptual.
2. **Values, types, and names.** That `=` binds a name to a value and is not a claim of equality;
   that `int`, `float`, `str` and `bool` behave differently under the same operators; that `"2" +
   "2"` is `"22"`.
3. **Conditionals.** Booleans, comparison, `and`/`or`/`not`, and truthiness.
4. **Iteration**, both definite (`for`, over a sequence) and indefinite (`while`, on a condition),
   and the accumulator pattern that all three of Guttag, Downey and Sweigart build to.
5. **Functions**: parameters, arguments, return values, and scope. The distinction between
   returning and printing is the single most-taught confusion in the list.
6. **Collections**: lists first, then dictionaries. Mutability, and the aliasing consequences of
   it, is where Guttag puts his emphasis (ch. 5, "Structured Types and Mutability").
7. **Errors, read and handled.** Reading a traceback is a skill, not a talent, and CS50P and
   Sweigart both treat it as a first-class topic.

Everything past that (files, modules, classes, regular expressions, testing, complexity) is out of
scope for six lessons and belongs in the "where this leads" section.

## Common misconceptions

These come from the computing-education-research literature. **Every item is abstract-level
reading; the names are on the unread line and no lesson may cite them until the papers are opened.**
The misconceptions themselves are safe to teach, because they can be demonstrated in a code block
the reader runs.

- **Assignment read as equality or as a permanent link.** A learner writes `total = total + n` and
  objects that a thing cannot equal itself plus something. Worse, having written `b = a`, they
  expect `b` to keep tracking `a`. The fix is to teach `=` as an instruction ("make this name refer
  to this value") and to show the two-step evaluation: right side first, then bind.
- **The notional machine.** Du Boulay's term, developed by **Sorva**, "Notional Machines and
  Introductory Programming Education", *ACM Transactions on Computing Education* 13(2), art. 8,
  July 2013. The argument: novices fail not because they cannot read syntax but because they have
  no model of the abstract machine executing their program, and instructors treat that model as
  something students will absorb rather than as an explicit learning objective. **This is the
  research finding that should shape the whole course.** Practically it means: every non-trivial
  example gets traced line by line with the state shown, and `:::predict` blocks ask "what is `x`
  now?" before the answer.
- **Novices cannot trace code, and this predicts everything else.** **Lister et al.**, "A
  multi-national study of reading and tracing skills in novice programmers", ITiCSE 2004 working
  group, *ACM SIGCSE Bulletin* 36(4), 119 to 150; eleven authors across seven countries. Following
  the 2001 McCracken group's finding that many students cannot program at the end of CS1, Lister's
  group tested two narrower skills: predicting the output of a short program, and choosing the
  correct completion of a near-complete one. Students were weak at both, and markedly weaker at the
  second. The conclusion is that a fragile grasp of *reading* code precedes and explains the
  failure to write it. **So reading exercises come before writing exercises in every lesson.**
- **Plan composition: the rainfall problem.** Soloway's task from the 1980s (read a list of daily
  rainfall figures, stop at a sentinel, ignore negatives, print the average) is trivially
  decomposable and famously unsolvable by beginners: **most studies put success under 20%**.
  **Simon**, "Soloway's Rainfall Problem Has Become Harder" (LaTiCE 2013), found students doing
  worse than in the original studies; **Fisler**, "The recurring rainfall problem" (ICER 2014),
  found students in functional-programming CS1 courses choosing better high-level structures and
  making fewer low-level errors; **Seppälä et al.**, "Do we know how difficult the Rainfall Problem
  is?" (Koli Calling 2015), argued that the reported difficulty is confounded by wide variation in
  how the task is worded and marked. **What survives all three:** combining several individually
  easy plans (accumulate, count, guard, terminate) into one program is a distinct skill that does
  not come free with the parts. Lesson 4 or 5 must give the learner a multi-plan problem and walk
  the composition explicitly.
- **The off-by-one and the empty case.** `range(1, 10)` stops at 9. An average over an empty list
  divides by zero. Both are cheap to demonstrate and both are in every beginner's first ten bugs.
- **`is` versus `==`.** Works by accident for small integers and short strings because of CPython's
  interning, then fails. Teach `==` and mention `is` only for `None`.
- **Floating point.** `0.1 + 0.2 == 0.3` is `False`. Official tutorial ch. 15 is the citation.
- **Mutable default arguments** and **aliasing** (`b = a` then `b.append(1)` changes `a`). Guttag's
  ch. 5 emphasis.
- **Shadowing the standard library** by naming your own file `random.py` or `string.py`, then
  getting an incomprehensible error from your own import.

## Contested questions and the positions on each

Programming pedagogy is a genuinely contested empirical field, and three of these are standard 3.1
type-2 questions where a lesson must present positions rather than a verdict.

1. **Is there a "geek gene"?** *Contested empirical, and closer to settled than the folklore
   suggests.* The claim that programming ability is bimodal, some people get it and some never
   will, was popularised by Dehnadi and Bornat's "The camel has two humps" (2006), which was never
   formally published. **Bornat retracted it in 2014** ("Camels and humps: a retraction",
   eis.mdx.ac.uk), writing that he does not believe Dehnadi discovered an aptitude test for
   programming, that he does not believe in "programming sheep and non-programming goats", and
   attributing the paper to a period of illness.

   **Patitsas, Berlin, Craig and Easterbrook, "Evidence That Computer Science Grades Are Not
   Bimodal", ICER 2016 (Melbourne; DOI 10.1145/2960310.2960312; later in *CACM*). PDF read in full
   on 2026-09-10.** Specifics, which are better than the abstract's summary of them and should be
   used instead of it:

   - **Study 1.** Final grade distributions for *every* undergraduate CS class at the **University
     of British Columbia, 1996 to 2013**: **778 lecture sections, 30,214 final grades, average
     class size 75**. Method: kurtosis first, since kurtosis below 3 is a necessary but not
     sufficient condition for bimodality, then Hartigan's Dip Test on those that passed, at
     alpha 0.05. **455 sections (58%) were definitely not bimodal on kurtosis alone.** Of the 323
     tested, **45 came out multimodal: 13.9% of those tested and 5.8% of all 778.** The authors
     note they expect about 5% false positives from the number of tests run, which is worth
     stating because it makes the finding stronger, not weaker.
   - **Study 2.** **53 CS professors.** The crucial detail the abstract omits: **all six histograms
     were generated with R's `rnorm`**, 100 points each, mean 60, standard deviation 5, with a
     ceiling at 100%. They were normal by construction, not merely "ambiguous". The priming was a
     single question, *"It is a commonly-held belief that CS grades distributions are bimodal. Do
     you find this to be the case in your teaching?"*, placed before the histograms for a random
     half and after them for the other half. Primed participants labelled more of the normal
     distributions bimodal, as did those agreeing that "Some students are innately predisposed to
     do better at CS than others".
   - The paper credits **Guzdial** with the term "Geek Gene Hypothesis" and **Lister** with the
     prior theoretical argument that CS grades are not bimodal and that instructors see bimodality
     because they expect it. Patitsas et al. describe their paper as testing Lister's argument
     against real data.
   - **One figure to handle with care.** The paper reports, citing Lewis, that in a survey of CS
     faculty "77% of them strongly disagree with the statement 'Nearly everyone is capable of
     succeeding in the computer science curriculum if they work at it.'" That is a striking number,
     it is second-hand here, and **Lewis has not been read**. Do not use it in a lesson without
     going to the original.

   **How to teach it:** lesson 1 says plainly that the "some people just can't program" belief is
   not supported, cites the retraction and the grade study, and does not overclaim in reply.
   Difficulty is real; a gene for it is not evidenced.
2. **Which language first, and does the choice matter?** *Contested empirical.* Python's case is
   readability and low syntactic overhead; the case against is that dynamic typing hides errors
   until runtime and that beginners learn less about what the machine is doing. Scheme and Racket
   have Fisler's rainfall result on their side. Java's advocates point to types as documentation.
   **State the disagreement, name Python's actual tradeoff (dynamic typing defers error discovery
   to runtime, which is exactly why lesson 6 teaches reading tracebacks), and do not claim Python
   is objectively the best first language.**
3. **Should beginners use AI assistants?** *Contested empirical, and moving fast.* The
   field-defining review is **Denny, Prather, Becker, Finnie-Ansley, Hellas, Leinonen,
   Luxton-Reilly, Reeves, Santos and Sarsa**, "Computing Education in the Era of Generative AI",
   *Communications of the ACM*, 2023 (arXiv:2306.02608; **abstract read**). Code-generation models
   solve introductory problems with high accuracy, which the authors treat as both an opportunity
   for new learning resources and a challenge to how CS1 is taught and assessed. Subsequent work,
   including Prather et al. on novices with GitHub Copilot, describes "shepherding" and "drifting"
   behaviours read as over-reliance. **How to teach it:** honestly, and in this course's own voice.
   The learner very likely has a model open in another tab. The defensible line, and it follows
   from Lister rather than from taste, is that a model can write code you cannot read, and reading
   is the skill that predicts everything else, so use it to explain and never to substitute for
   tracing. This is also the one place where our own institutional position matters: Using AI
   Effectively is a Core course (Term 1) and this lesson should point at it rather than duplicate
   it.
4. **Objects first, or procedural first?** *Largely settled in practice for CS1-for-everyone;
   contested for CS-majors courses.* Every source in this file except the object-oriented weeks of
   CS50P and Guttag ch. 10 defers classes to the end. Our six lessons do not reach classes at all,
   and the last lesson should say so and say why.

## Best existing free resources (to link, not duplicate)

- **[Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)**, Sweigart, full
  text free, CC BY-NC-SA 3.0. The best next step for a learner who finishes this course and wants
  to *do* something. Ch. 5 on debugging is the best free treatment of the topic for beginners.
- **[Think Python 3e](https://allendowney.github.io/ThinkPython/)**, Downey, free, CC BY-NC-SA 4.0.
  Every chapter runs in Colab, so it needs no installation. Better than us on recursion.
- **[The official Python Tutorial](https://docs.python.org/3/tutorial/)**. The reference to
  graduate to, not to start with; it says so itself.
- **[CS50P](https://cs50.harvard.edu/python/)**, Harvard, free, with graded problem sets. The
  natural next course, and ten weeks against our six lessons.
- **[MIT 6.0001 on OCW](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)**,
  with lecture videos, slides and problem sets. For the learner who wants the university version.
- **[Composing Programs](https://www.composingprograms.com/3ed/)**, DeNero. For the learner who
  wants computer science rather than programming.
- **[Python Tutor](https://pythontutor.com/)** visualises execution step by step, showing names,
  values and the call stack. Given Sorva's argument about the notional machine, this is the single
  most useful free tool to put in front of a beginner, and it needs no installation.

## Safety-critical guidance (practical subjects)

Programming is not a safety-critical subject in the sense that electrical work is, but four things
are genuinely dangerous and a competent instructor says all four.

- **`pip install` runs code from the internet on your machine, at install time.** Packaging can
  execute arbitrary code during installation, so a wrong package name is not a typo, it is an
  execution. **Typosquatting on PyPI is an active, ongoing campaign**: repeated 2025 incidents
  (ThreatLabz on `termncolor`, `sisaws` and `secmeasure`; a ReversingLabs report of 20 malicious
  packages with over 14,100 downloads aimed at cloud credentials). PyPI now flags likely
  typosquats at project creation. **Numbers to re-verify at fact-check:** the PyPI 2025 year in
  review at blog.pypi.org was unreachable from this session and no figure from it is used above.
- **Never paste secrets into source code**, and never commit them. This is the beginner mistake
  that costs actual money.
- **`eval()` and `exec()` on anything a user typed** hand control of the program to the user. If
  the course mentions them at all, it mentions them with this attached.
- **A virtual environment is not optional hygiene**, it is how you avoid breaking the Python your
  operating system depends on. Official tutorial ch. 12. Six lessons probably cannot fit `venv`
  properly; a callout plus a link is the minimum honest treatment.

## Open concerns about scope

- **Six lessons is tight but right.** `estimated_hours: 2.8` cannot cover files, modules, classes,
  testing and regular expressions, and should not pretend to. The honest shape is: run code, names
  and values, decisions, repetition, functions, collections, with error-reading woven through
  rather than given a lesson. **This means `course.yaml`'s six outcomes are broadly correct
  already** and, per `docs/DECISIONS.md` §8, they stay untouched until the lessons land.
- **The stubs' quiz questions are mostly recall.** Standard 4.3 wants at least half the items to
  require applying an idea to a case not in the text. The current lesson 3 quiz asks which operator
  tests equality; that is recognition. Every quiz gets rebuilt, not edited.
- **The stubs have no `objectives`, no `:::predict`, no `:::checkpoint`, no links and no images.**
  `npm run validate` already warns that lessons 5 and 6 have no links in the body. All six are
  replaced rather than reviewed (`courses/CLAUDE.md` rule 3).
- **Where does error handling live?** CS50P's argument for teaching it in week 3 is strong and our
  budget is six lessons. The outline should decide between a seventh lesson and weaving tracebacks
  into every lesson. **Recommendation for Stage 2: weave it, and make lesson 1 teach reading a
  traceback**, because a learner meets their first `SyntaxError` about ninety seconds after they
  start and nobody has ever waited until week 3 for it.
- **This course needs a project.** Standard 4.4 requires one for any course of six or more lessons,
  and the stub course has no `assessments/` directory at all. The rainfall problem, reworded, is
  the obvious candidate: it is the canonical multi-plan beginner task and it exercises every one of
  the six lessons.
