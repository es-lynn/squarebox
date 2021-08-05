import { DB } from '../app/db/Database'

type APISendPayloadReq = { id: string; payload: string }

export const send_payload = async (data: APISendPayloadReq): Promise<{}> => {
  await DB.PayloadData.insert({
    id: data.id,
    payload_data: data.payload,
  })
  return {}
}

type APIRetrievePayloadReq = { id: string }
type APIRetrievePayloadRes = { id: string; payload: string }

export const retrieve_payload = async (
  data: APIRetrievePayloadReq
): Promise<APIRetrievePayloadRes> => {
  const payload = await DB.PayloadData.select(data.id)
  await DB.PayloadData.delete(data.id)

  return {
    id: payload.id,
    payload: payload.payload_data
  }
}

type APISendQRCodeReq = { id: string; qrcode: string }

export const send_qrcode = async (data: APISendQRCodeReq): Promise<{}> => {
  await DB.QRCodeData.insert({
    id: data.id,
    qrcode_data: data.qrcode
  })
  return {}
}

type APIRetrieveQRCodeReq = { id: string }
type APIRetrieveQRCodeRes = { id: string; qrcode: string }

export const retrieve_qrcode = async (
  data: APIRetrieveQRCodeReq
): Promise<APIRetrieveQRCodeRes> => {
  const qrcode = await DB.QRCodeData.select(data.id)
  await DB.QRCodeData.delete(data.id)

  return {
    id: qrcode.id,
    qrcode: qrcode.qrcode_data
  }
}
