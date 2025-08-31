import type { HeaderNavItem } from '@/types/nav'
import { useContext } from '@/boot/context'
import { COMMAND_NAME } from '@/constants/command'

function handleNav(navItemOptions: HeaderNavItem['props']) {
  const ctx = useContext()

  if (navItemOptions?.command) {
    switch (navItemOptions.command) {
      case COMMAND_NAME.CHANGE_THEME_MODE:
        {
          const isDarkMode = !!navItemOptions.value
          const themeMode = isDarkMode ? 'light' : 'dark'

          ctx.commandController.execute(navItemOptions.command, themeMode)
        }
        break
      default:
        break
    }
  }
}

export { handleNav }
