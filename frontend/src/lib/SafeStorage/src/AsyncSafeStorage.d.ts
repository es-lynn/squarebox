export interface AsyncKeyValueStorage {
  getItem: (key: string) => Promise<string>
  setItem: (key: string, value: string) => Promise<void>
  removeItem: (key: string) => Promise<void>
  getAllKeys: () => Promise<string[]>
  clear: () => Promise<void>
  size: () => Promise<number>
}
export declare abstract class AsyncSafeStorage<T extends Record<string, Exclude<any, null>>> {
  private storageName
  private storage
  private initialValue
  constructor(storage: AsyncKeyValueStorage, storageName: string | undefined, initialValue: T)
  private validateKeyExists
  protected seed(): Promise<void>
  protected clean(): Promise<void>
  reset(key: keyof T): Promise<void>
  resetAll(): Promise<void>
  getAllKeys(): Promise<(keyof T)[]>
  hasKey(key: keyof T): Promise<boolean>
  set<K extends keyof T>(key: K, value: T[K]): Promise<void>
  get<K extends keyof T>(key: K): Promise<T[K]>
}
