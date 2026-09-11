---
title: Names and values
minutes: 60
objectives:
  - Explain what the equals sign does, in terms of names and values rather than equality
  - Predict what each name is worth after a sequence of assignments
  - Identify the type of a value, and explain why "2" + "2" is "22"
  - Apply int() and float() to convert what input() hands back
quiz:
  - q: >-
      A program runs these three lines in order: score = 10, then best = score, then
      score = 99. What is best worth afterwards?
    options:
      - 99, because best was pointed at score and score changed
      - 10, because best was given the value score had at that moment
      - Nothing, because best was never assigned a value of its own
      - It depends on whether the lines were run in a file or at the prompt
    answer: 1
    explain: >-
      Line 2 evaluates the right side first, gets 10, and binds best to that value. It does
      not tether best to the name score, so line 3 cannot reach it. The answer is 10.
      Option A is the misconception this lesson exists to break, and it is a reasonable
      guess if you read the equals sign as making two things the same. Option C forgets
      that line 2 is itself an assignment. Option D borrows a real fact about the is
      operator and applies it where it does not belong.
  - q: >-
      A program asks for a quantity with reply = input(), the user types 12, and the next
      line is print(reply * 3). What appears?
    options:
      - 121212, because reply is the text 12 and multiplying text repeats it
      - 36, since Python reads a number when the user types one
      - An error, because a string cannot be multiplied at all
      - 12 3, with the two values printed side by side
    answer: 0
    explain: >-
      input() always hands back a string, whatever it looks like, so reply is "12" and not
      12. Multiplying a string by a whole number is legal in Python and repeats it, giving
      "121212". That is the trap: this line does not crash, so nothing tells you anything
      is wrong. Option B is the belief being corrected. Option C is right that something is
      odd here and wrong about what Python allows. Option D describes no Python operation.
  - q: >-
      A program works out 0.7 + 0.1 and checks whether the result equals 0.8. The check comes
      back False and the figures are right. What should the programmer change?
    options:
      - Print the result first, which settles the value at one decimal place
      - Run float() over both numbers before adding them, to make the types agree
      - Compare round(total, 2) with 0.8 instead, or hold the amounts as whole units
      - Nothing, because a machine that gets this wrong has a fault and needs replacing
    answer: 2
    explain: >-
      0.7 + 0.1 comes to 0.7999999999999999, so the check is correctly reporting that the
      two sides differ. Neither number can be written exactly in binary, and the gaps
      survive the addition. Rounding before you compare, or counting in whole pence rather
      than pounds, both fix it, which makes C the answer. Option A confuses how a number is
      displayed with what it is worth. Option B changes nothing, since both are floats
      already. Option D blames the hardware for arithmetic every machine does the same way.
  - q: >-
      You write total = "5" + 3 and run it. What happens, and when?
    options:
      - It prints 8, because Python converts the text to a number
      - It prints 53, because Python converts the number to text
      - A SyntaxError before anything in the file runs at all
      - A TypeError, found while the program is running that line
    answer: 3
    explain: >-
      The line is perfectly good Python grammar, so it parses and the program starts. It
      fails when Python tries to carry out the addition and finds a string on one side and
      an int on the other: TypeError. Note which of lesson 1's two kinds of failure this
      is, the sort found before the program runs or the sort found while it is running,
      and what that tells you about output appearing beforehand. Options A and B both
      assume Python guesses which conversion you meant; refusing to guess is the design.
      Option C is the wrong error, and the wrong moment.
  - q: >-
      A program adds 250 and 250 and then checks "if total is 500:". The branch never runs,
      even though the total really is 500. The same style of check passed in a small test
      that added 2 and 3. What has gone wrong?
    options:
      - The addition produced a float, so the value is 500.0 and the check misses it
      - The freshly computed 500 is a new object, while tiny numbers happen to be shared
      - is compares the values correctly but ignores their types, so it fails on ints
      - The check needs brackets around 500 before Python will compare it properly
    answer: 1
    explain: >-
      is asks whether two things are the same object, not whether they are equal. Python
      keeps one shared object for every small integer, so 2 + 3 hands back the same 5 the
      literal refers to and the test passes by luck. A computed 500 is a new object, so the
      check fails, which is B. == would have been right both times, and Python warns about
      this exact line: "SyntaxWarning: is with int literal. Did you mean ==?". Option A is a
      real bug in other situations but int plus int gives an int. Options C and D describe
      rules Python does not have.
---

Your programs so far run from top to bottom and forget everything, which is the whole limit on
what they can do. This lesson gives them a memory. It rests on one small idea that almost everyone
misreads the first time, which is what the equals sign actually does.

## The equals sign is an instruction

```
savings = 250
```

Read that out loud as "savings gets 250", not "savings equals 250". It's a command, not a
statement of fact. It tells Python to do two things, in a fixed order:

1. Work out what is on the right, completely.
2. Make the name on the left refer to that result.

Right side first, then bind. That order is all there is to it, and once you have it, the line
beginners most object to stops being strange:

```
total = total + 5
```

As a claim about arithmetic it's nonsense, and people say so. As an instruction it's
straightforward. Work out the right side, which needs the value `total` has right now, say 20, and
comes to 25. Then make `total` refer to 25. The old value is replaced, not amended.

:::predict Three lines run in order: `a = 3`, then `b = a`, then `a = 10`. What is `a` worth at the end, and what is `b` worth?

`a` is 10 and `b` is 3.

Line 2 does the two steps: work out the right side, which is the value 3, and bind `b` to it. It
doesn't connect `b` to the name `a`. There's no thread running between them for line 3 to tug on.
So when `a` is rebound to 10, `b` is unaffected, and still 3.

Hold on to this one, because it will matter a great deal in lesson 6, where lists behave differently
and the difference has a precise cause.
:::

That question, "what is each name worth right now", is the one you'll ask about your own code
more than any other. When you can't answer it, put the program into
[Python Tutor](https://pythontutor.com/), which runs it a line at a time and draws every name and
value on screen.

## Four kinds of value

Every value in Python has a type, and the type decides what the operators do to it. Four of them
carry this whole course.

| Type | What it is | Examples |
| --- | --- | --- |
| `int` | a whole number | `250`, `0`, `-7` |
| `float` | a number that can have a fraction | `1.5`, `0.1`, `-3.0`, `1e6` |
| `str` | text, always in quotes | `"hello"`, `"250"`, `""` |
| `bool` | one of exactly two values | `True`, `False` |

You can ask about any value with `type()`:

```
>>> type(250)
<class 'int'>
>>> type("250")
<class 'str'>
```

Those two aren't the same thing, and the difference isn't cosmetic. `250` is a quantity you can
do arithmetic with. `"250"` is three characters that happen to look like one.

Watch what `+` does to each:

```
>>> 2 + 2
4
>>> "2" + "2"
'22'
```

`+` isn't being inconsistent. It means "add" for numbers and "join end to end" for text, and it
picks by looking at what it's been given. So there is no arithmetic in the second line at all; it glues two
characters together and hands you the result.

`*` makes the same kind of choice. Between two numbers it multiplies; between text and a whole
number it repeats:

```
>>> "ab" * 3
'ababab'
```

That one's worth remembering, because it means a program can do something entirely reasonable
with text you thought was a number, and never complain.

## Getting something in from outside

`input()` shows a prompt, waits for the person to type a line, and hands back what they typed.
Here's the part that catches everyone:

```
>>> reply = input("How many? ")
How many? 7
>>> type(reply)
<class 'str'>
```

`input()` always gives you a string. Always. It doesn't look at what was typed and decide. Even
when the user types 7 and means seven, you get the one-character text `"7"`.

:::checkpoint A program asks `age = input("How old are you? ")` and the user types `41`. What is `age` worth, and what type is it?

`age` is the string `"41"`, not the number 41. It looks like a number and it's two characters
of text. Anything you try to do with it arithmetically will fail or, worse, quietly do the wrong
thing: `age * 2` gives `"4141"` rather than 82. That's the repeating `*` from a moment ago, doing
exactly what it was asked.
:::

So this program is broken:

```
year = input("Year you were born: ")
print(2026 - year)
```

```
Year you were born: 1999
Traceback (most recent call last):
  File "/home/you/age.py", line 2, in <module>
    print(2026 - year)
          ~~~~~^~~~~~
TypeError: unsupported operand type(s) for -: 'int' and 'str'
```

Read that the way lesson 1 taught you: bottom line first. `TypeError` means the types were wrong
for the operation. The message names both of them and even names the operator, `-`. Python's telling
you it has an `int` on one side and a `str` on the other and won't guess which one you meant to
convert. (The squiggles marking the failing part of the line arrived in Python 3.11, so on an older
one you'll see the same error without them.)

That refusal to guess is deliberate, and Python states it as a principle:
[*explicit is better than implicit*](https://peps.python.org/pep-0020/), the second line of the
Zen of Python.[5] You can read the whole thing by running `import this`.

Notice, too, that the prompt appeared on screen before the traceback. The program ran, and then
it failed. That makes this the second kind of error from lesson 1, the sort found during the run
rather than before it.

The fix is to convert, with `int()` for whole numbers or `float()` for numbers with a decimal
point:

```
year = int(input("Year you were born: "))
print(f"You turn {2026 - year} this year.")
```

```
Year you were born: 1999
You turn 27 this year.
```

Read `int(input(...))` from the inside out. `input()` runs first and produces `"1999"`. Then `int()`
takes that and produces the number `1999`.

The `f` before the opening quote makes it an **f-string**. Anything in curly brackets inside it is
worked out and dropped into the text. Without the `f` you'd get the literal characters
`{2026 - year}` printed, which is a mistake worth making once so you recognise it next time.

:::checkpoint A user is asked for a price and types `4.50`. Which conversion do you want, and what goes wrong if you pick the other one?

You want `float("4.50")`, which gives `4.5`. `int("4.50")` doesn't round it down; it raises
`ValueError: invalid literal for int() with base 10: '4.50'`, because `int()` won't accept text
containing a decimal point at all. We'll meet `ValueError` properly in the next lesson.
:::

## A number that is not quite the number

:::predict Before you type it, what do you expect `0.1 + 0.2 == 0.3` to give?

`False`. The sum comes out as `0.30000000000000004`, so the two sides really are different, and
Python is reporting that honestly. The reason is below.
:::

Now try it:

```
>>> 0.1 + 0.2
0.30000000000000004
>>> 0.1 + 0.2 == 0.3
False
```

This isn't a bug in Python, and it isn't a bug in your machine. `float` values are stored as
binary fractions, and one tenth cannot be written exactly in binary, in the same way that one third
cannot be written exactly in decimal. You'd need 0.333... forever. So `0.1` is stored as something
extremely close to a tenth, and the tiny gaps add up.

Two ways to live with it. Compare with a tolerance, using `round()`:

```
>>> round(0.1 + 0.2, 2) == 0.3
True
```

Or, when the values are money, work in whole units of the smallest denomination. Count pence rather
than pounds, cents rather than dollars, and use `int` throughout, which sidesteps the problem
instead of managing it. Python also ships a
[`decimal` module](https://docs.python.org/3/library/decimal.html) that does base-ten arithmetic
exactly, at the cost of being slower and wordier. Either is a real answer. `float` for money is
not.

This isn't Python's problem, either. It's the behaviour of IEEE 754 binary64, the number format
nearly every language reaches for when it needs decimals, so C, Java and JavaScript all print the
same thing. If you want the full story, the official documentation has
[a whole chapter on it](https://docs.python.org/3/tutorial/floatingpoint.html).

## What people get wrong

**Reading `=` as a claim of equality.** This is where nearly every confusion in this lesson starts.
It's an instruction, and the order is right side first.

**Expecting `b = a` to keep tracking `a`.** It doesn't, as you predicted above. It copies the
value across once, and after that nothing you do to `a` reaches `b`.

**Expecting `input()` to notice a number.** It never does. If you want a number, say so with
`int()` or `float()`.

**Expecting `"2" + "2"` to be 4.** The `+` looks at what it's given. Two strings get joined.

**Using `is` when you mean `==`.** This one deserves its own demonstration, because the usual
advice ("`is` sometimes works by accident on small numbers") understates it. Put these three lines
in a file, and then, separately, type the same three lines at the `>>>` prompt:

```
c = 257
d = 257
print(c is d)
```

:::predict Do the file and the prompt print the same answer?

No. Run the file and you get `True`. Type exactly the same three lines at the prompt, one at a
time, and you get `False`.
:::

Nothing about the numbers changed. `is` doesn't ask whether two values are equal. It asks whether
they are the same object, and whether Python bothered to reuse one object here depends on how your
code was compiled, which in turn depends on whether you ran a file or typed at the prompt.

Now try it with 5 instead of 257 and you get `True` both ways, because CPython keeps a single
shared object for every small integer and hands the same one out each time. So the answer moves
with the size of the number *and* with how you ran the code. Those are implementation details you
should never have to think about, and a comparison whose answer depends on them isn't a
comparison you can build on.

So use `==` to compare values. Use `is` only with `None`, where "the same object" is what you
actually mean, and where the answer never depends on how you ran the code.

:::callout Naming things
Names can hold letters, digits and underscores, and can't start with a digit. Python's convention
is `snake_case`: lower case, words joined by underscores, so `total_price` rather than `totalPrice`
or `TotalPrice`. It's in [PEP 8](https://peps.python.org/pep-0008/), the style guide the whole Python world
follows, and since you're choosing names anyway, you may as well choose them this way from the start.

One trap worth knowing now: don't name your own file `random.py`, `string.py` or `email.py`.
Python looks for your file first and finds it instead of the real library, and the error you get
won't make any sense at all.
:::

## Practice

:::exercise Write two small programs
Take 25 minutes over these. Run each one, and when it fails, read the last line of the traceback
before you change anything.

**One. A unit converter.** Ask for a distance in miles, then print it in kilometres and in metres.
One mile is 1.609344 kilometres. Use an f-string so the output reads as a sentence rather than a
bare number. You'll need `float()` rather than `int()`, and it's worth typing `1.5` at the
prompt to see why.

**Two. A predict-then-check.** Before running this, write down what you think each `print` shows.
Then run it.

```
x = 5
y = x
x = x + 1
print(x)
print(y)
print("x" + "y")
print(str(x) + str(y))
```

If the last two lines surprised you, that's the "two kinds of plus" idea from the middle of this
lesson, and `str()` is the conversion going the other way from `int()`.
:::

## Connections

Lesson 1 gave you the loop of run it and read the error. This lesson added `TypeError` to the two
you already knew, and it arrived exactly as lesson 1 said it would, with output on screen before
it, because the file parsed fine and then failed during the run.

Next comes making choices. That needs `bool`, which you met in the type table above and haven't
used yet, and it brings the fourth error, `ValueError`, which is what `int()` raises when the text
it's handed isn't a number at all. The checkpoint above has already shown you one.

## Go deeper

- **[Think Python, chapter 2, "Variables and Statements"](https://allendowney.github.io/ThinkPython/chap02.html)**,
  free online. Allen Downey is unusually careful about the difference between a statement and an
  expression, which is the formal version of the idea this lesson opened with.
- **[The Python tutorial, chapter 15, on floating point](https://docs.python.org/3/tutorial/floatingpoint.html)**.
  Short, and it'll settle the `0.1 + 0.2` question for good.
- **[Python Tutor](https://pythontutor.com/)**. Paste the three-line `a`, `b` example in and step
  through it. Seeing the arrows move is worth more than another paragraph from me.

## Sources

1. *The Python Tutorial*, chapter 3, "An Informal Introduction to Python", and chapter 15,
   "Floating-Point Arithmetic: Issues and Limitations", Python 3.14 documentation. Types, operators,
   and the binary-fraction explanation of `0.1 + 0.2`.
2. PEP 8, *Style Guide for Python Code*. The `snake_case` naming convention.
3. Allen B. Downey, *Think Python*, 3rd edition, 2023, chapter 2, "Variables and Statements". Free
   online under CC BY-NC-SA 4.0. Linked, not adapted.
4. All code output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including
   the `TypeError` traceback and the `is` comparison giving different answers in a file and at the
   prompt.
5. PEP 20, *The Zen of Python*, Tim Peters, 19 August 2004. "Explicit is better than implicit",
   the second of its nineteen lines.

