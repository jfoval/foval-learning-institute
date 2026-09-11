---
title: Making decisions
minutes: 60
objectives:
  - Explain the difference between = and == and recognise what Python says when you confuse them
  - Predict which branch of an if, elif, else chain runs for a given input
  - Apply and, or and not to combine conditions, and explain what short-circuiting protects you from
  - Identify which values Python treats as false without a comparison
quiz:
  - q: >-
      A library fine chain runs "if days > 0: 2 pounds", then "elif days > 7: 5 pounds", then
      "elif days > 30: 10 pounds", then an else. Which fines can a borrower ever actually be
      charged?
    options:
      - Only 2 pounds, or nothing at all if the book came back on time
      - 2, 5 or 10 pounds, since each test catches the band of days above the last one
      - 5 and 10 pounds only, because the wider tests below override the first one
      - Nothing ever, since the three tests overlap and cancel each other out
    answer: 0
    explain: >-
      Any overdue book is at least one day late, so the first test is true and the chain stops
      there. The 5 and 10 pound branches cannot be reached by any number of days at all, which
      makes A the answer. The fix is to test the narrowest band first, 30 then 7 then 0.
      Option B is what the author of this chain intended and not what they wrote. Option C
      inverts how a chain is read. Option D expects an error where the rule is well defined.
  - q: >-
      A list called items holds one value, and i is 3. Which line checks the item safely
      instead of raising IndexError?
    options:
      - "if items[i] > 0 and i < len(items):"
      - "if i < len(items) or items[i] > 0:"
      - "if i < len(items) and items[i] > 0:"
      - "if not i > len(items) or items[i] > 0:"
    answer: 2
    explain: >-
      and abandons the line as soon as it meets something false, so with i past the end the
      test on the left fails and Python never reaches into the list: C is safe. Option A tests
      exactly the same two things in the other order and raises before it ever checks the
      length. Options B and D use or, which only stops early on something true, so a
      failing left side sends Python straight into the lookup.
  - q: >-
      Which of these four values does Python treat as false?
    options:
      - The string "False", since it spells the word out
      - The string " ", a single space, since it looks empty on screen
      - The string "0.0", since the number it spells is zero
      - The float 0.0, since zero is zero whichever type carries it
    answer: 3
    explain: >-
      Only the float is false. The rule is that empty things and zero are false, and the
      first three are all strings with characters in them, so all three are true: D. A space
      is a character even though you cannot see it, which is the one that catches people
      writing a "did they type anything" check. The way to test for a number being zero is to
      compare it, not to lean on truthiness.
  - q: >-
      A program prints two lines of setup and then stops with an error. Could a stray single
      equals sign inside an if be the cause?
    options:
      - "Yes, and it is the likeliest one, since = inside an if is the commonest slip there is"
      - "No, because that fault stops the file parsing, so nothing would have printed first"
      - "Yes, but only if the if came after the two prints rather than before them"
      - "No, because Python silently repairs a single equals sign into a double one"
    answer: 1
    explain: >-
      An assignment inside an if is a parse failure, and parsing covers the whole file before
      any of it runs, so a program with that fault prints nothing at all. Two lines of output
      prove the program started, which rules the cause out entirely: B. That is lesson 1's
      idea that output before an error is evidence about when the fault was found. Options A
      and C accept the diagnosis without weighing the evidence in front of them. Option D
      invents a repair Python never makes.
  - q: >-
      A program must accept whole numbers only and convert them with int(). Which check makes
      that conversion safe?
    options:
      - Testing the string with .isdigit(), which is what digit means
      - Testing the string with .isdecimal(), whose answer matches what int() takes
      - Testing whether the string is longer than zero characters before converting
      - No check is needed, because int() returns zero when it cannot read the text
    answer: 1
    explain: >-
      .isdecimal() accepts exactly the characters int() accepts, so it is the honest guard: B.
      .isdigit() is close and not close enough, because it says yes to a few characters int()
      refuses, superscripts among them, and a guard that lets the error through is worse than
      no guard because you stop looking. Option C checks length, which says nothing about
      content. Option D invents a fallback; int() raises.
---

A program that runs the same lines every time can only do one job. The moment it can look at what it has and choose, it can do many. That's what this lesson adds, and it rests on a type you met in lesson 2 and haven't used yet: `bool`, which has exactly two values.

## A comparison produces a value

Type a comparison at the prompt and look at what comes back:

```
>>> 7 > 3
True
>>> 7 == 3
False
```

`True` and `False` aren't words Python prints for your benefit. They're values, the only two of type `bool`, and you can put them in a name like anything else:

```
>>> is_open = 7 > 3
>>> type(is_open)
<class 'bool'>
```

Six comparison operators, and the one that causes trouble is the first.

| Operator | Means |
| --- | --- |
| `==` | equal to, **two** signs |
| `!=` | not equal to |
| `<` `>` | less than, greater than |
| `<=` `>=` | less than or equal, greater than or equal |

One equals sign is the instruction from lesson 2: make this name refer to this value. Two equals signs ask a question. Confuse them and Python stops you before anything runs:

```
age = 17
if age = 18:
    print("Just old enough.")
```

```
  File "/home/you/vote.py", line 2
    if age = 18:
       ^^^^^^^^
SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?
```

That's lesson 1's first kind of failure: found while parsing, so nothing printed. Python even guesses what you meant, and as before, it doesn't act on the guess.

## Exactly one branch runs

```
score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("F")
```

Python works down the chain, testing each condition in turn, and **the first one that's true wins**. Its block runs and the whole chain is finished: nothing below it is even looked at. If none of them is true, the `else` runs. If there's no `else`, nothing runs, which is allowed.

<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="chain-t">
<title id="chain-t">How an if, elif, else chain runs</title>
<desc>Two tests stacked vertically with an else beneath them. Each test that is false passes control down to the next. The first test that is true runs its own block and the chain stops there, so exactly one of the three outcomes ever happens.</desc>
<rect x="14" y="14" width="196" height="44" rx="6" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
<text x="28" y="42" font-size="16" fill="var(--text, #111418)">if score &gt;= 90</text>
<rect x="14" y="98" width="196" height="44" rx="6" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
<text x="28" y="126" font-size="16" fill="var(--text, #111418)">elif score &gt;= 80</text>
<rect x="14" y="182" width="196" height="44" rx="6" fill="none" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
<text x="28" y="210" font-size="16" fill="var(--text, #111418)">else</text>
<line x1="112" y1="58" x2="112" y2="98" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
<line x1="112" y1="142" x2="112" y2="182" stroke="var(--navy, #0f2a4a)" stroke-width="2"/>
<text x="120" y="82" font-size="15" fill="var(--text-2, #4a5260)">false</text>
<text x="120" y="166" font-size="15" fill="var(--text-2, #4a5260)">false</text>
<line x1="210" y1="36" x2="286" y2="36" stroke="var(--oxblood, #8b1e2d)" stroke-width="2"/>
<line x1="210" y1="120" x2="286" y2="120" stroke="var(--oxblood, #8b1e2d)" stroke-width="2"/>
<line x1="210" y1="204" x2="286" y2="204" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
<text x="228" y="28" font-size="15" fill="var(--oxblood, #8b1e2d)">true</text>
<text x="228" y="112" font-size="15" fill="var(--oxblood, #8b1e2d)">true</text>
<text x="294" y="42" font-size="16" fill="var(--text, #111418)">print("A")</text>
<text x="294" y="126" font-size="16" fill="var(--text, #111418)">print("B")</text>
<text x="294" y="210" font-size="16" fill="var(--text, #111418)">print("F")</text>
</svg>

Only one of the three exits on the right is ever taken. Follow a score of 85: the first test is false, so control drops down the left; the second is true, so it goes right and stops. `print("F")` is never reached, and neither is any test below the one that matched.

:::predict Before you read on
Someone writes the same grader but tests in this order: `score >= 70` first, then `score >= 80`, then `score >= 90`, with `else` at the bottom. A student scores 95. What grade do they get?

`C`. Here it is, run:

```
score = 95

if score >= 70:
    print("C")
elif score >= 80:
    print("B")
elif score >= 90:
    print("A")
```

```
C
```

95 is over 70, so the very first test is true, its block runs, and the chain stops. Python never looks at the tests for 80 and 90, and an `A` is unreachable for any score at all.

Nothing is broken here and no error appears. The chain did exactly what the rules say. **The order of a chain is part of its logic, not a matter of tidiness**, and when the tests overlap you put the narrowest one first.
:::

## Indentation is the syntax

In most languages the indented lines under an `if` are a courtesy to the reader. In Python they're how the language knows which lines the `if` controls. Four spaces is the convention, and it's in [PEP 8](https://peps.python.org/pep-0008/) along with the naming rules from lesson 2.

Get it wrong and you may get an `IndentationError`, which is the friendly outcome. The unfriendly one is a program that runs and quietly does the wrong thing. These two differ by four spaces:

```
temperature = 15

if temperature > 30:
    print("It's hot.")
print("Remember your coat.")
```

```
Remember your coat.
```

Indent that second `print` by four spaces and the same program, on the same input, prints nothing at all, because the line is now inside the `if` and the condition is false. No error either way. The whitespace **is** the logic.

## Combining conditions

Three words join conditions together: `and` needs both sides true, `or` needs at least one, and `not` flips a value.

```
age = 25
has_ticket = True

if age >= 18 and has_ticket:
    print("Come in.")
```

Now the part worth knowing, because it's a mechanism rather than a rule. **Python stops evaluating as soon as the answer is settled.** With `and`, the moment it meets something false the whole thing must be false, so it doesn't bother looking at the right-hand side. That's called short-circuiting, and you can build on it:

```
if n != 0 and total / n > 5:
    print("big")
```

If `n` is zero, the left side is false, Python stops, and the division on the right is never carried out. Swap the two around and the same line raises `ZeroDivisionError`, which lesson 4 will meet properly, on the first zero it meets. The order here isn't a matter of style; it's what makes the line safe.

:::checkpoint Quick check
`or` short-circuits too. On what does it stop early, and what does that mean for `if n == 0 or total / n > 5:`?

`or` stops as soon as it meets something **true**, since one true side settles it. So that line is also safe: when `n` is zero the left side is true, Python stops, and the division never happens. It's the mirror image of the `and` guard, and which one you want depends on whether the dangerous case is the one you're excluding or the one you're catching.
:::

## Things that are false without a comparison

You don't have to write a comparison. Python will take any value and decide whether it counts as true, and the rule is short: **empty things are false, and so is zero.**

```
>>> bool(0), bool(0.0), bool(""), bool([]), bool({}), bool(None)
(False, False, False, False, False, False)
```

Everything else is true. That lets you write this, which reads well:

```
name = input("Your name: ")
if not name:
    print("You didn't type anything.")
```

And it sets one trap that catches nearly everyone.

:::predict Before you read on
A program does `reply = input("How many? ")` and then `if reply:` to check the user typed something. The user types a single `0` and presses Enter. Does the block run?

Yes, it runs.

`input()` hands back the one-character string `"0"`, and a string is false only when it's **empty**. `"0"` has a character in it, so it's true. The number `0` is false; the text `"0"` is not.

```
>>> bool(0)
False
>>> bool("0")
True
```

That's the two-types idea from lesson 2 arriving somewhere you'd never look for it, and it's why a check meant to catch "they typed nothing" quietly accepts a zero.
:::

## A program that has to check its input

Lesson 2 left `int(input(...))` sitting there with a fault in it. If the user types anything that isn't a whole number, the conversion fails:

```
>>> int("seven")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    int("seven")
    ~~~^^^^^^^^^
ValueError: invalid literal for int() with base 10: 'seven'
```

At your own prompt that filename may read `<python-input-0>` rather than `<stdin>`, depending on which interactive shell your Python starts. It means the same thing: the line came from you, not from a file.

`ValueError` is the fourth error in this course, and it means the type was right but the value wasn't: `int()` takes strings, and this one wasn't a number. So check before you convert:

```
reply = input("How many tickets? ")

if reply.isdigit():
    tickets = int(reply)
    print(f"That will be {tickets * 12} pounds.")
else:
    print("Please type a whole number.")
```

`.isdigit()` asks a string whether every character in it is a digit, and hands back a `bool`. Now the part that catches people:

```
>>> "7".isdigit()
True
>>> "-3".isdigit()
False
>>> "4.5".isdigit()
False
```

A minus sign isn't a digit, and neither is a full stop. So `.isdigit()` is right for counting tickets, where negatives are meaningless anyway, and wrong for a temperature or a bank balance.

There's one more thing it does that you'd never guess, and it matters if you're using it as a guard:

```
>>> "²".isdigit()
True
>>> int("²")
ValueError: invalid literal for int() with base 10: '²'
```

`.isdigit()` says yes to a handful of characters `int()` won't take, superscripts among them, so a guard built on it can still let a `ValueError` through. The strict version is **`.isdecimal()`**, whose answer is exactly what `int()` will accept, and it's the one to reach for when the conversion has to succeed. `"7".isdecimal()` is `True`; `"-3"`, `"4.5"` and `"²"` are all `False`.

## What people get wrong

**Writing `=` where `==` belongs.** Python catches this one for you, before anything runs, and tells you what you probably meant.

**Expecting every true branch to run.** In an `if` / `elif` chain, one runs at most. If you actually want two independent checks, write two separate `if` statements, and notice that you're choosing that.

**Writing `if x == True:`.** These two ask different questions. `if x == True:` asks whether `x` *equals* `True`; `if x:` asks whether `x` is *truthy*. They agree only when `x` is already a `bool`, which is why `if name == True:` is false for every name anyone ever types, even though `if name:` is true for all of them. Write `if x:`.

**Thinking `else` is required.** It isn't. A chain with no `else` simply does nothing when nothing matches, which is often what you want.

**Not knowing that Python chains comparisons.** `if 1 < x < 10:` means what it looks like it means. Most languages don't do this, so if you've written any C or Java you may not trust it. Trust it.

## Practice

:::exercise Two programs
Take 25 minutes over these. Run each one and read any traceback from the bottom line up.

**A note before you start.** Both of these need numbers that `.isdigit()` would refuse: a negative in the first, a decimal in the second. That's the section above proving its own point, and this course hasn't given you a guard that handles either yet. So assume for now that whoever runs your program types something sensible, and use `int()` or `float()` directly. Handling bad input properly needs `try` and `except`, which are past where this course goes; the last lesson says where to find them.

**One. Sorting a number.** Ask for a number, then print whether it's positive, negative or zero, and separately whether it's even or odd. `n % 2` gives the remainder after dividing by 2, so it's `0` for even numbers, and it stays `0` for negative even numbers too. Two separate decisions here, so think about which parts want a chain and which want their own `if`.

**Two. A chain that has to be ordered.** A delivery costs 3 pounds under 1 kg, 5 pounds under 5 kg, 9 pounds under 20 kg, and 15 pounds at 20 kg or over. Write the chain and check it gives 3 for 0.5 kg. Then reverse the tests, largest threshold first, run it on 0.5 kg again, and see what comes out. Then put it back. You'll remember the ordering rule much better for having watched it fail once.
:::

If you can't see why a chain picked the branch it did, put the program into [Python Tutor](https://pythontutor.com/) and step through it. It shows you each test as it's evaluated.

## Connections

Lesson 2 gave your programs a memory. This lesson lets them choose, and it added `ValueError` to the errors you can read, along with the guard that stops one happening.

Next is repetition, and it needs everything here. A `while` loop is an `if` that keeps asking, so its condition is a `bool` exactly like these, truthiness matters there too, and the guard you just learned is what stops a loop dividing by a count that's still zero.

## Go deeper

- **[The Python tutorial, chapter 4, on control flow](https://docs.python.org/3/tutorial/controlflow.html)**. The reference version of this lesson, plus `match` statements, which are worth knowing about once chains get long.
- **[Think Python, chapter 5, "Conditionals and Recursion"](https://allendowney.github.io/ThinkPython/chap05.html)**, free online. Downey introduces recursion alongside conditionals, which is unusual and works better than you'd expect.
- **[Automate the Boring Stuff, chapter 2](https://automatetheboringstuff.com/3e/chapter2.html)**, free online. Sweigart spends longer than most books on flow control diagrams, which is the right instinct for this topic.

## Sources

1. *The Python Tutorial*, chapter 4, "More Control Flow Tools", Python 3.14 documentation. `if`, `elif`, `else`, and the boolean operators. [^1]
2. PEP 8, *Style Guide for Python Code*. Four spaces per indentation level. [^2]
3. Python documentation, *Built-in Types*, "Truth Value Testing". The list of values that count as false. [^3]
4. All code output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including the `SyntaxError` suggesting `==`, the `ValueError` from `int("seven")`, and the three `.isdigit()` results. [^4]

[^1]: *The Python Tutorial*, 3.14, ch. 4.
[^2]: PEP 8, as above.
[^3]: Python 3.14 docs, "Truth Value Testing".
[^4]: Run 10 September 2026.
