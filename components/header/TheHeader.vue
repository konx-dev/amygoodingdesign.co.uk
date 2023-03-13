<template>
    <div class="bg-brand-black p-4 lg:py-6">
        <div class="container mx-auto flex flex-row justify-between">
            <NuxtLink class="text-brand-white" to="/">
                Logo
            </NuxtLink>
            <div class="flex flex-row gap-5 lg:gap-10">
                <NuxtLink class="font-anton text-lg lg:text-2xl text-brand-white uppercase" :to="item.url" v-for="item in data.navigation" :key="item.title">{{ item.title }}</NuxtLink>
            </div>
        </div>
    </div>
    
</template>
<script setup>
import data from '~/content/navigation.json'
</script>