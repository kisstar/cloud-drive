import type { AsideNavItem } from '@/types/nav'
import { computed } from 'vue'
import { t } from '@/locales/core'

function useAsideNav() {
  const topNavList = computed<AsideNavItem[]>(() => {
    return [
      {
        key: 'sideMenu',
        component: 'CdMenu',
        props: {
          defaultActive: 'file',
          list: [
            {
              key: 'file',
              icon: 'i-ep-folder',
              text: t('nav.file'),
            },
          ],
        },
      },
    ]
  })
  const bottomNavList = computed<AsideNavItem[]>(() => {
    return []
  })

  return {
    topNavList,
    bottomNavList,
  }
}

export { useAsideNav }
