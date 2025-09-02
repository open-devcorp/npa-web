import { createRouter, createWebHistory } from "vue-router";

// Keep Home eager for best LCP; others remain lazy
import HomeComponent from "../home/pages/home.component.vue";
const AboutComponent = () => import("../about-us/pages/about.component.vue");
const ServicesComponent = () => import("../services/pages/services.componet.vue");
const WhyChooseUsComponent = () => import("../why-choose-us/pages/why-choose-us.component.vue");
const TeamView = () => import("../team/pages/team.component.vue");
const ContactUsComponent = () => import("../contact-us/pages/contact-us.component.vue");
const PrivacyPolicyView = () => import("../privacy-policy/pages/privacy-policy.component.vue");
const TermsAndConditionsView = () => import("../terms-and-conditions/pages/terms-and-conditions.component.vue");

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
      meta: { title: "Home" },
    },
    {
      path: "/nosotros",
      name: "about",
      component: AboutComponent,
    },
    {
      path: "/servicios",
      name: "services",
      component: ServicesComponent,
    },
    {
      path: "/por-que-elegirnos",
      name: "why-choose-us",
      component: WhyChooseUsComponent,
    },
    {
      path: "/equipo",
      name: "Team",
      component: TeamView,
    },
    {
      path: "/contacto",
      name: "contact-us",
      component: ContactUsComponent,
    },
    {
      path: "/politica-de-privacidad",
      name: "PrivacyPolicy",
      component: PrivacyPolicyView,
    },
    {
      path: "/terminos-y-condiciones",
      name: "TermsAndConditions",
      component: TermsAndConditionsView,
    },
    { path: "/", redirect: "/" },
  ],
});

export default router;
