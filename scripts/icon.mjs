// Render site/assets/icon.svg to the PNG sizes that need one.
//
//   npm run icon
//
// iOS ignores an SVG apple-touch-icon and shows a page thumbnail on the home screen instead,
// and some launchers want a raster in the manifest. Uses the installed Chrome, like
// scripts/social-card.mjs.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SVG = path.join(ROOT, "site", "assets", "icon.svg");
const SIZES = [{ px: 180, file: "apple-touch-icon.png" }, { px: 512, file: "icon-512.png" }];

let chromium;
try {
  ({ chromium } = await import("playwright-core"));
} catch {
  console.error("playwright-core is not installed. Run `npm install` in the repo root and try again.");
  process.exit(1);
}

const launch = { channel: process.env.CHROME_CHANNEL || "chrome" };
if (process.env.CHROME_PATH) { delete launch.channel; launch.executablePath = process.env.CHROME_PATH; }

const browser = await chromium.launch(launch);
try {
  for (const { px, file } of SIZES) {
    const tmp = path.join(os.tmpdir(), `foval-icon-${process.pid}-${px}.html`);
    fs.writeFileSync(tmp, `<!doctype html><html><body style="margin:0;width:${px}px;height:${px}px;overflow:hidden"><img src="file://${SVG}" width="${px}" height="${px}" style="display:block"></body></html>`);
    const page = await browser.newPage({ viewport: { width: px, height: px }, deviceScaleFactor: 1 });
    await page.goto(`file://${tmp}`, { waitUntil: "networkidle" });
    const out = path.join(ROOT, "site", "assets", file);
    await page.screenshot({ path: out, omitBackground: true });
    await page.close();
    fs.unlinkSync(tmp);
    console.log(`wrote ${path.relative(ROOT, out)}`);
  }
} finally {
  await browser.close();
}
