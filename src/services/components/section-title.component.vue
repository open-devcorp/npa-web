<template>
<div class="flex items-center gap-2">
  <img src="/src/assets/icons/star.svg" class="h-8 w-8"/>
  <p :class="['text-lg font-mont-black', textColor]">
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

<style scoped>

</style>
