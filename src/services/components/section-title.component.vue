<template>
  <p :class="['text-lg font-mont-black mb-6', textColor]">
    {{ title }}
  </p>
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
