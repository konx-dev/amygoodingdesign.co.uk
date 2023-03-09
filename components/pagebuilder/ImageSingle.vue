<template>
    <div>
        <img :src="ctx.image.url" :alt="ctx.image.title" class="w-full h-auto object-cover max-h-[800px] max-w-[1600px] mx-auto" />
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