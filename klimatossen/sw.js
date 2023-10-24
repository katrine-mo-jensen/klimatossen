const staticCacheName = "site-static-v1.1";

const assets = ["/", "/index.html"];
// kan også linke stylesheets^

// Install Service Worker

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker has been installed");
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("Write asset files to cache");
      cache.addAll(assets);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker has been activated");

  event.waitUntil(
    caches.keys().then((keys) => {
      const filteredKeys = keys.filter((key) => key !== staticCacheName);
      filteredKeys.map((key) => {
        caches.delete(key);
      });
    })
  );
});

/* // Fetch event
self.addEventListener("fetch", (event) => {
  console.log("Fetch event", event);
});
 */
