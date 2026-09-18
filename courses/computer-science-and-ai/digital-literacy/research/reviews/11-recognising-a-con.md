# Reviews: Digital Literacy lesson 11, "Recognising a con, and the ten minutes after you clicked"

## 2026-09-18 — Lesson 11 — depth, fact-check, neutrality, pedagogy, cold-start, voice, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **not ready**: five criticals, nine
majors, and the note that **all three recurring defects had recurred a fourth time**. All closed
below. `npm run validate` exited 0 throughout, so none of it was visible to the build.

Tier A, one reviewer, fresh context, run concurrently with lesson 12's.

### The five criticals

**L11-01 the lesson opened by telling the reader something false about lesson 1.** It said lesson 1
"made you a promise it has not yet paid" and deferred the phishing evidence to here. **Lesson 1
defers nothing.** It delivers the whole result in place at lines 89 to 105: the eight months, the
19,500 employees, the ten campaigns, the control groups, the null finding, the two percentage
points, the over-56%, the read-level disclosure, and a callout carrying the two-claims distinction.
I checked the text before acting and the reviewer is right. **Closed:** the opening now says lesson 1
gave the result and spent ten lessons building the picture needed to use it, which is what actually
happened and is a better opening.

**L11-02 the evidence section re-derived what lesson 1 already delivers**, with 28 shared 8-grams
including whole clauses. Every headline figure, the counter-position, the read-level disclosure and
the structural-defence list were being given to the reader twice in one course, the second time
framed as a discovery. **`npm run validate` skips its repeated-passage check on a course that is not
yet `published`**, which is queue item 4, so the reviewer was again the only thing that could catch
it. **Closed:** the section now recalls lesson 1 in two sentences and spends itself on the four
things lesson 1 had no use for: lure dominance, the median per-campaign rate, the consumption
figures, and the inference to structure. It is shorter and it earns its place.

**L11-03 "lure" is the lesson's load-bearing term and appears nowhere in lessons 1 to 10.** Zero
hits. It carried the central evidential claim and a quiz key. **Closed:** defined at first use.
Fourth consecutive lesson to fail a cold-start vocabulary check.

**L11-04 a structural-defence bullet contradicted lesson 10 in the exact scenario this lesson is
about.** "A second factor everywhere, because it turns a stolen password into an incomplete one" is
false for four of lesson 10's five rungs against a fake page, which is the attack on this page.
Lesson 10 teaches from CISA that app codes and SMS are not phishing-resistant, and its own
Connections says only the top rung survives this. **Closed:** the bullet now carries lesson 10's
caveat rather than dropping it, and says plainly that a second factor is a defence against the
automated attack and not this one.

**L11-05 the recovery procedure had no branch for the two commonest real outcomes.** It is a
credential-compromise procedure, and the section was framed as covering everything after a click.
A reader already locked out cannot do step 1; a reader who downloaded and opened a file is handed
seven steps that do not help and told a scan is not the priority. **Closed:** the section now names
what it is for, and adds a lockout branch pointing at lesson 10's recovery path and backup codes,
and one for the downloaded-file case pointing at lesson 9 and saying to disconnect the machine.

### The majors

**L11-06 the strongest pro-training figure in Ho's own paper was omitted while every figure against
was printed.** The 19% relative reduction among people who completed interactive training, with the
authors' own selection-effect caveat, is at the same read level as everything the lesson did print.
Defect 14: a fairness failure at the level of selection rather than accuracy. **Closed**, caveat
attached. **L11-07** the organising frame was hedged only in a footnote; the body said "a con has
three parts" flat. This is L10-08 recurring, whose resolution recorded the convention that a claim
beyond the sources is hedged in the body. **Closed. L11-08** the frame was presented as exhaustive
("everything else is decoration") and is not: a reply inside a thread the reader started fails part
one, and an invoice from a compromised colleague's account often has no pressure at all. **Closed
by naming both**, and by pointing out that the route rule covers them even though the structure does
not, which is a better argument for the route rule than the lesson had. **L11-09** "failing a
simulation" was never explained, and a reader who thinks 56% is a count of real attacks reads the
lesson's central number wrong in the alarming direction. **Closed. L11-10** the outline's specified
mechanism was labelled rather than taught; "makes careful thought feel costly" restates the label.
**Closed** with the outline's own paragraph: judging a message costs attention, a con makes that
attention expensive and puts a cheap action beside it. **L11-11** the misconception list corrected
over-trust five times and over-reading of the study never, in a lesson whose own body says the
conflation happens in both directions. **Closed. L11-12** the read-level disclosure covered only the
side the lesson argues against; Kweon and the earlier laboratory work were never opened at all and
reach the course through Ho's account of them. **Closed in the body. L11-13** one predict and one
checkpoint in 3,931 words, with none in the evidence section or the recovery procedure. **Closed**
with a predict before the click-rate figure and a checkpoint on why the password change precedes
signing out. **L11-14** the password-manager bullet gave the weaker of its two properties and omitted
the one that answers this lesson's own worked example, which is that autofill is domain-matched and
will not offer the password on a look-alike. **Closed**, and it now leads.

### Moderates and minors

**L11-15** four unsourced empirical claims, including one speculating about who writes phishing
messages that the course has no evidence for and should not have carried. All four rewritten or cut.
**L11-16** the telephone hold-the-line mechanism was the only claim in the file with no footnote and
nothing in SOURCES; **cut**, with the advice kept and marked as belt and braces. The checkpoint's
real argument, which is what the offer to hold reveals, is stronger without it. **L11-17** the
opening exercise pre-announced the predict block's answer, and did not say to avoid the spam folder,
where a reader would find three out of three and the predict block would be wrong for them. Both
fixed. **L11-18** four of six quiz items reused the body's examples and two asked about the lesson's
own editorial policy rather than the subject; two rebuilt. **L11-18b** quiz 1's option C answered a
different question from the stem and was eliminable without knowing anything; the item is now a
genuine school text where all three parts are present and the structure deliberately settles nothing,
which is the lesson's actual point. **L11-19** "since at least 2021" was a date invented to satisfy
decision 5 rather than found. Worth noting as a hazard: **a dating rule can push a drafter into
inventing a date**, and the honest move is to describe the shape without one. **L11-20** the quiz key
was the only compound option. **L11-21** the single link resolved to a conference homepage rather than
the paper; relabelled honestly. **L11-22** "7,089 organisations" dropped SOURCES' "Korean".
**L11-23** a banned word. **L11-24** an invented "three days". **L11-25** a universal claim about all
banks. **L11-26** an awkward objective.

### The recurring defects, and what was done about them

The reviewer confirmed **all three recurred a fourth time**: contractions at 0.76 per 1,000 with the
authorial count at zero (all three instances were inside quoted material), two "Here is" openers,
and about 21 compressed one-line morals against the eight that failed lesson 8.

**Two of the three are now checks rather than notes**, written earlier in the same session and
merged before this review landed. `npm run validate` now measures contraction density and quiz
option shapes. The contraction check caught this lesson, then buried it in a summary line behind
three assessment files that have been at zero for weeks, so it was changed again: **a draft gets a
named warning, a published lesson goes into the summary.** That is now how it reports.

The voice pass took this lesson from 4 contractions to 88 in 4,867 words, which is 18.1 per 1,000
against lesson 1's 8.6, and **that is above the house rate rather than at it**. I read the prose
rather than trusting the number and left it: the contractions sit in the conversational positions
and the definitional sentences keep their full forms ("Contact you did not initiate", "cannot be
undone by noticing afterwards"). If a later reader finds it breezy, the fix is to revert the
emphatic sentences and not to count.

**The third defect, the compressed morals, has no check and should not get one**, because the style
guide's ruling is "once in a while it lands, every paragraph it's a tic", and a count cannot tell the
two apart. It stays a review finding.

### What passed, so nobody rechecks it

**Every Ho et al. figure is exact against SOURCES.md**, all eleven checked individually, and the
lesson's claim in its own body that it makes no finer claim than the headline figures **is true**.
**Both forbidden items are clean**: no surname from the `unread:` line, the 15-month study described
without its authors, and Verizon's median-time figure absent with Verizon not cited at all, which is
correct given the PDF is unopened. **The no-checklist rule is obeyed and argued rather than
asserted**, and the reviewer called that argument the best-made thing in the lesson. **The
counter-position is kept separate from the finding everywhere it matters**, in the body, the quiz and
the misconception list; the failures around it were selection and disclosure, not conflation.
**Anti-fatalism lands.** **All three "builds on" claims for lessons 8, 9 and 10 verify against those
lessons' actual text**; only the lesson 1 claim failed. **Recovery step order is right where it was
defined**, and step 7, watching for the follow-up contact, is rare in the literature and is the best
paragraph in the lesson. **Mechanics clean**, and the quiz's measured shapes were already good before
the rebuilds.

### Two for the queue

The lesson points forward at lesson 13, which is not written; the course is `drafting` and this is
its convention, but it has to resolve before publish. And **the repeated-passage check being off on
drafts has now caused two criticals in three lessons** (L9-05 and L11-02), which is a stronger case
for running it as a draft warning than the one already in the queue as item 4.
