<template>
    <nav class="max-w-screen-xl mx-auto px-4 xl:px-0 my-5 md:my-8 absolute top-0 left-0 right-0 z-50">
        <div class="flex justify-between items-center">
            <img src="/src/assets/icons/logo-home-npa.svg" alt="Logo NPA" class="w-20 md:w-35 lg:w-40 object-contain" />

            <ul class="hidden lg:flex gap-8">
                <li>
                    <router-link to="/"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">{{ $t("navHome.0.title") }}</router-link>
                </li>
                <li>
                    <router-link to="/nosotros"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">{{ $t("navHome.1.title") }}</router-link>
                </li>
                <li>
                    <router-link to="/servicios"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">{{ $t("navHome.2.title") }}</router-link>
                </li>
                <li>
                    <router-link to="/por-que-elegirnos"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">{{ $t("navHome.3.title") }}</router-link>
                </li>
                <li>
                    <router-link to="/equipo"
                        class="text-tertiary hover:text-primary transition-colors cursor-pointer text-shadow-xs font-mont-heavy whitespace-nowrap">{{ $t("navHome.4.title") }}</router-link>
                </li>
            </ul>

            <!-- Botón "CONTÁCTANOS" para escritorio -->
            <div class="hidden lg:flex">
                <router-link to="" class="btn btn-primary flex items-center justify-center">
                    <span class="">{{ $t("navHome.5.title") }}</span>
                    <img src="/src/assets/icons/arrow.svg" alt="Arrow"
                        class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
                </router-link>
            </div>

            <!-- botón hamburguesa para móvil y tablet -->
            <div class="lg:hidden flex items-center justify-center">
                <button @click="isOpen = !isOpen" class="focus:outline-none cursor-pointer">
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
                        <router-link @click="isOpen = false" to="/"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            {{ $t("navHome.0.title") }}
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="isOpen = false" to="/nosotros"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            {{ $t("navHome.1.title") }}
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="isOpen = false" to="/servicios"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            {{ $t("navHome.2.title") }}
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="isOpen = false" to="/por-que-elegirnos"
                            class="text-tertiary hover:text-primary font-mont-heavy text-base sm:text-lg block py-2 transition-colors">
                            {{ $t("navHome.3.title") }}
                        </router-link>
                    </li>
                </ul>
                <div class="flex flex-shrink-0 items-center">
                    <router-link @click="isOpen = false" to="/contacto"
                        class="group w-full justify-center bg-primary text-white px-4 py-3 text-base flex items-center gap-2 hover:bg-secondary transition-colors font-mont-bold whitespace-nowrap rounded-lg hover:text-tertiary">
                        <span class="text-center flex-1">{{ $t("navHome.5.title") }}</span>
                        <img src="/src/assets/icons/arrow.svg" alt="Arrow"
                            class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1" />
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