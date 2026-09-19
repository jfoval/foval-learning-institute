---
title: Asking for something
minutes: 95
objectives:
  - >-
    Rewrite a vague request so that it supplies the context, the constraints and the form of the
    answer, and say which of the three each change is
  - >-
    Explain why giving the reason behind an instruction changes what comes back, in terms of what
    the system is doing
  - >-
    Judge a request against the colleague test before you send it, and say what the test catches
    that reading it over does not
quiz:
  - q: >-
      A ward manager asks for "a short note to staff about the new handover process". What comes back
      is bland and generic. Which of the three things is most obviously missing, and what would
      supplying it change?
    options:
      - Form, since the request never says whether it wants an email, a poster or a briefing script
      - Constraints, since the request never says how long the note should be or what to leave out
      - Context, since nothing in the request says what the new process is or why it changed
      - Nothing is missing at all; the request is short and clear, and a bland answer is the system's own fault
    answer: 2
    explain: >-
      Without the process, the system has nothing to write about and can only produce the shape of a
      staff note, which is exactly what bland means. Form and constraints are both genuinely absent
      too and neither would rescue it: a precisely formatted note about nothing is still about
      nothing. The last answer confuses a clear request with a sufficient one, which is the
      distinction this lesson exists for.
  - q: >-
      Two versions of the same instruction. One says "do not use bullet points". The other says "do
      not use bullet points, because this is going into a printed leaflet where the columns are
      narrow". Why does the second tend to work better?
    options:
      - Because the reason puts the situation in front of the system, so other choices follow from it
      - Because a longer instruction carries more weight in a request than a short one does, all else equal
      - Because politeness has been shown to improve compliance with formatting instructions of this kind
      - Because the system can verify the claim about the leaflet and adjusts its confidence accordingly
    answer: 0
    explain: >-
      Each piece of text is produced given everything in front of it, so a stated purpose changes far
      more than the one prohibition: sentence length, paragraphing and register all follow from
      knowing it is a narrow printed column. The length answer mistakes the cause for the size. The
      politeness answer imports a different question, and the evidence there does not say what it is
      being used to say. And nothing is verified, since there is no leaflet to check.
  - q: >-
      A consultant has a request that works well. He adds three paragraphs of background about his
      firm, its history and its values, and the answers get worse. What has he done?
    options:
      - Added context, which was the right move applied past the point where it was helping
      - Added length rather than context, since none of the three paragraphs bears on the task
      - Overloaded the window, which is why the answer quality dropped off at the end
      - Made the request impolite by burying the instruction, which the evidence says costs accuracy
    answer: 1
    explain: >-
      Context means what bears on this task. A firm's values do not tell the system anything about
      what to produce, so the three paragraphs are material competing with the instruction rather
      than supporting it. The first answer is the tempting one and gets the category wrong: this was
      never context. The window answer reaches for a limit that three paragraphs will not approach.
      The politeness answer is unrelated and misstates the evidence.
  - q: >-
      What does the colleague test ask you to do, and what does it catch?
    options:
      - Show the request to somebody who knows the task very well, so they can check it is technically correct
      - Read the request aloud, to catch sentences that are hard to say and therefore hard to parse
      - Send the request to two colleagues and compare what each of them produces from it
      - Show it to somebody with little context on the task, to catch what only you happen to know
    answer: 3
    explain: >-
      The point is the missing context rather than the wording, and only somebody who lacks your
      background can find it, because you cannot see an assumption you are making. Showing it to an
      expert hides the defect, since they will supply what is missing without noticing. Reading aloud
      is a real technique for prose and catches something else. And two colleagues producing two
      answers tests the task rather than the request.
  - q: >-
      A reader hears that being polite to these systems improves the answers. What does the measured
      evidence actually support?
    options:
      - Politeness has no effect at all, and anybody who says otherwise is anthropomorphising a machine
      - Polite prompts did better across all three of the languages tested, by a small but consistent margin
      - Rude prompts did worse, very polite ones were not reliably better, and the best point varied by language
      - The question has not been studied properly, so the honest answer is that nobody knows either way
    answer: 2
    explain: >-
      A 2024 study across English, Chinese and Japanese found exactly that shape, which is more
      interesting than either simple answer: not a dial you turn up, and not nothing. The
      no-effect answer is contradicted at the rude end. The consistent-benefit answer is what people
      expect and is not what was found. And the nobody-knows answer is available only to somebody who
      has not looked.
  - q: >-
      Which of these requests is most likely to produce something usable, and why?
    options:
      - "Write a subject line for an email to lapsed members about a fee change, warm not salesy, under nine words."
      - "Act as a world-class copywriter with twenty years of experience in membership marketing, and write a subject line."
      - "Please could you kindly write an excellent subject line for my email to members? Thank you so much for your help."
      - "Write the best possible subject line for my email about the fee change, and make sure it really stands out."
    answer: 0
    explain: >-
      It supplies who the email is to, what it is about, a constraint on register and a constraint on
      length, so the answer has something to be right or wrong about. The role version supplies a
      persona and no facts. The polite version and the superlative version both add words that bear
      on nothing: "excellent" and "stands out" are not constraints, because they rule nothing out.
---

Here are two requests for the same thing.

> Write something for the team about the new expenses policy.

> Write a short email to about forty office staff telling them that from 1 October, expense claims go through the new portal rather than by paper form, and that anything submitted on paper after that date will be returned. Most of them have not heard of the portal. Keep it under 150 words, do not apologise for the change, and end with where to get help.

The second isn't more polite, more clever, or better engineered. It contains things the first one doesn't: what changed, who is reading, what they already know, how long, what to avoid, and how to end.

That's the whole of this lesson, and the reason it works is in lesson 2.

## Why the request is everything

In 2020 the team behind GPT-3 published a result that made this a skill rather than a setting. The system, they wrote, "is applied without any gradient updates or fine-tuning, with tasks and few-shot demonstrations specified purely via text interaction with the model."[1]

Take that apart. Before this, getting a system to do a new task meant training it on examples of that task. After it, you describe the task in the text of the request and the system does it. Nothing is trained, nothing is configured, nothing is saved.

Which means **the text of your request is the entire control surface.** It isn't one input among several. It's the only one you've got.

Put that beside lesson 2's paragraph and you can see why vagueness costs so much. Each piece of text is produced given everything in front of it. If what is in front of it is "write something about expenses", then what is in front of it is the *shape* of writing about expenses, and the shape is all you get back. Blandness isn't the system being lazy. It's the system having nothing else to go on.

## Three things, and you can check for them in ten seconds

Not a template. A checklist, and most bad requests are missing one of the three.

**Context.** What this is for, who it is for, what has already been decided, what the reader already knows. In the expenses email: forty office staff, most of whom have not heard of the portal.

**Constraints.** What must be true, what to avoid, how long. Under 150 words, no apologising.

**Form.** What the answer should look like when it arrives. An email. Ending with where to get help.

Run through those three before you send anything that matters, and you will fix most of what goes wrong without learning a single technique.

:::predict Look at a request you actually sent this week. Which of the three was missing? Write it down before you read on, then think about what came back.
Most people find it was context, and most are surprised, because they felt they'd explained the situation.

The reason it's usually context is that context is the part you can't see you've left out. Constraints and form are things you know you want and might forget to say. Context is everything you know about the situation that you never thought to mention, because to you it goes without saying.

That's exactly what the colleague test at the end of this lesson is for.
:::

## Give the reason, not just the instruction

Now the move that surprises people most, and it comes with a worked pair from the people who build one of these systems.

Their guidance takes the instruction "NEVER use ellipses" and improves it to: "Your response will be read aloud by a text-to-speech engine, so never use ellipses since the text-to-speech engine will not know how to pronounce them."[2]

The second version has the same prohibition in it. What it adds is why.

**And that changes far more than the one rule.** A system that knows the text will be spoken has been told something that bears on sentence length, on abbreviations, on numerals, on parenthetical asides, on how a list should be phrased. The guidance's own comment on the pair is the right one: the system "is smart enough to generalize from the explanation".[2]

In lesson 2's terms, the reason puts the situation in front of it, and everything produced afterwards is produced given the situation. A bare prohibition puts one rule in front of it and nothing else.

:::checkpoint You are asking for a summary of a long report and you write "keep it factual". What reason could you add, and what would you expect it to change beyond the one instruction?
Something like: "This is going to the board, who will not read the report itself, so anything you assert they will act on as though it came from the report."

Notice what that adds beyond "factual". It says who the reader is, which shapes vocabulary and length. It says the summary will be acted on, which raises the cost of a hedge dressed as a fact. And it says the reader has no other access to the original, which is why "factual" mattered to you in the first place.

You've gone from a word that could mean four things to a situation where "factual" has one meaning.
:::

## The one that stops "more words is better"

The previous section invites a failure, and it's worth a section of its own, because it's where people go wrong next.

A consultant has a request that works. He decides that if context helps, more context will help more, so he adds three paragraphs about his firm's history, its founding partners and its values.

The answers get worse.

**What he added was length, not context.** Context means what bears on this task. His firm's values don't tell the system anything about which options to generate or how to phrase them, so those three paragraphs aren't support. They're material competing for attention with the instruction, and lesson 3 told you what a long input does to whatever is buried in it.

The test is a question you can ask of any sentence you are about to add: **if this sentence were false, would the answer I want change?** If it would, it's context. If it wouldn't, it's length.

Which is why "a longer prompt is a better prompt" is the wrong lesson to take from this course, and why the expenses request at the top runs to sixty words rather than six hundred.

## What people get wrong

**"There are magic words."** There is a whole literature of them, and lesson 1 mentioned a 2024 catalogue naming fifty-eight separate prompting techniques for text.[3] What survives contact with the mechanism is small: say what the thing is for, say what it must and mustn't do, say what the answer should look like, and give your reasons. Everything else is a special case of one of those, or an artefact of a particular system at a particular time.

**"Being polite improves the answers."** This one's actually been studied, and the answer is more interesting than either thing people say. A 2024 study ran tasks in English, Chinese and Japanese at different politeness levels and found that "impolite prompts often result in poor performance, but overly polite language does not guarantee better outcomes", and that "the best politeness level is different according to the language".[4]

So it isn't a dial you turn up. Being rude appears to cost something, being extravagantly polite buys nothing reliable, and where the best point sits depends on which language you're writing in, which nobody predicts. **The useful reframing is that "please" adds no context.** If a courteous sentence also explains the situation, it is earning its place as context and not as politeness.

**"You have to tell it what role to play."** The vendor guidance above does recommend setting a role, and is careful about what it claims: a role "focuses Claude's behavior and tone for your use case".[2] Tone and focus. It doesn't claim a role makes the system know more, and you shouldn't expect it to. "Act as a world-class copywriter" supplies a persona and no facts. "This is for a trade magazine read by plumbers, and the last three headlines we ran were too clever" supplies facts, and will do more.

**"There is a correct prompt for a task."** There isn't, partly because lesson 3's sampling means two runs differ anyway, and partly because the right request depends on what you want, which the system can't know. What there is, is a request that supplies enough, and several of those are usually available.

**"If it misunderstood, I should explain again."** Sometimes. But lesson 3's fresh start is often better, and the reason is the one in this lesson: a new request with the missing context built in is cleaner than an old one with four corrections stacked on top.

:::callout Where this guidance comes from, and its interest
The worked instruction pair and the role claim in this lesson are from Anthropic's own prompting documentation for its own models, read on 18 September 2026.[2]

That's a vendor writing about its own product, and this course says so once rather than implying it. The material is used here because it is a primary source on what the people who build one of these systems tell users to do, and because the two specific things taken from it are both general rather than model-specific.

The same page says something worth carrying: a technique measured on one model should be re-checked against your own evaluation before you apply it to another.[2] That's good advice, and it's also why this course teaches the reasons instead of the settings.
:::

## Practice

:::exercise The three-part rewrite
Take 30 minutes. You'll need a real request from your own work in the last week, not an invented one.

1. Paste the original request into a file. Do not improve it yet.

2. **Predict, in writing:** which of the three is missing, and what specifically will change in the answer if you supply it?

3. Rewrite it once, supplying whichever of context, constraints and form is absent. Beside each change, write which of the three it is. If you can't label a change, you're polishing rather than supplying, and it can come out.

4. Run both, in two fresh conversations.

5. Put the answers side by side and mark where they differ. Then answer the question that matters: **was the difference the one you predicted?**

6. Now the second half, and it's the one people skip. **Add three sentences that are not context**, something true about your organisation that does not bear on this task, and run it a third time. Note what happens.
:::

:::exercise The colleague test
Take 15 minutes.

The guidance this lesson quotes puts it plainly: "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too."[2]

1. Take the rewritten request from the first exercise to somebody who does not do your job. A partner, a friend, anybody.

2. Ask them to tell you what they would produce if you handed them that request. Not to do it. Just to say what they'd write and what they'd have to guess at.

3. **Write down every guess.** Each one is a piece of context you didn't know you were assuming.

4. If you have nobody to hand, read the request aloud to yourself and stop at every noun that means something particular in your organisation. That is a weaker version of the same test and it catches perhaps half as much.

The reason this works is that you can't see your own assumptions by reading. Somebody without your background can, and the guesses they report are the exact list of what to add.
:::

## Connections

**Back.** Lesson 2 said each piece of text is produced given everything in front of it, which is why a stated reason changes more than the rule it explains. Lesson 3 said everything in the conversation competes, which is why three irrelevant paragraphs cost you something. This lesson is the practical consequence of both.

**Forward.** Lesson 5 is the two techniques that go beyond stating what you want: giving examples, and asking for the steps. Lesson 6 asks the question this one doesn't, which is whether the task was worth handing over at all, and it'll show you that being good at asking isn't the same skill as knowing when to ask. Lesson 8 uses the form part of the checklist in a way you wouldn't expect, because an answer whose shape you specified is an answer you can check faster.

## Go deeper

- **Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165)** (2020), the abstract. Ten minutes, and it's where "the request is the specification" comes from.
- **[Anthropic's prompting guidance](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)**, the general principles section only. A vendor document, useful, and the first four headings are the ones that generalise.
- **Yin and colleagues, ["Should We Respect LLMs?"](https://arxiv.org/abs/2402.14531)** (2024). Short, and the cross-language finding is the interesting part rather than the politeness question everybody arrives with.

## Sources

1. Tom B. Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165), arXiv 2005.14165, 2020. Abstract read; the paper was not opened. Supports: the quoted sentence about tasks being specified purely via text interaction with no gradient updates or fine-tuning, and the claim that the request is therefore the whole control surface.
2. [Anthropic, "Prompting best practices"](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), read on 18 September 2026, the general principles section. Read in part. A vendor's guidance for its own models, named as such in the body. Supports: the "NEVER use ellipses" instruction pair and the comment that the system generalises from the explanation; the colleague test, quoted; the claim that a role "focuses Claude's behavior and tone for your use case"; and the page's own advice to re-check a model-specific technique against your own evaluation.
3. Sander Schulhoff and colleagues, ["The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608), arXiv 2406.06608, 2024. Abstract read. Supports: the count of fifty-eight text-based prompting techniques.
4. Ziqi Yin, Hao Wang, Kaito Horio, Daisuke Kawahara and Satoshi Sekine, ["Should We Respect LLMs? A Cross-Lingual Study on the Influence of Prompt Politeness on LLM Performance"](https://arxiv.org/abs/2402.14531), SICon 2024. Abstract read; the paper was not opened. Supports: the two quoted findings and the three languages tested. **It does not support any claim that politeness makes no difference**, which it contradicts at the impolite end, and it is a 2024 measurement rather than a statement about any product today.
