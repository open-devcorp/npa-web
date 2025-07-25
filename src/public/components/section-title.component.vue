<template>
  <div class="flex items-center">
    <img src="../../assets/icons/logo-tertiary.svg" alt="new point" class="w-9 h-9" />
    <p :class="['text-xl font-mont-black uppercase ml-3', textColor]">
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
