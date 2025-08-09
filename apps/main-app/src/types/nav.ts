import type { TdButtonProps, TdMenuItemProps } from 'tdesign-vue-next'

// NavItem component props
export interface NavItem {
  key: string
  content?: string
  tipContent?: string
  icon?: string
  shape: TdButtonProps['shape']
  href?: string
  target?: '_blank' | '_self'
}

// NavList component props
export interface NavList {
  content?: string
  icon?: string
  items?: NavItem[]
}

export interface MenuItem extends TdMenuItemProps {
  key: string
}

export interface OperationInfo {
  key: string
  component: string
  componentProps: Record<string, unknown>
}

type NavConf = OperationInfo
  | {
    key: string
    component: 'NavItem'
    componentProps: NavItem
  }
  | {
    key: string
    component: 'NavList'
    componentProps: {
      content?: string
      icon?: string
      items?: NavItem[]
    }
  }

export interface HeaderConfig {
  menuItems?: MenuItem[]
  leftOperations?: NavConf[]
  rightOperations?: NavConf[]
}
