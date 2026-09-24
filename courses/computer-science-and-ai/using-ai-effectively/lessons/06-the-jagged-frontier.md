---
title: The jagged frontier
minutes: 115
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/using-ai-effectively/06-the-jagged-frontier.mp3
objectives:
  - >-
    Explain why the boundary between what these systems do well and badly does not follow how hard
    a person finds the task
  - >-
    Sort described tasks into likely-reliable and likely-unreliable, giving the reason from the
    mechanism rather than from what happened last time
  - >-
    Split one real piece of your own work into the parts that sit on each side of the line, and say
    what you would do about the join
quiz:
  - q: >-
      A conveyancer has two jobs. One, turn eight pages of survey notes into a two-page client
      letter. Two, state the standard notice period for a particular kind of lease. She finds both
      equally routine. Which is the riskier hand-over, and on what reasoning?
    options:
      - The letter, because condensing eight pages into two requires judgement about what to leave out
      - The notice period, because the answer has to match something outside the request and nothing checks it
      - Neither, because both are routine for her and routine work is where these systems are strongest
      - The notice period, because legal questions are always the ones these systems handle worst
    answer: 1
    explain: >-
      This is the course's own sorting rule rather than a finding, and it runs like this. The letter
      carries its own material: everything needed is in the eight pages, and she can judge the result
      by reading it against them. The notice period has to be true of the world. The judgement answer
      describes real work that the system does on supplied material. The routine answer uses her
      difficulty as the axis, which is the error this lesson is about. And the always-worst answer
      reaches for a subject rather than a shape, which fails on the letter in the same field.
  - q: >-
      In the consulting study, one group had the system plus a short overview on how to prompt it.
      What happened to that group on the task outside the frontier, and what follows for a reader of
      this course?
    options:
      - They did best of the three, which is the argument for teaching prompting before anything else
      - They did worst of the three, so prompting instruction is of no real use to anybody
      - They did worst of the three, so skill at asking is not the same as knowing when to ask
      - They matched the group without the overview, since prompting cannot help on an unsuitable task
    answer: 2
    explain: >-
      Inside the frontier the overview group did best, and outside it they fell furthest, from the
      control group's 84.5% correct down to 60%. Both things are true and the second is the one
      nobody quotes. The no-real-use answer overcorrects and ignores the inside-the-frontier result.
      The best-of-three answer is true inside the frontier and false outside it. And the matching
      answer invents a null result the study did not find.
  - q: >-
      A charity is deciding what to hand over from a grant application. On this lesson's sorting
      rule, which part is most clearly on the reliable side?
    options:
      - Rewriting the two-page case for support in plainer language for a non-specialist reader
      - Checking that the figures in the budget table add up to the total claimed on the cover sheet
      - Confirming which of three funding streams this project is eligible for under current rules
      - Deciding which of two projects the charity should submit, given its position this year
    answer: 0
    explain: >-
      The rewrite is constrained by the material supplied, and the charity can judge the result by
      reading it against the original. The other three are one each of the rule's three unreliable
      kinds: checking arithmetic is counting, eligibility has to match rules outside the request, and
      which project to submit depends on things nobody has written down. Remember that the four-part
      rule is this course's reasoning from lesson 2 rather than a published finding.
  - q: >-
      Somebody argues there is no point learning where the line is, because the systems improve every
      few months and the line moves. What is the best answer?
    options:
      - He is right, and the useful skill is keeping up with which model is currently best at what
      - The line has not in fact moved much, so the argument rests on a premise that is not true
      - He is right about the line and wrong about the conclusion, since checking is needed regardless
      - The line moves and the reason a task sits on one side does not, so the reasoning survives
    answer: 3
    explain: >-
      What this lesson teaches is not a list of tasks but the question to ask of one: is the answer
      constrained by what I supplied, or does it have to match something outside it? That question
      survives a better model. The keeping-up answer buys a list that goes stale. The has-not-moved
      answer picks a fight with the premise rather than the inference, and is also doubtful. And the
      checking answer is true and answers a different question.
  - q: >-
      A surveyor dictates site notes and wants them turned into a report, and the notes contain eight
      measurements the report has to carry accurately. Where does this task sit?
    options:
      - "On the reliable side, since turning notes into prose is the clearest text-shape task there is"
      - "It is mixed: the prose is text-shape work and the measurements are a transcription job, so split it"
      - "On the unreliable side, since anything with numbers in it belongs on the unreliable side"
      - "It cannot be placed without knowing which model and which product the surveyor is using"
    answer: 1
    explain: >-
      Most real work is mixed, and the skill is finding the join rather than assigning the whole job
      to one side. Here the join is the eight figures: let the system write the prose, then read each
      measurement against the notes yourself, which takes about a minute. Calling it reliable ignores
      the measurements. Calling it unreliable throws away the part that works. And waiting for the
      model treats a question about the shape of the task as a question about the tool.
  - q: >-
      Which pair of tasks sits on opposite sides of the line, while a person would put them in much
      the same place?
    options:
      - Summarising a long email thread, and drafting a reply to the last message in it
      - Translating a paragraph into French, and writing a new paragraph in French
      - Proofreading a page for typographical errors, and rewriting the same page more formally
      - Naming the third word of a supplied sentence, and rewriting that sentence more formally
    answer: 3
    explain: >-
      Both of those act on one supplied sentence and a person would call them equally trivial, and
      they sit on opposite sides: rewriting is constrained by the sentence, while naming the third
      word is a position job below the pieces the system works in. The summarise-and-reply pair are
      both constrained by supplied material. The two French tasks differ in whether the content is
      supplied, which a person would also notice. And the proofreading pair is the interesting near
      miss, because proofreading really is more position-sensitive than rewriting, so the two are not
      as far apart as the key's pair.
---

An experienced conveyancer would call both of these routine.

Turn these eight pages of survey notes into a two-page letter for a client.

State the standard notice period for this kind of lease.

Hand both to one of these systems and one is fine and the other is a liability. The reason people pick wrong is not carelessness, and it's the whole of this lesson.

## The line is not where difficulty is

The consulting study from lesson 1 gave this its name. Its authors set out to describe "the uneven impact of artificial intelligence (AI) capabilities, where AI assistance improves performance for some tasks but worsens it for others, even within the same knowledge workflow and with a seemingly similar level of difficulty", and they called it a **jagged technology frontier**.[1] The emphasis on that last clause is mine; the words are theirs.

Same workflow. Same apparent difficulty. Opposite results.

The study is 758 management consultants at Boston Consulting Group, using GPT-4, with the data gathered in 2023, and every figure below carries that scope. On the eighteen tasks chosen to sit inside the frontier, consultants with AI completed 12.2% more of them and finished 25.1% faster on average, and their work was graded 29.9% higher with the system alone and 33.9% higher with the system plus a prompting overview, against a control group's mean of 4.37 out of 10. On the one task chosen to sit outside it, the AI groups were right 60% and 70.6% of the time against a control group's 84.5%.[1]

**What makes the second task interesting isn't that it was easy.** It was built out of the sort of business cases BCG uses in its own hiring, deliberately, with the aim of "creating a task at which knowledge workers would excel but AI would struggle, at least without extensive guidance and human intervention".[1] The control group still only got it right 84.5% of the time, so it was hard. It was chosen because it is the kind of hard that people are comparatively good at.

That is the whole idea. Difficulty is one axis and the frontier runs across it at an angle, which is why your own experience of these systems feels contradictory: you hand over something demanding and it comes back excellent, you hand over something trivial and it comes back wrong, and that isn't the system being erratic, it's you sorting by the wrong property.

## Which makes the last two lessons half a skill

You met the three-group result in lesson 1, in a callout. It belongs in this lesson too, and what belongs here is not the finding, it's the consequence.

Inside the frontier, the group with the prompting overview did best of the three. Outside it, that same group fell furthest: 60% correct, 24.5 percentage points below the control group, against 13.9 points for the group with no overview.[1]

Now read the study's own sentence about that task again. It was built to be one AI would struggle with **"at least without extensive guidance and human intervention"**. The overview group is the group that had the guidance. It didn't rescue them, and on that task it went the other way.

**So skill at asking and skill at knowing when to ask are two different competences, they do not arrive together, and the first without the second is worse than neither**, because it produces confidence exactly where confidence is misplaced.

You have just spent two lessons on the first competence. This lesson is the second.

## What actually puts a task on one side

The study names the frontier and doesn't tell you how to find it. What follows is this course's answer, reasoned from lesson 2 rather than measured. Hold it as a working rule you can test, not as a finding, and if it fails you, the useful thing to report is which case it mis-sorted.

Go back to the mechanism. The system produces text, one piece at a time, each piece chosen given everything in front of it, with no document to consult. So:

**Reliable: the answer is constrained by what you supplied.** Rewriting, shortening, changing register, translating, structuring notes, generating options, drafting from material you provided. Everything needed is in the request, and the test of the answer is reading it against what you sent.

**Unreliable, in three kinds.** The answer has to match **a fact outside the request**, like a notice period or a price or a deadline. Or it turns on **counting, position or exact arithmetic**, which sits below the pieces the system works in. Or it depends on **something nobody has written down**: your organisation's real appetite for risk, what your director will actually agree to, why the last attempt failed.

One question gets you there in a couple of seconds: **is the answer constrained by what I supplied, or does it have to match something outside it?**

Run the two conveyancing jobs through it. The letter is entirely constrained by the eight pages. The notice period has to match the law.

:::callout One complication, and the course owes you it here rather than in lesson 7
"Nothing goes and looks" is true of a plain chat window and isn't true of every product. Plenty now give the system a search tool, and when it uses one, some facts outside the request are brought inside it.

That does not move the line, it moves particular tasks across it, and only when the tool actually ran and actually found the right thing. Lesson 7 has the measurement of how much that helps on professional tools built for exactly this, and the short version is that it helps measurably, and much less than the people selling them said.

So the sorting rule stands, with one extra question on the fact cases: **did it go and look, and can I see what it found?**
:::

:::predict Two requests. One: "draft a thank-you note to a donor who gave £500 last March." Two: "which of our donors gave over £500 last March?" Sort them, then say what would move the second one across the line.
The note is constrained work: everything needed is in the request, and you can judge the result by reading it.

The question is a fact outside the request, which is the first unreliable kind. The answer lives in your donor records, and unless something goes and gets them, nothing in the process has them.

**What moves it: paste the donor list in.** Now the answer is constrained by what you supplied, and the task has crossed the line, though it has landed close to the second unreliable kind, because picking out everyone above a threshold is a filtering job and filtering is counting's cousin. So check the ones it returns, and ask whether anything's missing, which is the harder check.

That is the general move and it is worth more than the categories themselves: **an unreliable task often becomes a reliable one if you supply the thing the answer has to match.**
:::

## Most real work is mixed, and the skill is the join

A surveyor dictates site notes after a visit and wants a client report out of them. The notes run to two pages and contain eight measurements: three room dimensions, a damp meter reading, two crack widths, a ceiling height, and a distance to a boundary.

Summarising notes into a report is the clearest text-shape task there is, so this looks like an easy call.

It isn't, because of the eight numbers. The prose is on one side of the line and the measurements are on the other, inside one request, and the measurements are the part a client will act on.

**The split takes about a minute.** Let the system write the report. Then put the notes beside it and read the eight figures across, one at a time, ticking each. That is a minute of work, it's the only minute that had to be yours, and it converts an untrustworthy report into a trustworthy one.

Compare the two alternatives. Hand the whole thing over and you have a good report with numbers you can't rely on. Refuse to hand any of it over and you've written two pages of prose yourself for the sake of eight figures.

**Look for the join in anything you are about to hand over.** It is usually small and specific: the figures, the dates, the names, the one claim about a rule. Knowing which they are before you start is much faster than checking everything afterwards, and it's the difference between this being a technique and being a worry.

:::checkpoint A recruiter wants a shortlist of five from forty applications, with a reason for each. Where is the join?
The reasons are constrained work: each is a claim about a document the system was given, and you can check it against that document in seconds.

The ranking isn't. "Best five" depends on what your team actually needs this year, which of last year's hires worked out, and what your director means by a strong candidate, and none of that is in the forty applications.

So the split is not "do the shortlist, check the reasons". It is the other way round. Let it summarise each application against criteria you supplied, and do the ranking yourself with those summaries in front of you.

Notice what that does to the work. You have not saved yourself the decision, which is the part that needed you. You've saved yourself forty readings, which is the part that didn't.
:::

## Five ways people draw the line wrong

Each is a real rule somebody uses, and each fails on a case you can now build yourself.

**By difficulty.** The commonest, and the study's whole point. Naming the third word of a sentence is trivial for a person and sits on the unreliable side, because position is below the pieces the system works in, as lesson 2 showed with letters.

**By subject, technical against creative.** Both directions of this rule are in circulation, which should tell you something. Rewriting a technical manual is constrained work; inventing a plausible statistic for a poem is not. The subject is not the property.

**By how confident the answer sounds.** Fluency is a property of the text, as lesson 2 said. The answer on the unreliable side is often the more confident one, because the shape of a confident answer is what a system producing well-shaped text produces.

**By what happened last time.** One run is one draw, which lesson 3 showed, so a single good result on a fact question is not evidence that fact questions are safe here.

**By assuming better prompting protects you.** The overview group. This is the rule this lesson exists to break, and it is the one held by people who have taken a course.

And an objection worth answering rather than listing. **"The frontier moves, so why learn where it is?"** It does move, and a better model shifts where the boundary falls on the counting cases and on some of the fact cases. What does not move is the reason a task sits on one side, which is whether the answer is constrained by what you supplied. That question survives a better model, and the question is what you're learning.

## Practice

:::exercise Sort ten, predict first
Take 25 minutes.

1. Write down ten tasks from your own work. Real ones from the last fortnight. Mix them up: some you have handed over, some you never would, some you have wondered about.

2. **Before running anything, sort all ten** into reliable, unreliable and mixed, and beside each write which reason applies: constrained by what I supplied; has to match a fact outside; counting or position; depends on something unwritten.

3. Now pick the three you are least sure about and actually run them.

4. For each, write down what happened and whether your sorting was right. Where it was wrong, the useful question is not "was I wrong" but **which of the four reasons did I misapply?**

5. Keep the list. The course project asks for six trials with predictions, and this is three of them done.
:::

:::exercise Find the join, then test it
Take 25 minutes, on a piece of work you actually have to do this week.

1. Write the job down in one sentence, and split it into parts. Most jobs come apart into three or four.

2. Mark each part with which side it sits on, and **predict what will go wrong if you hand over the whole thing undivided.** Be specific: which part, what kind of error, how you would notice.

3. Now hand over the whole thing undivided, once, and read what comes back against your prediction.

4. Then do it properly: hand over the parts you decided to, and check what you decided to check.

5. Write the comparison. Did the predicted failure appear? Was it where you expected? And the number that matters: **how long did the checking take, against how long the part would have taken to do yourself?** If checking costs more, that part stays with you, and saying so is a result rather than a failure.

This is section four of the course project. Do it properly now and that section is written.
:::

:::exercise Get the baseline out
Take 10 minutes.

Find the two columns you wrote in lesson 1: three tasks you use one of these systems for, three you would not, each with a reason.

**Copy it rather than editing it.** Lesson 11 asks you to write the list again from memory and then compare with the original, so the original has to survive.

On the copy, mark every reason that was really about difficulty, or about subject, or about what happened last time. Rewrite those using the question from this lesson, and date the copy.

Then count how many entries moved sides. By lesson 11 the interesting thing will be how much of the movement happened here.
:::

## Connections

**Back.** Lesson 2's mechanism is doing almost all the work here: no document to consult is why the fact cases fail, and pieces that are not letters is why the position cases fail. Lesson 3 explains why a single good result is not evidence about a kind of task. Lessons 4 and 5 taught you to ask well, and this lesson is why that is half a skill. The baseline from lesson 1 comes back in the third exercise.

**Forward.** Lesson 7 is what actually happens on the unreliable side, including the measurement of what a search tool does and does not fix. Lesson 8 is what to do when you cannot simply avoid the task. Lesson 9 asks a different question about the same tasks, which is whether you should hand over work you were supposed to be learning from.

## Go deeper

- **Dell'Acqua and colleagues, ["Navigating the Jagged Technological Frontier"](https://doi.org/10.1287/orsc.2025.21838)** (*Organization Science*, 2026). Open access. The abstract defines the term in one sentence, and the section describing how the outside-frontier task was built is short and worth it: you can watch a research team deliberately construct something people are good at.
- **Ethan Mollick, [one of that study's authors, writing about the frontier on his own site](https://professorkl.substack.com/p/discovering-ais-jagged-frontier-and)**. Written for a general reader rather than for a journal. Treat it as an author's account of his own work, which is a useful thing and is not the paper.
- **Lesson 2 of this course.** The four reasons here are derived from that one paragraph, and if the derivation doesn't feel obvious, that paragraph is the thing to reread rather than this one.

## Sources

1. Fabrizio Dell'Acqua, Edward McFowland III, Ethan Mollick, Hila Lifshitz, Katherine C. Kellogg, Saran Rajendran, Lisa Krayer, François Candelon and Karim R. Lakhani, "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality", [*Organization Science*, published online 11 March 2026](https://doi.org/10.1287/orsc.2025.21838). Abstract, design and results read. **758 management consultants at Boston Consulting Group, GPT-4, data gathered in 2023**, and that scope travels with every figure. Supports: the quoted definition of the jagged technology frontier, with the emphasis added by this lesson and marked as such; 12.2% more tasks completed and 25.1% faster, both for the AI subjects pooled rather than per condition; quality gains of 29.9% and 33.9% against a control mean of 4.37 on a 1 to 10 scale, which do split by condition; the outside-frontier correctness of 84.5% against 60% and 70.6%, with drops of 24.5 and 13.9 percentage points; and the quoted description of how the outside-frontier task was designed, including the clause about extensive guidance and human intervention. **The four-part account of what puts a task on each side is this course's own reasoning from lesson 2 and appears in no source**, which the body says and the quiz explanations repeat.
