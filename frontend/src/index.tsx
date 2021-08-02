import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import { SetupScannerModePage } from './pages/setup/2b_SetupScannerMode'
import { QRCodeComponent } from './components/QRCode'
import styled from '@emotion/styled'
import { Button } from 'antd'
import 'antd/dist/antd.css'

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
      <TempButton onClick={() => setShowStatus('createQR')}>Generate QR</TempButton>
      <br />
      <TempButton onClick={() => setShowStatus('scanQR')}>Scan QR</TempButton>
      <ContentWrapper>
        {showStatus === 'createQR' && <QRCodeComponent />}
        {showStatus === 'scanQR' && <SetupScannerModePage />}
      </ContentWrapper>
    </TempMainWrapper>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <h1 style={{ textAlign: 'center' }}>SquareBox Reader</h1> */}
    <TempMain />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
