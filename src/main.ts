import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

import './index.css'

import router from './index'
import App from './App.vue'

const app = createApp(App)

app.use(router).use(VueApexCharts).mount('#app')
