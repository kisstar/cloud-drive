import TDesign from 'tdesign-vue-next'
import { createApp } from 'vue'
import App from '@/App.vue'
import { globalComponents } from '@/global-components'
import { i18n } from '@/locales'
import { pinia } from '@/store'
// import global design variables
import 'tdesign-vue-next/es/style/index.css'
import '@/styles/index.css'

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(globalComponents)
app.use(TDesign)
app.mount('#app')
