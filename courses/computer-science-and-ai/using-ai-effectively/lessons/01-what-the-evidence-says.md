---
title: What this is for, and what the evidence actually says
minutes: 85
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/using-ai-effectively/01-what-the-evidence-says.mp3
objectives:
  - State what the measured studies show about whether these systems make people more productive, including the two results that point opposite ways, and say what reconciles them
  - Say what this course claims and what it refuses to claim, and identify a claim about these systems that the course could not support
  - Write down the tasks you use one of these systems for and the tasks you would not, with a reason beside each, as a baseline you will come back to
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
      - You will be able to say, before you start, which kind of task you are on and what that means for checking
      - Learning to use these systems well will make you faster at your work, which is what the consultants study measured
      - People who understand how these systems work avoid the mistakes that other people go on making
      - Using one of these systems is a net benefit for most knowledge workers, taking the gains and the losses together
    answer: 0
    explain: >-
      Notice that the key is an ability rather than an outcome. Telling the two kinds of task apart is
      what the studies distinguish and what this course can teach; whether it makes you faster on your
      own work is the thing it has just refused to promise. The speed-up answer promises what one
      trial found and another reversed. The understanding answer is the assumption the lesson opens by
      declining. And the net-benefit answer summarises a literature that does not yet support a
      summary, since one study found gains on eighteen tasks and a large loss on the nineteenth.
  - q: >-
      A paralegal of six months and a partner of twenty years are each asked to draft the same routine
      lease clause, a job the partner could do correctly in five minutes. Both use an AI assistant. On
      the account this lesson gives, what should you expect?
    options:
      - Both gain, since the tool does not know how experienced the person holding it happens to be
      - Both lose, since a legal document is the kind of work where an error costs too much to risk
      - The paralegal gains and the partner may well lose, because reading and correcting costs the partner more than drafting would
      - The partner gains more, since she can tell at a glance whether what comes back is any good
    answer: 2
    explain: >-
      Reading, checking and correcting an answer costs roughly the same whoever you are. What changes
      is what it is being compared against, and for the partner it is compared against five minutes of
      work she can do correctly. The first answer forgets that the comparison is with the person. The
      last is the tempting one, and it is half right: she can judge it faster, which is exactly why
      the checking is cheap and the drafting was cheaper. The second treats stakes as though they
      decided the question, and stakes decide how much checking to do rather than who gains.
  - q: >-
      A learner reads that this course will not promise to make them faster, and concludes that the
      course thinks these systems are not worth using. What has gone wrong?
    options:
      - Nothing has gone wrong, since a course that will not promise a benefit is saying, in a polite way, that the benefit is not there
      - The course does promise a speed-up after all, but only to people who finish all eleven of its lessons
      - The course is neutral on the question because it has no evidence either way about whether these systems help anybody
      - Declining to promise an average is not the same as denying a benefit; which task you are on decides it
    answer: 3
    explain: >-
      There is a great deal of evidence and some of it is about large gains. What there is not is a
      single number that applies to a person whose work nobody has studied. The nothing-has-gone-wrong
      answer treats a refusal to average as a verdict. The eleven-lessons answer invents a promise the
      course never makes. And the neutrality answer says the evidence is absent, when the problem is
      that it points two ways for two good reasons, which is a much more interesting state of affairs.
  - q: >-
      Four readers arrive with four questions. Which one will this course decline to answer, and what
      kind of declining is it?
    options:
      - "Which of these products should my department buy?"
      - "Why did it give me a source that turned out not to exist?"
      - "Should I let my fourteen-year-old use one for homework?"
      - "How do I know whether the summary it gave me of this report is accurate?"
    answer: 0
    explain: >-
      The product question is the one the course refuses on principle, and the refusal is a decision
      rather than a gap: it names no product, because a course that ranked them would be an
      advertisement and would be wrong within a quarter. The invented source is lesson 7 and the
      summary check is lesson 8, both squarely inside the course. The homework question is the
      interesting distractor: the course has a great deal to say about it, in lesson 9, and it will
      not make the decision for you, which is a different thing from declining to cover it.
---

The best evidence anybody has about whether these systems make people faster comes from two randomised trials. Both are careful. They point in opposite directions.

**The first.** In a [study run with Boston Consulting Group](https://doi.org/10.1287/orsc.2025.21838) and published in 2026, 758 consultants were given eighteen realistic consulting tasks. Some had no AI, some had GPT-4, and some had GPT-4 plus a short overview on how to prompt it. On those eighteen tasks, the ones with AI completed 12.2% more of them, completed them 25.1% faster, and their work was graded substantially better: graders working on a scale of 1 to 10 gave the control group an average of 4.37, and the two AI groups came in **29.9% and 33.9%** above that.[1] The authors checked that the gain was not just tidier prose, and report that the effects are "not driven by superficial spelling or grammar improvements".[1]

**The second.** In 2025, a group called [METR](https://arxiv.org/abs/2507.09089) ran a randomised trial with sixteen experienced open-source developers, on 246 real tasks in repositories they had been working in for years. Tasks were randomly assigned to allow or forbid AI tools.

:::predict Before you read the result: the developers themselves predicted, in advance, that the tools would make them 24% faster. Write down what you think actually happened, and by how much.
**Allowing the tools made the work take 19% longer.**[2]

There is a third number here and it is the one that should make you careful about your own opinion on any of this. When those same developers were asked afterwards, having in fact been slowed by 19%, they estimated they had been sped up by **20%**.[2] Two economists' panels asked to forecast the study had said 39% and 38% faster.

They were not being dishonest, and neither were you if you guessed high. Everybody judges a tool by how it feels to use, and this is the one trial that checked the feeling against the clock.
:::

Both of those results are true. Neither is the headline you have been shown.

| | The consultants | The developers |
|---|---|---|
| **Who** | 758 management consultants at one firm | 16 experienced open-source developers |
| **On what** | 18 tasks written for the experiment, chosen to sit inside the system's competence, plus one chosen to sit outside it | 246 real tasks in repositories they had maintained for years |
| **With what** | GPT-4, data gathered in 2023 | AI tools available in early 2025 |
| **Result** | 12.2% more tasks, 25.1% faster, quality up 29.9% and 33.9%, inside the frontier | 19% longer |
| **And also** | 19 percentage points *less* likely to be right on the task outside the frontier | Predicted 24% faster beforehand, estimated 20% faster afterwards |

Read the second row twice. That is where the answer is.

## What this course is for

It is not going to promise you a speed-up, because the evidence does not support one as a general claim about a person whose work nobody has studied. What it promises is narrower, and it is the thing those two studies actually distinguish between.

**You will be able to tell which kind of task you are on.** The consultants gained on tasks chosen to sit inside what the system was good at, and in the same study, on one task deliberately chosen to sit outside it, the people with AI were **right 60% and 70.6% of the time against a control group's 84.5%**, a drop of about nineteen percentage points.[1] Same people, same afternoon, same tool, and the difference was the task. Knowing which side you are standing on is most of the skill, and lesson 6 is where you get it properly.

**And you will be able to check what comes back.** That is lesson 8, it is the hardest thing in the course, and it is the one that survives being wrong about everything else here. A person who can check an answer can use a tool they do not trust.

Those are the two claims. Everything else in this course serves one of them.

:::predict Before you read on: which of those two studies do you think is more likely to describe your own work, and why?
There's no right answer here, and writing one down is the point. What you should notice is which features you reached for when you decided.

If you thought about the *subject* of the work, consulting against software, that is the instinct this course will spend lesson 6 taking apart, because it isn't the thing that divides the two results.

If you thought about how familiar the work was to the person doing it, and how much of it you could already do well yourself, you have arrived at the reconciliation two sections early.
:::

## What reconciles them

The two studies do not contradict each other, and the shape of the agreement is worth having on the first page, because it is the frame for the whole course.

**The gains show up on work near the edge of what the person can already do. The losses show up on work they had already mastered.**

Think about what it costs to use one of these systems on a piece of work. You write the request. You read what comes back. You check it. You correct it, or you throw it away and ask again. That cost is roughly constant. What varies is what it is being compared against.

If producing the work yourself would have taken an afternoon and a lot of effort, the reading-and-checking cost is small against that and you come out ahead. If you could've done it yourself in eleven minutes and done it right, the reading-and-checking cost is most of eleven minutes, and you've added a step and gained nothing.

The consultants were working on tasks written for the experiment, which were new to them that afternoon. The developers were working in code they had written and maintained for years. The difference is not about subject matter.

There is a detail in how the first study built its outside-the-frontier task that makes the same point from the other side. The authors designed it with BCG, "using as a starting point the type of business cases that BCG uses for its highly competitive job interviews", aiming at "creating a task at which knowledge workers would excel but AI would struggle".[1] So the task where AI made people worse was chosen because people are good at it. That is the reconciliation stated as a study design rather than as a theory.

That paragraph is this course's reading of two studies, and not a finding either study reports. Neither set of authors puts it that way. It is the best account I can give of why two careful trials came out opposite, and you should hold it the way you'd hold any reasonable explanation nobody has tested: use it, and be ready to drop it.

:::callout One result from that first study that almost nobody quotes
The consultants were split three ways, not two, and the third group got GPT-4 **plus a short overview on how to prompt it**.

Inside the frontier, that group did best of all.

On the task outside the frontier, that group did **worst**. Both AI groups were significantly less likely to be correct than the control group's 84.5%, and the group with the prompting overview fell furthest: it scored 60%, a drop of **24.5 percentage points**, against the other AI group's 70.6%, a drop of 13.9.[1]

The people who had been taught to use the tool better were the ones most damaged by using it on the task where it should not have been used.

That result is the reason this course is shaped the way it is, and it's the one to carry out of this page if you carry only one. Lessons 4 and 5 teach you to ask for things well. Lesson 6 teaches you to tell which tasks to ask about, and lesson 9 is about putting the thing down. If you take one half of the course, take the second.
:::

## What the studies can and cannot tell you

You have now met four numbers from two studies. Before you carry any of them anywhere, be exact about what a trial like this is and what it is not, because this is a subject where numbers travel a long way from the thing they measured.

**A randomised trial answers one narrow question well.** Both studies assigned people to conditions at random, which means the difference in outcome is caused by the condition rather than by who volunteered. That's a genuinely strong design, and it is why these two studies are worth more than a hundred articles about how much this all changes everything.

**And the narrowness is the price.** The consultants study is 758 management consultants at one firm, on tasks written for the experiment, using GPT-4, with data gathered in 2023. The developers study is **sixteen people**, on work they knew intimately, with tools available in early 2025.

So neither of them is a claim about you, and a lesson that told you otherwise would be doing the thing this course exists to stop.

What you do with a study that isn't about you is not ignore it. It is read what it measured, and ask how far that reaches.

**And there is a third study worth one line**, because it's a second sighting of the same pattern rather than a third opinion. In 2023, 444 college-educated professionals were given writing tasks from their own jobs, marketing people and analysts and HR staff rather than writers, and half were randomly given ChatGPT. That half finished **37% faster**, taking 10 minutes off a control average of 27, and their work was graded **0.45 standard deviations higher**.[3]

The detail inside that is better than the headline. The people who'd scored *low* on the first task got both faster and better. The people who'd scored *high* kept their grade and got much faster.[3] So the gap between them closed, and it closed because the already-good stopped spending as long, not because they improved. The consultants study found the same shape: the biggest beneficiaries were the ones in the bottom half of the baseline assessment, and the top half gained too, less.[1]

**Two studies finding the same pattern is worth more than either finding it alone.** What both measured, on GPT-4 and ChatGPT in 2022 and 2023, is a distance between people closing, with the least practised lifted furthest. Whether that holds for whatever you have open today is exactly the kind of question this course will keep telling you to date rather than assume. Whether you find that cheering or alarming is a separate question, and it is not one this course will answer for you.

:::predict Somebody tells you that a new model scored 92% on a professional benchmark, so it can now do that profession's work. What is missing from that inference?
Several things, and lesson 11 takes them all properly. The quickest one is this: a benchmark is a set of questions somebody chose, and a profession's work isn't a set of questions somebody chose.

The second is that "can do the work" is not the claim the trials above measured. The consultants study did not ask whether GPT-4 could be a consultant. It asked what happened to consultants who used it, which is a different question with a much more interesting answer, since the answer was "it depends which task, and by nineteen points".

Hold onto the habit rather than the example: when somebody reports a capability, ask what was measured, on what, and when.
:::

## What this course covers, and what it leaves out

Eleven lessons. The first half is about the machinery and how to work it: what the system is doing when it answers, what it can see, how to ask for something, what examples and intermediate steps do. The second half is about judgement: which tasks it is reliable on, why it produces confident false answers, how to check one you could not have produced yourself, when not to use it at all, what happens to what you type in, and how to read anybody's claim about any of it.

Four things it leaves out, and you should know before you start.

**It is about systems that work in text.** Generating images, audio and video is out, and so are systems that go off and take actions on their own. Those are real and they're a different course. "Building with AI", later on the Core, takes them.

**It is not about building anything.** No interfaces, no code, no running a model yourself.

**It does not recommend a product, and never assumes which one you have.** It names GPT-4 and ChatGPT where a study used them, because a result belongs to the thing it was measured on. It never says "use this one", and every exercise is written to work on whichever you've got. That is deliberate. The market moves faster than a lesson does, plenty of readers didn't choose what they use because their employer chose it, and a course that reads as an advertisement for a product is doing something this institute does not do.

Some readers are here because somebody told them to be. Since 2 February 2025, European law has required providers and deployers of AI systems to "take measures to support the development of AI literacy of their staff and other persons dealing with the operation and use of AI systems on their behalf".[5] That obligation is on organisations rather than on you, and it is European rather than universal, and it is why a course like this one now turns up in a staff induction.

**And it does not cover the ethics of how these systems were built, or what it costs to run them**: whose writing was used to train them, what that means for copyright, what it does to the people whose jobs are affected, what the training and the running take in energy and water, and whether the answers carry the biases of the writing they were built from. NIST's profile lists environmental impacts and harmful bias among the twelve risks it names, and this course takes neither.[6] Those are serious questions and this course isn't the place where they get a serious answer. It covers what happens to *your* data when you type it in, which is lesson 10, and it stops there.

:::callout Two conventions this course follows, and why
**Every claim about what these systems can do carries a model name and a date.** Not "current models can" but "GPT-4, in tasks run in 2023". This is Digital Literacy's habit of dating every figure with one field added, and it exists because a sentence about capability is a sentence about a particular thing at a particular moment. When you meet a capability claim here without a model and a date, that is a defect, and the feedback form at the bottom of the page is the right place to say so.

**Anything that goes stale lives in lesson 11.** The other ten lessons are written so their arguments survive a better model arriving, because they're about mechanism, about what a task needs, and about what a person should do. If this course is still useful in three years, that is why.
:::

## What people get wrong

**"It makes everybody faster."** One trial found 25.1% faster and another found 19% slower, and both were randomised. Anybody quoting one of those without the other is quoting the half they liked.

**"The studies show these tools do not work."** Same problem in the other direction. The consultants study found large, consistent gains across creative, analytical, writing and persuasive tasks, and checked that they weren't just spelling and grammar.[1]

**"I can tell whether it is helping me."** Sixteen developers thought they were 20% faster while being 19% slower.[2] That applies to you, including now you have read it.

**"This course will teach me the prompts that work."** It'll teach you four or five moves that follow from how the thing works, which is a much smaller number than you will find elsewhere and a much more useful one. One catalogue published in 2024 names fifty-eight separate techniques for prompting in text, and forty more for other kinds of output.[4] Ninety-eight named techniques for one activity is what a field looks like before it knows which of them matter.

**"Understanding how it works will make me use it better."** Careful. This is the assumption the course is built on, and I owe you the same warning [Digital Literacy](/courses/digital-literacy/) opens with. In a different subject, and on evidence that course sets out rather than this one, understanding predicted *noticing* more and didn't predict *doing* more. What the evidence here supports is narrower, and it is what the overview result above shows: knowing how to ask well did not stop people using the tool on the wrong task, and it made the damage worse. Understanding where the frontier is, which is a different thing from understanding the machinery, is what this course is actually selling.

## A gap in the evidence, named now rather than discovered later

Every study in this lesson ran on management consultants, college-educated professionals doing writing tasks from their own jobs, experienced software developers, or, in a study you will meet in lesson 9, high school mathematics students.

**Nobody has measured what happens to somebody with no technical background using one of these systems for ordinary work.** That's most people, and it may well be you.

So the honest position is that this course's advice rests on studies of populations you may not belong to, and on a mechanism that is the same for everybody. The mechanism is the firmer half, which is one reason lesson 2 sits where it does.

## Practice

:::exercise Write your baseline
Take 20 minutes. Keep what you write, on paper or in a file. Lesson 6 asks for it back, lesson 11 asks you to write it again from memory, and the course project opens with it.

Two columns.

**On the left: three tasks you already use one of these systems for.** Real ones, from the last month. Beside each, one sentence on why you use it there.

If you don't use one, this column is still yours to fill. Write three tasks somebody has asked you to use one for, or three you have considered and not done. The course is written for you as much as for anybody, and a column of things you have declined is a more interesting starting point than a column of habits.

**On the right: three tasks you would not use one for.** Also real, also with a reason.

Then two more things, and these are the ones that will be worth something later.

1. **Mark each entry as a guess or a finding.** A finding means you tried it and saw what happened. A guess means you assumed. Be honest. Most people's lists are almost all guesses, and that is the normal state.

2. **Pick the one entry you are least sure about**, from either column, and write one sentence saying what would change your mind about it.

That last sentence is the whole method of this course in miniature. If you cannot say what would change your mind, you don't have a view. You have a habit.
:::

:::exercise Find a claim and take it apart
Take 15 minutes.

Find one claim about what these systems can do. Anywhere: a news article, a colleague, a product page, a post. Write it down word for word.

Then answer three questions about it.

1. **What exactly was measured, and on what?** If you cannot tell from the claim, that is the answer.

2. **Which model, and when?** Again, if it does not say, write "not stated".

3. **What would have to be true for this to apply to your work?**

Keep this too. Lesson 11 is built on it, and you'll find it much easier there for having done it cold now.
:::

## Connections

**Back.** This is the first lesson, so nothing here depends on anything in the course. It leans on three earlier courses on the Core and re-teaches none of them. [How to Learn Anything](/courses/how-to-learn-anything/) taught you that how a study method feels is a poor guide to whether it is working, which is exactly the METR result arriving in another subject. [Logic and Argument](/courses/logic-and-argument/) taught you what makes evidence bear on a claim. [Digital Literacy](/courses/digital-literacy/) taught you to ask who's making a claim and what they measured.

**Forward.** Lesson 2 explains what the system is actually doing when it answers, which is where the jagged frontier comes from. Lesson 6 takes the frontier properly and asks for your baseline back. Lesson 9 is about the cost of using one while you are learning something, which is the other half of the decision this lesson opened. Lesson 11 returns to the evidence with nine lessons behind you.

## Go deeper

- **Dell'Acqua and colleagues, "Navigating the Jagged Technological Frontier"** (*Organization Science*, 2026). Open access and readable. Find the part describing how the outside-the-frontier task was built; it is short, and it shows you a research team deliberately constructing something people are good at.
- **Becker, Rush, Barnes and Rein, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"** (arXiv, 2025). Read it for how carefully the authors resist their own headline. Sixteen people is sixteen people, and they say so.
- **[NIST AI 600-1, the Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1)** (2024). Free, and the only document in this course you could cite at work. Section 2 lists twelve risks and is the best short map of what can go wrong.

## Sources

1. Fabrizio Dell'Acqua, Edward McFowland III, Ethan Mollick, Hila Lifshitz, Katherine C. Kellogg, Saran Rajendran, Lisa Krayer, François Candelon and Karim R. Lakhani, "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality", [*Organization Science*, published online 11 March 2026](https://doi.org/10.1287/orsc.2025.21838). Abstract, design and results read. Supports: the 758 subjects, three conditions, eighteen inside-frontier tasks, 12.2% more tasks completed, 25.1% faster, the 4.37 control mean on a 1 to 10 scale and the 29.9% and 33.9% quality gains, the spelling-and-grammar robustness check, the 84.5% against 60% and 70.6% correctness outside the frontier, the 24.5 against 13.9 percentage-point drops, and the quoted account of how the outside-frontier task was built from BCG's job-interview cases. **Note the paper's abstract says "19% less likely" where its results section gives percentage points, which is what this lesson prints; the results section is the one to follow.**
2. Joel Becker, Nate Rush, Elizabeth Barnes and David Rein, ["Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"](https://arxiv.org/abs/2507.09089), arXiv 2507.09089, July 2025. Abstract read. Supports: sixteen developers, 246 tasks, 19% longer with AI allowed, the 24% forecast before and the 20% estimate after.
3. Shakked Noy and Whitney Zhang, ["Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence"](https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf), MIT working paper, 2 March 2023. Abstract and results read; the peer-reviewed version in *Science* 381 (2023), 187 to 192, could not be opened, so this is the working paper. Supports: 444 professionals, 10 minutes off a 27-minute control average (37%), grades up 0.45 standard deviations, and the split between low-scoring and high-scoring participants. **The "18% higher quality" figure that circulates is not in this paper**; quality is reported in standard deviations throughout.
4. Sander Schulhoff and colleagues, ["The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608), arXiv 2406.06608, 2024. Abstract read. Supports: the count of fifty-eight text-based prompting techniques and forty more for other kinds of output.
5. European Union, [Artificial Intelligence Act, Article 4](https://artificialintelligenceact.eu/article/4/), applicable from 2 February 2025. Read. Supports: the quoted obligation and the date it began to apply. Lesson 10 uses it again, on what an employer's arrangement changes.
6. [NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1), July 2024. Read in part: the introduction and the enumeration of the twelve risks. Supports: the count of twelve, and that Environmental Impacts, Harmful Bias and Homogenization, and Intellectual Property are three of them. This course takes none of those three, which is why they are named here as excluded rather than covered; lesson 10 takes a fourth, Data Privacy.
