import React from 'react'
import Webcam from 'react-webcam'
import QrReader from 'react-qr-reader'
import styled from '@emotion/styled'

export const ReceivingScannerPage = () => {
  const webcamRef = React.useRef<Webcam>(null)
  const [imgSrc, setImgSrc] = React.useState<any>('')
  const [text, setText] = React.useState('')
  const [toScan, setToScan] = React.useState(false)

  const [scanVal, setScanVal] = React.useState('')
  const [scanLength, setScanLength] = React.useState('')
  const [numScanned, setNumScanned] = React.useState(0)

  const capture = React.useCallback(() => {
    if (null !== webcamRef.current) {
      const imageSrc: any = webcamRef.current.getScreenshot()
      setImgSrc(imageSrc)
    }
  }, [webcamRef, setImgSrc])
  const handleError = (err: any) => {
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
        // onQRCodeScanned(hash)
      }
    }
  }

  // const qrScanner = new QrScanner(videoElem, result => console.log('decoded qr code:', result))
  return (
    <ContentWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '600px',
          gap: '10px',
          alignItems: 'center'
        }}
      >
        {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <Button onClick={capture}>Open Camera</Button>
      {imgSrc && <img src={imgSrc} />} */}
        {/* {qrScanner.start()} */}
        <QrReader delay={1000} onError={handleError} onScan={login} style={{ width: '100%' }} />
        {/*<QRCodeScanner onQRCodeScanned={onQRCodeScanned} />*/}
        <div>Text:</div>
        <div>{scanVal}</div>
      </div>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
`
