<template>
    <div>
        <NuxtLink :to="item.card.url" v-for="item in ctx">
            <img :src="item.card.image.url" :alt="item.card.image.title" />
            private: {{ item.card.private }}
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