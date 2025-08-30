import type { CommandName } from '@/constants/command'
import type { HeaderComponentName } from '@/layout/header/CdHeader.vue'

export type HeaderCommandName = CommandName | (string & {})

export interface HeaderNavItem {
  key: string
  component: HeaderComponentName
  props?: Record<string, unknown>
  command?: HeaderCommandName
}
