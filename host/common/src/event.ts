export type EventId = number

export interface Event<T> {
  /** Event name */
  event: EventName
  /** Event identifier used to unlisten */
  id: EventId
  /** Event payload */
  payload: T
}

export type EventName = string

export type EventCallback<T> = (event: Event<T>) => void

export type HandleCallback<T, P> = (event: Event<T>) => Promise<P>

type UnListenFn = () => void

export interface EventBus {
  on: <T>(event: EventName, handler: EventCallback<T>) => Promise<UnListenFn>
  once: <T>(event: EventName, handler: EventCallback<T>) => Promise<UnListenFn>
  emit: (event: EventName, payload?: unknown) => Promise<void>
  handle: <T, P>(cmd: EventName, handler: HandleCallback<T, P>) => Promise<UnListenFn>
  invoke: <T>(cmd: EventName, args?: Record<string, unknown>) => Promise<T>
}
