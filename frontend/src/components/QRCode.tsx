import Button from 'antd/es/button'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export const QRCodeComponent = () => {
  const [valueToQr, setValueToQR] = useState('')
  const [showQRGenerator, setShowQRGenerator] = useState(false)
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueToQR(e.target.value)
  }

  const generateQR = () => {
    setShowQRGenerator(true)
  }

  return (
    <div>
      <TextArea
        rows={6}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInputChange(e)}
        showCount
      />
      <Button onClick={generateQR}>Generate QR</Button>
      <br />
      <br />
      {showQRGenerator && <QRCode value={valueToQr} />}
    </div>
  )
}
