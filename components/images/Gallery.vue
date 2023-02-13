<template>
    <div>
        <img v-for="image in ctx" :src="image.url" :alt="image.title"/>
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