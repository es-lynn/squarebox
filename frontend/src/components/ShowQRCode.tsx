import React, { useEffect, useState } from 'react'
import { PageView } from './business/PageView'
import { Input as AntInput } from 'antd'
import QRCode from 'react-qr-code'
import { sendQRCodeToServer } from '../pages/computer/sending/SendingStore'
import { Nav } from '../app/Navigator'
import { useLinkedState } from '../lib/LinkedState'
import { generatingStore } from '../pages/computer/receiving/ReceivingStore'
import {
  BodyText,
  HeaderText,
  PrimaryButton,
  SecondaryButton,
  TwoButtonGrid,
  PrimaryAntButton
} from '../style/style'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import { path } from '../routes/path'

const ParaTopText = styled(BodyText)`
  margin-top: 44px;
  line-height: 22px;
  text-align: center;
`

const ParaText = styled(BodyText)`
  margin-bottom: 44px;
  margin-top: 37px;
  text-align: center;
  line-height: 22px;
`

const ButtonWrapper = styledHtml(TwoButtonGrid)`
margin-top: 70px;
`

export const ShowQRCode = () => {
  // const [valueToQr, setValueToQR] = useState('')
  // const [textValue, setTextValue] = useState('')
  // const [showQRGenerator, setShowQRGenerator] = useState(false)
  // const textLengthRegex = /.{1,100}/g //adjust the max character to get the QR code size
  // const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
  // const videoFrameRateInMS = 1000
  const [content] = useLinkedState(generatingStore)

  // const generateQR = async () => {
  //   const strArray = textValue.match(textLengthRegex)
  //   setShowQRGenerator(true)
  //   sendQRCodeToServer(valueToQr)
  //   if (!strArray) return
  //   for (let i = -1; i < strArray.length + 1; i++) {
  //     if (i === -1) {
  //       setValueToQR(strArray.length + '--||SQUAREBOXSTART||--' + strArray.length)
  //     } else if (i === strArray.length) {
  //       setValueToQR(+strArray.length + '--||SQUAREBOXEND||--' + strArray.length)
  //     } else {
  //       setValueToQR(strArray[i])
  //     }
  //     await delay(videoFrameRateInMS)

  //     if (i === strArray.length) {
  //       i = -2
  //     }
  //   }
  // }

  return (
    <PageView>
      <HeaderText>Generate QR code it is! 💪</HeaderText>
      <ParaText>Here you go</ParaText>
      <QRCode value={content} />
      <ButtonWrapper>
        <PrimaryButton
          onPress={() => {
            Nav.url(path.sending.input)
          }}
        >
          Generate again!
        </PrimaryButton>
        <SecondaryButton onClick={() => Nav.url('/')}>Restart</SecondaryButton>
      </ButtonWrapper>
    </PageView>
  )
}
