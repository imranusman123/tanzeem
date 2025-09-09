const CACHE_NAME = "tanzeem-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/service-worker.js"
];

// انسٹالیشن پر cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// fetch → cache first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
