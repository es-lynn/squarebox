import React from 'react'
import { QRCodeScanner } from '../../../components/QRCodeScanner'
import httyp from 'httyp'
import { Cfg } from '../../../app/config/Config'

const sendDataToServer = async (id: string, payload: string) => {
  await httyp.url(`${Cfg.BACKEND_URL}/api/send-payload`).body_json({ id, payload }).post()
  alert('sent data ' + payload)
}

export const ScannerScanQRPage = () => {
  return <QRCodeScanner onQRCodeScanned={content => sendDataToServer('1', content)} />
}
