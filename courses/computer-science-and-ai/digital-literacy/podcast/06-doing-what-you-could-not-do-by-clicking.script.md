---
source: courses/computer-science-and-ai/digital-literacy/lessons/06-doing-what-you-could-not-do-by-clicking.md
written_by: Claude, by hand, from the lesson text
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Takes five of the
  lesson's headed sections: streams; pipes; the argument about why a small vocabulary composes
  and a graphical program mostly cannot; the pipeline built one stage at a time; and saving it,
  which ends on the fourth category of failure and the single dot finally earning its keep.
  Leaves out redirection and the two arrows, the third member of that family that points input
  at a file, the MULTIOS predict block, the checkpoint on a pipeline that returns zero, the
  detail of the five-command toolkit, reading the permission letters from a long listing, the
  Windows callout, the misconceptions, the list of what the lesson deliberately omits, and both
  practice exercises, and the sign-off names most of them.
checked: >-
  Fact-checked in fresh-context subagents against the lesson on 2026-09-18, three rounds, ending
  PASS. Round 1 was FAIL on three findings. The script spoke one permission-denied message for
  both shells and then claimed they differ in word order, which by ear refutes itself; stage
  three of the pipeline had been appended to the counting stage rather than replacing it, which
  would sort the single number `wc -l` produces and also falsified its own "three commands"; and
  the sign-off counted loops as one of the four things the lesson deliberately leaves out, where
  the lesson names four and adds loops as a further one. Round 2 was FAIL again on the same
  sentence, the repair having moved the unhearable difference one clause later, plus four nits.
  Round 3 passed: both messages now reconstruct token for token against the lesson, and the
  difference the script names is one a listener can actually hear. Also fixed across the rounds:
  a universal the lesson does not make about what a text editor marks as runnable, a permission
  named without saying which one, the lesson's bolded "nothing is written to disk", the three
  practice files said out loud so the listener is not still holding four hundred, and several
  counts in the sign-off and the about block. Every figure and claim appears in the lesson and
  nothing has been added that the lesson does not say. The course has no standpoint to preserve:
  course.yaml carries no `standpoint` and `sensitive_domain: false`.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Doing what you could not do by clicking.

S2: Which is the first lesson that says the terminal is worth the trouble.

S1: And the last two didn't, deliberately. They taught you where you're standing and how to read a command, and neither gave you a reason to prefer typing. This one is the reason, and it isn't speed. Start with a question you cannot answer by clicking. You have a folder of four hundred files. How many of them mention the word invoice?

S2: My file browser can search.

S1: It can search, it'll show you a list, and you can count the list by eye if it's short. It can't tell you the number. It can't give you the number and the list of names and nothing else. And if the answer turns out to be interesting and you want the same count for last year's folder, you're doing the whole thing again with the mouse.

S2: So what's the idea that fixes that?

S1: Streams. Every command has an input stream it can read from and an output stream it writes to. By default the output stream is your screen, which is why things appear when you run something, and the input stream by default is your keyboard. So l s prints a list rather than handing it to you because the list went to the output stream, and the output stream was pointed at the screen.

S2: And it could be pointed somewhere else.

S1: That's the whole move. The screen is one destination among several, and the two others worth having are a file and another command.

S2: Take the second one, the other command.

S1: That's the vertical bar, which people call a pipe. It points one command's output stream at the next command's input stream. So l s, pipe, w c dash l. L s produces a list of names, w c counts things, and its dash l flag says count lines. So the pair answers, how many things will l s show me in this directory. And nothing is written to disk on the way.

S2: So why does this compose when my photo program doesn't?

S1: Because every one of these programs agreed to the same thing. Read lines of text, write lines of text. That's the entire contract. W c doesn't know l s exists. It was written years earlier by somebody else, and it'll still be working with commands nobody has written yet. A small vocabulary becomes large because any of it composes with any of it.

S2: And a graphical program makes a different bargain.

S1: It owns its window, it owns its data, and it offers you exactly the operations its author drew as buttons and menu items. That isn't a criticism. It buys discoverability, which is real and which the terminal hasn't got. But it has a hard edge, and you've hit it. An operation nobody drew simply isn't available. Your photo program can rename one file. Whether it can rename four hundred by a rule depends entirely on whether somebody built that screen.

S2: So the argument isn't that typing is faster.

S1: It's that composition lets you build an operation nobody built for you.

S2: Take me back to the four hundred files, then.

S1: And the way it's built matters more than the answer. Never write a three stage pipeline in one go. Write one stage, run it, look at what comes out, then add the next.

S2: First stage.

S1: On three files you make to practise on, it's grep, dash l, invoice, star dot t x t. Grep prints lines that contain a pattern, and dash l says print the names of the files that matched rather than the matching lines, which is what the question asked for. And the star dot t x t is the shell filling in every name ending in dot t x t before grep ever sees it.

S2: And that works.

S1: It comes back with one file, and there are two. The second one says Invoice with a capital I, and grep matches exactly what you gave it. Add dash i to ignore case and now you get two. That's the commonest reason a search comes back thinner than you expected, and it's the one that fails silently rather than complaining.

S2: Second stage.

S1: Pipe it into w c dash l, and you get the number two. One number, and that's the answer to the question you couldn't ask by clicking.

S2: And if I want the names rather than the number?

S1: Take the counter off and send grep into sort instead, then into head dash five to keep the first five. Grep, sort, head. Three commands, three different authors, none of whom knew about the others, answering a question about your files.

S2: And building it stage by stage bought me what?

S1: If you'd written it all at once and got nothing back, you'd have had three suspects instead of none.

S2: And then I want it again next month.

S1: So you save it. Three lines in a plain text file called count dot s h. The first line tells the system which program should run the rest, the second is a comment the shell ignores and your future self will thank you for, and the third is the pipeline you already typed by hand.

S2: And it runs.

S1: It refuses. Under z s h it reads, z s h colon permission denied colon dot slash count dot s h. On Linux and in Git Bash the same failure reads, bash colon dot slash count dot s h colon Permission denied. The same words, in a different order. And you should stop and read that, because it isn't either of the messages from lesson five. It doesn't say the command couldn't be found, and it doesn't say the file couldn't be found. The file was found, and the system declined to run it.

S2: So that's a new category.

S1: A fourth one, and having a name for it is the point of meeting it here. A file that can be run is a different thing from a file that can be read, and the system tracks the difference. A text editor makes documents rather than programs, so what you save from one is not marked runnable by default. C h m o d, space, plus x, and the file name, adds the execute permission, and then it works.

S2: One more thing. Why did you write dot slash count dot s h, and not just the name?

S1: Because of the mechanism in lesson five. The shell takes the first word and looks for a program of that name in a list of directories it keeps for the purpose, and the directory you happen to be standing in isn't on that list. So the bare name gets you command not found, which is confusing when the file is visibly right there. Dot slash count dot s h is a relative path, the dot meaning here, and a name with a slash in it is treated as an address rather than looked up in the list.

S2: Which is the single dot finally earning its keep.

S1: Which lesson two promised and lesson four told you to keep in your pocket.

S2: The full lesson has what we've skipped. How to point a command's output into a file instead of the screen, and the difference between the two arrows, one of which truncates what was there with no warning and no undo. What happens when you write a redirect and a pipe on the same line, which turns out to depend on your shell, the five command toolkit in detail, how to read the permission letters in a long listing, a Windows callout on why your script may run before you have marked it, five misconceptions, four things the lesson deliberately leaves out, and loops as a fifth, and two practice exercises, one of which has you answer a question about your own files that the mouse cannot answer. It's free at Foval Learning Institute dot org.

S1: Thanks for listening. Go and ask your files something.
