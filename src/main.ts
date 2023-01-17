import { createApp } from 'vue'

import './index.css'

import router from './index'
import App from './App.vue'

const app = createApp(App)

createApp(App).use(router).mount('#app')
