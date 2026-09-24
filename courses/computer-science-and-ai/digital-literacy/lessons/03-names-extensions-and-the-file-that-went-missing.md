---
title: Names, extensions, and the file that went missing
minutes: 125
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/digital-literacy/03-names-extensions-and-the-file-that-went-missing.mp3
objectives:
  - Say what a file extension does and does not determine, and explain the one indirection that makes an "open with" menu necessary
  - Produce a genuinely plain text file on your own machine, and check that what you produced is plain text
  - Diagnose a file you cannot find against the five causes, and say which of them are address problems
  - Decide whether a file held inside an application's own storage should be moved or copied, and give the reason
quiz:
  - q: Two people are asked to upload a plain text list. One uses Save As and picks Plain Text. The other leaves the format box alone and renames the result from `names.docx` to `names.txt`. What is actually inside the second person's file?
    options:
      - Plain characters, since renaming to `.txt` is what makes a file plain text
      - A compressed archive of XML, which is what Word wrote whatever the name says
      - Plain characters wrapped in a short header that names the program that wrote them
      - A rich text file, since that is what Word falls back to when the name says text
    answer: 1
    explain: Renaming changes the label and not one byte of the content, so the file is still the zip archive Word wrote, which is B, and a site that opens it rather than trusting the name will say something unhelpful about encoding. A is the misconception the whole lesson is built against. C describes a plain text file with a header, which is not a thing Word produces. D confuses Word's format with TextEdit's.
  - q: A surveyor's report-writing program keeps its files in a folder full of dated subdirectories of ordinary PDFs, in a place she never chose. She wants them somewhere she can find. What should she do first, and why?
    options:
      - Rename the folder to something meaningful, which moves nothing and breaks nothing
      - Move the folder into Documents, since the program keeps track of where its files are
      - Copy out the ones she wants, and leave the program's own folder exactly where it is
      - Ask the program to export them, since a program's own folder cannot be read from outside
    answer: 2
    explain: The program holds an address for that folder, and lesson 2 said what a move or a rename does to an address, so C is the safe first step and A and B are the two ways to break it. A feels gentler than moving and is not. D would also work here, and it is the wrong first instinct for this case, because the stem says these are ordinary PDFs in ordinary folders; export is the right move when a program keeps one sealed library file instead.
  - q: A machine is hiding extensions for known file types. An attachment arrives named `statement.pdf.exe`. What does the person see, and what does the system do?
    options:
      - They see `statement.pdf.exe`, because hiding never applies to a name with two dots
      - They see `statement`, and the system treats it as a document and opens a reader
      - They see `statement.pdf.exe`, and the system runs it, so the name gave the game away
      - They see `statement.pdf`, and the system runs it, since the hidden part decides
    answer: 3
    explain: The part that gets hidden is the last one, which is also the part that decides what happens on a double-click, so the reader is shown a document and the system acts on a program, which is D. A and C describe a machine that is not hiding anything. B hides the wrong end of the name and then gets the behaviour wrong too.
  - q: A student cannot find an essay he wrote a fortnight ago. He is certain he saved it, he wrote it in a notes app on his phone that syncs to his laptop, and a search on his laptop finds nothing. Which cause fits best?
    options:
      - It was saved into the app's own storage, which search may not reach as a document
      - It was renamed, so the old name no longer matches what he is searching for
      - It was never given a location, since anything unsaved is invisible to a search
      - It went to a default folder he never chose, which is why he cannot think where to look
    answer: 0
    explain: A phone app that syncs is cause two, and its storage is often one database rather than a folder of documents, so search finds the database and not the essay, which is A. B is wrong because search reads content as well as names, so a rename would not hide it. C contradicts the stem, which says he saved it. D is cause four, and search finds those, since a default folder is still an ordinary place in the tree.
  - q: A photographer double-clicks a raw camera file and it opens in a program she never wanted, every time. What is going on and what is the smallest fix?
    options:
      - The file is the wrong type, so it needs converting before anything else will open it
      - The system holds one default program per extension, and she can point that entry elsewhere
      - The program has claimed the file, so it has to be uninstalled before another can open it
      - The extension is hidden, so the system cannot tell what kind of file it is looking at
    answer: 1
    explain: A default is a single entry in a table from extension to program, so changing it is a setting rather than a repair, which is B, and this is also why "open with" exists for the one-off case. A invents a fault in the file, which opens perfectly well. C describes ownership no ordinary system has. D would change what she can see and not what the system does, since the system reads the name whether or not it shows it to her.
  - q: A designer renames `logo.png` to `logo.jpg` so a client's system will accept it. The upload works and the image then shows as broken. Why?
    options:
      - The upload stripped the file's real format somewhere during the transfer
      - The rename converted the image and lost detail that the format needed
      - The file is still a PNG inside, and something downstream believed the name
      - The two formats are incompatible, so no rename could ever have worked here
    answer: 2
    explain: Not one byte changed, so the file is a PNG carrying a name that says JPEG, and something downstream trusted the name and then failed on the content, which is C. A invents a step in the transfer. B assumes a conversion, and renaming never converts. D is too strong, because plenty of software reads the leading bytes and would have coped, which is why it got as far as the upload.
---

Somebody asks you for a plain text file. You open the writing program you have, type the list, save it, and send it. It comes back rejected. You look at what you sent and it looks exactly like a list of words, so you send it again, and it's rejected again.

That is one of the failures the instructors of the world's most-taught shell workshops record, after a decade of watching it happen in the room.[1] Their version of it is that learners on Windows reach for the writing program they already have, and it doesn't make a plain text file. There is a program on the machine that does, and nobody has told them which one, or why it matters.

It's not a small problem or a beginner's problem. It comes from a single confusion about what a file's name tells you, and clearing that up also explains the wrong program opening your documents, the attachment that wasn't what it claimed, and about half of the times a file goes missing.

Lesson 2 gave you the address. This lesson is about the last part of it, the name itself.

## What an extension is, and what it is not

The extension is the part of a file's name after the final dot. `.txt`, `.jpg`, `.docx`, `.py`.

It is a **convention about which program should open the file**. That's the whole of it. It isn't a property of the data, it isn't enforced, and it isn't checked. It's a few letters on the end of a label that a person or a program chose.

Before the experiment that settles it, you have to be able to see the thing we're talking about, and two of the three systems are hiding it from you right now.

:::exercise Turn the evidence on, before anything else
Take 10 minutes. Do this first. Every other exercise in this lesson depends on it, and on Windows the rename experiment below quietly does the wrong thing without it.

1. Make full file names visible. On Windows 11, open File Explorer, then View, then Show, then tick File name extensions. On macOS, open Finder, then Settings from the Finder menu, called Preferences on older versions, then Advanced, then tick Show all filename extensions. On most Linux desktops full names are shown already and there is nothing to change.

2. While you are there, make hidden files visible too. Windows 11: View, then Show, then Hidden items. macOS: in any Finder window press Command, Shift and the full stop key, which toggles them. Most Linux file managers: Control and H. Your view of the tree has been a filtered one, and this is the setting that unfilters it.

3. Open your Downloads directory and your home directory and read the names now. Write down two things: any file whose extension is not what you assumed, and anything that has just appeared which you have never seen before.

4. Turn hidden files back off if the clutter bothers you. Leave extensions on permanently. The things that appeared are mostly configuration files that programs keep for themselves, and lesson 4 will show you the same list from a terminal.
:::

Now the experiment, and I'd rather you did it than believed me.

:::exercise Rename a file and see what does not change
Take 10 minutes. You need a plain text editor for the first step: Notepad on Windows, TextEdit on macOS with one setting changed, or GNOME Text Editor or Kate on Linux.

1. Make a new file, type `print("hello")` into it, and save it as `test.txt` somewhere you will find it again. On macOS, before you type anything, open TextEdit's Format menu and choose Make Plain Text; the reason is two sections down.

2. Look at it in your file browser. Note the icon and, if your browser shows it, the program that will open it.

3. Rename it `test.py`. The system will probably warn you that changing the extension may affect how the file opens. Say yes.

4. Look again. The system now thinks it has a different kind of file, and the icon, the listed program, or both will usually have changed. If nothing visible changed, your machine has no program registered for `.py`, which is the table doing its job rather than failing to.

5. Open it in your plain text editor anyway. Read what is inside.
:::

What's inside is `print("hello")`, unchanged, to the last character. In 2026 I ran the same rename on the machine I am writing this on and compared a checksum of the file before and after, which is a way of asking whether a single byte differs. Not one did.[2]

So the rename changed no data at all. What it changed was a **prediction about what the file is**, and that prediction is what the icon and the double-click behaviour are made of.

## The one indirection worth understanding

Why does the system care about the end of a name?

Because when you double-click, something has to decide which program to start. Systems keep a table: this extension goes to that program. `.pdf` opens in one thing, `.jpg` in another, `.docx` in a third. The table is editable, which is why you can change what opens your photos.

So the name isn't only a label. It is **data that the system runs a decision on**. That one indirection, name to table to program, explains four things you have met:

The "open with" menu exists because the table holds one default per extension, and sometimes you want a different program for one file without changing the rule for all of them.

The wrong program opening your file is the table being right about the extension and wrong about what you wanted, which is a much less mysterious kind of wrong.

A file can be perfectly good and still be refused, because a program checked the name rather than the contents. And a file can be dangerous while carrying a harmless-looking name, because the name is a claim rather than a fact about the contents.

Which is why hiding extensions costs you something real. The name is not evidence about what is inside a file. It is evidence about **what the machine is going to do with it**, which is a different thing and a more urgent one, and hiding it takes the system's own reasoning off the screen. The next section is about what that buys an attacker.

:::predict The lesson keeps saying the extension is not checked. But when you rename a file, the system warns you, and some programs do refuse files by name. Are those two facts in tension?
Not quite, and the distinction is worth getting straight. **The operating system does not verify** that a `.jpg` contains an image. It applies the table and starts the program, and the program then discovers what it has actually been given.

**Individual programs vary.** Some read the first few bytes of a file, which for most formats carry a recognisable marker, and work out what they have regardless of the name. Others trust the name and fail later, sometimes confusingly. Both behaviours are common, and you can't tell which you're dealing with from the outside.

That's precisely why the name isn't a guarantee in either direction. The right mental note is: the name is a claim, made by whoever named the file, that the system acts on without checking.
:::

## Plain text, and the programs that will not produce it

This is the failure the lesson opened with.

**Plain text** means a file whose content is characters and nothing else. No font, no size, no bold, no page layout. Open it in any editor on any system and you get exactly the characters somebody typed.

That's what a shell needs, what a program's source code has to be, what a configuration file is, and what a great many websites mean when they say "upload a CSV" or "plain text only".

Three programs, and three different outcomes.

**TextEdit**, on macOS, opens in rich text by default. It saves `.rtf`, which is a text-based format carrying formatting instructions, and it isn't what "plain text" means. The fix is one menu item, Format then Make Plain Text, and there is a setting in TextEdit's own Settings, under New Document, to make plain text the default. Do that now and you'll save yourself a puzzled hour later.

While you are in TextEdit's Settings, go to Open and Save and tick **Display RTF files as RTF code instead of formatted text**. Without it, TextEdit opens an `.rtf` and renders it beautifully, so you see the words you typed and conclude the file is plain text. With it on, you see what is actually in the file, which on this machine begins `{\rtf1\ansi\ansicpg1252\cocoartf2870` and buries your sentence about a third of the way down.[3]

**Word** doesn't produce a text file at all. A `.docx` is a compressed archive with a set of XML documents inside it, so a program looking for characters finds a zip header. Word can produce plain text, through Save As and choosing the plain text format, and it'll warn you that formatting will be lost, which is the correct warning and is the whole point.

**Notepad**, on Windows, does produce plain text. It is the right tool and it is not the one people reach for, which is the failure [Carpentry's instructor notes](https://swcarpentry.github.io/shell-novice/instructor/instructor-notes.html) record alongside not finding the home directory and scripts refused for their line endings.[1] The callout below has the line-endings wrinkle, which is real and is not a reason to avoid Notepad.

:::checkpoint You save a list as `names.txt` from Word, using Save As and leaving the format box alone. Word writes `names.txt.docx`, and on a machine hiding extensions it shows you `names.txt`. Is the result plain text?
No. The content is a compressed archive whatever the name looks like, because the format was chosen by the Save As format box and not by what you typed into the file name box. And notice what you were shown: a file that appears to be called `names.txt`, which is the same trick as the attachment in the misconceptions below, arriving by accident rather than on purpose.

The general rule to carry away: **the format is decided by the program, and the extension is decided by you.** They agree only when you make them agree. Everything in this section is that one sentence with three examples.
:::

:::callout What is different on Windows, in this lesson
Two things, and the first is the one that bites.

**Windows hides extensions for known file types**, which is what the setting is actually called. It hides the *last* one. So `statement.pdf.exe` shows as `statement.pdf`, and the part it removed is the part that decides what happens when you double-click. That is the whole of the double-extension trick, and turning the setting off is the whole of the defence.

**Notepad is a plain text editor and it is not the one people reach for.** It will produce exactly the characters you typed. What it has historically done is end each line the Windows way rather than the POSIX way, and a shell script or a compiler can refuse a file for that alone. If you meet it, the symptom is strange: a file that looks right and behaves as though it has an invisible character at the end of every line, which is exactly what it has.
:::

## The five reasons a file goes missing

Now the other half of the lesson, and the good news is that three of the five are things you can already state, because lesson 2 gave you the vocabulary for them.

**One: it was moved or renamed.** Either one changes the file's address while changing nothing about the file. Every link, shortcut, backup rule or program setting that named the old address now names nothing. This is the commonest cause and the least alarming.

**Two: it was saved by a program into its own storage.** Photo libraries, note-taking programs, some mail clients and nearly everything that came from a phone keep their content in a directory of their own choosing, sometimes under a name that has nothing to do with your title for it. The file is in the tree, and its position wasn't your decision.

**Three: it is in a synced directory that is not currently synced.** Your cloud folder is an ordinary directory with a program watching it, as lesson 2 said. If that program is signed out, paused, out of space or unhappy about something, the machine in front of you and the copy on the server are different, and neither of them is wrong.

**Four: it went to a default location you never chose.** Downloads, a temporary directory, the desktop, or whatever the program had as its last-used folder. The choice was made, just not by you.

**Five: it was never given a location at all.** It exists only inside a program's unsaved state, which is a real place and a fragile one.

Causes one, two and four are all address problems, and they are not the same kind. In cause one an address that somebody really did write down has gone stale. In causes two and four nobody ever wrote one down; the mismatch is between the position you assumed and the position the file has always had. That is why they feel different to live through and diagnose the same way.

:::predict Which of the five does search find, and which does it miss?
Search reliably finds one, four and often two. The file is in the tree, its content is indexed, and the name or the words inside it will turn it up even though you have no idea where to look.

It misses three and five, and for different reasons. In case three the file is not on this machine right now, so there is nothing to index. In case five there is no file yet at all.

Case two is the interesting one, and the answer is "sometimes". If the program's storage is inside your home directory and holds ordinary files, search finds them. If it holds one large database file with your documents inside it, search finds the database, which is not much use to you.

That mixture is why diagnosis is worth more than a rule. "Search does not find it" narrows the field rather than settling it.
:::

## What "search found nothing" is worth

Lesson 2 said search and structure answer different questions. Now you can put a number on how much a failed search actually tells you, which is less than people think.

**It rules out nothing on its own.** Go back through the five. A failed search is consistent with all of them, because indexing is partial: it covers part of the tree, it reads the content of some file types and not others, and it cannot see a file that is not on this machine today.

**It is real evidence about two of them.** If the file is an ordinary document sitting in your home directory, which is causes one and four, a search on a word from inside it usually finds it. So a genuine failure there makes those two less likely and pushes you towards three and five, the two the index cannot reach at all.

**It says almost nothing about cause two**, for the reason the predict block gave: it depends entirely on whether the program keeps ordinary files or one big database.

So the honest reading is: a failed search moves the odds and settles nothing, and the next thing to do is not another search. It is to ask which of the five you are in.

## The file that is not missing

The last case needs judgement rather than a rule.

A designer keeps her photographs in a program that manages them for her. She finds the folder it uses. It is a real directory in her home directory, full of real image files, in subdirectories named after dates rather than after anything she would have chosen. She wants them somewhere sensible.

She has three options and only one of them is safe.

**Moving it** breaks the program. The program holds an address for its library, and lesson 2 told you what a move does to an address. The photographs are entirely unharmed and the program can't find a single one.

**Renaming the containing folder** does the same thing for the same reason, which is worth noticing because renaming feels gentler than moving and isn't.

**Copying out what she wants** works, costs disk space, and leaves the program exactly as it was. She now has two copies of some pictures, which she should be deliberate about rather than surprised by.

So: copy out, do not move. But the reasoning is the thing to keep, because it generalises to every program that manages its own storage, and the rule on its own doesn't tell you what to do the day the program is uninstalled and the folder is all that is left.

## What people get wrong

**"The extension is what the file is."** The experiment at the top of this lesson is the answer. The extension is a claim about the file, and claims can be false, by accident or on purpose.

**"Hiding extensions makes things simpler."** It hides exactly the part of the name that decides what happens when you click. The clearest cost is an attachment named `statement.pdf.exe`, which on a machine hiding known extensions displays as `statement.pdf`. The reader sees a document. The system sees a program, and runs it. Lesson 9 comes back to this with the rest of the machinery for deciding what to install; for now, extensions are on, because that was the first thing this lesson had you do.

**"A Word document is a text file."** It holds your text, which isn't the same thing. If a program asks for text and you give it a `.docx`, the program gets a zip archive and says something unhelpful about encoding.

**"If search cannot find it, it is gone."** Search covers part of the tree, indexes some content and not all of it, and can't see a file that isn't on this machine today. "Search found nothing" is evidence, and a weak one.

**"Saving is saving."** Every program has a default place it saves to, and somebody chose it, and it wasn't you. The most useful habit in this lesson is to look at the folder named in the save dialogue every single time, for about two weeks, until you've a sense of where your programs have been putting things.

## Practice

:::exercise Make plain text three ways, and find out which worked
Take 15 minutes. This is the exercise that pays off in lesson 5, when a file that is nearly plain text will waste twenty minutes of your evening.

1. List the programs on your machine that can save text. Include the obvious writing program, whatever came with the operating system, and anything you use for notes.

2. In each of them, type the single line `name,email` and save it as a file called `check` with whatever the program's default format is. Let it choose the extension.

3. Look at the results in your file browser with extensions showing. Write down the actual file name each program produced.

4. Now open each of those files in your plain text editor, the one you used at the top of this lesson. One or two will show the line you typed. Others will show either nothing useful or a screen of formatting instructions with your line buried in it. On macOS you will not see the second kind unless you turned on Display RTF files as RTF code, two sections above; without it TextEdit renders the file and you are back where you started.

5. Write one sentence for each program: does it produce plain text by default, does it produce plain text if you ask, or can it not be persuaded at all? Keep this note. It's the answer to a question you'll have again.
:::

:::exercise Diagnose a file you lost
Take 15 minutes over this one, and do it even if you found the file in the end.

1. Think of a file you could not find in the last year. Write down what you were looking for and how long you spent.

2. Go through the five causes in order and write one line against each, saying why it does or does not fit what you remember.

3. Name the cause you think it was, and say what evidence would have settled it at the time. Remember what a failed search is worth: it is real evidence about causes one and four, and it rules out none of the five.

4. If the file still matters, go and look in the place your diagnosis points at.
:::

## Connections

This lesson finishes the graphical half of the picture. You can say where a file is, write its address two ways, read its name, and work out why it isn't where you expected.

Lesson 4 opens a terminal, which is the same tree addressed by typing, and puts it beside your file browser so you can watch the two views agree. Lesson 5 then has you save a file called `hello.py` and run it, and that file has to be genuinely plain text or nothing works, which is why this lesson comes before those two rather than after them. The set of commands those two lessons teach is taken from MIT's Missing Semester, a short course that exists because universities skip this material entirely.[4]

Lesson 9 needs the double-extension case from the misconceptions above, and the wider question it raises: what exactly are you trusting when you open something somebody sent you.

Lesson 12 needs two things from here. The third cause of a missing file, a synced folder that is not currently synced, is the first hint that sync and backup are different animals. And "what is actually worth keeping a copy of" is a question you cannot answer until you know where your files really are.

## Go deeper

- **[Software Carpentry, The Unix Shell](https://swcarpentry.github.io/shell-novice/)**, and in particular its [instructor notes](https://swcarpentry.github.io/shell-novice/instructor/instructor-notes.html). The notes are not written for learners, which is what makes them worth reading: they are a decade of instructors recording what actually goes wrong in the room, and the plain-text-editor problem is near the top of the list.
- **[MIT, The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)**, lecture 1. Aimed at computer science undergraduates rather than at you, so take it at your own pace, but its opening argument is worth ten minutes: universities teach advanced material and leave students to work out the tools alone, even though the tools are what they use for hundreds of hours.

## Sources

1. Software Carpentry, "The Unix Shell" (shell-novice), swcarpentry.github.io/shell-novice, CC BY 4.0. The instructor notes read in full. They record what goes wrong on Windows in their workshops: learners not finding the home directory, not having a plain text editor to hand, and scripts refused for their line endings. The notes give no ranking and no counts, so this lesson claims none. The home directory one was used in lesson 2.
2. Checked on the machine this lesson was written on, macOS, September 2026: a plain text file saved as `test.txt` and renamed to `test.py` kept an identical checksum and an identical inode. A Unix tool that reads the leading bytes of a file, `file`, reported both as ASCII text regardless of the name, while macOS's own type table went on believing the extension and reported a 1-pixel PNG named `real.jpg` as a JPEG. That pair is the point of the section: the name is not evidence about the contents, and it is exactly what the system acts on.
3. Checked on the same machine, September 2026: a rich text file produced by the system's own text engine begins `{\rtf1\ansi\ansicpg1252\cocoartf2870` and holds the typed line about a third of the way in, behind formatting instructions. A `.docx` produced the same way begins with the bytes `50 4b 03 04`, which is a zip archive, and unpacking it yields `word/document.xml` and its companions.
4. MIT, "The Missing Semester of Your CS Education", missing.csail.mit.edu, CC BY-NC-SA. Homepage and the 2020 edition's lecture 1 notes read in full. Supplies the course's own statement of why this material is skipped, linked above as further reading, and the scope of commands that lessons 4 to 6 draw on.
