import type { AsideSubNavItem } from '@/types/nav'
import { computed } from 'vue'
import { t } from '@/locales/core'

function useAsideSubNav() {
  const topNavList = computed<AsideSubNavItem[]>(() => {
    return [
      {
        key: 'sideSubNav',
        component: 'CdSubMenu',
        props: {
          defaultActive: 'file_all',
          list: [
            {
              text: t('nav.my_file'),
              key: 'my_file',
              children: [
                {
                  text: t('nav.file_all'),
                  key: 'file_all',
                },
              ],
            },
          ],
        },
      },
    ]
  })
  const bottomNavList = computed<AsideSubNavItem[]>(() => {
    return []
  })

  return {
    topNavList,
    bottomNavList,
  }
}

export { useAsideSubNav }
