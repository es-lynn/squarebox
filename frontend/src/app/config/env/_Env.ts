import { Err, Str } from '@aelesia/commons'

type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T]

export function env<T>() {
  return (key: KeysMatching<T, string>): string => {
    const envvar = process.env[key as any]
    if (envvar == null || envvar === '') {
      if (process.env['NODE_ENV'] === 'test' || process.env['ENVIRONMENT'] === 'test') {
        return 'TEST_ENV_VAR'
      }
      throw new Err.UninitializedErr(`[${key}] Not set in .env`)
    }
    return envvar as string
  }
}

export function envJSON<T>() {
  return <K extends keyof T>(key: K): T[K] => {
    const envvar = process.env[key as any]
    if (envvar == null || envvar === '') {
      if (process.env['NODE_ENV'] === 'test' || process.env['ENVIRONMENT'] === 'test') {
        // Force return string only in testing environment
        return 'TEST_ENV_VAR' as any
      }
      throw new Err.UninitializedErr(`[${key}] Not set in .env`)
    }
    if (
      // JSON.parse if item is an object, array, string, boolean or number
      (envvar[0] === '{' && envvar[envvar.length - 1] === '}') ||
      (envvar[0] === '[' && envvar[envvar.length - 1] === ']') ||
      (envvar[0] === '"' && envvar[envvar.length - 1] === '"') ||
      envvar === 'true' ||
      envvar === 'false' ||
      Str.isNum(envvar)
    ) {
      return JSON.parse(envvar)
    }
    console.warn(`Unable to parse ${envvar} as it is not JSON. Returning as string instead.`)
    return envvar as any
  }
}
