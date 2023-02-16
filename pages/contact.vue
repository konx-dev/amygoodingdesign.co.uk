<template>
    <div>
        <div>
            <h1>{{ data['hero-text'].heading }}</h1>
            <div v-html="data['hero-text'].copy"></div>
        </div>
        <div>
            <a :href="'mailto:' + data.button.title">{{ data.button.title }}</a>
        </div>
        <ImagesGallery :ctx="data.gallery" />
    </div>
</template>
<script setup>
import data from '~/content/contact.json'
</script>