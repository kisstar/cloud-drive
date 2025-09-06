import type { CommandName } from '@/constants/command'
import type { AsideNavComponentName } from '@/layout/aside/CdAsideNav.vue'
import type { HeaderComponentName } from '@/layout/header/CdHeader.vue'

export type HeaderCommandName = CommandName | (string & {})

export interface HeaderNavItem {
  key: string
  component: HeaderComponentName
  props?: {
    command?: HeaderCommandName
    [key: string]: unknown
  }
}

export interface AsideNavItem {
  key: string
  component: AsideNavComponentName
  props?: {
    defaultActive?: string
    command?: string
    list: {
      key: string
      icon: string
      text: string
    }[]
    [key: string]: unknown
  }
}
