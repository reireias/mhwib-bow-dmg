importScripts('/mhwib-bow-dmg/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/mhwib-bow-dmg/_nuxt/32a75e88077593d7c03d.js",
    "revision": "d1840162da66fc8fcfe6409c4e267350"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/4f4f428060182376e037.js",
    "revision": "ec47b56bd70afd30dc34ce4074f94904"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/74b4f1c355829f14bbd9.js",
    "revision": "9b7c704c616d64241daf7f4ded1e78c6"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/83cfa10a5348789f3eca.js",
    "revision": "ea219a4b6b14f32175fbb01b7404eed9"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/bc1011c88697a83058ef.js",
    "revision": "ae52f6496d1f4dc0ce2f249bc134643d"
  },
  {
    "url": "/mhwib-bow-dmg/_nuxt/d183e28fead23637ee9d.js",
    "revision": "3bcd7b67219cf851404f9e8ac038c489"
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
