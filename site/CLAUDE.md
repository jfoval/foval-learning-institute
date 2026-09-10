# Working in `site/`

The static site. Everything a learner sees.

    index.html                the whole app shell; `window.FOVAL_API` gates the account features
    assets/app.js             the router, the pages, progress, quizzes, certificates
    assets/styles.css         the palette and the layout. Both themes are defined here
    data/courses.js           GENERATED. Never edit by hand
    sw.js                     the service worker. Its cache name is stamped by the build
    manifest.webmanifest      the PWA manifest

## Rules

1. **Plain HTML, CSS and JS. No framework and no build step.** Keep it that way. This is deliberate,
   not neglect: it has to run fast on a cheap phone, it has to be hostable anywhere, and anyone
   should be able to read the whole thing. No bundler, no transpiler, no npm package in the browser.
   `scripts/build.mjs` is the only thing that generates anything, and it generates data, not code.
2. **`site/data/courses.js` is generated** by `scripts/build.mjs` from `courses/`,
   `curriculum/core-path.yaml` and `curriculum/TAXONOMY.md`. Never edit it by hand. Run
   `npm run build` and commit it when you publish content. Never commit the output of
   `npm run build:drafts`, which includes unpublished courses.
3. **Check anything visual in both themes at phone and desktop width before merging.** There is no
   theme toggle: the site follows `prefers-color-scheme`, so a colour that is only checked in one
   theme is a colour that is only half checked. `npm run shots` renders the four combinations.
4. **Colours come from the tokens in `styles.css`**, in both blocks. A hardcoded hex in a chart or a
   component is a bug in the dark theme by construction, and the lesson linter fails the build on
   one. Two tokens to know about: `--line-strong` and `--navy` are byte-identical in both themes,
   so a chart that uses the pair to distinguish two things distinguishes nothing.
5. **Assets are cache-busted by content hash** at build time, and the service worker's cache name
   and precache list are stamped with them. If you add an asset that `index.html` references,
   add it to the `stamped` map in `scripts/build.mjs` too, or a deploy will be invisible to anyone
   who has visited before. That cost an afternoon once.
6. **The browser is the source of truth for learner progress**, and the site works with no network
   and no account. Nothing may become account-only that works today without one.

## Previewing

    npm run build && npm run serve     # then http://localhost:4173

## Two live constraints

- **Two links still point into the public GitHub repo** via the `REPO` constant in `assets/app.js`:
  "Report a problem" on every lesson, and "editorial standards" on the About page. Both 404 the day
  the repo goes private. See `docs/PLATFORM_ROADMAP.md`.
- **`window.FOVAL_API` in `index.html` is deliberately empty.** The accounts Worker is written and
  tested but not deployed; while this is empty the site behaves exactly as it does now, with no
  sign-in link and no network calls. Setting it before the Worker is deployed gives every visitor a
  broken sign-in page.
