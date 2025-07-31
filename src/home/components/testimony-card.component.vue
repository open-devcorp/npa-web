<template>
    <div class="relative bg-noise-white px-8 pt-8 pb-20 w-[600px]">
        <div class="flex gap-1 mb-4">
            <img v-for="n in rating" :key="n" src="/src/assets/icons/star-rate.svg" alt="star" class="w-5" />
        </div>
        <div class="flex items-center gap-4 mb-2">
            <img :src="image" alt="profile" class="w-16 h-16 rounded-full object-cover bg-gray-200" />
            <div>
                <div class="text-xl font-mont-semibold">{{ name }}</div>
                <div class="font-mont-light">{{ role }}</div>
            </div>
        </div>
        <div class="mt-4 text-base font-mont-regular">
            <p>{{ testimony }}</p>
        </div>
        <img src="/src/assets/images/star-testimony.svg" alt="decorative star" class="absolute bottom-0 right-0 w-24" />
    </div>
</template>

<script>
export default {
    name: 'testimony-card',
    props: {
        name: { type: String, required: true },
        role: { type: String, required: true },
        testimony: { type: String, required: true },
        image: { type: String, required: true },
        rating: { type: Number, default: 5 }
    }
}
</script>