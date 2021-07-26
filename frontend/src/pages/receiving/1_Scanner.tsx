import React from 'react'
import Text from 'antd/es/typography/Text'
import { QRCodeScanner } from '../../components/QRCodeScanner'
import { onQRCodeScanned } from './ReceivingStore'

export const ReceivingScannerPage = () => {
  return (
    <>
      <Text>1. Scan QR Code here</Text>
      <QRCodeScanner onQRCodeScanned={onQRCodeScanned} />
    </>
  )
}
