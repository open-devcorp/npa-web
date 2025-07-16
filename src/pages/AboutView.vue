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

  <div class="flex flex-wrap justify-center gap-6">
      <InfoCard
      title="Conexión genuina"
      :iconSrc="'./src/assets/icons/users.svg'"
      />
      <InfoCard
      title="Excelencia colaborativa"
      :iconSrc="'./src/assets/icons/persons.svg'"
      />
      <InfoCard
      title="Innovación consciente"
      :iconSrc="'./src/assets/icons/cohete.svg'"
      />
      <InfoCard
      title="Transparencia activa"
      :iconSrc="'./src/assets/icons/search.svg'"
      />
      <InfoCard
      title="Democratización de la información"
      :iconSrc="'./src/assets/icons/conversation.svg'"
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

