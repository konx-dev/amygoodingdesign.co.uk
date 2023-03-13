<template>
    <div class="">
        <img :src="ctx.image.url" :alt="ctx.image.title" class="w-full h-auto object-cover max-h-[1080px] max-w-[1960] mx-auto" />
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