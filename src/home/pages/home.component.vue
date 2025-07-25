<template>
  <div class="relative">
    <!-- Imagen de fondo -->
    <div class="w-full">
      <img src="/src/assets/backgrounds/bg-home.png" alt="Background"
        class="w-full lg:h-auto md:h-[600px] h-[500px] object-cover" />
    </div>

    <!-- Contenido superpuesto en la imagen -->
    <div class="absolute inset-0 xl:mt-55 lg:mt-40 md:mt-30 mt-20">
      <div class="max-w-screen-xl mx-auto xl:px-0 lg:px-4 md:px-6 px-4">
        <!-- Título -->
        <div class="text-center">
          <p class="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-mont-regular">
            Tu socio estratégico
          </p>
          <p class="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-mont-heavy text-background-dark mt-1">
            y acelerador comercial
          </p>
        </div>

        <!-- Category Buttons -->
        <div class="flex justify-center md:gap-20 lg:gap-18 gap-3 mt-5">
          <div class="label-home bg-tertiary text-white md:text-sm lg:text-base">
            Internacional
          </div>
          <div class="label-home bg-primary text-white md:text-sm lg:text-base">
            Asesores
          </div>
          <div class="label-home bg-secondary text-black md:text-sm lg:text-base">
            New Point
          </div>
        </div>

        <!-- Services Section -->
        <div class="bg-tertiary/60 rounded-3xl xl:mt-25 lg:mt-16 md:mt-12 mt-8 xl:p-8 lg:p-7 md:p-6 p-6">
          <div class="md:justify-between md:items-center md:space-y-0 space-y-6 lg:space-y-0 flex flex-col md:flex-row items-center">
            <!-- Service Cards -->
            <div class="flex justify-center md:gap-9 xl:gap-20 lg:gap-15 gap-6">

              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img src="/src/assets/icons/book.svg" alt="Asesoría"
                    class="xl:h-20 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Asesoría</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Técnico-legal</p>
              </div>

              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img src="/src/assets/icons/brain.svg" alt="Marketing"
                    class="xl:h-20 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Marketing y</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">publicidad</p>
              </div>

              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img src="/src/assets/icons/think.svg" alt="Corretaje"
                    class="xl:h-20 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Corretaje</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">comercial</p>
              </div>
            </div>


            <router-link to="" class="btn btn-tertiary border-2 border-black">
              <span class="">CONÓCENOS</span>
              <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="w-[14px] h-[14px] ml-2 mb-1 invert" />
            </router-link>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>
