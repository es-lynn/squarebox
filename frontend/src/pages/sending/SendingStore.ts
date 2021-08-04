import {} from 'reactjs-commons'
import { LinkedState } from '../../lib/LinkedState'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import httyp from 'httyp'
import { Cfg } from '../../app/config/Config'

export const sendingStore = new LinkedState<string>('')

export const onNext = () => Nav.url(path.sending.display)

export const sendQRCodeToServer = async (qrcode: string) => {
  console.log('test')
  await httyp
    .url(`${Cfg.BACKEND_URL}/api/send-qrcode`)
    .body_json({
      id: '1',
      qrcode
    })
    .post()
}
