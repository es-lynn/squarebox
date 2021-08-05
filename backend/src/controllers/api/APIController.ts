// import { _200_OKAY, _204_NO_CONTENT } from '../../types/StatusCodes'
// import { Query, Req } from '../Controller.types'
// import { DB, router } from '../../app/App'
//
// type APISendPayloadReq = { id: string; payload: string }
// router.post(
//   '/api/send-payload',
//   (ctx: Req<APISendPayloadReq>, next) => {
//     // const req = ctx.request.body
//     // validate req here
//     // @ts-ignore
//     ctx.set('Access-Control-Allow-Origin', '*')
//     return next()
//   },
//   async ctx => {
//     const req: APISendPayloadReq = ctx.request.body
//     await DB.Data.insert({
//       id: req.id,
//       payload_data: req.payload,
//       qrcode_data: ''
//     })
//     ctx.status = _204_NO_CONTENT
//   }
// )
//
// type APIRetrievePayloadReq = { id: string }
// type APIRetrievePayloadRes = { id: string; payload: string }
// router.get(
//   '/api/retrieve-payload',
//   (ctx: Query<APIRetrievePayloadReq>, next) => {
//     // const req = ctx.request.body
//     // validate req here
//     // @ts-ignore
//     ctx.set('Access-Control-Allow-Origin', '*')
//     return next()
//   },
//   async ctx => {
//     const req: APIRetrievePayloadReq = ctx.request.query
//     const data = await DB.Data.select(req.id)
//     await DB.Data.delete(req.id)
//
//     ctx.status = _200_OKAY
//     ctx.body = {
//       id: data.id,
//       payload: data.payload_data
//     } as APIRetrievePayloadRes
//   }
// )
//
// type APISendQRCodeReq = { id: string; qrcode: string }
// router.post(
//   '/api/send-qrcode',
//   (ctx: Req<APISendQRCodeReq>, next) => {
//     // const req = ctx.request.body
//     // validate req here
//     // @ts-ignore
//     ctx.set('Access-Control-Allow-Origin', '*')
//     return next()
//   },
//   async ctx => {
//     const req: APISendQRCodeReq = ctx.request.body
//     await DB.Data.insert({
//       id: req.id,
//       payload_data: '',
//       qrcode_data: req.qrcode
//     })
//     ctx.status = _204_NO_CONTENT
//   }
// )
//
// type APIRetrieveQRCodeReq = { id: string }
// type APIRetrieveQRCodeRes = { id: string; qrcode: string }
// router.get(
//   '/api/retrieve-qrcode',
//   (ctx: Query<APIRetrieveQRCodeReq>, next) => {
//     // const req = ctx.request.body
//     // validate req here
//     // @ts-ignore
//     ctx.set('Access-Control-Allow-Origin', '*')
//     return next()
//   },
//   async ctx => {
//     const req: APIRetrieveQRCodeReq = ctx.request.query
//     const data = await DB.Data.select(req.id)
//     await DB.Data.delete(req.id)
//
//     ctx.status = _200_OKAY
//     ctx.body = {
//       id: data.id,
//       qrcode: data.qrcode_data
//     } as APIRetrieveQRCodeRes
//   }
// )

export {}
