---
title: Lists and dictionaries
minutes: 95
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
      A program stops with "KeyError: 'plum'", and the line above the message is
      "total = total + prices[item]", with the markers pointing at "prices[item]". What went
      wrong, and where should you look first?
    options:
      - A word in the thing being looped over is absent from the dictionary
      - The dictionary is empty, since a lookup on it found nothing at all
      - A key was added twice, and the duplicate is what the message reports
      - The total was never set to zero before the loop that adds to it began
    answer: 0
    explain: >-
      KeyError names the key it could not find, so look for 'plum' in whatever is being
      looped over and ask why the dictionary has no entry for it: A. B would fail on the
      first item, not on one in particular. C is not an error at all, since assigning to an
      existing key replaces it. D gives a NameError, and a different line.
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
      [1, 2]", calls the function on nums without assigning the result, then prints nums. What
      appears?
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

You've been using lists for two lessons without being told what one is. Lesson 4's collector called `.append()`, and lesson 5 handed `[12, 7, 19, 4]` to a function. Both worked. Neither was explained, because a list is easier to meet than to define.

Now you get the explanation, along with the other shape you'll need, and along with one idea that experienced programmers still trip over.

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

Square brackets make a list, and square brackets take things out of it. `readings[0]` is the first item, because **positions are counted from 0**, not from 1.[^1]

That looks like a needless cruelty until you see what it buys you. An index is an offset from the start, so the first item is nought steps in. It also makes `readings[1:3]` behave: a slice runs from the first number up to but not including the second, exactly as `range(1, 3)` did in lesson 4, so `[1:3]` gives you two items, and `[0:2]` followed by `[2:4]` covers the whole list with nothing missed and nothing repeated. That's one rule doing the work of four special cases.

`readings[-1]` counts backwards, and it's how you ask for the last item without knowing how long the list is. That matters, because the obvious way of asking is wrong. Add one more line to the program above:

```
print(readings[len(readings)])
```

```
Traceback (most recent call last):
  File "/home/you/readings.py", line 7, in <module>
    print(readings[len(readings)])
          ~~~~~~~~^^^^^^^^^^^^^^^
IndexError: list index out of range
```

`len(readings)` is 4, and the positions are 0, 1, 2 and 3. So the last one is `len(readings) - 1`, or simply `-1`. `IndexError` is the sixth error in this course, and lesson 1 promised you'd meet it properly once lists arrived. Here it is, and it means one thing only: you asked for a position that isn't there. (This traceback, like every output in this lesson, was pasted from a run on CPython 3.14.7.[^7])

Read it from the bottom as usual. The last line names the fault. Above it, line 7 and the source line, and under that the markers `~~~~~~~~^^^^^^^^^^^^^^^`, with the carets sitting under `len(readings)`, which is the part that produced the position Python couldn't find.

A list is **mutable**, which means you can change it after it's made. `.append(x)` puts one item on the end, `.clear()` empties it, and assigning to a position replaces what was there.[^1] That's convenient, and it's also where the next section comes from.

## Two names, one list

:::predict A program runs `a = [1, 2, 3]`, then `b = a`, then `b.append(4)`, then prints both. What does each one show?
Both show `[1, 2, 3, 4]`.

```
a is [1, 2, 3, 4]
b is [1, 2, 3, 4]
```

If you expected `a` to still be `[1, 2, 3]`, you hold the belief that `b = a` copies. It doesn't, and almost everyone holds that belief until a program built on it goes wrong.
:::

Here's the rule from lesson 2 again, because it hasn't changed and doesn't need to: **`=` makes the name on the left refer to the value on the right.** `b = a` doesn't copy anything. It works out what `a` is worth, which is a particular list sitting in memory, and points `b` at that same list. Two names, one list. Change it through either name and the change is simply there, because there's only one thing to change. This is called **aliasing**.

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

Nothing shared there. You might think numbers follow one rule and lists another. They don't; the rule is identical, and what differs is the third line.

`x = 10` is an **assignment**: it points `x` at a different value and leaves `y` pointing where it always did. `b.append(4)` is a **mutation**: it changes the thing itself, and every name pointing at that thing sees the change. Integers and strings are immutable, so a mutation isn't even possible on them, and assignment is all you ever do. Lists are mutable, so both are available, and you have to know which one you just wrote.

When you want an actual copy, ask for one:

```
a = [1, 2, 3]
b = a[:]
print(a == b, a is b)
b.append(4)
print("a is", a)
print("b is", b)
print(a == b, a is b)
```

```
True False
a is [1, 2, 3]
b is [1, 2, 3, 4]
False False
```

`a[:]` is a slice with both ends left off, meaning the whole thing, and slicing a list makes a new one. `list(a)` does the same and reads better.

The two comparison lines are the point. Straight after the copy, `a == b` is `True` and `a is b` is `False`: equal contents, different boxes. That gap is exactly what `b = a` didn't give you, and it's what `is` is actually asking. `==` compares what's in the lists; `is` asks whether there's one list or two. After the append, even `==` goes false, because now the contents differ too.

Lesson 2 told you to use `==` and to keep `is` for `None`, and that rule stands: `is None` is the test you'll write. This is the other thing `is` is for, and you'll read it far more often than you write it.

The difference is easier to see drawn than described. A name isn't a box; it's an arrow pointing at one.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344 286" role="img" aria-labelledby="alias-title alias-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="alias-title">Two names sharing one list, against two names with a list each</title>
  <desc id="alias-desc">Two diagrams. In the upper one, after b = a and then b.append(4), the names a and b both have arrows pointing at a single box holding the list 1, 2, 3, 4. In the lower one, after b = a slice of a and then b.append(4), the name a points at a box holding 1, 2, 3 and the name b points at a separate box holding 1, 2, 3, 4.</desc>
  <text x="2" y="16" font-size="16" font-weight="700" fill="var(--text, #111418)">After b = a, then b.append(4)</text>
  <rect x="3" y="30" width="46" height="30" rx="4" fill="var(--surface-2, #f3f5f8)" stroke="var(--line-strong, #b9c1cd)" stroke-width="2"/>
  <text x="26" y="51" font-size="16" text-anchor="middle" fill="var(--text, #111418)">a</text>
  <rect x="3" y="76" width="46" height="30" rx="4" fill="var(--surface-2, #f3f5f8)" stroke="var(--line-strong, #b9c1cd)" stroke-width="2"/>
  <text x="26" y="97" font-size="16" text-anchor="middle" fill="var(--text, #111418)">b</text>
  <line x1="51" y1="45" x2="152" y2="58" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="160,60 148,53 149,63" fill="var(--text-2, #4a5260)"/>
  <line x1="51" y1="91" x2="152" y2="78" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="160,76 149,73 148,83" fill="var(--text-2, #4a5260)"/>
  <rect x="162" y="50" width="178" height="36" rx="4" fill="var(--surface, #ffffff)" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <text x="251" y="74" font-size="17" text-anchor="middle" fill="var(--text, #111418)">[1, 2, 3, 4]</text>
  <text x="2" y="132" font-size="15" fill="var(--text-2, #4a5260)">One list. Both names see the change.</text>
  <line x1="2" y1="148" x2="342" y2="148" stroke="var(--line, #d6dbe3)" stroke-width="1"/>
  <text x="2" y="176" font-size="16" font-weight="700" fill="var(--text, #111418)">After b = a[:], then b.append(4)</text>
  <rect x="3" y="190" width="46" height="30" rx="4" fill="var(--surface-2, #f3f5f8)" stroke="var(--line-strong, #b9c1cd)" stroke-width="2"/>
  <text x="26" y="211" font-size="16" text-anchor="middle" fill="var(--text, #111418)">a</text>
  <rect x="3" y="236" width="46" height="30" rx="4" fill="var(--surface-2, #f3f5f8)" stroke="var(--line-strong, #b9c1cd)" stroke-width="2"/>
  <text x="26" y="257" font-size="16" text-anchor="middle" fill="var(--text, #111418)">b</text>
  <line x1="51" y1="205" x2="152" y2="205" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="160,205 148,200 148,210" fill="var(--text-2, #4a5260)"/>
  <line x1="51" y1="251" x2="152" y2="251" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="160,251 148,246 148,256" fill="var(--text-2, #4a5260)"/>
  <rect x="162" y="189" width="178" height="32" rx="4" fill="var(--surface, #ffffff)" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <text x="251" y="211" font-size="17" text-anchor="middle" fill="var(--text, #111418)">[1, 2, 3]</text>
  <rect x="162" y="235" width="178" height="32" rx="4" fill="var(--surface, #ffffff)" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <text x="251" y="257" font-size="17" text-anchor="middle" fill="var(--text, #111418)">[1, 2, 3, 4]</text>
</svg>

Two names with one arrow each. In the top drawing both arrows land on the same box, so appending through `b` changes what `a` sees, because there's nothing else for `a` to see. In the bottom one the slice made a second box before anything was appended, so the two names have nothing in common but their contents at the moment of copying.

[The same thing, animated, in Python Tutor](https://pythontutor.com/visualize.html#code=a%20%3D%20%5B1%2C%202%2C%203%5D%0Ab%20%3D%20a%0Ab.append%284%29%0A%0Ac%20%3D%20%5B1%2C%202%2C%203%5D%0Ad%20%3D%20c%5B%3A%5D%0Ad.append%284%29%0A&cumulative=false&py=3&rawInputLstJSON=%5B%5D), where you can watch the arrows appear as each line runs.

### What this does to functions

Lesson 5 told you a function can't change a name outside itself. That's still true, and it's now only half the story:

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

:::predict Both functions take the list and do something to it. `replace` sets `items` to a new empty list; `wipe` calls `.clear()` on it. After `replace(a)` and then `wipe(a)`, what does each line print?
```
after replace: [1, 2, 3]
after wipe: []
```

`replace` did nothing that survived the call. `wipe` emptied the caller's list. If you expected both to empty it, or neither, the paragraph below is the one to read twice.
:::

`replace` rebinds its own parameter, and the caller's list is untouched, exactly as lesson 5 said. `wipe` reaches the same list through the same aliasing and empties it. The function still can't change what the caller's *name* refers to. It can change the *thing* the name refers to, when that thing is one that can be changed at all.

So when you pass a list to a function you didn't write, you want to know whether that function mutates. For the built-in list methods there's a rule you can lean on: **the ones that change the list return `None`.** `items.sort()` returns `None` and rearranges the list you gave it, while the separate built-in function `sorted(items)` leaves it alone and hands you a new sorted list. `items.reverse()` against `reversed(items)` works the same way.

The rule has one everyday exception, `.pop()`, which removes the last item and returns it, doing both at once. And it's a rule about the built-in types, not a promise about code someone else wrote. For that, read the function or read its documentation.

:::checkpoint You write `result = items.sort()` and then print `result`. What appears, and where did the sorted list go?
`None` appears. The sorted list is in `items`.

`.sort()` is one of the methods that changes the list, so it returns `None`, and that `None` is what `result` was given. The list itself was rearranged in place. If you wanted a name for a sorted copy and the original left alone, `result = sorted(items)` is the line.
:::

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

Curly brackets, and pairs written `key: value`. You look up by key instead of by position, and assigning to a key that isn't there adds it rather than raising anything.

Reading a key that isn't there is a different matter:

```
print(scores["linus"])
```

```
Traceback (most recent call last):
  File "/home/you/scores.py", line 6, in <module>
    print(scores["linus"])
          ~~~~~~^^^^^^^^^
KeyError: 'linus'
```

`KeyError` is the seventh and last error of this course, and like `IndexError` it says one thing: you asked for something that isn't in there. It quotes the key back at you, which is more help than it sounds. Seeing `'linus'` in the message is how you find out that the key you passed wasn't the key you thought you passed, and a difference of one capital letter is the usual reason.

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

`.get(key)` hands back `None` instead of raising. `.get(key, default)` hands back whatever default you name. `in` asks the question directly and gives you a `bool` you can put in an `if`.[^1]

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

Be precise about the order, because people guess wrong here. A dictionary preserves **insertion order**, and the language has guaranteed that since version 3.7, which is when the behaviour stopped being a detail of how CPython happened to be built and was, in the release notes' own words, ["declared to be an official part of the Python language spec"](https://docs.python.org/3/whatsnew/3.7.html).[^1b] It isn't sorted by key, and it never was:

```
d = {}
d["zebra"] = 1
d["apple"] = 2
print(list(d))
```

```
['zebra', 'apple']
```

If you want it sorted, sort it when you print it, rather than expecting the dictionary to have done it for you.

## Counting words

This is the first program in the course that puts four things together at once, and putting easy things together is a different skill from having them.

That isn't a figure of speech. Computing education has a standard task for testing it, set by Elliot Soloway in the 1980s: read a run of daily rainfall figures, stop at a sentinel, ignore the negative ones, print the average. Every piece is something a beginner can do. Studies have been reporting success rates under twenty per cent on the whole thing ever since, and researchers have spent forty years arguing about why. So if the next program feels harder than the sum of its parts, that's the documented experience of a great many people and not a verdict on you.

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

`counts` starts empty, so the first time a word appears there's nothing to add 1 to. `.get(word, 0)` says: whatever it's worth now, or nought if it isn't in there yet. Then add one and put it back.

Notice where the markers point. `~~~~~~^^^^^^` sits under `counts[word]` on the right of the `=`, not under the whole line, which tells you the reading failed rather than the writing. Assigning to a missing key is fine; reading one is not.

:::checkpoint Suppose you wanted the same counts but case-insensitive, so that "The" and "the" are one word. Where in those five lines does the change go, and what is it?
On the loop line: `for word in sentence.lower().split():`.

Lowercase the sentence once, before splitting it, and every word arriving in the loop is already lowercase. The alternative, `counts[word.lower()] = counts.get(word.lower(), 0) + 1`, works but says `.lower()` twice, and two copies of one idea is two places to fix it later, which is lesson 5's argument arriving in a small way.
:::

## What people get wrong

**Expecting `b = a` to copy.** The big one. If it still feels wrong, go back to the arrows.

**Off by one at the end.** `items[len(items)]` is always an `IndexError`. Use `-1`, or better, don't index at all: `for item in items:` can't go out of range.

**Expecting a dictionary to be sorted.** It keeps insertion order, which is a different promise.

**Two lists kept side by side** where one dictionary belongs, so that `names[3]` and `scores[3]` have to stay in step. They won't stay in step. If the natural question is "what is the score for this name", the answer is one dictionary.

### The trap with a default of `[]`

Lesson 5 said a default value is worked out once, when the `def` runs, and promised this would matter when lists arrived. It has arrived.

```
def add_reading(value, log=[]):
    log.append(value)
    return log

print(add_reading(1))
print(add_reading(2))
print(add_reading(3))
```

:::predict Three calls, each supplying only a value and letting `log` take its default. What do the three lines print?
```
[1]
[1, 2]
[1, 2, 3]
```

Almost nobody predicts this the first time. The expected answer is `[1]`, `[2]`, `[3]`, which is what you'd get if each call started from a fresh empty list.
:::

It doesn't, because there's only one list. It was made once, while Python was reading the `def`, and every call that takes the default is handed that same one. This is aliasing again, wearing its least obvious disguise: the default value and the parameter are two names for one list that outlives every call.

:::callout The fix, which you'll see constantly
```
def add_reading(value, log=None):
    log = [] if log is None else log
    log.append(value)
    return log
```

Now each call that supplies no log gets a fresh one, because `[]` is worked out at the call rather than at the `def`. `None` as the default, with a line at the top that replaces it, is the idiom for any default that could be changed after it's made: a list, a dictionary, or a set.
:::

## Practice

:::exercise Everything at once
Take 30 minutes over these.

**One. Predict, then run.** `nums = [4, 5, 6]`, then `twin = nums`, then `twin[1] = 0`, then `nums[2] = 77`. Write down what both names hold before you run it, and notice that the second change is made through the *other* name. This is the same idea as the predict above, arriving by assignment to a position rather than by `.append()`, and if you're confident about one and not the other, that's something you want to know about yourself.

**Two. Invert a dictionary.** Given `{"ada": 88, "grace": 91}`, build `{88: "ada", 91: "grace"}` with a loop. Then answer this before moving on: what happens if two people have the same score, and what would you want to happen? There's no single right answer, and choosing deliberately is the exercise.

**Three. All six lessons in one program.** You have a list of names and a dictionary of scores keyed by name. Print the names of everyone scoring above the average.

That needs a function that takes a collection and returns a number, a loop, a condition, a dictionary lookup and a list, which is to say the whole course. Build it in stages rather than in one go: get the average out first and print it, check it by hand on four numbers, then add the loop that compares. Guard the empty case, because by now you should expect it to be waiting for you.
:::

## Where this leads

Six lessons isn't a lot, and I'd rather be straight with you about what's missing than let you find out later.

You haven't met **files**, so nothing you write yet survives being closed. You haven't met **modules**, so you can't use the enormous standard library that is the actual reason people reach for Python. You haven't met **classes**, **testing**, **regular expressions** or **exception handling with `try`**, which is the tool for dealing with the errors this course has only taught you to read.

Classes in particular are a deliberate omission and not an oversight. Almost every course and book in this course's research file defers them to the end, and the usual reasoning is that objects solve a problem of program organisation that a beginner hasn't had yet, so meeting the solution first is how the idea becomes mysterious. That reasoning isn't unanimous, and it's more settled for a course like this one, aimed at everybody, than for a first course aimed at computing majors, where the argument is live. You've twice now met the problem first, in lesson 5 and in this exercise, and I'd do it that way with classes too.

Two honest next steps, and they suit different people. **[CS50P](https://cs50.harvard.edu/python/)** is Harvard's ten-week version, free, with graded problem sets, and it reaches exceptions in week 3 and unit tests in week 5.[^5] **[Automate the Boring Stuff](https://automatetheboringstuff.com/)** is free online and aims straight at doing something useful with files, spreadsheets and the web. The first is the academic route and the second is the practical one.

:::callout Before you install anything
Two things that a course of this length can only warn you about, and both are real.

**`pip install` runs code from the internet on your machine, at the moment of installing.** A package can execute arbitrary code during its own installation, so the moment you mistype a package name, whatever lives under the wrong name is already running. Typosquatting on the Python Package Index is an active campaign rather than a theoretical risk. To take one case from August 2025, [security researchers at Zscaler found](https://www.zscaler.com/blogs/security-research/malicious-pypi-packages-deliver-silentsync-rat) a package called **`sisaws`**, one letter away from the real **`sisa`**, which is a library for talking to Argentina's national health information system.[^6] Installing the wrong one delivered a remote access trojan that read saved browser passwords and cookies. One letter. PyPI now flags likely typosquats when a project is created, which helps and isn't a guarantee. Read the name twice before you press Enter, and take it from the project's own documentation rather than from memory.

**Use a virtual environment.** Your operating system may depend on its own Python, and installing packages into it can break things that have nothing to do with you. `venv` is built in and exists for exactly this. [The tutorial's chapter 12](https://docs.python.org/3/tutorial/venv.html) is three pages, and it's the thing to read before your first `pip install`, not after it.[^2]
:::

One last thing, because you may be deciding whether to carry on in Python at all. Python is a good first language and it isn't objectively the best one, and people who have thought about this seriously disagree. What it gives you is little syntactic ceremony, so you spend your attention on the ideas. What it costs you is that its types are checked as the program runs rather than before, so a mistake sits quietly in a branch you haven't tested until the day that branch runs. That isn't a small cost. It's also why this course put a traceback in lesson 1 and gave you six more across the five lessons since: in Python, reading a traceback is the basic skill rather than an advanced one.

The people who disagree deserve a hearing rather than a wave. The case for starting in a language that checks types before it runs, Java being the usual example, is that the compiler catches a whole class of mistake before the program exists, and that writing the types down documents what a function expects to anyone reading it later. On that view Python doesn't remove the difficulty at all; it moves it to a worse place, into a branch nobody has run yet. There's also a case, with research behind it, for starting in a language like Racket, on the grounds that beginners there choose better structures for exactly the kind of multi-plan problem you met in the word counter. Both are serious positions held by people who teach beginners for a living.

You've met seven: `SyntaxError`, `NameError`, `TypeError`, `ValueError`, `ZeroDivisionError`, `IndexError` and `KeyError`. Plus `KeyboardInterrupt` from lesson 4, which isn't a mistake at all but the trace left when you stop a runaway program yourself. Those seven are most of what a beginner's traceback ever says. Reading them is the skill this course was really teaching.

## Go deeper

- **[The Python tutorial, chapter 5, "Data Structures"](https://docs.python.org/3/tutorial/datastructures.html)** for lists, list methods, slicing and dictionaries, and the list comprehension, which is the compact loop you'll see everywhere and which this course deliberately skipped.[^1]
- **[Think Python, chapter 9, "Lists"](https://allendowney.github.io/ThinkPython/chap09.html)** and **[chapter 10, "Dictionaries"](https://allendowney.github.io/ThinkPython/chap10.html)**, free online. Downey gives aliasing its own named section, 9.10, rather than a passing mention.[^3]
- **[Automate the Boring Stuff, chapters 6 and 7](https://automatetheboringstuff.com/3e/chapter6.html)**, free online, on lists and on structuring data with dictionaries.[^4]
- **[Python Tutor](https://pythontutor.com/)** once more. Paste anything from this lesson that surprised you and watch the arrows.

## Sources

1. *The Python Tutorial*, chapter 5, "Data Structures", Python 3.14 documentation. Lists and their methods, slicing, dictionaries, `.get()`, `.items()`, and the statement that a dictionary preserves insertion order. [^1]
1b. *What's New In Python 3.7*, release highlights, for the version at which that ordering became a guarantee: the insertion-order behaviour of `dict` "has been declared to be an official part of the Python language spec". Before 3.7 it was true of CPython and not promised. [^1b]
2. *The Python Tutorial*, chapter 12, "Virtual Environments and Packages". The source for the `venv` recommendation in the callout above. [^2]
3. Allen B. Downey, *Think Python*, 3rd edition 2023, chapters 9 and 10. Free online under CC BY-NC-SA 4.0, linked rather than adapted. Chapter 9 was opened on 10 September 2026 to check this: section 9.10 is titled "Aliasing" and section 9.3 covers copying with both the full slice and `list()`. [^3]
4. Al Sweigart, *Automate the Boring Stuff with Python*, 3rd edition, chapters 6 and 7. Free online under CC BY-NC-SA 3.0, linked rather than adapted. [^4]
5. CS50P, Harvard University, course syllabus. Exceptions in week 3 and unit tests in week 5, cited in "where this leads" as evidence that both are beginner topics rather than advanced ones. [^5]
6. Zscaler ThreatLabz, "Malicious PyPI Packages Deliver SilentSync RAT", 4 August 2025, for the `sisaws` against `sisa` case named in the callout, the legitimate package's purpose, and the browser credential theft the malicious one performed. The Python Package Index publishes its own guidance and now flags likely typosquats at project creation. **No download count or incident total is quoted anywhere in this lesson**, because the figures available when this course was researched came from summaries rather than from primary reports, and SOURCES.md records which. [^6]
7. All code and output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including all three tracebacks, the word counts, the aliasing results and the mutable-default sequence. Paths in the tracebacks are shown as `/home/you/` in place of the machine's own. [^7]

[^1]: *The Python Tutorial*, 3.14, ch. 5.
[^1b]: *What's New In Python 3.7*, docs.python.org/3/whatsnew/3.7.html.
[^2]: *The Python Tutorial*, 3.14, ch. 12.
[^3]: Downey, *Think Python* 3e, chs. 9 and 10.
[^4]: Sweigart, *Automate the Boring Stuff* 3e, chs. 6 and 7.
[^5]: CS50P syllabus, cs50.harvard.edu/python.
[^6]: Zscaler ThreatLabz, 4 August 2025. See also SOURCES.md, "Safety-critical guidance", for what was and was not verified.
[^7]: Run 10 September 2026.
