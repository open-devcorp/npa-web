<template>
  <div class="bg-noise-white">

    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-5xl lg:text-7xl mb-6">{{ t('services.title') }}</h1>
        <p class="font-public-sans font-black text-sm">
        <span class="text-secondary font-public-sans font-black">
          <router-link to="/" class="hover:underline">
            {{ t('homeTitle') }}
          </router-link>
          </span>
          / {{ t('services.subtitle') }}
        </p>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20">
      <div class="flex flex-col md:gap-6 gap-4 lg:gap-8 ">
        <SectionTitle :title="t('services.subtitle')" textColor="text-tertiary" />

        <div class="space-y-0 md:space-y-2">
          <p class="text-3xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap">
            {{ t('services.solution.part1') }} <span class="font-mont-heavy">{{ t('services.solution.part2') }}</span>
            {{ t('services.solution.part3') }}
          </p>
        </div>

      </div>


      <!-- Service Cards -->
      <div class="flex flex-col lg:flex-row gap-8 mt-10">
        <ServiceCard v-for="(service, index) in services" :key="index" class="flex-1" :imageSrc="service.imageSrc"
          :imageAlt="service.imageAlt" :tags="service.tags" :title="service.title" :description="service.description" />
      </div>

      <!-- Client Segment Cards -->
      <div class="py-20">
        <div class="flex flex-col md:gap-6 gap-4 lg:gap-8">
          <SectionTitle :title="t('services.clientSegmentTitle')" textColor="text-tertiary" />
          <div class="flex flex-col lg:flex-row justify-between lg:gap-10 gap-5">

            <p class="text-3xl md:text-5xl xl:text-7xl font-mont-regular mr-2">
              {{ t('services.clientSegment.part1') }}
              <span class="font-mont-heavy whitespace-nowrap">{{ t('services.clientSegment.part2') }}</span>
            </p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row h-auto md:h-[20rem] lg:h-[25rem] overflow-hidden gap-3 md:gap-4 mt-10"
          @mouseleave="selected = selected >= 0 ? selected : 0">
          <div v-for="(card, index) in cards" :key="index"
            class="relative transition-all duration-300 h-48 md:h-full cursor-pointer min-w-0 overflow-hidden w-full"
            :class="{
              'md:w-[50%]': selected === index,
              'md:w-[25%]': selected !== index
            }" @mouseenter="selected = index" @click="selectCard(index)">

            <template v-if="card.img">
              <img :src="card.img" :alt="card.alt"
                class="w-full h-full object-cover object-top transition-transform duration-300" />
            </template>

            <div v-if="selected !== index"
              class="absolute inset-0 bg-tertiary/65 z-10 flex items-center justify-center">
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

        <div class="mt-6 h-auto lg:h-[500px] mb-6" ref="infoSection">
          <div v-if="selectedContent">
            <div class="flex flex-col lg:flex-row gap-6 md:gap-8 mt-12 md:mt-24 items-stretch">
              <!-- Image -->
              <div class="w-full lg:w-1/2 overflow-hidden">
                <img :src="selectedContent.img" :alt="selectedContent.alt"
                  class="w-full h-auto md:h-full max-h-[300px] md:max-h-[600px] object-cover" />
              </div>

              <!-- Body -->
              <div class="w-full lg:w-1/2 text-justify flex flex-col justify-start">
                <div class="flex items-center gap-2 mb-4">
                  <img src="/src/assets/icons/star.svg" class="h-8 w-8" />
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
import SectionTitle from '../../public/components/section-title.component.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: "services",
  components: {
    ServiceCard,
    SectionTitle
  },
  setup() {
    const { t } = useI18n();
    const selected = ref(0);
    const locked = ref(false);
    const isMobile = ref(false);
    const infoSection = ref(null);

    // Servicios (traducidos y reactivos)
    const services = computed(() => [
      {
        imageSrc: '../../assets/images/service-1.webp',
        imageAlt: 'Imagen 1',
        tags: [t('services.tags.market'), t('services.tags.brand'), t('services.tags.content')],
        title: t('services.titlesServices.commercialAdvisory'),
        description: t('services.descriptions.commercialAdvisory'),
      },
      {
        imageSrc: '../../assets/images/service-2.jpg',
        imageAlt: 'Imagen 2',
        tags: [t('services.tags.realEstate'), t('services.tags.business'), t('services.tags.architectural')],
        title: t('services.titlesServices.legalAdvisory'),
        description: t('services.descriptions.legalAdvisory'),
      },
      {
        imageSrc: '../../assets/images/service-3.jpg',
        imageAlt: 'Imagen 3',
        tags: [t('services.tags.investors'), t('services.tags.providers'), t('services.tags.exports')],
        title: t('services.titlesServices.commercialBrokerage'),
        description: t('services.descriptions.commercialBrokerage'),
      }
    ]);

    const cards = computed(() => [
      {
        img: '/src/assets/images/foreign-company.jpg',
        alt: t('services.cards.foreignCompany.alt'),
        overlayTitle: t('services.cards.foreignCompany.overlayTitle'),
        overlaySubtitle: t('services.cards.foreignCompany.overlaySubtitle'),
        content: {
          title: t('services.cards.foreignCompany.content.title'),
          description: t('services.cards.foreignCompany.content.description'),
          details: [
            {
              title: t('services.cards.foreignCompany.content.details[0].title'),
              subtitle: t('services.cards.foreignCompany.content.details[0].subtitle'),
              extra: t('services.cards.foreignCompany.content.details[0].extra')
            },
            {
              title: t('services.cards.foreignCompany.content.details[1].title'),
              subtitle: t('services.cards.foreignCompany.content.details[1].subtitle')
            },
            {
              title: t('services.cards.foreignCompany.content.details[2].title'),
              subtitle: t('services.cards.foreignCompany.content.details[2].subtitle')
            }
          ]
        }
      },
      {
        img: '/src/assets/images/national-company.webp',
        alt: t('services.cards.nationalCompany.alt'),
        overlayTitle: t('services.cards.nationalCompany.overlayTitle'),
        overlaySubtitle: t('services.cards.nationalCompany.overlaySubtitle'),
        content: {
          title: t('services.cards.nationalCompany.content.title'),
          description: t('services.cards.nationalCompany.content.description'),
          details: [
            {
              title: t('services.cards.nationalCompany.content.details[0].title'),
              subtitle: t('services.cards.nationalCompany.content.details[0].subtitle')
            },
            {
              title: t('services.cards.nationalCompany.content.details[1].title'),
              subtitle: t('services.cards.nationalCompany.content.details[1].subtitle')
            },
            {
              title: t('services.cards.nationalCompany.content.details[2].title'),
              subtitle: t('services.cards.nationalCompany.content.details[2].subtitle')
            }
          ]
        }
      },
      {
        img: '/src/assets/images/person-company.avif',
        alt: t('services.cards.personCompany.alt'),
        overlayTitle: t('services.cards.personCompany.overlayTitle'),
        overlaySubtitle: t('services.cards.personCompany.overlaySubtitle'),
        content: {
          title: t('services.cards.personCompany.content.title'),
          description: t('services.cards.personCompany.content.description'),
          details: [
            {
              title: t('services.cards.personCompany.content.details[0].title'),
              subtitle: t('services.cards.personCompany.content.details[0].subtitle')
            },
            {
              title: t('services.cards.personCompany.content.details[1].title'),
              subtitle: t('services.cards.personCompany.content.details[1].subtitle')
            },
            {
              title: t('services.cards.personCompany.content.details[2].title'),
              subtitle: t('services.cards.personCompany.content.details[2].subtitle')
            }
          ]
        }
      }
    ]);

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
      const card = cards.value[selected.value];
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
      infoSection,
      t
    };
  }
};
</script>