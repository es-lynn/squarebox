import { DB } from '../app/db/Database'
import { DateUtil } from "@aelesia/commons/dist/src/collections/util/DateUtil";
import { StringUtil } from "@aelesia/commons/dist/src/collections/util/StringUtil";
import { TimeUtil } from "@aelesia/commons/dist/src/collections/util/TimeUtil";

type APISendPayloadReq = { id: string; payload: string }

export const send_payload = async (data: APISendPayloadReq): Promise<{}> => {
  await DB.PayloadData.insert({
    id: data.id,
    payload_data: data.payload,
    created_at: new Date()
  })
  return {}
}

type APIRetrievePayloadReq = { id: string }
type APIRetrievePayloadRes = { id: string; payload: string }

export const retrieve_payload = async (
  data: APIRetrievePayloadReq
): Promise<APIRetrievePayloadRes> => {
  const payload = await DB.PayloadData.select(data.id)
  if (DateUtil.add(TimeUtil.ONE_MINUTE, payload.created_at) > new Date()) {
    await DB.PayloadData.delete(data.id)
    throw Error('Data not found')
  }
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
    qrcode_data: data.qrcode,
    created_at: new Date()
  })
  return {}
}

type APIRetrieveQRCodeReq = { id: string }
type APIRetrieveQRCodeRes = { id: string; qrcode: string }

export const retrieve_qrcode = async (
  data: APIRetrieveQRCodeReq
): Promise<APIRetrieveQRCodeRes> => {
  const qrcode = await DB.QRCodeData.select(data.id)
  if (DateUtil.add(TimeUtil.ONE_MINUTE, qrcode.created_at) > new Date()) {
    await DB.QRCodeData.delete(data.id)
    throw Error('Data not found')
  }
  await DB.QRCodeData.delete(data.id)

  return {
    id: qrcode.id,
    qrcode: qrcode.qrcode_data
  }
}
