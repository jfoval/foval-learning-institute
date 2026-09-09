---
title: What a letter is
minutes: 35
objectives:
  - Say what a letter in algebra stands for, and what it does not stand for
  - Evaluate an expression by substituting a number and doing the arithmetic in the right order
  - Write an expression for a quantity described in words, and check it by putting a number in
quiz: []
---

Here is a sentence you can already do something with. **Your phone plan costs $12 a month, plus 5 cents for every minute you talk.**

You can work out this month's bill. If you talked for 100 minutes, it's $12 plus 100 lots of 5 cents, which is $12 plus $5, so $17. If you talked for 300 minutes it's $12 plus $15, so $27.

Notice what you just did twice. The same procedure, different number in. Algebra is what you get when you write down the procedure once instead of doing it again every time.

## The letter is a number you have not fixed yet

Write the number of minutes as `m`. Then the bill, in dollars, is:

`12 + 0.05m`

That's it. That's the whole plan, written down. `0.05m` means 0.05 times `m`, because in algebra we drop the multiplication sign between a number and a letter. And `m` is not the minutes; it's **how many** minutes, which is a number.

Put numbers in and it does what you already did by hand:

| Minutes talked (`m`) | `12 + 0.05m` | Bill |
| --- | --- | --- |
| 100 | 12 + 0.05 × 100 = 12 + 5 | $17 |
| 300 | 12 + 0.05 × 300 = 12 + 15 | $27 |
| 850 | 12 + 0.05 × 850 = 12 + 42.50 | $54.50 |

Three rows, one expression. The word **variable** means exactly that: the letter varies, and the expression holds anyway.

:::predict Same plan, and this month the bill was $44. How many minutes did you talk? You can work this out without any algebra at all, and it is worth doing that way once.
The $12 is there whatever happens, so $44 minus $12 is $32 of call charges. At 5 cents a minute, $32 buys 32 divided by 0.05, which is 640 minutes. You have just solved an equation by undoing it in your head, which is exactly what lesson 3 is about. The reason algebra is worth learning is not that this problem is hard; it is that the same undoing works when the numbers are horrible.
:::

## A letter stands for a number, not for a thing

This is the single most important sentence in the lesson, and it costs people years when they get it wrong.

If a bag holds `a` apples, then `a` is **not** apples. `a` is a number: how many. That distinction seems fussy until it isn't.

Suppose someone writes:

`2a + 3b = 5ab`

If you read `a` as "apples" and `b` as "bananas", this looks almost reasonable: two apples and three bananas make five pieces of fruit, so `5ab` looks like "five fruits". It's wrong, and you can prove it's wrong in about ten seconds without knowing any rules at all. **Put numbers in.**

Say `a = 2` and `b = 3`.

- Left side: `2a + 3b` = 2 × 2 + 3 × 3 = 4 + 9 = **13**
- Right side: `5ab` = 5 × 2 × 3 = **30**

13 is not 30, so the two sides are not the same thing, so the statement is false.

Hold on to that move. **Testing an algebraic claim by putting a number in** is the most useful habit in this course, and we're going to use it in every lesson. It doesn't require you to remember a rule. It requires you to do arithmetic, which you can already do.

## Expression, and the thing it isn't

Two words worth separating now, because lesson 2 turns on the difference.

An **expression** is a recipe for a number: `12 + 0.05m`, `2a + 3b`, `x + 1`. Give it values for its letters and it produces a number. On its own it doesn't claim anything, any more than a recipe claims anything.

An **equation** has an equals sign in it and does claim something: `12 + 0.05m = 44` says those two things are the same size. A claim can be true or false; a recipe can't.

For this lesson we stay with expressions. Lesson 2 is entirely about that equals sign, because almost everybody arrives at algebra with a wrong idea about it.

## The conventions, which are just shorthand

Four of these and they cover nearly everything you'll meet.

- `3x` means 3 × x. The multiplication sign is dropped between a number and a letter, and between two letters: `ab` means a × b.
- A plain `x` means `1x`. The 1 is there and invisible.
- `x/4` means x ÷ 4, and it's usually written as a fraction.
- `x²` means x × x. (Not 2x. `x²` at x = 3 is 9, and `2x` at x = 3 is 6.)

And one rule that isn't shorthand: **the order of operations**. Brackets first, then powers, then multiplication and division left to right, then addition and subtraction left to right.

`2 + 3 × 4` is 14, not 20, because the multiplication happens first.

That rule isn't a law of nature; it's an agreement, so that everybody reads the same string of symbols the same way. Without it, `2 + 3 × 4` would be ambiguous and algebra would not work at all.

## Evaluating, with the negative that catches people

To evaluate an expression, substitute and compute. Two worked examples, and the second is the one worth slowing down for.

**Worked example 1.** Evaluate `5x - 2` when `x = 3`.

- Substitute: `5(3) - 2`
- Multiply first: `15 - 2`
- Subtract: **13**

**Worked example 2.** Evaluate `x² + 2x` when `x = -1`.

- Substitute, and use brackets around the negative number, which is the step people skip: `(-1)² + 2(-1)`
- Powers first. `(-1)²` is `(-1) × (-1)`, which is **+1**, because a negative times a negative is positive.
- Then the multiplication: `2(-1)` is `-2`.
- So: `1 + (-2)` = **-1**

The brackets in that second line are not decoration. Without them, `-1²` reads as "the negative of 1 squared", which is `-1`, and you get the wrong answer while doing everything else correctly.

:::checkpoint Evaluate `3x - x²` when `x = 4`, before reading on. Write out the substitution line before you compute anything.
Substitute first: `3(4) - (4)²`. Then powers: `(4)²` is 16. Then multiplication: `3(4)` is 12. So it's `12 - 16`, which is **-4**. If you got 4, you probably did `3 × 4 - 4` and then squared, or subtracted before evaluating the power. If you got 128, you multiplied 3 by 4 and then by 4 again. Writing the substitution line first is what prevents both, which is why it is a step rather than a formality.
:::

## Going the other way: words into symbols

Most of the value in algebra is in this direction, and it's harder than evaluating. Lesson 5 is entirely about the hard cases. Here are the building blocks.

| Words | Expression |
| --- | --- |
| five more than a number | `n + 5` |
| twice a number | `2n` |
| a number decreased by 3 | `n - 3` |
| half a number | `n / 2` |
| three less than twice a number | `2n - 3` |
| the cost of `t` tickets at $9 each | `9t` |
| $20 minus the cost of `t` tickets at $9 each | `20 - 9t` |

Two of those are worth staring at.

**"Three less than twice a number" is `2n - 3`, not `3 - 2n`.** The words arrive in the order "three... less than... twice a number", and if you write the symbols in the order the words came, you get it backwards. This is the first appearance of a mistake that has a name and a research literature, and lesson 5 is about it.

**And the check is the same check as before.** If the number is 10, "three less than twice a number" should be 17. Test `2n - 3`: 2(10) - 3 = 17. ✓. Test `3 - 2n`: 3 - 20 = -17. ✗. Ten seconds, no rules.

:::exercise Practice
Work these on paper, and write the substitution line before you compute.

1. Evaluate `4x - 3` when `x = 5`.
2. Evaluate `2a - b` when `a = 2` and `b = 7`.
3. Evaluate `x² - 5x` when `x = -2`. (Brackets around the -2.)
4. A taxi charges $3.50 to get in and $1.20 a mile. Write an expression for the fare for `d` miles.
5. Use your expression to find the fare for 7 miles.
6. Write "seven more than three times a number" as an expression, then check it with the number 4.
7. Someone claims `3x + 2x = 6x`. Test it with `x = 2` and say whether they're right.

Answers: 1. 17. 2. -3. 3. `(-2)² - 5(-2)` = 4 + 10 = 14. 4. `3.50 + 1.20d`. 5. 3.50 + 8.40 = $11.90. 6. `3n + 7`; at n = 4 that's 19, and "seven more than twelve" is 19. ✓ 7. Left side: 6 + 4 = 10. Right side: 12. Not equal, so no. (The right answer is `5x`, and at x = 2 that gives 10. ✓)
:::

## What people get wrong

**"The letter is the thing."** `a` is not apples, it's how many apples. Every "fruit salad" error comes from here, and every one of them dies when you put a number in.

**"`x²` and `2x` are about the same."** They're equal only when `x` is 0 or 2. At `x = 10` they're 100 and 20.

**Losing the minus sign when substituting.** `-3` substituted into `x²` is `(-3)²`, which is +9. Write the brackets.

**Writing symbols in the order the words came.** Sometimes right, often wrong, and always worth checking with a number.

## Connections

Lesson 2 takes the equals sign apart, which is the other half of what you need before you can solve anything.

Lesson 3 solves equations, and the "undoing" you did in the first predict block, taking off the $12 and dividing by 0.05, is exactly the method, written down properly.

Lesson 4 draws `12 + 0.05m` as a line, and the $12 and the 5 cents both turn out to be visible in the picture.

Lesson 5 is the words-into-symbols direction taken seriously, including the mistake in the table above.

## Go deeper

- [**OpenStax, *Elementary Algebra 2e*, chapter 1**](https://openstax.org/books/elementary-algebra-2e/pages/1-introduction), free online under a Creative Commons licence. Section 1.2, "Use the language of algebra", covers this lesson at more length and with many more exercises.
- [**Khan Academy, Algebra basics**](https://www.khanacademy.org/math/algebra-basics). Practice is the one thing a written lesson cannot give you, and their exercise engine is free and better than anything we could build.
