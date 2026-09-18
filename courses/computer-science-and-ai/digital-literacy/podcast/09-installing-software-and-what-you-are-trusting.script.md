---
source: courses/computer-science-and-ai/digital-literacy/lessons/09-installing-software-and-what-you-are-trusting.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Every figure and claim below appears in the lesson and traces to the lesson's own numbered
  sources. Nothing has been added that the lesson does not say. The course is in a neutral school
  with no standpoint to preserve. Fact-checked in a fresh-context subagent against the lesson on
  2026-09-18: verdict FAIL, and both findings fixed before any render. The script ranked the two
  attacks as more and less dangerous when the lesson makes no such comparison and is explicitly
  cautious about the advertisement claim. And the sandbox exception had been narrowed to phones,
  dropping the lesson's "and a common one for store software on a desktop", which changes the
  claim about desktops. Three nits also fixed, including a dropped concession that ad networks do
  run some checks, and the expert-practices list which was missing the lesson's self-report hedge.
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Ninth episode for
  Digital Literacy. Covers the four parties in the chain, what a signature does and does not
  claim, and the two attacks on names. Leaves out the three-route table and the antivirus
  disagreement, and says so in the sign-off.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called Installing software, and what you are trusting.

S1: And it opens by pointing out that almost everything you've done in this course so far could be undone. You moved files, you typed commands, you read what came back. Get it wrong, put it back.

S2: Almost everything.

S1: Lesson six was the exception. A single greater than sign truncates a file before it writes, no warning and no undo. That took back one file. This lesson is about the act that can take back the whole machine.

S2: Installing something.

S1: Installing something.

S2: So what does installing actually do that's so different?

S1: Start with the thing nobody says out loud. When you run a program, it can do whatever you can do. It can read every file you can read. It can change every file you can change. And it can send anything on that machine anywhere on the internet, and none of the parties on the path from lesson seven will find that unusual, because a program sending data is the ordinary case.

S2: And that's not a bug.

S1: It's how a computer works. It's why a word processor can open your documents without asking permission for each one. But notice what it means. The decision about whether a program should have all of that is made once, when you install it, on whatever you knew at the time. And there's no undo.

S2: You said there's an exception.

S1: There is, and it's the reason app stores exist. Software from a store usually runs inside a boundary the system enforces, a sandbox, so it can only reach what you hand it. That's the ordinary case on a phone, and a common one for store software on a desktop. Everywhere else, and for everything else in this lesson, assume the plain case. A program you run has your access.

S2: Right. So who am I actually trusting when I install something?

S1: Four parties, and they're genuinely separate people who fail in genuinely different ways. One, whoever wrote the code. Two, whoever built it into the thing you downloaded, because source code and a running program are different objects and somebody turned the first into the second.

S2: Those aren't always the same people.

S1: Often not. Three, whoever hosts it, because the file sits on a server somebody runs. And four, whoever told you where to find it.

S2: That last one isn't on anybody's list.

S1: It's almost never on anybody's list, and it's the one no route can check for you. You didn't know the address. Something told you. A search result, a link in a forum, a colleague, an advertisement.

S2: Now, signatures. A lot of software is signed. What does that prove?

S1: One sentence. This build came from the holder of that key. Read it again and notice everything it doesn't say. It doesn't say the program is safe. It doesn't say the key's holder is honest, or that they're who their name suggests.

S2: That's the padlock again.

S1: It's exactly the padlock again. A padlock proves control of a domain. A signature proves control of a key. In both cases the attacker who wants one can have one.

S2: So what's the right next question?

S1: Whose key is it. If the signature says the name of the project you meant, that's real evidence. If it says a company you've never heard of, the signature has told you the truth and the truth isn't reassuring.

S2: You said there were two current attacks.

S1: Both on names, rather than on code. The first is the advertisement above the search result. You search for a program and the first thing on the page is paid. That placement was bought, and whatever checks the ad network ran before selling it, and they do run some, none of them was the one you needed, which is did this advertiser write this software.

S2: And most of the time it's fine.

S1: Most of the time the advertiser is the real project. When it isn't, you arrive at a site that looks right, download something that installs cleanly, and get a working program, because a program that didn't work would be reported within the hour.

S2: What's the defence?

S1: Read the address before you download, not after. And if you don't know the project's actual domain, that's the thing to find out first, and a search result is not where to find it.

S2: And the second attack?

S1: Somebody registers a name one keystroke from the popular one. The standard illustration is p y g a q m e where you meant p y g a m e.

S2: They're hoping people mistype.

S1: They're counting on it. And here's the part that makes it bite. The dangerous version installs and works. It often carries the real package along with whatever else it brings, so everything you expected to happen happens. Nothing fails. Nothing warns you.

S2: This idea keeps coming round in this course.

S1: Third time. Lesson three said a name is not the thing it names. Lesson eight said a domain is a name somebody registered. This lesson says the same of a package name. In all three, the attack is to register a name that reads like a different one.

S2: What about the administrator password?

S1: Running a program gives it your access. An administrator password gives it power over the system itself. And the prompt names a program and does not tell you what will be done with that power, because the operating system doesn't know either.

S2: So you can't check it.

S1: You can't check the last thing, and that's the honest part. There's no procedure. Which is why what helps isn't more vigilance at the prompt. It's having fewer holes for the things you couldn't check to get through.

S2: Meaning what, in practice?

S1: Updates, mostly. When two hundred and thirty one security experts were asked in twenty fifteen what they do, installing updates was the most reported practice. And the lesson is careful about that: it's what they say they do, not a measurement of what works. We've also skipped the table comparing the three ways of installing something, and the genuinely contested question about antivirus, which gets both sides at full strength.

S2: Read the whole thing at Foval Learning Institute dot org. We'll see you next time.
