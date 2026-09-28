// Answer a password-reset request. Prints the email address on file for the username and a
// one-time code, good for forty-eight hours, that sets a new password on the sign-in page.
//
//   npm run reset-code -- <username>            against the live database
//   npm run reset-code -- <username> --local    against `wrangler dev --local` (the tests)
//
// Send the code to the address this prints, never to an address given in the request.
// That is the whole identity check: whoever reads that inbox owns the account.
// workers/api/README.md, "Password resets".
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const local = args.includes('--local');
const asJson = args.includes('--json');
const username = (args.find(a => !a.startsWith('--')) || '').trim().toLowerCase();
if (!/^[a-z0-9_]{3,20}$/.test(username)) {
  console.error('Usage: npm run reset-code -- <username> [--local]');
  process.exit(2);
}

const cwd = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'workers', 'api');
function d1(sql) {
  // The username is checked against [a-z0-9_] above and the code alphabet is fixed, so
  // nothing from outside reaches this string unescaped.
  const out = execFileSync('npx', ['wrangler', 'd1', 'execute', 'foval-feedback', local ? '--local' : '--remote', '--json', '--command', sql],
    { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  return JSON.parse(out)[0].results;
}

const [user] = d1(`SELECT id, email FROM users WHERE username = '${username}'`);
if (!user) { console.error(`No account has the username ${username}.`); process.exit(1); }

// No 0/O or 1/I/L, so it survives being read off a phone.
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const raw = Array.from(crypto.randomBytes(8), b => ALPHABET[b % ALPHABET.length]).join('');
const code = `${raw.slice(0, 4)}-${raw.slice(4)}`;
const hash = crypto.createHash('sha256').update(raw).digest('base64url');
const expires = Date.now() + 48 * 3600 * 1000;
d1(`INSERT INTO reset_codes (user_id, code_hash, expires_at, attempts) VALUES ('${user.id}', '${hash}', ${expires}, 0)
    ON CONFLICT(user_id) DO UPDATE SET code_hash = excluded.code_hash, expires_at = excluded.expires_at, attempts = 0`);

if (asJson) { console.log(JSON.stringify({ username, email: user.email, code })); process.exit(0); }

console.log(`
Username:       ${username}
Email on file:  ${user.email || '(none)'}
Reset code:     ${code}   (48 hours, single use)

Send this to ${user.email || 'the address on file'}, and only to that address:
----------------------------------------------------------------------
Subject: Your Foval password reset

Hi,

Here is the code to reset the password for ${username}: ${code}

Go to https://www.fovallearninginstitute.org/#/reset, enter your username,
this code and a new password. It works once and expires in 48 hours.

If you did not ask for this, ignore it. Nothing changes until the code is used.

John
Foval Learning Institute
----------------------------------------------------------------------`);
