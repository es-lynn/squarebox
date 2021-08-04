import React from 'react'
import { Button } from 'antd'
import { onSelectReceiveQR, onSelectScannerPair, onSelectScanQR } from './SetupStore'

export const SetupScannerModePage = () => {
  return (
    <div>
      <Button onClick={onSelectScanQR}>Scan QR</Button>
      <Button onClick={onSelectReceiveQR}>Receive QR</Button>
      <Button onClick={onSelectScannerPair}>Pairing</Button>
    </div>
  )
}
