import Text from 'antd/es/typography/Text'
import { QRCode } from '../../components/QRCode'

type SendingPageDisplayProps = {
  string: string
}
export const SendingPageDisplay = ({ string }: SendingPageDisplayProps) => {
  return (
    <div>
      <Text>2. Scan QR Code using another device</Text>
      <QRCode content={string} />
    </div>
  )
}
