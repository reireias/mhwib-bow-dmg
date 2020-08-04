importScripts('/mhwib-bow-dmg/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/mhwib-bow-dmg/_nuxt/app.4274285.js",
    "revision": "15f9365dc4e6aeca1ccca176fae1c323"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/commons.app.f3fa7ff.js",
    "revision": "49964eddf49d4cb211edf78979af0079"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/pages/index.e72be68.js",
    "revision": "a77de76311c440c07f958233dc5557ee"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/runtime.8a98adb.js",
    "revision": "9b05ed48054904e1da9033a25c858a5c"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/vendors.app.d011172.js",
    "revision": "bde5801eb9abac44d6b70717f48b1ce5"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/vendors.pages/index.1214b75.js",
    "revision": "1cc1aec6c00a9b2e4e0c07b40be6d865"
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
