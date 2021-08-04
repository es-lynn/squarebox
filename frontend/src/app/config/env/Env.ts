import { env, envJSON } from './_Env'

type EnvType = {
  REACT_APP_ENVIRONMENT: string
  REACT_APP_DEBUG: boolean

  REACT_APP_BACKEND_URL: string
}

export const EnvStr = env<EnvType>()
export const Env = envJSON<EnvType>()
