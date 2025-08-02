<template>
  <footer class="">
    <div class="bg-background-dark text-white py-12 md:py-20">

      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">

        <div class="flex flex-col md:flex-row gap-10">

          <!-- Logo -->

          <div class="flex flex-col items-start">
            <router-link to="/">
              <div class="flex items-center mb-4">
                <!-- Icono estrella similar al de la imagen -->
                <img src="../../assets/icons/icon-footer.svg" :alt="$t('footer.logoAlt')" class="w-15 h-15 mr-3">
                <div>
                  <h2 class="font-mont-black text-xl text-white">New Point</h2>
                  <p class="font-mont-regular text-sm text-white">Asesores</p>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Páginas -->
          <div class="flex flex-col space-y-3">
            <h3 class="font-mont-bold text-secondary text-xl mb-4">{{ $t('footer.pages.title') }}</h3>
            <router-link to="/" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              {{ $t('footer.pages.home') }}
            </router-link>
            <router-link to="/nosotros" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              {{ $t('footer.pages.about') }}
            </router-link>
            <router-link to="/servicios"
              class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              {{ $t('footer.pages.services') }}
            </router-link>
            <router-link to="/por-que-elegirnos"
              class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              {{ $t('footer.pages.whyChooseUs') }}
            </router-link>
            <router-link to="/equipo" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              {{ $t('footer.pages.team') }}
            </router-link>
            <router-link to="/contacto" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              {{ $t('footer.pages.contact') }}
            </router-link>
          </div>

          <!-- Redes sociales -->
          <div class="flex flex-col space-y-3">
            <h3 class="font-mont-bold text-secondary text-xl mb-4">{{ $t('footer.socialMedia.title') }}</h3>
            <a href="https://www.tiktok.com/@new.point.asesores"
              class="hover:text-secondary transition-colors font-mont-regular" target="_blank"
              rel="noopener noreferrer">
              {{ $t('footer.socialMedia.tiktok') }}
            </a>
            <a href="https://www.instagram.com/newpoint.asesores/"
              class="hover:text-secondary transition-colors font-mont-regular" target="_blank"
              rel="noopener noreferrer">
              {{ $t('footer.socialMedia.instagram') }}
            </a>
            <a href="https://www.linkedin.com/company/new-point-asesores/"
              class="hover:text-secondary transition-colors font-mont-regular" target="_blank"
              rel="noopener noreferrer">
              {{ $t('footer.socialMedia.linkedin') }}
            </a>
          </div>

          <!-- Descripción de la empresa -->
          <div class="text-justify lg:flex-1 hidden lg:block">
            <p class="font-mont-regular text-sm leading-relaxed">
              {{ $t('footer.description') }}
            </p>
          </div>
        </div>

        <div class="text-justify flex lg:hidden mt-10">
          <p class="font-mont-regular text-sm leading-relaxed">
            {{ $t('footer.description') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-background-dark py-4 md:py-6 px-4">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
        <p class="text-center lg:text-left text-sm font-mont-regular text-white">
          {{ $t('footer.copyright') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:mt-0 mt-4">
          <a href="/politica-de-privacidad" class="text-sm font-mont-regular text-white hover:text-secondary transition-colors underline">
            {{ $t('footer.privacyPolicy') }}
          </a>
          <a href="/terminos-y-condiciones"
            class="text-sm font-mont-regular text-white hover:text-secondary transition-colors underline">
            {{ $t('footer.termsConditions') }}
          </a>
        </div>
      </div>
    </div>

    <div class="bg-background bg-noise-white py-4 md:py-6 px-4">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
        <p class="text-center lg:text-left font-mont-regular">
          {{ $t('footer.professionalWeb') }} <a href="https://devcorp.pe" target="_blank" rel="noopener"
            class="underline font-semibold">{{ $t('footer.visitDevcorp') }}</a>
        </p>
        <div class="flex flex-col lg:flex-row items-center gap-1 lg:gap-4 mt-2 lg:mt-0 font-mont-regular">
          <span>{{ $t('footer.designedBy') }} </span>
          logo de DevCorp
          <span class="ml-2 text-gray-400">© 2025</span>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LanguageSwitcher from './language-switcher.component.vue';
export default {
  name: "footer-content",
  components: {
    LanguageSwitcher
  }
};
</script>