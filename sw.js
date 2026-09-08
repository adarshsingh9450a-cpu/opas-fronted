// OPAS Auto-Updating Service Worker
const CACHE_NAME = 'opas-app-cache-v5'; // Version 5

self.addEventListener('install', (event) => {
    self.skipWaiting(); 
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json',
                './logo.png.png'   // 👈 NAYA: Yahan aapki purani photo wapas lag gayi
            ]);
        })
    );
});
