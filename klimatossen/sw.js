// Install Service Worker
// Register the service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.error("service worker not registered", err));
}

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker has been installed");
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker has been activated");
});

// Fetch event
self.addEventListener("fetch", (event) => {
  console.log("Fetch event", event);
});
