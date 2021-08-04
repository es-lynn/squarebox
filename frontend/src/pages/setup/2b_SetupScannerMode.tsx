import React from 'react'

import QrReader from 'react-qr-reader'
import styled from '@emotion/styled'
const SetupScannerModeContainer = styled.div`
  display: flex;
  flexdirection: column;
  width: 600px;
  gap: 10px;
  alignitems: center;
`
export const SetupScannerModePage = () => {
  // const webcamRef = React.useRef<Webcam>(null)
  // const [imgSrc, setImgSrc] = React.useState<any>('')
  const [text, setText] = React.useState('')

  // const capture = React.useCallback(() => {
  //   if (null !== webcamRef.current) {
  //     const imageSrc: any = webcamRef.current.getScreenshot()
  //     setImgSrc(imageSrc)
  //   }
  // }, [webcamRef, setImgSrc])
  const handleError = (err: Error) => {
    console.log(err)
  }
  const login = async (hash: string | null) => {
    console.log('scanning....')
    console.log('hash', hash)
    if (hash) {
      setText(hash)
    }
  }

  return (
    <SetupScannerModeContainer>
      {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <Button onClick={capture}>Open Camera</Button>
      {imgSrc && <img src={imgSrc} />} */}
      {/* {qrScanner.start()} */}
      <QrReader delay={1000} onError={handleError} onScan={login} style={{ width: '100%' }} />
      <h1>The word is:</h1>
      <h3>{text}</h3>
    </SetupScannerModeContainer>
  )
  //  <div>
  //    <Button onClick={onSelectScanQR}>Scan QR</Button>
  //    <Button onClick={onSelectReceiveQR}>Receive QR</Button>
  //    <Button onClick={onSelectScannerPair}>Pairing</Button>
  //  </div>
}
