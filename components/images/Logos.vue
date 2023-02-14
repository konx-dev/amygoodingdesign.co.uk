<template>
    <div class="px-4 container mx-auto">
        <div>{{ ctx.title }}</div>
        <div class="flex flex-row flex-wrap justify-center gap-5 my-4">
            <div v-for="logo in ctx.images" :key="logo.id">
                <img class="h-[60px] w-auto" :src="logo.url" :alt="logo.title" />
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