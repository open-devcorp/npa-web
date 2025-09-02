import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import router from './router'
import i18n from './i18n.js'

// Dev-only: visualize layout shifts in the console and outline shifting nodes
if (import.meta.env?.DEV) {
	import('./debug/cls-debug.js');
}

createApp(App).use(i18n).use(router).mount('#app')