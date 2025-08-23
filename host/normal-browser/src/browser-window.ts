import type { BaseWindow } from '@cloud-drive/common-host'

class BrowserWindow implements BaseWindow {
  private windowRef: ReturnType<typeof window.open> = null

  open(url: string, target: '_self' | '_blank' | '_window') {
    if (target === '_window') {
      this.windowRef = window.open(url, '_blank')
    }

    this.windowRef = window.open(url, target)

    return this
  }

  close() {
    this.windowRef?.close()
  }
}

export { BrowserWindow }
