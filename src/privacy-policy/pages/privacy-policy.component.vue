<template>
  <div class="bg-noise-white">

    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="font-mont-heavy text-4xl md:text-5xl lg:text-7xl mb-6">{{ t('policy.title') }}</h1>
        <p class="font-public-sans font-black text-sm">
          <span class="text-secondary font-public-sans font-black">{{ t('homeTitle') }}</span> / {{ t('policy.subtitle')
          }}
        </p>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20 text-justify">
      <p class="mb-4" v-html="t('policy.company_intro')"></p>
      <p class="mb-4 text-justify">{{ t('policy.description') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('policy.purpose_title') }}</h2>
      <p class="mb-4">{{ t('policy.purpose_description_1') }}</p>
      <p class="mb-4 text-justify">{{ t('policy.purpose_description_2') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('policy.security_title') }}</h2>
      <p class="mb-4 text-justify">{{ t('policy.security_description') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('policy.transfer_title') }}</h2>
      <p class="mb-4 text-justify">{{ t('policy.transfer_description') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('policy.rights_title') }}</h2>
      <p class="mb-4 text-justify">{{ t('policy.rights_description') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('policy.changes_title') }}</h2>
      <p class="mb-4 text-justify">{{ t('policy.changes_description') }}</p>

      <h2 class="text-xl font-semibold mt-8 mb-2">{{ t('policy.contact_title') }}</h2>
      <p class="mb-4 text-justify" v-html="t('policy.contact_description')"></p>

      <p class="text-sm italic">{{ t('policy.legal_note') }}</p>
    </section>

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {

  name: 'policy',
  setup() {
    const { t } = useI18n();
    return { t };
  }
};
</script>