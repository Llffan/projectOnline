import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import '@/assets/font/iconfont.js'
import '@/css/common/tokens.css'
import '@/css_en/common/tokens.css'

const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')
