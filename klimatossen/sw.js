const staticCacheName = "site-static-v1.2";
const dynamicCacheName = "site-dynamic-v1";

const assets = [
  "/",
  "/index.html",
  "src/component/header/header.module.scss",
  "/fallback.html",
];
// kan også linke stylesheets^

caches.open("my-cache").then((cache) => {
  cache.addAll(assets);
});

// Install Service Worker

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker has been installed");

  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Write asset files to cache");
      cache.addAll(assets).catch((error) => {
        console.log(error, "Der er en fejl");
      });
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker has been activated");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys

          .filter((key) => key !== staticCacheName)

          .map((key) => caches.delete(key))
      );
    })
  );
});

// Fetch even
self.addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf("http") === 0)) return;

  event.respondWith(
    caches
      .match(event.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(event.request).then(async (fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(event.request.url, fetchRes.clone());

              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        // Hvis ovenstående giver fejl kaldes fallback siden
        return caches.match("/fallback.html");
      })
  );
  // Limit
  const limitCacheTwo = (cacheName, numberOfAllowedFiles) => {
    caches.open(cacheName).then((cache) => {
      cache.keys().then((keys) => {
        if (keys.length > numberOfAllowedFiles) {
          cache
            .delete(keys[0])
            .then(limitCacheTwo(caches, numberOfAllowedFiles));
        }
      });
    });
  };

  limitCacheTwo(dynamicCacheName, 2);
});
