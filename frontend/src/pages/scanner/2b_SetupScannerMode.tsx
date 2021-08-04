import React from 'react'

import { Button } from 'native-base'

import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export const SetupScannerModePage = () => {
  return (
    <div>
      <Button onPress={onSelectScanQR}>Scan QR</Button>
      <Button onPress={onSelectReceiveQR}>Receive QR</Button>
      <Button onPress={onSelectScannerPair}>Pairing</Button>
    </div>
  )
}

export const onSelectScanQR = () => Nav.url(path.scanner.scan_qr)

export const onSelectReceiveQR = () => Nav.url(path.scanner.receive_qr)

export const onSelectScannerPair = () => Nav.url(path.scanner.pair)
