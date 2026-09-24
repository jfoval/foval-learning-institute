# Reviews: First Aid and CPR lesson 2, Danger, the call, and recognising cardiac arrest

## 2026-09-24 — Lesson 02 — Stage 4, two reviewers in parallel, Tier B (split)
**Reviewers:** F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and media),
each in a fresh context. F checked against the saved extractions of AHA Parts 4, 6, 7 and 10, the
ILCOR 2025 BLS manuscript, RCUK 2025 adult BLS and first aid, the ERC lay book, and the Red Cross,
911.gov, NHS, SCAS, SECAmb, St John, The Circuit and Defib Finder pages. P measured the lesson,
rendered the SVG at phone width in both themes, and read it against lesson 1 and `npm run taught`.

**Verdicts.** F: 0 critical, 8 major (three of them safety), 16 minor; neutrality passes, with two
leans (F9, F10). P: depth passes, pedagogy and cold start fail until fixed, voice and media pass
with minor fixes; 0 critical, 5 major, 12 minor. Lesson 1's reviewer P raised one more finding that
belongs here (L1-P22).

**Findings, Reviewer F:**
1. F1 [major] The lay no-pulse-check COR 1 is AHA Part 6, scoped to infants and children; the
   misconception list and quiz 5 applied it to adults. Part 7 says only "rather than using a pulse
   check", in supportive text.
2. F2 [major] The NHS fainting page's advice for a recovered faint is "See a GP"; the lesson taught
   NHS 111 as the NHS answer (quiz 4, card 2, body). SOURCES Part C 8 had dropped the GP line.
3. F3 [major, safety] The NHS call-999-after-a-faint list omitted "is not breathing" and "has not
   fully recovered or has difficulty with speech or movement" (a stroke sign). The error entered at
   SOURCES Part C 8.
4. F4 [major, safety] "Call again" was the only instruction for a person who stops breathing
   normally while you wait; no CPR.
5. F5 [major, safety] "The minimum" told a reader to compress on anyone who collapses and doesn't
   respond, with no breathing condition, and credited it to RCUK's three steps, which differ.
6. F6 [major] "Location comes first on every list" is contradicted by SCAS and the ERC, both quoted
   in the lesson; the transcript and the Ohio scene inherited it.
7. F7 [major] "The most common reason bystanders do not start": the AHA says "a common reason",
   the ERC "one of the biggest barriers".
8. F8 [major] "Better-supported" beside "very low certainty evidence" conflated strength of
   recommendation with certainty of evidence, in the course built on that difference.
9. F9 [minor] "Any doubt" (RCUK's phrase) attributed to the AHA in SVG box 4 and the checkpoint.
10. F10 [minor, neutrality] The Red Cross check-first page, consistent with the AHA order, was
    grouped with St John's lagging page; quiz 1 called check-first "the older order".
11. F11 [minor] 112 in the UK cited to RCUK, whose page doesn't say it.
12. F12 [minor] The AML quotation's comma may be an insertion.
13. F13 [minor] Strength and Fitness's callout misdescribed (fainting is in its see-a-doctor clause).
14. F14 [minor] "By his head" carried an RCUK attribution; it is the course's own.
15. F15 [minor] The transcript attributed two ways; SCAS's "ask for the ambulance service" missing.
16. F16 [minor] ERC's "may start by asking" hedge dropped.
17. F17 [minor] Quiz 2 explanation attributed "delay" to the AHA, which says "misdiagnose".
18. F18 [minor] One service's FOI (SECAmb) generalised to all UK services; quiz 6 set in Wales.
19. F19 [minor] "The content is the same page" of 911.gov: unverifiable.
20. F20 [minor] US location advice (landmark, cross street) went beyond 911.gov unlabelled.
21. F21 [minor, exercise safety] The speaker button exists only during a call.
22. F22 [minor] NHS CO "go outside" is addressed to the exposed person, not a rescuer.
23. F23 [minor] "The one position where CPR can't be done": overstatement.
24. F24 [minor] ILCOR paraphrase dropped "when deemed necessary" and the adult scope.

**Findings, Reviewer P:**
1. P1 [major] "Opens their eyes ... groans in answer" defined responsive, unsourced, while the
   lesson later says people in arrest can have open eyes and groan.
2. P2 [major] A US reader cannot meet objectives 2 (location) and 4 (non-emergency line); card 2 is
   UK only.
3. P3 [major] Quiz 2, 4 and 5 reused the body's own cases (card 3, the faint, the pulse-check
   misconception with its 47%).
4. P4 [major] No worked example with a gap.
5. P5 [major] The call-script exercise asked for the speaker button, which needs a live call.
6. P6 [minor] SVG box 4 restated the condition the US column had settled, over-attributed "any
   doubt", shared boxes used the UK colour, connectors stopped short of the step-2 boxes.
7. P7 [minor] Quiz key sole-longest in Q3 and Q5.
8. P8 [minor] Q6 stem vague; explanation answered a UK case with 911.gov.
9. P9 [minor] The five-a-side checkpoint said unresponsiveness alone decides it in the US.
10. P10 [minor] Same as F13, and the sentence interrupted the example.
11. P11 [minor] Cold start: compression-only, what3words, SCAS, five-a-side unexplained.
12. P12 [minor] Two predicts pre-answered by their headings; the seizure-vs-arrest check hidden in a
    predict answer.
13. P13 [minor] Table's last row compared a grade with a non-grade.
14. P14 [minor] Voice: "X, not Y" closers, "not only", "So the logic runs like this", "The mechanism
    is simple", "own/owns" boundary language, a fact-checker's note, "by the AHA's count", an
    unsourced superlative.
15. P15 [minor] Same as F5's attribution half.
16. P16 [minor] Same as F19.
17. P17 [minor] 911.gov's "Many 911 centers can tell you exactly what to do" gathered and unused.

**Finding from lesson 1's review:** L1-P22 [minor] "Lesson 1 ended in a kitchen": lesson 1's
kitchen is its first worked example; it ends on the bus stop and practice.

### Resolutions applied

**SOURCES.md corrected first** (inline, dated, plus a "Stage 4 note, lesson 2" section at the end):
Part C 8's NHS fainting list now carries all eight call-999 triggers and the GP advice (F2, F3);
D18's AML quotation has its semicolon, checked against the rendered PDF, p. 4 (F12). The note also
records the Part 6/Part 7 pulse-check scope (F1), the ERC stop condition, St John's definition of
responsive, the CO 111/999 lines and SCAS's question order.

**Fixed, all findings:**
- F3, F2 (priority): the body's 999-after-a-faint list now has every NHS trigger, including "not
  breathing" and "hasn't fully recovered or has difficulty with speech or movement"; the advice
  when none applies is a GP, as the page says. Card 2's answer the same. 111 is kept only where a
  source says it: "When to call 999" (not sure) and the NHS carbon monoxide page, now set out beside
  the fainting page as the 999/111 line.
- P1 (priority): responsive is now St John's definition, eyes opened when asked or a gesture in
  answer, with "the reaction has to be to you" and the explicit warning that open eyes and groaning
  occur in arrest.
- F1 (priority): the misconception and quiz 5 explanation give Part 7's adult wording ("rather than
  using a pulse check") and Part 6's paediatric COR 1 separately.
- F4: while-you-wait now says call 999 again on speaker and start CPR.
- F5, P15: the minimum conditions pushing on "not breathing normally, or you aren't sure", the stop
  condition is the ERC's (until the crew take over), and RCUK's three steps are "much the same".
- F6: location and conscious/breathing come first; SCAS's order credited; the England transcript
  now follows SCAS (breathing, then address), preceded by "ask for the ambulance service"; Ohio's
  call-taker asks address, callback number and what happened (911.gov's list, not an order).
- F7, F8, F24, P17: "one of the commonest reasons"; strength and certainty separated with a pointer
  to lesson 4; ILCOR's scope and "when needed" restored; 911.gov's "Many 911 centers" line added.
- F9, P6, P9: SVG box 4 is now the shared keep-going/AED step (RCUK, AHA, ERC); UK step 3 carries
  "abnormal or any doubt: CPR"; shared boxes outlined only; connectors reach the step-2 boxes with
  labels beside them; desc and caption updated. The checkpoint uses P9's wording.
- F10: Red Cross page "matches the AHA's recognise-first order"; catching up restricted to St John;
  quiz 1 says "the UK's pre-2025 order".
- F11, F12, F14, F15, F16, F17, F19/P16, F20, F22, F23: as suggested.
- F13/P10: the sentence removed from the example; Connections already makes the accurate point.
- F18, P8: what3words attributed to South East Coast and South Central; Q6 moved to Sussex, stem
  "What should you do?", explanation no longer cites 911.gov.
- F21, P5: the speaker practice is on an ordinary call to a friend, never an emergency call.
- P2: option (b), objectives narrowed to what was read (UK location; 999, 111 or a GP under NHS
  guidance); card exercise says Card 2 is under the NHS's guidance.
- P3: Q2 is now a Chicago hotel lobby with sighing and moaning (the ERC's words); Q4 is a new case,
  suspected carbon monoxide at home, testing 999 against 111 from the NHS CO page (taught in the
  999/111 section); Q5 is a gym poster, and its key no longer quotes 47%.
- P4: a checkpoint after observation 2 now hides observations 3 to 6 as the gap.
- P7: Q3 key trimmed, Q5 rebuilt and one distractor lengthened.
- P11: compression-only defined at first use; what3words glossed; SCAS spelled out; five-a-side
  glossed.
- P12: headings now "Jerking, then stillness" and "Feeling for a pulse"; the seizure-vs-arrest check
  moved out of the predict into the body.
- P13: the row is now "How strongly", COR 1 against RCUK's ungraded list.
- P14: every item, as suggested.
- L1-P22: "Lesson 1 left you in a kitchen, with your father on the floor and one question: what do I
  do first? Its answer was to call, on speaker." (matches lesson 1's kitchen section as it stands).

**Left:** nothing. P's note that the lesson runs over the outline's ~80 minutes stands: it measures
100, one sitting, with the natural seam before "Recognising cardiac arrest" if a split is ever
wanted.

**Final measures.** 7,789 body words (per `npm run minutes`), minutes 100. Quiz keys 1, 3, 0, 2, 0,
3; option lengths Q1 86/*78/86/86, Q2 93/90/90/*88, Q3 *105/102/106/98, Q4 92/84/*92/87, Q5
*98/102/95/92, Q6 91/95/87/*93: spreads 8 to 10, no sole-longest key. Each explanation read against
the option its key selects. `npm run validate` exit 0 with no warning for this lesson; `npm run
quotes first-aid` finds no miss in this lesson.

**Status after review:** clean.
