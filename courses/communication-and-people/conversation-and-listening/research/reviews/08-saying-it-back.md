# Reviews: lesson 08, "Saying it back"

## 2026-09-26 — Lesson 08 — Stage 4, Tier A (light neutrality pass)

**Reviewer:** one reviewer, fresh context, all six passes. I downloaded every primary the footnotes
point at today with curl (generic browser User-Agent, no personal data), converted them to text and
string-matched each quotation: Rogers and Farson (wholebeinginstitute PDF and the ask-force.org
reprint), Rogers 1957 (counselling-tutor PDF), Ickes 1993 (Greater Good PDF), SAMHSA TIP 35 (full
PDF, Exhibit 3.6 and "Forming complex reflections"), MINT, VitalTalk, Vecchi et al. 2005 (joindpp
copy), Samaritans, 988 Lifeline, R U OK?, the Calgary-Cambridge 73-item list, PON, AHRQ Tool 5,
Headlee's TED transcript (the page's embedded cue data, with timings) and the Weger 2010 abstract
(UCF STARS record). Schegloff et al. 1977 was checked against SOURCES' lesson 01/02 gate closure, not
re-downloaded. **Every quotation in the lesson matches its primary**, including the three with
nested curly marks (Rogers 1957's "reflected", MINT's "get people to change", PON's "I understand.").
`npm run quotes`: 121 checked, 0 missing.

**The drafter's TIP 35 correction is right.** Exhibit 3.6 lists "Your wife is pressuring you about
your drinking." under **Simple**, type "Rephrase" (purpose: "Highlights selected meaning or
feeling"). The complex types are Feeling, Meaning, Double-sided and Amplified. SOURCES Part C §8 and
the OUTLINE lesson 8 entry both have it wrong (R18). The lesson follows the exhibit.

**Numbers redone by hand:** 1957 and 1987; 80 undergraduates, three sessions, half with feedback; 180
undergraduates; six conditions (Rogers 1957: counted); three "What to Do" headings (counted);
"five pages" (the excerpt PDF runs to page 5); the 73-item list; "five replies" (five bullets);
Wendeline's "four steps" (open the app, find the name, press the camera, hold it out: four); the
exercise's 15 minutes = 10 + 5; lesson 6's 90.3% against 53.1% as "far fewer" (fair). Quiz option
lengths measured: spreads of 7, 3, 3, 1, 5 and 3 characters. Keys 2,0,3,0,3,1: all four positions
are used and no key repeats its neighbour. `npm run minutes`: 90 measured, 90 stated. Contractions
about 8 per 1,000 body words; bold about 7 per 1,000. No em dashes. The en dashes are unspaced page
ranges in Sources only. None of the style guide's banned words appears.

### R1 [major] Facts: the Marangoni feedback condition is overstated
> "For the other half, after each guess, the client's actual thought appeared on the screen" (l. 204)

Ickes 1993, p. 598: the feedback group "received feedback during the middle portion of each tape",
where "a sentence reporting the client's actual thought or feeling appeared on the television monitor
following each of the subject's inferences." So the feedback came after each guess only in the middle
part of each tape. Lesson 7 has it right ("half were shown, partway through"), so the two lessons now
disagree. **Fix:** "For the other half, during the middle part of each tape, the client's actual
thought appeared on the screen after each guess". Better still, fold it into R2's rewrite.

### R2 [major, course-wide] Lesson 7's Ickes feedback study is taught again, and lesson 7 is referred to as if it had not taught it
> "Lesson 3 met the other half of this ... Ickes also reports a study by Marangoni, Garcia and himself
> in which 80 undergraduates watched three simulated therapy sessions ..." (ll. 200–207); "**This
> course's reading** puts the two together: a restatement the speaker corrects is the conversational
> version of that feedback." (ll. 209–210); "Lesson 7, "Ask, don't guess", looks at why asking beat
> imagining" (ll. 212–213 and again ll. 505–506)

Lesson 07 (ll. 348–357) already teaches this study: the same sample, the same quotation, the same
single-study label and the same course's reading ("A correction is feedback of exactly the kind that
helped"). It ends by handing off to lesson 8: "lesson 8 ... turns Ickes's feedback finding into a
habit" (07 l. 514). OUTLINE puts it under lesson 8's "Spaced review of: lesson 7's Ickes feedback
finding". That calls for a callback, not a second teaching. Lesson 8 was drafted before lesson 07
existed on disk, so it introduces the study through lesson 3 and talks about lesson 7 in the present
tense, as if lesson 7 came later. **Fix:** replace ll. 199–214 with a short recall along these lines:
"What makes a restatement useful is that it puts your understanding where the speaker can see it and
correct it. Lesson 3 showed that self-ratings of empathy predict real accuracy badly. Lesson 7 showed
the other side: in a study Ickes reports, students guessing a client's thoughts from taped therapy
sessions improved faster when, partway through, they were shown what she had actually thought. A
restatement the speaker corrects gives you that feedback in conversation. On that reading a
correction is the check succeeding, which is why Rogers and Farson's rule keeps going until the
speaker is satisfied." In Connections, change "Lesson 7 ... looks at" to "Lesson 7 showed", and drop
the Marangoni detail from Sources [4] or keep it as "as reported by Ickes". Also record this in
`course-wide.md`: a lesson drafted before its predecessor exists on disk has to be re-read against
that predecessor before review.

### R3 [major] Facts / "every source says": the shared shape claimed for all five practitioners is false for two
> "What they share is the shape Rogers and Farson gave it: your own words, and then a door left open
> for the other person to correct you." (ll. 330–332)

Samaritans' "Say it back" goes on: "Repeating something back to someone is a really good way to let
them know you're listening." That is repeating, not your own words. 988's section reads: "By
repeating, paraphrasing or even summarizing what the speaker has said shows that you are putting in
effort". It counts plain repeating, and it says nothing about inviting a correction. R U OK?,
Calgary-Cambridge and PON do have both elements. This is the measured pattern "'Every source says'
when one does". **Fix:** "Most of them share the shape Rogers and Farson gave it: your own words,
and then a door left open for the other person to correct you. Not all: Samaritans and 988 count
plain repeating too, and 988 doesn't mention inviting a correction. The open door is the part that
gets dropped."

### R4 [major] Lesson 9's question pre-judged, and the Weger abstract stretched
> "Whether saying it back actually makes people feel understood is a question for evidence, and the
> evidence gives Headlee some support. ... the paraphrases made the listener seem more socially
> attractive but were not associated with the students feeling more understood." (ll. 427–431);
> misconception "**"Saying it back always makes people feel understood."** In one experiment,
> paraphrasing did not make students feel more understood than a plain acknowledgement did." (ll.
> 459–460)

(a) "The evidence gives Headlee some support" is a verdict on lesson 9's contested evidence question,
given in the course's voice and not labelled as the course's reading. It rests on one abstract, and
Headlee's claim is about performed attention, not paraphrase against acknowledgement. SOURCES Part A
§6.1 (c) says the paraphrase research "points both ways". (b) The abstract says paraphrases "were
associated with the social attractiveness of the listener". "Made the listener seem" is a causal
verb the abstract doesn't use, and the abstract doesn't say how people were assigned to conditions.
"Did not make students feel more understood" in the misconception list has the same problem. (c)
That misconception is lesson 9's own: OUTLINE lesson 9 lists "paraphrasing always makes people feel
understood (Weger 2010)", and lesson 9's worked example (a) is Weger 2010 read as a design. None of
this is critical: the sentence hedges, and the section ends by pointing to lesson 9. But it takes
lesson 9's material and leans one way before lesson 9 weighs it. **Fix:** "Whether saying it back
makes people feel understood is a question for evidence, and lesson 9 takes it up. One experiment
bears on Headlee's point. 180 undergraduates gave their views on an academic policy in peer
interviews and got back either a paraphrase or a simple acknowledgement. The paraphrases were
associated with the listener seeming more likeable ("socially attractive", in the study's words),
but not with the students feeling more understood. That is a **single study**, and this course has
read only its abstract.[17] Lesson 9 sets it beside studies that point in other directions." Cut the
last misconception, or replace it with one lesson 9 does not own.

### R5 [minor] Pedagogy / facts: quiz item 5's key attributes to Headlee a claim she did not make
> "Both hold that signs of attention without real interest behind them won't work" (l. 85), and the
> explanation "Headlee says there's no reason to learn to show attention if you're paying it" (l. 88)

Headlee's line is that showing attention is unnecessary if you are paying it. She doesn't say that
signs without interest fail. That is Rogers and Farson's claim ("empty and sterile"; "if we are only
making a pretense of interest ... he will quickly pick this up"). **Fix:** key "Both hold that a show
of attention is no substitute for actually paying it" (74 characters; the other options run 77 to 81),
with the explanation "Headlee says there's no reason to learn to show attention if you're paying
it; Rogers and Farson said the techniques without real respect behind them are empty and sterile."

### R6 [minor] Pedagogy: quiz item 1's key breaks the lesson's own "turn it down a notch" advice
> '"It sounds as if the rota always seems to end up landing on you, and only you."' (l. 25)

"Always ... and only you" turns the intensity up. That is what the VitalTalk section and the Hesketh
checkpoint tell the reader not to do, so a careful reader may hesitate over the key for the wrong
reason. **Fix:** '"It sounds as if the rota keeps falling to you, and it is starting to grate."' (77
characters, within the item's spread). Keep the explanation's point about "as usual".

### R7 [minor] Facts: Headlee does not open her talk with the list
> "Celeste Headlee ... opens [her TED talk on conversation] by listing what people are usually told"
> (ll. 405–406)

In the transcript's cue timings, the talk opens with a show of hands about unfriending people. The
"look, nod and smile" list comes at 3:01 of an 11-minute talk. **Fix:** "Celeste Headlee ..., early
in [her TED talk on conversation], lists what people are usually told".

### R8 [minor] Facts: Rogers 1957's scope
> "But he was writing about client-centred therapy, where reflecting feelings was a described
> technique" (ll. 168–170); "That is therapy, not conversation between friends" (l. 168)

The paper is about the conditions for any therapy. Client-centred therapy is his example ("In
client-centered therapy, for example, the technique of "reflecting feelings" has been described"),
and he says the hypotheses "hold in any situation whether it is or is not labeled "psychotherapy""
(SOURCES Part C §1.2 [V]). The course's caution can stay, but the lesson shouldn't imply that Rogers
confined himself to therapy. **Fix:** "That is therapy, not conversation between friends, and it is
his theory, not a finding, though he thought it held outside therapy too. His example was
client-centred therapy, where reflecting feelings was a described technique, and it is the root of
the complaint ..."

### R9 [minor] Neutrality (light): Headlee's view sits in the misconception list, and her "company" is overstated
> "**"If you're really paying attention, there's no need to say anything back."** ... Attention the
> speaker cannot see cannot be corrected." (ll. 454–457); "On that she has more company than you
> might expect. The negotiation blog says ..." (ll. 413–418)

The first is close to Headlee's own reason ("no reason to learn how to show you're paying
attention"). It appears as an error, with the rebuttal in the course's voice. The misconception list
does name errors on both sides (items 1 and 7 against item 6), but after R4 removes item 7, only
Headlee's side keeps an error in the list. In the second passage, PON and Adler are enlisted as
company for her, but both recommend paraphrasing: PON's page is built around it, and Adler's outline
teaches it "sparingly". **Fix:** reword item 6 so it is not her position, for example "**"If I was
paying attention, I understood."** Rogers and Farson: understanding is harder than it seems, and only
the speaker can tell you whether you have it.[1]" At l. 418 add "though both still recommend
paraphrasing, used with care".

### R10 [minor] Facts: VitalTalk's scope
> "an organisation founded by clinicians to teach communication in cancer care" (l. 295); "That is
> **practitioner advice** for oncology." (l. 300); quiz 4 "the oncology trainers' advice" (l. 65)

The page's banner is "Learn to communicate effectively with seriously ill patients". SOURCES says it
was "founded by clinicians", and the lesson's own Sources entry [7] says "clinicians caring for
seriously ill patients". Its roots are in oncology (Oncotalk), but its scope is serious illness.
**Fix:** "... to teach communication in serious illness, cancer care among it"; "practitioner advice
for clinicians with seriously ill patients"; quiz stem "the serious-illness trainers' advice" (or
"VitalTalk's advice").

### R11 [minor] Depth: the Radomir "rephrase" adds a fact he did not give
> "So your manager keeps returning it." (l. 251)

Radomir said "she", not "my manager". A rephrase that brings in something the speaker didn't say
blurs the line between simple and complex that the lesson is teaching. **Fix:** "So it keeps coming
back to you."

### R12 [minor] Facts: TIP 35's client is not gendered
> "To a client who wants to quit smoking cannabis so that the smoke will not worsen his daughter's
> asthma" (ll. 236–237)

Exhibit 3.6 says "my daughter's asthma" and gives no gender for the client. **Fix:** "their
daughter's asthma".

### R13 [minor] Safety: no pointer to lesson 11 and Mental Fitness lesson 1
The lesson names 988 as "the US crisis line" and R U OK? as "an Australian suicide-prevention
organisation", and it cites Samaritans' page on someone who is struggling. Lessons 1, 3, 4 and 7 each
carry the one-sentence pointer at this kind of moment. Lesson 8's Connections mentions lesson 11 but
not Mental Fitness lesson 1. Nothing in the lesson counsels or assesses risk. **Fix:** after the
practitioner list, add: "Three of those come from crisis services; if someone you are listening to
may be in danger, lesson 11, "When it's serious", and Mental Fitness lesson 1, "Where ordinary
ends", are where the institute deals with it."

### R14 [minor] Cold start: undefined terms
"client-centred therapy" (l. 169) is never glossed. "SHUSH" (l. 315) is never expanded, and the
reader gets only its "Say it back" letter. "socially attractive" (l. 430) reads as physical
attractiveness. "comprehensive exams" (l. 429) is a US academic term. **Fix:** "client-centred
therapy (Rogers's own approach, which follows the client's lead rather than directing)"; "its SHUSH
listening tips (one letter stands for "Say it back")"; the R4 wording for the other two.

### R15 [minor] Facts: a paraphrase of Schegloff et al. that SOURCES does not hold
> "often put as a question that the speaker gets to accept or refuse" (l. 195)

SOURCES Part B §1.4 and the lesson 01/02 gate closure record other-corrections as "hedged with
uncertainty", "put as a question, or in the "Y'mean X?" format". Neither records "accept or refuse".
The paper may well say this, but I did not re-download it. **Fix:** "often put as a question, such as
"Y'mean X?", which leaves the speaker room to take it up", or record the paper's wording in a gate
closure.

### R16 [minor] Voice: an ambiguous exercise line
> "they can say no, and they can say nothing kind about your restatements" (l. 465)

It reads as "they may withhold kindness", which is probably not the intent. **Fix:** "they can say
no, and they don't have to be kind about your restatements."

### R17 [minor] Connections: a promise about an unwritten course
> "Teach-back comes back in Teaching and Mentoring, a later course" (ll. 509–510)

Teaching and Mentoring is `planned` in TAXONOMY. **Fix:** "Teaching and Mentoring, a later course
still being planned, is where teach-back is meant to return."

### R18 [minor] SOURCES and OUTLINE housekeeping (not the lesson)
(a) SOURCES Part C §8 still records "Your wife is pressuring you about your drinking." as the complex
example [V], and the OUTLINE lesson 8 entry repeats it. The lesson 08 gate closure corrects this, but
a later drafter reading §8 alone would reuse the error. Add a pointer at §8: "(corrected in Gate
closures, lesson 08: Exhibit 3.6 lists this as simple, "Rephrase")". (b) The `unread:` line still
carries Part A's "Weger Castle Emmett 2010", though the synthesis (l. 108) says Weger 2010 is off the
line at abstract level and "Weger 2010 full text" is the entry that should stay. The build did not
flag the lesson only because its citation is spelled differently. Rename the entry "Weger Castle
Emmett 2010 full text" so the build and the synthesis agree.

### R19 [minor] Voice: two shapes
"This lesson is about saying it back: what Rogers and Farson meant by it, ..." (l. 117) is the "In
this lesson" opener in another form. **Fix:** "Saying it back takes several forms (repeating,
rephrasing, reflecting a meaning, naming a feeling), and there is a check that runs the other way
when you are the one explaining, and a case against the whole thing ...". "is not a check; it is a
run-up." (ll. 332–333) is the not-X-it's-Y shape. It is acceptable once, and the checkpoint reuses
the image, so leave it unless the fixer is already rewriting that paragraph for R3.

### R20 [minor, course-wide] Build
`npm run build:drafts` stops on a course-level ERROR, "8 lessons and no final test" (standard 4.4),
so this page could not be opened in the browser. That is not lesson 8's defect. The lesson has no SVG
and no chart. I checked the block bodies by reading: every multi-paragraph `:::predict` and
`:::checkpoint` body uses blank lines, and no body opens with a number followed by a full stop except
the intended lists.

### Verdicts
- **Facts:** every quotation matches its primary, and every number checks. One design detail is wrong
  (R1). One symmetric claim is false for two of five sources (R3). The Weger abstract is stretched by
  a causal verb (R4). Minor scope slips (R7, R8, R10, R12, R15). No citation to an unread work is
  relied on. Weger 2010 is at the abstract level, as G1's fallback allows (see R18b). Talevski is not
  named.
- **Neutrality (light):** no culture lines in the lesson, and no finding written as "people" from a
  US sample. Headlee's dissent is given fairly and labelled, and both sides get errors in the
  misconception list. But the lesson pre-judges lesson 9 (R4) and places Headlee's view as a
  misconception (R9). MI is kept as a clinical tool with its steering named (decision 9). No
  persuasion is taught.
- **Safety:** no counselling, no risk assessment, no crisis callout (correct for lesson 8). The
  partner exercise asks for consent, forbids recording, names nobody and stops if the talk gets
  heated. The one gap is the missing pointer (R13).
- **Depth and pedagogy:** strong. Specific examples throughout, worked examples before problems, a gap
  (Hesketh), two predicts and three checkpoints, and "For your journal" is present. Quiz shapes pass.
  Two keys need work (R5, R6).
- **Cold start:** minor gaps (R14). The cross-references to lessons 2, 3, 4 and 6, Logic and Argument
  lesson 7 and Reading Well lesson 7 were each checked against the lesson text and hold. Lesson 7 is
  referred to wrongly (R2).
- **Voice and media:** clean. Minutes 90 measured and stated; contractions and bold within their
  bands; links in the teaching prose; no SVG.

**Count: 0 critical, 4 major, 16 minor. No Tier B trigger:** each major finding is a few-sentence fix,
and none needs the lesson rewritten.

### Resolutions applied

Fixer in a separate context, 2026-09-26. Primaries re-fetched and string-matched before any sourced
claim changed (Ickes 1993, Samaritans, 988, the Weger abstract, Headlee's transcript, Rogers 1957,
VitalTalk); recorded in SOURCES "Gate closures, lesson 08 review (2026-09-26)".

- **R1, R2 fixed together.** `course-wide.md` recorded no other decision, so the Marangoni study is
  no longer taught here: one short recall ("Lesson 7 ... showed the other side"), in lesson 7's own
  terms ("partway through"), with the single-study label and "this course's reading, as in lesson 7".
  Connections now says lesson 7 "showed", not "looks at"; Sources [4] names the study as taught in
  lesson 7 and reported by Ickes. Course-wide note appended.
- **R3 fixed** in the reviewer's wording, citing [9][10]; confirmed on both pages today.
- **R4 fixed.** The verdict is gone; the sentence hands the question to lesson 9, keeps "associated
  with", quotes "social attractiveness", adds that the abstract doesn't say how people were assigned,
  and glosses comprehensive exams as "a kind of university exam". The Weger misconception is cut, not
  replaced: no source names a substitute.
- **R5 fixed:** key "Both hold that a show of attention is no real substitute for actually paying it"
  (79 characters). **R6 fixed:** key "...keeps falling to you, and it's starting to grate." (76).
- **R7, R8, R10, R11, R12, R16, R17 fixed** as proposed (R8 quotes Rogers's "in any situation"
  line; R10 also changes quiz 4's stem to "VitalTalk's advice").
- **R9 fixed:** misconception reworded to "If I was paying attention, I understood."; PON and Adler
  now "still recommend paraphrasing, used with care".
- **R13 fixed:** pointer to lesson 11 and Mental Fitness lesson 1 after the practitioner list, in
  lesson 04's wording.
- **R14 fixed:** client-centred therapy glossed; SHUSH glossed; R4 wording covers the other two.
- **R15 fixed:** "often put as a question, such as "Y'mean X?", which leaves the speaker room to take
  it up", which SOURCES Part B §1.4 holds.
- **R18 partly fixed, in SOURCES by append only:** the Part C §8 correction is recorded as a Stage 4
  note. Not edited in place: the `unread:` line rename and OUTLINE (other agents are writing SOURCES;
  OUTLINE is outside this fixer's files). Both handed to the orchestrator in `course-wide.md`.
- **R19:** the opener rewritten without the "this lesson is about" shape. The "run-up" line kept, as
  the reviewer allowed.
- **R20 declined here:** course-level (no final test yet), not lesson 8's. No SVG.

**Final measures:** 6,115 words in the file; `npm run minutes` 90 measured, 90 stated. Contractions
about 8.1 per 1,000 words (build's measure); bold about 7 per 1,000 body words. No em dashes; en
dashes only in Sources page ranges; no banned words. Two `:::predict`, three `:::checkpoint`, the
Hesketh gap. Quiz keys 2,0,3,0,3,1 (unchanged; all four positions, no adjacent repeat; no match or
value shift against lessons 01 to 07 by script). Option-length spreads 7, 3, 3, 1, 5, 3; the key is
never the sole longest. `npm run quotes conversation-and-listening`: no miss in lesson 8 (three
misses are in lesson 07, which another agent is fixing). Names: Ysolde, Zebedee, Honorine,
Leontyne, Aurelio, Radomir, Hesketh, Wendeline. `npm run validate` exit 0.

**Status after review:** clean.

## Targeted re-check (2026-09-26)

**Checker:** fresh context. I read the review, the diff of lesson 08 against 453934b~1, SOURCES
"Gate closures, lesson 08 review (2026-09-26)", the lesson 08 section of `course-wide.md`, and
lesson 07 as it stands on disk (another agent is fixing it; read, not edited).

**Every finding checked against the lesson text.** R1 to R17 and R19 are resolved as the
resolutions say. R18's in-place parts (the `unread:` rename, OUTLINE) and R20 are course-level and
were handed on, correctly. No fix introduced a factual error. Two small wording faults, both fixed
inline:

- **The SHUSH gloss repeated itself** after the R14 fix: "(one letter stands for "Say it back"):
  "Say it back", with the instruction". Now "for supporting someone, where one letter stands for
  "Say it back", with the instruction". The quotation is unchanged.
- **Connections overstated the feedback finding** after the R2 fix: "feedback raised accuracy".
  Ickes reports that feedback "accelerated the rate at which the perceivers' empathic accuracy
  improved", and the body (l. 203) says "improved faster". Connections now says "feedback sped up
  gains in reading another person".

**The back-reference to lesson 07 matches what lesson 07 teaches.** Lesson 07 (ll. 352–362)
teaches the Marangoni, Garcia and Ickes study: students guessing a client's thoughts from simulated
therapy tapes, "half were shown, partway through, what the client had actually been thinking", the
"accelerated" quotation, the single-study label, and "on this course's reading" a correction is
feedback of the kind that helped. Lesson 08 recalls it in the same terms ("partway through", "a
**single study** of students watching tapes, not talking", "**This course's reading**, as in lesson
7") and does not re-teach it. Lesson 07's hand-off (l. 539: lesson 8 "turns Ickes's feedback finding
into a habit") matches lesson 08's Connections. "Partway through" is fair to Ickes's "during the
middle portion of each tape".

**Primaries re-fetched today** with curl (generic browser User-Agent, no personal data) and
string-matched: Ickes 1993 (Greater Good PDF; "middle portion of each tape", "accelerated the rate
..."), Rogers 1957 (counselling-tutor PDF; "hold in any situation whether it is or is not labeled
“psychotherapy.”", the client-centred example), Samaritans ("Say it back", "Check you’ve understood,
but don’t interrupt or offer a solution.", then "Repeating something back ..."), 988 ("Summarize
What You Hear": "By repeating, paraphrasing or even summarizing ..."; nothing on inviting a
correction), VitalTalk (banner "seriously ill patients"), Headlee's transcript (opens with "show of
hands"; the "look, nod and smile ... It is crap." passage matches), and the Weger 2010 abstract (UCF
STARS record 1477: "One hundred and eighty", "comprehensive examinations", "associated with the
social attractiveness of the listener", not associated with feeling understood; no word on
assignment). Schegloff et al.'s "Y'mean X?" as the common modulation form is in SOURCES Part B §1.4
and the lesson 01/02 gate closure. `npm run quotes conversation-and-listening`: 142 checked, 0 not
found.

**Weger 2010 and lesson 9.** Lesson 08 uses the study at abstract level only: one paragraph,
"associated with", the study's own "social attractiveness", "single study", and a hand-off ("Lesson 9
sets it beside studies that point in other directions"). No verdict is given, no misconception rests
on it, and the quiz does not touch it. Nothing pre-judges lesson 9. One note: "seeming **more**
likeable" gives a direction the abstract does not state. It is true: the full text, recorded in
lesson 9's uncommitted G1 closure in SOURCES, has paraphrase above acknowledgement on social
attraction (r = .15), and lesson 9's draft says the same. Not changed.

**For the orchestrator (not a lesson 08 defect at HEAD).** Lesson 9's in-flight SOURCES change
closes G1 for Weger 2010 (full text read) and clears it from the `unread:` line, which also settles
R18(b). Once that lands, lesson 08's "this course has read only its abstract" (l. 429) is no longer
true of the course. Commit with lesson 9, or just after it, a one-line change to "and this lesson
draws only on its abstract, which doesn't say how people were assigned" (Sources [17]'s "Read: the
abstract only" stays accurate for lesson 08).

**Numbers redone in the changed passages:** 180 undergraduates (abstract); three crisis and
suicide-prevention services among the five (Samaritans, 988, R U OK?); "most of them", three of five
(R U OK?, Calgary-Cambridge, PON); Headlee's list at about 3:01 of 11 minutes, so "early in" is
fair. Lesson 11 and Mental Fitness lesson 1 titles match lesson 04 and OUTLINE.

**Quiz:** explanations checked against keys for all six items; each names its distractors by
content and agrees with the key. The R5 key (Headlee: no need to show attention you are paying;
Rogers and Farson: pretence is detected and technique without respect is "empty and sterile") and
the R6 key (a guess at the meaning under "as usual", intensity not raised) both hold. Option
lengths now 74–81, 86–89, 81–84, 81–82, 77–82, 79–82 (spreads 7, 3, 3, 1, 5, 3); keys 2,0,3,0,3,1;
the key is never the sole longest.

**Tools:** `npm run minutes`: 90 measured, 90 stated. `npm run validate`: exit 0, no warning on
lesson 08.

**Verdict: SETTLED.**

## Podcast fact-check, 26 September 2026

Fresh-context check of `podcast/08-saying-it-back.script.md` against the lesson and, where cited,
the primaries (the Rogers and Farson 1987 excerpt PDF, Rogers 1957 reprint, TIP 35 chapter 3 and
Exhibit 3.6, the VitalTalk, AHRQ, Samaritans and 988 pages, the Headlee transcript, and the Weger
2010 abstract from an Internet Archive capture of the publisher's page).

**One one-edit fix made in the lesson.** "for a lively or heated discussion they suggest a ground
rule" misreported the excerpt, which says "a lively or controversial discussion". A controversial
discussion need not be heated, and the exercise tells readers to stop if it gets heated. Now "lively
or controversial".

**Checked and holding:** every quotation string-matches its primary; Samaritans ("Repeating
something back") and 988 ("repeating, paraphrasing or even summarizing") do count plain repeating,
and 988 says nothing about inviting a correction; Weger's abstract gives 180 undergraduates,
paraphrase "associated with the social attractiveness of the listener" and not with "feeling
understood".
