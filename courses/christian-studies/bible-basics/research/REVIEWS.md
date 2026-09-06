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
