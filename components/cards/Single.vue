<template>
    <div class="my-5 lg:my-10">
        <NuxtLink :to="ctx[0].card.url" class="max-h-[300px] lg:max-h-[500px] flex">
            <img :src="ctx[0].card.image.url" :alt="ctx[0].card.image.title" class="max-h-[300px] lg:max-h-[500px] h-full w-full object-cover" />
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