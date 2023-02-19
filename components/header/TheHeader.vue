<template>
    <div class="container mx-auto px-4 py-4 flex flex-row justify-between">
        <NuxtLink to="/">
            Logo
        </NuxtLink>
        <div class="flex flex-row gap-5">
            <NuxtLink :to="item.url" v-for="item in data.navigation" :key="item.title">{{ item.title }}</NuxtLink>
        </div>
    </div>
</template>
<script setup>
import data from '~/content/navigation.json'
</script>