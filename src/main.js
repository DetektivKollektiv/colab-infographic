import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
import Vue3TouchEvents from "vue3-touch-events";


const app = createApp(App);
app.use(createPinia())
app.use(Vue3TouchEvents);
app.mount("#app");

