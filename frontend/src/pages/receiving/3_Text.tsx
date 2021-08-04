import { useLinkedState } from '../../lib/LinkedState'
import { copyFromInputRef, onQRCodeScanned, receivingStore } from './ReceivingStore'
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'native-base'
import httyp from 'httyp'
import { Cfg } from '../../app/config/Config'

export const ReceivingTextPage = () => {
  const [payload, setPayload] = useState<string>()
  useEffect(() => {
    const retrieveAPI = () => {
      if (payload == null) {
        httyp
          .url(`${Cfg.BACKEND_URL}/api/retrieve-payload`)
          .params({
            id: '1'
          })
          .get<{ id: string; payload: string }>()
          .then(data => {
            onQRCodeScanned(data.data.payload)
          })
      } else {
        clearInterval(intervalID)
      }
    }
    const intervalID = setInterval(retrieveAPI, 1000)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text>Waiting for scanner</Text>
    </div>
  )
}
