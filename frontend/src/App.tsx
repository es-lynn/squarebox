/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Router, RouteComponentProps } from '@reach/router'
import { SendingInputPage } from './pages/sending/1_Input'
import { SendingDisplayPage } from './pages/sending/2_Display'
import { routes } from './routes/routes'
import { ReceivingOutputPage } from './pages/receiving/2_Output'
import { ReceivingScannerPage } from './pages/receiving/1_Scanner'
import { SetupDevicePage } from './pages/setup/1_SetupDevice'
import { SetupComputerModePage } from './pages/setup/2a_SetupComputerMode'
import { SetupScannerModePage } from './pages/setup/2b_SetupScannerMode'

const Home = (props: RouteComponentProps) => <SetupDevicePage />
const SendingInput = (props: RouteComponentProps) => <SendingInputPage />
const SendingDisplay = (props: RouteComponentProps) => <SendingDisplayPage />

const ReceivingScanner = (props: RouteComponentProps) => <ReceivingScannerPage />
const ReceivingOutput = (props: RouteComponentProps) => <ReceivingOutputPage />

const SetupDevice = (props: RouteComponentProps) => <SetupDevicePage />
const SetupComputerMode = (props: RouteComponentProps) => <SetupComputerModePage />
const SetupScannerMode = (props: RouteComponentProps) => <SetupScannerModePage />

function App() {
  return (
    <Router>
      <Home path={'/'} />

      <SendingInput path={routes.sending.input} />
      <SendingDisplay path={routes.sending.display} />

      <ReceivingScanner path={routes.receiving.scanner} />
      <ReceivingOutput path={routes.receiving.output} />

      <SetupDevice path={routes.setup.device} />
      <SetupComputerMode path={routes.setup.computer} />
      <SetupScannerMode path={routes.setup.scanner} />
    </Router>
  )
}

export default App
