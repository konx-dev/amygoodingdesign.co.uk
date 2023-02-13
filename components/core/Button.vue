<template>
    <NuxtLink :to="ctx.url">{{ ctx.title }}</NuxtLink>
</template>
<script setup>

const props = defineProps({
    ctx: {
        type: [Object],
        required: true
    }
})

</script>