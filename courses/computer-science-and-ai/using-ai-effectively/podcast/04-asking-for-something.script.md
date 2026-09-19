---
source: courses/computer-science-and-ai/using-ai-effectively/lessons/04-asking-for-something.md
written_by: Claude, by hand, from the lesson text
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1) and Haley (S2). Fourth episode for Using AI Effectively. The episode leaves
  out the politeness study, the note on roles and system prompts, and both exercises.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Using AI Effectively, lesson four. Asking for something.

S2: The lesson opens with the same task asked twice.

S1: It does. The first version is: write something for the team about the new expenses policy. The second is longer. Write a short email to about forty office staff telling them that from the first of October, expense claims go through the new portal rather than by paper form, and that anything submitted on paper after that date will be returned. Most of them have not heard of the portal. Keep it under a hundred and fifty words, don't apologise for the change, and end with where to get help.

S2: And the lesson's claim is that the second isn't better engineered.

S1: It's that the second contains things the first doesn't. What changed, who is reading, what they already know, how long, what to avoid, and how to end. That's the whole lesson, and the reason it works is in lesson two.

S2: Why does the request matter that much?

S1: Because of a result from twenty twenty. The team behind GPT-3 wrote that the system is applied without any gradient updates or fine-tuning, with tasks and few-shot demonstrations specified purely via text interaction with the model.

S2: Unpack that for me.

S1: Before it, getting a system to do a new task meant training it on examples of that task. After it, you describe the task in the text of the request and the system does it. Nothing is trained, nothing is configured, nothing is saved. Which means the text of your request is the entire control surface, and the only one you have.

S2: And that connects to lesson two how?

S1: Each piece of text is produced given everything in front of it. If what's in front of it is "write something about expenses", then what's in front of it is the shape of writing about expenses, and the shape is all you get back. Blandness is the system having nothing else to go on.

S2: So what's the checklist?

S1: Three things, and it isn't a template. Context: what this is for, who it's for, what's already been decided, what the reader already knows. Constraints: what must be true, what to avoid, how long. Form: what the answer should look like when it arrives.

S2: And most bad requests are missing one.

S1: Usually context. And the lesson has a nice explanation of why it's usually that one. Constraints and form are things you know you want and might forget to say. Context is everything you know about the situation that you never thought to mention, because to you it goes without saying.

S2: Now the part I want to hear about, because you said it surprises people.

S1: Give the reason, not just the instruction. There's a worked pair in the vendor documentation this lesson quotes. The instruction "never use ellipses" is improved to: your response will be read aloud by a text-to-speech engine, so never use ellipses since the text-to-speech engine will not know how to pronounce them.

S2: Same prohibition. The second just adds why.

S1: And the why changes more than the one rule. A system told the text will be spoken has been told something bearing on sentence length, on abbreviations, on numerals, on parenthetical asides, and on how a list should be phrased.

S2: Does the vendor claim that?

S1: They say the model is smart enough to generalize from the explanation, and the lesson quotes that rather than endorsing it, and says plainly it's a vendor writing about its own product. The reason you can rely on without anybody's word for it is lesson two's. A stated purpose puts the whole situation in front of the system. A bare prohibition puts one rule.

S2: Give me a case.

S1: You're asking for a summary of a long report and you write "keep it factual". Now add a reason: this is going to the board, who will not read the report itself, so anything you assert they will act on as though it came from the report.

S2: And what did that buy?

S1: It says who the reader is, which shapes vocabulary and length. It says the summary will be acted on, which raises the cost of a hedge dressed as a fact. And it says the reader has no other access to the original, which is why "factual" mattered to you in the first place. You've gone from a word that could mean four things to a situation where it has one meaning.

S2: Right, but I can see where this goes wrong. If reasons help, surely more words help.

S1: That's the trap, and the lesson gives it its own section. There's a consultant with a request that works. Draft three options for how we open Thursday's client presentation. The client is a mid-sized housing association, the project has slipped by six weeks, and we have to say so without losing them. About forty words each.

S2: And he pads it.

S1: He adds three paragraphs. And there's a test for each sentence you're about to add. If this sentence were false, would the answer I want change?

S2: Try it on them.

S1: The firm was founded in nineteen seventy-four and has offices in four cities. If it had been nineteen eighty-one and three cities, would the three openings change? No. That's length.

S2: Next.

S1: We pride ourselves on candour and long client relationships. Arguably yes, since candour is a register. But the request already says the slippage has to be said without losing the client, which is candour stated as a constraint on this task. So it's a restatement, and it competes with the sentence that said it precisely.

S2: And the third?

S1: This client has worked with us twice before and both projects ran to time. If that were false, the openings would change a great deal. The first slippage in a long good relationship needs a different opening from the third in a bad one. That's context, and it's the one sentence of the three worth adding.

S2: So two thirds of what he added competes with his own instruction.

S1: And the third is the thing he should have said in the first place. Context means what bears on this task. Everything else is length, and the test separates them in about five seconds.

S2: Which kills "a longer prompt is a better prompt".

S1: And it's why the expenses request at the top of the lesson runs to sixty words rather than six hundred.

S2: What about magic words? There's a whole industry of them.

S1: Lesson one mentioned a twenty twenty-four catalogue naming fifty-eight separate prompting techniques for text. What survives contact with the mechanism is small. Say what the thing is for, say what it must and mustn't do, say what the answer should look like, and give your reasons. Everything else is a special case of one of those, or an artefact of a particular system at a particular time.

S2: And if it misunderstands me, I explain again?

S1: Sometimes. But lesson three's fresh start is often better, and the reason is this lesson's. A new request with the missing context built in is cleaner than an old one with four corrections stacked on top.

S2: That's the episode. We've left out what the evidence says about being polite to one of these, a note on roles, and both exercises. The full lesson is at Foval Learning Institute dot org. Thanks for listening.

S1: Thanks for listening.
