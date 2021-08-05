import React, { useState } from 'react'
import { PageView } from './business/PageView'
import { Input as AntInput } from 'antd'
import { sendQRCodeToServer } from '../pages/computer/sending/SendingStore'
import { Nav } from '../app/Navigator'
import {
  BodyText,
  HeaderText,
  SecondaryButton,
  TwoButtonGrid,
  PrimaryAntButton
} from './../style/style'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import { onGenerateQR } from '../pages/computer/receiving/ReceivingStore'

const ParaTopText = styled(BodyText)`
  margin-top: 44px;
  line-height: 22px;
  text-align: center;
`

const ParaBottomText = styled(BodyText)`
  margin-bottom: 17px;
  text-align: center;
  line-height: 22px;
`

const TextAreaCustom = styledHtml(AntInput.TextArea)`
min-width: 275px;
border-radius: 24px;
min-height: 310px !important;
font-family: Open Sans;
font-size: 16px;
margin-bottom: 30px;
padding-left: 14px;
padding-top:14px;
`

export const QRCodeComponent = () => {
  // const [valueToQr, setValueToQR] = useState('')
  const [textValue, setTextValue] = useState('')
  // const [showQRGenerator, setShowQRGenerator] = useState(false)
  // const textLengthRegex = /.{1,100}/g //adjust the max character to get the QR code size
  // const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
  // const videoFrameRateInMS = 1000

  const generateQR = async () => {
    if (textValue) {
      onGenerateQR(textValue)
      sendQRCodeToServer(textValue)
    }
  }

  return (
    <PageView>
      <HeaderText>Generate QR code it is! 💪</HeaderText>
      <ParaTopText>Please input your text/emails/love letter </ParaTopText>
      <BodyText>within the box below</BodyText>{' '}
      <ParaBottomText> to generate a QR code</ParaBottomText>
      <TextAreaCustom onChange={e => setTextValue(e.target.value)} placeholder="Text here" />
      <TwoButtonGrid>
        <PrimaryAntButton disabled={!textValue} onClick={generateQR}>
          Generate now!
        </PrimaryAntButton>
        <SecondaryButton onClick={() => Nav.url('/')}>Restart</SecondaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}
