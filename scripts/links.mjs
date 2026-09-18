/* Every external link in every lesson, checked. `npm run links`.
 *
 * NOT part of `npm run validate`, deliberately, and for the same reason as the quiz checks: it
 * needs the network, it is slow, and a third of what it reports needs a human to look. A check
 * that is slow and noisy inside a gate gets weakened until it passes, or routed around.
 *
 * 403 is not broken. Publishers block scripted requests as a matter of course: every doi.org
 * entry, Bloomberg, CBO, Bogleheads and the NAIC answered 403 here and all of them open fine in a
 * browser. They are listed under "blocked" and counted separately so the dead ones stay visible.
 *
 * Parentheses are balanced when extracting, not cut at the first ")". A DOI and a Wikisource
 * title both carry their own brackets, and stopping early invents 404s that are the extractor's
 * fault: the first run of this reported nine that did not exist.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.env.FOVAL_ROOT ? path.resolve(process.env.FOVAL_ROOT) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";
const only = process.argv.find(a => !a.startsWith("-") && a.endsWith(".md"));

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".md") && /\/(lessons|assessments)\//.test(p)) files.push(p);
  }
})(path.join(ROOT, "courses"));

const map = new Map();
for (const f of files) {
  if (only && !f.endsWith(only)) continue;
  const t = fs.readFileSync(f, "utf8");
  for (const m of t.matchAll(/\]\((https?:\/\/)/g)) {
    let j = m.index + 2, depth = 1;
    while (j < t.length && depth > 0) {
      const c = t[j];
      if (c === "(") depth++;
      else if (c === ")") { if (--depth === 0) break; }
      else if (c === "\n") break;
      j++;
    }
    const url = t.slice(m.index + 2, j).trim();
    if (!url) continue;
    if (!map.has(url)) map.set(url, new Set());
    map.get(url).add(path.relative(ROOT, f));
  }
}

const entries = [...map];
if (!entries.length) { console.log("no links found"); process.exit(0); }
process.stdout.write(`checking ${entries.length} links`);

const results = [];
let i = 0;
async function worker() {
  while (i < entries.length) {
    const [url, where] = entries[i++];
    let code = "ERR";
    for (let n = 0; n < 2 && !/^[123]/.test(code); n++) {
      try {
        const c = new AbortController();
        const t = setTimeout(() => c.abort(), 25000);
        const r = await fetch(url, { redirect: "follow", headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml,application/pdf,*/*" }, signal: c.signal });
        clearTimeout(t);
        code = String(r.status);
      } catch (e) { code = "ERR:" + (e.cause?.code || e.name); }
    }
    results.push({ code, url, where: [...where] });
    if (results.length % 25 === 0) process.stdout.write(".");
  }
}
await Promise.all(Array.from({ length: 12 }, worker));
console.log("");

const ok = results.filter(r => /^[23]/.test(r.code));
const blocked = results.filter(r => r.code === "403" || r.code === "429");
const dead = results.filter(r => !ok.includes(r) && !blocked.includes(r));

for (const r of dead.sort((a, b) => a.url.localeCompare(b.url))) {
  console.log(`\n${r.code}  ${r.url}`);
  for (const w of r.where) console.log(`      ${w}`);
}
console.log(`\n${ok.length} ok, ${blocked.length} blocked (403/429: publishers refusing scripted requests, not broken), ${dead.length} dead.`);
if (dead.length) console.log(`Replace each dead link with one that answers, or drop it and keep the citation in Sources.`);
