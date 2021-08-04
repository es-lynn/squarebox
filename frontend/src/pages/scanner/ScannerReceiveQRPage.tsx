import React, { useEffect, useState } from 'react'
import httyp from 'httyp'
import { Cfg } from '../../app/config/Config'
import { Text } from 'native-base'
import QRCode from 'react-qr-code'

export const ScannerReceiveQRPage = () => {
  const [qrcode, setQrcode] = useState<string>()
  useEffect(() => {
    const retrieveAPI = () => {
      if (qrcode == null) {
        httyp
          .url(`${Cfg.BACKEND_URL}/api/retrieve-qrcode`)
          .params({
            id: '1'
          })
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
