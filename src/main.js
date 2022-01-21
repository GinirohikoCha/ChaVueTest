import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ImportExcel from 'cha-publish-test'

createApp(App).use(ImportExcel).use(store).use(router).mount('#app')
