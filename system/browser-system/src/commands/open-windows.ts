import { Command, Receiver as ReceiverCore, SYSTEM_COMMAND } from '@cloud-drive/system-core'
import { openWindow } from '@/api/window'

class Receiver extends ReceiverCore {
  execute(url: string, target: '_self' | '_blank' | '_window') {
    if (target === '_window') {
      return openWindow(url, '_blank')
    }

    return openWindow(url, target)
  }
}

export const name = SYSTEM_COMMAND.openWindow

export { Command, Receiver }
