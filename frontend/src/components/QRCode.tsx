import styled from '@emotion/styled'
import Button from 'antd/es/button'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { sendQRCodeToServer } from '../pages/sending/SendingStore'

const TextAreaCustom = styled(TextArea)`
  width: 500px;
  margin-bottom: 50px;
`

export const QRCodeComponent = () => {
  const [valueToQr, setValueToQR] = useState('')
  const [showQRGenerator, setShowQRGenerator] = useState(false)
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueToQR(e.target.value)
  }

  const generateQR = () => {
    setShowQRGenerator(true)
    sendQRCodeToServer(valueToQr)
  }

  return (
    <div>
      <TextAreaCustom
        rows={6}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInputChange(e)}
        showCount
      />
      <Button disabled={!valueToQr} onClick={generateQR}>
        Generate QR
      </Button>
      <br />
      <br />
      {showQRGenerator && <QRCode value={valueToQr} />}
    </div>
  )
}
