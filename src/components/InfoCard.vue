<template>
  <div class="bg-tertiary/80 w-48 h-64 text-white flex flex-col items-center justify-between p-4 rounded-xl">
    <h3 class="text-center text-xl font-semibold leading-tight">
      {{ title }}
    </h3>
    <div class="w-full flex-1 flex items-center justify-center">
      <img
        v-if="iconSrc"
        :src="iconSrc"
        alt="icon"
        class="w-20 h-20 object-contain"
      />
      <span v-else class="text-gray-300 text-sm">{{ iconPlaceholder }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      required: true
    },
    iconSrc: {
      type: String,
      default: ''
    },
    iconPlaceholder: {
      type: String,
      default: 'icono'
    }
  }
}
</script>
