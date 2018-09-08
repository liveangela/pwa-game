# pwa-game
A tiny game for both offline and online play,
also as the babel version of project [pwa-game-ts](https://github.com/liveangela/pwa-game-ts)
- can play online and offline
- use serviceworker to process offline game logic(keep JS main thread clean)
- use gpu.js to deal with cpu consuming process(in serviceworker and server)

## Dependency
- PWA
- Workbox
- Vue-cli
- Vue
- Vue-Router
- Vuex
- Vuetify
- Pug
- Stylus
- Koa
- Koa-router
- Koa-static
- GPU.js
- Eslint
- Prettier

## Development
```bash
# bash 1
> cd frontend
> npm run serve

# bash 2
> cd backend
> npm run serve

# bash 3
> cd dist
> node server.js
```
##### Note:
- *no serviceworker on development mode*

## Deploy
```bash
# bash 1
> cd backend
> npm run build

# bash 2
> cd frontend
> npm run build

# bash 3
> cd dist
> node server.js
```
##### Note:
- *backend should be build first because frontend need the origin sw.js file made by backend*