import { createApp } from 'vue'
import App from '@/App.vue'
import { i18n } from '@/locales'
import { pinia } from '@/store'
// import global design variables
import 'tdesign-vue-next/es/style/index.css'
import '@/styles/index.css'

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.mount('#app')
