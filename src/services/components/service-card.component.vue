<template>
  <div
    ref="cardRef"
    :class="[
      'flex flex-col w-full lg:w-1/3 h-full transition-all duration-300 ease-out',
      isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]"
  >
    <img :src="resolveImagePath(imageSrc)" :alt="imageAlt" class="w-full h-[200px] md:h-[250px] object-cover" />

    <div class="flex flex-wrap lg:flex-nowrap gap-2 my-4 w-full">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="bg-secondary font-mont-regular px-3 py-1 rounded-full flex-1 text-center h-6 flex items-center justify-center text-xs"
      >
        {{ tag }}
      </span>
    </div>

    <h3 class="text-2xl md:text-3xl xl:text-4xl font-mont-heavy mb-2 text-tertiary">
      {{ title }}
    </h3>
    <p class="font-public-sans-regular text-justify text-gray-500">
      {{ description }}
    </p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'service-card',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'Service Image',
    },
    tags: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const cardRef = ref(null);
    const isVisible = ref(false);
    let observer = null;

    function resolveImagePath(path) {
      return new URL(path, import.meta.url).href;
    }

    function playAnimation() {
      if (!cardRef.value) return;
      cardRef.value.animate(
        [
          { opacity: 0, transform: 'translateY(50px) scale(0.9)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' },
        ],
        {
          duration: 800,
          easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          fill: 'forwards',
        }
      );
    }

    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          playAnimation();
          if (observer) observer.unobserve(entry.target);
        }
      });
    }

    onMounted(() => {
      if (cardRef.value) {
        observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.1,
        });
        observer.observe(cardRef.value);
      }
    });

    onUnmounted(() => {
      if (observer) observer.disconnect();
    });

    return {
      cardRef,
      isVisible,
      resolveImagePath,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
