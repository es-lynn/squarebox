export type Req<T> = { request: { body: T } }

export type Query<T> = { request: { query: T } }
