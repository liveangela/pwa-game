import Koa from 'koa'
import koaStatic from 'koa-static'
import router from './router'

const app = new Koa()
const port = 3000

app
  .use(koaStatic('./static', {defer: true}))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () => console.log(`server listen at port ${port}`))
