import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import styled from '@emotion/styled'
// import { onQRCodeScanned } from './ReceivingStore'
import { Button, Switch } from 'native-base'
import { withProps, withStyle } from 'reactjs-commons'
import { View } from 'react-native'

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
  const login = async (hash: string | null) => {
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

  const onCameraToggle = (checked: boolean) => {
    setCameraMode(checked)
  }

  const flipCameraImage = () => {
    setFlipImage(!flipImage)
  }

  return (
    <ContentWrapper>
      <SetupScannerModeContainer>
        <h2>Toggle Camera</h2>
        <CameraToggle onValueChange={(checked: boolean) => onCameraToggle(checked)} />
        <FlipView flip={flipImage}>
          <QRImageReader
            delay={1000}
            onError={handleError}
            onScan={login}
            facingMode={cameraMode ? 'environment' : 'user'}
          />
        </FlipView>
        <Button onPress={flipCameraImage}>Mirror Image</Button>
        <br />
        <div>Text:</div>
        <div>{scanVal}</div>
      </SetupScannerModeContainer>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  margin-top: 20px;
  width: 90vw;
  display: flex;
  justify-content: center;
`

const FlipView = withStyle(View)<{ flip: boolean }>(props => ({
  transform: [props.flip ? { rotateY: '0deg' } : { rotateY: '180deg' }]
}))
const QRImageReader = withStyle(QrReader)({
  width: '100%'
})
