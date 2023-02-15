<template>
    <div>
        <NuxtLink :to="ctx[0].card.url">
            <img :src="ctx[0].card.image.url" :alt="ctx[0].card.image.title" />
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