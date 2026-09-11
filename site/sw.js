/* Foval Learning Institute service worker: network-first, cache fallback, so lessons read offline. */
const CACHE = "foval-85d9d672";
const CORE = ["./", "./index.html", "./assets/styles.css?v=225e8f60", "./assets/app.js?v=dcc5cec0", "./data/courses.js?v=54f5d1ea", "./manifest.webmanifest"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request).then(res => {
      // Only a good response is worth keeping: a cached 404 would outlive the fix.
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => {
      if (r) return r;
      // Offline and not cached: a page gets the app shell, which can show what it has.
      // Anything else (an image, a course's content file) gets a real failure, not HTML.
      if (e.request.mode === "navigate") return caches.match("./index.html");
      return Response.error();
    }))
  );
});
