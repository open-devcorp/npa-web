<template>
    <nav class="max-w-screen-xl mx-auto px-4 xl:px-0 mt-6 mb-8">
        <div class="flex justify-between items-center">
            <img src="/src/assets/icons/logo-home-npa.svg" alt="Logo NPA" class="w-35 md:w-42 object-contain" />

            <ul class="hidden lg:flex gap-8">
                <li>
                    <router-link to="/home"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">INICIO</router-link>
                </li>
                <li>
                    <router-link to="/about"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">NOSOTROS</router-link>
                </li>
                <li>
                    <router-link to="/#servicios"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">SERVICIOS</router-link>
                </li>
                <li>
                    <router-link to="/"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">POR
                        QUÉ ELEGIRNOS</router-link>
                </li>
                <li>
                    <router-link to="/#contacto"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">EQUIPO</router-link>
                </li>
            </ul>

            <!-- Botón "CONTÁCTANOS" para escritorio -->
            <div class="hidden lg:flex">
                <router-link to="" class="btn btn-primary flex items-center justify-center">
                    <span class="">CONTÁCTANOS</span>
                    <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="w-[14px] h-[14px] ml-2 mb-1" />
                </router-link>
            </div>

            <!-- botón hamburguesa para móvil y tablet -->
            <div class="lg:hidden flex items-center justify-center">
                <button @click="isOpen = !isOpen" class="focus:outline-none cursor-pointer p-2">
                    <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- menú móvil -->
        <div v-if="isOpen" class="lg:hidden mt-4 bg-white shadow-lg rounded-lg border border-gray-200 mx-2">
            <div class="px-4 sm:px-6 py-4">
                <ul class="flex flex-col gap-3 mb-6">
                    <li>
                        <router-link @click="isOpen = false" to="/home"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            INICIO
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="isOpen = false" to="/about"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            NOSOTROS
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="isOpen = false" to="/#servicios"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            SERVICIOS
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="isOpen = false" to="/"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            POR QUÉ ELEGIRNOS
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="isOpen = false" to="/#contacto"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            EQUIPO
                        </router-link>
                    </li>
                </ul>

                <div class="flex flex-shrink-0 items-center">
                    <router-link @click="isOpen = false" to="/#contacto"
                        class="group w-full justify-center bg-primary text-white px-4 py-3 text-base flex items-center gap-2 hover:bg-secondary transition-colors font-mont-bold whitespace-nowrap rounded-lg hover:text-tertiary">
                        <span class="text-center flex-1">CONTÁCTANOS</span>
                        <img src="/src/assets/icons/arrow.svg" alt="Arrow" class="w-[14px] h-[14px] ml-2 mb-1" />
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar-home",
    data() {
        return {
            isOpen: false,
        };
    },
};
</script>