/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react'
import { SendingInputPage } from '../pages/computer/sending/1_Input'
import { SendingDisplayPage } from '../pages/computer/sending/2_Display'
import { path } from './path'
import { ReceivingOutputPage } from '../pages/computer/receiving/2_Output'
import { ReceivingScannerPage } from '../pages/computer/receiving/1_Scanner'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Nav } from '../app/Navigator'
import { SetupScannerModePage } from '../pages/scanner/2b_SetupScannerMode'
import { ScannerScanQRPage } from '../pages/scanner/ScannerScanQRPage'
import { ReceivingTextPage } from '../pages/computer/receiving/3_Text'
import { ScannerReceiveQRPage } from '../pages/scanner/ScannerReceiveQRPage'
import { Home } from '../pages/home/Home'
import { Login } from '../pages/login/Login'
import { Setup } from '../pages/setup/Setup'
import { Computer } from '../pages/computer/Computer'
import { SyncTextPage } from '../pages/computer/sync-qr/SyncQR'

const MyRoutes = () => {
  const navigate = useNavigate()
  useEffect(() => {
    Nav.setNavigate(navigate)
  }, [])

  return (
    <Routes>
      <Route path={'/'} element={<Home />} />

      <Route path={path.login.index} element={<Login />} />
      <Route path={path.setup.index} element={<Setup />} />
      <Route path={path.computer.index} element={<Computer />} />
      <Route path={path.computer.sync_qr} element={<SyncTextPage />} />

      <Route path={path.sending.input} element={<SendingInputPage />} />
      <Route path={path.sending.display} element={<SendingDisplayPage />} />
      <Route path={path.receiving.scanner} element={<ReceivingScannerPage />} />
      <Route path={path.receiving.output} element={<ReceivingOutputPage />} />
      <Route path={path.receiving.text} element={<ReceivingTextPage />} />
      <Route path={path.scanner.index} element={<SetupScannerModePage />} />
      <Route path={path.scanner.scan_qr} element={<ScannerScanQRPage />} />
      <Route path={path.scanner.receive_qr} element={<ScannerReceiveQRPage />} />
    </Routes>
  )
}

export { MyRoutes }
