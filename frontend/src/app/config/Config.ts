import { Env } from './env/Env'

export const Cfg = {
  DEBUG: Env('REACT_APP_DEBUG'),

  BACKEND_URL: Env('REACT_APP_BACKEND_URL')
}
