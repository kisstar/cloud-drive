import type { ThemeMode } from '@/types/setting'
import { Command as CommandCore, Receiver as ReceiverCore } from '@cloud-drive/system-core'
import { COMMAND_NAME } from '@/constants/command'
import { useThemeStore } from '@/store/setting/theme'

class ChangeThemeModeCommand extends CommandCore {}

class ChangeThemeModeReceiver extends ReceiverCore {
  execute(themeMode: ThemeMode) {
    const themeStore = useThemeStore()

    themeStore.changeThemeMode(themeMode)
  }
}

export { ChangeThemeModeCommand as Command, ChangeThemeModeReceiver as Receiver }

export const name = COMMAND_NAME.CHANGE_THEME_MODE
