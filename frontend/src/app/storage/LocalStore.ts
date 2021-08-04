import { SafeStorage } from '../../lib/SafeStorage'
import { Credentials, Device } from '../../pages/State'

export const UserDataStore = new SafeStorage<{
  deviceInfo: Device
  credentials: Credentials
}>('userdata', {
  deviceInfo: undefined,
  credentials: undefined
})
