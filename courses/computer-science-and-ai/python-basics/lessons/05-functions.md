---
title: Functions
minutes: 85
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
      the slip this item is about: the second position is times, so "+" becomes the repeat
      count, and ["go"] * "+" raises a TypeError about multiplying a sequence by a string
      before the join is ever reached. C passes a number where the joiner goes. D omits word,
      which has no default, so the call is short an argument.
---

By the end of lesson 4 you'd written `total = total + n` and `count = count + 1` more times than you wanted to. The averaging block is six lines with its print, it works, and you'd have to paste it again for the next set of readings. That's the problem this lesson solves. You met the problem before the solution on purpose: this course puts loops before functions so that the repetition is something you've felt rather than something you've been warned about.[4]

## Giving a block of work a name

Take the averaging from lesson 4. Here it is beside the version this lesson builds, so that what changed is on the page rather than in your memory.

**Lesson 4, pasted wherever you needed it:**

```
total = 0
count = 0

for r in readings:
    total = total + r
    count = count + 1

print("Average:", total / count)
```

**The same work, given a name:**

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

Every output block in this lesson, that one included, was pasted from a run on CPython 3.14.7, with only the file paths changed.[6]

Four pieces here, and each has a name you'll want to know.

`def` creates the function. It doesn't run the body. Python reads those seven lines, notes that a thing called `average` now exists, and carries on. Nothing gets averaged until something calls it.

`numbers` is a **parameter**: a name that will exist inside the function and gets its value from whoever calls it. `[12, 7, 19, 4]` at the call is an **argument**. Parameter in the definition, argument at the call. Keep the two words straight, because error messages use them and you'll want to know which end of the call they're pointing at.

The indented block is the body. It's the lesson 4 loop with two names changed, `r` to `n` and `readings` to `numbers`, and one real change at the bottom: `print` has become `return`. Hold on to that one. It's the next section, and it's the difference between a function that works and one that only looks as if it does.

`return` hands a value back to whoever called, and ends the function on the spot.

So the accumulator is now written once. If you change how an average is worked out, you change it in one place. That, rather than the typing you save, is the argument for functions, and you'll get to test it for yourself in the practice at the end.

:::predict Two functions take `a` and `b`. `add`'s whole body is `return a + b`; `show`'s whole body is `print(a + b)`. A program runs `total = add(2, 3) * 2` and, on another line, `total = show(2, 3) * 2`. One of those lines works. Which, and what does the other one do?
`add` works and gives `10`. `show` fails.

`show` prints `5` and then raises `TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'`.

If you predicted that the printing version would also give 10, you've got the misconception the next section exists to remove, and you're in very good company.
:::

## Returning is not printing

This is the confusion every source in the research file names first, so we'll take it slowly.

`print` shows a value to a person. `return` gives a value to the program. They aren't two ways of doing one thing. They're two different things, aimed at two different audiences, and if you mix them up you'll write functions that look correct and are useless.

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

Read it the way lesson 1 taught you, from the bottom. `TypeError` names the fault: something tried to multiply a `NoneType` by an `int`. The markers `~~~~~~~~~~^~~` sit under `add(2, 3) * 2`, and the `^` points at the multiplication.[5]

Now look at the `5` above the traceback. The function ran. It printed. And the program still has nothing to multiply, because showing a number to you isn't the same as handing it back.

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

Nothing was shown from inside the function at all, and that's correct. The call `add(2, 3)` became the value `5` where it stood, `5 * 2` is `10`, and `total` holds it. The function handed a value to the program, and the program did something with it.

Here's the rule of thumb: if another part of your program needs the answer, return it. If a person needs to see it, print it. Most functions you'll write return. The printing happens once, near the top of the program, where it talks to whoever is running it.

## What comes back when you don't say

`NoneType` in that traceback wasn't an accident of the example. Every call hands something back, and a function with no `return` hands back `None`:[1]

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

`None` is a real value meaning the absence of one. You can store it, print it and test for it. The test is `if result is None`, which is the one place lesson 2 said `is` belongs.

So the printing version of `add` didn't fail to return. It returned `None`, faithfully, and you can't multiply `None` by 2.

:::checkpoint A function's body is a single line: `total = a + b`. What does a call to it give back?
`None`.

The function works out `a + b`, binds it to a local name, and then reaches the end of its body without a `return`. Working out a value and giving it back are separate acts, and only `return` does the second one. The fix is `return a + b`, or `return total` on a second line.
:::

## Return ends the function

`return` does two jobs at once, and the second one surprises people. It hands the value back, and it stops the function right there. Lines below it in the same body don't run.

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

Call it with `-4` and the first `return` fires. `checked the sign` never prints, because the function was over before that line was reached. Call it with `0` and the first `if` is false, so the print does run, and then the second `return` ends it.

This is also why you'll see functions written as a run of plain `if`s with no `else` anywhere. Once a branch has returned, nothing below it can be reached by that call, so the `elif` chain you'd have written in lesson 3 buys you nothing. `band`, further down this lesson, is exactly that shape: three tests, no `else`, and it behaves the same as the `elif` version would. If it reads oddly at first, that's why, and now you know why it's safe.

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

`result` existed while `double` was running and was gone the moment it finished. There's no new error type here. That's lesson 1's `NameError`, the second one you met, turning up in a new setting, and it means what it always meant: you asked for a name that isn't there. The `TypeError` about argument counts further down is the third error wearing a new face too. This is the first lesson that adds no error of its own, and I'd take that as a good sign, because it means the same handful of faults account for most of what goes wrong.

Treat this as a feature, not a restriction. A function with a `total` inside it can't tread on your program's `total`, so you can use a function you haven't read without checking which names it happens to like.

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

`word` inside the function is its own name. Rebinding it does nothing to `name` outside. That's lesson 2's rule doing exactly what it always did: `=` makes the name on the left refer to the value on the right. It doesn't tie one name to another, so changing `word` can't reach `name`.

For everything you've met so far, the only way a function changes anything out here is by returning something you then use. `name = shout(name)` would do it, if `shout` returned instead of printed. Lesson 6 adds the one exception, and it needs a kind of value you haven't met yet.

Step through it at [Python Tutor with the averaging function already loaded](https://pythontutor.com/visualize.html#code=def%20average%28numbers%29%3A%0A%20%20%20%20total%20%3D%200%0A%20%20%20%20count%20%3D%200%0A%20%20%20%20for%20n%20in%20numbers%3A%0A%20%20%20%20%20%20%20%20total%20%3D%20total%20%2B%20n%0A%20%20%20%20%20%20%20%20count%20%3D%20count%20%2B%201%0A%20%20%20%20return%20total%20%2F%20count%0A%0Areadings%20%3D%20%5B12%2C%207%2C%2019%2C%204%5D%0Aresult%20%3D%20average%28readings%29%0Aprint%28result%29%0A&cumulative=false&py=3&rawInputLstJSON=%5B%5D). Press Next and watch a second box appear when the call starts, holding `numbers`, `total`, `count` and, once the loop starts, `n`. Then watch the whole box vanish when `return` runs. That vanishing box is what "names made inside stay inside" looks like.

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

`band(61)` uses the default of 50 and passes. `band(61, 70)` supplies a stricter mark, and the same score now fails.

:::checkpoint What does `band(90, 95)` give back? The pass mark is being set to 95 and the score is only 90.

`"distinction"`.

The first test is `score >= 90`, and 90 clears it, so the function returns before `pass_mark` is ever looked at. This is lesson 3's rule about ordering a chain, turning up inside a function: the first test that matches decides the answer, so where you put a test is part of what the code means. Whether that's the behaviour you wanted is a separate question, and it's the kind of question that sits unasked in a program for months.
:::

The last call names both parameters. That lets you give them in any order and, more usefully, lets you skip past a parameter you're happy with. Keyword arguments are everywhere in other people's code, and this is all they are.

Two rules come with defaults, and I'd rather you saw both than took my word for them.

The first: a parameter with a default comes after the ones without. Among the ordinary parameters, at least. Put them the other way round and the definition itself fails, before anything runs:

```
def f(a=1, b):
    pass
```

```
  File "/home/you/f.py", line 1
    def f(a=1, b):
               ^
SyntaxError: parameter without a default follows parameter with a default
```

That's as clear as error messages get, and it's a `SyntaxError`, which by lesson 1's rule means nothing in the file runs at all. There is a way to put a required parameter last anyway, using a `*` in the parameter list, and section 4.9.3 of the tutorial has it if you meet one in the wild.

The second: a default is worked out once, when the `def` runs, not afresh at each call. Here's a way to watch it happen. This function's default is an expression rather than a plain value, so it announces itself whenever it's worked out:

```
def stamp(t=print("the default ran")):
    return t

print("about to call")
stamp()
stamp()
```

:::predict The function above is called twice. How many times does `the default ran` appear, and does it come before or after `about to call`?
Once, and it comes first:

```
the default ran
about to call
```

The default was worked out while Python was still reading the `def`, which happened before the line that prints `about to call` and before either call. Two calls, one evaluation, and it was over before the program reached its second line.
:::

For a number like 50 that's harmless, because 50 is 50 whenever you work it out. For a value that can be changed after it's made, it's a genuine trap, and lesson 6 has it once lists exist.

## What people get wrong

**Printing when you meant to return.** The one above. The way to check for it is to ask a question about the function rather than about the code: who is the answer for, a person or the program?

**Expecting a function to change a name outside itself.** `shout` above. What a function gives you is its return value, and nothing else.

**Leaving the brackets off.** `print(average)` instead of `print(average([12, 7, 19, 4]))` gives you this:

```
<function average at 0x10096a770>
```

That's not an error. It's Python printing the function itself, the way it would print any other value, because a function is a value in Python and `average` without brackets is just its name. The brackets are what runs it. The hexadecimal is its address in memory and will differ on your machine.

**Passing the wrong number of arguments.** `average(12, 7)` when `average` takes one parameter:

```
TypeError: average() takes 1 positional argument but 2 were given
```

Another `TypeError`, and an unusually helpful one: it names the function, the number it wants and the number it got. Here the caller probably meant `average([12, 7])`, one argument that happens to be a list of two things.

## Practice

:::exercise Three on functions
Take 40 minutes over these.

**One. Predict, then run.** A function's body is `if n % 2 == 0:` then `return "even"`, and nothing else at all. What does a call with 7 give back? Write your answer down before you run it, then run it and check. If it surprises you, the section on what comes back when you don't say is the one to re-read.

**Two. Guard the empty case.** Take the `average(numbers)` above and make it safe for an empty list, which in lesson 4 crashed with `ZeroDivisionError`. Decide first what it should hand back when there's nothing to average: `0.0` and `None` are both defensible, and they push the decision to different places. Say to yourself which one you chose and why, then write it.

**Three. Twenty lines into one function and three calls.** This is the transfer test, and the program is supplied so that you spend the time on the collapsing rather than on the typing.

```
north = [22, 19, 31, 25]
total = 0
count = 0
for r in north:
    total = total + r
    count = count + 1
print("north:", count, "readings, total", total, "average", total / count)

south = [40, 38, 44]
total = 0
count = 0
for r in south:
    total = total + r
    count = count + 1
print("south:", count, "readings, total", total, "average", total / count)

east = [7, 9, 8, 11, 6]
total = 0
count = 0
for r in east:
    total = total + r
    count = count + 1
print("east:", count, "readings, total", total, "average", total / count)
```

Rewrite it as one function and three calls, so that it prints the same three lines. Decide as you go what the function should hand back, given that the caller needs three figures and `return` gives one value. There's more than one reasonable answer, and you've met all the pieces of each.

Then make one change to both versions: print the average to one decimal place, using `f"{value:.1f}"`. Count the edits each version needs. That count is the argument for functions, and it's more convincing when you've done it yourself than when I assert it.

If you did Two, you have the empty-list guard as well. Add `west = []` as a fourth call and check it does something sensible rather than crashing.
:::

## Connections

You now have the four things this course has given you so far: values with names, choices, repetition, and pieces you can name and reuse. What you don't have is anywhere good to put more than one value at a time.

You've been working around that gap all lesson. `average([12, 7, 19, 4])` passes a list, and lesson 4's collector called `.append()`, and neither was ever explained. That's next, along with the other shape: looking something up by name rather than by position. It's also where a function first gets handed something it can change, which is the one case where everything this lesson said about a function keeping to itself needs a careful qualification.

## Go deeper

- **[The Python tutorial, chapter 4.8](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)** on defining functions, and 4.9 on default and keyword arguments, which is the reference for the second half of this lesson. Section 4.9.3, "Special parameters", is where the `*` in a parameter list is explained.
- **[Think Python, chapter 3, "Functions"](https://allendowney.github.io/ThinkPython/chap03.html)** and **[chapter 6, "Return Values"](https://allendowney.github.io/ThinkPython/chap06.html)**, free online. Downey introduces functions in chapter 3 and doesn't give you `return` until chapter 6, and the gap between them is a fair measure of how much trouble the distinction causes.[2]
- **[Automate the Boring Stuff, chapter 4](https://automatetheboringstuff.com/3e/chapter4.html)**, free online, for the practical treatment and a longer look at `None`.[3]

## Sources

1. *The Python Tutorial*, chapter 4, "More Control Flow Tools", sections 4.8 and 4.9, Python 3.14 documentation. `def`, parameters and arguments, `return`, default argument values, keyword arguments, and the statement that a function with no `return` returns `None`.
2. Allen B. Downey, *Think Python*, 3rd edition 2023, chapters 3 and 6. Free online under CC BY-NC-SA 4.0, linked rather than adapted. Cited for where the two topics sit in his contents, which is what was read.
3. Al Sweigart, *Automate the Boring Stuff with Python*, 3rd edition, chapter 4, "Functions". Free online under CC BY-NC-SA 3.0, linked rather than adapted.
4. MIT 6.0001, *Introduction to Computer Science and Programming in Python* (Fall 2016, OpenCourseWare), session list. Branching and iteration come in the first sessions and functions after them, which is why this lesson follows loops rather than preceding them: the repetition is felt in lesson 4 and removed here. Note that the strongest courses disagree about this. Harvard's CS50P and Downey both take functions first.
5. PEP 657, "Include Fine Grained Error Locations in Tracebacks", Python 3.11. The `~~~~~~~~~~^~~` markers under the failing part of a line. On Python 3.10 the same traceback arrives without them.
6. All code and output in this lesson was run on CPython 3.14.7 and pasted from the terminal, including both tracebacks, the `<function average at 0x...>` line, and every printed figure. Paths in the tracebacks are shown as `/home/you/` in place of the machine's own.

