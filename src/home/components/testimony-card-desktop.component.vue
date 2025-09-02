<template>
  <div class="w-full max-w-7xl mx-auto px-4">
    <swiper
      ref="swiperRef"
      :loop="true"
      :centered-slides="true"
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="{ 1024: { slidesPerView: 'auto', spaceBetween: 32 } }"
      class="hero-swiper"
      @swiper="onSwiperInit"
    >
      <swiper-slide
        v-for="(card, idx) in cards"
        :key="idx"
        class="flex justify-center"
      >
        <div
          class="relative bg-white overflow-hidden 
                 w-[90%] sm:w-[90%] lg:w-[700px] 
                 h-[240px] sm:h-[260px] lg:h-[300px] flex flex-col"
        >
          <div class="relative bg-noise-white px-8 pt-6 pb-14 w-full h-full">
            <!-- Rating -->
            <div class="flex gap-1 mb-3 mt-2">
              <img
                v-for="n in card.rating"
                :key="n"
                :src="starRateIcon"
                alt="star"
                class="w-4 sm:w-5"
              />
            </div>
            <!-- Header -->
            <div class="flex items-center gap-3 mb-2">
              <img
                :src="card.image"
                alt="profile"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover bg-gray-200"
              />
              <div>
                <div class="text-base sm:text-lg font-mont-semibold">
                  {{ card.name }}
                </div>
                <div class="font-mont-light text-xs sm:text-sm">
                  {{ card.role }}
                </div>
              </div>
            </div>
            <!-- Testimonio -->
            <div class="mt-4 text-xs sm:text-sm font-mont-regular text-justify">
              <p>{{ card.testimony }}</p>
            </div>
            <!-- Estrella decorativa -->
            <img
              :src="starTestimonyIcon"
              alt="decorative star"
              class="absolute bottom-0 right-0 w-16 sm:w-20"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref, nextTick } from "vue";

import starRateIcon from "../../assets/icons/star-rate.svg";
import starTestimonyIcon from "../../assets/images/star-testimony.svg";
import userImg from "../../assets/images/user.webp";

export default {
  name: "CardSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const swiperRef = ref(null);

    const cards = [
      {
        name: "Familia Torres",
        role: "",
        testimony:
          "Gracias a su gestión, logramos rectificar nombres e inscribir la sucesión, regularizando así la titularidad de nuestras propiedades sin contratiempos.",
        image: userImg,
        rating: 5,
      },
      {
        name: "Ana Quinto",
        role: "Gerente General de N&F Multiservicios Quinto",
        testimony:
          "Nuestra empresa enfrenta diversos retos legales a diario y, gracias a New Point, hemos logrado resolverlos de manera rápida y eficaz. Destacamos su profesionalismo, enfoque innovador y compromiso, por lo que estamos muy agradecidos por sus excelentes servicios.",
        image: userImg,
        rating: 5,
      },
      {
        name: "Bruno Caballero",
        role: "Gerente General de SEGUMAX PRO",
        testimony:
          "Al iniciar nuestra empresa enfrentamos varios retos legales y necesitábamos agilizar procedimientos sin cometer errores. Gracias a la asesoría de New Point, pudimos cumplir nuestros primeros objetivos. Valoramos su eficacia, profesionalismo y trabajo en equipo.",
        image: userImg,
        rating: 5,
      },
    ];

    const onSwiperInit = async (swiper) => {
      // Esperamos a que Vue renderice el DOM
      await nextTick();

      // Recalcula tamaños y duplicados del loop
      swiper.update();

      // Inicia en la segunda card (índice 1)
      swiper.slideToLoop(1, 0);
    };

    return { cards, swiperRef, starRateIcon, starTestimonyIcon, onSwiperInit };
  },
};
</script>

<style scoped>
.hero-swiper {
  width: 100%;
  padding: 20px 0;
}

.swiper-slide {
  transition: transform 0.4s ease, opacity 0.4s ease;
  opacity: 0.5;
  transform: scale(0.9);
  width: auto !important;
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
}
</style>
