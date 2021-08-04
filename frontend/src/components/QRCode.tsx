import styled from '@emotion/styled'
import Button from 'antd/es/button'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const TextAreaCustom = styled(TextArea)`
  width: 500px;
  margin-bottom: 50px;
`

export const QRCodeComponent = () => {
  const [valueToQr, setValueToQR] = useState('')
  const [textValue, setTextValue] = useState('')
  const [showQRGenerator, setShowQRGenerator] = useState(false)
  const textLengthRegex = /.{1,100}/g //adjust the max character to get the QR code size
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
  const videoFrameRateInMS = 1000
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const generateQR = async () => {
    const strArray = textValue.match(textLengthRegex)
    setShowQRGenerator(true)
    if (!strArray) return
    for (let i = -1; i < strArray.length + 1; i++) {
      if (i === -1) {
        setValueToQR(strArray.length + '--||SQUAREBOXSTART||--' + strArray.length)
      } else if (i === strArray.length) {
        setValueToQR(+strArray.length + '--||SQUAREBOXEND||--' + strArray.length)
      } else {
        setValueToQR(strArray[i])
      }
      await delay(videoFrameRateInMS)

      if (i === strArray.length) {
        i = -2
      }
    }
  }

  return (
    <div>
      <TextAreaCustom
        rows={6}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInputChange(e)}
        showCount
      />
      <Button disabled={!textValue} onClick={generateQR}>
        Generate QR
      </Button>
      <br />
      <br />
      {showQRGenerator && <QRCode value={valueToQr} />}
    </div>
  )
}
