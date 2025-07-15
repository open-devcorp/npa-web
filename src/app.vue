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
  <navbar-home-content></navbar-home-content>
  <navbar-content></navbar-content>
  <footer-content></footer-content>
</template>

<style scoped></style>
