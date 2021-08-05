import React from 'react'
import { QRCodeScanner } from '../../components/QRCodeScanner'
import { credentials } from '../State'
import { API } from '../../services/API'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export const ScannerScanQRPage = () => {
  return (
    <QRCodeScanner
      onQRCodeScanned={async content => {
        // @ts-ignore
        const username: string = credentials.state()['username']
        try {
          await API.send_payload({
            id: username,
            payload: content
          })
          Nav.url(path.scanner.success)
        } catch (e) {
          console.error(e)
        }
      }}
    />
  )
}
