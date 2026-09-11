# Reviews: Writing Clearly, lesson 1 — What actually happens when someone reads you

## 2026-09-10 — Lesson 01 — depth, fact-check, pedagogy, voice and media, Tier A
**Reviewer:** one subagent, fresh context, all passes except neutrality (see N below).
**Verdict on the draft:** not at standard. The lesson's organising model was a misreading of its
own primary source, and the chart put that misreading in its largest type.

### Findings

**Depth**

1. [major] **D1.** "One line is the time a reader would need... The other is the time the reader
   actually gives, at 25 seconds plus 4.4 seconds per 100 words", and the conclusion "**A reader
   will finish about 130 words**". The 25-second intercept is not reading time. Nielsen: "people
   spend some of their time understanding the page layout and navigation features, as well as
   looking at the images." So the two lines are not comparable at the origin, the crossing point
   is an artefact, and 130 words is a number the source does not contain. Nielsen's own
   length finding is different: "Users read half the information only on those pages with 111
   words or less."
2. [major] **D2.** "So each extra hundred words is funded at a little under a fifth of its cost.
   That is where the 20 percent comes from." It is not. Nielsen's 28% is the ratio for his
   average 593-word page, and 20% is his discount for time not spent reading. 4.4/24 = 18% is a
   coincidence of the marginal rate.
3. [major] **D3.** No worked example anywhere (standard 1.2), while exercise steps 2 and 3 ask
   the learner to run arithmetic the lesson never demonstrates on a real document.
4. [major] **D4.** No "Go deeper" section. Required by 1.2.
5. [minor] **D5.** "it costs people money, appointments, medication and jobs" — four claims, no
   source, no case.
6. [minor] **D6.** The outline's F-shaped scanning material and its planned 20%/28% chart bands
   are unused.

**Fact-check**

7. [major] **F1.** The 25-second intercept used as attention paid to words. Wrong; see D1.
8. [major] **F2.** "users will have time to read 28% of the words," quoted with the qualifier
   removed. Original: "...28% of the words **if they devote all of their time to reading**."
   This is the trimmed-qualifier trap the command warns about.
9. [major] **F3.** "An adult reading carefully manages somewhere around 250 words a minute" and
   the callout's "a standard figure for adult reading of ordinary prose". The 250 is Nielsen's
   own choice for an unusually literate sample: "Usually, I assume a reading speed of 200 words
   per minute (WPM), but because the users in this study are highly literate, I'll go with 250
   WPM." Attributing it to adults in general overstates it, and the true version strengthens the
   lesson's caveat rather than weakening it.
10. [major] **F4.** "the analysis excluded pages with very high word counts, such as academic
    papers and terms and conditions". Nielsen's stated removals were page views under 4 seconds,
    over 10 minutes, and pages under 20 words. The academic-paper remark is a comment, not an
    exclusion: "Pages with a huge word count are probably not 'real' pages anyway". Quiz item 2's
    explanation repeated the error.
11. [minor] **F5.** "That is the whole answer" after the GOV.UK quotation, presenting the
    guidance as asserting a preference rather than reporting research behind its policy.
12. [minor] **F6.** Gooding et al. cited as "ran a study... Two findings matter here" without
    saying the course read the abstract only, which `research/SOURCES.md` records. The lesson
    also added "feel difficult", which the abstract does not say.
13. [minor] **F7.** "visible at a glance, from three metres away" — the distance is invented.
14. Verified, no action: the 45,237 page views, 5 May 2008, the 25-second and 4.4-second figures,
    the Weinreich attribution and quotation, "above-average intelligence, with several being
    university employees", the 593-word average page, the GOV.UK literacy figure and mandate, and
    the Plain Writing Act quotation.

**Neutrality**

15. [minor] **N1.** The pass was otherwise skipped: a lesson on reading behaviour carries no
    contested or value claims, and auditing it for balance would be money spent on nothing. One
    exception found and worth recording. `SOURCES.md` lists "Do readability formulas measure
    anything useful?" as a **contested** question and records that no primary critique was
    opened. The heading "Difficulty is not a property of your document" and the sentence
    "difficulty turns out to be a relation between a text and a reader, not a property of the
    text" asserted the course's side as settled, on a study whose own first finding is that
    reading behaviour differs with the text's level.

**Pedagogy**

16. [major] **P1.** Four of six quiz items reused the body's own cases, two of them verbatim: the
    hospital letter, the pension page, the GOV.UK quotation, and "Residents of the borough" with
    its own answer copied from the prose. That tests recall of the page, not the idea.
17. [major] **P2.** Item 1 applied the web-browsing figure to a notice on a village hall door,
    which is exactly the misuse item 2 then punished, and its key rested on D1's phantom
    crossover.
18. [minor] **P3.** Option shapes measured: spreads 4 to 14 characters, all four indices used, no
    adjacent repeat. Two items (1 and 3) had only one option carrying no absolute, so "the one
    without 'always' or 'exactly'" was a free route to the key.
19. [minor] **P4.** The first `:::predict` sat after the 20 percent figure had already been given,
    so the prediction was half-revealed.

**Voice and media**

20. [minor] **V1.** No em dashes, no en dashes, no banned words. One contraction in 2,700 words,
    against the style guide's "their absence is the fastest way to sound like a manual".
21. [minor] **V2.** "Here is the part that gets left out..." — the opener in the drafter's defect
    list.
22. [minor] **V3.** Five bold one-line morals ("That is the sentence worth keeping", "That is the
    whole answer", "It has one text, meeting different readers", and two more). The word "worth"
    five times in five different sentences.
23. [minor] **V4.** Textbook and salesy sentences: "Not what ought to happen. What the evidence
    says does."; "the finding stops being a slogan"; "One more idea, and it undermines something
    you have probably been told to trust"; "where the real work is".
24. [major] **V5.** `minutes: 40` against a measured 65 (`npm run minutes`). The exercise had no
    timing cue, so the tool could not see it at all.
25. [major] **V6.** The chart. Its headline stated D1's misreading in the largest type on the
    page. The red line's endpoint did not match its own axis scale and rose above the top of the
    y-axis. The label "they cross at about 130 words" was struck through by the red line. The
    viewBox was 560, so 15-unit labels rendered at about 9.6px on a phone, under the 10px floor,
    and the chart is the one place a phone reader met the claim.

**Block grammar**

26. **B1.** Clean. All blocks open `:::kind` and close with a bare `:::`, bodies have blank lines,
    no nesting, no blank line inside the `<svg>`.

### Resolutions

**Rewritten, rather than patched.** D1, D2, F1 and F2 are the same defect at four depths: the
lesson was built on a model its source does not support. The crossover, the 130-word figure and
the "where the 20 percent comes from" derivation are gone. In their place the lesson now gives
Nielsen's own chain: the 593-word average page, 28 percent "if they devote all of their time to
reading", 20 percent realistically, and the 111-word half-read figure, with the 25 seconds named
as arrival cost in his words. The section heading is now "The two lines, and the gap between
them", and the chart's headline is "The time given never catches up".

1. D1, D2, F1, F2, F5 — fixed as above.
2. D3, P0 — fixed. The landlord's 900-word email from the opening is now worked in full in the
   body: 25 + 39.6 = 65 seconds given against 216 needed, 30 percent as a ceiling. The exercise
   points back at it ("the way the landlord's email was worked above").
3. D4 — fixed. A "Go deeper" section with four items: Nielsen in full, the Weinreich paper he
   reanalysed, the GOV.UK legal-language research, and the Gooding paper.
4. D5, F7 — fixed by cutting both.
5. F3 — fixed. Nielsen's sentence is quoted in the callout, including his usual 200 wpm, and the
   callout now says the gap is wider at 200, not that the shape moves.
6. F4 — fixed in the body and in item 2's explanation; the lesson now says he treated huge pages
   as probably not real pages, which is what he said.
7. F6 — fixed. The body says "so a text's level is real and shows up in how people move through
   it" without "feel", and the Sources entry says "Read at abstract level."
8. N1 — fixed. The heading is "Difficulty is not **only** a property of your document"; the
   paragraph now says the contested question is argued about and that this lesson does not settle
   it, keeping the narrow and defensible claim about what a formula can tell you.
9. P1, P2 — fixed. Five of six items have new cases: an intranet expenses announcement at 600
   words (the average page, so the arithmetic is Nielsen's own), a mortgage offer read by a
   solicitor and a first-time buyer, an engineer in a meeting, a school trip letter. Item 2 (the
   hospital letter) is kept deliberately: it is the "where the figure does not apply" test and the
   lesson's own case is the right one to reason about.
10. P3 — fixed, in two passes, and the second pass is worth recording. Items 1 and 3 now carry
    absolutes in two distractors each, so shape gives nothing away there. But measuring the
    rewritten quiz showed a defect the draft did not have: the key was the longest option in four
    of six items, because each new key was written as the full reasoning and its distractors as
    one-liners. That is the exact habit that produced the fourteen gameable quizzes closed on
    2026-09-10, and eyeballing would not have caught it. Three distractors were lengthened, then
    trimmed again when the first attempt pushed two items past the 25-character spread rule.
    Final measurement: spreads 2, 8, 9, 5, 2 and 13 characters; keys A D B C B D, so all four
    positions used with no adjacent repeat; "always pick the longest" and "always pick the
    shortest" both score 0 percent. `npm run quiz` reports the lesson clean.
11. P4 — fixed. The first predict now comes before Nielsen's percentages and asks for the
    mechanism: "A page ten times as long gets how much more attention: ten times, twice, or about
    the same?"
12. V1 — fixed by a contraction pass over the whole lesson.
13. V2, V3, V4 — fixed. The "Here is the part" opener is now "The quotation usually stops before
    the caveats." One bold moral is kept, the audience test; the other four are cut or made plain
    prose. "Worth" appears once.
14. V5 — fixed. `minutes: 65`, from `npm run minutes`, and the exercise opens "Take 25 minutes
    over this", which is both true and visible to the tool.
15. V6 — fixed. The chart is redrawn at viewBox 420, so the smallest label renders at about 12px
    on a 375px phone. Every coordinate was recomputed against one scale (0.632 px per second,
    0.292 px per word) and checked: 25s at x=50 is y=234, 593 words is x=223, 142s needed is
    y=160, 51s given is y=218. A dashed gold marker at 593 words carries the average page, with a
    dot on each line. No label crosses a line. The prose beside it states the same two numbers.
16. B1 — no action needed.

**Declined:** D6. The F-shaped scanning material belongs in lesson 2, where the point is where a
reader's eye goes, not how much time they have; adding it here would make the lesson about two
things. The outline's planned 20%/28% chart bands are superseded by the redrawn chart, which
shows the same gap more directly.

**Also changed, not a finding:** objective 3 read "Explain why a text is not difficult on its own",
which asserted N1's over-claim in the objectives. It now reads "Explain why a text's difficulty
depends on who is reading it, and what a readability score can and cannot tell you."

**Checks after the fixes:** `npm run validate` clean on this lesson, no warnings. `npm run quiz`
clean. `npm run minutes` reports 65 against a stated 65. Chart read by eye at desktop and phone
width in both themes.

**Status after review:** clean. No second pass: the wrong facts were found and fixed in this
round, and the trigger for a second pass is wrong facts surviving it. Next: the voice pass, then
its podcast episode.
