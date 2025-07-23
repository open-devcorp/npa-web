<script>
import FooterContent from "./public/components/footer-content.component.vue";
import NavbarHomeContent from "./public/components/navbar-home-content.component.vue";
import NavbarContent from "./public/components/navbar-content.component.vue";

export default {
  name: "app",
  components: { FooterContent, NavbarHomeContent, NavbarContent },
  computed: {
    isHome() {
      return this.$route.path === '/' || this.$route.name === 'home';
    }
  }
};
</script>
<template>
  <navbar-home-content v-if="isHome"></navbar-home-content>
  <navbar-content v-else></navbar-content>
  <router-view></router-view>
  <footer-content></footer-content>
</template>

<style scoped></style>
