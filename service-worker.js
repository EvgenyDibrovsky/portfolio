const CACHE_NAME = 'cache-edweb.site-v36';
const urlsToCache = [
  '/',
  '/index.html', // добавьте другие ресурсы, которые вы хотите кешировать
];

// Установка Service Worker и кеширование ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Принудительно активирует Service Worker после установки
});

// Отлов сетевых запросов
self.addEventListener('fetch', event => {
  // Игнорируем запросы с схемой 'chrome-extension'
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Игнорируем POST-запросы
  if (event.request.method === 'POST') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// Обновление Service Worker и очистка старых кешей
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
