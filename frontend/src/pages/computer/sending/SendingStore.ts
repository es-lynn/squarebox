import {} from 'reactjs-commons'
import { LinkedState } from '../../../lib/LinkedState'
import { Nav } from '../../../app/Navigator'
import { path } from '../../../routes/path'
import httyp from 'httyp'
import { Cfg } from '../../../app/config/Config'
import { credentials } from '../../State'

export const sendingStore = new LinkedState<string>('')

export const onNext = () => Nav.url(path.sending.display)

export const sendQRCodeToServer = async (qrcode: string) => {
  // @ts-ignore
  const username: string = credentials.state()['username']
  await httyp
    .url(`${Cfg.BACKEND_URL}/send-qrcode`)
    .body_json({
      id: username,
      qrcode
    })
    .post()
}
