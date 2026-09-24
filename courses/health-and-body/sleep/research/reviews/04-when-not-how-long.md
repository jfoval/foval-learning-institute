# Reviews: Sleep lesson 4

## 2026-09-23 — Lesson 04 — Stage 4, all passes, Tier A
**Verdicts as returned:** depth pass with reservations, quotations pass (10 of 10 string-matched),
**unquoted claims FAIL**, **neutrality FAIL**, pedagogy pass with reservations, cold start with gaps,
voice pass with reservations. Twenty-five findings, none critical. Tier A follows lessons 1 to 3 of
this course; the neutrality pass ran inside it, as it did there.

### Findings

1. **[major] "Most of what light is going to do, it does early" is false on the lesson's own
   numbers.** One hour produced about 40 percent of the 6.7-hour amplitude, so the other 5.7 hours
   produced 60. The same error sat in the checkpoint and in quiz item 3's key, and it came from
   `SOURCES.md` §14's own commentary. **Applied** in all three places and in the research file.
2. **[major] An extrapolation to daylight and to four hours**, where the abstract has two points,
   one hour and 6.7. **Applied:** the lesson now says what the two points do and do not license.
3. **[major] "A relative risk attached to sleeping less than seven"**, the error lesson 3's review
   marked critical, back in the opening. **Applied.**
4. **[major] The mechanisms caveat was credited to a monograph not read and to "an institute" nobody
   could check.** Traced on 2026-09-23 to ISGlobal's announcement of 15 July 2019, where it is
   Manolis Kogevinas's own sentence, **in the same breath as "the evidence suggests a link"**. Quoting
   the caveat alone was defect 9. **Applied:** ISGlobal read in full, added to `SOURCES.md` §13 and as
   source 5, both halves quoted, the declared interest stated once. **The same trace found the
   research file's *Lancet Oncology* DOI pointed at a different item**; corrected.
5. **[major, neutrality] "Light before bed" failed the ideological Turing test**: the lesson's own
   source supports the people saying it, for anybody trying to sleep earlier. **Applied.**
6. **[major, neutrality] Every misconception corrected the alarmed side.** **Applied:** a
   complacent misconception added ("my body clock is fixed"), and the outline's "social jetlag is a
   diagnosis" restored at its search-summary read level.
7. **[medium, neutrality] "Night owls are undisciplined" was answered with something that does not
   refute it.** **Applied.**
8. **[medium, neutrality] In the IARC section the limiting side had the only full quotation and the
   last word.** **Applied:** the working group's judgement put in its own terms, Kogevinas's view on
   preventive measures quoted and labelled as one chair's view, not the classification and not
   advice, and a checkpoint for a reader who works nights.
9. **[medium] Where Group 2A sits was never said.** **Applied** from ISGlobal: second highest of four.
10. **[medium] Method detail beyond the read level** (sequential samples, suppression, "for days").
    Defect 22's second form, in miniature. **Applied.**
11. **[medium] Unlabelled inferences**: the crossover point, "probably right", "an overcast sky",
    "almost nothing you have been told". **Applied:** labelled, and the overcast sky cut.
12. **[medium] A cross-reference to "the next lesson's subject"**, which is memory. **Applied.**
13. **[medium] Go deeper gave the paper's read level to the questionnaire.** **Applied**, with links.
14. **[medium] Quiz item 1's key said no device reports sleep quality**, which is false. **Applied.**
15. **[medium] Items 2, 3 and 5 reused the page or tested recall.** **Applied:** item 2 is now a
    nurse driving home, item 3 drops the light box, item 5 is a friend's question.
16. **[medium] Adjacent answer repeat, items 1 and 2.** **Applied:** now 2,0,1,3,2,0.
17. **[medium, cold start] Circadian, biological night, PRC, Type 1 and lux never defined.**
    **Applied**, glossed once each, and IARC named as the WHO's cancer agency.
18. **[medium] One predict and one checkpoint.** **Applied:** Ana and Ben are now a predict, a worked
    mid-sleep example with its midnight step, and a checkpoint after IARC.
19. **[medium] The dim-light control group left out.** **Applied**, quoted.
20. to 25. **[minor]** "the first question" against lesson 8's order; the introduction sentence
    presented as a result; "shift" for amplitude; a fitted range described as observed; the
    associational word not flagged at the point of use; voice (a superlative, a "Here's" opener, a
    moral telling the reader why they came). **All applied.** The per cent and percent mix is
    left: the body uses the one and the quiz the other throughout the course, and a course-wide
    choice belongs in `course-wide.md` rather than in one lesson.

### Resolutions applied

Everything above except the per cent spelling. `npm run quotes sleep` initially reported the two new
ISGlobal quotations missing although both are in `SOURCES.md`: the matcher did not strip the `> `
a wrapped blockquote carries on each line. Fixed in `scripts/quotes.mjs` in the same commit; the
repo-wide count of misses fell by exactly those two. `minutes:` measured at 85. `npm run validate`
exits 0.
