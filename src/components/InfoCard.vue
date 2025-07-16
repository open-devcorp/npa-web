<template>
  <div class="bg-tertiary w-48 h-64 text-white flex flex-col items-center p-6">
    <h3 class="text-center text-xl font-bold mb-4">{{ title }}</h3>
    <div class="bg-[#D9D9D9] w-full flex-1 flex items-center justify-center rounded">
      <svg v-if="iconPath" class="w-12 h-12 text-tertiary" fill="currentColor" viewBox="0 0 24 24">
        <path :d="iconPath" />
      </svg>
      <span v-else class="text-gray-500">{{ iconPlaceholder }}</span>
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
    iconPath: {
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
