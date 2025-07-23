<template>
<div class="bg-noise-white">
    <section class="bg-noise-blue text-white py-4 md:py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="font-mont-heavy text-4xl md:text-6xl mb-6">Nuestro Equipo</h1>
            <p class="font-public-sans-black text-sm">
            <span class="text-secondary">INICIO</span> / EQUIPO
            </p>
        </div>
     </section>

    <section class="py-4 max-w-screen-xl mx-auto px-4 xl:px-0 gap-32 mt-10">

        <div class="mt-12 md:mt-20 max-w-screen-xl mx-auto px-4 xl:px-0 gap-32">
          <!-- Título -->
          <div>
            <SectionTitle title="CONOCE AL EQUIPO" textColor="text-tertiary" />
            <p class="text-3xl md:text-6xl xl:text-7xl mt-6 md:mt-10 flex  items-center mb-4">
              <span class="font-mont-regular mr-2">Nuestro</span>
              <span class="font-mont-heavy whitespace-nowrap mr-2">Equipo</span>
            </p>
          </div>

          <!-- Cards -->
          <div class="flex flex-col md:flex-row h-auto md:h-[20rem] lg:h-[25rem] overflow-hidden " @mouseleave="selected = 0">
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="relative transition-all duration-300 h-48 md:h-full cursor-pointer min-w-0 overflow-hidden w-full"
              :class="{
                // En desktop: comportamiento de expansión desde el centro
                'md:w-[50%]': selected === index,
                'md:w-[25%]': selected !== index,
                'md:ml-auto md:mr-auto': selected === index // Centrar la tarjeta seleccionada
              }"
              @mouseenter="selected = index"
              @mouseleave="selected = isMobile ? 0 : -1"
              @click="selected = index; scrollToInfo()"
            >
              <!-- Imagen o color de fondo -->
              <template v-if="card.img">
                <img
                  :src="card.img"
                  :alt="card.alt"
                  class="w-full h-full object-cover"
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
                class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 z-20 flex flex-col justify-end transition-all duration-300"
                :class="{
                  'opacity-100 translate-y-0 delay-100': selected === index,
                  'opacity-0 translate-y-4 delay-[0ms] duration-[150ms]': selected !== index
                }"
              >
                <p class="font-mont-heavy text-sm md:text-lg lg:text-xl leading-tight">
                  {{ card.overlayTitle }}
                </p>
                <p class="text-xs md:text-sm text-yellow-300 font-public-sans-semibold">
                  {{ card.overlaySubtitle }}
                </p>
              </div>

              <!-- Nombre encima del hover -->
              <div
                v-if="selected !== index && isMobile"
                class="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-mont-heavy z-30 transition-opacity duration-300 text-center"
              >
                {{ card.overlayTitle }}
              </div>
            </div>
          </div>

          <!-- Texto dinámico debajo -->
          <div class="mt-6 min-h-[20rem] md:min-h-[32rem]">
            <!-- Primera opción -->
            <div
              v-if="selected === 0"
              class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch"
            >
              <!-- Imagen dinámica basada en la tarjeta seleccionada -->
              <div class="w-full md:w-1/2 overflow-hidden">
                <img
                  :src="cards[selected]?.img"
                  :alt="cards[selected]?.alt"
                  class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
                />
              </div>

              <!-- Contenido -->
              <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
                <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                  New Point Asesores
                </p>
                <div class="flex flex-col">
                    <p class="font-mont-heavy text-7xl">
                    NAREM ROEL
                    </p>
                    <p class="font-mont-heavy text-7xl">
                    GAUTO
                    </p>
                </div>

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

              <!-- Imagen dinámica basada en la tarjeta seleccionada -->
              <div class="w-full md:w-1/2 overflow-hidden">
                <img
                  :src="cards[selected]?.img"
                  :alt="cards[selected]?.alt"
                  class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
                />
              </div>

              <!-- Contenido -->
              <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
                <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                  New Point Asesores
                </p>
                 <div class="flex flex-col">
                    <p class="font-mont-heavy text-7xl">
                    CLAUDIA SILVA
                    </p>
                    <p class="font-mont-heavy text-7xl">
                    GARCIA
                    </p>
                </div>
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
                          Regularización integral de predios, declaratoria de fábrica, independizaciones y habilitaciones urbanas
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
                          Diseño y desarrollo técnico-legal de proyectos de centros comerciales, mercados, centros educativos, viviendas multifamiliares y unifamiliares.
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Opción 3 -->
            <div v-else-if="selected === 2" class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">

              <!-- Imagen dinámica basada en la tarjeta seleccionada -->
              <div class="w-full md:w-1/2 overflow-hidden">
                <img
                  :src="cards[selected]?.img"
                  :alt="cards[selected]?.alt"
                  class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
                />
              </div>

              <!-- Contenido -->
              <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
                <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                    New Point Asesores
                </p>
                 <div class="flex flex-col">
                    <p class="font-mont-heavy text-7xl">
                    CARLOS ROEL
                    </p>
                    <p class="font-mont-heavy text-7xl">
                    MONTELLANOS
                    </p>
                </div>
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
                        Asesoría en compraventa, prescripción adquisitiva, acción reivindicatoria y protección patrimonial
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
                        Gestión de títulos, subdivisiones, acumulaciones, habilitaciones urbanas y otros procedimientos técnicos-legales.
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
                          Desarrollo de marca personal o de negocio, posicionamiento digital y diseño de estrategias de comunicación adaptadas al mercado
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Opción 4 -->
            <div v-else-if="selected === 3" class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">

              <!-- Imagen dinámica basada en la tarjeta seleccionada -->
              <div class="w-full md:w-1/2 overflow-hidden">
                <img
                  :src="cards[selected]?.img"
                  :alt="cards[selected]?.alt"
                  class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
                />
              </div>

              <!-- Contenido -->
              <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
                <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                  New Point Asesores
                </p>
                <div class="flex flex-col">
                    <p class="font-mont-heavy text-7xl">
                        ELIANA ROJAS
                    </p>
                    <p class="font-mont-heavy text-7xl">
                        QUINTO
                    </p>
                </div>
                <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4  md:text-xl">
                  Impulsamos tus ideas y proyectos innovadores
                </p>

                <ul class="space-y-3 md:space-y-4 text-black">
                  <li class="flex gap-2">
                    <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                    <div>
                      <p class="font-public-sans font-bold  md:text-xl">
                        Patentes y Propiedad Intelectual:
                        <span class="font-public-sans-regular  md:text-xl font-normal">
                          Asesoría en la obtención y defensa de patentes, derechos de autor y marcas.
                        </span>
                      </p>
                    </div>
                  </li>

                  <li class="flex gap-2">
                    <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                    <div>
                      <p class="font-public-sans font-bold  md:text-xl">
                        Consultoría en Innovación:
                        <span class="font-public-sans-regular  md:text-xl font-normal">
                          Evaluación y mejora de proyectos innovadores, búsqueda de financiamiento y socios estratégicos.
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Opción 5 -->
            <div v-else-if="selected === 4" class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">

              <!-- Imagen dinámica basada en la tarjeta seleccionada -->
              <div class="w-full md:w-1/2 overflow-hidden">
                <img
                  :src="cards[selected]?.img"
                  :alt="cards[selected]?.alt"
                  class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
                />
              </div>

              <!-- Contenido -->
              <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
                <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                  New Point Asesores
                </p>
                    <p class="font-mont-heavy text-7xl">
                        VERONIKA JAMARIKOVÁ
                    </p>

                <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4  md:text-xl">
                  Aceleramos tu crecimiento y expansión
                </p>

                <ul class="space-y-3 md:space-y-4 text-black">
                  <li class="flex gap-2">
                    <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                    <div>
                      <p class="font-public-sans font-bold  md:text-xl">
                        Financiamiento y Capital de Riesgo:
                        <span class="font-public-sans-regular  md:text-xl font-normal">
                          Conexión con inversores y acceso a financiamiento para proyectos de expansión.
                        </span>
                      </p>
                    </div>
                  </li>

                  <li class="flex gap-2">
                    <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                    <div>
                      <p class="font-public-sans font-bold  md:text-xl">
                        Estrategias de Salida a Mercado:
                        <span class="font-public-sans-regular  md:text-xl font-normal">
                          Asesoría en la entrada a nuevos mercados, incluyendo estudios de mercado y estrategias comerciales.
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Opción 6 -->
            <div v-else-if="selected === 5" class="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">

              <!-- Imagen dinámica basada en la tarjeta seleccionada -->
              <div class="w-full md:w-1/2 overflow-hidden">
                <img
                  :src="cards[selected]?.img"
                  :alt="cards[selected]?.alt"
                  class="w-full h-[200px] md:h-full max-h-[300px] md:max-h-[600px] object-cover"
                />
              </div>

              <!-- Contenido -->
              <div class="w-full md:w-1/2 text-justify flex flex-col justify-start">
                <p class="text-lg md:text-xl font-mont-black text-tertiary mb-4">
                  New Point Asesores
                </p>
                <div class="flex flex-col">
                    <p class="font-mont-heavy text-7xl">
                        CELIA CHIRINOS
                    </p>
                    <p class="font-mont-heavy text-7xl">
                        VASQUEZ
                    </p>
                </div>
                <p class="text-gray-600 font-public-sans-regular max-w-3xl mb-4  md:text-xl">
                  Fortalecemos tus relaciones y redes de contacto
                </p>

                <ul class="space-y-3 md:space-y-4 text-black">
                  <li class="flex gap-2">
                    <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                    <div>
                      <p class="font-public-sans font-bold  md:text-xl">
                        Networking y Alianzas Estratégicas:
                        <span class="font-public-sans-regular  md:text-xl font-normal">
                          Conexión con profesionales, empresas e inversores en eventos y plataformas especialesizadas.
                        </span>
                      </p>
                    </div>
                  </li>

                  <li class="flex gap-2">
                    <span class=" md:text-lg mt-1 flex-shrink-0">❯</span>
                    <div>
                      <p class="font-public-sans font-bold  md:text-xl">
                        Mentoría y Asesoría Personalizada:
                        <span class="font-public-sans-regular  md:text-xl font-normal">
                          Orientación y apoyo en el desarrollo profesional y empresarial.
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
import { ref, onMounted } from 'vue';
import SectionTitle from '../../services/components/section-title.component.vue';

const selected = ref(0); 
const isMobile = ref(false);

const cards = [
  {
    img: '/src/assets/images/narem.png',
    alt: 'NAREM',
    overlayTitle: 'NAREM ROEL GAUTO',
    overlaySubtitle: 'LÍDER DEL ÁREA COMERCIAL',
  },
  {
    img: '/src/assets/images/claudia.png',
    alt: 'CLAUDIA',
    overlayTitle: 'CLAUDIA SILVA GARCIA',
    overlaySubtitle: 'LÍDER DEL ÁREA LEGAL',
  },
  {
    img: '/src/assets/images/carlos.png',
    alt: 'CARLOS',
    overlayTitle: 'CARLOS ROEL MONTELLANOS',
    overlaySubtitle: 'CONSULTOR EN ARQUITECTURA',
  },
  {
    img: '/src/assets/images/eliana.png',
    alt: 'ELIANA',
    overlayTitle: 'ELIANA ROJAS QUINTO',
    overlaySubtitle: 'ASISTENTE LEGAL',
  },
  {
    img: '/src/assets/images/veronika.png',
    alt: 'VERONIKA',
    overlayTitle: 'VERONIKA JAMARIKOVÁ',
    overlaySubtitle: 'CONSULTORA LEGAL JUNIOR',
  },
  {
    img: '/src/assets/images/cecilia.png',
    alt: 'CECILIA',
    overlayTitle: 'CELIA CHIRINOS VASQUEZ',
    overlaySubtitle: 'ASISTENTE LEGAL',
  },
];

const details = [
  [
    {
      title: 'Consultoría y Asesoría Legal y Técnica:',
      subtitle: 'Asesoramos en la adquisición y regularización de propiedades para inversión o expansión.',
      extra: 'También brindamos soporte legal en constitución de empresas, contratos y normativa Perú–UE.',
    },
    {
      title: 'Estudios de Mercado y Análisis de Demanda Local:',
      subtitle: 'Identificación de oportunidades reales de negocio en el mercado peruano.',
    },
    {
      title: 'Corretaje Comercial Internacional:',
      subtitle: 'Conexión con productores, proveedores y proyectos de inversión en Perú en sectores estratégicos.',
    },
  ],
  [
    {
      title: 'Saneamiento Físico-Legal de Inmuebles:',
      subtitle: 'Regularización integral de predios, declaratoria de fábrica, independizaciones y habilitaciones urbanas.',
    },
    {
      title: 'Planes de Marketing Estratégico:',
      subtitle: 'Diseño de estrategias de crecimiento comercial basadas en datos reales y estudios de mercado.',
    },
    {
      title: 'Proyectos Arquitectónicos Comerciales:',
      subtitle: 'Diseño y desarrollo técnico-legal de proyectos de centros comerciales, mercados, centros educativos, viviendas multifamiliares y unifamiliares.',
    },
  ],
  [
    {
      title: 'Consultoría Legal Personalizada en Derecho Inmobiliario:',
      subtitle: 'Asesoría en compraventa, prescripción adquisitiva, acción reivindicatoria y protección patrimonial.',
    },
    {
      title: 'Gestión de Trámites y Regularizaciones ante SUNARP y Catastro:',
      subtitle: 'Gestión de títulos, subdivisiones, acumulaciones, habilitaciones urbanas y otros procedimientos técnicos-legales.',
    },
    {
      title: 'Asesoría en Identidad y Estrategia Comercial:',
      subtitle: 'Desarrollo de marca personal o de negocio, posicionamiento digital y diseño de estrategias de comunicación adaptadas al mercado.',
    },
  ],
  [
    {
      title: 'Patentes y Propiedad Intelectual:',
      subtitle: 'Asesoría en la obtención y defensa de patentes, derechos de autor y marcas.',
    },
    {
      title: 'Consultoría en Innovación:',
      subtitle: 'Evaluación y mejora de proyectos innovadores, búsqueda de financiamiento y socios estratégicos.',
    },
  ],
  [
    {
      title: 'Financiamiento y Capital de Riesgo:',
      subtitle: 'Conexión con inversores y acceso a financiamiento para proyectos de expansión.',
    },
    {
      title: 'Estrategias de Salida a Mercado:',
      subtitle: 'Asesoría en la entrada a nuevos mercados, incluyendo estudios de mercado y estrategias comerciales.',
    },
  ],
  [
    {
      title: 'Networking y Alianzas Estratégicas:',
      subtitle: 'Conexión con profesionales, empresas e inversores en eventos y plataformas especialesizadas.',
    },
    {
      title: 'Mentoría y Asesoría Personalizada:',
      subtitle: 'Orientación y apoyo en el desarrollo profesional y empresarial.',
    },
  ],
];

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  checkMobile();
  window.addEventListener('resize', checkMobile);
});

const scrollToInfo = () => {
  if (isMobile.value) {
    const infoSection = document.querySelector('[class*="min-h-"]'); // Selector corregido para evitar caracteres no válidos
    infoSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>
