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
