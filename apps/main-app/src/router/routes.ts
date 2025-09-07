import type { RouteRecordRaw } from 'vue-router'
import { ROUTER_VIEW } from '@/constants/route'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/file',
    children: [
      {
        path: '/file',
        component: () => import('@/layout/index.vue'),
        redirect: '/list',
        children: [
          {
            path: '/list',
            name: 'fileList',
            components: {
              [ROUTER_VIEW.HEADER]: () => import('@/layout/header/CdHeader.vue'),
              [ROUTER_VIEW.ASIDE_NAV]: () => import('@/layout/aside/CdAsideNav.vue'),
              [ROUTER_VIEW.ASIDE_SUN_NAV]: () => import('@/layout/aside/CdAsideSubNav.vue'),
              [ROUTER_VIEW.CONTENT]: () => import('@/views/file-list/index.vue'),
            },
          },
        ],
      },
    ],
  },
]

export { routes }
