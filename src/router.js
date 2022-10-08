import { createRouter, createWebHistory } from 'vue-router'

import Index from './pages/index.vue'
import Notfound from './pages/Page not found.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/:pathMatch(.*)*', name: 'Notfound', component: Notfound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
