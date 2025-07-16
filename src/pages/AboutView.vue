<template>
  <div class="bg-noise-white">
    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-6xl mb-6">Nosotros</h1>
        <p class="font-public-sans-black text-sm">
          <span class="text-secondary">INICIO</span> / NOSOTROS
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-4 mt-12">

      <p class="text-xl font-mont-black text-tertiary max-w-screen-xl mx-auto px-0  mb-6">
      NOSOTROS
    </p>
      <div class="flex max-w-screen-xl mx-auto px-0 gap-32">

        <div class="flex flex-col w-1/2">
            <p class="font-mont-regular text-7xl w-full">Somos un</p>
            <p class="text-7xl w-full font-mont-heavy whitespace-nowrap">punto de encuentro</p>
        </div>

        <div class="flex flex-col w-1/2 h-full">
          <p class="text-justify">
            Somos el punto de encuentro entre negocios, inversión y expansión internacional,
            combinando la precisión de una boutique legal con la visión estratégica y creatividad
            de una agencia de marketing.
          </p>
          <div class="flex items-end justify-end mt-4">
            <router-link to="" class=" w-64 btn btn-primary flex items-center justify-center">
                <span class="">CONTÁCTANOS</span>
                <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="w-[14px] h-[14px] ml-2 mb-1" />
            </router-link>
          </div>
        </div>

      </div>
    </section>


    <!-- Cards Section -->
    <section class="pb-24">
      <div class="max-w-screen-xl mx-auto px-0">
      <img
        src="../assets/backgrounds/about-meet.jpg"
        alt="Nuestros Valores"
        class="w-full"
      />
        <div class="flex justify-center gap-4 px-4 -mt-[100px] relative z-10">
          <CardAbout
            title="Equipo Interdisciplinario"
            description="Contamos con un equipo interdisciplinario de abogados, arquitectos, economistas y especialistas en marketing que trabajan de manera coordinada para ofrecer soluciones integrales."
            background-color="bg-tertiary"
            icon-background-color="bg-[#D5E745]"
            icon-color="text-[#10284D]"
            animation-class="animate-slide-left delay-100"
            :card-index="0"
            :iconPath="'./src/assets/icons/think.svg'"
          />
          <CardAbout
            title="Catalizadores del Éxito"
            description="Ofrecemos asesoría legal en Derecho Inmobiliario, Corporativo y Comercial, complementada con estrategias de marketing y comunicación para potenciar el crecimiento de nuestros clientes."
            background-color="bg-noise-blue"
            icon-background-color="bg-secondary"
            icon-color="text-primary"
            animation-class="animate-slide-up delay-200"
            :card-index="1"
            :iconPath="'./src/assets/icons/brain.svg'"
          />
          <CardAbout
            title="Acceso Estratégico"
            description="Perú es una tierra de oportunidades con estabilidad económica y crecimiento sostenido. Te ayudamos a acceder de manera estratégica a este mercado emergente lleno de posibilidades."
            background-color="bg-tertiary"
            icon-background-color="bg-secondary"
            icon-color="text-[#10284D]"
            animation-class="animate-slide-right delay-300"
            :card-index="2"
            :iconPath="'./src/assets/icons/book.svg'"
          />
        </div>
      </div>
    </section>


  <section class="relative bg-tertiary py-24 mt-16">
    <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
      
      <p class="text-xl font-mont-black text-secondary max-w-screen-xl mx-auto px-0 mb-6">
        NUESTROS PRINCIPIOS
      </p>

    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Columna: title and button -->
      <div class="w-full">
        <h2 class="text-white text-7xl">
          <span class="font-mont-regular">Nuestro</span><br />
          <span class="font-mont-heavy whitespace-nowrap">objetivo y horizonte</span>
        </h2>
            <router-link to="" class=" mt-20 w-64 btn btn-secondary flex items-center justify-center">
                <span class="">SABER MÁS</span>
                <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="w-[14px] h-[14px] ml-2 mb-1" />
            </router-link>
      </div>

      <!-- Columna: Cards -->
      <div class="w-full flex flex-col gap-8">
        <!-- Card 1 -->
        <div class="bg-noise-white p-6 md:p-8 text-tertiary ">
          <div class="flex flex-col items-start gap-4 mb-4">
            <div class="bg-secondary p-2 rounded-full">
              <img src="../assets/icons/think.svg" alt="Target Icon" class="w-12 h-12 text-tertiary" />
            </div>
            <h3 class="text-3xl font-mont-heavy">Nuestra misión</h3>
          </div>
          <p class="font-public-sans-regular text-justify">
            Crear conexiones entre personas, empresas e inversiones, ofreciendo asesoría estratégica
            legal, técnica y comercial que simplifica procesos y convierte ideas en proyectos
            exitosos a nivel nacional e internacional.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-noise-white p-6 md:p-8 text-tertiary ">
          <div class="flex flex-col items-start gap-4 mb-4">
            <div class="bg-secondary p-2 rounded-full">
              <img src="../assets/icons/brain.svg" alt="Target Icon" class="w-12 h-12 text-tertiary" />
            </div>
            <h3 class="text-3xl font-mont-heavy">Nuestra visión</h3>
          </div>
          <p class="font-public-sans-regular text-justify">
            En realidades sólidas, construyendo conexiones que impulsen negocios, inversiones y
            proyectos de vida a nivel nacional e internacional.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="relative w-full ">
  <!-- Imagen de fondo -->
  <img
    src="../assets/images/about-business-woman.png"
    alt="business woman"
    class="absolute inset-0 w-full h-full object-cover z-0"
  />

  <!-- Contenido encima -->
  <div class="relative max-w-screen-xl mx-auto px-0 py-24 z-10">
    <h2 class="text-white text-5xl font-mont-regular text-center mb-12 mt-10">
      Escuchamos, entendemos y construimos<br />
      <span class="font-mont-heavy">relaciones de largo plazo</span> basadas en la<br />
      <span class="font-mont-heavy">confianza y el compromiso</span>
    </h2>

    <div class="flex flex-wrap justify-center gap-6 mt-16">
      <InfoCard
      title="Conexión genuina"
      :iconPath="'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'"
      />
      <InfoCard
      title="Excelencia colaborativa"
      :iconPath="'M19 13H5v-2h14v2zm-7-9l-7 7h4v6h6v-6h4l-7-7z'"
      />
      <InfoCard
      title="Innovación consciente"
      :iconPath="'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'"
      />
      <InfoCard
      title="Transparencia activa"
      :iconPath="'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'"
      />
      <InfoCard
      title="Democratización de la información"
      :iconPath="'M20 6h-4V4a2 2 0 0 0-4 0v2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-8-2h4v2h-4V4zm8 16H4V8h16v12z'"
      />
    </div>
  </div>
</section>


  </div>
</template>

<script>
import CardAbout from '../components/CardAbout.vue'
import InfoCard from '../components/InfoCard.vue'

export default {
  name: 'AboutView',
  components: {
    CardAbout,
    InfoCard
  }
}
</script>

