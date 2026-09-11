---
title: Lists and dictionaries
minutes: 85
objectives:
  - Build and index a list, and explain why the first item sits at position 0
  - Apply a dictionary to look something up by name rather than by position
  - Explain aliasing, and predict what b = a followed by a change through b does to a
  - Identify an IndexError and a KeyError from the message and name the cause of each
quiz:
  - q: >-
      A program runs "a = [10, 20]", then "b = a", then "b[0] = 99", then prints a. What
      appears?
    options:
      - "[10, 20], because b was given a copy at the moment of assignment"
      - "[99, 20], since both names refer to the one list that was changed"
      - "[10, 20, 99], as assigning to an index adds the value to the end"
      - An IndexError, because a list of two has no position numbered 99
    answer: 1
    explain: >-
      b = a made a second name for the same list, so a change through either is visible
      through both: B. A is the expectation most people bring, and copying is what a[:] or
      list(a) is for. C confuses indexing with appending. D reads 99 as a position rather
      than as the value being put there.
  - q: >-
      "items" holds three strings. Which expression reliably gives you the last one, whatever
      the length happens to be?
    options:
      - "items[len(items)], counting to the length and stopping there"
      - "items[3], since three items means the last is numbered three"
      - "items[-1], where a negative counts backwards from the end"
      - "items[last], using the built-in name for the final position"
    answer: 2
    explain: >-
      Negative indices count from the end, and -1 is the last item however long the list is:
      C. A and B are the same off-by-one twice over, and both raise IndexError on a list of
      three, whose positions are 0, 1 and 2. D invents a name that does not exist.
  - q: >-
      You are storing how much each of forty vehicles weighs, and the question you will ask
      is always "what does this registration weigh?". Which shape fits, and why?
    options:
      - A list of weights, because forty numbers are naturally a sequence
      - Two lists kept side by side, so that position n matches in both of them
      - A dictionary keyed by registration, since the lookup is by name not position
      - A string of all forty weights, which can be split apart when needed
    answer: 2
    explain: >-
      The question names the thing rather than its position, which is the signal for a
      dictionary: C. A loses the registrations entirely. B is what people write before they
      meet dictionaries, and it goes wrong the first time one list is sorted or added to. D
      throws away the structure and has to rebuild it on every lookup.
  - q: >-
      A dictionary "stock" has no key "bolts". What does "stock.get('bolts', 0)" give back,
      and how does that differ from "stock['bolts']"?
    options:
      - 0, while the square brackets raise a KeyError on the missing key
      - 0 from both, since get and the brackets are two spellings of one lookup
      - None, because a default cannot be supplied to get as a second argument
      - A KeyError from both, as get only avoids the error on keys that exist
    answer: 0
    explain: >-
      get returns the default you supply when the key is absent; the brackets insist and
      raise KeyError: A. B is the belief that makes counting loops crash on the first word.
      C describes get with one argument, which does give None. D has it backwards: get
      exists precisely to not raise.
  - q: >-
      A function's body is "data = data + [0]" and then "return data". A program sets "nums =
      [1, 2]", calls the function on nums without assigning the result, then prints nums.
    options:
      - "[1, 2, 0], because the function reached the caller's list and extended it"
      - "[0], since the addition replaced the contents with the new single item"
      - "None, which is what the unassigned call left behind in the name nums"
      - "[1, 2], as the function made a new list and rebound its own name to it"
    answer: 3
    explain: >-
      data = data + [0] builds a new list and points the function's own name at it, leaving
      the caller's list untouched: D. A is what .append(0) would have done, and the gap
      between those two lines is this lesson's hardest idea. B misreads + on lists. C
      confuses the value of the call with the value of nums.
---

You have been using lists for two lessons without being told what one is. Lesson 4's collector called `.append()`, and lesson 5 handed `[12, 7, 19, 4]` to a function. Both worked. Neither was explained, because a list is easier to meet than to define.

Now it gets explained, along with the other shape you need, and along with the one idea in this course that a careful programmer can still get wrong after ten years.

## A list, and the counting

```
readings = [12, 7, 19, 4]
print(readings[0])
print(readings[3])
print(readings[-1])
print(readings[1:3])
print(len(readings))
```

```
12
4
4
[7, 19]
4
```

Square brackets make a list and square brackets take things out of it. `readings[0]` is the first item, because **positions are counted from 0**, not from 1.

That looks like a needless cruelty until you see what it buys. An index is an offset from the start, so the first item is nought steps in. It also makes `readings[1:3]` behave: a slice runs from the first number up to but not including the second, exactly as `range(1, 3)` did in lesson 4, so `[1:3]` gives you two items and `[0:2]` followed by `[2:4]` covers the whole list with nothing missed and nothing repeated. One rule, applied everywhere, rather than four special cases.

`readings[-1]` counts backwards, and is how you ask for the last item without knowing how long the list is. That matters, because the obvious way of asking is wrong:

```
>>> readings[len(readings)]
```

```
Traceback (most recent call last):
  File "/home/you/readings.py", line 7, in <module>
    print(readings[len(readings)])
          ~~~~~~~~^^^^^^^^^^^^^^^
IndexError: list index out of range
```

`len(readings)` is 4, and the positions are 0, 1, 2 and 3. The last is `len(readings) - 1`, or simply `-1`. `IndexError` is the sixth error in this course and it means one thing only: you asked for a position that is not there.

A list is **mutable**, which means it can be changed after it is made. `.append(x)` puts one item on the end, `.clear()` empties it, and assigning to a position replaces what was there. That property is convenient, and it is also the source of the next section, which is the whole reason this lesson exists.

## Two names, one list

:::predict A program runs `a = [1, 2, 3]`, then `b = a`, then `b.append(4)`, then prints both. What does each one show?
Both show `[1, 2, 3, 4]`.

```
a is [1, 2, 3, 4]
b is [1, 2, 3, 4]
```

If you expected `a` to still be `[1, 2, 3]`, you have the belief that `b = a` copies. It does not, and almost everyone holds that belief until a program built on it goes wrong.
:::

Here is the rule from lesson 2 again, because it has not changed and does not need to: **`=` makes the name on the left refer to the value on the right.** `b = a` does not copy anything. It works out what `a` is worth, which is a particular list sitting in memory, and points `b` at that same list. Two names, one list. Change it through either name and the change is simply there, because there is only one thing to change.

This is called **aliasing**, and it is the single most consequential idea in the lesson.

Now compare it with the numbers from lesson 2:

```
x = 3
y = x
x = 10
print("x is", x, "and y is", y)
```

```
x is 10 and y is 3
```

Nothing shared there. The difference is not that numbers behave by one rule and lists by another. The rule is identical. The difference is what was done on the third line.

`x = 10` is an **assignment**: it points `x` at a different value and leaves `y` pointing where it always did. `b.append(4)` is a **mutation**: it changes the thing itself, and every name pointing at that thing sees the change. Integers and strings are immutable, so a mutation is not even possible on them, and assignment is all you ever do. Lists are mutable, so both are available and you have to know which one you just wrote.

When you want an actual copy, ask for one:

```
a = [1, 2, 3]
b = a[:]
b.append(4)
print("a is", a)
print("b is", b)
print(a == b, a is b)
```

```
a is [1, 2, 3]
b is [1, 2, 3, 4]
False False
```

`a[:]` is a slice with both ends left off, meaning the whole thing, and slicing a list makes a new one. `list(a)` does the same and reads better. And that last line is the only honest use of `is` you will meet: `==` asks whether two lists hold equal items, `is` asks whether they are the same object. On identical lists in different boxes, `==` is `True` and `is` is `False`.

[Open this in Python Tutor](https://pythontutor.com/visualize.html#code=a%20%3D%20%5B1%2C%202%2C%203%5D%0Ab%20%3D%20a%0Ab.append%284%29%0A%0Ac%20%3D%20%5B1%2C%202%2C%203%5D%0Ad%20%3D%20c%5B%3A%5D%0Ad.append%284%29%0A&cumulative=false&py=3&rawInputLstJSON=%5B%5D) and look at the arrows rather than the values. The first pair has two arrows into one box. The second has two boxes. That picture is worth more than this section.

### What this does to functions

Lesson 5 told you a function cannot change a name outside itself. That is still true, and it is now only half the story:

```
def wipe(items):
    items.clear()

def replace(items):
    items = []

a = [1, 2, 3]
replace(a)
print("after replace:", a)
wipe(a)
print("after wipe:", a)
```

```
after replace: [1, 2, 3]
after wipe: []
```

`replace` rebinds its own parameter and the caller's list is untouched, exactly as lesson 5 said. `wipe` reaches the same list through the same aliasing and empties it. The function still cannot change what the caller's *name* refers to. It can change the *thing* the name refers to, if that thing is mutable and it was handed the thing itself.

So when you pass a list to a function you did not write, it is worth knowing whether that function mutates. The convention helps: a method that returns a new value usually leaves the original alone, and one that returns `None` usually changed something. `sorted(items)` gives you a new sorted list; `items.sort()` gives you `None` and rearranges the list you gave it.

## Looking something up by name

A list answers "what is the *n*th thing". Often the question you actually have is "what is the value *for* this thing", and then you want a **dictionary**:

```
scores = {"ada": 88, "grace": 91, "alan": 74}
print(scores["grace"])
print(len(scores))
scores["katherine"] = 96
print(scores)
```

```
91
3
{'ada': 88, 'grace': 91, 'alan': 74, 'katherine': 96}
```

Curly brackets, and pairs written `key: value`. You look up by key instead of by position, and assigning to a key that is not there adds it rather than raising anything.

Reading a key that is not there is a different matter:

```
>>> scores["linus"]
```

```
Traceback (most recent call last):
  File "/home/you/scores.py", line 6, in <module>
    print(scores["linus"])
          ~~~~~~^^^^^^^^^
KeyError: 'linus'
```

`KeyError` is the seventh and last error of this course, and like `IndexError` it says one thing: you asked for something that is not in there. Note that it quotes the key back at you, which is more help than it sounds, because half the time the key is `"Ada"` and the dictionary has `"ada"`.

Three ways to handle a key that might be missing:

```
print(scores.get("linus"))
print(scores.get("linus", 0))
print("linus" in scores)
```

```
None
0
False
```

`.get(key)` hands back `None` instead of raising. `.get(key, default)` hands back whatever default you name. `in` asks the question directly and gives a `bool` you can put in an `if`.

Looping a dictionary gives you its pairs, if you ask with `.items()`:

```
for name, score in scores.items():
    print(name, score)
```

```
ada 88
grace 91
alan 74
```

Two names on the `for` line, because each pair comes out as two things.

The order is worth being precise about. A dictionary preserves **insertion order**, guaranteed by the language since version 3.7. It is not sorted by key, and it never was:

```
d = {}
d["zebra"] = 1
d["apple"] = 2
print(list(d))
```

```
['zebra', 'apple']
```

If you want it sorted, sort it when you print it. Do not expect the dictionary to have done it for you.

## Counting words

This is the first program in the course that puts four things together at once, and putting easy things together is a different skill from having them.

```
sentence = "the cat sat on the mat the end"
counts = {}
for word in sentence.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
```

```
{'the': 3, 'cat': 1, 'sat': 1, 'on': 1, 'mat': 1, 'end': 1}
```

Four plans, each one already familiar. `.split()` breaks a string into a list of words at the spaces. The `for` walks that list, which is lesson 4. The dictionary accumulates, which is lesson 4's accumulator with a key on it. And `.get(word, 0)` is the guard, which is lesson 3.

The guard is the part that has to be there. Take it out and the program is wrong on its very first word:

```
counts[word] = counts[word] + 1
```

```
Traceback (most recent call last):
  File "/home/you/count.py", line 4, in <module>
    counts[word] = counts[word] + 1
                   ~~~~~~^^^^^^
KeyError: 'the'
```

`counts` starts empty, so the first time a word appears there is nothing to add 1 to. `.get(word, 0)` says: whatever it is worth now, or nought if it is not in there yet. Then add one and put it back.

Notice where the markers point. `~~~~~~^^^^^^` sits under `counts[word]` on the right of the `=`, not under the whole line, which tells you the reading failed rather than the writing. Assigning to a missing key is fine; reading one is not.

:::checkpoint Suppose you wanted the same counts but case-insensitive, so that "The" and "the" are one word. Where in those five lines does the change go, and what is it?
On the loop line: `for word in sentence.lower().split():`.

Lowercase the sentence once, before splitting it, and every word arriving in the loop is already lowercase. The alternative, `counts[word.lower()] = counts.get(word.lower(), 0) + 1`, works but says `.lower()` twice, and two copies of one idea is two places to fix it later. That is lesson 5's argument arriving in a small way.
:::

## What people get wrong

**Expecting `b = a` to copy.** The big one, and worth re-reading the arrows for.

**Off by one at the end.** `items[len(items)]` is always an `IndexError`. Use `-1`, or better, do not index at all: `for item in items:` cannot go out of range.

**Expecting a dictionary to be sorted.** It keeps insertion order, which is a different promise.

**Two lists kept side by side** where one dictionary belongs, so that `names[3]` and `scores[3]` have to stay in step. They will not stay in step. If the natural question is "what is the score for this name", the answer is one dictionary.

:::callout The trap with a default of `[]`
Lesson 5 said a default value is worked out once, when the `def` runs, and promised this would matter when lists arrived. It has arrived.

```
def add_reading(value, log=[]):
    log.append(value)
    return log

print(add_reading(1))
print(add_reading(2))
print(add_reading(3))
```

```
[1]
[1, 2]
[1, 2, 3]
```

There is one list, made when the function was defined, and every call that takes the default gets that same one. This is aliasing again, and it surprises people for years.

The fix is the standard one, and you will see it in real code constantly:

```
def add_reading(value, log=None):
    if log is None:
        log = []
    log.append(value)
    return log
```

Now each call that supplies no log gets a fresh one. `None` as a default, with an `if` at the top, is the idiom for any default that could be mutated.
:::

## Practice

:::exercise Everything at once
Take 30 minutes over these.

**One. Predict, then run.** `nums = [1, 2, 3]`, then `copy = nums`, then `copy[0] = 99`, then `nums[2] = 77`. Write down what both names hold before you run it. This is the same idea as the predict above, arriving by assignment to a position rather than by `.append()`, and if you are confident about one and not the other, that is worth knowing.

**Two. Invert a dictionary.** Given `{"ada": 88, "grace": 91}`, build `{88: "ada", 91: "grace"}` with a loop. Then answer this before moving on: what happens if two people have the same score, and what would you want to happen? There is no single right answer, and choosing deliberately is the exercise.

**Three. All six lessons in one program.** You have a list of names and a dictionary of scores keyed by name. Print the names of everyone scoring above the average.

That needs a function that takes a collection and returns a number, a loop, a condition, a dictionary lookup and a list. It is the whole course. Build it in stages rather than in one go: get the average out first and print it, check it by hand on four numbers, then add the loop that compares. Guard the empty case, because by now you should expect it to be waiting for you.
:::

## Where this leads

Six lessons is not a lot, and it is worth being straight about what is missing rather than letting you find out later.

You have not met **files**, so nothing you write yet survives being closed. You have not met **modules**, so you cannot use the enormous standard library that is the actual reason people reach for Python. You have not met **classes**, **testing**, **regular expressions** or **exception handling with `try`**, which is the tool for dealing with the errors this course has only taught you to read.

Classes in particular are a deliberate omission and not an oversight. Most introductory courses defer them, on the reasoning that objects solve a problem of program organisation that you have not had yet, and that meeting the solution before the problem is how the idea becomes mysterious. You have twice now met the problem first, in lesson 5 and in this exercise. Do it that way with classes too.

Two honest next steps, and they suit different people. **[CS50P](https://cs50.harvard.edu/python/)** is Harvard's ten-week version, free, with graded problem sets, and it reaches exceptions in week 3 and unit tests in week 5. **[Automate the Boring Stuff](https://automatetheboringstuff.com/)** is free online and aims straight at doing something useful with files, spreadsheets and the web. The first is the academic route and the second is the practical one.

:::callout Before you install anything
Two things that a course of this length can only warn you about, and both are real.

**`pip install` runs code from the internet on your machine, at the moment of installing.** A package can execute arbitrary code during its own installation, so a mistyped package name is not a typo, it is an execution. Typosquatting on the Python Package Index is an active and ongoing campaign rather than a theoretical risk, and PyPI now flags likely typosquats when a project is created. Read the name twice before you press Enter, and get it from the project's own documentation rather than from memory.

**Use a virtual environment.** Your operating system may depend on its own Python, and installing packages into it can break things that have nothing to do with you. `venv` is built in and exists for exactly this. [The tutorial's chapter 12](https://docs.python.org/3/tutorial/venv.html) is three pages and is the thing to read before your first `pip install`, not after it.
:::

One last thing, because you may be deciding whether to carry on in Python at all. Python is a good first language and it is not objectively the best one, and people who have thought about this seriously disagree. What it gives you is little syntactic ceremony, so you spend your attention on the ideas. What it costs you is that its types are checked as the program runs rather than before, so a mistake sits quietly in a branch you have not tested until the day that branch runs. That is not a small cost, and it is precisely why this course put a traceback in lesson 1 and gave you a new error in every lesson since. In a language that checks more before running, you would have met fewer of those, and later.

You have met seven: `SyntaxError`, `NameError`, `TypeError`, `ValueError`, `ZeroDivisionError`, `IndexError` and `KeyError`. Plus `KeyboardInterrupt` from lesson 4, which is not a mistake at all but the trace left when you stop a runaway program yourself. Those seven are most of what a beginner's traceback ever says. Reading them is the skill this course was really teaching.

## Go deeper

- **[The Python tutorial, chapter 5, "Data Structures"](https://docs.python.org/3/tutorial/datastructures.html)** for lists, list methods, slicing and dictionaries, and the list comprehension, which is the compact loop you will see everywhere and which this course deliberately skipped.
- **[Think Python, chapter 9, "Lists"](https://allendowney.github.io/ThinkPython/chap09.html)** and **[chapter 10, "Dictionaries"](https://allendowney.github.io/ThinkPython/chap10.html)**, free online. Downey's treatment of aliasing is the clearest short one there is.
- **[Automate the Boring Stuff, chapters 6 and 7](https://automatetheboringstuff.com/3e/chapter6.html)**, free online, on lists and on structuring data with dictionaries.
- **[Python Tutor](https://pythontutor.com/)** once more. Paste anything from this lesson that surprised you and watch the arrows.

## Sources

1. *The Python Tutorial*, chapter 5, "Data Structures", Python 3.14 documentation. Lists and their methods, slicing, dictionaries, `.get()`, `.items()`, and the statement that a dictionary preserves insertion order. [^1]
2. *The Python Tutorial*, chapter 12, "Virtual Environments and Packages". The source for the `venv` recommendation in the callout above. [^2]
3. Allen B. Downey, *Think Python*, 3rd edition 2023, chapters 9 and 10. Free online under CC BY-NC-SA 4.0, linked rather than adapted. Downey treats aliasing and copying as a named topic rather than a footnote. [^3]
4. Al Sweigart, *Automate the Boring Stuff with Python*, 3rd edition, chapters 6 and 7. Free online under CC BY-NC-SA 3.0, linked rather than adapted. [^4]
5. CS50P, Harvard University, course syllabus. Exceptions in week 3 and unit tests in week 5, cited in "where this leads" as evidence that both are beginner topics rather than advanced ones. [^5]
6. On typosquatting: the Python Package Index publishes guidance and now flags likely typosquats at project creation, and 2025 saw repeated malicious-package incidents reported by security vendors. The callout states only what is not in dispute, that installation can execute code and that the campaign is ongoing. No download or incident figure is quoted, because the figures available to this session came from summaries rather than from the primary reports. [^6]
7. All code and output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including all three tracebacks, the word counts, the aliasing results and the mutable-default sequence. Paths in the tracebacks are shown as `/home/you/` in place of the machine's own. [^7]

[^1]: *The Python Tutorial*, 3.14, ch. 5.
[^2]: *The Python Tutorial*, 3.14, ch. 12.
[^3]: Downey, *Think Python* 3e, chs. 9 and 10.
[^4]: Sweigart, *Automate the Boring Stuff* 3e, chs. 6 and 7.
[^5]: CS50P syllabus, cs50.harvard.edu/python.
[^6]: See SOURCES.md, "Safety-critical guidance", for what was and was not verified.
[^7]: Run 10 September 2026.
