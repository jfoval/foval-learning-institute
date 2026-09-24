---
title: What you are up against, and what this course can honestly do
minutes: 110
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/digital-literacy/01-what-you-are-up-against.mp3
objectives:
  - Say what the research does and does not show about whether understanding computers makes a person safer, and state the two claims this course can defend
  - Build a security plan for yourself from the five questions, naming what you have, who would want it, how bad it would be, and how much trouble you will go to
  - Identify the folk model of the threat behind a piece of security advice somebody follows or refuses, and say what would have to be true for the refusal to be sensible
quiz:
  - q: A retired joiner tells you he will not use a password manager. "Nobody is going to come after a man with £900 in his current account," he says. Which folk model is doing the work in that sentence?
    options:
      - The graffiti model, because he thinks attackers are showing off
      - The big fish model, because attackers go after the rich and important
      - The mischief model, because he thinks trouble would be obvious
      - The burglar model, because he thinks attackers are opportunists
    answer: 1
    explain: He is not denying that attacks happen. He is saying attackers pick targets by value, and he is small, so the question does not concern him. That is the big fish picture, and it is the one that most often ends a conversation about security. The graffiti picture (A) would have him saying it is hopeless, not that it is irrelevant. The mischief picture (C) is about noticing an infection, which he never mentions. The burglar picture (D) works against opportunity rather than value, and someone holding it usually locks up more, not less.
  - q: A small charity's laptop is used to send several thousand spam messages a night. Nothing on it is touched, nothing is encrypted, and the treasurer says it has been a bit slow lately. Which part of the five-question plan failed to see this coming?
    options:
      - The last question, because the charity was not willing to take much trouble
      - The third question, because the charity judged an attempt to be unlikely
      - The first question, because it asks about contents and not about uses
      - The fourth question, because the charity underrated how bad a breach would be
    answer: 2
    explain: Run the attacker back through the plan. The first question asks what you hold that is worth protecting, and the honest answer for that laptop is almost nothing, which makes every question after it come out small. The attacker never wanted anything on the machine; it wanted the machine. That is why the plan needs a sixth line about what your device and your connection can be used for. The other three questions are answered wrongly only because the first one framed the whole thing around contents.
  - q: Someone reads the phishing-training result and concludes that people are simply incapable of learning to spot a fake message. What is wrong with that reading?
    options:
      - Nothing is wrong with it, because the improvement that was measured was tiny
      - It states a claim about people that the study was not built to test and did not make
      - It is wrong because the study only looked at a single organisation over eight months
      - It is right in principle but overstated, since a minority did improve after training
    answer: 1
    explain: The study measured the effect of training products as organisations actually run them. Whether a person can learn to sort real messages from fakes is a different question, and lab studies have found that they can. B names that gap. A treats the small effect size as evidence about capacity, which is the confusion itself. C is true but is not the main problem, because the design is unusually strong and the point would stand. D concedes the wrong thing, because the improvement among finishers may be selection, and the authors say so.
  - q: A school governor argues that a computing course will make staff behave more safely, because people who understand a system look after it. Which reply is best supported?
    options:
      - Understanding changes behaviour, and it does so most of all at work
      - Understanding made no measurable difference to anything that was worth measuring
      - Understanding predicted noticing more risks, but not taking more precautions
      - Understanding matters only when it is paired with a compulsory annual test
    answer: 2
    explain: The interview study that drew this out found that people with more technical background named more parties who could see their data, and that this did not carry over into the actions they took. C says exactly that and no more. A is the governor's assumption restated. B overshoots in the other direction, and the study did find a difference in what people perceived. D adds a condition nobody tested.
  - q: Your neighbour says her computer is definitely clean because it has been running perfectly all year. Which reply engages the actual mistake?
    options:
      - Performance is a poor test, since the useful sort of intrusion stays quiet
      - She should run a full scan tonight and then decide whether to worry
      - Nobody can ever know whether a machine is clean, so the question is idle
      - Modern machines are fast enough to hide the slowdown an infection causes
    answer: 0
    explain: Her evidence is that nothing looks wrong. That is a test for an attacker who wants to be noticed, and an attacker who wants to keep using her machine has every reason not to be. A names that. B is reasonable advice that leaves the wrong test in place, so she will use it again next year. C is the fatalism this lesson warns about. D is a guess about hardware, and it accepts her premise that an infection would otherwise show.
  - q: Which of these is a claim this course is in a position to defend?
    options:
      - You will stop clicking things you should not click
      - You will recognise every fake message that reaches you
      - You will be safer than someone who has not taken it
      - You will be able to say what failed when something goes wrong
    answer: 3
    explain: The defensible claim is about diagnosis, which is D, together with a small number of choices you make once. The other three are claims about vigilance, and vigilance is the thing that has been measured and found wanting. A and B promise attentiveness the evidence does not support. C sounds modest but is the same promise in a comparative form, and it is the promise this lesson opens by declining to make.
---

Two lists, from a study published in 2015 that asked 231 people who work in security and 294 people who do not the same question: what do you do to stay safe online?

| What the security professionals said they do | What everyone else said they do |
|---|---|
| Install software updates | Use antivirus software |
| Use two-factor authentication | Visit only known websites |
| Use a password manager | Change passwords frequently |

Three each, in order of how often they were mentioned. Nothing appears on both lists.[3] I have that ranking from the study's abstract rather than from the full paper, which is why this lesson gives you the order and no percentages.

That is not a story about one group being careful and the other being lazy. Both groups were trying. Both gave answers they believed. But two of the three things in the right-hand column are things the official guidance has since retired or heavily qualified, and the left-hand column's top item is the one thing consumer advice almost never leads with. The two groups are not doing the same job with different amounts of effort. They are working from different pictures of what the danger is, and the picture is deciding the behaviour.

This course is about the picture. Where your files are, what happens when you type an address, what an administrator password actually grants, who is standing in the path between you and a website. It is not primarily a course of advice, and the first thing I owe you is an honest account of why.

## What the evidence says about courses like this one

You should know, before you spend the hours, that the obvious justification for this course has been tested and it didn't hold up.

In 2015, four researchers sat 28 people down with paper and asked them to draw the internet, then to draw what happens when they send an email or make a payment.[2] Seventeen were lay users, eleven had technical training. Fourteen drew a single box: you send a request in, an answer comes back, and there is nothing in between. Thirteen of those fourteen were lay users. The other fourteen drew something with layers in it.

The people with articulated pictures named more parties who could see their data, about four on average against about two and a half, and the authors' explanation is the useful part: you can't worry about your internet provider if your picture of the internet has no provider in it. So far, so encouraging for a course like this one.

:::predict The people with layered pictures of the internet named roughly four parties who could see their data; the people with a single box named about two and a half. Now predict the second finding. Did the people with layered pictures also take more precautions?
No. That is the result, and it is the one that should make you suspicious of the argument for this course. Knowing more predicted *perceiving* more. It did not predict *doing* more, and the authors looked for the relationship and did not find it.

If you guessed yes, you are in good company, because it is what nearly everybody assumes and it is the assumption the rest of this lesson has to work around rather than lean on.
:::

Then the finding that cuts the other way. They found **no direct relationship between technical background and the protective actions people actually took**. Knowing more predicted noticing more. It did not predict doing more.

The second result is newer and more uncomfortable. In 2025 a team published an eight-month randomised experiment run at a university health system with more than 19,500 employees.[4] Ten simulated phishing campaigns, real control groups who got no training, random assignment of who got what. They found no significant relationship between having recently completed the annual awareness training and the chance of failing a simulation. The embedded training, the page you land on after you click, produced a statistically significant improvement of about **two percentage points** in absolute terms. Over the eight months, more than 56% of employees clicked a phishing link at least once, trained or not.

I have read the abstract and the opening pages of that paper rather than the whole of it, and I'm telling you that because the number is doing real work in this lesson and you're entitled to know how far I went.

Hold those two results together. Understanding doesn't reliably produce protective behaviour. The annual training organisations run moved the outcome not at all, and the page you land on after clicking moved it about two points. A course that opens by promising that understanding will keep you safe is promising something two of its own load-bearing sources decline to support.

:::callout What the phishing result does not say
The authors are careful and so should we be. They don't claim people cannot learn to spot a fake message. Earlier laboratory and small-scale studies consistently found that training improves how accurately people sort real messages from fakes, and a study of 7,089 Korean organisations found a correlation between time spent on training and fewer incidents. Both of those are set out by the 2025 authors themselves, in their own paper, against their own result.[4] What they claim is narrower: the training products currently deployed, at the intensity organisations deploy them, do not move the outcome much. Those are two different claims, and anyone who collapses them into "training is useless" has gone further than the evidence.
:::

## So what is this course for

Two things, and there's no third.

**It changes what you can diagnose.** When something goes wrong, a working picture of where files live and who sits in a network path is the difference between a person who can say what failed and a person who can only say that it broke. Neither study above touched this. They measured protective behaviour: did you click, did you turn the thing on. Diagnosis is a separate skill and nobody has shown it to be unteachable. By lesson 5 you'll be able to look at two error messages that both say something could not be found and tell me which one means the computer could not find the *program* and which means the program could not find the *file*. That's worth an evening on its own.

**It supports the handful of choices you make once.** The defensible reading of the research is that structural defences beat vigilance. A password manager, a passkey, multi-factor authentication turned on, updates applied automatically, a backup you have actually restored from. Each of those is a decision made once, on an afternoon, and it then keeps working while you're tired and distracted and in a hurry. Vigilance is the thing that has been measured and found wanting, because vigilance has to be produced fresh every time. A person who understands why those five things work will set them up and keep them. That is a claim about setup, and the phishing result is specifically about attentiveness.

So I'll write it down plainly, in the first lesson, rather than let you infer it in the tenth. This course won't make you a person who never clicks the wrong thing, because in the best-measured study we have, over 56% of employees clicked at least once in eight months, trained or not. It will make you a person who can tell what happened, and who set five things up so that the click costs less.

## Why a wrong picture produces confident wrong behaviour

This one is worth having in your hands, because you'll use it on yourself.

Advice arrives as a rule. Do not click links in emails you were not expecting. Use a different password on every site. Back up your files.

A rule is stored, and later a situation comes along, and something has to decide whether this is the kind of situation the rule is for. That judgement isn't made by the rule. It is made by your picture of what the threat is and how it works. If your picture says attackers pick targets by wealth, then "use a different password everywhere" is a rule for wealthy people, and you haven't disobeyed anything. You have correctly applied a rule you correctly judged not to apply.

So the picture, not the advice, decides what a person does.

This is also why handing someone a longer list of rules changes so little, which is the two-percentage-point result seen from the other side. You added rules. You didn't touch the thing that decides when a rule fires.

:::predict A colleague has been told six times to stop reusing one password across her accounts, and she has not. Assume she is neither stupid nor careless. What would have to be true about her picture of the threat for her behaviour to be perfectly sensible?
Something like this: that the people breaking into accounts are after money or secrets and choose targets accordingly, that she has neither, and that the realistic risk to her is somebody guessing her password rather than somebody buying it in a list of millions. Under that picture, a single memorable password is fine and eleven different ones are pointless work. Every step follows.

What's wrong isn't the reasoning. It is the second half of the picture. A great deal of credential attack never guesses anything. It takes a password stolen from one site and tries it, automatically, on hundreds of others, and the cost of trying yours is near enough zero whether you are rich or not. Change that one belief and her behaviour changes on its own, and you won't have to tell her six times.
:::

## The eight pictures people actually hold

We know what the pictures are, roughly, because somebody went and asked. Rick Wash published a study in 2010 built on 33 interviews he ran in 2007 and 2008, in three midwestern American cities, each about 45 minutes long, deliberately screening out anybody with computer training. He was after what ordinary people believe, in their own words.[1]

He found eight recurring pictures, four about viruses and four about hackers, and every person he spoke to held at least one of each. The counts below are out of 33.

**Four pictures of what a virus is.** *Generically bad* (5 people): something unpleasant, no detail, which supplies no guidance at all, so these people took no particular precautions. *Buggy software* (9): a virus is a bad program, and you have to download and run it for anything to happen, so if you are careful what you click you do not need antivirus. *Mischief* (12): viruses are made to annoy you, they come from bad neighbourhoods of the internet, and you can tell when you have one because things go wrong. *Supporting crime* (6): viruses are quiet and steal information, so scanning matters and backups do not help.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 330" role="img" aria-labelledby="folk-title folk-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="folk-title">How many of Wash's 33 interviewees held each folk model</title>
  <desc id="folk-desc">Two groups of horizontal bars, counts out of 33 interviewees, from Wash 2010. Models of what a virus is: generically bad, 5; buggy software, 9; causes mischief, 12; supports crime, 6. Models of who is attacking: graffiti artists, 8; burglars, 13; after big fish, 9; contractors, 3. Every respondent held at least one model of each kind, so the counts add to more than 33.</desc>
  <text x="14" y="24" font-size="16" font-weight="700" fill="var(--text)">What a virus is</text>
  <rect x="175" y="43" width="77" height="18" fill="var(--navy, #0f2a4a)"/>
  <text x="14" y="57" font-size="15" fill="var(--text)">Generically bad</text>
  <text x="260" y="57" font-size="15" fill="var(--text-2)">5</text>
  <rect x="175" y="73" width="138" height="18" fill="var(--navy, #0f2a4a)"/>
  <text x="14" y="87" font-size="15" fill="var(--text)">Buggy software</text>
  <text x="321" y="87" font-size="15" fill="var(--text-2)">9</text>
  <rect x="175" y="103" width="185" height="18" fill="var(--navy, #0f2a4a)"/>
  <text x="14" y="117" font-size="15" fill="var(--text)">Causes mischief</text>
  <text x="368" y="117" font-size="15" fill="var(--text-2)">12</text>
  <rect x="175" y="133" width="92" height="18" fill="var(--navy, #0f2a4a)"/>
  <text x="14" y="147" font-size="15" fill="var(--text)">Supports crime</text>
  <text x="275" y="147" font-size="15" fill="var(--text-2)">6</text>
  <text x="14" y="194" font-size="16" font-weight="700" fill="var(--text)">Who is attacking</text>
  <rect x="175" y="213" width="123" height="18" fill="var(--oxblood, #8b1e2d)"/>
  <text x="14" y="227" font-size="15" fill="var(--text)">Graffiti artists</text>
  <text x="306" y="227" font-size="15" fill="var(--text-2)">8</text>
  <rect x="175" y="243" width="200" height="18" fill="var(--oxblood, #8b1e2d)"/>
  <text x="14" y="257" font-size="15" fill="var(--text)">Burglars</text>
  <text x="383" y="257" font-size="15" fill="var(--text-2)">13</text>
  <rect x="175" y="273" width="138" height="18" fill="var(--oxblood, #8b1e2d)"/>
  <text x="14" y="287" font-size="15" fill="var(--text)">After big fish</text>
  <text x="321" y="287" font-size="15" fill="var(--text-2)">9</text>
  <rect x="175" y="303" width="46" height="18" fill="var(--oxblood, #8b1e2d)"/>
  <text x="14" y="317" font-size="15" fill="var(--text)">Contractors</text>
  <text x="229" y="317" font-size="15" fill="var(--text-2)">3</text>
</svg>

The counts add to more than 33 because everybody held at least one picture of each kind.

**Four pictures of who is attacking.** *Graffiti artists* (8): young, technical, showing off, and they hit anyone, which produces "if they want in they'll get in". *Burglars* (13): opportunists after identity information, which produces sensible avoidance. *Criminals after big fish* (9): they go after the rich and the important. *Contractors working for criminals* (3): they go after large databases, so again, not me.

Now the part that made the paper matter. Wash took twelve standard pieces of expert advice, the ordinary list, use antivirus, keep it updated, scan regularly, use a firewall, do not click attachments, be careful downloading, be careful which sites you visit, disable scripting, use good passwords, make regular backups, keep patches up to date, turn the computer off when you are not using it, and worked out, for each of his eight pictures, which pieces of advice that picture makes important, which it makes optional, and which it makes pointless.

Not one of the eight pictures makes all twelve worth doing. Each marks some of the advice as important, some as merely helpful, some as not worth bothering with, and several pieces it simply has nothing to say about.

**The advice is not being rejected out of laziness. It is being rejected rationally, given a wrong picture.** That is the finding, and it is why this course builds the picture of the machine and the network before it says a word about passwords. Fix the picture and the advice stops being arbitrary.

## Building a security plan

The people who teach this best do not start with a list of precautions. They start by making you say what you are protecting and from whom, because the right precautions genuinely differ between a journalist in a hostile country and a retired teacher with a tablet. The Electronic Frontier Foundation's *Surveillance Self-Defense* opens with an exercise it calls [Your Security Plan](https://ssd.eff.org/module/your-security-plan), five questions, and I am going to work one in front of you rather than rebuild theirs.[5] Security people usually call the result a **threat model**, and later lessons use that name for what you are about to build.

Our subject is an ordinary person. Call her Ruth. She has a laptop, an email account she has had since 2009, a banking app on her phone, and about fifteen years of family photographs, most of them in one folder and some of them nowhere else.

**1. What do I have that is worth protecting?** Not "my data". Name the things. The photographs, which cannot be replaced. The email account, which is the recovery address for everything else she owns. Access to about £4,000 in a current account. Her employer's files, which she sometimes opens at home.

**2. Who might want it?** Again, specifically. Nobody is sitting in a basement thinking about Ruth. But there are automated operations that try stolen passwords against every bank they can reach, and there are people who send a hundred thousand invoices hoping four hundred get paid, and there is her ex-husband, who knows the name of her first school.

**3. How likely is it that they will try?** The automated attempts are not likely, they are continuous, and they are already happening to the email address she has had since 2009. The targeted effort from a person who knows her is unlikely but not fanciful, and it is the only one on the list that can answer a security question about her first school.

**4. How bad is it if they succeed?** Rank them. Losing the photographs is permanent and the worst of the four. Losing the email account is nearly as bad, because it would hand over everything that recovers through it. The £4,000 is unpleasant and usually recoverable in part, because card and bank fraud rules return some of it, which is why the money ranks below the photographs rather than above them. How much comes back depends on the country, the product and how fast it is reported, and this course is education rather than legal or financial advice: for what you can actually claim, read your own bank's published terms. Her employer's files are not really her risk to carry, and she should say so to her employer.

**5. How much trouble am I willing to go to?** This is the question that stops a plan being a fantasy. Ruth won't run her own encrypted mail server. She will spend one Saturday afternoon and about £3 a month.

Which gives an actual plan, in priority order: get the photographs onto a copy that lives somewhere else; put the email account behind something stronger than a password; stop using answers to security questions that her ex-husband knows; and leave the employer's files alone, because it isn't her problem to solve.

And one honest conclusion, which a plan is allowed to reach: some threats are not worth defending against. If a national intelligence service wants Ruth's photographs, Ruth isn't going to stop them, and a plan that pretends otherwise will collapse under its own weight and take the achievable parts with it.

## The attacker that slips through the plan

Now the case the plan doesn't catch.

Go back to Wash's 33 interviews. In the fourth section of his paper he points out something not one of his 33 respondents could conceive of: an attacker who wanted only their internet connection, who does no damage to the machine, takes nothing off it, spreads with nobody sitting at a keyboard, and uses the machine to attack someone else.[1]

That is a botnet. Wash opens his paper by saying he wrote it because home computers were being recruited into them, so this is not an exotic case; it is part of why anybody went and asked these questions in the first place.[1]

Run it against Ruth's plan and watch it walk through.

*What do I have that is worth protecting?* Nothing it wants. It isn't interested in her photographs. *Who might want it?* Nobody who has heard of her. *How likely are they to try?* The question doesn't even parse, because nobody is deciding about Ruth. *How bad if they succeed?* Her laptop runs a little slower. She might get her mail service suspended, or a letter from her broadband provider, months later, that she won't understand.

Every question gets a small answer, and the plan quite correctly tells her not to bother.

The failure isn't in Ruth's answers. It is in the first question's subject. "What do I have that anyone would want" assumes the attacker is after contents. Add a line:

**What can my machine and my connection be used for, by someone who does not care who I am?**

Answer that for Ruth and the picture changes. Her laptop can send mail, so it can send a great deal of spam. It can be pointed at somebody else's website along with a hundred thousand others. It sits on an ordinary home connection, so it can be used to make somebody else's traffic look like an ordinary household's. None of that requires her to be interesting. It requires her to be reachable, and she is.

This is also the answer to "I am not a target". You're not a target. You're a resource, and there is no shortlist to be left off.

:::checkpoint Which of Ruth's four priorities changes once the sixth question is added, and is there anything new on the list?
Nothing on the original list gets dropped, which is worth noticing, because a new threat usually adds rather than replaces. What changes is that two items she had no reason to care about now have one. Automatic updates matter, because indiscriminate compromise works by finding machines that are behind on a known flaw rather than by choosing them. And the account on her laptop that she uses every day should not be the one with full power over the machine, so that a program she runs by accident cannot quietly install itself. Lesson 9 does that one properly.

Neither of those is a vigilance task. Both are afternoon decisions that keep working afterwards, which is the pattern this course is arguing for.
:::

## What people get wrong

**"I am not a target."** Wash's big fish picture, 9 people out of 33, and the most consequential wrong belief in the subject. The correction is the paragraph above: most compromise is indiscriminate and automated, and the attacker often wants the connection rather than anything on the machine. Being unimportant protects you from being chosen. It doesn't protect you from being scanned.

**"An infection would announce itself."** The mischief picture, 12 out of 33, and it describes an older kind of attacker better than a current one. When a virus was made to annoy you, being obvious was the point. Once there is money in it, being noticed is a cost: a machine that is noticed gets cleaned, and a cleaned machine stops earning. The economically rational malware is quiet, and "my computer is running fine" is evidence about an attacker who wanted your attention.

**"If I am careful what I click, I am safe."** The buggy software picture, 9 out of 33. This one is dangerous precisely because it's half right; care does prevent a lot. But it treats every compromise as something you consented to, so it can't see a flaw in software you never chose to run, and the people holding it concluded that antivirus was unnecessary.

**"If they want in, they'll get in, so why bother?"** The graffiti picture, 8 out of 33, and the failure mode this entire course has to avoid. It is fatalism dressed as realism, and it treats all attackers as equally determined. Hardly any of them are determined about you specifically. Most are running a process that takes whatever is cheap, which means small amounts of friction do a great deal of work, and a locked door does not have to be a bank vault to be worth more than an open one.

**"Security is a personality trait."** That careful people are safe and the ones who get caught weren't paying attention. Over 56% of employees at that health system clicked at least once in eight months, at work, while being watched, and whether or not they had been trained. That figure is the argument, and it is also the compassion. Nobody in this course is going to tell you that being deceived says something about your intelligence, because the measurement says otherwise and because the shame is itself dangerous: it is what stops people saying "I think I just did something stupid" in the twenty minutes when saying it still helps.

## What this course covers, and what it leaves out

Thirteen lessons. The first half builds the picture of the machine: where a file actually is, what its name does and does not tell you, how to open a terminal and stand somewhere in that same tree, how to read a command and its error, and how to make the terminal do something the mouse cannot. The second half does the same for the network: what happens between typing an address and seeing a page, what encryption and a private window and a virtual private network each hide and from whom, where software comes from and what you grant when you install it, what actually protects an account, how a con is built, how to keep your own data alive, and what a service already holds about you.

Three things it leaves out, and you should know before you start.

**It teaches the desktop and laptop model of a computer.** Lessons 2 to 7 assume a machine with a file system you can see and a terminal you can open. If your only computer is a phone, you cannot do those lessons or the terminal half of the project, and I'm not going to pretend otherwise. The reason it is still the model to learn is that a phone hides a file system, it doesn't lack one. Every service you will meet, a web server, a shared drive, an email attachment, a code repository, is organised on the model lessons 2 and 3 teach. Learn it once on a machine that shows it to you, and a phone's document picker becomes comprehensible rather than arbitrary. Learn only the phone's model and you've no account of where anything is.

UNESCO reached the same conclusion from a different direction. When it built its digital literacy framework in 2018 for measuring progress against a UN development goal, it added a whole competence area *below* the European framework's five, called "devices and software operations", on the grounds that outside high-income countries you can't assume it.[6] That one I know at summary level rather than from the framework document itself. The floor is lower than most curricula think. This course starts at that floor.

**It does not cover making things or looking after yourself online.** The European framework treats content creation and digital wellbeing as core parts of digital literacy, and this course teaches neither. That's a choice about scope, not a judgement about importance.

**Its numbers go stale faster than anything else we teach.** The minimum password length in the American federal guidance changed in 2025. Phishing counts are published quarterly. Adoption figures are annual. So every figure in this course is written with its year inside the sentence you read, not tucked into a footnote, and you'll see that convention throughout. When you meet a number here without a year, that is a defect and the feedback form at the bottom of the page is the right place to say so.

## Practice

:::exercise Write your own security plan
Take 30 minutes over this, on one page, on paper if you can. Keep the page. Lessons 8, 10, 11 and 13 all send you back to it.

1. Write down what you have that is worth protecting. Name the actual things, not categories. If you can't name where something lives, write that down too; lesson 3 is about exactly that problem.

2. Beside each one, write who might want it. Include automated operations that have never heard of you, and include any person who knows your history well enough to answer a security question about you.

3. For each, write how likely an attempt is. Distinguish "unlikely" from "already happening continuously", because those need different responses.

4. Rank them by how bad it would be. Be specific about what "bad" means: permanent loss, recoverable money, embarrassment, loss of access to everything else.

5. Write what you are actually willing to do. Money per month, hours once, hours per week. If you write down something you will not do, the plan is decoration.

6. Add the sixth line: what can my machine and my connection be used for by somebody who does not care who I am? Then look back at your rankings and see whether anything moves.

Finish with one sentence naming a threat you have decided not to defend against, and why that is a reasonable decision rather than a lapse.
:::

:::exercise Find the picture behind a rule you ignore
Take 15 minutes. This is the harder of the two and it is the one that will still be useful in a year.

1. Write down one piece of security advice you have been given more than once and do not follow. Be honest; everybody has one.

2. Now write the picture of the threat that would have to be true for your non-compliance to be sensible. Not an excuse. A model: who the attacker is, what they want, how they choose, what happens if they succeed.

3. Ask which part of that picture you would actually defend if I disagreed with it, and which part you're holding because nobody ever put it in front of you.

4. Write one sentence saying what evidence would change your mind, and where you would go to look for it.
:::

## Connections

This lesson governs the rest of the course. The security plan you wrote comes back in lesson 8, when you can finally say what encryption and a private window and a virtual private network each hide and from whom; in lesson 10, when you place your own accounts on a ladder that runs from a reused password to a passkey; in lesson 11, when a message is trying to get you to act; and in lesson 13, when you read what a service already holds about you.

Lesson 2 starts building the picture, on the nearest thing to hand: where a file on your own machine actually is.

If you have taken the earlier Term 1 courses, three things carry straight over. How to Learn Anything's retrieval and spacing are why this course asks you to predict before it tells you. Reading Well lesson 9 taught you to read a source from its attribution outward, and you'll need it the first time somebody sends you a statistic about cybercrime. And Logic and Argument lesson 9 gave you four rules for judging a source, which this course applies rather than re-teaches, most sharply in lesson 11. If you haven't taken them, nothing here depends on them.

## Go deeper

- **Rick Wash, "Folk Models of Home Computer Security" (2010)**, free from [the author's own copy](https://www.rickwash.com/papers/rwash-homesec-soups10-final.pdf). Plainly written, no mathematics. Read section 4 if you read nothing else. It's the source of most of this lesson.
- **EFF, [Your Security Plan](https://ssd.eff.org/module/your-security-plan)**. Twenty minutes, and the rest of *Surveillance Self-Defense* is organised around it. If you want scenarios for a particular situation, a protester, a journalist, someone leaving an abusive relationship, they are there and they are good.
- **Kang, Dabbish, Fruchter and Kiesler, ["My Data Just Goes Everywhere"](https://www.usenix.org/system/files/conference/soups2015/soups15-paper-kang.pdf) (2015)**. Worth it for the drawings alone. The participants' own descriptions of the internet are the best evidence I know for why lesson 7 exists.

## Sources

1. Rick Wash, "Folk Models of Home Computer Security", *Symposium on Usable Privacy and Security*, 2010, pages 1 to 11. Read in full. Supplies the eight models and their counts out of 33 interviewees, the finding that advice is rejected rationally given a wrong model (Table 3), and the botnet argument in section 4.
2. Ruogu Kang, Laura Dabbish, Nathaniel Fruchter and Sara Kiesler, "'My Data Just Goes Everywhere': User Mental Models of the Internet and Implications for Privacy and Security", *Symposium on Usable Privacy and Security*, 2015, pages 39 to 46. Read in full. Supplies the 28 participants, the split between simple and articulated models, the difference in how many parties people named, and the finding of no direct relationship between technical background and protective action.
3. Iulia Ion, Rob Reeder and Sunny Consolvo, "'...No one Can Hack My Mind': Comparing Expert and Non-Expert Security Practices", *Symposium on Usable Privacy and Security*, 2015. Abstract read in full; the proceedings PDF was not opened, so no per-practice percentages are quoted here, only the ranking, which the abstract states. Supplies the two lists of three and the group sizes.
4. Grant Ho and colleagues, "Understanding the Efficacy of Phishing Training in Practice", *IEEE Symposium on Security and Privacy*, 2025. Abstract and first two pages read; the full results sections were not. Supplies the eight-month design, the 19,500-plus employees, the ten campaigns, the absence of a significant relationship with annual training, the roughly two percentage point effect of embedded training, and the figure of more than 56% clicking at least once.
5. Electronic Frontier Foundation, *Surveillance Self-Defense*, "Your Security Plan" (ssd.eff.org), CC BY. Index page read. Supplies the five questions, which are used here and not reproduced.
6. UNESCO, *Digital Literacy Global Framework*, 2018, developed for SDG indicator 4.4.2. Read at search-summary level. Supplies the addition of competence area 0, "devices and software operations", below the European framework's five.
