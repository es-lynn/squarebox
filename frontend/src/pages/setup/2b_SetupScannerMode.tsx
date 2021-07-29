import Button from 'antd/es/button'
import React from 'react'
import Webcam from 'react-webcam'
export const SetupScannerModePage = () => {
  const webcamRef = React.useRef<Webcam>(null)
  const [imgSrc, setImgSrc] = React.useState<any>('')

  const capture = React.useCallback(() => {
    if (null !== webcamRef.current) {
      const imageSrc: any = webcamRef.current.getScreenshot()
      setImgSrc(imageSrc)
    }
  }, [webcamRef, setImgSrc])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '20px' }}>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <Button onClick={capture}>Open Camera</Button>
      {imgSrc && <img src={imgSrc} />}
    </div>
  )
}
