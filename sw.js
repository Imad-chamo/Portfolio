// Service Worker pour PWA
const CACHE_NAME = 'imad-portfolio-v1.0.0';
const RUNTIME_CACHE = 'runtime-cache-v1';

// Fichiers à mettre en cache immédiatement
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/Style/Home.css',
  '/Style/Home.js',
  '/assets/icon.png',
  '/assets/profile picture.png',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  // Logs uniquement en développement (Service Worker s'exécute dans un contexte séparé)
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie: Cache First pour les assets statiques, Network First pour le reste
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET
  if (request.method !== 'GET') {
    return;
  }

  // Ignorer les requêtes vers des domaines externes (sauf CDN)
  if (url.origin !== location.origin && !url.href.includes('cdnjs.cloudflare.com') && !url.href.includes('fonts.googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Cache First pour les assets statiques
      if (cachedResponse && (request.url.includes('.css') || request.url.includes('.js') || request.url.includes('assets/'))) {
        return cachedResponse;
      }

      // Network First pour le reste
      return fetch(request)
        .then((response) => {
          // Ne mettre en cache que les réponses valides
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cloner la réponse pour la mettre en cache
          const responseToCache = response.clone();

          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Si le réseau échoue, retourner le cache si disponible
          if (cachedResponse) {
            return cachedResponse;
          }
        });
    })
  );
});

// Gestion des messages depuis le client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

