---
title: Examples, and asking for the steps
minutes: 100
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
      - Ask it to explain the house style back to her first, so that she can correct its understanding of it
      - Tell it to be more careful about the style, since it has clearly understood and is being sloppy
    answer: 1
    explain: >-
      A description of a form is a second-hand account of it, and the thing she wants is sitting in
      her own archive. Examples put the form itself in front of the system rather than her words
      about it. Describing it again adds more of what has already failed. Asking it to explain the
      style back tests its paraphrase rather than its output. And the carelessness answer assumes an
      effort setting that is not there.
  - q: >-
      A pharmacist asks for a dose calculation with the working shown. Step one converts the weight
      correctly. Step two applies the right milligrams per kilogram. Step three divides by the
      strength of the solution correctly. The final line states a volume that matches none of them.
      Which check would have caught it?
    options:
      - Recomputing each step, which is the check most people run and is the one that misses this
      - Asking the system to check its own working again, since printing the steps is what makes that possible
      - Reading the last line against the steps, which is a separate check from reading the steps
      - Running the request a second time to see whether the same volume comes back again
    answer: 2
    explain: >-
      The error is not inside a step, so every check that looks inside a step passes. The conclusion
      and the steps are two separate claims and the seam between them wants its own reading. Asking
      the system to check itself is a real step and it belongs later, in lesson 8, and it is not what
      catches an arithmetic seam. And a second run tests consistency rather than correctness, which
      lesson 3 separated.
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
      declines the word and keeps the measurement. The makes-it-reason answer settles a dispute a
      Foundation course should not settle. The presentation answer is contradicted by the benchmark
      result. And the too-old answer throws away a finding whose scope simply has to be stated with
      it.
  - q: >-
      A council wants standard wording for refusing a planning application, and has forty past
      refusals on file. Which set of examples would steer best?
    options:
      - The six most recent refusals, since recency is the best guide to what the wording ought to look like now
      - The single best-written refusal anybody on the team has produced, as the target to match
      - All forty, since the more the system has seen of the house style the closer it will get to it
      - Four refusals on four different grounds, each written the way the council wants refusals written
    answer: 3
    explain: >-
      Three to five is the working range, and variety matters as much as quality, because a set that
      is too similar teaches a pattern nobody meant to teach. Six recent refusals may all be about
      the same estate. One example gives nothing to generalise from. And forty is past the point
      where the set is helping and into the territory lesson 4 called length rather than context.
  - q: >-
      A manager asks a system to sort forty supplier emails into three categories, and asks for a
      one-line reason beside each. Why is the reason worth asking for, beyond curiosity?
    options:
      - Because a stated reason makes the system commit, which raises accuracy on sorting work of this kind
      - Because the reason can be checked against the email far faster than redoing the sorting could
      - Because reading forty short reasons is a far better use of a manager's time than reading forty emails
      - Because a system that gives reasons is being more honest than one that gives bare answers
    answer: 1
    explain: >-
      The reason is a handle. Scanning forty one-line justifications against the emails is quick, and
      the ones that do not match the email are exactly where the misfilings are. The accuracy claim
      may or may not hold for a given system on a given task, and this lesson has no evidence for it;
      the published result is about problems with several stages, and sorting is not one. The time
      answer is a side effect rather than the point. And honesty is the wrong category for text that
      is produced rather than reported.
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
      back to: four perfect examples of a well-formed citation teach a system to produce well-formed
      citations and nothing at all about whether this one is real. The no-examples answer is a
      practical constraint rather than a case where showing is wrong. The technical answer invents a
      division that does not hold, since technical work has forms too. And the length answer confuses
      examples, which bear on the task, with the padding lesson 4 warned about.
---

This lesson teaches the last two techniques in the course. Both have published results behind them, and both get misunderstood in the same direction, which is that people take them to be doing more than they do.

## Showing beats describing, for anything with a shape

Lesson 4 said the request is the specification. This is the part of the specification you cannot write in sentences.

Try describing the difference between two house styles of writing, or the tone of a particular kind of internal email, or what makes one colleague's meeting notes usable and another's not. You can get somewhere. You can't get all the way, because what you are describing is a form, and a description of a form is second-hand.

**So put the form itself in front of the system.** Three or four real examples of what you want, and the description you were struggling with becomes unnecessary.

This is the practical face of the finding lesson 4 opened with. The GPT-3 paper established that a task can be specified in the text of the request, with "tasks and few-shot demonstrations specified purely via text interaction with the model" and no training of any kind.[1] Tasks *and* demonstrations: both are things you supply as text, and the demonstrations are what this lesson is about.

Anthropic's guidance for its own models, which lesson 4 introduced and named as a vendor document, gives a working shape.[2] The count is in a tip: "Include 3-5 examples for best results." The criteria are a list of three, and two of them apply to anybody:

**Relevant.** "Mirror your actual use case closely."

**Diverse.** "Cover edge cases and vary enough that Claude doesn't pick up unintended patterns."

The third is about wrapping examples in XML tags, which is a thing an application developer does and a chat user does not.[2] The principle underneath it survives the translation: your examples have to be distinguishable from your instructions, so put them under a heading, or in quotation marks, or after a line saying "examples follow".

If your examples run straight on from your instruction with nothing separating them, some of what you meant as a sample reads as part of the brief.

:::predict You are about to supply four example emails to show the tone you want. Three of them happen to be about invoices, because those are the ones nearest to hand. What might the system learn that you did not mean to teach?
That the topic is invoices, or that this kind of email always mentions money, or that it always opens with a reference number, or any other regularity that happens to run through the three without being the thing you cared about.

That's what "diverse" is for. A set of examples is a set of claims about what matters, and every accidental thing they share is a claim you did not mean to make.

The fix isn't more examples. It is four examples that differ in everything except the thing you want.
:::

### Worked: a charity's volunteering descriptions

A charity has six role descriptions on its website and wants six more in the same style. Here are two of the existing six.

> **Befriending visitor.** You'll visit one person at home for an hour a week, usually the same person for at least six months. Most of our visitors are matched with someone within a mile of where they live. You'd be working alongside Priya, who has coordinated the scheme since 2019.

> **Minibus driver, Thursdays.** You will collect six people from home and bring them to the lunch club, then take them back at two. A D1 entitlement is needed and we will pay for it if you don't have one. You'd be driving with Tom, who has done the Thursday run for eleven years.

Now the two attempts.

**Described.** "Write it in a warm, practical style, about forty words, focusing on what the volunteer actually does rather than on how worthy it is." What comes back is usually decent and reads like a charity website rather than like *this* charity's website.

**Shown.** The same request with four of the existing six pasted in, marked off as examples, chosen so they cover four different kinds of role rather than four similar ones. Now look at what the two examples above actually share, because it is what the second attempt will pick up: both open with "You'll" and a concrete action; both give a time commitment in the first two lines; both end by naming the person the volunteer would be working alongside, with how long that person has been there.

**Nobody would have written that third one as an instruction, because nobody had noticed it.** It was in the examples anyway, and that is what this technique is for.

## Asking for the steps

In 2022 a team published a result that surprised people. They put a handful of worked examples into a request, each showing not only an answer but the intermediate steps that reached it, and measured what happened on problems requiring several stages of work. Their headline sentence: "prompting a 540B-parameter language model with just eight chain of thought exemplars achieves state of the art accuracy on the GSM8K benchmark of math word problems, surpassing even finetuned GPT-3 with a verifier".[3]

That is a real, measured result and it deserves its reputation. **It also deserves its scope**, which the paper states and most summaries drop. It is a 2022 measurement. It is one model, identified in the abstract by its size and not by its name, so this course cannot tell you which model it was. It is grade-school maths word problems. And the paper's own framing is that these abilities "emerge naturally in sufficiently large language models", which makes it a result about scale as much as about wording.[3]

So the claim you can carry is this one, with its scope attached: **on problems with several stages, asking for the steps changed the measured answer rather than only its presentation.** Whether that holds for your task on your product in this year is a question nobody has answered for you, and lesson 3's advice applies: one run tells you very little.

:::callout Whether this counts as reasoning, and why this course will not tell you
People argue about whether producing intermediate steps is reasoning, and the argument turns on what the word is being asked to mean rather than on any fact either side lacks.

This course declines the question, deliberately, and answers the one you can act on instead. On multi-stage problems the steps changed the measured answer. The steps can be wrong while the answer is right, which is what the standards body records below, and the reverse is also possible, which is this course's inference from the same mechanism rather than a finding. Either way they are something to check.

If somebody tells you these systems cannot reason, or that they obviously do, ask what would count as evidence either way. Nothing in how you use one tomorrow depends on the answer.
:::

## What the steps actually are

The standards body's profile says it, and it is worth having from there rather than from a critic or a vendor.

Answers "may also include confabulated logic or citations that purport to justify or explain the system's answer", and models "sometimes provide logical steps for how they arrived at an answer even when the answer itself is incorrect".[4] The emphasis on that last clause is mine; the words are theirs.

The steps are output. They are produced the same way the answer is, by the same process, from the same model, and they aren't a transcript of something that happened elsewhere and was then written down.

That has two consequences, pointing in opposite directions.

**The uncomfortable one.** Printed steps are not proof. A neat chain of five stages, each phrased confidently, is five more pieces of produced text, and the conclusion at the bottom can fail to follow from any of them.

**The useful one, and it is the reason to ask anyway.** Steps you can read are steps you can check. An answer with no working gives you one thing to take or leave. An answer with five steps gives you six places to look, and finding the one that does not follow is far easier than producing the whole thing yourself.

So the steps aren't evidence. They're a handle.

### Worked: the costing with the correct steps

A finance officer asks for the total cost of a three-year contract. The base year is £14,400 and there is a 3% uplift each year from year two.

What comes back:

> **Year 1:** £14,400
> **Year 2:** £14,400 × 1.03 = £14,832
> **Year 3:** £14,832 × 1.03 = £15,277
> **Total: £58,909**

She checks the arithmetic in each line. Year two is right. Year three is right, to the pound. The uplift has been applied in the right years and compounded rather than repeated, which is the thing she was most worried about.

The total is wrong. The three years come to **£44,509**. The figure given is that plus another £14,400: year one has been counted twice.

**Nothing in checking the steps catches that**, because the error is not inside a step. It's at the seam, between the steps and the conclusion, and a column of correct arithmetic is persuasive enough that most readers stop before they reach it.

### Three checks, in the order that costs least

The costing case needs three separate readings, and they are not the same reading done three times.

**One. Do the steps agree with the question?** Three years, 3%, applied from year two. If a step has misread the brief, everything after it answers a different question correctly, and no amount of checking the arithmetic will show it.

**Two. Is each step right in itself?** This is the one the finance officer did. It is worth doing and it is not sufficient.

**Three. Does the conclusion follow from the steps?** Add them up yourself. Ten seconds, and it is the check that catches her case, and it is almost never done, because by the time you have read three correct steps you have decided the thing is careful.

Lesson 8 makes this into a procedure for cases where you could not have produced the answer at all. Here the point is narrower: the steps and the conclusion are separate claims, and they want separate readings.

:::checkpoint A colleague has an answer with working, and no time to do all three checks. Which one should he do, and what is he accepting by skipping the other two?
The third, because it is the cheapest and it is the one nobody does. Adding a column up takes ten seconds and catches the failure that survives every other check.

What he is accepting by skipping the first is the worse risk: a correct calculation of the wrong thing. If step one converted the weight in pounds when the brief said kilograms, the arithmetic will be flawless all the way down and the answer will be dangerous.

So the honest version is that the third check is the best value and the first is the one whose absence costs most. If he has twenty seconds rather than ten, he should read the first step against the brief and then add the column up, and skip the middle.
:::

## What people get wrong

**"The steps are the reasoning."** They're output that describes reasoning. The standards body's sentence is the one to remember: steps appear even when the answer itself is incorrect.[4]

**"If it shows its working, it is right."** The finance officer's total was wrong under three correct lines. A worked answer is easier to check and is not thereby checked.

**"Chain-of-thought is a magic phrase."** It's a name for putting worked examples in a request, from a 2022 paper measuring 2022 models.[3] What products do now is a separate question with a separate answer, and this course has read no measurement of it, so go and see whether yours produces steps unasked rather than take anybody's word for it.

**"Examples are for when you cannot describe what you want."** Examples beat description for anything with a form, including things you could describe. Description is second-hand.

**"More examples are better."** Three to five, varied.[2] Past that you are adding length rather than context, which lesson 4 is about, and a dozen near-identical examples teaches the wrong regularity twelve times over.

**"Asking for steps always helps."** It helps where there are stages to get wrong, which is what the 2022 result measured. On a rewriting job there aren't any intermediate stages, and asking for working produces a commentary on a task that did not need one.

**"Examples can make an answer true."** They can't, and this is the limit worth stating plainly because it is where the two halves of this lesson meet. Four perfect examples of a well-formed citation teach a system to produce well-formed citations. They teach it nothing about whether any particular one is real, which is lesson 7.

## Practice

:::exercise Show rather than describe
Take 25 minutes. You will need something with a form that you produce regularly: a kind of email, a meeting note, a product line, a case summary.

1. Write the description. Three or four sentences saying what the form is, as carefully as you can.

2. **Predict:** what will the described version get right, and what will it miss?

3. Run the described version and keep the answer.

4. Now gather **four real examples** of the thing, chosen to differ from each other in everything except the form you want. Mark them off clearly from the instruction. Run it again.

5. Put the two answers beside a real example of your own and mark every place the second matches where the first did not.

6. The question that matters: **is there something in the matched list that you couldn't have written as an instruction?** There usually is, and that is what this technique is for.
:::

:::exercise Find the seam
Take 20 minutes.

1. Take a question from your own work with several stages to it. A calculation, an eligibility decision, a sequence of steps against a policy.

2. **Predict, in writing, which of the three checks you think will find a problem**, if any. Then ask for it with the working shown.

3. Run all three checks in order, and write down which check each error would have been caught by.

4. Do it again with a second question, predicting first once more.

If you find nothing wrong in either, that's a result too, and it's about this kind of task rather than about the system in general. Note which kind of task it was; lesson 6 is where that observation becomes useful.
:::

## Connections

**Back.** Lesson 4 gave you the three things a request supplies, and examples are how you supply the form when the form will not go into words. Lesson 2 explains why the steps can be wrong while the answer's right: both are produced by the same process, and neither is a report on the other. Lesson 3 explains why one run is one draw, which is worth remembering before you conclude that steps helped or did not.

**Forward.** Lesson 6 takes the observation you will make in the second exercise, about which kinds of task go wrong, and turns it into a test you can apply before you start. Lesson 7 is where invented citations and confident false answers get taken properly, and where the limit at the end of the misconception list above is the whole subject. And lesson 8 turns "find the seam" into one step of a checking procedure for answers you could not have produced yourself.

## Go deeper

- **Wei and colleagues, ["Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903)** (2022). This course has read the abstract and not the paper, so read the abstract: four sentences, and its own statement of scope is more modest than the reputation the result has acquired.
- **[NIST AI 600-1](https://doi.org/10.6028/NIST.AI.600-1)**, section 2.2. The passage on confabulated logic is the best short statement of why printed working is not proof.
- **[The Prompt Report](https://arxiv.org/abs/2406.06608)** (2024), if you want the full catalogue rather than the two techniques that follow from the mechanism. It names fifty-eight for text and forty more for other kinds of output, which is what a field looks like before it knows which of them matter. A reference, not a curriculum.

## Sources

1. Tom B. Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165), arXiv 2005.14165, 2020. Abstract read; the paper was not opened. Supports: the quoted phrase about tasks and few-shot demonstrations being specified purely via text interaction with the model.
2. [Anthropic, "Prompting best practices"](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), read on 18 September 2026, the general principles section. Read in part. A vendor's guidance for its own models, named in the body here and discussed at more length in lesson 4. Supports: the quoted count of three to five examples, the quoted Relevant and Diverse criteria, and the description of the third criterion as being about XML tags. **The principle drawn from that third criterion, that examples must be distinguishable from instructions, is this course's translation of a developer instruction into something a chat user can do.**
3. Jason Wei and colleagues, ["Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903), arXiv 2201.11903, 2022. Abstract read; the paper was not opened. Supports: the quoted GSM8K result and the authors' own framing that the ability emerges in sufficiently large models. **The abstract gives the model's size and not its name**, which is why this lesson says the model cannot be named from this source, and the scope is 2022 models on grade-school maths word problems.
4. [NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*](https://doi.org/10.6028/NIST.AI.600-1), July 2024, section 2.2. Read in part. Supports: the quoted sentences about confabulated logic and about logical steps appearing even when the answer is incorrect. Emphasis on the second is this lesson's and is marked as such in the body.
