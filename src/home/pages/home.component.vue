<template>
  <!-- Hero -->
  <section class="relative">
    <!-- Imagen de fondo -->
    <div class="w-full">
      <img src="/src/assets/backgrounds/bg-home.png" alt="Background"
        class="w-full xl:h-[900px] lg:h-[700px] md:h-[600px] h-[500px] object-cover" />
    </div>

    <!-- Contenido superpuesto en la imagen -->
    <div class="absolute inset-0 xl:mt-55 lg:mt-40 md:mt-30 mt-20">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
        <!-- Título -->
        <div class="text-center">
          <p class="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-mont-regular">
            Tu socio estratégico
          </p>
          <p class="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-mont-heavy text-background-dark mt-1">
            y acelerador comercial
          </p>
        </div>

        <!-- Category Buttons -->
        <div class="flex justify-center md:gap-20 lg:gap-18 gap-3 mt-5 xl:mt-12">
          <div class="label-home bg-tertiary text-white md:text-sm lg:text-base">
            Internacional
          </div>
          <div class="label-home bg-primary text-white md:text-sm lg:text-base">
            Asesores
          </div>
          <div class="label-home bg-secondary text-black md:text-sm lg:text-base">
            New Point
          </div>
        </div>

        <!-- Services Section -->
        <div class="bg-tertiary/60 rounded-3xl xl:mt-25 lg:mt-16 md:mt-12 mt-8 xl:p-8 lg:p-7 md:p-6 p-6">
          <div
            class="md:justify-between md:items-center md:space-y-0 space-y-6 lg:space-y-0 flex flex-col md:flex-row items-center">
            <!-- Service Cards -->
            <div class="flex justify-center md:gap-9 xl:gap-20 lg:gap-15 gap-6">

              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img src="/src/assets/icons/book.svg" alt="Asesoría"
                    class="xl:h-25 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Asesoría</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Técnico-legal</p>
              </div>

              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img src="/src/assets/icons/brain.svg" alt="Marketing"
                    class="xl:h-25 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Marketing y</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">publicidad</p>
              </div>

              <div class="text-center lg:flex-none">
                <div class="flex justify-center mb-4 lg:mb-4">
                  <img src="/src/assets/icons/think.svg" alt="Corretaje"
                    class="xl:h-25 lg:h-15 md:h-14 h-13 brightness-0 saturate-200 invert" />
                </div>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">Corretaje</p>
                <p class="text-white xl:text-base lg:text-base md:text-sm text-sm font-mont-regular">comercial</p>
              </div>
            </div>


            <router-link to="" class="btn btn-tertiary border-2 border-black hover:border-secondary transition-colors">
              <span class="">CONÓCENOS</span>
              <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1 invert" />
            </router-link>

          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- lo que ofrecemos -->
  <section class="bg-noise-white">

    <div class="max-w-screen-xl mx-auto px-4 xl:px-0 py-19">

      <!-- Titulo y boton -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between">
        <div class="flex flex-col lg:flex-row lg:items-start md:gap-6 gap-4 lg:gap-10 xl:gap-15">
          <!-- vineta -->
          <div class="flex-shrink-0">
            <SectionTitle title="lo que ofrecemos" textColor="text-tertiary" />
          </div>

          <!-- Titulo -->
          <div>
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-regular text-nowrap">
              Descubre nuestras
            </p>
            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-heavy text-nowrap">
              soluciones
            </p>
          </div>
        </div>

        <!-- boton -->
        <div class="flex justify-end">
          <router-link to="" class="btn btn-primary whitespace-nowrap items-center">
            <p>Saber más</p>
            <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
          </router-link>
        </div>
      </div>

      <!-- cards -->
      <div class="flex flex-col lg:flex-row justify-between items-start mt-15 gap-y-10 lg:gap-y-0">

        <ServiceCard imageSrc="../../assets/images/service-1.jpeg" imageAlt="Imagen 1"
          :tags="['Mercado', 'Marca', 'Contenido']" title="Asesoría Comercial"
          description="Servicios de estudios de mercado y viabilidad para detectar oportunidades de crecimiento, complementados con estrategias de negocio, marca y planes digitales para fortalecer la presencia y competitividad empresarial." />

        <ServiceCard imageSrc="../../assets/images/service-2.png" imageAlt="Imagen 2"
          :tags="['Inmobiliario', 'Empresarial', 'Arquitectónicos']" title="Asesoría legal"
          description="Servicios en derecho inmobiliario y gestión de propiedades, con soporte jurídico integral para operaciones inmobiliarias y empresariales. Incluye planificación de proyectos arquitectónicos y urbanísticos, asegurando cumplimiento normativo y viabilidad legal desde el inicio hasta la ejecución." />
        <ServiceCard imageSrc="../../assets/images/service-3.jpg" imageAlt="Imagen 3"
          :tags="['Inversores', 'Proveedores', 'Exportaciones']" title="Asesoría legal"
          description="Servicios en derecho inmobiliario y gestión de propiedades, con soporte jurídico integral para operaciones inmobiliarias y empresariales. Incluye planificación de proyectos arquitectónicos y urbanísticos, asegurando cumplimiento normativo y viabilidad legal desde el inicio hasta la ejecución." />

      </div>

    </div>
  </section>
</template>

<script>
import SectionTitle from '../../public/components/section-title.component.vue';
import ServiceCard from '../../services/components/service-card.component.vue';

export default {
  name: "Home",
  components: {
    SectionTitle,
    ServiceCard
  }
}
</script>
