# Reviews: Personal Safety lesson 2, "Reading a crime number"

## 2026-09-25 — Lesson 02 — Stage 4, two reviewers in parallel, Tier B (split)

**Reviewers:** F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and media),
each in a fresh context, under this course's `research/pipeline-briefs.md`. F re-fetched every
primary the lesson leans on (cv24, the Two Crime Measures brief, the FBI summary and FAQ, HMIC, FTC,
ONS, OSR, NRC, the CDC capture, Gallup, CCJ) and every helpline page, and string-matched 37 lines by
script for SOURCES. P ran taught, minutes, validate, build:drafts and quotes, a quiz script, and a
Playwright render at 375, 420 and 1200 px in both themes.

**Verdicts.** F: fact-check needs fixes (4 major); neutrality passes once F1 and F3 are fixed;
safety passes once F5 is fixed. P: depth pass after one major fix; pedagogy fix before publish;
cold start pass with minor fixes; voice and media pass with minor fixes. Counts: F 0 critical, 5
major, 15 minor; P 0 critical, 5 major, 16 minor.

**Findings, Reviewer F**
- F1 [major] The FBI's "analogous measures" sentence is about its own two estimate series, not its
  data against the NCVS; misattributed in the body, the summary, Sources [2] and the misconception.
  SOURCES US-2 and OUTLINE carried the same misreading.
- F2 [major] Two places taught the rape and robbery reporting changes, which BJS marks significant,
  as small-sample noise.
- F3 [major] CCJ's "heated point of political contention" is about the 2021 to 2022 estimates, not
  a 2022 to 2024 divergence (SOURCES US-4 and OUTLINE too).
- F4 [major] "Figures from the new questionnaire will not line up with the old series" is not in
  BJS, which says the split sample keeps year-to-year comparisons possible.
- F5 [major] Content note gave no line for Scotland or Northern Ireland and no sexual violence line.
- F6 [minor] "Stripped police recorded crime of its official status": it lost accreditation and is
  still official statistics; accreditation went in January 2014, before HMIC's November report.
- F7 [minor] OSR is the UK's regulator, not England and Wales's; it lists a version of "police
  figures are the real numbers", not that sentence by name.
- F8 [minor] ONS's "better for tracking long-term trends" became "preferred source".
- F9 [minor] NRC judgement undated in the prose.
- F10 [minor] "Independent, non-partisan" in the course's voice; it is CCJ's self-description.
- F11 [minor] BJS lists examples of reasons victims may not report, not survey results.
- F12 [minor] 3.6 (FBI) and 3.7 (the brief) per 1,000 unexplained.
- F13 [minor] Chart label "Survey, all" with no "excluding simple assault" on screen.
- F14 [minor] "The steady figure to teach": undated, and pipeline talk.
- F15 [minor] "24% ... the reporting rate, which it is not" overstates; it is BJS's estimate.
- F16 [minor] CSEW period presented as clean; it also asks about the 12 months before interview.
- F17 [minor] Gallup passage repeats lesson 1 near word for word.
- F18 [minor] ONS and CCJ state the mechanisms the lesson labelled as the course's own.
- F19 [minor] Why the police interval is tiny was a mechanism with no source.
- F20 [minor] Critics' claims given in OSR's framing without saying so.

**Findings, Reviewer P**
- P1 [major] The middle became a statistics course: the walk-home decision vanished for 370 lines,
  and the standard-error arithmetic is beyond OUTLINE's scope; the close gave the reader nothing.
- P2 [major] "Big swings in small groups" taught significance backwards and collided with Q3.
- P3 [major] US 48% (violence) and E&W 36% (headline crime) called "similar": unlike measures.
- P4 [major] Q4's key was the only option without an absolute.
- P5 [major] Repeats lesson 1 (Gallup, FTC, 4.5 million fraud, 78%, the Scotland and NI line) and
  never picks up lesson 1's "Lesson 2 shows how to check".
- P6 [minor] The homicide predict asked what the paragraphs above had just said.
- P7 [minor] A checkpoint stem printed its own answer ("a rate of").
- P8 [minor] Exercise headline 3 replayed the 359.1 checkpoint; headline 2 relied on 7.8%, absent
  from the lesson.
- P9 [minor] Chart "Survey, all" invites the wrong comparison; `desc` interval 3.62 to 3.68 beside
  3.7; oxblood on navy low-contrast in light theme.
- P10 [minor] Two police rates for one year unexplained (as F12).
- P11 [minor] Cold start: SRS, "CSEW headline crime", "weighted for who responds", Better Business
  Bureau unexplained; significance and intervals not pointed back to where they were taught.
- P12 [minor] Seven quoted sources unlinked at first quotation (FBI, ONS, HMIC, OSR, NRC, FTC, Gallup).
- P13 [minor] The comparison table ran off-screen at 375 px; its "Who" row mixed people and offences.
- P14 [minor] VictimConnect's condition told an unsafe reader who the line was not for, with nothing
  to do instead.
- P15 [minor] An England and Wales finding offered as a place the US gap "can live".
- P16 [minor] Voice: "by the end of it you'll", "Here are/Here is" (three), three one-line morals,
  "to teach", said-twice passage at 273 to 277, a prose prompt duplicating a checkpoint, "click".
- P17 [minor] Four predicts; the chart spoiled its predict at wide widths.
- P18 [minor] Quiz items reused the body's numbers (a fifth, 4 per 1,000); Q2 and Q5 both bicycles.
- P19 [minor] 95 minutes against OUTLINE's ~80.
- P20 [minor] "Six pages" for the brief.
- P21 [minor] The exercise lookup left out readers outside the US and England and Wales.

### Resolutions applied

**SOURCES.md corrections (verified against F's re-read primaries, `ps-r02f/`):** small targeted
notes at US-1 (both reporting changes significant per BJS table 4; not to be taught as noise, nor as
the reporting rate), the two notes on the 2024 redesign (the synthesis list near the top and Part A's
access notes: BJS says the split sample keeps comparisons possible), US-2 (the FBI's "analogous measures" is about its own two
estimate series), US-4 (the political fight was over the 2021 to 2022 estimates), and UK-5
(accreditation removed January 2014, before the report). F's string-matched block appended at the
end as "Gate closures, lesson 02 (2026-09-25)", with this fixer's helpline re-read. **OUTLINE.md:**
decision 3's wording on the swings, lesson 2's volatility, US-since-2020, mechanism and neutrality
lines corrected with small edits.

**Reviewer F**
- F1 fixed: body now gives BJS's "similar but not identical" and the FBI's "each program has unique
  strengths" for the survey against police data; the "analogous measures" quotation kept only for
  the FBI's own estimates (after the 3.6/3.7 note); summary, Sources [2] and misconception reworded.
- F2 fixed in both places: the trap now says BJS's test shows each change is bigger than sampling
  error alone would usually produce, so not noise, but its size is very uncertain; misconception
  rewritten to F's text.
- F3 fixed: 2021 to 2022, with CCJ's 2% fall and 75% rise, and the autumn 2024 intensification.
- F4 fixed with F's replacement.
- F5 fixed per the updated convention: Rape Crisis England & Wales and Victim Support; Rape Crisis
  Scotland and Victim Support Scotland; Rape Crisis NI (number, "check its page for hours", no age)
  and Victim Support NI's two hubs; RAINN and VictimConnect with its condition; lesson 7 by title;
  each line marked [12]. Every number re-read today on the service's own page (RAINN in the browser).
- F6 fixed: "lost its accreditation", in the right order, and still published as official statistics.
- F7 fixed in the quiz explanation and the misconception.
- F8, F9, F10, F11, F16, F20 fixed with the reviewer's wording or close to it.
- F12 fixed: a short paragraph after the chart predict explains the brief's NIBRS Estimation Program
  estimate against the FBI's headline, and carries the "analogous measures" line where it belongs.
  It does not claim 3.7 is one of the FBI's two named series, which the sources do not say.
- F13 fixed with P9's shorter label ("Survey, 3 offences"), which fits at 375 px; the caption now
  says "excluding simple assault".
- F14 fixed, dated to the 2024 survey. F's "45% in 2023" was not added: it is not in SOURCES.
- F15 fixed. F17 fixed (P5). F18 fixed: ONS's "Increases in volume ... recording standards" replaces
  the course's-reading label, and CCJ's methodology takeaway added to the US section. F19 fixed.

**Reviewer P**
- P1 fixed: the standard-error arithmetic is gone (the ±2 SE rule and the 10% to 38% interval);
  the decision returns after the reporting section ("part of what it measures is how many people in
  your area chose to tell the police") and the recording section ("Your local 20% could be this");
  the close puts all five questions to the headline and ends with a labelled read ("sensible,
  untested, in this course's labels").
- P2 fixed (as F2), trap retitled "Rough numbers for rare crimes", pointing back to First Aid and
  CPR lesson 3 for significance.
- P3 fixed: the two shares are said to cover different crimes and not to compare the countries.
- P4 fixed with P's softened distractors; explanation reworded to "mostly concealment".
- P5 fixed: opening picks up lesson 1's hand-off; Gallup reduced to "As lesson 1 showed"; FTC and
  4.5 million replaced by a pointer, with 7.8% kept for the exercise; the lesson 3 fraud aside and
  the 78% dropped; the Scotland and NI line says "As lesson 1 said"; Homicide Index "which lesson 1
  cited"; Connections now opens on lesson 1.
- P6 fixed: the homicide predict moved before either system is described.
- P7, P8 (headline 3 now *Murders plunge 15%*, on the FBI's 14.9%), P10, P11, P12, P14, P15, P20,
  P21 fixed as proposed. P11's glosses: SRS, CSEW headline crime, the sampling weights, the BBB;
  intervals pointed to Habits and Self-Discipline lesson 5.
- P9 fixed: label, `desc` interval "about 3.6 to 3.7", and a background-coloured underlay under each
  interval line. Source and year now also inside the chart (course convention).
- P13 fixed: two three-column tables, one per country, with a "Counts" row; 343 px at 375, no
  overflow, both themes.
- P16 fixed: all listed sentences rewritten; the "Longer, and true." and "method lasts longer" morals
  cut, the table's lead-in kept.
- P17 fixed: the fourth predict (the commentator) became a short prose paragraph; the 3.6/3.7
  paragraph now sits between the chart predict and the chart.
- P18 fixed: Q1 12%, Q4 15 and 6 per 1,000 (friend now says "three in every five"), Q5 a car
  broken into. Keys unchanged.
- P19: 85 measured (see below). The OSR and redesign passages were tightened, the brief's opening
  quotation and the NRC Go deeper entry cut, and the exercise's stated time set to 15 minutes,
  which with its four decodes and one lookup is what it asks.

**Also applied:** Sources entries now carry the course's bold "**Read: ...**" form; footnote 12
lists the eight service pages.

**Final measures.** Body 6,280 words (to Sources, SVG excluded); `minutes: 85` (npm run minutes,
85); bold 3.5 per 1,000 (22 spans); contractions 7.3 per 1,000 outside quotations; no em dashes or
spaced en dashes. Three `:::predict`, four `:::checkpoint`, one gapped worked example (the
denominator checkpoint). Quiz keys 3,0,2,0,1, unchanged, so the sequence check against lessons 1
(2,1,0,3,1,3) and 3 (2,0,3,1,2) stands as P ran it; option lengths Q1 86 to 90, Q2 84 to 90, Q3 82
to 88, Q4 87 to 91, Q5 87 to 89, the key never the longest. Places: none named; the US and England
and Wales throughout. `npm run validate` exit 0; `npm run quotes personal-safety` 0 not found;
build:drafts exit 0, tables and chart rendered at 375, 420 and 1200 px in both themes.

**Status after review:** clean
