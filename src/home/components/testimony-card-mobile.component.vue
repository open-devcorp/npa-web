<template>
  <div class="w-full max-w-md mx-auto">
    <swiper
    :modules="[]"       
    :loop="true"
    :centered-slides="true"
    :slides-per-view="1"
    :space-between="24"
    :grab-cursor="true"
    :initial-slide="1"
    class="hero-swiper"
    >

      <swiper-slide
        v-for="(card, idx) in cards"
        :key="idx"
        class="flex justify-center"
      >
        <div
          class="relative bg-white  overflow-hidden 
                 w-full h-[280px] sm:h-[320px] flex flex-col transform transition-transform duration-400"
        >
          <div class="relative bg-noise-white px-6 pt-6 pb-14 w-full h-full">
            <!-- Rating -->
            <div class="flex gap-1 mb-3">
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
                  {{ card.name || card.title }}
                </div>
                <div class="font-mont-light text-xs sm:text-sm">
                  {{ card.role || "Desarrollador" }}
                </div>
              </div>
            </div>
            <!-- Testimonio / descripción -->
            <div class="mt-2 text-xs sm:text-sm font-mont-regular text-justify">
              <p>{{ card.testimony || card.text }}</p>
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
import "swiper/swiper-bundle.css";

import starRateIcon from "../../assets/icons/star-rate.svg";
import starTestimonyIcon from "../../assets/images/star-testimony.svg";
import userImg from "../../assets/images/user.webp";

export default {
  name: "CardSliderMobile",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      cards: [
        {
          name: "Ana Quinto",
          role: "Gerente General de N&F Multiservicios Quinto",
          testimony:
            "Nuestra empresa enfrenta retos legales diarios y, gracias a New Point, los hemos resuelto de manera rápida y eficaz, destacando su profesionalismo y compromiso.",
          image: userImg,
          rating: 5,
        },
        {
          name: "Bruno Caballero",
          role: "Gerente General de SEGUMAX PRO",
          testimony:
            "Al iniciar nuestra empresa enfrentamos retos legales y, gracias a la asesoría de New Point, logramos cumplir nuestros primeros objetivos con eficacia y profesionalismo.",
          image: userImg,
          rating: 5,
        },
        {
          name: "Familia Torres",
          role: "",
          testimony:
            "Gracias a su gestión, logramos rectificar nombres e inscribir la sucesión, regularizando así la titularidad de nuestras propiedades sin contratiempos.",
          image: userImg,
          rating: 5,
        },
      ],
    };
  },
  setup() {
    return { starRateIcon, starTestimonyIcon };
  },
};
</script>

<style scoped>
.hero-swiper {
  width: 100%;
  padding: 20px 16px;
}

.swiper-slide {
  transition: transform 0.4s ease, opacity 0.4s ease;
  opacity: 0.8;
  transform: scale(0.95);
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1.05);
  z-index: 2;
}
</style>
