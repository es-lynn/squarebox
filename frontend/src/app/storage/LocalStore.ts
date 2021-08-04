import { Credentials, Device } from '../../pages/home/Home.func'
import { SafeStorage } from '../../lib/SafeStorage'

export const UserDataStore = new SafeStorage<{
  deviceInfo: Device
  credentials: Credentials
}>('userdata', {
  deviceInfo: undefined,
  credentials: undefined
})
