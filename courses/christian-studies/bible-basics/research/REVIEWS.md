# Reviews: The Bible, What It Is and How to Read It

One entry per lesson per review round. Findings are recorded in full, then a resolution line is
added to each as it is fixed. Nothing is deleted from this file; superseded findings are marked
resolved rather than removed.

---

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

## Lesson 2, "One story" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context. **Verdict: not clean for publish.** Stronger than lesson 1 where
lesson 1 was weakest (five of six quiz items use fresh cases; the Jeremiah 29 example is real
teaching), and it fails in new ways. Two defects are structural: the diagram contradicts the quiz,
and the timeline is out of chronological order in a lesson about chronological order.

### BLOCKING

**L2-B1. The map supplies the wrong answer to its own quiz.** The SVG labels the united-kingdom
block `Psalms, Proverbs, Song mostly placed here`. Quiz Q1 asks where Psalm 137 belongs; the key is
the exile and distractor A is the united kingdom. A learner who memorised the map, which the lesson
instructs them to do, is led into the wrong answer. `SOURCES.md` already records Fee & Stuart ch. 11
listing 137 among the exilic laments, and Hayes lecture 21 calling it "clearly from the perspective
of the exile". Fix: delete "mostly placed here", note that the Psalter spans the act, and mark
`Psalms of the exile (e.g. 137)` in the exile block.

**L2-B2. The Tel Dan stele is drawn out of chronological order.** Its label sits at y=428, below the
return under Persia (y=392) and below the 586 BC marker, styled identically to genuine period
labels. A ninth-century-BC object is drawn beneath fifth-century-BC events. In the lesson whose
thesis is that confusing shelf order with time order wrecks your reading, the figure commits the
error the prose teaches against. Same for `Earlier periods: dates argued` at y=442, a meta-note
dressed as a timeline entry. Fix: move Tel Dan beside the divided kingdom (y about 298 to 312), or lift both
out of the band as visually distinct annotations.

**L2-B3. Three quiz items are answerable by option shape alone.** Q3's key is the only option that
is not a flat verdict and the only one without an absolute. Q5's keys are signposted by two options
opening "It is better", and A and B fall to absolutism-elimination ("nothing at all", "never... in
any form"); worse, Q5 tests a case the checkpoint at line 264 has already worked and revealed. Q4's
key is the only option that performs the method. Q6 carries two options no beginner holds. **Keys
never land on option D in this lesson, nor in lessons 1 or 9**, which hands an attentive learner a
free elimination on every item. Full replacement items for Q3, Q4, Q5 and Q6 are in the pedagogy
report; proposed spread B, A, D, B, C, D.

**L2-B4. Objectives 2 and 3 have no practice anywhere.** The five covenants and Fee & Stuart's three
levels are each stated, modelled, and then tested cold in the quiz. All three exercise parts are
placement tasks. This is L1-D4 recurring one lesson later. Fix: add a covenant task and a
three-levels task on fresh passages, interleaved rather than blocked.

**L2-B5. The payoff argument takes an undisclosed side in a question SOURCES.md marks contested.**
"The New Testament says that covenant has been made in Christ, that the church is now the people of
that promise" is covenant theology's answer to contested question 5, which instructs "present as a
range... and do not resolve it". A dispensationalist reader is told in the author's voice that their
view is what the New Testament says, and Romans 11's olive tree appears nowhere. The lesson labels
the Christ-in-Ruth reading three paragraphs earlier and then fails to label the harder one.

### Facts wrong

**L2-F1. "In Peter's phrase, as exiles (1 Peter 1:1)."** Conversion debris: "exiles" is the ESV's
word. NET 1 Peter 1:1 reads "temporarily residing abroad". NET does say "exiles" at **1 Peter 2:11**. Quoting a wording our own Bible does not carry, in the paragraph warning
readers not to lift wordings off the page, is the worst possible place for it.

**L2-F2. Nicole's 278 is misdescribed.** The lesson says 278 is "quotations and direct allusions
together". Nicole's 278 is the count of distinct Old Testament verses inside his direct-citation
tally (94 Pentateuch, 99 Prophets, 85 Writings); his conservative total of separate references is at
least 295; the allusion figures are other scholars' (Toy 613, Dittmar 1,640, Huehn 4,105, all
verified). Those numbers are in `SOURCES.md` and the lesson replaced them with "far higher numbers".

**L2-F3. "No Old Testament book is written inside the gap"** is contested, stated as settled, and
contradicts lesson 1, which already says most critical scholars date Daniel's final form to the
second century BC. Worse, the predict block marks the learner *wrong* for placing Daniel there.

**L2-F4. "Only two dates are printed"** is false against the lesson's own SVG, which prints three
(586 BC, 9th c. BC, about AD 30). Separately, `722 BC` is verified in `SOURCES.md`, deliberately
omitted from the map, and then required by Q6's explanation.

**L2-F5. Genesis 12:2-3 does not contain the land promise the sentence announces.** The prose says
"a nation, a land, and a blessing"; the quotation has nation, name and blessing. Land is in 12:1 and
12:7. Fix the prose or extend the quotation.

**L2-F6. "Deuteronomy 28 sits at Sinai's end"** is wrong as geography. Deuteronomy is delivered on
the plains of Moab forty years later, and 29:1 explicitly distinguishes its covenant from Horeb.

**L2-F7. Two more conversion survivors in prose that reads as quotation.** "Everyone doing what was
right in their own eyes" is ESV/KJV; NET Judges 21:25 reads "each man did what he considered to be
right". Quiz Q2 puts "the second year of Darius the king" and "the LORD's house" in quotation marks;
NET has "King Darius' second year" and "the LORD's temple".

**L2-F8.** "Six centuries earlier" for Psalm 137 against Revelation understates: it is 620 to 680
years.

### Neutrality (3.7)

**L2-N1.** Tel Dan is made to establish more than it can: "which is why history establishes that a
king David existed" rests the case on one inscription cut about 150 years later. What it establishes
is that Judah's neighbours named the dynasty after a founder called David. **`SOURCES.md` contested
question 7 carries the same overstatement and must be fixed there too.**

**L2-N2.** "The dates are argued" narrows historicity to chronology. `SOURCES.md` lists the scale of
the exodus, the conquest, and the historicity of the patriarchal narratives as contested. The lesson
kept "when" and dropped "whether".

**L2-N3.** The timeline never distinguishes where a book's story is *set* from when it was
*written*. The drafter knew (the SVG notes "Chronicles written") and never says so, silently
encoding one answer to Pentateuch authorship as the shape of the Bible.

**L2-N4.** "Four hundred years, no books" is the Protestant canon stated as history, in three places
including a quiz key. Catholic and Orthodox Bibles carry Maccabees, Wisdom and Sirach from exactly
those centuries. The prose paragraph handles this well; the map and the predict answer contradict it.

**L2-N5.** "The failure of the others" moves the failure from Israel to Sinai itself. Jeremiah 31:32
says the people broke it. That is the supersessionist slide in miniature, in the author's voice.

**L2-N6.** The "range" of big-story schemes is three Reformed evangelicals. Catholic
salvation-history and Orthodox recapitulation are absent.

**L2-N7.** Tanakh material is quoted from a Christian translation, against 4.7. The Ruth/Shavuot
section and exercise Part 3 (explicitly "the last two verses of the Tanakh") should use JPS 1917.

**L2-N8.** Hayes is again offered as "the other reading" and as "a scholar who is not asking you to
believe anything", repeating L1-N4: it equates critical method with absence of commitment and folds
critical scholarship and Judaism into one camp. *The Jewish Study Bible*, which the outline assigns
to this lesson, is absent; the only source behind the Shavuot passage is the **1906** Jewish
Encyclopedia, describing a living tradition's current practice.

**L2-N9.** Q4 corrects typological reading without naming that it is patristic and Orthodox standard
practice, not a beginner's error. Q4 option C attaches a strawman to a true Jewish canonical fact.

**L2-N10.** "God chooses one family... so that the rescue can begin" is more purely instrumental
than the source it paraphrases. And four centuries are called "silence" when they produced Sirach,
Maccabees, Enoch, Jubilees, Qumran, the synagogue and most of rabbinic Judaism.

### Depth: eleven researched items unused

Confirmed as a systemic drafting pattern, not a lesson 1 accident. **Deuteronomy 28:15-24 and 38-42
were fetched verbatim in the NET** and never quoted, in a lesson that asserts "the curses have
fallen" three times and quizzes on it; Sinai is the one covenant given no text. **Roberts's eight
verified stage names** are unused while the lesson claims the schemes "differ on where to draw the
lines" and shows no difference. **Bartholomew & Goheen's verified act titles** sit in a footnote
while the body asserts what they show. **Duvall & Hays's Interpretive Journey**, annotated in
`SOURCES.md` as "best for: a teachable procedure", is uncited, and the lesson's method is
"let that meaning travel to you through the covenant", which no learner can execute. **Wenham** is
still unused, one lesson after L1-D5 flagged it. Also unused: the **Hittite suzerainty treaty form**
and its historical prologue (which is exactly why "Exodus 19 comes after Exodus 14"), the **Sirach
prologue** as a dated primary document from inside the gap, **Ketef Hinnom** as a second fixed
pre-exilic point, **Longman & Dillard**, and Nicole's verified numbers.

Also: the **retrojection objection is never stated**, though the lesson sets it up itself twenty
lines earlier ("a text cannot mean what it never could have meant to its author"). Marcion is
refuted in his weakest form rather than in the version a learner will actually meet. "Deuteronomistic"
appears only in a quiz explanation and is never taught. The Job example is wrong (Job is eighteenth
of thirty-nine, not "near the end"), and Job's dating lore has returned one lesson after L1-D8 cut it.

### Voice and pedagogy

**One contraction in 5,400 words**, and it is inside a quoted misconception rather than the teacher's
voice. **Five "Here is" openers**, the lesson 1 tic recurring. **Pipeline vocabulary** in headings
again: "Worked example 1", "Worked example 2", "Do it now", "the mechanism". **Six sections end on a
compressed one-line moral.** "Grace is in the third act; law is in the fourth" reads as an error
because the compression hides the crossover it means. Promissory line: "so that you never again read
a verse without knowing where it lives". Unsourced superlative: "the most widely assigned". Mixed
metaphor in the opening paragraph: "nobody in the room" when two people are walking a road.

**The best retrieval moment in the lesson prints its own answer.** Line 254 says "Write your answer
before reading on"; line 256 begins "Here is mine" in plain prose. Same defect as lesson 1, and it is
the question carrying objective 4.

**No links anywhere in the body**, including the two exercise parts that tell the reader to open a
passage, which blocks the exercise for anyone without a Bible to hand.

**Exercise Parts 2 and 3 have no answers**, so a solo learner cannot find out whether they were
right. Part 3 is the hardest task in the lesson.

**`minutes: 45` should be 90**, measured component by component. That breaks 1.3's one-sitting
guidance; the reviewer identified a clean seam (the map / reading with the map) if a split is wanted.

**SVG:** every label is below the 15-unit floor (24 at font-size 11) in a 360-wide viewBox, so they
render at about 11px on a phone; the fix needs a viewBox widen, not a font bump. Act 3's band is 54%
of the spine while the prose tells the reader to notice it is "about three quarters".

### What is working, and must survive

The Jeremiah 29 worked example, especially the observation that most of the letter's readers will be
dead before the promise lands. The Ruth ending ("A romance does not end with a family tree") and the
Shavuot counterpoint, with footnote 16's honest hedge. Quiz Q1 and Q2, which are the model items.
The Hayes quotation on "Old Testament" at line 284, used at full strength with the supersession claim
intact and answered without defensiveness: the best paragraph in the course so far. Exercise Part 1,
the best-designed exercise in the course so far. No sneering anywhere. An inerrantist reader will
find nothing quietly conceded; the risk in this lesson runs entirely the other way.

### Resolutions applied, 2026-09-06

Applied in a single fix pass on `lessons/02-one-story.md`, with one correction made in `research/SOURCES.md`
so that later lessons do not inherit it. `npm run validate` exits 0 with no warnings for this lesson;
zero em dashes; no banned vocabulary or sentence shapes.

**Blocking.**

- **L2-B1.** The map no longer answers its own quiz. "Psalms, Proverbs, Song mostly placed here" is gone
  from the united-kingdom block, replaced by "Psalms and Proverbs begin; the Psalter grows to the exile",
  and the exile block now carries "Psalms of the exile, Psalm 137 among them".
- **L2-B2.** The Tel Dan label has moved up beside the divided kingdom (y=386), above the 722 and 586
  markers, where a ninth-century object belongs. Ketef Hinnom sits with it at y=406 as a second
  pre-exilic anchor. The meta-note "Earlier periods: dates argued" is out of the band entirely; the
  two lines at the foot of the SVG are visually separate annotations, not timeline entries.
- **L2-B3.** Q3, Q4, Q5 and Q6 replaced with fresh application items, each with four options of the same
  shape and length class, no absolutism tell, and distractors that encode real misconceptions
  (flat covenant carry-over onto a modern nation; law-replaced-by-grace spiritualising; historicist
  deflation; putting the foreign power at the middle level; mistaking a covenant's subject matter for
  the covenant). Q5 no longer tests the case the Jeremiah 29:7 checkpoint has already worked. Keys now
  spread **B, A, D, B, C, D**, so D carries two.
- **L2-B4.** Objectives 2 and 3 now get practice before the quiz, interleaved rather than blocked: a
  covenant checkpoint on Luke 1:32 to 33 (a New Testament passage that needs an Old Testament covenant
  to read) inside the covenant section; a three-levels predict on Daniel 1:1 to 2 inside the levels
  section; and a new mixed exercise part (1 Kings 8:22, Jonah 1:1, Galatians 4:4, Genesis 15:6) that
  asks act, covenant and level of each in turn.
- **L2-B5.** The payoff argument is labelled. A new subsection, "Where this argument stops, and why",
  states covenant theology, dispensationalism and the progressive positions between them as a range,
  quotes Romans 11:18 on the olive tree against replacement, and says explicitly that the course will
  not resolve the question and that lesson 4 sets it out. The sentence "the church is now the people of
  that promise" no longer stands in the author's voice.

**Facts.**

- **L2-F1.** 1 Peter 1:1 is gone. The checkpoint now uses "foreigners and exiles" at **1 Peter 2:11**,
  which is where the NET has the word.
- **L2-F2.** Nicole restated exactly: 224 direct citations introduced by a formula; 278 different Old
  Testament verses **within that tally** (94 / 99 / 85); at least 295 separate references on his own
  conservative count; and the looser allusion counts given as other scholars' with their figures
  (Toy 613, Dittmar 1,640, Huehn 4,105). "Far higher numbers" is gone. `SOURCES.md` corrected too,
  since its lesson-2 entry carried the same misdescription.
- **L2-F3.** "No Old Testament book is written inside the gap" is deleted from both the predict answer
  and Q2's explanation. The predict question now asks which book *stands last* before the gap, and its
  answer separates where a book's story is set from when the book was written, names Daniel's
  second-century dating as the majority critical position, and points to lesson 10. Nobody is marked
  wrong for placing Daniel there. Q2's explanation now rests on Haggai's own date, 520 BC.
- **L2-F4.** Rewritten as "Only a few dates are printed, and it is worth knowing which kind each one
  is", distinguishing three events (722, 586, about AD 30) from two dated objects. **722 BC is now on
  the map**, as its own marker.
- **L2-F5.** Genesis 12:1 is now quoted with 12:2 and 12:3, so the land promise the prose announces is
  actually on the page, and the prose says land, nation, name, blessing.
- **L2-F6.** Deuteronomy is placed correctly: forty years after Sinai, on the plains of Moab, with 29:1
  quoted for the text distinguishing that covenant from Horeb. The map label reads "Sinai covenant
  (Exod 19 to 24), renewed Deut 28 to 30".
- **L2-F7.** Both survivors fixed against the NET. Judges 21:25 now reads "each man did what he
  considered to be right", and the Haggai stem now quotes "King Darius' second year" and "richly
  paneled houses". Every other quotation in the lesson was re-fetched verbatim from the bible.org
  API and checked; the full verified list is in `SOURCES.md`.
- **L2-F8.** "Six centuries earlier" is now "more than six hundred years earlier".

**Neutrality.**

- **L2-N1.** Fixed in the lesson and at source. The lesson now says what the stele establishes (that
  within about a century and a half of the period the Bible assigns David, Israel's neighbours named
  the southern royal house after a founder called David) and says plainly that this is not the same as
  confirming the Bible's account of him. **`SOURCES.md` contested question 7 rewritten** with the same
  distinction and a note that the old wording overstated it.
- **L2-N2.** "The dates are argued" now reads "more than the date": the scale of the exodus, the extent
  of the conquest, and the historicity of the patriarchal narratives are all named as live disputes.
- **L2-N3.** A new labelled point on the map, "Where a story is set and when it was written are
  different questions", with Longman and Dillard's "essentially Mosaic" against the critical
  reconstruction, and two lines inside the SVG saying the same thing.
- **L2-N4.** The gap is now described three times as a fact about a Protestant Bible: the map reads
  "Four hundred years, no book in this Bible"; the predict answer says so; the prose paragraph names
  Sirach's dated prologue from inside the period and the books Catholic and Orthodox Bibles carry.
  Q6 is built on exactly this point.
- **L2-N5.** "The failure of the others" is gone. The text now quotes Jeremiah 31:32 ("they violated
  that covenant") and says in its own voice that the failure Jeremiah names is the people's, not
  Sinai's, and that a covenant people broke is a different thing from a defective covenant.
- **L2-N6.** The range now reaches outside Reformed evangelicalism: the *Catechism of the Catholic
  Church*'s "stages of Revelation", whose joints are covenants rather than acts, and Irenaeus on
  recapitulation as the shape Orthodox theology still uses, both fetched and quoted.
- **L2-N7.** Exercise Part 4 (formerly Part 3) now quotes 2 Chronicles 36:23 in **JPS 1917**, with a
  link to Sefaria, because the task explicitly treats those verses as the ending of the Tanakh.
- **L2-N8.** Hayes is no longer "the other side's teacher" or "a scholar who is not asking you to
  believe anything". She is described by method ("taught by the historical-critical method rather than
  from a confession") and cited in-body for 586 and 722 as a working source, not as a foil.
  *The Jewish Study Bible* is added to Go deeper with a reason. The 1906 Jewish Encyclopedia is now
  cited only for the scroll list, with a note that it is a 1906 reference work and a current
  in-tradition source named alongside it.
- **L2-N9.** The typology strawman is gone. The new Q4's option D describes reading Joseph as a figure
  of Christ, and its explanation says outright that this is old, standard in the fathers, and normal in
  Orthodox and Catholic reading today, and that the error is collapsing the levels into it. No option
  attaches a strawman to a Jewish canonical fact.
- **L2-N10.** Act 3 is now "God binds himself to one family and makes it a nation, and through that
  nation the rescue of the world begins", with Bartholomew and Goheen's own act title alongside it.
  "So that the rescue can begin" is gone. The four centuries are no longer called silence in the
  lesson's own voice.

**Depth (the eleven unused items).** Added: **Deuteronomy 28** quoted at length in the NET, with the
blessing and curse pairs set against each other and 28:39 and 28:41 quoted, so Sinai is no longer the
one covenant with no text; **Roberts's eight stage names**, with the difference actually shown (he puts
three joints inside the act Bartholomew and Goheen leave whole, and his last three match acts 4 to 6);
**Bartholomew and Goheen's act titles** moved from the footnote into the body; the **Interpretive
Journey**, replacing "let that meaning travel to you through the covenant" and then worked step by step
on Jeremiah 29; the **retrojection objection at full strength** in its own subsection, answered with
Beale's point about what the Old Testament writers did not exhaustively grasp and Wenham's argument
from Jesus' own use of Scripture, and closed with the concession that the argument runs from inside the
faith outward and does not compel a Jewish reader; the **Hittite suzerainty treaty form** and its
historical prologue in the "what covenant is not" callout, with Exodus 19:4 quoted, which is what makes
"Exodus 19 comes after Exodus 14" a mechanism rather than an assertion; the **Sirach prologue** as a
dated document from inside the gap; **Ketef Hinnom** as a second fixed pre-exilic point on the map;
**Longman and Dillard** for "essentially Mosaic" in the set-versus-written note; and **Nicole's real
numbers**. Marcion is now given in his strong form (the moral difficulty of the conquest narratives and
Paul's own law-and-gospel contrast) before being answered, and the answer is that the pattern he claims
is not there, with Exodus 34:6 and Matthew 5:17 as the crossing evidence. The **Job** error is fixed:
Job is the eighteenth book of thirty-nine, at the front of the poetry shelf.

**Voice and pedagogy.** Contractions raised from one to about ninety, in the teacher's voice throughout.
All five "Here is" openers gone. Pipeline vocabulary out of every heading: the worked examples are now
"Ruth, read on one level and then on three" and "Jeremiah 29:11, the verse on the graduation card"; "the
mechanism" is out of the prose; the exercise is named after its parts, as lesson 1's is. The six
one-line morals are gone, including "Grace is in the third act; law is in the fourth", which now reads
"Grace shows up in the act everyone calls law... Law shows up in the act everyone calls grace" and says
what it means. The promissory closing line and the unsourced superlative ("the most widely assigned")
are rewritten, and the opening's mixed metaphor ("nobody in the room" while two people walk a road) is
fixed. **The unhidden answer at 254/256 is now a `:::predict` block**, so the model answer sits behind
a button. **In-body links added**: Deuteronomy 28 and Jeremiah 29 at BibleGateway in the NET, Ruth, the
Sefaria text for 2 Chronicles 36, Hayes's Yale transcript, Irenaeus at New Advent, the Catechism at
vatican.va, and Nicole's article, with both exercise passages linked so the exercise works without a
Bible to hand. **Model answers for the exercise** are supplied as three `:::checkpoint` blocks after
the exercise (the renderer will not nest blocks), covering the new mixed part, the Jeremiah work, and
the Tanakh ending. `minutes` raised from 45 to **90**.

**SVG.** Both figures redrawn. The timeline moves from a 360 viewBox to 560 and every label is at
font-size 15 or 17, with headings bold; the eight hardcoded dark shape fills are now
`var(--navy, #0f2a4a)`, `var(--oxblood, #8b1e2d)` and `var(--line-strong, #9a9a9a)`; the `desc` is
rewritten to match the new content. `npm run validate` reports no SVG warnings for this lesson.

**New: a second figure.** The "Act 3 is about three quarters of the whole book" claim was asserted in
prose and contradicted by the timeline's 54 percent band. Rather than distort the timeline, the claim
now has its own bar chart built from real counts: 11 chapters in acts 1 and 2, 918 in act 3, 89 in
act 4, 149 in act 5, 22 in act 6, summing to the standard 1,189. The timeline is left as an order map
and says so.

### Deliberately not fixed, with reasons

- **Splitting the lesson in two.** `minutes: 90` breaks 1.3's one-sitting guidance, and the reviewer
  identified a clean seam at the map. The fix pass set the honest number rather than trimming practice
  to hide it, but did not split the lesson, because a split changes the course's lesson numbering and
  every cross-reference in the other eleven lessons. **This needs John's decision.**
- **`minutes: 90` may now itself understate.** The reviewer measured 90 against a 5,400-word lesson.
  The fixes took the prose to about 8,700 words (Deuteronomy 28 quoted, the retrojection subsection,
  the covenant-systems subsection, a fourth exercise part and three model-answer checkpoints), which
  adds roughly fifteen minutes of reading and ten of practice. The value was set to 90 because that is
  what this pass was asked for; the honest figure is closer to 110, and that number is the strongest
  argument for the split above. **Both belong in the same decision.**
- **Teaching "Deuteronomistic".** The term is now nowhere in the lesson, since the quiz item that
  carried it has been replaced. Introducing it properly means teaching the Deuteronomistic History as
  a literary hypothesis, which is lesson 3 and lesson 10 territory and would unbalance this lesson.
  Recorded here so the outline can decide where it lands.
- **The eleventh unused research item, Longman and Dillard beyond one citation.** Used once, for
  "essentially Mosaic". A fuller use belongs in lesson 10, which is where the authorship argument is
  actually held.
- **Bartholomew and Goheen's interlude wording.** Still quoted from a published summary rather than the
  book, as `SOURCES.md` records. Flagged for the fact-check; not something a fix pass can resolve
  without the book.
- **Ketef Hinnom's excavation report.** Cited to `SOURCES.md` and to Barkay by name, without a page
  reference, because the report itself was not opened at Stage 1 or at this pass.
- **Beale's page reference.** The observation is cited as common ground recorded in `SOURCES.md`
  contested question 5, with his *Handbook* named, but not to a page. The fact-check should pin it.

---

## Lesson 3, "Genre first" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context: depth (Part 1), fact-check, neutrality (Part 3 and 3.7), voice
(style guide, 4.5 and 4.6), pedagogy (Part 4). **Verdict: not clean for publish, and the strongest
draft in the course so far.** Both worked examples are genuinely worked, the Gideon example is the
best sustained teaching in either course, every footnote is cited from the body (which lesson 1
could not say), contractions are fixed (81 in 4,450 words of teacher prose, against lesson 2's one
in 5,400), and there are no em dashes.

It fails in three ways that matter. Two are third-time recurrences: **a self-check that prints its
own answer in plain prose** (L1-V3, lesson 2's line 254, now here at 157/159) and **an objective
stated, modelled, never practised, then tested cold** (L1-D4, L2-B4, now objective 1). Two are new
and structural: the lesson **contradicts the textbook it names as its authority** on its own second
worked example, and **four of six SVG labels vanish in the dark theme** in a way `npm run validate`
cannot see. And the recurring standpoint error is here in five places.

### BLOCKING

**L3-B1. The best retrieval moment in the lesson prints its own answer, for the third lesson
running.** Line 157: "Now do the next step yourself. Go back to 1 Samuel 9:2 and 10:23... Write one
sentence on what the chapter is saying about Saul before David ever arrives." Line 159, the next
visible line: "Here's mine. Israel asked for a king to..." On a phone the answer is the next thing
on screen. The lesson uses `:::predict` and `:::checkpoint` correctly four times elsewhere, so this
is an oversight, not a misunderstanding. It sits on objective 2, and the six-lookup derivation is
the most valuable piece of work in the lesson. Caught independently by the depth, voice and pedagogy
reviewers. **Compounded by L3-P2**: the predict at line 151 has already printed the conclusion of
that same task ("the question is not David against Goliath but David against Saul"), so the lookups
were doing no work even before the answer appeared.

**L3-B2. The Gideon section contradicts Fee and Stuart, and the BibleProject video it embeds two
paragraphs earlier, without saying so.** The lesson says of the reading that Gideon was faithless:
"Both are adding a sentence the narrator didn't write." Fee and Stuart, 4th ed. ch. 5, use this
exact passage as their worked example of **misappropriation** and take the opposite view: "the
narrator is pointing out that God saved Israel through Gideon **despite his lack of trust in God's
word**. It is yet another account of God's mercy, not a method of finding God's will!" The
BibleProject *Plot* video says the same. So the second position the lesson dismisses as a reader's
over-correction is the position of the textbook it calls its authority, argued from plot context,
which is principle 9's "implicitly, by clearly implying it". The lesson has to either engage that or
stop calling it an addition.

**L3-B3. Fee and Stuart's list of narrative errors is wrong in the lesson and wrong in
`SOURCES.md`, and the entry it omits is the one that names this lesson's own example.** The 4th
edition lists **nine**: allegorizing, decontextualizing, selectivity, moralizing, personalizing,
**misappropriation**, **false appropriation**, false combination, redefining. "Extracanonical
authority" appears nowhere in the 4th-edition text; it is from an earlier edition and reached
`SOURCES.md` line 150 through the summaries the file itself flags. The lesson uses four of nine in
one parenthesis. **Misappropriation is the fleece.** **False appropriation is "if the Bible records
it, the Bible recommends it".** Both are missing. `SOURCES.md` must be corrected at source or
lesson 6, which also reads narrative, inherits it.

**L3-B4. Objective 1 is never practised, and the basic rule is never once used.** The rule is quoted
at line 84, glossed for three paragraphs ("Read that twice, because it's doing a lot of work"), and
then no worked example, no predict, no checkpoint, no exercise part and no quiz item applies it to a
passage. Q4's stem says "Applying the basic rule and the three levels" and its key exercises only
the levels. A rule stated, admired, and never used is exactly what 1.1's transfer test exists to
catch. This is L1-D4 and L2-B4 a third time.

**L3-B5. Four of six SVG labels disappear in the dark theme, and the validator cannot see it.**
`site/assets/styles.css` flips `--navy` to `#c9d3e2`, `--line-strong` to `#c9d3e2`, `--oxblood` to
`#d9737f` and `--text-2` to `#aab4c3` in dark mode. So `fill="#ffffff"` on the navy rect gives white
on `#c9d3e2`, about **1.3:1**; on the line-strong rect, **1.3:1**; on oxblood, **2.5:1**; and
`var(--text-2)` on a hardcoded `#d9d9d9` rect gives **1.6:1**. `scripts/build.mjs` line 141 only
looks for hardcoded *dark* text fills, so `#ffffff` sails through. Separately, all six labels are
under the font-size 15 floor (four at 14, two at 13) and render at **7.1 to 7.7px** on a 360px
phone; at this 600-unit viewBox even font-size 15 only reaches 8.2px, so the fix is a redraw, not a
font bump.

**L3-B6. Two quiz items fail 4.3, and the key is the longest option in four of six.** Q5 is recall
of the fourth misconception paragraph thirty lines above it, and it is the only item testing
objective 1. Q6 quizzes 2 Samuel 11:27, the body's flagship worked case, with the same verse number
and the same fix, which is L1-P1 and L2-B3 verbatim. Measured option lengths make the key longest in
Q1, Q4, Q5 and Q6 and tied-longest in Q2. Q4 and Q5 stack three tells each: longest, only option
without an absolute, only option that performs the method. Key spread 1, 3, 0, 2, 1, 0 is
acceptable and a real improvement (all four indices used, no run), but index 3 is used once.
Also: **not one of the six items tests a case where the narrator *does* evaluate**, so the quiz
trains "the text is silent, go elsewhere" as a rule instead of the habit of looking.

### Facts wrong

**L3-F1. ESV debris, the exact lesson-2 failure mode.** Line 159 quotes Israel asking for a king to
"go out before us and fight our battles" (paraphrasing 8:20). NET 1 Samuel 8:20 reads "Our king will
judge us and lead us and fight our battles." "Go out before us" is ESV/KJV, and it is inside
quotation marks. The middle-level argument leans on a phrase the course's own Bible does not carry.

**L3-F2. The Judges refrain, again.** The Jephthah checkpoint gives it as "in those days there was
no king and everyone did what was right in his own eyes". NET Judges 17:6 and 21:25 both read "In
those days Israel had no king. Each man did what he considered to be right." `SOURCES.md` line 183
records this exact wording as an ESV survival found and fixed at lesson 2's Stage 4, and lesson 2
now carries the NET form. Lesson 3 reintroduces it.

**L3-F3. The NET forecloses the Jephthah reading the checkpoint opens.** The checkpoint offers the
minority reading that the daughter was dedicated to lifelong service rather than killed. NET Judges
11:39 reads "**She died a virgin. Her tragic death** gave rise to a custom in Israel." A learner who
follows the reference in the course's own Bible finds the reading contradicted on the page with no
explanation. The Hebrew is what the minority reading works from; the NET has translated
interpretively, and saying so is a better teaching moment than the hedge. Same checkpoint: "whatever
first comes out of his door" should be "whoever", which is what NET 11:31 has.

**L3-F4. The chart draws exactly what the prose says it exceeds.** The caption says the narrative
block is "over two-fifths"; the rect is `width="180"` inside `width="450"`, which is exactly 40.0
percent. The SVG title and the in-bar label both say "over 40%". Everything else in the chart is
right: 450/600 is exactly 75 percent, 180/600 is exactly 30 percent, and the second bar is correctly
aligned under the first bar's Old Testament segment.

**L3-F5. "The next five lessons" is off by one.** The construction excludes this lesson, so the next
five are 4 to 8, and lesson 8 is the canon lesson. The genre run is 3 to 7, which the Connections
section states correctly.

**L3-F6. The Schindler alt text describes a posture the picture does not have.** "who bends to look
down at him". Goliath stands fully upright, spear raised in his right hand, with a ranked crowd of
Philistine warriors behind him, which the alt text omits entirely.

**L3-F7. Untagged and unlisted scripture.** Esther 4:14 is quoted verbatim from the NET in quiz Q4's
stem with no `(NET)` tag and no entry in Sources [3]. So is the 1 Samuel 8:20 fragment. Sources [3]
lists "Judges 6:17-27", a range including 6:25-26 which the lesson never uses. Quiz Q6 says David's
act "displeased the LORD" where the body, a hundred lines earlier, quotes the NET's "upset the
Lord".

**L3-F8. Small imprecisions.** Chicago Article XIII is "the topical arrangement of **materials**",
not "material" (`SOURCES.md` line 66 has the same slip). David is sent with roasted grain and loaves
for his brothers and ten cheeses for their commanding officer, not "bread and cheese for his
brothers". Eliab is angry and accuses David of "pride and deceit" (17:28); "mocked" is wrong.
Principle 5 is "Many (if not most)", not "Most". Samson has one marriage, not "marriages". Go Deeper
says Hayes "wants you to see", where `SOURCES.md` line 157 instructs "who taught" because she
retired in 2023, and lesson 1 already complies.

### Neutrality (3.1, 3.2, 3.3, 3.7)

Perspectives checked: Jewish (Tanakh, Nevi'im Rishonim, Rashi, the Judges 13 haftarah, JPS and
Alter's translations); Catholic (*Catechism* 115 to 119 on the four senses, *Dei Verbum* 12);
Orthodox (patristic and typological exegesis as normal practice, Scripture read in the Church);
critical scholar (Alter, Hayes, Collins, Ehrman, Enns, Noth's Deuteronomistic History, the LXX/MT
problem in 1 Samuel 17 to 18, Sternberg on the narrator); sceptic (Samson and David as legend,
2 Samuel 21:19); conservative evangelical inerrantist (what has been quietly conceded, and whether
Chicago has been over-read); covenant vs dispensational (not load-bearing here).

**L3-N1. "God is the hero" is a faith claim doing duty as a literary rule.** The standpoint section
says "*We hold by faith* that God is the hero of all these stories **in more than a literary
sense**", which concedes the metaphysical half and keeps the literary half as established. The body
has already asserted the literary half flatly: "The tenth principle isn't a pious gloss we add
afterwards; the narrator built it into the climax." The lesson's own text shows why that will not
hold: it says of Esther that this is "God's providence with his name never mentioned". A book that
never names God is not evidence that God is its hero at the literary level. Recurring must-fix from
lessons 1 and 2, in its purest form.

**L3-N2. "Scholars establish... that Hebrew narrators evaluate rarely and explicitly" is a contested
literary position, and Alter is recruited against his own argument.** Three problems in one
sentence. "The Old Testament is mostly narrative" contradicts the lesson's own 40 percent. "Rarely
and explicitly" is the contested point, and the "explicitly" half is load-bearing for everything
downstream. Sternberg's *Poetics of Biblical Narrative* argues the narrator evaluates constantly
through arrangement, repetition and dialogue; Alter's whole method is that reticence is a
*technique* for conveying judgement, not an absence of it. The lesson then names Alter as the
friendly witness ("much of what this lesson teaches about narrative craft he would recognise") and
does not mention that his category for the David material is "historicized prose fiction".

**L3-N3. The Gideon silence is asserted as total, and everyone who disagrees is described as
inventing text.** "The silence is total"; "Both are adding a sentence the narrator didn't write."
The narrow claim (nothing refers back to *the fleece*) is fair. The wide one is not. Judges 8:27, in
the same Gideon cycle, is an explicit narratorial verdict: he makes an ephod, Israel prostitutes
itself to it, and "It became a snare to Gideon and his family" (NET). Webb (NICOT), Block (NAC),
Klein and Exum all read the narrator as evaluating Gideon negatively by literary means, and several
are conservative evangelicals, so this is a mainstream evangelical commentary tradition dismissed in
the author's voice. Pairs with L3-B2.

**L3-N4. "Nothing in this lesson depends on it" is not true of 1 Samuel 17.** The lesson chose the
single most textually contested chapter in Samuel and built its middle level on one narrator
designing chapters 16 and 17 as a sequence. Omitted: Codex Vaticanus lacks roughly half of MT
1 Samuel 17 to 18 including 17:12-31 and 17:55-58; in the MT Saul asks whose son David is at
17:55-58, one chapter after David has been his armour-bearer at 16:21-23; and 2 Samuel 21:19 in the
Hebrew credits the killing of Goliath to Elhanan. **Note for the fix pass:** NET 2 Samuel 21:19
already reads "killed **the brother of** Goliath", harmonising to 1 Chronicles 20:5, so the prose
must not assert what the course's own Bible contradicts. That is itself the better teaching point.

**L3-N5. Allegorical and moral reading are listed as misreadings, and no Catholic, Orthodox or
patristic reading is named anywhere in the lesson.** "Catholic", "Orthodox", "patristic", "typology"
and "the Fathers" appear nowhere; the words were grepped. The two errors named are the second and
third of the four senses the *Catechism* formally teaches (115 to 119, with Cassian's couplet
quoted approvingly) and that Orthodox exegesis takes from the Fathers as normal practice. Direct
recurrence of L2-N9, resolved in lesson 2 one day earlier with "reading Joseph as a figure of Christ
is old, standard in the church fathers, and normal in Orthodox and Catholic reading today". The
asymmetry is what a Catholic or Orthodox reader will feel: the lesson keeps a figural reading for
itself (the "top level", "the whole plan of God") and calls the Fathers' version a standard
misreading.

**L3-N6. "The Old Testament" with numbers attached, including inside the SVG.** "Over 40 percent of
the Old Testament", "three-quarters of the bulk of the Bible", the bar labels "Old Testament, about
75%" and "New, 25%", and the chart's own `<title>`, which is what a screen reader gets. Both figures
are Protestant-canon figures, and the deuterocanon is disproportionately narrative (Tobit, Judith,
1 and 2 Maccabees, the additions to Esther and Daniel), so both move. Direct recurrence of L1-N5,
whose fix instruction was "including the diagram".

**L3-N7. One recoverable meaning, and "three books, one order", where the three books are three
evangelical books.** Osborne (IVP), Vanhoozer (Zondervan), Duvall and Hays (Zondervan) are one
constituency, and their unanimity is presented as settling a question. Vanhoozer's book exists
because the question is contested; his opponents are Gadamer, Ricoeur, Derrida, Fish and
reception history. A Catholic reader adds *Dei Verbum* 12, which requires the authors' intention
**and** reading within the living Tradition. A critical scholar says that for most Old Testament
narrative "the author" is a composite. The same overreach runs through the lesson's own voice about
the narrator's mind: "The narrator means you to feel", "it's not there by accident", "it was never
the reason the chapter was written", "The chapter would rather you noticed who saves", and the
recovered intention is the theocentric one every time.

**L3-N8. The Deuteronomistic History is dropped on a beginner as a shelf label, and the refrain the
lesson uses to fix Jephthah is the hypothesis's own main exhibit.** Go Deeper says "the lectures on
the Deuteronomistic History (Joshua through Kings)" with no explanation. It is Noth's 1943
hypothesis, refined by Cross and the Göttingen school, and it is the most consequential critical
claim about exactly the books this lesson reads. The "no king in those days" refrain is widely read
as a later pro-monarchic editor's frame; the lesson uses it as one narrator's designed evaluation.
**Lesson 2's fix record explicitly assigned this to lesson 3 and lesson 10, and lesson 3 did not
take it.**

**L3-N9. The Jewish reader is spoken for, not heard, and a quiz key is graded on a taxonomy the
Tanakh does not share.** "Where we differ is in where we think the top level ends" frames the Jewish
reading as the Christian one with a section removed; the objection is to whether the Tanakh has that
three-storey architecture at all. Lesson 2 got this right ("the story of Ruth is complete in the
Tanakh without Jesus in it, and they'll be reading well") and lesson 3 regresses. No Jewish reading
practice is named anywhere: not Rashi or Radak, not midrash on David and Goliath, not that Judges 13
is the haftarah for parashat Naso, not JPS or *The Jewish Study Bible*. Concretely, Q3's explanation
says "1 Kings is narrative about a prophet, not a prophetic oracle", but in the Tanakh Joshua,
Judges, Samuel and Kings **are** the Nevi'im Rishonim, the Former Prophets, which lesson 1 taught.

**L3-N10. The Genesis 1 "range" is evangelical inerrantists only.** The paragraph advertises an open
question and gives four answers from one constituency. Absent: the critical reading, which
`SOURCES.md` already carries from Hayes's lecture 2 (a Priestly text read against *Enuma Elish*),
and the Jewish reading, where Rashi's grammatical argument that 1:1 is a dependent clause gives the
JPS "When God began to create". Same defect as L2-N6, and worse here because the sentence advertises
a range.

**L3-N11. The Chicago Statement is used for more latitude than it grants.** The quotation is
accurate and its use is legitimate. But ICBI's 1982 Chicago Statement on Biblical Hermeneutics,
Article XXII, denies that "generic categories which negate historicity may rightly be imposed on
biblical narratives which present themselves as factual", and the 1978 Article XII denies that
scientific hypotheses about earth history may be used to overturn Scripture on creation and the
flood. Those are why many signatories reject the framework and temple-text readings the lesson lists
as available to someone who holds to Chicago. This is the inerrantist check running the other way,
and it is the one direction a drafter never polices.

**L3-N12. 4.7: no breach in the worked examples, one place where the rule bites.** The auditor's
ruling, and it stands: quoting 1 Samuel, 2 Samuel and Judges from the NET while teaching a Christian
course how to read its own Old Testament is exactly what the NET default is for, every quotation
carries `(NET)`, and Sources [3] carries the Biblical Studies Press notice. Do not change that. The
rule bites in "Where the course stands", where the lesson says "A Jewish reader reads 1 Samuel 17 as
a story in the Tanakh" and rests that on NET renderings the tradition does not use ("the Lord of
Heaven's Armies" for YHWH Tseva'ot). Lesson 2 drew the line in the same place and used JPS 1917 for
the Tanakh-as-Tanakh passage.

**L3-N13 (language, 3.3).** A running mild irony aimed one way only, at lay devotional culture and
never at the scholar: "a different story from the one on the bookmark", "A graduation card quotes
Esther 4:14", "the popular reading has filled it with approval". Quiz Q3 puts a sermon title in a
preacher's mouth that no preacher would write ("mock them until God proves you right"), which fails
3.2's requirement that a corrected position be one an adherent recognises. "The strictest evangelical
view" and "the most conservative statement of the doctrine" are the author's adjectives for someone
else's position.

### Voice (style guide, 4.5, 4.6)

Em dashes: **zero**, confirmed, including en dashes. Banned AI vocabulary: **zero**, all 55 terms
grepped, three false positives. Contractions: **81 in 4,450 words of teacher prose, 1 in 55**, which
is the fixed range and a real repair.

**L3-V1. The title carries the tic the style guide names by example.** "Genre first: the reading
rule **that changes everything**, and how to read narrative." The guide's own illustration of the
one-line-moral tic is "And that changes everything", and this is the string the learner sees on the
course page, in the sidebar and in the browser tab. It is also a promise of outcome.

**L3-V2. Six paragraphs end on a compressed one-line moral,** matching lesson 2's count exactly:
the title; "you'll read every story in the Bible differently" (promissory, same class as lesson 2's
flagged "so that you never again read a verse without knowing where it lives"); "will make this
stick"; "The chapter would rather you noticed who saves" (personifies the chapter, and restates the
line above it with more drama); "Three books, one order"; "you'll spend more time in story than in
anything else".

**L3-V3. Three "Here is" openers,** down from six and five but not gone: "Here's the problem",
"Here they are", "Here's the wrinkle" (which promises a wrinkle instead of stating it), plus the
blocking "Here's mine" at L3-B1.

**L3-V4. Pipeline vocabulary in four learner-facing headings:** "## Worked example 1:", "## Worked
example 2:", "## Practice", and ":::exercise Do it now:". These are 1.2 element names and a style
guide section heading, not things a teacher says. Flagged as L1-V8, again in lesson 2, recurring.

**L3-V5. Banned sentence shapes.** "The question is never literal or not. It's what kind of writing"
is "not X, it's Y" with a full stop. "the genre question comes first, it's real, and it's not
settled" is an empty triad. "No verdict, no comment, no later reference" is a rhythm triad for one
fact. "So what happens to 'face your giants'?" is a second rhetorical-question opener where the
guide allows one; the allowed one is line 62, which earns itself. **Keep** the five "not X but Y"
constructions where the negation *is* the misconception being demolished (L1-V6 precedent), and keep
"a story reports, and reporting is not recommending".

**L3-V6. Zero in-body links,** against four direct commands to open a passage: "Open 1 Samuel 17",
five more references at line 157, "Open Judges 6", and "Read Genesis 25:19-34 and Genesis 27". The
validator flags it. This is L1-V5 and lesson 2's finding a third time, and here it blocks four
chapters of required reading. The Chicago Statement is quoted twice with no address; source [11] and
Go Deeper both say "free, with transcripts" and give none, which is L1-V5 verbatim.

**L3-V7. The exercise prints its own finding.** Part 2 tells the reader to count ticks and dashes,
then immediately says "You'll find the dashes outnumber the ticks by a wide margin, and you may find
the ticks are hard to locate at all." The surprise is the whole point of the count.

**L3-V8. Line 189 pre-empts the predict at 191.** "and the text doesn't tell him off" is stated
before the block that asks the reader to guess whether it does.

**L3-V9. The exercise has four written tasks and no model answers at all,** including part 4,
explicitly labelled "the hard one", which carries objective 4. Lesson 2 was faulted for two.

**L3-V10. The SVG.** Scale is **correct and better than its caption claims**: both bars start at
`x=0`, 450 units means "the Old Testament" in both, so the comparison is geometrically valid and
narrative is 180/600 = 30 percent of the whole, matching the title's "roughly three-tenths". No
L1-V1 defect. What is wrong: the dark-theme contrast (L3-B5); the label sizes (L3-B5); the caption
identifying bars **by colour alone** ("the oxblood section", "the top bar's navy"), which 4.6
forbids; "over two-fifths" against a rect drawn at exactly two-fifths (L3-F4); no `<desc>`, so a
screen-reader user gets a 33-word run-on `<title>` and nothing else, `role="img"` having hidden every
child `<text>`; and a 150-unit viewBox height that renders the bars at 22px and 16px on a phone.
`role="img"` and `aria-labelledby` are correctly formed.

**L3-V11. The two long block quotes do not work at phone width.** Judges 6:36-40 is 162 words, about
23 phone lines of indented secondary-colour prose with no break, and the analysis afterwards refers
back to four separate details inside it. 1 Samuel 17:45-47 is 128 words.

**L3-V12. Eleven read-aloud failures**, worst first: the title; "the most-used introduction to
reading the Bible" (unsourced superlative, the exact lesson-2 flag); "Everything downstream depends
on it"; "Let me say plainly which kind of claim each part of this lesson is"; "it's doing a lot of
work"; "will save you from most of the misreadings in this lesson"; "once you can see it you'll see
it everywhere"; "the top bar's navy"; the 34-word Connections sentence; the 62-word Alter sentence;
"The first example was a story most people read on the wrong level."

**L3-V13. Six manual-sounding zero-contraction paragraphs**, worst being the 162-word Jephthah
checkpoint answer, the longest paragraph in the lesson carrying the hardest content.

### Pedagogy (Part 4)

Two premises in the brief were wrong and are corrected here for future reviews. **The site does
render option letters**: `site/assets/app.js:351` emits `<b class="opt-letter">${"ABCDEF"[oi]}.</b>`
before every option, and line 443 does the same in review mode, so "Option A" in an `explain` is
safe and every letter in this lesson maps correctly. **Options are not shuffled**: the only
`shuffle` in `app.js` is used for the spaced-repetition queue, never for `q.options`, so key
position is a genuine leak.

**L3-P1** is L3-B4 (objective 1 never practised). **L3-P2**: the predict at 151 gives away the
answer to the harder task at 157, so even before L3-B1 the lookups did no work. **L3-P3** is L3-B1.

**L3-P4. Interleaving is blocked.** All four exercise parts run on one case. Lesson 2's fix added a
mixed part across four unrelated passages; lesson 3 has no equivalent.

**L3-P5. Predict 2 is effectively a yes/no and the framing telegraphs "no".** It survives as a
pretest because the silence is the point, but it costs the learner nothing.

**L3-P6. Two misconceptions are missing, and both are more common than the fourth entry given.**
(a) **Personalising**, "the story is about me". The lesson *opens* on it ("name the Goliath in your
life") and then gives the single most common misreading of biblical narrative in the English-speaking
church nine words inside a subordinate clause of another misconception. (b) **"If God blessed them,
he approved of what they did."** Outcome as approval is a stronger and different error from "records
it means recommends it", it is what two quiz items turn on, and it is what the Gideon example is
built to kill. It is taught in the prose and never named. Meanwhile the fourth entry given
("Genesis 1 must be read as one particular genre") is not a belief a beginner holds; it is
misconception 1 aimed at a chapter, and it is what the weak Q5 recalls.

**L3-P7. `minutes: 45` understates by about eighty minutes.** Component measurement: 25 to 27 for
4,925 words of dense expository prose with block quotations; 5.5 + 5.2 for the two videos; 10 for
1 Samuel 17 (the lesson's own estimate); 5 to 6 for the six middle-level lookups plus a written
sentence; 6 to 8 for Judges 6; 8 for the four predict and checkpoint blocks; 15 for Genesis 25 and
27 (the lesson's own estimate); 4 + 10 to 12 + 5 + 4 for the four exercise parts, where part 2 means
marking and counting every sentence of 62 verses; 6 to 8 for free recall of the rule, the levels and
ten principles; 10 to 12 for six stems with four long options and roughly 600 words of explanations.
**Honest total 115 to 130.** Against the course's own calibration, lesson 1 is 5,493 words at 70 and
lesson 2 is 8,747 at 90. Lesson 3 has fewer words than either and **four chapters of external
reading** plus two videos.

### Split candidate (1.3): yes, and both reviewers found a seam

The title says it: one rule, and one genre. **Part A**, genre is the first interpretive decision:
the opening, the recipe, Fee and Stuart's method, the basic rule, the order-of-questions paragraph,
why narrative comes first with the chart, video 1, and the two genre misconceptions. **Part B**, how
to read Old Testament narrative: the three levels, the ten principles, description and prescription,
the narrator's evaluations, both worked examples, both checkpoints, the exercise, and the two
narrative misconceptions.

The depth reviewer put the seam after "You can't ask what a text meant to its first readers until
you know what kind of text they thought they were reading", before `## Why narrative comes first`.
The pedagogy reviewer put it one section later, after the chart paragraph, before `## What a
biblical story is doing`, so that Part A keeps the chart that motivates Part B. **The pedagogy seam
is the better one**: it leaves Part A at about 30 to 35 minutes with objective 1 finally practised,
and Part B at 75 to 85. Both reviewers note the split fixes L3-B4 as a side effect, because Part A
is thin precisely because its objective has a rule stated and never used.

The blocker is the same as lesson 2's: a split renumbers the course and every cross-reference in the
other eleven lessons, and lesson 3 itself carries four forward references. **This is now the second
lesson in a row to hit it, and it should go to John as one question about the course rather than two
about lessons.**

### What is working, and must survive

The Gideon worked example, all of it: choosing a case where the text genuinely does not condemn,
naming the wrinkle out loud, and closing with "That's a question the story doesn't settle, and I
won't pretend it does", which is 2.4 in the teacher's own voice and the best line in the lesson. The
2 Samuel 11:27 paragraph, the cleanest statement of the narrator's-voice mechanism anywhere in the
course. The Chicago Statement paragraph, which makes the faith's own case at full strength instead
of asserting it, and which handles its misconception even-handedly in both directions in one
sentence ("some who think they're being faithful by ignoring genre, and some who think genre-first
reading is a liberal invention"). Quiz Q5's option D, which marks "Genesis 1 is settled among
scholars as a poem" wrong and says the genre is argued, policing the direction a drafter is least
likely to police. Exercise part 2, the tick-and-dash count, the best-designed practice in the course
so far because the learner discovers the ratio instead of being told it. The Jephthah checkpoint's
willingness to name a minority reading and say it is a minority reading. The chart's shared-scale
construction, which is genuinely correct. Quiz Q3 as an item. The opening question, "Who is the hero
of that chapter?", the best opening in the course. Four correctly hidden self-checks. No sneering,
no em dashes, no banned vocabulary, no orphan footnotes, and the figure is referred to in the text
as 4.5 requires.

### Pattern for the pipeline

Four findings here are recurrences of items already resolved elsewhere **in this same course**:
L3-N6 repeats L1-N5, L3-N5 repeats L2-N9, L3-N9 partly repeats L2-N8, and L3-B1 repeats L1-V3 and
lesson 2's line 254. L3-N8 is a handoff lesson 2's fix pass explicitly assigned to lesson 3, and
lesson 3 did not take it. L3-F2 reintroduces an ESV survival that `SOURCES.md` records as found and
fixed one lesson earlier. **The drafter is not reading the resolved findings from previous lessons
before drafting the next one.** That is a Stage 3 process fix worth more than any single item above.
Two more: `scripts/build.mjs` should warn on `fill="#ffffff"` inside `<text>` (white-on-flipped-token
is now the second SVG contrast bug in this course, and the validator sees neither), and `SOURCES.md`
line 150's error list must be corrected before lesson 6 is reviewed.

### Resolutions applied, 2026-09-06

Applied in a single fix pass on `lessons/03-genre-first-and-narrative.md`, with corrections made in
`research/SOURCES.md` and `research/OUTLINE.md` so later lessons do not inherit them.
`npm run validate` exits 0 and **both of this lesson's warnings are gone** (the six undersized SVG
labels and the no-links-in-the-body warning); no new warning appears for this lesson or any other.
Zero em dashes and zero en dashes. Frontmatter parses; six quiz items, each still a mapping with q,
four options, answer and explain. Body grew from about 5,000 words to about 8,900, all of it
required by findings above.

**Blocking.**

- **L3-B1.** The unhidden answer is gone. The middle-level task and its model answer are now a single
  `:::predict` block, so the prompt and the answer arrive one at a time, and the answer sits behind a
  button. **L3-P2 fixed with it**: the earlier predict now asks for the bottom and top levels only
  and says explicitly "We'll come to the middle level in a moment, and you'll work that one out for
  yourself", so the six lookups do real work instead of confirming a conclusion already printed.
- **L3-B2 and L3-N3.** The Gideon section no longer contradicts its own authority in silence. It
  names **misappropriation** as Fee and Stuart's own term for the popular reading, quotes their
  actual position (God saved Israel through Gideon *despite* his lack of trust), says the
  BibleProject video agrees, and says in the teacher's voice that the textbook is harder on Gideon
  than this lesson is. "Both are adding a sentence the narrator didn't write" is gone. The two
  readings are now weighed rather than dismissed: the approval reading "has nothing at all to work
  with", the condemnation reading "has a good deal", with **Judges 8:27 quoted** ("It became a snare
  to Gideon and his family") and Webb and Block named as conservative evangelical commentators who
  read the cycle as critique. The narrow claim survives and is stated as narrow: the fleece itself is
  never approved, condemned or mentioned again, and arguing from chapter 8 back to chapter 6 is an
  inference from the whole story that a reader should own as one. The predict answer now says "no
  reference to the fleece" rather than "the silence is total". The video caption says it "reaches a
  firmer verdict on Gideon than this lesson does".
- **L3-B3.** All **nine** errors are now given, in Fee and Stuart's own order and with one-clause
  glosses, including the two that were missing and that matter most here: misappropriation and false
  appropriation, which between them are "if the Bible records it, the Bible recommends it".
  "Extracanonical authority" is gone from the lesson and **corrected at source in `SOURCES.md`**,
  with a note that it came from an earlier edition through secondary summaries.
- **L3-B4 and L3-P1.** Objective 1 now has practice, and the basic rule is now used three times
  instead of admired once. A new subsection, "Using the rule, twice", works the rule as a boundary
  test on Philippians 4:13 and then hands the learner Jeremiah 29:11 in a `:::checkpoint`. Objective
  1 was rewritten to say "and **use** Fee and Stuart's basic rule as a boundary test on a passage",
  and the replacement Q5 tests it on a fresh case. Both worked instances end by naming what the rule
  did **not** do, which is the misreading the new Q4 explanation warns about.
- **L3-B5.** The chart is redrawn. viewBox narrowed from 600 to 344 so labels render larger, not
  smaller: every label is now font-size 15 to 17 and renders at **14 to 16px on a 360px phone**,
  against 7.1 to 7.7px before. **No text sits inside a bar any more**, so there is no white-on-token
  text left; every label is `var(--text-2, #4a5260)` outside the bars with a colour swatch beside it,
  which also fixes the identify-by-colour-alone problem. Rect fills are `var(--navy)`,
  `var(--navy-soft)` with a `var(--navy)` stroke, and `var(--oxblood)`. Verified by screenshot at
  400px width in **both** light and dark emulation: all four segments and all six labels are legible
  in both. A `<desc>` was added and `aria-labelledby` now names title and desc, so a screen-reader
  user gets the chart's content rather than a 33-word run-on title.
- **L3-B6.** Q5 and Q6 replaced with fresh cases, Q1, Q2, Q3 and Q4 rebuilt or repaired.
  **Q5** is now Joshua 10:12-14, a prose report that stops to quote two lines of poetry and names its
  source, which tests the order of the questions without recycling the Genesis 1 paragraph or
  importing the creation debate. **Q6 is now 2 Samuel 6, Uzzah**, which is the discrimination item the
  quiz did not have: a case where the narrator *does* evaluate, so the quiz stops training "the text
  is silent" as a rule. Every option in every item was levelled for length so the key is no longer
  the longest, and every "always", "only", "never", "must" and "settled" tell was removed from the
  distractors or given to the key's neighbours. Q1's two dead distractors are replaced (one now
  swaps Samson for Deborah, which is the real half-corrected error, and its explanation teaches that
  the warm material about Deborah is a character's song rather than the narrator's verdict). Q2's two
  implausible options are replaced, and its new option B is a genuinely careful wrong answer that the
  explanation credits for the half it gets right. **Keys now spread 1, 3, 0, 2, 3, 1**: all four
  indices used, index 3 twice, no run, no repeat of the previous item.
- **L3-B7 (links).** Thirteen in-body links added: 1 Samuel 17, 1 Samuel 8 to 10, 1 Samuel 16,
  2 Samuel 11, Judges 6, Judges 11, Genesis 25:19-34 and Genesis 27, all at Bible Gateway in the NET
  so every "open this" instruction is reachable; plus the Chicago Statement, *Dei Verbum* 12, the
  *Catechism* on the four senses, Sefaria for the JPS verse, the two Hayes lectures by number, the
  two BibleProject companion videos, and *The Jewish Study Bible*.

**Facts.**

- **L3-F1.** "Go out before us" is gone. The predict answer now quotes the NET, "judge us and lead us
  and fight our battles" (1 Samuel 8:20), and the argument runs on "lead us", which the NET supports.
- **L3-F2.** The Judges refrain is now "each man did what he considered to be right" (Judges 17:6 and
  21:25, NET), matching the NET and matching lesson 2's corrected form.
- **L3-F3.** The Jephthah checkpoint now says outright that the NET renders 11:39 "She died a
  virgin", so the reader's own Bible settles on the page a question the minority reading treats as
  open, and turns that into a teaching point about translation decisions pointing forward to lesson
  11. "Whatever first comes out of his door" is now "whoever", matching NET 11:31.
- **L3-F4.** The bar is drawn at exactly 40 percent and the labels now read "40 percent or more".
  The caption says explicitly that Fee and Stuart give no exact number, so the bar is drawn at the
  floor, and warns the reader not to read a precision off a picture the source did not supply.
  "Over two-fifths" and "the top bar's navy" are gone.
- **L3-F5.** "The next five lessons" is now "the next four lessons".
- **L3-F6.** New alt text: Goliath "towers over him upright with a spear raised in one hand and a
  crowd of Philistine warriors ranked behind". The caption now says "lithograph" rather than "colour
  lithograph", with the discrepancy recorded in source 9.
- **L3-F7.** Esther 4:14 is now listed in source 3 as quoted, along with every other quotation in the
  lesson including the quiz stems; the 1 Samuel 8:20 fragment carries its `(NET)` tag; the Judges
  6:17-27 range is corrected to the verses actually used; Q6 no longer says "displeased the LORD".
- **L3-F8.** Article XIII now reads "materials", corrected in the lesson and in `SOURCES.md`. David
  carries "roasted grain and loaves" for his brothers and "ten cheeses for their commanding officer".
  Eliab is "angry with him and accuses him of pride", not mocking. Principle 5 is "Many, if not most".
  Samson's "marriages" is now singular in the Q1 explanation. Go Deeper says Hayes "taught".

**Neutrality.**

- **L3-N1.** The standpoint section now separates the two halves explicitly: that 1 Samuel 17 puts
  God at the centre is on the page and any reader can see it; that the same holds of *every*
  biblical narrative "is not something the texts can be made to show, and Esther, which never names
  God, is the case that proves it". It names the tenth principle as "a confession about the whole
  book, held by faith, and then applied as a reading rule". In the body, "the narrator built it into
  the climax" is now "the climax of **this chapter**".
- **L3-N2.** Rewritten as a three-way sort. What scholars establish is now only that Hebrew narrative
  is spare. How much the silence is doing is given as argued, with **Sternberg named as the
  counter-position** and Alter's reticence given as a *technique* rather than an absence. Alter's own
  "historicized prose fiction" is disclosed, with the note that it is not this course's view and is a
  reason to argue with him.
- **L3-N4.** A new paragraph gives the text-critical complication at full strength: the shorter Greek
  text of 1 Samuel 17 to 18, Saul's question at 17:55-58 against 16:21-23, and Elhanan at 2 Samuel
  21:19. **The Elhanan point is stated the only honest way**, since NET 21:19 already reads "the
  brother of Goliath": the lesson says so, names it as a translation decision following 1 Chronicles
  20:5, and says the reader should know about it rather than discover it. The section then says what
  holding the conservative view costs: "the confidence with which I said 'the narrator set this up'"
  assumes one designing mind behind chapters 16 and 17. "Nothing in this lesson depends on it" is
  gone.
- **L3-N5.** A full paragraph now follows the errors list: Origen, Gregory of Nyssa and Augustine;
  Cassian's four senses; the *Catechism* at 115 to 118, linked; Orthodox liturgical reading. It says
  the objection is to allegory that replaces the plain sense rather than resting on it, that the
  fathers said the literal sense comes first too, and that the difference from a Catholic or Orthodox
  reader "is a difference inside the church, not a difference between reading well and reading
  badly". Moralising is named as Cassian's third sense "under a less friendly name". The point is
  carried into the exercise: the model answer for the allegorising item repeats the care.
- **L3-N6.** "Protestant Old Testament" wherever a number is attached, in the prose, in the two bar
  labels, and in the SVG's `<desc>`. A new sentence names Tobit, Judith, 1 and 2 Maccabees and the
  additions to Esther and Daniel and says narrative's share goes **up**, not down, in a Catholic or
  Orthodox Bible.
- **L3-N7.** A new paragraph gives the fair version: authorial meaning is "a position rather than a
  fact, and it is argued", with Gadamer, Ricoeur and reader-response named, *Dei Verbum* 12 linked
  for the Catholic qualification, and the critical objection that most Old Testament narrative has no
  single author to recover. It closes "you should know we hold it rather than found it". The four
  mind-reading sentences are softened to reading claims ("The chapter is built so that you feel the
  size of the giant"; "That detail is not there by accident"), and "The chapter would rather you
  noticed who saves" is cut.
- **L3-N8.** A new paragraph teaches the Deuteronomistic History as Noth's hypothesis, says the
  refrain the lesson used on Jephthah is one of its main exhibits, states the conservative reply,
  says plainly that "the narrator of Judges" assumes the second view and what changes if the first is
  right, and hands the argument to lesson 10. The Go Deeper entry now says these are the lectures
  "where you will meet the Deuteronomistic History as an argument rather than a label".
- **L3-N9 and L3-N12.** The Jewish reader paragraph is rewritten. It places 1 Samuel among the Former
  Prophets, the Nevi'im Rishonim, names midrash, Rashi and Radak, and **quotes 1 Samuel 17:47 in JPS
  1917 with a Sefaria link** (new source 12), which is where 4.7's rule bites. It ends by saying the
  three-level scheme "is ours and not a neutral description" and that a Jewish reader "does not read
  the Tanakh as a book missing its last act. They read it as complete." Q3's explanation now says the
  genre ruling holds "by the categories this lesson uses" and notes that the Jewish arrangement calls
  Kings prophecy in a different sense. *The Jewish Study Bible* added to Go Deeper.
- **L3-N10.** The Genesis 1 paragraph now reaches outside evangelicalism: the critical reading as a
  priestly text against *Enuma Elish*, and Rashi's dependent clause giving the JPS "When God began to
  create".
- **L3-N11.** A new paragraph gives Chicago's limits alongside its latitude: the 1982 Hermeneutics
  statement's Article XXII and the 1978 Article XII, with the conclusion that "Chicago is not a
  licence to reclassify whatever you find awkward". "The strictest evangelical view" and "the most
  conservative statement" are replaced by "drafted by nearly three hundred evangelical leaders as the
  reference statement of that doctrine".
- **L3-N13.** Q3's strawman sermon title is replaced with a real one that a preacher would actually
  write, and its explanation now says "this sermon is not stupid, which is why it is the example". A
  new sentence closes the Gideon section: "None of that is a sneer at the bookmark. People reach for
  these lines because they want God to say something to them personally, which is the right instinct."

**Depth (the researched-and-unused hunt).** Added and now cited from the body: **Chicago Article
XIII's "reporting of falsehoods"**, inside the description/prescription callout, which is the
inerrantists' own statement making this lesson's argument; **Duvall and Hays's fifth step**, with
"consult the biblical map" restored, flagged as the step to hold on to, and then named twice where
the lesson performs it (principle 6, and the fleece checkpoint); **Alter's reticence**, attached to
the 2 Samuel 11:27 paragraph where the lesson was already teaching it unnamed; **John 21:25**,
quoted against principle 7, which is the passage `SOURCES.md` assigned to exactly that idea;
**Hayes's verified "It's a library" quotation** in place of the unattributed phrase; **Longman and
Dillard** added to Go Deeper as the answer to a real gap, since the lesson sends the reader into four
chapters of Judges and Samuel with no way to get their bearings in a book they have not read;
**Hayes's lecture numbers**, 12 and 13, per `OUTLINE.md` convention 8; **the two BibleProject
companion videos with real URLs**. Every one of the ten principles now has a gloss or an example, so
"apply the ten principles" is no longer a promise against a list where half the items have never
done anything. "The most-used introduction to reading the Bible" is rescoped to "the standard first
book on the subject in evangelical colleges and seminaries", and the three-step order is labelled in
source 1 as this course's summary rather than a formula quoted from the book.

**Voice and pedagogy.** The **title** is now "Genre first: what kind of writing is this, and how to
read a story", so the string the learner sees no longer carries the tic the style guide names by
example; `OUTLINE.md`'s heading updated to match. All six one-line morals are gone, including "The
chapter would rather you noticed who saves" and the two promissory closings. **All "Here is" openers
are gone**, count now zero. Pipeline vocabulary is out of every heading: the worked examples are
"David and Goliath, read three times" and "Gideon's fleece, and the silence that gets read as a yes",
"## Practice" is now "## Now do it yourself, on Jacob and Esau", and the exercise is named after its
parts. The banned shapes at "The question is never literal or not", the empty triad at "it's real",
and the rhythm triad "No verdict, no comment, no later reference" are rewritten; the second
rhetorical-question opener is gone and the one at "Who is the hero of that chapter?" is kept, as is
"So may a Christian ask God for a sign?", which the guide allows because a real student asks it.
Contractions now run 183 in the body. The eleven read-aloud failures are rewritten, including the
62-word Alter sentence and the 34-word Connections sentence. The **Judges 6 block quote is split in
two** at the seam, with the "as you promised" observation moved between the halves so the analysis
sits next to its evidence; the 1 Samuel 17 speech is split at "cut off your head" so the two clauses
the worked example turns on are not buried at the end of an eighteen-line block. **The exercise no
longer prints its own finding**: part 2 ends at "Count both", and the tick-and-dash result moved into
a hidden checkpoint. **Line 189's pre-emption is fixed**: the predict now sits *before* the popular
reading, and the popular reading says "nobody in the text objects" rather than announcing the answer.
**The exercise has model answers**, three `:::checkpoint` blocks after it covering parts 1 and 2,
part 4, and part 5, since the renderer will not nest blocks. **A fifth exercise part was added for
interleaving**, a mixed set of four short cases to be sorted among the nine errors and deliberately
not done in order, which is the fix lesson 2 got and lesson 3 lacked. **Two misconceptions were
added**: "The story is about me", which is personalising and which the lesson's own opening paragraph
sets up, and "If God blessed them, he approved of what they did", which is outcome read as verdict
and is what two quiz items turn on. Predict 2 is sharpened from a yes/no to "write down what you
expect... and where in the next chapter you expect to find it", so the learner commits to a
prediction before discovering there is nothing there.

**`minutes` 45 to 150.** The pedagogy reviewer measured 115 to 130 against the 5,000-word draft. The
fixes took the body to about 8,900 words, which adds roughly twenty minutes of reading, and added a
checkpoint, an exercise part and three model-answer blocks, which add about fifteen more. Components:
47 reading; 11 two videos; 10 1 Samuel 17; 8 the 1 Samuel 8 to 16 lookups; 7 Judges 6; 15 Genesis 25
and 27; 12 the five predict and checkpoint blocks; 28 the five exercise parts, of which part 2 alone
is ten; 7 free recall; 12 the quiz with its explanations. **The number was set to what the lesson
actually costs rather than to what looks reasonable**, because lesson 2's record shows the opposite
choice being made and regretted in the same paragraph.

### Deliberately not fixed, with reasons

- **Splitting the lesson in two. This is the one thing that needs John, and it is now urgent.**
  `minutes: 150` is two and a half times 1.3's one-sitting guidance, and the fix pass made it worse
  rather than better, because every blocking finding asked for more teaching and more practice rather
  than less. Both reviewers found a seam independently. The depth reviewer put it after "You can't
  ask what a text meant to its first readers until you know what kind of text they thought they were
  reading"; the pedagogy reviewer put it one section later, after the proportions chart, so Part A
  keeps the chart that motivates Part B. **The pedagogy seam is the better one**, and it is now even
  cleaner than when they found it, because the new "Using the rule, twice" subsection gives Part A
  its own worked example, its own checkpoint and its own quiz item, which is exactly what it was
  missing. The split would give a Part A of about 2,600 words and 40 minutes with objective 1
  properly taught and tested, and a Part B of about 6,300 words and 110 minutes. It was not done
  because it renumbers the course and every cross-reference in the other eleven lessons, and because
  lesson 3 itself carries four forward references. **This is the second lesson in a row to hit it.
  It should go to John as one decision about the course, not two about lessons.**
- **A third bar on the chart for the Gospels and Acts.** L3-D3 is right that Fee and Stuart's two
  figures do not on their own establish that narrative is the largest kind of writing in the Bible,
  because they cover the Old Testament only. The prose now says so and adds that the Gospels and Acts
  are narrative too, so the real share is larger. A third bar was not drawn, because the only figures
  available are chapter counts and the first two bars are drawn from a claim about bulk. Mixing the
  two units in one picture would be exactly the kind of false precision the caption now warns
  against. A verified bulk figure for New Testament narrative would let this be drawn properly, and
  it is not in `SOURCES.md`.
- **Köstenberger and Patterson's hermeneutical triad.** `SOURCES.md` names it as the graduate-level
  check on the genre lessons and it is still unused. One more Go Deeper entry would have made six on
  a lesson already at 150 minutes, and the triad's real payoff is across lessons 3 to 7 rather than
  inside one. Recorded for the lesson 4 draft.
- **Fee and Stuart's three-step method, verified.** Source 1 now says the three-step order is this
  course's summary of how the book works rather than a formula quoted from it, which is honest, but
  it is a downgrade rather than a verification. Whoever next has the book open should check whether
  ch. 1 states it as a method.
- **Sternberg cited rather than read.** He is named as the counter-position on narrator evaluation
  from the reviewer's report, with the book and its publisher and year in source 10, but nothing of
  his is quoted and the book was not opened at this pass. Same for Webb, Block, Klein and Exum on the
  Gideon cycle, who are named without page references.
- **Alter's "historicized prose fiction".** Widely attributed and used in the lesson as his
  self-description, but not verified against a page of the revised edition at this pass. Flag for the
  next fact-check.
- **`scripts/build.mjs` does not warn on `fill="#ffffff"` inside `<text>`.** This lesson's dark-theme
  bug was invisible to the validator, and it is the second SVG contrast failure in this course that
  the linter could not see. The fix belongs in the build script, not in a lesson fix pass, and it
  would catch the same defect in the eight other lessons still carrying SVG warnings. Recorded for
  the backlog.
- **The other eight bible-basics lessons' SVG warnings.** Nine lessons in this course still warn on
  undersized SVG labels or hardcoded dark fills. Lesson 3 is now clean and its chart is the working
  pattern (narrow viewBox, labels outside the bars with swatches, `var()` fills, a `<desc>`), but
  fixing the rest is a separate pass and would have buried this one.

---

## Lesson 4, "Covenant made, covenant enforced" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context: depth (Part 1), fact-check, neutrality (Part 3 and 3.7), voice
(style guide, 4.5, 4.6), pedagogy (Part 4).

**Verdict: not clean for publish.** Fifty findings, eleven blocking. This is the best-*researched*
draft in the course, and it is the worst for regression: **six blocking findings are items already
resolved earlier in this same course**, and one is a wording error that `SOURCES.md` records as
found and fixed two lessons ago. Lesson 3's review concluded that "the drafter is not reading the
resolved findings from previous lessons before drafting the next one." Lesson 4 is the proof.

The Isaiah 7:14 section is the strongest standpoint writing in the course so far and must survive
the revision almost untouched. The Deuteronomy 28 against Amos 4 mechanism is the best teaching in
the course, and it rests on a contested dating the lesson states as settled.

### Environment note, which constrains this round and the next eight

The session's network policy blocks `labs.bible.org`, `sefaria.org`, `biblegateway.com`,
`oyc.yale.edu`, `commons.wikimedia.org`, `newadvent.org`, `youtube.com` and `en.wikipedia.org` at
the proxy, from curl and from the fetch tool alike. So the `curl` recipe in 4.7 and in `SOURCES.md`
line 163 **does not work in this environment**. What does work: `raw.githubusercontent.com`, and web
search. NET, JPS 1917, Brenton, the Sefaria commentary exports and the public-domain confessional
texts were verified against mirrors on raw GitHub and cross-checked against the wordings this course
already verified from the bible.org API in lessons 2, 4 and 11. Items reachable by neither route are
marked **unverified in this environment** below rather than passed, and are the fact-check debt this
round leaves behind.

### BLOCKING

**L4-B1. The self-check prints its own answer in plain body text, for the fourth lesson running.**
Line 159: "Now do verse 19 yourself before reading on." Line 161, the next visible line: "Here's my
answer. It isn't renewed..." On a phone the answer is the next thing on screen. This is L1-V3,
lesson 2's line 254 and L3-B1 in the same shape, caught independently by four of the five reviewers.
It sits on the only gap in the only worked example that has one, and on objective 1's single
unaided performance. Compounded: the prompt is effectively a yes/no, and "And if it isn't"
pre-announces the answer, so even a reader who stops is not predicting anything (the L3-P5 class).

**L4-B2. The lesson's central mechanism rests on a contested dating asserted as settled, and the
lesson then denies in writing that it depends on it.** Line 185 hedges once, correctly: "Every
prophet had it, **or the tradition behind it**, in his bones." Every other statement drops the hedge:
"the prophets never stopped reading it" (101), "He is reading the treaty's penalty clause aloud"
(185), "pointing at the last line of a contract his hearers had signed" (254), the SVG's "Amos is
reading the covenant's own terms back to Israel" (251), and Q5's "Deuteronomy 28:41 **had already
named** captivity" (54). Then line 359: "a question this lesson deliberately left alone... **nothing
above depends on how you answer it**." That is false, and it is L3-N4's flagged phrasing verbatim
one lesson later.

On the majority critical view the Deuteronomic corpus is seventh-century, Amos preached around 760,
and the dependence runs the other way: Deuteronomy 28 and Amos draw on a shared stock of covenant
sanctions, with Deuteronomy 28's curse sequence closer to first-millennium neo-Assyrian treaty
curses than to the second-millennium Hittite ones the lesson cites. `SOURCES.md` contested question
2 classes Pentateuch dating as **argued**. This is the hunted defect in its most consequential form
yet: the three-way sort is applied with real care where the anticipated objection is Jewish
(295, 319, 322) and dropped entirely where the anticipated objection is a critical scholar's.

**L4-B3. "Every item in Amos's list is in Deuteronomy's" is false against the lesson's own block
quote, and the chart is built to conceal it.** Line 254 makes the universal claim. Line 213 quotes
Amos 4:11, "I overthrew some of you the way God overthrew Sodom and Gomorrah"; Deuteronomy 28 has no
Sodom sanction (29:23 does, a different chapter). The SVG's right column has five rows for six
quoted items, silently dropping 4:11. Separately the chart **uses 28:38 twice** (row 1 "little
harvest", row 4 "locusts") and **28:22 twice** (row 3 "blight, mildew", row 5 "disease, sword") to
manufacture a six-to-six match, so six rows are drawn from four distinct verses. Deuteronomy 28:38 is
one clause about locusts eating the seed and cannot also be the source for Amos 4:6's famine; the
`<desc>` compounds it by naming that item "famine", and Q2's explanation treats 28:38 as a locust
verse, so the chart contradicts the quiz.

**L4-B4. Every data label and every connector in the chart disappears on the dark theme, and the
validator cannot see it.** Lines 226 and 234, `<g font-size="11" fill="#0f2a4a">`, wrap eleven
labels; line 241, `<g stroke="#8b1e2d">`, wraps five connector lines. `scripts/build.mjs` matches
fills on `<text>`, not on a `<g>` wrapper, so all sixteen are invisible to `npm run validate`.
`styles.css` sets `--bg: #0c1220` in dark mode, giving roughly 1.3:1 for the labels and 1.9:1 for
the lines. What survives in dark mode is the frame and the punchline with the entire content gone.
Third SVG contrast failure in this course the linter could not see (L1-V2, L3-B5).
Separately every label is font-size 10, 11 or 12 against the 15 floor, and in a `0 0 360 330`
viewBox at 360px phone width (content box 328px, scale 0.911) they render at **9.1 to 10.9px**. The
two-column layout cannot survive legible type; the fix is a redraw, not a font bump.

**L4-B5. The chart completes exercise part 1 and prints its own conclusion before the reader is
asked the question.** The chart prints every pairing the exercise asks the learner to make, and its
footer prints the finding ("Five sanctions have already fallen. One remains") which line 254 then
delivers a second time as prose. Exercise part 1 concedes it: "the chart above will help, but do it
from the text". `OUTLINE.md` convention 6 requires practice on a passage the lesson did not cover;
both passages are quoted in full in the body. Objective 3's only practice is transcription. Same
class as L2-B1 (a diagram supplying the answer to its own assessment) and L3-V7.

**L4-B6. Two objectives are stated, modelled and tested cold, and a third block of teaching has no
objective at all. Fourth lesson running.** Objective 2 (near and far horizons) is taught at 277,
modelled once, and practised by no predict, no checkpoint and no exercise part, then tested cold in
Q2 and Q3. Objective 3 never puts a wrong reading in front of the learner outside the quiz.
Objective 4's Isaiah 53 half has a callout, no practice and no quiz item. This is L1-D4, L2-B4 and
L3-B4 a fourth time.
Worse: `OUTLINE.md`'s own fourth objective, "state the range of views on how the Old Testament
relates to the New in each view's own terms", was **dropped from the frontmatter while its 370 words
of teaching shipped** (133 to 145). It carries contested question 5, which lesson 2's fix record
explicitly handed to lesson 4, and it has no objective, no predict, no checkpoint, no exercise part
and no quiz item. Its one concrete application is deferred to lesson 7. It is the largest block of
teaching in the lesson with zero assessment, and at 400 words with no payoff it is the only stretch
that reads as padding under 1.3.

**L4-B7. Six sources are presented as authorities that `SOURCES.md` records as unopened or read only
in summary.** Ryrie (line 139, source 13; SOURCES 262 "the book not opened"), Gentry and Wellum
(141, source 14; SOURCES 263 "Book not opened"), Blaising and Bock (141, source 15; SOURCES 264
"Book not opened"), Mendenhall (92, source 5; SOURCES 255 "the article itself not opened"),
Westminster (123, source 11; SOURCES 261 "fetched as summaries", fact-check to confirm against a
printed edition), Radak (307, source 24; SOURCES 269 "read via summary", and the lesson's footnote
says "read at Sefaria (Hebrew)"). Go Deeper compounds it with an unsourced superlative about an
unopened book: Gentry and Wellum's opening chapters "are the clearest map of the frameworks section
above". The *content* checks out in every case, so this is a sourcing-integrity problem rather than
an error, which is the class `BACKLOG.md` names as the worst.

**L4-B8. The Tanakh is quoted from the copyrighted JPS, against 4.7.** Line 297 and source 20 quote
*Tanakh: The Holy Scriptures* (JPS 1985, gender-sensitive edition 2023) for Isaiah 7:14. 4.7 requires
**JPS 1917**, which is public domain, and `SOURCES.md` line 163 records the exact trap and the v3
API recipe that avoids it. This is the passage in the course where the Jewish reading is most
load-bearing, so it is the worst place to be quoting a text the institute's CC-BY-SA licence cannot
carry. Same class as L1-B1, which forced the whole course off the ESV.

**L4-B9. The quiz fails 4.3 as measured: two of six items use a case not in the text.** Q4 restates
line 131 (the parapet, same verse, same fix). Q5 restates line 254 and its key verse is printed in
the chart. Q6 is line 319 chopped into four options, and checkpoint 321 has already run the same
sort on the same verse. Q1 is misconception 3 (line 335) with Leviticus 11 substituted for shellfish.
Only Q2 (Joel) and Q3 (Hosea 11:1) are fresh. L1-P1, L2-B3 and L3-B6 a fourth time.
Shape tells: Q3, Q4 and Q5 each stack three, with the key the only option that hedges, the only one
without an absolute, and the only one that performs the method. Q2's option C carries the item's only
absolute ("the prophets never spoke about literal plagues in their own day") and hands a free
elimination. Option *lengths* are levelled much better than lesson 3's, which is real progress; the
drafter has learned to level length and not yet to level shape.

**L4-B10. Zero in-body links, against four direct "open this passage" commands and about twenty
passage citations.** The file's only three Markdown links are in Go deeper and Sources. Line 348 says
"in your own Bible", which concedes the defect and blocks the whole exercise for anyone without one.
Eleven of the 27 source entries name a free website (Sefaria, oyc.yale.edu, newadvent, opc.org,
ellopos) and give no address, so the lesson's own method, which depends on the reader checking Rashi
and Ibn Ezra, gives them one link to one verse. L1-V5 and L3-V6 a fourth time. Note the validator
does **not** warn here, because the Go Deeper links satisfy its check, so this passes
`npm run validate` and still fails 4.5.

**L4-B11. `minutes: 65` against a measured 115 to 155.** Four reviewers measured independently and
landed at 100 to 120, 115 to 125, 134 to 159 and 135 to 155. The arithmetic is self-evidently wrong
as shipped: the exercise's own headnote claims 35 of the 65, leaving 30 minutes for 7,100 words plus
13 minutes of video, five passages of external reading, six hidden blocks, free recall and a
six-item quiz with 630 words of explanations. The worst single estimate is inside the exercise:
"the others ten each" for a task that means scanning three chapters of Exodus for a law the New
Testament never mentions and then writing three comparative paragraphs.

### Facts wrong

**L4-F1. Brenton is misquoted, in the direction that favours the course's own reading.** Line 297
gives the Septuagint as "behold, **the** virgin shall conceive in the womb". Brenton reads "behold,
**a** virgin shall conceive in the womb". The definite article is the whole force of Matthew 1:23's
"The virgin", quoted fourteen lines later, so the alteration strengthens the Christian case with a
word Brenton does not carry. **`SOURCES.md` line 266 carries the same altered wording** and must be
fixed at source or lesson 11 inherits it. If the lesson wants the article it must argue it from the
Greek (ἡ παρθένος) and say so.

**L4-F2. "Note the present tense in both: she is already pregnant" is false against the course's own
Bible.** Line 297. NET reads "this young woman **is about to conceive**", an imminent future; JPS
1917 reads "shall conceive", also future. Only the 1985/2023 JPS the lesson should not be quoting
says "is with child". Once L4-B8 is fixed the sentence is wrong about both texts, and it collapses
the contrast the paragraph is built on, since the Septuagint is then offered as the *future*-tense
reading against a present tense that no longer exists. Rashi says the opposite in the same breath,
on הרה at 7:14: "This is actually the future, as we find concerning Manoah's wife."

**L4-F3. The Rashi quotation at Isaiah 53:3 is not what Rashi says.** Line 326 and source 26 give
"characterizes all Israel as a single entity". The Judaica Press text Sefaria carries reads "he
**mentions all Israel as one man**", and cites 44:1 as well as 44:2. The substance the lesson draws
is right; the quoted string is in no edition found. **`SOURCES.md` line 271 carries the same invented
wording.**

**L4-F4. The Hayes *riv* quotation is used for the reverse of what it says.** Line 263, after
arguing that **Amos 5:21 to 24** is a lawsuit: "Hayes flags the form in Hosea and Isaiah **as well**:
'he's now the first to couch his charge in the form of this formal *riv*, or lawsuit.'" In lecture 17
that sentence is about **Hosea**, and its point is that Hosea is *the first* to use the form, which
on her account excludes Amos, the prophet the lesson has just applied it to. "As well" inverts her
claim into corroboration. The pronoun "he's" has no antecedent anywhere in the lesson. Hayes locates
the *riv* at Hosea 4:1 to 3, which is the passage the lesson's own checkpoint uses without crediting
her. The quotation is also **not recorded in `SOURCES.md`**, which logs from lecture 17 only "the
*riv* (lawsuit) form".
On the substance: Amos 5:21 to 24 has neither summons nor witnesses, and the classic *riv* passages
(Micah 6:1 to 8, Hosea 4:1 to 3, Isaiah 1:2 to 20) have both. The lesson's own checkpoint and
exercise use the genuine cases; the body's example is the odd one out.

**L4-F5. Isaiah 8:8 is made to say the opposite of what it says.** Lines 295 and 317: Immanuel comes
back at 8:8 "as the reason Judah will survive" and is "invoked at 8:8 over the whole land". NET 8:8
is the Assyrian flood reaching Judah's neck; whether the outspread wings are the invader's or God's
is argued, that the verse sits inside the judgment oracle is not. 8:10 does carry the reassurance,
and line 311 rests on 8:10 alone, correctly.

**L4-F6. "Three words" is five.** Line 177: Fee and Stuart's chapter title "says it in three words:
'Enforcing the Covenant in Israel'". The parallel claim about "THINK ORACLES" being two words is
correct.

**L4-F7. Exercise task 1 cannot be done as set.** Line 348 assigns Deuteronomy 28:15 to 24 and asks
the learner to match every Amos sanction to its Deuteronomy verse. The locusts of Amos 4:9 are at
28:38 and 28:42, outside the assigned reading. A learner who does exactly what they are told fails
the task and blames themselves.

**L4-F8. The predict answer claims 28:15 to 24 contains locusts.** Line 196, "almost nobody thinks
of... locusts. The list below has all of them." 28:15 to 24 has blight and mildew, drought and
disease, and no locusts; only the bullet list, which silently jumps to 28:38 to 42, has them.

**L4-F9. Amos 4:7 is bulleted as carrying the refrain.** Lines 208 to 215 say the list is one "each
closed with the same refrain" and bullet 4:7. In the NET the drought refrain closes **4:8**. The SVG
gets this right ("4:7-8 rain withheld"), so the prose contradicts the chart.

**L4-F10. Two video running times are asserted without support.** "Six animated minutes" (168) and
"Seven minutes" (272). `SOURCES.md` line 276 records both videos verified "by YouTube oEmbed", which
returns title and channel and **no duration**. Lesson 9 hit this exact wall and its recorded
resolution was to say "long" rather than print a figure. Both IDs do resolve to BibleProject videos
with the titles given. **Unverified in this environment.**

**L4-F11. Q6's explanation settles what the lesson's own checkpoint calls argued.** Line 63 says
options A and B are "matters of record" and that "Jews and Christians agree on what each says",
where option B glosses *parthenos* as "meaning virgin". Checkpoint 321 says the opposite, and says
it well: what the translators meant by it is argued, and Hayes calls it a mistranslation. The quiz
asserts agreement where the body has just documented disagreement, in the direction that favours the
course's position.

**L4-F12. Two non-NET wordings in prose describing NET passages.** Line 112, checkpoint answer, "the
nations left as **thorns**": NET Judges 2:3 reads "They will **ensnare** you and their gods will
**lure you away**"; "thorns in your sides" is ESV/KJV, and the stem two lines above correctly says
"snare". Line 82, "his **treasured people among the nations**": NET Exodus 19:5 reads "my **special
possession out of all the nations**"; "treasured possession" is ESV, and the preposition shifts the
sense from *chosen out of* to *treasured while among*.

**L4-F13. Deuteronomy 28:21 is truncated mid-clause without an ellipsis.** Line 201 ends "until he
has completely removed you from the land"; NET continues "you are about to possess". The cut turns a
promise about a land not yet entered into a bare removal.

**L4-F14. Untagged and unfootnoted scripture.** Line 265 quotes Hosea 6:6 as "I want mercy and not
sacrifice" with neither a marker nor a `(NET)` tag. The wording is correct NET and the references
(Matthew 9:13 and 12:7) are right. Mark 7:19 at line 119 shares marker [9] with Matthew 5:17 and only
Matthew carries the tag.

**L4-F15. Isaiah 7:14 and 7:16 are block-quoted with verse 15 dropped and no ellipsis or note**
(289 to 291).

**L4-F16. Mendenhall's citation lacks the issue number** (vol. 17, no. 3, September 1954), and the
page range is given as 49 to 76 by the University of Chicago Press record against the lesson's 50
to 76.

**L4-F17. Matthew 2:15 in quiz Q3's stem is ESV/NIV wording, in an item whose whole subject is what
Matthew's quotation says.** Line 28 prints "Out of Egypt I called my son". NET Matthew 2:15 reads:
"In this way what was spoken by the Lord through the prophet was fulfilled: **'I called my Son out
of Egypt.'**" Word order and capitalisation both differ. NET Hosea 11:1 reads "and **I summoned my
son out of Egypt**", so the stem's wording matches *neither* verse, which blunts the item's own point
that Matthew and Hosea are the same sentence read two ways. Conversion debris of the L2-F1 class, in
a quiz stem. Fix: quote Matthew as the NET has him and give Hosea's own wording alongside, which
makes the colleague's objection sharper rather than weaker.

**L4-F18 (raised, then withdrawn; recorded so it is not "fixed" by mistake later).** Isaiah 7:14's
opening clause was challenged during this round: the lesson prints "For this reason **the Lord**
himself will give you a confirming sign", and a web search of Biblia's NET returns "For this reason
**the sovereign master** himself". **The lesson is correct.** "The sovereign master" is **NET1**
(1996/2005), which rendered *Adonai* that way and *tseva'ot* as "the LORD who commands armies";
**NET2 (2019)**, the edition this course cites, changed both to "the Lord" and "the Lord of Heaven's
Armies". Two independent mirrors agree with the lesson verbatim, and the whole-book diagnostic
confirms the edition: in Isaiah, "Heaven's Armies" 62 hits, "sovereign master" 0, "who commands
armies" 0. Biblia's online NET is the older text. **Do not "correct" this verse.**
One cheap fix it does argue for: Isaiah 7:14 hangs off footnote **1**, which cites the NET
generically, while footnote **17** is the one that names the 2nd edition. Since NET1 and NET2 differ
at exactly this verse, footnote 1 should name the 2nd edition too, or the next reader repeats the
search and reaches the wrong conclusion.

### Neutrality (3.1, 3.2, 3.3, 3.7)

Perspectives checked: Jewish (Tanakh as Tanakh, JPS 1917 against the 1985/2023 NJPS, Rashi, Ibn Ezra,
Radak, Rashi on 53 and Targum Jonathan, Justin's Trypho as a Christian-authored construction, the
halakhic reality of the 613 including Nachmanides' *hassagot* and the Behag's rival enumeration,
mitzvot inoperable without the Temple, Oral Torah, and the Orthodox/Conservative/Reform difference
over binding ritual mitzvot); dispensationalist and covenant theologian; Catholic and Orthodox;
other Protestants the "range" omits (Lutheran law and gospel and the three uses, Anglican Article
VII, Anabaptist, theonomy, New Covenant Theology); critical scholar (Mendenhall against McCarthy and
the first-millennium Assyrian parallels, Wellhausen on the legal corpora, Deuteronomy 28 against
Amos, redaction in Amos); conservative evangelical inerrantist (what has been conceded on *almah*,
Kaiser's single-meaning position, Motyer and Young on the sign to the house of David); lay devotional
reader (the 3.3 irony check lesson 3 failed).

**L4-N1** is L4-B2.

**L4-N2. The range of Christian proposals is Reformed evangelicalism plus one medieval Catholic used
as a historical exhibit. Third recurrence.** Line 119 promises "the real range". Grepped: "Catholic",
"Orthodox", "Catechism", "Lutheran", "Anabaptist", "patristic" and "church fathers" appear **zero
times**. What is given is Aquinas handed straight to Westminster, Westminster, Fee and Stuart,
covenant theology (Westminster again), Ryrie, Gentry and Wellum, Blaising and Bock. One confessional
family. A Catholic reader will notice that the threefold division the lesson calls "the oldest and
most widespread Christian tool" is **current magisterial teaching** (*Catechism* 1961 to 1974 on the
Old Law) presented as a Presbyterian instrument with a medieval provenance; an Anglican that Article
VII states the same division in a confession never named; a Lutheran that law and gospel and the
three uses, one of the two great Protestant answers to this exact question, is absent entirely.
L2-N6 and L3-N7/N10 for the third time, and lesson 2's fix pass already established the precedent
and fetched the sources (`SOURCES.md` 160, 188, 344).

**L4-N3. The Christian reading of Isaiah 7:14 is made without a single named Christian exegete,
while the Jewish reading gets four. 3.7's other half fails.** The Jewish section quotes Rashi, Ibn
Ezra and Radak with dates and places, plus Trypho, plus Hayes. The Christian section (315 to 317)
names nobody and quotes nobody, then closes "we should stop saying it is", which is a rebuke to
fellow Christians delivered in the teacher's voice while the tradition being rebuked is never allowed
to state its case. Missing: the lexical argument (no instance of *almah* in the Hebrew Bible
demonstrably denotes a married woman; Rebekah is *almah* at Genesis 24:43 and *betulah* at 24:16);
the plural address of 7:13 to "the house of David" against the singular of 7:11, which is the
standard conservative argument that the sign exceeds Ahaz; and 7:11's "deep as Sheol or high as
heaven" as a sign meant to be extraordinary. Named primary sources run 5 to 0.
3.7: "a lesson that softens the faith's case fails as surely as one that asserts a contested claim
as settled."

**L4-N4. Hayes is the closing authority inside "The Jewish reading", fusing critical method with
Judaism for the fourth time.** Line 309. "Teaching from the critical side" is an improvement on
lessons 1 and 2, but the placement still makes a historical-critical verdict the capstone of a
section headed "The Jewish reading". Hayes is not a spokesperson for Rashi, Ibn Ezra and Radak, and
her "mistranslation" verdict is a philological judgement of a kind the medieval commentators did not
make in those terms. L1-N4, L2-N8, L3-N9. Separately line 92 has her "teaching the Hebrew Bible at
Yale"; she retired in 2023 and `SOURCES.md` 168 instructs "who taught". Lessons 1 and 3 comply; third
recurrence. Go Deeper's "a critical scholar who never asks you to believe or disbelieve" is the same
conflation again.

**L4-N5. The 613 are handled as devotion and never as halakhah, and the Jewish reader is spoken for
rather than heard.** Line 87 "the arithmetic itself is a small sermon"; line 149 "not a burden tallied
but a treasure inventoried... they hear the wrong question being asked about the right book". Three
problems. (a) The halakhic reality is absent: that the count is disputed inside the tradition
(Nachmanides' *hassagot*, the Behag's enumeration, Ibn Ezra's own doubt that the number is more than
homiletical), that a large proportion of the 613 are inoperable without the Temple, and that the
operative category is halakhah worked out through the Oral Torah rather than a list. (b) The reader
is spoken for, in the drafter's voice, with no Jewish source behind the sentence, and Psalms 19 and
119 are invoked as "Israel's own voice" and neither is quoted. This is L3-N9, resolved one lesson
earlier by quoting JPS 1917 with a Sefaria link. (c) "A Jewish reader" is a monolith: line 163's flat
"Both verses are commandments; both are kept" is Orthodox practice, and a Reform reader would not
recognise it as a description of what they believe, which is 3.2 failing.

**L4-N6. Q1's explanation attaches a heresy label to a position serious Christians hold.** Line 18:
"Option A is Marcion's move in modern dress." Option A is "The whole Old Testament law was abolished
at the cross". Classical dispensationalism does teach that the Mosaic law as a code terminated and
that the believer stands under the law of Christ; New Covenant Theology holds something close. The
lesson has just said at 145 that all four frameworks are reasonable. Marcion's actual claim was that
the Old Testament's God is a different God, which is a different thing. The misconception section at
333 handles this well and the quiz contradicts it.

**L4-N7. Q3 grades one side of contested question 5 correct and marks a mainstream evangelical
position wrong without naming it.** Option B ("Scripture cannot read a verse in a way its author
never intended") is a compressed but recognisable statement of the single-meaning position, which is
Kaiser's published view and is what a dispensationalist's second *sine qua non* is meant to produce.
The lesson grades it incorrect without ever naming it as a position. A dispensationalist reader is
told at 145 that his framework is reasonable and at 36 that its hermeneutic gets the answer wrong.
L2-B5 recurring, in the covenant direction, in a quiz key.

**L4-N8. The Hittite treaty parallel is given as settled, in the direction that favours an early
date.** Lines 92 to 103 hedge on completeness ("The form is not exact. It is recognisable") and not
on identification. The competing position, that the closest parallels for the curse section are the
first-millennium neo-Assyrian vassal treaties (Esarhaddon's succession treaty against Deuteronomy 28
is the standard comparison), is not mentioned, in a lesson whose method is to label what is argued
and whose treaty argument does load-bearing work for L4-B2's mechanism.

**L4-N9. Mild irony aimed one way only (3.3), the lesson 3 tic returning without its counterweight.**
"Verse 8 is quoted on posters" (350) is L3-N13's "a different story from the one on the bookmark",
which lesson 3 answered with an explicit counterweight ("None of that is a sneer at the bookmark").
Also line 263, "the reader who wants to may hear Christianity or modern secular justice in it", which
dismisses by construction rather than by argument and quietly writes off Amos 5:24's long use in the
civil rights tradition without engaging whether that is a legitimate far-horizon application. Line
256 "Now the oracle everyone quotes" and line 74's "quoting Leviticus at their neighbours while
eating shrimp" are the same register. Line 165's "rummaging in it" talks down to the reader the
lesson has just described.

**L4-N10. Trypho is a Christian author's Jewish interlocutor**, and line 309 rests "The Jewish reading
has been stated, in those terms, for as long as there have been Christians to state it to" on Justin's
literary construction. One clause fixes it. (Worth using: Trypho's own candidate is Hezekiah, which
is Radak's, so the loop closes.)

### Depth (Part 1)

**L4-D1. Ten researched items gathered and unused.** In order of cost:
1. **Köstenberger and Patterson's hermeneutical triad.** `SOURCES.md` 14 names it as the
   graduate-level check on the genre lessons; lesson 3's fix record deferred it with the words
   "Recorded for the lesson 4 draft". **It did not land**, in body, sources or Go Deeper. It is also
   the natural spine here: history (the treaty world, 734 BC), literature (oracle and lawsuit form),
   theology (what the covenant is for) is the triad, and the lesson performs all three unnamed.
2. **Beale's observation** that the Old Testament authors did not exhaustively grasp what they wrote,
   recorded in contested question 5 as **the point all four frameworks agree on**. Unused, which
   makes the Isaiah 7:14 case weaker than the research supports: the fuller sense is argued as the
   course's own faith reading when the research records it as common ground.
3. **Jeremiah 31:31 to 33**, listed in source 9 and never quoted, though proposal 2's entire test
   turns on what the new covenant renews. `SOURCES.md` 193 records the NET wording as already
   verified for lesson 2.
4. **Longman and Dillard**, assigned by `OUTLINE.md` 79. Entirely absent, not even in Go Deeper, in a
   lesson that sends the learner into Deuteronomy 28, Amos 4 and 5, Micah 6 and three chapters of
   Exodus with no way to get their bearings.
5. ***The Jewish Study Bible*** note on Isaiah 7:14, assigned by `OUTLINE.md` 79 as "the Jewish
   reading in its own words". Unused, after being added to Go deeper as the fix for exactly this in
   lessons 1, 2 and 3. The medieval commentators are a good substitute for the historic reading and
   not for how Jews read the verse now, which is what objective 4 asks for.
6. **Duvall and Hays** used more weakly than the research supports: assigned for "crossing the river,
   the width of the covenant difference", annotated "best for: a teachable procedure", and appearing
   only in Go Deeper. The covenant difference between Sinai and the reader is the widest river in the
   Bible and is this lesson's subject; the law half offers two proposals and no steps.
7. **Hayes's lecture on biblical law** (the three legal corpora) unused, so the law half carries no
   critical-side voice at all while the prophets half is built on Hayes throughout. A learner sent to
   Exodus 21 to 23 is never told they are opening a distinct legal collection.
8. **Deuteronomy 29:1 and the Moab setting**, recorded at `SOURCES.md` 191 as the correction to
   lesson 2's L2-F6 and fetched at Stage 1 *for lesson 4*. Unused: the lesson presents Exodus 20 and
   Deuteronomy 28, 30 and 31 as one treaty document and never says Deuteronomy is a renewal delivered
   forty years later on the plains of Moab, which is both the researched correction and the fact that
   makes the treaty-form argument stronger, since Deuteronomy is where the form is most complete.
9. **Maimonides' first positive commandment** and **Rav Hamnuna's gematria** from the same Makkot
   passage, both recorded, both unused; either would give the 613 predict a specific detail.
10. **JPS 1917 on Sefaria** with the exact API recipe at `SOURCES.md` 163. Unused; see L4-B8.

**L4-D2** is the second half of L4-B6 (the frameworks section).

**L4-D3** is L4-F4 (Amos 5:21 to 24 called a lawsuit).

**L4-D4. The near and far horizon rule is not usable on a passage the lesson never covered.** Line
277 states the rule and supplies one decision procedure: "the New Testament is the Christian's guide
to where it is." That answers nothing for the ninety-five percent of oracles the New Testament never
quotes, which is the proportion the lesson itself gives. Compare the law half, which hands over two
named tests. The three steps the lesson performs on Isaiah 7 and never writes down: fix the near
horizon from the text's own time markers; ask whether a New Testament writer takes it up and what
pattern he reads; and, if none does, the far horizon is not yours to assert. The third is the
discipline the lesson teaches everywhere and never states.

**L4-D5** is L4-N8.

**L4-D6. The Jewish reading of the law is stated at full strength and shown with nothing.** See
L4-N5(b). The Isaiah 7:14 section three pages later shows exactly how to do it.

**L4-D7. The exercise has three written tasks, a five-item free recall, and not one model answer.**
"Then check" (354) with nothing to check against. Part 3 is the hardest task in the lesson and
carries objective 1's real transfer. Lesson 2 was faulted for two missing answers and lesson 3 for
four; both were fixed with `:::checkpoint` blocks after the exercise, because the renderer will not
nest blocks.

**L4-D8** is L4-B10. **L4-D9** is L4-B11. **L4-D10** is L4-N4.

**L4-D11. Go Deeper has five entries where 1.2 asks for two to four**, and one of them describes an
unopened book. Cutting that entry fixes both.

### Voice (style guide, 4.5, 4.6)

Em dashes **0**, en dashes **0**, banned AI vocabulary **0** (all 55 grepped, three false positives:
"testament" only ever in "Old/New Testament", "highlight" never as a verb, "transform" absent),
banned sentence shapes **0** for the named strings, hedging habits **0**, salesy vocabulary **0**,
exclamation marks in teacher prose **0**. Four lessons running on the em dash.

**L4-V1. Contractions run 1 in 249, against the course's fixed 1 in 55.** 24 in 5,979 words of
teacher prose. Lesson 3 runs 81 in 4,450 and was recorded as the repair; lesson 2 was faulted at 1 in
5,400. This is 4.5 times sparser than the range, so it is a regression, not a repair; reaching the
range needs about 85 more. **The frontmatter is at zero: 1,596 words of quiz stems, options and
explanations contain not one contraction**, and six explanations averaging 107 words each with none
is the most machine-sounding block in the file. Worst stretches, all carrying the hardest content:
the Jewish-reading paragraph (149), the four frameworks (135 to 141), the whole of "Two horizons",
and the Christian-reading case (317).

**L4-V2. Seven "Here is / Here's" openers**, six of them section or paragraph openers (66, 92, 161,
193, 277, 315, 319). Course trajectory L1 six, L2 five, L3 zero after its fix, **L4 seven**. The
repair reversed.

**L4-V3. Twelve paragraphs end on a compressed one-line moral**, double lessons 2 and 3 (78, 103,
155, 165, 185, 263, 265, 268, 331, 335, 337, 341). Keep two: 185 (the crystal-ball beat earns it) and
335 (it is the argument compressed, not a flourish). 268 is the exact class lesson 3 was faulted for
("once you can see it you'll see it everywhere"). 337's "Think oracles." reuses a Fee and Stuart
quotation as the lesson's own punchline 156 lines after quoting it properly.

**L4-V4. Six learner-facing headings in pipeline vocabulary**, fourth recurrence: "## Worked example
1/2/3", "## Practice", ":::exercise Do it now", and "Here is the mechanism" in the body. Lesson 3's
fix pass established the pattern ("David and Goliath, read three times"; "## Now do it yourself, on
Jacob and Esau") and lesson 4 did not read it.

**L4-V5. Six unsourced superlatives** (84, 123, 175, 196, 256, 279). 84 and 279 are also sales.

**L4-V6. Three rhetorical-question openers** (109, 143, 265) where the guide allows one. Keep 109; a
real student asks it.

**L4-V7. The figure is never referred to in the text**, against 4.5, and its caption honestly concedes
that the Treaty of Kadesh is a **parity** treaty while the section argues from the **suzerain-vassal**
form, so the one artefact shown is the form the argument is not about. It is not decoration; it is
adjacent evidence next to a claim it does not support.

**L4-V8. The Hosea checkpoint (267) buries its question behind a 95-word quotation**, about 18 phone
lines before the reader learns what to do with it, and the hidden answer then refers back to five
details inside it.

**L4-V9. The lawsuit form is given three incompatible ways in one lesson**: "summons, charge,
evidence, verdict" (263), "summons, charge, sanction" (268), and "summons, witnesses, charge, verdict"
(350). **Witnesses are examined in the exercise and never taught** in the prophetic section; they
appear only in the treaty section. Micah 6:1 to 2 does call the mountains as witnesses, so the
exercise is right and the teaching is incomplete. The exercise's own glosses collide: "the summons
(who is called to hear?)" and "the witnesses (who is asked to listen?)" are the same question twice.

**L4-V10. The 613 predict is a cost-free trivia guess** with no reasoning path, the L1 "how many
books?" class. Replace with a predict the reader can reason toward that also seeds the Amos section:
which of Deuteronomy 28's two sections is longer, blessings or curses, and by how much (14 verses
against 54).

**L4-V11. Video 2's caption makes it prerequisite to the Micah exercise** ("worth watching before you
try"), against 4.5's "videos are supplementary", and it points at the real gap in L4-V9.

**L4-V12. Ten read-aloud failures**, worst first: "Here is the mechanism, and it's the part I most
want you to see for yourself" (193); "We hold a view, and the course says so once here" (145), which
is the most important sentence in the section written in the third person about itself; "That is the
whole lesson" (78); "the most useful thing you can carry into any page of Leviticus" (84); "That is
the difference between reading the law and rummaging in it" (165); the 62-word sentence at 74; "the
hardest case in the book" (279); the three-sentence rhythm at 103; "Think oracles" (337); and the
55-word free-recall sentence at 354, which is five demands in one breath and is unreadable aloud.

**L4-V13. Five wall paragraphs at phone width**: 317 (130 words structured "First... Second...
Third... Fourth, and this is the heart of it", with the most important sentence buried at word 95);
263 (190 words, the longest in the lesson, carrying the *riv* form, the Hayes quotations, three Amos
cross-references and Leviticus 23); 149 (145 words, zero contractions); 354; and 109.

**L4-V14. Predict 195's answer telegraphs** by naming blight, mildew and locusts before the list
arrives. **L4-V15. Checkpoint 267's answer elaborates past its own prompt**, adding "you can hear the
Ten Commandments in it", a fourth thing the learner was not asked for.

### Pedagogy (Part 4)

**L4-P1** is L4-B6. **L4-P2** is L4-B1. **L4-P3** is L4-B5. **L4-P4** is L4-B9. **L4-P5** is L4-D7.
**L4-P6** is the shape-tell half of L4-B9. **L4-P11** is L4-B11. **L4-P14** is L4-B10.

**L4-P7. The outline's spaced review did not ship.** `OUTLINE.md` 81 specifies "the covenants
(lesson 2); the basic rule (lesson 3), now applied to a prophet's own audience". What shipped is two
mentions in prose. The five covenants are never retrieved: the lesson works Sinai and the new covenant
for 8,000 words without once asking the learner to place them among the five they learned. **The basic
rule is never stated in the body at all**; a learner meets it for the first time in the Connections
paragraph, after the practice, or in Q3's explanation. 4.2: spacing is retrieval, not mention.

**L4-P8. Objective 1's practice sits 180 lines after its teaching**, behind two prophets tasks. The
law half ends at 169; exercise part 3, its only real practice, is at 352. A learner who has spent
forty minutes on Amos and Isaiah since is not practising, they are recovering.

**L4-P9. The exercise never interleaves**, because every part announces which tool to use. The one
skill the lesson does not practise is the one a reader needs: given a passage, decide *which* question
this is. Lesson 2's and lesson 3's fixes both added a mixed part; lesson 4 has no equivalent. This is
the cheapest fix in the review and the course has needed it three times.

**L4-P10. Objective 4 bundles four performances**, two of which are never assessed. Nowhere does the
learner have to *produce* the Jewish reading of anything, which is the objective's leading verb, and
**Isaiah 53 is in the objective, taught in a callout, and neither practised nor tested**.

**L4-P12. Split candidate: yes, and the lesson marks its own seam.** After the Biblical Law video
(169), before `## What a prophet was` (171), whose first line is "Now the other half." Part A (law)
is about 2,805 words and holds objective 1; Part B (prophets) is about 3,300 to 3,700 and holds
objectives 2, 3 and 4. Nearly even, which is unusual. Part A would need its objective actually
practised (which L4-B6's fix supplies), the frameworks used rather than stated, and a closing that
hands off; Part B would need the treaty form and Deuteronomy 28 re-established in two or three
sentences and its own opening hook. Note the seam costs more here than in lesson 3, because the
lesson's thesis *is* the join. Third lesson in a row to hit it.

**L4-P13. Two named misconceptions are the author's, and four a beginner actually holds are
missing.** "The near horizon is the only horizon" (341) is framed by the lesson itself as "a critical
scholar's reading"; no beginner arrives holding it. It is misconception 1 pointed the other way, and
it is the L3-P6 finding recurring. Keep the paragraph, which is good and is 3.7 running in the
direction a drafter never polices, but move it into "Two horizons" as the mirror of the rule and stop
calling it a thing people get wrong.
Missing, in order of how often a beginner holds it: **"the law was an unbearable burden the Jews
groaned under, and Jesus freed them from it"** (the lesson argues against it beautifully at 149 and
never names it, so a reader who holds it does not know they have been contradicted); **"the Old
Testament God is wrath, the New Testament God is love"** (the likeliest reaction to 2,000 words of
covenant curses; Marcion appears in one clause under a different heading); **"the Ten Commandments
are obviously a different kind of law from the rest"** (taught against at 125, never named); and
**"prophecy is a code to be decoded against the newspaper"** (distinct from "prophecy means
prediction", and it is what Q2 tests, so a quiz item tests a misconception the list does not name).

### For the assessments folder, which is still empty (4.4)

Recorded here so lesson 4's contribution is not lost when the assessments are built. Three item
types this lesson uniquely supplies: the sabbath discrimination item below, which is the only case
where the two Christian proposals give opposite verdicts and so cannot be answered by reciting
either; an unlabelled-passage item interleaving lessons 3, 4 and 5, asking for each of four passages
whether the first question is *what kind of writing is this*, *what did its first hearers hear*, or
*is this stipulation renewed*; and a three-way sort applied to a claim from a different lesson.
Project: take one prophetic oracle the course has not worked (Micah 6, Habakkuk 1, Malachi 3) and
produce a reading that states the near horizon first with the situation sourced, traces every
sanction or charge to the covenant text it comes from, says whether a far horizon is claimed and on
whose authority, and labels every claim established, argued, or held by faith. Applied exercise: two
200-word replies, one to the shellfish objection and one to a post arguing Joel's locusts are
helicopters, both graded on whether a principle is shown rather than a verdict given.
**Gap worth naming for the course:** nothing yet assesses the ideological Turing test as a skill the
learner can *perform*, which is what 3.7 leans on hardest. Lesson 4 is where it is taught.

### What is working, and must survive the revision

- **Worked example 3, Isaiah 7:14, entire.** The best-built worked example in the course. It grants
  the near horizon before making the Christian case, lets Rashi, Ibn Ezra and Radak speak in their
  own words with dates and places, quotes Trypho so the Jewish reading is not made to look modern,
  quotes Hayes calling the Greek a mistranslation without flinching, and then says in the teacher's
  own voice: "That is a faith reading. It is not what the Hebrew obviously means, and we should stop
  saying it is." The three-way sort at 319 and "If either can't, tell us." Do not soften a word of
  it; the fix for L4-B2 should be built to this template.
- **The Isaiah 53 callout**: Rashi's textual reason given, Isaiah 41 to 49 cited as its root ("a
  reading with roots in the text, not a dodge"), Targum Jonathan quoted to show the tradition is not
  one voice, and "We do not hold that only a hostile reader could miss it."
- **The Septuagint checkpoint (321)**, the best-designed self-check in the lesson: it asks the learner
  to sort a sentence rather than recall a fact, and names "proves" as the word doing too much work.
- **The Deuteronomy 28 against Amos 4 mechanism**, once L4-B2, B3, B5, F7 and F8 are fixed. It is a
  real mechanism drawn from texts actually fetched in the NET at Stage 1, and it makes "prophecy
  means prediction" collapse on its own rather than by assertion.
- **The Fee and Stuart percentages handled honestly**: "They give no source for the figures and
  neither will I; treat them as an experienced reader's rough count rather than a measurement. But
  even if the real numbers were double, the picture would stand." That is 2.4 in the teacher's voice
  and it is why the new Q5's option D can be a distractor at all.
- **Hayes's hedge at 103**, "no one passage contains all of the elements... enough of them scattered
  around to suggest it as a model", followed by "That is the honest strength of the claim." L4-B2's
  fix should extend this sentence rather than replace it.
- **Both proposals given with their weaknesses admitted**: "the text of Leviticus doesn't come with
  those labels", "The reasoning is good. It is still reasoning, not reading", and the note that the
  covenant test needs a whole New Testament in hand.
- **Line 145's labelled standpoint paragraph**, "We hold a view... A Christian may reasonably hold any
  of the four." This is the fix for L2-B5 landing correctly.
- **The Jewish-reading section's refusal of the lesson's own framing** on its own behalf: "they hear
  the wrong question being asked about the right book", followed by "We do not share that reading."
- **Quiz Q2 (Joel) and Q3 (Hosea 11:1) as cases.** Both fresh, both conversations a learner will
  actually have. Q3 is the hardest and best item in the course so far; only its option set changes.
- **The key spread B, D, A, C, B, D**: all four indices used, no run, no repeat of the previous item,
  and the first lesson in this course to put keys on D at all, which closes the free-elimination leak
  found at L2-B3. Option lengths are levelled far better than lesson 3's (Q2's spread is 15
  characters across four options). Whatever the drafter did differently, keep doing it.
- **The misconception section**, especially "The near horizon is the only horizon", which runs the
  correction in the direction a Christian drafter is least likely to police, and the shellfish
  answer's concession that "the sorting is done to keep the laws people already wanted to keep... is
  a fair challenge to any particular reader".
- **Q4's two-halves structure** and its explanation crediting Westminster's general-equity clause
  against a distractor built on Westminster's own category.
- **The figure's caption**, which carries credit, licence, institution and date and honestly declares
  the Kadesh treaty a parity treaty. The caption is right; only the text reference is missing.
- **Video 1's caption**: "Watch it after this section, not instead of it; the video does not cover the
  range of Christian proposals." That is how a 4.5 video caption should read.
- **The SVG's dashed-line convention**, which encodes fallen against not-yet by dash pattern and
  restates it in words rather than resting on colour. The one thing the chart gets right; carry it
  into the redraw.
- **All 27 footnotes are cited from the body.** No orphans, no dangling sources, better than lesson 1
  managed.

### Verified correct, so it does not get "fixed" later by mistake

Every NET quotation except the truncations at F12 and F13 and the open question at F17: Leviticus
19:18 to 19; Amos 5:21 to 24; Deuteronomy 28:15, 21, 22, 23 to 24, 38, 41, 42; Deuteronomy 30:19;
Amos 4:6, 7, 9, 10, 11, 12 and the refrain; Isaiah 7:9, 7:16; Isaiah 8:3 to 4, 8:18; Matthew 1:23;
Matthew 5:17; Mark 7:19; Galatians 5:14; Hosea 4:1 to 3; Matthew 9:13. Every verse reference in the
body. Aquinas ST I-II q. 99 a. 4 verbatim with honest ellipses. **Westminster 19.3 to 19.5 confirmed
against the text, so `SOURCES.md` line 261's open item can be closed**: "All which ceremonial laws
are now abrogated, under the New Testament"; "as a body politic... which expired together with the
State of that people; not obliging... further than the general equity thereof may require"; "The
moral law does forever bind all." Justin Martyr *Dialogue* 67 verbatim. Rashi on Isaiah 7:14 verbatim,
and his gloss ("she is a young girl, and she never prophesied, yet in this instance, Divine
inspiration shall rest upon her"). Ibn Ezra on 7:14 verbatim. Targum Jonathan on 52:13 verbatim.
Fee and Stuart's chapter titles, "THINK ORACLES", and the percentages including the tail most quoters
drop ("in our time"). Hayes lecture 8's six elements and both hedge clauses; lecture 16's "anthologies
of oracles", "an attack on empty piety" and "in accompaniment to social injustice"; lecture 17's 734,
Tiglath-Pileser, and Judah refusing the alliance. Makkot 23b's 613, 365 and 248. Amos dated by 1:1 to
Uzziah and Jeroboam. Hittite treaties c. 1500 to 1200 BC. Kadesh c. 1259 BC from Hattusa, and the
Commons file, uploader (Iocanus) and CC BY 3.0 licence. The 734 crisis. "A few decades later" for the
Assyrian exile (Amos c. 760 to 750, Samaria 722). Leviticus 11:1 to 2 addressing "the Israelites", so
Q1 option D's rebuttal is right. Deuteronomy 22:8's parapet. Galatians 5:14, Romans 13:9, Matthew
22:39 and James 2:8 all renewing Leviticus 19:18. 1 Peter 2:9. Deuteronomy 31:9 to 13. Leviticus 23.
Amos 2:6 to 8, 5:10 to 12, 8:4 to 6. Isaiah 41 to 49 calling Israel "my servant". Zero em dashes,
zero en dashes.

### Unverified in this environment, and left as fact-check debt

The two BibleProject running times (oEmbed returns no duration, and youtube.com is blocked). Hayes's
prophet-versus-diviner quotation at 177 and her "mistranslation" quotation at 309, both recorded in
`SOURCES.md` from the transcripts but not re-fetched (oyc.yale.edu blocked). Radak's Hebrew
(corroborated by secondary sources for substance; no direct quotation is made in the lesson). The
alt text of the Kadesh photograph against the photograph itself (Commons blocked).

### Pattern for the pipeline

Six blocking findings here are recurrences of items already resolved **in this same course**: L4-B1
repeats L1-V3 and L3-B1; L4-B10 repeats L1-V5 and L3-V6; L4-V4 repeats L1-V8 and L3-V4; L4-D7 repeats
L3-V9; L4-B5 repeats L2-B1 and L3-V7; L4-B4 repeats L3-B5. L4-F12 reintroduces ESV debris of the
class `SOURCES.md` records as found and fixed at lesson 2's Stage 4. L4-D1.1 is an item lesson 3's fix
record explicitly assigned to this draft. Lesson 3's review already concluded the drafter is not
reading the previous lesson's resolutions before drafting; **this is the confirmation, and the Stage 3
command should load the previous lesson's "Resolutions applied" block into context before drafting.**
Two build-script items: `scripts/build.mjs` should warn on `fill="#` and `stroke="#` appearing on a
`<g>` wrapper as well as on `<text>`, which would have caught L4-B4 and lesson 3's bug both; and the
no-links-in-body check is satisfied by links in Go Deeper and Sources, so a lesson with zero links in
its teaching prose passes validation, which is L4-B10 going unseen.

### Resolutions applied, 2026-09-06

Applied in a single fix pass on `lessons/04-law-and-prophets.md`, with corrections made in
`research/SOURCES.md` so later lessons do not inherit them. `npm run validate` exits 0 and **this
lesson's warning is gone** (the seven undersized SVG labels); no new warning appears for this lesson
or any other. Zero em dashes and zero en dashes. Frontmatter parses; six quiz items, each still a
mapping with q, four options, answer and explain; 22 block openers and 22 closers. Body grew from
about 7,100 words to about 11,400, all of it required by findings above.

**Blocking.**

- **L4-B1.** The unhidden answer is gone. The verse-19 task and its model answer are now a single
  `:::predict`, so the prompt and the answer arrive one at a time. The prompt no longer telegraphs
  ("Is the law of mixed kinds renewed anywhere in the New Testament, and what does Fee and Stuart's
  second half say about a stipulation that isn't?"), and the hidden body now ends by naming what the
  test did **not** do, which is the judgement the learner still has to make.
- **L4-B2.** The dating assumption is disclosed at full strength in its own subsection, "What this
  argument assumes, and what it doesn't", built to the template of the Isaiah 7:14 sort as the
  reviewers recommended. It gives the critical position (Deuteronomy seventh-century, so Amos cannot
  have been reading it, and the shared-stock explanation the Assyrian and Aramaic parallels support),
  the conservative reply ("essentially Mosaic" with later updating), and then separates the strong
  form of the lesson's own argument from the working form, saying plainly that the strong form needs
  the conservative dating and the working form does not. It closes with the three-way sort. The
  payoff sentence at the old line 185 now reads "He is reading the covenant's penalty clause aloud",
  the SVG's subtitle no longer asserts what Amos was reading, and **"nothing above depends on how you
  answer it" is deleted**, replaced by a paragraph saying what does depend on it. Q5's explanation
  now says "the covenant" rather than "Deuteronomy 28:41 had already named".
- **L4-B3.** "Every item" is gone. The prose now says nearly every item, and the exception is turned
  into the better teaching point: Amos 4:11's Sodom has no counterpart in Deuteronomy 28 and does
  have one at **29:23**, which shows Amos working inside a whole sanctions tradition rather than
  quoting one chapter. The chart carries a sixth row and a two-line footnote saying so. **The
  double-used verses are gone**: Amos 4:6's hunger is now paired with 28:17 and 28:48, which are
  hunger curses, and 28:38 and 28:42 carry the locusts alone. 28:17 and 28:48 are quoted in the
  bullet list so the pairing is checkable.
- **L4-B4.** The chart is redrawn. viewBox 360 to **344**, one column instead of two, every label at
  font-size 15 or 16, which renders at **14.3 to 15.3px on a 360px phone** against 9.1 to 10.9px
  before. **No fill or stroke is hardcoded anywhere and no `<g>` wrapper carries one**: everything is
  `var(--navy)`, `var(--oxblood)` or `var(--text-2)`. `font-family` is now `inherit`. The fallen and
  not-yet distinction is still carried by a dash pattern *and* by the words "fallen" and "not yet" in
  every row, so nothing rests on colour. The `<desc>` was rewritten to match what is drawn, including
  the Amos 4:11 exception. Widest label is about 292 units in a 344 viewBox, so nothing overflows.
- **L4-B5.** The chart no longer does the learner's work. Its footer no longer prints the finding;
  that line is now the answer to a **new `:::predict` placed before the chart**, which asks which
  sanction has nothing opposite it and what the reader expects Amos to say next. **Exercise task 1
  was re-pointed at fresh passages**: Deuteronomy 28:25 to 37 against Amos 5:11, 7:1 to 6 and 8:9 to
  10, none of which is in the chart or the body, and it now asks the learner to find the one item
  that has no counterpart, which is the same skill the body just modelled. "The chart above will
  help" is gone.
- **L4-B6.** Every objective now has teaching, practice before the quiz, and a quiz item.
  **`OUTLINE.md`'s dropped fourth objective is restored** as objective 2, and the frameworks section
  now has a `:::checkpoint` on Ezekiel 40 to 48 that makes the learner state both readings and
  identify which part of the disagreement is argued, so the section that carries contested question 5
  is no longer 400 words with nothing behind it. Objective 5 (formerly 4) was split so that stating a
  reading in its holder's terms and sorting a dispute are separately assessable, and **new Q6 tests
  the Turing test as a performance**, which nothing in the course did before. Objective 3 gets a new
  exercise task on Micah 5:1 to 6, an oracle the lesson never works, with a model answer.
- **L4-B7.** Every unopened source now says so in its own entry: Ryrie, Gentry and Wellum, Blaising
  and Bock, Mendenhall, Steymans and Weinfeld, the Formula of Concord, and Radak, whose footnote now
  reads "read via an English summary of the Hebrew, not from the Hebrew itself" and from whom no
  wording is quoted. **The unsourced superlative about an unopened book is gone**: Gentry and Wellum
  no longer appear in Go deeper, replaced by Longman and Dillard (which the outline assigned and the
  lesson lacked) and Köstenberger and Patterson. Ryrie's essentials are also reordered to his own
  order, deriving the Israel-church distinction from the literal hermeneutic. Westminster's footnote
  now records that the wording was confirmed at this pass.
- **L4-B8.** The Tanakh is quoted from **JPS 1917** with a Sefaria link, and source 20 says why the
  1985 and 2023 editions are not used. Psalm 19:8 is also quoted in JPS 1917 in the Jewish-reading
  section, which fixes L4-D6 at the same time.
- **L4-B9.** Four of six quiz items replaced with fresh cases. **Q1** is the sabbath, which is the
  only case where the two Christian proposals give opposite verdicts, so it cannot be answered by
  reciting either. **Q4** is Deuteronomy 25:4 and Paul's ox, the wrinkle case the law half never had,
  where "renewed" turns out not to mean "repeated". **Q5** is Elijah's drought at 1 Kings 17:1, which
  puts a prophetic function inside a narrative and so interleaves with lesson 3. **Q6** is the Isaiah
  53 Turing test. Q2 keeps its stem and options with its one absolute removed from option C. Q3 keeps
  its stem, fixed for the NET (see L4-F17), and its options rebuilt so that two of them concede the
  near horizon in the key's own words, with the new option B misfiling the far horizon as "history
  establishes", which is the error this course watches for in its own direction and which no previous
  distractor tested. Every option was levelled for length and shape; the key is longest in one item
  by a single character. **Keys now spread 2, 3, 0, 1, 2, 1**: all four indices used, no run, no
  repeat of the previous item.
- **L4-B10.** Eighteen in-body links added, so every "open this passage" instruction is reachable and
  the exercise works without a Bible to hand: Leviticus 19, Exodus 19, Deuteronomy 31, Deuteronomy 28,
  Judges 2, Exodus 21 to 23, the two Deuteronomy 28 curse ranges, Amos 4, Hosea 4, Isaiah 7, Micah 6,
  Micah 5, Deuteronomy 28:25 to 37 and the three fresh Amos passages, plus Sefaria for JPS 1917 and
  for the three commentators, the *Catechism* on the Old Law, the Thirty-Nine Articles, the
  Westminster Confession, Aquinas, Justin Martyr, and the Hayes lectures by number.
- **L4-B11.** `minutes` 65 to **145**, at the top of the reviewers' measured range and matching
  lesson 3's calibration for a lesson of this weight. The exercise's own headnote no longer claims
  ten minutes for the Exodus 21 to 23 task; it says twenty-five and notes that finding a law is part
  of the work.

**Facts.** F1 Brenton now reads "a virgin", with a sentence saying the definite article in Matthew
1:23 comes from the Greek article and not from Brenton's English, and **`SOURCES.md` corrected at
source**. F2 the false "present tense in both" claim is gone; the lesson now says both the NET and
JPS 1917 read the conception as still ahead, which is true and is also Rashi's reading, now cited.
F3 Rashi on 53:3 now reads "mentions all Israel as one man" with 44:1 and 44:2, corrected in the
lesson and in `SOURCES.md`. F4 the Hayes *riv* quotation is attributed to **Hosea** and to her claim
that Hosea was the first to use the form; Amos 5:21 to 24 is now described as the charge and verdict
of a covenant suit whose full form appears elsewhere, and the four parts of the *riv* are stated once
and used consistently, which also fixes V9. F5 Isaiah 8:8 is dropped from both sentences; the
Immanuel point now rests on 8:10 alone, as line 311 already did correctly. F6 "three words" is now
"four words". F7 exercise task 1 was replaced entirely, so the impossible assignment is gone.
F8 the curse-list predict now points at both ranges and its answer no longer claims 28:15 to 24
contains locusts. F9 the Amos bullet is now "4:7 to 8" and the prose says the refrain closes each of
five units, matching the chart. F10 both video running times are cut, following lesson 9's recorded
resolution, since oEmbed returns no duration. F11 Q6 was replaced, so the explanation that settled an
argued question is gone. F12 both ESV survivals fixed: "ensnare you and their gods will lure you
away" (Judges 2:3) and "my special possession out of all the nations" (Exodus 19:5), the latter now
quoted at length rather than paraphrased. F13 Deuteronomy 28:21 is quoted whole, including "you are
about to possess". F14 the Hosea 6:6 quotation now carries footnote 9 with Matthew 9:13 and 12:7.
F15 the Isaiah 7:14 and 7:16 quotation now says verse 15 is left out and why. F16 Mendenhall's
citation carries the issue number and the 49 to 76 range. **F17 Matthew 2:15 fixed in Q3's stem to
the NET's "I called my Son out of Egypt", with Hosea's own "I summoned my son out of Egypt" given
alongside so the colleague's objection is sharper.** F18 was withdrawn (see above); Isaiah 7:14 was
correct, and source 1 now names the second edition and records why the edition matters at that verse.

**Neutrality.** N2 the range now reaches outside Reformed evangelicalism: the *Catechism* on the Old
Law is quoted and linked with the point that the threefold division is current magisterial teaching
and not a medieval curiosity; Article VII of the Thirty-Nine Articles is named as the same division
in a confession; and the Lutheran three uses of the law are given as a third way of putting the
question, one that asks what a law does rather than what it is. N3 the Christian reading of Isaiah
7:14 now has four numbered parts with real arguments, including **the shift of address at 7:13 from
Ahaz to "family of David"**, which is textual and checkable in the NET as printed, and Beale's
common-ground observation about what the Old Testament writers did not exhaustively grasp. "We should
stop saying it is" now reads "Christians should stop claiming it is", so the sentence states the
course's position without disciplining the reader in the second person. N4 Hayes is out of "The
Jewish reading" and into her own short subsection, "How a critical scholar reads it", which says
explicitly that the critical reading and the Jewish reading agree about Ahaz and reach that
agreement by different routes and that neither is a spokesperson for the other; "teaching the Hebrew
Bible at Yale" is now "who taught", and Go deeper no longer says she never asks you to believe or
disbelieve. N5 the 613 section is rewritten: the enumeration is named as disputed inside the
tradition (Nachmanides, the *Halakhot Gedolot*, Ibn Ezra), a large share of the commandments are
noted as inoperable without the Temple, halakhah and the Oral Torah are named as the working
category, Orthodox, Conservative and Reform practice are distinguished, and **Psalm 19:8 is quoted in
JPS 1917** so the tradition speaks rather than being spoken for. "They hear the wrong question" is
now "many will tell you it's the wrong question". N6 the Marcion label is gone from Q1, which was
replaced; the misconception section now handles Marcion under "The Old Testament God is wrath", where
it belongs, and names his actual claim. N7 the single-meaning position is named in Q3's explanation
as one serious evangelicals hold, with the lesson saying why it doesn't follow it rather than marking
it simply wrong. N8 the treaty-parallel argument now has its own paragraph giving Weinfeld, Steymans
and the Sefire treaties, saying the question is argued, saying it bears on dating, and saying what
both sides agree on. N9 the one-way irony is gone: "quoted on posters" survives only inside the
exercise where it earns its place, "the reader who wants to may hear modern secular justice in it" is
cut, and "rummaging in it" is replaced. N10 Trypho is now identified as Justin's own construction,
with the observation that nobody invents an objection nobody is making and that Trypho's candidate is
Hezekiah, which is Radak's.

**Depth.** All ten unused research items are now used or deliberately declined: **Köstenberger and
Patterson's triad** is in Go deeper with the point that the lesson performs all three parts;
**Beale** is cited in the Christian reading; **Jeremiah 31:31 to 33 is quoted** in the new covenants
predict, so proposal 2's test rests on a text rather than a reference; **Longman and Dillard** are in
Go deeper with the reason (the lesson sends the reader into six books they may not know);
***The Jewish Study Bible*** is in Go deeper alongside the medieval commentators, with the point that
it shows how Jews read the passage now rather than in the twelfth century; **Hayes's lecture on
biblical law** is named in Go deeper as the critical account of the law the lesson only gestures at;
**Deuteronomy 29:1 and the Moab setting** are quoted, which makes the treaty-form argument stronger
because a renewal is when the whole agreement is read out again, and 29:23 now does real work in the
Sodom correction; **Maimonides' first positive commandment** is in the 613 callout. Duvall and Hays
remain in Go deeper only, and the frameworks section now earns its length through the Ezekiel
checkpoint rather than by adding a procedure the lesson does not use. D4 the near-and-far rule now
has **three numbered steps**, including the one the lesson performed everywhere and never wrote down:
if no New Testament writer takes the passage up, the far horizon is not yours to assert. D7 the
exercise now has **four model answers in two `:::checkpoint` blocks** after it, and the free-recall
list is a bulleted list of six items rather than a 55-word sentence, ending "Then check against the
lesson". D11 Go deeper is five entries; one was cut and two added, which is over 1.2's range of two
to four, and the judgement made was that a lesson sending readers into six unfamiliar biblical books
plus a contested treaty argument needs the orientation more than it needs the ceiling.

**Voice and pedagogy.** All seven "Here is / Here's" openers are gone; the one remaining instance is
inside the NET text of Isaiah 7:16. Twelve one-line morals reduced to the two the reviewer said to
keep. All six pipeline-vocabulary headings renamed after their content ("Leviticus 19:18 and 19:19,
sorted three ways"; "Amos, with the penalty clause open"; "Isaiah 7:14, near and far"; "Now do it
yourself, on Amos, Micah, and four passages out of order"; ":::exercise Four tasks"). The six
unsourced superlatives are rewritten. Two of the three rhetorical-question openers are gone and the
one a real student asks is kept. The **figure is now referred to in the text** ("Look at the tablet
above before you read on"), and its caption turns the parity-treaty mismatch into the teaching rather
than conceding it in a subordinate clause. The Hosea checkpoint now **puts its question first** and
the quotation second. The 613 predict is replaced by one with a reasoning path (which section of
Deuteronomy 28 is longer, and by how much, which also seeds the Amos section), and the 613 material
moves to a `:::callout`. Predict 195 no longer telegraphs its own list. Checkpoint 267 no longer
elaborates past its prompt. The wall paragraphs are broken up, and the Christian-reading case is now
four short paragraphs rather than one block with its best sentence at word 95. **P7 the outline's
spaced review now ships**: the five covenants are retrieved in a predict before the treaty form, and
lesson 3's basic rule is stated in full at the head of "Two horizons" and then used, rather than
appearing for the first time in Connections. **P8** objective 1's practice moved to the law half,
where it belongs, as its own exercise with a model answer, 180 lines earlier than before. **P9** the
exercise now interleaves: a new fourth task gives four passages out of order and asks only which
question to ask first, deliberately mixing lesson 3's genre question with this lesson's two. **P13**
"The near horizon is the only horizon" moved out of the misconceptions into "Two horizons" as the
mirror of the rule, and four misconceptions a beginner actually holds were added: the law as an
unbearable burden, the wrath-and-love contrast, the Ten Commandments as obviously a different kind of
law, and prophecy as a code to be decoded against the newspaper.

**Split.** The seam is marked with an HTML comment after the Biblical Law video, per BACKLOG 7b,
recording what each half carries and what each would need to stand alone. Not renumbered. Not held.

### Deliberately not fixed, with reasons

- **The split itself.** Third lesson in a row to hit it. 7b is settled and says mark the seam and do
  the renumbering once, before publish, when every seam is known. Note for whoever does it that this
  seam costs more than lesson 2's or lesson 3's, because the lesson's thesis *is* the join between
  law and prophets, so Part B needs a real opening rather than a cross-reference. The suggested hook
  is in the seam comment.
- **The two BibleProject running times.** Cut rather than corrected, because youtube.com is blocked
  in this environment and oEmbed does not return duration. Restore them when a session can reach
  YouTube; lesson 9 made the same call.
- **Hayes's prophet-versus-diviner and "mistranslation" quotations.** Both are recorded in
  `SOURCES.md` from the transcripts and neither could be re-fetched here (oyc.yale.edu blocked). Kept
  as recorded, and flagged as fact-check debt above.
- **Radak's Hebrew.** Still read via summary. The lesson quotes nothing from him and the footnote now
  says so, which is as far as this pass can honestly go.
- **The alt text of the Kadesh photograph.** Commons is blocked, so the description could not be
  checked against the image. Unchanged and flagged.
- **Fee and Stuart's chapter 10 title.** `SOURCES.md` gives it two ways in two places and both
  lessons assert theirs. Recorded at source for whoever next opens the book; not resolvable here.
- **Köstenberger and Patterson beyond one Go deeper entry.** The triad's real payoff is across
  lessons 3 to 7 rather than inside one, and lesson 4 is already at 145 minutes.
- **`scripts/build.mjs` blind spots.** Two are now confirmed by this lesson: a fill or stroke on a
  `<g>` wrapper is invisible to the SVG check, and the no-links-in-body check is satisfied by links
  in Go deeper and Sources, so a lesson with zero links in its teaching prose passes validation. Both
  belong in the build script rather than a lesson fix pass. **Recorded under "Requests for the shared
  files" below.**

### Requests for the shared files

This session owns `courses/christian-studies/bible-basics/**` only. These belong to whoever holds
`scripts/`, `docs/` and `curriculum/`.

1. **`scripts/build.mjs`: warn on `fill="#` and `stroke="#` on a `<g>` element**, not only on
   `<text>`. Lesson 4 had sixteen hardcoded values on three `<g>` wrappers, all invisible to the
   linter, and the whole content of its chart disappeared on the dark theme. This is the third such
   bug in this course that the validator could not see.
2. **`scripts/build.mjs`: the no-links check should ignore links inside `## Sources` and
   `## Go deeper`.** 4.5 asks for links in the teaching prose. Lesson 4 had zero links in its body
   and passed validation because its Go deeper entries carried three.
3. **`scripts/build.mjs`: consider warning when a lesson's `minutes` is implausible against its own
   word count and media.** Every lesson reviewed so far has understated it by a third to a half, and
   the value feeds the learner's cumulative hours on the site.
4. **`docs/CONTENT_PIPELINE.md` and `.claude/commands/draft-lesson.md`: Stage 3 should load the
   previous lesson's "Resolutions applied" block before drafting.** Six of lesson 4's eleven blocking
   findings are items already resolved earlier in this same course. Lesson 3's review predicted this
   and lesson 4 confirmed it.
5. **`docs/EDITORIAL_STANDARDS.md` 4.7: the `curl labs.bible.org` recipe does not work in every
   environment.** Some sessions block every scripture host at the proxy. The mirrors that do work are
   now recorded in this course's `SOURCES.md`; if the policy is meant to be followable everywhere,
   4.7 should say what to do when the API is unreachable rather than leaving each session to
   rediscover it.

---

## Lesson 5, "Reading poetry, the Psalms, and wisdom" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context. **Verdict: not clean for publish.** About sixty findings, nineteen
blocking.

Two things are true at once and both matter. The **Proverbs half is the best teaching in the course
so far**, and the **quiz is the best-built in the course** on every axis previous reviews measured:
all six items use cases the body never works, option lengths are levelled to within 5 to 15
characters, and keys spread A, B, C, B, C, D with all four indices used and no run. Against that,
**eight of the blocking findings are items already resolved earlier in this same course**, and one
whole class of defect (ESV debris) is concentrated in the quiz that is otherwise the best in the
course. Lesson 5 was drafted after lesson 4's fix pass had already written the fix for four of them.

The two findings that no previous review would have caught are both arithmetic: a sentence that is
false on the lesson's own numbers, and a chart that omits exactly the data that would refute it.

### BLOCKING

**L5-B1. The self-check prints its own answer in plain body text, for the fifth lesson running, in
the exact wording lesson 4 was faulted for.** Line 191 "Write your answer before reading on"; line
193, the next visible line, "Here is mine." Caught independently by all five reviewers. Worse than
any previous instance: **line 186 defines the fourth element as "deliverance (the actual petition)"
and line 191's own prompt calls verses 3 and 4 "the petition"**, so the question hands over the
answer word before asking for it. L1-V3, lesson 2's line 254, L3-B1, L4-B1.

**L5-B2. Every poem in a lesson about paired lines renders on the site as prose.** `scripts/build.mjs`
line 17 sets `marked` with `breaks: false`, and `site/assets/styles.css` line 67 sets no
`white-space` on `blockquote`. Verified by running marked with the project's own options: two
quoted poetic lines come out as one `<p>` with a soft newline, which HTML collapses to a space.
So Psalm 13 entire, Psalm 19:1 to 2, Proverbs 26:4 to 5, Psalm 137, Proverbs 22:6 and Ecclesiastes
1:2 all reach the learner as run-on prose, in the lesson that teaches "ask what the second line
adds". **This is course-wide** (lesson 6 has 23 quoted poetic lines, lesson 4 has 11, lesson 2 has
5), and lesson 5 has 43, the most in the course. Two fixes: a lesson-local one, two trailing spaces
per poetic line, which was tested and does emit `<br>`; and a proper one in the shared files, a
`:::verse` block plus `white-space: pre-line`, filed below.

**L5-B3. Six ESV wordings in the quiz, none tagged, in the lesson whose research file predicted
exactly this.** `SOURCES.md` line 246: "**ESV text** of every verse quoted in lesson 5 was fetched
from BibleGateway at draft time", with the standing instruction to re-fetch in the NET. **The body
was converted and the quiz was not.** Verified against NET2:

| Item | Lesson (ESV) | NET |
|---|---|---|
| Q1 option B | "the God of my salvation" (Ps 88:1) | "O Lord God who delivers me" |
| Q2 stem | "A slack hand causes poverty, but the hand of the diligent makes rich" | "The one who is lazy becomes poor, but the one who works diligently becomes wealthy" |
| Q3 stem | "break forth into singing... trees of the field shall clap their hands" | "will give a joyful shout before you... all the trees in the field will clap their hands" |
| Q4 stem | "the dead know nothing, and they have no more reward" | "the dead do not know anything; they have no further reward" |
| Q6 stem | "I will extol you, O LORD, for you have drawn me up" / "turned for me my mourning into dancing" | "I will praise you, O Lord, for you lifted me up" / "Then you turned my lament into dancing" |
| Q6 option C | "he will not be moved" (Ps 30:6) | "I will never be shaken" |

Q3 is worst: its whole point is a botanical objection to a rendering ("trees of the field", "break
forth into singing") the learner's own Bible does not carry. Q6 asks the learner to classify a psalm
**from wording they will not find when they open it**. Also in the body: **Proverbs 16:3 quoted in
the NIV** ("your plans will succeed"; NET "your plans will be established") with no version named;
Proverbs 10:1 and 15:1 given in ESV/KJV wording hedged as "in most translations", which is a dodge
in a course with one Bible; and Psalm 59:7 "swords in their lips", which is ESV and is not in the
NET at all (the image is at 55:21 and 57:4). **Footnote 1 claims the quotations were "read via the
bible.org API"**, which `SOURCES.md` contradicts and the six survivals disprove.

**L5-B4. "More of Israel's prayer book is complaint than praise" is false on the lesson's own
numbers, and the chart is drawn so the reader cannot check it.** Line 157. Fee and Stuart's point,
correctly quoted, is that laments are the largest *type*. Add the lesson's own lists: thanksgiving
16, hymns of praise 16, salvation-history 5, celebration and affirmation 28, wisdom 8, trust 10.
That is 83 non-lament psalms against "more than sixty" laments, and 65 of them are praise of one
kind or another. **The chart's own footer concedes the problem**: "hymns and celebration psalms are
not counted there", so the two largest praise categories are precisely the two the bar chart omits.
A chart that omits the data that would refute the sentence it illustrates is the L2-B1 class with a
truth problem on top, and the overstatement runs in the direction of the paragraph's pastoral point.

**L5-B5. The psalm-type scheme is a list of numbers with no diagnostic criteria, and the one tool
that makes classification possible appears for the first time in a quiz answer.** Lines 122 to 130
give seven types as names plus psalm numbers. Nothing says what makes a psalm a lament rather than a
thanksgiving, or what "enthronement" means. Q6 then asks the learner to classify Psalm 30 cold, and
its `explain` supplies Fee and Stuart's five thanksgiving elements for the first time in the lesson.
That five-element pattern, worked on Psalm 138, is in `SOURCES.md` line 240 and never reaches the
body. Objective 2 says "classify a psalm by type"; the transfer test fails on the lesson's largest
section. **Compounding it, both classification items are lookups**: line 124 lists Psalm 88 among
the individual laments and line 197 states its whole content, which is Q1's key; line 125 lists
Psalm 30 among the individual thanksgivings, which is Q6's key. Quizzes are open book
(`app.js` sets "Closed book" only for `isTest`).

**L5-B6. Four of the lesson's own objective-halves are taught, modelled and tested cold. Fifth
lesson running** (L1-D4, L2-B4, L3-B4, L4-B6). Imagery (objective 1b) has teaching and Q3 and no
practice. Classification (2b) has a bare list and no practice. **Job (4a) has teaching and neither
practice nor a quiz item**, and the learner never reads a line of Job except 42:7 quoted in the
body. The imprecatory psalms (4c) have a quiz item and no practice, on the hardest material in the
lesson. Objective 4 also bundles three separate performances and promises "read one of each as what
it is", which is unperformable as shipped, since two of the three books are never opened. That is
L4-P10 one lesson later. Objective 3 is the only complete chain in the lesson and is the model the
others should be rebuilt to.

**L5-B7. "Vengeance is mine, I will repay, says the Lord" is attributed to Deuteronomy 32:35, and
the course's own Bible does not read that way there.** Line 281 calls it "a command... which
Deuteronomy 32:35 gives to Israel". NET Deuteronomy 32:35: "**I will get revenge and pay them back**
at the time their foot slips." The quoted words are Paul's at Romans 12:19, which the lesson then
correctly block-quotes four lines later. Two errors compound: a wording the course's Bible does not
carry, and "a command given to Israel" for what is God speaking about the nations inside the Song of
Moses. Q5's explanation repeats it. **This is the sentence the whole answer to the lesson's hardest
objection rests on.**

**L5-B8. Twelve of the chart's thirteen labels vanish on the dark theme, and the validator sees
two.** Line 134, `<g font-size="11" fill="#333">`, wraps six type names, five numbers and the in-bar
label. `scripts/build.mjs` matches `fill` and `font-size` on `<text>`, not on a `<g>` wrapper, so
eleven labels defeat **both** checks; `npm run validate` reports one `#fff` fill and two undersized
labels when the real counts are twelve and thirteen. `styles.css` sets `--bg: #0c1220` in dark mode,
so `#333` on that is about 1.45:1 and the chart's entire content disappears while the bars remain.
Line 137's `fill="#fff"` sits on the oxblood bar, which flips to `#d9737f` in dark mode, about
3.2:1, so the headline number goes too. Sizes: title 12, labels 11, footnote 9 in a `0 0 360 230`
viewBox render at **10.9, 10.0 and 8.2px** on a 360px phone against the 14px floor. No `<desc>`.
**Fourth SVG contrast failure in this course the linter could not see** (L1-V2, L3-B5, L4-B4).
Also the laments bar is drawn at exactly 60 while its label says "more than 60", which is L3-F4,
whose recorded fix was to draw at the floor **and say so in the caption**.

**L5-B9. Zero in-body links, and the lesson's first line is an unlinked instruction to open a
Bible.** Line 60, "Open a Bible to Proverbs 26". The file's only two Markdown links are in Go deeper
and Sources, which is exactly the condition that satisfies the validator's no-links check. Seven
further "open this passage" commands are unlinked (94, 159, 199, 211, 314, 316, 318), so every
practice task in the lesson is blocked for a reader without a Bible to hand, which line 159 concedes
("in your own Bible"). L1-V5, L3-V6, L4-B10, fifth time, and the build-script blind spot was already
filed as a shared-file request at lesson 4.

**L5-B10. Contractions: effectively zero in the body and zero in the frontmatter.** Eight matches in
6,822 body words, and **six of the eight are "what's more" inside Kugel's quoted formula** and one
is inside a quoted objection, so teacher prose contains **one real contraction**. The frontmatter has
**zero in 1,685 words**. Course band is lesson 3's 1 in 55 to lesson 4's post-fix 1 in 63. Lesson 4
was called a regression at 1 in 249; this is several times sparser again and is the worst in the
course. Six quiz explanations averaging 108 words with no contraction is the most machine-sounding
block in the file, and it is the exact block lesson 4 was faulted for.

**L5-B11. `minutes: 45` against a measured 105 to 140.** Four reviewers measured independently:
105 to 119, 117 to 140, 122, and 134. The lesson asks for about 75 to 90 verses of external reading
(Psalm 22 entire, Psalm 42 entire, Psalm 1, Ecclesiastes 1:1 to 11, Proverbs 3:1 to 10, Amos 5) plus
13 minutes of video plus three written exercise tasks. Against the course's calibration this is the
largest proportional gap yet, larger than lesson 4's before it was reset.

**L5-B12. The Psalter's Catholic and Orthodox life is absent, and every psalm number in the lesson
is wrong in their Bibles.** Grepped: "Catholic" 0, "Orthodox" 0, "Divine Office" 0, "Liturgy" 0,
"monastic" 0. Line 112 says the Psalter "is the prayer book of the synagogue as much as of the
church" and then shows no church praying it: not the Rule of St Benedict's weekly Psalter, not the
four-week Liturgy of the Hours, not the Orthodox twenty kathismata (the whole Psalter weekly, twice
weekly in Lent). These are not rival theories; they are the lesson's own thesis, practised for
fifteen hundred years. Fourth recurrence of L2-N6 / L3-N7 / L4-N2.
**And in the Greek and Vulgate numbering, Hebrew 11 to 113 = LXX 10 to 112, so every psalm this
lesson sends a reader to is off by one**: 13 → 12, 22 → 21, 30 → 29, 42 → 41, 51 → 50, 88 → 87,
109 → 108, 137 → 136. Lesson 1 already taught the LXX numbering at Psalm 9/10 and this lesson drops
it, in the lesson that tells the reader to go and look verses up.

**L5-B13. Protestant-canon figures stated as settled, and the deuterocanonical wisdom books are
absent from a lesson about biblical wisdom.** Line 112, "a collection of 150 prayers and songs":
the Greek and Slavonic Psalter carries **Psalm 151**, and **11Q5, the manuscript in the lesson's own
photograph two lines later, contains Psalm 151 in Hebrew**. Line 205, "Three Old Testament books are
usually classed as wisdom": in a Catholic or Orthodox Bible the Wisdom books are a named section of
five to seven including **Sirach** and the **Wisdom of Solomon**, both grepped and absent. Third
recurrence of L1-N5 and L3-N6, whose fix instruction was "wherever a number is attached". It also
costs real teaching: Sirach is the closest ancient analogue to Proverbs, and **Wisdom 3:1 is the
answer another canon supplies to exactly the problem quiz Q4 poses from Ecclesiastes 9:5**.

**L5-B14. The Jewish reader: one subordinate clause of living practice, the Tanakh quoted from a
Christian translation, and the tradition enlisted rather than heard.** The sharpest test in this
lesson and the lesson does not take it.
(a) Line 112 is the only mention of Jewish use, and everything downstream is Christian, including
Fee and Stuart's "precisely in the ways they functioned for Israel **in the first place**", past
tense. Nothing on how Jews pray these psalms **now**: Ashrei three times daily, Hallel at the
festivals, Kabbalat Shabbat, the Psalm of the Day, Psalm 30 at shacharit, psalms in a house of
mourning.
(b) **4.7 breach at line 255**, which characterises what a Jewish community reads at Sukkot by
quoting the NET's "everything is futile". That is a Christian translation's rendering of *hevel*
used to describe a Jewish liturgical act. JPS 1917 reads "all is vanity". This is where L3-N12 said
the rule bites and where L4-B8 was fixed.
(c) The tradition is spoken for: line 255 tells the tradition what its practice means, with
**Wikipedia** as the only source behind a claim about living practice, which is what L2-N8 was
faulted for. The book is called "Ecclesiastes" inside the Jewish paragraph where the tradition's word
is **Kohelet** (outline convention 5).
(d) **No Jewish reading of Job or the wisdom books anywhere.** *b. Bava Batra* 15a, where the rabbis
debate whether Job existed at all or is a *mashal*, bears directly on line 244's flat "Job is a
dialogue with a frame", and this course already cites Bava Batra 14b in lesson 1. *m. Yadayim* 3:5,
already in `SOURCES.md` line 41 and already used in lesson 1, records the real dispute over whether
Kohelet "defiles the hands", which is the honest correction to line 303's "that he is there on
purpose is not argued".
(e) **Psalm 22 is handed to the learner christologically with no label**: exercise part 1 says "If
you know where Jesus quoted the first line, note that too." Psalm 22 is, after Isaiah 53, the most
disputed passage between Jews and Christians, and the lesson gives the prompt and no three-way sort,
one lesson after lesson 4's Isaiah 7:14 section was praised for doing the opposite.
(f) Hebrew versification: the superscription is verse 1 in a Hebrew Bible, so "Read Psalm 13:1 to 2"
sends a JPS reader to the wrong lines, and Psalm 51:5 is 51:7 there.

**L5-B15. The imprecatory section grades the largest church's own liturgical practice as a
misconception, and states the objection only in a form nobody holds.** Line 305 lists "the violent
psalms should be skipped" as a misconception; Q5 option A defines that position as holding the
psalms "record an older and lower stage of religion". **The 1971 Liturgy of the Hours omits Psalms
58, 83 and 109 entirely and excises the imprecatory verses of others, including 137:7 to 9.** That is
the settled official practice of the Psalter's largest living Christian use, and its stated reason is
pastoral, not developmental, so no Catholic would recognise option A as their view. Separately,
**C. S. Lewis's *Reflections on the Psalms*** calls the spirit of the cursing psalms "devilish" while
insisting they are still Scripture; that is the best-known Christian treatment of the problem and it
is absent, so the lesson offers only endorsement and tearing the page out, both marked wrong. 3.7
asks for objections at full strength, and the strong objection survives the lesson's answer: granting
that the psalm is prayer, hyperbole, covenantal and handed to God, it still asks God to bless the man
who kills babies, and the lesson then invites the reader to pray it.

**L5-B16. The exercise has three written tasks and no model answers, and two of the three give away
what they ask for.** Fifth lesson (L2 two missing, L3-V9 four, L4-D7 all). Line 314 says "Then find
the turn. **It is sharp, and it comes with a change of audience:**" and quotes 22:22, so the task is
to find a turn the instruction has already located and quoted. Exercise part 2 sends the learner to
Proverbs 3:1 to 10, and the callout at 236 has already quoted 3:9 to 10 and delivered the reading.
`OUTLINE.md` convention 6 requires practice on a passage the lesson did not cover.

**L5-B17. Contested claims asserted as settled, five of them, each in the direction that favours the
course's position.** The hunted defect.
(a) **"The epilogue has the last word"** (253, 303) and, in **Q4's key**, "a framed book whose
epilogue has the last word". That the book has a frame is well attested. That the frame *governs*
rather than endorses is the contested question, and Michael Fox's reading (the frame narrator
presents Qohelet approvingly) is the standing counter-position. Resolved by editorial preference, in
a quiz key, in the direction that neutralises Ecclesiastes 9:5.
(b) **Manufactured consensus**: "Both readings agree on the thing that matters for you... a single
line of the Teacher is not where you settle a doctrine" (253). On Provan's reading, which the same
paragraph reports, Qohelet's voice *is* the book's teaching. Attributing to a named scholar an
agreement that dissolves his position is a 3.2 failure.
(c) **"Counter-voices"** as a section heading (240) and "the canon's own defence against turning
wisdom into a slot machine" (242) state the Longman side of the disagreement the lesson reports
eleven lines later, in the lesson's own voice, as the reason the book is canonical. "That he is
there on purpose is not argued" (303) is contradicted by m. Yadayim 3:5.
(d) **"Paul's instruction and the psalm are the same instruction"** (287), and "That is the whole
logic of the imprecatory psalms" (281). A theological synthesis asserted as an observation, and it
is the sentence carrying the answer to the lesson's hardest objection. `SOURCES.md` records only the
weaker claim that these psalms "do not contradict Jesus' teaching"; the *because* clause at 287 is
the drafter's and is attributed to Fee and Stuart by placement.
(e) **"It is the verdict of the book of Job"** (234). Job 42:7 says the friends have "not spoken
about me what is right"; reading that as a verdict about *genre misuse* is an interpretation, and
substantial readings locate the fault in their theology of God instead.
(f) **"survives translation better than almost any other poetry in the world"** (301), an unsourced
superlative contradicted by the course's own research: the Psalm 9/10 acrostic, verified at
`SOURCES.md` 170 and taught in lesson 1, is invisible in English.

**L5-B18. The critical scholar: Mowinckel dropped, the superscriptions silently deleted, Ecclesiastes
undated.** Mowinckel appears once, in footnote 7, never in the body, though the same footnote records
that Hayes lecture 21 covers "form criticism from Gunkel and Mowinckel". The lesson takes Gunkel's
**labels** and drops his **thesis**, that each *Gattung* has a *Sitz im Leben* in Israel's cult, and
with it Mowinckel's claim that most psalms are temple liturgy rather than private devotion, which is
the direct counter-position to the lesson's own reading rule at 114. It even prints Mowinckel's
category name, "the enthronement psalms", without him.
**The superscriptions are deleted from every psalm quotation and the deletion is disclosed only in
the Sources block** (337), while line 165 says "Here is the whole psalm" of a Psalm 13 that has had
its heading removed, which in Hebrew is verse 1. Whether "of David" means authorship, dedication or
a later liturgical note is the standing question, and the lesson decides it by excision, in the
direction that makes a psalm a private prayer. Psalm 88's superscription names Heman the Ezrahite
and sits inside the psalm Q1 is about.
Ecclesiastes gets no date, no 1:1 "son of David, king in Jerusalem", no Solomonic persona and no
mention of the near-consensus post-exilic dating.

**L5-B19. The lesson 1 forward reference is dangling.** `01-finding-your-way-around.md` line 239:
"Who the servant is has been argued between Jews and Christians for two thousand years, and **lesson
5 takes it up**." Grepped lesson 5: "Isaiah 53" appears **zero** times. The material landed in lesson
4's callout, which is where L1-N8's resolution should now point.

### Facts wrong

**L5-F1. Psalm 42's refrain occurs three times, not twice, and the checkpoint stops one verse
short.** Line 199 sends the reader to "all eleven verses" and line 200 answers "the turn happens
twice". Verified in NET2: the refrain stands identically at **42:5, 42:11 and 43:5**, and **Psalm 43
has no superscription**, which is the main evidence that 42 and 43 were one psalm. Reading both
makes the checkpoint's own point ("the turn is not a switch that stays flipped") far stronger.

**L5-F2. Psalm 88's verse count is double-covered.** Q1's stem says it "opens with a cry, complains
for eighteen verses"; the psalm is **18 verses in total**. Also Q1's key understates what it drops:
against Fee and Stuart's six elements, Psalm 88 lacks trust and assurance as well as praise.

**L5-F3. Psalm 30 does not end where Q6 says.** The stem says it "ends with" 30:11; the psalm ends
at **30:12**, "I will always give thanks to you", which is the testimony element and strengthens the
key.

**L5-F4. Psalm 137 verse 7 is itself an imprecation**, so "after six verses of grief, the last two"
(267) miscounts a nine-verse psalm the lesson relies on three lines later.

**L5-F5. The corporate-lament list drops Psalm 94** (124) and is given without the hedge the
individual list carries.

**L5-F6. Elihu is missing, and he is the failure case for the lesson's own rule.** Line 244: "you
cannot read any speech in Job as 'what the Bible teaches' without asking who is speaking and what God
says about them at the end." Job 32 to 37 is Elihu, and 42:7 names only Eliphaz "and your two
friends", so the rule returns no verdict on a sixth of the book. L1-D2 established that a rule taught
with no failure case is memorised rather than usable; this one is free and inside the lesson's text.

**L5-F7. The acrostics are missing**, and they are the counter-example to L5-B17(f). Psalms 9-10, 25,
34, 37, 111, 112, 119, 145 and Lamentations are alphabetic acrostics, the one formal feature that does
not survive translation at all. **Lesson 1 already worked Psalms 9 and 10 as a broken acrostic** and
`SOURCES.md` 170 records it as verified.

**L5-F8. "Lesson 9 returns to it"** (117) is false as the course stands: no lesson mentions 11Q5 or
the Psalms Scroll outside lesson 5, and `OUTLINE.md` sends lesson 9 to the Great Isaiah Scroll.

**L5-F9. The Ecclesiastes liturgy sentence over-generalises its source and misplaces the festival.**
The lesson says "by other communities on Shemini Atzeret"; `SOURCES.md` 245 names only "Yemenites,
Italians, some Sephardim, and the mediaeval French Jewish rite". Shemini Atzeret is a distinct
festival following Sukkot, so "at Sukkot... on Shemini Atzeret" is self-contradictory. Ashkenazim
themselves read it on Shemini Atzeret in years when no Shabbat falls in Chol HaMoed.

**L5-F10. Three Fee and Stuart quotations run longer than the research record supports** (209, 224,
234), and **the Kugel paraphrase goes beyond the formula `SOURCES.md` authorised** ("quote only the
formula"), giving a four-verb mechanism attributed to a book the research records as not opened.
The substance of the Kugel expansion is independently supported; the attribution is the problem.

**L5-F11. Small claims beyond the record**: "thirty-nine chapters of poetry" in Job; *hebel*'s
"literal sense is vapour or breath"; "In the Hebrew Bible it is called Tehillim"; "*hesed*" as the
word behind the NET's "faithfulness" at Psalm 13:5; 11Q5 "roughly nine centuries" before the
Masoretic codices, which is closer to a thousand years; both video running times; and the *hebel*
count of 37, which several commentaries give as 38.

**L5-F12. A statistic sourced to a YouTube animation.** Line 73 attributes "about a third of the
whole Bible" is poetry to the BibleProject video, in parentheses, unfootnoted, and the sentence
around it is about the Old Testament, so the denominator switches mid-sentence. 2.2 does not accept
an animation as the source for a proportion, and Fee and Stuart's own figures are in `SOURCES.md`
line 11 and unused.

### Depth: researched and unused

Fee and Stuart's **thanksgiving elements worked on Psalm 138** (the exact material L5-B5 needs);
their **three worked parallelism examples**, Isaiah 44:22, Hosea 7:14 and Obadiah 21, which would
supply ready-made practice for objective 1 and would give **synthetic parallelism** the example it
completely lacks (it is defined once in a parenthesis and never shown, practised or tested); the
**fuller hymn lists** (66, 100, 111, 114, 149; 33, 103, 113, 117, 145 to 147), which the chart footer
claims do not exist; the **full lament lists**; Fee and Stuart's **other three Proverbs guidelines**,
where Go deeper advertises "the four guidelines" and the lesson gives one; their **Psalm 3 worked
lament**; **Longman and Dillard**, assigned by `OUTLINE.md` and absent from body, Sources and Go
deeper, which is L4-D1.4 verbatim one lesson later; **Hayes lecture 20** on wisdom, so the Psalms
half carries a critical voice and the wisdom half carries none, which is L4-D1.7 with the halves
swapped; and the **BibleProject "Metaphor" video**, verified at draft time and parked in Go deeper
rather than embedded at the imagery section it was researched for.
Correct behaviour to record: Athanasius's *Letter to Marcellinus* and the NET note on Proverbs 22:6
are recorded as "Not obtained" and neither is cited. And **the lesson does not attribute Proverbs
22:6 to Fee and Stuart**, which `SOURCES.md` warns against; it gives its own reasoning and then says
they make the same point from 16:3. Clean separation, and it must survive the L5-B3 fix.

### Voice and pedagogy

Four "Here is" openers (92, 104, 165, 193), including "Here is the mechanism under all of this",
which is the 1.2 element name in learner-facing prose. Five pipeline-vocabulary headings. Ten to
eighteen paragraphs ending on a compressed one-line moral, depending on how strictly counted, where
lesson 4 was told to keep two. Six unsourced superlatives. Three rhetorical-question openers where
one is allowed; keep line 242's, which a real student asks. Eleven wall paragraphs over 100 words,
worst at 253 (174 words), 224 (174) and 244 (150). Four sentences over 90 words. Psalm 13 is analysed
by verse number and quoted **without verse numbers**, giving eleven back-references into an
unnumbered block on a phone. Exercise part 1 says "mark in the margin", which assumes a printed
Bible. **No free-recall step before the quiz**, and this is the only lesson in the course without
one. The figure is never referred to in the text and its caption teaches lesson 9's subject, so it is
close to decorative in a lesson that shows parallelism visually nowhere. Q6 option C rests on Psalm
30:6, a line the stem does not quote, so an inline reader cannot evaluate it. The same fake-
parallelism distractor template appears in Q2, Q3 and Q4, which hands a free elimination once
spotted. **Five of six keys are the moderate option**, with every distractor closing on an absolute,
so a learner who has read nothing scores 5/6 against a 70 percent pass mark: the drafter has learned
to level length and position and not yet to level stance.

### Split seam

Yes, and the lesson names it in words: line 205 opens "Now to the other half of the lesson." Part A
(poetry and the Psalms) and Part B (wisdom, Job, Ecclesiastes) are about 3,400 words each. One
complication all three reviewers who looked at it noted: **the Psalm 137 section sits in Part B and
belongs to Part A's material**, so a clean split needs it moved up. Fourth lesson in a row to hit
this.

### What is working, and must survive the revision

- **The opening**, Proverbs 26:4 and 5 side by side with a predict that makes the reader choose
  before any teaching, and an answer that turns the contradiction into the lesson's whole thesis.
  The best opening in the course since lesson 3's.
- **The Kugel correction of Lowth** (88 to 92): the classic taxonomy taught, then the standing
  objection to it, labelled as an argument, with a usable habit as the outcome. **Footnote 5 discloses
  that the book was not opened**, which is the L4-B7 defect handled correctly and unprompted.
- **The Proverbs teaching entire** (203 to 234), especially the wrinkle at 226: the reader's own best
  objection ("a convenient way to explain away the verses that do not come true") answered from
  inside the canon with Job's friends and Job 42:7. Objective 3 is the only complete
  teach-practise-test chain in the lesson and is the template for rebuilding the others.
- **The Longman and Provan paragraph** (253), minus its last sentence. Two friends reading the same
  book in opposite ways, with the course's own textbook's authors split one each way.
- **The Psalm 42 checkpoint**, "the turn in a lament is not a switch that stays flipped".
- **The Psalm 137 section's refusal to make itself comfortable**: "I will not pretend this makes the
  verse comfortable. It does not, and it is not meant to." The anti-presentism at 277 to 279, placing
  the psalm on lesson 2's timeline and naming the siege practice behind verse 9, is 3.3 done properly.
- **The Sukkot paragraph's generosity**, once its translation and sourcing are fixed.
- **The whole quiz is application**: six items, six cases the body does not work. First lesson in the
  course to manage 6/6 against 4.3's "at least half".
- **The option sets are the best-levelled in the course** (spreads of 5 to 15 characters, key longest
  in one item of six) and **keys spread A, B, C, B, C, D**, all four indices, no run. Whatever
  produced that discipline must be kept and extended to stance.
- **The explanations teach the wrong answers**, crediting distractors for the half they get right.
- **Nobody is told who wrote a psalm.** Given how easily this lesson could have said "David wrote
  Psalm 13", the restraint is deliberate and should be kept when the superscription paragraph is
  added.
- **Every body quotation is verbatim NET2**, verified word for word by two reviewers independently:
  Proverbs 26:4 to 5, 22:6, 3:9 to 10; Psalm 19:1 to 2, Psalm 13 entire, 42:11, 22:1, 22:22, 51:5,
  137:1 and 8 to 9; Ecclesiastes 1:2 and 12:13; Job 42:7 and 15:20; Romans 12:19; Psalm 114:4. **The
  ESV survivals are in the quiz and in three incidental paraphrases, not in the body.** Do not
  "correct" the body.
- **All five outline misconceptions shipped, plus a sixth.** First complete misconception list in
  this course.
- **No sneering at any tradition and no strawman of a critical position anywhere.** The failures
  toward Jewish, Catholic, Orthodox and critical readers here are failures of **omission**, which is
  a different and more tractable problem than lessons 3 and 4 had.
- **Zero em dashes, zero en dashes, zero banned vocabulary.** Fifth lesson running.

### Unverified in this environment

Both BibleProject running times and video IDs (youtube.com blocked). The Psalms Scroll photograph,
its alt text and the "nine centuries" caption claim (Commons blocked). Hayes's lecture 21 quotations
(oyc.yale.edu blocked; recorded in `SOURCES.md` from the transcript). Fee and Stuart's page-level
wordings, including the three over-long quotations at L5-F10. Lowth 1753, Kugel 1981 and Gunkel 1933
beyond what search confirms. The *hebel* count of 37 against 38.

### Resolutions applied, 2026-09-06

Applied in a single fix pass on `lessons/05-poetry-psalms-wisdom.md`, with corrections in
`research/SOURCES.md` so later lessons do not inherit them, and one one-word fix in
`lessons/01-finding-your-way-around.md`. `npm run validate` exits 0 and **this lesson's two warnings
are gone**. Zero em dashes and zero en dashes. Frontmatter parses; six quiz items, each a mapping
with q, four options, answer and explain; 15 block openers and 15 closers. Body grew from about
6,800 words to about 10,300.

**Blocking.**

- **L5-B1.** The unhidden answer is gone. The Psalm 13 gap is now a single `:::predict`, and **the
  giveaway is out of the stem**: it no longer calls verses 3 and 4 "the petition" before asking which
  elements they are, and it asks for three things (the elements, the request, the stakes) rather than
  one. "Here is mine" is gone.
- **L5-B2.** Every poetic line in every block quotation now ends with two trailing spaces, so marked
  emits `<br>` and the poems render as lines. Verified by running marked with the project's own
  options. 44 lines fixed; the nine without trailing spaces are attribution lines, which should not
  carry a break. **The general fix belongs in the shared files and is filed below**, because lesson 6
  has 23 affected lines and every lesson that quotes poetry has some.
- **L5-B3.** All six ESV wordings in the quiz replaced with NET 2nd edition and tagged, plus the NIV
  Proverbs 16:3 in the body, which now gives the NET wording **and says that Fee and Stuart quote it
  in the NIV**, and the two "in most translations" paraphrases at Proverbs 10:1 and 15:1, which are
  now quoted directly from the NET. Psalm 59:7's "swords in their lips", which is ESV and is not in
  the NET at all, is replaced by Psalm 57:4's "tongues are sharp swords", which is. Footnote 1 no
  longer claims a bible.org API fetch and now lists every passage quoted including the quiz.
  **`SOURCES.md` corrected at source**, with the original entry kept so the error is traceable, and
  its stale verse count deleted.
- **L5-B4.** The false sentence is gone. The lesson now says lament is the largest *single* type,
  larger than any one kind of praise, and then says explicitly that the praise categories added
  together outnumber it, so the Psalter is not mostly complaint. **The chart now draws the two
  categories it previously omitted**, hymns of praise (16) and celebration and affirmation (28), so
  the reader can check the claim on the picture, and the caption says the laments bar is drawn at the
  floor of 60 because the source gives no exact number.
- **L5-B5.** Each of the seven types now carries a **test the reader can apply** rather than a bare
  list of numbers: is the trouble present, is it past, is there an occasion at all, and so on. **Fee
  and Stuart's five thanksgiving elements are now taught in the body**, worked on Psalm 138 as they
  work them, so Q6 no longer grades against a pattern introduced in its own answer. The lesson names
  the tense test as the one the reader will use most. **Both lookup items are gone**: Q1 and Q6 were
  replaced with psalms the body does not classify.
- **L5-B6.** Every objective now has teaching, practice and a quiz item. Imagery gets a new
  `:::checkpoint` on Psalm 18:2's seven images. Classification gets the tests above plus the fresh
  Psalm 6 item. **Job gets a `:::checkpoint`** on Job 15:20 in Eliphaz's mouth, which also carries the
  Elihu failure case. The imprecatory psalms get the new Psalm 137 predict and a rewritten Q5.
  Objective 4 was split into two so that Job and Ecclesiastes are one objective and the imprecatory
  psalms another, and objective 5 now asks the learner to state the **strongest objection** and how
  Christians have answered it differently, which is what the lesson now teaches.
- **L5-B7.** Deuteronomy 32:35 is quoted in the NET ("I will get revenge and pay them back"), the
  familiar wording is attributed to **Paul at Romans 12:19** where it belongs, and "which Deuteronomy
  32:35 gives to Israel" as a command is gone. **"Paul's instruction and the psalm are the same
  instruction" is gone**, replaced by "our reading of the connection is... That's a reading, not
  something the psalm says about itself." Q5's explanation no longer says "what Deuteronomy 32:35 and
  Romans 12:19 require".
- **L5-B8.** The chart is redrawn: viewBox 360 to **344**, one column, every label font-size 15 or 16
  rendering at **14.3 to 15.3px** on a 360px phone against 8.2 to 10.9px before. **No `<g>` carries a
  fill or a font-size and no fill or stroke is hardcoded anywhere**; the `#fff` in-bar label is gone
  because every count now sits in the label outside its bar. A `<desc>` was added and
  `aria-labelledby` names both title and desc. `font-family` is `inherit`.
- **L5-B9.** Ten in-body links added, so every "open this passage" instruction is reachable,
  beginning with the lesson's own first line. Sefaria links for both JPS 1917 quotations; the Hayes
  lectures are linked by number in Go deeper.
- **L5-B10.** Contractions raised from one real instance to **126** in the body, and the quiz
  frontmatter, which had zero in 1,685 words, now carries them throughout its explanations.
- **L5-B11.** `minutes` 45 to **125**, inside the reviewers' measured range of 105 to 140 and matching
  the course's calibration. The exercise's per-task times are stated.
- **L5-B12.** A new paragraph gives the Psalter's living liturgical use in three traditions: the
  synagogue (Ashrei three times daily, Hallel at the festivals, the psalm of the day, Psalm 30 at
  shacharit), the Rule of St Benedict and the four-week Liturgy of the Hours, and the Orthodox twenty
  kathismata. **And the numbering warning is now given before the reader is sent to look anything
  up**: the Greek and Latin psalters run one lower from about Psalm 10 to 147, so this lesson's
  Psalm 51 is their Psalm 50.
- **L5-B13.** "150 in the Hebrew numbering, which Protestant and most modern Catholic Bibles follow",
  with **Psalm 151** named and the observation that 11Q5, the manuscript in the lesson's own
  photograph, carries it in Hebrew. "Three books in a **Protestant** Old Testament", with **Sirach and
  the Wisdom of Solomon** named as the two more that Catholic and Orthodox Bibles carry, and Sirach
  identified as the closest ancient relative Proverbs has. **Wisdom of Solomon 3:1 is now named in
  Q4's explanation** as the answer another canon gives to the problem Ecclesiastes 9:5 poses. The
  YouTube-sourced "about a third" proportion is replaced by Fee and Stuart's figure from
  `SOURCES.md`, with a footnote saying no exact poetry figure is asserted.
- **L5-B14.** The Jewish reader is heard rather than described. **Psalm 19:8 is quoted in JPS 1917**
  with a Sefaria link, as what praying the psalms sounds like from inside the tradition whose book it
  first was. **Ecclesiastes 1:2 is quoted in JPS 1917** in the Sukkot paragraph, which fixes the 4.7
  breach of characterising a Jewish liturgical act by quoting a Christian translation. The book is
  called **Kohelet** there. ***m. Yadayim* 3:5** is cited for the rabbis' own dispute over whether it
  belonged, which replaces "that he is there on purpose is not argued" with something true and more
  interesting. **The Psalm 22 exercise item now carries the three-way sort**: what history
  establishes, that a Jewish reader reads it as complete without a second fulfilment, and what we
  hold by faith, on the model of lesson 4's Isaiah 7:14. Hebrew versification is explained in the new
  superscription callout.
- **L5-B15.** The imprecatory section now states the objection at full strength in its own
  subsection: grant every mitigation, and the psalm still asks God to bless the man who kills babies.
  **C. S. Lewis's "devilish"** is given, and **the Liturgy of the Hours' omission of Psalms 58, 83 and
  109 and of 137:7 to 9** is named with its actual pastoral reason. The lesson says which side it
  takes and that Christians who pray the Psalter daily have landed differently. **Q5 option A was
  rewritten** so it states the omission position as its holders state it rather than as "an older and
  lower stage of religion", and its explanation says outright that a reader who omits these psalms is
  not being unfaithful. The misconception entry was rewritten to match.
- **L5-B16.** Two `:::checkpoint` blocks of model answers now follow the exercise, covering all four
  tasks. **Exercise task 1 no longer locates and quotes the turn it asks the reader to find**, and
  task 2 was moved from Proverbs 3:1 to 10 to **3:1 to 8**, so it no longer sends the learner to
  verses the Proverbs 3 checkpoint has already worked and concluded.
- **L5-B17.** All six contested claims are now labelled. The Ecclesiastes frame: the lesson states
  that what the frame *does* with the voice is the live question, names **Michael Fox** with Provan on
  the other side, and says "we read the frame as governing, and you should know we hold that rather
  than found it". **Q4's key no longer turns on the contested half**; it reads "who is speaking comes
  first". The manufactured consensus is gone, replaced by a narrower statement of what both readings
  actually share. The heading "the counter-voices" is now "and what they do to Proverbs", and the
  claim is attributed to Longman as the reading this course takes. "It is the verdict of the book of
  Job" is now "that's how we read Job 42:7", with a parenthesis conceding that readers differ over
  whether the friends' fault was their theology or their misuse of a form. The translation superlative
  is replaced by a whole short section on the acrostics, which is the honest counter-example.
- **L5-B18.** A new paragraph gives **Gunkel's second half and Mowinckel**: that each *Gattung* had a
  *Sitz im Leben* in the cult, that Mowinckel read most psalms as liturgy before private devotion,
  that this is where "enthronement psalms" comes from, that it is argued, and that it **cuts against
  the lesson's own reading rule**, which is said out loud. **A new `:::callout` on the
  superscriptions** explains what they are, that this lesson omits them, that they are verse 1 in
  Hebrew, and that "of David" may mean author, collection or dedication, so the lesson no longer
  decides that question by silence. Ecclesiastes now gets 1:1 and 1:12's Solomonic voice, the Persian
  loanwords, the majority Persian or Hellenistic date and the traditional attribution, handed to
  lesson 10.
- **L5-B19.** Lesson 1's dangling forward reference is repointed from lesson 5 to **lesson 4**, where
  the Isaiah 53 material actually landed. One word.

**Facts.** F1 the checkpoint now sends the reader to **Psalm 42 and 43 together**, names the third
refrain at 43:5 and Psalm 43's missing superscription as the evidence they are one psalm, and points
out that stopping at 42:11 misses the resolution. F2 Psalm 88's count corrected and Q1 replaced. F3
Q6 replaced. F4 "after seven verses, six of grief and one already asking God to remember what Edom
did". F5 Psalm 94 restored to the corporate laments, in the lesson and at source. F6 **Elihu is now
in the Job checkpoint**, as the case where the rule returns nothing. F7 **the acrostics have their own
section**, using Psalm 119 and lesson 1's Psalm 9/10 case. F8 the false "lesson 9 returns to it" is
gone with the figure. F9 the Sukkot sentence now names the rites the source names and no longer
implies Shemini Atzeret falls within Sukkot. F10 the three over-long Fee and Stuart quotations are
trimmed to the fragments the research records, and **the Kugel paraphrase is attributed to standard
summaries** rather than to a book footnote 6 now states was not opened. F11 the claims beyond the
record are cut or hedged: the *hebel* count now says some commentaries give thirty-eight; "thirty-nine
chapters" is now "chapters 3 to 41"; the 11Q5 caption went with the figure. F12 the video-sourced
statistic is replaced.

**Media.** The Psalms Scroll figure is **removed**, because it taught nothing about reading poetry,
was never referred to in the text, and its caption's substance belonged to lesson 9 and was unsourced
here. Both video running times are cut, following lesson 4's and lesson 9's recorded resolution,
since YouTube is unreachable in this environment. The poetry video's title is corrected to
BibleProject's own, "How to Read Biblical Poetry".

**Voice and pedagogy.** All four "Here is" openers gone; the one remaining instance is mid-sentence.
All five pipeline-vocabulary headings renamed after their content ("Psalm 13, read badly and then
well"; "Proverbs 22:6, the verse that has hurt the most parents"; "Now do it yourself, on Psalm 22,
Ecclesiastes, Psalm 1, and four passages out of order"; ":::exercise Four tasks"). The one-line
morals are cut to two. The six unsourced superlatives are gone. Two of the three rhetorical-question
openers are gone. The wall paragraphs are broken up and the four sentences over 90 words are split.
**Psalm 13 is now quoted with verse numbers**, so the eleven back-references have something to point
at. **A targeted free-recall step was added** before the exercise, which this lesson was the only one
in the course to lack. **The exercise now interleaves**: a new fourth task gives four passages out of
order and asks only which question to ask first, mixing lesson 3's genre question with this lesson's
two. Exercise task 1 no longer says "mark in the margin". Q6's option C no longer rests on a verse the
stem does not quote. **The fake-parallelism distractor template**, which appeared in three items, now
appears once. **Five of six keys were the moderate option**; the replacements give at least two
options in each item the key's own hedging shape, and the absolutes are stripped from the distractors.
Keys now spread **2, 3, 1, 0, 2, 3**: all four indices, no run, no adjacent repeat. Two misconceptions
were added, "Job's friends are quoting Scripture, so their speeches are what the Bible teaches" and
"David wrote the Psalms and they're his diary", and the "violent psalms" entry was rewritten.

### Deliberately not fixed, with reasons

- **The split.** Marked with an HTML comment per BACKLOG 7b, and **the Psalm 137 section was moved up
  above the seam**, where its material belongs, which was the one thing three reviewers said a clean
  split would need. Not renumbered, not held. Fourth lesson in a row.
- **Both BibleProject running times, and the Psalms Scroll image.** Cut rather than corrected, because
  YouTube and Commons are blocked in this environment. Restore the run-times when a session can reach
  YouTube; the image belongs in lesson 9 if anywhere.
- **Fee and Stuart's page-level wordings and Hayes's lecture 21 quotations.** Recorded in
  `SOURCES.md` from the draft-time reading, not re-openable here. Kept as recorded and listed as
  fact-check debt.
- **The *hebel* count.** The lesson now says thirty-seven by Fee and Stuart's count and notes that
  some commentaries give thirty-eight, which is as far as this pass can honestly go without the book.
- **A visual diagram of parallelism.** Two reviewers asked for one, and it is the right idea for this
  lesson. Not done, because the chart slot was spent on repairing the psalm-type chart's truth
  problem, and because the trailing-space fix now makes the poems render as lines, which delivers most
  of the benefit. Recorded for a later pass.
- **Longman and Dillard beyond one Go deeper entry**, and Alter beyond one. Both were added; a fuller
  use belongs where the books are actually the subject.

### Requests for the shared files (added to the list from lesson 4, which is still open)

6. **`site/assets/styles.css` and `scripts/build.mjs`: poetry does not render as poetry.** `marked` is
   configured with `breaks: false` and `blockquote` has no `white-space`, so every quoted psalm,
   proverb and oracle in this course renders as a prose run-on. Lesson 5 works around it with trailing
   double spaces on 44 lines, which is fragile and invisible in the source. The real fix is a
   `:::verse` block in `renderBlocks` plus `white-space: pre-line`, and it would serve lessons 2, 4, 5,
   6, 9 and 10 at once. **This is the highest-value shared-file item of the six**, because it is the
   only one that changes what a learner actually sees.
7. **A lint rule for scripture quoted without a translation tag.** Two lessons running have carried
   ESV and NIV wordings inside quotation marks with no `(NET)` and no version named. A check for a
   `>` block or a quoted phrase followed by a verse reference without a translation tag would catch
   the class mechanically, which is worth more than catching each instance in review.

---

## Lesson 6, "Reading the Gospels, the parables, and Acts" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context. **Verdict: not clean for publish.** About fifty findings, fourteen
blocking. **Eight of the blocking findings are defects already resolved earlier in this same course**,
and three of those were fixed in lesson 5's pass, which this lesson was drafted after.

The lesson has real strengths that must survive: the Augustine section is the fairest treatment of a
position the course disagrees with anywhere in these six lessons, the parable-as-trap mechanism is
genuinely taught rather than asserted, and the drafter flags a secondary-source dependency **in the
learner-facing text** at line 250, which no previous lesson did. Every one of its thirteen body
scripture quotations verifies clean against NET2.

### BLOCKING

**L6-B1. The self-check prints its own answer in plain body text, hitting both flagged signal
phrases at once. Sixth lesson running.** Line 166 "Now do the next step yourself before reading on";
line 168, the next visible line, "**Here's my answer.**" Caught by all five reviewers. L1-V3, lesson
2's line 254, L3-B1, L4-B1, L5-B1, whose fix was written one lesson earlier.
**A second, smaller instance at line 142**: the Luke 18 checkpoint's stem says "Luke tells you the
point in verse 1 (pray and don't lose heart)" and then asks what the one point is, which is the
compounding fault recorded at L5-B1.

**L6-B2. The Chicago Statement is cited three times for genre latitude, never for its limits, with
the wording error corrected at lesson 3's Stage 4 reintroduced inside quotation marks.**
`SOURCES.md` line 148 is explicit and was written for later lessons: "**Any lesson citing Chicago for
genre latitude must cite those limits alongside it, or it over-reads the statement in the direction
its own signatories reject.**" The limits are Article XII and the 1982 Chicago Statement on Biblical
Hermeneutics, Article XXII. Grepped: "XXII" 0, "1982" 0, "Hermeneutics" 0.
Three further defects on the same source. **(a)** Lines 98 and 359 quote "the topical arrangement of
**material**"; the same `SOURCES.md` entry records the correction to "**materials**", plural, made at
lesson 3. **(b)** Q3's explanation grades as correct that compressing a message delivered through
agents into a face-to-face exchange is "the kind of variation the Chicago Statement itself allows
under 'variant selections of material in parallel accounts'". That clause is about each evangelist
*selecting different material*. Compression is Licona's category and was itself the subject of a
public inerrancy quarrel; the lesson enlists the signatories, in a quiz key, for a move a substantial
part of that constituency rejects. **(c)** Source 3 sends the reader to the ETS archive, which
`SOURCES.md` 148 records as returning 404, and gives no link at all.

**L6-B3. Objective 1 is taught, never modelled, never practised, and tested cold. Sixth lesson
running, and the worst instance yet.** "Read one event across four portraits without forcing them
into one." The four portraits get four one-line characterisations (88 to 92). The Temple cleansing
(96 to 100) is five sentences with **not one word of John 2 or Mark 11 quoted**. The exercise is one
parable task and one Acts task. The only place a learner compares Gospels is Q3, on two passages they
have never opened, which also quietly narrows "four portraits" to two. The previous five instances of
this defect at least modelled the skill before testing it.

**L6-B4. Allegorising is taught entirely in the past tense, and no living tradition is named. Fourth
recurrence of an explicit standing instruction.** Grepped: "Catholic" 1 and "Orthodox" 1 (both in the
Acts 8/10/19 paragraph, on a different subject), "Catechism" 0, "four senses" 0, "figural" 0. Line
120 "For most of church history the parables were read as allegories"; line 138 "be fair to the **old
readers**". `SOURCES.md` line 160: "**No lesson may list them as beginners' errors without saying
that they are the fathers' method and are normal Catholic and Orthodox practice today**", and it
notes this is the second time the point has had to be made. It is now the fourth (L2-N9, L3-N5,
lesson 4, here), in the one lesson where allegory is the actual subject and where misconception 2 is
"the parables are allegories with a key".
Compounding: line 138 states the grammatical-historical rule flatly as *the* rule, which is precisely
what the four-senses tradition denies as the only rule, asserted as settled in the direction of the
course's own hermeneutic and unlabelled.

**L6-B5. "Draws its leaders from a hat" mocks a living church's current practice, in the author's
voice.** Line 208. **The Coptic Orthodox Church elects its Pope by the altar lot**, drawn by a
blindfolded child after the liturgy, most recently for Tawadros II in 2012; the Moravians used the
lot for calls for two centuries. These are not hypothetical over-appliers of a rule; they have a
reasoned account of the lot as handing a choice to God rather than to a majority, and quiz Q2 grades
them wrong without letting them speak. 3.3 and 3.7. The lesson is otherwise scrupulous about naming
who disagrees (line 210 does it well), which makes this the one place it does the opposite.

**L6-B6. "Irenaeus's fourfold Gospel predates most of them" is false, and the sentence containing it
contradicts itself twice.** Line 326. Irenaeus wrote *Against Heresies* c. 180 and **names a Gospel
of Judas in Book 1 of that same work** (1.31.1, the Cainites "produce a fictitious history of this
kind, which they style the Gospel of Judas"), verified. Thomas is normally dated c. 140, Peter
c. 150. So the fourfold argument postdates most of the texts listed and demonstrably postdates one.
The same sentence says the non-canonical gospels are "**on every scholarly dating**, later than the
four" and then concedes in its own parenthesis "most scholars put it in the second century", and
three sentences later links Martin's Yale lecture 8 as "the strongest case for taking Thomas
seriously" — a lecture arguing some of its sayings look more primitive than the canonical ones. A
real minority (Koester, Patterson, DeConick's earliest layer) dates a core of Thomas to the 50s to
70s. Contested claim asserted as settled, in the direction that favours the course, refuted by the
lesson's own footnote.

**L6-B7. Two quiz keys assert contested claims as settled, and one marks a real conservative position
wrong.** **(a)** Q4's key says every Gospel was written within about seventy years of the crucifixion
"**on any scholarly dating**", and line 318 says "the latest date **anyone serious** gives for any
Gospel is the mid-90s". The mainstream range for John runs to about 110. `SOURCES.md` contested
question 3 says only "within *about* seventy years"; the lesson tightened a hedge into an absolute
and made the absolute a quiz key. The body itself scopes it correctly at line 260 ("on either
dating"). **(b)** Q4 marks option D wrong because "Carson and Moo date John after 70", but Carson and
Moo are not the conservative camp: **Robinson, cited approvingly at line 254, dates the whole New
Testament before 70**, and Wallace, Morris and Wright argue for a pre-70 John. The lesson treats one
textbook as the whole side. L4-N7 one lesson later, in the other direction.

**L6-B8. Paul's death is dated "around 62", which is wrong and destroys the argument it appears in.**
Line 252. 62 is the end of the two-year house arrest of Acts 28:30; Paul's death is conventionally
c. 64 to 67, after the Great Fire. And the error is self-defeating: line 250 prints Carson and Moo's
**"mid-60s" for Acts**, so on the lesson's own figure Acts postdates a death it is faulted for not
mentioning. The lesson prints an argument that undercuts its own date and says nothing.

**L6-B9. The chart is invisible to the validator through a third distinct route, and loses its axis,
its year scale and all 21 labels on the dark theme.** Lines 266 to 312. The fills and sizes are
declared in an inline `<style>` block (`.lbl { font: 11px …; fill: #333 }`, `.sm { … fill: #666 }`),
and `scripts/build.mjs` matches `fill=` and `font-size=` **as attributes on `<text>`**. So
`npm run validate` reports **one** hardcoded fill (the `#777` rect at line 293) when the true count is
21, and **zero** undersized labels when all 21 are undersized. Line 275 is also the `<g>` wrapper case
(`<g class="sm">` inheriting `fill:#666` to eight axis labels).
Sizes: 10px and 11px in a `0 0 360 250` viewBox at 360px phone width (content 328px, scale 0.911)
render at **9.11 and 10.02px** against the 14px floor. No `<desc>`. The caption keys the series **by
colour alone** ("Red bars… Navy bars… Grey"), and both those tokens flip in dark mode, so both names
are false for half the readers.
This is the **fifth** SVG failure in this course the linter could not see, and the third distinct
mechanism: lesson 3 used `fill="#ffffff"`, lessons 4 and 5 used `<g>` wrappers, lesson 6 uses CSS.
**The chart's data is sound.** Every bar was checked against its 4px-per-year mapping and all seven
match their cited ranges. Redraw the drawing, keep the numbers. One substantive quibble: critical
Mark is drawn as an 8px band (69 to 71) against conservative Mark's 52px, which makes Ehrman's hedge
look like a point estimate; widen to 68 to 72.

**L6-B10. Three of six quiz items are lookups, and quizzes are open book.** Q2 (Acts 1:26) is worked
in full at 200 to 208 with the conclusion stated in the item's own words. Q6 (Acts 8, 10, 19) is
worked in full at 210, including the framing option B turns on. Q4's key is printed twice, at 260 to
262 and again at 318. That leaves Q3 and Q5 as genuine application, with Q1 a notch below fresh since
all three of its distractors are refuted almost verbatim at 138 and 140. 4.3 requires at least half.

**L6-B11. The exercise has four written tasks and no model answers, gives away its own hardest
question, and assigns material the lesson never teaches. Sixth lesson.** No `:::checkpoint` follows
the exercise; everything after 338 is Connections. L2 (two missing), L3-V9 (four), L4-D7 (all),
L5-B16 (all), each fixed the same way.
**It gives away its hardest question:** task 1 asks the learner to decide whether Jesus explaining
the sower licenses allegorising the mustard seed, and line 140 has already answered it.
**It assigns untaught material:** task 1 sends the learner to **Mark 4:10 to 12**, where Jesus says he
speaks in parables "so that although they look they may look but not see… so they may not repent and
be forgiven". That is the hardest verse in the New Testament about the form this lesson teaches, it
sits in tension with the trap mechanism, and the body never mentions it. The Go deeper entry even
advertises that the video covers "why parables reveal and conceal", so the tension was known and
outsourced to an animation.

**L6-B12. Zero in-body links in the teaching prose, against nine "open this passage" instructions.**
The file's only two Markdown links sit inside the `:::video` caption at line 103, **which is exactly
what satisfies the validator's no-links check**, so lesson 6 produces no warning while lesson 7 does.
Unlinked: Luke 15:11 to 32 ("Read it now, all of it", the most explicit reading command in the
lesson), Luke 18:1 to 8, Acts 2:42, Acts 5:4, Mark 4:1 to 34, Acts 6:1 to 7, John 2 and Mark 11, both
Q3 passages, and "you can read them" of Thomas, Peter, Judas and Mary with no pointer to any of them.
Every practice task in the lesson is blocked for a reader without a Bible to hand. L1-V5, L3-V6,
L4-B10, L5-B9, sixth time.

**L6-B13. `minutes: 50` against a measured 95 to 125.** Four reviewers measured independently: 95 to
120, 91 to 96, 106.5, and 124. The lesson commands about 71 verses of external reading, embeds a
video whose caption effectively assigns a second, and sets four written tasks. Sixth lesson running
to understate by more than half.

**L6-B14. Burridge is the authority for the lesson's central genre claim and appears nowhere in
`SOURCES.md`.** Line 78, "The best current answer is that they are ancient biographies with a
theological aim", with source 1 attributing it to "Richard Burridge, *What Are the Gospels?* (1992),
**now the standard view**". Grepped `SOURCES.md`: Burridge, zero hits. The book was never researched,
is not recorded as read or unread, and "now the standard view" has no support in the research file.
This is the cited-but-never-read defect in its purest form, and it is load-bearing, since it founds
objective 1. Source 2 does the same smaller thing, citing Carson and Moo for Markan priority when
`SOURCES.md` 17 and 198 both record the book as never opened.

### Facts wrong

**L6-F1. ESV survival in a quiz explanation, in quotation marks, untagged.** Line 49: the leaders
"perceived that he had told the parable against them". **NET Mark 12:12: "because they realized that
he told this parable against them."** "Perceived" is ESV and KJV. `SOURCES.md` 206 names Mark 12:12
among the passages read in the ESV at draft time with the standing re-fetch instruction. This is
L5-B3's exact shape one lesson later: **body converted, quiz not.** Mark 12:12 is also absent from
source 15's passage list.

**L6-F2. Source 15 claims a fetch that did not happen.** "read via the bible.org API". `SOURCES.md`
206 records ESV from BibleGateway, and `SOURCES.md` 248 and 291 record that host as returning 403.
Identical to L5-B3's footnote finding. **Important for the fix pass: every body quotation is
nonetheless correct NET2** (Luke 15:1 to 2, 15:28 to 32; John 21:25; Mark 1:15, 13:2; 2 Samuel 12:7;
Luke 10:29, 36 to 37; Acts 1:26, 2:44 to 45, 4:34 to 35), verified independently by two reviewers.
The text is right and the bookkeeping is wrong. Do not "re-fix" the body.

**L6-F3. Two further ESV-shaped wordings in prose.** Line 143, "a judge who fears neither God nor
man" (NET Luke 18:2: "who neither feared God nor respected people"); line 335, "seven men of good
repute, full of the Spirit and wisdom" and "give up preaching to serve tables" (NET Acts 6:3: "seven
men who are **well-attested**"; 6:2: "**wait on tables**"). Neither is in quotation marks, so neither
breaches 4.7, but both are debris of the class `SOURCES.md` 194 warns later drafts to expect.

**L6-F4. Acts 4:34 drops a comma** inside a block quotation (line 196): NET has "among them, because".

**L6-F5. Dodd is not where one-point parable reading begins.** Go deeper, line 353. **Adolf Jülicher,
*Die Gleichnisreden Jesu* (1888 to 1899)** is; Dodd built on him and added realised eschatology.
Aggravating: `SOURCES.md` 202 records only the SCJR reproduction of Augustine as read, not Dodd, so
this is a characterisation of an unopened book and it is wrong.

**L6-F6. "The cock crowed six times" misstates the harmonisation.** Line 324. Lindsell's proposal in
*The Battle for the Bible* (1976) was that **Peter denied Jesus six times**, three before each cock
crowing.

**L6-F7. Ehrman's textbook "is the set text at Yale", present tense, and "and many other
universities" is unsourced.** `SOURCES.md` 28 records it from **Martin's RLST 152, Spring 2009**;
Martin is emeritus and the course is archived. `SOURCES.md` 168's standing instruction covers this
class, and lessons 1 and 4 were both faulted for it.

**L6-F8. Carson and Moo's printed ranges contradict the summary drawn from them.** Lines 250 and 252:
Acts "mid-60s" and Luke "mid or late 60s", then "so Acts is early, **Luke is earlier than Acts**".
On the printed ranges Luke can postdate Acts.

**L6-F9. Markan priority is offered as the mechanism for something it cannot explain.** Line 92: it
is "the reason the same parable can carry a slightly different emphasis in Matthew and Luke". A
parable in Matthew and Luke but not Mark is double-tradition material, which needs Q or Farrer.
"Q" appears zero times in the file. The lesson's "you don't need the details" scoping is honest, so
this is a mechanism error rather than a neutrality failure.

**L6-F10. Forty en dashes (U+2013).** `scripts/build.mjs` line 139 checks only U+2014, so the
validator cannot see them. Lessons 2, 3, 4 and 5 all ship at zero of both after review; lesson 1 has
8. All 40 are verse ranges, decade ranges or "2 Corinthians 8–9"; none is punctuation, so a straight
swap to the course's " to " convention is safe. Nine are in the quiz frontmatter and eleven in
`## Sources`.

**L6-F11. "Five minutes of animation"** (line 103) is an unsupported running time. `SOURCES.md` 204
verified the ID, title and channel by oEmbed, which returns no duration. The parables video's "(5:42)"
**is** verified at bibleproject.com and should stay. Lessons 4, 5 and 9 all cut unverified run-times.

**L6-F12. "History establishes… when it was written"** (line 230) is flatter than the body's own
hedge twelve lines earlier ("around 110–130"). Papias's date is itself argued, c. 95 to c. 130.

### Depth: researched and unused

**Köstenberger and Patterson's hermeneutical triad**, which `SOURCES.md` 14 names as the check on
the *genre* lessons, deferred at lesson 3 "for the lesson 4 draft", missed at lesson 4, and now
missed at the third genre lesson. **Martin RLST 152 lectures 9 and 10** (Luke and Acts), recorded in
this lesson's own draft-time block; Go deeper cites 5, 6 and 8 only, so the critical-side lecture on
Acts was researched for this lesson and dropped, in a lesson half of which is Acts. **Brown's Catholic
critical introduction**, so the critical mainstream is given entirely through Ehrman in a lesson with
a Catholic-facing obligation. **Luke 1:1 to 4**, paraphrased at line 76 where quoting it would carry
objective 1's mechanism in the evangelist's own words. **Acts 5:4**, researched and never quoted
though the predict at 186 and the verdict at 206 both turn on it. **Acts 4:32**, the verse that
actually says "everything was held in common", dropped from a quotation of 4:34 to 35 in the section
about it. **Fee and Stuart's nine narrative errors**, corrected at lesson 3's Stage 4 with the note
that misappropriation and false appropriation "are the two that matter most to a narrative lesson":
this lesson uses both concepts and names neither. **The BibleProject parables video**, verified with
its run-time, buried in a caption about a different video three sections before the parables material.
Good news for the fix pass: **the lesson does not carry lesson 3's eight-item error**, because it
does not list the errors at all.

### Voice and pedagogy

Zero em dashes, zero banned vocabulary, zero banned sentence shapes, sixth lesson running. Body
contractions at 1 in 65 are inside the course band and are **not** a finding. **The quiz frontmatter
has 6 or 7 in 1,462 words**, six explanations averaging 100 words with almost none between them,
which is the third consecutive lesson faulted for exactly that block.
Four pipeline-vocabulary headings, fifth recurrence, and "the mechanism" in the body at 108. Three
"Here is" openers. Two rhetorical-question openers where one is allowed. Six unsourced superlatives,
worst being "the most read part of the Bible" (unsourced anywhere) and "anyone serious". One
over-promising closing: line 66 promises "At the end we'll settle who wrote the Gospels and when",
and line 264 explicitly does not settle it. Four one-line morals, which is a real improvement on
lesson 2's six and lesson 4's twelve and should be credited; two of the four earn it.
**Wall paragraphs:** line 210 at **208 words** carries the lesson's most contested content (three Acts
passages, the Pentecostal and charismatic reading, the Reformed, Lutheran, Catholic and Orthodox
reading) in one block; line 252 at 140 words gives the conservative case's three arguments as a
run-on while the critical case gets a subheading, a block quotation and a chart, which
under-presents the course's own side. Line 162 is a 123-word single-line blockquote with two speakers
that the following prose reads back into.
**Neither the figure nor the chart is referred to in the running text**, which is L4-V7.
**The exercise never interleaves**, fifth lesson running; every part announces its tool.
**The outline's spaced review did not ship as retrieval**: lesson 3's rule is restated *to* the
learner at 178 rather than asked of them, and the covenants get one sentence at 86, with "Abraham",
"Sinai" and lesson 2's five covenants appearing zero times in the body.
**Objective 4 bundles dating and authorship**, and the authorship half is taught at length, never
practised and never tested.
**Quiz mechanics:** distractor quality is high throughout, every wrong option is a real
half-understanding, and every explanation credits the distractor for the half it gets right. Option
lengths are levelled to within 3 to 17 characters. Against that, the key is longest in three of six
(lesson 5 managed one of six), indices 0/2/3/1/1/2 carry an adjacent repeat at Q4 and Q5, and two
stance leaks remain: Q6's key is the only option that says a question is argued, and Q3's key is the
only one that both concedes a difference and denies error.

### Split seam

Two reviewers proposed different seams and the disagreement is worth recording. **Before
`## Reading Acts: history first` (line 176)**, after the Rembrandt, is the better one: A and B are one
continuous argument (a Gospel selects and arranges; a parable selects a target; both are "hear it as
the first hearers did"), and the reader stops at a real resting point with the older brother outside
the party. The pedagogy reviewer would additionally move the dating section (216 to 314) **up** into
the first half, leaving Acts as a thin second half needing new practice; the voice reviewer would
leave dating with Acts, on the ground that the strongest conservative dating argument is that Acts
ends with Paul alive, which lands harder immediately after a section inside Acts. **Recorded
unresolved.** Mark the seam at 176 and let the renumbering pass decide, since it will have all twelve
lessons in view.

### What is working, and must survive the revision

- **The opening (60 to 64).** Luke 15:1 to 2 quoted, then "Most people who know the story of the
  prodigal son have never read those two verses, and it shows." Best hook in the course.
- **The parable mechanism (108 to 116).** Nathan and David is a mechanism *demonstrated*: the reader
  watches David judge freely and get caught, and only then is the rule stated. Source 4 also
  discloses that the trap comparison is "this lesson's framing" rather than Fee and Stuart's.
- **The Augustine section (120 to 138) entire.** The allegorical reading given at full strength and
  admiringly before it is refused, the cost named as blunting rather than heresy, and the honest
  caution the other way at 140 ("Seed, soil, a landowner, a father with two sons: yes. Two testaments
  on a shepherd's shoulders: no"). The fairest treatment of a disagreed-with position in these six
  lessons; it needs one sentence added, not rewriting.
- **The prodigal son reading (146 to 170)**, especially "Notice he can't even say the word
  'Samaritan'" at 136 and the story stopping on an unanswered question.
- **"Reading a Gospel by its genre is not a concession to critics. It's what the inerrantists say
  they do"** (98), arguing the genre point from the inerrantists' own document.
- **The Acts 8/10/19 paragraph (210) as content.** Both readings named, both called serious,
  Pentecostal and charismatic readers named in their own words and Reformed, Lutheran, Catholic and
  Orthodox in theirs, and the test explicitly refused as a way of settling it. **This is the model
  the allegory section should be rebuilt to.** It needs breaking into paragraphs, not rewriting.
- **The Acts 2:42 checkpoint (212).** "All of them, but not because Acts 2:42 reports them." The best
  single teaching move on the page.
- **Three sources not read, three disclosed correctly and unprompted**, one of them in the
  learner-facing text: line 250's "I've taken those ranges from a published transcription of their
  table, not from the book itself", source 5's "The Latin original was not consulted", source 7's
  note that Fee and Stuart's Acts principle is paraphrased. **First time in this course a drafter has
  flagged a secondary-source dependency in the body.** Which is why L6-B14's Burridge lapse stands out.
- **The Acts "before c. 62" trap was avoided**: line 250 prints the Naselli transcription's "mid-60s"
  rather than the earlier recalled range, exactly as `SOURCES.md` 198 asked.
- **Robinson used honestly (254)**, including "because it matters that he's not a conservative" and
  "Most scholars didn't follow him".
- **Line 264**: "its case for the Gospels' reliability doesn't depend on winning the dating argument.
  A Gospel written in 80 by a second-generation Christian drawing on eyewitness tradition is still a
  first-century source about a first-century man." Keep verbatim.
- **The three-kind sort is present and consistent** at 230, 264 and 324.
- **All five outline misconceptions shipped, with three mirrors**, including "Acts is only history"
  and "every difference is easily harmonised", which are the halves a Christian drafter usually
  skips. Second complete list in a row.
- **Go deeper cites Martin RLST 152 by lecture number**, satisfying outline convention 8 for the
  first time in this course.
- **The Rembrandt figure.** Alt text describes the picture without smuggling in the reading; the
  caption carries artist, title, date, collection, the public-domain reason and the source, and
  hedges Rembrandt's intent. The media standard for the course.
- **Every body scripture quotation is verbatim NET2**, verified independently by two reviewers.
- **No poetry is quoted anywhere in this lesson**, so the trailing-space workaround does **not** apply.
  All 23 content blockquote lines are prose and 11 of them are attribution lines. `SOURCES.md`'s
  earlier "lesson 6 has 23" was a blockquote-line count and has been corrected at source.

### Unverified in this environment

Carson and Moo's ranges for Acts and Matthew (Naselli 403, book never opened) — the course's largest
single item of fact-check debt. The Rembrandt Commons file and licence template (Commons 403). Both
BibleProject running times (YouTube 403). Dodd 1935 chapter 1 (book never opened, SCJR PDF 403).
Fee and Stuart ch. 6's exact wording on historical precedent, which source 7 correctly says is
paraphrased. Jülicher's priority over Dodd, and Blomberg's and Snodgrass's positions on one-point
reading, rest on web search rather than a fetched source.

### Resolutions applied, 2026-09-06

The lesson was rewritten in full rather than patched, because six of the fourteen blocking findings
were structural (an objective taught but never modelled, an exercise with no model answers, a chart
that had to be redrawn, a dating section whose two halves were unbalanced). `minutes` went from 50 to
**105**, four of six quiz items were replaced and the other two repaired, and the file went from two
links to **thirty**. `npm run validate` exits 0 with no warning of any kind on this lesson, which is
the first lesson in this course to reach that.

**L6-B1, self-check printing its own answer.** "Now do the next step yourself" and "Here's my answer"
are gone. The prodigal-son step is a `:::predict Question` block whose body is the hidden answer, and
the Luke 18 checkpoint's stem no longer states the point it asks for: it now gives the learner only
Luke 18:1 to 8 with a link, and asks what Luke's verse 1 framing rules out. Sixth lesson, sixth time
this fix has been written; filed again as a pipeline request.

**L6-B2, the Chicago Statement.** Article XII is now quoted alongside Article XIII, and the 1982
*Chicago Statement on Biblical Hermeneutics* Article XXII with it, so the genre point is made from
the document's own limits rather than from half of it. "Material" is "**materials**" in both places.
Q3 was rewritten: its key no longer claims compression is what Article XIII licenses, and the
explanation now says plainly that compression is disputed among people who all hold to inerrancy,
naming **Licona and Geisler's 2011 exchange** as the live quarrel. Source 3 links a copy that
resolves and says which, with the ETS 404 noted.

**L6-B3, objective 1 taught but never modelled.** The lesson now works the four openings before it
asks for anything: Mark 1:1, Matthew 1:1, Luke 1:1 to 4 (quoted in full, which also resolves the
"researched and unused" finding) and John 1:1, each linked, each with one sentence on what the
opening commits its author to. A `:::checkpoint` then asks the learner to do the Temple cleansing
comparison themselves with John 2 and Mark 11 both linked, and hides a model answer that keeps the
four accounts four rather than resolving them. Q3 is no longer the first place the skill is used.

**L6-B4, allegorising in the past tense.** A paragraph on *Catechism* 115 to 118 now sits inside the
Augustine section: the four senses named, the literal called the foundation on the *Catechism*'s own
terms, and the plain statement that figural reading is normal Catholic and Orthodox practice today,
not a discarded method. Line 138's flat statement of the grammatical-historical rule is now labelled
as the rule this course teaches and as one live hermeneutic among others. Fourth time this
instruction has had to be applied; it is now a standing entry in `SOURCES.md`.

**L6-B5, "draws its leaders from a hat".** Replaced. The passage now says the **Coptic Orthodox
Church** still chooses its Pope by the altar lot, drawn by a blindfolded child after the liturgy,
most recently in 2012, and that the **Moravians** used the lot for two hundred years; it gives their
reason (the lot
hands the choice to God rather than to a majority) before disagreeing, and Q2's explanation no longer
grades them wrong without letting them speak.

**L6-B6, Irenaeus.** The false claim is gone. The lesson now says *Against Heresies* is c. 180 and
that Irenaeus **names a Gospel of Judas in that same work** (1.31.1, cited and linked in source 9),
so the fourfold argument postdates most of the texts it is used against and the "they weren't hidden"
point is made from that fact rather than from a false priority. "On every scholarly dating" is gone;
the second-century dating is stated as what most scholars hold, with the early-core minority stated
as a real position and source 15 recording that Martin's own summary supports it. The minority's
names (Koester, Patterson, DeConick) are **not** in the body: at this level they would be four
unfamiliar surnames doing no work, and lesson 8 is where the non-canonical gospels are actually
taught. They are recorded in `SOURCES.md` for that lesson.

**L6-B7, quiz keys asserting contested claims.** Q4 was replaced. "On any scholarly dating" and "the
latest date anyone serious gives" are both gone; the two datings are each scoped to themselves ("on
either of the two datings above"), and the misconceptions section now says explicitly that **some
scholars outside both put John's final form nearer 110**. The conservative side is no longer Carson
and Moo alone: **Robinson's pre-70 whole New Testament** is given its own paragraph and **Bauckham**
is named as the strongest recent statement of the eyewitness case, so no option is marked wrong for
holding a real conservative position. Wallace, Morris and Wright on a pre-70 John are recorded in
`SOURCES.md` but not added to the body, which already carries two named conservative positions and
did not need a list.

**L6-B8, Paul's death.** Corrected to **c. 64 to 67**, with 62 identified as the end of the Acts
28:30 house arrest. The argument it appears in is now stated as the conservative case makes it (Acts
ends with Paul alive and says nothing of his death, which is hard to explain if Luke wrote after it)
together with the objection the lesson's own Carson and Moo figure raises against it, since a mid-60s
Acts sits inside the death window rather than before it. The lesson now says so instead of printing
both numbers and staying silent.

**L6-B9, the chart.** Redrawn. viewBox `0 0 344 420`, thirteen labels at font-size 15 and two at 16,
which at 360px phone width render at **14.3 and 15.3px**, above the floor. No inline `<style>`, no
hardcoded fills: every fill is `var(--navy)`, `var(--oxblood)`, `var(--text-2)`, `var(--gold)` or
`var(--line-strong)`. A `<desc>` was added, each series is labelled in text as well as by colour, and
the running prose now refers to the chart, which was also L4-V7. The data was kept, as the reviewer
asked, with the single change requested: **critical Mark widened to 68 to 72**.

**L6-B10, lookups.** Q2 and Q6 were replaced with items on cases the body does not work, and Q4 with
one that requires holding two datings against a piece of evidence rather than recalling either. Four
of six are now fresh application. Key indices are **0, 2, 3, 0, 1, 3**, no adjacent repeat, and the
key is longest in none of the six.

**L6-B11, the exercise.** Two `:::checkpoint` model answers now follow it. Task 1 no longer asks a
question line 140 has answered; it asks the learner to run the sower's own explanation against the
mustard seed and say where the licence stops. **Mark 4:10 to 12 is now taught** in a short section of
its own that gives the four standard readings and refuses to resolve it, so the exercise no longer
assigns the hardest verse in the New Testament about parables as unseen homework.

**L6-B12, in-body links.** Thirty in the teaching prose. Every "open this passage" instruction now
carries one, including Luke 15:11 to 32, Luke 18:1 to 8, Acts 2:42, Acts 4:32, Acts 5:4, Acts 6:1 to
7, Mark 4:1 to 34, John 2 and Mark 11, both Q3 passages, and the four non-canonical gospels the
lesson says "you can read them" of.

**L6-B13, minutes.** 50 to **105**, at the low end of the four measurements, on the ground that the
split seam is marked and the two halves will be timed separately when the renumbering pass runs.

**L6-B14, Burridge.** The claim is no longer sourced to a book nobody opened. The body now says the
ancient-biography reading is **Burridge's, that it has largely carried the field, and that it is
argued rather than settled**, and the source note says the book was not consulted here and that the
reception claim rests on second-hand evidence. `SOURCES.md` now carries a NOT RESEARCHED entry for
Burridge so no later lesson repeats it. Source 2's Carson and Moo citation for Markan priority now
carries the same disclosure the file already required.

**Facts.** L6-F1: "perceived" is now NET's "**realized**" and Mark 12:12 is added to the source
passage list. L6-F2: the false "read via the bible.org API" note is replaced with what actually
happened, and the body was **not** touched, since every quotation in it verified clean. L6-F3: Luke
18:2 is now "who neither feared God nor respected people"; the Acts 6 paraphrase was cut rather than
re-rendered, since the exercise now sends the learner to the passage instead of characterising it, so
"good repute" and "serve tables" are simply gone. L6-F4: the Acts 4:34 comma is restored. L6-F5:
**Jülicher** is named in the body as where strict one-point reading begins, with Dodd removed from
that role and both recorded in source 4 as unopened, and **Blomberg** is named as the standard modern
qualification (one point per main character), so the rule is taught as argued. Snodgrass is in
`SOURCES.md` and not the body; one named qualifier carries the point. L6-F6: **six denials, three
before each cock crowing**. L6-F7: the textbook is now "the set text for Dale Martin's New Testament
survey at Yale", past tense, with source 10 giving RLST 152, 2009, and both "and many other
universities" and "is widely used" cut. L6-F8: the Luke-earlier-than-Acts inference is dropped, since
the printed ranges do not support it. L6-F9: the false mechanism is gone, and the Synoptics paragraph
now names **Q and the Farrer hypothesis** as the two explanations of Matthew-and-Luke material absent
from Mark. L6-F10: **all forty en dashes** replaced with " to ";
the file is now at zero of both characters. L6-F11: "five minutes of animation" is cut; the parables
video keeps its verified (5:42). L6-F12: Papias is now "scholars argue about", c. 95 to c. 130.

**Depth items now used.** Luke 1:1 to 4 quoted; Acts 4:32 and Acts 5:4 quoted; **Martin RLST 152
lectures 9 and 10** added to Go deeper, so the critical side on Acts is present in a lesson half of
which is Acts; Fee and Stuart's **misappropriation and false appropriation** named as such where the
lesson uses them; the BibleProject parables video linked with its verified (5:42) in the video block
that now sits immediately before the parables section, with a line saying which section it pairs
with, rather than three sections away.
The covenants now come back as retrieval rather than restatement: a `:::predict` asks the learner to
recall lesson 2's five covenants before the Gospels' claim about them is stated, and an Acts predict
retrieves lesson 3's narrative rule instead of restating it.

**Voice and pedagogy.** Four pipeline headings and "the mechanism" gone; three "Here is" openers and
one of the two rhetorical-question openers gone; six unsourced superlatives cut, including "the most
read part of the Bible" and "anyone serious"; the over-promising close at 66 now promises what the
lesson delivers. The 208-word paragraph is four paragraphs, the 140-word conservative-case paragraph
now has the subheading, quotation and equal weight its critical counterpart had, and the 123-word
two-speaker blockquote is broken by speaker. The exercise now **interleaves**: one task withholds
which tool it wants.
On the quiz block specifically, the fault was contraction density, not length: it was 6 or 7 in 1,462
words against a body running about 1 in 50. It is now **38 in 1,978 words, 1 in 52, against the body's
1 in 51**, so the block reads in the same voice as the lesson around it. The explanations got
**longer**, not shorter, averaging 159 words, because each now says what the three distractors get
right before saying where they fail, which 4.3 asks for and which the reviewers credited as this
lesson's strongest quiz feature. Length was never the finding.

**Split seam.** Marked before `## Reading Acts: history first` with an HTML comment recording that
two reviewers proposed different treatments of the dating section and that the disagreement is
unresolved, exactly as the finding asked. Not renumbered, and John was not asked.

### Deliberately not fixed, with reasons

- **The dating section was left with Acts**, not moved into the first half. The voice reviewer's
  argument is the better one: the conservative case's strongest move is that Acts ends with Paul
  alive, and it lands immediately after a section inside Acts. Moving it would also leave the second
  half thin, which the pedagogy reviewer conceded. The disagreement is recorded at the seam so the
  renumbering pass can overrule this with all twelve lessons in view.
- **Köstenberger and Patterson's hermeneutical triad** is still not used, now at the third genre
  lesson running. It is a whole framework, and dropping it into a lesson already carrying four new
  sections would be worse than leaving it. It belongs in lesson 12's method material or in a
  first-half lesson, and it is now carried forward as an explicit debt rather than quietly missed
  again.
- **Brown's Catholic critical introduction** is added to Go deeper but not worked into the body. The
  Catholic-facing obligation this lesson carries is discharged by the *Catechism* paragraph, which is
  on the point actually at issue; adding Brown as a second critical voice would lengthen a section
  that is already the longest in the lesson without changing what the learner does.
- **Carson and Moo's ranges remain fact-check debt.** The book is not open here and Naselli's page is
  403 at the proxy. The lesson discloses the dependency in its own body text, which is the honest
  available move; it stays on the debt list.
- **The Rembrandt Commons file and licence template, and both BibleProject running times**, remain
  unverified for the same reason (Commons and YouTube both 403). The one run-time that is verified is
  the only one printed.

### Requests for the shared files (items 1 to 7 stand from lessons 4 and 5; these are new)

8. **`scripts/build.mjs` should check U+2013 as well as U+2014.** Lesson 6 shipped forty en dashes
   past a clean validate. Rule 7 is about learner-facing punctuation, and the en dash fails it for
   the same reason. One character added to one regex.
9. **The SVG checks in `scripts/build.mjs` need to look past `<text>` attributes.** Three separate
   evasion routes are now recorded in this course: `fill="#ffffff"` on a themed rect, a fill on a
   `<g>` wrapper, and an inline `<style>` block. The style-block case is the worst, because it made
   the validator report 1 of 21 hardcoded fills and 0 of 21 undersized labels. Parsing `<style>`
   declarations and resolving inherited `<g>` fills would close all three.
10. **`minutes` is never sanity-checked.** Six lessons in a row have understated it by a third to a
    half, and each was caught only by four reviewers measuring by hand. A rough estimator over body
    word count, assigned reading and block counts, warning when the declared figure is under half the
    estimate, would catch this before Stage 4.
