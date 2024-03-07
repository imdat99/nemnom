import { createApp, h } from 'vue'
import router from './Router'
import { RouterView } from 'vue-router'
const app = createApp({render: () => h(RouterView)}).use(router)
app.mount('#app')
