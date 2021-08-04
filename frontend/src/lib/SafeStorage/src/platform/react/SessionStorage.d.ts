import { SafeStorage } from '../../SafeStorage'
export declare class SessionStorage<T> extends SafeStorage<T> {
  constructor(storageName: string | undefined, initialValue: T)
}
