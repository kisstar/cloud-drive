import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from '@/App.vue'
import { useContext } from '@/boot/context'
import { registerCommands } from '@/commands'
import { globalComponents } from '@/global-components'
import { i18n } from '@/locales'
import { pinia } from '@/store'

async function boot() {
  const app = createApp(App)
  const ctx = useContext()

  registerCommands(ctx)

  app.use(pinia)
  app.use(i18n)
  app.use(globalComponents)
  app.use(ElementPlus)
  app.mount('#app')
}

export { boot }
