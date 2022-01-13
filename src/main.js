import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vue3StarRatingsEsm from "vue3-star-ratings";

createApp(App).use(store).use(router).use(vue3StarRatingsEsm).mount('#app')

