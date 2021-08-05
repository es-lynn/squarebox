import {} from 'reactjs-commons'
import { LinkedState } from '../../../lib/LinkedState'
import { Nav } from '../../../app/Navigator'
import { path } from '../../../routes/path'
import { credentials } from '../../State'
import { API } from '../../../services/API'
import { encrypt } from "../../../services/EncryptionService";

export const sendingStore = new LinkedState<string>('')

export const onNext = () => Nav.url(path.sending.display)

export const sendQRCodeToServer = async (qrcode: string) => {
  if (credentials.state()?.mode === 'online') {
    // @ts-ignore
    const username: string = credentials.state()['username']
    // @ts-ignore
    const encryptionKey: string = credentials.state()['encryptionKey']
    const encryptedQRCode = encrypt(qrcode, encryptionKey)
    await API.send_qrcode({
      id: username,
      qrcode: encryptedQRCode
    })
  }
}
