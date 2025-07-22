<script>
import FooterContent from "./public/components/footer-content.component.vue";
import NavbarHomeContent from "./public/components/navbar-home-content.component.vue";
import NavbarContent from "./public/components/navbar-content.component.vue";

export default {
  name: "app",
  components: { FooterContent, NavbarHomeContent, NavbarContent },
};
</script>
<template>
  <navbar-content></navbar-content>
  <router-view></router-view>
  <footer-content></footer-content>
</template>

<style scoped></style>
