---
title: Two unknowns at once
minutes: 70
objectives:
  - Solve a pair of linear equations by substitution and by elimination, and check the answer in both
  - Say what the solution of a pair means on a graph, and what parallel or identical lines look like in the algebra
  - Set up a pair of equations from a situation with two unknown quantities
quiz:
  - q: >-
      Solve `y = x + 4` together with `2x + y = 13`.
    options:
      - >-
          `x = 3` and `y = 7`
      - >-
          `x = 4` and `y = 8`
      - >-
          `x = 5` and `y = 9`
      - >-
          `x = 4.5` and `y = 4`
    answer: 0
    explain: >-
      The first equation already has `y` alone, so put `x + 4` in place of `y` in the second:
      `2x + (x + 4) = 13`, which is `3x + 4 = 13`, so `3x = 9` and `x = 3`. Then `y = 3 + 4`,
      which is 7. Check in both, since checking in one is the classic slip: the first gives
      `7 = 3 + 4`, and the second gives `6 + 7 = 13`. Options B and C both satisfy the first
      equation, because any pair four apart does, and both fail the second: `8 + 8` is 16 and
      `10 + 9` is 19. Option D is the same trap from the other side: it satisfies the second
      equation, since `9 + 4` is 13, and fails the first, since 4 is not `4.5 + 4`. Checking
      either equation on its own would have passed one of these three wrong pairs, which is why
      one equation is never enough for two unknowns.
  - q: >-
      You have `5x + y = 23` and `3x - y = 9`. What happens if you add the two equations
      together, side by side?
    options:
      - >-
          `8x + 2y = 32`, which still has both letters left in it
      - >-
          `2x = 14`, since the two left sides differ by two `x` alone
      - >-
          `8x = 32`, because the `+y` and the `-y` cancel each other
      - >-
          `8x = 207`, since the two right sides are multiplied together
    answer: 2
    explain: >-
      Adding the left sides gives `5x + y + 3x - y`, and the `+y` and the `-y` cancel, leaving
      `8x`. Adding the right sides gives 32. So `8x = 32` and `x = 4`, and putting that back into
      either equation gives `y = 3`. Check in both: `20 + 3 = 23`, and `12 - 3 = 9`. Option A
      adds the `x` terms and then forgets that the `y` terms were opposite in sign. Option D
      multiplies the right sides, which is not what adding two equations does. Option B takes two
      slips rather than one: subtracting is legal here and gives `2x + 2y = 14`, and reaching
      `2x = 14` also takes `y` minus `-y` to be nothing, when it is `2y`.
  - q: >-
      Working on a pair of equations, you eliminate a letter and end up with `0 = 7`. What does
      that tell you?
    options:
      - >-
          That `x` is 7, and `y` can be found by substituting back in
      - >-
          That there is no solution at all, because the lines are parallel
      - >-
          That there are infinitely many solutions, since anything satisfies it
      - >-
          That an arithmetic slip has been made and the work must be redone
    answer: 1
    explain: >-
      `0 = 7` is false whatever the letters are, so no pair of numbers can satisfy both
      equations at once. On a graph that is two parallel lines: same slope, different intercept,
      never meeting. Option D is the honest first instinct and it is worth acting on once, but
      when the arithmetic is right the false line is the answer rather than a mistake. Option C
      describes what `0 = 0` means, which is the opposite case: the two equations are the same
      line and every point on it works. Option A reads the seven as a value for a letter that is
      no longer in the equation.
  - q: >-
      Two equations are drawn as two straight lines on the same axes. What is the solution of
      the pair, in the picture?
    options:
      - >-
          The steeper of the two lines, since it satisfies the larger equation
      - >-
          The pair of intercepts, read off where each line meets the vertical axis
      - >-
          The distance between the lines at the point where they are closest together
      - >-
          The point where they cross, whose coordinates satisfy both equations
    answer: 3
    explain: >-
      A line is the set of all the pairs that satisfy its equation. Two lines crossing at one
      point means exactly one pair satisfies both, and its coordinates are the solution. That is
      also why parallel lines mean no solution and why one line drawn twice means infinitely
      many. Option B takes two numbers that belong to the two equations separately and neither of
      which need satisfy the other. Option A picks a whole line rather than a pair of numbers.
      Option C describes a quantity that is zero for lines that cross and constant for lines that
      do not, and in neither case is it the solution.
  - q: >-
      You have `3x + 2y = 12` and `x + 5y = 17`, and you want to eliminate `x`. Which single
      move sets that up?
    options:
      - >-
          Add the two equations, since the `x` terms will cancel as they stand
      - >-
          Multiply the second equation by 3, then subtract it from the first
      - >-
          Multiply the first equation by 5 and the second by 2, then add them
      - >-
          Divide the second equation by 3, so that its `y` term comes out smaller
    answer: 1
    explain: >-
      Multiplying the whole of the second equation by 3 gives `3x + 15y = 51`, which now has the
      same `x` term as the first. Subtracting leaves `-13y = -39`, so `y = 3`, and substituting
      back gives `x = 2`. Check in both: `6 + 6 = 12`, and `2 + 15 = 17`. Option A would give
      `4x + 7y = 29`, which eliminates nothing. Option C scales sensibly and then does the wrong
      thing with the result: both equations end up with `+10y`, so adding them gives
      `17x + 20y = 94` and cancels nothing, while subtracting would have removed the `y`. Option
      D turns the second equation into thirds and leaves the first alone, so no term in either
      one matches a term in the other.
  - q: >-
      Six pens and two notebooks cost $19. Three pens and four notebooks cost $20. Which pair of
      equations says that, with `p` and `n` for the two prices?
    options:
      - >-
          `p + n = 19` and `p + n = 20`, one equation for each purchase made
      - >-
          `6p + 2n = 20` and `3p + 4n = 19`, taking the totals in order given
      - >-
          `6p = 19` and `2n = 20`, since each item needs an equation of its own
      - >-
          `6p + 2n = 19` and `3p + 4n = 20`, each purchase being one equation
    answer: 3
    explain: >-
      Each purchase is one fact about the two prices, so it is one equation: six pens at `p` plus
      two notebooks at `n` came to 19, and three pens plus four notebooks came to 20. Solving them
      confirms it: double the second to get `6p + 8n = 40`, subtract the first, and `6n = 21`, so
      a notebook is $3.50 and a pen is $2. Check in both, `12 + 7 = 19` and `6 + 14 = 20`. Option
      B attaches each total to the wrong purchase, and the check kills it. Option A drops the
      quantities, which are the only reason the two purchases differ. Option C splits a purchase
      into two equations, which claims the pens alone cost 19.
  - q: >-
      A pair of numbers satisfies the first of two equations. What can you conclude?
    options:
      - >-
          That it is the solution, since a pair that fits an equation fits the system
      - >-
          That the second equation can now be ignored as a duplicate of the first
      - >-
          Nothing yet, since infinitely many pairs satisfy any single linear equation
      - >-
          That the second equation must therefore have no solutions of its own
    answer: 2
    explain: >-
      Every point on a line satisfies that line's equation, and a line has infinitely many
      points, so satisfying one equation puts you somewhere on one line and says nothing about
      the other. The solution is the pair that satisfies both, which is why the check at the end
      of every one of these problems is done twice. Option A is the classic slip and it is the
      reason a wrong answer can feel confirmed. Option B would only be true if the two equations
      described the same line. Option D confuses a pair failing one equation with the equation
      having no solutions, and a single linear equation in two unknowns always has plenty.
---

Lesson 5 dodged something. The theatre problem had two unknown numbers in it, standard tickets and concessions, and the way round it was to call the concessions `c` and write the standard tickets as `3c`, so that only one letter ever appeared.

That works when one quantity is described directly in terms of the other. Often it is not. You know two facts about two quantities and neither fact hands you one in terms of the other. Then you need both facts written down as equations, and a way of working with the pair.

## What a pair of equations is claiming

Take these two.

`x + y = 90`

`12x + 7y = 880`

Each one on its own has an enormous number of solutions. The first is satisfied by `x = 1, y = 89` and by `x = 20, y = 70` and by `x = 90, y = 0`, and by infinitely many other pairs. The second is satisfied by a different infinite collection.

Asking for a **solution of the pair**, which is what people mean by a **system**, is asking for the one pair of numbers that satisfies **both**. That is the whole idea, and everything else in this lesson is machinery for finding it.

The picture makes it obvious. Each equation is a straight line, in the sense of lesson 4: the line is made of all the pairs that satisfy it. Two lines that are not parallel cross at exactly one point, and that point is on both lines, so its two coordinates satisfy both equations.

<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:420px;display:block;margin:1.5em auto;font-family:system-ui,sans-serif" role="img" aria-labelledby="sys-title sys-desc">
  <title id="sys-title">Two lines crossing at a single point</title>
  <desc id="sys-desc">Axes with two straight lines drawn on them. One line falls from left to right and the other rises. They cross at a single marked point, labelled as the one pair of numbers that satisfies both equations.</desc>
  <line x1="55" y1="22" x2="55" y2="200" stroke="var(--text-2, #4a5260)" stroke-width="1"/>
  <line x1="55" y1="200" x2="400" y2="200" stroke="var(--text-2, #4a5260)" stroke-width="1"/>
  <text x="46" y="205" font-size="15" text-anchor="end" fill="var(--text-2, #4a5260)">0</text>
  <text x="228" y="228" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">x</text>
  <text x="30" y="30" font-size="15" text-anchor="middle" fill="var(--text-2, #4a5260)">y</text>
  <line x1="60" y1="60" x2="390" y2="180" stroke="var(--navy, #0f2a4a)" stroke-width="2.5"/>
  <line x1="60" y1="190" x2="390" y2="45" stroke="var(--gold, #b08d2a)" stroke-width="2.5"/>
  <circle cx="222" cy="119" r="5.5" fill="var(--oxblood, #8b1e2d)"/>
  <line x1="155" y1="124" x2="215" y2="120" stroke="var(--oxblood, #8b1e2d)" stroke-width="1"/>
  <text x="150" y="116" font-size="15" font-weight="700" text-anchor="end" fill="var(--oxblood, #8b1e2d)">the one pair</text>
  <text x="150" y="134" font-size="15" text-anchor="end" fill="var(--text-2, #4a5260)">on both lines</text>
  <text x="62" y="252" font-size="15" fill="var(--text-2, #4a5260)">each line holds every pair that fits it</text>
</svg>

You could find the crossing point by drawing carefully and reading it off, and for a rough answer that is a perfectly good method. The algebra is for when you want it exactly.

## Method one: substitution

Substitution is the method from lesson 5 made general. Get one letter alone in one equation, then put what it equals into the other, which leaves an equation in a single unknown, which is lesson 3.

**The situation.** A theatre sells adult tickets at $12 and child tickets at $7. One evening it sells 90 tickets and takes $880. How many of each?

**Name the letters as numbers.** Let `x` be the number of adult tickets and `y` the number of child tickets.

**Write both facts.**

- Ninety tickets in all: `x + y = 90`
- Eight hundred and eighty dollars in all: `12x + 7y = 880`

**Get one letter alone.** The first equation is the easy one. Take `x` off both sides: `y = 90 - x`.

**Substitute into the other.** Everywhere the second equation says `y`, write `90 - x` instead.

`12x + 7(90 - x) = 880`

**Now it is lesson 3.** Expand the bracket: `12x + 630 - 7x = 880`. Collect the `x` terms: `5x + 630 = 880`. Take 630 off both sides: `5x = 250`. Divide by five: `x = 50`.

**Find the other letter.** Put `x = 50` back into whichever equation is simpler: `y = 90 - 50`, so `y = 40`.

**Check in both equations, not one.** First: `50 + 40 = 90`. Second: `12 × 50` is 600, `7 × 40` is 280, and `600 + 280 = 880`. Both hold, so the answer is fifty adult tickets and forty child tickets.

The step people skip is the last one, and it is skipped because after all that work the answer feels earned. It is not earned until it survives both equations.

:::checkpoint Solve `y = 2x - 1` together with `3x + y = 14`, then check. The first equation has `y` alone already, so the substitution is done for you: `3x + (2x - 1) = 14`. Finish it.
Collect the `x` terms: `5x - 1 = 14`. Add one to both sides: `5x = 15`. Divide by five: `x = 3`. Then `y = 2 × 3 - 1`, which is 5. Check in both. The first: `5 = 2 × 3 - 1`, which is `5 = 5`. The second: `3 × 3 + 5` is `9 + 5`, which is 14. Notice that the pair `x = 3, y = 5` is one point, and it is the crossing point of those two lines.
:::

## Method two: elimination

Sometimes neither equation gives a letter up easily, and substitution drags fractions in. Elimination goes at it from the other side: combine the two equations so that one letter disappears.

Start with a pair where it works with no preparation at all.

`4x + y = 14`

`2x - y = 4`

Add the two equations, left sides together and right sides together. The left gives `4x + y + 2x - y`, and the `+y` and the `-y` cancel, leaving `6x`. The right gives 18. So:

`6x = 18`, and `x = 3`.

Then substitute back into either equation: `4 × 3 + y = 14` gives `12 + y = 14`, so `y = 2`. Check in both: `12 + 2 = 14`, and `6 - 2 = 4`. Both hold.

**Why is adding two equations allowed?** Because of the balance from lesson 2. The second equation says that `2x - y` and `4` are two names for the same number. Adding that number to the left side of the first equation and adding 4 to its right side is doing the same thing to both sides, which is the one move that keeps an equation true. Elimination is not a new rule; it is the old rule with a slightly cleverer choice of what to add.

### When the coefficients do not match

Most pairs are not so obliging. Here the letters do not cancel as they stand.

**The situation.** Two coffees and three teas cost $11.50. Four coffees and one tea cost $13.50. What does each drink cost?

Let `c` be the price of a coffee in dollars and `t` the price of a tea.

`2c + 3t = 11.50`

`4c + t = 13.50`

Adding these gives `6c + 4t = 25`, which eliminates nothing. Subtracting gives `-2c + 2t = -2`, which is a simpler equation but still has both letters.

**The move.** Multiply one whole equation by a number so that one letter matches in both. Multiplying the first equation by 2 gives:

`4c + 6t = 23`

Every term doubled, including the right side, because multiplying both sides of an equation by the same number keeps it true. Now the `c` terms match, so subtract the second equation from this one.

`4c + 6t = 23`

`4c + t = 13.50`

Subtracting: the `c` terms give zero, the `t` terms give `5t`, and the right sides give `9.50`. So `5t = 9.50`, and `t = 1.90`.

Substitute back into the second original equation: `4c + 1.90 = 13.50`, so `4c = 11.60` and `c = 2.90`.

**Check in both originals.** First: `2 × 2.90` is 5.80, `3 × 1.90` is 5.70, and they add to 11.50. Second: `4 × 2.90` is 11.60, plus 1.90 is 13.50. A coffee is $2.90 and a tea is $1.90.

The step that feels arbitrary is multiplying an equation by 2 for no reason visible in the problem. The reason is entirely tactical: you are choosing a form of the same true statement that happens to cancel neatly against the other one. Nothing about the situation changed. Two coffees and three teas still cost $11.50; four coffees and six teas costing $23 is the same fact said louder.

:::predict Here is another pair where nothing cancels as it stands: `2x + 5y = 24` and `3x + 2y = 14`. The scaling is done for you. Multiply the first by 3 and the second by 2, so that both have the same `x` term, and you get `6x + 15y = 72` and `6x + 4y = 28`. Finish it, and check in both of the original equations.
Subtract the second of the scaled equations from the first: the `x` terms give zero, the `y` terms give `11y`, and the right sides give 44. So `11y = 44` and `y = 4`. Substitute back into either original: `2x + 20 = 24`, so `x = 2`. Check in both originals, since one is never enough. The first: `4 + 20 = 24`. The second: `6 + 8 = 14`. Notice that scaling both equations rather than one is sometimes the tidier route, and the choice of 3 and 2 came from wanting the two `x` terms to meet at 6, which is the smallest number both 2 and 3 divide into.
:::

## Which method to use

Neither is better in general, and both give the same answer, since both are just ways of getting down to one unknown.

**Substitution is easier when a letter is already alone**, or has a coefficient of 1 so that getting it alone costs nothing. `y = 2x - 1` is begging to be substituted.

**Elimination is easier when neither letter is alone** and the coefficients are close to matching. The coffee problem done by substitution means writing `t = 13.50 - 4c` and pushing that through, which works and is messier.

If you cannot decide, pick one. The wasted effort of choosing the clumsier method is smaller than the wasted effort of deliberating.

## When there is no crossing point

Two lines that are not parallel cross exactly once. Two that are parallel never cross, and one line drawn twice crosses everywhere. Both of those show up in the algebra as something odd.

**No solution.** Take `y = 2x + 1` and `y = 2x + 5`. Substituting the first into the second gives `2x + 1 = 2x + 5`. Take `2x` off both sides and you get `1 = 5`, which is false no matter what `x` is. So no pair of numbers satisfies both. Look at the two equations again: both lines climb at a rate of 2 and they start at different heights, so they run alongside each other for ever.

**Infinitely many solutions.** Take `2x + y = 6` and `4x + 2y = 12`. Multiply the first by 2 and you get the second exactly. Eliminating gives `0 = 0`, which is true and tells you nothing about `x`. It is one line written in two ways, and every point on it is a solution.

So when the letters vanish, read what is left. A false statement like `0 = 7` means the lines are parallel and there is no answer. A true statement like `0 = 0` means the two equations are the same line. Neither is a mistake, and both are worth recognising rather than staring at.

## What people get wrong

**Forgetting that the answer is a pair.** "The solution is 3" is not an answer to a system. The solution is `x = 3` and `y = 2`, and a question about tickets or drinks wants both numbers with their units.

**Checking in one equation only.** Half the arithmetic slips available in this lesson produce a pair that satisfies one equation and fails the other. Checking one is not much better than checking none.

**Multiplying only part of an equation.** Doubling `2c + 3t = 11.50` means doubling the 11.50 as well. Leaving the right side alone breaks the claim, and the answer that follows will fail the check.

**Losing a minus sign when subtracting equations.** Subtracting `4c + t = 13.50` means subtracting the `t` and the 13.50 too. This is lesson 3's misconception in a new place, and the fix is the same: write the subtraction out rather than doing it in your head.

**Treating `0 = 0` as an error.** It means the two facts you were given were the same fact, which is a real thing that happens when a problem is written carelessly or when two measurements say the same thing.

:::exercise Practice
Take thirty minutes over these. Solve each system, by whichever method looks easier, and check every answer in **both** equations before moving on.

1. `y = x + 2` and `3x + y = 18`
2. `2x + y = 11` and `x - y = 1`
3. `3x + 4y = 26` and `x + 2y = 12`
4. `y = 4x - 3` and `y = 4x + 1`
5. Two adults and three children pay $46 to get in. One adult and five children pay $44. What does each ticket cost?
6. A shop sells 60 items in a day, some at $4 and the rest at $9, and takes $415. How many of each did it sell?
:::

:::checkpoint Answers to the practice set, once you have done all six
1. Substitute: `3x + (x + 2) = 18`, so `4x + 2 = 18`, `4x = 16`, `x = 4`, and `y = 6`. Check: `6 = 4 + 2`, and `12 + 6 = 18`.

2. Add them, since the `y` terms are already opposite: `3x = 12`, so `x = 4`. Then `8 + y = 11`, so `y = 3`. Check: `8 + 3 = 11`, and `4 - 3 = 1`.

3. Multiply the second by 3 to get `3x + 6y = 36`, then subtract the first: `2y = 10`, so `y = 5`. Then `x + 10 = 12`, so `x = 2`. Check: `6 + 20 = 26`, and `2 + 10 = 12`.

4. Substituting gives `4x - 3 = 4x + 1`, and taking `4x` off both sides leaves `-3 = 1`, which is false. There is no solution: both lines have a slope of 4 and different intercepts, so they are parallel.

5. Let `a` and `c` be the two ticket prices in dollars. `2a + 3c = 46` and `a + 5c = 44`. Multiply the second by 2: `2a + 10c = 88`. Subtract the first: `7c = 42`, so `c = 6`, and then `a = 44 - 30`, which is 14. Check in both: `28 + 18 = 46`, and `14 + 30 = 44`. An adult ticket is $14 and a child's is $6.

6. Let `x` be the number at $4 and `y` the number at $9. `x + y = 60` and `4x + 9y = 415`. Substitute `x = 60 - y`: `240 - 4y + 9y = 415`, so `5y = 175` and `y = 35`. Then `x = 25`. Check: `25 + 35 = 60`, and `100 + 315 = 415`.
:::

## Connections

Lesson 2's balance is what makes both methods legal. Adding one equation to another is adding the same thing to both sides, and multiplying an equation through is multiplying both sides by the same number.

Lesson 3 is the engine. Every system here was reduced to a single equation in one unknown and then solved exactly as that lesson taught.

Lesson 4 supplies the picture, and the printer question in that lesson was already a system: two cost lines, and the question of where they cross.

Lesson 5's naming and numerical checking is what turns a situation with two unknowns into a pair of equations at all, which is steps one and two of every word problem here.

## Where this course stops, and what comes next

That is the course. You can say what a letter means, keep an equation true while you change it, solve one for its unknown, read and write a straight line, turn a sentence into an equation, and handle two unknowns at once. That is the working core of elementary algebra.

What this course deliberately leaves out is quadratics, factoring, exponents, and inequalities. Those need more space than a foundation course has. Two free places to get them, both good:

- [**OpenStax, *Elementary Algebra 2e*, chapters 6 to 10**](https://openstax.org/books/elementary-algebra-2e/pages/6-introduction), which continues where this leaves off, with full worked solutions. Inequalities are the exception: they sit back in chapter 2, section 2.7, rather than in that later block.
- [**Khan Academy's Algebra 1**](https://www.khanacademy.org/math/algebra), for practice with immediate feedback, which is the thing a written course cannot give you.

## Go deeper

- [**OpenStax, *Elementary Algebra 2e*, chapter 5**](https://openstax.org/books/elementary-algebra-2e/pages/5-introduction), free online, on systems of linear equations, with a longer treatment of graphing them.
- [**Khan Academy, systems of equations**](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations), for practice with both methods.
