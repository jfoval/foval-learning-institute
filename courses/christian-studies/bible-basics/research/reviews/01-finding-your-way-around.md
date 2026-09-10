# Reviews: The Bible, What It Is and How to Read It — 01-finding-your-way-around

Append-only. Newest at the bottom.

## Lesson 1, "Finding your way around" — Stage 4 round 1, 2026-09-06

Five reviewers, each in fresh context: depth (Part 1), fact-check, neutrality (Part 3 and 3.7),
voice (style guide and 4.5), pedagogy (Part 4).

**Verdict: not clean for publish.** One blocking issue is course-wide and outside the text
(licensing). Three findings are must-fix under 3.1 and 3.7. The quiz fails the 4.3 application
threshold. Roughly two thirds of the findings are additive rather than corrective: the research
existed at Stage 1 and the draft did not reach for it.

### BLOCKING, and course-wide, not lesson 1

**L1-B1. The ESV permission statement is wrong, and the stated terms may not cover this project
at all.** The lesson says "Crossway\'s standing permission for up to 500 verses in non-commercial
use". Crossway\'s actual terms: 500 verses without a formal licence, not restricted to
non-commercial use, provided the quotations are under half of any one book and under 25% of the
work. The lesson omits every condition, and two of the omitted ones bite here:

1. **"The ESV text may not be quoted in any publication made available to the public by a Creative
   Commons license."** `package.json` declares `CC-BY-SA-4.0` and `docs/VALUES.md` promises the
   content is "licensed for reuse". As things stand the standing permission does not apply.
2. The gratis permission **excludes commentaries and Bible reference works.** A twelve-lesson
   course on how to read the Bible is close enough to that line to need a decision before publish.
3. The **required Crossway copyright notice appears nowhere** on the site. Grepped `site/`,
   `docs/`, `README.md`: no ESV or Crossway attribution outside the lesson source lists.

`SOURCES.md` line 36 carries the same wrong wording, so it has propagated to all twelve lessons
(running total roughly 190 to 210 verses).

**Needs John\'s decision. Options:** switch the course to a translation whose licence fits an
openly licensed work (the NET Bible is free by design and already noted in the backlog; the World
English Bible and the Berean Standard Bible are public domain); or carve course content out of the
CC licence; or seek written permission from Crossway. Everything else in this file is downstream
of that choice, because it decides whether the quotations get rewritten.

### Must fix (facts wrong)

**L1-F1. "It started fifteen lines earlier."** (line 218) Isaiah 52:13 is **three verses** before
53:1, not fifteen. Fifteen is the poem\'s total length, which the lesson states correctly six lines
later. `OUTLINE.md` has it right. This is the one error a learner will physically trip over,
because the exercise sends them to a Bible to count. Fix: "three verses earlier".

**L1-F2. "The same New Testament in every Christian Bible"** (lines 77, 162) is false. The
Ethiopian Orthodox Tewahedo broader canon has 35 New Testament books. `SOURCES.md` already records
the 81-book canon, so the lesson contradicts its own research, and it does so on a sentence offered
as a history-establishes claim.

**L1-F3. Daniel\'s position is cited to a source that says otherwise.** (line 192) "Between Esther
and Ezra" cites Bava Batra 14b, whose list runs "Daniel and the Scroll of Esther", putting Daniel
*before* Esther. "Between Esther and Ezra" is the printed Tanakh order. Doubly awkward because the
lesson argues 80 lines earlier that the Talmud\'s order differs from printed Bibles.

**L1-F4. The Hayes quotation is altered without an ellipsis.** (line 95) The Yale transcript reads
"the books of Job through the Song of Songs **or the Song of Solomon** contain wisdom"; the dropped
phrase is not marked. `SOURCES.md` carries the same shortened form. Also, Hayes **retired in 2023**
and is Sterling Professor Emerita; "who teaches" should be "who taught".

### Must fix (neutrality, 3.1 and 3.7)

**L1-N1. "Membership was already fixed."** (line 111, and line 274 on Josephus) A contested
scholarly question stated as established fact, in the direction that favours the course\'s
standpoint. Barton, Lim and McDonald all argue the edges were still moving; the rabbinic sources
record disputes over Ecclesiastes, Song of Songs and Esther (m. Yadayim 3:5). Josephus is writing
apologetic for a Greek audience, which is how a critical scholar reads "no one has been so bold as
to add anything". **`SOURCES.md` carries the same overstatement, so fix it in both places** or
every later lesson inherits it.

**L1-N2. "In the first century, that is how a Jew described the collection."** (line 62) The
lesson\'s opening move, stated flatly and uncited. Contested twice over: the New Testament usually
says "the Law and the Prophets", and whether Luke 24:44\'s "the Psalms" means the Psalter or the
whole Ketuvim is exactly the disputed point. `SOURCES.md` records that the Sirach prologue
(c. 132 BC) leaves the third part unnamed, which is the honest evidence and is stronger for the
lesson than the overstatement.

**L1-N3. The purgatory exception was dropped.** (line 82) `SOURCES.md` instructed: "no Christian
doctrine depends on the difference **except purgatory (2 Maccabees 12)**". The draft kept the
reassuring half. A Catholic reader knows exactly which doctrine is missing. Separately, "without
either side thinking the other has lost the gospel" is not true of the whole five centuries: Trent
Session IV, which this lesson cites, attaches an anathema.

**L1-N4. "Critical scholar" is defined as "a scholar reading without any faith commitment."**
(line 72) No critical scholar would accept that. It names a method, not an absence of belief:
Raymond Brown was a Catholic priest, Christine Hayes is Jewish, John Collins is Catholic, Peter
Enns is an evangelical. The definition quietly opposes faith and critical method, and it will
mislead the learner for eleven more lessons. Compounded at line 271, where Hayes is "the other
side\'s best teacher", collapsing critical method, Judaism and unbelief into one camp.

**L1-N5. "The Christian Old Testament, 39 books"** (lines 86, 108, 126, 192, quiz) is a category
error six paragraphs after the lesson explains that a Catholic Bible has 46. The four-shelf
*arrangement* is shared; the *count* is not. Use "Protestant Old Testament" wherever a number is
attached, including the diagram.

**L1-N6. Chronicles-last is presented as simply what the Tanakh does.** (line 108) True of Bava
Batra and of every printed Jewish Bible, but the Aleppo and Leningrad codices put Chronicles at the
*front* of the Writings. The lesson\'s "different last word" mechanism rests on this, so the wrinkle
belongs in it.

**L1-N7. The Ethiopian canon, Trent\'s framing, "the extra books", and *anagignoskomena*.**
Cluster of four smaller 3.3 problems, all describing Catholic and Orthodox canons from a Protestant
baseline. "Fixed at Trent" is the Protestant account; Catholics understand Trent as defining under
challenge what was already received. "The extra books" makes 66 the default. "Second canon" without
"the second refers to when their place was settled, not to a lower rank" implies second-class.
Orthodox self-designation *anagignoskomena* is in `SOURCES.md` and unused.

**L1-N8. Isaiah 53 is used with no word on the two-thousand-year dispute over the servant\'s
identity.** The restraint in not christologising it was correct and should be kept. But silence is
not neutral here; one sentence noting that Jewish tradition reads the servant as Israel, that
Christians read it of Jesus, and that lesson 5 takes it up, discharges 3.7 without breaking the
lesson\'s focus on chapter numbers.

### Must fix (depth, Part 1)

**L1-D1. The mechanism is unsourced, and the textbook it comes from is never cited.** (line 172ff)
"Reading is mostly done by expectation" is the load-bearing claim of the lesson\'s mechanism section
and carries no support. Sources [5] (Fee & Stuart ch. 1) and [6] (Longman & Dillard) are listed and
**never cited by a marker anywhere in the body**, though `SOURCES.md` names Fee & Stuart as the
origin of the "shelf predicts kind" idea. Caught independently by three of the five reviewers.

**L1-D2. The shelf-prediction rule is taught with no failure case.** Every worked case confirms the
rule, which is what makes it memorised rather than usable. Jonah is the case and is already
researched: it sits on the Prophets shelf, is narrative *about* a prophet, and its single oracle is
overturned by the end of the book. Daniel 1 to 6 is court narrative, not prophecy. `SOURCES.md`
has the Society for Old Testament Study and Hayes on Jonah.

**L1-D3. Objective 2\'s payoff exists only inside a diagram and in homework.** The two rival endings
are paraphrased in the body and quoted nowhere; their ESV text was fetched and verified *for this
lesson* and then not used. The learner is asked to perform the comparison in the exercise without
having seen one worked.

**L1-D4. Objective 4 has no practice anywhere.** The three-category sort gets a full section of
setup, is modelled twice in passing, is never once asked of the learner, and is then tested cold in
the quiz. Both the depth and pedagogy reviewers proposed the same fix independently: a sorting
exercise plus a checkpoint.

**L1-D5. The faith claim is stated honestly but never argued.** (line 68) Swap "the Bible" for any
other scripture and the paragraph survives unchanged. 3.7 asks for the faith\'s own case at full
strength. `SOURCES.md` has Wenham, *Christ and the Bible*, for exactly this and it is unused.

**L1-D6. The Jewish objection to "Old Testament" is paraphrased where a verified quotation exists.**
`SOURCES.md` has Hayes\'s own words: the term is "theologically loaded... suggests the doctrine that
the New Testament has somehow fulfilled or surpassed or antiquated the Bible of ancient Israel."
Sharper than the lesson\'s paraphrase and it names supersession.

**L1-D7. Daniel\'s "late final form" is a contested dating conceded in a three-word parenthesis**
and never labelled contested, in a course whose method is labelling what is argued. Either cut it
and keep the two literary reasons, or expand it honestly.

**L1-D8. Job\'s dating is Bible-teacher lore with no support in `SOURCES.md`,** stated twice. Cut
it; the "order is not chronological" point is already carried by Paul-before-Mark.

**L1-D9. Psalm 9/10 is asserted on a citation that does not support it, and is not worked.**
Footnote [8] verifies the Septuagint numbering only, not the acrostic. **Now resolved by the
fact-check** (see L1-R1 below), but the attribution still needs fixing, and the "mirror case" gets
three sentences and no text on the page where the Isaiah half is genuinely worked.

**L1-D10. "Arranged roughly by length"** is the simplified version and fails on its own terms
(1 Timothy has six chapters and follows three-chapter 2 Thessalonians). The real rule is two blocks,
churches then individuals, each descending by length. One clause longer and actually usable.

### Must fix (voice and pedagogy)

**L1-V1. The diagram\'s bars are on three different scales while its caption claims otherwise.**
Tanakh 20px/book, Old Testament 16px/book, New Testament three scales within one row. The Tanakh
renders 480px against the Old Testament\'s 624px, so a reader comparing by eye concludes the Tanakh
is smaller. The figure teaches the exact misconception the lesson spends two sections killing and
that quiz Q2 punishes. Caption says "Bars are scaled to book counts."

**L1-V2. The diagram breaks on the dark theme and is unreadable on a phone.** Headings at
`fill="#0f2a4a"` on a `#0c1220` background; annotations at `#555555`, roughly 2:1 contrast. Labels
at `font-size="13"` in a 640 viewBox render at about 7px on a 360px phone. **Course-wide: twelve
lessons across both courses have dark SVG text fills.** See the pipeline note at the end.

**L1-V3. Both self-check prompts print the answer on the next visible line.** (lines 194-196,
224-226) The repo already renders `:::predict` and `:::checkpoint` bodies behind a button and the
lesson uses it correctly four times elsewhere. These two are the hardest and most transferable
moments in the lesson. Caught independently by three reviewers.

**L1-V4. Six section openers begin "Here is".** (86, 113, 172, 212, 226, 232) The style guide bans
"Here\'s the thing" by name; this is the same move six times, and four of the six only announce that
content is about to arrive.

**L1-V5. No links anywhere in the body,** against 4.5 ("use plain Markdown links in the text").
Every link sits in the Sources block. Go Deeper twice says material is "free video and transcript"
or "free online" and gives no address. Highest-value additions: Sefaria for Bava Batra 14b (the
lesson makes three separate claims from that one baraita), the Penelope Josephus, the Elpenor
Septuagint, and the two Go Deeper URLs.

**L1-V6. Two banned sentence shapes survive** (lines 253, 272): "is not a party trick; it is..." and
"is not a scholar\'s luxury but...". Both are "It\'s not X, it\'s Y". Note line 64 ("A Bible is not
one book. It is a library") is the same shape but earns itself, because the negation *is* the
misconception being demolished. Keep it.

**L1-V7. Contractions run about one in five** where the guide makes them the default. Worst
concentrations at lines 68, 200, 204, 246.

**L1-V8. Pipeline vocabulary is visible to learners** in headings: "The mechanism", "Worked example
1", "Worked example 2". These are `EDITORIAL_STANDARDS.md` 1.2 element names, not things a teacher
says.

**L1-V9. Three narrators.** "We", "the course", and "I" all speak. The two "I" sentences are the
best-sounding lines in the lesson. Settle on "we" for the institute\'s confessional commitments and
"I" for the teacher\'s own moves.

**L1-P1. The quiz fails 4.3.** Three of six items are recall. Q3 quizzes the exact passage worked in
the body with the same verse numbers and the same fix. Q2\'s key is a near-restatement of the body
and has a test-wiseness leak (only "both are valid" option, only one asserting no deficiency,
longest). Q6 offers three dry historical facts and one sentence about God and asks which is held by
faith, which anyone passes unread; it never tests the "scholars argue about" category, which 3.1
identifies as where bias actually hides. Full replacement items for Q2, Q3 and Q6, plus a fix for
Q4 whose key leans on a date lesson 1 never supplies, are in the pedagogy reviewer\'s report. Q1 and
Q5 are the model and should be kept. Keys should spread to B, D, C, C, B, A (options are not
shuffled).

**L1-P2. `minutes: 40` understates the load by about thirty minutes.** Reading is 23 to 25 minutes;
adding the video, the timed reference hunt, two passages read in a physical Bible, three written
responses, free recall and the quiz gives 70 to 80. The value feeds the course total and the
learner\'s cumulative hours stat in `site/assets/app.js`. Set 70, or 65 with the repeat drill
excluded explicitly. Do not fix it by trimming practice.

**L1-P3. Two beginner misconceptions are missing.** (a) "The bold section headings are part of the
Bible" — most modern printings put a heading immediately above Isaiah 52:13, exactly where worked
example 2 sends the reader, so naming it strengthens the example. Needs verification of which
translations do this, and a `SOURCES.md` entry. (b) "The books are in order of importance" — the
lesson glances at it twice and never names it where a beginner would look.

### Lower severity, batch into the voice pass

- Ethiopian canon never quantified ("more still" where `SOURCES.md` has 81).
- Masoretes claim uncited; Aleppo (c. 930) and Leningrad (1008/09) sit unused in `SOURCES.md`.
- Josephus quoted for the count but not for "no one has been so bold... to add any thing", which is
  the sentence that bears on the canon material and that a critical scholar would contest.
- "By folding Ruth into Judges" is the standard modern reconstruction, not something Josephus says.
  One word ("probably") fixes it.
- Luke and Acts split by the shelves with John in between is the lesson\'s own thesis in a single
  example, and is unused.
- Objective 1 promises "any book" but the twelve History books and five Major Prophets are never
  listed.
- "Verse numbers came three hundred years later" is about 346; "three and a half centuries".
- Major Prophets "so called for length" has an exception: Lamentations (5 chapters) is grouped by
  attribution to Jeremiah.
- "The Geneva Bible of 1560 was the first English Bible to carry them": add "complete"; the 1557
  Geneva New Testament was first.
- "On any dating, conservative or critical, Paul\'s letters are the earliest": some conservatives
  date James c. AD 45. Soften, or restrict to "earlier than the Gospels".
- Isaiah scroll caption "just the words running on" overstates: 1QIsa-a has scribal paragraph
  spacing, which the lesson\'s own callout acknowledges.
- Scroll image is 2.1 MB; use a Wikimedia thumbnail for 4.6.
- "You have read two verses" (217) vs "three lines" (222): internally inconsistent.
- Nine specific claims need citations they lack; list in the fact-check report.
- Go Deeper has no Jewish, Catholic or Orthodox resource. Obvious addition: *The Jewish Study Bible*
  (JPS Tanakh, 2nd ed., OUP 2014), which Hayes sets.
- "Christians did receive them from Israel" implies a hand-off; both traditions grew out of Second
  Temple Judaism.
- Quiz Q2\'s explanation ("the Talmud\'s order is older than any Christian arrangement") contradicts
  the body (line 95, Septuagint from the third century BC), and the dating claim is contestable in
  its own right. The instinct is right; the defence is not.
- The first predict ("how many books?") is a trivia guess a reader cannot reason toward, and it
  hides the Catholic and Orthodox counts behind a button.

### Resolved by this review

**L1-R1. The Psalm 9/10 acrostic, flagged unverified in `SOURCES.md`** because bible.org and
netbible.org returned 403, is **confirmed**. The NIV footnote to Psalm 9 states the two "may
originally have been a single acrostic poem in which alternating lines began with the successive
letters of the Hebrew alphabet. In the Septuagint they constitute one psalm." The "with gaps" hedge
is correct; the acrostic is broken. This open item in `SOURCES.md` can be closed. Attribution in the
lesson should still move from footnote [8] to the commentaries.

**L1-R2. Verse count confirmed at 6**, matching the backlog: Luke 24:44, Isaiah 53:1, 53:2 (partial),
Isaiah 52:13, plus 4-word and 5-word fragments of 2 Chronicles 36:23 and Malachi 4:5 in the diagram.
All four full quotations verified word-for-word against the ESV. The Brenton LXX Psalm 9:22
quotation is not ESV and should not be booked against the limit.

### Verified correct, so it does not get "fixed" later by mistake

All book counts and arithmetic (39+27=66; 5+12+5+17=39; 5+8+11=24; 4+1+21+1=27); the 24 to 39
mechanism; Catholic 46+27=73 at Trent Session IV, 8 April 1546; Josephus *Against Apion* 1.8 quoted
verbatim; Bava Batra\'s Prophets order; the Hayes quotation otherwise verbatim; Langton and Estienne
(1551 Greek NT, 1553 French Bible); Isaiah 52:13-53:12 as one poem with the speaker shift at 53:1;
LXX Psalm 9 having 39 verses with Hebrew 10:1 at LXX 9:22, verified on Elpenor; the Great Isaiah
Scroll image credit and public-domain licence; the BibleProject video ID, title and 5:48 running
time; every structural and navigational claim including all ten practice references; the dating
arithmetic; all cross-references to lessons 2, 3, 7, 8, 9 and 10 against `OUTLINE.md`. Zero em
dashes. Zero banned vocabulary.

### What is working, and must survive the revision

The opening (60-64): primary text, common reading, then the turn to what the sentence shows about
layout. The chapters-and-verses section: dated, sourced, with a callout pre-empting the
overcorrection and an anti-presentism line about Langton. Line 222 ("walks in during the second
verse of a song and spends three lines asking who the singer means") is the sentence the whole
section exists to earn. The "forty authors over fifteen hundred years" misconception (246) is 2.4
and 3.7 done properly and should be the template for D5, D7 and N1. The refusal to christologise
Isaiah 53 was deliberate and correct. No sneering anywhere. The standpoint section is genuinely well
done. The "Judaism\'s Bible with a Christian sequel" correction passes the Jewish Turing test
cleanly. Quiz Q1 and Q5 are the model the other items should match.

### Pipeline changes this review argues for

1. **`scripts/build.mjs` should fail validation on dark hardcoded `fill` values in SVG `<text>`
   elements.** Twelve lessons across both courses have them. Two lessons already use `var()`
   correctly, so this is drafter inconsistency, not a missing convention. A check stops lessons 13
   through 140 repeating it.
2. **The drafting brief needs a line on theme-aware SVG and minimum label size at phone width.**
3. **The drafting brief needs a line requiring in-body links** (4.5 is being read as "cite in the
   Sources block", which is not what it says).
4. **Stage 3 should check the draft against its own `SOURCES.md` instructions.** The single largest
   category of finding here is research gathered at Stage 1 and not used: Fee & Stuart uncited, the
   verified endings unquoted, the purgatory exception dropped, Wenham unused, the Hayes quotation
   paraphrased, Jonah unused, *anagignoskomena* unused, the Ethiopian 81 unused.
5. **`SOURCES.md` itself needs correcting** in three places: the ESV permission wording (line 36),
   the "order, not membership" overstatement, and the shortened Hayes quotation. Errors in the
   research file propagate to every lesson drafted from it.

### Resolutions applied, 2026-09-06

**L1-B1 (licensing), resolved course-wide.** The course now quotes the **NET Bible**, whose terms
allow free quotation in non-commercial work with no verse cap and state no exclusion for openly
licensed works or for reference works. Editorial Standards **4.7** is new and carries the policy,
including JPS 1917 for Tanakh contexts, Brenton for the Septuagint, KJV where the familiar wording
is the subject, and the rule that our own open licence does not extend to quoted scripture. The
ESV permission error was corrected at source in `SOURCES.md`, and the 500-verse running count has
been removed from `SOURCES.md` and the backlog. The remaining eleven lessons still quote the ESV
and must be re-fetched in the NET.

**Applied to lesson 1:** F1 (fifteen lines to three verses), F2 (Ethiopian Tewahedo New Testament),
F3 (Daniel no longer cited to Bava Batra for a printed-Bible order), F4 (Hayes quotation restored,
"who taught"); N1 (membership no longer asserted as settled, with Barton/Lim/McDonald and m. Yadayim
3:5 cited), N2 (first-century three-part canon hedged, Sirach prologue added), N3 (purgatory and
2 Maccabees 12 restored, Trent's anathema named), N4 ("critical scholar" redefined as a method),
N6 (Aleppo and Leningrad wrinkle added), N7 (Trent "defined", "the books at issue", "second canon"
explained, *anagignoskomena* added), N8 (the servant dispute named and deferred to lesson 5);
D3 (both endings now quoted, JPS for Chronicles and NET for Malachi), D4 (sorting checkpoint and a
fourth practice item added), D5 (Wenham's argument given), D7 (Daniel's dating labelled contested),
D8 (Job dating lore cut, twice); V1 (diagram redrawn on one ruler, eleven units per book),
V2 (diagram now uses `var()` fills and a 480 viewBox, verified legible in both themes),
V3 (both self-checks wrapped in `:::predict`), V4 (all six "Here is" openers gone), V5 (in-body
links to Josephus, Sefaria and the Yale transcript; *The Jewish Study Bible* added to Go deeper),
V6 (both banned sentence shapes rewritten), V7 (contractions raised in the worst passages),
V8 (pipeline vocabulary out of headings); P1 (Q2, Q3 and Q6 replaced with application items, Q4's
silly distractor removed and its key no longer depends on lesson 2, keys spread B/C/A/C/B/A),
P2 (`minutes` 40 to 70). Plus the low-severity batch: Major Prophets exception, Josephus
reconstruction hedged, Geneva "complete", Masoretes dated, scroll caption corrected, Langton
attribution separated from the Estienne dates, practice item 2 made two-directional.

**Not yet applied, still open on lesson 1:** L1-D1 (Fee & Stuart and Longman & Dillard still
uncited; the mechanism paragraph still has no source), L1-D2 (no failure case for the shelf rule;
Jonah is researched and unused), L1-D6 (Hayes's own words on "Old Testament" as theologically
loaded), L1-D9 (Psalm 9/10 attribution should move from footnote [8] to the commentaries, and the
mirror case is still not worked), L1-D10 (the two-block arrangement of the Letters), L1-N5
("Christian Old Testament, 39" fixed in the diagram but not everywhere in the prose), L1-P3 (the
two missing misconceptions), and the remaining citation gaps. A second pass should clear these
before the lesson is called done.

---
