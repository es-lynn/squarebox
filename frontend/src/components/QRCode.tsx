import { Button, TextArea } from 'native-base'
import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { sendQRCodeToServer } from '../pages/sending/SendingStore'
import { Nav } from '../app/Navigator'
import { withStyle } from 'reactjs-commons'

export const QRCodeComponent = () => {
  const [valueToQr, setValueToQR] = useState('')
  const [textValue, setTextValue] = useState('')
  const [showQRGenerator, setShowQRGenerator] = useState(false)
  const textLengthRegex = /.{1,100}/g //adjust the max character to get the QR code size
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
  const videoFrameRateInMS = 1000

  const generateQR = async () => {
    const strArray = textValue.match(textLengthRegex)
    setShowQRGenerator(true)
    sendQRCodeToServer(valueToQr)
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
      <TextAreaCustom onChangeText={setTextValue} />
      <Button disabled={!textValue} onPress={generateQR}>
        Generate QR
      </Button>
      <Button onPress={() => Nav.url('/')}>Restart</Button>
      <br />
      <br />
      {showQRGenerator && <QRCode value={valueToQr} />}
    </div>
  )
}

const TextAreaCustom = withStyle(TextArea)({
  width: 500,
  marginBottom: 20
})
