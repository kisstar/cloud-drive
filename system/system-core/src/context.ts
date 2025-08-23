import type { EventBus } from '@cloud-drive/common-host'
import { CommandController } from '@cloud-drive/command'

abstract class Context {
  static instance: Context
  static getInstance: () => Context

  abstract eventBus: EventBus

  get commandController() {
    return CommandController.getInstance()
  }
}

export { Context }
