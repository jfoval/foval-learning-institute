---
source: courses/computer-science-and-ai/digital-literacy/lessons/04-opening-a-terminal.md
written_by: Claude, by hand, from the lesson text
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Takes five of the
  lesson's sections properly: the working directory and why a shell has to have one, the three
  commands with the three names from lesson 2 that now become things you type, tab completion
  as a check rather than a shortcut, and the two cases that teach the standing point, the same
  command giving two answers and the command that worked last night. Leaves out how to get a shell on each system, the reasoning behind the
  POSIX shell choice, the hidden-files disagreement between the two windows, the Git Bash install and the
  callout on naming what you are trusting, WSL, the PowerShell callout, the misconceptions and
  both practice exercises, and says so in the sign-off.
checked: >-
  Fact-checked in a fresh-context subagent against the lesson on 2026-09-18: verdict PASS WITH
  NITS, and every nit was fixed in this file before rendering. Verified clean: the spoken error
  message matches the lesson character for character and keeps its attribution to one machine;
  the cross-references to lessons 2, 5 and 6 are all right; and all three of the lesson's hedges
  survive, on the wording varying between systems, on which routes into a terminal start you
  where, and on the general rule following the two examples rather than replacing them. Fixed:
  Haley had asserted this is "the lesson where people decide the course got hard", which the
  lesson nowhere says and its "terminal is for experts" misconception argues against; a
  reference to "the fix" that the episode had never given, now stated in the lesson's own words;
  the truncated lesson title in the intro; "a name" where after `cd` only a directory completes;
  and a sign-off that counted six misconceptions as skipped when the episode delivers two of
  them. The `about:` block also undercounted the sections taken. Every figure and claim appears
  in the lesson and nothing has been added that the lesson does not say. The course has no
  standpoint to preserve: course.yaml carries no `standpoint` and `sensitive_domain: false`.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Opening a terminal, and standing somewhere.

S2: Which is where I'd expect the course to get hard.

S1: And the first thing to get straight is that it isn't a second computer. Everything in the last two lessons was done by clicking. Now we do the same things by typing, and it's the same tree, the same directories, the same files. A file browser and a terminal are two windows onto one thing, and the fastest way to believe that is to put them side by side and watch them agree.

S2: Two words I'd like defined before we go on. Shell and terminal.

S1: A shell is a program that reads what you type, works out what you meant, and runs it. A terminal is the window the shell runs inside. People use the two loosely and it rarely matters.

S2: All right. I've got a terminal open and it's showing me a line of text.

S1: That's the prompt, and the shell prints it to say it's ready. What's in it varies. A common shape is your user name, then the machine's name, then the directory you're standing in, then a dollar sign or a percent sign. Some are just a dollar sign. You can change yours, people do, and none of it is load bearing. The symbol at the end is the part to recognise. It means the shell is waiting for you rather than busy running something.

S2: And underneath it there's one idea.

S1: A shell is always standing in exactly one directory. That directory is called the working directory, and it persists. It stays whatever it is until something changes it, across every command you type.

S2: Why does it need one at all?

S1: Lesson two gave the answer without naming it. Most of the names you type are relative, and a relative name isn't an address until something supplies the front of it. Documents isn't a place. Documents starting from slash Users slash you is a place. The shell holds one standing point and finishes every relative name with it, and that's the entire content of the idea.

S2: And once you have it?

S1: A great many confusing things stop being confusing, and the biggest is this. The same command is a different instruction depending on where you're standing.

S2: Give me the commands, then.

S1: Three of them. P w d prints the working directory. It stands for print working directory, and what it prints should be the absolute path showing in the file browser window next to you.

S2: Second.

S1: L s lists what's in the working directory. Compare the names against the window next to you. And if a directory is empty, l s prints nothing at all and hands you a fresh prompt, which is an answer rather than a failure.

S2: And the third command.

S1: C d changes the working directory. C d Documents moves you into Documents, if there's one where you're standing. Run it, then run p w d again, and watch the two lines differ.

S2: And the names from lesson two become things I type.

S1: Three of them. Dot dot is the directory one level up, so c d dot dot takes you back. A single dot is the directory you're standing in, and c d dot does nothing at all, which sounds useless and stays useless until lesson six. And the tilde is your home directory, whatever its full address happens to be. C d tilde takes you home from anywhere, and so does c d on its own, which is a small kindness you'd only find by reading the manual. Lesson five is about reading the manual.

S2: There's the tab key thing, which everyone teaches as a way to type less.

S1: Which is true and it's the least interesting thing about it. Type c d and the first three letters of a directory, press Tab, and if a directory starting with those letters is where you're standing, the shell finishes it for you. But tab completion can only complete something that exists. So when you press Tab and nothing happens, the shell has just told you something true and useful. There's no name starting with those letters here. Either you've got the name wrong, or you're not standing where you think you are.

S2: So it's a check.

S1: The cheapest diagnostic in the terminal. Before you convince yourself a file has vanished, type the first few letters and press Tab. Silence is evidence.

S2: You said there's a case that teaches the working directory better than a definition.

S1: Stand in your home directory and run l s Documents. You get a listing. Now run c d Documents, so you're inside it, and get ready to type exactly the same command again. L s Documents. Before you press return, predict what you'll see.

S2: The same listing. The command hasn't changed by a character.

S1: You get an error. On the machine the lesson was written on it reads, l s colon Documents colon No such file or directory. The wording varies slightly between systems, and that phrase, no such file or directory, is the common part.

S2: Because Documents is a relative name.

S1: So from inside Documents it means a Documents inside Documents, which doesn't exist. Nothing about the command changed. What changed is where it was asked from, and that turns out to be half of what a command means.

S2: And there's a version of this that will actually happen to me.

S1: You spend an evening working in a directory. Everything runs. You close the terminal and go to bed. In the morning you open a terminal, type the same command out of your notes, and it fails.

S2: Because the new terminal doesn't remember last night.

S1: A terminal opened the way this lesson opened yours starts in your home directory. The command in your notes was relative, it was correct from where you were standing yesterday, and this morning you're standing somewhere else. Some routes behave differently, and it's worth knowing which. Right clicking a folder and choosing to open a terminal there starts you in that folder, and so does the terminal built into a code editor.

S2: So what's the rule?

S1: The general one. A new terminal starts wherever it was told to, and that's almost never where you were last night. P w d is how you find out rather than assume. The fix takes two seconds once you know: run p w d to find out where you actually are, then c d to where you meant to be, then run the command again. And the habit worth building is smaller still. When a command fails and you can't see why, run p w d first. It's free, it's instant, and it settles the commonest cause before you start looking for complicated ones.

S2: Is that a beginner's mistake you grow out of?

S1: It catches everybody. It's the single most common reason a set of instructions that worked for the person who wrote them doesn't work for you.

S2: The full lesson has what we've skipped. How to get a shell on macOS, Linux and Windows, why the course teaches a POSIX shell and what that choice costs, the Git Bash install and the callout that has you name the two parties you're trusting before you install anything, why the Windows Subsystem for Linux is the better long term home and not today's answer, a careful note for anyone who already knows PowerShell, what to do when your two windows disagree about hidden files, the other misconceptions, and two exercises that have you predict every move before you make it. It's free at Foval Learning Institute dot org.

S1: Thanks for listening. Open both windows and watch them agree.
