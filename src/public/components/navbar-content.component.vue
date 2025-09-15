<template>
  <div class="bg-noise-blue">

    <nav class="max-w-screen-xl mx-auto px-8 xl:px-0 pt-8">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <img src="/src/assets/icons/logo-primary.webp" alt="Logo NPA" class="w-30 md:w-35 lg:w-40 object-contain" />
        </router-link>

        <ul class="hidden lg:flex gap-8">
          <li>
            <router-link to="/"
              class="hover:text-secondary text-white transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">
              {{ $t("navHome.0.title") }}
            </router-link>
          </li>
          <li>
            <router-link to="/nosotros"
              class="hover:text-secondary text-white transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">
              {{ $t("navHome.1.title") }}
            </router-link>
          </li>
          <li>
            <router-link to="/servicios"
              class="hover:text-secondary text-white transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">
              {{ $t("navHome.2.title") }}
            </router-link>
          </li>
          <li>
            <router-link to="/por-que-elegirnos"
              class="hover:text-secondary text-white transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">
              {{ $t("navHome.3.title") }}
            </router-link>
          </li>
          <li>
            <router-link to="/equipo"
              class="hover:text-secondary text-white transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">
              {{ $t("navHome.4.title") }}
            </router-link>
          </li>
        </ul>

        <!-- Botón "CONTÁCTANOS" para escritorio -->
        <div class="hidden lg:flex">
          <router-link to="/contacto" class="btn btn-secondary flex items-center justify-center">
            <span>{{ $t("navHome.5.title") }}</span>
            <img src="/src/assets/icons/arrow.svg" alt="Arrow"
              class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
          </router-link>
        </div>

        <!-- botón hamburguesa para móvil y tablet -->
        <div class="lg:hidden flex items-center justify-center">
        <button 
          @click="isOpen = !isOpen" 
          class="focus:outline-none cursor-pointer"
          aria-label="Abrir menú"
        >
          <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="white" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        </div>
      </div>

      <!-- menú móvil -->
      <div v-if="isOpen" class="lg:hidden mt-4 bg-white rounded-md">
        <div class="px-4 sm:px-6 py-4">
          <div class="flex flex-col gap-3">
            <div>
              <router-link @click="isOpen = false" to="/"
                class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                {{ $t("navHome.0.title") }}
              </router-link>
            </div>
            <div>
              <router-link @click="isOpen = false" to="/nosotros"
                class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                {{ $t("navHome.1.title") }}
              </router-link>
            </div>
            <div>
              <router-link @click="isOpen = false" to="/servicios"
                class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                {{ $t("navHome.2.title") }}
              </router-link>
            </div>
            <div>
              <router-link @click="isOpen = false" to="/por-que-elegirnos"
                class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                {{ $t("navHome.3.title") }}
              </router-link>
            </div>
            <div>
              <router-link @click="isOpen = false" to="/equipo"
                class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                {{ $t("navHome.4.title") }}
              </router-link>
            </div>
            <div class="flex flex-shrink-0 items-center">
              <router-link @click="isOpen = false" to="/contacto" class="btn btn-primary w-full">
                <span class="text-center flex-1">{{ $t("navHome.5.title") }}</span>
                <img src="/src/assets/icons/arrow.svg" alt="Arrow"
                  class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-content",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
