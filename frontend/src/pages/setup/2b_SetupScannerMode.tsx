import React from 'react'

import QrReader from 'react-qr-reader'
import styled from '@emotion/styled'
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
