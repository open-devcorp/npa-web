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

      <p class="text-3xl md:text-6xl lg:text-7xl mt-10 leading-tight flex flex-wrap items-center">
        <span class="font-mont-regular mr-2">Tu</span>
        <span class="font-mont-heavy whitespace-nowrap mr-2">punto</span>
        <span class="font-mont-regular mr-2">de solución</span>
      </p>

      <!--CARDS-->
      <div class="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-8 lg:gap-12 mt-10 px-4 xl:px-0">
        <ServiceCard imageSrc="../assets/images/about-business-woman.png" imageAlt="Imagen 1"
          :tags="['Mercado', 'Marca', 'Contenido']" title="Asesoría Comercial"
          description="Servicios de estudios de mercado y viabilidad para detectar oportunidades de crecimiento, complementados con estrategias de negocio, marca y planes digitales para fortalecer la presencia y competitividad empresarial." />

        <ServiceCard imageSrc="../assets/images/about-business-woman.png" imageAlt="Imagen 2"
          :tags="['Inmobiliario', 'Empresarial', 'Arquitectónicos']" title="Asesoría legal"
          description="Servicios en derecho inmobiliario y gestión de propiedades, con soporte jurídico integral para operaciones inmobiliarias y empresariales. Incluye planificación de proyectos arquitectónicos y urbanísticos, asegurando cumplimiento normativo y viabilidad legal desde el inicio hasta la ejecución." />

        <ServiceCard imageSrc="../assets/images/about-business-woman.png" imageAlt="Imagen 3"
          :tags="['Inversores', 'Proveedores', 'Exportaciones']" title="Corretaje Comercial"
          description="Servicio que facilita la conexión entre inversores y proveedores, promoviendo exportaciones e inversiones. También gestionamos búsqueda y selección de oportunidades comerciales, contribuyendo al crecimiento y éxito de empresas en diversos mercados." />
      </div>


      <!-- Cards -->
      <div class="mt-12 md:mt-20 max-w-screen-xl mx-auto px-4 xl:px-0 gap-32">
        <!-- Título -->
        <div>
          <SectionTitle title="SEGMENTO POR CLIENTE" textColor="text-tertiary" />
          <p class="text-3xl md:text-6xl xl:text-7xl mt-6 md:mt-10 flex  items-center mb-4">
            <span class="font-mont-regular mr-2">Nuestros</span>
            <span class="font-mont-heavy whitespace-nowrap mr-2">Segmentos</span>
          </p>
        </div>

        <!-- Cards -->
        <div class="flex flex-col md:flex-row h-auto md:h-[20rem] lg:h-[25rem] overflow-hidden gap-3 md:gap-4"
          @mouseleave="selected = 0">
          <div v-for="(card, index) in cards" :key="index"
            class="relative transition-all duration-300 h-48 md:h-full cursor-pointer min-w-0 overflow-hidden w-full"
            :class="{
              // En desktop: comportamiento de expansión
              'md:w-[50%]': selected === index,
              'md:w-[25%]': selected !== index
            }" @mouseenter="selected = index" @click="selected = index">
            <!-- Imagen o color de fondo -->
            <template v-if="card.img">
              <img :src="card.img" :alt="card.alt" class="w-full h-full object-cover object-center" />
            </template>
            <template v-else>
              <div :class="['w-full h-full', card.bg]"></div>
            </template>

            <!-- Capa azul para no seleccionados -->
            <div v-if="selected !== index"
              class="absolute inset-0 bg-[#00213F] opacity-70 z-10 transition-opacity duration-300">
            </div>

            <!-- Overlay degradado y texto que se revela -->
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

        <!-- Texto dinámico debajo -->
        <div class="mt-6 h-[500px]">
          <!-- Primera opción -->
          <div v-if="selected === 0" class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">
            <!-- Imagen -->
            <div class="w-full md:w-1/2 overflow-hidden">
              <img src="../../assets/images/foreign-company.jpg" alt="Empresas extranjeras"
                class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover" />
            </div>

            <!-- Contenido -->
            <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
              <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                Para Empresas Extranjeras
              </p>
              <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4  md:text-xl">
                Facilitamos la inversión, exportación e ingreso al mercado peruano
              </p>

              <ul class="space-y-3 md:space-y-4 text-black">
                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Consultoría y Asesoría Legal y Técnica:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Asesoramos en la adquisición y regularización de propiedades para inversión o expansión.
                      </span>
                    </p>
                    <p class="mt-2 font-public-sans-regular  md:text-xl">
                      También brindamos soporte legal en constitución de empresas, contratos y normativa Perú–UE.
                    </p>
                  </div>
                </li>

                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Estudios de Mercado y Análisis de Demanda Local:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Identificación de oportunidades reales de negocio en el mercado peruano.
                      </span>
                    </p>
                  </div>
                </li>

                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Corretaje Comercial Internacional:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Conexión con productores, proveedores y proyectos de inversión en Perú en sectores estratégicos.
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Opción 2 -->
          <div v-else-if="selected === 1" class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">

            <!-- Imagen -->
            <div class="w-full md:w-1/2 overflow-hidden">
              <img src="../../assets/images/foreign-company.jpg" alt="Empresas Nacionales"
                class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover" />
            </div>

            <!-- Contenido -->
            <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
              <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                Para Empresas Nacionales
              </p>
              <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4  md:text-xl">
                Impulsar su expansión, formalización y crecimiento en el mercado local e internacional
              </p>

              <ul class="space-y-3 md:space-y-4 text-black">
                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Saneamiento Físico-Legal de Inmuebles:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Regularización integral de predios, declaratoria de fábrica, independizaciones y habilitaciones
                        urbanas
                      </span>
                    </p>
                  </div>
                </li>

                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Planes de Marketing Estratégico:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Diseño de estrategias de crecimiento comercial basadas en datos reales y estudios de mercado.
                      </span>
                    </p>
                  </div>
                </li>

                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Proyectos Arquitectónicos Comerciales:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Diseño y desarrollo técnico-legal de proyectos de centros comerciales, mercados, centros
                        educativos,
                        viviendas multifamiliares y unifamiliares.
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Opción 3 -->
          <div v-else-if="selected === 2" class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">

            <!-- Imagen -->
            <div class="w-full md:w-1/2 overflow-hidden">
              <img src="../assets/images/foreign-company.jpg" alt="Empresas Nacionales"
                class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover" />
            </div>

            <!-- Contenido -->
            <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
              <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                Para Personas Naturales y Emprendedores
              </p>
              <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4  md:text-xl">
                Formalizar, proteger y potenciar sus inversiones personales o pequeños negocios
              </p>

              <ul class="space-y-3 md:space-y-4 text-black">
                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Consultoría Legal Personalizada en Derecho Inmobiliario:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Asesoría en compraventa, prescripción adquisitiva, acción reivindicatoria y protección
                        patrimonial
                      </span>
                    </p>
                  </div>
                </li>

                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Gestión de Trámites y Regularizaciones ante SUNARP y Catastro:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Gestión de títulos, subdivisiones, acumulaciones, habilitaciones urbanas y otros procedimientos
                        técnicos-legales.
                      </span>
                    </p>
                  </div>
                </li>

                <li class="flex gap-2">
                  <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                  <div>
                    <p class="font-public-sans font-bold  md:text-xl">
                      Asesoría en Identidad y Estrategia Comercial:
                      <span class="font-public-sans-regular  md:text-xl font-normal">
                        Desarrollo de marca personal o de negocio, posicionamiento digital y diseño de estrategias de
                        comunicación adaptadas al mercado
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>


    <section class="relative overflow-hidden bg-white">
      <!-- Imagen de fondo -->
      <img src="../../assets/images/services-bg.png" alt="Servicios Background"
        class="absolute inset-0 w-full h-full object-cover" />

      <SectionTitle title="NUESTRAS ALIANZAS" textColor="text-white"
        class="relative text-lg md:text-xl font-mont-black text-white py-4 max-w-screen-xl mx-auto px-4  mt-10" />

      <div class="relative max-w-7xl mx-auto px-4 pt-20">

        <!-- Contenido principal -->
        <div class="relative z-10 pb-16 flex flex-col lg:flex-row gap-12">
          <!-- Columna izquierda -->
          <div class="lg:w-1/3 text-center lg:text-left">
            <h2 class="text-white font-mont-regular text-4xl md:text-6xl mb-6">Alianzas</h2>
            <button class="bg-primary text-white text-xl md:text-4xl px-8 py-4 rounded-full border-2 border-black w-64">
              NPA
            </button>
          </div>

          <!-- Columna derecha -->
          <div class="lg:w-2/3">
            <h3 class="text-2xl md:text-4xl text-tertiary mb-6 text-center lg:text-left font-public-sans-regular">
              Departamento de Negocios Internacionales
            </h3>
            <p class="text-tertiary text-sm md:text-xl text-justify font-mont-light">
              En virtud de una alianza estratégica, los miembros de New Point constituyen el
              <strong class="font-mont-semibold">
                Departamento de Derecho Comercial y Negocios Internacionales de la Cámara de Comercio y Cultura de
                Bélgica y
                Luxemburgo en Perú,
              </strong>
              lo que nos permite tender puentes sólidos entre América Latina y Europa.
            </p>
          </div>
        </div>

        <!-- Caja de Beneficios -->
        <div class="relative bottom-10 left-1/2 transform -translate-x-1/2 w-full z-20 mt-10">
          <!-- Notch decorativo -->
          <div class="relative h-24 py-4 hidden md:block">
            <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1293 90" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path
                d="M447.5 90C459.926 90 471.031 82.314 475.264 70.5557L475.703 69.3371C480.307 56.5277 492.416 48 506.126 48H786.874C800.584 48 812.693 56.5277 817.297 69.3371L817.736 70.5557C821.969 82.314 833.074 90 845.5 90H447.5Z"
                fill="white" />
            </svg>
            <div class="absolute top-[69px] left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10">
              <span class="text-lg lg:text-xl text-primary font-semibold">Beneficios</span>
            </div>
          </div>

          <!-- Contenedor de beneficios -->
          <div class="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-tertiary">
              <div class="py-4 lg:border-r border-gray-400">
                <p class="text-xl font-bold text-primary mb-2">Red internacional</p>
                <p class="text-lg text-tertiary">de contactos en Europa y América Latina</p>
              </div>
              <div class="py-4 lg:border-r border-gray-400">
                <p class="text-xl font-bold text-primary mb-2">Simplificación</p>
                <p class="text-lg text-tertiary">de procesos legales y comerciales</p>
              </div>
              <div class="py-4 lg:border-r border-gray-400">
                <p class="text-xl font-bold text-primary mb-2">Verdadera apertura</p>
                <p class="text-lg text-tertiary">de mercados internacionales sin explorar</p>
              </div>
              <div class="py-4">
                <p class="text-xl font-bold text-primary mb-2">Networking</p>
                <p class="text-lg text-tertiary">con empresas e instituciones internacionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { ref, nextTick } from 'vue';
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
    const showOverlayText = ref(Array(3).fill(false));

    const cards = [
      {
        img: '/src/assets/images/foreign-company.jpg',
        alt: 'Empresas extranjeras',
        overlayTitle: 'EMPRESAS EXTRANJERAS',
        overlaySubtitle: 'FACILITAMOS NEGOCIOS',
      },
      {
        bg: 'bg-blue-500',
        alt: 'Fondo azul',
        overlayTitle: 'EMPRESAS NACIONALES',
        overlaySubtitle: 'ESCALAMOS CONTIGO',
      },
      {
        bg: 'bg-green-500',
        alt: 'Fondo verde',
        overlayTitle: 'PERSONAS Y EMPRENDEDORES',
        overlaySubtitle: 'IMPULSAMOS TU ALCANCE',
      },
    ];

    function handleMouseEnter(index) {
      selected.value = index;
      showOverlayText.value = showOverlayText.value.map((_, i) => false);
    }

    function handleTransitionEnd(index) {
      if (selected.value === index) {
        showOverlayText.value[index] = true;
      }
    }

    return {
      selected,
      showOverlayText,
      cards,
      handleMouseEnter,
      handleTransitionEnd
    }
  }
}
</script>
