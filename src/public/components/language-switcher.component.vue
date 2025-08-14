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
  <div class="relative inline-block">
    <select :value="locale" @change="changeLocale"
      class="bg-primary text-white uppercase font-public-sans px-4 py-2 pr-10 rounded focus:outline-none appearance-none cursor-pointer">
      <option v-for="lang in languages" :value="lang.code" :key="lang.code">{{ lang.label }}</option>
    </select>
    <!-- Flecha personalizada -->
    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="transform rotate-90">
        <path
          d="M0 7C0 8.38447 0.410543 9.73785 1.17971 10.889C1.94888 12.0401 3.04213 12.9373 4.32122 13.4672C5.6003 13.997 7.00777 14.1356 8.36563 13.8655C9.7235 13.5954 10.9708 12.9287 11.9497 11.9497C12.9287 10.9708 13.5954 9.7235 13.8655 8.36563C14.1356 7.00777 13.997 5.6003 13.4672 4.32122C12.9373 3.04213 12.0401 1.94888 10.889 1.17971C9.73785 0.410543 8.38447 0 7 0C5.1441 0.0020073 3.36479 0.74015 2.05247 2.05247C0.74015 3.36479 0.0020073 5.1441 0 7ZM8.9915 6.17517C9.21022 6.39395 9.33309 6.69064 9.33309 7C9.33309 7.30936 9.21022 7.60605 8.9915 7.82483L6.26558 10.5508L5.44075 9.72592L8.16667 7L5.41858 4.25133L6.24167 3.4265L8.9915 6.17517Z"
          fill="white" />
      </svg>
    </div>
  </div>
</template>