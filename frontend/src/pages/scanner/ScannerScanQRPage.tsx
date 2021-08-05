import React, { useState } from 'react'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

import QrReader from 'react-qr-reader'
import styled from '@emotion/styled'
import { Switch } from 'native-base'
import { withStyle } from 'reactjs-commons'
import { View } from 'react-native'
import { PageView } from '../../components/business/PageView'
import {
  BodyText,
  HeaderText,
  PrimaryButton,
  SecondaryButton,
  TwoButtonGrid
} from '../../style/style'
import { contentState } from './ScannerScanConfirmationPage'

export const ScannerScanQRPage = () => {
  const [cameraMode, setCameraMode] = useState(true)
  const [flipImage, setFlipImage] = useState(true)

  const onQRCodeScanned = async (content: string) => {
    try {
      contentState.set(content)
      Nav.url(path.scanner.success)
    } catch (e) {
      console.error(e)
    }
  }

  const login = (hash: string | null) => {
    console.info('qrcode:', hash)
    if (hash) {
      onQRCodeScanned(hash)
    }
  }

  const onCameraToggle = (checked: boolean) => {
    setCameraMode(checked)
  }

  const flipCameraImage = () => {
    setFlipImage(!flipImage)
  }
  return (
    <PageView>
      <SetupScannerModeContainer>
        <HeaderText>Scanning Right Away! 👀</HeaderText>
        <BodyText>
          Make sure your mobile is paired with a computer. You can toggle between which camera you
          like by using the switch below.
        </BodyText>
        <ToggleWrapper>
          <CameraToggle onValueChange={(checked: boolean) => onCameraToggle(checked)} />
          <BodyText> Toggle camera</BodyText>
        </ToggleWrapper>
        <FlipView flip={flipImage}>
          <QRImageReader
            delay={500}
            onError={e => console.error(e)}
            onScan={login}
            facingMode={cameraMode ? 'environment' : 'user'}
          />
        </FlipView>
        <TempMainWrapper>
          <TwoButtonGrid>
            <PrimaryButton onPress={flipCameraImage}>Flip Camera To Mirror Image</PrimaryButton>
            <SecondaryButton onClick={() => Nav.url(path.index)}>Back to Home</SecondaryButton>
          </TwoButtonGrid>
        </TempMainWrapper>

        <br />
      </SetupScannerModeContainer>
    </PageView>
  )
}

const SetupScannerModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
  alignitems: center;
`

const CameraToggle = withStyle(Switch)({
  width: 200
})

const TempMainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
  justify-content: center;
`

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: center;
`

const FlipView = withStyle(View)<{ flip: boolean }>(props => ({
  transform: [props.flip ? { rotateY: '0deg' } : { rotateY: '180deg' }]
}))
const QRImageReader = withStyle(QrReader)({
  width: '100%'
})
