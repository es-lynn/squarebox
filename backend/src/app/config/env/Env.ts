import { env, envJSON } from './_Env'

type EnvType = {
  DB_DEL_POLICY: string
  DB_DATA: string

  CORS_WHITELIST: string[]
}

export const EnvStr = env<EnvType>()
export const Env = envJSON<EnvType>()
