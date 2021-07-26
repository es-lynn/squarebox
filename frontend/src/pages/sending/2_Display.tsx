import Text from 'antd/es/typography/Text'
import { QRCode } from '../../components/QRCode'
import React from 'react'
import { useLinkedState } from '../../lib/LinkedState'
import { sendingStore } from './SendingStore'

export const SendingDisplayPage = () => {
  const [text] = useLinkedState(sendingStore)

  return (
    <div>
      <Text>2. Scan QR Code using another device</Text>
      <QRCode content={text} />
    </div>
  )
}
