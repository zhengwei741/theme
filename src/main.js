import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import initTheme from './theme'
import './theme/css.css'

createApp(App).use(router).mount('#app')

initTheme('ligth')