import type { Lang } from '@/types/setting'
import { Command as CommandCore, Receiver as ReceiverCore } from '@cloud-drive/system-core'
import { COMMAND_NAME } from '@/constants/command'
import { useLocalStore } from '@/store/setting/local'

class ChangeLangCommand extends CommandCore {}

class ChangeLangReceiver extends ReceiverCore {
  execute(lang: Lang) {
    const localStore = useLocalStore()

    localStore.changeLang(lang)
  }
}

export { ChangeLangCommand as Command, ChangeLangReceiver as Receiver }

export const name = COMMAND_NAME.CHANGE_LANG
