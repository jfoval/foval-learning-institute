---
source: courses/computer-science-and-ai/python-basics/lessons/02-variables.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Fact-checked twice in fresh-context subagents against the lesson on 2026-09-18: PASS WITH NITS
  both times, and every finding and nit is fixed here. Every value the episode speaks was recomputed
  independently on CPython, including the three lines where a gets three and b gets whatever a is
  worth, both kinds of plus, a string multiplied by a whole number, what input hands back and what
  multiplying it by two gives, and the exact shape of nought point one plus nought point two, whose
  fifteen noughts were counted digit by digit against the lesson's pasted output. The findings were
  that the episode gave two of the lesson's three remedies for float imprecision and then called
  that the complete set, and that calling TypeError the third error in the course and then the
  second kind of failure, eight lines apart and in the same words, is unreadable by ear when there
  is no page to look back at. The module is now named, the ordinal is now scoped to lesson 1's two
  kinds of failure, and the Zen of Python line now comes with the two words that print it. The
  lesson itself says "Two ways to live with it" over three ways; that is in docs/QUEUE.md.
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Second episode for
  Introduction to Programming with Python. A listener cannot see code, so the episode takes four
  of the lesson's sections and speaks every line rather than showing it: the equals sign as an
  instruction, the two kinds of plus, why input always hands back text, and why nought point one
  plus nought point two is not nought point three. The sign-off names what was left out. The
  course teaches from no declared standpoint.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Introduction to Programming with Python, lesson two. Names and values.

S1: And the whole lesson rests on one small idea that almost everyone misreads the first time. What the equals sign actually does.

S2: Which is not what it does in arithmetic.

S1: It isn't even the same kind of thing. Write, savings, equals, two hundred and fifty. Read that out loud as, savings gets two hundred and fifty. It's a command, not a statement of fact, and it tells Python to do two things in a fixed order. Work out what's on the right, completely. Then make the name on the left refer to that result.

S2: Right side first, then bind.

S1: That's all there is to it. And once you have that order, the line beginners object to most stops being strange. Total equals total plus five.

S2: Which as arithmetic is nonsense.

S1: There's no number that's five more than itself. But as an instruction it's ordinary. Work out the right side, which needs whatever total is worth right now, say twenty, and comes to twenty five. Then make total refer to twenty five. The old value is replaced, not amended.

S2: Try me. Three lines, in order. The name a gets three. Then b gets whatever a is worth. Then a gets ten. What's a worth at the end, and what's b worth?

S1: A is ten, and b is three.

S2: Say why, because I can feel the wrong answer.

S1: The second line does the same two steps as every other line. Work out the right side, which is the value three, and bind b to it. It does not connect b to the name a. There's no thread running between them for the third line to tug on. So when a is rebound to ten, b is untouched, and still three.

S2: Now, types.

S1: Every value in Python has a type, and the type decides what the operators do to it. Four of them carry this whole course. An int is a whole number. A float is a number that can have a fraction in it. A str, short for string, is text, always in quotes. And a bool is one of exactly two values, true or false.

S2: And you can ask.

S1: There's a thing called type that tells you which one you've got. And here's where it matters. Two hundred and fifty, as a number, and two hundred and fifty typed inside quotation marks, are not the same thing, and the difference isn't cosmetic. The first is a quantity you can do arithmetic with. The second is three characters that happen to look like one.

S2: Show me the difference biting.

S1: Two plus two is four. But the text two, in quotes, plus the text two, in quotes, gives you the text two two. Two characters, side by side.

S2: So plus is inconsistent.

S1: Plus is perfectly consistent. It means add for numbers, and join end to end for text, and it picks by looking at what it's been given. So there's no arithmetic in that second line at all. It glues two characters together and hands you the result.

S2: Does anything else do that?

S1: The multiplication sign makes the same kind of choice. Between two numbers it multiplies. Between text and a whole number it repeats. So the text a b, in quotes, times three, gives you a b a b a b.

S2: Right. Getting something in from outside.

S1: There's a thing called input. It shows a prompt, waits for the person to type a line, and hands back what they typed. And here's the part that catches everyone. Input always gives you a string. Always. It doesn't look at what was typed and decide.

S2: Try me. A program asks how old are you, and the user types four one. What is that worth, and what type is it?

S1: It's the text four one, not the number forty one. It looks like a number and it's two characters of text. And anything you try to do with it arithmetically will either fail or, worse, quietly do the wrong thing. Multiply it by two and you don't get eighty two. You get four one four one.

S2: Which is the repeating multiplication from a minute ago.

S1: Doing exactly what it was asked. So here's a broken program. Ask for the year you were born, then print twenty twenty six minus whatever came back.

S2: And it fails.

S1: With a TypeError, which is the third kind of error in this course and the first one this lesson brings. Read it the way lesson one taught you. Bottom line first. TypeError means the types were wrong for the operation, and the message names both of them and even names the operator. Python is telling you it has a number on one side and text on the other, and it won't guess which one you meant to convert.

S2: Why won't it guess?

S1: Because the refusal is deliberate, and Python states it as a principle. Explicit is better than implicit. It's the second line of a short document called the Zen of Python, and you can read the whole thing by running two words, import this.

S2: And notice where the error appeared.

S1: After the prompt. Which is the evidence from lesson one. The program ran, and then it failed, so of lesson one's two kinds of failure this is the second, the sort found during the run rather than before it.

S2: So how do I fix it?

S1: Convert. There's a thing called int for whole numbers and a thing called float for numbers with a decimal point, and you wrap the input in one of them. Read it from the inside out. Input runs first and produces the text nineteen ninety nine. Then int takes that and produces the number nineteen ninety nine.

S2: And if someone types four point five nought.

S1: Then you want float, not int. Int doesn't round it down. It refuses outright, with a different error, because it won't accept text containing a decimal point at all.

S2: Last thing, and it's the one that sounds like a bug.

S1: What do you expect nought point one plus nought point two to be?

S2: Nought point three.

S1: You get nought point three, followed by fifteen noughts, followed by a four. And if you ask Python whether nought point one plus nought point two equals nought point three, it says false.

S2: That has to be a bug.

S1: It isn't a bug in Python and it isn't a bug in your machine. Floats are stored as binary fractions, and one tenth cannot be written exactly in binary, in the same way that one third cannot be written exactly in decimal. You'd need nought point three three three, forever. So a tenth is stored as something extremely close to a tenth, and the tiny gaps add up.

S2: So what do I do about it?

S1: Three things, and all of them are real answers. Compare with a tolerance, by rounding before you compare. Or, when the values are money, work in whole units of the smallest denomination. Count pence rather than pounds, cents rather than dollars, and use whole numbers throughout, which sidesteps the problem instead of managing it. Or reach for the module Python ships called decimal, which does base ten arithmetic exactly, at the cost of being slower and wordier.

S2: And using floats for money?

S1: Is not one of the answers. The lesson is flat about that. And none of this is Python's problem either. It's the behaviour of the number format nearly every language reaches for when it needs decimals, so C and Java and JavaScript all print the same thing.

S2: We've left out the demonstration the lesson is proudest of, where three lines comparing two numbers give one answer in a file and the opposite answer typed at the prompt, and what that tells you about which comparison to use. Also the free site that draws every name and value on screen as a program runs, f strings, how to name things, the trap of naming your own file after a library, and two programs to write. The full lesson has all of it, free, at Foval Learning Institute dot org.

S1: Thanks for listening. Right side first, then bind.
