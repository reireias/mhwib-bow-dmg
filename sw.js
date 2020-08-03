importScripts('/mhwib-bow-dmg/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/mhwib-bow-dmg/_nuxt/app.9f0a0f1.js",
    "revision": "7025c994f4b2d0e7dbd75b6c81b0deeb"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/commons.app.79b2d39.js",
    "revision": "9114292ebdb5406fd62cc7256928cd88"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/pages/index.75dca22.js",
    "revision": "98c336891e32c5f81a667e611960b1b1"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/runtime.873b73b.js",
    "revision": "4889c9b8142730a8917e59acca8c9000"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/vendors.app.c2f14d4.js",
    "revision": "4c4c918dbfb5f997286acf1d88e73abc"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/vendors.pages/index.2cd4ea8.js",
    "revision": "b79de069461d3a5a44555bce9a23f5ca"
  }
], {
  "cacheId": "mhwib-bow-dmg",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/mhwib-bow-dmg/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/mhwib-bow-dmg/.*'), workbox.strategies.networkFirst({}), 'GET')
