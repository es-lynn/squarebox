import * as lambda from './src/lambdas/Lambda'
import { LambdaAPI, LambdaConfig } from '@aelesia/commons/dist/src/aws/lambda/LambdaAPI'
import { Cfg } from './src/app/config/Config'

LambdaConfig.whitelist = Cfg.CORS_WHITELIST

export const send_data = LambdaAPI(lambda.send_payload)
export const retrieve_data = LambdaAPI(lambda.retrieve_payload)
