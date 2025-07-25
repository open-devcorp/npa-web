<template>
  <div class="bg-noise-white">

    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-4 md:py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-6xl mb-6">Servicios</h1>
        <p class="font-public-sans-black text-sm">
          <span class="text-secondary">INICIO</span> / SERVICIOS
        </p>
      </div>
    </section>

    <section class="py-4 max-w-screen-xl mx-auto px-4 xl:px-0 gap-32 mt-10">

      <SectionTitle title="SERVICIOS" textColor="text-tertiary" />

      <p class="text-3xl md:text-6xl xl:text-7xl mt-6 md:mt-10 flex items-center mb-4">
        <span class="font-mont-regular mr-2">Tu</span>
        <span class="font-mont-heavy whitespace-nowrap mr-2">punto</span>
        <span class="font-mont-regular mr-2">de solución</span>
      </p>

      <!-- Service Cards -->
      <div class="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-8 lg:gap-12 mt-10 px-4 xl:px-0">
        <ServiceCard 
          v-for="(service, index) in services" 
          :key="index"
          :imageSrc="service.imageSrc" 
          :imageAlt="service.imageAlt" 
          :tags="service.tags" 
          :title="service.title" 
          :description="service.description" 
        />
      </div>

      <!-- Client Segment Cards -->
      <div class="mt-12 md:mt-20 max-w-screen-xl mx-auto px-4 xl:px-0 gap-32">
        <SectionTitle title="SEGMENTO POR CLIENTE" textColor="text-tertiary" />
        <p class="text-3xl md:text-6xl xl:text-7xl mt-6 md:mt-10 flex items-center mb-4">
          <span class="font-mont-regular mr-2">Nuestros</span>
          <span class="font-mont-heavy whitespace-nowrap mr-2">Segmentos</span>
        </p>

        <div class="flex flex-col md:flex-row h-auto md:h-[20rem] lg:h-[25rem] overflow-hidden gap-3 md:gap-4" @mouseleave="selected = selected >= 0 ? selected : 0">
          <div 
            v-for="(card, index) in cards" 
            :key="index"
            class="relative transition-all duration-300 h-48 md:h-full cursor-pointer min-w-0 overflow-hidden w-full"
            :class="{
              'md:w-[50%]': selected === index,
              'md:w-[25%]': selected !== index
            }" 
            @mouseenter="selectCard(index)" 
            @click="selectCard(index)">

            <template v-if="card.img">
              <img :src="card.img" :alt="card.alt" class="w-full h-full object-cover object-center transition-transform duration-300"/>
            </template>

            <div v-if="selected !== index" class="absolute inset-0 bg-tertiary/90 z-10 flex items-center justify-center">            
              <p class="text-white font-mont-heavy text-sm md:text-lg lg:text-xl text-center md:hidden">
                {{ card.overlayTitle }}
              </p>
            </div>

            <div 
              class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 z-20 flex flex-col justify-end transition-all duration-300"
              :class="selected === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
              <p class="font-mont-heavy text-sm md:text-lg lg:text-xl leading-tight">
                {{ card.overlayTitle }}
              </p>
              <p class="text-xs md:text-sm text-yellow-300 font-public-sans-semibold">
                {{ card.overlaySubtitle }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6 h-auto lg:h-[500px]" ref="infoSection">
          <div v-if="selectedContent">
            <div class="flex flex-col lg:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">
              <!-- Image -->
              <div class="w-full lg:w-1/2 overflow-hidden">
                <img :src="selectedContent.img" :alt="selectedContent.alt" class="w-full h-auto md:h-full max-h-[300px] md:max-h-[600px] object-cover" />
              </div>

              <!-- Body -->
              <div class="w-full lg:w-1/2 text-justify flex flex-col justify-start">
                <div class="flex items-center gap-2 mb-4">
                  <img src="/src/assets/icons/star.svg" class="h-8 w-8"/>
                  <p class="text-lg md:text-xl font-mont-black text-tertiary">
                    {{ selectedContent.title }}
                  </p>
                </div>
                <p class="text-gray-600 font-public-sans-regular text-sm md:text-xl max-w-3xl mb-4">
                  {{ selectedContent.description }}
                </p>

                <ul class="space-y-3 md:space-y-4 text-black">
                  <li v-for="(item, idx) in selectedContent.details" :key="idx" class="flex gap-2">
                    <span class="text-sm md:text-lg mt-1 flex-shrink-0">❯</span>
                    <div>
                      <p class="font-public-sans font-bold text-sm md:text-xl">
                        {{ item.title }}
                        <span class="font-public-sans-regular text-sm md:text-xl font-normal">
                          {{ item.subtitle }}
                        </span>
                      </p>
                      <p v-if="item.extra" class="mt-2 font-public-sans-regular text-sm md:text-xl">
                        {{ item.extra }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import ServiceCard from '../../services/components/service-card.component.vue';
import SectionTitle from '../../services/components/section-title.component.vue';

export default {
  name: "services",
  components: {
    ServiceCard,
    SectionTitle
  },
  setup() {
    const selected = ref(0); 
    const locked = ref(false);
    const isMobile = ref(false);

    const infoSection = ref(null);

    const services = [
      {
        imageSrc: '../../assets/images/service-1.webp',
        imageAlt: 'Imagen 1',
        tags: ['Mercado', 'Marca', 'Contenido'],
        title: 'Asesoría Comercial',
        description: 'Servicios de estudios de mercado y viabilidad para detectar oportunidades de crecimiento, complementados con estrategias de negocio, marca y planes digitales para fortalecer la presencia y competitividad empresarial.'
      },
      {
        imageSrc: '../../assets/images/service-2.jpg',
        imageAlt: 'Imagen 2',
        tags: ['Inmobiliario', 'Empresarial', 'Arquitectónicos'],
        title: 'Asesoría legal',
        description: 'Servicios en derecho inmobiliario y gestión de propiedades, con soporte jurídico integral para operaciones inmobiliarias y empresariales. Incluye planificación de proyectos arquitectónicos y urbanísticos, asegurando cumplimiento normativo y viabilidad legal desde el inicio hasta la ejecución.'
      },
      {
        imageSrc: '../../assets/images/service-3.jpg',
        imageAlt: 'Imagen 3',
        tags: ['Inversores', 'Proveedores', 'Exportaciones'],
        title: 'Corretaje Comercial',
        description: 'Servicio que facilita la conexión entre inversores y proveedores, promoviendo exportaciones e inversiones. También gestionamos búsqueda y selección de oportunidades comerciales, contribuyendo al crecimiento y éxito de empresas en diversos mercados.'
      }
    ];

    const cards = [
      {
        img: '/src/assets/images/foreign-company.jpg',
        alt: 'Empresas extranjeras',
        overlayTitle: 'EMPRESAS EXTRANJERAS',
        overlaySubtitle: 'FACILITAMOS NEGOCIOS',
        content: {
          title: 'Para Empresas Extranjeras',
          description: 'Facilitamos la inversión, exportación e ingreso al mercado peruano',
          details: [
            { title: 'Consultoría y Asesoría Legal y Técnica:', subtitle: 'Asesoramos en la adquisición y regularización de propiedades para inversión o expansión.', extra: 'También brindamos soporte legal en constitución de empresas, contratos y normativa Perú–UE.' },
            { title: 'Estudios de Mercado y Análisis de Demanda Local:', subtitle: 'Identificación de oportunidades reales de negocio en el mercado peruano.' },
            { title: 'Corretaje Comercial Internacional:', subtitle: 'Conexión con productores, proveedores y proyectos de inversión en Perú en sectores estratégicos.' }
          ]
        }
      },
      {
        img: '/src/assets/images/national-company.webp',
        alt: 'Empresas Nacionales',
        overlayTitle: 'EMPRESAS NACIONALES',
        overlaySubtitle: 'ESCALAMOS CONTIGO',
        content: {
          title: 'Para Empresas Nacionales',
          description: 'Impulsar su expansión, formalización y crecimiento en el mercado local e internacional',
          details: [
            { title: 'Saneamiento Físico-Legal de Inmuebles:', subtitle: 'Regularización integral de predios, declaratoria de fábrica, independizaciones y habilitaciones urbanas' },
            { title: 'Planes de Marketing Estratégico:', subtitle: 'Diseño de estrategias de crecimiento comercial basadas en datos reales y estudios de mercado.' },
            { title: 'Proyectos Arquitectónicos Comerciales:', subtitle: 'Diseño y desarrollo técnico-legal de proyectos de centros comerciales, mercados, centros educativos, viviendas multifamiliares y unifamiliares.' }
          ]
        }
      },
      {
        img: '/src/assets/images/person-company.avif',
        alt: 'Personas y Emprendedores',
        overlayTitle: 'PERSONAS Y EMPRENDEDORES',
        overlaySubtitle: 'IMPULSAMOS TU ALCANCE',
        content: {
          title: 'Para Personas Naturales y Emprendedores',
          description: 'Formalizar, proteger y potenciar sus inversiones personales o pequeños negocios',
          details: [
            { title: 'Consultoría Legal Personalizada en Derecho Inmobiliario:', subtitle: 'Asesoría en compraventa, prescripción adquisitiva, acción reivindicatoria y protección patrimonial' },
            { title: 'Gestión de Trámites y Regularizaciones ante SUNARP y Catastro:', subtitle: 'Gestión de títulos, subdivisiones, acumulaciones, habilitaciones urbanas y otros procedimientos técnicos-legales.' },
            { title: 'Asesoría en Identidad y Estrategia Comercial:', subtitle: 'Desarrollo de marca personal o de negocio, posicionamiento digital y diseño de estrategias de comunicación adaptadas al mercado' }
          ]
        }
      }
    ];

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const scrollToInfo = () => {
      if (infoSection.value) {
        infoSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const selectCard = (index) => {
      if (!locked.value) {
        selected.value = index;
        if (isMobile.value) {
          scrollToInfo();
        }
      }
    };

    const resetSelection = () => {
      if (!locked.value) selected.value = 0;
    };

    const toggleLock = (index) => {
      locked.value = selected.value === index ? !locked.value : true;
      selected.value = index;
    };

    const selectedContent = computed(() => {
      const card = cards[selected.value];
      return card ? { ...card.content, img: card.img, alt: card.alt } : null;
    });

    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
    });

    return {
      selected,
      locked,
      services,
      cards,
      selectCard,
      resetSelection,
      toggleLock,
      selectedContent,
      isMobile,
      infoSection 
    };
  }
};
</script>