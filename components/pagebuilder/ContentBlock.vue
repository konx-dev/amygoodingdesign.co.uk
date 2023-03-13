<template>
    <div class="bg-brand-grey px-5 py-12 md:py-16 lg:py-20 md:px-8">
        <div class="content-block container mx-auto flex flex-col items-center gap-4 md:gap-8 justify-center lg:gap-20" :class="ctx.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'">
            <div class="max-w-[415px] max-h-[300px] w-full md:max-h-[465px] flex">
                <img :src="ctx.image.url" :alt="ctx.image.title" class="w-full h-full max-h-[300px] md:max-h-[465px] object-cover" />
            </div>
            <div class="w-auto max-w-[360px] lg:max-w-[400px]">
                <div class="font-anton text-[28px] lg:text-[36px] uppercase mb-2 md:mb-4 lg:mb-8">{{ ctx.text.heading }}</div>
                <div class="content-block__body font-raleway leading-relaxed text-sm lg:text-lg" v-html="ctx.text.copy"></div>
            </div>
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