import { NoSQLDatabase } from '@aelesia/commons/dist/src/aws/dynamodb/NoSQLDatabase'
import { Cfg } from '../config/Config'
import { AwsDynamodb } from '@aelesia/commons/dist/src/aws/dynamodb/AwsDynamodb'

const PayloadData: NoSQLDatabase<{
  id: string
  payload_data: string
}> = new AwsDynamodb(Cfg.REGION, Cfg.DB_PAYLOAD_DATA)

const QRCodeData: NoSQLDatabase<{
  id: string
  payload_data: string
}> = new AwsDynamodb(Cfg.REGION, Cfg.DB_QRCODE_DATA)

export const DB = { PayloadData, QRCodeData }
