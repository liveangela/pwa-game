import gameEngine from './controller/offline'

workbox.core.setCacheNameDetails({prefix: 'pwa-game'})
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  cleanUrls: false // dont add .html to end to support "clean" URLs
})

workbox.routing.registerRoute(
  /\/api/,
  ({url, event}) => {
    const path = url.pathname.split('/')
    const funcName = path.pop()
    const className = path.pop()
    if (gameEngine[className] && gameEngine[className][funcName]) {
      return event.request.json().then(body => {
        const res = gameEngine[className][funcName](body) // res should be json
        return new Response(JSON.stringify(res))
      })
    }
    return fetch(event.request)
  },
  'POST'
)

workbox.clientsClaim()
workbox.skipWaiting()
