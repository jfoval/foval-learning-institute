---
title: Your first program, and your first error
minutes: 55
objectives:
  - Run a Python program two ways, in the interpreter and from a saved file
  - Explain what each line of a traceback tells you, reading from the bottom up
  - Identify a SyntaxError and a NameError from the message alone
  - Apply the edit, run, read loop to fix a program that is broken three different ways
quiz:
  - q: >-
      You run a program. It prints "Setting up." and then shows a traceback ending in
      NameError. What does the printed line tell you about when the mistake was found?
    options:
      - Nothing useful, since the output arrives before the error either way
      - It was found before the program ran, and the output came from a cache
      - It means two separate mistakes, one in line 1 and one further down
      - It was found while the program ran, because line 1 had already worked
    answer: 3
    explain: >-
      Python checks that a whole file can be parsed before it runs any of it, so a
      SyntaxError produces no output at all. Any output before a traceback proves the
      program started, which means the fault was found during the run. That is the
      difference between the two errors in this lesson. So the answer is D. Option A misses
      the one piece of evidence you were given. Option B invents a cache Python does not
      have. Option C reads one traceback as two faults, but Python stops at the first.
  - q: >-
      A file of forty lines has a missing colon on line 12. You run it. What appears
      on screen?
    options:
      - An error message and nothing else, because no line of the file ever ran
      - The output of lines 1 to 11, and then an error message naming line 12
      - Only a warning, since a missing colon is recoverable while running
      - The whole program's output, with line 12 quietly skipped over
    answer: 0
    explain: >-
      Parsing happens first and covers the entire file, so a fault anywhere stops
      everything. None of your program's own output appears; you get Python's complaint
      and nothing else, which is A. Notice it also has no "Traceback (most recent call
      last)" header, because nothing was running to trace. Option B is the reasonable
      guess, and it is what a language that ran line by line would do; Python does not.
      Options C and D both assume Python carries on past a fault it cannot even read.
  - q: >-
      At the prompt you type name = "Ada", then name.upper(), and see 'ADA' appear. You put
      those same two lines in a file and run it. What do you see?
    options:
      - "'ADA' again, since the two lines do the same work either way"
      - An error, because a file cannot call a method on its own
      - Nothing at all, because a file shows you only what you ask it to
      - "'Ada', because a file reports the value before it was changed"
    answer: 2
    explain: >-
      Both lines run in the file exactly as they did at the prompt, and the second one
      really does produce 'ADA'. The difference is that a file throws away a value nobody
      asked for, so you see nothing until you wrap the second line in print(). That is C,
      and it is behind almost every "but it worked when I typed it". Option A is the
      assumption being corrected. Option B invents a restriction that does not exist.
      Option D imagines the file running an older version of the value.
  - q: >-
      You write savings = 100, then print(savngs) on the next line. What happens?
    options:
      - A SyntaxError, and nothing at all runs
      - A NameError, once the program reaches the second line
      - It prints 100, because Python matches the closest name
      - It prints an empty line, since savngs has no value yet
    answer: 1
    explain: >-
      A misspelled name is spelled correctly as far as the parser is concerned; it is a
      perfectly legal name that happens to refer to nothing. So the file parses, line 1
      runs, and line 2 fails with NameError. Python will often add "Did you mean:
      'savings'?", but it does not act on the guess, which rules out option C. Option A
      confuses the two errors. Option D describes a language that invents empty values,
      and Python raising an error here is the friendlier design.
  - q: >-
      A program runs with no error and prints a number that is plainly wrong. What kind
      of problem is this?
    options:
      - Not a real problem, since Python accepted the program
      - A SyntaxError that Python failed to report properly
      - A NameError that was silently handled somewhere
      - A bug, which no error message will ever point you to
    answer: 3
    explain: >-
      Errors catch the programs Python cannot run. They say nothing about whether a
      program does what you wanted, and the wrong answer is far more expensive than the
      crash because nothing announces it, which makes it D. This is why the third broken
      program in the practice below has no error in it. Options B and C both blame a
      mechanism that would have printed something. Option A is the belief this question
      exists to break.
---

Within about ninety seconds of starting Python, you'll break a program, read what the machine says
about it, and fix it. That comes before you've written anything you'd call a program of your own.

So this lesson teaches two things at once: how to run Python, and how to read the thing it prints
when it refuses. Most beginners' courses leave the second one until week three, by which time the
habit of scrolling past red text has set.

## Where the "you either have it or you don't" story came from

You'll have heard that some people just get programming and some never will. That belief came from
somewhere specific, so let me show you where.

In 2006 a paper by Saeed Dehnadi and Richard Bornat called "The camel has two humps" claimed to
have found a test that sorted people into programmers and non-programmers before they had written a
line of code. It was never formally published, and it travelled anyway. In 2014 Bornat, one of its
two authors, retracted it.[1] He wrote
that he doesn't believe an aptitude test for programming was discovered, and that he doesn't
believe in "programming sheep and non-programming goats". He attributed the paper to a period when
he was seriously unwell.

The other half of the folklore is that computer science grades come out in two humps, a group who
get it and a group who don't. In 2016 Patitsas and colleagues went and looked.[2] They took the
final grades of every undergraduate computer science class at the University of British Columbia
from 1996 to 2013: 778 lecture sections, 30,214 grades. Then they measured instead of eyeballing.
A first screen ruled out 455 of the sections outright, on a property that has to hold before a
distribution can have two peaks at all. The remaining 323 went through a statistical test for more
than one peak, and 45 came back positive. That's 5.8% of all 778. The authors add a point
that makes the result stronger rather than weaker: run that many tests at the usual threshold and
about 5% should come back positive by chance alone, so most of the 45 may well be noise.

The second half of their study is the part I find harder to forget. They showed 53 computer science
professors six histograms and asked what sort of distribution each one was. Every histogram had
been generated from a normal distribution, deliberately, with the same mean and spread. There were
no two-humped distributions in the set at all. Half the professors were asked, before they saw the
histograms, whether they found the commonly held belief about bimodal CS grades to be true in their
own teaching. The other half were asked afterwards. The ones asked first saw more bimodality in the
same normal data, and so did the ones who agreed that some students are innately predisposed to do
better at computing.

Someone who holds the opposite view has a fair reply to this, and it deserves to be put properly.
Their strongest claim is that aptitude varies a great deal and teaching doesn't close the gap, which
is a different claim from saying that some people cannot program. Against that, final grades are a rough instrument: students who
struggle drop the course and vanish from the distribution, marks get curved, and everything is
capped at 100%. So what Patitsas rules out is a two-humped *outcome* in the grades, which is what
the folklore claims and is all they say they have ruled out.

Don't read any of it as reassurance that programming is easy. It's genuinely hard, and you'll be
confused for stretches of this course. The narrower claim being retired is
that there's a line dividing people who can from people who cannot.

:::callout About the model in your other tab
You almost certainly have an AI assistant available, and pretending otherwise would be silly.

The researchers who study this are genuinely split, and the honest summary is that the evidence is
early and still moving. A review by Denny, Prather, Becker and colleagues treats code-generating
models as both an opportunity, because they make new kinds of learning material possible, and a
problem for how introductory courses are taught and assessed.[6] Studies watching beginners work
with these tools describe people accepting suggestions they haven't understood.

The line this course takes is a teaching judgement rather than a finding. A model
will happily hand you thirty lines you can't read, and you'll have learned nothing while feeling
productive. So use it to explain a traceback or a line that baffles you, and don't use it to
produce the exercise you were about to learn from. There's a whole course in that question, and
this isn't it.
:::

## Two ways to run Python

Python gives you two front doors, and they behave differently in one way that confuses people for
weeks.

**The interpreter** is what you get by typing `python3` at a terminal. It shows a `>>>` prompt and
runs each line as you press Enter. It's for trying things.

**A file** is a document ending in `.py` that you run with `python3 myfile.py`. It's for programs
you want to keep.

The difference shows up the moment you type something that has a value. Try this at the `>>>` prompt:

```
>>> 2 + 2
4
```

Now put the same line in a file called `sums.py` and run it:

```
$ python3 sums.py
$
```

Nothing. The interpreter shows you the value of any expression you type, as a convenience for
someone poking about. It stays quiet for things that produce no value, so `x = 5` at the prompt
shows nothing either. A file never shows you anything on its own. If you want a file to show you
something, you have to ask:

```
print(2 + 2)
```

That's what `print()` is for. It doesn't compute anything or store anything. It shows a value to
a person.

:::predict A file contains exactly two lines, `5 * 3` and then `print("done")`. What appears on screen when you run it?
Only `done`. The first line is computed, the answer 15 is produced, and then it's thrown away
because nothing asked for it. In the interpreter the same two lines would show you `15` and then
`done`, which is exactly the mismatch that catches people out when they move their experiments into
a file.
:::

## Your first error, and where Python finds it

Save this as `greeting.py`:

```
print("Hello.")
print("My name is Ada."
print("I am learning Python.")
```

The second line is missing its closing bracket. Run it:

```
  File "/home/you/greeting.py", line 2
    print("My name is Ada."
         ^
SyntaxError: '(' was never closed
```

Look at what did *not* happen. Line 1 is a perfectly good instruction and it didn't print
"Hello." Nothing ran at all.

If you carry one thing out of this lesson, carry this: Python reads and checks the whole file
before it runs a single line of it. That first pass is called **parsing**, and it's only asking one
question: is this Python at all? A missing bracket on line 2 of a four-hundred-line file stops line
1 from running, because line 1 never got its turn.

Now change `print` to `pint` on the second line instead, and put the bracket back:

```
print("Hello.")
pint("My name is Ada.")
print("I am learning Python.")
```

:::predict Before you run it: does `Hello.` print this time?
Yes. `pint` is a legal name followed by brackets, so the parser has nothing to complain about and
the file passes the check. Run it and see where it stops instead.
:::

```
Hello.
Traceback (most recent call last):
  File "/home/you/greeting.py", line 2, in <module>
    pint("My name is Ada.")
    ^^^^
NameError: name 'pint' is not defined. Did you mean: 'print'?
```

This time `Hello.` printed. The file parsed cleanly, because `pint(...)` is perfectly good Python
grammar; it's a legal name followed by brackets, and the parser has no opinion about whether that
name refers to anything. So the program started, line 1 ran, and line 2 failed at the moment Python
went looking for something called `pint` and found nothing.

Output before a traceback is evidence. It tells you the program got as far as producing it, so
whatever is wrong was found during the run and not before it, which gives you somewhere to start
looking without touching a single line.

:::checkpoint A forty-line program prints eleven lines of output and then shows a traceback. Roughly where is the fault, and which of the two errors above is it definitely not?

It's somewhere at or after whatever produced the eleventh line, and it's definitely not a
SyntaxError, because a SyntaxError would have prevented all eleven from appearing.
:::

## How to read a traceback

Read it from the bottom up. Beginners read from the top, because that's how you read everything
else, and the top is the least useful part.

Take the `NameError` above, bottom to top:

1. `NameError: name 'pint' is not defined.` The error type, then the message. This is the line
   that tells you what is wrong. Start here.
2. `pint("My name is Ada.")` with `^^^^` under it. The exact code, with the exact part that failed
   marked. Those caret marks are a recent convenience: they arrived in Python 3.11, so on an older
   Python you'll see the same error without them.[3]
3. `File ".../greeting.py", line 2, in <module>` The file and the line number. `<module>` means the
   fault was in the body of your file rather than inside a function.
4. `Traceback (most recent call last):` A header. It carries no information about your bug. This is
   the line beginners stare at hardest.

The suggestion at the end, `Did you mean: 'print'?`, is a real feature and not a coincidence:
Python compares the name you used against the names it does know and offers the nearest.[4] But it's
only a guess, and Python doesn't act on it. You typed `pint`, so `pint` is what it went looking
for, and not finding it is still an error.

Here's a traceback from a program you know nothing about, using an idea this course has not
reached yet.

```
Traceback (most recent call last):
  File "/home/you/scores.py", line 3, in <module>
    print("Third score:", scores[3])
                          ~~~~~~^^^
IndexError: list index out of range
```

:::checkpoint Which line of that traceback do you read first, what does it tell you, and did the program print anything before it stopped?
Read `IndexError: list index out of range` first. It says something was asked for an item at a
position it doesn't have, and the marks on the line above point at `scores[3]` as the culprit
rather than at the `print`. You don't need to know what a list is to get that far.

And yes, it printed something: this is a traceback, with the header, which means the file parsed and
the program was running. Whatever line 1 and line 2 produced is on screen above it. Lists arrive in
lesson 6, and `IndexError` with them.
:::

## What people get wrong

**"The traceback is noise."** It's the most specific information you'll ever get about your own
program, and it's written in an unfriendly font. Reading the last line first is the entire habit,
and it takes about a week to become automatic.

**"An error means I did something stupid."** Every programmer alive generates these constantly, and
an expert makes just as many. What they have is a shorter gap between seeing one and knowing what
it means, and that gap is what you're training here.

**"The interpreter and a file are the same thing."** They differ in one visible way, which you saw
above: the interpreter shows you the value of an expression and a file doesn't. Almost every "but
it worked when I typed it" confusion comes back to this.

**"No error means it works."** No. Errors catch programs Python can't run. They say nothing at all
about whether your program does what you wanted. A program that runs cleanly and prints the wrong
number is a worse problem than one that crashes, because nothing announces it. That's why the third
exercise below has no error in it.

:::callout Which Python to install
Install Python 3.13 or 3.14 from [python.org](https://www.python.org/downloads/). Everything in
this course runs on 3.10 and up, but 3.10 reaches end of life in October 2026, so it isn't a
sensible thing to start on now.[5] Check what you have with `python3 --version`.

On a Mac and on most Linux systems the command is `python3`. On Windows it's usually `python` or
`py`. If `python3 --version` says 2 point something, you're looking at a different, long-dead
Python and you want the one you just installed.
:::

## Practice

:::exercise Fix three broken programs
Take 20 minutes over these. Type each one out rather than copying it, run it, read the message
before you change anything, then fix it.

**One.**

```
print("Counting to three.")
print("One."
print("Two.")
```

**Two.**

```
total = 40
print("The total is:")
print(totl)
```

**Three.** This one produces no error at all, and its answer is wrong. Work out what it should say
and what it actually says.

```
price = 20
tax = 5
print("Price plus tax:")
print("price + tax")
```

For each, write down one sentence before you fix it: which of the two errors is this, and how do I
know from what appeared on screen? For the third, the answer to "which error" is neither, and the
useful question is why Python was perfectly happy.
:::

If you want to watch a program run one line at a time, with every value visible as it changes, put
it into [Python Tutor](https://pythontutor.com/). It draws what the machine is doing. We'll come
back to it in most of the remaining lessons, because "what is each name worth right now" turns out
to be the question underneath almost every bug in this course.

## Connections

Everything from here needs the loop you just practised: change something, run it, read what came
back. The next lesson gives your programs a memory, which is the point at which they stop being
lists of instructions and start being able to do something with what they are given. It also brings
the third error type, `TypeError`, which shows up the moment you try to do arithmetic on something
that turns out to be text.

## Go deeper

- **[The official Python Tutorial, chapter 2](https://docs.python.org/3/tutorial/interpreter.html)** on
  running the interpreter and using it well. One caution, which the tutorial states about itself: it's
  written for programmers who are new to *Python*, not for people new to programming. Read it as
  a reference to grow into.
- **[CS50P, Harvard's Introduction to Programming with Python](https://cs50.harvard.edu/python/)**,
  free, with graded problem sets. Its week 0 gets you running Python and goes straight into
  functions and variables; its week 3 is entirely about exceptions, which is a good deal later than
  we start on errors.
- **[Python Tutor](https://pythontutor.com/)**. Not reading, but the single most useful free tool
  for a beginner: it shows you the machine's state at every step.

## Sources

1. Richard Bornat, *Camels and humps: a retraction*, Middlesex University, 2014. The author's own
   withdrawal of the 2006 "The camel has two humps" claim, and the source of the "programming sheep
   and non-programming goats" wording.
2. Elizabeth Patitsas, Jesse Berlin, Michelle Craig and Steve Easterbrook, "Evidence That Computer
   Science Grades Are Not Bimodal", *Proceedings of the 2016 ACM Conference on International
   Computing Education Research* (ICER 2016, Melbourne); later in *Communications of the ACM*.
   Study 1 covers 778 lecture sections and 30,214 final grades at the University of British
   Columbia, 1996 to 2013, of which 45 (5.8%) were multimodal under Hartigan's Dip Test. Study 2 is
   the experiment on 53 professors, whose six histograms were all generated from a normal
   distribution.
3. PEP 657, "Include Fine Grained Error Locations in Tracebacks", released in Python 3.11. The
   caret markers under the failing part of a line.
4. *What's New In Python 3.10*, "Better error messages": `NameError` and `AttributeError` gained
   suggestions of similar names (bpo-38530). Python 3.12 extended them to standard library modules
   and to `ImportError`.
5. Python Developer's Guide, *Status of Python versions*. Python 3.14 was released on 7 October 2025
   and is the current stable release; 3.10 reaches end of life in October 2026.
6. Paul Denny, James Prather, Brett A. Becker, James Finnie-Ansley, Arto Hellas, Juho Leinonen,
   Andrew Luxton-Reilly, Brent N. Reeves, Eddie Antonio Santos and Sami Sarsa, "Computing Education
   in the Era of Generative AI", *Communications of the ACM*, 2023 (arXiv:2306.02608). Cited for its
   framing of code-generating models as both an opportunity and a challenge for introductory
   courses. Only the abstract has been read.

