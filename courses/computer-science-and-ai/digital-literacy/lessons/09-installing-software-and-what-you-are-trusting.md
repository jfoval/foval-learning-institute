---
title: Installing software, and what you are trusting
minutes: 155
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/digital-literacy/09-installing-software-and-what-you-are-trusting.mp3
objectives:
  - Name the four separate parties you trust when you install a program, and say how each one fails differently from the others
  - Compare an app store, an operating system's package manager, and a download from a website by what each one actually checks
  - Say what an administrator password grants, and decide before the prompt appears rather than at it
  - Explain why a search result and a package name are the two things no route can check for you, and check both yourself before installing anything
quiz:
  - q: A reader wants a photo editor, searches for it, and clicks the first result, which is a paid advertisement. Which link in her chain was decided by something that has nothing to do with the software, and at what point?
    options:
      - Whoever hosts it, decided at the moment the file began to download
      - Whoever built it, decided by whichever advertiser the network verified
      - Whoever wrote it, decided before she had typed anything into the search box
      - Whoever told her where to go, decided before a single byte had moved
    answer: 3
    explain: The fourth party in the chain is whoever pointed you at the address, and here that was replaced by whoever bought the space above the result, which is D and had happened before she clicked. A names a party that follows from the address rather than deciding it. B credits the ad network with a check on the build, which is not a check anybody ran. C is the one party an advertisement cannot touch, since the code was written long before.
  - q: Two people install the same program. One uses their system's package manager, one downloads an installer from the project's website. What is actually different about what has been checked?
    options:
      - The manager checked who built it, and the download nothing unless she did
      - The package manager checked that the program is safe, and the website did not
      - Both routes checked the same things, since the file that arrives is the same
      - Neither checked anything, because only a person can really check software
    answer: 0
    explain: A package manager verifies that what it fetched is the build its own signing key vouches for, which is a claim about origin, and a browser download makes no claim at all unless the reader goes and checks one, which is A. B promises safety, and no signature anywhere has ever promised that. C ignores that the same program arriving by two routes arrives with two different amounts of evidence, and on a Linux distribution is not even the same build. D dismisses a check the machine really does perform.
  - q: An installer asks for an administrator password. The program is a well-known one and came from its official site. What does typing the password actually grant, and what has the prompt told you?
    options:
      - Permission for that one installation step, and the prompt has named it exactly
      - Power to change the system itself, and the prompt has told you almost nothing
      - Permission to read your files, which the program could already do without asking
      - Nothing extra on a modern system, where that prompt is largely a formality now
    answer: 1
    explain: The password grants power over the machine itself rather than over one step, and the prompt names a program and not what it will do with that power, which is B and is why the decision has to be made before the prompt rather than at it. A credits the prompt with a precision it does not have. C describes what running any program already grants, which is the section above it and not what the password adds. D is wrong, and it is the belief that turns the prompt into a formality in practice.
  - q: Somebody argues that antivirus is unnecessary because he is careful about what he clicks and never downloads anything odd. Which folk model is that, and what is the flaw in it?
    options:
      - The mischief model, and the flaw is expecting an infection to be noticeable
      - The big fish model, and the flaw is assuming attackers pick targets by value
      - The graffiti model, and the flaw is deciding no defence is worth bothering with
      - The buggy software model, and the flaw is that not everything is clicked on
    answer: 3
    explain: He holds that a virus is something you have to fetch and run yourself, which is the buggy-software model that 9 of the 33 people in Wash's 2010 study held, and its flaw is that it is half right, since care prevents a great deal and does not cover a compromised update or a hostile file a trusted program opens, which is D. A is about whether you would notice. B is about whether you are worth attacking. C ends in fatalism, and this man is the opposite of fatalistic.
  - q: A program you have used for two years is bought by another company, and the next update carries something hostile. Which of the four parties failed, and which of your checks would have caught it?
    options:
      - The host, and checking the address you downloaded from would have caught it
      - Whoever told you, and finding the project's real domain would have caught it
      - Whoever built it, and none of this lesson's four checks would have caught it
      - Whoever wrote it, and reading the reviews before installing would have caught it
    answer: 2
    explain: The people building the thing changed, the signature still checks out because the new owners hold the key, and nothing about the address or the route is different, so it is C and the honest half of the answer is that no check here catches it. A and B name parties that behaved exactly as before. D is closer, since the authorship did change hands, and reviews describe how a program behaved in the past rather than what its next update will carry. This is why the lesson ends on updates and structural defences instead of on better checking.
  - q: A reader installs a package whose name is one keystroke from the one she meant. Why can no package manager protect her from this?
    options:
      - Because the near-miss was registered on purpose, and both names are valid ones
      - Because the index deliberately declines to check names, leaving it to its users
      - Because the near-miss was registered on purpose, and indexes cannot remove names
      - Because a name that close will always fail on install, so nothing warns her first
    answer: 0
    explain: Somebody registered the near-miss deliberately, and the index has two validly registered names in front of it with no way to know which one she meant, so there is no check to make, which is A. C names the same intent and then blames a removal power indexes do have and use. B invents a policy of refusing to check. D says the opposite of the truth, because the dangerous version installs and works.
---

Almost everything you've done in this course so far could be undone. You moved files, you typed commands, you read what came back, and if you got it wrong you could put it back.

Lesson 6 was the one exception, and it's worth remembering what it cost: a single `>` truncates a file before it writes, with no warning and no undo. That took back one file.

This lesson is about the act that can take back the whole machine. You have already performed it once, in lesson 4, when you installed a shell, and that lesson said at the time that the question of what you were trusting would come back.

:::exercise Write down what you think you are trusting
Take 5 minutes. Before anything else.

Pick one program you installed yourself, on purpose, in the last year or so. Not one that came with the machine.

1. Write its name down.

2. Now write down, in a list, everybody you had to trust in order to install it. Not "the company". Actual separate parties, and what each one could have done to you if they had wanted to.

3. Count your list.

Keep the page. The lesson has four on its list, and the interesting part is which ones you had and which you did not.
:::

## What installing actually does

Start with the thing nobody says out loud.

**When you run a program, it can do whatever you can do.** It can read every file you can read. It can change every file you can change. It can send anything on that machine to anywhere on the internet, using the connection you drew in lesson 7, and none of the parties on that path will find anything unusual about it, because a program sending data is the ordinary case.

That is not a flaw. It's how a computer works, and it's why a word processor can open your documents without asking permission for each one.

**There is one exception, and it's the reason app stores exist at all.** Software from a store usually runs inside a boundary the system enforces, a **sandbox**, so it can only reach what you hand it rather than everything you can reach. That is the ordinary case on a phone and a common one for store software on a desktop. Everywhere else, and for everything else in this lesson, assume the plain case: a program you run has your access.

But notice what it means. The decision about whether a program should have all of that is made **once**, at the moment you install it, by you, on the basis of whatever you knew at the time. Nothing about clicking a button called "Install" communicates any of this, and there is no undo. Once it has run, it has had your access.

And there is a second level above that one, which the next section is about.

:::predict Before reading on: you install a program and it turns out to be hostile. Of the seven parties in lesson 7's figure, how many would have noticed?
None of them.

Your router, your provider, the networks in between, the delivery network: all of them see a program on your machine opening a connection and sending data to a server. That is what every program on your machine does all day. There is nothing to notice.

Whoever answers your name lookups, the seventh party, sees the name of whatever server the program is talking to, and that is genuinely something. It's also a name in isolation, with nothing to say it came from a program you didn't want rather than one you did.

The site it connects to knows, obviously, because it's the one collecting. And your device knows in the sense that the bytes are on it, which is no use to you.

This is worth sitting with for a moment, because lessons 7 and 8 have just spent two lessons on the path, and **none of it is a defence here**. Encryption does not help: the program's connection is encrypted like everybody else's, and that encryption is now protecting the attacker from anyone who might have looked. The path defends what is *in transit*. This is a problem about what you *invited in*.
:::

## The four parties, and how each one fails

This is the part your list at the top was probably missing. Installing something is not trusting one party. It is trusting four, and they are genuinely separate people who fail in genuinely different ways.

**One. Whoever wrote the code.** They chose what it does. They may have written something hostile on purpose, which is rare, or something careless, which is not rare at all.

**Two. Whoever built it into the thing you downloaded.** Source code and a running program are different objects, and somebody turned the first into the second. That is often the same people who wrote it and sometimes not. A build machine that has been interfered with produces a program that does not match the code anybody reviewed.

**Three. Whoever hosts it.** The file sits on a server. Somebody runs that server, and if they are careless or compromised, the file you fetch is not the file that was put there.

**Four. Whoever told you where to find it.** This one is almost never on anybody's list, and it's the one no route can check for you. You didn't know the address. Something told you: a search result, a link in a forum, a colleague, an advertisement.

Four parties, four different failures. Set them against your three routes to installing something.

## Three routes, and what each one checks

| | App store | Package manager | Download from a website |
|---|---|---|---|
| **Who wrote it** | reviewed against a policy, not audited | not checked | not checked |
| **Who built it** | the store signs, and often re-signs, what the developer submitted | the repository signs it, and on a Linux distribution also built it; on a language index nobody checked the build | not checked, unless you check |
| **Who hosts it** | the store is the host | the repository is the host | whoever runs the server |
| **Who told you** | the store's own ranking | the name you typed | whatever you clicked |
| **Can it run wild** | usually sandboxed | no | no |

Two named examples of each, so the words are not abstract. **App store:** Apple's App Store, Google Play. **Package manager:** `apt` on a Debian or Ubuntu system, which installs from a distribution's own repository; `pip`, which installs from a language index rather than a distribution. **Download from a website:** anything you fetch with a browser and open yourself.

The second row is the one to read twice, because it is not one claim. On a Linux distribution a maintainer builds the software from source and the archive's key signs the result, so something really did check the build. **On a language index like the one `pip` uses, nobody did.** Whoever holds the account uploads whatever they like, and the index serves it. That distinction matters in three sections' time, because the lesson's own example of the second attack lives on exactly that kind of index.

:::predict One row of that table is weak in all three columns. Which row, and why should it worry you more than the gaps in the others?
The last one. Who told you.

Look along it. In the app store it is the store's own search, ranked by something the store decided. In the package manager it is a name you typed from memory. In a browser it is whatever you clicked to get there. **Not one of the three routes can check whether the thing you were pointed at is the thing you meant**, because none of them knows what you meant.

Why that matters more than the gaps above it: the other rows fail in ways somebody can in principle check. You can look at a signature. You can find out who is hosting. This row fails silently and upstream of all of that, and then every check below it runs correctly on the wrong software and passes.

Which is why both of the attacks in the next section are attacks on **names** rather than on code. Break the last row and the other three rows work for the attacker.
:::

The last column is the other one worth a look. **A download from a website checks nothing at all unless you check it yourself**, and what you have to check is the address bar, which is lesson 8's reading habit doing its second job.

## Signatures, and the thing they do not say

Two words first, because this course has used neither.

A **key** here is a long secret number that only its holder has. A **signature** is a small block attached to a file that the holder's key produces, which anybody can check with a matching public half and nobody else could have made.

So a signed program comes with a cryptographic claim, and it's worth being exact about the wording, because the wording is the whole thing.

**This build came from the holder of that key.**

That is the whole of it. Read it again and notice everything it does not say. It does not say the program is safe. It does not say the key's holder is honest, or that they are who their name suggests, or that the program does what it claims. It says the same kind of thing the padlock in lesson 8 said: something about origin, nothing about worth.

The parallel is exact, and so is the failure. A padlock proves control of a domain. A signature proves control of a key. In both cases the attacker who wants one can have one, because both are available to anybody who asks properly.

:::checkpoint Somebody says: "It's fine, the installer was signed, my computer said so." What has actually been established, and what is the question they should ask next?
Established: the file arrived as whoever holds that key built it. Nobody altered it in transit, and the server that handed it over did not swap it.

That covers party three, the host, and part of party two. It is genuinely useful and it is genuinely not nothing.

**The question they should ask next is whose key it is.** A signature is a name, and names can be anything. If the signature says the name of the project they meant, that is real evidence. If it says a company they have never heard of, the signature has told them the truth and the truth is not reassuring.

And parties one and four are untouched either way. A signature says nothing about whether the code is hostile, and nothing at all about how they came to be on that download page.

Notice also what "my computer said so" usually means in practice, which is that no warning appeared. An absence of a warning tells you what lesson 8 said it tells you: something narrow, about the file rather than about who made it. It's the useful half of a signal and it isn't the half you were hoping for.
:::

## The two attacks, and both are on names

### The advertisement above the result

You search for a program. The first thing on the page is a paid advertisement. It carries the program's name, its logo, and a link that looks correct.

That placement was bought. Whatever checks the ad network ran before selling it, and they do run some, none of them was the check you needed, which is "did this advertiser write this software".

So the fourth party in your chain, the one that told you where to go, was replaced by whoever bought the space above the result you wanted. Most of the time that's harmless, because the advertiser is the real project. When it isn't, you arrive at a site that looks right, download something that installs cleanly, and get a working program, because a program that didn't work would be reported within the hour.

**This course hasn't researched search-ad malvertising as a topic**, so take the mechanism above and not any claim about how often it happens. The defence below doesn't depend on the frequency.

The defence costs nothing and it is the habit from lesson 8: **read the address before you download, not after.** Find the first single slash, read leftwards past the ending, and check that what you get is the project's actual domain. If you do not know the project's actual domain, that is the thing to find out first, and a search result is not where to find it.

:::exercise Install one thing, naming all four parties as you go
Take 15 minutes. Pick something you actually want. If nothing comes to mind, a free text editor is a reasonable choice and every operating system has several.

Do it in this order, out loud if nobody is listening, and stop at any step you can't answer.

1. **Find the project's real domain before you search for it.** Not from search results. From somewhere you already trust: documentation you were already reading, a reference in a book, a colleague who has it installed. Write the domain down.

2. **Now search for it.** Look at what sits above the first ordinary result. If there's an advertisement, read its address and compare it with what you wrote down.

3. **Go to the address you wrote down**, by typing it rather than clicking anything. Then read it in the bar using lesson 8's habit: find the first single slash, read leftwards past the ending, one word further. Does it match step 1?

4. **Name the four parties out loud before you download.** Who wrote it. Who built it. Who is hosting this particular file. Who told you to come here, which is now you, from step 1, and that is the entire point of doing it in this order.

5. **Install it**, and if you're offered a choice of route, take the one with more filled-in cells in the table above.

6. Write one sentence: which of the four you still can't say anything about. There will be at least one, and for most software it's party two.
:::

### The name one keystroke away

The second attack works on the other kind of name.

When you install from a package manager, you type a name. Somebody has registered a name one keystroke away from the popular one: `pygaqme` where you meant `pygame` is the standard illustration.[1] They didn't register that hopefully. They registered it because some share of people will mistype the real one, and they don't need to know the share.

And notice where this attack lives. It's a language index, the cell in the table where **nobody checked the build**, and both names are validly registered, so there is no check a name-based system could make that would tell them apart.

The dangerous version of it **installs and works**, often by carrying the real package along with whatever else it brings, so everything you expected to happen happens. Nothing fails. Nothing warns you.

This is the third time in this course that the same idea has come round, and it is worth naming. Lesson 3 taught that a name is not the thing it names, which is why `statement.pdf.exe` is a program. Lesson 8 taught that a domain is a name somebody registered, which is why a padlock proves nothing about a bank. This lesson says the same of a package name. **A name is a claim made by whoever registered it first, and in all three cases the attack is to register a name that reads like a different one.**

:::callout A note on a number this lesson does not print
There is a widely quoted count of malicious packages found in a recent year, and the research behind this course found it at search-summary level without opening the report it came from.

So it is not here. The count is not what makes the attack real, and a figure this course cannot stand behind would be worse than no figure. The technique is the teaching, and the technique is documented well enough without one.

This is worth flagging rather than hiding, because "a very large number of malicious packages were found last year" is exactly the kind of sentence that circulates without anybody checking, and this course would rather be the one that does not pass it on.
:::

## What an administrator password grants

Now the second level.

Some installations ask for your password. Most people read the prompt as "this is the normal way to install things" and type it, which is not unreasonable, because it *is* the normal way to install things.

Be exact about what it grants. Running a program gives it your access, which is what the first section was about. **An administrator password gives it power over the system itself**: the ability to change what happens before you log in, to change what every other user of the machine sees, and to install things that keep running whether you are there or not.

And now read the prompt again. It names a program. Sometimes it names a company. **It does not tell you what will be done with the power it is asking for**, because the operating system does not know either. It is asking whether you agree, and you have to answer from what you already knew.

So the decision is made before the prompt appears or it is not made at all. Three things you can check beforehand:

**What is this program?** Not the name on the prompt, the thing itself. Do you know what it is for?

**Where did it come from?** Which of the three routes, and if it was a download, did you read the address?

**Does it plausibly need this?** A program that manages disks or drivers or system settings has a reason to ask. A photo editor asking to change the system is a question, not necessarily an answer, but a question.

**And in a terminal, the same thing has a name.** You'll meet `sudo` the moment you follow any set of instructions on the internet, and it's this, exactly this: run the next thing with power over the system. The rule doesn't change because the prompt has become a word. Nobody should type it because a web page told them to, and the decision is the one above, made before the word appears.

And then the honest part, which the rest of this lesson has been building towards: **you cannot check the fourth thing.** You cannot verify what the program will do with the access once it has it. There is no procedure. Nobody has one.

That is not a counsel of despair, and it is the reason the next section exists.

:::checkpoint Since you cannot verify what a program will do, what actually reduces your risk? Think about it before reading, because the obvious answer is the wrong one.
The obvious answer is "be more careful at the prompt", and it is wrong, because there is nothing further to read there. More vigilance applied to a screen that contains no information yields nothing.

What actually helps is **having fewer holes for the things you could not check to get through.** That is a structural defence rather than a vigilant one: it works while you are not paying attention, which is when you need it.

Concretely: keep things updated, which is what the next section is about, plus two you have already met, which are install less and prefer the routes with more filled-in cells. None of the three is a moment of judgement. All of them are decisions made once.
:::

## What the people who do this for a living actually do

You met these two lists on the first page of lesson 1, so this is a recall and not a reveal. In 2015, Ion, Reeder and Consolvo asked 231 security experts and 294 non-experts what they did to stay safe online.[2] The experts' three most-reported practices were installing software updates, using two-factor authentication and using a password manager. The non-experts' were antivirus software, visiting only known websites, and changing passwords frequently. **Nothing appeared on both lists.**

Two things about it are new here, and they are why it comes back.

**The first is a limitation worth having before you lean on it.** Both columns are what people *said they do*. They are self-reports of habit, not measurements of what works, and a study of habits cannot tell you which habits are effective. So the thing to carry is the divergence itself, that two populations asked one question shared not one answer, and I'm using the ranking for that and nothing finer. The per-practice percentages are in the paper, the research behind this course read only the abstract, so they are not here.[2]

**The second is why the list belongs in this lesson**, rather than in lesson 10 with the other two items on it. **Installing updates is the top expert answer, and it is the structural answer to the problem the last section couldn't solve.** You can't verify what a program will do. You can make sure the holes a bad one would use are already closed. That works while you aren't paying attention, which is the only kind of defence that works at three in the afternoon on a busy day.

## What people get wrong

**"If it is in the app store it is safe."** A store checks against a policy and hosts the file itself, which is real and is better than nothing. It does not audit what the code does. Look back at the table: the store's strongest column is the one about hosting, and the weakest is the same one as everywhere else.

**"The first search result is the official site."** The first result is often a paid advertisement, and the auction that decided it asked who would pay rather than who wrote the software.

**"A signed installer is a safe installer."** A signature says this build came from the holder of that key. It is a claim about origin, in the same family as the padlock in lesson 8, and origin is not safety.

**"I will run it and see."** There is no seeing. A hostile program that announced itself would be a failed one, and the whole design is that it works exactly as expected while doing something else.

**"I am careful about what I click, so I do not need antivirus."** This is the *buggy software* model from Wash's 2010 study, held by 9 of his 33 respondents: a virus is something you have to download and run, so if you are careful about what you click, you are covered.[3] It is half right, which is exactly what makes it dangerous. Care does prevent a great deal. What it does not cover is a program you deliberately and correctly installed whose update was later compromised, or a hostile file opened by a program you trust. Neither of those involves clicking anything careless.

**"Updates are how they force new features on you."** This one is a real complaint and deserves a straight answer rather than a lecture. Sometimes it is true: an update arrives, the interface has been rearranged, and nobody asked. That is a genuine annoyance and pretending otherwise is why security advice gets ignored.

The answer is that most updates are not that. A security update closes a specific hole that somebody outside the company found and reported, and it is the top item on the expert list above for a reason. Where your system lets you separate security updates from feature updates, take the first automatically and the second when you feel like it. Where it does not, the trade is real and you are making it knowingly, which is better than making it by accident.

## The contested one: do you need antivirus?

This is a genuine disagreement among people who know what they are talking about, so both sides are below at full strength, rather than a verdict dressed up as one.

**For.** Two independent testing laboratories, **AV-TEST** and **AV-Comparatives**, test these products in controlled conditions, and in those tests both the paid products and the protection built into a current operating system, **Microsoft Defender** on Windows, catch very nearly everything.[4] Layered detection genuinely catches things that care doesn't, which is precisely the flaw in the buggy-software model above: a compromised update, and a hostile file opened by a program you trust, are both things a scanner can see and carefulness cannot. The floor is high, and on a current system it's free and already switched on.

**Against**, and this is the position consumer coverage almost never states. Google's Project Zero team, and **Tavis Ormandy** in particular, has argued that antivirus products themselves present a large and easily reached attack surface.[4] The mechanism is worth having in plain words. To look inside a file, the product has to take the file apart, and taking hostile files apart is where security bugs live. That code runs with full power over the machine, and without the walls a browser is given for the same job. So the argument isn't that antivirus fails to detect malware. It's that a program with full power that pulls apart every untrusted file you receive is close to the last thing you'd choose to add.

**The read level, on both sides, because it's the same one.** The research behind this course read all of this at summary level: no AV-TEST or AV-Comparatives report was opened, and Ormandy's own writing was read only as quoted by others.[4] So what you get here is the shape of the disagreement, which is stable, and no laboratory score, which would be out of date next quarter anyway.

**Where that leaves a home user.** Leave the protection built into your operating system switched on. It's doing real work, it costs nothing, and the For side above is the reason. What's much less clear is the value of adding a third product on top of it, and the interesting reason for hesitating is a **security** argument rather than a money-saving one, which is the opposite of how the question is usually put.

And whatever you decide: **never turn a security feature off to get something to install.** Not macOS's Gatekeeper, not Windows SmartScreen, not your antivirus. If a program can't be installed without switching off the thing that's there to check it, the thing to change is your mind about the program.

:::callout Where the update settings are, and what changes on a phone
**macOS:** System Settings, then General, then Software Update, then the small "i" beside Automatic Updates. Security responses are a separate switch there from feature updates.

**Windows:** Settings, then Windows Update. On Windows Home the security and feature updates can't be fully separated, which is a real limitation and the honest answer to step 3 of the exercise below.

**A Linux desktop:** your distribution's own updater, and on a Debian or Ubuntu system unattended upgrades are usually something you switch on deliberately rather than a default.

**On a phone this lesson's picture changes in three ways**, and all three are why a phone is safer for this one particular thing. Almost every app is sandboxed by default, so the exception from the first section becomes the rule. There is normally one route rather than three. And the fourth party, whoever told you where to find it, moves from a search engine to the store's own ranking, which is a different party with different incentives and is not the same as nobody.
:::

## Practice

:::exercise Trace one program's chain, all four parties
Take 20 minutes. Use the program you named in the first exercise.

1. Write the four parties as four headings: who wrote it, who built it, who hosts it, who told you.

2. Fill in what you actually know under each. Write "I don't know" where that is the answer, because it usually is for at least two of them and that is the finding.

3. For each one, write down how you would check it if you wanted to. Some have an answer (the project's real domain, the signature's name) and some do not.

4. Now compare this with the list you made before you started reading. Which parties were missing? For most people it is the second and the fourth.

5. Finally, say which of the three routes you used, and look at that column of the table. What did that route check for you, and what did it leave to you?
:::

:::exercise Turn on updates, and say what you gave up
Take 15 minutes. This one changes your machine, so read it through first.

1. Find the update settings on your operating system and write down what they are set to now, before you change anything.

2. Turn on automatic security updates if they are off. If your system separates security updates from feature updates, take the security ones automatically.

3. Now write down, honestly, what you have given up. Something will restart at an inconvenient moment. Something you use may change without being asked. That is a real cost and this exercise is not going to pretend it isn't.

4. Then write one sentence on why you think the trade is worth making, or is not. Either answer is allowed. The point is that you have now made the decision rather than inherited it.

5. Last, open whatever your system uses to list programs, and find one thing that asks for administrator rights. Ask the question from the section above: does this plausibly need power over the system itself? You do not have to do anything about the answer.
:::

## Connections

Lesson 3 taught that a name is not the thing it names. This lesson is the second half of that idea: `statement.pdf.exe` and `pygaqme` are the same trick in two different naming systems.

Lesson 4 installed one thing, the shell, and said at the time that the question of what you were trusting would come back. This is it.

Lesson 8 gave you the address-reading habit and the shape of a claim about origin. Both do a second job here, and the signature is the padlock's exact counterpart: a proof of control, offered as if it were a recommendation.

Lesson 5 promised this lesson by name. When `python3 --version` came back not found and the fix was to go and install something, it said you would come back here to ask what exactly you were trusting. Now you can answer it in four parts, and the answer for Python is a good one to work through, because python.org is a project whose real domain is easy to find and easy to confuse.

Lesson 1 supplied the folk models this lesson's antivirus misconception uses, and the two lists that come back in the middle of it.

Lesson 10 is passwords, and it is where the second and third items on that expert list get a lesson of their own. The list is the reason they are worth one.

Lesson 11 asks the same four-party question about a message instead of a program. Who wrote it, who sent it, who hosts what it points at, and who told you it was worth opening.

## Go deeper

- **[Wash, "Folk Models of Home Computer Security"](https://www.rickwash.com/papers/rwash-homesec-soups10-final.pdf)** (2010), free. Table 3 is the one to find: twelve pieces of standard security advice against eight folk models, with each marked important, maybe or not necessary. It is the best single page in this field for understanding why sensible people decline good advice.
- **[Ion, Reeder and Consolvo, "'...No one Can Hack My Mind'"](https://www.usenix.org/conference/soups2015/proceedings/presentation/ion)** (2015), free from the symposium. The abstract page carries the two lists. Read the paper itself if you want the parts this lesson could not use.

## Sources

1. Recorded in this course's `research/SOURCES.md` under the safety rule "name the thing you are trusting, every time software is installed": typosquatted package names such as `pygaqme` for `pygame` are the standard technique. **Read at search-summary level.** The widely quoted count of malicious packages found in 2025 comes from a report that was identified and **not opened**, so no count appears in this lesson, as the callout above says. The technique is what this lesson teaches and it does not rest on a figure.
2. Iulia Ion, Rob Reeder and Sunny Consolvo, "'...No one Can Hack My Mind': Comparing Expert and Non-Expert Security Practices", *Symposium on Usable Privacy and Security*, 2015. **Read: the USENIX abstract page in full; the proceedings PDF was not opened.** Supplies the 231 experts and 294 non-experts, and the three most-reported practices in each group in order, which is what the table above prints. **Per-practice percentages are deliberately not used**, because they are in the paper and the paper was not opened; the lesson says so in its own text rather than only here. The study won the 2023 SOUPS Impact Award. That both columns are self-reported habit rather than measured effect is the paper's own framing and is stated in the lesson.
3. Rick Wash, "Folk Models of Home Computer Security", *Symposium on Usable Privacy and Security*, 2010, pages 1 to 11. Read in full. Supplies the *viruses are buggy software* model and the count of 9 of 33 respondents holding it, along with its content: that viruses must be deliberately downloaded and executed, so that care about what you click makes antivirus unnecessary. Wash's 33 interviews averaged 45 minutes, were conducted in 2007 and 2008 in three midwestern American cities, and screened out anyone with computer training. Lesson 1 uses the same paper for the hacker models and the botnet argument.
4. The antivirus disagreement is recorded in this course's `research/SOURCES.md` as a contested empirical question. **Read at search-summary level throughout: no AV-TEST or AV-Comparatives report was opened, and Tavis Ormandy's own writing was read only as quoted in secondary coverage.** That is why this lesson prints the shape of the argument and no laboratory score, and says so in its own text. What the file records is that independent lab testing shows built-in and paid products both catching very nearly everything in controlled tests, and that the Project Zero argument is about attack surface: antivirus parses hostile input at high privilege without sandboxing, which increases exposure to targeted attacks.
