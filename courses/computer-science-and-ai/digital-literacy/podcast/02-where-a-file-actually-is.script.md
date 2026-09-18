---
source: courses/computer-science-and-ai/digital-literacy/lessons/02-where-a-file-actually-is.md
written_by: Claude, by hand, from the lesson text
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Takes three of the
  lesson's sections properly: the three rules of the tree, why a name only has to be unique
  among its siblings, and absolute against relative addresses ending on the rename case.
  Leaves out the home directory on each system, the Windows callout, the emailed-path section,
  the shortcut and case-sensitivity wrinkles, the five misconceptions and both practice
  exercises, and says so in the sign-off.
checked: >-
  Fact-checked in a fresh-context subagent against the lesson on 2026-09-18: verdict PASS WITH
  NITS, and every nit was fixed in this file before rendering. All three spoken addresses were
  verified against the lesson's diagram, as were the meanings of `..` and `.`, the cross-references
  to lessons 4 and 6, and the counts (three rules, four hundred files, two kinds of path). Fixed:
  a hedge loosened by splitting the lesson's one "almost every" sentence into two, so three items
  arrived as universals; "everything hangs below it" where the lesson says "everything in that
  tree", which matters because Windows has a root per drive; a question of Haley's that asked
  about search when the answer only covers uniqueness; and a sign-off that miscounted the
  misconceptions, characterised one of the two exercises as though it were both, and read as a
  complete enumeration while leaving out the shortcut exception. Every figure and claim appears in
  the lesson and nothing has been added that the lesson does not say. The course has no standpoint
  to preserve: course.yaml carries no `standpoint` and `sensitive_domain: false`.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Where a file actually is.

S2: Start me somewhere I can check for myself.

S1: Type a common word into the search box on your computer. Something like notes, or budget. If you've owned the machine more than a year, there's a good chance two of the results have exactly the same name. They're different files, they hold different things, and there's nothing in the name that tells them apart.

S2: So what does tell them apart?

S1: Where each one sits. Many file browsers show you that, in smaller grey text under the name, or along the bottom of the window. That grey line is the file's address, and this lesson is about learning to read and write it.

S2: That sounds like a lesson about tidiness, and I'd rather it wasn't.

S1: It isn't, and that's worth saying at the front. Almost every story that begins "the computer lost my file", every broken link in a document, every backup that quietly stopped covering the folder that mattered, and every program that says it cannot find something you can see with your own eyes, is an address problem. Once you can write an address down, those stop being mysteries and start being things you can check.

S2: All right. What's the structure I'm writing an address into?

S1: Three rules, and the whole thing follows from them. And I'll say directory rather than folder, because they mean the same thing and directory is what every command and error message from lesson four onwards will call it. A directory contains things, and what it contains is files and other directories. A file contains data and contains no other files. And every tree has exactly one directory that isn't inside anything else. That one's called the root, and everything in that tree hangs below it.

S2: And the root. One per machine?

S1: On macOS and Linux, one tree for the whole machine. On Windows, one per drive. That's the first difference worth naming and the only one this lesson turns on.

S2: Give me the file against directory distinction in a way I could repeat to somebody else. A folder holds things doesn't feel like enough.

S1: It isn't, and here's the sharper version. A directory's content is a list of names. A file's content is the thing itself. When you open a directory you're reading its list. When you open a file you're reading what somebody put in it. That's why a directory can be nearly empty and still exist.

S2: Now the question I'd actually ask. Why a tree at all? Why not one big pile?

S1: This is the part that makes the rest follow, so it's worth doing properly. A name is only useful if it picks out one thing. If every file on your machine lived in one enormous list, every name would have to be unique across the whole machine. You could never have two files called notes dot t x t. Neither could any program. Two applications that both wanted a file called config would have to negotiate with each other, and with every application written since.

S2: Which is impossible.

S1: So systems buy uniqueness a different way. A name only has to be unique among its siblings. Two files called notes dot t x t are different files because they sit in different directories, and the thing that has to be unique is the full address. Position plus name. Which is why folders exist at all, and it isn't tidiness. And it's why the name on its own isn't an address, so any time you tell somebody a file's name and nothing else, you haven't told them where it is.

S2: So how do I write a real one?

S1: Two kinds, and you need both. An absolute path starts at the root and names every directory down to the file. It means the same thing typed anywhere on that machine. A relative path starts from wherever you happen to be standing. It's shorter, and it means nothing at all unless you know the standing point.

S2: Work one through.

S1: The lesson uses a small tree belonging to somebody called Tomas, and the file is landlord dot m d. Its absolute address is slash Users slash tomas slash Documents slash letters slash landlord dot m d. Read left to right, that's a set of instructions. Start at the top of the machine, go into Users, into tomas, into Documents, into letters, and there's the file. Every step is named, so nothing is assumed.

S2: And relative?

S1: Depends where you're standing. Stand at tomas, and it's Documents slash letters slash landlord dot m d. No leading slash, and that's the visible difference between the two kinds. Now go down and stand in invoices, which sits alongside letters inside Documents. From there it's dot dot slash letters slash landlord dot m d.

S2: Dot dot being what, exactly?

S1: A name that means the directory one level up. Standing in invoices, dot dot is Documents, so that address reads: go up one, into letters, then the file. You'll also meet a single dot, which means the directory you're standing in right now. It looks redundant and it isn't, and lesson six is where it earns its place.

S2: You said there's a case that teaches more than any other.

S1: Tomas renames Documents to Docs. He does it in the file browser, one click, a few keystrokes, and he doesn't open anything inside it. Four hundred files are in there and not one of them is touched.

S2: So nothing happened.

S1: Nothing happened to the file. It wasn't read, it wasn't copied, it wasn't moved, and its content is identical to the byte. And yet slash Users slash tomas slash Documents slash letters slash landlord dot m d now names nothing. So does every other absolute path that ran through that name. All four hundred of them.

S2: That's the bit that would frighten me. What happens to a backup?

S1: The backup script that was told to copy slash Users slash tomas slash Documents will run tonight, find nothing there, and may well report success. Because it copied everything it was asked to copy, and it was asked to copy nothing.

S2: And the relative address, from invoices. Does that one survive?

S1: It does, and this is the case where relative wins. The address says go up one, then into letters, and the directory one level up is still one level up whatever it's now called. The rename changed a label, and the relative path never used that label.

S2: So which kind should I be using?

S1: Neither is the safe one, and that's the actual lesson. Absolute paths survive you moving around, and break when anything above the file is renamed or moved. Relative paths survive renames above the standing point, and break when you're standing somewhere else. Knowing which failure you're exposed to is the real skill.

S2: The full lesson has what we've left out. How to find your home directory on each of the three systems, what's different on Windows, the question of which of those addresses still finds the file if you email it to somebody, the shortcut or alias that gives one file a second address, five misconceptions including the desktop and the cloud folder, and two exercises, one that walks your own tree and writes three addresses by hand, and one that hunts down a file whose position you never chose. It's free at Foval Learning Institute dot org.

S1: Thanks for listening. Go and find out where something actually is.
