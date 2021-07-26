import { Nav } from '../../app/Navigation'
import { routes } from '../../routes/routes'

export const onSelectComputer = () => {
  Nav.go(routes.setup.computer)
}

export const onSelectScanner = () => {
  Nav.go(routes.setup.scanner)
}

export const onSelectReceiving = () => {
  Nav.go(routes.receiving.scanner)
}

export const onSelectSending = () => {
  Nav.go(routes.sending.input)
}
