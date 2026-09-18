---
source: courses/computer-science-and-ai/python-basics/lessons/05-functions.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Fact-checked twice in fresh-context subagents against the lesson on 2026-09-18: PASS WITH NITS
  both times, and every finding and nit is fixed here. Both reviewers ran the lesson's programs on
  CPython rather than trusting its pasted output: the two function comparison and the exact fault
  its traceback names, what a function with no return hands back, what the describe function prints
  on each of its two calls and in what order, what survives the scope example, and what the shout
  example prints inside and outside. The findings were that the sign-off left a whole section of the
  lesson unnamed, including the two things people get wrong that the episode never covers; that the
  averaging function, which the episode opens on, could not be reconstructed by ear because its loop
  header was never spoken; and that one of the describe calls was described by which lines run
  rather than by what it prints. The second round caught a full stop followed by a lower case word
  at a repair seam, which is the kind of thing that only shows up when somebody reads the whole
  file again.
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Fifth episode for
  Introduction to Programming with Python. A listener cannot see code, so the episode takes five
  of the lesson's sections and describes each program in words: naming a block of work, the
  difference between returning and printing, what a function hands back when it says nothing,
  that return ends the function, and that names made inside stay inside. Defaults and keyword
  arguments stay in the lesson, and the sign-off says so. The course teaches from no declared
  standpoint.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Introduction to Programming with Python, lesson five. Functions.

S1: By the end of lesson four you'd written, total equals total plus n, and count equals count plus one, more times than you wanted to. The averaging block is six lines with its print, it works, and you'd have to paste it again for the next set of readings.

S2: And that's the problem this lesson solves.

S1: And you met the problem before the solution on purpose. This course puts loops before functions so that the repetition is something you've felt rather than something you've been warned about.

S2: So what does the solution look like?

S1: You write the word def, then a name, then brackets with a name inside them, then a colon, and then the same loop indented underneath. Call the function average, and the name in the brackets numbers. Underneath, set total to zero, set count to zero, then the loop: for n in numbers. And then a new word at the bottom. Return, total divided by count.

S2: Four pieces there, and I want the names for them.

S1: Def creates the function, and it does not run the body. Python reads those lines, notes that a thing called average now exists, and carries on. Nothing gets averaged until something calls it.

S2: And the name in the brackets?

S1: That's a parameter. A name that will exist inside the function, and gets its value from whoever calls it. What you hand over at the call is an argument. Parameter in the definition, argument at the call. Keep those two words straight, because error messages use them and you'll want to know which end of the call they're pointing at.

S2: And the body is just the lesson four loop.

S1: With two names changed, r to n and readings to numbers, and one real change at the bottom. Print has become return. And return hands a value back to whoever called, and ends the function on the spot.

S2: So the accumulator is written once.

S1: And if you change how an average is worked out, you change it in one place. That, rather than the typing you save, is the argument for functions.

S2: Try me before we go on, because I think this is the trap. Two functions, each taking a and b. The first one's whole body is, return a plus b. The second one's whole body is, print a plus b. Now a program runs, total equals the first one called with two and three, times two. And on another line, total equals the second one called with two and three, times two. One of those lines works.

S1: The returning one works, and gives ten. The printing one prints five, and then fails with a TypeError, saying you can't multiply a NoneType by an int.

S2: And if I'd predicted that the printing one also gives ten?

S1: Then you've got the misconception the next section exists to remove, and you're in very good company.

S2: So say it plainly.

S1: Print shows a value to a person. Return gives a value to the program. They aren't two ways of doing one thing. They're two different things aimed at two different audiences, and if you mix them up you'll write functions that look correct and are useless.

S2: Walk me through the failing one.

S1: Read the traceback from the bottom, the way lesson one taught you. TypeError names the fault. Something tried to multiply a NoneType by an int. And the markers sit under that whole expression, with the point of the arrow on the multiply.

S2: And above the traceback?

S1: A five. Which is the part worth sitting with. The function ran. It printed. And the program still has nothing to multiply, because showing a number to you isn't the same as handing it back.

S2: And the returning version?

S1: Shows nothing at all from inside the function, and that's correct. The call became the value five where it stood, five times two is ten, and total holds it.

S2: So what's the rule of thumb?

S1: If another part of your program needs the answer, return it. If a person needs to see it, print it. Most functions you'll write return, and the printing happens once, near the top of the program, where it talks to whoever is running it.

S2: Now where did the NoneType come from? That wasn't in either function.

S1: It's the answer to a question you might not have thought to ask. Every call hands something back. And a function with no return in it hands back None.

S2: Which is what?

S1: A real value meaning the absence of one. You can store it, print it, and test for it. And the test is, if the result is None, using the word is, which is the one place lesson two said that word belongs.

S2: So the printing version didn't fail to return.

S1: It returned None, faithfully. And you can't multiply None by two.

S2: Try me. A function's body is a single line. Total equals a plus b. What does a call to it give back?

S1: None. It works out a plus b, binds it to a local name, and then reaches the end of its body without a return. Working out a value and giving it back are separate acts, and only return does the second one.

S2: You said return does two jobs.

S1: And the second one surprises people. It hands the value back, and it stops the function right there. Lines below it in the same body don't run.

S2: Show me.

S1: A function that describes a number. If the number is less than zero, return the word negative. Then, not indented under that if, a line that prints, checked the sign. Then if the number is zero, return the word zero. Then return the word positive.

S2: Call it with minus four.

S1: You get the word negative, and checked the sign never prints, because the function was over before that line was reached. Call it with zero and the first test is false, so it prints, checked the sign, and then the second return hands back the word zero.

S2: Which explains something I've seen.

S1: Functions written as a run of plain ifs with no else anywhere. Once a branch has returned, nothing below it can be reached by that call, so the chain you'd have written in lesson three buys you nothing.

S2: Last thing. Names made inside.

S1: Stay inside. A name created in the body exists while the function is running and is gone the moment it finishes. Ask for it afterwards and you get a NameError, which is lesson one's second error turning up in a new setting and meaning what it always meant. You asked for a name that isn't there.

S2: And that's a feature.

S1: A function with a total inside it can't tread on your program's total, so you can use a function you haven't read without checking which names it happens to like. And the same protection cuts the other way, which is the part that catches people.

S2: How?

S1: Take a function that shouts. It takes a word, sets that word to its upper case version, and prints it. Outside, a name holds the text, ada, in lower case. Call the function on it. Inside, it prints ADA, in capitals. Then print the outside name, and you get ada, unchanged.

S2: Because the name inside is its own name.

S1: And rebinding it does nothing outside. That's lesson two's rule doing exactly what it always did. The equals sign makes the name on the left refer to the value on the right. It doesn't tie one name to another.

S2: We've left out two things people get wrong that we haven't touched: leaving the brackets off a call, and passing the wrong number of arguments. Also a site that draws the call's own box appearing and vanishing as it runs. Parameters with defaults, which makes them optional at the call. Calling by naming the parameters, so you can give them in any order and skip past one you're happy with. The two rules that come with defaults, one of which is a genuine trap, and three exercises, the last of which is twenty lines to collapse into one function and three calls. The full lesson has all of it, free, at Foval Learning Institute dot org.

S1: Thanks for listening. Print is for a person. Return is for the program.
