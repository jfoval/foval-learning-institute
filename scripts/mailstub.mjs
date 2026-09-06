// Stands in for Resend while developing. Point MAIL_ENDPOINT at http://127.0.0.1:4179/emails
// in workers/api/.dev.vars and the sign-in code is written to a file instead of mailed, so
// workers/api/test.mjs can read it back. Never used in production.
import http from 'node:http';
import fs from 'node:fs';
const OUT = process.env.MAIL_FILE || new URL('../.wrangler/lastmail.json', import.meta.url).pathname;
http.createServer((req, res) => {
  let body = '';
  req.on('data', c => (body += c));
  req.on('end', () => { fs.writeFileSync(OUT, body); res.writeHead(200, { 'Content-Type': 'application/json' }); res.end('{"id":"stub"}'); });
}).listen(4179, '127.0.0.1', () => console.log(`mail stub on 4179, writing to ${OUT}`));
