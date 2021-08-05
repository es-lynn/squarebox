import { Env } from './env/Env'

export const Cfg = {
  CORS_WHITELIST: Env('CORS_WHITELIST'),
  REGION: 'ap-southeast-1'
}
