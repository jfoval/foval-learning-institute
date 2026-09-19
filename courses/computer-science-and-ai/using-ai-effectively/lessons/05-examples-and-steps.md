---
title: Examples, and asking for the steps
minutes: 95
objectives:
  - >-
    Supply examples in a request, and say what examples steer that a description of the same thing
    does not
  - >-
    Ask for intermediate steps, and state what the published result does and does not show about
    what those steps are
  - >-
    Find the seam in an answer whose steps are right and whose conclusion is wrong, and say what
    that tells you about what the steps are
quiz:
  - q: >-
      A press officer wants short quotes attributed in a particular house style. She describes the
      style in three sentences and keeps getting near misses. What is the likeliest fix, and why?
    options:
      - Describe the style again in rather more detail, since the near misses show the description is close
      - Give three or four examples of quotes already in the style, since form is easier shown than described
      - Ask it to explain the house style back to her first, so that she can correct its understanding
      - Tell it to be more careful about the style, since it has clearly understood and is being sloppy
    answer: 1
    explain: >-
      A description of a form is a second-hand account of it, and the thing she wants is sitting in
      her own archive. Examples put the form itself in front of the system rather than her words
      about it. Describing it again adds more of what has already failed. Asking it to explain the
      style back tests its paraphrase rather than its output. And the carelessness answer assumes an
      effort setting that is not there.
  - q: >-
      Somebody asks for working to be shown on a costing, checks the arithmetic in each step, finds
      it correct, and takes the final figure. What has he established, and what has he not?
    options:
      - That the figure is right, since correct steps arriving at a figure is what a proof is
      - That the method is sound, and the arithmetic, and therefore that the figure follows
      - That each step is arithmetically correct, and not that the last line follows from them
      - Nothing at all, because printed steps are decoration and carry no information
    answer: 2
    explain: >-
      The steps are produced by the same process as the answer, so each can be right while the final
      line does not follow from them, and that seam is exactly where to look. Checking the arithmetic
      inside each step is worth doing and is not the same as checking that the steps and the
      conclusion agree. The nothing-at-all answer overshoots: the steps give you something to check,
      which is more than a bare figure gives you.
  - q: >-
      A reader is told that asking for step-by-step reasoning "makes the model reason". What is the
      accurate version of that claim?
    options:
      - Asking for steps changed measured accuracy, and whether to call that reasoning is a separate argument
      - It makes the model reason, and the published result on maths word problems is the evidence for it
      - It makes no difference at all to the answer, and only changes how that answer is presented to you
      - It is a claim about older models and has no bearing on anything a reader would be using today
    answer: 0
    explain: >-
      The measured part is solid and the word is where the argument lives, which is why this course
      declines the word and keeps the measurement. The first answer settles a dispute a Foundation
      course should not settle. The presentation answer is contradicted by the benchmark result. And
      the too-old answer throws away a finding whose scope simply has to be stated with it.
  - q: >-
      Which of these sets of examples would steer a system best, for a request to write short
      product descriptions?
    options:
      - Six descriptions of the same product, so that the system sees the target from several angles
      - One description, chosen as the single best example of the house style anybody there has written
      - Twelve descriptions covering every product line, so that nothing at all is left for it to guess at
      - Four descriptions of four quite different products, each written in the style you want
    answer: 3
    explain: >-
      Three to five is the working range, and variety matters as much as quality, because a set that
      is too similar teaches a pattern you did not mean to teach. Six versions of one product teaches
      that product. One example gives nothing to generalise from. And twelve is past the point where
      the set is helping and into the territory lesson 4 called length rather than context.
  - q: >-
      A manager asks a system to sort forty supplier emails into three categories, and asks for a
      one-line reason beside each. Why is the reason worth asking for, beyond curiosity?
    options:
      - Because a stated reason makes the system commit, which raises accuracy on classification work
      - Because the reason can be checked against the email far faster than redoing the sorting could
      - Because reading forty short reasons is a far better use of a manager's time than reading forty emails
      - Because a system that gives reasons is being more honest than one that gives bare answers
    answer: 1
    explain: >-
      The reason is a handle. Scanning forty one-line justifications against the emails is quick, and
      the ones that do not match the email are exactly where the misfilings are. The accuracy claim
      may or may not hold for a given system on a given task, and this lesson does not have the
      evidence for it. The time answer is a side effect rather than the point. And honesty is the
      wrong category for text that is produced rather than reported.
  - q: >-
      When is showing rather than describing the wrong move?
    options:
      - When the answer needs to be correct, since examples steer form and cannot make anything true
      - When the task is technical, since examples work for style and descriptions work for substance
      - When the request is already long, since examples add length, and length is what hurts here
      - When you have no examples to hand, in which case describing carefully is all that is left
    answer: 0
    explain: >-
      Examples teach shape, and shape is not truth, which is the limit this whole course keeps coming
      back to. The no-examples answer is a practical constraint rather than a case where showing is
      wrong. The technical answer invents a division that does not hold, since technical work has
      forms too. And the length answer confuses examples, which bear on the task, with the padding
      lesson 4 warned about.
---

There are two moves in this lesson and they are the only two in the whole course that go beyond stating clearly what you want. Both have real results behind them. Both get misunderstood in the same direction, which is that people take them to be doing more than they do.

## Showing beats describing, for anything with a shape

Lesson 4 said the request is the specification. This is the part of the specification you can't write in sentences.

Try describing the difference between two house styles of writing, or the tone of a particular kind of internal email, or what makes one of your colleague's meeting notes usable and another's not. You can get somewhere. You can't get all the way, because what you're describing is a form, and a description of a form is a second-hand account of it.

**So put the form itself in front of the system.** Three or four real examples of what you want, and the description you were struggling with becomes unnecessary.

This is the practical face of the finding lesson 4 opened with. The GPT-3 paper established that a task can be specified "purely via text interaction with the model", with "few-shot demonstrations" doing the specifying.[1] Demonstrations, not descriptions.

The guidance from one of the companies building these systems gives a working shape, and it is worth having because most people get the numbers wrong in both directions. **Three to five examples.** Make them **relevant**, mirroring your actual case. Make them **diverse**, varied enough "that Claude doesn't pick up unintended patterns". And mark them off clearly from your instructions, so that the system can tell which text is an example and which is a request.[2]

That third one matters more than it sounds. If your examples run straight on from your instruction with nothing separating them, some of what you meant as a sample reads as part of the brief.

:::predict You are about to supply four example emails to show the tone you want. Three of them happen to be about invoices, because those are the ones nearest to hand. What might the system learn that you did not mean to teach?
That the topic is invoices, or that this kind of email always mentions money, or that it always opens with a reference number, or any other regularity that happens to run through the three without being the thing you cared about.

That's what "diverse" is for in the guidance above. A set of examples is a set of claims about what matters, and every accidental thing they share is a claim you didn't mean to make.

The cheap fix isn't more examples. It's four examples that differ in everything except the thing you want.
:::

## Asking for the steps

Now the second move, and the better-known one.

In 2022 a team published a result that surprised people. They put a handful of worked examples into a request, each one showing not just an answer but the intermediate steps that reached it, and measured what happened on problems requiring several stages of work. Their headline: prompting a 540-billion-parameter model "with just eight chain of thought exemplars achieves state of the art accuracy on the GSM8K benchmark of math word problems, surpassing even finetuned GPT-3 with a verifier".[3]

That's a real, measured result and it deserves its reputation. **It also deserves its scope.** It is a 2022 measurement, on a model of a particular size, on grade-school maths word problems, and the paper's own framing is that these abilities "emerge naturally in sufficiently large language models", which makes it a result about scale as much as about wording.[3]

What it means for you is simpler than the literature around it. **Asking for the steps changes the answer, not just the presentation.** That's the part worth knowing, and it's why "show your working" isn't merely a request for a nicer output.

:::callout Whether this counts as reasoning, and why this course will not tell you
People argue about whether producing intermediate steps is reasoning, and the argument turns on what the word is being asked to mean rather than on any fact either side lacks.

This course declines the question, deliberately, and answers the one you can act on instead. Asking for steps changes measured accuracy. The steps can be wrong while the answer is right, and right while the answer is wrong. Either way they are something to check.

If somebody tells you these systems can't reason, or that they obviously do, ask what would count as evidence either way. The interesting conversations start there, and nothing in how you use one tomorrow depends on the answer.
:::

## What the steps actually are

Almost nobody says the next part, and it comes from the standards body rather than from a critic or a vendor.

Answers from these systems "may also include confabulated logic or citations that purport to justify or explain the system's answer", and models "sometimes provide logical steps for how they arrived at an answer **even when the answer itself is incorrect**".[4]

Sit with that. The steps are output. They are produced the same way the answer is, by the same process, from the same model. They aren't a transcript of something that happened elsewhere and was then written down.

That has two consequences, and they point in opposite directions.

**The uncomfortable one.** Printed steps aren't proof. A neat chain of five stages, each phrased confidently, is five more pieces of produced text, and the conclusion at the bottom can fail to follow from any of them.

**The useful one, and it is the reason to ask anyway.** Steps you can read are steps you can check. An answer with no working gives you one thing to take or leave. An answer with five steps gives you six places to look, and finding the one that does not follow is far easier than producing the whole thing yourself.

**So the steps aren't evidence. They're a handle.** That's the sentence to carry out of this lesson.

## Two worked cases

**The first, on examples.** A charity wants short descriptions of its volunteering roles, in the style of the six it already has on its website.

Described: "Write it in a warm, practical style, about forty words, focusing on what the volunteer actually does rather than on how worthy it is." What comes back is usually decent and usually not theirs. It's got the shape of a charity website rather than of *this* charity's website.

Shown: the same request with four of the existing six pasted in, marked off as examples, chosen so that they cover four different kinds of role rather than four similar ones. What comes back matches in sentence length, in how it opens, and in the particular thing this charity always does, which is naming the person the volunteer would be working alongside.

Nobody could've written that last requirement as an instruction, because nobody had noticed it. It was in the examples anyway.

**The second, on steps.** A finance officer asks for the total cost of a three-year contract with an annual uplift, and asks for working.

The steps come back: year one at the base figure, year two with the uplift applied, year three with the uplift applied again, then a total. Each line's arithmetic is correct. She checks all three and they are.

The total is wrong, because it adds year one twice.

**Nothing in checking the steps catches that**, because the error isn't inside a step. It's at the seam, between the steps and the conclusion, and the seam is where people don't look, because a column of correct arithmetic is persuasive.

:::checkpoint Given the finance officer's case, what should she actually check, and in what order?
Cheapest first, and there are three checks rather than one.

**Do the steps agree with the question?** Three years, one uplift a year, applied from year two. If a step has misread the brief, everything after it is answering a different question correctly.

**Is each step right in itself?** This is the one she did. It's worth doing and it isn't sufficient.

**Does the conclusion follow from the steps?** Add them yourself. This is the check that catches her case, it takes ten seconds, and it's almost never done, because by the time you've read three correct steps you've decided the thing is careful.

Lesson 8 makes this into a procedure for cases where you could not have produced the answer at all. Here the point is narrower: the steps and the conclusion are separate claims, and they want separate checks.
:::

## What people get wrong

**"The steps are the reasoning."** They're output that describes reasoning. The standards body's sentence is the one to remember: steps appear "even when the answer itself is incorrect".[4]

**"If it shows its working, it is right."** The finance officer's total was wrong under three correct steps. A worked answer is easier to check and isn't thereby checked.

**"Chain-of-thought is a magic phrase."** It is a name for putting worked examples in a request, from a 2022 paper measuring 2022 models.[3] Plenty of products now produce steps without being asked, which changes what a reader needs to do about it, and that's the kind of fact this course dates rather than states: go and see what yours does.

**"Examples are for when you cannot describe what you want."** Examples beat description for anything with a form, including things you could describe. Description is second-hand; examples are the thing.

**"More examples are better."** Three to five, varied.[2] Past that you're adding length rather than context, which lesson 4 is about, and a dozen near-identical examples teaches the wrong regularity twelve times over.

**"Asking for steps always helps."** It helps where there are stages to get wrong. On a rewriting job there aren't any intermediate stages, and asking for working produces a commentary on a task that didn't need one.

## Practice

:::exercise Show rather than describe
Take 25 minutes. You'll need something with a form that you produce regularly: a kind of email, a meeting note, a product line, a case summary.

1. Write the description. Three or four sentences saying what the form is, as carefully as you can.

2. **Predict:** what will the described version get right, and what will it miss?

3. Run the described version and keep the answer.

4. Now gather **four real examples** of the thing, chosen to differ from each other in everything except the form you want. Mark them off clearly from the instruction. Run it again.

5. Put the two answers beside a real example of your own and mark every place the second matches where the first did not.

6. The question that matters: **is there something in the matched list that you couldn't have written as an instruction?** There usually is, and that's what this technique is for.
:::

:::exercise Find the seam
Take 20 minutes.

1. Take a question from your own work with several stages to it. A calculation, an eligibility decision, a sequence of steps against a policy.

2. Ask for it with the working shown.

3. Check it in the three-part order from the checkpoint above, and **write down which check each error would have been caught by**, if any. Do the third check even when the first two pass, especially then.

4. Do it again with a second question, and this time **write down before you check** which of the three you expect to find a problem in.

If you find nothing wrong in either, that's a result too, and it's about this kind of task rather than about the system in general. Note which kind of task it was; lesson 6 is where that observation becomes useful.
:::

## Connections

**Back.** Lesson 4 gave you the three things a request supplies, and examples are the way to supply the form when the form will not go into words. Lesson 2 explains why the steps can be wrong while the answer's right: both are produced by the same process, and neither is a report on the other. Lesson 3 explains why one run is one draw, which is worth remembering before you conclude that steps helped or did not.

**Forward.** Lesson 6 takes the observation you will make in the second exercise, about which kinds of task go wrong, and turns it into a test you can apply before you start. Lesson 7 is where confabulated logic gets taken properly, alongside confabulated citations. And lesson 8 turns "find the seam" into one step of a checking procedure for answers you could not have produced yourself.

## Go deeper

- **Wei and colleagues, ["Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903)** (2022), the abstract. Read it for the scope as much as the result. It's a careful paper, and its own framing is more modest than its reputation.
- **[NIST AI 600-1](https://doi.org/10.6028/NIST.AI.600-1)**, section 2.2, the paragraph on confabulated logic. Three sentences, and they're the best short statement of why printed working isn't proof.
- **[The Prompt Report](https://arxiv.org/abs/2406.06608)** (2024), if you want the full catalogue of techniques rather than the two that follow from the mechanism. Treat it as a reference, not a curriculum.

## Sources

1. Tom B. Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165), arXiv 2005.14165, 2020. Abstract read; the paper was not opened. Supports: the quoted phrases about tasks being specified purely via text interaction and about few-shot demonstrations.
2. [Anthropic, "Prompting best practices"](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), read on 18 September 2026, the general principles section. Read in part. A vendor's guidance for its own models, named as such in lesson 4. Supports: three to five examples, the relevance and diversity criteria including the quoted phrase about unintended patterns, and the recommendation to mark examples off from instructions.
3. Jason Wei and colleagues, ["Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903), arXiv 2201.11903, 2022. Abstract read; the paper was not opened. Supports: the quoted GSM8K result with its eight exemplars and 540-billion-parameter model, and the authors' own framing that the ability emerges in sufficiently large models. **The scope is 2022 models on grade-school maths word problems and travels no further than that without more evidence.**
4. [NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1), July 2024, section 2.2. Read in part. Supports: the quoted sentences about confabulated logic and about logical steps appearing even when the answer is incorrect.
