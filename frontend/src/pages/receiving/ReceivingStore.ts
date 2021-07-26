import { LinkedState } from '../../lib/LinkedState'
import { Nav } from '../../app/Navigation'
import { routes } from '../../routes/routes'

export const receivingStore = new LinkedState<string>('')

export const onQRCodeScanned = (content: string) => {
  Nav.go(routes.receiving.output)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const copyFromInputRef = (ref: any) => {
  ref.current?.focus()
  ref.current?.select()
  document.execCommand('copy')
}
