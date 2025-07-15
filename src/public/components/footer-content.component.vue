<template>
  <footer class="mt-30">
    <div class="bg-background-dark text-white py-20">

      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">

        <div class="md:flex gap-4 md:gap-25">

          <!-- Logo -->
          <div class="flex flex-col items-start">
            <div class="flex items-center mb-4">
              <!-- Icono estrella similar al de la imagen -->

              <div>
                <h2 class="font-mont-black text-xl text-white text-nowrap">New Point</h2>
                <p class="font-mont-regular text-sm text-white">Asesores</p>
              </div>
            </div>
          </div>

          <!-- Páginas -->
          <div class="flex flex-col space-y-3">
            <h3 class="font-mont-bold text-secondary text-xl mb-4 text-nowrap">Páginas</h3>
            <router-link to="/" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              Inicio
            </router-link>
            <router-link to="/about" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              Nosotros
            </router-link>
            <router-link to="/services" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              Servicios
            </router-link>
            <router-link to="/why-choose-us"
              class="hover:text-secondary cursor-pointer transition-colors font-mont-regular text-nowrap">
              Por qué elegirnos
            </router-link>
            <router-link to="/team" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              Equipo
            </router-link>
            <router-link to="/contact" class="hover:text-secondary cursor-pointer transition-colors font-mont-regular">
              Contáctanos
            </router-link>
          </div>

          <!-- Redes sociales -->
          <div class="flex flex-col space-y-3">
            <h3 class="font-mont-bold text-secondary text-xl mb-4 text-nowrap">Redes sociales</h3>
            <a href="https://www.tiktok.com" class="hover:text-secondary transition-colors font-mont-regular"
              target="_blank" rel="noopener noreferrer">
              Tiktok
            </a>
            <a href="https://www.instagram.com" class="hover:text-secondary transition-colors font-mont-regular"
              target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com" class="hover:text-secondary transition-colors font-mont-regular"
              target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </div>

          <!-- Descripción de la empresa -->
          <div class="text-justify">
            <p class="font-mont-regular text-sm leading-relaxed">
              Somos el punto de encuentro entre negocios, inversión y expansión internacional que une lo mejor de dos
              mundos: el rigor y la precisión de una boutique legal con la creatividad y visión estratégica de una
              agencia de marketing y publicidad.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-background-dark py-6 px-4">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
        <p class="text-center lg:text-left text-sm font-mont-regular text-white">
          New Point Asesores 2024 © Todos los derechos reservados
        </p>
        <div class="flex items-center space-x-6 lg:mt-0 mt-4">
          <a href="/privacy-policy" class="text-sm font-mont-regular text-white hover:text-secondary transition-colors">
            Política de privacidad
          </a>
          <a href="/terms-conditions"
            class="text-sm font-mont-regular text-white hover:text-secondary transition-colors">
            Términos y condiciones
          </a>
        </div>
      </div>
    </div>

    <div class="bg-background bg-noise-white py-6 px-4 flex flex-col lg:flex-row items-center justify-between">
      <p class="text-center lg:text-left font-mont-regular">
        ¿Quieres una web profesional? <a href="https://devcorp.pe" target="_blank" rel="noopener"
          class="underline font-semibold">Visítanos en Devcorp</a>
      </p>
      <div class="flex flex-col lg:flex-row items-center gap-1 lg:gap-4 mt-2 lg:mt-0 font-mont-regular">
        <span>Diseñado y desarrollado por: </span>
        logo de DevCorp
        <span class="ml-2 text-gray-400">© 2025</span>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "footer-content"
}
</script>