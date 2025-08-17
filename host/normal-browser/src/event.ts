import type { Event, EventBus, EventCallback, EventId, EventName, HandleCallback } from '@cloud-drive/common-host'

/**
 * Create an event bus that allows listening, emitting, and one-time listening
 *
 * @returns {EventBus} event bus
 */
function createEventBus(): EventBus {
  const eventMap = new Map()
  const invokeMap = new Map()
  let eventID = 0

  async function on<T>(event: EventName, handler: EventCallback<T>) {
    const handlerMap = eventMap.get(event) || new Map<EventId, EventCallback<T>>()
    const id = eventID++

    handlerMap.set(id, handler)
    eventMap.set(event, handlerMap)

    return () => {
      handlerMap.delete(id)
    }
  }

  async function once<T>(event: EventName, handler: EventCallback<T>) {
    const unListen = await on(event, (event: Event<T>) => {
      unListen()
      handler(event)
    })

    return unListen
  }

  async function emit<T>(event: EventName, payload?: T) {
    const handlerMap = eventMap.get(event)

    if (!handlerMap)
      return

    for (const [id, handler] of handlerMap) {
      handler({ id, event, payload })
    }
  }

  async function handle<T, P>(event: EventName, handler: HandleCallback<T, P>) {
    invokeMap.set(event, {
      id: eventID++,
      handler,
    })

    return () => {
      invokeMap.delete(event)
    }
  }

  async function invoke<T>(cmd: EventName, args?: Record<string, unknown>): Promise<T> {
    const { id, handler } = invokeMap.get(cmd) || {}

    if (!handler)
      throw new Error(`No handler for command ${cmd}`)

    return await handler({ id, event: cmd, payload: args })
  }

  return {
    on,
    once,
    emit,
    handle,
    invoke,
  }
}

const emitter = createEventBus()

export { createEventBus, emitter }
