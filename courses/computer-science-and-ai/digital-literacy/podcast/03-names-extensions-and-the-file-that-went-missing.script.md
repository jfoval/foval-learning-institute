---
source: courses/computer-science-and-ai/digital-literacy/lessons/03-names-extensions-and-the-file-that-went-missing.md
written_by: Claude, by hand, from the lesson text
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Takes three of the
  lesson's sections properly: what an extension is and the rename experiment, the name to table
  to program indirection and what hiding it costs, and plain text against the three programs
  that do or do not produce it. Closes on the five reasons a file goes missing and what a failed
  search is worth. Leaves out the setup exercise that turns extensions and hidden
  files on, the predict block on what the system verifies against what individual programs do,
  the designer's photo library, the misconceptions and both practice exercises, and says so in
  the sign-off.
checked: >-
  Fact-checked in a fresh-context subagent against the lesson on 2026-09-18: verdict PASS WITH
  NITS, and every nit was fixed in this file before rendering. The counts were verified (four
  things the name-to-table indirection explains, five reasons a file goes missing, three
  programs), as was the one hedge this lesson is most careful about: the Software Carpentry
  instructor notes give no ranking and no counts, and the script claims none. Fixed: the rename
  experiment's result arrived settled, losing the lesson's "will usually have changed" and its
  reading of the case where nothing visible changes; "the system warns you" for the lesson's
  "will probably warn you"; a dropped "if your browser shows it"; and a sign-off that said the
  operating system never verifies a name, when what it never does is check the name against the
  contents, which in this lesson is the whole distinction. Every figure and claim appears in the
  lesson and nothing has been added that the lesson does not say. The course has no standpoint to
  preserve: course.yaml carries no `standpoint` and `sensitive_domain: false`.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Names, extensions, and the file that went missing.

S2: Open with the failure, because I think I've had this one.

S1: Somebody asks you for a plain text file. You open the writing program you have, type the list, save it, and send it. It comes back rejected. You look at what you sent, it looks exactly like a list of words, so you send it again. Rejected again.

S2: And that's a common one?

S1: It's one of the failures the instructors of the world's most taught shell workshops record, after a decade of watching it happen in the room. Their version is that learners on Windows reach for the writing program they already have, and it doesn't make a plain text file. There's a program on the machine that does, and nobody has told them which one, or why it matters.

S2: So what is an extension, exactly?

S1: The part of a file's name after the final dot. Dot t x t, dot j p g, dot p y. And here's the whole of it. It's a convention about which program should open the file. It isn't a property of the data, it isn't enforced, and it isn't checked. It's a few letters on the end of a label that a person or a program chose.

S2: That's a strong claim. How does the lesson settle it?

S1: With an experiment it would rather you ran than believed. Make a new file, type the word print, then a bracket, then the word hello in quotes, then close the bracket. Save it as test dot t x t. Look at it in your file browser, note the icon and, if your browser shows it, the program that would open it. Then rename it test dot p y.

S2: And the system warns you.

S1: It'll probably warn you that changing the extension may affect how the file opens. Say yes. Now the icon will usually have changed, or the listed program, or both, and the system thinks it has a different kind of file. If nothing visible changed, your machine has no program registered for dot p y, which is the table doing its job rather than failing to.

S2: And the file?

S1: Unchanged, to the last character. On the machine this lesson was written on, in September twenty twenty six, the author ran that rename and compared a checksum of the file before and after, which is a way of asking whether a single byte differs. Not one did.

S2: So what actually changed?

S1: A prediction about what the file is. And that prediction is what the icon and the double click behaviour are made of.

S2: Why does the system care about the end of a name at all?

S1: Because when you double click, something has to decide which program to start. So systems keep a table. This extension goes to that program. And the table is editable, which is why you can change what opens your photographs.

S2: So the name isn't just a label.

S1: It's data that the system runs a decision on. Name, to table, to program. And that one indirection explains four things you've already met. The open with menu exists because the table holds one default per extension, and sometimes you want a different program for one file without changing the rule for all of them. The wrong program opening your file is the table being right about the extension and wrong about what you wanted, which is a much less mysterious kind of wrong. A perfectly good file can be refused, because a program checked the name rather than the contents. And a file can be dangerous while carrying a harmless looking name, because the name is a claim rather than a fact about the contents.

S2: Which makes hiding extensions sound expensive.

S1: It costs you something real. The name isn't evidence about what's inside a file. It's evidence about what the machine is going to do with it, which is a different thing and a more urgent one, and hiding it takes the system's own reasoning off the screen. Windows hides extensions for known file types, and what it hides is the last one. So an attachment called statement dot p d f dot e x e displays as statement dot p d f. The reader sees a document. The system sees a program, and runs it.

S2: And turning that setting off is the whole defence. Take me back to plain text, then. What does it actually mean?

S1: A file whose content is characters and nothing else. No font, no size, no bold, no page layout. Open it in any editor on any system and you get exactly the characters somebody typed. That's what a shell needs, what a program's source code has to be, what a configuration file is, and what a great many websites mean when they say plain text only.

S2: And three programs give three different answers.

S1: TextEdit on macOS opens in rich text by default. It saves a rich text file, which is a text based format carrying formatting instructions, and that isn't what plain text means. The fix is one menu item, Format then Make Plain Text, and there's a setting to make that the default.

S2: Word?

S1: Word doesn't produce a text file at all. A Word document is a compressed archive with a set of X M L documents inside it, so a program looking for characters finds a zip header. Word can produce plain text, through Save As and choosing the plain text format, and it warns you formatting will be lost, which is the correct warning and is the whole point.

S2: And the one people don't reach for.

S1: Notepad on Windows. It does produce plain text. It's the right tool and it isn't the one people reach for, which is the failure we opened with.

S2: Give me the sentence to carry.

S1: The format is decided by the program, and the extension is decided by you. They agree only when you make them agree.

S2: The other half of the lesson is about files going missing.

S1: Five reasons, and three of them you can already state. One, it was moved or renamed, which changes the address and changes nothing about the file. Two, it was saved by a program into storage of its own choosing. Three, it's in a synced directory that isn't currently synced. Four, it went to a default location you never chose. Five, it was never given a location at all, and exists only inside a program's unsaved state.

S2: So where does search leave me?

S1: Less far along than people think. A failed search rules out nothing on its own, because indexing is partial. It covers part of the tree, it reads the content of some file types and not others, and it can't see a file that isn't on this machine today. It is real evidence about two of the five, one and four, so a genuine failure there pushes you towards three and five. And it says almost nothing about cause two, because that depends entirely on whether the program keeps ordinary files or one big database.

S2: So a failed search moves the odds and settles nothing.

S1: And the next thing to do isn't another search. It's to ask which of the five you're in.

S2: The full lesson has what we've skipped. How to turn extensions and hidden files on, on each system, why the operating system never checks a name against what's actually inside a file while individual programs vary, the case of the designer whose photo library you must copy out of rather than move, the misconceptions this all comes from, and exercises that have you make plain text three ways and diagnose a file you actually lost. It's free at Foval Learning Institute dot org.

S1: Thanks for listening. Go and turn your extensions on.
