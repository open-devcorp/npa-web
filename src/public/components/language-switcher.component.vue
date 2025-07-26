<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' }
];

const changeLocale = (event) => {
  locale.value = event.target.value;
};
</script>

<template>
  <select
    :value="locale"
    @change="changeLocale"
    class="bg-primary text-white uppercase px-4 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-secondary transition"
  >
    <option
      v-for="lang in languages"
      :value="lang.code"
      :key="lang.code"
    >{{ lang.label }}</option>
  </select>
</template>