import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import ServicesView from '../pages/ServicesView.vue'
import TeamView from '../pages/TeamView.vue'

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
    component: ServicesView
  },
  {
    path:'/equipo',
    name: 'Team',
    component: TeamView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
