import httyp from 'httyp'
import { Cfg } from '../app/config/Config'
import CryptoJS from 'crypto-js'

type APIRetrieveQRCodeReq = { id: string }
type APIRetrieveQRCodeRes = { id: string; qrcode: string }
async function retrieve_qrcode(data: APIRetrieveQRCodeReq): Promise<APIRetrieveQRCodeRes> {
  return (
    await httyp
      .url(`${Cfg.BACKEND_URL}/retrieve-qrcode`)
      .params({
        id: data.id
      })
      .get<APIRetrieveQRCodeRes>()
  ).data
}

type APISendQRCodeReq = { id: string; qrcode: string }
async function send_qrcode(data: APISendQRCodeReq) {
  await httyp.url(`${Cfg.BACKEND_URL}/send-qrcode`).body_json(data).post()
}

type APIRetrievePayloadReq = { id: string }
type APIRetrievePayloadRes = { id: string; payload: string }
async function retrieve_payload(data: APIRetrievePayloadReq): Promise<APIRetrievePayloadRes> {
  return (
    await httyp
      .url(`${Cfg.BACKEND_URL}/retrieve-payload`)
      .params({
        id: data.id
      })
      .get<APIRetrievePayloadRes>()
  ).data
}

type APISendPayloadReq = { id: string; payload: string }
async function send_payload(data: APISendPayloadReq) {
  await httyp.url(`${Cfg.BACKEND_URL}/send-payload`).body_json(data).post()
}

export const API = { send_qrcode, retrieve_qrcode, send_payload, retrieve_payload }

