import type { AsideNavItem } from '@/types/nav'

function useAsideNav() {
  const topNavList: AsideNavItem[] = [
    {
      key: 'sideMenu',
      component: 'CdMenu',
      props: {
        defaultActive: 'file',
        list: [
          {
            key: 'file',
            icon: 'i-ep-folder',
            text: '文件',
          },
        ],
      },
    },
  ]
  const bottomNavList: AsideNavItem[] = []

  return {
    topNavList,
    bottomNavList,
  }
}

export { useAsideNav }
