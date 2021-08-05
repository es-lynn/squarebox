import React, { useEffect, useState } from 'react'
import httyp from 'httyp'
import { Text } from 'native-base'
import { credentials } from '../../State'
import { Cfg } from '../../../app/config/Config'

export const SyncTextPage = () => {
  const [payload, setPayload] = useState<string>()
  useEffect(() => {
    // @ts-ignore
    const username: string = credentials.state()['username']
    const retrieveAPI = () => {
      if (payload == null) {
        httyp
          .url(`${Cfg.BACKEND_URL}/retrieve-payload`)
          .params({
            id: username
          })
          .get<{ id: string; payload: string }>()
          .then(data => {
            setPayload(data.data.payload)
          })
      } else {
        clearInterval(intervalID)
      }
    }
    const intervalID = setInterval(retrieveAPI, 1000)
    return () => clearInterval(intervalID)
  }, [payload])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {payload ? <Text>{payload}</Text> : <Text>Waiting for scanner</Text>}
    </div>
  )
}
