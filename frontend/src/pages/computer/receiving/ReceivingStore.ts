import { LinkedState } from '../../../lib/LinkedState'
import { Nav } from '../../../app/Navigator'
import { path } from '../../../routes/path'

export const receivingStore = new LinkedState<string>('')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onQRCodeScanned = (content: string) => {
  receivingStore.set(content)
  Nav.url(path.receiving.output)
}

// eslint-disable-next-line
export const copyFromInputRef = (ref: any) => {
  ref.current?.focus()
  ref.current?.select()
  document.execCommand('copy')
}
