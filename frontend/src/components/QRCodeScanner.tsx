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
    <div>
      <Input value={content} onChange={e => setContent(e.target.value)} />
      <Button onClick={() => onQRCodeScanned(content)}>onQRCodeScanned()</Button>
    </div>
  )
}
