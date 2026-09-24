# Reviews: Mental Fitness lesson 4

## 2026-09-23 — Lesson 04 — Stage 4, two reviewers in parallel
**Reviewer 1 (facts, neutrality, safety):** fact-check fail (fixable), **neutrality fail**, safety pass
with two fixes. **Reviewer 2 (depth, pedagogy, cold start, voice):** depth and pedagogy fail, cold start
needs fixes, voice pass with fixes.

**The worry-postponement section was tilted by selection**, the same defect as lessons 2 and 3, here
against the technique: Krzikalla's own positive conclusion ("seems to be effective in reducing worry in
participants with GAD") was omitted while its summary of earlier negative work was quoted and given the
last word; McGowan's clinically-significant-change result and the nature of its active control were
omitted; Versluis's own explanation (online delivery, against earlier pen-and-paper studies) was left
out. Rewritten from the whole abstracts in the `SOURCES.md` appendix.

### Findings, all applied

- **Hoyer 2009**, in the research file and unused (defect 1), is now the second worked case: a single
  CBT component, worry exposure, shown to work on its own against applied relaxation in diagnosed
  patients. It corrects the lesson's own framing that single components are unproven alone.
- A NICE quotation spliced from two places ("has not improved after..."), now quoted as 1.2.12 prints
  it. The paragraph-level quotation check caught it too; `npm run quotes` could not, because it only
  checks quotations followed by a marker (recorded in `docs/QUEUE.md`).
- "Exercise appears once as a treatment" contradicted the lesson's own "not a treatment"; NG222's
  "group exercise" and "group mindfulness" programmes loosened to "exercise and mindfulness"; Cuijpers
  2014's "too small to draw conclusions" and publication-bias sentences omitted; Hunot's heterogeneity
  quotation cut before "partly explained by the number of therapy sessions"; the McCarrick row had no
  comparison group.
- **Safety**: a checkpoint pointed a struggling reader straight at self-help, skipping assessment;
  "Step 3 is therapy" wrote out medication. Both fixed.
- **Depth**: the objective-1 section repeated lesson 1 verbatim; now it adds only what's new (the order
  of assessment). The panic section now says what differs from GAD's step 2.
- **Cold start**: "stimulus control" clashed with Sleep lesson 6's insomnia component; risk ratio now
  linked to Sleep lesson 3's relative risk; focused worry, trait worry, metacognitions, manualised,
  supportive therapy and heterogeneity glossed.
- **Pedagogy**: two keys were the only option without an absolute; items 3 and 6 recall; the quiz is
  rebuilt with a new risk-ratio case whose outcome runs the other way. A predict now sits on the risk
  ratio, the lesson's hardest idea. Exercise 1's "nothing found means untested" corrected to "not found
  in 25 minutes", with a way out for a distressed reader.
- **Voice**: "Now the worked case", "Here's the wrinkle", a triple negative, bold morals.

`npm run validate` exits 0. `minutes: 85`.
