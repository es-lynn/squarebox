import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export const onSelectComputer = () => {
  Nav.url(path.setup.computer)
}

export const onSelectScanner = () => {
  Nav.url(path.setup.scanner)
}

export const onSelectReceiving = () => {
  Nav.url(path.receiving.scanner)
}

export const onSelectReceiveText = () => Nav.url(path.receiving.text)

export const onSelectSending = () => {
  Nav.url(path.sending.input)
}

export const onSelectTempMain = () => {
  Nav.url(path.temp_main)
}

export const onSelectScanQR = () => Nav.url(path.scanner.scan_qr)

export const onSelectReceiveQR = () => Nav.url(path.scanner.receive_qr)

export const onSelectScannerPair = () => Nav.url(path.scanner.pair)
