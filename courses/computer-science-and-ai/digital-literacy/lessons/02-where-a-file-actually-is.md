---
title: Where a file actually is
minutes: 100
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/digital-literacy/02-where-a-file-actually-is.mp3
objectives:
  - Say what makes a directory different from a file, in terms you could use to explain it to somebody else
  - Construct an absolute path and two different relative paths to a particular file on your own machine, and translate one into the other
  - Find your own home directory on your own operating system and say what the machine means by "home"
  - Predict which addresses to a file stop working after a folder above it is renamed, and say what did and did not change
quiz:
  - q: A designer keeps her work under a folder called `clients`, with one folder per client and an `invoices` folder inside each. She is standing in `clients/harrow-dental` and wants to name the file `clients/thorpe-cafe/invoices/march.pdf`. Which relative path does it?
    options:
      - "`../thorpe-cafe/invoices/march.pdf`"
      - "`invoices/thorpe-cafe/march.pdf`"
      - "`./thorpe-cafe/invoices/march.pdf`"
      - "`../../thorpe-cafe/invoices/march.pdf`"
    answer: 0
    explain: A relative path is read as directions from where you are standing. From `harrow-dental` you step up once to reach `clients`, then down into `thorpe-cafe`, then `invoices`, then the file, which is A. B goes into `harrow-dental`'s own `invoices`, which really is there, and then looks for a `thorpe-cafe` inside it, which is not, so a relative path can be right for one step and wrong for the next. C starts at `harrow-dental` and looks for a `thorpe-cafe` inside it. D steps up twice, which lands above `clients` entirely, so everything after it misses.
  - q: A tutor emails a student the line `/Users/pmartin/Documents/marking/essay3.docx` and says "that is where it is". The student pastes it into her own machine and gets nothing. Why?
    options:
      - The path is relative, so it works only from the tutor's own starting point
      - Word documents open from inside the program and never from an address
      - The path is absolute on the tutor's machine, and there is no such spot in hers
      - The student needs the tutor to send the file's position rather than its name
    answer: 2
    explain: An absolute path is unambiguous, but only within one tree. There is no `pmartin` in the student's tree, so the address names nothing, which is C. A has the vocabulary backwards, since the path starts at the root and is therefore absolute. B invents a rule about the program. D is what the tutor already sent, said differently, so it cannot be the fix; the fix is to send the file.
  - q: A researcher renames a folder called `fieldwork` to `fieldwork-2025`. Inside it, unopened, sit four hundred files. What has happened to them?
    options:
      - They moved, so anything pointing at them by address will look in the old place
      - They did not move, and every address running through the old name now names nothing
      - They are unaffected, since each file stores its own address and carries it around
      - They were copied under the new name, and the originals stay until the disk is tidied
    answer: 1
    explain: Renaming a folder changes one label on one node. Nothing inside was touched, read or copied, so B is right, and yet every absolute path running through that name is now wrong, which is why one rename breaks backup scripts and saved links. A calls it a move, which would be the same outcome by a different mechanism. C keeps the address in the wrong place, since position is held in the tree and not in the file. D invents a copy that never happened.
  - q: Two files on one laptop are both called `budget.xlsx` and they hold different numbers. Which statement about them is true?
    options:
      - They are one file seen twice, because a name is what identifies a file
      - One of them has to be a shortcut or a link pointing at the other one
      - They cannot both exist, since an operating system rejects duplicate names
      - They are different files, because position is what completes the name
    answer: 3
    explain: A name only has to be unique among its siblings, which is what buying uniqueness with position means, so D is right and two files may share a name as long as they sit in different directories. A treats the name on its own as the address. B invents a relationship the case never mentions. C states a rule no ordinary system has, and you can disprove it on your own machine in a minute.
  - q: A colleague says he has no use for folders because search finds everything. What is the sharpest thing wrong with that?
    options:
      - Search always misses files held inside applications, which is most of them
      - Search finds what you can name; structure finds what you have forgotten
      - Search runs far slower than walking to a file whose position you know
      - Search cannot work at all on a machine whose files are badly organised
    answer: 1
    explain: Both tools are real and they answer different questions, which is what B says. A and D overstate the case against search, and a colleague can refute either in one try, which loses you the argument. C is sometimes true and is not the point, because speed is not what goes wrong when you cannot remember what you called something.
  - q: Where is a file that is showing on your desktop?
    options:
      - In a directory named Desktop, ordinarily inside your home directory
      - Nowhere in the tree, because the desktop is a screen and not a position
      - In a reserved area of the disk kept for items being worked on right now
      - Wherever the program that made it has decided to keep its own files
    answer: 0
    explain: The desktop is a directory like any other, and on all three systems it ordinarily sits directly inside your home directory, which is A, and which you can check in a minute in the file browser. B is the misconception itself. C invents a reserved area. D describes something that does happen to some files, though not to the ones showing on your desktop.
---

Type a common word into the search box on your computer, something like `notes` or `budget`, and look at the results. If you've owned the machine for more than a year, there is a good chance two of them have exactly the same name.

They're different files. They hold different things. You've no way at all to tell them apart from the name, and the only thing that distinguishes them is where each one sits. Many file browsers tell you which folder a result came from, in smaller grey text under the name or along the bottom of the window. That grey line is the file's address, and this lesson is about learning to read and write it.

It's worth the time, for a reason that has nothing to do with tidiness. Almost every "the computer lost my file" story, every broken link in a document, every backup that silently stopped covering the folder that mattered, and every program that says it cannot find something you can see with your own eyes, is an address problem. Once you can write an address down, those stories stop being mysteries and start being things you can check.

Lesson 1 argued that your picture of a system decides what you do when something goes wrong. This lesson starts building the picture, on the machine in front of you.

## What you already need, which is almost nothing

[Software Carpentry's shell lesson](https://swcarpentry.github.io/shell-novice/02-filedir.html) has taught the material in these next few lessons in thousands of two-day workshops to working scientists, and it states its prerequisite plainly: if you have stored files on a computer at all and recognise the word "file" and either "directory" or "folder", you're ready.[1] That's the whole entry requirement, and I'd rather say it plainly than have you assume you're behind.

The two words, by the way, mean the same thing. "Folder" is what the graphical picture calls it; "directory" is what the system calls it, and what every command, error message and manual page you meet from lesson 4 onwards will call it. I'll use "directory" from here on so that the word is familiar by the time something else uses it at you.

## The tree

The whole structure is three rules.

A **directory** contains things. What it contains are files and other directories.

A **file** contains data and contains no other files.

Every tree has exactly one directory that is not inside anything else. It's called the **root**, and everything in that tree hangs below it. On macOS and Linux there's one tree for the whole machine; on Windows there's one per drive, which is the first difference worth naming and the only one this lesson turns on.

That's it. Follow those three rules and you get a tree: one thing at the top, branching down, with files at the ends of branches. Real machines have hundreds of thousands of files in one, and the shape never varies.

The difference between a file and a directory is worth saying in a way you could repeat to somebody else, because "a folder holds things" isn't quite enough. **A directory's content is a list of names.** A file's content is the thing itself. When you open a directory you're reading its list; when you open a file you're reading what somebody put in it. That's why a directory can be nearly empty and still exist, and why you can have a directory and a file with the same name in different places and never confuse the machine.

:::checkpoint An empty directory and an empty file look much the same in a listing. Say in one sentence what the difference between them actually is, in words you could use on somebody else.
A directory's content is a list of other names. A file's content is data, and it holds no other files.

If your sentence was "a folder holds things and a file is a thing", that is the right instinct and it will not survive contact with the next three lessons, because what a directory holds is the part that matters. It holds *names*, and that is why position can complete a name, why an address is a walk down a chain of lists, and why a terminal can show you the same list a file browser draws as icons.
:::

## Why a tree, rather than one big pile

This is the part that makes the rest follow, so I want to do it properly rather than assert it.

A name is only useful if it picks out one thing. If every file on your machine lived in one enormous list, every name would have to be unique across the whole machine. Think about what that means in practice. You could never have two files called `notes.txt`. Neither could any program: two applications that both want a file called `config` would have to negotiate with each other, and with every application written since. Every piece of software on the machine would need to know the name of every file on it.

That's impossible, so systems buy uniqueness a different way. **A name only has to be unique among its siblings.** Two files called `notes.txt` are different files because they sit in different directories, and the full address, position plus name, is what has to be unique.

One wrinkle, since you may go looking for the edge of this. macOS and Windows usually treat `Budget.xlsx` and `budget.xlsx` as the same name and will not let you keep both side by side; Linux treats them as two different names. Same rule about siblings, different idea of what counts as the same name.

One sentence, and look at how much it explains.

It explains why folders exist at all, and it isn't tidiness. It explains why moving a file changes its address while changing nothing about the file. It explains why two programs can both keep a file called `config` and never collide. And it explains the thing that trips up everybody sooner or later: the name on its own isn't an address, so any time you tell somebody a file's name and nothing else, you haven't told them where it is.

One exception is worth knowing exists, because you have met it without a word for it. A shortcut on Windows, an alias on macOS, or what Linux calls a symbolic link, is an entry in one directory that points at a file living somewhere else. It's a second address for one file rather than a second file, and it's why something can appear to be in two places at once.

:::predict A machine has two files called `report.docx`, one of them yours and one downloaded from an email. You move yours into the same directory as the other. What does the system do?
In a file browser it refuses, or it asks, or it keeps both by adding a number, which Finder writes as `report 2.docx` and File Explorer as `report (2).docx`. What it can't do is keep both under the same name in the same directory, because then the address wouldn't pick out one thing, and an address that names two things is not an address.

Those are the graphical answers, and they are the polite ones. At a terminal, which lesson 4 gets to, the same move usually replaces the old file without asking and with no way back. Same rule, no safety net, and worth knowing before you get there.

That small annoyance you have met a hundred times is the uniqueness rule showing itself, which is why no amount of better software will make it go away.
:::

## Your home directory

Somewhere in that tree is one directory that the machine considers yours. Everything you make lives inside it unless you go out of your way, and it has a different address on each of the three systems.

On macOS it is `/Users/` followed by your account name, so `/Users/tomas`.

On Linux it is `/home/` followed by your account name, so `/home/tomas`.

On Windows it is `C:\Users\` followed by your account name, so `C:\Users\tomas`.

Three spellings of one idea. Two differences are worth naming now, because they will come back in lesson 4 and it is better to meet them here where nothing depends on them.

The separator between parts of the address is a forward slash `/` on macOS and Linux and a backslash `\` on Windows. And Windows starts its address with a drive letter, `C:`, where the other two start at a bare `/`. Windows has a root per drive; macOS and Linux have one root and attach other disks to a position inside it. Nothing in this lesson turns on the difference, but it is the reason a path copied from one system into another so often produces a shrug.

Why does the machine give you a home directory at all? Because a computer with more than one account on it needs somewhere that belongs to each, and because the system's own files have to sit somewhere you cannot damage by accident. Your home directory is the part of the tree you own. Most of the rest of it you can read and cannot change, which is a piece of the picture that lesson 9 will need when it asks what an administrator password actually grants.

:::exercise Find yours
Take 5 minutes now, before reading on. Open your file browser, find your home directory, and write its full address down on paper.

On macOS, open Finder, then Go, then Home. On most Linux desktops the file manager opens at home already, and Control and L shows the address as text you can copy. Windows is in the callout below.

Then make the address visible rather than guessing it. On macOS, with the window open, press Command, Option and P together to show the path bar along the bottom. That path bar is a row of folder names reading left to right, starting with the name of your disk rather than with `/`, so it shows you the shape without giving you the address in the form this lesson teaches. To get that, control-click the last folder in the row and choose Copy as Pathname.

Write down exactly what it says, including the capital letters. You'll use it three more times in this lesson.
:::

:::callout What is different on Windows
Three things, and none of them changes the idea.

**The separator is a backslash.** `C:\Users\tomas\Documents`, where macOS and Linux write `/Users/tomas/Documents`. That's why a path copied from one system into another so often produces a shrug.

**There's a root per drive.** Windows addresses start with a drive letter, `C:`, and each drive is its own tree. macOS and Linux have one root and attach other disks to a position inside it.

**Getting to your home directory takes a different route.** Your user folder appears in the File Explorer sidebar only if you have turned on View, then Show, then Navigation pane, then Show all folders, which is off by default. The route that always works: open File Explorer, click into the address bar at the top, type `%userprofile%` and press Enter. You are now in your home directory, and the address bar shows you where it is.
:::

## One file, three addresses

There are two kinds of address and you need both.

An **absolute path** starts at the root and names every directory down to the file. It's unambiguous, and it means the same thing typed anywhere on that machine.

A **relative path** starts from wherever you happen to be standing. It's shorter, and it means nothing at all unless you know the standing point.

Here is a small tree belonging to somebody called Tomas, with one file marked, and two different places you could be standing when you name it.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 430" role="img" aria-labelledby="tree-title tree-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="tree-title">One file, three addresses</title>
  <desc id="tree-desc">A file tree. At the top is the root, written as a forward slash. Inside it is Users. Inside Users is tomas, marked A as a possible standing point. Inside tomas are Documents and Pictures. Inside Documents are letters and invoices, and invoices is marked B as the other possible standing point. Inside letters is the file landlord.md, marked with a filled circle. Below the tree, three addresses for that one file are listed: the absolute address, slash Users slash tomas slash Documents slash letters slash landlord.md, which works from anywhere on the machine; the relative address from A, Documents slash letters slash landlord.md; and the relative address from B, dot dot slash letters slash landlord.md.</desc>
  <line x1="20" y1="45" x2="20" y2="62" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="20" y1="62" x2="34" y2="62" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="44" y1="71" x2="44" y2="88" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="44" y1="88" x2="58" y2="88" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="68" y1="97" x2="68" y2="218" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="68" y1="114" x2="82" y2="114" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="68" y1="218" x2="82" y2="218" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="92" y1="123" x2="92" y2="192" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="92" y1="140" x2="106" y2="140" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="92" y1="192" x2="106" y2="192" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="116" y1="149" x2="116" y2="166" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <line x1="116" y1="166" x2="130" y2="166" stroke="var(--line-strong, #0f2a4a)" stroke-width="1.5"/>
  <text x="14" y="45" font-size="16" font-weight="700" fill="var(--text, #111418)">/</text>
  <text x="38" y="71" font-size="16" fill="var(--text, #111418)">Users</text>
  <text x="62" y="97" font-size="16" fill="var(--text, #111418)">tomas</text>
  <circle cx="126" cy="92" r="10" fill="none" stroke="var(--oxblood, #8b1e2d)" stroke-width="2"/>
  <text x="126" y="97" font-size="15" font-weight="700" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">A</text>
  <text x="86" y="123" font-size="16" fill="var(--text, #111418)">Documents</text>
  <text x="110" y="149" font-size="16" fill="var(--text, #111418)">letters</text>
  <circle cx="140" cy="166" r="6" fill="var(--gold, #b08d2a)"/>
  <text x="152" y="172" font-size="16" font-weight="700" fill="var(--text, #111418)">landlord.md</text>
  <text x="110" y="201" font-size="16" fill="var(--text, #111418)">invoices</text>
  <circle cx="190" cy="196" r="10" fill="none" stroke="var(--oxblood, #8b1e2d)" stroke-width="2"/>
  <text x="190" y="201" font-size="15" font-weight="700" text-anchor="middle" fill="var(--oxblood, #8b1e2d)">B</text>
  <text x="86" y="227" font-size="16" fill="var(--text, #111418)">Pictures</text>
  <text x="14" y="272" font-size="15" fill="var(--text-2, #4a5260)">Absolute, and good anywhere on this machine:</text>
  <text x="14" y="294" font-size="15" font-family="ui-monospace, Menlo, monospace" fill="var(--text, #111418)">/Users/tomas/Documents/letters/landlord.md</text>
  <text x="14" y="332" font-size="15" fill="var(--text-2, #4a5260)">Relative, standing at A:</text>
  <text x="14" y="354" font-size="15" font-family="ui-monospace, Menlo, monospace" fill="var(--text, #111418)">Documents/letters/landlord.md</text>
  <text x="14" y="392" font-size="15" fill="var(--text-2, #4a5260)">Relative, standing at B:</text>
  <text x="14" y="414" font-size="15" font-family="ui-monospace, Menlo, monospace" fill="var(--text, #111418)">../letters/landlord.md</text>
</svg>

Three things to notice.

The absolute path begins with `/`, which is the root. Reading it left to right is a set of instructions: start at the top of the machine, go into `Users`, go into `tomas`, into `Documents`, into `letters`, and there is the file. Every step is named, so nothing is assumed.

The relative path from A has no leading `/`, and that is the visible difference between the two kinds. It says: from where you are, go into `Documents`, then `letters`, then the file. Shorter, and useless to anybody who doesn't know you're standing at `tomas`.

The relative path from B opens with `..`, which is a name that means the directory one level up. Standing in `invoices`, `..` is `Documents`, so `../letters/landlord.md` reads as: go up one, into `letters`, then the file. You will also meet `.`, a single dot, which means the directory you are standing in right now. It looks redundant and it isn't. You'll meet it again in lesson 4, and the reason it earns its place lands in lesson 6, when you find out where the shell actually looks for a program.

:::checkpoint Standing at B, write two more addresses: one for the `Pictures` directory, and one for `tomas` itself.
`../../Pictures` for the first. From `invoices`, one `..` puts you at `Documents`, a second puts you at `tomas`, and then `Pictures` is a step down from there.

`../..` for the second, which looks odd on the page and is perfectly ordinary. An address is allowed to name a directory rather than a file, and it is allowed to end on a step upwards.

If you wrote `/Users/tomas/Pictures` instead, that is also correct and it is a different kind of answer: it is absolute, so it does not depend on standing at B at all. Both are right. Which one you want depends on whether the thing reading the address will be standing where you think it is.
:::

## The question that shows what each kind is for

Take the file in that diagram, and ask: which of those three addresses still identifies the file if I email it to you?

The answer is none of them, and working out why is worth more than the rule.

The relative ones fail immediately, because you're not standing at A or B, and `../letters/landlord.md` on your machine means whatever is one level up from wherever you happen to be. It will either name nothing or, more alarmingly, name some completely different file.

The absolute one feels like it should survive, and it doesn't, because there's no `tomas` in your tree. An absolute path is unambiguous **within one tree**, and your machine is a different tree. This catches people constantly: somebody sends a path instead of a file, or a program on a shared drive stores an absolute path that only made sense on the machine it was set up on.

So the honest version of the rule is this. A relative path travels well between *positions in the same tree*, as long as the standing point is known. An absolute path travels well *anywhere in one tree*. Neither travels between machines. What travels between machines is the file itself.

## The rename that breaks everything and damages nothing

Now the case that teaches more than any other, because it separates the file from its address cleanly.

Tomas renames `Documents` to `Docs`. He does it in the file browser, one click, a few keystrokes. He doesn't open anything inside it. Four hundred files are in there and not one of them is touched.

What just happened?

Nothing at all happened to `landlord.md`. It wasn't read, not copied, not moved. Its content is identical to the byte. If you were looking at it in an open window, the window would carry on showing it.

And yet `/Users/tomas/Documents/letters/landlord.md` now names nothing. So does every other absolute path that ran through that name, all four hundred of them. The backup script that was told to copy `/Users/tomas/Documents` will run tonight, find nothing there, and may well report success, because it copied everything it was asked to copy and it was asked to copy nothing.

:::predict Tomas is standing at B, in `invoices`, with `../letters/landlord.md` written down. Does that address still work after the rename?
Yes, and this is the case where relative wins. The address says "go up one, then into letters", and the directory one level up is still one level up whatever it is now called. The rename changed a label, and the relative path never used that label.

Which gives you the practical shape of the trade. Absolute paths survive you moving around and break when anything above the file is renamed or moved. Relative paths survive renames above the standing point and break when you are standing somewhere else. Neither is the safe one, and knowing which failure you are exposed to is the actual skill.
:::

This one mechanism is behind a surprising share of everyday breakage: the link in a document that stops resolving, the photo that vanishes from a presentation, the program that used to find its data and now does not, the sync that silently stopped covering a folder. In almost every case nothing was lost. Something above it was renamed or moved, and the address stopped matching.

It is also why "I found it, so it was not lost" and "the address is wrong" are two different diagnoses, and lesson 3 is entirely about telling them apart.

## What people get wrong

**"The file lives in the program I made it in."** People say they will "look in Word for it". Word isn't a place; it's a program that opens files sitting somewhere in the tree. This belief is common enough that in 2021 The Verge published a piece reporting university instructors who found students unable to say where their work was saved, and, in the reporter's framing, not understanding the question.[2] I've read that article at summary level rather than in full, and I want to be careful about what it is: it is journalism about a teaching experience, and it cites no study measuring how widespread this is. So don't take from it that a generation cannot use folders. Take from it only that the belief exists and is worth teaching against, which is a much weaker claim and enough for our purposes.

**"The desktop is a place."** The desktop is a directory. Ordinarily it sits directly inside your home directory, and you can see it in a minute: open your file browser, go to your home directory, and there it is, alongside Documents and Downloads. Anything on your screen is in that directory.

There's one common exception, and it makes the point rather than spoiling it. If OneDrive on Windows or iCloud Drive on a Mac has been set to look after your desktop, the directory has been moved into the sync folder, and what you are looking at on screen is the contents of a directory somewhere else in the tree. It's still a directory. It just isn't the one you expected, which is exactly why knowing the address matters. If you go looking and your home directory has no Desktop in it, that's what happened.

This matters for a practical reason. People treat the desktop as somewhere outside the filing system, back it up separately or not at all, and are surprised when it behaves like the ordinary directory it has always been.

**"Search means I do not need structure."** Search and structure answer different questions. Search finds what you can name. Structure finds what you have forgotten the name of, which is most of what you go looking for from more than a month ago. Lesson 3 takes that apart properly, because it turns out to be the same problem as a file going missing.

**"The cloud folder is somewhere else."** Your synced folder is a directory on this machine, in the ordinary tree, with a program watching it and copying changes to a server. It isn't a window onto a distant place. That isn't a technicality; it's the fact lesson 12 is built on, because a program that faithfully copies whatever is in that directory will faithfully copy the damage as well as the work.

**"If I cannot see it in the folder, it is not there."** macOS and Linux hide files whose names begin with a dot. Windows hides whatever has been marked hidden, which is a flag on the file rather than a shape of its name. Either way, your view of the tree is a filtered view, every system has a setting that unfilters it, and the things it hides are mostly configuration files that programs keep for themselves.

## Practice

:::exercise Walk the tree, and write three addresses
Take 20 minutes. Do it on the machine, not from memory, and write your answers down rather than thinking them.

1. Pick a file you made at least a month ago and can still find. Open your file browser at the root of your drive, and walk down to it **without using search**. Write down the name of every directory you pass through, in order.

   Getting to the root is not obvious on any of the three, because none of them puts it in front of you. On macOS: Finder, then Go, then Computer, or press Shift, Command and C. On Windows: This PC, then Local Disk (C:). On GNOME Files: Other Locations, then Computer.

2. From that list, write the file's absolute path. It is your list with separators between the parts and the root at the front, so you have already done the hard bit.

3. Now write two relative paths to the same file, from two different standing points. Choose standing points that are genuinely different: one above the file, and one in a sibling directory so that your answer needs at least one `..`.

4. Beside each relative path, write the standing point it assumes, in a sentence. If you can't state the assumption, the address isn't finished.

5. Answer this in writing: if you renamed the directory two levels above the file, which of your three addresses would still work, and why?
:::

:::exercise Find one file whose position surprises you
Take 15 minutes over this one. It's the more useful of the two, because it's the one that finds the gaps in your own picture.

1. Open your Downloads directory and your Desktop, and look at how many items are in each. Write the two numbers down without judging yourself.

2. Find one file whose position you did not choose, or did not know about. Candidates: something a program saved for you, something an installer left behind, an export from a phone app, a screenshot.

3. Write its absolute path, and then write one sentence on why it is there. Not where you'd have put it. Why the thing that made it put it there.

4. Now decide, in writing, whether it should stay where it is. Give a reason either way. Lesson 3 covers the case where moving it breaks something, so if you are unsure, leave it and note the question.
:::

## Connections

Lesson 1 said that your model of a system decides what you do when something goes wrong. Now you have the first piece of a real one, and you can test it against the tree on your own machine, where the places it does not match are worth more to you than the places it does.

Lesson 3 takes the same tree and looks at the names in it: what a file extension does and does not tell you, why plain text is not the same as a document, and the five reasons a file goes missing, three of which are address problems you can now state.

Lesson 4 opens a terminal, which is the same tree addressed differently, and the paths you have just written are the ones you will type. Everything in lesson 4 depends on this one, which is why you have been writing addresses by hand rather than reading about them.

Lesson 12 needs one sentence from here: a synced folder is a directory in this tree with a program watching it.

## Go deeper

- **[Software Carpentry, The Unix Shell](https://swcarpentry.github.io/shell-novice/)**, episode 2, "Navigating Files and Directories". Free, CC BY licensed, and the best-tested version of this material anywhere. It does the same tree from a terminal rather than a file browser, which is where lesson 4 is going, so reading it now is a head start rather than a repetition.
- **[The Verge, "File Not Found"](https://www.theverge.com/22684730/students-file-folder-directory-structure-education-gen-z)**, Monica Chin, 22 September 2021. Read it as a piece of reporting about how teaching has changed, not as evidence about a generation. The instructors' descriptions of the conversations they had are the interesting part.

## Sources

1. Software Carpentry, "The Unix Shell" (shell-novice), swcarpentry.github.io/shell-novice, CC BY 4.0. Lesson homepage, episode 2 "Navigating Files and Directories" and the instructor notes read in full. Supplies the stated prerequisite paraphrased at the top of this lesson, the file-and-directory framing, the construct-a-path objective this lesson's exercises are built on, and the recommendation to keep the file browser and the terminal side by side, which lesson 4 uses.
2. Monica Chin, "File Not Found", The Verge, 22 September 2021. Read at search-summary level; the article itself was not opened. Supplies only the existence of the reported phenomenon, and the lesson says so and draws no prevalence claim from it.
