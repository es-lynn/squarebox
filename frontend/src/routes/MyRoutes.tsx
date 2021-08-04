/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react'
import { SendingInputPage } from '../pages/sending/1_Input'
import { SendingDisplayPage } from '../pages/sending/2_Display'
import { path } from './path'
import { ReceivingOutputPage } from '../pages/receiving/2_Output'
import { ReceivingScannerPage } from '../pages/receiving/1_Scanner'
import { SetupDevicePage } from '../pages/setup/1_SetupDevice'
import { SetupComputerModePage } from '../pages/setup/2a_SetupComputerMode'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Nav } from '../app/Navigator'
import { TempMain } from '../pages/TempMain'
import { SetupScannerModePage } from '../pages/setup/2b_SetupScannerMode'
import { ScannerScanQRPage } from '../pages/scanner/ScannerScanQRPage'
import { ReceivingTextPage } from '../pages/receiving/3_Text'
import { ScannerReceiveQRPage } from '../pages/scanner/ScannerReceiveQRPage'
import { Home } from '../pages/home/Home'
import { Login } from '../pages/login/Login'

const MyRoutes = () => {
  const navigate = useNavigate()
  Nav.setNavigate(navigate)

  return (
    // @ts-ignore
    <Routes>
      <Route path={'/'} element={<Home />} />

      <Route path={path.login.index} element={<Login />} />

      <Route path={path.temp_main} element={<TempMain />} />
      <Route path={path.sending.input} element={<SendingInputPage />} />
      <Route path={path.sending.display} element={<SendingDisplayPage />} />
      <Route path={path.receiving.scanner} element={<ReceivingScannerPage />} />
      <Route path={path.receiving.output} element={<ReceivingOutputPage />} />
      <Route path={path.receiving.text} element={<ReceivingTextPage />} />
      <Route path={path.setup.device} element={<SetupDevicePage />} />
      <Route path={path.setup.computer} element={<SetupComputerModePage />} />
      <Route path={path.setup.scanner} element={<SetupScannerModePage />} />
      <Route path={path.scanner.scan_qr} element={<ScannerScanQRPage />} />
      <Route path={path.scanner.receive_qr} element={<ScannerReceiveQRPage />} />
    </Routes>
  )
}

export { MyRoutes }
