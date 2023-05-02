import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
  formatPrice(value) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COL' }).format(value)
  }
}

app.use(router)
app.use(store)

app.mount('#app')
