import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { credentials, device } from '../State'

export function redirect() {
  if (credentials.state() == null) {
    Nav.url(path.login.index)
  } else if (device.state() == null) {
    Nav.url(path.setup.index)
  } else {
    if (device.state() === 'computer') {
      Nav.url(path.computer.index)
    } else if (device.state() === 'scanner') {
      Nav.url(path.scanner.index)
    }
  }
}
