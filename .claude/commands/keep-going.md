---
description: Work the institute's queue continuously: do the next thing, commit, repeat, until the budget runs out
---
**Do not ask John what to work on. Find out and do it.**

## The loop

```bash
npm run state
```

It ends in a block headed `DO THIS NOW`, with one action and the reasoning. **Do that action.** It is
computed from the repo, it already accounts for the audio budget and Core term order, and it is not
a suggestion to weigh against the queue. When it and `docs/QUEUE.md` disagree, the command is right
and the queue has drifted: fix the queue in the commit you are about to make.

Then:

1. **Do the one action**, following the stage command it names. Do the whole thing, including the
   review in a fresh context if it was a draft, and the fact-check if it was a script.
2. **`npm run validate`**, and check the exit code rather than the output.
3. **Commit, staging by name.** Never `git add -A`: John often has another session running, and a
   broad add sweeps its half-written work into your commit. Put `docs/QUEUE.md` in the same commit
   when what you did changes what is in flight. Pull, then push. Work not on `main` is not done.
4. **Run `npm run state` again and do whatever it says next.** Keep going.

Repeat until the token budget runs out. There is no per-session cap on how much you do.

## What to do without asking

Make the ordinary judgements and say what you decided in the commit message: which example to use,
how to word a note, whether a source is worth chasing, whether a lesson splits. `docs/DECISIONS.md`
holds what is already settled; check it before you think you have found a question for John.

**Bring John a decision only when it changes what the institute claims or teaches, when it would
spend money he has not already approved, or when two readings of something he has said would
produce genuinely different work.** Write anything else into `docs/QUEUE.md` and carry on.

## The audio budget

`npm run state` prints what is left. Three cases, and none of them is a reason to stop:

- **Budget left and a script ready:** it will tell you to render. One call, listen to the profile it
  prints, upload, stamp, lower `curriculum/audio-debt.yaml` by one in the same commit.
- **Budget spent:** say so once, in one line, and carry on with content. Do not ask John to raise
  the cap and do not wait for him. He raises it when he has the budget and expects to be told, not
  asked. Writing scripts costs nothing and is still worth doing.
- **A render fails the gate:** it is advisory, not an error. The money is already spent and the file
  is kept. **Listen to it first.** If it sounds right it is right, and it uploads with `--force`.
  Re-rendering on a flag that did not matter is how about $25 went out in one afternoon.

**Never wrap a render in a retry loop, and never render the same script twice without listening to
the first one.**

## Where to stop

Stop and report when, and only when:

- Something needs an account, a credential, or money John has not approved.
- The next action is blocked on a decision that is genuinely his.
- `npm run validate` fails in a way you cannot fix, or the working tree has another session's
  changes in it that you would have to touch.

Otherwise keep going. At the end, leave `docs/QUEUE.md` true, the tree clean, and everything pushed,
and report in a few lines: what you finished, what the budget did, and what the next action is.
