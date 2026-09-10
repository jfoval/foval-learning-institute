---
title: Repeating work
minutes: 50
objectives:
  - Compare for and while, and explain which one a given job needs
  - Build an accumulator loop that totals and counts, and explain why it starts outside the loop
  - Predict the output of a loop over range(), including one with a step
  - Identify an off-by-one error and an unguarded empty case in someone else's loop
quiz:
  - q: >-
      What does "for i in range(2, 11, 3):" print if the body is "print(i)"?
    options:
      - 2, 5, 8, 11, since the third number is the step and the second is the last value
      - 2, 5, 8, because counting stops before 11 rather than at it
      - 3, 6, 9, since the first number sets the step and the second the starting point
      - 2, 4, 6, 8, 10, because the third number says how many values to produce
    answer: 1
    explain: >-
      range takes a start, a stop and a step, and the stop is never included, so it goes 2, 5,
      8 and would need 11 to be under the stop to appear. That makes it B. Option A is the
      off-by-one everyone makes once. Option C reads the three numbers in the wrong roles.
      Option D reads the step as a count of items.
  - q: >-
      A loop totals a list, but total = 0 has been written inside the loop instead of above
      it. The list is [12, 7, 19, 4]. What does total hold afterwards?
    options:
      - 42, since the loop still visits every item and adds each one in turn
      - 0, because the assignment overwrites the total after the addition runs
      - 12, since the first pass is the only one that finds the total still empty
      - 4, because each pass wipes the total and adds only the item it is holding
    answer: 3
    explain: >-
      Every pass resets total to zero and then adds that pass's item, so what survives is the
      last item alone: 4. The answer is D, and the wrong number is worth recognising, because
      "my total came out as the last item" is the fingerprint of this exact bug. Option A
      describes the correct version. Option B has the two lines in the wrong order. Option C
      would need the reset to happen only once.
  - q: >-
      You need to read numbers from someone until they type "done", and you have no idea how
      many they will type. Which loop fits, and why?
    options:
      - Neither one, since reading from a person needs a construct built for input
      - A for loop, because reading input is a sequence and for handles sequences
      - A while loop, since the finish depends on a condition rather than a known count
      - Either works identically here, so the choice is purely a matter of style
    answer: 2
    explain: >-
      You are waiting for something to become true rather than working through items you
      already have, which is exactly what while is for, so C. A for loop needs something to
      iterate over and you have no such thing yet, which rules out B. Option A invents a
      third construct. Option D is the belief this question exists to break: the two loops
      suit different shapes of problem.
  - q: >-
      A program totals the readings a user typed and divides by how many there were. The user
      types "done" immediately. What happens?
    options:
      - ZeroDivisionError, because the count is still zero when the division runs
      - It prints 0, since dividing zero by zero is defined as zero in Python
      - Nothing is printed, because a loop that never runs skips the lines after it
      - A ValueError, since "done" cannot be converted into a number to be totalled
    answer: 0
    explain: >-
      The loop body never runs, so total and count both keep the zeros they were given, and
      the division is 0 / 0: ZeroDivisionError, which is A. The empty case is the one people
      forget, and it is the case a real user hits on their first try. Option B invents a rule
      Python does not have. Option C misunderstands what a loop skips: only its own body.
      Option D would be right if the sentinel were converted, but it is checked first.
  - q: >-
      Which of these is a job for a for loop rather than a while loop?
    options:
      - Retrying a network request until it finally succeeds or you give up
      - Asking someone for a password until they get it right or run out of tries
      - Waiting for a file to appear on disk before carrying on with the work
      - Printing a greeting for every name in a list you already have in hand
    answer: 3
    explain: >-
      You have the names, you know what you are going through, and you want each one once,
      which is a for loop: D. The other three are all waiting for a condition to change,
      which is a while. Notice that none of them say how many times they will repeat, and
      that is the tell. If you cannot say what you are iterating over, you want while.
---

By the end of lesson 3 your programs could store things and choose between them. They still can't do the one thing computers are actually for: the same work, over and over, without getting bored or making a mistake on the four hundredth try.

## Going through things you already have

```
readings = [12, 7, 19, 4]

for r in readings:
    print(r)
```

`for` takes each item in turn, puts it in the name `r`, and runs the indented block. Four items, four passes, then it stops on its own. You don't count anything and you can't run off the end.

You'll also meet `range()`, which produces a run of numbers without you writing them out:

```
>>> list(range(5))
[0, 1, 2, 3, 4]
>>> list(range(1, 10))
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Look at the second one. You asked for 1 to 10 and got 1 to 9. **The stop value is never included**, and that catches everyone once.

It isn't an arbitrary cruelty. Because the stop is excluded, `range(n)` has exactly `n` items in it, and `range(0, 5)` followed by `range(5, 10)` covers 0 to 9 with nothing missed and nothing repeated. Every off-by-one you avoid later comes from that.

:::predict Before you read on
`range()` takes a third number, the step. What does this print?

```
for i in range(2, 11, 3):
    print(i, end=" ")
```

`2 5 8`.

It starts at 2 and adds 3 each time. The next would be 11, but the stop is 11 and the stop is never reached, so it finishes. Ask for `range(2, 12, 3)` and you'd get `2 5 8 11`.
:::

## The accumulator

Almost every loop that produces an answer looks like this. Set something up before the loop, change it inside, use it after.

```
readings = [12, 7, 19, 4]
total = 0
count = 0

for r in readings:
    total = total + r
    count = count + 1

print("Average:", total / count)
```

Here's what the two names are worth at the end of each pass:

| Pass | `r` | `total` | `count` |
| --- | --- | --- | --- |
| 1 | 12 | 12 | 1 |
| 2 | 7 | 19 | 2 |
| 3 | 19 | 38 | 3 |
| 4 | 4 | 42 | 4 |

Then `42 / 4`, which is `10.5`.

`total = total + r` is the line from lesson 2 that looked like nonsense as arithmetic and reads fine as an instruction: work out the right side using what `total` is worth now, then make `total` refer to the answer. It's doing that four times, each time starting from where the last pass left it.

Which is exactly why `total = 0` has to sit **outside** the loop. Move it inside and it runs on every pass:

```
for r in readings:
    total = 0
    total = total + r
```

Now every pass wipes the total and adds one number to zero, so what survives at the end is `4`, the last reading. No error, no warning, just a wrong answer that happens to look plausible. If a total ever comes out equal to the last item in your data, this is why.

## Waiting for something instead

`for` needs something to go through. Sometimes you don't have one yet, because you're waiting for a condition to change:

```
readings = []

while True:
    line = input("Reading, or 'done': ")
    if line == "done":
        break
    readings.append(float(line))

print(readings)
```

`while` takes a condition and repeats as long as it's true. `while True:` is a loop that would never stop by itself, so something inside has to end it, and `break` does: it leaves the loop immediately. `.append()` puts a value on the end of a list, which is lesson 6's subject arriving early because we need somewhere to put things.

The rule of thumb: **`for` when you know what you're going through, `while` when you're waiting for something to become true.** If you can't say what you'd be iterating over, you want `while`.

:::checkpoint Quick check
The condition of a `while` is tested for truth, exactly like an `if`. Given what lesson 3 said about empty things, what does `while readings:` do, and when does it stop?

It repeats as long as `readings` has anything in it, and stops when the list is empty, because an empty list is false. You'd use it for a loop that consumes the list as it goes. Note it's `while readings:` and not `while len(readings) > 0:`, which says the same thing in more words.
:::

## The two ways this goes wrong

**The loop that never ends.** A `while` whose condition never becomes false runs until you stop it. Press `Ctrl-C` and Python raises `KeyboardInterrupt` and quits. The cause is nearly always a missing update: something inside the loop was supposed to change the thing the condition tests, and doesn't.

**The empty case.** Take the sentinel program above and have it average the readings. Now run it and type `done` straight away:

```
Traceback (most recent call last):
  File "/home/you/readings.py", line 9, in <module>
    print("Average:", total / count)
                      ~~~~~~^~~~~~~
ZeroDivisionError: division by zero
```

The loop body never ran, so `total` and `count` are both still `0`, and the last line divides zero by zero. That's the fifth error in this course, and the empty case is the one people forget, because they test their program by typing three readings in like a reasonable person. A real user opens it, doesn't understand it, and presses Enter.

The fix is an `if` before you divide, which is why lesson 3 came first:

```
if count > 0:
    print("Average:", total / count)
else:
    print("No readings.")
```

## What people get wrong

**Expecting `range(1, 10)` to include 10.** It stops before the stop. Say it out loud once and it sticks.

**Resetting the accumulator inside the loop.** Covered above, and the tell is a total equal to the last item.

**Thinking `for` and `while` are interchangeable.** Anything a `for` does you can force a `while` to do by counting by hand, and you'll introduce an off-by-one doing it. Pick by the shape of the problem.

**Changing a list while looping over it.** Adding to or removing from a list inside a `for` that's walking it produces skipped items and other confusion. Lesson 6 has lists properly and shows this; for now, just don't.

## Practice

:::exercise Two loops
Take 25 minutes over these.

**One. Two passes over the same data.** Given a list of numbers, print how many of them are above the list's own average. This needs two passes: one to work out the average, and one to count. You can't do it in a single pass, and working out why not is most of the exercise. Check yours against `[12, 7, 19, 4]`, where the average is `10.5` and the answer is `2`.

**Two. Build up a string.** An accumulator doesn't have to hold a number. Start with `word = ""` and loop over the letters of `"loop"`, and on each pass set `word` to the letter followed by whatever `word` already held. Predict what comes out before you run it. Then work out what changes if you write it the other way round.
:::

If a loop does something you can't explain, step through it in [Python Tutor](https://pythontutor.com/), which shows every name changing on every pass. This is the lesson where that pays for itself.

## Connections

You've now written `total = total + r` and `count = count + 1` several times, and you'd write them again for the next set of readings, and again after that. Copying three lines around a program is how a small mistake gets into four places at once and is fixed in three of them.

That's the problem the next lesson solves. A function lets you write the averaging once, give it a name, and call it wherever you need it. **The order here is deliberate: you've felt the repetition before being handed the tool that removes it**, because a tool you've wanted is much easier to learn than a tool you've been given.

## Go deeper

- **[The Python tutorial, chapter 4](https://docs.python.org/3/tutorial/controlflow.html)** covers `for`, `range`, `break` and the `else` clause on loops, which is a genuinely odd corner of the language and worth meeting once.
- **[Automate the Boring Stuff, chapter 3](https://automatetheboringstuff.com/3e/chapter3.html)**, free online. Sweigart's loop chapter is the most practical treatment on this list.
- **[Think Python, chapter 7, "Iteration and Search"](https://allendowney.github.io/ThinkPython/chap07.html)**, free online, and it runs in a notebook so there's nothing to install.

## Sources

1. *The Python Tutorial*, chapter 4, "More Control Flow Tools", Python 3.14 documentation. `for`, `range`, `break`, and `while`. [^1]
2. All code output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including the `range()` results, the pass-by-pass table, the `ZeroDivisionError` traceback, and the reset-inside-the-loop total of 4. [^2]

[^1]: *The Python Tutorial*, 3.14, ch. 4.
[^2]: Run 10 September 2026.
