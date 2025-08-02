s="bg-noise-blue text-white py-4
<template>
<div class="bg-noise-white">
    <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-5xl lg:text-7xl mb-6">{{ t('team.title') }}</h1>
        <p class="font-public-sans font-black text-sm">
          <span class="text-secondary font-public-sans font-black">{{ t('homeTitle') }}</span> / {{ t('team.subtitle') }}
        </p>
      </div>
    </section>


  <section class="py-4 max-w-screen-xl mx-auto px-4 xl:px-0 mt-12">
      <!-- Title -->
        <SectionTitle :title="t('team.secondSubtitle')" textColor="text-tertiary" />
        <p class="text-4xl md:text-6xl xl:text-7xl flex items-center mb-4">
          <span class="font-mont-regular mr-2">{{ t('team.members.title.part1') }}</span>
          <span class="font-mont-heavy mr-2">{{ t('team.members.title.part2') }}</span>
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
            class="absolute inset-0 bg-tertiary/65 opacity-70 z-10 transition-opacity duration-300"
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

<script>
import { ref, computed, onMounted } from 'vue';
import SectionTitle from '../../services/components/section-title.component.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'team',
  components: {
    SectionTitle,
  },
  setup() {
    const { t } = useI18n();

    const selected = ref(0);
    const isMobile = ref(false);

    const cards = computed (() => [
      {
        img: '/src/assets/images/narem.png',
        alt: 'NAREM',
        overlayTitle: t('team.members.member1.name'),
        overlaySubtitle: t('team.members.member1.role'),
      },
      {
        img: '/src/assets/images/claudia.png',
        alt: 'CLAUDIA',
        overlayTitle: t('team.members.member2.name'),
        overlaySubtitle: t('team.members.member2.role'),
      },
      {
        img: '/src/assets/images/carlos.png',
        alt: 'CARLOS',
        overlayTitle: t('team.members.member3.name'),
        overlaySubtitle: t('team.members.member3.role'),
      },
      {
        img: '/src/assets/images/eliana.png',
        alt: 'ELIANA',
        overlayTitle: t('team.members.member4.name'),
        overlaySubtitle: t('team.members.member4.role'),
      },
      {
        img: '/src/assets/images/veronika.png',
        alt: 'VERONIKA',
        overlayTitle: t('team.members.member5.name'),
        overlaySubtitle: t('team.members.member5.role'),
      },
      {
        img: '/src/assets/images/celia.png',
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
    ]);

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

    return {
      selected,
      isMobile,
      cards,
      details,
      handleCardClick,
      scrollToInfo,
      t
    };
  }
};
</script>