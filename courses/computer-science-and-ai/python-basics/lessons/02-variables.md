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
      - 36, since Python reads a number when the user types one
      - An error, because a string cannot be multiplied at all
      - 121212, because reply is the text 12 and multiplying text repeats it
      - 12 3, with the two values printed side by side
    answer: 2
    explain: >-
      input() always hands back a string, whatever it looks like, so reply is "12" and not
      12. Multiplying a string by a whole number is legal in Python and repeats it, giving
      "121212". That is the trap: this line does not crash, so nothing tells you anything
      is wrong. Option A is the belief being corrected. Option B is right that something is
      odd and wrong about what Python allows. Option D describes no Python operation.
  - q: >-
      Which of these makes 0.1 + 0.2 == 0.3 evaluate to True?
    options:
      - Nothing does, since floating point makes the two sides differ slightly
      - Rounding both sides to two decimal places before comparing them
      - Printing the result first, which settles the value at two decimals
      - Using float() on each of the three numbers before adding them
    answer: 1
    explain: >-
      A tenth cannot be written exactly in binary any more than a third can in decimal, so
      the sum lands on 0.30000000000000004. Comparing round(0.1 + 0.2, 2) with 0.3 is True.
      Option A is nearly right and gives up one step too early: the values do differ, and
      comparing with a tolerance is the standard fix. Option C confuses how a number is
      displayed with what it is worth. Option D changes nothing, since all three are floats
      already.
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
      an int on the other: TypeError. Note which of the two errors from lesson 1 this is,
      and what that tells you about output appearing beforehand. Options A and B both
      assume Python guesses which conversion you meant; refusing to guess is the design.
      Option C is the wrong error, and the wrong moment.
  - q: >-
      Why should you use == rather than is when comparing two numbers?
    options:
      - Because is asks whether they are the same object, not whether they are equal
      - Because is compares values while == compares the names you gave them
      - Because is is slower to run and reads worse inside a long expression
      - Because is only works on text, and raises an error when given numbers
    answer: 0
    explain: >-
      == asks whether two values are equal, which is almost always the question you have,
      so A. is asks whether they are the same object in memory, and the answer can change
      with how the code was run: c = 257 then d = 257 then c is d gives True in a file and
      False at the prompt. Option B has it exactly backwards. Option C names a cosmetic
      reason for a correctness problem. Option D is simply untrue; is works on anything.
---

Your programs so far run from top to bottom and forget everything. That is the whole limit on what
they can do. This lesson gives them a memory, and that turns out to rest on one small idea that is
almost universally misread on first meeting.

The idea is what the equals sign does.

## The equals sign is an instruction

```
savings = 250
```

Read that out loud as "savings **gets** 250", not "savings equals 250". It is a command, not a
statement of fact. It tells Python to do two things, in a fixed order:

1. Work out what is on the right, completely.
2. Make the name on the left refer to that result.

Right side first, then bind. That order is the whole mechanism, and once you have it, the line
beginners most object to stops being strange:

```
total = total + 5
```

As a claim about arithmetic this is nonsense, and people say so. As an instruction it is
straightforward. Work out the right side, which needs the value `total` has right now, say 20, and
gives 25. Then make `total` refer to 25. The old value is not amended. It is replaced.

:::predict What is each name worth?
Three lines run in order:

```
a = 3
b = a
a = 10
```

What is `a` worth at the end, and what is `b` worth?

`a` is 10 and `b` is 3.

Line 2 does the two steps: work out the right side, which is the value 3, and bind `b` to it. It
does not connect `b` to the name `a`. There is no thread running between them for line 3 to tug on.
So when `a` is rebound to 10, `b` is unaffected, and still 3.

This will matter enormously in lesson 6, where lists behave differently and the difference has a
precise cause.
:::

That question, "what is each name worth right now", is the one you will ask about your own code
more than any other. When you cannot answer it, put the program into
[Python Tutor](https://pythontutor.com/), which runs it a line at a time and draws every name and
value on screen.

## Four kinds of value

Every value in Python has a type, and the type decides what the operators do to it. Four of them
carry this whole course.

| Type | What it is | Examples |
| --- | --- | --- |
| `int` | a whole number | `250`, `0`, `-7` |
| `float` | a number with a decimal point | `1.5`, `0.1`, `-3.0` |
| `str` | text, always in quotes | `"hello"`, `"250"`, `""` |
| `bool` | one of exactly two values | `True`, `False` |

You can ask about any value with `type()`:

```
>>> type(250)
<class 'int'>
>>> type("250")
<class 'str'>
```

Those two are not the same thing, and the difference is not cosmetic. `250` is a quantity you can
do arithmetic with. `"250"` is three characters that happen to look like a quantity.

Watch what `+` does to each:

```
>>> 2 + 2
4
>>> "2" + "2"
'22'
```

`+` is not being inconsistent. It means "add" for numbers and "join end to end" for text, and it
picks by looking at what it has been given. There is no arithmetic in the second line at all.

## Getting something in from outside

`input()` shows a prompt, waits for the person to type a line, and hands back what they typed. Here
is the part that catches everyone:

```
>>> reply = input("How many? ")
How many? 7
>>> type(reply)
<class 'str'>
```

**`input()` always gives you a string.** Always. It does not look at what was typed and decide.
Even when the user types 7 and means seven, you get the one-character text `"7"`.

So this program is broken:

```
year = input("Year you were born: ")
print(2026 - year)
```

```
Traceback (most recent call last):
  File "/home/you/age.py", line 2, in <module>
    print(2026 - year)
          ~~~~~^~~~~~
TypeError: unsupported operand type(s) for -: 'int' and 'str'
```

Read that the way lesson 1 taught: bottom line first. `TypeError` means the types were wrong for
the operation. The message names both of them and even names the operator, `-`. Python is telling
you it has an `int` on one side and a `str` on the other and will not guess which one you meant to
convert.

Notice, too, that the prompt appeared on screen before the traceback. The program ran. This is the
second kind of error from lesson 1, found during the run, not before it.

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
worked out and dropped into the text. Without the `f` you would get the literal characters
`{2026 - year}` printed, which is a mistake worth making once so you recognise it.

:::checkpoint Quick check
A user is asked for a price and types `4.50`. Which conversion do you want, and what goes wrong if
you pick the other one?

You want `float("4.50")`, which gives `4.5`. `int("4.50")` does not round it down; it raises
`ValueError: invalid literal for int() with base 10: '4.50'`, because `int()` will not accept text
containing a decimal point at all. We will meet `ValueError` properly in the next lesson.
:::

## A number that is not quite the number

Try this:

```
>>> 0.1 + 0.2
0.30000000000000004
>>> 0.1 + 0.2 == 0.3
False
```

This is not a bug in Python, and it is not a bug in your machine. `float` values are stored as
binary fractions, and one tenth cannot be written exactly in binary, in the same way that one third
cannot be written exactly in decimal. You would need 0.333... forever. So `0.1` is stored as
something extremely close to a tenth, and the tiny gaps add up.

Two ways to live with it. Compare with a tolerance, using `round()`:

```
>>> round(0.1 + 0.2, 2) == 0.3
True
```

Or, when the values are money, work in whole units of the smallest denomination. Count pence rather
than pounds, cents rather than dollars, and use `int` throughout. That is what real accounting
software does, and it sidesteps the problem instead of managing it.

The official documentation has
[a whole chapter on this](https://docs.python.org/3/tutorial/floatingpoint.html), which tells you
how ordinary the problem is: every language that uses the same number format has it, and most of
them do.

## What people get wrong

**Reading `=` as a claim of equality.** The source of nearly every confusion in this lesson. It is
an instruction, and the order is right side first.

**Expecting `b = a` to keep tracking `a`.** It does not, as you predicted above. It copies the
value across once and the two go their own ways.

**Expecting `input()` to notice a number.** It never does. If you want a number, say so with
`int()` or `float()`.

**Expecting `"2" + "2"` to be 4.** The `+` looks at what it is given. Two strings get joined.

**Using `is` when you mean `==`.** This one deserves its own demonstration, because the usual
advice ("`is` sometimes works by accident on small numbers") understates it. Put these three lines
in a file:

```
c = 257
d = 257
print(c is d)
```

Run the file and you get `True`. Now type exactly the same three lines at the `>>>` prompt, one at
a time, and you get `False`.

Nothing about the numbers changed. `is` does not ask whether two values are equal. It asks whether
they are **the same object**, and whether Python bothered to reuse one object here depends on how
your code was compiled, which depends on whether you ran a file or typed at the prompt. That is the
distinction from lesson 1 showing up somewhere you would never expect it.

So: **use `==` to compare values.** Use `is` only with `None`, where "the same object" is genuinely
what you mean, and where the answer never depends on how you ran the code.

:::callout Naming things
Names can hold letters, digits and underscores, and cannot start with a digit. Python's convention
is `snake_case`: lower case, words joined by underscores, so `total_price` rather than `totalPrice`
or `TotalPrice`. It is in the style guide the whole Python world follows, PEP 8, and it costs
nothing to start with.

One trap worth knowing now: do not name your own file `random.py`, `string.py` or `email.py`.
Python looks for your file first and finds it instead of the real library, and the error you get
will make no sense at all.
:::

## Practice

:::exercise Write two small programs
Take 25 minutes over these. Run each one, and when it fails, read the last line of the traceback
before you change anything.

**One. A unit converter.** Ask for a distance in miles, then print it in kilometres and in metres.
One mile is 1.609344 kilometres. Use an f-string so the output reads as a sentence rather than a
bare number. You will need `float()` rather than `int()`, and it is worth typing `1.5` at the
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

If the last two lines surprised you, that is the "two kinds of plus" idea from the middle of this
lesson, and `str()` is the conversion going the other way from `int()`.
:::

## Connections

Lesson 1 gave you the loop of run it and read the error. This lesson added `TypeError` to the two
you already knew, and it arrived in the way lesson 1 predicted: with output on screen before it,
because the file parsed fine and failed during the run.

Next comes making choices. That needs `bool`, which you met in the type table above and have not
used yet, and it brings the fourth error, `ValueError`, which is what `int()` raises when the text
it is handed is not a number at all. The checkpoint above has already shown you one.

## Go deeper

- **[Think Python, chapter 2, "Variables and Statements"](https://allendowney.github.io/ThinkPython/chap02.html)**,
  free online. Allen Downey is unusually careful about the difference between a statement and an
  expression, which is the formal version of the idea this lesson opened with.
- **[The Python tutorial, chapter 15, on floating point](https://docs.python.org/3/tutorial/floatingpoint.html)**.
  Short, and it will settle the `0.1 + 0.2` question for good.
- **[Python Tutor](https://pythontutor.com/)**. Paste the three-line `a`, `b` example in and step
  through it. Seeing the arrows move is worth more than another paragraph from me.

## Sources

1. *The Python Tutorial*, chapter 3, "An Informal Introduction to Python", and chapter 15,
   "Floating-Point Arithmetic: Issues and Limitations", Python 3.14 documentation. Types, operators,
   and the binary-fraction explanation of `0.1 + 0.2`. [^1]
2. PEP 8, *Style Guide for Python Code*. The `snake_case` naming convention. [^2]
3. Allen B. Downey, *Think Python*, 3rd edition, 2023, chapter 2, "Variables and Statements". Free
   online under CC BY-NC-SA 4.0. Linked, not adapted. [^3]
4. All code output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including
   the `TypeError` traceback and the `is` comparison giving different answers in a file and at the
   prompt. [^4]

[^1]: *The Python Tutorial*, 3.14, chapters 3 and 15.
[^2]: PEP 8, as above.
[^3]: Downey, *Think Python* 3e, ch. 2.
[^4]: Run 10 September 2026.
