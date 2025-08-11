<template>
  <div class="bg-noise-white">
    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-7xl mb-6">{{ t('about.title') }}</h1>
        <p class="font-public-sans font-black text-sm">
        <span class="text-secondary font-public-sans font-black">
          <router-link to="/" class="hover:underline">
            {{ t('homeTitle') }}
          </router-link>
          </span>
          / {{ t('about.subtitle') }}     
          </p>
      </div>
    </section>

    <!-- About Content -->

    <section class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20">
      <!-- Titulo -->
      <div class="flex flex-col md:gap-6 gap-4 lg:gap-8">

        <SectionTitle :title="t('about.subtitle')" textColor="text-tertiary" />

        <div class="flex flex-col lg:flex-row justify-between lg:gap-10 gap-5">
          <div class="space-y-0 md:space-y-2">
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular lg:whitespace-nowrap">{{
              t('about.mainTitle.part1') }}</p>
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-heavy lg:whitespace-nowrap">{{
              t('about.mainTitle.part2') }} </p>
          </div>

          <div class="flex flex-col justify-between">
            <p class="font-public-sans text-base lg:text-xs xl:text-base text-justify">
              {{ t('about.mainTitle.part3') }}
            </p>
            <div class="flex items-end justify-end mt-4 lg:mt-0">
              <router-link to="/contacto" class="btn btn-primary flex items-center justify-center">
                <span>{{ t('about.buttonContact') }}</span>
                <img src="/src/assets/icons/arrow.svg" alt="Arrow"
                  class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="max-w-screen-xl mx-auto px-4 xl:px-0 pb-20">
      <img src="../../assets/backgrounds/about-meet.jpg" alt="Nuestros Valores" class="w-full" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-6 -mt-12 lg:-mt-24 z-10 px-4">
        <AboutCard class="h-full" :title="t('about.cards.first.title')" :description="t('about.cards.first.description')"
          background-color="bg-tertiary" icon-background-color="bg-[#D5E745]" icon-color="text-[#10284D]"
          animation-class="animate-slide-left delay-100" :card-index="0" :iconPath="'./src/assets/icons/think.svg'" />

        <AboutCard class="h-full" :title="t('about.cards.second.title')" :description="t('about.cards.second.description')"
          background-color="bg-noise-blue" icon-background-color="bg-secondary" icon-color="text-primary"
          animation-class="animate-slide-up delay-200" :card-index="1" :iconPath="'./src/assets/icons/brain.svg'" />

        <div class="sm:col-span-2 lg:col-span-1 justify-self-center h-full">
          <AboutCard class="h-full" :title="t('about.cards.third.title')" :description="t('about.cards.third.description')"
            background-color="bg-tertiary" icon-background-color="bg-secondary" icon-color="text-[#10284D]"
            animation-class="animate-slide-right delay-300" :card-index="2" :iconPath="'./src/assets/icons/book.svg'" />
        </div>
      </div>
    </section>

    <section class="bg-tertiary py-20">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">

        <div class="flex flex-col lg:flex-row gap-15">
          <div class="flex flex-col md:gap-6 gap-4 lg:gap-8">

            <SectionTitle :title="t('about.secondSubtitle')" textColor="text-secondary" />


            <div class="text-3xl md:text-5xl xl:text-7xl text-white">
              <div class="font-mont-regular">{{ t('about.values.title.part1') }}</div>

              <div class="font-mont-heavy whitespace-nowrap">{{ t('about.values.title.part2') }}</div>
            </div>

            <router-link to="/por-que-elegirnos" class="btn btn-secondary ">
              <p>{{ t('about.buttonMore') }}</p>
              <img src="/src/assets/icons/arrow.svg" alt="Arrow"
                class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
            </router-link>

          </div>


          <div class="flex flex-col md:flex-row lg:flex-col gap-6 md:gap-8">
            <ObjectiveCard :title="t('about.values.mission.title')" :description="t('about.values.mission.description')"
              :iconSrc="'../../assets/icons/think.svg'" iconBackground="bg-secondary" />

            <ObjectiveCard :title="t('about.values.vision.title')" :description="t('about.values.vision.description')"
              :iconSrc="'../../assets/icons/brain.svg'" iconBackground="bg-secondary" />
          </div>

        </div>
      </div>
    </section>

<section class="relative w-full min-h-screen flex items-center justify-center text-center">
  <img src="../../assets/images/about-business-woman.png" alt="business woman"
    class="absolute inset-0 w-full h-full object-cover z-0" />

  <div class="relative max-w-screen-xl mx-auto px-4 xl:px-0 py-16 md:py-24 z-10">
    <h2
      class=" text-white text-2xl md:text-4xl xl:text-5xl font-mont-regular text-center mb-8 md:mb-32 mt-6 md:mt-10 leading-tight md:leading-snug">
      {{ t('about.finalTile.part1') }}<br />
      <span class="font-mont-heavy">{{ t('about.finalTile.part2') }}</span> {{ t('about.finalTile.part3') }}<br />
      <span class="font-mont-heavy">{{ t('about.finalTile.part4') }}</span>
    </h2>

    <div class="flex flex-wrap justify-center gap-4 md:gap-6">
      <InfoCard :title="t('about.infoCard.first')" :iconSrc="'./src/assets/icons/users.svg'" />
      <InfoCard :title="t('about.infoCard.second')" :iconSrc="'./src/assets/icons/persons.svg'" />
      <InfoCard :title="t('about.infoCard.third')" :iconSrc="'./src/assets/icons/cohete.svg'" />
      <InfoCard :title="t('about.infoCard.fourth')" :iconSrc="'./src/assets/icons/search.svg'" />
      <InfoCard :title="t('about.infoCard.fifth')" :iconSrc="'./src/assets/icons/conversation.svg'" />
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
import { useI18n } from 'vue-i18n';

export default {
  name: 'about',
  components: {
    AboutCard,
    InfoCard,
    ObjectiveCard,
    SectionTitle,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
