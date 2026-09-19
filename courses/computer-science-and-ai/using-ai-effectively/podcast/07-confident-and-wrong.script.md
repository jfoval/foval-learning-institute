---
source: courses/computer-science-and-ai/using-ai-effectively/lessons/07-confident-and-wrong.md
written_by: Claude, by hand, from the lesson text
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1) and Haley (S2). Seventh episode for Using AI Effectively. The episode leaves
  out the invented-reference worked case, the calibration study, the vendor-claim predict block,
  the misconception list and both exercises.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Using AI Effectively, lesson seven. Confident and wrong.

S2: And the lesson does something unusual with the word everybody uses for this.

S1: It uses hallucination once, on the first line, and then stops. The objection is in the standards body's own profile, in a footnote. Some commenters have noted that the terms hallucination and fabrication anthropomorphize GAI, which itself is a risk related to GAI systems as it can inappropriately attribute human characteristics to non-human entities.

S2: And NIST's own replacement?

S1: Confabulation, which has the same problem in a longer word. So the course says what it means instead. A confident false answer. Or a source cited for something it does not say. Those are plainer, and they name two different things, which turns out to matter.

S2: Right. Why does it happen?

S1: Two accounts, usually offered as rivals. They're compatible, and the reason to hold both is that they disagree about whether the problem can be fixed.

S2: First one.

S1: Structural. NIST puts it as the design working rather than failing. Confabulations are a natural result of the way generative models are designed: they generate outputs that approximate the statistical distribution of their training data. On that account there's a floor, because producing text that fits the shape of writing will sometimes produce text that fits the shape of true writing without being true.

S2: Does NIST say where it's worst?

S1: And the sentence is worth having because it predicts your own experience. The dynamic is particularly relevant when it comes to open-ended prompts for long-form responses and in domains which require highly contextual and slash or domain expertise.

S2: Open-ended, long, and specialist.

S1: Which is most of the work anybody would want help with.

S2: And the second account?

S1: Incentives. Posted in September twenty twenty-five by Kalai, Nachum, Vempala and Zhang. Their argument is that these systems guess because guessing is rewarded. Training and evaluation score a confident wrong answer and an admission of ignorance the same way, which is to say at zero, so there's never a reason to say I don't know.

S2: Like an exam with no negative marking.

S1: That's their own comparison. A student who should fill in every box. And what they propose follows from it, and it isn't a change to how the systems are built. It's a change to how the dominant benchmarks score answers, so that admitting uncertainty is worth something.

S2: So put the two side by side for me.

S1: The structural account implies a floor that better engineering lowers and doesn't remove. The incentive account implies a lever nobody has pulled. So the honest answer to "will this be fixed" is that nobody knows, and the lesson argues that's more useful than either confident version, because it tells you to keep checking without telling you to despair.

S2: Now the two failures, because you said they're different.

S1: An invented source is the first. An author who may exist, a journal that does exist, a title in the right style for the field, a year, a volume. Lesson two explained why it looks so right. A citation has a shape, that shape is all over the material these systems are built from, and producing a well-formed citation is exactly what a system producing well-shaped text will do.

S2: And that one's catchable.

S1: It fails at the first question. Search the title, search the authors, search the journal's index. Nothing. You lose a minute and you haven't lost anything else.

S2: And the second failure.

S1: A real source cited for something it does not say. And there's a worked case. A parish clerk asks how much notice the council has to give of an extraordinary meeting. The answer is fluent, about the right length, and it names an Act and a section.

S2: So she checks.

S1: The way anybody sensible checks. The Act exists. The section number exists inside it. Two questions, two clean answers, and at that point she's done more than the checking most answers get.

S2: And then?

S1: She opens the section, and it's about something else. Right Act, roughly the right area of the right Act, and it does not say what it was cited as saying.

S2: What caught it?

S1: Not searching, which passed. Not checking the section number was real, which passed. Only reading the section. Every check that was cheap came back clean, and the only one that worked cost her ten minutes and a trip to the legislation site.

S2: So the check is two questions.

S1: Does this source exist? And does it say what it's being cited as saying? The first is cheap and the second isn't, which is a good reason to expect the second to be skipped.

S2: Now, the objection I'd make. Mine searches real documents before it answers. Surely that fixes it.

S1: It's been measured, and the measurement is worth more than any argument either way. In twenty twenty-four a research team ran the first preregistered evaluation of commercial legal research tools. Products built for professionals, connected to real case law, sold on the claim that the problem had been dealt with. The providers had claimed that retrieval eliminates or avoids hallucinations and guarantees hallucination-free citations.

S2: And the result?

S1: The study's finding, and I'll say it in its own terms rather than read the sentence out with its brackets. Hallucinations are reduced relative to general-purpose chatbots, and GPT four is the chatbot they compared against. And the tools made by LexisNexis and Thomson Reuters each hallucinate between seventeen and thirty-three percent of the time.

S2: Both halves of that matter.

S1: And a summary that carries one of them isn't reporting the study. The reduction is real. Connecting a system to a document set does help, measurably, against a general chatbot. Anybody telling you retrieval does nothing is wrong.

S2: And the other half.

S1: Between seventeen and thirty-three percent is not solved. On tools sold to lawyers, tested in twenty twenty-four, that's between one answer in six and one answer in three.

S2: Were the three products similar?

S1: They varied enormously, which is why the per-tool figures are worth having. Lexis plus AI answered sixty-five percent of queries accurately and was the best of the three. Westlaw's AI-Assisted Research was accurate forty-two percent of the time. Ask Practical Law AI gave incomplete answers on more than sixty percent of queries. Three products built for the same job, by serious companies, differing by more than twenty points.

S2: Can I take those numbers to my own product?

S1: No, and the lesson is firm about it. Carry the shape: retrieval reduces and doesn't remove, and the remainder was large enough on professional products that a professional had to keep checking. Carry the definition: two failures rather than one. Don't carry the numbers. That's a measurement of three named products on a particular task in a particular year, and your product isn't one of them.

S2: Last thing. If an answer sounds confident, does that tell me anything?

S1: Fluency is a property of the text. That was lesson six's sentence about benchmark scores and it transfers intact. It isn't a measurement of anything and it isn't a report on the system's state. Digital Literacy made the same point about a padlock: a signal that costs nothing to produce can't tell you what you wanted to know.

S2: And distrusting the fluent ones instead?

S1: Hedging is a feature of produced text too. A reader who learns to distrust the confident answers and trust the careful-sounding ones has changed which non-signal they're reading, and not much else.

S2: That's the episode. We've left out the invented-reference worked case, a careful result on whether these systems know what they know, and both exercises. The full lesson is at Foval Learning Institute dot org. Thanks for listening.

S1: Thanks for listening.
