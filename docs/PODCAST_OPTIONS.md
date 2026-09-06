# A podcast for every lesson: what is actually possible now

*Written 2026-09-06 for John. Rewritten the same day after he asked me to look harder at the
unofficial and open-source routes, which was the right instinct: the answer changed. Nothing
has been built and nothing has been spent.*

## The thing worth knowing before the options

"NotebookLM quality" is not one product. It is two separate pieces:

1. **The script.** Two hosts, a curious one and a teaching one, with a shape: why this matters,
   how it works, an example, the thing people get wrong.
2. **The voices.** Two speakers who sound like people, hold their identity for twelve minutes,
   and hand over to each other without sounding like two separate recordings glued together.

Google is not better than us at the first one. They are working from a document they have never
read carefully; we wrote the lesson, we know which paragraph the whole thing turns on, and we
already have a fact-check stage. Where they are ahead is the second one, and that is a model
you can rent or download.

So the useful question is not "how do we get at NotebookLM". It is "how do we assemble those
two pieces ourselves", and as of this year that is cheap.

## What changed since the 2026-09-04 note

**The official API exists and we still cannot use it.** NotebookLM became Gemini Notebook in
July 2026 and Google documents an audio-overview API, but it belongs to Gemini Notebook
Enterprise: per licence, fifteen-licence minimum, roughly $9 each. About **$135 a month** for a
project whose hosting bill is $0. Out.

**The unofficial route is real.** There is a Python library that drives the consumer product
programmatically and gets genuine NotebookLM output for free. Two problems, and only one of them
is the obvious one. The obvious one: it is against Google's terms and breaks whenever the UI
moves. The one that matters more: **it hands the script back to Google.** We would be publishing
audio under the institute's name that nobody here wrote and nobody here checked, on courses whose
whole claim is that every checkable thing has a source. That is the same objection as doing it by
hand in the app, and it does not go away by automating it.

**The open route got good.** This is the real news. There are now open-weights models built
specifically for multi-speaker long-form, not single-voice narration with two accounts:

- **VibeVoice** (Microsoft, open weights). Up to 90 minutes, four speakers, stable voice
  identity and clean turn-taking across the whole span. This is the model class that makes an
  Audio Overview sound like an Audio Overview. Hosted on fal.ai at **$0.04 per generated
  minute**, and the same price for the small and the large model, so there is no reason to run
  the small one. Known limitation: speakers take turns cleanly and never talk over each other,
  so it is a well-mannered conversation rather than a lively one.
- **Higgs Audio v3** (Boson AI, 4B, June 2026). 102 languages, zero-shot voice cloning, inline
  tags for emotion and style. More control, more knobs to get wrong.
- **Dia** (Nari Labs, open weights). Reads `[S1]` and `[S2]` tags and produces the dialogue.
  Small and direct.

And there are open orchestration layers that already glue script-writing to TTS:
**Podcastfy** (a Python package that turns text, PDFs, URLs or YouTube into two-host audio) and
**Open Notebook** (a self-hosted NotebookLM, about 28,000 stars, 18-plus model providers, does
podcasts). Both are worth reading. Neither is worth adopting whole, for one reason: neither has
a step where the script is checked against the source before it is spoken, and that step is the
entire difference between our audio and everyone else's. The part they automate is the easy part.

## What it costs, per twelve-minute episode

| Route | Per lesson | The 28 lessons live now | All ~1,400 planned | Lock-in |
|---|---|---|---|---|
| By hand in Gemini Notebook | $0 plus 10 minutes of clicking | free, about 5 hours | impossible | none |
| Unofficial NotebookLM library | $0 | $0 | $0 | breaks without notice; against their terms |
| Gemini Flash TTS | ~$0.13 | ~$4 | ~$180 | low, it is one API call |
| **VibeVoice on fal.ai** | **~$0.48** | **~$13** | **~$670** | **none: open weights, self-hostable later** |
| ElevenLabs text to dialogue | ~$1.90 | ~$54 | ~$2,700 | their voices, their platform |
| VibeVoice self-hosted on a rented GPU | a few cents | a few dollars | a few hundred | none, but it is servers to run |

Script generation with Claude adds a few cents a lesson on top of any of these.

Storage is the easy part. A twelve-minute mono MP3 at 64 kbps is about 6 MB: 160 MB for the 28
live lessons, about 8 GB for all 1,400. GitHub Pages has a 1 GB soft limit, so audio does not
belong in git past the first few dozen files. **Cloudflare R2's free tier is 10 GB with no
egress charge at all**, which is the exact shape of this problem, and we are already on
Cloudflare. That stays free until the institute has most of its courses written.

## What I recommend, and it changed

**VibeVoice on fal.ai, with a script we write and check.** My earlier note pointed at Gemini
Flash TTS on cost. Having looked at what John asked me to look at, I think that was the wrong
call for the wrong reason.

Gemini TTS is a text-to-speech model that can do two voices. VibeVoice is a model built for two
people talking for an hour, and every review of it says the same thing: the voices stay
themselves and the handovers sound like a conversation. That is the specific quality gap people
mean when they say "it sounds like NotebookLM". The difference is $0.35 a lesson and $13 for
everything currently live. That is not a budget decision, it is a rounding error, and it buys
the thing we actually want.

The lock-in argument points the same way, which is unusual and worth trusting. VibeVoice is
open weights. If fal changes its pricing we download the model and run it ourselves, with the
same voices and the same output, because it is the same model. Neither Gemini TTS nor
ElevenLabs offers that.

The plan:

1. **Pick the hosts.** Two names, two voices, consistent across the whole institute, chosen once
   and deliberately. This is John's call and it is not a small one; they become the sound of the
   place.
2. **Render one lesson three ways** on VibeVoice, Gemini and ElevenLabs, for about **$2.50 in
   total**, and listen. If I am wrong about the gap, the table above says which way to go instead.
3. **Build `scripts/podcast.mjs`:** lesson in, two-host script out to `audio/<lesson>.script.md`,
   fact-checked against the lesson the way a draft is, rendered, MP3 to R2, `audio:` added to the
   lesson frontmatter, `<audio>` player and transcript toggle on the lesson page. A
   `/make-podcast <lesson>` command drives it. About a day once the engine is settled.
4. **The by-hand batch is now optional.** It was in the last version of this memo as a free way to
   test demand. It still is. But the built pipeline is a day's work and about $13, and it produces
   audio we can stand behind, so the case for the hand-made stopgap is weaker than it was
   yesterday. Do it only if you want an answer this week.

## What this needs from John

1. **A fal.ai account** for VibeVoice, and optionally a Google AI Studio key and an ElevenLabs
   account so the three-way comparison is possible. Free to create; usage is what costs.
2. **Approval to spend.** About $2.50 for the comparison, about $13 to do every lesson currently
   live. Nothing is spent without you saying so.
3. **Two host names.**
4. **A Cloudflare R2 bucket**, on the account that already exists. Free at this size.

## The standards question, which has to be settled either way

An audio version is a version of the lesson, so Editorial Standards 2 and 4.5 apply to it. The
script is fact-checked against the lesson before it is rendered, the hosts never assert anything
the lesson does not, and the page says plainly that the voices are synthetic. Two named synthetic
hosts who sound like real people are exactly the kind of thing a learner deserves to be told
about, and saying so costs us nothing.

This is also the argument that settles the unofficial-API question without needing the terms of
service at all. We can meet that standard with a script we wrote. We cannot meet it with a script
we did not.
