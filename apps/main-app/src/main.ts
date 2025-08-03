import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import global design variables
import 'tdesign-vue-next/es/style/index.css';
import './styles/index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).mount('#app')
