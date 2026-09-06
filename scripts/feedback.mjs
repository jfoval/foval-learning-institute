#!/usr/bin/env node
// Read learner feedback out of the Cloudflare D1 database.
//   npm run feedback           new (untriaged) feedback, oldest first
//   npm run feedback -- --all  everything
//   npm run feedback -- --triage 12 15   mark rows 12 and 15 as dealt with
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const cwd = "workers/feedback";
const run = sql => {
  const out = execFileSync("npx", ["--yes", "wrangler@latest", "d1", "execute", "foval-feedback",
    "--remote", "--json", "--command", sql], { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  return JSON.parse(out)[0].results;
};

const triageAt = args.indexOf("--triage");
if (triageAt !== -1) {
  const ids = args.slice(triageAt + 1).filter(a => /^\d+$/.test(a));
  if (!ids.length) { console.error("Give at least one row id: npm run feedback -- --triage 12 15"); process.exit(1); }
  run(`UPDATE feedback SET triaged = 1 WHERE id IN (${ids.join(",")});`);
  console.log(`Marked ${ids.length} row(s) as triaged.`);
  process.exit(0);
}

const all = args.includes("--all");
const rows = run(
  `SELECT id, course, lesson, clarity, struggled, improve, site, received_at, triaged
   FROM feedback ${all ? "" : "WHERE triaged = 0"} ORDER BY received_at;`
);

if (!rows.length) { console.log(all ? "No feedback yet." : "No new feedback."); process.exit(0); }

const clarity = { 1: "1/4 lost most of the way", 2: "2/4 some parts confused me", 3: "3/4 mostly clear", 4: "4/4 clear throughout" };
console.log(`${rows.length} ${all ? "total" : "new"} piece(s) of feedback\n`);
for (const r of rows) {
  console.log(`#${r.id}  ${r.course} / ${r.lesson}`);
  console.log(`      ${r.received_at} via ${r.site || "unknown"}${r.triaged ? "  [triaged]" : ""}`);
  if (r.clarity) console.log(`      clarity: ${clarity[r.clarity]}`);
  if (r.struggled) console.log(`      struggled with: ${r.struggled}`);
  if (r.improve) console.log(`      would improve:  ${r.improve}`);
  console.log();
}
console.log(`Mark as dealt with:  npm run feedback -- --triage ${rows.map(r => r.id).join(" ")}`);
