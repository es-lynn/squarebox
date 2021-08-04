import React, { useState } from 'react'
import { QRCodeComponent } from '../../components/QRCode'
import { SetupScannerModePage } from './setup/2b_SetupScannerMode'
import styled from '@emotion/styled'
import { Button } from 'native-base'

const TempButton = styled(Button)`
  width: 200px;
`

const ContentWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const TempMainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 800px;
  justify-content: center;
`

const TempMain = () => {
  const [showStatus, setShowStatus] = useState('')
  return (
    <TempMainWrapper>
      <h2>Please choose an option:</h2>
      <TempButton onPress={() => setShowStatus('createQR')}>Generate QR</TempButton>
      <br />
      <TempButton onPress={() => setShowStatus('scanQR')}>Scan QR</TempButton>
      <ContentWrapper>
        {showStatus === 'createQR' && <QRCodeComponent />}
        {showStatus === 'scanQR' && <SetupScannerModePage />}
      </ContentWrapper>
    </TempMainWrapper>
  )
}
export { TempMain }
