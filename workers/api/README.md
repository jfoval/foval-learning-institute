# Accounts and sync

Sign in with Google or with a six-digit code sent to an email address, and your progress
follows you between devices. Cloudflare Worker plus D1, sharing the database the feedback
Worker already uses. No passwords: see `docs/AUTH_OPTIONS.md` for why not, and what it
would cost to add them.

Nothing here is switched on until `window.FOVAL_API` in `site/index.html` points at the
deployed Worker. While it is empty the site behaves exactly as it always has: progress in
the browser, no account, no network calls, no sign-in link. That is the safe default and
it is what is committed.

## What it does

| Route | Method | What it is for |
|---|---|---|
| `/auth/google/start` | GET | Redirects to Google. No Origin header, so it sits outside the origin check. |
| `/auth/google/callback` | GET | Google returns here; sends the browser to `#/signin?token=...`. |
| `/auth/email/start` | POST | Mails a six-digit code. Five an hour per address. |
| `/auth/email/verify` | POST | Code for a session token. Five attempts, ten-minute life, single use. |
| `/auth/session` | GET | Who is this. |
| `/auth/signout` | POST | Deletes the session row. |
| `/state` | GET | The learner's progress, review bank, streak days and prefs. |
| `/state` | PUT | Push local state, merge, get the merged result back. |
| `/account` | POST | Delete the account and every row of it. |

The session token is returned in the body and sent back as `Authorization: Bearer`, not as
a cookie, because the site and the Worker are on different origins and third-party cookies
are going away. **When the site moves to Cloudflare Pages** (`docs/PLATFORM_ROADMAP.md`, "Going private") and the two share
an origin, switch to an HttpOnly, Secure, SameSite=Lax cookie and delete the bearer path.
That is a real improvement, not a tidy-up: a bearer token in `localStorage` is readable by
any script that gets onto the page.

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

The Worker is written and tested but **has never been deployed**. These steps need
credentials the agent sessions do not have.

1. **Create the tables.** They go in the existing `foval-feedback` database alongside the
   feedback table.
   ```
   npx wrangler d1 execute foval-feedback --remote --file=workers/api/schema.sql
   ```
2. **Google OAuth client.** Google Cloud console, APIs and Services, Credentials, Create
   OAuth client ID, type Web application. Authorised redirect URI:
   `https://foval-api.<subdomain>.workers.dev/auth/google/callback`. Free.
3. **Resend.** Sign up, verify the sending domain, create an API key. Free to 3,000 emails
   a month. Then check `MAIL_FROM` in `wrangler.jsonc` matches the verified domain.
4. **Set the secrets** (run each, paste the value when asked):
   ```
   npx wrangler secret put AUTH_SECRET          --cwd workers/api   # 32+ random bytes
   npx wrangler secret put GOOGLE_CLIENT_ID     --cwd workers/api
   npx wrangler secret put GOOGLE_CLIENT_SECRET --cwd workers/api
   npx wrangler secret put RESEND_API_KEY       --cwd workers/api
   ```
   A good `AUTH_SECRET`: `openssl rand -base64 48`.
5. **Deploy:** `npx wrangler deploy --cwd workers/api`
6. **Switch it on:** put the deployed URL in `window.FOVAL_API` in `site/index.html`,
   commit, push. The sign-in link appears on the next page load.

Order matters at step 6. Setting `FOVAL_API` before the tables exist gives every visitor a
broken sign-in page.

## Running it locally

```
node scripts/mailstub.mjs                       # prints the sign-in code instead of mailing it
npx wrangler dev --local --port 8788 --cwd workers/api
node workers/api/test.mjs
```

`wrangler dev` reads `workers/api/.dev.vars`, which is not in git. It needs `AUTH_SECRET`,
`RESEND_API_KEY` (any string), and `MAIL_ENDPOINT=http://127.0.0.1:4179/emails` so the
tests can read the code back instead of sending mail. Apply the schema to the local
database once with `npx wrangler d1 execute foval-feedback --local --file=schema.sql`.

`test.mjs` covers the origin policy, the code lifecycle (wrong code, reuse, expiry), the
session lifecycle, and every merge rule above. 28 checks. Run it before every deploy.

## The write budget

D1's free plan allows 100,000 row writes a day and, since 1 September 2026, queries fail
rather than warn once that is hit. So: progress is one row per lesson updated in place,
`PUT /state` only writes rows the server does not already agree with (pushing an unchanged
state writes nothing), and the browser flushes on a fifteen-second timer and when the tab
goes away rather than on every answered card. A learner finishing a course costs about ten
writes, so the cap is roughly ten thousand learners finishing a course on the same day.
