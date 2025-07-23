import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../home/pages/home.component.vue'
import AboutView from '../about-us/pages/about.component.vue'
import ServicesView from '../services/pages/services.componet.vue'
import TeamView from '../team/pages/team.component.vue'

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
});

export default router;
