import { API } from '../../services/API'
import { Cfg } from '../../app/config/Config'

Cfg.BACKEND_URL = 'https://9txb0mlo0g.execute-api.ap-southeast-1.amazonaws.com/develop'

describe('API', () => {
  test('send-qrcode', async () => {
    await API.send_qrcode({
      id: '123',
      qrcode: 'abc'
    })
  })
  test('retrieve-qrcode', async () => {
    const data = await API.retrieve_qrcode({
      id: '123'
    })
    expect(data.qrcode).toEqual('abc')
  })

  test('send-payload', async () => {
    await API.send_payload({
      id: '456',
      payload: 'def'
    })
  })
  test('retrieve-payload', async () => {
    const data = await API.retrieve_payload({
      id: '456'
    })
    expect(data.payload).toEqual('def')
  })
})
