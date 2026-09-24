---
title: What services keep about you, and how to look
minutes: 100
objectives:
  - >-
    Apply a service's own data export and activity record, and say what one actually contains
  - >-
    Explain what deleting does and does not do, and name who else holds copies
  - >-
    Identify one setting worth changing and one convenience worth keeping, with the reason for each
    from your own threat model, the security plan you built in lesson 1
quiz:
  - q: >-
      A music service's help page says exports are delivered as JSON within thirty days. Which
      question does that sentence settle?
    options:
      - Whether the file will be readable by somebody without programming experience
      - When you can expect it and what the file extension will be, and nothing further
      - Whether the export will include what the service observed as well as what you gave it
      - Whether thirty days is lawful, since the access deadline is thirty days in Europe
    answer: 1
    explain: >-
      A format and a deadline describe the delivery, and a reader who has both still knows nothing
      about the contents or their readability. Whether JSON is readable depends on the reader and
      the file, and the page is a product promise rather than a statement about the law.
  - q: >-
      Thirty-three people in a study opened their own exports from five named services. What did the
      researchers report about the questions those people brought with them?
    options:
      - That the questions were mostly answered, though it took longer than expected
      - That the exports answered questions about usage but not about company practice
      - That the participants could not formulate questions until they saw the data
      - That the questions were often left unanswered by what was in the archive
    answer: 3
    explain: >-
      The abstract says participants hoped to learn about their own usage or about how the company
      collects and uses data, and that these questions were often left unanswered. It does not
      report a split between the two kinds of question, a delay, or an inability to ask.
  - q: >-
      You delete a photo from a service and it disappears from your account. Which of the four
      senses of deletion has definitely happened?
    options:
      - Removed from your view, which is the only one you have evidence for
      - Removed from the company's active systems, since the account is the system
      - Removed from backups, because backups are copies of the active systems
      - Removed from everyone the company already shared it with, in time
    answer: 0
    explain: >-
      Disappearing from your account is evidence about your account and nothing else. The other
      three happen on their own timescales, if they happen, and nothing visible to you reports on
      any of them.
  - q: >-
      A reader in Ohio wants to demand that a company send everything it holds on them. What does
      this course say?
    options:
      - That the right applies to any company large enough to publish a privacy policy at all
      - That the right exists in every country but is enforced only inside the European Union
      - That it depends on the state, and that this course has read no legal source on any of it
      - That no such right exists anywhere in the United States under any circumstances at all
    answer: 2
    explain: >-
      The course states the position without having read a legal source for it, which is why it
      says so and points you at your own jurisdiction. It is not a right that attaches to company
      size, not merely an enforcement gap, and not uniformly absent in the United States.
  - q: >-
      A friend checks her activity page, finds it less alarming than she expected, and decides to
      change nothing. On the 2021 survey's evidence, what can you say?
    options:
      - That she has been misled, since the dashboard will have hidden the worst categories
      - That her reaction is the common one, and the survey says nothing about whether it fits
      - That she should look again, since a single viewing is not enough to judge by
      - That the survey cannot speak to her case, having measured only 153 participants
    answer: 1
    explain: >-
      Exposure left people significantly less concerned and only a quarter even said they would
      change anything, so her reaction is ordinary. What the survey did not establish is whether
      the lower concern was warranted, and 153 is a normal size for a survey of this kind.
  - q: >-
      You find your activity record holds something you did not know was kept, and switching it off
      would break a feature you use daily. What does this lesson tell you to do?
    options:
      - Switch it off, since an unexpected record is evidence the trade was never fair
      - Keep it on, since a feature you use daily is worth more than a record you never see
      - Decide either way, and write down what you gave up and what you got for it
      - Consult the jurisdiction rules, since the answer depends on where you live
    answer: 2
    explain: >-
      What somebody should trade for convenience is a value question, and this course gives you the
      mechanism and the rights and then declines to make the choice. Writing down the trade is what
      turns a default into a decision.
---

Twelve lessons have been about machines you can look inside. A file has a place. A command leaves an
error you can read. A certificate is checkable. Even the con in lesson 11 works by a mechanism you
can name.

This one is different, and the course should say so rather than pretend otherwise. **What a service
keeps about you is the thinnest-evidenced thing in this course**, not because nobody has studied it
but because what any particular company holds is visible only to that company. So this lesson does
something narrower than the others. It doesn't tell you what is kept. **It teaches you to look, and
then tells you honestly what people find when they do.**

## What people believe, and what they cannot say

Start with the finding this course keeps coming back to. In 2015 [researchers sat twenty-eight
people down](https://www.usenix.org/conference/soups2015/proceedings/presentation/kang) and asked
them to draw the internet on paper.[1] **This course read that paper in full.**

On deletion, the participants split into two camps. One held that once something is online it is
there forever. The other held a vague belief that deleting works. **Neither camp could say who held
copies.**[1]

That's the sentence to sit with, because the two beliefs look like opposites and they fail in the
same way. Both are guesses about a question neither person had tried to answer, and **the answer is
partly available**: every large service has an export, most have an activity record, and looking
takes an afternoon.

So the fix this lesson offers isn't a rule. It's a procedure.

## What an export is, and what the documentation actually promises

Google's own [help page](https://support.google.com/accounts/answer/3024190) describes what happens
when you ask for a copy of your data.[2] **This course
read that page on 19 September 2026 and nothing else of Google's documentation**, and everything in
this section is quoted from it, because a company's own documentation is primary for what that
company says it will do.

How long, in their words: "Depending on the amount of information in your account, this process
could take from a few minutes to a few days. Most people get the link to their archive the same day
that they request it."[2]

What arrives: a zip file, which they say "can be opened on almost any computer", or a tgz, of which
they note "You may need additional software to open these files on Windows."[2] If it is big it
comes in pieces: "Archives that are larger than the size limit you selected are split into multiple
files."[2]

And two limits that catch people out. "Your archive expires in about 7 days."[2] And: "We only allow
each archive to be downloaded 5 times; after that, please request another archive."[2]

:::predict Before you read on. That is five concrete facts from the company's own documentation. Look back at them and write down what they tell you about what is inside the archive.

Nothing. They tell you nothing whatsoever about what is inside.

Every one of those five facts is about **delivery**. How long the parcel takes, what the parcel is
wrapped in, how big a parcel can be before it is split, how long it sits on the doorstep, how many
times you may pick it up.

Not one word about contents, readability or completeness, and this is a help page written by the
company with every incentive to be reassuring. The gap isn't a criticism of the page. Documentation
describes the service, and what's in your archive depends on you.

But it does mean something for how you read the promise. **If you want to know what a service holds,
the documentation cannot tell you and the archive can.** That asymmetry is what the rest of this
lesson is for.
:::

## What people find when they open one

Here the course leaves the company's account and goes to people who have watched others do it.

In 2024 a team ran [a
study](https://www.usenix.org/conference/usenixsecurity24/presentation/borem) in which
**thirty-three participants explored their own data from Amazon, Facebook, Google, Spotify, or
Uber**.[3] **This course read the abstract and did not open the
paper**, so what follows is at that level.

The design is worth stating because it's unusually direct: participants "articulated questions they
hoped to answer using the exports" and "annotated parts of the export they found confusing, creepy,
interesting, or surprising".[3]

And the finding, in the authors' words: "While participants hoped to learn either about their own
usage of the platform or how the company collects and uses their personal data, these questions were
often left unanswered."[3]

Read that against the previous section. The documentation tells you nothing about the contents.
The contents, for thirty-three people across five large services, often did not answer the questions
they arrived with.

The same abstract records something else, and it belongs here: participants' annotations "documented
their excitement at finding data records that triggered nostalgia, but also shock and anger about
the privacy implications of other data they saw".[3] One archive, both reactions, on this
course's reading of that sentence.[6] And afterwards, "many participants hoped to request the company erase some, but not all,
of the data", which is a more interesting result than either camp in the 2015 study would've
predicted.

A second study, from 2021, looked at the archives themselves rather than at people's reactions:
twelve focus groups, forty-two participants, six companies' downloads.[4] **Read at abstract level
here too.** Its flattest sentence is the useful one: "Data downloads vary in format, organization,
comprehensiveness, and content."[4]

Four dimensions of variation, which is exactly what no single export could've told you, and which is
why this lesson is built on published work rather than on one archive.

## Why there is more in there than you put in

Everything so far says people are surprised by their exports. **Here is why**, and it is the one
piece of mechanism this lesson has.

**Most of what a service holds about you is observed rather than provided.** What you typed into a
box is provided: you gave it deliberately and you can usually remember doing it. What you opened,
when you opened it, from where, on what device, in what order, and how long you stayed is observed.
Nobody typed any of that in. It accumulates as a by-product of the service working at all.

And the observed part is usually the larger part, because it is what makes the product function
and what makes it worth money. A recommendation needs what you watched, not what you said you liked.
A map needs where you went.

That is why an export is stranger than people expect. A reader who thinks in terms of what they
contributed is auditing the smaller half, and it is also why "I never posted anything" is not an
answer to the question: not posting removes you from the provided column and leaves the observed one
untouched.

Priya's location history, below, is this distinction with a name on it. She never typed a single
place into anything.

## What deleting actually means

Now the second half of the 2015 finding: nobody could say who held copies.

**Deletion is four different things, and they happen on four different timescales.** This
four-way split is this course's own way of organising the question rather than a finding from any
source read here.[6]

Removed from your view. The item stops appearing in your account. This is the one you can see, and
it's the only one you ever get direct evidence of.

Removed from the company's active systems. The row is gone from the database the product runs on.
You can't observe this, and a service that has done the first hasn't necessarily done the second.

Removed from backups. Lesson 12 was about what makes a copy a backup, and how long a provider
keeps one. The same logic applies on their
side: a company that can restore last month can restore what you deleted this month, until those
backups age out.

Removed from everyone they already shared it with. If a copy went to another company before you
deleted it, your deletion is a request about their systems that has to travel, if it travels at all.

:::predict A service tells you your photo is deleted and it disappears from your account. Which of the four has definitely happened, and what would it take to observe any of the other three?

**The first, and only the first.**

Disappearing from your account is evidence about your account. It is the one sense of deletion that
reports on itself, which is exactly why it is the one people generalise from.

**What it would take to observe the others is the uncomfortable part.** For the active systems, you
would need to see inside a database you have no access to. For backups, you would need to know the
provider's retention window and then watch it elapse. For the copies already shared, you would need
to know who they went to, which is the question the 2015 participants could not answer.[1]

So three of the four are unobservable from where you are standing, and a claim about them is a
claim about somebody else's systems made from outside. That is not a reason to despair. It is the
reason the request is worth making, because the export is the one window there is.
:::

**"I deleted it" is a claim about the first of those four**, and the other three are the ones the
question was actually about.

## What you can demand, and where

This depends on where you live, and this course names the jurisdiction every time it says what you
can demand. And it has to say something about itself first: **this course has read no legal source
for any of what follows**, so take it as a pointer to look up your own jurisdiction rather than as
advice about your rights.[6]

**The right of access and the right to erasure are best known in their European form**, under the
GDPR. If you're in the European Union or the United Kingdom, you can require a company to give you a
copy of what it holds and, in defined circumstances, to erase it.

**In the United States there is no single federal equivalent.** There is a patchwork of state laws,
several of which grant similar rights, and which one applies to you depends on your state. A reader
in California has rights a reader in Ohio may not. One of this lesson's own sources carries the
point in its title: the 2021 study is about downloads under **GDPR and CCPA** access rights, and the
CCPA is Californian.[4]

So before you rely on any of this, look up your own. Search for your country's or state's
data-protection authority. That is a ten-minute job and this course cannot do it for you.

**And the export button is not the same thing as the legal right.** Google offers an export as a
product feature, and the page you read for it is a help page rather than a statute. That's
convenient and it isn't a right, and a feature offered voluntarily can be changed.

:::checkpoint This lesson is about to ask you to go and look at your own data. Before it does: is looking actually a good idea, and what is the evidence?

The honest answer is that the best evidence available cuts against this lesson's own method, and
saying so is the point of putting it here.

A 2021 [survey of **153
participants**](https://www.usenix.org/conference/usenixsecurity21/presentation/farke) studied
Google's My Activity dashboard.[5] **This course read
the abstract and not the paper.** Participants found the volume and detail of collected data
surprising, as you'd expect. Then the counterintuitive part: exposure to the dashboard made them
**significantly more likely to be both less concerned about data collection and to view it more
beneficially**, and **only 25 percent said they would change any setting or behaviour** afterwards.

The authors' own conclusion, verbatim: "it remains unclear if such transparency tools actually
improve end user privacy by sufficiently assisting or motivating users to change or review data
collection settings."[5]

So why does this lesson still tell you to look?

Because of what the alternative is. The 2015 participants who had never looked held confident
beliefs in both directions and could not say who held copies.[1] **Looking replaces a guess with a
fact about your own account**, and this course's position is that knowing is worth having even where
the evidence that it changes behaviour is weak. **That's a judgement rather than a finding**, and
you should know it is one.

What the dashboard study does change is the instruction. **Looking is not the exercise. Writing down
what you will do differently, before you know what is in it, is the exercise**, and that is how the
practice below is built.
:::

## One record, one decision

**This case is constructed** and is not from any source read for this course.[6]

Priya opens the activity record on the service she uses most. She expects to find searches, because
she knows she searches. She finds those, and she also finds **a list of every place her phone has
been**, going back years, because a feature she uses for traffic on her commute needs it.

Here is the part that matters. She did not know it was kept. She does use the feature. Switching the
record off would break the feature.

The question is what she should do, and this course will not answer it.

That isn't evasiveness. What a person should trade for convenience is a value question, and it
depends on things this course doesn't know: who she is worried about, what her commute is worth to
her, and what else is in her life. **A course that told her to switch it off would be making that
judgement for her with less information than she has.**

What the course can give her is the shape of the decision.

:::predict Priya has the mechanism and the rights. What are the two things she should write down, whichever way she decides?

What she gave up, and what she got for it. Both, in her own words, on the same line.

The reason for both halves is that a decision with only one isn't a decision. "I switched off
location history" records a cost with no benefit attached and will be reversed the first time the
traffic feature fails. "I kept the traffic feature" records a benefit with no cost attached and is
indistinguishable from never having looked.

**Written together, they turn a default into a choice**, and a choice is something you can revisit
when your circumstances change. That is the whole of what this lesson can offer, and it is more than
either camp in the 2015 study had.
:::

## What people get wrong

**"Deleting removes it."** It removes it from your view. The other three senses of removal are
unobservable from where you are standing.[6]

**"I have nothing to hide, so it doesn't matter."** For some readers and some threats, that is close
to true, and pretending otherwise would lose the argument with the readers who most need it. The
honest version is narrower: it matters in proportion to your security plan from lesson 1. Somebody
whose ex-partner is trying to find them, somebody whose employer is hostile, and somebody who is
simply tired of advertising have three different answers, and only the first is urgent.

**"A paid service won't sell my data, because I paid."** This was one of the beliefs recorded in the
2015 study, and paying establishes a business relationship rather than a restriction.[1]

**"Private browsing means the service doesn't have it."** Lesson 8 has the mechanism. A private
window changes what your own machine keeps, and the service on the other end sees what it always
saw.

**"I can make any company delete everything."** Jurisdiction, above.

**"Once it's online it's there forever, so none of this matters."** The other half of the 2015
split, and it fails in the same way as its opposite: it is a guess about who holds copies, made by
somebody who has not looked.[1] It is also the belief that makes the request pointless, and the
thirty-three people in 2024 who did look included many who wanted **some** of their data erased rather than all
of it or none.[3]

## Practice

:::exercise Ask, then write the prediction down

Take 20 minutes now, and about an hour when the archive arrives.

**Request an export from one service you actually use.** Pick one or two products rather than
everything, or you'll wait days for something too large to read.

Then, **before it arrives**, write down three predictions.

1. **What you expect to be in it**, listed.
2. **What you expect not to be in it.**
3. **One thing you will change if you are wrong**, named specifically enough that somebody could
   tell in a month whether you had done it.

**The third line is the one that matters and it must be written before the archive lands.** A
prediction written before the evidence arrives is the only kind that can turn out wrong, which is
what makes it worth writing. Decide afterwards and you will never know what you would have said.

When it arrives, use lessons 2 and 3 to find and open it. If that sentence sounds easy, notice that
it wouldn't have been twelve lessons ago, which is worth noticing.
:::

:::exercise Find the oldest thing

Allow 30 minutes.

Open the activity record on the service you use most. Not the export: the live record, the one that
updates as you use it.

Find **the oldest entry in it**. Scroll, or use whatever date control it offers.

Then three lines.

1. **How far back it goes.**
2. **One category of thing in it you did not know was being kept**, or a note saying there was none,
   which is a real result and worth recording.
3. **The trade**, if there is one: what switching that category off would cost you, and what keeping
   it costs you, in your own words.

This course doesn't tell you which way to decide. It has given you the mechanism, the four senses of
deletion, and the rights that apply where you live. The weighing is yours, and doing it deliberately
once is worth more than a rule somebody else wrote.
:::

## Connections

Back, and this lesson needs more of the course than any other. Lesson 1 is the threat model, which
is what it called your security plan and the five questions behind it, and without it the question
"does this matter?" has no answer. Lessons 2 and 3 are how you find and open
what arrives. Lesson 7 is who was in the path before the service ever got your request. Lesson 8 is
what the private window did not stop. Lesson 12 is copies and how long they live, which is the same
mechanism seen from the other side of the wire.

**Out.** This is the last lesson of the course. **Using AI Effectively** is where what you type into
a system becomes the same question again, and it is on the path after this one.

## Go deeper

- **[Download your data](https://support.google.com/accounts/answer/3024190)**, Google. **Read on 19
  September 2026**, and worth reading yourself because it is short, it is primary, and **it may well have changed** by the time you read this, which is why the date is on it.
- **["Data Subjects' Reactions to Exercising Their Right of
  Access"](https://www.usenix.org/conference/usenixsecurity24/presentation/borem)**, Borem and
  colleagues, USENIX Security 2024. **This course read the abstract only.** The abstract says participants annotated what they found
confusing, creepy, interesting or surprising, and the paper is where those annotations are.
- **["'My Data Just Goes Everywhere'"](https://www.usenix.org/conference/soups2015/proceedings/presentation/kang)**,
  Kang and colleagues, SOUPS 2015. **Read in full for this course.** The drawings are the part that stays with you.

## Sources

1. Ruogu Kang, Laura Dabbish, Nathaniel Fruchter and Sara Kiesler, ["'My Data Just Goes Everywhere':
   User Mental Models of the Internet and Implications for Privacy and
   Security"](https://www.usenix.org/conference/soups2015/proceedings/presentation/kang), SOUPS
   2015. **Read in full**, pages 39 to 46. Twenty-eight participants, seventeen lay and eleven
   technical. Supports: the split between "there forever" and a belief that deletion works, and that
   neither group could say who held copies; and the belief that a paid service will not sell your
   data.
2. Google, ["Download your data"](https://support.google.com/accounts/answer/3024190),
   support.google.com. **Fetched and read 19 September 2026**, which the body says at the point of
   use. Primary for what Google states about its own product, and **dated deliberately**, because a
   help page is exactly the kind of source that goes stale inside a year. Supports the five quoted
   facts: the time to build an archive, zip and tgz, splitting above a chosen size, expiry in about
   seven days, and the five-download limit. **It supports nothing about contents**, which is the
   observation the lesson builds on.
3. Arthur Borem, Elleen Pan, Olufunmilola Obielodan, Aurelie Roubinowitz, Luca Dovichi, Michelle L.
   Mazurek and Blase Ur, ["Data Subjects' Reactions to Exercising Their Right of
   Access"](https://www.usenix.org/conference/usenixsecurity24/presentation/borem), 33rd USENIX
   Security Symposium, 2024. **Read at abstract level; the paper was not opened**, which the body
   says. Supports: the thirty-three participants and the five named services, the study design, the
   questions often left unanswered, the nostalgia and the shock, and that many wanted some but not
   all of their data erased.
4. Sophie Veys, Daniel Serrano, Madison Stamos, Margot Herman, Nathan Reitinger, Michelle L. Mazurek
   and Blase Ur, ["Pursuing Usable and Useful Data Downloads Under GDPR/CCPA Access Rights via
   Co-Design"](https://www.usenix.org/conference/soups2021/presentation/veys), SOUPS 2021. **Read at
   abstract level; the paper was not opened.** Supports: twelve focus groups, forty-two
   participants, six companies' downloads, and the quoted sentence about the four dimensions of
   variation.
5. Maximiliane Farke, David Balash, Maximilian Golla, Markus Dürmuth and Adam Aviv, ["Are Privacy
   Dashboards Good for End Users? Evaluating User Perceptions and Reactions to Google's My
   Activity"](https://www.usenix.org/conference/usenixsecurity21/presentation/farke), USENIX
   Security 2021. **Read at abstract level; the paper was not opened.** Supports:
   the 153 participants, that exposure made people significantly more likely to be less concerned
   and to view collection more beneficially, the 25 percent figure, and the authors' quoted
   conclusion.
6. **The course's own constructions, each labelled where it appears in the body.** The four senses
   of deletion are this course's way of organising the question rather than a finding from any
   source read here, and the body says so where the list begins. Priya's case is constructed, and
   the body says so. **The jurisdiction summary is a statement of the legal position as this course
   understands it and is not drawn from a legal source read for this file.** The body says so where
   the section opens, and sends the reader to their own data-protection authority before relying on
   any of it. **And the
   decision to send readers to look, in the face of a study suggesting that looking often leaves
   people calmer and changes little, is this course's judgement**, said as such in the checkpoint.
   **What this course still does not have** is any figure for how often exports are late, incomplete
   or unreadable. Several such figures exist in the literature; none of them was obtained at a level
   this course could print, and no number of that kind appears in this lesson.
