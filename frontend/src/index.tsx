import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import { SetupScannerModePage } from './pages/setup/2b_SetupScannerMode'

ReactDOM.render(
  <React.StrictMode>
    <h1>Testing Camera</h1>
    <SetupScannerModePage />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
