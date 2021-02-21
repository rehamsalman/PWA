var cacheName='petsore-v1';
var cacheFiles=[
    'index.html',
    'lessons.js',
    'cw1.webmanifest',
    'intel.png'
];

self.addEventListener('install',(e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })

    );
});