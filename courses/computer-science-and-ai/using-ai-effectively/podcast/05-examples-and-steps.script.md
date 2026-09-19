---
source: courses/computer-science-and-ai/using-ai-effectively/lessons/05-examples-and-steps.md
written_by: Claude, by hand, from the lesson text
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1) and Haley (S2). Fifth episode for Using AI Effectively. The episode leaves
  out the charity's worked volunteering descriptions and the misconception list.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Using AI Effectively, lesson five. Examples and steps.

S2: And these are the last two techniques the course teaches.

S1: They are. Both have published results behind them, and both get misunderstood in the same direction, which is that people take them to be doing more than they do.

S2: Start with examples.

S1: Lesson four said the request is the specification. This is the part of the specification you can't write in sentences. Try describing the difference between two house styles of writing, or the tone of a particular kind of internal email, or what makes one colleague's meeting notes usable and another's not.

S2: You can get somewhere.

S1: You can't get all the way, because what you're describing is a form, and a description of a form is second-hand. So put the form itself in front of the system. Three or four real examples of what you want, and the description you were struggling with becomes unnecessary.

S2: Is there a number?

S1: The vendor guidance the course quotes has a tip: include three to five examples for best results. And two criteria that apply to anybody. Relevant, meaning mirror your actual use case closely. And diverse, meaning cover edge cases and vary enough that the system doesn't pick up unintended patterns.

S2: What's an unintended pattern?

S1: Say you're about to supply four example emails to show the tone you want, and three of them happen to be about invoices, because those are the ones nearest to hand.

S2: And it learns that the topic is invoices.

S1: Or that this kind of email always mentions money, or always opens with a reference number, or any other regularity that happens to run through the three without being the thing you cared about. A set of examples is a set of claims about what matters, and every accidental thing they share is a claim you didn't mean to make.

S2: So more examples.

S1: No, and this is the fix the lesson gives. Not more examples. Four examples that differ in everything except the thing you want.

S2: Anything else about how to supply them?

S1: One practical thing. Your examples have to be distinguishable from your instructions. Put them under a heading, or in quotation marks, or after a line saying examples follow. If they run straight on from your instruction with nothing separating them, some of what you meant as a sample reads as part of the brief.

S2: Right. The second technique. Asking for the steps.

S1: In twenty twenty-two a team published a result that surprised people. They put a handful of worked examples into a request, each showing not only an answer but the intermediate steps that reached it, and measured what happened on problems requiring several stages of work. Their headline sentence is that prompting a five hundred and forty billion parameter language model with just eight chain of thought exemplars achieves state of the art accuracy on the GSM8K benchmark of math word problems, surpassing even finetuned GPT-3 with a verifier.

S2: That's a real result.

S1: It is, and it deserves its reputation. It also deserves its scope, which the paper states and most summaries drop. It's a twenty twenty-two measurement. It's one model, identified in the abstract by its size and not by its name, so the course can't tell you which. It's grade-school maths word problems. And the paper's own framing is that these abilities emerge naturally in sufficiently large language models, which makes it a result about scale as much as about wording.

S2: So what can I carry?

S1: One sentence with its scope attached. On problems with several stages, asking for the steps changed the measured answer rather than only its presentation. Whether that holds for your task on your product this year is a question nobody has answered for you.

S2: Does this settle whether the thing is reasoning?

S1: The course declines that question, deliberately, and says so. The argument turns on what the word is being asked to mean rather than on any fact either side lacks. Nothing in how you use one tomorrow depends on the answer.

S2: Then what are the steps?

S1: Output. The standards body's profile says answers may also include confabulated logic or citations that purport to justify or explain the system's answer, and that models sometimes provide logical steps for how they arrived at an answer even when the answer itself is incorrect.

S2: Even when the answer is incorrect.

S1: The steps are produced the same way the answer is, by the same process, from the same model. They aren't a transcript of something that happened elsewhere and was then written down.

S2: So printed working isn't proof.

S1: A neat chain of five stages, each phrased confidently, is five more pieces of produced text, and the conclusion at the bottom can fail to follow from any of them. But there's a second consequence pointing the other way, and it's the reason to ask anyway. Steps you can read are steps you can check. An answer with no working gives you one thing to take or leave. An answer with five steps gives you six places to look.

S2: Six.

S1: Five steps and the join at the end. The steps aren't evidence. They're a handle.

S2: Give me the case, because I think I need to see it.

S1: A finance officer asks for the total cost of a three-year contract. Base year fourteen thousand four hundred pounds, with a three percent uplift each year from year two. Back comes: year one, fourteen thousand four hundred. Year two, times one point oh three, fourteen thousand eight hundred and thirty-two. Year three, times one point oh three again, fifteen thousand two hundred and seventy-seven. Total, fifty-nine thousand one hundred and nine.

S2: And she checks it.

S1: Line by line. Year two is right. Year three is right, to the pound. The uplift has been applied in the right years and compounded rather than repeated, which is the thing she was most worried about.

S2: And?

S1: The total is wrong. The three years come to forty-four thousand five hundred and nine. The figure given is that plus another fourteen thousand four hundred. Year one has been counted twice.

S2: Checking the steps didn't catch it.

S1: Because the error isn't inside a step. It's at the seam, between the steps and the conclusion, and a column of correct arithmetic is persuasive enough that most readers stop before they reach it.

S2: So what's the reading?

S1: Three separate readings, and they're not the same reading done three times. One: do the steps agree with the question? Three years, three percent, applied from year two. If a step has misread the brief, everything after it answers a different question correctly. Two: is each step right in itself? That's the one she did. Worth doing, not sufficient. Three: does the conclusion follow from the steps? Add them up yourself.

S2: And the third is the cheap one.

S1: Ten seconds, and it's the one that catches her case, and it's almost never done, because by the time you've read three correct steps you've decided the thing is careful.

S2: If somebody only had time for one?

S1: The third. Every time.

S2: That's the episode, and we've left out a worked example about a charity's volunteering descriptions and the list of things people get wrong. The full lesson is at Foval Learning Institute dot org. Thanks for listening.

S1: Thanks for listening.
