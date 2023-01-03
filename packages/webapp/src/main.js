import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'
import router from '@/router'
import './registerServiceWorker'

const pinia = createPinia()

createApp(App).use(router).use(i18n).use(pinia).mount('#app')
