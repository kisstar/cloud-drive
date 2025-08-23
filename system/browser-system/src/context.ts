import { emitter } from '@cloud-drive/normal-browser'
import { Context } from '@cloud-drive/system-core'
import { openWindow } from '@/api/window'
import { registerCommands } from '@/commands'

class BrowserContext extends Context {
  static getInstance() {
    if (!this.instance) {
      this.instance = new BrowserContext()
      registerCommands(this.instance)
    }

    return this.instance
  }

  eventBus = emitter

  api = {
    openWindow,
  }
}

export { BrowserContext }
