import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import cors from '@koa/cors'

export * from './db/Database'

export const router = new Router()
export const server = (() => {
  const koa = new Koa()

  require('../controllers/api/APIController')

  koa
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(
      cors({
        origin: '*'
      })
    )

  return koa
})()
