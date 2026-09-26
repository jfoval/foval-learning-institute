# Reviews: Car Basics lesson 2, "The engine: petrol, diesel, and the drive to the wheels"

## 2026-09-26 — Lesson 02 — Stage 4, Tier A

**Reviewer:** one fresh-context reviewer under this course's `research/pipeline-briefs.md` (Tier A).
Re-read live today with curl: DOE "Internal Combustion Engine Basics"; AFDC's gasoline and diesel
pages; fueleconomy.gov atv.shtml (body and diagram alt/title text), di_diesels, tech_transmission,
myths and maintain.jsp; the RAC cambelt and warning-lights pages; DENSO's glow-plug page; Highway Code
Annex 6 via the GOV.UK content API; Toyota's 2023 Corolla OM02568U, pp. 305 to 307. Every quotation
string-matched; every sum and conversion redone by hand; callout compared by script; keys rechecked
against the lessons on disk.

**Verdicts.** Facts and law: needs fixes (R1 and R4 material, R2 a source-function omission; no
statute, fee or number beyond the callout; gates G-H3 and G-H12 correctly left open). Safety: pass.
Neutrality: skipped, no contested or value claims (the manual-versus-automatic tension is within one
site and the reconciliation is labelled as the course's reading; RAC and DENSO labelled at each use).
Depth and pedagogy: strong; quiz keys pass the relaxed rule; R10 a real cue. Cold start: R16. Voice
and media: one banned shape (R13), stiff expansions (R14); SVG read in source and sound. Counts: 0
critical, 4 major, 12 minor, 1 note.

**Findings:**
1. R1 [major] The RAC's cambelt advice trimmed: the lesson said the no-symptoms line came "in the very
   next line" after the five signs, and dropped the RAC's intervening advice to have a car showing
   them checked "as soon as possible by a qualified mechanic"; SOURCES carried the same error.
2. R2 [major] The lesson said the sources don't say what oil does; the RAC warning-lights page it
   cites names the job ("If the oil is not lubricating the engine effectively ...").
3. R3 [minor] "Between the moving parts" and "carries heat from the engine to the radiator" put
   mechanism from general knowledge into the sentences saying the sources don't cover it; the opening
   tied the oil check to the fuel-to-heat story.
4. R4 [major] The energy table left out "Auxiliary Electrical Losses: 0% - 2%" from both diagrams,
   and the caption's "don't sum to 100" is false (100 lies inside both ranges' spans).
5. R5 [minor] "Straight into the cylinder" and "direct-injection" glossed AFDC's "combustion
   chamber" in the course's voice with no source.
6. R6 [minor] The cold-weather step in the Thurso predict and quiz 1's stem are the course's reading
   of DENSO, unlabelled; "before and as the engine starts" unsourced.
7. R7 [minor] "A test won't catch it" generalised the RAC's MOT statement; quiz 2's explanation added
   "at all".
8. R8 [minor] "The textbooks in Go deeper do" describe piston travel: only their contents pages were
   read.
9. R9 [minor] Go deeper said the lesson mentions air resistance (it doesn't) and that lesson 4 uses
   the hybrid and EV energy pages (it doesn't).
10. R10 [major] Quiz 5's key was the only option without an absolute, and the stem tested recall of a
    page.
11. R11 [minor] Quiz 3's key "before any energy reaches the gearbox" can read as none reaching it.
12. R12 [minor] Quiz 1 option B and quiz 4 option A tested the same spark distinction.
13. R13 [minor, voice] "So the one thing to carry out of this section is this:".
14. R14 [minor, voice] Thirteen stiff sentences left by contraction expansion, one ungrammatical
    ("lesson 3 ... is what a modern diesel asks").
15. R15 [minor] "Which makes it a garage job" for glow plugs is the course's inference, unlabelled.
16. R16 [minor, cold start] "Intake manifold" and "the API symbol" unexplained.
17. R17 [note] Lesson 1 cross-reference checked and sound; optional "As lesson 1 showed" on the
    Highway Code's cooling line.

### Resolutions applied

SOURCES.md corrected first, each by a small marked edit in place, then a Stage 4 note appended:
(a) "Gate closures, lesson 02", RAC cambelt entry: "directly before" replaced with the page's actual
order, the introducing sentence and the "as soon as possible by a qualified mechanic" sentence
recorded [V]; (b) the same section's atv.shtml entry: "Auxiliary Electrical Losses: 0% - 2%" [V]
added for both diagrams, with the idle labels and the city alt text's note that idle losses are
counted in the engine and parasitic rows [V]; (c) Part B §3, RAC warning-lights entry: the
"lubricating" sentence added [V]. "Stage 4 note, lesson 02 (2026-09-26)" at the end of the file
records the reviewer's verified strings. The fixer re-read the RAC cambelt page, the RAC
warning-lights page, AFDC's gasoline page and atv.shtml live before editing, and confirmed all three
corrections and that AFDC mentions the intake manifold once without defining it.

1. R1 fixed: the predict answer is the reviewer's text (five signs, "as soon as possible by a
   qualified mechanic", then "Many cambelts ..."; "the RAC's rule is also a date and a mileage"); the
   "for what it is worth" paragraph now says the five signs still matter, with the RAC's advice
   quoted; the opening says "not only when it starts to complain, because it often doesn't". Heading
   changed to "The cambelt: a date first, and symptoms too".
2. R2 fixed: new first bullet quoting the RAC's lubricating sentence, with the mechanism still named
   as unread; the lead-in now says the sources "name oil's job ... but not how it does that job". The
   RAC's industry label moved to this first use, and the low-oil bullet now says "The same RAC page".
3. R3 fixed as the reviewer wrote it (opening, coolant circuit sentence, oil mechanism sentence).
4. R4 fixed: auxiliary row added (0% to 2% both columns); caption now "Each row is a range, so the
   rows can't be added to one exact total. The city diagram counts idling inside the engine and pump
   rows." Checked against the live alt text.
5. R5 fixed at the caption, the checkpoint's last paragraph and the misconception: "combustion
   chamber", AFDC's term. The schematic and checkpoint question keep DOE's "cylinder".
6. R6 fixed: predict answer labelled "On this course's reading of DENSO", "and as" removed; quiz 1
   stem "when the air is too cold"; the every-start parenthesis added after the Thurso setting.
7. R7 fixed: "First, the MOT won't catch it:" (the paragraph's lead already attributes to the RAC);
   quiz 2 explanation drops "at all".
8. R8 fixed as the reviewer wrote it.
9. R9 fixed, adjusted: braking "which this lesson only mentions" (the lesson does quote the braking
   sentence), wind resistance "which it leaves out"; the two pages linked, with no claim about lesson 4.
10. R10 fixed with the reviewer's stem and distractors; the explanation now names "official figures
    favour manuals" and the CVT claim by content.
11. R11 fixed as the reviewer wrote it.
12. R12 fixed: option B is now the starter distractor; the explanation says DENSO says nothing about
    helping the starter and the heat goes to the air.
13. R13 fixed as the reviewer wrote it.
14. R14 fixed at every line listed.
15. R15 fixed: "which, on this course's reading, makes it a garage job".
16. R16 fixed: the intake-manifold sentence added after AFDC's quote; "API performance symbol, a mark
    printed on US oil containers".
17. R17 applied: "As lesson 1 showed", with the Highway Code line now quoted as its short phrase, so
    the full sentence isn't repeated from lesson 1.

**Final measures:** 6,731 words by `npm run minutes`, 80 minutes measured (frontmatter 80); bold 7.9
and contractions 8.3 per 1,000 body words (the build's count); no em or spaced en dash; callout
unchanged. Quiz keys 3,1,0,2,1: all four positions, no adjacent repeat, no identical or value-shifted
sequence and no shared run of four at offsets 0 or ±1 against 01 [3,0,1,3,2,0], 03 [1,3,0,2,0,3] and
04 [0,2,3,1,0], checked by script. Option-length spreads 4, 2, 7, 2, 7 characters; no key is the
longest option. Places: Thurso, Middlesbrough (unchanged). `npm run quotes car-basics`: nothing for
02. `npm run validate`: exit 0, nothing naming 02.

**Status after review:** clean.

## Second pass (2026-09-26)

**Reviewer:** one fresh-context second-pass reviewer. Re-read live today with curl (browser user
agent, HTML stripped, every alt and title attribute kept): the RAC cambelt page (dated 31 July 2026
on the page), the RAC warning-lights page (18 August 2026), AFDC's gasoline page, and
fueleconomy.gov atv.shtml. Toyota's 2023 Corolla pp. 305 to 307 and maintain.jsp checked against
the session's saved text. Every sentence the fixer touched was string-matched; every sum redone.

**What held.** The rebuilt cambelt section is in the RAC's order: five signs (misfire, poor idling,
unusual noises, difficulty starting, cracked or frayed belt), then "it's important to have your
vehicle checked as soon as possible by a qualified mechanic", then "Many cambelts show no obvious
symptoms before failure." The camshaft, sync, MOT, annual-service, interval and "whichever comes
first" quotations all match. The energy table matches both diagrams' labels, the auxiliary row
included, and the city alt text does say idle losses sit inside the engine and parasitic rows; 48
mph is on the page. The oil bullets match the RAC ("lubricating ... irreparable engine damage";
"stop as soon as safely possible and switch off the engine"), Toyota (consumed while driving; "To
prevent serious engine damage" / "Check the oil level on a regular basis"; "Avoid overfilling") and
maintain.jsp ("Energy Conserving" on the API performance symbol). AFDC's glossary sentence matches
and is the page's only mention of the intake manifold. Sums: 1 to 3 of 10 litres; 6 to 15 of 50,
35 to 44 lost; 50 L = 11.0 imp gal, 13.2 US gal; 48 mph = 77 km/h; 60,000 to 100,000 miles = 97,000
to 161,000 km; 58,000 miles = 93,000 km; quiz 2's 52,000 miles; the checkpoint's 6 years, 17,000
miles, 11 years or 104,000 miles, 3,100 a year, 73,000 miles about 24 years off. Callout identical to
the briefs' text by script. No em dash, no spaced en dash. Every quiz explanation matches its options
and names each distractor by content; option spreads 4, 2, 7, 2, 7; the key is never the longest.

**Findings:**
1. S1 [major, quiz keys] Keys 3,1,0,2,1 breach the convention added today from lessons 2 and 4 ("no
   run of four may match another lesson's keys shifted by a constant at any offset"): 3,1,0,2 plus 2
   (mod 4, the course's reading of a value shift, as in lesson 04's R27) is 1,3,2,0, lesson 01's keys
   at positions 3 to 6 (01 is 3,0,1,3,2,0). The first-pass fixer checked offsets 0 and ±1 only; this
   is offset 2. No single-item change passes against 01, 03, 04 (now 0,2,3,0,1), 05 and 07 on disk;
   the two-item options are 3,0,3,2,1, 2,1,0,3,1, 3,1,0,3,2, 0,1,0,2,3 and 2,1,0,2,3, checked by
   script. Suggested: 3,1,0,3,2 (move item 4's key to D and item 5's to C; both explanations name
   distractors by content, so neither changes). Not applied: two item edits, not one.
2. S2 [minor, convention] The misconception "A cambelt will warn me before it goes" and quiz 2's
   explanation carried the no-symptoms line without the RAC's advice to have a car showing a sign
   checked, against the briefs' 2026-09-26 bullet. Fixed in both.
3. S3 [minor, labelling] "What matters here is only that it's before the combustion chamber" (the
   intake-manifold gloss added for R16) and the predict's "which is why the RAC's rule is also a date
   and a mileage" are the course's inferences; neither source says either. Labelled "on this course's
   reading" in both.
4. S4 [minor, voice/logic] "They're not a reason to leave a belt past its interval because the car
   seems fine" had the five signs as its subject, so it said the signs are no reason to wait. Now
   "Their absence isn't a reason ...". Fixed.
5. S5 [minor, omitted fact] The RAC page is not consistent with itself: its introduction gives 60,000
   to 100,000 miles (quoted), and its FAQ, further down, "every 40,000 to 100,000 miles". The lesson's
   "The RAC's range is wide" then understates how wide. Not fixed: the FAQ string is not in SOURCES
   and this pass does not edit SOURCES. Next fixer: record it [V] and add half a sentence.
6. S6 [note] The table caption's "HWFET" is not on the page, which says "EPA Highway Fuel Economy
   Test procedure"; standard abbreviation, left. The RAC page also says the belt "is most likely
   checked every year during your annual service", slightly stronger than the lesson's "a service
   might" if asked; not wrong, left.
7. S7 [note, not this lesson] `npm run validate` warns that lesson 01's quiz item 5 option B parses as
   an object (an unquoted colon). Belongs to lesson 01; left for its owner.

**Measures after this pass:** 6,758 words, 80 minutes measured (frontmatter 80). `npm run validate`
exit 0, nothing naming 02.

**Verdict: NEEDS ANOTHER PASS**, for S1 only: re-key two items by script and re-check against every
lesson on disk. After that, and S5's half-sentence with its SOURCES entry, no further review is
needed.

## Neutrality audit fixes (2026-09-26)

Applied from `reviews/neutrality-audit.md` (course-wide, 2026-09-26) by a fixer in a fresh context.
The new label convention (N4) and base labels (N5) are dated bullets in `pipeline-briefs.md`.

- **N4:** labels added at quiz 2's explanation (the RAC), quiz 4's explanation (DENSO, a glow-plug
  maker), the cambelt predict and the CVT checkpoint (the RAC), the three misconceptions naming
  DENSO or the RAC, and the first use in Connections.
- **N6:** "Asking is sensible." cut.
- The RAC's "breakdown cover and cambelt changes" stays, as N5 allows.

`npm run validate` exit 0; `npm run quotes car-basics` 0 misses; `npm run quiz` shows no line for this lesson; `npm run minutes` 80, matches.
