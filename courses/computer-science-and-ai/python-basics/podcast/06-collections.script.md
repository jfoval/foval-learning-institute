---
source: courses/computer-science-and-ai/python-basics/lessons/06-collections.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Fact-checked twice in fresh-context subagents against the lesson on 2026-09-18: FAIL, then PASS
  WITH NITS on the repairs, and every finding and nit is fixed here. Both reviewers ran the lesson's
  programs on CPython rather than trusting its pasted output: the positions of a four item list and
  what asking past the end gives, the aliasing case, the copy case, the two functions, the
  dictionary, and the mutable default's three calls. The findings were that the rule about which
  list methods return None had been stated without either of the lesson's two qualifications, which
  makes it false, because pop changes the list and hands back what it removed; and that the aliasing
  passage, which the episode declares as its centre and which the lesson carries with a drawing,
  gave the alias case in numbers and the copy case only in metaphor, so a listener could not
  reconstruct what the drawing shows. The second round caught a line where Haley attributed to John
  something he had never said in the episode, which is the same defect a check found earlier tonight
  in another script.
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Sixth and last episode for
  Introduction to Programming with Python. A listener cannot see code or the lesson's drawing of
  arrows, so the episode spends most of its length on aliasing, which is the one idea the lesson
  says experienced programmers still trip over, and describes the arrows in words. Lists and
  dictionaries get what they need and no more. The word counter and the lesson's closing survey
  stay in the lesson, and the sign-off says so. The course teaches from no declared standpoint.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Introduction to Programming with Python, lesson six, the last one. Lists and dictionaries.

S1: You've been using lists for two lessons without being told what one is. Lesson four's collector put things on the end of one, and lesson five handed a list of four numbers to a function. Both worked, and neither was explained, because a list is easier to meet than to define.

S2: So define it.

S1: Square brackets make a list, and square brackets take things out of it. Ask for the item at position zero and you get the first one, because positions are counted from zero, not from one.

S2: Which looks like a needless cruelty.

S1: Until you see what it buys. A position is an offset from the start, so the first item is zero steps in.

S2: And the last item?

S1: Ask for position minus one, which counts backwards, and it's how you get the last item without knowing how long the list is. Because the obvious way of asking is wrong. If a list has four things in it, its length is four and its positions are zero, one, two and three. So asking for the item at position four gives you an IndexError, the sixth error in this course, and it means one thing only. You asked for a position that isn't there.

S2: Now the idea the lesson says experienced programmers still trip over.

S1: Try it first. A program says, a is the list one, two, three. Then b gets a. Then it appends four through b. Then it prints both. What does each one show?

S2: I want to say a is one, two, three, and b is one, two, three, four.

S1: Both show one, two, three, four. And if you expected a to be unchanged, you hold the belief that the second line copies. It doesn't, and almost everyone holds that belief until a program built on it goes wrong.

S2: So what is that line doing?

S1: Exactly what lesson two said it does, and the rule hasn't changed. The equals sign makes the name on the left refer to the value on the right. So it works out what a is worth, which is a particular list sitting in memory, and points b at that same list. Two names, one list. Change it through either name and the change is simply there, because there's only one thing to change. That's called aliasing.

S2: But numbers don't do that. Lesson two had x is three, y gets x, then x gets ten, and y stayed three.

S1: And the rule is identical in both. What differs is the third line. Setting x to ten is an assignment. It points x at a different value and leaves y pointing where it always did. Appending through b is a mutation. It changes the thing itself, and every name pointing at that thing sees the change.

S2: So why can't a number be mutated?

S1: Numbers and text are immutable, so a mutation isn't even possible on them, and assignment is all you ever do. Lists are mutable, so both are available, and you have to know which of the two you just wrote.

S2: And if I want a real copy?

S1: Ask for one. Take a slice of the list with both ends left off, which means the whole of it, and slicing a list always makes a new one. Straight after that copy, the two lists are equal but they are not the same list, and those are two different questions. The double equals sign compares what's in them. The word is asks whether there's one list or two.

S2: Picture it for me.

S1: A name isn't a box. It's an arrow pointing at one. Where b was simply given a, both arrows land on the same box, so appending through one changes what the other sees, because there's nothing else for it to see. Where b was given a slice, the slice made a second box before anything was appended. So a holds one, two, three, and b holds one, two, three, four, in two separate boxes.

S2: And what does this do to what lesson five told me?

S1: It makes it half the story. Take two functions that each take a list. The first sets its own parameter to a new empty list. The second calls clear on the list it was given. Pass the same list to each in turn.

S2: The first one does nothing that survives the call.

S1: Exactly as lesson five said. And the second empties the caller's list. The function still can't change what the caller's name refers to. It can change the thing the name refers to, when that thing is one that can be changed at all.

S2: So how do I tell whether something mutates?

S1: For the built in list methods there's a rule you can lean on. The ones that change the list return None. So the sort method rearranges the list you gave it and hands back None, while the separate function sorted leaves it alone and hands you a new sorted list. There's one everyday exception, pop, which removes the last item and hands it back, doing both at once. And it's a rule about the built in types, not a promise about code somebody else wrote. For that, read the function.

S2: Right. The other shape.

S1: A list answers, what is the nth thing. Often the question you actually have is, what is the value for this thing, and then you want a dictionary. Curly brackets, and pairs written as a key, a colon, and a value. You look up by key instead of by position, and assigning to a key that isn't there adds it rather than raising anything.

S2: And reading one that isn't there?

S1: Is a KeyError, the seventh and last error of this course.

S2: Last thing, and you promised it in lesson five.

S1: That a default value is worked out once, when the def runs, rather than afresh at each call. With a number that's harmless, because fifty is fifty whenever you work it out. Now make the default an empty list, and have the function append to it and return it. Call it three times, each time supplying only a value.

S2: I'd expect a list with one thing in it, three times over.

S1: You get one thing, then two things, then three. Almost nobody predicts that the first time. There's only one list. It was made once, while Python was reading the def, and every call that takes the default is handed that same one. Aliasing again, in its least obvious disguise.

S2: And the fix?

S1: Make the default None, and put a line at the top of the body that replaces it with a fresh empty list. Now each call that supplies no list gets its own, because the empty list is worked out at the call rather than at the def. That's the idiom for any default that could be changed after it's made.

S2: And that's the course.

S1: Seven errors, which is what it was really teaching. SyntaxError, NameError, TypeError, ValueError, ZeroDivisionError, IndexError and KeyError. Plus the KeyboardInterrupt from lesson four, which isn't a mistake at all but the trace left when you stop a runaway program yourself. Those seven are most of what a beginner's traceback ever says.

S2: We've left out the word counter that puts four plans together at once, and the forty year old finding about how hard that is, which is worth your time. Also the three ways to ask for a key that might not be there, why a KeyError quotes the key back at you, how to loop a dictionary and get its pairs out, what order a dictionary's keys come out in, which is not the order people guess, what the lesson says is missing from six lessons, why classes were left out on purpose, the case for and against starting in Python at all, three exercises, where to go next when six lessons run out, and two warnings to read before you install anything: what one mistyped package name can do to your machine, and why you should not install into your operating system's own Python. The full lesson has all of it, free, at Foval Learning Institute dot org.

S1: That's the end of the course. Thanks for listening. A name isn't a box. It's an arrow pointing at one.
