import { LinkedState } from '../lib/LinkedState'
import { UserDataStore } from '../app/storage/LocalStore'

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
