<template>
    <div class="my-5 lg:my-10 flex flex-col md:flex-row gap-5 lg:gap-10">
        <NuxtLink :to="item.card.url" v-for="item in ctx" class="w-full md:w-1/2 md:min-h-[300px] lg:min-h-[500px]">
            <img :src="item.card.image.url" :alt="item.card.image.title" class="w-full h-full object-cover" />
        </NuxtLink>
    </div>
</template>
<script setup>

const props = defineProps({
    ctx: {
        type: [Object],
        required: true
    }
})

</script>