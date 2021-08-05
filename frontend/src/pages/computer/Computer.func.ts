import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { UserDataStore } from '../../app/storage/LocalStore'
import { credentials, device } from '../State'
import httyp from 'httyp/index'
import { Cfg } from '../../app/config/Config'

export const onSelectReceive = () => {
  Nav.url(path.receiving.scanner)
}

export const onSelectSend = () => {
  Nav.url(path.sending.input)
}

export const onSelectSyncText = () => {
  Nav.url(path.computer.sync_qr)
}

export const logout = () => {
  UserDataStore.reset('credentials')
  credentials.set(undefined)

  UserDataStore.reset('deviceInfo')
  device.set(undefined)

  Nav.url(path.index)
}
