export interface KeyValueStorage {
  getItem: (key: string) => string
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
  getAllKeys: () => string[]
  clear: () => void
  size: () => number
}
export declare abstract class SafeStorage<T extends Record<string, Exclude<any, null>>> {
  private storageName
  private storage
  private readonly initialValue
  constructor(storage: KeyValueStorage, storageName: string | undefined, initialValue: T)
  init(): Promise<void>
  protected seed(): void
  protected clean(): void
  reset(key: keyof T): void
  resetAll(): void
  getAllKeys(): (keyof T)[]
  hasKey(key: keyof T): boolean
  set<K extends keyof T | string>(key: K, value: T[K]): void
  get<K extends keyof T | string>(key: K): T[K]
}
