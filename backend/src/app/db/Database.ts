import { NoSQLDatabase } from '@aelesia/commons/dist/src/aws/dynamodb/NoSQLDatabase'
import { Cfg } from '../config/Config'
import { AwsDynamodb } from '@aelesia/commons/dist/src/aws/dynamodb/AwsDynamodb'

const Data: NoSQLDatabase<{
  id: string
  payload_data: string
  qrcode_data: string
}> = new AwsDynamodb(Cfg.REGION, 'DATA')

export const DB = { Data }
