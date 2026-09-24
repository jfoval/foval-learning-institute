---
title: Opening a terminal, and standing somewhere
minutes: 95
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/digital-literacy/04-opening-a-terminal.mp3
objectives:
  - Open a POSIX shell on your own operating system, installing one first if you are on Windows, and say what you trusted in order to get it
  - Explain what the working directory is, and predict what a command will do before you press return
  - Run pwd, ls and cd with ~, . and .. to reach a directory you named in advance
  - Say why a command that worked last night fails this morning, and fix it without guessing
quiz:
  - q: A learner opens a terminal, runs a command that lists what is here, and sees nothing at all. No error, no names, just a new prompt. What is the most likely explanation?
    options:
      - The command failed silently, which is what a missing program does
      - The terminal has not finished starting, so it has nothing to show yet
      - The directory she is standing in has nothing in it that the command shows
      - The command needs a directory named after it before it will list anything
    answer: 2
    explain: An empty listing is an answer rather than a failure, because the command ran, looked at the working directory and found nothing to report, which is C. A assumes a silent failure, and the shell does not fail silently; lesson 5 shows you what it says when it cannot find a program. B invents a startup delay. D describes an argument the command does not require, and giving it one would ask about somewhere else entirely.
  - q: A workshop handout says to type `cd projects` to get to the work. A participant opens a fresh terminal the next morning, types exactly that, and is told there is no such file or directory. The folder is definitely still there. What went wrong?
    options:
      - The folder was renamed overnight, which is what that message usually means
      - A fresh terminal starts at home, and `projects` is not directly inside home
      - Relative paths stop working once a terminal has been closed and reopened
      - The command needs to be given the full address, since `cd` cannot take a short one
    answer: 1
    explain: The command `cd projects` gives a relative path, so it only means something from a standing point, and a new terminal stands in your home directory rather than where you were last night, which is B. A is possible and is not the likely reading when nothing was renamed. C invents a rule about reopening. D is false, and it is worth noticing that the fix, giving the absolute path, works for a reason that has nothing to do with `cd` refusing short addresses.
  - q: Somebody types the first three letters of a directory name, presses Tab, and nothing completes. What has he learned?
    options:
      - That the shell has tab completion switched off in this particular terminal
      - That the name is longer than three letters and needs more before it completes
      - That completion only works on commands and not on the names of directories
      - That no name starting with those letters exists where he is currently standing
    answer: 3
    explain: Completion can only offer what is actually there, so silence is evidence about the directory rather than about the typing, which is D and which is why the lesson calls it a check rather than a shortcut. A blames the tool for what is usually a spelling mistake or a wrong standing point. B gets it backwards, since three letters are enough when only one name starts with them. C is false; completion works on both.
  - q: Two people run the same command, `ls notes`, at the same moment on identical laptops. One gets a listing and the other gets an error. What differs?
    options:
      - The working directory each terminal is standing in when the command runs
      - One of them has a program installed that the other one is missing
      - One typed it into a shell and the other into a graphical search box
      - The file permissions on the two machines were set up differently
    answer: 0
    explain: The word `notes` is a relative name, so it is resolved against wherever each shell is standing, and the same words mean different things from different positions, which is A and is the whole idea of the lesson. B would produce a message about the command rather than about the folder. C changes the question rather than answering it. D is possible in principle and is not what the scenario describes, and the error it produces says permission rather than no such file.
  - q: Two people install the same shell. One takes it from the project's own site. The other takes an identically named installer from a software-download site that came up first in a search. What is different about what each one is trusting?
    options:
      - Nothing, since the installer has the same name and will do the same thing
      - The second has added a party to the chain who could have altered what is inside
      - The second is safer, because a download site checks what it lists before listing it
      - The first is riskier, since a project's own site has nobody auditing what it ships
    answer: 1
    explain: You trust the project and you trust the route, and the second person has swapped a route that publishes the thing for one that merely passes it on, which is B. A treats the name as evidence, which lesson 3 spent an hour taking apart. C credits a check most such sites do not perform. D inverts it, since the project's own site is the one place the thing you want actually comes from.
  - q: A short script runs correctly when a colleague starts it from inside the folder it lives in, and fails with a message about a missing file when it is started from anywhere else. Nothing in the script is misspelled. What does that tell you about how it was written?
    options:
      - It was written for a different operating system, which is why it is fussy about place
      - It was never given permission to run, and permission is granted per directory
      - It names the files it needs by partial addresses, completed from where it starts
      - It stores the addresses of its files inside itself, and those went stale when it moved
    answer: 2
    explain: A relative name is completed by wherever the shell is standing, so a script full of them works from one place and nowhere else, which is C and is the whole idea of a working directory. A invents a portability fault the symptom does not fit. B describes permissions, which are not granted per directory and would give a different message. D reverses where position is held, and the script has not moved anyway.
---

Everything you have done in the last two lessons was done by clicking. You found your home directory, you wrote out addresses, you turned on file extensions. All of it happened in a window somebody designed for you.

Now we are going to do the same things by typing, and the first thing to get straight is that this isn't a second computer. It's the same tree, the same directories, the same files. A file browser and a terminal are two windows onto one thing, and the fastest way to believe that is to put them side by side and watch them agree.

That arrangement isn't attributed to anybody. It is simply what makes the next hour work, so this lesson is built on it and you'll need both windows open. The commands themselves are the first handful of the set [MIT's Missing Semester](https://missing.csail.mit.edu/) opens with; the rest arrives in the next two lessons.[2] Where the lesson tells you what goes wrong, that comes from [Software Carpentry's shell lesson](https://swcarpentry.github.io/shell-novice/) and its instructor notes, which are a long-running record of what actually goes wrong when this material is taught.[1]

## Getting a shell

A **shell** is a program that reads what you type, works out what you meant, and runs it. A **terminal** is the window the shell runs inside. People use the two words loosely and it rarely matters.

This course teaches a POSIX shell, which means bash or zsh. That's a choice, and it has a cost, so here's the reason before the instructions.

**It's about where you can go next, not about which shell is better.** The three free, full-length courses this one points you to next, Software Carpentry's shell lesson, MIT's Missing Semester, and the book at linuxcommand.org, all teach these commands, and so does every later Computing course on the Foval Core. Learn them and those doors are open. PowerShell has free full-length material of its own, published by Microsoft, so this is a choice about which door this course walks you through rather than a claim that only one exists.

**On macOS**, you already have one. Press Command and Space, type `Terminal`, and press return. You can also find it in Applications, then Utilities. The shell you get is zsh, which Apple has made the default for new accounts since 2019. On a Mac whose account is older than that you may get bash instead, and everything in this lesson works the same in either.

**On Linux**, you already have one too. On GNOME, Cinnamon and KDE, Control, Alt and T together opens it. Some desktops, XFCE among them, ship no shortcut at all, so look for Terminal in the applications menu. The shell is usually bash.

**On Windows**, you need to install one, and this is the first time this course asks you to install anything. The recommendation is **Git for Windows**, which includes a program called Git Bash: a bash shell that runs on Windows. It's small, it needs no restart, and it doesn't require anything to be switched off. The project describes it as a BASH emulation used to run Git from the command line, which undersells it: the shell you get is a real bash.[4]

Go to [git-scm.com/install/windows](https://git-scm.com/install/windows). As of 18 September 2026, that page offers a 64-bit installer and an ARM64 installer, portable versions of both, and a package manager command. Take the standalone installer that matches your machine, and accept the defaults unless you know why you're changing one. When it finishes, Git Bash is in your Start menu.

If you don't know which machine you have, open Settings, then System, then About, and read the line marked System type. Almost every Windows PC is x64; ARM64 ones are still unusual and you'd probably know.

:::callout Before you install anything, name what you are trusting
You're trusting two parties, and it's worth saying them out loud, because this is the habit that the whole second half of this course is built on.

You're trusting **the project**, Git for Windows, not to ship something harmful. And you are trusting **the route**, the site you downloaded from, to be giving you what the project actually published rather than something a third party substituted.

So look at the address bar before you click download, and check it says `git-scm.com`. A search engine result that looks right and goes somewhere else is one of the standard ways this goes wrong, and lesson 9 takes the whole problem apart properly.

One thing this course will never tell you to do: turn off a security feature to get an exercise working. If Windows SmartScreen or macOS Gatekeeper stops you, that's information, and the answer is to find out why rather than to switch the guard off.
:::

**The Windows Subsystem for Linux exists, and it is the better long-term home.** It gives you a real Linux rather than a bash running on Windows. It also needs more setting up than this lesson covers: you open PowerShell by right-clicking it and choosing Run as administrator, run `wsl --install`, restart the machine, then open Ubuntu from the Start menu and invent a Linux user name and password, which are new and are not your Windows ones. Your Windows files then live under `/mnt/c` rather than where the file browser shows them, so the side-by-side arrangement this lesson depends on needs setting up too. Microsoft's own documentation, checked on 18 September 2026, has all of it, and says the command needs Windows 10 version 2004 or later, or Windows 11.[3]

**Take Git Bash today and come back to that when you want it.** One thing worth noticing on the way past: the install asks to run as an administrator, which grants it powers an ordinary program doesn't have. That isn't a detail to wave through, and lesson 9 is about exactly what you hand over when you agree.

:::callout What `pwd` prints on Windows
In Git Bash, `pwd` prints `/c/Users/you` where File Explorer prints `C:\Users\you`. Lesson 2 taught you the second form, and both name the same directory: bash writes the drive as though it were the first directory under the root, and uses forward slashes throughout. Read them as the same address, because they are.

Under WSL it goes further. There `pwd` prints `/home/you`, which is a Linux home directory that has nothing in common with your Windows one, and your Windows files sit under `/mnt/c`. That is a real second tree, not a second spelling, which is the other reason this lesson recommends Git Bash first.
:::

:::callout If you already know PowerShell, read this before you skip the install
PowerShell is a capable shell and it has two real advantages this course is giving up. **It is already on the machine**, which matters in a lesson that has just made installing software a thing you should stop and think about. And **its pipelines carry structured objects rather than lines of text**, which removes a whole class of bug that POSIX shells still have: no quoting accidents, no guessing where one field ends and the next begins.

What it does differently, and what will bite. `ls`, `cat` and `pwd` exist there as aliases for its own commands, and they mostly do what a POSIX user expects right up until they don't. Because the pipeline carries objects, the text-filtering habits lesson 6 teaches don't transfer. Windows writes paths with backslashes and PowerShell displays them that way, though it will accept forward slashes in its own commands, which is not the same as every program you call from it accepting them.

The middle case is the one that costs you. Some POSIX-shaped input fails loudly and helpfully: `grep` and `touch` simply aren't there, and PowerShell says so. The trouble is the command that half works. `ls` runs, prints something that looks near enough right, and hands the next command objects rather than lines, so a pipeline copied from a tutorial quietly does something you didn't ask for. A clean failure is easy to diagnose. A half-success isn't, and that is the reason this course asks Windows learners to install a bash rather than adapt.
:::

## Open both windows now

:::exercise Put the two views side by side
Take 5 minutes and do not read on until both windows are open.

1. Open your terminal.

2. Open your file browser, and take it to your home directory, the one you wrote down in lesson 2.

3. Arrange them so you can see both at once. Half the screen each is fine.

Leave them like that for the rest of the lesson. Every command below is meant to be checked against the window next to it.
:::

## The prompt, and the one idea underneath it

Your terminal is showing you a line of text with a cursor after it. That is the **prompt**, and the shell prints it to say it is ready.

What's in it varies. A common shape is your user name, then the machine's name, then the directory you are standing in, then a `$` or a `%`. Some are just `$`. You can change yours, people do, and none of it is load-bearing. The symbol at the end is the part to recognise: it means the shell is waiting for you rather than busy running something.

Now the idea that everything else in this course's terminal half rests on.

**A shell is always standing in exactly one directory.** That directory is called the **working directory**, and it persists: it stays whatever it is until something changes it, across every command you type.

Why does the shell need one? Lesson 2 gave you the answer without naming it. Most of the names you type are relative, and a relative name is not an address until something supplies the front of it. `Documents` isn't a place. `Documents` starting from `/Users/you` is a place. The shell holds one standing point and resolves every relative name against it, and that is the entire content of the idea.

Once you have it, a great many confusing things stop being confusing, and the biggest is this one: **the same command is a different instruction depending on where you're standing.**

:::checkpoint Say in your own words why the shell has to keep a standing point at all. One sentence, as if to somebody who has never opened a terminal.
Something like: most of the names you type are partial, and a partial name isn't an address until something supplies the front of it, so the shell keeps one position and finishes every partial name with it.

If your sentence was about speed, or about the shell remembering where you were, try again. Neither is it. The working directory isn't a convenience; it's the thing that makes a short name mean anything.
:::

## The three commands

Type each of these and watch the window next to you.

`pwd` prints the working directory. It stands for "print working directory". Run it now. The absolute path it prints should be the one showing in your file browser.

`ls` lists what is in the working directory. Run it. Compare the names against the window next to you. If a directory is empty, `ls` prints nothing at all and hands you a fresh prompt, which is an answer rather than a failure.

Your two windows may not agree, and the disagreement is worth a minute. If lesson 3's hidden-items setting is still on, your file browser is showing you names that begin with a dot, and plain `ls` leaves them out. That isn't a dispute about what is there. It is two programs with different defaults about what is worth showing, and `ls -a` asks for the unfiltered list.

`cd` changes the working directory. `cd Documents` moves you into `Documents`, if there is one where you are standing. Run it, then run `pwd` again, and watch the two lines differ.

**Check first, because this is where a lesson usually assumes something.** Look at what `ls` just printed. If there is no `Documents` in the list, pick any directory name that is there and use it everywhere below instead. There are three ordinary reasons it might be missing: on Windows, OneDrive sometimes moves it, in which case `ls` shows a `OneDrive` entry and your Documents is inside that; on a Linux desktop set to another language it has another name; and a fresh WSL home directory starts out empty. None of those is a broken machine.

Three more names, which you met in lesson 2 and which now become things you type.

`..` is the directory one level up. `cd ..` takes you back.

`.` is the directory you're standing in. `cd .` does nothing at all, which sounds useless. It stays useless until lesson 6, which shows you the one place where writing the dot changes whether a command runs.

`~` is your home directory, whatever its full address happens to be. `cd ~` takes you home from anywhere, and so does `cd` on its own, which is a small kindness you'd only discover by reading the manual. Lesson 5 is about reading the manual.

:::predict You are standing in your home directory. You run `cd Documents`, then `cd ..`, then `cd Documents` again, then `cd ~`. Where are you, and how many times did the working directory actually change?
You are at home, and it changed four times: into Documents, back to home, into Documents, back to home. Every one of those commands did something.

The point of the question is the second half of it. People expect `cd ..` and `cd ~` to be the same when they are one level down, and they happen to be, here. Go two levels down and they part company: `cd ..` goes up one, and `cd ~` goes all the way home regardless. Try it before you believe me, which is the only way anything in this lesson should be believed.
:::

## Tab completion, which is a check and not a shortcut

Type `cd Doc` and press the Tab key. If a directory starting with `Doc` is where you are standing, the shell finishes the name for you.

Everyone teaches this as a way to type less. That's true and it's the least interesting thing about it.

**Tab completion can only complete something that exists.** So when you type three letters, press Tab, and nothing happens, the shell has just told you something true and useful: there is no name starting with those letters here. Either you've got the name wrong, or you're not standing where you think you are.

That makes Tab the cheapest diagnostic in the terminal. Before you convince yourself a file has vanished, type the first few letters of its name and press Tab. Silence is evidence.

## The same command, two answers

This next case teaches the working directory better than any definition can.

Stand in your home directory and run `ls Documents`. You get a listing.

:::predict Now run `cd Documents`, so you're inside it, and get ready to type exactly the same command again: `ls Documents`. Before you press return, write down what you expect to see.
Most people expect the same listing, because the command has not changed by a single character. What you get is an error.

The command didn't change. Where it was asked from did, and that turns out to be half of what a command means.
:::

Run it.

You get an error. On the machine I am writing this on, it reads:

```
ls: Documents: No such file or directory
```

The wording varies slightly between systems; the phrase "No such file or directory" is the common part.[5]

Nothing about the command changed. Not a character. What changed is where it was asked from, and `Documents` is a relative name, so from inside `Documents` it means a `Documents` inside `Documents`, which does not exist.

:::checkpoint You are inside `Documents` and you want that listing again without leaving. At least two commands will do it. How many can you find?
`ls` on its own is the plain answer. With no argument it lists the working directory, which is where you are.

`ls .` does exactly the same thing, and that is the honest note to make about the single dot: here it buys you nothing at all. Keep it in your pocket anyway. Lesson 6 shows you the one place where writing the dot is the difference between a command running and not running.

`ls ~/Documents` also works, and it works from anywhere at all, because it is an absolute address written with the `~` shorthand. That is the trade lesson 2 described: the relative form is shorter and depends on where you stand, the absolute form is longer and doesn't.
:::

## The command that worked last night

Now the version of this that will actually happen to you, and it is worth recognising before it does rather than after.

You spend an evening working in a directory. Everything runs. You close the terminal and go to bed.

In the morning you open a terminal, type the same command out of your notes, and it fails.

**A terminal opened the way this lesson opened yours starts in your home directory.** It doesn't remember last night. The command in your notes was relative, it was correct from where you were standing yesterday, and this morning you're standing somewhere else.

Some routes behave differently, and it's worth knowing which: right-clicking a folder and choosing to open a terminal there starts you in that folder, and so does the terminal built into a code editor. So the rule to carry is the more general one. **A new terminal starts wherever it was told to, and that is almost never where you were last night.** `pwd` is how you find out rather than assume.

The fix takes two seconds once you know: run `pwd` to find out where you actually are, then `cd` to where you meant to be, then run the command again. The habit worth building is smaller still. **When a command fails and you cannot see why, run `pwd` first.** It's free, it's instant, and it settles the commonest cause before you start looking for complicated ones.

This isn't a beginner's mistake that you'll grow out of. It catches everybody, and it is the single most common reason a set of instructions that worked for the person who wrote them does not work for you.

## What people get wrong

**"The terminal is a different computer."** It's a different window onto the same machine. Make a folder with the mouse, then run `ls`, and there it is. Rename it in the file browser and `ls` reports the new name. If the two windows ever disagree, one of them needs refreshing, and neither of them is lying.

**"The terminal is for experts."** The curriculum this lesson leans on teaches these commands to working scientists who are not computer scientists, and its stated prerequisite is that you recognise the word "file" and either "directory" or "folder".[1] That is lesson 2's entry requirement, which you already met.

**"Typing is faster than clicking."** For what you've done so far, it usually isn't, and I'm not going to pretend otherwise. The argument for the terminal isn't speed, and it isn't yet in front of you. Lesson 6 makes it, and it is about doing things the mouse cannot do at all.

**"`cd` with no argument is an error."** It takes you home. There are a number of small behaviours like that, and the way you find them is by reading what the command says about itself, which is lesson 5.

**"Tab completion is a shortcut."** It's a check that happens to save typing. Treating it as a check changes what you do when it stays silent.

**"If the command is right, it will work anywhere."** The whole lesson is the answer to that one.

## Practice

:::exercise Three directories, predicted before you arrive
Take 20 minutes. Keep both windows visible throughout. Write your predictions down before you press return, because a prediction you only thought is a prediction you can revise afterwards without noticing.

1. Choose three directories on your machine, in advance, and write down their names. Pick ones that are at different depths.

2. Get to the first one using an **absolute path**, the full address starting at the root. Before you press return, write down what you expect `pwd` to print. Then run `cd`, then run `pwd`, and compare.

3. Get to the second one using a **relative path** from where you now are. Work out the path on paper first, using `..` if you need to go up before you come down. Predict, then run, then compare.

4. Get to the third one using `..` at least twice. Predict, then run, then compare.

5. Every time you arrived, check the file browser window: take it to the same directory and confirm the two agree.

6. Now get home twice: once with `cd ~`, and once with `cd` on its own and nothing after it. Run `pwd` after each. Write down whether they did the same thing, and what that tells you about reading a manual rather than guessing.

7. Where you got a prediction wrong, write one sentence saying what you had assumed. That sentence is worth more than the four you got right.
:::

:::exercise Close it and open it again
Take 5 minutes, and do this one straight after the exercise above, while you are still somewhere deep in the tree.

1. Run `pwd` and write down where you are.

2. Close the terminal window completely. Open a new one.

3. Before running anything, predict what `pwd` will print now.

4. Run `pwd`. Then write one sentence explaining the result to somebody who has not taken this lesson.
:::

## Connections

Lesson 2 gave you absolute and relative paths as things to write down. This lesson made you type them, which is the version that sticks, and it added the piece lesson 2 couldn't have: the standing point that a relative path is relative *to*.

Lesson 3 gave you plain text, and you will need it in the next lesson, because lesson 5 has you save a file called `hello.py` and run it. A file that's nearly plain text will waste your evening.

Lesson 5 takes what you have just typed and teaches you to read it as a grammar rather than a spell: which word is the program, which words are the arguments, which are the flags. Then it teaches the most useful skill in this half of the course, which is telling from an error message alone whether the fault is where you are standing, the name of the program, or the program itself.

If you go on to the Core's Python course in Term 6, this lesson and the next are the ones it assumes. The thing it needs you to be able to do is exactly the exercise lesson 5 ends on.

## Go deeper

- **[Software Carpentry, The Unix Shell](https://swcarpentry.github.io/shell-novice/)**, episodes 1 and 2. Free, CC BY licensed, and the version of this material that has been tested on the most people. If any part of this lesson went too fast, that is where to slow it down.
- **[MIT, The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)**, lecture 1. Written for computer science undergraduates, so it moves quickly and assumes you can program. Worth it once you are comfortable, and it is where lessons 5 and 6 take their scope from.
- **[The Linux Command Line](https://linuxcommand.org/tlcl.php)**, a full-length book on the shell, free to download as a PDF under a Creative Commons licence. It goes far past where this course stops. Named here so you know it exists; this course hasn't worked through it and makes no claim about any particular chapter.

## Sources

1. Software Carpentry, "The Unix Shell" (shell-novice), swcarpentry.github.io/shell-novice, CC BY 4.0. Lesson homepage, episode 2 and the instructor notes read in full. Supplies the side-by-side file browser and terminal as an instructional device, the stated prerequisite quoted again here from lesson 2, the `pwd`, `ls`, `cd`, `~`, `.` and `..` set, and tab completion.
2. MIT, "The Missing Semester of Your CS Education", missing.csail.mit.edu, CC BY-NC-SA. Homepage and the 2020 edition's lecture 1 notes read in full. Supplies the scope of commands this lesson and the next two draw on, and the framing of a command as a program handed some words.
3. Microsoft, "Install WSL", learn.microsoft.com/windows/wsl/install. Read 18 September 2026. Supplies the single install command, the requirement of Windows 10 version 2004 or later or Windows 11, the default Ubuntu distribution, and the restart.
4. Git for Windows, git-scm.com/install/windows and gitforwindows.org. Read 18 September 2026. Supplies what the Windows download page offers on that date, and the project's own description of Git Bash as a BASH emulation used to run Git from the command line.
5. Checked on the machine this lesson was written on, macOS 26, September 2026: the default shell is zsh; `ls Documents` run from inside `Documents` returns `ls: Documents: No such file or directory`; a newly opened terminal reports the home directory from `pwd`.
