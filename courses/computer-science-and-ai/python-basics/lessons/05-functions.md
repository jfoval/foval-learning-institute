---
title: Functions
minutes: 75
objectives:
  - Explain the difference between returning a value and printing one, and say what each is for
  - Build a function with parameters, a default and a return value, and call it by keyword
  - Predict what a name is worth inside a function and after it has finished
  - Apply a function to remove repetition from a program that has three copies of one block
quiz:
  - q: >-
      A function is written as "def vat(amount):" with a single body line, "print(amount *
      0.2)". A later line says "bill = vat(50) + 50". What happens?
    options:
      - It prints 10.0 and then raises a TypeError on the addition that follows it
      - It prints 60.0, since the printed figure is the value the call hands back
      - It raises a TypeError immediately, before anything at all has been printed
      - It prints 10.0 and sets bill to 10.0, because printing and returning agree here
    answer: 0
    explain: >-
      The call runs and prints 10.0, then hands back None, and None plus 50 is a TypeError.
      So A, and the order matters: output appears before the traceback. B is the belief this
      question exists to break, that printing gives the value to the program. C misses that
      the printing happens first. D treats print and return as the same instruction.
  - q: >-
      "def check(n):" has four body lines: "if n > 10:", then "return 'big'", then
      "print('small-ish')", then "return 'small'". What does "print(check(40))" show?
    options:
      - small-ish, then big, since every line in the body runs once in order
      - big alone, as return leaves the function the moment it is reached
      - small-ish alone, because the print is the only output instruction here
      - big, then small, because both returns are reached on the way down
    answer: 1
    explain: >-
      40 is over 10, so the first return fires and the function is over: nothing below it
      runs. B. A and D both assume a function keeps going after a return, which is the point
      of the item. C forgets that print(check(40)) prints whatever comes back, and something
      does come back.
  - q: >-
      "def bump(count):" has the body "count = count + 1" and then "return count". A program
      sets "count = 7", calls "bump(count)" on its own line, then prints count. What appears?
    options:
      - 8, since the function changed the value that the name count refers to
      - Nothing, because calling a function without using the result is an error
      - 7, as the function worked on its own count and the result was thrown away
      - None, which is what the ignored call left behind in the name count
    answer: 2
    explain: >-
      The function's count is its own name, and the returned 8 went nowhere because the call
      was not assigned to anything. So 7, which is C. A is the common expectation, that a
      function reaches out and edits the caller's names. B invents a rule. D confuses the
      value of the call with the value of count.
  - q: >-
      A function ends without ever reaching a return statement. What does a call to it
      produce?
    options:
      - Nothing, in the sense that the call cannot be assigned to a name at all
      - Zero, which is the value Python falls back on when none is given
      - Whatever the last line worked out, which becomes the result by default
      - None, a value meaning the absence of one, which can be stored and tested
    answer: 3
    explain: >-
      Every call hands something back, and with no return that something is None. D. B and C
      are the two guesses people make, and C is how some other languages behave, which is
      why it is tempting. A is close to the feeling but wrong in fact: you can store None.
  - q: >-
      "def label(word, times=2, joiner='-'):" returns joiner.join([word] * times). Which call
      produces "go+go"?
    options:
      - label("go", "+"), passing the new joiner in the next free position
      - label("go", joiner="+"), naming the parameter that is being changed
      - label("go", 2, 2), since both settings have to be supplied together
      - label(joiner="+"), leaving both of the other parameters at default
    answer: 1
    explain: >-
      Naming the parameter lets you skip the one in between and leave times at 2. B. A is
      the slip this item is about: the second position is times, so "+" would be the repeat
      count and the join would fail. C passes a number where the joiner goes. D omits word,
      which has no default, so the call is short an argument.
---

By the end of lesson 4 you had written `total = total + n` and `count = count + 1` more times than you wanted to. The averaging block is five lines, it works, and you would have to paste it again for the next set of readings. That is the problem this lesson solves, and you met the problem first on purpose.

## Giving a block of work a name

Here is the averaging from lesson 4, lifted out whole:

```
def average(numbers):
    total = 0
    count = 0
    for n in numbers:
        total = total + n
        count = count + 1
    return total / count

print(average([12, 7, 19, 4]))
print(average([5, 5, 5, 40]))
```

```
10.5
13.75
```

Four pieces, and each has a name worth knowing.

`def` creates the function. It does not run it. Python reads those seven lines, notes that a thing called `average` exists, and carries on. Nothing is averaged until something calls it.

`numbers` is a **parameter**: a name that will exist inside the function, and that gets its value from whoever calls. `[12, 7, 19, 4]` at the call is an **argument**. Parameter in the definition, argument at the call, and the two words are worth keeping straight because error messages use them.

The indented block is the body, and it is the lesson 4 code unchanged.

`return` hands a value back to whoever called, and ends the function on the spot.

The five lines are now written once. Change how an average is worked out and you change it in one place, which is the whole argument for functions and is not really about saving typing.

:::predict Two functions take `a` and `b`. `add`'s whole body is `return a + b`; `show`'s whole body is `print(a + b)`. A program runs `total = add(2, 3) * 2` and, on another line, `total = show(2, 3) * 2`. One of those lines works. Which, and what does the other one do?
`add` works and gives `10`. `show` fails.

`show` prints `5` and then raises `TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'`.

If you predicted that the printing version would also give 10, you have the misconception the next section exists to remove, and you are in very good company.
:::

## Returning is not printing

This is the confusion every source in the research file names first, and it is worth slowing down for.

**`print` shows a value to a person. `return` gives a value to the program.** They are not two ways of doing one thing. They are two different things, aimed at two different audiences, and a beginner who conflates them writes functions that look correct and are useless.

Watch it happen. Two versions of the same function, saved as `adder.py`:

```
def add(a, b):
    print(a + b)

total = add(2, 3) * 2
print(total)
```

```
5
Traceback (most recent call last):
  File "/home/you/adder.py", line 4, in <module>
    total = add(2, 3) * 2
            ~~~~~~~~~~^~~
TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'
```

Read it the way lesson 1 taught, from the bottom. `TypeError` names the fault: something tried to multiply a `NoneType` by an `int`. The markers `~~~~~~~~~~^~~` sit under `add(2, 3) * 2`, and the `^` points at the multiplication.

And notice the `5` above the traceback. The function ran. It printed. The program still has nothing, because printing is not giving.

Now the other version:

```
def add(a, b):
    return a + b

total = add(2, 3) * 2
print(total)
```

```
10
```

Nothing was shown from inside the function at all, and that is correct. The call `add(2, 3)` became the value `5` where it stood, `5 * 2` is `10`, and `total` holds it. The function handed a value to the program and the program did something with it.

The rule of thumb: **if another part of your program needs the answer, return it. If a person needs to see it, print it.** Most functions worth writing return. The printing happens once, near the top level, where the program talks to whoever is running it.

## What comes back when you do not say

`NoneType` in that traceback was not an accident of the example. Every call hands something back. A function with no `return` hands back `None`:

```
def greet(name):
    print("Hello,", name)

result = greet("Ada")
print(result)
print(type(result))
```

```
Hello, Ada
None
<class 'NoneType'>
```

`None` is a real value meaning the absence of one. You can store it, print it, and test for it, and the test is `if result is None`, which is the one place lesson 2 said `is` belongs.

So the printing version of `add` did not fail to return. It returned `None`, faithfully, and `None` is not a number.

:::checkpoint A function's body is a single line: `total = a + b`. What does a call to it give back?
`None`.

The function works out `a + b`, binds it to a local name, and then reaches the end of its body without a `return`. Working out a value and giving it back are separate acts, and only `return` does the second one. The fix is `return a + b`, or `return total` on a second line.
:::

## Return ends the function

`return` does two jobs at once, and the second surprises people. It hands the value back **and it stops the function immediately**. Lines below it in the same body do not run.

```
def describe(n):
    if n < 0:
        return "negative"
    print("checked the sign")
    if n == 0:
        return "zero"
    return "positive"

print(describe(-4))
print(describe(0))
```

```
negative
checked the sign
zero
```

Call it with `-4` and the first `return` fires. `checked the sign` is never printed, because the function was over before that line was reached. Call it with `0` and the first `if` is false, so the print does run, and then the second `return` ends it.

This is the reason a function like `describe` needs no `else`. Once a branch has returned, the ones below cannot be reached by that call, so an `elif` chain and a run of plain `if`s behave the same here. That is a real pattern in other people's code and it reads oddly until you know why it is safe.

## Names made inside stay inside

```
def double(x):
    result = x * 2
    return result

print(double(4))
print(result)
```

```
8
Traceback (most recent call last):
  File "/home/you/scope.py", line 6, in <module>
    print(result)
          ^^^^^^
NameError: name 'result' is not defined
```

`result` existed while `double` was running and was gone the moment it finished. No new error type here: that is lesson 1's `NameError`, the second one you met, turning up in a new setting. It has always meant the same thing, which is that you asked for a name that is not there. The arity `TypeError` further down is likewise the third error wearing a new face. This is the first lesson that adds none of its own, and that is a good sign: the same handful of faults account for most of what goes wrong.

It is a feature rather than a restriction. A function with a `total` inside it cannot tread on your program's `total`, so you can use a function you have not read without checking what names it happens to like.

The same protection cuts the other way, and this is the part that catches people:

```
def shout(word):
    word = word.upper()
    print("inside:", word)

name = "ada"
shout(name)
print("outside:", name)
```

```
inside: ADA
outside: ada
```

`word` inside the function is its own name. Rebinding it does nothing to `name` outside. This is lesson 2's rule doing exactly what it always did: `=` makes the name on the left refer to the value on the right, and a name is not a tether to another name.

The only way a function changes anything out here is by returning something you then use. `name = shout(name)` would, if `shout` returned instead of printed.

Step through it at [Python Tutor with the averaging function already loaded](https://pythontutor.com/visualize.html#code=def%20average%28numbers%29%3A%0A%20%20%20%20total%20%3D%200%0A%20%20%20%20count%20%3D%200%0A%20%20%20%20for%20n%20in%20numbers%3A%0A%20%20%20%20%20%20%20%20total%20%3D%20total%20%2B%20n%0A%20%20%20%20%20%20%20%20count%20%3D%20count%20%2B%201%0A%20%20%20%20return%20total%20%2F%20count%0A%0Areadings%20%3D%20%5B12%2C%207%2C%2019%2C%204%5D%0Aresult%20%3D%20average%28readings%29%0Aprint%28result%29%0A&cumulative=false&py=3&rawInputLstJSON=%5B%5D). Press Next and watch a second box appear when the call starts, holding `numbers`, `total` and `count`, and watch the whole box vanish when `return` runs. The disappearing box is the thing to see.

## More than one parameter, and calling by name

Parameters can have defaults, which makes them optional at the call:

```
def band(score, pass_mark=50):
    if score >= 90:
        return "distinction"
    if score >= pass_mark:
        return "pass"
    return "fail"

print(band(95))
print(band(61))
print(band(61, 70))
print(band(pass_mark=70, score=95))
```

```
distinction
pass
fail
distinction
```

`band(61)` uses the default of 50 and passes. `band(61, 70)` supplies a stricter mark and the same score now fails. The last call names both, which lets you give them in any order and, more usefully, lets you skip past a parameter you are happy with. You will read keyword arguments in other people's code within the hour, and this is all they are.

Two rules that come with defaults. A parameter with a default must come after the ones without, or the definition itself is a `SyntaxError`. And a default is worked out once, when the `def` runs, not at each call, which is harmless for a number like 50 and is a genuine trap for a list. Lesson 6 has the trap, once lists exist.

## What people get wrong

**Printing when you meant to return.** The one above, and worth checking for by asking a question about the function rather than about the code: who is the answer for, a person or the program?

**Expecting a function to change a name outside itself.** `shout` above. What a function gives you is its return value.

**Leaving the brackets off.** `print(average)` instead of `print(average(readings))` gives you this:

```
<function average at 0x10096a770>
```

That is not an error. It is Python printing the function itself, the way it would print any other value, because a function is a value in Python and `average` without brackets is just its name. The brackets are what runs it. The hexadecimal is its address in memory and will differ on your machine.

**Passing the wrong number of arguments.** `average(12, 7)` when `average` takes one parameter:

```
TypeError: average() takes 1 positional argument but 2 were given
```

Another `TypeError`, and unusually helpful: it names the function, the number it wants and the number it got. Here the caller probably meant `average([12, 7])`, one argument that happens to be a list of two things.

## Practice

:::exercise Three on functions
Take 30 minutes over these.

**One. Predict, then run.** A function's body is `if n % 2 == 0:` then `return "even"`, and nothing else at all. What does a call with 7 give back? Write your answer down before you run it, then run it and check. If it surprises you, the section on what comes back when you do not say is the one to re-read.

**Two. Guard the empty case.** Take the `average(numbers)` above and make it safe for an empty list, which in lesson 4 crashed with `ZeroDivisionError`. Decide first what it should hand back when there is nothing to average: `0.0` and `None` are both defensible, and they push the decision to different places. Say to yourself which one you chose and why, then write it.

**Three. Three copies into one function.** This is the transfer test. Write a program that prints a summary for three sets of readings, `[12, 7, 19, 4]`, `[5, 5, 5, 40]` and `[]`, where a summary is the count, the total and the average. Write it first the way you would have at the end of lesson 4, with the block pasted three times, and look at it. Then write it with one function called three times.

Time the two versions on a change: make the average print to one decimal place. Count the edits each version needs. That count is the argument for functions, and it is more convincing when you have done it yourself than when I assert it.
:::

## Connections

You now have the four things a program is made of: values with names, choices, repetition, and pieces you can name and reuse. What you do not have is anywhere good to put more than one value at a time.

You have been working around that gap all lesson. `average([12, 7, 19, 4])` passes a list, and lesson 4's collector called `.append()`, and neither was ever explained. That is next, along with the other shape: looking something up by name rather than by position. It is also where a function first gets handed something it can change, which is the one case where everything this lesson said about a function keeping to itself needs a careful qualification.

## Go deeper

- **[The Python tutorial, chapter 4.7](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)** on defining functions, and 4.8 on default and keyword arguments, which is the reference for the second half of this lesson.
- **[Think Python, chapter 3, "Functions"](https://allendowney.github.io/ThinkPython/chap03.html)** and **[chapter 6, "Return Values"](https://allendowney.github.io/ThinkPython/chap06.html)**, free online. Downey separates the two across three chapters, which is a sign of how much trouble the distinction causes.
- **[Automate the Boring Stuff, chapter 4](https://automatetheboringstuff.com/3e/chapter4.html)**, free online, for the practical treatment and a longer look at `None`.

## Sources

1. *The Python Tutorial*, chapter 4, "More Control Flow Tools", sections 4.7 to 4.9, Python 3.14 documentation. `def`, parameters and arguments, `return`, default argument values, keyword arguments, and the statement that a function with no `return` returns `None`. [^1]
2. Allen B. Downey, *Think Python*, 3rd edition 2023, chapters 3 and 6. Free online under CC BY-NC-SA 4.0, linked rather than adapted. The source for treating return-versus-print as a topic large enough to split across chapters. [^2]
3. Al Sweigart, *Automate the Boring Stuff with Python*, 3rd edition, chapter 4, "Functions". Free online under CC BY-NC-SA 3.0, linked rather than adapted. [^3]
4. MIT 6.0001, *Introduction to Computer Science and Programming in Python* (Fall 2016, OpenCourseWare), session list. Branching and iteration come in the first sessions and functions after them, which is why this lesson follows loops rather than preceding them: the repetition is felt in lesson 4 and removed here. Note that the strongest courses disagree about this. Harvard's CS50P and Downey both take functions first. [^4]
5. PEP 657, "Include Fine Grained Error Locations in Tracebacks", Python 3.11. The `~~~~~~~~~~^~~` markers under the failing part of a line. On Python 3.10 the same traceback arrives without them. [^5]
6. All code and output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including both tracebacks, the `<function average at 0x...>` line, and every printed figure. Paths in the tracebacks are shown as `/home/you/` in place of the machine's own. [^6]

[^1]: *The Python Tutorial*, 3.14, ch. 4.7 to 4.9.
[^2]: Downey, *Think Python* 3e, chs. 3 and 6.
[^3]: Sweigart, *Automate the Boring Stuff* 3e, ch. 4.
[^4]: MIT 6.0001 (Fall 2016), OCW session list; CS50P week 0; Downey, *Think Python* 3e, ch. 3.
[^5]: PEP 657, as above.
[^6]: Run 10 September 2026.
