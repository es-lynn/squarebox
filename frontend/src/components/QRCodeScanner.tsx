import React from 'react'
import { Button, Input } from 'antd'
import { useLinkedState } from '../lib/LinkedState'
import { receivingStore } from '../pages/receiving/ReceivingStore'

export type QRCodeScannerProps = {
  size?: number
  onQRCodeScanned: (content: string) => void
}
// TODO: Replace with a real QRCode scanner
export const QRCodeScanner = ({ size = 256, onQRCodeScanned }: QRCodeScannerProps) => {
  const [content, setContent] = useLinkedState(receivingStore)

  return (
    <div
      style={{
        backgroundImage: 'url("/qrcode.jpg")',
        display: 'flex',
        flexDirection: 'row',
        width: size,
        height: size,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          opacity: 0.9,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Input value={content} onChange={e => setContent(e.target.value)} />
        <Button onClick={() => onQRCodeScanned(content)}>onQRCodeScanned()</Button>
      </div>
    </div>
  )
}