<template>
    <!-- Hero Section -->
    <section class="bg-noise-blue text-white py-15 md:py-20 lg:py-25">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="font-mont-heavy text-4xl md:text-5xl lg:text-7xl mb-6">{{ $t('contact.title') }}</h1>
            <p class="font-public-sans font-black text-sm">
                <span class="text-secondary font-public-sans font-black">{{ $t('contact.breadcrumb.home') }}</span> / {{
                    $t('contact.breadcrumb.contact') }}
            </p>
        </div>
    </section>
    <!-- Contact Form Section -->

    <section class="bg-noise-white">
        <div class="max-w-screen-xl mx-auto px-4 xl:px-0 py-20 md:h-screen flex items-center">

            <div class="md:flex md:flex-row xl:gap-20 md:gap-10 space-y-10 md:space-x-0 w-full">

                <div class="flex flex-col md:gap-6 gap-4 lg:gap-8 md:hidden">
                    <SectionTitle :title="$t('contact.sectionTitle')" textColor="text-tertiary" />
                    <div class="flex flex-col gap-5">

                        <div class="">
                            <p class="text-4xl md:text-5xl xl:text-7xl font-mont-heavy text-nowrap">
                                {{ $t('contact.mainTitle') }}
                            </p>
                        </div>

                        <div class="flex items-end">
                            <p class="font-public-sans text-base lg:text-xs xl:text-base text-justify text-[#646464]">
                                {{ $t('contact.description') }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- form -->
                <form @submit.prevent="sendEmail" class="md:w-1/2 md:space-y-8 space-y-6">
                    <div>
                        <label for="names" class="form-label">{{ $t('contact.form.names.label') }}</label>
                        <input id="names" type="text" v-model="names" maxlength="50" required class="form-input"
                            :placeholder="$t('contact.form.names.placeholder')" />
                    </div>
                    <div class="flex lg:gap-10 gap-5">
                        <div class="w-full">
                            <label for="email" class="form-label">{{ $t('contact.form.email.label') }}</label>
                            <input id="email" type="email" v-model="email" maxlength="50" required class="form-input"
                                :placeholder="$t('contact.form.email.placeholder')" />
                        </div>
                        <div class="w-full">
                            <label for="phone" class="form-label">{{ $t('contact.form.phone.label') }}</label>
                            <input id="phone" type="number" v-model="phone" maxlength="15" class="form-input"
                                :placeholder="$t('contact.form.phone.placeholder')" />
                        </div>
                    </div>
                    <div>
                        <label for="message" class="form-label">{{ $t('contact.form.message.label') }}</label>
                        <textarea id="message" v-model="message" maxlength="200" rows="5" required
                            class="form-input resize-none"
                            :placeholder="$t('contact.form.message.placeholder')"></textarea>
                    </div>
                    <div class="flex justify-start">
                        <button type="submit" class="btn btn-primary">
                            <p class="">{{ $t('contact.form.submitButton') }}</p>
                            <img :src="arrowIcon" :alt="$t('contact.altTexts.arrow')"
                                class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1 " />
                        </button>
                    </div>
                </form>

                <!-- contact info -->
                <div class="md:w-1/2 md:space-y-15">
                    <div class="md:flex flex-col md:gap-6 gap-4 lg:gap-8 hidden">
                        <SectionTitle :title="$t('contact.sectionTitle')" textColor="text-tertiary" />
                        <div class="flex flex-col gap-5">

                            <div class="">
                                <p class="text-4xl md:text-5xl xl:text-7xl font-mont-heavy text-nowrap">
                                    {{ $t('contact.mainTitle') }}
                                </p>
                            </div>

                            <div class="flex items-end">
                                <p
                                    class="font-public-sans text-base lg:text-xs xl:text-base text-justify text-[#646464]">
                                    {{ $t('contact.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-row items-center gap-3">
                            <img :src="phoneIcon" :alt="$t('contact.altTexts.phoneIcon')"
                                class="lg:h-15 h-10 w-10 lg:w-15">
                            <p class="font-public-sans font-black lg:text-xl text-base">
                                {{ $t('contact.contactInfo.phone') }}
                            </p>
                        </div>
                        <div class="flex flex-row items-center gap-3">
                            <img :src="emailIcon" :alt="$t('contact.altTexts.emailIcon')"
                                class="lg:h-15 h-10 w-10 lg:w-15">
                                <p class="font-public-sans font-black lg:text-xl text-base">{{
                                    $t('contact.contactInfo.email', { email: 'newpoint.asesores@gmail.com' }) }}</p>
                        </div>
                        <div class="flex flex-row items-center gap-3">
                            <img :src="markerIcon" :alt="$t('contact.altTexts.locationIcon')"
                                class="lg:h-15 h-10 w-10 lg:w-15">
                            <p class="font-public-sans font-black lg:text-xl text-base">{{
                                $t('contact.contactInfo.address') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="showSuccess"
        class="fixed bottom-4 right-4 bg-green-300  text-green-800 px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 z-50">
        Mensaje enviado con éxito
    </div>

    <div v-if="showError"
        class="fixed bottom-4 right-4 bg-red-300 text-red-800 px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 z-50">
        Error al enviar mensaje
    </div>
</template>

<script>
import SectionTitle from "../../public/components/section-title.component.vue";
import emailjs from 'emailjs-com';

// Importar assets
import arrowIcon from '../../assets/icons/arrow.svg';
import phoneIcon from '../../assets/icons/phone-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import markerIcon from '../../assets/icons/marker-icon.svg';

export default {
    name: "contact-us",
    components: {
        SectionTitle
    },
    data() {
        return {
            // Campos del formulario
            names: "",
            email: "",
            phone: "",
            message: "",
            // Estado para mostrar mensajes de éxito/error
            showSuccess: false,
            showError: false,
            // Estado de envío (puedes usarlo para deshabilitar el botón mientras se envía)
            sending: false,
            // Assets
            arrowIcon,
            phoneIcon,
            emailIcon,
            markerIcon
        };
    },
    methods: {
        // Método para enviar el formulario usando EmailJS
        async sendEmail(e) {
            e.preventDefault(); // Previene el comportamiento por defecto del formulario
            this.sending = true;
            this.showSuccess = false;
            this.showError = false;
            try {
                // Construye el objeto con los datos que espera tu plantilla de EmailJS
                const params = {
                    names: this.names,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                };
                // Envía el correo usando EmailJS (debes usar tus propios IDs de servicio, plantilla y usuario)
                await emailjs.send(
                    'service_rl1go4s',    // GMAIL ID 
                    'template_m6rv9yr',   // Template ID 
                    params,               // Datos del formulario
                    'ilqOAA_jrnNBFOKRG'   // Public Key (newpoint)
                );
                // Limpia los campos del formulario
                this.names = "";
                this.email = "";
                this.phone = "";
                this.message = "";


                // Muestra mensaje de éxito durante 3 segundos
                this.showSuccess = true;
                setTimeout(() => {
                    this.showSuccess = false;
                }, 3000);
            } catch (err) {

                // Muestra mensaje de error durante 3 segundos
                this.showError = true;
                setTimeout(() => {
                    this.showError = false;
                }, 3000);
                console.error(err); // Opcional: muestra el error en consola para depuración
            } finally {
                this.sending = false;
            }
        }
    }
};
</script>
