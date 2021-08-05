import React from 'react'
import { QRCodeScanner } from '../../components/QRCodeScanner'
import { credentials } from '../State'
import { API } from '../../services/API'

export const ScannerScanQRPage = () => {
  return (
    <QRCodeScanner
      onQRCodeScanned={async content => {
        // @ts-ignore
        const username: string = credentials.state()['username']
        await API.send_payload({
          id: username,
          payload: content
        })
      }}
    />
  )
}
