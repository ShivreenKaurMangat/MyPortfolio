let staticCache = 'my-cache-1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCache).then(function(cache) {
      return cache.addAll(
        [
          './Fotolia_164011906_Subscription_Monthly_M-1080x675.jpg',
          './images.jpg',
          './software-engineer-vs-software-developer-11.jpg',
          './Teamwork_01.jpg',
          './time-management-1024x896.jpg',
          './sw-init.js',
          './style.css',
          './',
          './index.html'
        ]
      )
    })
  ) 
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cachedNames) {
      return Promise.all(
        cachedNames.filter(function(cachedName) {
          return cachedName.startsWith("my-cache") && cachedName != staticCache;
        }).map(function(cachedName) {
          return caches.delete(cachedName);
        })
      )
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  )
})


