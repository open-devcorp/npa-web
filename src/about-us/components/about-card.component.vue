<template>
  <div ref="cardRef" :class="[
    'group text-white p-4 md:p-6 lg:p-8 w-full min-h-[280px] md:min-h-[320px] lg:min-h-[340px] flex flex-col justify-between transition-all duration-200 ease-out',
    backgroundColor,
    isVisible
      ? [animationClass, 'opacity-100 pointer-events-auto']
      : ['opacity-0 pointer-events-none'],
  ]">
    <div>
      <div class="mb-3 md:mb-4">
        <span :class="[
          'inline-block rounded-full p-1.5 md:p-2 transition-transform duration-150 ease-out group-hover:rotate-12 group-hover:-translate-y-1',
          iconBackgroundColor,
        ]">
          <img :src="iconPath" alt="icon"
            class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-150 ease-out group-hover:scale-110" />
        </span>
      </div>
      <h3
        class="font-mont-heavy text-2xl md:text-3xl lg:text-4xl mb-2 transition-transform duration-150 ease-out group-hover:-translate-y-1">
        {{ title }}
      </h3>
      <hr class="mb-3 md:mb-4 bg-[#B8B8B8]" />
      <p
        class="font-public-sans-regular text-justify text-sm md:text-base transition-transform duration-150 ease-out group-hover:-translate-y-1">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'card-about',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: 'bg-tertiary'
    },
    iconBackgroundColor: {
      type: String,
      default: 'bg-secondary'
    },
    iconColor: {
      type: String,
      default: 'text-tertiary'
    },
    iconPath: {
      type: String,
      default: ''
    },
    animationClass: {
      type: String,
      default: ''
    },
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const cardRef = ref()
    const isVisible = ref(false)
    let observer = null
    let hasUserScrolled = false
    let hasAnimated = false

    function getAnimationKeyframes() {
      const startTransform = 'scaleY(0)'; // Crecer como barra de progreso

      return [
        {
          opacity: 0,
          transform: startTransform,
          transformOrigin: 'bottom', // Punto de origen desde abajo
        },
        {
          opacity: 1,
          transform: 'scaleY(1)',
          transformOrigin: 'bottom',
        },
      ];
    }

    function playWebAnimation() {
      if (!cardRef.value) return
      const keyframes = getAnimationKeyframes()
      cardRef.value.animate(keyframes, {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards',
      })
    }

    function checkAndAnimate() {
      if (!cardRef.value || hasAnimated || !hasUserScrolled) return
      const rect = cardRef.value.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        isVisible.value = true
        playWebAnimation()
        hasAnimated = true
        if (observer) observer.unobserve(cardRef.value)
      }
    }

    function onScroll() {
      hasUserScrolled = true
      checkAndAnimate()
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll, { passive: true })
      if (cardRef.value) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !hasAnimated && hasUserScrolled) {
                isVisible.value = true
                playWebAnimation()
                hasAnimated = true
                observer?.unobserve(entry.target)
              }
            })
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -34px 0px',
          },
        )
        observer.observe(cardRef.value)
      }
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
      if (observer) observer.disconnect()
    })

    return {
      cardRef,
      isVisible
    }
  }
}
</script>
