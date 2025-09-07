import { createRouter, createWebHistory } from 'vue-router'
import { BASE_URL } from '@/config/app'
import { registerNavigationGuards } from '@/router/guards'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  strict: true,
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

registerNavigationGuards(router)

export { router }
