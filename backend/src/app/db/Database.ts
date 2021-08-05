import { FileSystemDatabase } from '@aelesia/commons/dist/src/aws/dynamodb/FileSystemDatabase'

const fileLocation = undefined
const Data = new FileSystemDatabase<{
  id: string
  payload_data: string
  qrcode_data: string
}>('DATA', fileLocation)

export const DB = { Data }
