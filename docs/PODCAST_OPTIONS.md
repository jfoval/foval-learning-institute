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

## The four routes, all of them checked

*Third pass, 2026-09-06. John pushed back twice that I was not digging enough, and he was
right both times. What follows names the specific projects rather than gesturing at
categories, and one of the things he found turns out to be the most useful fact on this page.*

### 1. The official API: real, and priced out of reach

NotebookLM became Gemini Notebook in July 2026 and Google does document an audio-overview
API. It belongs to **Gemini Notebook Enterprise**: per licence, fifteen-licence minimum,
about $9 each. Roughly **$135 a month** before a single episode exists, for a project whose
hosting bill is $0. Out on cost, not on principle.

### 2. Browser automation: it works, and the risk is not what it looks like

[`israelbls/notebooklm-podcast-automator`](https://github.com/israelbls/notebooklm-podcast-automator)
is the mature one: 113 stars, 34 forks, a FastAPI service wrapping Playwright. You POST to a
local endpoint, it drives a headless Chrome, uploads the source, clicks Generate, waits, and
downloads the MP3. It is genuinely clever and it genuinely works.

The usual objection is that it breaks when Google moves a button. True, and survivable.

**The objection that actually matters is the account.** It authenticates by keeping a Chrome
profile permanently signed in to a real Google account, and **NotebookLM has no suspension of
its own**. A flag there disables the entire Google Account, because that is the only identity
it has. Automated access at the rate this needs, on the order of 1,400 lessons, is exactly
the pattern that trips Google's abuse detection.

Now look at what that account is about to be carrying. `workers/api/` uses a Google OAuth
client for sign-in. Put lesson audio generation on the same Google account and one automated
flag takes out John's email, his Drive, and every learner's ability to sign in to the
institute, at once. That is not a tooling risk, it is a single point of failure across the
whole project.

And the standards objection still stands underneath it: we would be publishing audio under
the institute's name from a script nobody here wrote or checked. Editorial Standards 2 says
every checkable claim is sourced and fact-checked in a separate pass. An Audio Overview
cannot meet that, whether a human clicks the button or a script does.

### 3. Play.ai PlayNote: gone, and this is the useful part

This was the one I missed and John found. PlayNote was exactly the thing everyone wants: a
commercial API with `synthesisStyle: "podcast"`, `voice1` and `voice2`, POST a PDF and get a
two-host discussion back. It was marketed, accurately, as "NotebookLM but with any voice,
custom prompts and API access". Around 40,000 customers.

**It no longer exists.** Meta acquired PlayAI in July 2025. The API went offline within weeks,
sign-ups closed in August, and on **31 December 2025 the platform shut down permanently**:
accounts, saved audio, voice clones and every API endpoint deleted, with no migration path
offered. The play.ht domain now sits on Meta's nameservers and resolves to nothing.

Six months from "this is the answer" to gone, taking its customers' work with it. That is not
an argument against ever using a vendor. It is the reason the lock-in column in the table
below is not a theoretical nicety, and it is the strongest single argument for preferring a
model whose weights we can download.

### 4. Podcastfy and the open orchestration layers: real, and solving the easy half

[Podcastfy](https://github.com/souzatharsis/podcastfy) is alive and serious: 6,500 stars,
about 400 commits, actively maintained, and it takes text, PDFs, URLs or YouTube and produces
two-host audio using your own OpenAI, Google, ElevenLabs or Edge keys. **Open Notebook** is
the fuller self-hosted NotebookLM, around 28,000 stars, 18-plus providers, podcasts included.

I dismissed these too quickly last time. The fair assessment: they work, and what they
automate is source in, script out, audio out. That is a real pipeline and it would save a day.

The problem is where the value sits. Their script generation is the part we specifically do
not want to outsource, because we wrote the lesson, we know which paragraph the whole thing
turns on, and we have a fact-check stage the standards require. Strip that out and what is
left is "call a TTS with two voices", which is one function. So Podcastfy is worth reading
for its prompt design and worth stealing ideas from, and adopting the dependency buys us the
half we should own while adding Python to a Node repo with two npm packages in it.

## What it costs, per twelve-minute episode

| Route | Per lesson | The 28 lessons live now | All ~1,400 planned | Lock-in |
|---|---|---|---|---|
| Gemini Notebook Enterprise API | n/a | ~$135/month | ~$135/month | Google, and priced out anyway |
| Browser automation of NotebookLM | $0 | $0 | $0 | risks the whole Google Account |
| Play.ai PlayNote | n/a | n/a | n/a | **shut down 31 Dec 2025, no migration** |
| By hand in Gemini Notebook | $0 plus 10 minutes of clicking | free, about 5 hours | impossible | none |
| Gemini Flash TTS | ~$0.13 | ~$4 | ~$180 | low, it is one API call |
| **VibeVoice on fal.ai** | **~$0.48** | **~$13** | **~$670** | **none: open weights, self-hostable** |
| ElevenLabs text to dialogue | ~$1.90 | ~$54 | ~$2,700 | their voices, their platform |
| VibeVoice self-hosted on a rented GPU | a few cents | a few dollars | a few hundred | none, but servers to run |

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

## "Enterprise on Google Cloud, or a hobby Python script?"

That is the question the article John was reading ends on, and the answer is neither, which
is why its two recommendations both miss.

This is a free public institute with an editorial standard, a Node repository with two npm
dependencies and no build step, and about 1,400 lessons to get through eventually. Enterprise
pricing is absurd at $0 revenue. A hobby script driving a logged-in browser is fine for
someone doing forty episodes and unacceptable when the account it risks is the one learners
sign in through.

What actually fits is the boring middle: own the script because that is where our standards
live, rent the voices because that is a commodity, and pick a voice model we could run
ourselves if the vendor disappears. Which, as PlayNote's 40,000 customers found out on New
Year's Eve, they sometimes do.

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
