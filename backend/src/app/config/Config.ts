import { Env, EnvAWSResource } from './env/Env'

export const Cfg = {
  CORS_WHITELIST: ['*'],
  REGION: Env('AWSC_REGION'),

  DB_PAYLOAD_DATA: EnvAWSResource('DB_PAYLOAD_DATA'),
  DB_QRCODE_DATA: EnvAWSResource('DB_QRCODE_DATA')
}
