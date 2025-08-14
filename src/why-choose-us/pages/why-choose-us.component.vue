<template>
  <!-- Hero Section -->
  <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="font-mont-heavy text-4xl md:text-5xl lg:text-7xl mb-6">{{ t('why.title') }}</h1>
      <p class="font-public-sans font-black text-sm">
        <span class="text-secondary font-public-sans font-black">
          <router-link to="/" class="hover:underline">
            {{ t('homeTitle') }}
          </router-link>
        </span>
        / {{ t('why.subtitle') }}
      </p>
    </div>
  </section>

  <!-- Creando puentes hacia el futuro -->
  <section class="bg-noise-white">
    <div class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20">
      <!-- titulo -->
      <div class="flex flex-col md:gap-6 gap-4 lg:gap-8">
        <SectionTitle :title="t('why.firstSubtitle')" textColor="text-tertiary" />

        <div class="flex flex-col lg:flex-row justify-between lg:gap-10 gap-5">

          <div class="space-y-0 md:space-y-2">
            <p class="text-3xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap">
              {{ t('why.mainTitle.part1') }} <span class="font-mont-heavy">{{ t('why.mainTitle.part2') }}</span>
            </p>
            <p class="text-3xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap">
              {{ t('why.mainTitle.part3') }} <span class="font-mont-heavy">{{ t('why.mainTitle.part4') }}</span>
            </p>
          </div>

          <div class="flex items-end">
            <p class="font-public-sans text-base lg:text-xs xl:text-base text-justify">
              {{ t('why.mainTitle.description') }}
            </p>
          </div>

        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-5 gap-10 mt-15">
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              01
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              {{ t('why.cards.0.title') }}
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              {{ t('why.cards.0.description') }}
            </p>
          </div>

        </div>
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              02
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              {{ t('why.cards.1.title') }}
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              {{ t('why.cards.1.description') }}
            </p>
          </div>

        </div>
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              03
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              {{ t('why.cards.2.title') }}
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              {{ t('why.cards.2.description') }}
            </p>
          </div>

        </div>
        <div class="bg-tertiary p-8 lg:h-[260px] h-[230px] flex flex-col">
          <!-- titulo y numero -->
          <div class="flex items-center gap-4">
            <p
              class="xl:text-3xl md:text-2xl text-xl rounded-full xl:px-5.5 lg:px-4.5 md:px-3.5 px-2.5 xl:pt-5 lg:pt-4 md:pt-3 pt-2 xl:pb-4 lg:pb-3 md:pb-2 pb-1 bg-secondary font-mont-bold">
              04
            </p>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-mont-heavy text-white">
              {{ t('why.cards.3.title') }}
            </p>
          </div>
          <!-- contenido -->
          <div class="flex items-center flex-grow">
            <p class="font-public-sans xl:text-xl lg:text-base text-white text-justify">
              {{ t('why.cards.3.description') }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>


  <!-- ¿Por qué invertir en Perú? -->
  <section class="relative overflow-hidden xl:h-[900px] md:h-[1000px]">
    <!-- Fondo -->
    <img src="../../assets/backgrounds/lima-plaza.webp" alt="Lima Plaza"
      class="absolute inset-0 w-full h-full object-cover" />

    <!-- Contenido principal -->
    <div class="relative w-full max-w-screen-xl mx-auto px-4 xl:px-0 pt-20 pb-10">
      <!-- Titulo y vineta -->
      <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-24">
        <!-- vineta -->
        <SectionTitle :title="t('why.secondSubtitle')" textColor="text-white" class="text-nowrap text-shadow-lg/25" />

        <!-- Titulo -->
        <div class="flex flex-col gap-2">
          <div class="space-y-0 md:space-y-2">
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap text-white text-shadow-lg/25">
              {{ t('why.infoCards.title.0.part1') }}<span class="text-secondary font-mont-heavy">{{
                t('why.infoCards.title.0.part2') }}</span>
            </p>
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-heavy text-nowrap text-white text-shadow-lg/25">
              {{ t('why.infoCards.title.0.part3') }} <span class="text-secondary font-mont-heavy">{{
                t('why.infoCards.title.0.part4') }}</span>?
            </p>
          </div>
          <div class="flex mt-2">
            <p class="font-mont-regular lg:text-xl text-white text-shadow-lg/25 text-justify">
              {{ t('why.infoCards.title.0.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Tarjetas -->
      <div class="flex flex-wrap justify-center md:items-center gap-4 md:gap-6 mt-16 xl:mt-32">

        <InfoCard :title="t('why.infoCards.first')" :iconSrc="usersIcon" />
        <InfoCard :title="t('why.infoCards.second')" :iconSrc="personsIcon" />
        <InfoCard :title="t('why.infoCards.third')" :iconSrc="coheteIcon" />
        <InfoCard :title="t('why.infoCards.fourth')" :iconSrc="searchIcon" />
        <InfoCard :title="t('why.infoCards.sixth')" :iconSrc="conversationIcon" />
      </div>

      <!-- Etiquetas flotantes (opcional) -->
      <!--
    <span class="absolute left-0 bottom-24 rotate-[-15deg] bg-white text-black px-6 py-1 rounded-full shadow-lg font-mont-bold text-lg border border-black/20">Inversión</span>
    <span class="absolute right-0 top-32 rotate-[15deg] bg-yellow-200 text-black px-6 py-1 rounded-full shadow-lg font-mont-bold text-lg border border-black/20">Comercio</span>
    -->
    </div>
  </section>

</template>

<script>
import SectionTitle from '../../public/components/section-title.component.vue';
import InfoCard from '../../about-us/components/info-card.component.vue';
import { useI18n } from 'vue-i18n';

// Importar assets
import usersIcon from '../../assets/icons/users.svg';
import personsIcon from '../../assets/icons/persons.svg';
import coheteIcon from '../../assets/icons/cohete.svg';
import searchIcon from '../../assets/icons/search.svg';
import conversationIcon from '../../assets/icons/conversation.svg';

export default {
  name: "why-choose-us",
  components: {
    SectionTitle,
    InfoCard

  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      // Assets
      usersIcon,
      personsIcon,
      coheteIcon,
      searchIcon,
      conversationIcon
    };
  }
};
</script>
