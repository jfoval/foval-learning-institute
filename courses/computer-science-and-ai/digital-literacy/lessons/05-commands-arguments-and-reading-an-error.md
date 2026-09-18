---
title: Commands, arguments, flags, and reading an error
minutes: 135
objectives:
  - Identify the program, the flags and the arguments in a command you have never seen before
  - Find out what an unfamiliar command does, using --help or the manual, and get out of the manual again
  - Say from an error message alone whether the fault is where you are standing, the name of the program, or the program itself
  - Run a program you saved yourself, break it three ways on purpose, and name each failure from its message
quiz:
  - q: "A reader types a command and gets back this, and nothing else: `bash: gti: command not found`. What has failed, and what should she check first?"
    options:
      - The program ran and could not find the file it was given, so check the file name
      - The shell could not find a program by that name, so check the spelling of the command
      - The shell found the program and refused to run it, so check what she is allowed to do
      - The program started and stopped on an error inside itself, so check what it was given
    answer: 1
    explain: The shell never got as far as running anything, because it looked for a program called `gti` and found none, which is B, and a transposed `git` is the likeliest cause. A describes the other error entirely, the one that says no such file. C describes a permissions refusal, which says permission rather than not found. D describes a program that did start, and nothing started here.
  - q: A learner runs `python3 report.py` and is told the interpreter cannot open that file. The file is definitely on the machine and the name is definitely spelled right. What is the most likely fault?
    options:
      - The file is not plain text, so the interpreter refuses to open it at all
      - Python is not installed, which is what a message about opening a file means
      - The shell is standing somewhere other than the directory the file is in
      - The file needs to be made runnable before any interpreter will open it
    answer: 2
    explain: The message came from Python rather than from the shell, so the program was found and started and then could not find what it was handed, and a relative file name resolves against the working directory, which is C. A would produce a complaint about the contents once the file had been opened. B would have failed one step earlier with a message about the command. D describes a permission that running a file through an interpreter does not need.
  - q: Somebody is told to run a backup command and is given `rsync -a ~/work ~/backup`. Which part of that is a flag, and what does its position tell you?
    options:
      - "`-a` is the flag, and the two paths after it are what the command acts on"
      - "`~/work` is the flag, since it changes which directory the command works from"
      - "`~/backup` is the flag, because it is the option the command writes to"
      - "`rsync` is the flag, and everything after it is the program's own arguments"
    answer: 0
    explain: A flag is the part that changes how the command behaves and conventionally starts with a dash, so `-a` is it, and the words after it are the things being acted on, which is A. B and C name arguments, which say what to act on rather than how. D names the program, which is always the first word and is never a flag.
  - q: A learner opens a manual page to read about a command, finishes reading, and now cannot get his prompt back. Pressing Escape and Control and C does nothing useful. What gets him out?
    options:
      - Closing the terminal window, which is the only exit a manual page offers
      - Pressing q, which quits the pager the manual page is being shown in
      - Pressing Return until the page ends and the prompt comes back on its own
      - Typing exit and pressing Return, which leaves whatever program is running
    answer: 1
    explain: A manual page is shown inside a pager, and q quits it, which is B and is the single most useful keystroke in this lesson. A works and throws away whatever else was in that window, which is a habit worth not forming. C scrolls and eventually stops at the end without returning the prompt. D is the way out of a shell, not out of a pager, and typing it into the pager does nothing.
  - q: "A command answers with three lines, the middle one reading: File \"/Users/rk/work/tally.py\", line 4, in <module>. Which of the three faults is this, and what should she open?"
    options:
      - The location is wrong, so she should check where the shell is standing
      - The program name is wrong, so she should check what she typed at the prompt
      - The program ran and stopped on something, so she should open line 4 of that file
      - The file could not be opened at all, so she should check the address it quotes
    answer: 2
    explain: A line number inside a named file only exists once a program has read that file and started running it, so this is the third fault and the address tells her exactly where to look, which is C. A and B are the first two faults, and both fail before any file is read, so neither can produce a line number. D describes the cannot-open message, which names an address and never a line.
  - q: Why are there two different messages, one about a command and one about a file, rather than one message saying the line failed?
    options:
      - Because older systems wrote them separately and the wording was kept for compatibility
      - Because one is a warning and the other is an error, which is the difference between them
      - Because the shell writes both, and phrases the second one after the program has exited
      - Because they come from two different programs, the shell and the one the shell started
    answer: 3
    explain: The shell looks for a program and hands the rest of the words to it, so the not-found-a-program message is the shell speaking and the not-found-a-file message is usually the program speaking, which is D and is what makes the pair a diagnosis rather than noise. A invents a history. B is not the distinction, since both are failures. C keeps both messages with the shell, which is the belief that stops the pair being useful, and the name at the front of each line is the evidence against it.
---

Two failures, and telling them apart will save you an evening more than once.

```
$ pythn3 hello.py
zsh: command not found: pythn3
```

```
$ python3 hello.py
/opt/homebrew/bin/python3: can't open file '/Users/you/hello.py': [Errno 2] No such file or directory
```

The `$` is the prompt, and the line beside it is what somebody typed. Everything below it is the machine answering.

Two things about how those are printed, because your screen will differ and I would rather you knew why. **The word at the very front is whoever is talking.** A current Mac says `zsh:`, because that is its shell; Linux and Git Bash usually say `bash:`, and some messages put the words in a different order. And **the long paths are real**. Python prints the full address of the Python that ran and the full address of the file it went looking for, so yours will be longer than mine and will have your name in it. That second path is the most useful thing on the line, and in a moment you will see why.

Both say something could not be found. They're completely different problems with completely different fixes, and by the end of this lesson you'll tell them apart in about a second.

The first one is the shell saying: I looked for a program with that name, and there isn't one. The second is a program that started perfectly well and then couldn't find the file you handed it.

Most people scroll past both, and that habit costs more than any other at a terminal. It isn't laziness. Error text looks like a wall rather than a sentence, so the eye slides off it. So this lesson teaches the grammar first, because once you can see the parts of a command, the parts of an error message stop being a wall.

## A command is a sentence

Every command you type has the same shape.

```
program   flags        arguments
python3   --version
ls        -l           Documents
rm        -r           drafts
```

**The program** comes first, always. It's the name of a thing on your machine that can be run.

**Flags** change how the program behaves. By convention they start with a dash: one dash for a single letter, `-l`, or two dashes for a word, `--version`. People also call them options or switches.

**Arguments** say what the program should act on. Usually they are file or directory names, which means they are the addresses you learned in lesson 2, which means they are relative to where you are standing unless they start with a `/`.

That's the whole grammar, and `ls -l Documents` reads as: run `ls`, in its long form, on `Documents`.

Once you can see that, a command you've never met stops being an incantation. You may not know what it does, and you can still say which word is the program, which parts are changing the behaviour, and which are the things being acted on. That's enough to look the rest up, and enough to notice when somebody has handed you something you shouldn't run.

:::predict Here is a command you have probably never seen: `tar -xzf archive.tar.gz`. Without knowing anything about what it does, name the three parts.
`tar` is the program. `-xzf` is flags, three single-letter ones bundled together behind one dash, which is a convention you meet constantly. `archive.tar.gz` is the argument: the thing being acted on, and a relative path, so it has to be where you are standing.

You still don't know what `tar` does. But you know which word to look up, you know that `-xzf` is three choices somebody made about how it should behave, and you know the last word is a file that needs to be in your working directory. That's not a small amount to get from a line you've never seen.
:::

## Ask the program about itself

There are two ways to find out what a command does, and you should learn the escape from the second one before you learn the way in.

**`--help`** usually prints a short summary straight to the screen and hands your prompt back. On Linux and in Git Bash, `ls --help` does exactly that.

On a Mac most of these commands are an older family that has no `--help` at all, and what you get is this:

```
$ ls --help
ls: unrecognized option `--help'
usage: ls [-@ABCFGHILOPRSTUWabcdefghiklmnopqrstuvwxy1%,] [--color=when] [-D format] [file ...]
```

That looks like a failure and it is half an answer: the second line is the command's own summary of its grammar, which is the thing you wanted. **Do not reach for `-h` instead.** On a Mac `-h` is a real flag on many commands and it means something else entirely; `ls -h` quietly prints a directory listing, and a reader who tries it concludes that is what help looks like.

**`man`**, short for manual, opens the full documentation. Run `man ls`.

**Press `q` to get out.** Do that now, before you read another word about it.

I put that before the description on purpose, and the reason is on the record. Software Carpentry's instructor notes say that learners "can sometimes get trapped within command-line text editors such as Vim, Emacs, or Nano", and that the only escape they find is closing the terminal and opening a new one, which means finding their way back to where they were.[1] That is about editors. Extending the same caution to the manual is my judgement rather than theirs, and it is an easy call, because the manual opens in a program of its own with no visible way out either.

So: `q` quits the manual. If you are ever somewhere you can't get out of and `q` does nothing, try Control and C, which interrupts whatever is running, and if you find yourself in an editor called nano the way out is Control and X.

The manual is dense and it isn't written for beginners. Read it anyway, in one specific way: go to the section headed NAME for a one-line description, then SYNOPSIS for the grammar of the command, then skim DESCRIPTION for the flag you are trying to understand. Ignore the rest until you need it.

## Making, copying, moving, and the one with no undo

There are five to know here, and the last one needs care.

`mkdir reports` makes a directory called `reports`, where you are standing.

`touch notes.txt` makes an empty file, or, if the file exists, leaves it alone and updates the time on it.

`cp notes.txt notes-backup.txt` copies. The first argument is the original, the second is the copy, and that order holds for the next one too.

`mv notes.txt archive/` moves. It's also how you rename: `mv notes.txt minutes.txt` gives the same file a new name, in the same directory, which is exactly the rename from lesson 2 typed rather than clicked.

`rm notes.txt` removes.

:::callout `rm` has no undo and no recycle bin
This is the one command in this course that can cost you something you can't get back. Deleting a file in the file browser puts it in a bin you can open again. `rm` doesn't. It unlinks the file and the file is gone.

Two habits, and both are cheap.

**Look before you leap.** Run `ls -a` with the same argument first. `ls -a drafts` shows you what is directly inside, hidden names included. Be clear about what that is and isn't: it shows you **one level**, and `rm -r drafts` takes every level below it, so the listing is the floor of what you would lose rather than the total. If even the floor surprises you, you have just saved yourself.

**Rehearse on something you made on purpose.** The exercise below has you create a file for the express purpose of deleting it, which is the only safe way to find out what the command feels like.

And notice what the flag does there. `rm drafts` refuses, because `drafts` is a directory. `rm -r drafts` removes the directory and everything inside it, recursively, without asking. That isn't the same command with a decoration on it. It's a different instruction, and the difference is two characters.
:::

## What actually happens when you press return

Now the mechanism. It's short, and it explains both of the error messages at the top of this lesson.

When you press return, the shell does this:

1. It splits your line into words at the spaces.
2. It takes the first word and treats it as the name of a program.
3. It goes looking for a program with that name, in a list of directories it keeps for the purpose.
4. If it finds one, it starts it, and hands it all the remaining words.
5. The program then does whatever it does with those words, which usually means treating them as file names and going looking.

Two of those steps can fail, and they fail with different messages.

**Step 3 failing** is `command not found`. The shell looked in its list and there was no such program. The fault is the *name*, or the program genuinely isn't installed. Nothing ran.

**Step 5 failing** is `No such file or directory`. The program was found, it started, and then it couldn't find something it was told to act on. The fault is the *argument*, and far more often than not that means you're standing somewhere other than where you think, which is lesson 4's whole subject.

**Look again at step 1, because it has a consequence people meet before they meet the explanation.** The shell splits at spaces, so a directory called `My Practice` arrives as two separate words, and the command gets `My` and `Practice` rather than one name. The tell is unmistakable once you know it: the error names only the first word.

```
$ cd My Practice
bash: cd: My: No such file or directory
```

Nothing is wrong with the folder. Put quotes round the name, `cd "My Practice"`, or type `cd My` and press Tab and let completion write it for you, which is the better habit and is lesson 4's point arriving again.

You can see step 3 for yourself. `which python3` prints the full address of the program the shell would run, and `echo $PATH` prints the list of directories it searched, separated by colons. On the machine I am writing this on, `which python3` answers `/opt/homebrew/bin/python3`, and that directory is the first entry in the list.[5] Yours will differ, and the shape won't.

:::checkpoint Somebody sends you a command to run. You type it and get `command not found`. Name three different things that could be true, and say how you would tell them apart.
**You mistyped the program name.** Retype it slowly, or type the first few letters and press Tab: completion works on program names too, so if nothing completes, nothing by that name is on your machine.

**The program is not installed.** Common when following instructions written by somebody who has more installed than you do. `which name` confirms it: silence means the shell cannot find it either.

**It is installed and the shell cannot see it.** Less common and it does happen, usually just after an install, when the shell's list of directories was read when the window opened and has not been read since. Closing the terminal and opening a new one is the cheap test, and it's why install instructions so often end by telling you to do that.

What none of the three is: a problem with the file you were trying to act on. The shell never got that far.
:::

## Running something you wrote

Here is the exercise the whole terminal half of this course has been building towards. Do it properly, because the Foval Core's Python course in Term 6 opens by assuming you can.

You will need a plain text editor, and lesson 3 is where you found out which of your programs actually produces plain text. If you skipped that, go back: a file that's nearly plain text will cost you half an hour here and you'll blame the wrong thing.

First, check whether you have Python at all.

```
python3 --version
```

Two outcomes, and both are worked, because both are useful.

**If it answers with a version number**, something like `Python 3.14.7`, you have it. That's the whole of the check.

**If it says `command not found`**, you don't have it, or the shell can't see it. That isn't a failure of this lesson; it's the lesson working. You have just read a message and diagnosed it correctly. If you want to fix it, python.org has installers, and lesson 9 is about how to decide whether to trust a download before you run it.

:::callout On Windows, the command may not be called `python3`
You're in Git Bash, which is a POSIX shell running on a Windows machine, and Python on Windows answers to different names.

The two recommended commands there are **`python`** and **`py`**. Python's own documentation, read on 18 September 2026, says a `python3` command is also installed, and says why in its own words: it "is intended to catch accidental uses of the typical POSIX command on Windows, but is not meant to be widely used or recommended".

So if `python3 --version` is not found, try `python --version`, then `py --version`, before concluding anything. Two other Windows-only causes are worth knowing, because both produce the same message and neither means Python is missing. **The installer's offer to add Python to your `PATH` is optional**, and if it was declined the shell has nothing to find. And if typing the command opens the Microsoft Store instead of running anything, that is an app execution alias; Python's own troubleshooting page says to open Manage app execution aliases from the Start menu and check the Python entries.

One more, for later rather than now. Git Bash runs inside a terminal that the interactive Python prompt does not get on with, so `python` on its own may appear to hang. This lesson never needs the interactive prompt, so it will not bite you here. When it does, the answer is to type `winpty python` instead.
:::

Now the rest.

```
mkdir practice
cd practice
```

Now the part that trips people up, and it is not the typing. Your editor's Save box needs to be pointed at `practice`, and the surest way is to take the address from the terminal rather than hunt for the folder. Run `pwd` and copy what it prints. On macOS, in the Save box press Command, Shift and G and paste it in. On Windows and most Linux file dialogs, click into the address or file-name field and paste it there.

Then type exactly this one line and save it as `hello.py`:

```
print("Hello from a file")
```

Then, with the terminal still standing in `practice`:

```
python3 hello.py
```

It prints `Hello from a file`.

## Break it three ways on purpose

Anyone can run a thing that works. The skill is what you do when it doesn't, and the cheapest way to build it is to cause each failure yourself, while you already know the answer.

**Break the location.** Type `cd ..` so you are one level above `practice`, then run `python3 hello.py` again.

```
/opt/homebrew/bin/python3: can't open file '/Users/you/hello.py': [Errno 2] No such file or directory
```

Yours will read differently at both ends and mean the same thing.[5] What holds everywhere is the words `can't open file` and `No such file or directory`, and **the address inside the quotation marks, which is where Python actually went looking**. Compare it with what `pwd` prints and the fault is in front of you: Python looked one level too high, because that is where you were standing.

Read it as a sentence: Python started, and Python couldn't find the file. The program is fine, the file is fine, the *standing point* is wrong. `cd practice` and it works again.

**Break the program name.** Go back into `practice` and type `pythn3 hello.py`.

```
zsh: command not found: pythn3
```

On Linux or in Git Bash the same failure reads `bash: pythn3: command not found`, with the words in a different order and a different name at the front. That name is the shell saying who is speaking, and it is itself half the diagnosis: **this message came from the shell and not from a program**, because no program ever started.

Different failure, different message, different fix. The file was never even looked at.

**Break the program.** Edit `hello.py` and change `print` to `prnt`, then run it again.

```
Traceback (most recent call last):
  File "/Users/you/practice/hello.py", line 1, in <module>
    prnt("Hello from a file")
    ^^^^
NameError: name 'prnt' is not defined. Did you mean: 'print'?
```

This is the third category. It looks the most frightening and it's the friendliest of the three, because Python found the file, read it, ran it, stopped on something it didn't understand, and then told you four things: the file by its full address, the line number, the exact text, and a guess at what you meant. The full address is worth more than it looks. The first time you have two copies of something, it is how you find out which one just ran.

Notice the shape of the diagnosis, because it generalises to errors this course will never show you:

| The message mentions | The fault is | Where to look |
|---|---|---|
| the command name | the program could not be found | spelling, or it is not installed |
| a file it cannot open | the program is running, the file is not where it looked | `pwd`, then the path you gave |
| a line number inside a file | the program ran and disliked what it read | that line of that file |

:::predict You run `python3 Hello.py` in a directory that definitely contains `hello.py`, on a Mac. What happens, and what does the answer tell you?
On most Macs it runs, because the file system usually treats `Hello.py` and `hello.py` as the same name. On Linux it fails with the cannot-open message, because there the two are different names.

Which is worth knowing for a reason beyond the trivia. Code and instructions written on a Mac that quietly rely on that leniency break the moment they are run on a Linux machine, and most servers are Linux. It is one of the standard ways something works perfectly for the person who wrote it and for nobody else.

Lesson 2 mentioned this as a wrinkle in the siblings rule. This is the day it costs somebody an afternoon.
:::

## What people get wrong

**"An error means I broke something."** Almost every error at a terminal is the computer telling you precisely what it couldn't do. It's the most cooperative thing on the screen. Nothing on your machine is damaged by a command that failed to run.

**"The error is the last line, so the rest is noise."** The last line is usually the *category* of the problem, and the lines above it are where it happened. In the traceback above, the last line names the mistake and the line above it tells you which file and which line number to open. Read the whole thing, bottom to top, and stop when you've got both.

**"If the command is right, it will work anywhere."** Lesson 4's subject, and the first of the three breakages above. Any argument that isn't an absolute path is relative to where you're standing.

**"`rm` puts things in the bin."** It doesn't, which is why the callout above exists and why the practice below has you delete something you made on purpose rather than finding out on something you care about.

**"Flags are optional decoration."** `rm -r` is a different instruction from `rm`. So is `cp -r`. A flag can change what a command is willing to do, not just how it reports.

**"Reading the manual is for when you're stuck."** It's for the thirty seconds before you run something a stranger sent you. NAME and SYNOPSIS take about that long, and they are the cheapest safety check in this lesson.

## Practice

:::exercise Run it, break it, name the fault
Take 30 minutes. This is the main task of the lesson and it is the thing Term 6's Python course assumes you can already do. Write your diagnosis down each time, before you read on or fix anything.

1. Run `python3 --version` and write down what happened. If it answered with a version number, carry on. If it said the command was not found, write one sentence saying which of the three causes from the checkpoint above you think it is, and how you would check.

2. Make a directory called `practice` and move into it. Confirm with `pwd` that you are there before going on.

3. In your plain text editor, save a file called `hello.py` into `practice`, containing the single line `print("Hello from a file")`. Then run it.

4. Before breaking anything, make a spare: `cp hello.py keep.py`, then `ls` to see both. Now rename the spare with `mv keep.py backup.py` and `ls` again. That is the whole of copying and moving, and you have now done each once.

5. Break the location: `cd ..`, run it again, and write down what the message says and which of the three faults it is, from the message alone.

6. Break the name: go back in, misspell the program, and do the same.

7. Break the program: change `print` to `prnt`, and do the same. This time also write down which file and which line number the message names.

8. Fix all three and run it once more, to end on something that works.

9. Finally, write out the three messages side by side in your notes, with one line each on what failed and what you'd check first. That page is the thing you will actually use again.
:::

:::exercise Read a command you have never used, and get out of the manual
Take 15 minutes.

1. Pick a command from this list you have not used: `wc`, `head`, `tail`, `sort`, `du`, `df`, `date`. Do not look it up yet.

2. Run it with `--help`, or if that produces nothing useful, `man` and its name. Find the NAME line and the SYNOPSIS.

3. Get out of the manual with `q` before you do anything else. Do this deliberately, so the keystroke is in your fingers next time.

4. Write one sentence saying what the command does, and one sentence predicting what it would do if you ran it with no arguments at all.

5. Run it with no arguments and see whether you were right. If it sits there apparently doing nothing, that's worth knowing too, and Control and C gets you out.
:::

:::exercise Delete something on purpose
Take 5 minutes. The point is to have used `rm` once, deliberately, on something that doesn't matter.

1. In your `practice` directory, run `touch disposable.txt`, then `ls` to confirm it is there.

2. Run `ls disposable.txt`. This is the look-before-you-leap habit: the same argument you are about to delete, shown to you first.

3. Run `rm disposable.txt`, then `ls` again.

4. Now open your file browser's bin or recycle bin and confirm it isn't in there. Ten seconds, and you will not need telling again.
:::

## Connections

Lesson 4 gave you a standing point. This lesson gave you the grammar of the thing you type from it, and the two of them together are what make an error message readable rather than alarming.

Lesson 6 is where the terminal finally does something the mouse cannot. You'll send the output of one command into another and answer a question about your own files that no amount of clicking would have answered.

Lesson 9 comes back to `python3 --version` from a different direction: when it says the command isn't found and you go off to install something, what exactly are you trusting, and how do you check?

If you take Python Basics in Term 6, everything in its first lesson about opening a terminal, saving a file and reading the error assumes this lesson and the last one. The eighth step of the first exercise above, the page with the three messages on it, is the thing worth keeping.

## Go deeper

- **[Software Carpentry, The Unix Shell](https://swcarpentry.github.io/shell-novice/)**, free and CC BY licensed. Episode 3 is "Working With Files and Directories", which is the same ground as the making-and-moving section above; episode 4 is "Pipes and Filters", which is where lesson 6 goes. This course has read the homepage, episode 2 and the instructor notes, and lists the others by title, so take the recommendation as a pointer rather than a review.
- **[MIT, The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)**, lecture 1. Where this lesson's scope comes from: the command grammar, `man`, `--help`, `which`, and the idea of teaching by having the learner hit an error and work out why.[2] It moves quickly and assumes you can program.
- **[The Linux Command Line](https://linuxcommand.org/)**, free to read online. A full-length book on the shell. This course has not worked through it and makes no claim about any chapter of it; it is here so you know a thorough version exists.

## Sources

1. Software Carpentry, "The Unix Shell" (shell-novice), swcarpentry.github.io/shell-novice, CC BY 4.0. The instructor notes read in full. Supplies the record of learners getting trapped inside manual pagers and command-line editors, which is why the way out of `man` is given before the way in.
2. MIT, "The Missing Semester of Your CS Education", missing.csail.mit.edu, CC BY-NC-SA. Homepage and the 2020 edition's lecture 1 notes read in full. Supplies the command grammar of program, flags and arguments, the `man` and `--help` pair, `which` and `$PATH`, and the exercise design of having a learner hit an error deliberately and work out why.
3. Foval Learning Institute, Python Basics lesson 1, "Your first program, and your first error", read in full. Supplies the criterion this lesson's main exercise is measured against: a learner who finishes it can make a folder, save `hello.py` into it, `cd` there, run `python3 hello.py`, and, when it fails, say from the message alone whether the fault is the location, the program name, or the program.
4. Python Software Foundation, "Using Python on Windows", docs.python.org/3/using/windows.html. Read 18 September 2026. Supplies the whole of the Windows callout: that `python` is the recommended command with `py` alongside it; the sentence quoted there about the `python3` command, which is verbatim; that adding Python to `PATH` is offered as optional at install time; and the documented fix for an app execution alias, which is to open Manage app execution aliases from the Start menu and check the Python entries. The `winpty` point is **not** from this source and is marked in the lesson as reported community practice rather than documentation.
5. Checked on the machine this lesson was written on, macOS 26 with zsh and a Homebrew Python, September 2026. `python3 --version` answered `Python 3.14.7`. `which python3` answered `/opt/homebrew/bin/python3`, the first entry in `$PATH`. Running the file from the directory above produced a line beginning with the full path of the Python that ran and quoting the full path it looked for, ending `[Errno 2] No such file or directory`; the samples above are shortened at both ends so they fit the page, and the shape is exact. `pythn3 hello.py` produced `zsh: command not found: pythn3` under zsh and `bash: pythn3: command not found` under bash. `prnt("Hello from a file")` produced the traceback shown, with the file named by its absolute path and Python's own "Did you mean" suggestion. `cd My Practice` produced `bash: cd: My: No such file or directory`. `rm` on a directory produced `rm: d: is a directory`. `which cd` answered `cd: shell built-in command`. `ls --help` produced `ls: unrecognized option` followed by a usage line, and `ls -h` produced an ordinary directory listing.
