const CACHE_NAME = 'my-site-cache-v3';
const urlsToCache = [

  'index.html',
   'en.html',
    'ge.html',
  'service-worker.js',
     'js/map.js',
      'js/app.js',
        'styles.css'
      ];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    console.log('Opened cache');
    return cache.addAll(urlsToCache)
  }).catch((error) => console.log('Caching error: ', error)))
});
self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(caches.match(event.request).then((response) => {
    return response || fetch(event.request)
  }))
})