import React, { useEffect, useState } from 'react'
import httyp from 'httyp'
import { Cfg } from '../../app/config/Config'
import { Text } from 'native-base'
import QRCode from 'react-qr-code'
import { credentials } from '../State'

export const ScannerReceiveQRPage = () => {
  const [qrcode, setQrcode] = useState<string>()
  useEffect(() => {
    // @ts-ignore
    const username: string = credentials.state()['username']
    const retrieveAPI = () => {
      if (qrcode == null) {
        httyp
          .url(`${Cfg.BACKEND_URL}/retrieve-qrcode?id=${username}`)
          .get<{ id: string; qrcode: string }>()
          .then(data => {
            setQrcode(data.data.qrcode)
          })
      } else {
        clearInterval(intervalID)
      }
    }
    const intervalID = setInterval(retrieveAPI, 1000)
    return () => clearInterval(intervalID)
  }, [qrcode])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {qrcode ? <QRCode value={qrcode} /> : <Text>Waiting for scanner</Text>}
    </div>
  )
}
