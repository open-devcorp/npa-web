<template>
  <!-- Hero -->
  <section>
    <!-- Imagen de fondo -->
    <div class="w-full">
  <img :src="bgHome" alt="Background" width="1920" height="900" fetchpriority="high" decoding="async" :srcset="bgHome + ' 1200w'" sizes="100vw" class="w-full xl:h-[900px] lg:h-[700px] md:h-[600px] h-[500px] object-cover" />
    </div>

    <!-- Contenido superpuesto en la imagen -->
    <div class="absolute inset-0 xl:mt-55 lg:mt-40 md:mt-30 mt-20">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
        <!-- Título -->
        <div class="text-center">
          <p class="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-mont-regular">
            {{ t("home.title.part1") }}
          </p>
          <p class="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-mont-heavy text-background-dark mt-1">
            {{ t("home.title.part2") }}
          </p>
        </div>

        <!-- Category Buttons -->
        <div class="flex justify-center md:gap-20 lg:gap-18 gap-3 mt-5 xl:mt-12">
          <div class="label-home bg-tertiary text-white md:text-sm lg:text-base">
            {{ t("home.labels.international") }}
          </div>
          <div class="label-home bg-primary text-white md:text-sm lg:text-base">
            {{ t("home.labels.advisors") }}
          </div>
          <div class="label-home bg-secondary text-black md:text-sm lg:text-base">
            {{ t("home.labels.np") }}
          </div>
        </div>

        <!-- Services Section -->
        <div class="bg-tertiary/60 rounded-3xl xl:mt-25 lg:mt-16 md:mt-12 mt-8 xl:p-8 lg:p-7 md:p-6 p-6">
          <div class="md:justify-between md:items-center md:space-y-0 space-y-6 lg:space-y-0 flex flex-col md:flex-row items-center">
            <!-- Service Cards -->
            <div class="flex justify-center md:gap-9 xl:gap-20 lg:gap-15 gap-6">

              <!-- Book Icon Card -->
              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img :src="bookIcon" alt="Asesoría"
                      width="100" height="100"
                      class="xl:h-25 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">{{ t("home.services.0.part1") }}</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">{{ t("home.services.0.part2") }}</p>
              </div>

              <!-- Brain Icon Card -->
              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img :src="brainIcon" alt="Marketing"
                      width="100" height="100"
                      class="xl:h-25 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">{{ t("home.services.1.part1") }}</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">{{ t("home.services.1.part2") }}</p>
              </div>

              <!-- Think Icon Card -->
              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img :src="thinkIcon" alt="Corretaje"
                      width="100" height="100"
                      class="xl:h-25 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">{{ t("home.services.2.part1") }}</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">{{ t("home.services.2.part2") }}</p>
              </div>

            </div>

            <!-- Button -->
            <router-link to="/contacto"
                        class="btn btn-tertiary border-2 border-black hover:border-secondary transition-colors">
              <span>{{ t("home.meetButton") }}</span>
              <img :src="arrowIcon" alt="Arrow"
                  width="14" height="14"
                  class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1 invert" />
            </router-link>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- lo que ofrecemos -->
  <section class="bg-noise-white cv-auto">

    <div class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20">

      <!-- Titulo y boton -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between">
        <div class="flex flex-col lg:flex-row lg:items-start md:gap-6 gap-4 lg:gap-10 xl:gap-15">
          <!-- vineta -->

          <SectionTitle :title="t('home.firstSubtitle')" textColor="text-tertiary" />


          <!-- Titulo -->
          <div class="space-y-0 md:space-y-2">
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap">
              {{ t("home.solutions.part1") }}
            </p>
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-heavy text-nowrap">
              {{ t("home.solutions.part2") }}
            </p>
          </div>
        </div>

        <!-- boton -->
        <div class="flex justify-end">
          <router-link to="/contacto" class="btn btn-primary whitespace-nowrap items-center">
            <p>{{ t("home.learnButton") }}</p>
            <img :src="arrowIcon" alt="Arrow"
              class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
          </router-link>
        </div>
      </div>

      <!-- cards -->
      <div class="flex flex-col lg:flex-row justify-between items-start mt-15 gap-y-10 lg:gap-y-0">

        <ServiceCard v-for="(service, index) in services" :key="index" :imageSrc="service.imageSrc"
          :imageAlt="service.imageAlt" :tags="service.tags" :title="service.title" :description="service.description" />
      </div>

    </div>
  </section>

  <!-- impulsemos proyectos -->
  <section class="relative cv-auto">
    <!-- Imagen de fondo -->
    <div class="w-full h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px]">
      <img :src="computerCoffee" alt="Background"   width="1200" height="800" class="w-full h-full object-cover -scale-x-100" />
    </div>

    <!-- Contenido superpuesto -->
    <div class="absolute inset-0 flex flex-col items-end justify-end p-4 md:p-10 lg:p-16">

      <div class="bg-tertiary p-5 md:p-8 lg:p-9 xl:p-11 relative">

        <p
          class="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl font-mont-bold leading-none md:mb-2 mb-1 text-nowrap">
          {{ t('home.proyect.0.part1') }}
        </p>
        <p class="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl font-mont-bold leading-none md:mb-2 mb-1">
          {{ t('home.proyect.0.part2') }}
        </p>
        <p class="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl font-mont-bold leading-none mb-6 md:mb-10">
          {{ t('home.proyect.0.part3') }}
        </p>

        <!-- Estrella decorativa posicionada en la esquina -->
        <div class="absolute bottom-0 right-0">
          <img :src="starSecondary" alt="Star decoration" class="h-13 md:h-30 object-contain" />
        </div>

        <router-link to="/contacto" class="btn btn-secondary mt-3 md:mt-0 flex items-center">
          <p>{{ t('home.contactButton') }}</p>
          <img :src="arrowIcon" alt="Arrow"
            class="w-[11px] h-[11px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px] ml-2 mb-0.5 md:mb-1 invert" />
        </router-link>
      </div>
    </div>
  </section>

  <!-- testimonios -->
  <section class="bg-tertiary cv-auto">
    <div class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20">
      <div class="flex flex-col md:gap-6 gap-4 lg:gap-8">
        <SectionTitle :title="t('home.secondSubtitle')" textColor="text-white " />
        <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular text-white">
          {{ t('home.testimonialsTitle.0.part1') }} <span class="font-mont-heavy">{{ t('home.testimonialsTitle.0.part2')
            }}</span>
        </p>
      </div>
    
    <div class="overflow-x-auto py-6 ">
      <div class="flex gap-6 w-max px-4 h-[340px] items-stretch">
        <TestimonyCard
          class="flex-none w-[400px] h-full"
          name="Ana Quinto"
          role="Gerente General de N&F Multiservicios Quinto"
          testimony="Nuestra empresa enfrenta diversos retos legales a diario y, gracias a New Point, hemos logrado resolverlos de manera rápida y eficaz. Destacamos su profesionalismo, enfoque innovador y compromiso, por lo que estamos muy agradecidos por sus excelentes servicios."
          :image="aboutBusinessWoman"
          :rating="5"
        />
        <TestimonyCard
          class="flex-none w-[400px] h-full"
          name="Bruno Caballero"
          role="Gerente General de SEGUMAX PRO"
          testimony="Al iniciar nuestra empresa enfrentamos varios retos legales y necesitábamos agilizar procedimientos sin cometer errores. Gracias a la asesoría de New Point, pudimos cumplir nuestros primeros objetivos. Valoramos su eficacia, profesionalismo y trabajo en equipo."
          :image="aboutBusinessWoman"
          :rating="5"
        />
        <TestimonyCard
          class="flex-none w-[400px] h-full"
          name="Familia Torres"
          role=""
          testimony="Gracias a su gestión, logramos rectificar nombres e inscribir la sucesión, regularizando así la titularidad de nuestras propiedades sin contratiempos."
          :image="aboutBusinessWoman"
          :rating="5"
        />
      </div>
    </div>



    </div>
  </section>

  <section class="bg-noise-white cv-auto">
    <div class="max-w-screen-xl mx-auto px-4 xl:px-0 py-25">
      <div class="bg-tertiary p-5 pb-20 md:p-8 lg:p-9 xl:p-15 relative rounded-2xl ">
        <!-- Estrella decorativa posicionada en la esquina -->
        <div class="absolute bottom-0 left-0">
          <img :src="starSecondary" alt="Star decoration"
            class="h-25 xl:h-50 lg:h-40 md:h-30 object-contain -scale-x-100" />
        </div>
        <div class="flex flex-col xl:pl-60 md:pl-40">
          <p
            class="text-white text-xl md:text-xl lg:text-3xl xl:text-4xl font-mont-bold md:mb-3 mb-1 text-center md:text-left">
            {{ t('home.finalTitle') }}

          </p>

          <div class="flex md:justify-end justify-center">
            <router-link to="/contacto" class="btn btn-secondary mt-3 md:mt-0 flex items-center">
              <p>{{ t('home.startButton') }}</p>
              <img :src="arrowIcon" alt="Arrow"
                class="w-[11px] h-[11px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px] ml-2 mb-0.5 md:mb-1 invert" />
            </router-link>
          </div>

        </div>
      </div>
    </div>

  </section>

</template>

<script>
import SectionTitle from '../../public/components/section-title.component.vue';
import ServiceCard from '../../services/components/service-card.component.vue';
import TestimonyCard from '../../home/components/testimony-card.component.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

// Importar assets
import bgHome from '../../assets/backgrounds/bg-home.webp';
import computerCoffee from '../../assets/backgrounds/computer-coffee.webp';
import bookIcon from '../../assets/icons/book.svg';
import brainIcon from '../../assets/icons/brain.svg';
import thinkIcon from '../../assets/icons/think.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import starSecondary from '../../assets/images/star-secondary.svg';
import aboutBusinessWoman from '../../assets/images/about-business-woman.webp';
import service1 from '../../assets/images/service-1.webp';
import service2 from '../../assets/images/service-2.webp';
import service3 from '../../assets/images/service-3.webp';

export default {
  name: "home",
  components: {
    SectionTitle,
    ServiceCard,
    TestimonyCard
  },
  setup() {
    const { t } = useI18n();

    const services = computed(() => [
      {
        imageSrc: service1,
        imageAlt: 'Imagen 1',
        tags: [t('services.tags.market'), t('services.tags.brand'), t('services.tags.content')],
        title: t('services.titlesServices.commercialAdvisory'),
        description: t('services.descriptions.commercialAdvisory'),
      },
      {
        imageSrc: service2,
        imageAlt: 'Imagen 2',
        tags: [t('services.tags.realEstate'), t('services.tags.business'), t('services.tags.architectural')],
        title: t('services.titlesServices.legalAdvisory'),
        description: t('services.descriptions.legalAdvisory'),
      },
      {
        imageSrc: service3,
        imageAlt: 'Imagen 3',
        tags: [t('services.tags.investors'), t('services.tags.providers'), t('services.tags.exports')],
        title: t('services.titlesServices.commercialBrokerage'),
        description: t('services.descriptions.commercialBrokerage'),
      }
    ]);

    return {
      t,
      services,
      // Assets
      bgHome,
      computerCoffee,
      bookIcon,
      brainIcon,
      thinkIcon,
      arrowIcon,
      starSecondary,
      aboutBusinessWoman
    };
  }
}
</script>
