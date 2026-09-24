---
title: Asking for something
minutes: 100
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/using-ai-effectively/04-asking-for-something.mp3
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
      Without the process itself, the system has nothing to write about and can only produce the
      shape of a staff note, which is exactly what bland means. The request does supply a rough form
      and a rough constraint, since "a short note to staff" gives both, and that is the point:
      neither would rescue it, because a precisely formatted note about nothing is still about
      nothing. The nothing-is-missing answer confuses a clear request with a sufficient one, which is
      the distinction this lesson exists for.
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
      A vet is asking for a leaflet about kennel cough. Her request already names the audience, the
      length and the tone. She is considering adding one more sentence. Which of these would be
      context rather than length?
    options:
      - "The practice has been in the village since 1988 and is family run."
      - "Most of our clients walk their dogs on the common, where there was an outbreak in March."
      - "We are a small team and everybody here cares a great deal about animals."
      - "The leaflet matters to us and we would like it to be really good."
    answer: 1
    explain: >-
      Run each through the test: if this sentence were false, would the leaflet I want change? The
      common and the outbreak change it a great deal, because they decide what the leaflet has to
      warn about and who is at risk. The founding date does not. The sentence about caring is a
      claim about the practice rather than about the leaflet. And saying the leaflet matters rules
      nothing out, so it constrains nothing.
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
      expert hides the defect, since they will supply what is missing without noticing. Reading it
      aloud to yourself is the same test with you standing in for the colleague, which is why the
      lesson offers it as the fallback and says it works less well. And two colleagues producing two
      answers tests the task rather than the request.
  - q: >-
      A reader hears that being polite to these systems improves the answers. What does the measured
      evidence actually support?
    options:
      - Politeness made no measurable difference in any of the languages the study tested
      - Polite prompts did better in every language tested, by a small but fairly consistent margin
      - Rude prompts did worse, very polite ones were not reliably better, and the best point varied by language
      - Polite prompts did better in English and worse in the two other languages the study tested
    answer: 2
    explain: >-
      A 2024 study across English, Chinese and Japanese found exactly that shape, which is more
      interesting than any of the simple answers: not a dial you turn up, and not nothing either. The
      no-difference answer is contradicted at the rude end. The every-language answer is what people
      expect and is not what was found. And the English-only answer invents a pattern the study does
      not report, though it is the right kind of guess, since the study's real finding is that the
      best point moves with the language.
  - q: >-
      Which of these requests is most likely to produce something usable, and why?
    options:
      - "Rewrite this notice so a parent skim-reading it at the school gate gets the closing date, in under 60 words."
      - "You are an experienced school communications officer with a background in plain English. Rewrite this notice."
      - "Rewrite this notice so that it is much clearer and really works for the parents who will be reading it."
      - "Please would you very kindly rewrite the attached notice for me? It would be a great help. Thank you."
    answer: 0
    explain: >-
      It says who is reading, in what circumstances, what they must come away with, and how long. Each
      of those rules something out, which is what a constraint is. The role version supplies a persona
      and no facts about this notice or these parents. The really-works version uses words that rule
      nothing out. And the courteous version adds no context at all, which is the point the politeness
      evidence is usually asked to settle and cannot.
---

The same task, asked twice.

> Write something for the team about the new expenses policy.

> Write a short email to about forty office staff telling them that from 1 October, expense claims go through the new portal rather than by paper form, and that anything submitted on paper after that date will be returned. Most of them have not heard of the portal. Keep it under 150 words, do not apologise for the change, and end with where to get help.

The second is not better engineered. It contains things the first one doesn't: what changed, who is reading, what they already know, how long, what to avoid, and how to end.

That is the whole of this lesson, and the reason it works is in lesson 2.

## Why the request is everything

In 2020 the team behind GPT-3 published a result that made this a skill rather than a setting. The system, they wrote, "is applied without any gradient updates or fine-tuning, with tasks and few-shot demonstrations specified purely via text interaction with the model."[1]

Take that apart. Before this, getting a system to do a new task meant training it on examples of that task. After it, you describe the task in the text of the request and the system does it. Nothing is trained, nothing is configured, nothing is saved.

Which means **the text of your request is the entire control surface**, and the only one you have.

Put that beside lesson 2's paragraph and you can see why vagueness costs so much. Each piece of text is produced given everything in front of it. If what is in front of it is "write something about expenses", then what is in front of it is the *shape* of writing about expenses, and the shape is all you get back. Blandness is the system having nothing else to go on.

## Three things, and you can check for them in ten seconds

Not a template. A checklist, and most bad requests are missing one of the three.

**Context.** What this is for, who it is for, what has already been decided, what the reader already knows. In the expenses email: forty office staff, most of whom have not heard of the portal.

**Constraints.** What must be true, what to avoid, how long. Under 150 words, no apologising.

**Form.** What the answer should look like when it arrives. An email. Ending with where to get help.

Run through those three before you send anything that matters. Most of what goes wrong is one of them missing.

:::predict Look at a request you actually sent this week. Which of the three was missing? Write it down before you read on, then think about what came back.
My guess is that it was context, and that you feel you had explained the situation.

The reason it's usually context is that context is the part you cannot see you've left out. Constraints and form are things you know you want and might forget to say. Context is everything you know about the situation that you never thought to mention, because to you it goes without saying.

That is exactly what the colleague test at the end of this lesson is for.
:::

## Give the reason, not just the instruction

Now the move that surprises people most, and it comes with a worked pair from the people who build one of these systems.

Their guidance takes the instruction "NEVER use ellipses" and improves it to: "Your response will be read aloud by a text-to-speech engine, so never use ellipses since the text-to-speech engine will not know how to pronounce them."[2]

Both versions contain the same prohibition. The second adds why.

The second version changes more than the one rule. A system that has been told the text will be spoken has been told something bearing on sentence length, on abbreviations, on numerals, on parenthetical asides, and on how a list should be phrased. Anthropic's own comment on the pair is that "Claude is smart enough to generalize from the explanation",[2] which is a vendor's claim about its own model and is quoted here rather than endorsed.

The reason you can rely on without anybody's word for it is lesson 2's. Each piece of text is produced given everything in front of it, so a stated purpose puts the whole situation in front of it and a bare prohibition puts one rule.

:::checkpoint You are asking for a summary of a long report and you write "keep it factual". What reason could you add, and what would you expect it to change beyond the one instruction?
Something like: "This is going to the board, who will not read the report itself, so anything you assert they will act on as though it came from the report."

Notice what that adds beyond "factual". It says who the reader is, which shapes vocabulary and length. It says the summary will be acted on, which raises the cost of a hedge dressed as a fact. And it says the reader has no other access to the original, which is why "factual" mattered to you in the first place.

You've gone from a word that could mean four things to a situation where "factual" has one meaning.
:::

## The one that stops "more words is better"

The previous section invites a failure, and it is worth a section of its own, because it's where people go wrong next.

A consultant has a request that works:

> Draft three options for how we open Thursday's client presentation. The client is a mid-sized housing association, the project has slipped by six weeks, and we have to say so without losing them. About forty words each.

He decides that if context helps, more context will help more, and adds three paragraphs. Here they are in summary, and the useful thing is to run each one through a single test.

**The test.** Of any sentence you are about to add, ask: **if this sentence were false, would the answer I want change?**

*"The firm was founded in 1974 and has offices in four cities."* If it had been 1981 and three cities, would the three openings change? No. That is length.

*"We pride ourselves on candour and long client relationships."* If the firm prided itself on something else, would the openings change? Arguably yes, since candour is a register. But the request already says the slippage has to be said without losing the client, which is candour stated as a constraint on this task. So it is a restatement, and it competes with the sentence that said it precisely.

*"This client has worked with us twice before and both projects ran to time."* If that were false, the openings would change a great deal: the first slippage in a long good relationship needs a different opening from the third in a bad one. **That is context, and it is the one sentence of the three worth adding.**

So two thirds of what he added is competing with his own instruction, and the third is the thing he should have said in the first place.

**Context means what bears on this task.** Everything else is length, and the test above separates them in about five seconds.

Which is why "a longer prompt is a better prompt" is the wrong lesson to take from this course, and why the expenses request at the top runs to sixty words rather than six hundred.

## What people get wrong

**"There are magic words."** There is a whole literature of them, and lesson 1 mentioned a 2024 catalogue naming fifty-eight separate prompting techniques for text.[3] What survives contact with the mechanism is small: say what the thing is for, say what it must and mustn't do, say what the answer should look like, and give your reasons. Everything else is a special case of one of those, or an artefact of a particular system at a particular time.

**"Being polite improves the answers."** This one's actually been studied, and the answer is more interesting than either thing people say. A 2024 study ran tasks in English, Chinese and Japanese at different politeness levels and found that "impolite prompts often result in poor performance, but overly polite language does not guarantee better outcomes." It also found that "[t]he best politeness level is different according to the language."[4] The paper names the models it measured and this course has not read which, so take it as a 2024 result about systems of this kind rather than as a fact about the one you use.

So it is not a dial you turn up. Being rude appears to cost something, being extravagantly polite buys nothing reliable, and where the best point sits depends on which language you're writing in, which nobody predicts. **The useful reframing is that "please" adds no context.** If a courteous sentence also explains the situation, it is earning its place as context and not as politeness.

**"You have to tell it what role to play."** The vendor guidance above does recommend setting a role, and is careful about what it claims: a role "focuses Claude's behavior and tone for your use case".[2] Tone and focus. It does not claim a role makes the system know more, and you shouldn't expect it to. "Act as a world-class copywriter" supplies a persona and no facts. "This is for a trade magazine read by plumbers, and the last three headlines we ran were too clever" supplies facts, and will do more.

One practical note the guidance makes plain and most summaries drop: in its own examples the role is set as a **system prompt**, which is a separate field an ordinary chat user never sees.[2] In a chat window a role is simply the first line of your request, which is to say it is one more piece of context competing with the rest of it.

**"There is a correct prompt for a task."** There is not, partly because lesson 3's sampling means two runs differ anyway, and partly because the right request depends on what you want, which the system can't know. What there is, is a request that supplies enough, and several of those are usually available.

**"If it misunderstood, I should explain again."** Sometimes. But lesson 3's fresh start is often better, and the reason is the one in this lesson: a new request with the missing context built in is cleaner than an old one with four corrections stacked on top.

:::callout Where this guidance comes from, and its interest
The worked instruction pair and the role claim in this lesson are from Anthropic's own prompting documentation for its own models, read on 18 September 2026.[2]

That is a vendor writing about its own product, and this course says so once rather than implying it. The material is used here because it is a primary source on what the people who build one of these systems tell users to do, and because the two specific things taken from it are both general rather than model-specific.

The same page says something worth carrying: a technique measured on one model should be re-checked against your own evaluation before you apply it to another.[2] That's good advice, and it is also why this course teaches the reasons instead of the settings.
:::

## Practice

:::exercise The three-part rewrite
Take 30 minutes. You'll need a real request from your own work in the last week, not an invented one.

1. Paste the original request into a file. Do not improve it yet.

2. **Predict, in writing:** which of the three is missing, and what specifically will change in the answer if you supply it?

3. Rewrite it once, supplying whichever of context, constraints and form is absent. Beside each change, write which of the three it is. If you cannot label a change, you're polishing rather than supplying, and it can come out.

4. Run both, in two fresh conversations.

5. Put the answers side by side and mark where they differ. Then answer the question that matters: **was the difference the one you predicted?**

6. Now the second half, and it is the one people skip. **Add three sentences that are not context**, something true about your organisation that does not bear on this task, and run it a third time. Note what happens.
:::

:::exercise The colleague test
Take 15 minutes.

The guidance this lesson quotes puts it plainly: "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too."[2]

1. **Before you show it to anybody, write down what you think they will have to guess at.** Two or three items. This is the prediction, and the gap between your list and theirs is what the exercise produces.

2. Take the rewritten request from the first exercise to somebody who does not do your job. A partner, a friend, anybody.

3. Ask them to tell you what they would produce if you handed them that request. Not to do it. Just to say what they'd write and what they'd have to guess at.

4. **Write down every guess.** Each one is a piece of context you didn't know you were assuming, and the ones you did not predict are the ones worth having.

4. If you have nobody to hand, read the request aloud to yourself and stop at every noun that means something particular in your organisation. It is the same test with you standing in for the colleague, which is harder and works less well, because you know what the nouns mean.

The reason this works is that you cannot see your own assumptions by reading. Somebody without your background can, and the guesses they report are the exact list of what to add.
:::

## Connections

**Back.** Lesson 2 said each piece of text is produced given everything in front of it, which is why a stated reason changes more than the rule it explains. Lesson 3 said everything in the conversation competes, which is why three irrelevant paragraphs cost you something. This lesson is the practical consequence of both.

**Forward.** Lesson 5 is the two techniques that go beyond stating what you want: giving examples, and asking for the steps. Lesson 6 asks a question this one doesn't, which is which side of the line a task falls on, and it carries the finding that should worry anybody who has just read this lesson: the group in the consulting study who had been taught to prompt did best inside the frontier and worst outside it. Lesson 9 asks whether the task should have been handed over at all. And lesson 8 is where checking becomes a procedure.

## Go deeper

- **Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165)** (2020), the abstract. Ten minutes, and it's where "the request is the specification" comes from.
- **[Anthropic's prompting guidance](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)**, the general principles section only. A vendor document, useful, and the first four headings are the ones that generalise.
- **Yin and colleagues, ["Should We Respect LLMs?"](https://arxiv.org/abs/2402.14531)** (2024). Short, and the cross-language finding is the interesting part rather than the politeness question everybody arrives with.

## Sources

1. Tom B. Brown and colleagues, ["Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165), arXiv 2005.14165, 2020. Abstract read; the paper was not opened. Supports: the quoted sentence about tasks being specified purely via text interaction with no gradient updates or fine-tuning, and the claim that the request is therefore the whole control surface.
2. [Anthropic, "Prompting best practices"](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), read on 18 September 2026, the general principles section. Read in part. A vendor's guidance for its own models, named as such in the body. Supports: the "NEVER use ellipses" instruction pair and the comment that the system generalises from the explanation; the colleague test, quoted; the claim that a role "focuses Claude's behavior and tone for your use case"; and the page's own advice to re-check a model-specific technique against your own evaluation.
3. Sander Schulhoff and colleagues, ["The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608), arXiv 2406.06608, 2024. Abstract read. Supports: the count of fifty-eight text-based prompting techniques.
4. Ziqi Yin, Hao Wang, Kaito Horio, Daisuke Kawahara and Satoshi Sekine, ["Should We Respect LLMs? A Cross-Lingual Study on the Influence of Prompt Politeness on LLM Performance"](https://arxiv.org/abs/2402.14531), SICon 2024. Abstract read; the paper was not opened. Supports: the two quoted findings and the three languages tested. **It does not support any claim that politeness makes no difference**, which it contradicts at the impolite end, and it is a 2024 measurement rather than a statement about any product today.
