---
title: The readings summariser
minutes: 120
type: project
---

Everything you have written so far was one idea at a time. This project is one small program that
needs six of them at once, and putting easy pieces together turns out to be a different skill from
having the pieces. Lesson 4's third exercise was a first pass at this; here it is at full size.

The brief: **write one Python file that reads a run of numbers from the user, stops at a
sentinel, rejects the bad ones, and reports a summary. Then read your own program and say which
lesson each part came from.**

## What the program has to do

A person runs your file and types readings one per line. They might be temperatures, weights,
times, prices, anything you like. When they have finished they type `done`. Then the program
reports.

Precisely:

1. It reads numbers, one per line, until the user types `done`.
2. Any reading below zero is **ignored**, and the program says so at the time, on its own line.
3. When `done` arrives it prints how many valid readings there were, their total, their
   **average to one decimal place**, and the highest and the lowest.
4. If there were no valid readings at all, it says so in a sentence and does not crash.
5. Thirty to sixty lines. If yours is much longer, something is being repeated that a function
   should be doing once.

Here is a run of a program that meets the brief. Yours does not have to use these words, but it
has to give these figures:

```
Reading, or 'done': 12
Reading, or 'done': 7
Reading, or 'done': -3
Ignored -3: readings below zero are not allowed.
Reading, or 'done': 19
Reading, or 'done': 4
Reading, or 'done': done
4 valid readings
Total: 42.0
Average: 10.5
Highest: 19.0
Lowest: 4.0
```

And the run that catches most people:

```
Reading, or 'done': done
No valid readings were entered.
```

You may assume that whatever is typed is either `done` or a number. Handling a stray word
properly needs `try` and `except`, which are past where this course goes, and lesson 6 said where
to find them. So `float(line)` without a guard is fine here, and lesson 3's `.isdecimal()` will
not help you anyway, since it refuses the decimal point and the minus sign that readings need.

## Build it in five steps

Do not try to write the whole thing and then run it. That is the way this problem has defeated
beginners for forty years, and it is avoidable. Get each step running before the next.

**Step 1. Read one number and print it back.** Three lines: an `input()`, a `float()`, a
`print()`. Run it. This is lesson 2, and it is also where you find out whether Python is set up.

**Step 2. Loop until the sentinel, collecting into a list.** Lesson 4 has this shape, the
`while True:` with a `break` when the line is `done`, and lesson 6 has `.append()`. Check the
sentinel before you convert, or `float("done")` will stop you. Run it and print the list at the
end. Type three numbers and `done` and make sure all three are there.

**Step 3. Reject the invalid ones.** An `if` inside the loop, before the append. Below zero goes
to a message; everything else goes in the list. Run it with a negative in the middle and check
two things: the message appears at the time, and the negative is not in the list afterwards.

**Step 4. Compute the four figures in a function.** Write a function that takes the list and
gives back the total, the average, the highest and the lowest. Not prints: gives back. The
top-level program then prints them, which is lesson 5's rule about who the answer is for. `return`
hands back one value, and you need four, so decide how. A tuple works, and lesson 5's exercise
three had you decide this already. For the highest and lowest, Python has `max()` and `min()`,
and they are fine to use. If you would rather see how they work, a loop that keeps the best so
far, with an `if` inside, is the accumulator from lesson 4 with a comparison instead of an
addition, and it is worth writing once.

:::checkpoint Before you write the function, say what it should do if it is handed an empty list.

It should not be handed one. `max([])` raises `ValueError`, and an average over nothing divides
by zero. Either the caller checks the list before calling, or the function checks and returns
something the caller can test for, such as `None`. Both are defensible. Decide, and put the check
in exactly one place. If you find yourself checking in both, one of them is not doing anything.
:::

**Step 5. Handle the empty case.** Run it and type `done` first. If you get a traceback, lesson
4 showed you this exact one. Lesson 3's `if readings:` is the guard, since an empty list is
false. Then print the average with `f"{average:.1f}"`, which lesson 5's exercise used, and check
the sample run above against yours.

If a step will not work and you cannot see why, paste it into
[Python Tutor](https://pythontutor.com/) and watch what each name is worth on each pass. Every
bug in this program is a name holding something other than what you thought.

## The second half: read your own program

This takes fifteen minutes and it is not optional. Print your program or open it beside a blank
page, and for each of these, write down the line numbers and the lesson:

- Where the program reads input and converts it (lesson 2).
- Where it decides whether to keep a reading (lesson 3).
- Where the loop ends, and what ends it (lesson 4).
- Where the summary is computed, where it is printed, and why those are different places
  (lesson 5).
- Where the list is built, and where it is handed to something else (lesson 6).
- Which of the seven errors from lesson 6's closing list you hit while building this, and what
  each one turned out to mean.

The last one is the point of the exercise. If the answer is "none", either you are unusually
careful or you did not run it enough.

## How you did

Five checks, each a plain pass or not.

| Check | What passes |
| --- | --- |
| It runs | The sample run above produces the same figures, with no traceback |
| The sentinel works | `done` ends input, and the reading typed just before it is counted |
| Invalid readings | Negatives are reported when typed and are left out of the count, total, average, highest and lowest |
| The empty case | Typing `done` first prints a sentence, not `ZeroDivisionError` or `ValueError` |
| It is composed | The four figures come out of a function that takes the list and returns them; nothing is totalled or printed from inside the reading loop |

The last one is the one that matters, and it is the one most first attempts miss. The usual
shape of a near-miss is a program that adds to a running total inside the reading loop, keeps a
count beside it, and prints the average at the bottom, with no function anywhere. That program
often gives the right figures, and it is not what was asked for, because the moment you need the
same summary for a second list you are copying eight lines, which is the problem lesson 5 exists
to remove.

If you passed four of five and missed that one, go back to lesson 5's third exercise, do it
again, and then move your totals into a function here. It usually takes ten minutes and it is the
most useful ten minutes in the course.

## Why this problem

This is an old task with a new coat of paint. Elliot Soloway set it in the 1980s as a run of
daily rainfall figures, and computing education has been giving it to beginners ever since,
because every piece of it is easy and the whole is not. Most studies that report a success rate
put it under twenty per cent on the first attempt, and researchers still argue about why. What
survives the argument is that combining several plans you already have, terminate, guard,
accumulate, count, is a separate skill from having them, and the only known way to learn it is to
do it.

So if this took you three sittings, that is the documented experience of most people who have
tried it, and it is the reason the problem is here rather than a reason to feel bad. If it took
you one, add a sixth figure of your own choosing, such as how many readings were above the
average, and notice whether the function or the loop is the right place for it. Lesson 4's first
exercise is the reason it is not the loop.
