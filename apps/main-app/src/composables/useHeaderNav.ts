import type { HeaderNavItem } from '@/types/nav'
import { computed } from 'vue'
import { COMMAND_NAME } from '@/constants/command'
import { langList } from '@/locales/core'
import { useThemeStore } from '@/store/setting/theme'

function useHeaderNav() {
  const themeStore = useThemeStore()

  const leftNavList = computed<HeaderNavItem[]>(() => {
    return [
      {
        key: 'brand',
        component: 'CdBrand',
        props: {
          class: 'mr-auto',
        },
      },
    ]
  })
  const rightNavList = computed<HeaderNavItem[]>(() => {
    return [
      {
        key: 'theme',
        component: 'CdThemeMode',
        props: {
          value: !themeStore.isDarkMode,
          command: COMMAND_NAME.CHANGE_THEME_MODE,
        },
      },
      {
        key: 'translate',
        component: 'CdDropdown',
        props: {
          class: 'flex justify-center items-center pl-4',
          icon: 'i-ic-baseline-translate',
          command: COMMAND_NAME.CHANGE_LANG,
          list: langList,
        },
      },
      // {
      //   key: 'setting',
      //   component: 'CdButton',
      //   props: {
      //     class: 'flex justify-center items-center pl-4',
      //     icon: 'i-ep-setting',
      //   },
      // },
      {
        key: 'user',
        component: 'CdUserInfo',
        props: {
          class: 'pl-2',
        },
      },
    ]
  })

  return {
    leftNavList,
    rightNavList,
  }
}

export { useHeaderNav }
