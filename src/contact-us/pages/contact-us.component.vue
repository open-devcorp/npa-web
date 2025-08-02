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
                <div class="md:w-1/2 md:space-y-8 space-y-6">
                    <div>
                        <p class="form-label">{{ $t('contact.form.name.label') }}</p>
                        <input type="text" class="form-input" :placeholder="$t('contact.form.name.placeholder')" />
                    </div>
                    <div class="flex lg:gap-10 gap-5">
                        <div class="w-full">
                            <p class="form-label">{{ $t('contact.form.email.label') }}</p>
                            <input type="email" class="form-input"
                                :placeholder="$t('contact.form.email.placeholder')" />
                        </div>
                        <div class="w-full">
                            <p class="form-label">{{ $t('contact.form.phone.label') }}</p>
                            <input type="number" class="form-input"
                                :placeholder="$t('contact.form.phone.placeholder')" />
                        </div>
                    </div>
                    <div>
                        <p class="form-label">{{ $t('contact.form.message.label') }}</p>
                        <textarea class="form-input resize-none" rows="5"
                            :placeholder="$t('contact.form.message.placeholder')"></textarea>
                    </div>
                    <div class="flex justify-start">
                        <button class="btn btn-primary">
                            <p class="">{{ $t('contact.form.submitButton') }}</p>
                            <img src="/src/assets/icons/arrow.svg" :alt="$t('contact.altTexts.arrow')"
                                class="lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] w-[11px] h-[11px] ml-2 mb-0.5 md:mb-1 " />
                        </button>
                    </div>
                </div>

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
                            <img src="../../assets/icons/phone-icon.svg" :alt="$t('contact.altTexts.phoneIcon')"
                                class="lg:h-15 h-10 w-10 lg:w-15">
                            <p class="font-public-sans font-black lg:text-xl text-base">
                                {{ $t('contact.contactInfo.phone') }}
                            </p>
                        </div>
                        <div class="flex flex-row items-center gap-3">
                            <img src="../../assets/icons/email-icon.svg" :alt="$t('contact.altTexts.emailIcon')"
                                class="lg:h-15 h-10 w-10 lg:w-15">
                            <p class="font-public-sans font-black lg:text-xl text-base">{{
                                $t('contact.contactInfo.email') }}</p>
                        </div>
                        <div class="flex flex-row items-center gap-3">
                            <img src="../../assets/icons/marker-icon.svg" :alt="$t('contact.altTexts.locationIcon')"
                                class="lg:h-15 h-10 w-10 lg:w-15">
                            <p class="font-public-sans font-black lg:text-xl text-base">{{
                                $t('contact.contactInfo.address') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from "../../public/components/section-title.component.vue";
export default {
    name: "contact-us",
    components: {
        SectionTitle
    }
};
</script>
