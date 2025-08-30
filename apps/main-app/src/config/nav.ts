import type { HeaderNavItem } from '@/types/nav'
import { COMMAND_NAME } from '@/constants/command'
import { langList } from '@/locales/core'

const HEADER_LEFT_NAV_LIST: HeaderNavItem[] = [
  {
    key: 'brand',
    component: 'CdBrand',
    props: {
      class: 'mr-auto',
    },
  },
]

const HEADER_RIGHT_NAV_LIST: HeaderNavItem[] = [
  {
    key: 'theme',
    component: 'CdThemeMode',
    command: COMMAND_NAME.CHANGE_THEME_MODE,
  },
  {
    key: 'translate',
    component: 'CdDropdown',
    props: {
      class: 'flex justify-center items-center pl-4',
      icon: 'i-ic-baseline-translate',
      list: langList,
    },
  },
  {
    key: 'setting',
    component: 'CdButton',
    props: {
      class: 'flex justify-center items-center pl-4',
      icon: 'i-ep-setting',
    },
  },
  {
    key: 'user',
    component: 'CdUserInfo',
    props: {
      class: 'pl-2',
    },
  },
]

export { HEADER_LEFT_NAV_LIST, HEADER_RIGHT_NAV_LIST }
