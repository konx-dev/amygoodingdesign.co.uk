<template>
    <div>
        <img :src="ctx.image.url" :alt="ctx.image.title" />
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