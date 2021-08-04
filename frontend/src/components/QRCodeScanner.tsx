import React from 'react'
import { Button, Input } from 'native-base'
import { useLinkedState } from '../lib/LinkedState'
import { receivingStore } from '../pages/temp/receiving/ReceivingStore'
import QrReader from 'react-qr-reader'

export type QRCodeScannerProps = {
  size?: number
  onQRCodeScanned: (content: string) => void
}
// TODO: Replace with a real QRCode scanner
export const QRCodeScanner = ({ size = 256, onQRCodeScanned }: QRCodeScannerProps) => {
  const [content, setContent] = useLinkedState(receivingStore)

  const handleError = (err: any) => {
    console.error(err)
  }
  const onScan = async (hash: string | null) => {
    if (hash) {
      onQRCodeScanned(hash)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: size,
        gap: '10px',
        alignItems: 'center'
      }}
    >
      <QrReader delay={1000} onError={handleError} onScan={onScan} style={{ width: '100%' }} />
      <Input value={content} onChangeText={text => setContent(text)} />
      <Button onPress={() => onQRCodeScanned(content)}>onQRCodeScanned()</Button>
    </div>
  )
}
