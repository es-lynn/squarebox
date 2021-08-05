import React from 'react'
import { QRCodeScanner } from '../../components/QRCodeScanner'
import httyp from 'httyp'
import { Cfg } from '../../app/config/Config'
import { credentials } from '../State'

const sendDataToServer = async (id: string, payload: string) => {
  await httyp.url(`${Cfg.BACKEND_URL}/send-payload`).body_json({ id, payload }).post()
}

export const ScannerScanQRPage = () => {
  return (
    <QRCodeScanner
      onQRCodeScanned={content => {
        // @ts-ignore
        const username: string = credentials.state()['username']
        sendDataToServer(username, content)
      }}
    />
  )
}
