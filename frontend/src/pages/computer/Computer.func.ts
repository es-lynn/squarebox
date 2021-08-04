import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export const onSelectReceive = () => {
  Nav.url(path.receiving.scanner)
}

export const onSelectSend = () => {
  Nav.url(path.sending.input)
}
