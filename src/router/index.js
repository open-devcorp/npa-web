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
  },
  {
    path:'/servicios',
    name: 'Services',
    component: () => import('../pages/ServicesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
