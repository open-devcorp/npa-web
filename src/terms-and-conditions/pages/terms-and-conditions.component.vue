<template>

  <div class="bg-noise-white">

    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-5xl lg:text-7xl mb-6">{{ t('terms.title') }}</h1>
        <p class="font-public-sans font-black text-sm">
          <span class="text-secondary font-public-sans font-black">       
           <router-link to="/" class="hover:underline">
            {{ t('homeTitle') }}
          </router-link>
          </span>
          / {{ t('terms.subtitle') }}
        </p>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20 text-justify">
      <p class="mb-4" v-html="t('terms.intro_1')"></p>
      <p class="mb-4">{{ t('terms.intro_2') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_1_title') }}</h2>
      <p class="mb-4">{{ t('terms.section_1_p1') }}</p>
      <p class="mb-4">{{ t('terms.section_1_p2') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_2_title') }}</h2>
      <p class="mb-4" v-html="t('terms.section_2_p1')"></p>
      <p class="mb-4" v-html="t('terms.section_2_p2')"></p>
      <p class="mb-4" v-html="t('terms.section_2_p3')"></p>
      <p class="mb-4 italic">{{ t('terms.section_2_note') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_3_title') }}</h2>
      <p class="mb-4">{{ t('terms.section_3_p1') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_4_title') }}</h2>
      <p class="mb-4">{{ t('terms.section_4_p1') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_5_title') }}</h2>
      <p class="mb-4">{{ t('terms.section_5_p1') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_6_title') }}</h2>
      <p class="mb-4">{{ t('terms.section_6_p1') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_7_title') }}</h2>
      <p class="mb-4">{{ t('terms.section_7_p1') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('terms.section_8_title') }}</h2>
      <p class="mb-4" v-html="t('terms.section_8_p1')"></p>
  <p class="mt-8 text-sm text-gray-600">{{ t('terms.last_update') }}</p>
    </section>

  </div>
</template>
<script>
import { useI18n } from 'vue-i18n';
export default {
  name: 'terms',
  setup() {
    const { t } = useI18n();
    return { t };
  }


}
</script>