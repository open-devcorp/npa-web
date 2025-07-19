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

        <section class="py-4">

        <div class="max-w-screen-xl mx-auto px-4 xl:px-0 gap-32">
        <p class="text-lg md:text-xl font-mont-black text-tertiary">
            SERVICIOS
        </p>

        <p class="text-4xl md:text-6xl xl:text-7xl mt-10 leading-tight flex flex-wrap items-center">
            <span class="font-mont-regular mr-2">Tu</span>
            <span class="font-mont-heavy whitespace-nowrap mr-2">punto</span>
            <span class="font-mont-regular mr-2">de solución</span>
        </p>
        </div>

        <!--CARDS-->
        <div class="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-8 lg:gap-12 mt-10 px-4 xl:px-0">
        <!-- Bloque -->
        <div class="flex flex-col w-full lg:w-1/3 h-full">
            <img src="../assets/images/about-business-woman.png" alt="Imagen 1" class="w-full h-[200px] md:h-[250px] object-cover rounded" />

            <div class="flex flex-wrap lg:flex-nowrap gap-2 my-4 w-full">
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Mercado</span>
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Marca</span>
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Contenido</span>
            </div>

            <h3 class="text-2xl md:text-3xl xl:text-4xl font-mont-heavy mb-2 text-tertiary">Asesoría Comercial</h3>
            <p class="font-public-sans-regular text-justify text-gray-500">
            Servicios de estudios de mercado y viabilidad para detectar oportunidades de crecimiento, complementados con estrategias de negocio, marca y planes digitales para fortalecer la presencia y competitividad empresarial.
            </p>
        </div>

        <div class="flex flex-col w-full lg:w-1/3 h-full">
            <img src="../assets/images/about-business-woman.png" alt="Imagen 2" class="w-full h-[200px] md:h-[250px] object-cover rounded" />

            <div class="flex flex-wrap lg:flex-nowrap gap-2 my-4 w-full">
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Inmobiliario</span>
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">empresarial</span>
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Arquitectónicos</span>
            </div>

            <h3 class="text-2xl md:text-3xl xl:text-4xl font-mont-heavy mb-2 text-tertiary">Asesoría legal</h3>
            <p class="font-public-sans-regular text-justify text-gray-500">
            Servicios en derecho inmobiliario y gestión de propiedades, con soporte jurídico integral para operaciones inmobiliarias y empresariales. Incluye planificación de proyectos arquitectónicos y urbanísticos, asegurando cumplimiento normativo y viabilidad legal desde el inicio hasta la ejecución.
            </p>
        </div>

        <div class="flex flex-col w-full lg:w-1/3 h-full">
            <img src="../assets/images/about-business-woman.png" alt="Imagen 3" class="w-full h-[200px] md:h-[250px] object-cover rounded" />

            <div class="flex flex-wrap lg:flex-nowrap gap-2 my-4 w-full">
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Inversores</span>
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Proveedores</span>
            <span class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs">Exportaciones</span>
            </div>

            <h3 class="text-2xl md:text-3xl xl:text-4xl font-mont-heavy mb-2 text-tertiary">Corretaje Comercial</h3>
            <p class="font-public-sans-regular text-justify text-gray-500">
            Servicio que facilita la conexión entre inversores y proveedores, promoviendo exportaciones e inversiones. También gestionamos búsqueda y selección de oportunidades comerciales, contribuyendo al crecimiento y éxito de empresas en diversos mercados.
            </p>
        </div>
        </div>


    <!-- Cards -->
  <div class="mt-20 max-w-screen-xl mx-auto px-4 xl:px-0 gap-32">
    <!-- Título -->
    <div>
      <p class="text-lg md:text-xl font-mont-black text-tertiary">SEGMENTO POR CLIENTE</p>
      <p class="text-4xl md:text-6xl xl:text-7xl mt-10 flex flex-wrap items-center mb-4">
        <span class="font-mont-regular mr-2">Nuestros</span>
        <span class="font-mont-heavy whitespace-nowrap mr-2">Segmentos</span>
      </p>
    </div>

    <!-- Cards -->
    <div class="flex flex-col md:flex-row h-auto md:h-[20rem] lg:h-[25rem] overflow-hidden gap-4" @mouseleave="selected = 0">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="relative transition-all duration-300 h-48 md:h-full cursor-pointer min-w-0 overflow-hidden"
        :class="[
          // Mobile: todas las cards ocupan el ancho completo
          'md:' + (selected === index ? 'w-[50%]' : 'w-[25%]'),
          'w-full'
        ]"
        @mouseenter="selected = index"
        @click="selected = index"
      >
        <!-- Imagen o color de fondo -->
        <template v-if="card.img">
          <img
            :src="card.img"
            :alt="card.alt"
            class="w-full h-full object-cover object-center"
          />
        </template>
        <template v-else>
          <div :class="['w-full h-full', card.bg]"></div>
        </template>

        <!-- Capa azul para no seleccionados -->
        <div
          v-if="selected !== index"
          class="absolute inset-0 bg-[#00213F] opacity-70 z-10 transition-opacity duration-300"
        ></div>

        <!-- Overlay degradado y texto que se revela -->
        <div
          class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent text-white px-4 md:px-6 py-2 md:py-4 z-20 flex flex-col justify-end transition-all duration-300"
          :class="selected === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <p class="font-mont-heavy text-sm md:text-lg xl:text-xl leading-tight">
            {{ card.overlayTitle }}
          </p>
          <p class="text-xs md:text-sm text-yellow-300 font-public-sans-semibold">
            {{ card.overlaySubtitle }}
          </p>
        </div>
      </div>
    </div>

    <!-- Texto dinámico debajo -->
    <div class="mt-6 min-h-[20rem] md:min-h-[32rem]">
      <!-- Primera opción -->
      <div
        v-if="selected === 0"
        class="flex flex-col md:flex-row gap-8 mt-12 md:mt-24 items-stretch"
      >
        <!-- Imagen -->
        <div class="w-full md:w-1/2 overflow-hidden">
          <img
            src="../assets/images/foreign-company.jpg"
            alt="Empresas extranjeras"
            class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
          />
        </div>

        <!-- Contenido -->
        <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
          <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
            Para Empresas Extranjeras
          </p>
          <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4 text-lg md:text-xl">
            Facilitamos la inversión, exportación e ingreso al mercado peruano
          </p>

          <ul class="space-y-4 text-black">
            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Consultoría y Asesoría Legal y Técnica:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                    Asesoramos en la adquisición y regularización de propiedades para inversión o expansión.
                  </span>
                </p>
                <p class="mt-2 font-public-sans-regular text-base md:text-xl">
                  También brindamos soporte legal en constitución de empresas, contratos y normativa Perú–UE.
                </p>
              </div>
            </li>

            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Estudios de Mercado y Análisis de Demanda Local:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                    Identificación de oportunidades reales de negocio en el mercado peruano.
                  </span>
                </p>
              </div>
            </li>

            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Corretaje Comercial Internacional:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                    Conexión con productores, proveedores y proyectos de inversión en Perú en sectores estratégicos.
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Opción 2 -->
      <div v-else-if="selected === 1" class="flex flex-col md:flex-row gap-8 mt-12 md:mt-24 items-stretch">

        <!-- Imagen -->
        <div class="w-full md:w-1/2 overflow-hidden">
          <img
            src="../assets/images/foreign-company.jpg"
            alt="Empresas Nacionales"
            class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
          />
        </div>

        <!-- Contenido -->
        <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
          <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
            Para Empresas Nacionales
          </p>
          <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4 text-lg md:text-xl">
              Impulsar su expansión, formalización y crecimiento en el mercado local e internacional
          </p>

          <ul class="space-y-4 text-black">
            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                    Saneamiento Físico-Legal de Inmuebles:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                    Regularización integral de predios, declaratoria de fábrica, independizaciones y habilitaciones urbanas
                  </span>
                </p>
              </div>
            </li>

            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Planes de Marketing Estratégico:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                    Diseño de estrategias de crecimiento comercial basadas en datos reales y estudios de mercado. 
                  </span>
                </p>
              </div>
            </li>

            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Proyectos Arquitectónicos Comerciales:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                    Diseño y desarrollo técnico-legal de proyectos de centros comerciales, mercados, centros educativos, viviendas multifamiliares y unifamiliares.
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Opción 3 -->
       <div v-else-if="selected === 2" class="flex flex-col md:flex-row gap-8 mt-12 md:mt-24 items-stretch">

        <!-- Imagen -->
        <div class="w-full md:w-1/2 overflow-hidden">
          <img
            src="../assets/images/foreign-company.jpg"
            alt="Empresas Nacionales"
            class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
          />
        </div>

        <!-- Contenido -->
        <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
          <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
            Para Personas Naturales y Emprendedores
          </p>
          <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4 text-lg md:text-xl">
            Formalizar, proteger y potenciar sus inversiones personales o pequeños negocios
          </p>

          <ul class="space-y-4 text-black">
            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Consultoría Legal Personalizada en Derecho Inmobiliario:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                  Asesoría en compraventa, prescripción adquisitiva, acción reivindicatoria y protección patrimonial
                  </span>
                </p>
              </div>
            </li>

            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Gestión de Trámites y Regularizaciones ante SUNARP y Catastro:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                  Gestión de títulos, subdivisiones, acumulaciones, habilitaciones urbanas y otros procedimientos técnicos-legales.
                  </span>
                </p>
              </div>
            </li>

            <li class="flex gap-2">
              <span class="text-base md:text-lg mt-1 flex-shrink-0">❯</span>
              <div>
                <p class="font-public-sans font-bold text-base md:text-xl">
                  Asesoría en Identidad y Estrategia Comercial:
                  <span class="font-public-sans-regular text-base md:text-xl font-normal">
                    Desarrollo de marca personal o de negocio, posicionamiento digital y diseño de estrategias de comunicación adaptadas al mercado
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
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const selected = ref(0)
const showOverlayText = ref(Array(3).fill(false)) 

const cards = [
  {
    img: '/src/assets/images/foreign-company.jpg',
    alt: 'Empresas extranjeras',
    overlayTitle: 'EMPRESAS EXTRANJERAS',
    overlaySubtitle: 'FACILITAMOS NEGOCIOS'
  },
  {
    bg: 'bg-blue-500',
    alt: 'Fondo azul',
    overlayTitle: 'EMPRESAS NACIONALES',
    overlaySubtitle: 'ESCALAMOS CONTIGO'
  },
  {
    bg: 'bg-green-500',
    alt: 'Fondo verde',
    overlayTitle: 'PERSONAS Y EMPRENDEDORES',
    overlaySubtitle: 'IMPULSAMOS TU ALCANCE'
  }
]

function handleMouseEnter(index) {
  selected.value = index
  showOverlayText.value = showOverlayText.value.map((_, i) => false)
}

function handleTransitionEnd(index) {
  if (selected.value === index) {
    showOverlayText.value[index] = true
  }
}
</script>
