<template>
    <div>
        <div>{{ ctx.heading }}</div>
        <div>
            <div v-html="ctx.copy"></div>
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