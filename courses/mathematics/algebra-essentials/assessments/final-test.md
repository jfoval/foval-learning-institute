---
title: Final test
pass_mark: 0.7
minutes: 40
quiz:
  # lesson 1: a letter is a number
  - q: >-
      A cleaner charges a $35 call-out fee plus $28 an hour. Written as `35 + 28h`, what is the
      bill for a job that takes three and a half hours?
    options:
      - >-
          $133, since three and a half hours at twenty eight is ninety eight
      - >-
          $220.50, since the whole expression is multiplied by the hours
      - >-
          $63, since the fee and the rate are added and the hours follow
      - >-
          $98, since the hourly charge is the part that has to be paid
    answer: 0
    explain: >-
      Substituting `h = 3.5` gives `35 + 28 × 3.5`, and multiplication comes before addition, so
      it is `35 + 98`, which is $133. Option D does the multiplication and then drops the fee,
      which is the most common slip here and it is worth noticing that it always undercharges by
      exactly the fee. Option C adds the two numbers in the expression and never uses the hours
      at all. Option B multiplies the whole expression by the hours, which would charge the
      call-out fee once per hour.
  - q: >-
      Someone writes `4p + 5q = 9pq`, explaining that `p` is pears and `q` is quinces. What has
      gone wrong?
    options:
      - >-
          The letters should be the same letter, since both are kinds of fruit
      - >-
          Nothing is wrong; unlike terms are combined by multiplying the letters
      - >-
          The addition is right but the answer should be `20pq` instead
      - >-
          A letter stands for a number, so `4p` and `5q` cannot be collected
    answer: 3
    explain: >-
      `p` is not pears; it is how many pears, which is a number. Test the claim with numbers:
      two pears and three quinces gives `4 × 2 + 5 × 3`, which is 23, while `9pq` gives
      `9 × 2 × 3`, which is 54. Unlike terms stay apart, and that is what "unlike" means. Option
      B states the error the question is about. Option C keeps the wrong shape and changes the
      number in front of it. Option A treats the letters as labels for kinds of thing, which is
      the misconception that produced the equation in the first place.
  - q: >-
      Write an expression for the total cost of a gym membership that charges $45 to join and
      then $29 a month for `m` months. Which is right?
    options:
      - >-
          `45m + 29`, since the joining fee is what recurs each month
      - >-
          `45 + 29m`, since the fee is paid once and the rate is paid monthly
      - >-
          `45 + 29 + m`, since all three quantities go into the total
      - >-
          `74m`, since the two charges can be added before multiplying
    answer: 1
    explain: >-
      The joining fee is paid once, so nothing multiplies it. The monthly charge is paid `m`
      times, so `m` multiplies it. Test with six months: `45 + 174`, which is $219, and that is
      right. Option A swaps which charge recurs, and the units expose it, since a joining fee
      charged monthly is not a joining fee. Option D adds the two rates before multiplying,
      which charges the joining fee every month as well. Option C adds a number of months to a
      number of dollars.
  # lesson 2: what equals means
  - q: >-
      What number goes in the box to make `8 + 4 = __ + 5` true?
    options:
      - >-
          12, because that is what eight and four come to
      - >-
          17, because the two sides are added together
      - >-
          7, because both sides then come to twelve
      - >-
          5, because the right side already contains a five
    answer: 2
    explain: >-
      The sign claims the two sides are the same size. The left side is 12, so the right side
      has to be 12 as well, and `7 + 5` is 12. Option A is the answer that comes from reading the
      equals sign as an instruction to compute rather than as a claim, and in the studies behind
      this course it is the most common answer given at every school age. It is worth pausing on
      if you chose it, because everything about solving equations depends on the other reading.
      Option B adds everything in sight. Option D copies a number already on the page.
  - q: >-
      Is `19 = 12 + 7` a properly written equation?
    options:
      - >-
          No, because the answer has to come after the equals sign
      - >-
          No, because the sum should be worked out and written as 19 = 19
      - >-
          Yes, but only because the two sides happen to be equal by chance
      - >-
          Yes, because both sides name the same number, which is all `=` claims
    answer: 3
    explain: >-
      Both sides are 19, so the claim is true, and where the arithmetic sits makes no difference
      to that. If it looks wrong, that feeling is the operational reading of the sign showing
      itself. Options A and B are two versions of the same habit, one about position and one
      about form. Option C gets the verdict right for a reason that is not a reason: nothing
      about equality is a coincidence here, since 12 and 7 were chosen to make it hold.
  - q: >-
      You have `5x + 3 = 18`. Which move keeps the equation true?
    options:
      - >-
          Subtract 3 from the left side, since the goal is to isolate the `5x`
      - >-
          Subtract 3 from both sides, since equal things stay equal
      - >-
          Divide the left side by 5 and subtract 3 from the right side
      - >-
          Move the 3 across the equals sign and change nothing else
    answer: 1
    explain: >-
      An equation says two things are the same size, so anything done to one side has to be done
      to the other or the claim stops being true. Taking 3 off both sides gives `5x = 15`. Option
      A takes it off one side only, which turns a true statement into a false one. Option C does
      two different things to the two sides. Option D describes the shortcut people are taught,
      and the shortcut is a description of what taking 3 off both sides looks like on the page
      rather than a separate rule; stated on its own it is exactly what produces sign errors.
  # lesson 3: solving
  - q: >-
      Solve `6x + 7 = 43`.
    options:
      - >-
          `x = 6`
      - >-
          `x = 8.33`
      - >-
          `x = 36`
      - >-
          `x = 5`
    answer: 0
    explain: >-
      Take 7 off both sides to get `6x = 36`, then divide both sides by 6, so `x = 6`. Check by
      substituting, which is the habit that makes the rest self-correcting: `6 × 6 + 7` is
      `36 + 7`, which is 43. Option C stops at `6x = 36` and reports 36 as the answer, which is
      the most common slip on this shape. Option B divides 50 by 6, adding where it should have
      subtracted. Option D would give 37.
  - q: >-
      Solve `4(x - 2) = 2x + 6`.
    options:
      - >-
          `x = 2`
      - >-
          `x = 7`
      - >-
          `x = 1`
      - >-
          `x = 14`
    answer: 1
    explain: >-
      Expand the bracket first: `4x - 8 = 2x + 6`. Take `2x` off both sides: `2x - 8 = 6`. Add 8
      to both: `2x = 14`. Divide: `x = 7`. Check both sides separately, since that is what makes
      this shape safe: the left is `4 × 5`, which is 20, and the right is `14 + 6`, which is 20.
      Option D stops one step early at `2x = 14`. Option A comes from expanding as `4x - 2`,
      multiplying only the first term inside the bracket. Option C comes from adding `2x` rather
      than subtracting it.
  - q: >-
      Solve `9 - 4x = 1`.
    options:
      - >-
          `x = 5`, since the two terms on the left collect to `5x`
      - >-
          `x = 2.5`, since nine minus one is eight and eight over four is two
      - >-
          `x = 0.2`, since five `x` are equal to one
      - >-
          `x = 2`, since taking nine off both sides leaves `-4x = -8`
    answer: 3
    explain: >-
      The minus sign belongs to the `4x`, so the left side is nine plus negative four `x`, and
      the two terms cannot be collected. Take 9 off both sides: `-4x = -8`. Divide both sides by
      negative four: `x = 2`. Check: `9 - 4 × 2` is `9 - 8`, which is 1. Option A collects `9`
      and `-4x` into `5x`, which is the error this item is about, and it also loses the sign.
      Option C is what follows from that collection. Option B gets the right arithmetic on the
      numbers and then halves the answer.
  - q: >-
      Solve `5x - 3 = 2x + 9`.
    options:
      - >-
          `x = 12`
      - >-
          `x = 2`
      - >-
          `x = 4`
      - >-
          `x = 1.7`
    answer: 2
    explain: >-
      Take `2x` off both sides: `3x - 3 = 9`. Add 3 to both: `3x = 12`. Divide: `x = 4`. Check
      both sides: the left is `20 - 3`, which is 17, and the right is `8 + 9`, which is 17.
      Option A stops at `3x = 12`. Option B comes from subtracting 3 from the right side instead
      of adding it, giving `3x = 6`. Option D divides 12 by 7, which is what you get by
      collecting `5x` and `2x` into `7x`.
  # lesson 4: lines
  - q: >-
      A tutor's charge is `y = 20 + 35x`, with `x` in hours and `y` in dollars. What do the two
      numbers mean?
    options:
      - >-
          20 is the hourly rate and 35 is the fixed charge for the booking
      - >-
          20 is the fixed charge and 35 is the rate, in dollars per hour
      - >-
          20 is the number of hours and 35 is the total charged for them
      - >-
          Both are rates, and the charge climbs by 55 dollars every hour
    answer: 1
    explain: >-
      The number with no letter attached to it is paid whatever happens, so it is the fixed
      charge, and on a graph it is where the line meets the vertical axis. The number multiplying
      `x` is what is added for each extra hour, so it is the rate, and on a graph it is the
      steepness. The units settle it: 35 is dollars per hour, and 20 is just dollars. Option A
      swaps them. Option D adds two numbers that measure different things.
  - q: >-
      A window cleaner's bill is $46 for eight windows and $62 for twelve. What is the rate per
      window, and what is the call-out fee?
    options:
      - >-
          $4 a window and a $14 fee
      - >-
          $16 a window and no fee
      - >-
          $5.75 a window and no fee
      - >-
          $4 a window and a $30 fee
    answer: 0
    explain: >-
      Two points give the rate: the bill rose 16 dollars while the windows rose by 4, so the rate
      is 4 dollars a window. Then work the fee back from a real point: eight windows at four
      dollars is 32, and the bill was 46, so the fee is 14. Check the other point: twelve at four
      is 48, plus 14 is 62. Both fit. Option C divides the first bill by the first window count,
      which assumes there is no fee and fails the second bill. Option B reports the change in the
      bill as though it were the rate. Option D uses the right rate with the wrong fee, and one
      substitution kills it.
  - q: >-
      A tank already holds 12 litres and a hose adds 7 litres a minute. Write the equation and
      say how long until it holds 96 litres.
    options:
      - >-
          `12m + 7 = 96`, and it takes about 7.4 minutes
      - >-
          `7m - 12 = 96`, and it takes about 15.4 minutes
      - >-
          `12 + 7m = 96`, and it takes 12 minutes
      - >-
          `12 + 7 + m = 96`, and it takes 77 minutes
    answer: 2
    explain: >-
      The 12 litres are there whatever happens, so nothing multiplies them, and the 7 litres
      arrive once a minute, so the minutes multiply them. Take 12 off both sides to get
      `7m = 84`, then divide by 7, so 12 minutes. Check: 12 minutes at 7 litres is 84, plus the
      12 already there is 96. Option A swaps the starting amount and the rate. Option B subtracts
      water the tank actually holds. Option D adds a number of minutes to a number of litres.
  # lesson 5: translation
  - q: >-
      A theatre has seven times as many seats as it has staff. Using `S` for the number of seats
      and `T` for the number of staff, which equation says that?
    options:
      - >-
          `7S = T`
      - >-
          `S = 7T`
      - >-
          `S + 7 = T`
      - >-
          `S = T ÷ 7`
    answer: 1
    explain: >-
      Put numbers in, which takes ten seconds and settles it without any argument about the
      English. Ten staff means seventy seats. Option B says `70 = 7 × 10`, which holds. Option A
      says `7 × 70 = 10`, so 490 equals 10, which is false, and it is the reversal: it copies the
      order the words arrive in rather than stating the relationship between the two counts. The
      multiplier goes with the smaller count, to lift it to the size of the larger. Option D
      divides when it should multiply, giving one and a bit. Option C turns a multiplication into
      an addition.
  - q: >-
      Rosa's van is 400 kilograms lighter than Tom's. Which equation says that?
    options:
      - >-
          `R - 400 = T`
      - >-
          `R + T = 400`
      - >-
          `R = T - 400`
      - >-
          `400 - R = T`
    answer: 2
    explain: >-
      Give Tom's van 1,800 kilograms. Rosa's is 400 lighter, so 1,400. Option C says
      `1400 = 1800 - 400`, which holds. Option A is what the word order offers, since the
      sentence says Rosa first and 400 second, and it fails: `1400 - 400` is 1,000, not 1,800.
      The 400 is the size of the gap, so it comes off the heavier van rather than off Rosa's.
      Option D gives a negative weight. Option B says the two vans weigh 400 kilograms between
      them.
  - q: >-
      A bakery sold four times as many rolls as loaves, and 315 items in all. How many loaves?
    options:
      - >-
          63 loaves, from setting up `4L + L = 315` and solving
      - >-
          78.75 loaves, from dividing the total by four
      - >-
          252 loaves, since loaves are the larger of the two counts
      - >-
          79 loaves, from dividing the total by four and rounding up
    answer: 0
    explain: >-
      Call the loaves `L`. Then the rolls are `4L`, because there are four times as many, and
      testing that with ten loaves gives forty rolls, which is right. Together they make 315, so
      `4L + L = 315`, which is `5L = 315`, so `L = 63`. Check against the sentence rather than
      the equation: 63 loaves and 252 rolls, and 252 is four times 63, and they add to 315.
      Options B and D divide by four, which would be right only if the two counts were rolls and
      total rather than rolls and loaves. Option C reports the rolls as the loaves.
  # lesson 6: systems
  - q: >-
      Two coffees and three teas cost $12.50. Four coffees and one tea cost $14.50. What does a
      tea cost?
    options:
      - >-
          $3.10
      - >-
          $2.10
      - >-
          $1.90
      - >-
          $2.50
    answer: 1
    explain: >-
      Multiply the first equation by 2, which gives `4c + 6t = 25`, and every term doubles
      including the right side. Now the coffee terms match, so subtract the second equation:
      `5t = 10.50`, so a tea is $2.10. Then `4c + 2.10 = 14.50` gives `4c = 12.40` and a coffee
      is $3.10. Check in both: `6.20 + 6.30` is 12.50, and `12.40 + 2.10` is 14.50. Option A is
      the coffee, which is the right number to the wrong question. Option C is what you get by
      subtracting before scaling. Option D splits the difference between the two drink prices.
  - q: >-
      You eliminate a letter from a pair of equations and are left with `0 = 5`. What does that
      tell you?
    options:
      - >-
          That the arithmetic has gone wrong and the work must be redone
      - >-
          That there are infinitely many solutions, since anything satisfies it
      - >-
          That `x` is 5, and `y` follows from substituting back into either one
      - >-
          That the two lines are parallel, so no pair satisfies both equations
    answer: 3
    explain: >-
      `0 = 5` is false whatever the letters are, so no pair of numbers can satisfy both equations
      at once. On a graph that is two lines with the same slope and different intercepts, running
      alongside each other for ever. Option A is the honest first instinct and worth acting on
      once, but when the arithmetic checks out the false line is the answer rather than a
      mistake. Option B describes what `0 = 0` means, which is the opposite case: one line
      written twice, with every point on it a solution. Option C reads the five as a value for a
      letter that is no longer there.
---

Eighteen items covering all six lessons. There is no time limit worth enforcing; forty minutes is a
realistic estimate if you work rather than guess. **Have paper.** Almost every item is quicker to do
than to eyeball, and several of the wrong options are exactly what eyeballing produces.

Two habits are worth using throughout, because most of the items are built to reward them.

**Substitute your answer back in.** Every solving item can be checked in one line, and a check
catches the sign errors that are otherwise invisible.

**On anything that asks you to write an equation, put numbers in it before you choose.** Pick a small
value, work the situation out in plain English, and see whether your equation agrees. That check
settles the translation items in ten seconds each and it does not depend on your reading of the
sentence being right, which is the part that may be at fault.

The pass mark is 70%, which is thirteen of eighteen. If you fall short, the explanations name the
lesson each item comes from; go back to that lesson rather than retaking the test.
