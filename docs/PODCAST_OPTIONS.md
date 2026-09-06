# A podcast for every lesson: what is actually possible now

*Written 2026-09-06 for John, replacing the 2026-09-04 note that said NotebookLM had no API.
That is no longer true, and the true answer is more useful than it sounds. Nothing has been
built and nothing has been spent.*

## What changed since the last look

NotebookLM was renamed **Gemini Notebook** in July 2026, and Google now documents an
audio-overview API. The catch is which product it belongs to: the API is part of **Gemini
Notebook Enterprise** on Google Cloud, still marked pre-GA preview, and Enterprise is sold
per licence with a fifteen-licence minimum. At roughly $9 a licence that is about **$135 a
month** before a single episode is generated, for a project whose entire hosting bill is
$0. So the API exists and we cannot use it.

There is also an unofficial Python library that drives the consumer NotebookLM as if it
were a browser. It works. It is also against Google's terms, breaks whenever the UI moves,
and would put the institute's content pipeline on a foundation that can be pulled without
notice. Not for something with our name on it.

The consumer product is still free and still makes good audio by hand. That matters, and it
is the cheapest thing on this page.

## The three real options

### 1. Do it by hand in Gemini Notebook, for a handful of lessons

Free. Upload the lesson Markdown, generate the Audio Overview, download the MP3, drop it in.
About ten minutes of clicking per lesson. Fine for eight lessons. Impossible for the roughly
1,400 the taxonomy plans.

**What it is genuinely good for:** finding out whether anyone listens. Three lessons, three
files, a "Listen instead" button, and a month of watching whether it gets used. That costs
nothing and answers the only question that matters before spending anything.

**What it is bad at:** we do not control the script. The two hosts riff off the source and
sometimes get things subtly wrong, or skip the part the lesson worked hardest on. Editorial
Standards 2 says every checkable claim has a source and every lesson is fact-checked. An
audio version that nobody wrote and nobody checked does not meet that, and it would carry
our name.

### 2. Write the script ourselves, then render it with a two-voice TTS

Claude writes a conversation from the lesson (two named hosts, one curious and one teaching,
following the style guide, covering the reason to care, the mechanism, the worked examples
and the misconceptions, inventing nothing that is not in the lesson). The script gets a
light fact-check against the lesson, the same way a draft does. Then a text-to-speech model
reads it in two voices.

This is the one that fits the institute, because the script is a reviewable artefact. It
goes through the same pipeline as the writing, it can be corrected, and a learner listening
gets the lesson rather than a chat about the lesson.

Two engines are worth considering:

| | Gemini Flash TTS | ElevenLabs text to dialogue |
|---|---|---|
| Two speakers | native, up to two | native, built for dialogue |
| Rough cost | ~$0.012 per 1,000 characters | ~$0.000184 per character, about 15x more |
| A 12-minute episode (~10,500 characters) | about **$0.13** | about **$1.90** |
| The 28 lessons live today | about **$4** | about **$54** |
| All ~1,400 planned lessons | about **$180** | about **$2,700** |
| Quality | strong, second on the public TTS leaderboard as of April 2026 | warmer, more expressive; reviewers consistently say it holds up better across a ten-minute stretch |

The honest summary of the quality gap: Gemini is clear, accurate and cheap, and several
reviewers say it flattens out over a long episode. ElevenLabs sounds like people. For a
two-minute clip nobody would care. For a twelve-minute lesson somebody listening on a walk,
they might.

Script generation with Claude adds a few cents per lesson, well under $150 for the whole
institute even at full scale.

### 3. Wait

Costs nothing, delivers nothing. Worth saying out loud only because option 1 is nearly free
and answers the demand question first.

## What I recommend

**Do option 1 and option 2, in that order, and let your ears settle the engine.**

1. **This week, free:** generate audio by hand in Gemini Notebook for three lessons of How
   to Learn Anything. Add a "Listen instead" player and a transcript toggle to the lesson
   page. Label them plainly as machine-generated summaries rather than the lesson read
   aloud, because that is what they are. Watch whether anyone presses play.
2. **If people listen, build the real pipeline:** `scripts/podcast.mjs` writes
   `audio/<lesson>.script.md` with Claude, fact-checks it against the lesson, renders it,
   writes the MP3, and adds `audio: <path>` to the lesson frontmatter. A `/make-podcast`
   command runs it. Roughly a day of work once the engine is chosen.
3. **Choose the engine by listening, not by table.** Render the same lesson both ways, about
   $2 in total, and pick. My guess before hearing them is that Gemini is right for the first
   hundred lessons on cost alone, and that ElevenLabs earns its price only if the flatness
   is as noticeable as reviewers say. That guess is worth exactly what a guess is worth.

**Where the files live: Cloudflare R2, not the repo.** A twelve-minute mono MP3 at 64 kbps
is about 6 MB. The 28 lessons live today would be 160 MB; the full 1,400 would be about 8 GB.
GitHub Pages has a 1 GB soft limit, so audio does not belong in git past the first few dozen
files. R2's free tier is 10 GB of storage with no egress charge at all, which is exactly the
shape of this problem, and we are already on Cloudflare. That stays $0 until the institute
has most of its courses written.

## What this needs from John

1. **A Google AI Studio API key** for Gemini TTS, or an ElevenLabs account, or both if you
   want the listen-and-compare. Free to create; the usage is what costs.
2. **Approval to spend.** The comparison is about $2. The 28 live lessons are about $4 on
   Gemini or $54 on ElevenLabs. Nothing gets spent without you saying so.
3. **Names for the two hosts.** They should be consistent across the whole institute, so it
   is worth picking them once and deliberately.
4. **A decision on the by-hand batch:** worth ten minutes a lesson for three lessons to find
   out whether anyone listens, or skip straight to the built pipeline?

## The standards question, which has to be settled either way

An audio version is a version of the lesson, so 2 and 4.5 apply to it. That means the script
is fact-checked against the lesson before it is rendered, the hosts never assert anything the
lesson does not, and the page says plainly that the voices are synthetic. Two named synthetic
hosts who sound like a real podcast are exactly the kind of thing a learner deserves to be
told about, and saying so costs us nothing.
