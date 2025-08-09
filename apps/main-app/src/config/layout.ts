import type { HeaderConfig } from '@/types/nav'

export const HEADER_CONFIG: HeaderConfig = {
  rightOperations: [
    {
      component: 'NavItem',
      componentProps: {
        content: '',
        icon: 'logo-github',
        tipContent: 'Code Repository',
        href: 'https://github.com/kisstar/cloud-drive',
        target: '_blank',
        key: 'github',
      },
      key: 'github',
    },
  ],
  menuItems: [],
}
