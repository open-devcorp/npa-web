<template>
  <div class="max-w-3xl mx-auto p-2">
    <div class="relative w-full flex flex-col items-center">
      <div class="w-full relative">
        <img
          :src="cards[selected].img"
          :alt="cards[selected].alt"
          class="w-full md:max-w-md xl:max-w-full object-cover duration-100 mt-6"
          style="height: 340px; max-height: 340px;"
        />
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent px-6 py-4 text-white">
          <h2 class="font-mont-heavy lg:text-lg xl:text-xl">{{ cards[selected].overlayTitle }}</h2>
          <p class="text-xs md:text-sm text-yellow-300 font-public-sans font-semibold">
            {{ cards[selected].overlaySubtitle }}
          </p>
        </div>
      </div>
      <!-- Flechas debajo de la foto grande -->
      <div class="flex items-center justify-center mt-4 gap-8">
        <button
          class="text-3xl md:text-4xl font-bold text-blue-700 bg-white/80 hover:bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shadow transition duration-100 disabled:opacity-30"
          @click="prevCard"
          :disabled="selected === 0"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          class="text-3xl md:text-4xl font-bold text-blue-700 bg-white/80 hover:bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shadow transition duration-100 disabled:opacity-30"
          @click="nextCard"
          :disabled="selected === cards.length - 1"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
      <!-- Info extra del miembro (estilo mejorado) -->
      <div class="w-full xl:w-1/2 text-justify flex flex-col md:min-h-[480px] mt-10">
        <div class="flex flex-col gap-6 lg:gap-8">
          <div class="flex flex-col lg:flex-row justify-between lg:gap-10 gap-5">
            <p class="font-mont-heavy text-2xl lg:text-5xl text-start">
              {{ cards[selected]?.overlayTitle }}
            </p>
          </div>
          <p class="text-gray-600 font-public-sans-regular">
            {{ details[selected][0]?.subtitle }}
          </p>
          <ul class="space-y-3 md:space-y-4 text-black">
            <li v-for="(item, itemIndex) in details[selected]" :key="itemIndex" class="flex gap-2">
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
        <div class="mt-10 lg:mt-auto pt-8 md:pt-0 border-t border-gray-200">
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
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionTitle from '../../public/components/section-title.component.vue';
import { useI18n } from 'vue-i18n';

import naremImg from '../../assets/images/narem.webp';
import claudiaImg from '../../assets/images/claudia.webp';
import carlosImg from '../../assets/images/carlos.webp';
import elianaImg from '../../assets/images/eliana.webp';
import veronikaImg from '../../assets/images/veronika.webp';
import celiaImg from '../../assets/images/celia.webp';

const { t } = useI18n();

const selected = ref(0);

const cards = computed(() => [
  {
    img: naremImg,
    alt: 'NAREM',
    overlayTitle: t('team.members.member1.name'),
    overlaySubtitle: t('team.members.member1.role'),
  },
  {
    img: claudiaImg,
    alt: 'CLAUDIA',
    overlayTitle: t('team.members.member2.name'),
    overlaySubtitle: t('team.members.member2.role'),
  },
  {
    img: carlosImg,
    alt: 'CARLOS',
    overlayTitle: t('team.members.member3.name'),
    overlaySubtitle: t('team.members.member3.role'),
  },
  {
    img: elianaImg,
    alt: 'ELIANA',
    overlayTitle: t('team.members.member4.name'),
    overlaySubtitle: t('team.members.member4.role'),
  },
  {
    img: veronikaImg,
    alt: 'VERONIKA',
    overlayTitle: t('team.members.member5.name'),
    overlaySubtitle: t('team.members.member5.role'),
  },
  {
    img: celiaImg,
    alt: 'CELIA',
    overlayTitle: t('team.members.member6.name'),
    overlaySubtitle: t('team.members.member6.role'),
  },
]);
const details = computed(() => [
  [
    {
      title: t('team.members.member1.data.0.title'),
      subtitle: t('team.members.member1.description'),
      extra: t('team.members.member1.data.0.description'),
    },
    {
      title: t('team.members.member1.data.1.title'),
      extra: t('team.members.member1.data.1.description'),
    },
    {
      title: t('team.members.member1.data.2.title'),
      extra: t('team.members.member1.data.2.description'),
    },
    {
      title: t('team.members.member1.data.3.title'),
      extra: t('team.members.member1.data.3.description'),
    },
  ],
  [
    {
      title: t('team.members.member2.data.0.title'),
      subtitle: t('team.members.member2.description'),
      extra: t('team.members.member2.data.0.description'),
    },
    {
      title: t('team.members.member2.data.1.title'),
      extra: t('team.members.member2.data.1.description'),
    },
    {
      title: t('team.members.member2.data.2.title'),
      extra: t('team.members.member2.data.2.description'),
    },
    {
      title: t('team.members.member2.data.3.title'),
      extra: t('team.members.member2.data.3.description'),
    },
  ],
  [
    {
      title: t('team.members.member3.data.0.title'),
      subtitle: t('team.members.member3.description'),
      extra: t('team.members.member3.data.0.description'),
    },
    {
      title: t('team.members.member3.data.1.title'),
      extra: t('team.members.member3.data.1.description'),
    },
    {
      title: t('team.members.member3.data.2.title'),
      extra: t('team.members.member3.data.2.description'),
    },
    {
      title: t('team.members.member3.data.3.title'),
      extra: t('team.members.member3.data.3.description'),
    },
  ],
  [
    {
      title: t('team.members.member4.data.0.title'),
      subtitle: t('team.members.member4.description'),
      extra: t('team.members.member4.data.0.description'),
    },
    {
      title: t('team.members.member4.data.1.title'),
      extra: t('team.members.member4.data.1.description'),
    },
    {
      title: t('team.members.member4.data.2.title'),
      extra: t('team.members.member4.data.2.description'),
    },
    {
      title: t('team.members.member4.data.3.title'),
      extra: t('team.members.member4.data.3.description'),
    },
  ],
  [
    {
      title: t('team.members.member5.data.0.title'),
      subtitle: t('team.members.member5.description'),
      extra: t('team.members.member5.data.0.description'),
    },
    {
      title: t('team.members.member5.data.1.title'),
      extra: t('team.members.member5.data.1.description'),
    },
    {
      title: t('team.members.member5.data.2.title'),
      extra: t('team.members.member5.data.2.description'),
    },
    {
      title: t('team.members.member5.data.3.title'),
      extra: t('team.members.member5.data.3.description'),
    },
  ],
  [
    {
      title: t('team.members.member6.data.0.title'),
      subtitle: t('team.members.member6.description'),
      extra: t('team.members.member6.data.0.description'),
    },
    {
      title: t('team.members.member6.data.1.title'),
      extra: t('team.members.member6.data.1.description'),
    },
    {
      title: t('team.members.member6.data.2.title'),
      extra: t('team.members.member6.data.2.description'),
    },
    {
      title: t('team.members.member6.data.3.title'),
      extra: t('team.members.member6.data.3.description'),
    },
  ],
]);

function prevCard() {
  if (selected.value > 0) selected.value--;
}
function nextCard() {
  if (selected.value < cards.value.length - 1) selected.value++;
}
</script>