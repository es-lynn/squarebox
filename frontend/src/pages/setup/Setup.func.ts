import { device, Device } from '../home/Home.func'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { UserDataStore } from '../../app/storage/LocalStore'

export function configureDevice(deviceType: Device) {
  device.set(deviceType)
  UserDataStore.set('deviceInfo', deviceType)

  if (deviceType === 'scanner') {
    Nav.url(path.scanner.index)
  } else if (deviceType === 'computer') {
    Nav.url(path.computer.index)
  }
}
