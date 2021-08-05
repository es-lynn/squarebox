import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import styled from '@emotion/styled'
import { onQRCodeScanned } from './ReceivingStore'
import { Switch } from 'native-base'
import { withStyle } from 'reactjs-commons'
import { View } from 'react-native'
import { PageView } from '../../../components/business/PageView'
import { BodyText, HeaderText, TwoButtonGrid, PrimaryButton } from '../../../style/style'

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

export const ReceivingScannerPage = () => {
  const [cameraMode, setCameraMode] = useState(true)
  const [flipImage, setFlipImage] = useState(true)
  const [toScan, setToScan] = React.useState(false)

  const [scanVal, setScanVal] = React.useState('')
  const [scanLength, setScanLength] = React.useState('')
  const [numScanned, setNumScanned] = React.useState(0)
  const handleError = (err: Error) => {
    console.log(err)
  }
  const videoScan = async (hash: string | null) => {
    if (hash) {
      const checkStart = hash.split('--||SQUAREBOXSTART||--')
      const checkEnd = hash.split('--||SQUAREBOXEND||--')
      if (checkStart.length === 2) {
        if (!toScan) {
          setToScan(true)
          setScanLength(checkStart[0])
        }
      } else if (checkEnd.length === 2) {
        if (toScan) {
          if (numScanned.toString() != scanLength) {
            alert('did not scan all. Scanned: ' + numScanned)
            setScanVal('')
            setNumScanned(0)
          } else {
            alert('scan done')
            setToScan(false)
          }
        }
      } else if (toScan) {
        let init = scanVal
        const initCount = numScanned + 1
        init = init + hash
        setScanVal(init)
        setNumScanned(initCount)
      }
    }
  }

  const login = (hash: string | null) => {
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
            onError={handleError}
            onScan={login}
            facingMode={cameraMode ? 'environment' : 'user'}
          />
        </FlipView>
        <TempMainWrapper>
          <TwoButtonGrid>
            <PrimaryButton onPress={flipCameraImage}>Flip Camera To Mirror Image</PrimaryButton>
          </TwoButtonGrid>
        </TempMainWrapper>

        <br />
      </SetupScannerModeContainer>
    </PageView>
  )
}

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
