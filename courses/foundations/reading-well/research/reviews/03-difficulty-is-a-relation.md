# Reading Well, lesson 3: Difficulty is a relation

Newest review at the bottom.

## 2026-09-18 — Lesson 03 — depth, fact-check and pedagogy, Tier A
**Reviewer:** fresh-context subagent, full pass against SOURCES.md, OUTLINE.md, the editorial
standards, the style guide and `/review-lesson`. Verdict: stay Tier A, but three wrong facts, which
is a trigger for a second full pass after the fixes land. The reviewer also noted that the file
changed under it mid-review, because the quiz had been rewritten and committed while it was reading,
and it re-checked everything against the on-disk state.

**Findings:**

1. [critical] Footnote 2 named "Julianne Reynolds, Courtney Hattan and Paul Markham". The authors are
   Dan Reynolds, Courtney Hattan and Marissa Markham. SOURCES recorded no first names at all, so two
   of the three were invented by the drafter.
2. [critical] "reconstructed what had happened using wooden pieces on a model field, which is a
   clever way of measuring understanding without measuring writing" asserts that the reconstruction
   was *the* measure, when the study used several, and adds a methodological judgement that no
   abstract-level reading supports.
3. [critical] "The claim that prior knowledge is a large determinant of comprehension is well
   supported, from many directions, and is not in doubt" is the sentence the whole lesson rests on
   and it had no source. The lesson names no other direction, and quiz item 3's correct answer
   depends on it.
4. [high] The 2025 review's argument was misattributed. The lesson said it argues "the passages in
   these studies demand trivia and specialised vocabulary". The abstract says the *measures of
   knowledge* focused on vocabulary and trivia, and makes a separate charge against the *text*. The
   error originates in SOURCES.md, not in the lesson, and the lesson contradicted itself two
   paragraphs later by paraphrasing it correctly.
5. [high] The review's second finding, that "the most common baseball comprehension text was
   deceptively complex", is absent from lesson and SOURCES alike. It is the more damaging half for
   a lesson whose opening move is "the words are easy and the knowledge is missing", and leaving out
   the half that cuts against the lesson's own framing reads as motivated.
6. [high] The cricket paragraph fails on jargon and the lesson's word list was curated to hide it.
   "No word in the paragraph is technical in the sense of being unfamiliar. Round, wicket, length,
   followed, edged, slip, overs, captain, glove" omits *off-spinner* and *leg slip*, the two
   genuinely technical compounds. The lesson then conceded the opposite forty-four lines later. Worst
   of all, this is a lesson that teaches the 2025 objection that baseball studies measured jargon
   familiarity, resting on an example that commits it.
7. [high] "you read every word and got nothing. Not a vague impression: nothing" is overstated. A
   reader does get a vague impression, will check, will find they got a little, and will distrust
   what follows.
8. [medium] The three obstacles did not separate. The vocabulary signature was "you can point at
   them", and the lesson's own checkpoint then routed a word the reader can point at, *duration*, to
   missing background. Quiz item 1 rode on the same case.
9. [medium] The syntax worked example was not worked. "Then take the interruptions one at a time"
   never takes them one at a time.
10. [medium] The forward reference pointed at the wrong thing, promising a fairer test in the next
    section, whose plain-words example is a syntax demonstration rather than a knowledge one.
11. [medium] Neither worked example is a real text, against this course's standing convention of
    opening with a real text the reader can open. Lessons 1 and 2 both comply.
12. [medium] The Go deeper hand-off cited How to Learn Anything "lessons 1 and 3" for highlighting,
    which appears in its lessons 1, 2 and 6.
13. [medium] Four flat empirical claims about what most people do, none sourced and none sourceable.
14. [medium] A sneer the lesson cannot afford: the study "gets quoted constantly, including by people
    who have not looked at it closely", written by a lesson that read the abstract and the secondary
    accounts.
15. [medium] An outline element not delivered: Brysbaert on second-language readers, which SOURCES
    flags as a standing gap in the course's evidence base.
16. [medium] The readability misconception was uncited, and the outline's planned cross-reference to
    Writing Clearly lesson 1, which carries actual evidence, was missing.
17. [medium] `minutes: 40` did not cover an exercise step that asks for lesson 2's hour-long survey
    plus a chapter.
18. [medium] Two quiz items tested the page rather than the idea.
19. [low] One predict where the style guide asks for two or three; two Go deeper entries with no
    links; `/courses/how-to-learn-anything` missing the trailing slash the build writes; the claim
    that lesson 4 shows "a single rate is a fiction" when lesson 4's spine is a single figure; "why
    the captain made the change he made" overstated; no figure anywhere; "the author's own use of
    his words".

**Additional finding, from applying the above rather than from the review:** SOURCES.md and the
lesson both carried a quotation, "uniquely designed to make non-baseball fans appear to be poor
comprehenders of that text", attributed to a paper recorded as read at abstract level. **It is not
in the abstract**, re-read from the Semantic Scholar API on 2026-09-18, and nobody here has opened
the paper. Removed from both. The reviewer did not catch this, because it quoted the same sentence
back in its own proposed fix.

**Resolutions:**

1. Fixed to Dan Reynolds, Courtney Hattan and Marissa Markham, confirmed through Crossref and
   Semantic Scholar. A course-wide rule now says that where SOURCES has no first name, the footnote
   uses surnames.
2. Fixed to "one of several ways the study measured what they had taken in", and the judgement
   clause is cut. The footnote says so explicitly.
3. Fixed from the review's own abstract, which is the best evidence available and was sitting in
   hand: the reviewers grant that the links "have been widely documented for decades" and close by
   calling for "reliance on non-baseball studies". The lesson now makes that the answer, which turns
   its weakest sentence into one of its better ones.
4. Fixed in the body and in quiz item 3's stem. SOURCES.md is corrected at the root and the error is
   recorded in `course-wide.md`.
5. Added, with the sentence that says why it matters here more than elsewhere and that it cuts
   against this lesson's own framing.
6. Fixed by replacing the opener. It is now four lines of Hansard from 8 June 1875, verbatim, under
   the Open Parliament Licence and linked: a motion on the international rules for preventing
   collisions at sea, killed by a count-out before it was debated. Not one technical word in it, and
   a newcomer still reads the evening wrongly. The jargon concession is gone, replaced by a paragraph
   explaining why the opener is not about cricket, which is now a point in the lesson's favour rather
   than an apology. This also resolves finding 11.
7. Fixed, and improved by the replacement: the newcomer does not get nothing from the Hansard page,
   they get a confident and wrong reading, which is a more useful thing to demonstrate and is what
   the lesson now says.
8. Fixed with the discriminator the reviewer proposed. The vocabulary signature now includes "the
   test is whether a definition fixes it", and the checkpoint's answer is rewritten around it, so
   *duration* is taught as a knowledge gap wearing a vocabulary costume rather than as an
   inconsistency.
9. Fixed. The nested sentence is now peeled clause by clause, with the second predict block the
   style guide wanted placed where the reader has to do two of the peels. Resolves finding 19's
   predict item.
10. Fixed. The pointer now names the checkpoint at the end of the next section.
11. Resolved for the opener, see 6. **Declined for the syntax example**, which remains an invented
    sentence. A real deeply nested sentence is easy to find, but the invented one is calibrated to
    contain exactly three interruptions and no domain knowledge at all, which is what makes the peel
    teachable. The lesson says in its own voice that the sentence was built for the job.
12. Fixed to lessons 1, 2 and 3 in Go deeper, and the vaguer body version now says "its first three
    lessons" rather than naming a lesson that does not exist.
13. All four hedged to what they are, which is what the drafter has seen rather than what is known.
14. Replaced with a disclosure: this lesson read the abstract and the accounts rather than the paper,
    and says so before criticising it.
15. Added as a callout naming the limit, cited to Brysbaert for the one thing the sources do say,
    that second-language rates are lower, and saying plainly that the rest is a gap.
16. Fixed with a link to Writing Clearly lesson 1, which carries Gooding and colleagues 2021 and its
    518 readers. Citing Gooding directly here would need Stage 1 work; linking the lesson that
    already did it is what the outline asked for.
17. Fixed. The exercise step now states its own time and says it is a separate sitting, and `minutes`
    is 50 against a modelled 50.
18. Fixed. Item 1 no longer restates the body's bond checkpoint and now tests the discriminator on
    an unnamed case.
19. All fixed except the figure, which is now present: a three-block drawing of the obstacles with
    their signatures and fixes, and a caption naming the question that separates the first two.

**Status after review:** clean, and **a second full pass is owed**, because findings 1 to 5 were
wrong facts and `/review-lesson` calls for one after wrong facts are repaired. `npm run validate`
exits 0, `npm run quiz` reports nothing for this course, `npm run minutes` measures 50 against a
declared 50.

## 2026-09-18 — Lesson 03 — second pass after wrong facts, Tier A
**Reviewer:** fresh-context subagent, against the live Hansard record, Crossref, Semantic Scholar,
the History of Parliament Trust, the SPDX text of the Open Parliament Licence, and the four sibling
lessons. Verdict: every mechanical check clean, the blockquote verbatim, all four RRQ phrases exact,
the author names right, and **three critical findings, one of which is the first review's finding 6
arriving again in a subtler form.**

**Findings:**

1. [critical] **The new opener repeated the defect it was written to cure.** The lesson said no word
   in the Hansard passage is "a technical word wearing ordinary clothes, the way *slip* and *over*
   are in cricket writing", over a word list of single words: "Notice, taken, present, counted,
   adjourned". But "Notice taken" and "House counted" are the formal names of a procedure. A count
   required a member to rise and catch the Speaker's eye, strangers to withdraw, a two-minute glass
   to be turned, and the Speaker then to count. *Counted* there does not mean counted. **The word
   list concealed it exactly as the cricket list concealed off-spinner and leg slip, by splitting
   two-word terms of art into single ordinary words**, and the lesson conceded the point five lines
   later in its own bullet, as the cricket paragraph had conceded it forty-four lines later. The
   surviving cricket comparison was itself unglossed jargon in a lesson whose reader has never been
   shown a cricket example.
2. [critical] **Both licensing claims in the Sources note were wrong.** The Historic Hansard index
   states that material on the site remains under Parliamentary Copyright, so the lesson's claim that
   parliamentary copyright had expired was contradicted by the source it cited, and was a category
   error besides: statutory parliamentary copyright was created by the 1988 Act and covers material
   made from August 1989, while pre-1909 Hansard was produced by a private publisher. The Open
   Parliament Licence claim was asserted with no evidence and with no link to the licence, which the
   licence itself asks for. The quotation is safe. Only the justification was wrong.
3. [critical] **The repair of the first review's finding 3 promoted a background clause to "the best
   evidence available".** The reviewers' "widely documented for decades" is the subordinate clause of
   a concessive opener, the standard move that sets up a paper's contribution. It cites nothing and
   names no study. The first review's complaint was that the claim had no source; the repair did not
   find one. Quiz item 3's explain also asserted "the wider claim rests on many other lines of
   evidence", which the lesson nowhere supports.
4. [high] **The fact that most changes how the evening reads was one click away.** The page before
   this one reads "And it being now Seven of the clock, the House suspended its sitting. The House
   resumed its sitting at Nine of the clock." A thin House ten minutes after a dinner suspension is
   the ordinary setting for a count-out, and omitting it while keeping a bullet that said notice is
   "usually" taken by someone wanting the debate stopped is fairness failing at selection.
5. [high] "wrong in every part that matters", of the newcomer's reading. Every sentence of that
   reading is true. What the newcomer lacks is the significance. This is the first review's finding 7
   in new clothes.
6. [high] The Go deeper hand-off still named the wrong lessons. Highlighting is in How to Learn
   Anything's lessons 1, 2 and 6; the repair had written "1, 2 and 3", and lesson 3 of that course
   does not contain the word.
7. [high] Three of six bullets stated as fact things the reviewer could not confirm: that a member
   taking notice is "usually" one who wants the debate stopped, that "everything else on the paper
   that night died with it" (the record reports only what was reached, so the page cannot show it),
   and that such a motion "rarely gets another night" as a general claim.
8. [high] The syntax peel misdescribed its own sentence, saying the missing word was "held back until
   the end" when it is behind you, in *believed sufficient*, dropped as a repeated complement.
9. [medium] The second-language callout asserted four things about second-language reading and then
   said the course has no research on it; the bond checkpoint's definition of duration in fact gets a
   reader part of the way, so "exactly where you were" was wrong; the invented legal sentence carries
   *clause* and *schedule* as legal usages in a lesson that had just made "no technical words" its
   opening move; quiz item 2's explain rejected a true distractor on a false reason; "the room was
   empty" over a record that says fewer than forty; the figure's top block is a statement while the
   body calls it a question; the Connections paragraph hung this lesson's claim on lesson 4's
   between-adults spread rather than on lesson 4's own three-text exercise, which is the right
   evidence; "In 2025" attached the year to the reviewing rather than to the issue; and a gloss on
   what the reviewers' quoted phrase means was presented as their argument.
10. [low] The Hansard section title had its em dash silently swapped for a comma inside quotation
    marks; the motion summary dropped "to amend the same" and "if possible"; the lesson gave two
    different budgets for one survey; "the entire remaining record of that evening" is true of the
    Commons and the Lords also sat; "a domain with no history in it at all" reads as a claim about
    bond markets.
11. [medium] **The lesson has never had a neutrality audit and now needs one.** `course.yaml` sets
    `sensitive_domain: false` and then says individual lessons drawing examples from history,
    religion or politics still get the audit. This one now opens on a Victorian parliamentary
    manoeuvre, attributes a motive pattern, and called the outcome "shocking".

**Resolutions:** all applied, in the reviewer's own wording where it gave any.

Three are worth recording beyond "fixed". **Finding 1** was repaired by admitting the thing rather
than hiding it: the lesson now names "Notice taken" and "House counted" as terms of art in its sixth
paragraph and says that being unable to tell from the words is the point rather than an exception to
it, and the later paragraph no longer claims the swap as a clean win. That is a better lesson than
either the cricket version or the version this review found. **Finding 3** was repaired by saying out
loud what the warrant is worth: a background clause in an abstract, pointing at a literature this
course has not read, which tells you the people closest to the critique do not think it touches the
wider claim and does not tell you how strong that claim is. **Finding 7's** frequency claims were
either hedged or replaced with what the record shows, and the adjournment evidence was then verified
here rather than taken from the review: every Commons sitting in June 1875 was read off the site one
at a time, and thirteen adjourned after midnight, the latest on 17 June at a quarter past three in
the morning, with the Wednesday sittings ending around six in the evening by convention. The
seven-o'clock suspension and nine-o'clock resumption were read from the page itself.

**Status after review:** a **neutrality audit is out** and is required before publish under
`courses/CLAUDE.md` rule 6. No third full pass, because every finding here was local and the
reviewer said so; if the opener is rewritten again rather than patched, the wrong-facts trigger fires
and a third pass is owed. `npm run validate` exits 0, `npm run quiz` reports nothing for this course,
`npm run minutes` measures 55 against a declared 50, inside precision.

## 2026-09-18 — Lesson 03 — neutrality audit
**Auditor:** fresh-context subagent, against standards Part 3, `docs/VALUES.md` and the outline's own
neutrality note, checking the lesson against four perspectives: a parliamentary historian of the
reformed Commons, a knowledge-effects researcher in the Hirsch and Willingham line, a critic of the
Science of Reading movement, and a second-language reader. **Run because `course.yaml` says that
individual lessons drawing their examples from history, religion or politics still get the audit, and
this lesson's opener is now a Victorian parliamentary proceeding.**

It re-verified the whole opener independently and everything checkable held: the three lines verbatim
including the em dash, the motion quoted correctly, the "lament-able" line break, the dinner
suspension on the preceding page, thirteen of June 1875's twenty-two Commons sittings adjourning past
midnight with the latest on the 17th at a quarter past three, Hay never returning the motion, and all
four Reynolds quotations verbatim and correctly targeted.

**Must-fix findings, all four applied:**

1. [3.1] "The record does not report a defeat, because to the readers it was written for, nothing had
   gone wrong that needed reporting." The "because" asserts an editorial attitude the record cannot
   establish, and attributes an indifference to loss of life that nothing supports. It was the one
   sentence in a scrupulously hedged lesson that read a mind without a hedge. The real reason is
   duller and better: there was no defeat because there was no division. The motion lapsed.
2. [3.3] The "notice taken" bullet offered two motives and both were purposive, so the reader met a
   two-option menu in which both options were somebody acting with intent. The commonest cause, a
   member who can see the benches are empty and says so, arrived two bullets later. It now leads.
3. [3.3, 3.4] **The 2025 review was presented as a disinterested audit and its own abstract says
   otherwise.** It says these studies keep appearing in teacher journals, books and podcasts
   "especially within science of reading conversations", and closes by asking the field to build on
   non-baseball work. That is a live argument about how reading is taught and the reviewers are in
   it. The omission was not neutral in effect. The fix also cuts the lesson's way, and says so: their
   opening concession counts for more rather than less, because they grant the knowledge link to an
   audience with reason to want it qualified.
4. [3.1] "much more often a misdiagnosis of missing background" survived the earlier sweep that
   hedged four claims of exactly that kind, and it is the claim that most flatters the reader.

**What the audit found passing, recorded because a clean section is a result:** presentism, where the
dinner bullet and the adjournment times establish what "early" meant in that House's own terms and
supply the institution's routine as the default explanation before any tactical reading; the motive
refusal, which states what the record shows and then declines motive explicitly; even-handedness on
the baseball material, including the half of the critique that damages the lesson's own framing,
which the lesson says out loud; the disclosure that replaced the sneer, which is real rather than
performative because it goes on to decline a claim the lesson would like to make; no characterisation
of any named person that an adherent would reject; the second-language callout, which the audit
called the model the lesson's other hedges should copy; and nobody as the butt of anything.

**Two findings recorded and not fixed here.**

**The Hansard material had no `SOURCES.md` entry**, which `courses/CLAUDE.md` rule 1 says is how a
lesson fails an audit on exactly the gap it was drafted into. Every procedural claim in the opener
rested on no Stage 1 record. **Fixed in the same commit**: `SOURCES.md` now carries a full entry with
the read depth, what was verified and how, what the procedural claims rest on, the two phrases that
are terms of art, and the rights position with the error a draft shipped.

**Every worked example in this lesson comes from one world.** Parliament, landlord and tenant, bond
duration: three domains, all British professional-institutional, in a lesson whose thesis is that
difficulty is relative to the reader. The outline offered a liturgy as a third option and declining it
was right for a neutral school, since a scriptural or liturgical text used as the paradigm of opaque
language invites a reading the standards do not want. The exercise repairs the balance by sending the
reader to their own text. **An example from a non-professional world is owed eventually and is not a
blocker**, and the next drafter should know that the liturgy option was declined deliberately and
that taking it would be the point to revisit the course-level `sensitive_domain` setting.

**Third finding, answered:** the audit named a 3.4 domain nobody had noticed, which is **education**.
The knowledge-versus-general-skill dispute is live policy, and this lesson sits inside it. Its verdict
was that the lesson is on the right side of the line, because the claim it actually makes is the
narrow one about comprehension of a given text rather than the policy claim about curriculum, but
that must-fix 3 was the necessary remedy and is sufficient.

**Verdict: passes, with the four fixes applied.** No course-level change: `sensitive_domain: false`
is right for a course on how to read, and the qualifier already in `course.yaml` is what caught this
lesson, so the mechanism works as designed.
