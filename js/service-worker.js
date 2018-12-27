/* =============================================================== */
/* EXAMPLE FROM: https://developers.google.com/web/fundamentals/codelabs/offline/ */
/* =============================================================== */

const CACHE_NAME = 'my-site-cache-v3';
const urlsToCache = [
  '/kaldatalu/',
  '/kaldatalu/index.html',
  '/kaldatalu/styles.css'
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }).catch((error) => console.log('Caching error: ', error))
  );
});

self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});