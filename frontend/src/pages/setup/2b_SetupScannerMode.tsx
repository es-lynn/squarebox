import React from 'react'

import { Button } from 'native-base'
import { onSelectReceiveQR, onSelectScannerPair, onSelectScanQR } from './SetupStore'

export const SetupScannerModePage = () => {
  return (
    <div>
      <Button onPress={onSelectScanQR}>Scan QR</Button>
      <Button onPress={onSelectReceiveQR}>Receive QR</Button>
      <Button onPress={onSelectScannerPair}>Pairing</Button>
    </div>
  )
}
