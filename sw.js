importScripts('/mhwib-bow-dmg/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/mhwib-bow-dmg/_nuxt/2c433bc54a816b4e35aa.js",
    "revision": "d406c4ca4dd3f12ab35b7f4f45d5e984"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/42c6a8ec4d2132eb0ba4.js",
    "revision": "7aa1b3a4bdebe05657a21093f47b6e26"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/4ee2893889ca0edf7657.js",
    "revision": "cfa2a602a2869bc38a46188950d18517"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/a0fa65d5636501ecb62e.js",
    "revision": "da17d01d2579559f111bd1d248848f0b"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/b51a2c3b7a49664ebd72.js",
    "revision": "6ac9b950b3db2947d834ea6f8bc8164b"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/ff8a2ad59f18fbde4d43.js",
    "revision": "741a9f99e2be63159f96991da4e9df72"
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
