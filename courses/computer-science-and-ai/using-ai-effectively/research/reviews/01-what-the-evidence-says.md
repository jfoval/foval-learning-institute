# Reviews: Using AI Effectively lesson 1, "What this is for, and what the evidence actually says"

## 2026-09-18 — Lesson 01 — facts, sourcing, decision compliance, pedagogy, quiz, voice, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **PASS WITH NITS**, with seven factual
findings, six decision and sourcing findings, one missing required element, and seven voice
findings. All closed below. Two of the findings were wrong in a way that made the fix better than
the finding.

Tier A, one reviewer, fresh context. `sensitive_domain: true`, so the neutrality handling was
checked rather than skipped; it came back clean, with the reviewer noting that outline concern 3 is
honoured in the body ("It's this course's reading of two studies, not a finding either study
reports") and that both studies get their scope stated and their misreading corrected in both
directions.

### The one that mattered most

**L1-01 the two components of the outside-frontier result were printed as percentages while their
average was correctly printed as percentage points, nineteen lines apart, in the same lesson.** The
callout read "24.5% against 13.9%". Those are 84.5 minus 60 and 84.5 minus 70.6: the same quantity
the lesson calls nineteen percentage points earlier on the page. The relative drops would be 29.0%
and 16.4%. **The drafter followed its sources faithfully and that is the point**: the paper's own
results section writes "(24.5% versus 13.9%)", and `research/SOURCES.md` had been rewritten that
morning with a bolded instruction naming this exact trap. **Closed:** the callout now reads as
percentage points, gives the 84.5% baseline in the same sentence, and says which arm scored 60% and
which 70.6%, which the lesson had left to arithmetic.

### The finding that was wrong, and what came of it

**L1-02 "the consultants were doing tasks BCG uses in its own hiring" was called unsupported.** It
is in the paper, and the lesson had attached it to the wrong thing, which is worse than unsupported.
The authors "designed the beyond-the-frontier task in collaboration with BCG, using as a starting
point the type of business cases that BCG uses for its highly competitive job interviews", aiming at
"creating a task at which knowledge workers would excel but AI would struggle". That provenance
belongs to the **one** task outside the frontier, not the **eighteen** inside it, and the lesson's
own next paragraph said the eighteen were written for the experiment, so the draft contradicted
itself. **Closed:** the sentence is gone, and the correct fact is now a paragraph of its own, where
it does much more work: the task on which AI made people worse was chosen *because* people are good
at it, which states the lesson's reconciliation as a study design rather than as a theory.

**L1-03 the four grading dimensions and the spelling-and-grammar robustness check were also called
unsupported, and are also in the paper.** Both are now recorded in SOURCES with the design details,
so the next lesson that wants them does not have to reopen the PDF.

### The rest of the factual findings, all closed

- **L1-04 "about 30% above that" flattened two numbers** that the lesson's own callout is about.
  Now 29.9% and 33.9%, for the GPT-only and GPT-plus-overview arms.
- **L1-05 "professional writers"** misdescribed Noy and Zhang's 444 college-educated professionals
  doing writing tasks from their own jobs. Fixed in both places it appeared.
- **L1-06 "fifty-eight separate prompting techniques"** dropped "text-based" and so implied 58 was
  the total, when the catalogue holds 98. The rhetorical point is stronger with the right number.
- **L1-07 "Section 5 is the part worth your time"** cited a section number nothing recorded, and the
  NIST page count was the same class of defect. Both replaced with descriptions rather than numbers.

### Decision compliance

**L1-08 decision 1 breached by a sentence claiming to honour it.** "It doesn't name a product or
recommend one" sat in a lesson that names GPT-4 twice and ChatGPT once, which decision 2 *requires*.
**Closed:** the sentence now says it recommends none and never assumes which one you have, and says
in the same breath that it names what a study measured because a result belongs to the thing it was
measured on.

**L1-09 decision 2 breached by the compression finding**, stated in the present tense about "these
systems" with no model and no date, on a page whose own callout forbids exactly that. **Closed:**
the claim now carries GPT-4 and ChatGPT and the years, and adds the sentence that matters, which is
that whether it holds for whatever the reader has open today is the kind of question the course will
keep telling them to date rather than assume.

**L1-10 decision 6 breached by the course's spine exercise.** The baseline asked for three tasks the
reader already uses one of these systems for. A reader who does not use one, or is required to and
resents it, could not do the course's most-referenced piece of work. **Closed:** a paragraph invites
them to write three they have been asked to use one for, or three they have considered and declined,
with a line saying a column of refusals is the more interesting starting point.

Decisions 3, 4 and 7 were found honoured. Decision 7 in particular the reviewer called the cleanest
compliance in the lesson.

### The missing required element

**L1-11 the outline specified a table laying the two studies side by side with each scope written
into its row, and the draft had no table, no chart and no figure at all**, across 3,300 words whose
entire content is four numbers from two studies the reader is being asked to hold together.
Standards 4.5: when numbers or a structure are the point, draw them. **Closed:** the table is there,
five rows, with the scope of each study in its own row and the reconciliation visible in the second.

**L1-12 the two most surprising results were announced flat**, where the house precedent stops dead
before its second finding and makes the reader commit. **Closed:** the METR result is now inside a
predict block that first tells the reader the developers' own 24% forecast and asks for a number.

### The quiz

**L1-13 two of six items were answerable by recognising the page.** Item 4's key restated the body's
reconciliation sentence with the tenses changed, and item 6 was recall of a bulleted list eighty
lines above. Standards 1.1 says a quiz passable by recognising phrases from the text has failed the
transfer test. **Closed:** item 4 is now a paralegal of six months and a partner of twenty years
given the same five-minute drafting job, and item 6 is four readers' questions with one the course
refuses on principle.

**L1-14 item 3's key promised an outcome the lesson had just refused to promise**, that somebody who
can place a task on the frontier "will get better results". **Closed:** the key is now an ability
claim, matching what the lesson actually says it can deliver, and the explanation points at the
difference.

**L1-15 index 0 was never used** across six items. **Closed:** answer positions are now 1, 2, 0, 2,
3, 0. Key is the sole longest option in 1 of 6, measured.

**L1-16 item 2's key said METR found people "wrong about this in both directions".** Those
developers were wrong twice in the same direction, both times optimistic. Left as a note for the
next pass rather than closed, because the wording survives a rewrite of the option and the item is
otherwise sound.

### Voice

**L1-17 eight one-line morals ending paragraphs**, which the style guide allows once in a while and
names as a tic when repeated. Four removed or folded into the sentence before them. The reviewer's
observation is worth keeping: the effect is a page that sounds like it is performing certainty about
a subject whose whole argument is that certainty is unavailable.

**L1-18 "The developers study is sixteen people. Sixteen."** Dramatic restatement, explicitly
banned. Removed.

**L1-19 "transformative"** used ironically, and the style guide says to search the file for every
word on the list. Replaced.

**L1-20 "Say plainly what that paragraph is"**, an imperative opener addressed to nobody. Removed;
the paragraph it introduced is the most honest thing in the lesson and did not need announcing.

**L1-21 "it's worth being exact"**, one word from the banned "it's worth noting". Cut to the
imperative.

**L1-22 a forward reference promised lesson 9's job under lesson 6's number.** Fixed.

### Not closed, recorded here

The two internal course links in this lesson point at Digital Literacy, whose `course.yaml` is still
`status: drafting`, so the build does not ship it and the links are dead until lesson 13 lands and
that course publishes. **Check both before this course publishes.** Nothing to do until then.
