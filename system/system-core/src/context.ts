import type { BaseWindow, EventBus } from '@cloud-drive/common-host'
import { CommandController } from '@cloud-drive/command'

abstract class Context {
  static instance: Context
  static getInstance: () => Context

  abstract eventBus: EventBus

  get commandController() {
    return CommandController.getInstance()
  }

  abstract api: {
    /**
     * Open a URL and return a BaseWindow object
     * @param url URL to open
     * @param target Defaults to '_blank'
     * @returns {BaseWindow}
     */
    openWindow: (...args: Parameters<BaseWindow['open']>) => BaseWindow
  }
}

export { Context }
