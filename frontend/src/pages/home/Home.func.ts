import { LinkedState } from '../../lib/LinkedState'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

type Credentials =
  | { mode: 'offline' }
  | {
      mode: 'online'
      username: string
      encryptionKey: string
    }
  | undefined
export const credentials = new LinkedState<Credentials>(undefined)

export type Device = 'scanner' | 'computer' | undefined
export const device = new LinkedState<Device>(undefined)

export function isCredentialsConfigured() {
  if (credentials.state()?.mode === 'offline') {
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

export function redirectToPage() {
  if (device.state() === 'computer') {
    Nav.url(path.computer.index)
  } else if (device.state() === 'scanner') {
    Nav.url(path.scanner.index)
  }
}
