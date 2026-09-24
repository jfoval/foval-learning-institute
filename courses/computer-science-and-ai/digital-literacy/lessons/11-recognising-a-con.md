---
title: Recognising a con, and the ten minutes after you clicked
minutes: 120
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/digital-literacy/11-recognising-a-con.mp3
objectives:
  - Take apart a message you have actually received into the three structural parts of a con, without using any list of current scams
  - Say what the evidence does and does not show about security awareness training, and keep two claims about it separate that are usually conflated
  - Apply the one move that resolves a genuine message and a fake one without having to tell them apart
  - Carry out a recovery procedure in the right order in the ten minutes after you have clicked something you should not have
quiz:
  - q: A woman gets a text from her child's school. There is a trip, the form closes at five today, and there is a link to pay the deposit. The school really does send these. How does the structure read, and what follows?
    options:
      - All three parts are present, and the structure has told you it is a con
      - Only two parts, because a school you know is not really unsolicited contact
      - All three parts are present, and the structure has not told you anything yet
      - No parts are present, since a message you were expecting cannot have part one
    answer: 2
    explain: She did not start the contact, the deadline is real, and a deposit is hard to get back, so all three are there, and the point of the item is that this changes nothing about whether it is genuine, which is C. A is the mistake that makes the frame unusable, because a rule flagging every urgent school text is a rule nobody keeps. B tries to rescue it by excusing a familiar sender, which is exactly what an attacker impersonates. D denies part one on the grounds that she knew a trip was coming, which is not the same as having started this.
  - q: A woman gets a call from someone who says they are her bank's fraud team, asking her to move money to a safe account. She is fairly sure it is real. What is the move that works whether it is real or not?
    options:
      - Ask them a question only her real bank could answer, and judge from the reply
      - Hang up and call the bank on the number from her card, and do it from there
      - Check whether the number that called matches the one on her bank's website
      - Tell them she will call back, then wait to see whether they call her again
    answer: 1
    explain: Going to the bank by a route she already had works identically whether the caller was genuine or not, and it removes the need to judge the message at all, which is B. A invites a fraudster to answer a question they have very likely prepared for. C trusts a displayed number, which is not a reliable thing to trust. D delays the decision without changing what she will have to decide.
  - q: A study of more than 19,500 employees found no significant relationship between recent training and failing a phishing simulation. Somebody concludes that people cannot be taught to spot phishing. What is wrong with that?
    options:
      - It is a different claim from the one measured, which was about deployed training
      - Nothing, since a study that large settles what smaller studies had suggested
      - It ignores that the employees studied were in one organisation over eight months
      - It is right about training and wrong to extend it to any other kind of learning
    answer: 0
    explain: What was measured is whether the training products organisations currently deploy, at the intensity they deploy them, change the outcome, and the authors say that is not the same as whether people can learn, which is A. B treats a measurement of one intervention as a fact about human capability. C names a real limitation and not the error being made here. D is close and still blurs the two claims, since the finding is about deployment rather than about training as such.
  - q: A man clicks a link and types his password into a fake page before realising. Of these four, which should he do first?
    options:
      - Run a virus scan on the machine, since something may have been installed
      - Email the service's support address to report that the account is compromised
      - Work out how he was fooled, so the same thing cannot happen to him again
      - Change that account's password, from a device that is not the one he used
    answer: 3
    explain: The password is already gone and the attacker's window is open now, so the first move is to close it by changing the password from a device the attacker does not control and revoking the sessions that are live, which is D. A is worth doing and is not the emergency, since a typed password was not an installation. B is slower than the thing he can do himself in one minute. C is worth doing tomorrow and costs him the minutes that matter tonight.
  - q: Across ten simulated campaigns, some cover stories drew 1 to 2% of employees and others drew upwards of 30%. What does that spread imply about where defensive effort is best spent?
    options:
      - On teaching people the cover stories that draw 30%, since those are the dangerous ones
      - On defences that work whatever the cover story is, since the story is the variable
      - On the employees who clicked, since the spread shows the difference is between people
      - On whichever cover stories are commonest this year, since the spread changes annually
    answer: 1
    explain: The thing that moved the outcome most was which story somebody was sent rather than who they were, so effort spent on defences that do not depend on the story is effort spent on the stable part, which is B and is why this lesson teaches a procedure instead of a list. A learns the current 30% stories, which is the list that goes stale. C reads a spread across lures as a spread across people, which is the opposite of the finding. D accepts that lures change and then proposes chasing them anyway.
  - q: A real employer really does sometimes send an urgent form with a deadline. How does the lesson's rule survive that, without flagging every genuine urgent message as a con?
    options:
      - It accepts that some genuine messages will be wrongly flagged, which is the cost
      - The rule applies only to messages about money, which an employer's form is not
      - The rule decides what you do next rather than whether the message is genuine
      - Genuine urgent messages can be told apart by checking the sender's real address
    answer: 2
    explain: The rule never asks you to judge the message, it tells you to reach the same destination by a route you already had, which costs you a minute when the message was real and saves everything when it was not, so C is right. A concedes a false-positive problem the rule does not have. B invents a scope limit the structure does not have. D goes back to judging the message, and a real address is one of the signals this lesson spends its first half retiring.
---

:::exercise Get three real messages in front of you
Take 10 minutes. This lesson does not work on invented examples and you should not have to trust mine.

Open whatever you get messages in. Email, texts, the app your bank uses, all of it.

1. Find **three messages you did not ask for** that arrived in the last month. They do not have to be suspicious. **Use your inbox, not the spam folder**, which is full of these and would make this too easy.

2. For each, write down two things: what it wanted you to do, and how quickly it wanted you to do it.

3. Keep the page open beside you. This lesson will ask you to mark all three up twice, and the second pass is the one that counts.
:::

Lesson 1 gave you a result and then spent ten lessons building the picture you needed to use it. This is the lesson where it gets used.

The result, if you want it in one line: in an eight-month experiment on more than 19,500 employees, more than half of them clicked a phishing link at least once, and whether they'd done the annual training made no significant difference.[1] Those clicks were counted by **simulation**, which means the employer sent its own staff fake phishing messages and recorded who fell for them, so they're measured behaviour rather than reported incidents.

You already have that. What lesson 1 could not do with it, because you did not yet have the network path or the padlock or the ladder, is say what actually follows. That is this lesson, and it is in two halves. The second half is the one almost nothing teaches.

## The structure, which does not change

A con has three parts. Not three signals to look for in the writing, three parts of the *situation*.

**That three-part account is this course's own frame rather than a finding from any study**, and it's worth saying so before you lean on it. What it is good for is that the three parts are hard for an attacker to remove, where the signals people usually look for are cheap to fix.

**One. Contact you did not initiate.** Something arrived. You weren't in the middle of doing this. The message, the call, the text: you did not start it.

**Two. Pressure that makes thinking expensive.** A deadline. A consequence. An account about to close, a parcel about to go back, a payment about to fail, a fine about to double.

It is worth being exact about *why* that works, because "creates urgency" is a label rather than an explanation. Judging a message is work. You have to read it properly, notice the address, remember whether you were expecting anything, and decide. That takes attention, and attention is something you have a limited amount of at four o'clock on a Thursday.

A con arranges a situation where paying that attention is **expensive**, because you're late, or it is your bank, or the parcel goes back today. Then it puts a **cheap** action right next to it. One click and it is handled. The pressure doesn't make you stupid. It changes the price of thinking, and then offers you a discount.

**Three. A requested action that is hard to reverse.** A payment. A password typed in. A code read out. A file opened. Something that, once done, cannot be undone by noticing afterwards.

That is the structure, and the things everybody was taught to look at are not in it. The spelling. The logo. The greeting that says "Dear Customer". The address it came from. The padlock.

**Two cases it misses, named now rather than discovered later.** A reply inside a conversation *you* started fails part one outright, and that is a real attack: somebody gets into a colleague's account and answers a thread already running. And an invoice from that same compromised account often carries no pressure at all, because it doesn't need any; you were expecting an invoice.

Keep the frame anyway, because it catches most of what arrives and costs nothing to apply. But notice that the move in the next section covers both of those cases even though the structure does not, which is a better reason to learn the move than to learn the parts.

:::predict Before reading on: take your three messages from the exercise. Mark each one for the three parts. How many messages have all three?
Usually none, or one.

That is the useful surprise, and it is why this lesson starts with your own messages rather than mine. Most unsolicited mail has one part, or two. A newsletter you did not ask for has part one and nothing else. A genuine reminder from your dentist has parts one and two and asks you to do something entirely reversible.

**All three together is rare, and all three together is the thing.** The rule is not "be suspicious of unexpected messages", which is unusable, because almost all messages are unexpected. It's much narrower than that, which is what makes it something you can carry.

If one of your three did have all three parts, look at what it was asking. And then read the next section, because the point of it is that you did not need to look at the writing at all.
:::

## The same message, with every tell removed

Now the case that makes the argument. Take a message with all three parts.

A text, of a shape this course has been seeing for years and which is still arriving now, described rather than reproduced: a parcel could not be delivered, a small customs fee is owed, and the parcel returns to sender if it is not paid within 24 hours. There is a link. It is described rather than reproduced, and this course prints no checklist of current lures, for a reason the last section of this lesson makes into an argument.[2]

Take it apart. Contact you did not initiate. Pressure with a deadline attached. An action that is hard to reverse, because a card payment to a stranger takes the money *and* the card details.

**All three. Verdict reached, and notice what you did not use.**

Now rebuild the same message with every standard tell removed. Perfect spelling and grammar. The real company's logo, copied from their site. Your actual name, because it was in a data breach with your phone number. A link to a domain with a valid certificate and a perfect padlock, exactly the case from lesson 8.

Every signal the folklore names is now clean.

**The verdict is unchanged**, because the structure did not change. You did not start the contact, there is a deadline, and paying is irreversible.

That asymmetry is the whole reason this lesson teaches structure. The tells are cheap for an attacker to fix. The structure can't be removed, because it is not decoration, it is what the con *is*. A con without unsolicited contact has no victim. Without pressure, you'd think about it. Without an irreversible action, you could just undo it.

## The move that does not require you to judge

Now the harder case, and it is the one that makes the rule usable.

**A real bank does call.** A real employer does send an urgent form. A real school does text about a trip that closes on Friday. Every one of those has contact you did not initiate, a deadline, and an action that is hard to reverse.

So a rule that says "all three parts means it is a con" would flag genuine messages constantly, and a rule people cannot live with is one they abandon in a fortnight.

The move, and it's the only thing in this lesson you have to remember:

**Do the thing. But by your own route.**

Not the link. Not the number that called you. Not the button in the message. **The route you already had**: the app on your phone, the number on the back of your card, the address you type yourself, the phone number from the payslip, the website you have used before.

Look at what that does.

If the message was genuine, you arrive at the same place and do the same thing, one minute later. The fee is there to pay. The form is there to fill in. Nothing is lost but a minute.

If the message was a con, you arrive at your actual bank, where there is no problem, no fee and no deadline, and you find out by the absence rather than by having spotted anything.

**You never had to decide whether the message was real.** That is the point, and it is why this survives whatever the next lure looks like. It replaces a judgement, which you will sometimes get wrong, and which attackers spend money on making you get wrong, with a procedure, which works the same whether you are sharp or tired or halfway out of the door.

:::checkpoint Your bank calls about a suspicious transaction and asks you to confirm some details. You use the rule and hang up. The caller says, reasonably, that they will hold the line while you check the number. What do you do?
Hang up anyway, and use a different phone if you have one. This course hasn't researched how telephone networks handle a line after one side hangs up, so take the different phone as belt and braces rather than as a claim about a mechanism.

The offer to hold sounds helpful, and it is the tell that the rule is working. Notice what the offer actually did. It gave you a reason to skip the procedure. **That is what pressure is for**, and it works on the procedure just as well as it works on your judgement, so the procedure has to be the thing you do anyway.

A genuine bank should be perfectly happy for you to call back on your own number. If someone is not happy about it, you have learned something without having judged a single word they said.
:::

## Why the advice to be careful is weaker than it sounds

Now the part of that study lesson 1 did not use.

Lesson 1 gave you the headline: no significant relationship with training, two percentage points from the embedded kind, over 56% clicking at least once. It also gave you the careful distinction that goes with it, which is that the authors do not claim people cannot learn, only that the training organisations actually deploy, at the dose they deploy it, does not move the outcome much. If any of that has gone fuzzy, lesson 1 is four minutes of rereading and worth it.

Three further findings from the same paper matter here, and lesson 1 had no use for them.[1]

**Lure quality dominated everything.** Some lures drew 1 to 2% of people. Others drew upwards of 30%. The **lure** is the cover story a message uses, the parcel or the invoice or the password expiry, and the spread means the single biggest predictor of whether somebody clicks is not who they are or what they have been taught. It is which story they were sent.

**The median per-campaign failure rate was about 10%**, across ten campaigns. So the over-56% figure is not one catastrophic week. It's a steady drip.

**And the training is largely not consumed.** Over half of embedded-training sessions ended within 10 seconds, and under 24% of users completed the material. Which is worth holding beside the two-percentage-point figure, because it means that number is not a measure of what training can do. It is a measure of what training plus the rate at which people actually read it does.

One figure the other way, and it belongs here because the authors put it in themselves. **Among the minority who did complete the interactive training, clicking on a later lure fell by 19% relative**, and the authors flag that as possibly a selection effect, because people who finish training may be people who were going to click less anyway.[1]

:::predict Before reading on: across those eight months, what share of employees do you think clicked at least once? Say a number before you look.
More than 56%.

Most people guess between 10 and 25%, and the reason the real number is higher is the drip in the second finding above: about 10% per campaign, ten campaigns, and a different lure each time. You do not have to be careless to be caught once in ten tries by ten different stories.

**That is both the argument and the compassion, and this lesson means the second word.** If you have ever clicked something you wish you hadn't, you're in a very large majority, and nothing about it says anything about how clever you are. What it says is that somebody whose job is writing convincing messages wrote one, and you read it while doing eleven other things.

The read level, because it is doing real work here: this course read that paper's abstract and its first two pages and not its results sections, so everything above is the headline as the authors report it and nothing finer.[1] The counter-evidence in lesson 1's callout, the earlier laboratory work and the study of 7,089 Korean organisations, reaches this course through Ho and colleagues' own account of it rather than from those papers, which were never opened.
:::

### What follows for you

If vigilance measures poorly, and the lure is the part that dominates, then the defences worth having are the ones that work **while you are not paying attention**:

- **A password manager**, and the reason is sharper than the one people usually give. Its autofill is matched to the domain, so on a look-alike address **it simply will not offer the password**. That silence is a signal, and it arrives before you've decided anything. Separately, unique passwords mean a password that does get typed into a fake page is one account's problem instead of forty.
- **A passkey wherever it is offered**, because it is the one rung that cannot be handed to a fake page at all. Lesson 10's table has the reasoning.
- **A second factor everywhere else**, with lesson 10's caveat attached rather than dropped: an SMS or app code **can** be relayed to the real site by a convincing page inside its window, so it isn't a defence against this particular attack. It is a defence against the automated one, which is far commoner, and it still beats nothing.
- **Automatic updates**, from lesson 9.
- **And a procedure instead of a judgement**, which is the whole of the section above.

None of those is vigilance. All of them are settings, made once, that hold up on your worst day. That is what lesson 1 meant by structural defences, and this study is why the course was built that way.

## What people get wrong

**"I can spot a phish."** Over half of people, trained and untrained, clicked at least once across eight months in the 2025 study.[1] The people who say this most confidently are not a separate category of people.

**"Bad spelling is the tell."** It was a useful tell once. It isn't one now, and you do not need a theory about why in order to stop relying on it: anything that can be checked and corrected before a message is sent will be, on any message worth the sender's trouble. Treating good spelling as reassurance is the mistake.

**"It came from a real address, so it is real."** A sender address displayed to you is a claim, not a fact, and the same is true of a number that calls you. Lesson 8 taught the same thing about a domain, and lesson 9 about a package name. This is the fourth time that idea has come round in this course and it is the most consequential.

**"The link showed the right domain when I hovered."** What is displayed and where it goes are two separate things, and this is lesson 8's address-reading habit: the domain is what is immediately left of the first single slash, read leftwards past the ending. Hovering shows you something. It does not show you something you can trust without reading it properly.

**"Training fixes this."** Two percentage points, from the embedded kind, with under a quarter of people completing it.[1] It is not nothing, and it's nowhere near enough to be the plan.

**"Training is useless, so why bother."** The same study read too far in the other direction, and lesson 1's callout is about exactly this. What was measured is the training products organisations deploy, at the dose they deploy them. People can and do learn to sort real messages from fakes; what nobody has shown is that an annual module moves the outcome much. If your employer runs one, do it properly, and do not expect it to be the thing that protects you.

**"If I clicked, it is over."** No. The next section is the whole answer to this one, and the belief itself is dangerous, because somebody who thinks it's over does nothing at all. The ten minutes after a click are worth more than any amount of care before it.

## The ten minutes after you clicked

Almost every piece of security advice ends at "do not click". This is the half that matters more, because the first half fails for over half of people.

**What this procedure is for**, because being precise matters here: you gave something away. A password, a code, or card details, typed into a page or read out to somebody.

**Two things it is not for.** If you're already locked out, because the attacker changed the password before you got there, skip to step 3 and use the recovery path from lesson 10, which is where those backup codes earn their keep; then go to step 6, because a locked-out account usually needs the service's own help. And if what happened is that you downloaded a file and opened it, that is a different problem with a different answer: that is an installation in lesson 9's sense, and the steps below aren't the right ones. Disconnect the machine from the network, do not use it to change any passwords, and use a different device for anything that matters.

Print the rest, or write it out, and put it where you could follow it while frightened. That is not a figure of speech: the state you will be in is embarrassed and rushed, which is the same state the con was built to produce, and a list you have to invent on the spot is one you'll get out of order.

**In this order.**

**1. Change the password for that service, from a different device.** Not the machine you just used, if you have got another. This closes the window while it is still open, and it is first because it's the only step that stops what is happening now.

**2. Sign out everywhere.** Most services have a button for this, usually called something like active sessions or devices. Changing a password does not always end sessions that are already open, and an attacker who got in is already in one.

**3. Check the recovery path, and check it for changes.** The recovery email address. The phone number. Whether either has been altered in the last hour. This is where an attacker makes the break permanent, and it is lesson 10's soft underbelly being attacked in real time.[3]

**3b. While you're in the settings, check two more things that survive a password change.** Which second factors are enrolled, in case one was added that is not yours. And which apps and services you have granted access to the account, because a connection authorised yesterday keeps working tomorrow whatever you do to the password.

**4. Check for mail forwarding rules and filters.** This one almost nobody knows, and it's the quiet one. A rule that silently forwards a copy of everything, or that files warnings from your bank straight into the bin, survives every password change you will ever make. Look in your mail settings for anything you did not create.

**5. Change that password anywhere else you used it.** If it was reused, the account you just fixed was one of several doors sharing a key. If you did lesson 10's exercise, this step is short.

**6. Tell whoever else is affected.** Your bank, if money is involved. Your employer, immediately and without waiting to understand what happened, because their people have seen it before, and the delay is what costs. A friend whose address you were messaging from.

**7. Then watch for the second contact.** This is the step people don't expect. Somebody may get in touch offering to help you recover, or to reverse the payment, or claiming to be the fraud team following up. **Treat that message exactly like the first one**, because a list of people who have just been caught is itself worth owning, and somebody arriving with the answer to a problem you have this minute starts from a much better position than the first message did.

:::checkpoint Why does changing the password come before signing out everywhere, when signing out is what actually removes the attacker?
Because of what happens if you do them the other way round.

Sign out everywhere first and you have ended the attacker's session, which feels like the win. But they still have the password. They sign straight back in, and you have spent your one clean minute on something they undid for free.

Change the password first and their existing session may survive for a while, which is why step 2 exists, but **the way back in is shut**. Now signing out everywhere removes what is left, and there is nothing to come back with.

The general shape is worth keeping, because it applies to more than this: close the entrance before you clear the room. It is also why step 3 is where it is, since a changed recovery address is a second entrance you have not shut.
:::

Notice what is not on the list. Working out how you were fooled is not on it, and it is worth doing tomorrow. Running a scan is not first, because a password typed into a page is not an installation. And nothing on the list needs you to have understood the attack.

## Practice

:::exercise Mark up your three messages, twice
Take 20 minutes. Use the three real messages from the start.

**First pass.** For each message, mark the three structural parts. Contact you did not initiate. Pressure. An irreversible action. Write down which are present and which are not.

**Second pass, and this is the one that matters.** For each message, whether or not it looked suspicious, write down **your own route** to the same thing. Not "I'd check if it was real". The specific route: which app, which number, which address you would type.

Then three questions:

1. For how many of the three did you already know your own route, without looking it up?

2. For any where you did not, go and find it now, and write it down. That is the work, and it's done once rather than in the moment.

3. Was there a message with all three parts that you would have acted on? If so, write one sentence about what made it convincing, without any judgement of yourself attached to it. The study above is your defence on that point.
:::

:::exercise Write your own recovery procedure, for the account that would hurt most
Take 20 minutes. One account. The worst one, from your lesson 1 plan, which after lesson 10 is probably your email.

1. Write the seven steps out, in order, in your own words, for that specific account.

2. Now make each one concrete. Not "sign out everywhere", but where that button actually is for this service. Go and find it. Write the path down. **Do not press it.**

3. Do the same for the recovery settings and for the mail forwarding rules. Find the page. Note what is there now, so that "has this changed" is a question you could answer.

4. Put the finished page somewhere you could reach it if you were locked out of that account. On paper is not a joke. It's the point.

5. One sentence at the bottom: who you would tell, and how you would reach them.

The whole value of this is that it is done calmly, now, by somebody who is not frightened and isn't in a hurry. That person will not be available later.
:::

## Connections

Lesson 1 gave you the study and the honesty about it. This lesson is what the study is for, which is why the course put the result at the front and the consequences ten lessons later.

Lesson 8's padlocked fake site is the second worked example here, rebuilt with every tell removed. The domain-reading habit is the one piece of message-judging this lesson still endorses, and it endorses it because it reads structure rather than tone.

Lesson 9 asked the four-party question about a program. This lesson asks it about a message: who wrote it, who sent it, who hosts what it points at, and who told you it was worth opening.

Lesson 10 is what decides how bad step 5 of the recovery is. Unique passwords make it one account. Reuse makes it all of them.

Lesson 13 is where you find out what a service holds and how to look, which is the calm version of the frightened checking you have just written out.

## Go deeper

- **Ho and colleagues, "Understanding the Efficacy of Phishing Training in Practice"** (IEEE Symposium on Security and Privacy, 2025). Search for it by title; this course's research file records no stable link for the paper itself, and the [symposium's own site](https://www.ieee-security.org/TC/SP2025/) lists its programme. The abstract and the opening pages are the parts this lesson uses. Worth reading for how carefully the experiment had to be built before the answer meant anything, which is a lesson in itself and connects straight back to Logic and Argument lesson 9 on evaluating a source.
- **Your own mail settings, right now.** Find the forwarding rules and the filter list, on the account that matters most, and read what is there. Most people have never opened that page. It takes four minutes, and it's the single most useful thing in this lesson you can do without an emergency.

## Sources

1. Grant Ho and colleagues, "Understanding the Efficacy of Phishing Training in Practice", *IEEE Symposium on Security and Privacy*, 2025. **Read: the abstract and pages 1 to 2 in full; the full results sections were not read.** Supplies the design (eight months, ten simulated campaigns, over 19,500 employees at a health system, explicit control groups and randomised assignment to training conditions and lures) and the headline findings quoted above: no significant relationship between recent annual training completion and failing a simulation; a statistically significant but 2 percentage point absolute reduction from embedded training; over 56% of users clicking at some point with a median per-campaign failure rate of about 10%; lure quality dominating, from 1 to 2% on some lures to upwards of 30% on others; over half of embedded training sessions ending within 10 seconds and under 24% of users completing the material. **Because only the opening pages were read, this lesson makes no claim finer than those headline figures and says so in its own text.** The counter-position is reported as the same authors report it: earlier laboratory and small-scale work consistently finding that training improves accuracy at sorting phishing from legitimate mail, and Kweon and colleagues finding a correlation between training time and fewer incidents across 7,089 Korean organisations. Ho and colleagues also set their result beside a 15-month study of 14,000 corporate employees that found no positive effect and some evidence of a negative one, and a study by Back and Guerette of 2,000 employees at a US research university in which people who completed awareness training were more likely to click. **The 15-month study's own authors are not named here**, because that surname is in this course's `unread:` line and the work was not opened; it is reported only as Ho and colleagues report it.
2. The parcel-delivery example is described rather than quoted, as a shape of message circulating from 2021 onwards. This course deliberately prints no checklist of current scams and no verbatim example, on the reasoning in `research/SOURCES.md`: the lure is the variable the study above found dominates, and a dated list of lures teaches the part that changes. The structural account of a con given here, contact you did not initiate, pressure, and an action that is hard to reverse, is this course's own formulation, and it is offered as a teaching frame rather than as a finding attributed to any source.
3. Foval Learning Institute, Digital Literacy lessons 1, 8, 9 and 10, which this lesson builds on directly: lesson 1 for the promise about vigilance and structural defences, lesson 8 for the padlocked fake site and the domain-reading habit, lesson 9 for the four-party question and automatic updates, and lesson 10 for the authentication ladder and the recovery path. A figure that a lesson of this course has already established is used here without being re-derived.
