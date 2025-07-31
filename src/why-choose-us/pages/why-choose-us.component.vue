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


  <!-- ¿Por qué invertir en Perú? -->
  <section class="relative overflow-hidden xl:h-[900px] lg:h-[950px] md:h-[900px] h-[1200px]">

    <!-- Fondo -->
    <img src="../../assets/backgrounds/lima-plaza.jpg" alt="Lima Plaza" class="absolute w-full h-full object-cover" />

    <!-- Contenido principal -->
    <div class="relative w-full max-w-screen-xl mx-auto px-4 xl:px-0 pt-20 pb-10">

      <!-- Titulo -->
      <div class="flex flex-col lg:flex-row lg:items-start justify-between lg:gap-25 gap-8">
        <!-- vineta -->
        <SectionTitle title="Creando puentes" textColor="text-white" class="text-nowrap text-shadow-lg/25" />

        <!-- Titulo -->
        <div class="flex flex-col gap-2">
          <div class="space-y-0 md:space-y-2">
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap text-white text-shadow-lg/25">
              ¿Por qué <span class="text-secondary font-mont-heavy">invertir</span>
            </p>
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-heavy text-nowrap text-white text-shadow-lg/25">
              en <span class="text-secondary font-mont-heavy">Perú</span>?
            </p>
          </div>
          <div class="flex">
            <p class="font-mont-regular lg:text-xl text-white text-shadow-lg/25">
              Elegir New Point es apostar por una visión estratégica y confiable para invertir en Perú, uno de los
              destinos
              más competitivos de América Latina para la inversión y el comercio internacional.
            </p>
          </div>
        </div>
      </div>


      <!-- Tarjetas -->
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 md:mt-15 lg:mt-30 mt-10">
        <!-- Card -->
        <div class="bg-tertiary xl:p-6 lg:p-6 p-5 w-full flex flex-col items-center text-center md:gap-5 gap-3">
          <p class="text-white font-mont-heavy md:text-xl text-base">Apertura comercial global</p>
          <p class="text-white md:text-base text-sm">Acceso a mercados internacionales y tratados de libre comercio.</p>
        </div>

        <div class="bg-tertiary xl:p-6 lg:p-6 p-5 w-full flex flex-col items-center text-center gap-5">
          <p class="text-white font-mont-heavy md:text-xl text-base px-11">Ubicación estratégica</p>
          <p class="text-white md:text-base text-sm">Conectividad logística privilegiada con América y el mundo.</p>
        </div>

        <div class="bg-tertiary xl:p-6 lg:p-6 p-5 w-full flex flex-col items-center text-center gap-5">
          <p class="text-white font-mont-heavy md:text-xl text-base">Fortaleza macroeconómica</p>
          <p class="text-white md:text-base text-sm">Entorno económico estable, crecimiento sostenido e inversión.</p>
        </div>

        <div class="bg-tertiary xl:p-6 lg:p-6 p-5 w-full flex flex-col items-center text-center gap-5">
          <p class="text-white font-mont-heavy md:text-xl text-base">Potencial exportador global</p>
          <p class="text-white md:text-base text-sm">Oferta competitiva y diversificada con alcance internacional.</p>
        </div>

        <div class="bg-tertiary xl:p-6 lg:p-6 p-5 w-full flex flex-col items-center text-center gap-5">
          <p class="text-white font-mont-heavy md:text-xl text-base">Diversificación y resiliencia</p>
          <p class="text-white md:text-base text-sm">Economía adaptable con sectores sólidos y políticas proactivas.</p>
        </div>
      </div>

      <!-- Etiquetas flotantes -->
      <!-- <span
        class="absolute left-0 bottom-24 rotate-[-15deg] bg-white text-black px-6 py-1 rounded-full shadow-lg font-mont-bold text-lg border border-black/20">Inversión</span>
      <span
        class="absolute right-0 top-32 rotate-[15deg] bg-yellow-200 text-black px-6 py-1 rounded-full shadow-lg font-mont-bold text-lg border border-black/20">Comercio</span> -->
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
