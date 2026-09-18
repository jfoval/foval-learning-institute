---
title: Doing what you could not do by clicking
minutes: 130
objectives:
  - Explain what a stream is, and predict where a command's output will go before you run it
  - Build a pipeline of three commands that answers a question about your own files, one stage at a time
  - Save a working pipeline as a script, diagnose why it refuses to run, and say what the execute bit is
  - Say why commands compose with each other and graphical programs mostly do not
quiz:
  - q: A gardener wants to know how many files in a folder have the word "invoice" somewhere inside them. She has one command that finds matching files and one that counts lines. What is the shape of the answer?
    options:
      - Read the finder's output on screen and count the lines she can see
      - Save the finder's output to a file, then open the file and count it
      - Ask the counter first, then hand its number to the finder to narrow
      - Send the finder's output straight into the counter, and read the number
    answer: 3
    explain: A pipe joins one command's output to the next one's input, so the pair answers the question and writes nothing anywhere, which is D. A is what she is trying to stop doing, and it fails as soon as there are more notes than fit on a screen. B works and leaves a file she never wanted, which is the habit a pipe replaces. C reverses the order, and a counter has nothing to count until something has found it.
  - q: Somebody writes a list into `report.txt`, checks it, then writes a different list into the same file with a single `>`. What is in the file afterwards?
    options:
      - The second list only, because one arrow replaces whatever was there
      - Both lists, because a second write adds to whatever a file holds
      - Neither list, because a second write fails on a file that exists
      - The first list only, because an existing file resists a plain write
    answer: 0
    explain: One arrow truncates the file and then writes fresh, which is A, and it is the whole reason the doubled arrow exists. B describes what `>>` would have done. C and D both invent a protection that is not there, and its absence is exactly why this is worth proving on a file you made to throw away.
  - q: A learner saves three working lines into `count.sh` and runs it. The shell answers `permission denied`. What kind of failure is that?
    options:
      - The program could not be found, so the file's name is wrong somewhere
      - The file was found, and the system will not run it, which is new
      - The file could not be found, so she is standing in the wrong place
      - The lines inside it are wrong, which is why it refused to start
    answer: 1
    explain: Lesson 5 gave three categories and this is a fourth, because the file is right there and is simply not marked as something that may be run, which is B. A and C are two of lesson 5's categories and both would have said not found rather than denied. D would be a fault inside the script, and nothing has been read yet, so the contents cannot be the cause.
  - q: An analyst can export one chart from her statistics program, and needs the same chart for twelve datasets. There is no menu item for it anywhere. What is the general lesson?
    options:
      - The program was badly built, since a serious tool would offer batches
      - The program is protecting her, since bulk export is risky by its nature
      - Her operating system should provide this, and the program leaves it to it
      - A program offers what somebody built a screen for, and nobody built this
    answer: 3
    explain: A graphical program owns its window and offers exactly the operations somebody chose to draw, so an operation nobody drew simply is not available, which is D. A moralises about quality when the point is structural, and it would be just as true of a well-built program. B invents a safety rationale nobody applies to exporting. C describes a division of labour no desktop system arranges.
  - q: A file's listing begins `-rw-r--r--`. What may its owner do with it, and what does that say about where it came from?
    options:
      - Read it and run it, which is what an editor sets when it saves a file
      - Read it and change it, and not run it, which is an ordinary document
      - Read, change and run it, since an owner always gets all three of those
      - Change it and run it, though not read it, an unusual pairing to arrange
    answer: 1
    explain: Read the ten characters as three groups of three after the first, and the owner's group is `rw-`, so read and write and no execute, which is B and is exactly what a text editor produces. A adds an execute that is not in the string. C states a rule no system has, since an owner's permissions are whatever the string says they are. D describes a combination the string does not show.
  - q: What has a pipe written to disk by the time it finishes?
    options:
      - A temporary file, which the shell removes when the last one finishes
      - One file per stage, so a long pipeline can be restarted part-way
      - Nothing at all, unless a command in it was told to write something
      - Its final output, since a result must be somewhere before it shows
    answer: 2
    explain: A pipe hands one command's output to the next as it is produced, so nothing is written unless you asked for it, which is C and is why a pipe leaves you nothing to tidy. A, B and D all assume the data has to land somewhere on the way, and it does not; that assumption is exactly what makes people save a file between every step.
---

Start with a question you cannot answer by clicking.

You have a folder of four hundred files. How many of them mention the word "invoice"?

Think about what your file browser offers. It can search, and it will show you a list, and you can count the list by eye if it is short. It can't tell you the number. It can't give you the number and the list of names and nothing else. And if the answer turns out to be interesting and you want the same count for last year's folder too, you're doing the whole thing again with the mouse.

The last two lessons taught you where you are standing and how to read a command. Neither of them gave you a reason to prefer typing, and I said so at the time. This lesson is the reason. It isn't about speed. It's about a class of question the mouse cannot ask at all.

## Streams

Start with the idea that makes the rest work.

Every command has an **input stream** it can read from and an **output stream** it writes to. By default the output stream is your screen, which is why things appear when you run something. The input stream, by default, is your keyboard.

That's why `ls` prints a list rather than handing it to you: the list went to the output stream, and the output stream was pointed at the screen.

**The screen is one destination among several.** If the output can go to the screen it can go somewhere else, and the two somewhere elses worth having are a file and another command.

## Sending output to a file

`>` points the output stream at a file instead of the screen.

```
ls > listing.txt
```

Nothing appears. That's success rather than failure: the list went into `listing.txt` rather than to your screen. Open it and there it is.

`>>` is its near neighbour, and the difference between them is the thing to find out.

The difference between those two is worth finding out on purpose rather than by accident, so:

:::exercise Find out what one arrow does, on a file you made to lose
Take 5 minutes. Do this in a directory where nothing matters. Make one if you need to: `mkdir practice6` and `cd practice6`.

1. Run `echo one > out.txt`, then `cat out.txt`. Two new commands there: `echo` prints whatever you give it, so the first writes the word `one` into the file, and `cat` prints a file's contents to the screen, so the second shows you what landed.

2. Run `echo two > out.txt`, then `cat out.txt` again.

3. Write down what happened to the word `one`.

4. Now run `echo three >> out.txt`, then `cat out.txt`.

5. Write one sentence on the difference between the two arrows.
:::

The word `one` is gone. **A single `>` truncates the file first and then writes**, so whatever was there isn't there any more, and there's no warning and no undo. That's a real hazard and it's also completely predictable, which is why it is better to meet it on a file called `out.txt` in a directory called `practice6` than on something you wanted.

`<` is the third of the family and the one you'll use least. It points a command's *input* at a file rather than your keyboard.

## Pipes

Now the good one.

`|` points one command's output stream at the next command's input stream.

```
ls | wc -l
```

`ls` produces a list of names. `wc` counts things, and its `-l` flag says count lines. So the pair answers "how many things will `ls` show me in this directory", and neither command was written with the other in mind. It is worth phrasing it that carefully: lesson 4 taught you that plain `ls` leaves out names beginning with a dot, so this counts what `ls` shows rather than everything that is there.

**Nothing is written to disk.** The output of `ls` never becomes a file. It's handed straight across to `wc` as it's produced, and when the pair finishes there's nothing to tidy up, which is why a pipe is worth reaching for instead of saving a file between every step.

:::predict You run `ls > listing.txt | wc -l`, meaning to save the listing and count it in one go. What happens, and does your machine agree with your neighbour's?
It depends on the shell, which is the interesting part.

**On Linux, and in Git Bash, you get `0`.** The `>` claimed the output stream and pointed it at the file, so when the pipe went looking there was nothing left to pass, and `wc` honestly reported counting no lines.

**On a Mac you get the count and the file.** zsh has an option called MULTIOS switched on by default, which sends the output to both destinations. I ran it here and got `4` on the screen and four lines in the file.

What survives both, and is the thing worth keeping: **a redirect and a pipe are two separate claims on one output stream**, and what happens when you make both at once is a property of your shell rather than a property of redirection. Which is a good early lesson in not trusting a rule you have only tested in one place.

If you want both and want it to behave the same everywhere, run two commands, or count the file afterwards with `wc -l listing.txt`.
:::

## Why this composes, and a graphical program mostly does not

This is the part to understand rather than memorise, because it's an argument about interfaces and it explains a great deal beyond the terminal.

**Every one of these programs agreed to the same thing: read lines of text, write lines of text.** That's the entire contract. `wc` doesn't know `ls` exists. It was written years earlier by somebody else and it'll still be working with commands nobody has written yet. A small vocabulary becomes large because any of it composes with any of it.

A graphical program makes a different bargain. It owns its window, it owns its data, and it offers you exactly the operations its author drew as buttons and menu items. That isn't a criticism; it buys discoverability, which is real and which the terminal doesn't have. But it has a hard edge, and you've hit it: **an operation nobody drew simply is not available.** Your photo program can rename one file. Whether it can rename four hundred by a rule depends entirely on whether somebody built that screen.

So the argument for the terminal isn't that typing is faster than clicking. It is that composition lets you build an operation nobody built for you.

## The small toolkit

Five commands will carry most of what you want. Each does one thing, which is what lets them combine.

`grep pattern file` prints the lines that contain the pattern. With several files it prints the file name too.

`wc` counts. `-l` for lines, `-w` for words, `-c` for bytes, which is the same as characters until your file has something outside plain ASCII in it.

`sort` puts lines in order. `-n` sorts numerically rather than alphabetically, which matters the first time you sort a list of sizes and 10 comes before 9.

`head` and `tail` show the first or last few lines. `head -5` gives you five.

`cut` takes a piece out of each line. `-d` says what separates the fields and `-f` says which field you want, so `cut -d, -f2` takes the second comma-separated field of every line.

None of those is worth memorising from a list. You'll remember them by using three of them once.

## Building a pipeline, one stage at a time

Now the four-hundred-file question, answered. The way it's built matters more than the answer.

**First, put yourself somewhere with files in it.** The redirection exercise left you standing in `practice6` with one file called `out.txt`, which is not enough to search. So make a few to work on:

```
cd practice6
echo "invoice 41, paid" > jan.txt
echo "nothing here" > feb.txt
echo "Invoice 42, unpaid" > mar.txt
ls
```

Three text files, two of which mention an invoice, and one of those with a capital letter, which will matter shortly. If you would rather use your own files, `cd` to a directory that has some and read on.

**Never write a three-stage pipeline in one go.** Write one stage, run it, look at what comes out. Then add the next.

Start with the question: which of my text files mention "invoice", and how many are there?

**Stage one.** Find the lines.

```
grep -l invoice *.txt
```

`-l` says print the names of the files that matched rather than the matching lines, which is what the question asked for. The `*.txt` is the shell filling in every name ending in `.txt` before `grep` ever sees it. Run it, and you get `jan.txt` and nothing else.

Only one? `mar.txt` says `Invoice` with a capital I, and `grep` matches exactly what you gave it. Add `-i` to ignore case:

```
grep -li invoice *.txt
```

Now two. That is the commonest reason a search comes back thinner than you expected, and it's the one that fails silently rather than complaining.

**What if nothing matches at all?** You don't get an empty answer, you get an error, and which error tells you something:

```
zsh: no matches found: *.txt
grep: *.txt: No such file or directory
```

The first is zsh refusing to expand a pattern that matches nothing, so `grep` never even ran. The second is bash handing the pattern through unchanged and `grep` complaining about a file with a star in its name. Either way the message is really saying: **there are no `.txt` files where you are standing**, which is a fact about your working directory and not about your search.

**Stage two.** Count them.

```
grep -li invoice *.txt | wc -l
```

```
       2
```

One number, and that is the answer to the question you couldn't ask by clicking.

**Stage three.** Now say you want the names in order, and only the first few, because on a real folder there would be forty of them. Two more commands from the toolkit, added one at a time.

```
grep -li invoice *.txt | sort
```

```
jan.txt
mar.txt
```

Sorted. Now cut it down:

```
grep -li invoice *.txt | sort | head -5
```

Three commands, three different authors, none of whom knew about the others, answering a question about your files.

And notice what running each stage first bought you. When you ran stage two you saw a number, so you knew `wc` had been handed lines. If you had written all three at once and got nothing, you would have had three suspects instead of none.

Two habits that make this reliable:

**Look at the intermediate output.** A pipeline that returns nothing is usually one stage that returned nothing, and you find out which by running the first stage alone, then the first two.

**Build left to right and stop when it answers the question.** The pipeline isn't supposed to be clever, it's supposed to be finished.

:::checkpoint You run `grep -l invoice *.txt | wc -l` and get `0`, but you can see a file with "invoice" in it right there in the directory. Name three things that could be true, and how you would tell them apart.
**You are not standing where you think.** Run `pwd`. The `*.txt` was filled in from the working directory, and if you are one level up it matched nothing.

**The file does not end in `.txt`.** Run `ls` and look at the actual names. Lesson 3's setting is on, so you can see the extensions; a file called `invoice.docx` is not matched by `*.txt`, and would not be searchable as text anyway.

**The word is capitalised.** `grep` matches exactly what you gave it, so `Invoice` is a different string from `invoice`. Adding `-i` tells it to ignore case, and it is the one of the three that fails silently, which is what makes it worth suspecting.

What is not likely: that `grep` or `wc` is broken. Start with your own assumptions, because that is where the fault is nearly every time.
:::

## Saving it, and the failure that is a new category

You've a pipeline that works, and you'll want it again next month. So save it.

Put these three lines into a plain text file called `count.sh`, using the editor lesson 3 had you identify. It has to land in the same directory as your `.txt` files, so do what lesson 5 did: run `pwd`, copy what it prints, and paste that into the Save box. On macOS press Command, Shift and G in the Save box first; on Windows and most Linux dialogs, click into the address or file-name field and paste there.

```
#!/bin/bash
# How many text files here mention invoice
grep -li invoice *.txt | wc -l
```

The first line tells the system which program should run the rest. The second is a comment, which the shell ignores and your future self will thank you for.

Now run it:

```
./count.sh
```

And it refuses.

```
zsh: permission denied: ./count.sh
```

On Linux and in Git Bash the same failure reads `bash: ./count.sh: Permission denied`, with the words in a different order.

Stop and read that, because it is not either of the messages from lesson 5. It doesn't say the command couldn't be found, and it doesn't say the file couldn't be found. The file was found, and the system declined to run it. **That is a fourth category of failure**, and having a name for it is the point of meeting it here.

Why? Because a file that can be run is a different thing from a file that can be read, and the system tracks the difference. Run `ls -l count.sh` and look at the cluster of letters at the front of the line:

```
-rw-r--r--@ 1 you  staff  86 Sep 18 09:55 count.sh
```

That is a real line from this machine.[3] Two things about it before the important part. The `staff` is the name of your group, which is what macOS calls it; most Linux systems show your own name twice instead. And the `@` on the end of the permissions is macOS adding a note that the file carries some extra information of its own, which has nothing to do with permissions at all. If you are not on a Mac you will not see it.

Now read the ten characters in three groups of three after the first one. Each group is **read, write, execute**, and the three groups are **you, your group, everybody else**. So `rw-` means you may read and write it and not run it. `r--` twice means everybody else may read it and nothing more.

There is no `x` anywhere, so nothing may run it. The system isn't being difficult; it's telling you the truth about a file you made with a text editor, because a text editor makes documents rather than programs.

`chmod +x count.sh` adds the execute permission. Run `ls -l` again and the `x` characters are there. Run `./count.sh` and it works.

:::predict Why did you have to write `./count.sh` rather than just `count.sh`?
Because of the mechanism in lesson 5. The shell takes the first word and looks for a program of that name **in a list of directories it keeps for the purpose**, and the directory you happen to be standing in isn't on that list.

So `count.sh` on its own gets you `command not found`, which is confusing when the file is visibly right there. `./count.sh` is a relative path, the `.` meaning "here", and a name with a slash in it is treated as an address rather than looked up in the list.

That is the single dot finally earning its keep, which lesson 2 promised and lesson 4 told you to keep in your pocket.
:::

:::callout What is different on Windows
Inside Git Bash, permissions are a translation rather than the real thing, because the Windows file system does not keep them the way a POSIX one does.

There is a specific rule behind it, from the runtime Git Bash is built on: a file counts as executable if its name ends in `.bat`, `.com` or `.exe`, **or if its contents begin with `#!`**. The three lines below start with `#!/bin/bash`, so on Windows your script is likely to run the moment you save it, before you have marked anything. `chmod +x` may then appear to do nothing, because there was nothing left to do.

So do the exercise and expect it to skip a step. Read what `ls -l` says anyway; the reading is the skill, and it is the same reading on a server you meet later.

I could confirm that rule against the documentation of the runtime underneath Git Bash, and **not** against Git for Windows' own documentation, which no longer publishes the page that covered it.[4]

Two other things in this lesson behave normally on Windows: pipes and redirection work exactly as described, and so do all five commands in the toolkit.
:::

## What people get wrong

**"A pipe saves a file somewhere."** It doesn't. Nothing is written unless a command was told to write, and the only things in this lesson that write are `>` and `>>`.

**"`>` and `>>` are the same, one is just tidier."** One truncates. You proved it on `out.txt` at the top of this lesson, which is why the exercise came before the explanation.

**"The output on screen is the output."** The screen is a destination. That's what a stream means, and it is why the same command can print to your terminal, fill a file, or feed another command without being changed.

**"Scripting is programming, and I am not a programmer."** You saved three lines you'd already typed by hand. That's the whole of what happened. There's a great deal more to programming and this isn't it, and the Core's Python course in Term 6 is where that starts.

**"A permission error means I am not allowed to use my own computer."** It means this particular file isn't marked as runnable, which is the default for everything a text editor makes, and which is a sensible default, because a machine where any file you downloaded could run itself is a much worse machine.

## What this lesson deliberately leaves out

Four things that belong to this territory and are not here, so you know they exist and know you haven't missed them.

**Version control**, which is how you keep the history of a file rather than a pile of copies. **SSH**, which is running a shell on somebody else's machine. **Job control**, which is running several things at once in one terminal. And **regular expressions**, which is `grep` matching patterns rather than the literal words we have used.

The shell curriculum this course leans on leaves out the same three, and says so in its own words: "We have to leave out many important things because of time constraints, including file permissions, job control, and SSH."[1] This course cuts two of those three for the same reason, and keeps permissions, because the fourth error category is worth more to you than either of the others.

**Loops** belong on that list too. A loop repeats one operation over a set of files, which is the natural next thing after a pipeline, and it is the one omission here that you will feel.

Where to get them: MIT's Missing Semester covers version control in a later lecture. Carpentry's shell lesson does not teach any of these, which is what the sentence above is about; its companion lesson on Git is where version control lives there.

## Practice

:::exercise Answer a question about your own files that you could not answer by clicking
Take 25 minutes. The question has to be yours, and it has to be one the mouse can't answer. Write everything down as you go.

1. Write the question in one sentence, before touching the keyboard. Good shapes: how many of my files mention a word; which of them are the largest; how many were changed this month; how many lines are in all of them together.

2. Write the first stage only, run it, and paste or copy what came out into your notes. Look at it properly. Is it the shape the next stage needs?

3. Add the second stage. Run it. Note what changed.

4. Add a third if the question needs one. Stop when the question is answered rather than when the line looks impressive.

5. Beside each stage, write one line saying what that stage contributed. If you can't say, you don't yet know what it did, and running it alone will tell you.

6. Write the answer to your question down, with the date. That's the thing you actually wanted.
:::

:::exercise Save it, break it, fix it
Take 20 minutes.

1. Save your pipeline into a file called `answer.sh`, with `#!/bin/bash` as the first line and a comment saying what it does.

2. First type the bare name, `answer.sh`, with no dot and no slash, and write down what you get. Then run it properly with `./answer.sh` and write down what you get that time. The difference between those two messages is the whole of the last predict block.

   **On Windows in Git Bash, `./answer.sh` may simply work at this step**, for the reason in the callout above. If it does, read the `ls -l` output in step 3 anyway and then skip to step 6.

3. Run `ls -l answer.sh` and copy the permission letters into your notes. Say in one sentence what they mean, in the three-groups-of-three reading.

4. Run `chmod +x answer.sh`, then `ls -l` again, and note what changed.

5. Run it. It works.

6. Now break it on purpose: open it and delete one stage from the middle of the pipeline, leaving the pipe character in place. **Predict the error before you run it.** Then run it and compare.

7. Fix it, and write one line on which of the four failure categories your prediction had been.
:::

## Connections

This closes the terminal half of the course. Lesson 4 gave you a standing point, lesson 5 gave you the grammar and three kinds of failure, and this lesson added the fourth kind and the reason the whole thing was worth learning.

Lesson 7 turns to the network and starts where you already are: you type an address and a page appears. You will run two commands and read what they say back, which is the habit you have just built on your own files.

The course project, at the end, asks for a pipeline like the one you just wrote, on your own files and answering a question of your own. If your `answer.sh` works, you're ready for it.

If you go on to Python Basics in Term 6, the shape of this lesson is the shape of that course: write a line, run it, look at what came back, add the next line.

## Go deeper

- **[Software Carpentry, The Unix Shell](https://swcarpentry.github.io/shell-novice/)**, free and CC BY licensed, and where the loops go. Its episodes 4 to 6 are titled Pipes and Filters, Loops, and Shell Scripts. This course has read the homepage, episode 2 and the [instructor notes](https://swcarpentry.github.io/shell-novice/instructor/instructor-notes.html) in full, and names the later episodes by their titles only.[1]
- **[MIT, The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)**, lecture 1 for streams, redirection and permissions, and a later lecture for version control. Written for people who already program. This course has read its homepage and lecture 1.[2]

## Sources

1. Software Carpentry, "The Unix Shell" (shell-novice), swcarpentry.github.io/shell-novice, CC BY 4.0. The lesson homepage, episode 2 and the instructor notes were read in full; episodes 4 to 6 are known here at the level of their titles and stated topics, and this lesson claims no more of them than that. The instructor notes supply the record that permissions, job control and SSH are the first things cut when a workshop runs short.
2. MIT, "The Missing Semester of Your CS Education", missing.csail.mit.edu, CC BY-NC-SA. Homepage and the 2020 edition's lecture 1 notes read in full. Supplies streams, redirection with `<`, `>` and `>>`, pipes, `$PATH`, and read, write and execute permissions for owner, group and others, which is the frame this lesson uses for `ls -l`.
3. Checked on the machine this lesson was written on, macOS 26 with zsh, September 2026, and every output printed above is from that run. `echo one > out.txt` followed by `echo two > out.txt` leaves only `two`, and `>>` then appends `three`. `ls > listing.txt | wc -l` printed `4` **and** wrote four lines to the file, because zsh's MULTIOS option is on by default; the same line under bash printed `0`. `grep` matched `invoice` and not `Invoice`, and `-i` matched both. With no matching files, zsh answered `no matches found: *.txt` and bash answered `grep: *.txt: No such file or directory`. The three lines above, saved from an editor, listed as `-rw-r--r--@ 1 johnfoval  staff  86 Sep 18 09:55 count.sh`, refused to run with `zsh: permission denied: ./count.sh` under zsh and `bash: ./count.sh: Permission denied` under bash, and after `chmod +x` listed as `-rwxr-xr-x` and ran. The bare name `count.sh` answered `command not found` in both shells.
4. Cygwin, "Using Cygwin: File Permissions", and the MSYS2 documentation on default mount options, that runtime being what Git for Windows is built on. Read at documentation level, September 2026. Supplies the rule in the Windows callout: a file counts as executable there if its name ends in `.bat`, `.com` or `.exe`, or if its contents begin with `#!`, and `chmod` can affect only the write bit. Git for Windows' own page on file modes has been retired and could not be used, which the lesson says.
