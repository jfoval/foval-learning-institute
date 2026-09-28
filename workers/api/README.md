# Accounts, sync and friends

Make an account with a username and a password, and your progress follows you between
devices. Add friends by username, see the lessons they finish, and cheer them on. Cloudflare
Worker plus D1, sharing the database the feedback Worker already uses, on the Workers Free
plan. No email is ever sent from here.

`window.FOVAL_API` in `site/index.html` points the site at the deployed Worker. Emptying it
turns every account feature off: progress in the browser only, no network calls, no
Log in button.

## Passwords on the free plan

Stretching a password on the server costs 50 to 100 ms of CPU and the Workers Free plan
allows 10 ms, which is why this used to say "no passwords". So the stretching happens in
the learner's browser instead: `passwordKey` in `site/assets/app.js` runs PBKDF2-SHA256,
600,000 rounds (OWASP's figure), salted with `foval-login-v1:<username>`, and sends only
the 32-byte result. The Worker stores `SHA-256(random salt + that result)`.

- **A leaked users table** still costs an attacker 600,000 rounds per guess, exactly as if
  the Worker had done the stretching, because the stored hash is of the stretched value.
- **The Worker spends microseconds**, not milliseconds.
- **The stretched value is what signs you in**, so it is as sensitive in transit as a
  password would be. It travels over TLS like one.
- **A username cannot be renamed**, because the browser's salt is the username. Renaming
  would mean a new password.
- It takes a second or so on an old phone. That is the cost, and it is paid once per sign-in.

Ten wrong passwords in a row lock the account for fifteen minutes. Separately, the
`AUTH_LIMIT` binding allows twenty sign-up, sign-in or reset calls a minute from one IP
address (the address is used as the key and never stored), and `SOCIAL_LIMIT` allows thirty
friend or cheer calls a minute from one account.

## Password resets

There is no automatic reset, by choice: it would need an email-sending account. Instead:

1. The learner emails `window.FOVAL_HELP_EMAIL` (set in `site/index.html`) from the
   address they signed up with, and says their username. `#/reset` tells them how.
2. John runs
   ```
   npm run reset-code -- <username>
   ```
   It prints the email address on file and a one-time code (`ABCD-EFGH`, forty-eight hours,
   five attempts), plus a message ready to paste.
3. **John sends the code to the address the script printed, never to an address given in
   the request.** That is the whole identity check: whoever reads that inbox owns the
   account. A request from a different address gets a reply saying to write from the
   address on the account.
4. The learner enters username, code and a new password on `#/reset`. Every other device
   is signed out.

The script uses `wrangler d1 execute --remote`, so it needs `npx wrangler login` on the
machine it runs on, with an account that can reach the `foval-feedback` database.

## What it does

| Route | Method | What it is for |
|---|---|---|
| `/auth/signup` | POST | `{username, email, key, name?}`. Username 3 to 20 of `[a-z0-9_]`, stored lowercase |
| `/auth/signin` | POST | `{username, key}` |
| `/auth/reset` | POST | `{username, code, key}`, a code from `npm run reset-code` |
| `/auth/session` | GET | Who is this: username, email, name |
| `/auth/signout` | POST | Deletes the session row |
| `/auth/password` | POST | `{oldKey, newKey}`. Signs out every other device |
| `/account/email` | POST | Change the email on record |
| `/account` | POST | Delete the account, its friendships, requests and cheers, and every row of progress |
| `/state` | GET, PUT | The learner's progress, review bank, streak days and prefs; PUT merges |
| `/friends` | GET | Friends with a summary each, requests both ways, cheers received |
| `/friends/<username>` | GET | A friend's finished lessons and study days. Friends only; never scores |
| `/friends/request` | POST | `{username}`. If they had already asked you, you are friends at once |
| `/friends/accept` | POST | `{username}` |
| `/friends/remove` | POST | `{username}`. Declines, cancels or unfriends, whichever applies |
| `/cheer` | POST | `{username, course, lesson}`. Friends only, finished lessons only, once each |
| `/cheers/seen` | POST | Marks your cheers seen |

The session token is returned in the body and sent back as `Authorization: Bearer`, not as
a cookie, because the site and the Worker are on different origins and third-party cookies
are going away. **When the site moves to Cloudflare Pages** (`docs/PLATFORM_ROADMAP.md`, "Going private") and the two share
an origin, switch to an HttpOnly, Secure, SameSite=Lax cookie and delete the bearer path.
That is a real improvement, not a tidy-up: a bearer token in `localStorage` is readable by
any script that gets onto the page.

## What friends see

Your name if you gave one, your username, the lessons you finish and when, and the days you
study in the last four months. Not your quiz scores, your review bank or your email. Anyone
with your username can send a request; nothing more is visible until you accept. A cheer is
seen only by the person cheered, and nothing is counted publicly. The rules are at
`#/community` and in `docs/PLATFORM_ROADMAP.md` Phase 4.

## The merge

Signing in never replaces local progress. The browser pushes what it has, the server merges
it with what the account has, and the merged result comes back:

- a lesson that is done anywhere stays done
- the higher quiz score wins
- a review item keeps the schedule that is further ahead (more reps, then later due date)
- a day's activity count keeps the larger tally
- the device you are on sets your hours per week; a blank name never erases a stored one

Local-only fields, feedback above all, are preserved when the merged state is written back.

## Deploying it

**Live since 2026-09-28** at `https://foval-api.johnfoval.workers.dev`. These are the
steps it took, for a redeploy or a rebuild. No outside accounts are needed: no Google
client, no Resend. Only the Cloudflare account the feedback Worker already runs on.
The Workers Free plan accepted both rate-limit bindings.

1. **Log in** with the Cloudflare account that owns `foval-feedback`: `npx wrangler login`.
   (On 2026-09-28 the login on John's Mac could not reach that database, error 7403.)
2. **Create the tables** in the existing database, beside the feedback table:
   ```
   npx wrangler d1 execute foval-feedback --remote --file=workers/api/schema.sql
   ```
3. **Deploy:** `npx wrangler deploy --cwd workers/api`. It prints the Worker's URL.
4. **Switch it on:** put that URL in `window.FOVAL_API` in `site/index.html`, check
   `FOVAL_HELP_EMAIL` beside it, commit, push. Sign in and Friends appear on the next load.

Order matters at step 4. Setting `FOVAL_API` before the tables exist gives every visitor a
broken sign-in page.

## Running it locally

```
npx wrangler d1 execute foval-feedback --local --file=schema.sql --cwd workers/api
npx wrangler dev --local --port 8788 --cwd workers/api
node workers/api/test.mjs
```

`test.mjs` covers the origin policy, sign-up and sign-in, lockout, the rate limit, every
merge rule, friends and cheers end to end, password changes, a reset through the real
`reset-code` script, and account deletion. 75 checks. Run it before every deploy. To try
the pages, `npm run build`, set `FOVAL_API` to `http://127.0.0.1:8788` in
`dist/index.html` (not `site/`), and `npm run serve`.

## The write budget

D1's free plan allows 100,000 row writes a day and, since 1 September 2026, queries fail
rather than warn once that is hit. So: progress is one row per lesson updated in place,
`PUT /state` only writes rows the server does not already agree with (pushing an unchanged
state writes nothing), and the browser flushes on a fifteen-second timer and when the tab
goes away rather than on every answered card. A learner finishing a course costs about ten
writes; a friend request, an acceptance or a cheer costs one to three. Reading a friend's
page writes nothing.
