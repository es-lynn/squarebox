import { device, Device } from '../home/Home.func'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export function configureDevice(deviceType: Device) {
  device.set(deviceType)

  if (deviceType === 'scanner') {
    Nav.url(path.scanner.index)
  } else if (deviceType === 'computer') {
    Nav.url(path.computer.index)
  }
}
