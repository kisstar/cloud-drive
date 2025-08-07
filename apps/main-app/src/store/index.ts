import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const persistedState = createPersistedState()

pinia.use(persistedState)

export { pinia }
