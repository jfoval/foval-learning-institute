# Reviews: Algebra Essentials — 06-systems

Append-only. Newest at the bottom.

## 2026-09-09, Stage 4 on lesson 6 (two unknowns at once), Tier A

One reviewer, fresh context, all passes. **Neutrality skipped** per the standing decision; the
reviewer looked and found no contested or value claim anywhere in the lesson. Every calculation in
the lesson was executed independently and **all of the answers were correct**; the defects were in
the explanations of the wrong options and in the diagram.

### The findings that mattered

**C1. A quiz item had two right answers, and the explanation's reason for rejecting the second was
false.** Item 5 asked which single move sets up eliminating `x` from `3x + 2y = 12` and
`x + 5y = 17`, and its option D was "divide the first equation by 3". Dividing gives
`x + (2/3)y = 4`, whose `x` term now matches the second equation exactly, so subtracting eliminates
`x` and reaches the right answer. The explanation claimed it "leaves the first equation with
fractions... so the terms still do not match", which is not true: fractions are untidy, not
disqualifying. Option D rewritten to a move that is genuinely broken. This is A9 recurring in the
last lesson of the course.

**C2. The same item told a learner their broken move was sound.** Option C scaled both equations to
`+10y` and then said to add them, which gives `17x + 20y = 94` and cancels nothing; only subtracting
removes the `y`. The explanation said the move "does work" and was wrong only about which letter it
targeted. Rewritten so that the option's actual failure, adding two terms of the same sign, is what
the explanation teaches.

**C3. The diagram's marked point was not on the crossing, and both its labels were struck through by
the drawn lines.** The two lines cross at (221.9, 118.9) and the dot was at (212, 115), an offset of
ten and a half pixels, so the intersection fell outside the dot; measured in the browser, both text
boxes were crossed by at least one line. **The image's only claim is that the lines meet at one
marked point, and the image did not do it.** Dot moved onto the computed crossing, labels moved into
the wide part of the wedge left of it with a leader line, and the result verified in the browser with
`getBBox()`: both boxes now sit clear of both lines by 8 to 31 pixels, at phone and desktop width, in
both themes. This is A12 from lesson 4 in a new form, which makes it the third diagram in this course
to ship a label that a line runs through. **Measure label boxes against line equations before
committing a chart. The validator cannot see this and the eye misses it at desktop width.**

**C4. A distractor diagnosis that took one slip to be two.** Item 2's option B was `2x = 10`, and the
explanation said it came from subtracting rather than adding. Subtracting actually gives
`2x + 2y = 10`; reaching `2x = 10` also needs `y` minus `-y` to be nothing. The learner who picked it
was told they made one mistake when they made two, and the more instructive one went unnamed. This is
the backwards-trace rule from earlier the same day, catching its second lesson in a row.

**C5. Two of six quiz items were answerable from memory, and one objective was never tested.** Item 2
used the body's elimination example verbatim and item 3 used its `0 = 7` verbatim, which is
recognition rather than transfer. Meanwhile the third objective, setting up a pair of equations from a
situation, had no item at all. Item 2 rebuilt on fresh numbers and a seventh item added that asks the
learner to build a pair from a purchase, which is the only shape the objective can be tested in.

**C6. The completion problem did not practise the technique it followed.** The outline names scaled
elimination as "the step learners find arbitrary" and requires a completion problem after it. The
block that followed it withheld every step and, worse, chose a system whose `y` terms were already
opposite, so no scaling was needed. Replaced with a genuine completion problem on the wrinkle: the
scaling is given, the reader finishes and checks in both originals.

**C7. The closing pointer sent the reader to the chapter the course started from.** "Continues exactly
where this leaves off, in chapters 6 through 10" linked to `pages/1-introduction`, which is
Foundations: whole numbers, integers, fractions. Now points at chapter 6. The list of what the course
cuts also omitted **inequalities**, which are not in chapters 6 to 10 either, so the pointer would
have failed a reader twice; both fixed, with the chapter 2 location of inequalities named.

Also fixed: an outcome promise the style guide bars ("enough to read the quantitative parts of most
things you will meet"), an example pair that was secretly the system's own solution, one restatement
of the check-in-both moral, and an option spread of 18 characters.

### The thing that generalises, and it corrects yesterday's rule

**`minutes:` was out by 25 on both of this session's lessons, and the reason was the phrasing of the
exercise timing.** Yesterday's rule says to open an exercise timing with a cue word so
`npm run minutes` can see it. Both lessons did: "Allow about thirty minutes." **It still did not
match**, because the script's pattern wants the cue word **immediately followed by the number**, and
"allow" was followed by "about". Lesson 5's "twenty five" failed for a second reason: the word-number
table holds single words, so any compound number has to be written in digits. Both rewritten as
"Take thirty minutes over these" and "Take 25 minutes over these", after which the script found the
timings and the lessons measured 70 and 75 rather than 40 and 50. The reviewer had independently
estimated 65 to 75 for lesson 6 by hand, which is the script and a human agreeing once the script can
see the sentence.

**The rule, corrected: write an exercise timing as cue word, then a digit or a single number word,
then "minutes", at the start of a sentence.** "Take 30 minutes over these." Anything else is
invisible, and an invisible timing understates a lesson by the whole length of its exercise.

### Still owed by this course

**Six podcast episodes.** Everything else is done: six lessons at standard, both assessments, and a
measured `estimated_hours`. The episodes are blocked on the fal balance, not on this course.
