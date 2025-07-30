s="bg-noise-blue text-white py-4
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

  <section class="py-4 max-w-screen-xl mx-auto px-4 xl:px-0 mt-12">
      <!-- Title -->
        <SectionTitle title="CONOCE AL EQUIPO" textColor="text-tertiary" />
        <p class="text-4xl md:text-6xl xl:text-7xl flex items-center mb-4">
          <span class="font-mont-regular mr-2">Nuestro</span>
          <span class="font-mont-heavy mr-2">Equipo</span>
        </p>

      <!-- Cards -->
      <div
        class="flex flex-col md:flex-row md:h-[560px]"
        @mouseleave="selected = selected >= 0 ? selected : 0"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative transition-all duration-300 md:h-full cursor-pointer w-full"
          :class="{
            'md:w-[50%]': selected === index,
            'md:w-[25%]': selected !== index
          }"
          @mouseenter="selected = index"
          @click="handleCardClick(index)"
        >
          <template v-if="card.img">
            <img
              :src="card.img"
              :alt="card.alt"
              class="w-full h-full object-cover transition-transform duration-300"
              :class="{
                'scale-100': selected !== index,
                'scale-90': selected === index,
              }"
            />
          </template>
          <div
            v-if="selected !== index"
            class="absolute inset-0 bg-tertiary/90 opacity-70 z-10 transition-opacity duration-300"
          ></div>

          <div
            class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 z-20 flex flex-col justify-end transition-all duration-300"
            :class="{
              'opacity-100 translate-y-0 delay-100': selected === index,
              'opacity-0 translate-y-4 delay-[0ms] duration-[150ms]': selected !== index
            }"
          >
            <p class="font-mont-heavy text-sm lg:text-lg xl:text-xl">
              {{ card.overlayTitle }}
            </p>
            <p class="text-xs md:text-sm text-yellow-300 font-public-sans font-semibold">
              {{ card.overlaySubtitle }}
            </p>
          </div>

          <div
            v-if="selected !== index && isMobile"
            class="absolute inset-0 flex items-center justify-center text-white text-2xl font-mont-heavy z-30 text-center"
          >
            {{ card.overlayTitle }}
          </div>
        </div>
      </div>

  <div v-if="selected >= 0" class="mt-12 ">
    <div class="flex flex-col xl:flex-row gap-6 md:gap-8 md:mt-24 mb-4  xl:h-[600px]">

      <!-- Image -->
      <div class="w-full xl:w-1/2 flex justify-center md:min-h-[480px]">
        <img
          :src="cards[selected]?.img"
          :alt="cards[selected]?.alt"
          class="w-full md:max-w-md xl:max-w-full object-cover"
        />
      </div>

      <!-- Text -->
      <div class="w-full xl:w-1/2 text-justify flex flex-col md:min-h-[480px]">
        <div>
          <SectionTitle title="NEW POINT ASESORES" textColor="text-tertiary" />

          <p class="font-mont-heavy text-2xl lg:text-5xl text-start">
            {{ cards[selected]?.overlayTitle }}
          </p>

          <p class="text-gray-600 font-public-sans-regular my-4">
            {{ details[selected][0]?.subtitle }}
          </p>

          <ul class="space-y-3 md:space-y-4 text-black">
            <li
              v-for="(item, itemIndex) in details[selected]"
              :key="itemIndex"
              class="flex gap-2"
            >
              <span class="md:text-lg mt-1">❯</span>
              <div>
                <p class="font-public-sans font-bold md:text-lg">
                  {{ item.title }}
                  <span class="font-public-sans-regular md:text-lg font-normal">
                    {{ item.extra }}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Role -->
        <div class="mt-10 lg:mt-auto pt-8 md:pt-0">
              <p class="font-mont-black md:text-lg">
                {{ cards[selected]?.overlayTitle }}
              </p>
          <p class="font-public-sans-bold text-primary font-bold">
            {{ cards[selected]?.overlaySubtitle }}
          </p>
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
    img: '/src/assets/images/celia.png',
    alt: 'CELIA',
    overlayTitle: 'CELIA CHIRINOS VASQUEZ',
    overlaySubtitle: 'ASISTENTE LEGAL',
  },
];

const details = [
  [
    {
      title: 'Especialidad:',
      subtitle: 'Narem lidera la expansión de New Point con una estrategia sólida, empatía y comunicación efectiva, destacando en la creación de relaciones y superación de barreras internacionales.',
      extra: 'Arbitraje en Contrataciones del Estado y Arbitraje en Inversiones.',
    },
    {
      title: 'Experiencia destacada:',
      extra: 'Árbitro en competencias de arbitraje en Perú, Ecuador y Austria.',
    },
    {
      title: 'Afiliaciones:',
      extra: 'Director del Dpto. de Negocios Internacionales – CCBLP, miembro de WAPPP y Arbitraje Alumni.',
    },
        {
      title: 'Dato curioso:',
      extra: 'Músico en su tiempo libre, porque los negocios también requieren ritmo y armonía. Traductor Inglés-español.',
    },
  ],
  [

    {
      title: 'Especialidad:',
      extra: 'Derecho civil e inmobiliario. Diseño para redes sociales.',
      subtitle: 'Claudia integra su formación jurídica con una sólida capacidad creativa, lo que nos permite ofrecer soluciones integrales tanto en el ámbito del Derecho como en el comercial. Siempre apuesta por la innovación, transformando ideas complejas en soluciones claras y funcionales.',

    },
    {
      title: 'Experiencia destacada:',
      extra: 'Asesora legal en el Ministerio de Justicia y Derechos Humanos.',
    },
   {
      title: 'Afiliaciones:',
      extra: 'Consultora legal y diseñadora en la Cámara de Comercio y Cultura de Bélgica y Luxemburgo en el Perú.',
    },
    {
      title: 'Dato curioso:',
      extra: 'Diseñadora freelance desde hace cuatro años. Apasionada por el canto y la escritura creativa.',
    },
  ],
  [
    {
      title: 'Especialidad:',
      subtitle: 'Carlos es un profesional multidisciplinario con un enfoque integral en planificación urbana y desarrollo económico. Cuenta con más de 40 años de experiencia en la creación de proyectos de vivienda social, mercados, equipamiento urbano y defensas civiles a nivel nacional',
      extra: 'Arquitecto Urbanista, Economista y Catastro.',
    },
    {
      title: 'Experiencia destacada:',
      extra: 'Saneamiento físico legal de viviendas, habilitaciones urbanas y proyectos de infraestructura.',
    },
    {
      title: 'Afiliaciones:',
      extra: 'Ex-miembro del Instituto de Desarrollo Urbano y Social del Perú (IDESUR). Colegio de arquitectos del Perú.',
    },
    {
      title: 'Dato curioso:',
      extra: 'Candidato a la alcaldía distrital de Ate en 2018, demostrando su compromiso con la gestión pública y el desarrollo local.',
    },
  ],

  [
    {
      title: 'Especialidad:',
      subtitle: 'Eliana contribuye al equipo con su criterio, iniciativa y pasión. Su experiencia en el Poder Judicial y en el Arbitraje le proporciona una perspectiva práctica del Derecho, que se complementa con su notable habilidad de redacción en español e inglés.',
      extra: 'Derecho Civil e Inmobiliario. Investigación y redacción jurídica.',
    },
    {
      title: 'Experiencia destacada:',
      extra: 'Miembro de la comisión de redacción de la Revista de Derecho “Ita Ius Esto”.',
    },
        {
      title: 'Afiliaciones:',
      extra: 'Asistente legal del Dpto. de Negocios Internacionales – CCBLP.',
    },
    {
      title: 'Dato interesante:',
      extra: 'Colabora con distintas instituciones para brindar apoyo social y comunitario. Ciclista en su tiempo libre.',
    },
  ],
  [
    {
      title: 'Especialidad:',
      subtitle: 'Veronika es una jurista multilingüe con formación internacional en Derecho Francés, Latinoamericano y Europeo. Con experiencia en Francia y formación en México, combina análisis jurídico y sensibilidad intercultural para crear soluciones globales.',
      extra:"Derecho Internacional Privado, Arbitraje y Derecho de la Unión Europea."
    },
    {
      title: 'Experiencia destacada:',
      extra: 'Pasantía en derecho migratorio y fiscalidad en Francia; estudios en México, Francia y Países Bajos.',
    },
    {
      title: 'Afiliaciones:',
      extra: 'Universidad Paris Nanterre y Universidad Nacional Autónoma de México.',
    },
    {
      title: 'Dato interesante:',
      extra: 'Domina cinco idiomas y le apasiona explorar sistemas legales y nuevas culturas.',
    },
  ],
  [
    {
      title: 'Especialidad:',
      subtitle: 'Celia proporciona una mirada analítica y versátil que la convierte en una pieza clave dentro del equipo, tanto en el ámbito legal como organizativo. Es una estudiante destacada, parte del quinto superior y ganadora de la Beca Lead de la Universidad de Piura.',
      extra:"Derecho Civil. inmobiliario y Derecho Administrativo."
    },
    {
      title: 'Experiencia destacada:',
      extra: 'Ganadora de la beca del programa “Gobernanza en tiempo de crisis” de la Universidad Panamericana (México).',
    },
    {
      title: 'Afiliaciones:',
      extra: 'Asistente legal del Dpto. de Negocios Internacionales – CCBLP.',

    },
    {
      title: 'Dato interesante:',
      extra: 'apasionada por la fotografía y los idiomas (inglés, francés y alemán).',
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
  const infoSection = document.querySelector('[class*="min-h-"]');
  infoSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const handleCardClick = (index) => {
  selected.value = index;
  if (isMobile.value) {
    scrollToInfo();
  }
};
</script>
