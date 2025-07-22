<template>
  <div
    ref="cardRef"
    :class="[
      'bg-tertiary/80 w-40 md:w-48 h-48 md:h-64 text-white flex flex-col items-center justify-between p-3 md:p-4 rounded-xl transition-all duration-200 ease-out',
      isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]"
  >
    <h3 class="text-center text-base md:text-xl font-semibold leading-tight">
      {{ title }}
    </h3>
    <div class="w-full flex-1 flex items-center justify-center">
      <img
        v-if="iconSrc"
        :src="iconSrc"
        alt="icon"
        class="w-16 h-16 md:w-20 md:h-20 object-contain"
      />
      <span v-else class="text-gray-300 text-xs md:text-sm">{{ iconPlaceholder }}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'info-card',
  props: {
    title: {
      type: String,
      required: true,
    },
    iconSrc: {
      type: String,
      default: '',
    },
    iconPlaceholder: {
      type: String,
      default: 'icono',
    },
  },
  setup() {
    const cardRef = ref(null);
    const isVisible = ref(false);
    let observer = null;

    function playAnimation() {
      if (!cardRef.value) return;
      cardRef.value.animate(
        [
          { opacity: 0, transform: 'rotateY(90deg) translateX(-100px)' },
          { opacity: 1, transform: 'rotateY(0deg) translateX(0)' },
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
    };
  },
};
</script>
