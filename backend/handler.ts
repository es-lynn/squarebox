import * as lambda from './src/lambdas/Lambda'
import { LambdaAPI, LambdaConfig } from '@aelesia/commons/dist/src/aws/lambda/LambdaAPI'
import { Cfg } from './src/app/config/Config'

LambdaConfig.whitelist = Cfg.CORS_WHITELIST

export const _records = LambdaAPI(lambda.records)
