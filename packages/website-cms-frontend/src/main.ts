import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import 'uno.css'
import './assets/scss/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')
