import { createRouter, createWebHistory } from 'vue-router'

// Importar las vistas/páginas
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'About',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
