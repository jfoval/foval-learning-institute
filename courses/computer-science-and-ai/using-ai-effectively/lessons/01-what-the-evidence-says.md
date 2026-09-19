---
title: What this is for, and what the evidence actually says
minutes: 80
objectives:
  - State what the measured studies show about whether these systems make people more productive, including the two results that point opposite ways, and say what reconciles them
  - Say what this course claims and what it refuses to claim, and identify a claim about these systems that the course could not support
  - Write down one task you already use one of these systems for and one you would never use it for, with the reason for each, as a baseline you will come back to
quiz:
  - q: >-
      A hospital trust is deciding whether to buy an AI writing tool for its administrative staff. A
      manager cites a trial where consultants finished 25% faster with one. What is the first thing
      to ask about that trial before it settles anything?
    options:
      - Whether the consultants were told they were being measured, since that alone can produce the effect
      - Whether the tasks in the trial resemble the work the administrators actually do all day
      - Whether the trial used the same product the trust is being sold
      - Whether the consultants were paid for taking part, since payment changes effort
    answer: 1
    explain: >-
      The 25% figure came from tasks chosen to sit inside what the system was good at, and the same
      study found a large drop on one task chosen to sit outside it. So the figure travels only as
      far as the resemblance between those tasks and these ones does. The others are reasonable
      questions about any trial and none of them is the one that decides this. Whether it was the
      same product matters less than people think, because the frontier moves with the task more than
      with the brand.
  - q: >-
      A developer says an assistant has made her much faster, and she is sure of it because she has
      been using one every day for a year. On the evidence in this lesson, what is the honest reply?
    options:
      - She is probably right, because nobody knows their own work better than the person doing it, and a year is a long time to be wrong about something
      - Daily use for a year is a far longer exposure than any trial can afford, so her experience outweighs a study that ran for a few weeks
      - Her confidence is not evidence either way, and the one trial that checked found people wrong about this in both directions
      - She is probably wrong, because the trial found experienced developers were slowed down
    answer: 2
    explain: >-
      The measured gap is the point. Developers in that trial predicted a 24% speed-up beforehand,
      were 19% slower in fact, and afterwards still believed they had been sped up by 20%. That says
      their sense of it was not tracking the outcome. It does not say she is slower, which is what
      the last option gets wrong by generalising sixteen people onto her. The first two treat the
      feeling of speed as data.
  - q: >-
      Which of these claims could this course support, given the evidence it rests on?
    options:
      - Learning to use these systems well will make you faster at your work, which is what the consultants study measured
      - People who understand these systems avoid the mistakes that other people make
      - A person who can tell which side of the frontier a task falls on will get better results than one who cannot
      - Using one of these systems is a net benefit for most knowledge workers, taking the gains and the losses together
    answer: 2
    explain: >-
      The frontier claim is about telling two kinds of task apart, which is what the studies actually
      distinguish, and it is the claim this course is built to deliver. The first promises a speed-up
      that one trial found and another reversed. The second is the assumption the course opens by
      declining. The fourth is a summary of a literature that does not yet support a summary, since
      the same study found gains on one task and a large loss on another.
  - q: >-
      Two results. Consultants using AI were 25.1% faster on eighteen tasks chosen to be inside its
      competence, and sixteen experienced developers were 19% slower on work in repositories they
      already knew well. What reconciles them?
    options:
      - The consultants were using a better model than the developers were, and the difference between the two is the whole result
      - The developers were resistant to the tool and the consultants were not
      - Writing is easier for these systems than programming is, so a study of writing tasks will always beat a study of code
      - The gains showed up on work near the edge of what the person could already do, and the losses on work they had already mastered
    answer: 3
    explain: >-
      The reconciliation is about the person as much as the task. Reading, checking and correcting an
      answer has a cost, and that cost is worth paying when producing the work yourself would cost
      more, and not worth paying when you could have done it quickly and well. The first two are
      speculation the studies do not support. The third is tempting and does not survive the detail:
      the consultants' analytical tasks and the developers' work are not divided by subject.
  - q: >-
      A learner reads that this course will not promise to make them faster, and concludes that the
      course thinks these systems are not worth using. What has gone wrong?
    options:
      - Nothing has gone wrong, since a course that will not promise a benefit is saying, in a polite way, that the benefit is not there
      - Declining to promise an average is not the same as denying a benefit; which task you are on decides it
      - The course does promise a speed-up, but only for people who finish all eleven lessons
      - The course is neutral on the question because it has no evidence either way about whether these systems help anybody
    answer: 1
    explain: >-
      There is a great deal of evidence, and some of it is about large gains. What there is not is a
      single number that applies to a person whose work the studies never looked at. The second
      option states the position. The first treats a refusal to average as a verdict. The third
      invents a promise. The fourth says the evidence is absent when the problem is that it points
      two ways for two good reasons.
  - q: >-
      You are asked to name something this course will not cover. Which of these is out of scope, and
      why?
    options:
      - How to check an answer you could not have produced yourself, because that needs subject expertise
      - Why these systems produce confident false answers, because the explanation is mathematical
      - Whether to use one of these systems at all, because that is a decision for the reader
      - Generating images and audio, because the course is about systems that work in text
    answer: 3
    explain: >-
      Scope is text, and the rest belongs to a later course. Checking is lesson 8 and is the hardest
      thing here, so the first is wrong. Confident false answers are lesson 7 and the explanation
      needs no mathematics, so the second is wrong. The third is subtler and is also wrong: the
      course covers that decision at length and declines to make it for you, which is not the same as
      leaving it out.
---

Two results, from two trials, both careful, both randomised, and they point in opposite directions.

**The first.** In a [study run with Boston Consulting Group](https://doi.org/10.1287/orsc.2025.21838) and published in 2026, 758 consultants were given eighteen realistic consulting tasks. Some had no AI, some had GPT-4, and some had GPT-4 plus a short overview on how to prompt it. On those eighteen tasks, the ones with AI completed 12.2% more of them, completed them 25.1% faster, and their work was graded substantially better: the control group averaged 4.37 out of 10 from the graders, and the AI groups came in about 30% above that.[1]

**The second.** In 2025, a group called [METR](https://arxiv.org/abs/2507.09089) ran a randomised trial with sixteen experienced open-source developers, on 246 real tasks in repositories they had been working in for years. Tasks were randomly assigned to allow or forbid AI tools. **Allowing the tools made the work take 19% longer.**[2]

Both of those are true. Neither is the headline you have been shown.

And there is a third number, from the second study, which is the one that should make you careful about your own opinion on this. Before the trial, those developers predicted the tools would make them **24% faster**. Afterwards, having in fact been slowed by 19%, they still estimated they had been sped up by **20%**.[2]

They were not being dishonest. They were doing what everybody does, which is to judge a tool by how it feels to use.

## What this course is for

It isn't going to promise you a speed-up, because the evidence doesn't support one as a general claim about a person whose work nobody has studied. What it promises is narrower, and it is the thing those two studies actually distinguish between.

**You will be able to tell which kind of task you are on.** The consultants gained on tasks chosen to sit inside what the system was good at, and in the same study, on one task deliberately chosen to sit outside it, the people with AI were **right 60% and 70.6% of the time against a control group's 84.5%**, a drop of about nineteen percentage points.[1] Same people, same afternoon, same tool. The difference was the task. Knowing which side you are standing on is most of the skill, and lesson 6 is where you get it properly.

**And you will be able to check what comes back.** That is lesson 8, it is the hardest thing in the course, and it is the one that survives being wrong about everything else here. A person who can check an answer can use a tool they do not trust.

Those are the two claims. Everything else in this course serves one of them.

:::predict Before you read on: which of those two studies do you think is more likely to describe your own work, and why?
There's no right answer here, and writing one down is the point. What you should notice is which features you reached for when you decided.

If you thought about the *subject* of the work, consulting against software, that's the instinct this course will spend lesson 6 taking apart, because it isn't the thing that divides the two results.

If you thought about how familiar the work was to the person doing it, and how much of it you could already do well yourself, you have arrived at the reconciliation two sections early.
:::

## What reconciles them

The two studies don't contradict each other, and the shape of the agreement is worth having on the first page, because it is the frame for the whole course.

**The gains show up on work near the edge of what the person can already do. The losses show up on work they had already mastered.**

Think about what it costs to use one of these systems on a piece of work. You write the request. You read what comes back. You check it. You correct it, or you throw it away and ask again. That cost is roughly constant. What varies is what it's being compared against.

If producing the work yourself would have taken an afternoon and a lot of effort, the reading-and-checking cost is small against that and you come out ahead. If you could've done it yourself in eleven minutes and done it right, the reading-and-checking cost is most of eleven minutes, and you've added a step and gained nothing.

The consultants were doing tasks BCG uses in its own hiring, which are hard and unfamiliar by design. The developers were doing work in code they had written and maintained for years. That's the difference, and it isn't about subject matter.

**Say plainly what that paragraph is.** It's this course's reading of two studies, not a finding either study reports. Neither set of authors puts it that way. It's the best account I can give of why two careful trials came out opposite, and you should hold it the way you'd hold any reasonable explanation nobody has tested: use it, and be ready to drop it.

:::callout One result from that first study that almost nobody quotes
The consultants were split three ways, not two, and the third group got GPT-4 **plus a short overview on how to prompt it**.

Inside the frontier, that group did best of all.

On the task outside the frontier, that group did **worst**. Both AI groups were significantly less likely to be correct, and the group with the prompting overview dropped further than the group without it, 24.5% against 13.9%.[1]

The people who had been taught to use the tool better were the ones most damaged by using it on the task where it should not have been used.

That result is the reason this course is shaped the way it is, and it's the one to carry out of this page if you carry only one. Lessons 4 and 5 will teach you to ask for things well. Lesson 6 will teach you when not to ask at all, and if you take only one of those two, take the second.
:::

## What the studies can and cannot tell you

You've now met four numbers from two studies. Before you carry any of them anywhere, it's worth being exact about what a trial like this is and what it isn't, because this is a subject where numbers travel a long way from the thing they measured.

**A randomised trial answers one narrow question well.** Both studies assigned people to conditions at random, which means the difference in outcome is caused by the condition rather than by who volunteered. That's a genuinely strong design and it's why these two studies are worth more than a hundred articles about how transformative this all is.

**And the narrowness is the price.** The consultants study is 758 management consultants at one firm, on tasks written for the experiment, using GPT-4, with data gathered in 2023. The developers study is **sixteen people**. Sixteen. On work they knew intimately, with tools available in early 2025.

So neither of them is a claim about you, and a lesson that told you otherwise would be doing the thing this course exists to stop.

What you do with a study that isn't about you is not ignore it. It's read what it measured, and ask how far that reaches.

**And there's a third study worth one line**, because it's a second sighting of the same pattern rather than a third opinion. In 2023, 444 professionals were given writing tasks from their own occupations, and half were randomly given ChatGPT. That half finished **37% faster**, taking 10 minutes off a control average of 27, and their work was graded **0.45 standard deviations higher**.[3]

The detail inside that is better than the headline. The people who'd scored *low* on the first task got both faster and better. The people who'd scored *high* kept their grade and got much faster.[3] So the gap between them closed, and it closed because the already-good stopped spending as long, not because they improved. The consultants study found the same shape: the biggest beneficiaries were the ones in the bottom half of the baseline assessment, and the top half gained too, less.[1]

**Two studies finding the same pattern is worth more than either finding it alone.** That is the pattern worth remembering from this section: these systems appear to compress the distance between people, lifting the least practised furthest. Whether you find that cheering or alarming is a separate question, and it isn't one this course will answer for you.

:::predict Somebody tells you that a new model scored 92% on a professional benchmark, so it can now do that profession's work. What is missing from that inference?
Several things, and lesson 11 takes them all properly. The quickest one is this: a benchmark is a set of questions somebody chose, and a profession's work isn't a set of questions somebody chose.

The second is that "can do the work" isn't the claim the trials above measured. The consultants study didn't ask whether GPT-4 could be a consultant. It asked what happened to consultants who used it, which is a different question with a much more interesting answer, since the answer was "it depends which task, and by nineteen points".

Hold onto the habit rather than the example: when somebody reports a capability, ask what was measured, on what, and when.
:::

## What this course covers, and what it leaves out

Eleven lessons. The first half is about the machinery and how to work it: what the system is doing when it answers, what it can see, how to ask for something, what examples and intermediate steps do. The second half is about judgement: which tasks it is reliable on, why it produces confident false answers, how to check one you could not have produced yourself, when not to use it at all, what happens to what you type in, and how to read anybody's claim about any of it.

Four things it leaves out, and you should know before you start.

**It is about systems that work in text.** Generating images, audio and video is out, and so are systems that go off and take actions on their own. Those are real and they're a different course. "Building with AI", later on the Core, takes them.

**It is not about building anything.** No interfaces, no code, no running a model yourself.

**It doesn't name a product or recommend one.** It says "the system you use", and every exercise is written to work on whichever one you've got. That's deliberate. The market moves faster than a lesson does, plenty of readers didn't choose what they use because their employer chose it, and a course that reads as an advertisement for a product is doing something this institute doesn't do.

**And it doesn't cover the ethics of how these systems were built**: whose writing was used to train them, what that means for copyright, what it does to the people whose jobs are affected. Those are serious questions and this course isn't the place where they get a serious answer. It covers what happens to *your* data when you type it in, which is lesson 10, and it stops there.

:::callout Two conventions this course follows, and why
**Every claim about what these systems can do carries a model name and a date.** Not "current models can" but "GPT-4, in tasks run in 2023". This is Digital Literacy's habit of dating every figure with one field added, and it exists because a sentence about capability is a sentence about a particular thing at a particular moment. When you meet a capability claim here without a model and a date, that's a defect, and the feedback form at the bottom of the page is the right place to say so.

**Anything that goes stale lives in lesson 11.** The other ten lessons are written so their arguments survive a better model arriving, because they're about mechanism, about what a task needs, and about what a person should do. If this course is still useful in three years, that's why.
:::

## What people get wrong

**"It makes everybody faster."** One trial found 25.1% faster and another found 19% slower, and both were randomised. Anybody quoting one of those without the other is quoting the half they liked.

**"The studies show these tools do not work."** Same problem in the other direction. The consultants study found large, consistent gains across creative, analytical, writing and persuasive tasks, and checked that they weren't just spelling and grammar.[1]

**"I can tell whether it is helping me."** Sixteen developers thought they were 20% faster while being 19% slower.[2] That's the single most useful thing on this page, and it applies to you, including now you've read it.

**"This course will teach me the prompts that work."** It'll teach you four or five moves that follow from how the thing works, which is a much smaller number than you'll find elsewhere and a much more useful one. One catalogue published in 2024 names fifty-eight separate prompting techniques.[4] Fifty-eight named techniques for one activity is what a field looks like before it knows which of them matter.

**"Understanding how it works will make me use it better."** Careful. This is the assumption the course is built on, and I owe you the same warning [Digital Literacy](/courses/digital-literacy/) opens with: in a different subject, understanding predicted *noticing* more and didn't predict *doing* more. What the evidence here supports is narrower, and it's what the overview result above shows: knowing how to ask well didn't stop people using the tool on the wrong task, and it made the damage worse. Understanding where the frontier is, which is a different thing from understanding the machinery, is what this course is actually selling.

## A gap in the evidence, named now rather than discovered later

Every study in this lesson ran on management consultants, professional writers, experienced software developers, or, in a study you will meet in lesson 9, high school mathematics students.

**Nobody has measured what happens to somebody with no technical background using one of these systems for ordinary work.** That's most people, and it may well be you.

So the honest position is that this course's advice rests on studies of populations you may not belong to, and on a mechanism that's the same for everybody. The mechanism is the firmer half, which is one reason lesson 2 sits where it does.

## Practice

:::exercise Write your baseline
Take 20 minutes. Keep what you write, on paper or in a file. Lesson 6 asks for it back, lesson 11 asks you to write it again from memory, and the course project opens with it.

Two columns.

**On the left: three tasks you already use one of these systems for.** Real ones, from the last month. Beside each, one sentence on why you use it there.

**On the right: three tasks you would not use one for.** Also real, also with a reason.

Then two more things, and these are the ones that will be worth something later.

1. **Mark each entry as a guess or a finding.** A finding means you tried it and saw what happened. A guess means you assumed. Be honest. Most people's lists are almost all guesses, and that's the normal state.

2. **Pick the one entry you are least sure about**, from either column, and write one sentence saying what would change your mind about it.

That last sentence is the whole method of this course in miniature. If you can't say what would change your mind, you don't have a view. You have a habit.
:::

:::exercise Find a claim and take it apart
Take 15 minutes.

Find one claim about what these systems can do. Anywhere: a news article, a colleague, a product page, a post. Write it down word for word.

Then answer three questions about it.

1. **What exactly was measured, and on what?** If you cannot tell from the claim, that is the answer.

2. **Which model, and when?** Again, if it doesn't say, write "not stated".

3. **What would have to be true for this to apply to your work?**

Keep this too. Lesson 11 is built on it, and you'll find it much easier there for having done it cold now.
:::

## Connections

**Back.** This is the first lesson, so nothing here depends on anything in the course. It leans on three earlier courses on the Core and re-teaches none of them. [How to Learn Anything](/courses/how-to-learn-anything/) taught you that how a study method feels is a poor guide to whether it's working, which is exactly the METR result arriving in another subject. [Logic and Argument](/courses/logic-and-argument/) taught you what makes evidence bear on a claim. [Digital Literacy](/courses/digital-literacy/) taught you to ask who's making a claim and what they measured.

**Forward.** Lesson 2 explains what the system is actually doing when it answers, which is where the jagged frontier comes from. Lesson 6 takes the frontier properly and asks for your baseline back. Lesson 9 is about the cost of using one while you are learning something, which is the other half of the decision this lesson opened. Lesson 11 returns to the evidence with nine lessons behind you.

## Go deeper

- **Dell'Acqua and colleagues, "Navigating the Jagged Technological Frontier"** (*Organization Science*, 2026). Open access and readable. Section 5 is the part worth your time, because it describes the outside-the-frontier task in enough detail that you can see why it was hard.
- **Becker, Rush, Barnes and Rein, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"** (arXiv, 2025). Read it for how carefully the authors resist their own headline. Sixteen people is sixteen people, and they say so.
- **[NIST AI 600-1, the Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1)** (2024). Free, about sixty pages, and the only document in this course you could cite at work. Section 2 lists twelve risks and is the best short map of what can go wrong.

## Sources

1. Fabrizio Dell'Acqua, Edward McFowland III, Ethan Mollick, Hila Lifshitz, Katherine C. Kellogg, Saran Rajendran, Lisa Krayer, François Candelon and Karim R. Lakhani, "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality", [*Organization Science*, published online 11 March 2026](https://doi.org/10.1287/orsc.2025.21838). Abstract, design and results read. Supports: the 758 subjects, three conditions, eighteen inside-frontier tasks, 12.2% more tasks completed, 25.1% faster, the 4.37 control mean and the roughly 30% quality gain, the 84.5% against 60% and 70.6% correctness outside the frontier, and the 24.5%-against-13.9% overview result. **Note the paper's abstract says "19% less likely" where its results section gives the percentage-point figures used here; the results section is the one to follow.**
2. Joel Becker, Nate Rush, Elizabeth Barnes and David Rein, ["Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"](https://arxiv.org/abs/2507.09089), arXiv 2507.09089, July 2025. Abstract read. Supports: sixteen developers, 246 tasks, 19% longer with AI allowed, the 24% forecast before and the 20% estimate after.
3. Shakked Noy and Whitney Zhang, ["Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence"](https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf), MIT working paper, 2 March 2023. Abstract and results read; the peer-reviewed version in *Science* 381 (2023), 187 to 192, could not be opened, so this is the working paper. Supports: 444 professionals, 10 minutes off a 27-minute control average (37%), grades up 0.45 standard deviations, and the split between low-scoring and high-scoring participants. **The "18% higher quality" figure that circulates is not in this paper**; quality is reported in standard deviations throughout.
4. Sander Schulhoff and colleagues, ["The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608), arXiv 2406.06608, 2024. Abstract read. Supports: the count of fifty-eight text-based prompting techniques.
5. European Union, [Artificial Intelligence Act, Article 4](https://artificialintelligenceact.eu/article/4/), applicable from 2 February 2025. Read. Not cited in the body of this lesson; recorded here because it is why some readers are taking this course at their employer's request, and lesson 10 uses it.
