<template>
    <div class="content-block container mx-auto px-5 my-5 md:my-10 lg:my-20 md:px-8 flex flex-col items-center gap-4 md:gap-8" :class="ctx.isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'">
        <div>
            <img :src="ctx.image.url" :alt="ctx.image.title" />
        </div>
        <div class="max-w-[600px]">
            <div class="font-anton text-lg md:text-[24px] uppercase mb-2 md:mb-4">{{ ctx.text.heading }}</div>
            <div class="content-block__body font-raleway" v-html="ctx.text.copy"></div>
        </div>
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
<style scoped>
.content-block :deep(p) {
    margin-bottom: 10px;
}
</style>