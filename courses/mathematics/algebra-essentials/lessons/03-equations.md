---
title: Solving, and why the moves are legal
minutes: 45
objectives:
  - Solve a linear equation in one unknown, and justify each step by what it does to both sides
  - Handle brackets, an unknown on both sides, and a negative term without losing the sign
  - Check every solution by substituting it back into the original equation
quiz:
  - q: >-
      Solve `6x - 4 = 2x + 12` and say what the check confirms.
    options:
      - >-
          `x = 2`, and substituting gives eight on the left and sixteen on the right
      - >-
          `x = 4`, and substituting gives sixteen on the left and twenty on the right
      - >-
          `x = 8`, and substituting gives forty four on both sides, so it holds
      - >-
          `x = 4`, and substituting gives twenty on both sides, so the claim holds
    answer: 3
    explain: >-
      Take `2x` off both sides to get `4x - 4 = 12`, add four to both to get `4x = 16`, divide
      by four to get `x = 4`. The check is what makes it safe: `6(4) - 4` is twenty, and `2(4) +
      12` is twenty, so the two sides are the same size and the claim is true. Option A gives a
      value that fails its own check, which the option even shows, since eight and sixteen are
      not the same size; if your check comes out unequal, the answer is wrong and no amount of
      confidence in the method changes that. Option B has the right value of x and an invented check, and it is the trap for anyone who solved correctly and then skimmed: both sides really are twenty. Option C solves a different equation.
  - q: >-
      A student expands `5(x - 3)` as `5x - 3` and gets an answer. How would you show them the
      expansion is wrong without quoting a rule at them?
    options:
      - >-
          Put a number in: at `x = 4` the bracket gives five and theirs gives seventeen
      - >-
          Point out that the five has to reach the second term inside the bracket
      - >-
          Point out that a bracket always means the whole expression is multiplied
      - >-
          Put a number in: at `x = 3` both versions give twelve, so the two agree
    answer: 0
    explain: >-
      At `x = 4`, `5(x - 3)` is `5 × 1`, which is five, and `5x - 3` is `20 - 3`, which is
      seventeen. Five is not seventeen, so the two expressions are not the same thing, and no
      rule had to be quoted. Option D does the arithmetic and then reports the wrong result: at `x = 3` the bracket gives zero and their version gives twelve, so the check refutes them at that value too. The two expressions differ by twelve at every value of x, so no test value makes them agree. Options B and C are both true statements of the rule, and the point of this
      course's method is that you can settle it without needing to remember one.
  - q: >-
      Solve `8 - 5x = 23`. Watch the sign.
    options:
      - >-
          `x = 3`, since eight take five threes is twenty three when signs are handled
      - >-
          `x = 3`, since fifteen divided by five is three and the minus signs cancel
      - >-
          `x = -3`, since taking eight off both sides gives minus five x equals fifteen
      - >-
          `x = -3`, since minus five x is minus fifteen, then divide by positive five
    answer: 2
    explain: >-
      Take eight off both sides and the left becomes `-5x` while the right becomes fifteen. Then
      divide both sides by minus five: fifteen divided by minus five is minus three. Check by
      substituting: `8 - 5(-3)` is `8 + 15`, which is twenty three, because subtracting a
      negative adds. Option D lands on the right value by dividing minus fifteen by positive five, which does not give minus three, so its route contradicts its own answer. Options A and B both
      drop the minus sign somewhere and land on positive three, which fails its own check: `8 -
      5(3)` is minus seven, not twenty three.
  - q: >-
      Which pair can be combined into a single term, and which cannot?
    options:
      - >-
          `4x` and `4y` combine to `8xy`; `4x` and `7x` cannot be combined at all
      - >-
          `4x` and `4x squared` combine to `8x cubed`; `4x` and `7x` combine to `28x`
      - >-
          All of them combine, since every term in algebra has a letter part in it
      - >-
          `4x` and `7x` combine to `11x`; `4x` and `4x squared` cannot be combined
    answer: 3
    explain: >-
      Like terms have the same letter part, so four lots of x and seven lots of x are eleven
      lots of x. The test is a number: at `x = 2`, the left is eight plus fourteen, which is
      twenty two, and `11x` is twenty two. But `x` and `x squared` are different things, and the
      same test shows it: at `x = 3` one is three and the other is nine. Option A combines two
      different letters into a product, which is the fruit salad error from lesson one, and it
      also denies a genuine combination. Option B multiplies where it should add. Option C
      states a rule that would let you add anything to anything.
  - q: >-
      Someone solves `4x + 6 = 18` by writing 'take six off' and getting `4x = 18`. What is the
      error, in terms of the balance?
    options:
      - >-
          They should have divided by four first, since division always comes before
      - >-
          They took six off the left pan only, so the pans no longer weigh the same
      - >-
          They took six off both pans but recorded the result on the wrong side
      - >-
          There is no error, since six was on the left and the left is where it goes
    answer: 1
    explain: >-
      The equation claims the two pans weigh the same. Removing six from the left and nothing
      from the right breaks that claim, so the line they now have is about a different situation
      from the one they were asked about. Taking six off both gives `4x = 12` and then `x = 3`,
      which checks: `4(3) + 6` is eighteen. Option D states the error as though it were the
      reason. Option A invents an ordering rule that does not exist, and either order works
      here. Option C describes a bookkeeping slip rather than what happened, and the giveaway is
      that the right side is unchanged at eighteen.
  - q: >-
      You solve an equation, get `x = 5`, substitute it back, and the two sides come out as nine
      and eleven. What does that tell you, and what should you do?
    options:
      - >-
          The answer is wrong, and the equation itself must have no solution at all
      - >-
          The check is unreliable, since substituting can introduce arithmetic errors
      - >-
          The answer is wrong, and the working needs redoing rather than adjusting
      - >-
          The answer is close, since nine and eleven are near, so try six instead
    answer: 2
    explain: >-
      A solution is a value that makes the two sides the same size. Nine is not eleven, so five
      is not a solution, and that verdict is certain no matter how confident you felt about the
      method. What it does not tell you is where the slip was, so the honest move is to redo the
      working rather than to nudge the answer. Option D is the tempting one and it is guessing
      dressed as reasoning; being near in value means nothing, since the sides are functions of
      x and a small change in x can move them a long way. Option A leaps from one bad answer to
      a claim about the whole equation. Option B is worth answering plainly: substitution can be
      done carelessly, but a check that disagrees is information, and the response is to do the
      check again slowly rather than to distrust checking.
---

Lesson 2 left you with a balance and a rule: whatever you do to one pan, you do to the other, and the beam stays level. This lesson turns that into a method.

Solving an equation means finding the value that makes the claim true. `3x + 5 = 20` is true for exactly one number, and the job is to find it without guessing.

## The goal, stated once

You want to end up with the letter alone on one side: `x = something`. That shape is an equation you can read the answer off.

Every move you make is chosen to get closer to that shape, and every move is legal for exactly one reason: it does the same thing to both pans, so the claim survives. There is no second reason.

## Solving one, every step annotated

Solve `3x + 5 = 20`.

| Line | What was done | Why it is allowed |
| --- | --- | --- |
| `3x + 5 = 20` | the equation we were given | |
| `3x = 15` | took 5 off both sides | the pans were equal, so they still are |
| `x = 5` | divided both sides by 3 | same |

Now the step most people skip, and the one that makes algebra safe: **check it.** Put 5 back into the original equation. `3(5) + 5` is `15 + 5`, which is 20, and the right side is 20. The two sides are the same size, so the claim is true, so 5 is the solution.

Notice what the check does. It doesn't tell you that your method was good; it tells you that your answer is right, which is the thing you actually care about. You can get an answer by any route at all, including guessing, and the check will still confirm or destroy it.

:::checkpoint Solve `2(x + 3) = 14`, then check. There are two sensible routes; take either.
Four. Route one: divide both sides by 2, giving `x + 3 = 7`, then take 3 off both sides, giving `x = 4`. Route two: expand the bracket first, giving `2x + 6 = 14`, then take 6 off both, then divide by 2. Both are legal because both do the same thing to both sides, and both arrive at the same place, which is a useful thing to notice: there is rarely one correct order. Check: `2(4 + 3)` is `2 × 7`, which is 14, and the right side is 14.
:::

## The harder shape: a bracket, both sides, and a negative

Most real equations are messier than the first one in three ways at once: a bracket, the unknown on both sides, and a negative term. All three at once:

Solve `4(x - 2) = 2x + 6`.

| Line | What was done |
| --- | --- |
| `4(x - 2) = 2x + 6` | given |
| `4x - 8 = 2x + 6` | expanded the bracket: 4 times `x` and 4 times `-2` |
| `2x - 8 = 6` | took `2x` off both sides |
| `2x = 14` | added 8 to both sides |
| `x = 7` | divided both sides by 2 |

Check: `4(7 - 2)` is `4 × 5`, which is 20. And `2(7) + 6` is `14 + 6`, which is 20. The sides match, so 7 is right.

Two things in that working are worth slowing down for.

**Expanding the bracket.** `4(x - 2)` means four lots of `(x - 2)`, so it is `4x - 8`, not `4x - 2`. The multiplier reaches everything inside the bracket, including the second term and its sign. Test it with a number if you ever doubt it: at `x = 3`, `4(3 - 2)` is 4, and `4x - 8` is `12 - 8`, which is 4, while `4x - 2` would be 10.

**Taking `2x` off both sides.** You can subtract an expression, not just a number. The balance does not care what the weight is made of, only that you removed the same weight from both pans.

:::checkpoint Below is `5x - 3 = 2x + 9`, worked to the second to last line. Take `2x` off both sides to get `3x - 3 = 9`. Add 3 to both sides to get `3x = 12`. Finish it, and check your answer.
Divide both sides by 3, so `x = 4`. Check: `5(4) - 3` is `20 - 3`, which is 17, and `2(4) + 9` is `8 + 9`, which is 17. Both sides are 17, so 4 is the solution. If you finished it without needing the check, do the check anyway; it takes ten seconds and it is the step that cannot lie to you.
:::

## The minus sign belongs to the term

The most common source of arithmetic slips in solving is a sign, and it is worth meeting directly rather than being warned about.[1]

Look at `7 - 3x = 1`. It is tempting to see a 7 and a 3 and produce a 4. That is wrong, and the reason is that the minus sign is not an instruction sitting between two numbers; it belongs to the `3x`. The left side is "seven, plus negative three lots of x".

So solve it properly:

| Line | What was done |
| --- | --- |
| `7 - 3x = 1` | given |
| `-3x = -6` | took 7 off both sides |
| `x = 2` | divided both sides by -3 |

Check: `7 - 3(2)` is `7 - 6`, which is 1. Correct.

And notice the last division. Dividing both sides by a negative is legal like every other move: it is the same operation on both pans. Minus six divided by minus three is positive two, because a negative divided by a negative is positive.

If you ever lose track of a sign, the check catches it immediately, which is the argument for checking every single time rather than only when you are unsure.

:::predict Solve `9 - 2x = x - 3` before reading on, and check it.
Four. Add `2x` to both sides: `9 = 3x - 3`. Add 3 to both sides: `12 = 3x`. Divide by 3: `4 = x`, which is the same claim as `x = 4`, since the sign means the two sides are the same size and does not care which way round they are written. Check: `9 - 2(4)` is `9 - 8`, which is 1, and `4 - 3` is 1. Both sides are 1. If you got minus four, you probably combined the two x terms as `-3x` instead of `-x`, which is the commonest slip in this shape.
:::

## Collecting like terms, which is why simplifying exists

`5x - 3 = 2x + 9` had `x` terms on both sides, and the first move gathered them. That gathering has a name, collecting like terms, and it exists in service of solving rather than as a topic of its own.

**Like terms are terms with the same letter part.** `3x` and `5x` are like terms and add to `8x`. `3x` and `5y` are not, and cannot be combined at all. `3x` and `5x²` are not either, because `x` and `x²` are different things: at `x = 3`, one is 9 and the other is 27.

The test, as always, is a number. Does `3x + 5x = 8x`? At `x = 2`: the left is `6 + 10`, which is 16, and the right is 16. Yes. Does `3x + 5y = 8xy`? At `x = 2` and `y = 1`: the left is `6 + 5`, which is 11, and the right is `8 × 2 × 1`, which is 16. No.

## What people get wrong

**Doing something to one side only.** Not a move. The equation you end up with is not the one you started with, so its answer is not the answer to your problem.

**`4(x - 2)` becoming `4x - 2`.** The multiplier reaches every term inside the bracket.

**Losing the sign on a moved term.** `9 - 2x = x - 3` becomes `9 = 3x - 3`, not `9 = -x - 3`. If you are unsure, add the term to both sides explicitly rather than "moving it over", which is a description of the result rather than a move.

**Reading `7 - 3x` as a subtraction between 7 and 3.** The minus belongs to the `3x`.

**Not checking.** Every solution can be verified in ten seconds by substitution, and the check is the only step that cannot be fooled by a confident wrong method.

:::exercise Practice
Solve each, then check by substituting your answer into the original equation. Do not skip the checks; they are the point.

1. A delivery costs a $7 fee taken off a $13 credit, giving `4x - 7 = 13`. Solve for the number of items `x`
2. `5x - 8 = 3x + 2`
3. `x/4 + 2 = 6`
4. `3(2x - 1) = 15`
5. A pizza is cut so that one share is twice another and the whole is six slices, giving `6 - x = 2x`. Solve it
6. `2(x + 4) = 3x + 1`
:::

:::checkpoint Answers to the practice set, once you have done all six
1. `x = 5`, since `4(5) - 7` is 13.

2. `x = 5`, since `5(5) - 8` is 17 and `3(5) + 2` is 17.

3. `x = 16`, since `16/4 + 2` is 6.

4. `x = 3`, since `3(2 × 3 - 1)` is `3 × 5`, which is 15.

5. `x = 2`, since `6 - 2` is 4 and `2 × 2` is 4.

6. `x = 7`, since `2(7 + 4)` is 22 and `3(7) + 1` is 22.
:::

## Connections

Lesson 2's balance is the whole justification for every move here. If you ever forget why a step is allowed, put the equation back on the scales and ask what you did to each pan.

Lesson 1's habit of substituting a number is what the check is, and it is also how you settle any question about whether two expressions are the same.

Lesson 4 draws relationships as lines, and solving turns up there as finding where a line reaches a particular height.

The lesson after that writes equations from sentences, which is the hard half of this subject: solving an equation you were handed is mechanical, and producing the right equation is where the thinking is.

## Sources

[1] The lesson's shape comes from John Sweller and Graham Cooper, "The use of worked examples as a substitute for problem solving in learning algebra", *Cognition and Instruction* 2(1), 1985. Across five experiments with study time held equal, learners who studied worked examples went on to solve similar problems in about half the time and with roughly a fifth of the errors. That is why every idea here arrives as a worked example first, then as one with the last step removed for you to supply, and only then as a problem.

## Go deeper

- [**OpenStax, *Elementary Algebra 2e*, chapter 2**](https://openstax.org/books/elementary-algebra-2e/pages/2-introduction), free online, which works through the same moves with many more examples and states them as formal properties of equality.
- [**Khan Academy, solving equations**](https://www.khanacademy.org/math/algebra-basics/alg-basics-linear-equations-and-inequalities), for practice with immediate feedback.
