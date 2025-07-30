<template>
  <!-- Hero Section -->
  <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="font-mont-heavy text-4xl md:text-5xl lg:text-7xl mb-6">Por qué elegirnos</h1>
      <p class="font-public-sans font-black text-sm">
        <span class="text-secondary font-public-sans font-black">INICIO</span> / NOSOTROS
      </p>
    </div>
  </section>

  <!-- Creando puentes hacia el futuro -->
  <section class="bg-noise-white">
    <div class="max-w-screen-xl mx-auto px-4 xl:px-0 pt-19 pb-25">

      <!-- titulo -->
      <div class="flex flex-col md:gap-6 gap-4 lg:gap-8">
        <SectionTitle title="Creando puentes hacia el futuro" textColor="text-tertiary" />
        <div class="flex flex-col lg:flex-row justify-between lg:gap-10 gap-5">

          <div class="space-y-0 md:space-y-2">
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap">
              Tu <span class="font-mont-heavy">punto de partida</span>
            </p>
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap">
              hacia el <span class="font-mont-heavy">éxito</span>
            </p>
          </div>

          <div class="flex items-end">
            <p class="font-public-sans text-base lg:text-xs xl:text-base text-justify">
              En New Point, no solo brindamos asesoría. Creamos puentes reales entre personas, empresas e inversiones.
              Nuestra propuesta es integral, estratégica y construida desde la experiencia.
            </p>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-5 gap-10 mt-15">
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              01
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              Red Activa
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              Contamos con una red internacional activa en Europa y América Latina que facilita conexiones comerciales
              efectivas.
            </p>
          </div>

        </div>
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              02
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              Procesos ágiles
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              Simplificamos y aceleramos procesos legales, técnicos y estratégicos, manteniendo siempre el rigor y la
              seguridad jurídica.
            </p>
          </div>

        </div>
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              03
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              Servicio integral
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              Ofrecemos un servicio integral y multidisciplinario para satisfacer todas las necesidades de nuestros
              clientes.
            </p>
          </div>

        </div>
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              04
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              Conexiones globales
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              Experiencia en apertura de mercados internacionales y acompañamiento a inversores, con alianzas globales
              clave.
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
import SectionTitle from '../../public/components/section-title.component.vue';

export default {
  name: "why-choose-us",
  components: {
    SectionTitle
  }
};
</script>

<style scoped></style>
