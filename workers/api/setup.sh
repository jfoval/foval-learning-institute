#!/usr/bin/env bash
# One-time setup for the accounts Worker. Safe to re-run: the schema is
# CREATE TABLE IF NOT EXISTS, and putting a secret again just overwrites it.
#
#   ./workers/api/setup.sh ~/Downloads/client_secret_*.apps.googleusercontent.com.json
#
# The Google client secret is piped straight from that JSON into wrangler. It is
# never printed, never pasted, and never reaches a terminal scrollback.
set -euo pipefail
trap 'echo "setup.sh failed at line $LINENO (exit $?)" >&2' ERR

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
JSON="${1:-}"

if [ -z "$JSON" ] || [ ! -f "$JSON" ]; then
  echo "usage: $0 <path to client_secret_*.json downloaded from Google Cloud>" >&2
  exit 1
fi

# Command substitution, not `read`: node writes no trailing newline, so `read` returns
# non-zero and `set -e` would kill the script here without printing anything.
CLIENT_ID="$(node -e 'const j=require(process.argv[1]);const w=j.web||j.installed;process.stdout.write(w.client_id)' "$JSON")"
if [ -z "$CLIENT_ID" ]; then echo "could not read client_id from $JSON" >&2; exit 1; fi
echo "==> Google client: $CLIENT_ID"

echo
echo "==> 1/4  Creating the auth tables in D1 (additive; the feedback table is untouched)"
npx --yes wrangler d1 execute foval-feedback --remote --file="$HERE/schema.sql"

echo
echo "==> 2/4  Deploying the Worker"
( cd "$HERE" && npx --yes wrangler deploy )

echo
echo "==> 3/4  Setting AUTH_SECRET (48 random bytes, generated here, not shown)"
openssl rand -base64 48 | ( cd "$HERE" && npx --yes wrangler secret put AUTH_SECRET )

echo
echo "==> 4/4  Setting the Google secrets from the JSON"
printf '%s' "$CLIENT_ID" | ( cd "$HERE" && npx --yes wrangler secret put GOOGLE_CLIENT_ID )
node -e 'const j=require(process.argv[1]);const w=j.web||j.installed;process.stdout.write(w.client_secret)' "$JSON" \
  | ( cd "$HERE" && npx --yes wrangler secret put GOOGLE_CLIENT_SECRET )

echo
echo "Done. RESEND_API_KEY is still outstanding; set it with:"
echo "  cd '$HERE' && npx wrangler secret put RESEND_API_KEY"
echo
echo "Google sign-in will work now. The six-digit email code needs the Resend key."
