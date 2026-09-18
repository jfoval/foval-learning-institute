---
source: courses/computer-science-and-ai/python-basics/lessons/01-first-program.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Fact-checked twice in fresh-context subagents against the lesson on 2026-09-18: PASS WITH NITS,
  then PASS WITH NITS on the repairs, and every nit from both rounds is fixed here. Every figure in
  the two research passages was checked against the lesson body and its numbered sources: the 2006
  paper's title and both authors, that it was never formally published, the year and author of the
  retraction and his exact phrase, and then the 2016 study's institution, its span of years, its
  seven hundred and seventy eight lecture sections and thirty thousand two hundred and fourteen
  grades, the four hundred and fifty five ruled out, the three hundred and twenty three tested and
  the forty five positive. **Both rounds got the denominator wrong and this block enshrined it.**
  They confirmed that five point eight percent is of all seven hundred and seventy eight and called
  thirteen point nine percent misleading, when thirteen point nine is the paper's own figure and is
  the right denominator for the comparison that follows: the authors' five percent false-positive
  rate is five percent of the three hundred and twenty three tests actually run, about sixteen, so
  "most of the forty five may well be noise" was wrong by a factor of nearly three. The paper was
  read directly on 2026-09-19, its own sentences are now in the lesson's Sources entry, and both
  the lesson and this turn were rewritten. The lesson body carried the same error and was item 3
  of docs/QUEUE.md. The opposing view is carried at the strength the lesson gives it, with the lesson's
  own limit on what the study rules out and its warning that none of this means programming is easy.
  The repairs named the SyntaxError aloud, which the lesson's objective requires and the episode had
  left as "the broken one"; restored the lesson's "output before a traceback" rather than "before an
  error"; restored an "almost"; and added to the sign-off three things the episode leaves out.
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). First episode for
  Introduction to Programming with Python. A listener cannot see code, so the episode teaches the
  two ideas that need no screen: that Python checks the whole file before it runs any of it, and
  that a traceback is read from the bottom up. Code is spoken only where it is one or two words,
  and never read out as code. The setup instructions stay in the lesson. The course teaches from
  no declared standpoint.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're starting Introduction to Programming with Python, with its first lesson. Your first program, and your first error.

S1: And the lesson's claim is that you'll break a program within about ninety seconds of starting, before you've written anything you'd call your own.

S2: That's a strange thing to lead with.

S1: It's deliberate. The lesson teaches two things at once. How to run Python, and how to read the thing it prints when it refuses. Most beginners' courses leave the second one until week three, by which time the habit of scrolling past red text has set.

S2: Before any of that, there's a story the lesson goes after.

S1: The one where some people just get programming and some never will. That belief came from somewhere specific, so the lesson goes and finds it. In two thousand and six there was a paper by Saeed Dehnadi and Richard Bornat called The camel has two humps, claiming to have found a test that sorted people into programmers and non programmers before they'd written a line of code.

S2: And it was published where?

S1: It was never formally published. It travelled anyway. And in twenty fourteen Bornat, one of its two authors, retracted it. He wrote that he doesn't believe an aptitude test for programming was discovered, and that he doesn't believe in, his words, programming sheep and non programming goats. He attributed the paper to a period when he was seriously unwell.

S2: And the other half of the folklore.

S1: That computer science grades come out in two humps. A group who get it, and a group who don't. In twenty sixteen Patitsas and colleagues went and looked. They took the final grades of every undergraduate computer science class at the University of British Columbia from nineteen ninety six to twenty thirteen. Seven hundred and seventy eight lecture sections, thirty thousand two hundred and fourteen grades.

S1: And they measured rather than eyeballed. A first screen ruled out four hundred and fifty five of the sections outright, on a property that has to hold before a distribution can have two peaks at all. The remaining three hundred and twenty three went through a statistical test for more than one peak, and forty five came back positive.

S2: So what's the rate?

S1: Thirteen point nine percent of the three hundred and twenty three tested, and five point eight percent of all seven hundred and seventy eight. The authors say some positives are inevitable by chance, about one in twenty, so roughly sixteen of the forty five. Some are noise and most are real. And that was never the argument. It's the size of the number. If grades were bimodal as a rule, far more than five point eight percent would have tested that way.

S2: Is there a fair reply to that?

S1: There is, and the lesson puts it properly. The strongest version is that aptitude varies a great deal and teaching doesn't close the gap, which is a different claim from saying some people cannot program. Against that, final grades are a rough instrument. Students who struggle drop the course and vanish from the distribution, marks get curved, and everything is capped at a hundred percent.

S2: So what's actually been ruled out.

S1: A two humped outcome in the grades, which is what the folklore claims and is all the authors say they've ruled out. And none of it means programming is easy. The lesson is blunt about that. It's genuinely hard and you'll be confused for stretches of the course. The narrow thing being retired is the line dividing people who can from people who cannot.

S2: Right. Two ways to run Python.

S1: Two front doors, and they behave differently in one way that confuses people for weeks. The interpreter is what you get by typing python three at a terminal. It gives you a prompt and runs each line as you press enter. It's for trying things. A file is a document whose name ends in dot p y, that you run by typing python three and then the file's name. It's for programs you want to keep.

S2: And the one difference.

S1: Type two plus two at the prompt and it shows you four. Put that same line in a file and run it, and you get nothing at all.

S2: Nothing?

S1: The interpreter shows you the value of any expression you type, as a convenience for someone poking about. A file never shows you anything on its own. If you want a file to show you something you have to ask, and asking is the word print, with the thing you want shown in brackets after it. Print doesn't compute anything and doesn't store anything. It shows a value to a person. And that one difference is behind almost every, but it worked when I typed it.

S2: Now the errors. There are two in this lesson.

S1: And the difference between them is the one idea to carry out of the whole thing. Python reads and checks the entire file before it runs a single line of it. That first pass is called parsing, and it's asking one question only. Is this Python at all.

S2: Give me the broken one.

S1: Three lines that each print a sentence, and the second one is missing its closing bracket. Run it, and you get a SyntaxError saying the bracket was never closed. Now look at what did not happen. The first line is a perfectly good instruction, and it does not print. Nothing runs at all. A missing bracket on line two of a four hundred line file stops line one from running, because line one never got its turn.

S2: And the second error.

S1: Put the bracket back, and instead misspell print as p i n t. Now does the first line print?

S2: I'd say no, on the same reasoning.

S1: It prints. And that's the finding. P i n t is a legal name followed by brackets, so the parser has nothing to complain about, and the file passes the check. The program starts, line one runs, and line two fails at the moment Python goes looking for something called p i n t and finds nothing. That one's a NameError, and unlike the SyntaxError it comes with a header, the word traceback, at the top.

S2: So the output is evidence.

S1: That's the sentence to keep. Output before a traceback tells you the program got as far as producing it, so whatever's wrong was found during the run and not before it. Which gives you somewhere to start looking without touching a line.

S2: And reading the thing itself.

S1: From the bottom up. Beginners read from the top, because that's how you read everything else, and the top is the least useful part. The bottom line gives you the error's type and its message, and that's the line that tells you what's wrong. Above it is the exact code that failed, with marks under the exact part that failed. Above that, the file and the line number. And the top line, the one beginners stare at hardest, is a header. It carries no information about your bug at all.

S2: Last thing, and it's the one that costs the most.

S1: No error does not mean it works. Errors catch the programs Python cannot run. They say nothing at all about whether your program does what you wanted. A program that runs cleanly and prints the wrong number is a worse problem than one that crashes, because nothing announces it.

S2: We've left out the second half of that study, where fifty three professors were shown six histograms drawn from a normal distribution and asked what they saw, which the lesson says is the part it finds harder to forget. Also a second traceback worked through, from a program you know nothing about. The suggestion Python offers when it thinks it knows which name you meant. How to open a terminal and get it standing in the right folder, which is where the first hour usually goes wrong, which Python to install, what the lesson says about using an AI assistant while you learn, that an expert generates just as many errors as you do and what actually separates them, and the three broken programs to fix. The full lesson has all of it, free, at Foval Learning Institute dot org.

S1: Thanks for listening. Read the last line first.
