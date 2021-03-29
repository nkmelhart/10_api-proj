import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../css/styles.css'
import '../node_modules/popper.js/dist/popper.min.js'

createApp(App).use(router).mount('#app')
