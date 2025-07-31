import { createRouter, createWebHistory } from "vue-router";
import TeamView from "../team/pages/team.component.vue";
import PrivacyPolicyView from "../privacy-policy/pages/privacy-policy.component.vue";
import TermsAndConditionsView from "../terms-and-conditions/pages/terms-and-conditions.component.vue";
import HomeComponent from "../home/pages/home.component.vue";
import AboutComponent from "../about-us/pages/about.component.vue";
import ServicesComponent from "../services/pages/services.componet.vue";
import WhyChooseUsComponent from "../why-choose-us/pages/why-choose-us.component.vue";

const router = createRouter({
  history: createWebHistory(),
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
      path: "/politica-de-privacidad",
      name: "PrivacyPolicy",
      component: PrivacyPolicyView,
    },
    {
      path: "/terminos-y-condiciones",
      name: "TermsAndConditions",
      component: TermsAndConditionsView,
    },
    { path: "/", redirect: "/home" },
  ],
});

export default router;
