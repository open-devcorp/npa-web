<template>
  <div class="flex items-center">
    <img src="../../assets/icons/logo-tertiary.webp" alt="new point" class="xl:w-9 h-6 xl:h-9 w-6" />
    <p :class="['text-base md:text-[18px] xl:text-xl font-mont-black uppercase md:ml-3 ml-2', textColor]">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'section-title',
  props: {
    title: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: 'text-tertiary',
    },
  },
};
</script>

<style scoped></style>
