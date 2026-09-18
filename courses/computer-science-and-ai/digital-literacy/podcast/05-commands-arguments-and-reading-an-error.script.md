---
source: courses/computer-science-and-ai/digital-literacy/lessons/05-commands-arguments-and-reading-an-error.md
written_by: Claude, by hand, from the lesson text
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Takes three of the
  lesson's sections properly: the command as a sentence of program, flags and arguments; what
  the shell actually does when you press return, and which of those steps produces which error;
  and the three deliberate breakages with the table that tells them apart. Leaves out the manual
  and --help and the way out of both, the making and moving commands and the rm callout, the
  Windows Python callout, the case-sensitivity predict block, the misconceptions and all three
  practice exercises, and says so in the sign-off.
checked: >-
  Fact-checked in a fresh-context subagent against the lesson on 2026-09-18: verdict PASS WITH
  NITS, and every nit was fixed in this file before rendering. Verified clean: both spoken error
  messages match the lesson character for character, including which shell says which and the
  reversed word order between them; every count holds (five steps, four things a traceback tells
  you, three rows of the diagnosis table, six misconceptions, three exercises); all three rows of
  the table are relayed the right way round; the lesson's "far more often than not" hedge on a
  not-found argument survives; and the cross-references to lessons 2 and 4 are right. Fixed: the
  lesson title was truncated in the intro, dropping the word "flags", which is one of the three
  parts the episode then teaches; the lesson hedges immediately that the word at the front of a
  message is whoever is talking, and the script had stated the zsh wording flat and delivered the
  caveat four minutes later; and the sign-off left out an item the about block said it named.
  Every figure and claim appears in the lesson and nothing has been added that the lesson does
  not say. The course has no standpoint to preserve: course.yaml carries no `standpoint` and
  `sensitive_domain: false`.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Commands, arguments, flags, and reading an error.

S2: Start me with the two failures, because I gather that's how the lesson opens.

S1: Somebody types p y t h n 3, missing the o, and a space, and hello dot p y. The machine answers, z s h colon command not found colon p y t h n 3. That's a Mac talking. Then they fix the spelling, type python 3 hello dot p y, and the machine answers with the full address of the Python that ran, then, can't open file, then the full address of the file it went looking for, then, no such file or directory.

S2: Both of them say something couldn't be found.

S1: And they're completely different problems with completely different fixes. The first is the shell saying, I looked for a program with that name and there isn't one. The second is a program that started perfectly well and then couldn't find the file you handed it.

S2: Most people scroll past both of those, and I'd like to stop.

S1: Which is why the lesson teaches the grammar first. Error text looks like a wall rather than a sentence, so the eye slides off it. Once you can see the parts of a command, the parts of an error message stop being a wall.

S2: So what's the grammar?

S1: Every command you type has the same shape. Program, then flags, then arguments. The program comes first, always, and it's the name of a thing on your machine that can be run. Flags change how the program behaves, and by convention they start with a dash. One dash for a single letter, two dashes for a word. People also call them options, or switches. And arguments say what the program should act on.

S2: Arguments being file names.

S1: Usually, which means they're the addresses you learned in lesson two, which means they're relative to where you're standing unless they start with a slash. And that's the whole grammar. L s, dash l, Documents reads as: run l s, in its long form, on Documents.

S2: And what does that buy me on a command I've never met?

S1: It stops being an incantation. You may not know what it does, and you can still say which word is the program, which parts are changing the behaviour, and which are the things being acted on. That's enough to look the rest up, and enough to notice when somebody has handed you something you shouldn't run.

S2: All right. What actually happens when I press return?

S1: Five steps, and it explains both of the messages we opened with. The shell splits your line into words at the spaces. It takes the first word and treats it as the name of a program. It goes looking for a program with that name, in a list of directories it keeps for the purpose. If it finds one, it starts it, and hands it all the remaining words. And the program then does whatever it does with those words, which usually means treating them as file names and going looking.

S2: And two of those can fail.

S1: Two of them, with different messages. Step three failing is command not found. The shell looked in its list and there was no such program. The fault is the name, or the program genuinely isn't installed. And nothing ran.

S2: Nothing at all?

S1: Nothing. Which is the part people miss. Step five failing is the other one, no such file or directory. The program was found, it started, and then it couldn't find something it was told to act on. The fault is the argument, and far more often than not that means you're standing somewhere other than where you think, which is lesson four's whole subject.

S2: And the lesson has you break it on purpose.

S1: Three ways, because anyone can run a thing that works. The skill is what you do when it doesn't, and the cheapest way to build it is to cause each failure yourself while you already know the answer. So you write a one line file called hello dot p y that prints a greeting, you run it, it works. Then you break the location. Type c d dot dot, so you're one level above the directory the file is in, and run it again.

S2: And that's the second message.

S1: Can't open file, then an address in quotation marks, then, no such file or directory. And the address inside the quotation marks is the useful thing on the line, because it's where Python actually went looking. Compare it with what p w d prints and the fault is in front of you. Python looked one level too high, because that's where you were standing. Read it as a sentence. Python started, and Python couldn't find the file. The program is fine, the file is fine, the standing point is wrong.

S2: Second breakage.

S1: Break the program name. Go back in and misspell it. Under z s h that reads, z s h colon command not found colon, and the misspelling. On Linux or in Git Bash the same failure reads, bash colon, the misspelling, colon command not found, with the words in a different order and a different name at the front. And that name at the front is whoever is talking, which is itself half the diagnosis. This message came from the shell and not from a program, because no program ever started. The file was never even looked at.

S2: And the third.

S1: Break the program. Edit the file and change print to p r n t, then run it again. And you get a traceback, which looks the most frightening of the three and is the friendliest, because Python found the file, read it, ran it, stopped on something it didn't understand, and then told you four things. The file by its full address, the line number, the exact text of the line, and a guess at what you meant.

S2: Give me the rule for telling the three apart.

S1: The lesson puts it in three lines. If the message mentions the command name, the program could not be found, and you look at the spelling or whether it's installed. If it mentions a file it cannot open, the program is running and the file is not where it looked, so you check p w d and then the path you gave. And if it mentions a line number inside a file, the program ran and disliked what it read, so you go to that line of that file.

S2: The full lesson has what we've skipped. How to ask a program about itself with the manual and with dash dash help, and, importantly, how to get out of the manual again, the commands for making, copying, moving and removing, and the callout on why the remove command has no undo and no recycle bin, a worked parse of a command you have never seen, what happens when a folder name has a space in it, a Windows callout on what Python is actually called there, what happens when you get a capital letter wrong in a file name, which differs between a Mac and Linux, six misconceptions, and three exercises, one of which has you delete something on purpose. It's free at Foval Learning Institute dot org.

S1: Thanks for listening. Go and break something you can fix.
