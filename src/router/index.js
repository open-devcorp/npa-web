import { createRouter, createWebHistory } from "vue-router";

// Importar las vistas/páginas
import HomeComponent from "../home/pages/home.component.vue";
import AboutComponent from "../about-us/pages/about.component.vue";
import ServicesComponent from "../services/pages/services.componet.vue";

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
    { path: "/", redirect: "/home" },
  ],
});

export default router;
