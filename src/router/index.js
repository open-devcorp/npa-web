import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../home/pages/home.component.vue'
import AboutView from '../about-us/pages/about.component.vue'
import ServicesView from '../services/pages/services.componet.vue'
import TeamView from '../team/pages/team.component.vue'
import PrivacyPolicyView from '../privacy-policy/pages/privacy-policy.component.vue'
import TermsAndConditionsView from '../terms-and-conditions/pages/terms-and-conditions.component.vue'

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
  },
  {
    path:'/politica-de-privacidad',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyView
  },
  {
    path: '/terminos-y-condiciones',
    name: 'TermsAndConditions',
    component: TermsAndConditionsView

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
