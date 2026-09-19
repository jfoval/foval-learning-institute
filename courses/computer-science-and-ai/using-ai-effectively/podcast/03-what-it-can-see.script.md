---
source: courses/computer-science-and-ai/using-ai-effectively/lessons/03-what-it-can-see.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Every figure and claim below appears in the lesson. Nothing has been added that the lesson does
  not say. The course is in a neutral school with no standpoint to preserve. Fact-checked in a
  fresh-context subagent against the lesson on 2026-09-19: verdict PASS WITH NITS, and every nit
  was fixed in this file before rendering, including two quotations that had been trimmed of
  words the lesson prints.
about: >-
  About eight minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1) and Haley (S2). Third episode for Using AI Effectively. The episode leaves
  out the worked spreadsheet conversation, all three exercises, the misconception list, the
  callout on what the lesson deliberately omits, and the naming of temperature sampling, top-k
  and top-p.
speakers: 2
approx_minutes: 8
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Using AI Effectively, lesson three. The session, and what it can see.

S2: And the lesson opens with something everybody has noticed.

S1: You can put the same question to one of these systems twice and get two different answers. Most people notice that, decide it's a glitch, and stop thinking about it. It isn't a glitch. It's a decision somebody made on purpose, and once you know why, asking twice becomes a technique instead of a nuisance.

S2: That's one of three things in the lesson, I think.

S1: All three about the same question. What can the system actually see when it answers you?

S2: Start with the window, then.

S1: Lesson two gave the core paragraph, and flagged its middle sentence for this lesson: each piece of text is chosen given everything in front of it. Not everything it has ever read, which is finished and folded into the model. Not everything you've ever typed. Everything in front of it, right now. The textbook's version is that the model has access to the representations of all the prior tokens in the context window, but no tokens after the one it's working on.

S2: And how big is that window?

S1: This is where the lesson does something I liked. The same textbook chapter gives two different figures. The passage defining the mechanism says context windows consist of thousands of tokens. The chapter's own summary says transformer language models have a wide context window, hundreds of thousands to millions of tokens.

S2: Which is it?

S1: Neither is a measurement of any particular product, and that's the thing to take. It's a textbook characterising a class of system, in a draft dated August twenty twenty-six, and the number has moved every year for several years. Treat it as a snapshot. What doesn't move is the shape. A span, with everything in it available and nothing outside it available at all.

S2: And what's in the window isn't just what I typed. The lesson says it may include instructions from the company that built the product, some record of earlier conversations, an attached file, the results of a search.

S1: And you can't see most of that. The lesson's advice is to assume it's there rather than assume it isn't.

S2: So a long conversation gives it more to work with. That's good, surely.

S1: Right about half of it. The material really is all available at once, so something you said forty messages ago hasn't been forgotten. But available isn't the same as used well, and there's a measurement.

S2: Go on.

S1: In twenty twenty-three Nelson Liu and six colleagues studied how well these systems use long inputs, on two tasks: answering a question from a set of documents, and looking a value up by its key. They moved the relevant information around inside the input and watched what happened. Their finding is that performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts, even for explicitly long-context models.

S2: That last clause.

S1: Even for explicitly long-context models. A system advertised as handling an enormous window is not thereby a system that uses all of one evenly.

S2: And I want to be careful here. What did they actually vary?

S1: Position, inside one input. They didn't study conversations and they didn't measure whether long conversations get worse over time. The result supports one sentence: where something sits in a long input changes how well it's used. The lesson then makes a stretch and marks it as a stretch. If position matters that much inside one input, a long conversation, which is one long input by the time you reach the end of it, is a place where things get buried.

S2: Which is the course's reasoning, not the study's.

S1: The lesson says so in those words. A good working assumption, not a measurement.

S2: And practically?

S1: Two things. When a request really matters, put the important thing at the end. And when a conversation has gone badly wrong, don't correct it again. Start a fresh one and put the correction in from the beginning.

S2: Why does correcting again fail?

S1: Because of what's in front of the system by then. Correct the same misreading four times and your fifth correction arrives into a window holding four worked demonstrations of the thing you're trying to stop. Starting again isn't a fresh attempt at the same problem. It's the same request with the misreading absent.

S2: Now the two-different-answers thing. Why does that happen?

S1: At each step the system has a distribution over what could come next, a long list of possible pieces with a probability attached to each. It could take the most probable one every time. That has a name, greedy decoding, and the textbook says it's so predictable that it's deterministic: if the context is identical, and the probabilistic model is the same, greedy decoding will always result in generating exactly the same string.

S2: But that's not what products do.

S1: The textbook is blunt. In practice, however, we don't use greedy decoding with large language models. Because what it produces is generic and often quite repetitive. Instead, the choice of which word to generate is done by sampling from the distribution of possible next words.

S2: Sampling meaning choosing with the probabilities rather than always taking the top one.

S1: And two runs of the same request are two draws, and two draws can differ. The variation is the price of the text not being flat. The textbook says methods that stick close to the most probable words tend to produce generations rated by people as more accurate, more coherent, and more factual, but also more boring and more repetitive, while methods that give more weight to the middle of the list tend to be more creative and more diverse, but less factual and more likely to be incoherent or otherwise low-quality.

S2: So accuracy and interest are being traded off.

S1: By whoever built the product, on your behalf, and you can't set any of it in an ordinary chat window.

S2: Then what does one answer tell me?

S1: Less than it feels like. One run is one sample. The habit the lesson wants is this: when an answer surprises you, and it matters, ask again in a fresh conversation before you do anything about it. If the second agrees, you've learned something real about what this system reliably produces. If it doesn't, you've learned something more useful, which is that this is a question it's unsteady on, and unsteady is where the checking should go.

S2: And if they agree, that's not proof.

S1: Consistency isn't accuracy. A system can produce the same wrong thing every time. Lesson eight is where that gets its due.

S2: Last thing. Does it remember me?

S1: Three things happen when you correct one of these, and people believe the wrong one. Your correction goes into the window and usually takes effect, here. People think the system has learned, and it hasn't, because nothing about the model changed because you typed a sentence. And some products save part of what you said and put it back in front of the system next time. Several do, several don't, and some do only if you switch it on.

S2: So the course won't tell me which.

S1: It won't, because any such survey would be out of date before you read it. It's a fact about your product rather than about the technology, so the honest teaching isn't an answer. It's an instruction: go and find out, and write down the date you found out.

S2: That's the episode, and it leaves a good deal out: the worked spreadsheet conversation, three exercises including the one that sends you to your own product's documentation, the list of things people get wrong, and the names of the three ways that accuracy-against-interest trade gets made. The full lesson is at Foval Learning Institute dot org. Thanks for listening.

S1: Thanks for listening.
