import { LinkedState } from '../../lib/LinkedState'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { UserDataStore } from '../../app/storage/LocalStore'

export type Credentials =
  | { mode: 'offline' }
  | {
      mode: 'online'
      username: string
      encryptionKey: string
    }
  | undefined
export const credentials = new LinkedState<Credentials>(UserDataStore.get('credentials'))

export type Device = 'scanner' | 'computer' | undefined
export const device = new LinkedState<Device>(UserDataStore.get('deviceInfo'))

export function isCredentialsConfigured() {
  if (credentials.state()) {
    return true
  }
  return false
}

export function isDeviceConfigured() {
  if (device.state()) {
    return true
  }
  return false
}

export function redirectToSetupPage() {
  if (device.state() === 'computer') {
    Nav.url(path.computer.index)
  } else if (device.state() === 'scanner') {
    Nav.url(path.scanner.index)
  }
}
