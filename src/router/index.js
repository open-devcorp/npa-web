import { createRouter, createWebHistory } from "vue-router";

// Importar las vistas/páginas
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
    { path: "/", redirect: "/home" },
  ],
});

export default router;
