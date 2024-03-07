import NemNemVue from '@/Pages/NemNem.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import NomNomVue from './Pages/NomNom.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        children: [
            {
                path: '/nemnem',
                name: 'nemnem',
                component: NemNemVue
            },
            {
                path: '/nomnom',
                name: 'nomnom',
                component: NomNomVue
            }
        ]
    }
  
  ],
})

export default router