<template>
    <div>
        <NuxtLink :to="item.url" v-for="item in ctx" :key="item.id">
            <img :src="item.image.url" :alt="item.image.title" />
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