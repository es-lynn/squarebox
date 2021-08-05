import * as lambda from './src/lambdas/Lambda'
import { LambdaConfig, LambdaAPI } from '@aelesia/commons/dist/src/aws/lambda/LambdaAPI'
import { Cfg } from './src/app/config/Config'

LambdaConfig.whitelist = Cfg.CORS_WHITELIST

export const send_payload = LambdaAPI(lambda.send_payload)
export const retrieve_payload = LambdaAPI(lambda.retrieve_payload)

export const send_qrcode = LambdaAPI(lambda.send_qrcode)
export const retrieve_qrcode = LambdaAPI(lambda.retrieve_qrcode)
