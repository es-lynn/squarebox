import { KeyValueStorage } from '../../../SafeStorage'
declare class DOMStorage implements KeyValueStorage {
  storage: Storage
  constructor(storage: Storage)
  getAllKeys(): string[]
  getItem: (key: string) => string
  removeItem: (key: string) => void
  setItem: (key: string, value: string) => void
  clear: () => void
  size: () => number
}
export declare const DOMLocalStorage: DOMStorage
export declare const DOMSessionStorage: DOMStorage
export {}
