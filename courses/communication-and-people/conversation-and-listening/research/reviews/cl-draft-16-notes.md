# Lesson 16 "Listening to someone who disagrees with you": notes for reviewers F and P (Tier B split)

File: courses/communication-and-people/conversation-and-listening/lessons/16-listening-to-someone-who-disagrees.md
Body about 4,860 words before Sources (5,620 with them). Minutes 90, measured (first draft measured
125; see "Cuts"). The model's raw figure is about 90.9, so **there is no margin**: anything a fix pass
adds has to come out elsewhere. Contractions 6.4 per 1,000, bold 7.0 per 1,000 (pre-Sources).
Quiz keys: 3,1,2,0,3,0 (D B C A D A), chosen by script: all four positions, no adjacent repeat, not
identical to or a value shift of lessons 01 to 15 as on disk, no run of four shared with lessons 11
to 15, at most two positions matching any lesson (only two sequences in the whole space passed; the
other was 0,1,2,3,2,0, rejected as a visible run). Option spreads 4 to 13 characters; the key is never
the sole longest.
Names: Brigitta, Isidore (body); Petronella, Hildegard, Clemency (quiz). Each grepped clean with
`grep -rlw` against `courses` minus this course's research. No invented places. No chart (decision 19
names none for lesson 16).

## Gates
- **G3 (Gino integrity check): closed, no notice found.** Retraction Watch database (Crossref's full
  CSV release, 72,684 records, current to 19 September 2026): no record for doi
  10.1016/j.obhdp.2020.03.011. Crossref's API: no update-to or updated-by. retractionwatch.com search
  for "Yeomans": no posts. OSF Integrity Audit project (osf.io/rymv8): the 2024 integrity report
  (all items Y; one Qualtrics entry missing from the original download) and the 2024 reproducibility
  report (main-text numbers N for Studies 1 to 3, P for Study 4; mostly rounding, signs, random seeds,
  missing or broken code) both read in full. **Exactly what they say about this paper:** the
  database and Crossref say nothing (no entry); the OSF reports say what is above. So the recipe is
  used (decision 17), with the reproducibility report's result told to the reader. The database's
  entries on other Gino co-authored papers are recorded in SOURCES and **not** mentioned in the lesson.
- **G11 (deep canvassing): closed for Kalla and Broockman 2020** (main text of the eScholarship
  accepted manuscript, not the online appendix). **Not closed for Broockman and Kalla 2016**: the
  author PDF was downloaded and not read; the lesson does not describe it.
- **G14 (Ren and Schaumberg): not attempted**; the lesson does not use the review's disagreement
  claim.
- **Re-read today:** Yeomans et al. 2020 Studies 2 and 4; Retraction Watch's LaCour page; Braver Angels
  (article and "What we do"), Essential Partners "Our Method", MHFA ALGEE page, PON listening page.
  All in SOURCES "Gate closures, lesson 16 (2026-09-26)", appended at the end of the file.
- **Unread line: two things for the orchestrator.** (1) "Kalla and Broockman 2020" should come off
  line 3 (the append does not edit it). The lesson writes the names as "Joshua Kalla and David
  Broockman" and the citation as "Kalla, J. L., and Broockman, D. E. (2020)", so validate does not
  fire either way. (2) "LaCour and Green 2014" stays on the line, since only its abstract was read.
  The lesson describes it only as the abstract (via SOURCES Part E §6.4) and the notice describe it,
  and its Sources entry is "LaCour, M. J., and Green, D. P. (2014)", which the whole-string check
  does not match. **Reviewer F: judge whether naming a retracted paper at abstract level, with the
  read level stated, is acceptable, or whether the entry should be dropped and the paper described
  only through the notice.**

## Scrutinise: Reviewer F (facts, neutrality, safety)
1. **Yeomans et al. 2020.** Check against the PDF (receptiveness.net): the definition; the markers
   (Part E §6.3's quoted list); Study 2 design (238 of 270; three issues; anonymous typed chat of about
   20 minutes, "state and local government executives"); "but not their own self-evaluations"; Study
   4 (771 responders; raters held the opposite view and were blind; "more persuasive by ideological
   opponents"; harder to execute; attrition 17.2 vs 12.6). The lesson says "one group's programme" and
   "single study" for Study 2. The mechanism paragraph says the authors' account is in their
   definition and nothing tests the step between; check that is fair to the paper.
2. **The integrity paragraph.** It says three authors are shared with Huang et al. 2017 (Yeomans,
   Minson, Gino) and gives no reason for either audit. Check "none changes whether a result held" for
   the results the lesson uses (0.29/0.31; −0.08/−0.09 both non-significant; 0.23/0.24; Study 4
   t 7.3/7.4). The report's own caveat that it did not cover inferential conclusions is in SOURCES,
   not the lesson.
3. **LaCour and Green.** The claim sentence ("large, lasting changes ... and that the change spread to
   others") is SOURCES' abstract summary ("large, persistent, contagious"); check it doesn't overstate.
   The retraction is given in the notice's words as Retraction Watch reproduces it; "retracted with
   Green's agreement; LaCour did not agree" matches "with the concurrence of" and "does not agree to
   this Retraction". SOURCES Part E §6.4 attributes the irregularities to Broockman, Kalla and Aronow;
   the page read does not, so the lesson doesn't (Stage 3 note appended).
4. **Kalla and Broockman 2020.** Every figure (230, 6,869, seven locations; three arms; d = 0.08,
   0.08, 0.04; 11 vs 5 minutes), the three quotations, the ITT/CACE sentence, the abortion canvass
   "as reported", and the Paluck-based "norms" sentence in the value section. The lesson says "the
   exchange of stories made the difference" in Position A's paragraph; the authors say they "cannot
   isolate a particular mechanism" and that removing the narratives "significantly reduces if not
   eliminates" the effect. Judge whether Position A's wording is theirs.
5. **Baron et al. 2025** (author PDF): 165, 116 Blue / 49 Red, 59 treated, midline 1 to 2 weeks,
   endline about six months, both quotations, the donation measure, the two-campus Red assignment.
   **Authors are given by surname only** because SOURCES records no first names or initials.
6. **Effect-size arithmetic**: Φ(0.08) ≈ 53% (body), Φ(0.1) ≈ 54% (quiz 5), labelled as the course's
   arithmetic.
7. **Count test on contested 15 ("Both readings").** Position A: canvassing design, workshop
   durability, Braver Angels' own words. Position B: the same papers' numbers, largely the authors'
   own caveats, plus the retraction; the lesson says it has not read a published critique of these
   trials. Last word: the organisations' disclaimer and "what would settle it", no verdict.
   Misconceptions: one against each side ("One good conversation can flip someone's view"; "Talking
   across a divide does nothing"). Check Position B at full strength: is it a real sceptic's case or a
   straw one built from concessions?
8. **Party signal.** Examples: four-day school week, office days, dogs on sofas, open-book exams,
   reclining seats, meeting, trees, a father moving in, a book, a parking charge, a village fair, an
   unnamed national election and an unnamed candidate. The three canvassing studies' topics
   (same-sex marriage; immigration policy; transgender people) are named because the studies are;
   check the framing ("aimed to move voters towards one side"; "takes no side on either"; the
   authors' "both sides" question; "exclusionary attitudes" attributed as the authors' term). All
   three studies' campaigns were on one side of their issues, which the lesson can't change; judge
   whether it needs saying that the course found no comparable trials run by the other side (it has
   none in SOURCES), or whether the authors' "both sides" question is enough.
9. **The "not talking at all" position.** SOURCES has no primary statement; the lesson names it in
   one sentence, says the course hasn't read one, and adds Kalla and Broockman's related point about
   norms. Check it's described in terms its holders would recognise, and not undercut.
10. **Organisations in their own words.** "Reds and Blues" glossed as "its names for the two sides of
    American politics" (my gloss, not theirs). EP founding and "We never ask". BA's "neither side is
    teaching" (mission page, from SOURCES, not re-read; the "What we do" page was).
11. **Safety.** No crisis content; the Personal Safety lesson 8 pointer for threat; the partner
    exercise excludes identity, faith and politics and says to stop if heated.
12. **Perspectives to run**: a reader on the political left; a reader on the political right; someone
    who holds that dialogue with certain views legitimises harm; a Braver Angels or Essential Partners
    practitioner; a political scientist sceptical of small effects.

## Scrutinise: Reviewer P (depth, pedagogy, cold start, voice, media)
1. **Length and cuts.** 90 on the nose. Cut from the first draft (125): the Wikipedia study to one
   clause then out entirely (in "Cut first"), Essential Partners already at three agreements, the
   Itzchakov 2024 paragraph to one sentence (all from the outline's list, in order); then a predict
   on a friend correcting a restatement (folded into one sentence of prose), the Baron entry in Go
   deeper, the "many social psychologists" quotation, and the "Why restate first" subsection
   (compressed into one paragraph). Exercise steps are written as prose, not numbered, so the model
   prices each exercise by its stated time (15, 10 and 5 minutes) rather than steps plus time; say if
   that under-prices them.
2. **Worked examples.** (a) The four-day school week reply, marked against the recipe and LAPP, with
   the gap (the second parent's message) before the checkpoint. (b) Isidore after an election: LAPP's
   Pivot says hold back, and the checkpoint asks what the conversation is for. Outline's (a) was a
   teenager's phone at the dinner table; changed because lesson 8's exercise already uses "phones at
   the dinner table", and the parents' chat is written text, which is the recipe's tested setting.
3. **Predicts: two** (why acknowledging feels hard; which canvassing arm worked). **Checkpoints:
   three.** The first predict's answer is labelled this course's reading; check it doesn't print its
   answer in the stem.
4. **Cross-references**: lesson 2 (Pomerantz; flat refusals), lesson 3 (standpoint, lines 409 to 411),
   lesson 5 (EP pauses), lesson 6 (EP question test; Huang audited and corrected), lesson 7 (guessing
   minds), lesson 8 (Rogers and Farson quotation and ground rule; restating habit for the project),
   lesson 9 (four-lab test; Gottman-Rapoport Blueprint; Itzchakov 2024), Logic and Argument lesson 7
   (Rapoport's rules, Dennett's reasons, reported not re-quoted), Reading Well lesson 7, Personal
   Safety lesson 8. Check each says what the earlier lesson says.
5. **Voice**: contractions were expanded by hand from 14.5 to 6.4; read for stiffness ("did not",
   "is not" clusters in the four-lab and Baron paragraphs). Quoted example replies keep their
   contractions.
6. **Quiz**: 1 acknowledgement (new case); 2 recipe markers (new case); 3 self-rating (new case); 4
   headline check (what the evidence shows, no side keyed); 5 effect size d = 0.1 (new number); 6
   LAPP Pivot (new case). Five of six are application. Read each explanation against its keyed
   option.
7. **Media**: none. A chart of Kalla and Broockman's Table 1 or Figure 1 would be possible from the
   paper but its numbers are not in SOURCES except as appended today; not drawn, to stay inside 90.
