# Reviews: Home Repair lesson 1, "How a house works, and where it switches off"

## 2026-09-25 — Lesson 01 — Stage 4, Tier A

**Reviewer:** one fresh-context reviewer under this course's `research/pipeline-briefs.md` (Tier A).
Re-fetched live every primary the lesson leans on (National Gas, Cadent's two pages, SSE Airtricity
Gas Supply NI, SI 1998/2451 reg 3 and SR 2004/63 reg 3 on legislation.gov.uk, HSE's home-owner page,
L56, HSG85, CPSC 5133, the CPSC 1989 release capture, the Gas Safe capture, WaterSafe, the Met Office,
CCW's two pages, WSSC, four ESF pages, Con Edison, SoCalGas, Atmos, Approved Document H, ASHI, the
Goodlife Centre, UGA Circular 1082) and string-matched every quotation. Redid the minutes model and the
option lengths by hand; there are no other sums. Checked the callout byte for byte, First Aid lesson
2's danger step, Personal Safety lesson 5 after commit 66e65db, and lessons 02 to 04's
cross-references and keys.

**Verdicts.** Facts and law: needs fixes (R1, R4, R10, R11, R17); every legal statement, both phone
numbers and every quotation correct. Safety: needs fixes (R1, R2, R6); callout byte-identical, no
wiring or gas procedure, panel-is-live and volt-stick facts present. Neutrality: skipped, no contested
or value claims (OUTLINE: "none contested"); neither country's advice called wrong. Depth and
pedagogy: needs fixes (R5, R14, R15). Cold start: needs fixes (R3, R5, R6, R18). Voice and media:
minor fixes (R19, R20); no media (G-N4 fallback), no SVG. Counts: 1 critical (by the brief's rule), 6
major, 13 minor.

**Findings:**
1. R1 [critical, by rule] The US flooded-basement case applied ESF's British consumer-unit wording to
   an American panel, a UK emergency step handed to a US reader; no US source on water near a panel
   was read.
2. R2 [major] The course's reading on water near electrics checked how you reach the box, not whether
   the box is wet; quiz 1 and checkpoint item 6 marked the reader on a condition the lesson never
   stated.
3. R3 [major] "Personal Safety lesson 5 ... said this course would teach" fitting a lock; since commit
   66e65db that lesson says it doesn't.
4. R4 [major] The US worked example applied WSSC's (Maryland) outside-valve rule to a Midwest house,
   and treated a scheduled, fee-charging service as an emergency one.
5. R5 [major] No US burst-pipe order, yet exercise step 4 asked a US reader to write one.
6. R6 [major] Exercise step 1 left out WSSC's fire-sprinkler condition and quarter-turn lever valves;
   "clockwise until it stops" can't be done on a lever.
7. R7 [major] 120 minutes against 85 planned. Don't split; cut to about 100 to 105 (job sort 12 to 8,
   "leaves out", misconceptions, gas-law paragraph, flows section, Reader's Digest, the line 404
   moral).
8. R8 [minor] WaterSafe and WSSC don't say it "in the same words".
9. R9 [minor] CPSC's AFCI-installation instruction presented as general advice about panels (quiz 3
   explanation, checkpoint item 4); "US federal" can read as federal law.
10. R10 [minor] CPSC's "primarily" dropped in the course's summary of breakers.
11. R11 [minor] Unsourced mechanisms in the course's voice: "the half people forget", the stiff-valve
    reason, "so you can tell the utility", the towel sentence.
12. R12 [minor] Decision 9's sentence given in part at three law passages; where the label goes is a
    course-wide call.
13. R13 [minor] Gas-law paragraph: "anyone who does gas work" needs "DIY included"; the
    user-instructions line should be credited to Gas Safe; "Gas Safe Register" never explained.
14. R14 [minor] Job labels in the checkpoint: item 2 rested on ownership, item 6 labelled a case where
    the condition fails as "Yours, on conditions", items 7, 8 and 12 needed place and source tightened.
15. R15 [minor] Quiz: item 3's key the only option without an absolute; item 6 replayed the body's
    six-month example; item 4's explanation overstated "every source"; "leverage" in item 2; the
    volt-stick line unlabelled in a US question.
16. R16 [minor] "It is not English law" is an unread negative; "what UGA means" claims to know its
    meaning.
17. R17 [minor] Imprecisions: SSE Airtricity as "the gas supply company"; "often in a meter pit";
    crawl-space houses; AD H's "working and test"; "sucked out"; Cadent's description; "They need
    permission".
18. R18 [minor] Cold start: missing metric or imperial units, and unexplained terms for one country or
    the other (immersion heater, semi, airing cupboard, loft, slab-on-grade, crawl-space, meter pit,
    master plumber, extension service, flue, Gas Safe Register).
19. R19 [minor] Sources quoted in the prose with no link (Met Office, CCW, HSE, reg 3, Gas Safe);
    Reader's Digest called "the standard general manual".
20. R20 [minor] Voice: four one-line morals; a heading ("in one sentence") that heads two paragraphs;
    the renter line in two wordings; "leverage".

### Resolutions applied

1. R1 fixed: the checkpoint answer now says this course read no American source on water near a
   panel and applies ESF's British caution as its own reading; the after-checkpoint paragraph credits
   the electrician call to the course's reading, with ESF "the same of a British consumer unit". The
   plain-reading paragraph adds that for a US panel the reading is the course's own.
2. R2 fixed: the reading now reads "only if the box and the wall around it are dry, with no water on
   it, in it or running towards it, and you can reach it without standing in water or touching
   anything wet". Quiz 1's explanation and the checkpoint item (now 4) mark only that; the item is
   now labelled **Call someone, here**, with the Yours-on-conditions rule and its failure explained.
   The "Yours, on conditions" example in the labels list quotes the new condition. Lesson 02's
   back-reference ("lesson 1's reading ... don't touch wet fittings, and keep clear") still holds.
3. R3 fixed with the reviewer's wording, shortened: the course doesn't teach it, no teachable source
   was found, and Personal Safety lesson 5 is the place for which locks and lights matter.
4. R4 fixed with the reviewer's wording: call the water utility or a plumber; WSSC's rule is labelled
   as the one water utility read, in Maryland, with its fee; "A utility in the Midwest may work
   differently, so ask it."
5. R5 fixed: a new "In the US" subsection after the UK burst order quotes WSSC's open-a-faucet line
   (added to SOURCES as a Stage 4 note), labels it one utility's advice to its own customers, and
   gives "call a plumber" as the course's own line. Exercise step 4 says "(in the US, main valve off,
   then a plumber)".
6. R6 fixed: exercise step 1 now has the sprinkler condition (don't turn anything unless you know
   which valve is which; ask a plumber) and WSSC's quarter-turn lever; the US section quotes WSSC on
   lever handles; the predict now asks about a round handle and answers "Clockwise closes a tap or
   wheel handle". The WSSC lever line is in the Stage 4 note.
7. R7 applied, not split: 120 to 105 minutes (6,986 to 6,464 words on the model's count; job sort 12
   to 8, timed "Take 30 minutes for the map ... and 15 more to sort the eight jobs"). Cut: jobs 3, 5,
   7 and 11; the Goodlife paragraph and its source; the ESF "modern consumer units" sentence;
   "What this course leaves out" to about 170 words; the misconceptions to one line each, the
   search-engine anecdote kept only in the predict; the gas-law paragraph; Reader's Digest; the line
   404 moral; the Connections paragraph. **Declined in part:** the ASHI sentence stays, because
   lesson 04 (line 215) says "lesson 1 quoted its one-line version" and cutting it would falsify that
   cross-reference. R1, R2 and R4 to R6 added about 300 words back.
8. R8 fixed: "say the same thing".
9. R9 fixed in the quiz 3 explanation ("the reason it gives for having a qualified electrician
   install AFCIs rather than doing it yourself") and checkpoint item 3 ("a US federal agency's advice
   about AFCIs"; that it rules out opening a panel is this course's reading).
10. R10 fixed: "breakers and fuses are there mainly to protect the wiring".
11. R11 fixed, all four: "The way out has no switch to find"; the Met Office check "gives no reason"
    with the course's reading labelled; WaterSafe's own reason for "never force it" ("If you over
    tighten or use excessive force you may damage the stop tap", now in SOURCES) in the body and quiz
    2; the meter line is "the course's advice"; the towel line says both sources put the stop tap first
    and neither says why.
12. R12 resolved by the course decision recorded in the briefs' conventions (2026-09-25 bullet): the
    full sentence once in the opening, at the top of each H2 that states law, and in the exercise;
    not in H3s under a labelled H2, hidden answers or quiz explanations; law quiz items say "as
    general information" in the stem. The gas law moved out of the gas H2 into its own H2, "Gas and
    the law, in brief", which carries the label; "Law or advice, whose, and where?" carries it; the
    misconception points back to the gas-law H2; checkpoint item 7 and quiz 5 carry no label; quiz 5
    and 6 stems say "as general information". The within-lesson 25-word check warns on the repeated
    sentence, which is expected under this convention (see course-wide).
13. R13 fixed: reg 3(1) with "HSE's guidance says that includes people doing their own" (L56 para 52,
    "'work' includes do-it-yourself activities", now in the Stage 4 note); the user-instructions line
    credited to Gas Safe; the Register glossed as "the HSE-approved register of gas businesses";
    Northern Ireland left as it was.
14. R14 fixed: item 2 on the course's reading with "no source read gives it to a householder"; the
    wet-wall item is **Call someone, here**; the meter item credits Cadent with National Gas and HSE,
    and the cellar condition to Cadent and National Gas; the US gas item reads "the utility or 911,
    from outside, and don't go back in". Item 7 (resetting a breaker) was cut under R7, so its fix is
    moot. Quiz 2's explanation has the same "no source read" wording.
15. R15 fixed: item 3 has a hedged distractor ("It's probably safe once the main breaker is off ...
    with some care"), and the explanation names it; item 6 replaced with a new case (a landlord in
    Wales citing England's drainage guidance), testing "where"; item 4 says "the UK gas companies this
    course read" and "Cadent, Con Edison and SoCalGas"; item 2's option says "to get more grip"; item
    3's volt-stick line names Britain's HSE and its guidance for electrical workers.
16. R16 fixed, both.
17. R17 fixed, all six (SSE Airtricity as "one gas supplier's advice"; the pit as "at some homes the
    meter is out there too"; crawl-space houses "that have no basement"; "working and test
    conditions"; "the seals are not lost to pressure"; "largest gas distribution network"; "can need
    permission as well as professionals").
18. R18 fixed: units (25mm, about an inch; three to five feet, about 1 to 1.5 m; an inch, 2.5 cm) and
    glosses for immersion heater, semi-detached, airing cupboard, loft, slab-on-grade, crawl-space,
    pit, registered master plumber, extension service, flue and the Gas Safe Register.
19. R19 fixed: links in the prose for CCW, the Met Office, reg 3, HSE and the Gas Safe capture (also
    now linked in Sources entry 19); Reader's Digest dropped from Go deeper under R7.
20. R20 fixed: the four morals cut; the heading replaced; the renter line in the conventions' form in
    both places; "leverage" gone.

**SOURCES corrections:** a dated "Stage 4 note, lesson 01 (2026-09-25)" appended at the end of
SOURCES.md with the WSSC lever, faucet, drain-down, fee, pit, house-type and sprinkler lines, the two
WaterSafe lines, all re-read by the fixer with curl and matched; and the reviewer's verified strings,
including two corrections to what earlier parts implied: WSSC's pit is "at some homes", not "often",
and Atmos and HSE's home-owner page give no switch advice.

**Measures after the fix:** 6,103 words by the build's count (5,396 body words before Sources);
`minutes: 105` from `npm run minutes`; contractions 8.0 per 1,000 (build method); bold 6.9 per 1,000
body words; 3 predicts, 3 checkpoints, one exercise with its timing, one worked example with a gap
(the second house). Quiz keys 1,3,0,2,3,0 (items 5 and 6 permuted: the drafted 1,3,0,2,0,3 was a
+2 value shift of lesson 03's keys as they then stood, 3,1,2,0,2, and a first repair, 1,3,0,2,1,3,
was a shift of lesson 04's). Checked by script against lessons 02 to 06 as they now stand (03 has
since become 3,1,0,1,2): no identical sequence, no pure shift in position or value, no shared run of
four at offsets 0 or ±1. Option lengths 82 to 90 characters, spread 2 to 7 within each item.
No em or en dashes. `npm run quotes home-repair`: no misses in this lesson. `npm run validate` exited
0 during the fix; a final run fails only on First Aid's audio-debt count, from another session's
episode work. Its only line naming this file is the expected label repetition. Places used: Wales (quizzes 1
and 6), Norfolk, Oregon, Nebraska, England (a 1930s semi), the American Midwest.

**Second pass:** not needed. The only US material added beyond what the lesson had is WSSC's own
page (the lever and faucet lines), which the reviewer read live and the fixer re-read; no new US
source was added.

**Status after review:** clean.
