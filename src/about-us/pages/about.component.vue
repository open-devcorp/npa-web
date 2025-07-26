<template>
  <div class="bg-noise-white">
    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-4 md:py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-6xl mb-6">Nosotros</h1>
        <p class="font-public-sans-black text-sm">
          <span class="text-secondary">INICIO</span> / NOSOTROS
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-4 mt-12">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
        <SectionTitle title="NOSOTROS" textColor="text-tertiary" />

        <div class="flex flex-col md:flex-row gap-8 lg:gap-32">
        <div class="flex flex-col w-full md:w-1/2">
            <p class="font-mont-regular text-4xl md:text-6xl lg:text-7xl w-full lg:whitespace-nowrap">Somos un</p>
            <p class="text-3xl md:text-6xl lg:text-7xl w-full font-mont-heavy lg:whitespace-nowrap">punto de encuentro</p>
        </div>  

          <div class="flex flex-col w-full md:w-1/2">
            <p class="text-justify">
              Somos el punto de encuentro entre negocios, inversión y expansión internacional,
              combinando la precisión de una boutique legal con la visión estratégica y creatividad
              de una agencia de marketing.
            </p>
            <div class="flex items-end justify-end mt-4">
              <router-link to="" class="btn btn-primary flex items-center justify-center">
                <span>CONTÁCTANOS</span>
                <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="pb-24">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
        <img src="../../assets/backgrounds/about-meet.jpg" alt="Nuestros Valores" class="w-full" />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-6 -mt-12 lg:-mt-24 z-10">
          <AboutCard
            title="Equipo Interdisciplinario"
            description="Contamos con un equipo interdisciplinario de abogados, arquitectos, economistas y especialistas en marketing que trabajan de manera coordinada para ofrecer soluciones integrales."
            background-color="bg-tertiary"
            icon-background-color="bg-[#D5E745]"
            icon-color="text-[#10284D]"
            animation-class="animate-slide-left delay-100"
            :card-index="0"
            :iconPath="'./src/assets/icons/think.svg'"
          />

          <AboutCard
            title="Catalizadores del Éxito"
            description="Ofrecemos asesoría legal en Derecho Inmobiliario, Corporativo y Comercial, complementada con estrategias de marketing y comunicación para potenciar el crecimiento de nuestros clientes."
            background-color="bg-noise-blue"
            icon-background-color="bg-secondary"
            icon-color="text-primary"
            animation-class="animate-slide-up delay-200"
            :card-index="1"
            :iconPath="'./src/assets/icons/brain.svg'"
          />

          <div class="sm:col-span-2 lg:col-span-1 justify-self-center">
            <AboutCard
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
      </div>
    </section>

    <section class="bg-tertiary py-16 md:py-24 mt-16">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
        <SectionTitle title="NUESTROS PRINCIPIOS" textColor="text-secondary" />

        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full">
            <h2 class="text-white text-3xl lg:text-7xl">
              <span class="font-mont-regular">Nuestro</span>
              <br/>
              <span class="font-mont-heavy whitespace-nowrap">objetivo y horizonte</span>
            </h2>
            <router-link to="" class="btn btn-secondary">
              <p>SABER MÁS</p>
              <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
            </router-link>
          </div>

          <div class="w-full flex flex-col gap-6 md:gap-8">
            <ObjectiveCard
              title="Nuestra misión"
              description="Crear conexiones entre personas, empresas e inversiones, ofreciendo asesoría estratégica legal, técnica y comercial que simplifica procesos y convierte ideas en proyectos exitosos a nivel nacional e internacional."
              :iconSrc="'../../assets/icons/think.svg'"
              iconBackground="bg-secondary"
            />

            <ObjectiveCard
              title="Nuestra visión"
              description="En realidades sólidas, construyendo conexiones que impulsen negocios, inversiones y proyectos de vida a nivel nacional e internacional."
              :iconSrc="'../../assets/icons/brain.svg'"
              iconBackground="bg-secondary"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="relative w-full">
      <img src="../../assets/images/about-business-woman.png" alt="business woman" class="absolute inset-0 w-full h-full object-cover z-0" />

      <div class="relative max-w-screen-xl mx-auto px-4 xl:px-0 py-16 md:py-24 z-10">
        <h2 class="text-white text-2xl md:text-4xl xl:text-5xl font-mont-regular text-center mb-8 md:mb-12 mt-6 md:mt-10">
          Escuchamos, entendemos y construimos<br />
          <span class="font-mont-heavy">relaciones de largo plazo</span> basadas en la<br />
          <span class="font-mont-heavy">confianza y el compromiso</span>
        </h2>

        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          <InfoCard title="Conexión genuina" :iconSrc="'./src/assets/icons/users.svg'" />
          <InfoCard title="Excelencia colaborativa" :iconSrc="'./src/assets/icons/persons.svg'" />
          <InfoCard title="Innovación consciente" :iconSrc="'./src/assets/icons/cohete.svg'" />
          <InfoCard title="Transparencia activa" :iconSrc="'./src/assets/icons/search.svg'" />
          <InfoCard title="Democratización de la información" :iconSrc="'./src/assets/icons/conversation.svg'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutCard from '../components/about-card.component.vue';
import InfoCard from '../components/info-card.component.vue';
import ObjectiveCard from '../../services/components/objective-card.component.vue';
import SectionTitle from '../../public/components/section-title.component.vue';

export default {
  name: 'about',
  components: {
    AboutCard,
    InfoCard,
    ObjectiveCard,
    SectionTitle,
  },
};
</script>

