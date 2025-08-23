import { emitter } from '@cloud-drive/normal-browser'
import { Context } from '@cloud-drive/system-core'

class BrowserContext extends Context {
  static getInstance() {
    if (!this.instance) {
      this.instance = new BrowserContext()
    }

    return this.instance
  }

  eventBus = emitter
}

export { BrowserContext }
