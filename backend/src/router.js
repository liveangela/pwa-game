import fs from 'fs'
import Router from 'koa-router'
import Controller from './controller'

const router = new Router()

// TODO: just success at first time?
router.get('/index.html', (ctx, next) => {
  ctx.redirect('/')
  next()
})

router.get('/', ctx => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream('./static/index.html')
})

router.post('/api/:ctrlName/:method', ctx => {
  const {ctrlName, method} = ctx.params
  if (
    ctrlName &&
    method &&
    Controller[ctrlName] &&
    Controller[ctrlName][method]
  ) {
    ctx.type = 'json'
    ctx.body = Controller[ctrlName][method]()
  }
})

export default router
