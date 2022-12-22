import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'

import router from './index'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
