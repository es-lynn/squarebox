import { DB } from '../app/db/Database'

type APISendPayloadReq = { id: string; payload: string }

export const send_payload = async (data: APISendPayloadReq): Promise<{}> => {
  // const posts = await DB_Posts.scan()
  // const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime())
  // return sortedPosts
  await DB.PayloadData.insert({
    id: data.id,
    payload_data: data.payload
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
