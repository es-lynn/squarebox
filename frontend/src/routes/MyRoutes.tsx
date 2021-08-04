/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react'
import { SendingInputPage } from '../pages/temp/sending/1_Input'
import { SendingDisplayPage } from '../pages/temp/sending/2_Display'
import { path } from './path'
import { ReceivingOutputPage } from '../pages/temp/receiving/2_Output'
import { ReceivingScannerPage } from '../pages/temp/receiving/1_Scanner'
import { SetupDevicePage } from '../pages/temp/setup/1_SetupDevice'
import { SetupComputerModePage } from '../pages/temp/setup/2a_SetupComputerMode'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Nav } from '../app/Navigator'
import { TempMain } from '../pages/temp/TempMain'
import { SetupScannerModePage } from '../pages/temp/setup/2b_SetupScannerMode'
import { ScannerScanQRPage } from '../pages/temp/scanner/ScannerScanQRPage'
import { ReceivingTextPage } from '../pages/temp/receiving/3_Text'
import { ScannerReceiveQRPage } from '../pages/temp/scanner/ScannerReceiveQRPage'
import { Home } from '../pages/home/Home'
import { Login } from '../pages/login/Login'
import { Setup } from '../pages/setup/Setup'
import { Computer } from '../pages/computer/Computer'

const MyRoutes = () => {
  const navigate = useNavigate()
  Nav.setNavigate(navigate)

  return (
    // @ts-ignore
    <Routes>
      <Route path={'/'} element={<Home />} />

      <Route path={path.login.index} element={<Login />} />
      <Route path={path.setup.index} element={<Setup />} />
      <Route path={path.computer.index} element={<Computer />} />

      <Route path={path.temp_main} element={<TempMain />} />
      <Route path={path.sending.input} element={<SendingInputPage />} />
      <Route path={path.sending.display} element={<SendingDisplayPage />} />
      <Route path={path.receiving.scanner} element={<ReceivingScannerPage />} />
      <Route path={path.receiving.output} element={<ReceivingOutputPage />} />
      <Route path={path.receiving.text} element={<ReceivingTextPage />} />
      {/*<Route path={path.setup.device} element={<SetupDevicePage />} />*/}
      <Route path={path.computer.index} element={<SetupComputerModePage />} />
      <Route path={path.scanner.index} element={<SetupScannerModePage />} />
      <Route path={path.scanner.scan_qr} element={<ScannerScanQRPage />} />
      <Route path={path.scanner.receive_qr} element={<ScannerReceiveQRPage />} />
    </Routes>
  )
}

export { MyRoutes }
