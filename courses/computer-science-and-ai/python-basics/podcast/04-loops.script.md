---
source: courses/computer-science-and-ai/python-basics/lessons/04-loops.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Fact-checked twice in fresh-context subagents against the lesson on 2026-09-18: FAIL, then PASS
  WITH NITS on the repairs, and every finding and nit from both rounds is fixed here. Both reviewers
  ran the lesson's code rather than reasoning about it. The numeric spine was clean in the first
  round and confirmed unchanged in the second: what each range gives, the four pass walk value by
  value against the lesson's own table, the average, what survives when the reset is moved inside
  the loop, and which item the off by one loop misses. The findings were that the intro named a
  gloss rather than the lesson's title, so a listener sent to the site would look for a lesson that
  does not exist; that the interruption was called an error and its name withheld, which is both
  useless to a listener and untrue of Python, since KeyboardInterrupt is not an Error; that the
  sign-off promised a reason the lesson explicitly declines to give until lesson 6; that the runaway
  loop's output was never stated, and the whole point of it is that it prints the same number rather
  than counting down; and that the loop variable r is a homophone of "are", which made one sentence
  about the commonest slip in the lesson unparseable by ear.
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Fourth episode for
  Introduction to Programming with Python. A listener cannot see code or a table, so the episode
  walks the accumulator pass by pass in spoken numbers, and takes four of the lesson's sections:
  going through what you have, the accumulator and the reset that ruins it, waiting for something
  instead, and the two ways a loop goes wrong. The course teaches from no declared standpoint.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Introduction to Programming with Python, lesson four. Repeating work.

S1: By the end of lesson three your programs could store things and choose between them. They still can't do the one thing computers are actually for. The same work, over and over, without getting bored or making a mistake on the four hundredth try.

S2: So, loops.

S1: Two of them, and the first is for going through things you already have. Suppose you've got a list of four readings. Twelve, seven, nineteen and four. Write, for the letter r in readings, and then an indented block. Python takes each item in turn, puts it in the name r, and runs the block. Four items, four passes, then it stops on its own.

S2: What if I want numbers rather than a list?

S1: There's a thing called range that produces a run of numbers without you writing them out. Ask for range of five and you get zero, one, two, three, four.

S2: Five numbers, starting at zero.

S1: Now look at the one that catches everybody. Ask for range from one to ten, and you get one to nine. The stop value is never included.

S2: That sounds like an arbitrary cruelty.

S1: And it isn't. Because the stop is excluded, range of n has exactly n items in it. And range from zero to five, followed by range from five to ten, covers zero to nine with nothing missed and nothing repeated. That's a good share of the off by ones you'd otherwise write, gone.

S2: Right. The pattern.

S1: Almost every loop that produces an answer looks the same. Set something up before the loop, change it inside, use it after. It's called an accumulator. Take the four readings and work out their average. Before the loop, set total to zero and count to zero. Inside, set total to total plus the letter r, and count to count plus one.

S2: Walk me through the passes.

S1: After the first pass, the letter r is twelve, total is twelve, count is one. After the second, r is seven, total is nineteen, count is two.

S2: Keep going.

S1: After the third pass r is nineteen again, this time as the reading and not as the total, so total is thirty eight and count is three. After the fourth, r is four, total is forty two, count is four.

S2: And then forty two divided by four.

S1: Ten point five. And notice the line doing the work. Total equals total plus the letter r. That's the line from lesson two that looked like nonsense as arithmetic and reads fine as an instruction. Work out the right side using what total is worth now, then make total refer to the answer. It's doing that four times, each time starting from where the last pass left it.

S2: Which is why the setting up has to be outside.

S1: And here is what happens if it isn't. Move, total equals zero, inside the loop, and it runs on every pass. Every pass wipes the total and adds one number to zero.

S2: So what survives?

S1: Four. The last reading. No error, no warning, just a wrong answer that happens to look plausible.

S2: How would I catch that?

S1: There's a tell, and the lesson gives it as a rule. If a total ever comes out equal to the last item in your data, one of two slips produced it. Either the reset is inside the loop, or you wrote total equals the letter r, where you meant total equals total plus the letter r. Both throw away everything before the final pass, and both give exactly the same symptom, so check for both.

S2: Now the other loop.

S1: For needs something to go through. Sometimes you haven't got one yet, because you're waiting for a condition to change. That's while. It takes a condition and repeats as long as the condition is true.

S2: Give me the shape of it.

S1: Write, while true, which is a loop that would never stop by itself, so something inside has to end it. Ask the person for a reading, or the word done. If they type done, the word break leaves the loop on the spot. Otherwise turn what they typed into a number, put it on the end of the list, and ask again.

S2: And the rule of thumb?

S1: For when you know what you're going through. While when you're waiting for something to become true. If you can't say what you'd be going through, you want a while.

S2: Try me on one. Lesson three said empty things are false. So what does, while readings, do?

S1: It repeats as long as the list has anything in it, and stops when the list is empty, because an empty list is false. You'd use it for a loop that eats the list as it goes.

S2: Now, the two ways this goes wrong.

S1: The first is the loop that never ends, and the lesson tells you to run one on purpose. Set n to five. Then, while n is greater than zero, print n. Nothing inside the loop changes n, so the condition is true now and will be true for ever. And what you see is not a countdown. It's a five, then another five, then another, for as long as you let it run.

S2: And I stop it how?

S1: Control C. And Python reports it as a KeyboardInterrupt, which isn't an error at all. The fix is one line at the bottom of the body, n equals n minus one. That's the cause almost every time. Something inside was supposed to change what the condition tests, and doesn't.

S2: And the second way?

S1: This one's better, because nothing about it looks wrong. Put the two halves together. The while that collects readings, then the for that averages them. Type twelve, seven, nineteen, then done, and it tells you the average. Now run it again and type done straight away.

S2: Nothing was collected.

S1: So the loop body never ran, total and count both still hold the zero they were given, and the last line divides zero by zero. You get a ZeroDivisionError, which is the fifth error in this course.

S2: And read it from the bottom, as always.

S1: The bottom line names the fault. Above it, the line number and the source line that failed. And under that, markers pointing not at the whole line but at the division, the exact part that blew up. Those markers are the most useful thing in a traceback once a line has more than one operation in it.

S2: Why does everyone miss that case?

S1: Because they test by typing three readings in, like a reasonable person. A real user opens it, doesn't understand it, and presses enter. And the fix is an if before you divide, which is why lesson three came first.

S2: One more?

S1: One more, smaller than those and far more common. A loop meant to print every item in a list of four, and it prints three of them. The range starts at one and runs to the length of the list.

S2: So which one goes missing?

S1: The first. A list's first item is at position zero, not one, so starting the range at one skips it. The length is four, so that range gives one, two and three.

S2: And the fix.

S1: Start the range at zero. And the better fix is to write, for item in items, which needs no numbers at all and cannot be off by one.

S2: We've left out what a range does when you give it a third number, the step. Also that you must not add to or remove from a list while a loop is walking it, which the lesson tells you to take on trust until lesson six. The averaging loop loaded into a site that shows every name changing on every pass. And the argument at the end that you have now felt the repetition that lesson five exists to remove, along with three programs to write, the last of which the lesson calls the course project in miniature. The full lesson has all of it, free, at Foval Learning Institute dot org.

S1: Thanks for listening. Set it up before the loop, change it inside, use it after.
