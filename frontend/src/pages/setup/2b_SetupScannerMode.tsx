import React from 'react'
import Webcam from 'react-webcam'
// import QrScanner from 'qr-scanner'
import QrReader from 'react-qr-reader'

export const SetupScannerModePage = () => {
  const webcamRef = React.useRef<Webcam>(null)
  const [imgSrc, setImgSrc] = React.useState<any>('')
  const [text, setText] = React.useState('')

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
    console.log('scanning....')
    if (hash) {
      setText(hash)
    }
  }

  return (
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
      <h1>The word is:</h1>
      <h3>{text}</h3>
    </div>
  )
}
