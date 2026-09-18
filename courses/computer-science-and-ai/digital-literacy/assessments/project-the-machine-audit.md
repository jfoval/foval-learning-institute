---
title: "The machine audit"
minutes: 840
type: project
---

Thirteen lessons have given you a picture of where a file is, how to stand somewhere in a terminal, what happens between an address and a page, and what you're actually trusting when you install something. This project is the first time you use all of it at once, on your own machine, about your own life.

The deliverable is one file: plain text or Markdown, roughly 1,500 to 2,500 words, with seven sections and the transcripts to back them.

The file being plain text isn't an arbitrary rule. Producing it is lesson 3's exercise done for real, and when you finish you're holding a document you made with the skills the course taught, on a machine you understand better than you did. Nobody can write it for you, because every section is about your machine and your accounts.

Budget about fourteen hours over two or three weeks. Some of that is waiting, for a restore or for a provider's documentation. Section 6 isn't waiting: it's the longest piece of real work here and it's the one that changes what happens to you.

## Before you start

Open a plain text file and keep it open. Call it `audit.md` or `audit.txt`, and put it somewhere you can reach from the terminal in one `cd`. You'll be pasting into it all the way through, and the transcripts matter as much as the prose.

Two habits, both from the course.

**Paste what actually happened.** Not what should have happened. If a command failed, the failure goes in the file, with what you did next. Lesson 5 spent a whole section teaching you to read an error, and an audit with no errors in it is an audit somebody tidied.

**Date everything.** Every figure, every setting you checked, every retention window you read. A number without its date is a number that quietly goes wrong later, and this course has spent thirteen lessons refusing to print one.

## 1. The plan

Go back to the security plan you built in lesson 1, from the five questions: what you have that's worth protecting, who might want it, how likely they are to try, how bad it would be if they succeeded, and how much trouble you're willing to go to.

Write it again now, and then do the thing lesson 1 does to it at the end.

**Add the sixth question.** "What can my machine and my connection be used for, by someone who doesn't care who I am?" That question is outside the five, which is lesson 1's point: the first five all assume an attacker who's after contents, and the sixth is the one that catches the attacker who only wants your connection. Answer it in writing.

**Your revised plan has to contain at least one row you couldn't have written in week one.** That row is the point of the section. It may well come out of the sixth question, which is where it comes from for most people, and it may come from anywhere in the course: lesson 3's five causes of a missing file, lesson 7's parties in the path, lesson 12's copy that isn't a backup. Say which lesson put it there and what the row says now.

If you genuinely can't find such a row, say that instead, and say why. An honest "nothing moved, and here's what I already knew" is worth more than a row invented to fill the space.

:::callout Check the plan against the pictures, not against the advice
Lesson 1 gave you Wash's eight folk models, four of what a virus is and four of who's attacking, and every one of his thirty-three interviewees held at least one of each. The finding that matters is that not one of the eight makes all twelve standard pieces of advice worth doing, so advice gets rejected rationally rather than lazily.

So when you write the revised plan, don't check it against a list of precautions. Check it against the pictures. A plan whose every row assumes somebody who wants your money in particular is the big fish picture, and the sixth question above is the answer to it.
:::

## 2. The map

Design a directory, build it from the terminal, and say why it's shaped the way it is.

Not a toy tree of `a/b/c`. A real one, for something you actually keep: a business's clients, a course's subjects, a family's documents, a photographer's shoots. Three levels at least, and at least one place where you had a genuine choice about what goes inside what.

Paste the transcript of building it: the `mkdir` calls, the `cd`s, the `ls` at the end that shows it worked. Then two or three sentences on the shape, in lesson 2's terms. Which files will you name by a long absolute path, and which by a short relative one?

Then the prediction, which is the section's real work.

**Write down, before you touch anything, what a rename at the top would do to each kind of address.** Take one directory near the top of your tree. List three addresses that run through it: at least one absolute, at least one relative from a sibling directory inside the subtree, and one relative that climbs above the renamed directory and comes back down. For each, predict whether it survives and say why.

Then rename it, and find out. Paste what happened beside what you predicted.

Lesson 2's fourth objective was predicting which addresses stop working after a rename, and the reason this is worth doing at full size is that the three cases don't behave the same way, which a small tree never shows you.

## 3. The criterion

Create `hello.py`, run it, and break it three ways on purpose.

This is lesson 5's exercise, and the name is deliberate: it's the criterion for whether the terminal half of this course worked. Somebody who can do this can diagnose a machine. Somebody who can't is still guessing.

The three breakages are the three categories:

- **Where you're standing.** The file exists, the program exists, and you're somewhere else.
- **The name of the program.** You asked for something the shell can't find.
- **The program itself.** Everything was found, and the code inside it failed.

Paste all three messages exactly as they came back. Under each one, write the category, and write **what in the message told you**. Not what you knew from having caused it on purpose. What a person reading only that message would use.

:::predict Before you run them, predict which of the three messages will name a file, which will name a line, and which will name neither.
Write your three answers down before you break anything. Then check them against what comes back.

What you're testing isn't memory of lesson 5. It's whether you can say, in advance, how far the machine got in each case, because how far it got is what decides how much it has to tell you. A failure with no position to report has nothing to say beyond what it couldn't find.
:::

## 4. The pipeline

Answer one question about your own files that you couldn't have answered by clicking.

The question has to be real. "How many files are in this folder" is answerable by clicking and doesn't count. The ones that work have a condition in them:

- Which of my invoices mention a client I stopped working with, and when were they last touched?
- How many photographs from 2019 are bigger than four megabytes?
- Which of these three hundred text files contain a word I've been spelling two different ways?

Build it one stage at a time, the way lesson 6 does. Run the first command alone and look at what comes out. Add the second. Look again. Then the third.

In the file: the finished pipeline, its output, and **one sentence per stage saying what that stage contributed**. If you can't say what a stage contributed, it isn't earning its place and the pipeline is one command shorter than you thought.

Then save it as a script and make it run. Before you type `./yourscript.sh`, write down which of the four failure categories you expect, and the message you expect to see.

:::callout What you should expect depends on which machine you're on
On macOS and Linux, a script a text editor made is not marked as runnable, and you'll get the fourth category: the file was found and the system declined to run it.

Inside Git Bash on Windows, permissions are a translation rather than the real thing, and a file whose contents begin with `#!` counts as executable already. Your script is likely to run the moment you save it, and `chmod +x` may then appear to do nothing, because there was nothing left to do.

Either way, run `ls -l` and read the permissions, and write down what you see. The reading is the skill, and it's the same reading on a server you meet later.
:::

## 5. The trace

Take one domain from name to page.

Pick a domain you actually use, not `example.com`. Run a name lookup and a route trace on it, per lesson 7, and paste both. On Windows those are `nslookup -debug` and `tracert`, and lesson 7 has the flags, which aren't the same ones.

**Before you read your output, predict the party list.** Write down, from lesson 7's figure, every party you think can tell you visited that site, and the one you think can't. Then read your own output and see how many of them you can find evidence of with your own eyes.

Now the reading, which is the section's work. For this domain:

- **Who can see that you went there.** Name them, and say how each one knows. Your resolver knows because you asked it for the name. Your provider knows because it carried everything, and on most home connections it answered the lookup as well, so it knows twice over.
- **The one who can't**, with the reason. The reason isn't encryption, and this is worth getting right because it's the answer almost everybody reaches for. The networks in the middle see an address rather than a name, and one address at a delivery network commonly answers for thousands of different sites, so they can say your traffic went to that machine and can't say which of those thousands you were reading. Encryption doesn't remove a party from the path at all. It changes what they can read, which is a different claim and is lesson 8's.

**Derive the list from your own output, not from memory of the lesson.** The trace you ran has real networks in it with real names, and your resolver is a real machine at a real address. A list that could have been written without running anything is a recited list, and the rubric can tell.

One thing you'll see and should say something about: the rows of asterisks. They mean those machines chose not to announce themselves, which many are configured not to do, and the page loading is the evidence that the path works.

## 6. The hardening

Five accounts, and the first thing you do is put them in order.

**Rank them by what losing them would cost, before you read the next paragraph, and write the order down.** This is lesson 1's plan applied at full size, and the ordering is the judgement. Commit to it on paper so that you find out whether you were right.

Now: people's orders are usually wrong in a particular way, and lesson 10 says why. The account that resets every other password is the one that recovers the others, so on most people's real threat model it belongs above the bank rather than below it. Compare that with what you wrote. If your order already had it first, say what put it there. If it didn't, say what you were ranking by instead, because that answer is more useful to you than the corrected list is.

Then, for each of the five, in your order:

- **What you changed.** Concretely. A unique password from a manager, a second factor, a passkey, a recovery route repaired.
- **Which rung of lesson 10's ladder you reached**, and which attack that rung stops. Not which one it helps with. Which one it stops, and which one it doesn't. An app code stops a breached password being replayed by machine and does not stop a convincing page relaying it in real time.
- **What the recovery path looks like now.** Lesson 10 spent a section on why this is the part people skip: an account protected at the front door and recoverable by a security question is protected at one door out of two.
- **What you couldn't fix, and why.** A service with no second factor. An employer's policy you can't override. A recovery phone number you no longer control. This row is required, and a project with nothing in it is a project that stopped looking.

Then one install, with its four parties named, per lesson 9. Something you actually needed. For each of the four, say what checked it and what didn't, and name the two things no route could check for you.

## 7. The restore

Restore one real file from where you believe your backup is. Time it.

Not a test file you created for the purpose. A file you'd actually miss, restored from the place you'd actually go.

:::exercise Write the prediction down first
Take 5 minutes, before you restore anything.

1. Write down how long you think it will take, from deciding to restore to holding the file.

2. Write down whether you think the version you get back will be the one you want.

3. Write down which of lesson 12's five parts you're least sure of: the schedule, the selection, the destination, the format, or the credentials.

Then do the restore, and put what happened beside what you wrote. The gap between the two is the most useful sentence in this section, and you only get it by writing the prediction down first.
:::

Then the account of it: how long it took, what went wrong, and what surprised you. Lesson 12 is blunt about this. No restore, no backup, and a green indicator every night for a year has only ever proved that the schedule ran.

Then find your provider's documented retention window. Their documentation, not an article about them. Quote the sentence, link it, and **write the date you checked it**, because these windows change and the date is what makes your number honest a year from now.

## What the file contains when you're done

1. The plan, revised, with the sixth question answered and at least one row you couldn't have written in week one.
2. The map, with the transcript, three predicted addresses and what the rename actually did to each.
3. The criterion: three breakages, three messages, three categories, each justified from the message alone.
4. The pipeline, its output, what each stage contributed, and the predicted failure beside the real one.
5. The trace, read rather than run, with the parties derived from your own output.
6. The hardening: your first ordering, five accounts, five rungs, five recovery paths, and what you couldn't fix.
7. The restore, timed, against your written prediction, with a dated retention window.

## Rubric

| Criterion | What full marks look like |
|---|---|
| Diagnosis, not recipe | Every error and failure in the file is explained by which step failed and why, not by what fixed it |
| The transcripts are real | Output is pasted from your own machine, including the parts that didn't work |
| The criterion is met | All three breakages produce different messages, and all three are correctly categorised from the message alone |
| The pipeline earns itself | The question genuinely couldn't be answered by clicking, and the file says why |
| The trace is read, not run | The lookup and route output is interpreted, and the list of parties is derived from it rather than recited |
| Structural over vigilant | The hardening section is about setup that persists, not about intentions to be careful |
| Honesty about failure | What couldn't be fixed is listed with the reason, and the restore section reports what actually happened rather than what should have |
| Dated | Every figure and every checked setting carries the date it was checked |

**The last two rows are this course's own standards, turned around and applied to you.** Every lesson here dates its figures and says where its evidence runs out, and two of them stop to explain why they won't print a number the research couldn't stand behind. Asking you to do the same isn't a formality. An audit that hides what it couldn't fix is exactly the kind of document lesson 8 taught you to sort into measurable, unmeasurable and false.

## What this is not

It isn't a checklist you tick. Five of the seven sections ask you to write a prediction down before you act, and the prediction is where the learning is. Skipping to the doing produces a file that looks finished and taught you nothing.

It isn't a security score. There's no number at the end and no threshold you pass. Lesson 1 was honest that understanding a computer doesn't by itself make a person safer, and a project that ended in a score would be quietly claiming the opposite.

And it isn't finished when the file is. The row you couldn't fix in section 6 is a thing to go and fix, and the provider whose retention window surprised you in section 7 is a decision you now get to make.
