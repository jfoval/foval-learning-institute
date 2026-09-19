# Reviews: Using AI Effectively lesson 2, "What you are actually talking to"

## 2026-09-18 — Lesson 02 — facts, quotations, the diagram, sourcing, decisions, pedagogy, quiz, voice, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **PASS WITH NITS**, with three corrections
and a longer list of polish. All closed below.

Tier A, one reviewer, fresh context. The reviewer ran `npm run validate`, `npm run minutes`, a
normalised character-by-character diff of every quoted string against `research/SOURCES.md`, a
6-gram overlap scan against lesson 1, and a measured quiz-shape analysis.

**The quotations were all exact.** All five, character for character, and none of them trimmed a
qualifier. That is worth recording because it is half of this drafter's measured pattern; the other
half is what follows.

### The three corrections

**L2-01 the lesson told the reader they had learned something in Digital Literacy that Digital
Literacy does not teach.** The contrast section said "You know from the same course what a search
engine does". Digital Literacy never teaches search engines: the phrase appears twice in the whole
course, both times in passing about not trusting a download link, and its lesson 7 is about the path
from an address to a page rather than about search. Worse, the lesson's own Connections section then
named the two borrowed pictures as "the file system and the path from an address to a page", which
is what that course does teach and is not the contrast the body drew, so the lesson contradicted
itself two hundred lines apart. **Closed:** the search engine is now introduced from ordinary use
rather than attributed to a course, and Connections names one borrowed picture, the file system,
which is the true number.

**L2-02 the two load-bearing sentences were the course's own inferences wearing the textbook's
footnote.** "Nothing in the process ever counts a letter" and "there is no store of facts" are both
supportable from chapter 2 and neither is a claim chapter 2 makes; both sat in bold, unmarked,
immediately after a sentence ending `[2]`, which makes them read as the textbook's by adjacency.
Lesson 1 labels its own reconciliation explicitly and this lesson labelled nothing. **Closed:** both
now say in the body that they are this course's inference, and both source entries say what they do
and do not support.

The reviewer also caught the stronger form of the second one overshooting the truth, and this is the
better correction of the two. "No store of facts" is loose in a way an expert would catch, because
the parameters plainly do carry a great deal about the world, which is why the thing answers factual
questions correctly at all. **What is missing is a document to go and fetch.** The section is now
headed "There is nowhere to look it up" and says exactly that.

**L2-03 "That isn't my paraphrase" was false.** The core paragraph has three sentences and NIST's
quoted sentence supports the first and third; the middle one, about conditioning on everything in
front of the system, is nowhere in it and is lesson 3's subject. **Closed:** the lesson now says two
of the three come almost straight from NIST and names the third as lesson 3's, which is more useful
than the claim it replaced.

### The diagram

**L2-04 it was three paragraphs of the lesson retyped inside an `<svg>`.** Nine lines of text, no
arrows, no structure, every one a compression of a sentence in the three paragraphs immediately
above it, in the same order. Its accessibility mechanics were correct and its description accurate;
it simply taught nothing the prose did not teach faster. Standards 4.5's test is whether you can say
why the reader needs it, and the honest answer was no. **Closed:** redrawn as the picture the prose
cannot draw, which is a request reaching a store and coming back carrying something, against a
request with no store to reach. The third row's box is dashed and empty and labelled, and that box
is now the thing the section turns on. It is also referred to in the text, which it was not.

The reviewer suggested moving it into a `:::figure` block. **Not done, and the reason is recorded
here so the next reviewer does not repeat the suggestion**: `:::figure` in this repo takes a URL and
alt text and is for images. Every inline chart in Digital Literacy is raw HTML in the body, which is
what this is.

### Sourcing and decisions

**L2-05 the exemption was respected precisely.** Every `[2]` attaches to a chapter-2 claim and
nothing from chapter 7 or anywhere else is cited. The reviewer checked this specifically because
`course-wide.md` warns that the exemption keys to a lesson number rather than to a chapter.

**L2-06 `research/OUTLINE.md` was stale and told the next drafter the opposite.** Its lesson 2 entry
still said Jurafsky and Martin were on the `unread:` line and must be linked rather than cited,
which was true when the outline was written that morning and stopped being true when chapter 2 was
read. **Closed:** the outline now records the exemption and says chapter 2 only.

**L2-07 two decision 2 breaches.** The claim that giving the system a search tool helps "much less
than the vendors said" was a measured result stated with no date, no tool and no footnote; it now
carries "commercial legal research systems tested in 2024" and a source entry. And the flat "you
can't fix an error just by pointing it out" asserted what lesson 3 is planned to qualify; it now
says a correction changes the conversation rather than the system, and sends the reader to lesson 3
for what it does and does not reach.

**L2-08 the outline's spaced review was dropped.** It asked for lesson 1's baseline to come back as
the material for the prediction, and the draft never mentioned it. **Closed:** Connections now asks
for the baseline out and for any entry the lesson has changed the reader's mind about.

**L2-09 the outline's worked example had a second half that was cut and then tested.** It asked the
reader to ask the system why it got the letter count wrong, and to notice whether the explanation
for its own error is itself reliable. The draft cut that from the exercise and then set a quiz item
on exactly it. **Closed:** steps 4 and 5 of the first exercise put it back, and the quiz item now
tests something the lesson does.

### The quiz

**L2-10 two items tested the page rather than the idea.** The search-engine item's key was a near
transcription of the diagram's own two lines, so a reader who looked at the picture and read nothing
else could answer it; and the citation item restated the body's own headline example, with the
strongest distractor lifted from the checkpoint forty lines above. **Closed:** both rebuilt on cases
the lesson never works, a librarian explaining her catalogue against the new assistant, and a
finance officer given a fluent clause with a subsection number.

**L2-11 the self-explanation item's key was the only hedged option**, against "A great deal", "None
at all" and "A great deal", which is defect 5 by name: a test-wise reader picks the moderate option
without reading the stem. **Closed:** the options are now four flat statements of what to treat the
explanation as.

**L2-12 answer positions had three keys on index 1 and an adjacent repeat.** Now 0, 3, 1, 2, 3, 1,
with the key the sole longest option in 2 of 6.

### Voice

**L2-13 six one-line morals closing paragraphs**, in the same cadence, which the style guide allows
once in a while and names as a tic when repeated. The reviewer's observation is the useful part:
individually they were the best sentences in the lesson. Four have been absorbed into the paragraphs
they closed.

**L2-14 "Here it is, and then the rest of the lesson unpacks it"**, which is defect 7's recorded
"Here is" opener, on the lesson's most important section. Removed. **And "Unpack that"** two
paragraphs later, which is the banned "Let's unpack that" with the pronoun taken out. Replaced with
"Follow that through".

**L2-15 "That paragraph's the most useful thing in this course"**, a salesy claim about the course
in the course's own voice, which lesson 1 was careful never to make. Replaced with the count: nine
of the eleven lessons are that paragraph applied to something.

**L2-16 "this is the first time in the course you are being asked to predict and then check"** was
false; lesson 1 has two predict blocks. Removed rather than narrowed.

**L2-17 "it is the last time this course will point at them by name"**, a promise made on behalf of
nine unwritten lessons, one of which the outline already plans to break. Removed.

**L2-18 "retrieval practice" was the wrong name** for predicting an outcome you have not been taught;
that is the generation or pretesting effect. **Closed** by describing the effect rather than naming
it, and still pointing at How to Learn Anything.

**L2-19 references to "the question at the end of the fourth section"**, which nobody reading on a
phone can count. Replaced with the question itself.

### Left open

The reviewer noted that "fabricated" appears three times, and that NIST's own footnote objects to
"fabrication" on the same anthropomorphising grounds as "hallucination", which decision 3 reserves
for lesson 7 to frame. Reduced to one use in this pass. **Whoever drafts lesson 7 should decide
whether the course wants the word at all**, and if not, this lesson has one instance to remove.
