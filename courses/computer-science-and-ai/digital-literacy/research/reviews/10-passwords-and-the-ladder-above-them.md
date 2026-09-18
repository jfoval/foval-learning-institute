# Reviews: Digital Literacy lesson 10, "Passwords, and the ladder above them"

## 2026-09-18 — Lesson 10 — depth, fact-check, neutrality, pedagogy, cold-start, voice, media, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **not ready**, three criticals, all of them
in the NIST material or the quiz built on it. All twenty-six findings closed below. The lesson was
not committed unreviewed.

Tier A, one reviewer, fresh context, run concurrently with lesson 9's. The reviewer **fetched
`pages.nist.gov/800-63-4/sp800-63b.html` and checked every quotation against the document**, which is
how the first critical was found. I re-fetched the two sentences it turned on before acting, because
a correction to a quotation is worth confirming twice.

### The three criticals

**L10-01 the NIST security-question quotation was trimmed of the clause that scopes it, and the
trimmed version was what a whole section rested on.** §3.1.1.2 says verifiers and CSPs "SHALL NOT
prompt subscribers to use knowledge-based authentication (KBA) ... or security questions **when
choosing passwords**". The lesson dropped the last three words and applied the requirement to
account-recovery flows, which is a different moment, and the recovery section is the one the lesson
calls the reason it exists. **`research/SOURCES.md` had the same trim, so the drafter inherited it**,
but the lesson's footnote asserted the bullets were quoted in the document's own language, which
makes it the recorded failure mode: a requirement attributed to a body in words it did not write.
**Closed:** the bullet quotes the clause and draws attention to it; the recovery section now says
plainly what NIST covers, and then makes the extension to recovery flows as **this course's own
argument**, which it can support, since facts about you are not secrets. SOURCES.md is corrected in
the same commit, with a note recording the trim and its consequence.

**L10-02 quiz 1 credited a reader with following guidance that would plausibly reject her password.**
The stem gave her "a fifteen-character password that is a line from a song" and the key said she
complies. §3.1.1.2 requires verifiers to compare a chosen password against a blocklist of "commonly
used, expected, or compromised" values, and NIST names **dictionary words** among what that list may
hold. A song lyric is a string of dictionary words.

That exposed a real content gap rather than just a bad item: **having removed composition rules and
put everything on length, the lesson left a reader with "fifteen characters of anything is fine."**
**Closed:** the stem now specifies a manager-generated password not on any blocklist, and the
guidance section gained a paragraph saying long is necessary and not sufficient, that dictionary
words are on the blocklist by name, and that the blocklist is the rule which catches the
long-but-guessable case. That paragraph is the most useful thing this review produced.

**L10-03 quiz 5's explanation said something false about blocklists and attributed to NIST a
rationale NIST does not give.** It said a rejection "means that exact value appears in known
compromised data", when the list is commonly used *or* expected *or* compromised, which the lesson's
own bullet three screens earlier said correctly. And the stem asked why the guidance requires the
reason to be given, which NIST states as a requirement without explaining. **Closed:** the stem now
asks what the reader can take from a rejection, the key is that it is guessable by some route and not
necessarily breached, and the explain marks the useful inference as the lesson's rather than the
guidance's.

### The majors

**L10-04 the organising claim did not cover the guidance it claimed to cover, and contradicted itself
two lines apart.** "Every line of it is the same idea" was said of an eight-bullet list from which
four were derived; hints and security questions defend against a person who knows facts about you,
which is a different attacker, and the lesson says so itself later. And "complexity defends against
guessing, and nobody is guessing" sat two lines above a paragraph about offline guessing. **Closed:**
the claim is narrowed to "most of that list, and two lines of it are about a different attacker", the
second attacker is named, and hints and security questions are put under it.

**L10-05 "scrambled and has to be unscrambled first" describes decryption, and a stored password is
hashed.** The distinction is the entire reason length multiplies cost, so the lesson's mechanism was
wrong in exactly the way it was stated, and "hash" appears nowhere in lessons 1 to 9. **Closed:**
hashing is named and defined in one sentence, and the mechanism is now "they guess candidates and
compute the hash of each one", with length multiplying the candidates.

**L10-06 "most login pages stopped being broken years ago" was unsourced and contradicted the
lesson's own picture**, since a rate limit that blocks automation sits badly beside a program trying
pairs at machine speed across two hundred services. The reconciliation was never stated and it is
what makes the whole lesson work. **Closed:** the passage now says services do limit failures against
one account, so the attacker makes one or two attempts against each of a hundred thousand accounts
instead, which looks like ordinary people mistyping and leaves nothing for a rate limit to catch.

**L10-07 Okta's workforce figures were used to explain consumer bank behaviour.** The figures match
SOURCES exactly; the inference did not, since these are enterprise numbers from one vendor's customer
base being used to account for retail banking, and the footnote had already promised no finer claim
would be drawn from them. **Closed:** the bank clause is gone, both cautions are stated in the body
and marked as mine, including that two points is not a curve.

**L10-08 the lesson's central comparative claim was hedged only in a footnote and then made a quiz
key.** The repo's convention after L8-12 is that a claim beyond the sources is hedged in the lesson's
own voice, in the body. **Closed:** the hedge is now in the body, in the paragraph where the sentence
lands, and says outright that nobody has put a number on the two steps.

**L10-09 no backup codes anywhere**, in a lesson that walks a reader up the ladder on six accounts.
The commonest real-world lockout is a lost phone carrying the authenticator app with nothing written
down, and the exercise created that exposure for a reader who had never been told it exists.
**Closed:** a sentence at rung two, and step 3b in the exercise, saving the codes at the moment the
factor is turned on and putting them where they survive the phone being gone.

**L10-10 contractions had collapsed to 3 in 4,822 body words, with three "Here is" openers.** The
identical finding closed in lesson 8 (L8-16) and again in lesson 9 (L9-26). **Closed:** 28
contractions, all three openers rewritten. This is the third lesson running, and the pattern is
written into `docs/QUEUE.md`.

### Moderates and minors

**L10-11** "a perfectly good response" for a random security-question answer contradicted the bullet
two above it about human support desks; now says what it does and does not buy. **L10-12** three of
six quiz items restated a body passage; two rebuilt around situations the body does not walk.
**L10-13** phishing-resistance was used as a term of art twelve lines before it was explained; the
definition moved to its first use, and verifier, CSP and claimant are now glossed in one sentence.
**L10-14** the browser-manager claim leaned on a paper in the `unread:` line without saying so, in a
lesson that makes a point of naming two others it declined to use; now marked as this course's
judgement on summary-level evidence. **L10-15** the IC3 comparison had one side unmeasured and did not
say that complaint counts are self-reported and a floor; now says both, and the comparison is
qualitative. **L10-16** the SMS verdict omitted the point a critic would insist on, that a phone
number is often itself a login or recovery route, so adding SMS is not purely additive; now stated at
the verdict. **L10-17** decision 5 missed once, in the misconception list. **L10-18** the ladder was
nine paragraphs of prose the reader had to hold in their head to answer two quiz items; it is now a
four-row table. **A table and deliberately not a drawing**, on the reviewer's reasoning, which is
right: the figure a reader would want is a ladder with unevenly spaced rungs, and the only evidence
that would set those spacings is the Google login-challenge table the outline forbids, so a drawing
would assert a scale this course cannot stand behind. **L10-19** four small trims restored, including
"verifiers **and CSPs**" and "**other** composition rules". **L10-20** eight characters is still
revision 4's floor inside multi-factor, and the lesson had dropped SOURCES' "for single-factor use"
qualifier. **L10-26** the NCSC piece carried no year; it now carries its relationship to the 2025
revision instead, which is the more useful fact.

### What passed, so nobody rechecks it

**Both forbidden numbers are absent.** No Google login-challenge percentages, no SIM-swap carrier
study, no surname from the `unread:` line anywhere in the file, and nothing printed is derived from
either. The callout explaining their absence is honest rather than a dodge. **Every other NIST
quotation checks verbatim against the fetched document**: 15 and 8 characters, the 64 SHOULD,
composition, rotation plus the force-on-evidence clause, hints, the blocklist rejection-and-reason
sentence, managers and autofill, §3.1.1's "passwords are not phishing-resistant", and §3.1.3.3's
restricted designation with its three risk indicators. The renumbering claim and "final, August 2025"
are both correct. **The IC3 and Okta figures match SOURCES exactly** and carry their years.
**Neutrality passes, and it is the best in this course so far.** Position B on rotation gets a named
section, is stated in both of the terms the outline requires, is explained rather than quoted, gets
the last word inside its section, and is protected in a quiz explanation. Position A's evidentiary
weakness is stated plainly. The employer warning the outline requires is present. **All three "builds
on" claims verify** against lessons 1, 8 and 9. **No repetition** against lessons 1 to 9 beyond two
connective phrases. **Block mechanics, dashes, vocabulary and link checks all clean.**

### The standing note

This is the third consecutive lesson to fail the contractions check and the second to fail a
cold-start vocabulary check. Both are in `docs/QUEUE.md` now with the check that would catch them,
per root `CLAUDE.md` rule 10: if a rule needs shouting, write a check instead.
