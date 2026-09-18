---
source: courses/computer-science-and-ai/python-basics/lessons/03-conditions.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Fact-checked twice in fresh-context subagents against the lesson on 2026-09-18: FAIL on the
  substance of one claim, then PASS WITH NITS, and every finding and nit is fixed here. Both
  reviewers ran the programs rather than reasoning about them: the two graders, both indentation
  programs, the swapped short-circuit guard, the truthiness list, and the parse failure with prints
  above it. The findings were that "everything else is true" was stated over a falsy list missing
  None, which is exactly the value a beginner meets next and which a listener cannot check against
  a code block; that the mirror half of short-circuiting, what the word or stops on, was dropped
  without being named in the sign-off, and it is now taught rather than skipped; that a claim about
  four spaces being the commonest mysterious bug was the script's own folklore and not the lesson's;
  and that the division error was described rather than named, where a listener will meet the name.
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Third episode for
  Introduction to Programming with Python. A listener cannot see code or indentation, so the
  episode takes five of the lesson's sections and describes the shape of a program in words: what a
  comparison produces, why exactly one branch of a chain runs and what a wrongly ordered chain
  does, why whitespace is the logic, how conditions combine and stop early, and which values count
  as false. The guard against bad input stays in the lesson, and the sign-off says so. The course teaches from no declared standpoint.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Introduction to Programming with Python, lesson three. Making decisions.

S1: A program that runs the same lines every time can only do one job. The moment it can look at what it has and choose, it can do many. And this lesson rests on a type you met in lesson two and haven't used yet. Bool, which has exactly two values.

S2: True and false.

S1: And they aren't words Python prints for your benefit. They're values, the only two of their type, and you can store one in a name like anything else. Type a comparison at the prompt, seven greater than three, and what comes back is the value true.

S2: How many comparisons are there?

S1: Six. Equal to, not equal to, less than, greater than, less than or equal, greater than or equal. And the one that causes trouble is the first.

S2: Because of the equals sign.

S1: Because one equals sign is the instruction from lesson two. Make this name refer to this value. Two equals signs ask a question. And if you confuse them, Python stops you before anything runs, with the first kind of failure from lesson one, the one found while parsing. Nothing prints.

S2: Does it tell you what you meant?

S1: It says, maybe you meant two equals signs, or else the version with a colon in front of them. And as in lesson one, it doesn't act on the guess.

S2: Right. Chains.

S1: An if, then an elif, which is short for else if, then an else. Python works down the chain testing each condition in turn, and the first one that's true wins. Its block runs and the whole chain is finished. Nothing below it is even looked at.

S2: And if none of them is true?

S1: The else runs. And if there's no else, nothing runs, which is allowed and is often what you want.

S2: So exactly one branch, at most.

S1: At most one. Take a grader. If the score is ninety or more, print A. Else if it's eighty or more, print B. Otherwise print F. Follow a score of eighty five. The first test is false, so it drops to the second. The second is true, so B prints and the chain stops. The F is never reached, and neither is any test below the one that matched.

S2: Now try me on this, because I think I know where it's going. Somebody writes the same grader but tests in this order. Seventy or more first, then eighty or more, then ninety or more, with an else at the bottom. A student scores ninety five. What grade do they get?

S1: A C.

S2: Say it slowly.

S1: Ninety five is over seventy, so the very first test is true. Its block runs and the chain stops. Python never looks at the test for eighty or the test for ninety. And here's the part worth sitting with. An A is unreachable, for any score at all.

S2: And no error.

S1: No error, and nothing is broken. The chain did exactly what the rules say it does. Which means the order of a chain is part of its logic, and when the tests overlap you put the narrowest one first.

S2: Next thing, and it's the one that makes Python look strange to people coming from elsewhere.

S1: Indentation. In most languages the indented lines under an if are a courtesy to the reader. In Python they are how the language knows which lines the if controls. Four spaces is the convention, and it's in the style guide called PEP eight, the same one that carries the naming rules from lesson two.

S2: And if I get it wrong?

S1: You may get an IndentationError, and that's the friendly outcome. The unfriendly one is a program that runs and quietly does the wrong thing.

S2: Show me.

S1: Two programs that differ by four spaces and nothing else. The temperature is fifteen. If the temperature is over thirty, print, it's hot. Then, on the next line, not indented, print, remember your coat.

S2: So the coat line is outside the if.

S1: And it prints. Fifteen is not over thirty, so the hot line never runs, and that first program prints one line, the coat line, and nothing else. Now indent the coat line by four spaces. It's now inside the if, the condition is still false, and the program prints nothing at all. Same program, same input, no error either way.

S2: The whitespace is the logic.

S1: That's the sentence.

S2: Combining conditions.

S1: Three words. And needs both sides true. Or needs at least one. Not flips a value. But underneath those three there's a mechanism that's more useful than the rule itself. Python stops evaluating as soon as the answer is settled.

S2: Meaning?

S1: With and, the moment it meets something false, the whole thing must be false, so it doesn't bother looking at the right hand side at all. That's called short circuiting.

S2: And you can build on it.

S1: You can guard with it. Write, if n is not equal to zero, and total divided by n is greater than five. If n is zero, the left side is false, Python stops, and the division on the right is never carried out.

S2: And if I swap the two sides round?

S1: Then the same line raises a ZeroDivisionError on the first zero it meets. So the order of the two sides is doing real work.

S2: And does the word or do the same thing?

S1: It's the mirror image. The word or stops as soon as it meets something true, because one true side settles it. So the guard written the other way round, if n is zero, or total divided by n is greater than five, is safe for the same reason. Which one you want depends on whether the dangerous case is the one you're excluding or the one you're catching.

S2: Last thing, and it's the trap.

S1: You don't have to write a comparison at all. Python will take any value and decide whether it counts as true, and the rule is short. Empty things are false, and so is zero. An empty piece of text is false. An empty list is false. Zero is false, and so is nought point nought. So is the value called None, which is Python's word for nothing at all. Everything else is true.

S2: Which lets you write things that read well.

S1: Ask someone for their name, then say, if not name, print, you didn't type anything. That reads almost like English and it does the right thing.

S2: And the trap.

S1: Try this one. A program asks how many, using input, and then checks whether the person typed anything by writing, if reply. The user types a single nought and presses enter. Does the block run?

S2: I want to say no, because zero is false.

S1: It runs. Input hands back the one character text, nought, and a piece of text is false only when it's empty. That one has a character in it, so it's true. The number nought is false. The text nought is not.

S2: Which is lesson two arriving somewhere I'd never look for it.

S1: And it's why a check meant to catch, they typed nothing, quietly accepts a zero.

S2: We've left out the fourth error in this course, the one you get when you try to turn the word seven into a number, and the guard that stops it, which has a catch of its own worth reading. Also why if x double equals true is not the same question as if x, that Python lets you chain two comparisons in one line where most languages don't, and two programs to write. The full lesson has all of it, free, at Foval Learning Institute dot org.

S1: Thanks for listening. The first test that's true wins, and nothing below it is even looked at.
