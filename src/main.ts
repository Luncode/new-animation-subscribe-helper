import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
var style = "color: #fadfa3; background: #030307; padding:5px ;";
console.log('%c MoeCoding Core 1.0', style);
console.log('%c by: Luncode ', 'color: #fff; padding: 5px; background: #00a9e0;');
