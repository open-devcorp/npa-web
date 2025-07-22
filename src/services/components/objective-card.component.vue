<template>
  <div
    ref="cardRef"
    :class="[
      'bg-noise-white p-4 md:p-6 lg:p-8 text-tertiary transition-all duration-200 ease-out',
      isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]"
  >
    <div class="flex flex-col items-start gap-4 mb-4">
      <div :class="['p-2 rounded-full', iconBackground]">
        <img :src="resolvedIconSrc" alt="Icon" class="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <h3 class="text-2xl md:text-3xl font-mont-heavy">{{ title }}</h3>
    </div>
    <p class="font-public-sans-regular text-justify text-sm md:text-base">
      {{ description }}
    </p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
  name: 'objective-card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    iconSrc: {
      type: String,
      required: true,
    },
    iconBackground: {
      type: String,
      default: 'bg-secondary',
    },
  },
  setup(props) {
    const cardRef = ref(null);
    const isVisible = ref(false);
    let observer = null;

    const resolvedIconSrc = computed(() => new URL(props.iconSrc, import.meta.url).href);

    function playAnimation() {
      if (!cardRef.value) return;
      cardRef.value.animate(
        [
          { opacity: 0, transform: 'translateX(100px)' },
          { opacity: 1, transform: 'translateX(0)' },
        ],
        {
          duration: 600,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
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
      resolvedIconSrc,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
