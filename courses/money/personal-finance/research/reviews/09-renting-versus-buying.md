# Reviews: Personal Finance Fundamentals — 09-renting-versus-buying

Append-only. Newest at the bottom.

## Lesson 9, "Renting against buying, and how to tell" — Stage 4, Tier B, 2026-09-09

Drafted from the housing research added to `SOURCES.md` the same day. **Tier B, five passes**, because
housing is a 3.4 domain and the outline made the neutrality audit mandatory. The fact-check and the
neutrality audit both came back with blocking findings, and the depth and voice passes ran against
the revised file, which turned out to matter: several of their findings are about damage the earlier
fixes did.

### The finding that generalises, and it extends the rule from lesson 8

Lesson 8's finding 8.5 established that when a lesson describes two positions you count the citations
and count who gets the last word before reading a sentence for tone. **The two-position section in
this lesson passes that count cleanly** and the audit still failed the lesson, because the imbalance
had moved. Position B's premises were the architecture of the whole lesson, roughly 3,000 words in
the lesson's own explanatory voice with four footnotes, while Position A had one paragraph, one
section and 450 words. The audit's phrase for it is the one to keep: **a fair-looking two-paragraph
summary at the end does not undo 3,000 words of asymmetric construction.**

So the rule is now: **count inside the disagreement, and then count the whole lesson. Whose case is
the architecture and whose is the annexe? Whose errors are in the misconception list? And is the
balance box doing work the body already undid?** On the last of those, the audit found the lesson
naming its own purpose as demolishing one side ("the slogan the lesson exists to take apart") and
applying the phrase "you're making a bet" only to the buying path, when the renting path rests on an
equally unknowable stock return. Both fixed.

Fixes applied: the pro-buying case now has its own section in the lesson's own voice, carrying the
three arguments that were missing entirely (the payment ends and the rent does not; the capital gains
exclusion under IRS Topic 701, which shelters Priya's whole $92,000; and the imputed-rent argument,
included with an explanation of why it does **not** apply to a tenant comparison, which the depth pass
caught the draft getting backwards). Two anti-buying misconceptions added to a list that had corrected
five pro-buying beliefs and one anti-buying one. Both positions attributed. The net worth gap given a
citation.

### The fact-check, which found four wrong numbers and one dropped qualifier

- **$23,028 and $3,935** came from multiplying the rounded $1,919 monthly payment rather than the true
  $1,918.56. Correct figures $23,023 and $3,930, and the lesson now states the unrounded payment so
  the totals reconcile.
- **"about two thirds of the unrecoverable total"** put the whole payment, principal included, over a
  denominator defined to exclude principal. It is the interest alone, and it is a little over half.
- **Rent at 3% for thirty years is $5,340, not $4,600**, which was 25 years' growth. The error was in
  the newly added pro-buying section and it understated the argument that section exists to make.
- **The Philadelphia Fed's 7.3% is a gross rental return**, before the landlord's tax, insurance and
  maintenance. The draft dropped "gross" and then used the figure as though it were net, which
  double-counts against the same lines the table charges Priya separately. Restored, with the
  reconciliation stated.
- **The lesson claimed the price series was "the longest anyone has assembled".** The paper claims
  only the longest annual rent-to-price series for the US. Narrowed.
- Two cross-references were wrong (Thaler and Benartzi is lesson 2, not 7; the 7% real return is
  lesson 4's, not lesson 5's), and the 60% crash figure was attributed to a series that ends in 2006.

**The sensitivity table disagreement is recorded rather than resolved.** The reviewer could not
reproduce three rows with a model that reproduced the baseline and every chart vertex. The difference
is the treatment of the opportunity cost, and the lesson now states its own rule in the text (4% a
year on the money tied up, growing as principal is repaid), so the rows are derivable from what the
reader is told. All ten rows come from one script.

### What the later passes found that the earlier fixes caused

Worth recording as a pipeline lesson: **running depth and voice after the other passes caught damage
the other passes did.**

- The pro-buying section added by the neutrality fix contained an argument that is simply wrong
  against this comparison (imputed rent bites against a landlord, not against a tenant, because the
  model already credits the owner with the housing services at the tenant's own rent). Rewritten to
  say so.
- The added material had **zero contractions across nine opportunities**, against 1.5 and 2.7 per 100
  words in the sections around it, which the voice pass measured. A reader hears that.
- A paragraph headed "Three notes on how that table was built" had grown to seven notes.
- An interpolated sentence broke a pronoun chain, leaving "It" pointing at the wrong noun.
- The lesson narrated its own even-handedness **eight** times, four of them in the same construction
  ("a lesson that leaves them out has stacked the question"). Four cut.
- Four consecutive closing sections each performed the move "and now the other side", and forced
  saving was argued three separate times.

### Pedagogy

Four of six quiz items had become recall, two of them **because the depth and neutrality fixes had
written the answers into the body**. Q2, Q3, Q5 and Q6 rebuilt on cases the lesson does not contain:
two friends whose identical break-evens rest on different inputs; a landlord and an owner-occupier
holding identical houses; a PMI cancellation blocked by a missed payment rather than by the
threshold; and the selection problem transferred to a budgeting app. Measured after: indices
1,0,2,3,1,0, all four used, no adjacent repeat, spreads of 2 to 8 characters, key never the longest.

A gapped worked example added (the reader does the ten-year subtraction before it is shown), a
checkpoint added on the capital gains exclusion in the 1,441-word stretch that had no reader task, and
a fourth objective added for the evidence-reading skill the lesson spends its middle third on.

**And a finding about our own tooling, which is the most reusable thing here.** `npm run minutes`
priced this lesson at 95 and called it correct, while the lesson's own exercises promise 105 minutes
between them. The script's stated-duration detector requires a cue word (`about`, `around`, `roughly`,
`take`, `spend`, `allow`, `give`) to open the sentence, and this lesson's exercises opened "Ninety
minutes, and..." and "Fifteen minutes, using...". Rewording them to "About ninety minutes" made the
script see them, and it now reports 115. **The lesson was fixed by making the tool able to read it,
which is the better fix than overriding the number, and every future lesson benefits.**

### Media

Both charts were checked in the browser with `getBBox` rather than by eye. The break-even chart had
its two series labels floating 60 to 160 pixels away from the lines they name, leaving colour as the
only way to tell the series apart, which fails 4.6; both are now direct labels. It also started both
paths at zero in year zero, contradicting its own caption, since leaving on day one still pays to buy
and to sell; the owning line now starts at about $36,000. A third chart was added, a tornado of the
sensitivity table sorted by swing, because the lesson says its central claim lives in that table and
the claim was ten rows of text the reader had to sort mentally.

### Not fixed

- **The structural merge the voice pass recommended** (folding "Three arguments the arithmetic leaves
  out" into the wealth-argument section) is declined for now. The two do overlap on forced saving, but
  the first is about the fifteen-year frame and the second about a contested empirical question, and
  merging them would bury the capital gains exclusion, which is the most actionable fact in either.
  Recorded as a candidate for the voice pass when this course gets one.
- **`--line` for chart axes is near-invisible in dark mode** at roughly 1.5:1 against the background.
  It appears 63 times across 43 lessons, so it is a course convention rather than this lesson's
  defect. Logged in the backlog as its own job.

---
