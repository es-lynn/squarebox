/* eslint-disable */
import { Dispatch, SetStateAction } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-types
declare type State = number | boolean | string | Object | undefined
export declare class LinkedState<T extends State> {
  _state: T
  constructor(initialValue: T)
  set(setState: SetStateAction<T>): void
  state(): T
  _observeList: Dispatch<SetStateAction<T>>[]
  _observe(setState: Dispatch<SetStateAction<T>>): void
  _unobserve(setState: Dispatch<SetStateAction<T>>): void
}
export declare function useLinkedState<T>(
  linkedState: LinkedState<T>
): [T, Dispatch<SetStateAction<T>>, Dispatch<SetStateAction<T>>]
export declare class ComputedLinkedState<T, U> {
  _linkedState: LinkedState<T>
  _reduxed: (state: T) => U
  constructor(linkedState: LinkedState<T>, reduxed: (state: T) => U)
  state(): U
  _observeList: Dispatch<SetStateAction<U>>[]
  _observe(setState: Dispatch<SetStateAction<U>>): void
  _unobserve(setState: Dispatch<SetStateAction<U>>): void
}
export declare function useComputedState<T, U>(
  rLinkState: ComputedLinkedState<T, U>,
  depList?: any[]
): U
export declare function MultiLinkedState<T>(key: string | number, initialValue?: T): LinkedState<T>
export {}
