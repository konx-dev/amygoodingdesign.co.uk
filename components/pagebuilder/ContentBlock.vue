<template>
    <div>
        <div>
            <img :src="ctx.image.url" :alt="ctx.image.title" />
        </div>
        <div>
            <div>{{ ctx.text.heading }}</div>
            <div v-html="ctx.text.copy"></div>
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