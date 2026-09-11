---
title: Repeating work
minutes: 65
objectives:
  - Compare for and while, and explain which one a given job needs
  - Build an accumulator loop that totals and counts, and explain why it starts outside the loop
  - Predict the output of a loop over range(), including one with a step
  - Identify an off-by-one error and an unguarded empty case in someone else's loop
quiz:
  - q: >-
      What does "for i in range(10, 0, -2):" print if the body is "print(i)"?
    options:
      - 10, 8, 6, 4, 2, 0, since counting down must finish on the stop value itself
      - 10, 8, 6, 4, 2, because the stop is never reached, whichever way you count
      - Nothing at all, because a range cannot run backwards without a reversed call
      - 0, 2, 4, 6, 8, since a negative step reverses the order the values come out in
    answer: 1
    explain: >-
      A negative step counts down, and the stop is excluded going down exactly as it is going
      up, so the run finishes at 2 and never produces 0. That is B. Option A is the
      off-by-one, and the temptation is stronger downwards because 0 feels like a natural
      place to stop. Option C invents a restriction. Option D produces the right values in
      the wrong order, which is what you would get from range(0, 11, 2) instead.
  - q: >-
      A loop totals [3, 8, 100, 6]. Its body is two lines, "total = 0" first and then
      "total = total + n". What does total hold when the loop finishes?
    options:
      - 117, since the loop still visits every item and adds each one in turn
      - 6, because each pass wipes the total and then adds only the item it is holding
      - 3, since the first pass is the only one that finds the total still empty
      - 0, because the reset is the last thing to run before the loop ends
    answer: 1
    explain: >-
      Every pass sets total to zero and then adds that pass's item, so what survives is the
      last item alone: 6, which is B. Note that the order of the two lines inside the body
      decides this. Put the reset second and the answer really would be 0. Option A describes
      the correct version, with the reset above the loop. Option C would need the reset to
      happen only once. Option D reads the two body lines in the other order.
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
      A program reads lines from a user, stops when the line is "done" without converting
      that line, totals the numbers it did get and divides by how many there were. The user
      types "done" straight away. What happens?
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

It isn't an arbitrary cruelty. Because the stop is excluded, `range(n)` has exactly `n` items in it, and `range(0, 5)` followed by `range(5, 10)` covers 0 to 9 with nothing missed and nothing repeated, which is a good share of the off-by-ones you would otherwise write.

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

At the end of each pass the three names stand like this:

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

Now every pass wipes the total and adds one number to zero, so what survives at the end is `4`, the last reading. No error, no warning, just a wrong answer that happens to look plausible.

If a total ever comes out equal to the last item in your data, one of two slips produced it: the reset is inside the loop, or you wrote `total = r` where you meant `total = total + r`. Both throw away everything before the final pass, and both give exactly the same symptom, so check for both.

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

**The loop that never ends.** Run this one on purpose:

```
n = 5
while n > 0:
    print(n)
```

```
5
5
5
5
... and so on for ever
```

Nothing inside the loop changes `n`, so `n > 0` is true now and will be true for ever. Press `Ctrl-C` to stop it:

```
  File "/home/you/spin.py", line 3, in <module>
    print(n)
    ~~~~~^^^
KeyboardInterrupt
```

The fix is one line, `n = n - 1` at the bottom of the body. That's the cause almost every time: something inside was supposed to change what the condition tests, and doesn't.

**The empty case.** Put the two halves together, the `while` that collects and the `for` that averages, and save the whole thing as `readings.py`:

```
readings = []

while True:
    line = input("Reading, or 'done': ")
    if line == "done":
        break
    readings.append(float(line))

total = 0
count = 0
for r in readings:
    total = total + r
    count = count + 1

print("Average:", total / count)
```

Type 12, 7, 19 and then `done` and it says `Average: 12.666666666666666`. Now run it again and type `done` straight away:

```
Reading, or 'done': done
Traceback (most recent call last):
  File "/home/you/readings.py", line 15, in <module>
    print("Average:", total / count)
                      ~~~~~~^~~~~~~
ZeroDivisionError: division by zero
```

Read it the way lesson 1 taught, from the bottom. `ZeroDivisionError: division by zero` names the fault. Above it, line 15 and the source line that failed, and under that the marker `~~~~~~^~~~~~~`, which points not at the whole line but at `total / count`, the exact part that blew up. Those markers arrived in Python 3.11 and they are the most useful thing in a traceback once a line has more than one operation in it.

So: the loop body never ran, `total` and `count` both still hold the `0` they were given, and the last line divides zero by zero. That's the fifth error in this course, and the empty case is the one people forget, because they test by typing three readings in like a reasonable person. A real user opens it, doesn't understand it, and presses Enter.

The fix is an `if` before you divide, which is why lesson 3 came first:

```
if count > 0:
    print("Average:", total / count)
else:
    print("No readings.")
```

:::checkpoint Find the fault
This loop is meant to print every item in the list. It prints three of the four. Which one goes missing, and why?

```
items = ["a", "b", "c", "d"]

for i in range(1, len(items)):
    print(items[i])
```

`"a"` is missed, and the output is `b c d`.

A list's first item is at position 0, not 1, so starting the range at 1 skips it. `len(items)` is 4, so `range(1, 4)` gives 1, 2, 3. The fix is `range(len(items))`, which gives 0, 1, 2, 3, and the better fix is `for item in items:`, which needs no numbers at all and cannot be off by one. Positions come up properly in lesson 6.
:::

## What people get wrong

**Expecting `range(1, 10)` to include 10.** It stops before the stop. Say it out loud once and it sticks.

**Resetting the accumulator inside the loop.** Covered above, and the tell is a total equal to the last item.

**Thinking `for` and `while` are interchangeable.** Anything a `for` does you can force a `while` to do by counting by hand, and you'll introduce an off-by-one doing it. Pick by the shape of the problem.

**Changing a list while looping over it.** Adding to or removing from a list inside a `for` that's walking it produces skipped items and other confusion. Lesson 6 has lists properly and shows this; for now, just don't.

## Practice

:::exercise Two loops
Take 25 minutes over these.

**One. Two loops over the same data.** Given a list of numbers, print how many of them are above the list's own average. This needs two loops rather than one, and working out why is most of the exercise: nothing can be compared with the average until the last number has been seen. Check yours against `[5, 5, 5, 40]`, where the answer is `1`, and be sure you can say why it isn't 3.

**Two. Build up a string.** An accumulator doesn't have to hold a number. Start with `word = ""` and loop over the letters of `"loop"`, and on each pass set `word` to the letter followed by whatever `word` already held. Predict what comes out before you run it. Then work out what changes if you write it the other way round.

**Three. Four plans in one program.** This is the one that matters, and it's harder than it looks. Write a program that reads numbers one per line until the user types `done`, ignores any number below zero and says so when it does, and then reports how many valid readings there were and their average, without crashing if there weren't any.

Every piece is something you've already done: terminate on a sentinel, guard with an `if`, accumulate a total, count. Putting four easy pieces into one program is a separate skill from having the pieces, and it's the thing beginners reliably find hard, so build it in stages rather than all at once. Get it reading and echoing one number first. Then the sentinel. Then the rejection. Then the totals. Then the empty case.

This is the course project in miniature, and you'll meet it again at full size.
:::

If a loop does something you can't explain, step through it in Python Tutor, which shows every name changing on every pass. [Here is the averaging loop above, already loaded](https://pythontutor.com/visualize.html#code=readings%20%3D%20%5B12%2C%207%2C%2019%2C%204%5D%0Atotal%20%3D%200%0Acount%20%3D%200%0A%0Afor%20r%20in%20readings%3A%0A%20%20%20%20total%20%3D%20total%20%2B%20r%0A%20%20%20%20count%20%3D%20count%20%2B%201%0A%0Aprint%28total%20%2F%20count%29&cumulative=false&py=3&rawInputLstJSON=%5B%5D): press Next repeatedly and watch `total` and `count` climb while `r` takes each reading in turn.

## Connections

You've now written `total = total + r` and `count = count + 1` several times, and you'd write them again for the next set of readings, and again after that. Copying three lines around a program is how a small mistake gets into four places at once and is fixed in three of them.

That's the problem the next lesson solves. A function lets you write the averaging once, give it a name, and call it wherever you need it. **The order here is deliberate: you've felt the repetition before being handed the tool that removes it**, because a tool you've wanted is much easier to learn than a tool you've been given.

## Go deeper

- **[The Python tutorial, chapter 4](https://docs.python.org/3/tutorial/controlflow.html)** covers `for`, `range`, `break` and the `else` clause on loops, which is a genuinely odd corner of the language and worth meeting once.
- **[Automate the Boring Stuff, chapter 3](https://automatetheboringstuff.com/3e/chapter3.html)**, free online. Sweigart's loop chapter is the most practical treatment on this list.
- **[Think Python, chapter 7, "Iteration and Search"](https://allendowney.github.io/ThinkPython/chap07.html)**, free online, and it runs in a notebook so there's nothing to install.

## Sources

1. *The Python Tutorial*, chapter 4, "More Control Flow Tools", Python 3.14 documentation. `for`, `range`, `break`, and `while`, and the rule that a range's stop value is excluded. [^1]
2. Al Sweigart, *Automate the Boring Stuff with Python*, 3rd edition, chapter 3, "Loops". Free online under CC BY-NC-SA 3.0, and linked rather than adapted. The source for treating the runaway loop and `Ctrl-C` as a topic a beginner meets early rather than late. [^2]
3. Allen B. Downey, *Think Python*, 3rd edition 2023, chapter 7, "Iteration and Search". Free online under CC BY-NC-SA 4.0, linked rather than adapted. Downey builds the accumulator pattern the same way, setting up before the loop and using after it. [^3]
4. PEP 657, "Include Fine Grained Error Locations in Tracebacks", Python 3.11. The `~~~~~~^~~~~~~` markers under the failing part of a line. [^4]
5. All code output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including the `range()` results, the pass-by-pass table, both tracebacks with their real line numbers, and the reset-inside-the-loop total of 4. Paths in the tracebacks are shown as `/home/you/` in place of the machine's own. [^5]

[^1]: *The Python Tutorial*, 3.14, ch. 4.
[^2]: Sweigart, *Automate the Boring Stuff* 3e, ch. 3.
[^3]: Downey, *Think Python* 3e, ch. 7.
[^4]: PEP 657, as above.
[^5]: Run 10 September 2026.
