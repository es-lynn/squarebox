import { SafeStorage } from '../../SafeStorage'
export declare class LocalStorage<T> extends SafeStorage<T> {
  constructor(storageName: string | undefined, initialValue: T)
}
