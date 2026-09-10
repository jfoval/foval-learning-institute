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
      A program checks a delivery. It runs "if weight > 20: print('heavy')" then
      "elif weight > 5: print('medium')" then "else: print('light')". The weight is 30.
      What prints?
    options:
      - heavy and medium, since both of those conditions are true of 30
      - heavy only, because the chain stops at the first condition that holds
      - medium only, since elif is checked before the if above it
      - Nothing at all, because two branches match and Python cannot choose
    answer: 1
    explain: >-
      A chain runs at most one block: the first whose test is true. Both tests really are true
      of 30, which is why this catches people, but Python never reaches the second one. So
      B. Option A describes a chain of separate ifs, which would print both, and rewriting
      elif as if is how you get that bug. Option C reverses the order of evaluation. Option D
      imagines an ambiguity the rule exists to remove.
  - q: >-
      You want to divide total by n, but only when n is not zero. Which line is safe?
    options:
      - "if total / n > 5 and n != 0:"
      - "if n != 0 or total / n > 5:"
      - "if n != 0 and total / n > 5:"
      - "if not n == 0 or total / n > 5:"
    answer: 2
    explain: >-
      and stops as soon as it meets something false, so with n at zero Python never evaluates
      the division in C and the line is safe. Order is doing the work, which is the whole
      point. Option A tests the same two things in the wrong order and raises
      ZeroDivisionError before it ever checks n. Options B and D use or, which stops early
      only on something true, so a zero n makes the left side false and Python goes on to
      divide anyway.
  - q: >-
      A program reads a reply with input() and does "if reply:" to check that the user typed
      something. The user types the single character 0. What happens?
    options:
      - The block runs, because the string "0" is not empty and only empty strings are false
      - The block is skipped, because 0 is one of the values Python treats as false
      - An error, because a string cannot be tested for truth without a comparison
      - The block runs, but only because input() strips the character before returning
    answer: 0
    explain: >-
      input() hands back the one-character string "0", and a string is false only when it is
      empty. "0" has a character in it, so it is true and the block runs, which is A. The
      number 0 is false; the text "0" is not, and that gap is where this bug lives. Option B
      confuses the two. Option C describes a language that will not let you do this, and
      Python will. Option D invents a behaviour input() does not have.
  - q: >-
      Someone writes "if age = 18:" and runs the file. What do they see?
    options:
      - The block runs, since a single equals sign both assigns and compares
      - Nothing at all, since the assignment succeeds and the test quietly passes
      - A NameError, raised at the moment Python reaches that line in the program
      - A SyntaxError, before a single line of the program has run
    answer: 3
    explain: >-
      An assignment is not an expression Python will accept inside an if, so the file fails
      to parse and nothing runs at all. That makes it D, and it is lesson 1's first kind of
      failure: no output appears beforehand. Python is unusually helpful here and suggests
      "Maybe you meant '==' or ':=' instead of '='?". Options A and B assume Python does
      something with the line; it never gets that far. Option C names the wrong error and the
      wrong moment.
  - q: >-
      A grading chain tests "score >= 70" first, then "score >= 80", then "score >= 90". A
      student scores 95. What grade comes out, and why?
    options:
      - A, because Python looks through the whole chain and picks the best match it finds
      - An error, because the tests overlap and Python cannot resolve which one applies
      - C, because 95 passes the first test and the chain stops there without looking on
      - F, because a score matching several tests falls through to the else at the bottom
    answer: 2
    explain: >-
      The chain stops at the first true test, and 95 is comfortably over 70, so it never sees
      the other two: the answer is C. This is why ordering a chain is part of the logic
      rather than a matter of taste, and the fix is to test the narrowest condition first.
      Option A describes a search for the best match, which is not what a chain does. Option
      B expects an error where the rule is well defined. Option D would need every test to
      fail.
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

Here are the six comparisons. The one that causes trouble is the first.

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
       ^^^^^
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
<line x1="210" y1="204" x2="286" y2="204" stroke="var(--oxblood, #8b1e2d)" stroke-width="2"/>
<text x="228" y="28" font-size="15" fill="var(--oxblood, #8b1e2d)">true</text>
<text x="228" y="112" font-size="15" fill="var(--oxblood, #8b1e2d)">true</text>
<text x="294" y="42" font-size="16" fill="var(--text, #111418)">print("A")</text>
<text x="294" y="126" font-size="16" fill="var(--text, #111418)">print("B")</text>
<text x="294" y="210" font-size="16" fill="var(--text, #111418)">print("F")</text>
</svg>

Only one of the three arrows on the right is ever taken. Follow a score of 85: the first test is false, so control drops down the left; the second is true, so it goes right and stops. `print("F")` is never reached, and neither is any test below the one that matched.

:::predict Before you read on
Someone writes the same grader but tests in this order: `score >= 70` first, then `score >= 80`, then `score >= 90`, with `else` at the bottom. A student scores 95. What grade do they get?

`C`. 95 is over 70, so the very first test is true, its block runs, and the chain stops. Python never looks at the tests for 80 and 90.

Nothing is broken here and no error appears. The chain did exactly what the rules say. **The order of a chain is part of its logic, not a matter of tidiness**, and when the tests overlap you put the narrowest one first.
:::

## Indentation is the syntax

In most languages the indented lines under an `if` are a courtesy to the reader. In Python they're how the language knows which lines the `if` controls. Four spaces is the convention, and it's in [PEP 8](https://peps.python.org/pep-0008/) along with the naming rules from lesson 2.

Get it wrong and you get an `IndentationError`, which is the friendly outcome. The unfriendly one is a program that runs and quietly does the wrong thing, because a line you meant to be inside the `if` ended up outside it and now runs every time.

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

If `n` is zero, the left side is false, Python stops, and the division on the right is never carried out. Swap the two around and the same line raises `ZeroDivisionError` on the first zero it meets. The order isn't stylistic. It's the guard.

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

And it sets one trap that catches nearly everyone:

```
>>> bool("0")
True
```

The number `0` is false. The **text** `"0"` is a string with a character in it, so it's true. Since `input()` always hands back a string, a user who types `0` gives you something truthy. That's the two-types idea from lesson 2 arriving in a place you wouldn't look for it.

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

`ValueError` is the fourth error in this course, and it means the type was right but the value wasn't: `int()` takes strings, and this one wasn't a number. So check before you convert:

```
reply = input("How many tickets? ")

if reply.isdigit():
    tickets = int(reply)
    print(f"That will be {tickets * 12} pounds.")
else:
    print("Please type a whole number.")
```

`.isdigit()` asks a string whether every character in it is a digit, and hands back a `bool`. Now the wrinkle, and it's a good one:

```
>>> "7".isdigit()
True
>>> "-3".isdigit()
False
>>> "4.5".isdigit()
False
```

A minus sign isn't a digit, and neither is a full stop. So `.isdigit()` is exactly right for counting tickets, where negatives are meaningless anyway, and exactly wrong for a temperature or a bank balance. It's a narrow tool, and knowing what it refuses is knowing when to reach for it.

## What people get wrong

**Writing `=` where `==` belongs.** Python catches this one for you, before anything runs, and tells you what you probably meant.

**Expecting every true branch to run.** In an `if` / `elif` chain, one runs at most. If you actually want two independent checks, write two separate `if` statements, and notice that you're choosing that.

**Writing `if x == True:`.** It works, and it's noise. `if x:` says the same thing. Worse, `==` compares values, so a non-empty string is truthy but is not equal to `True`, and `if name == True:` is false for every name anyone ever types.

**Thinking `else` is required.** It isn't. A chain with no `else` simply does nothing when nothing matches, which is often what you want.

**Not knowing that Python chains comparisons.** `if 1 < x < 10:` means what it looks like it means. Most languages don't do this, so if you've written any C or Java you may not trust it. Trust it.

## Practice

:::exercise Two programs
Take 25 minutes over these. Run each one and read any traceback from the bottom line up.

**One. Sorting a number.** Ask for a number, then print whether it's positive, negative or zero, and separately whether it's even or odd. `n % 2` gives the remainder after dividing by 2, so it's `0` for even numbers. Two separate decisions here, so think about which parts want a chain and which want their own `if`.

**Two. A chain that has to be ordered.** A delivery costs 3 pounds under 1 kg, 5 pounds under 5 kg, 9 pounds under 20 kg, and 15 pounds at 20 kg or over. Write the chain, then deliberately put the tests in the wrong order, run it on 0.5 kg, and see which price comes out. Then fix it. You'll remember the ordering rule much better for having watched it fail once.
:::

If you can't see why a chain picked the branch it did, put the program into [Python Tutor](https://pythontutor.com/) and step through it. It shows you each test as it's evaluated.

## Connections

Lesson 2 gave your programs a memory. This lesson lets them choose, and it added `ValueError` to the errors you can read, along with the guard that stops one happening.

Next is repetition, and it needs everything here. A `while` loop is an `if` that keeps asking, so its condition is a `bool` exactly like these, and truthiness matters there too. The lesson after that will lean on short-circuiting again.

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
