
import Gallery from '~~/components/images/Gallery.vue';

<template>
    <div>
        <Gallery :ctx="data.gallery" />
        <HeroText :ctx="data['hero-text']" />
        <Featured :ctx="data.featured" />
        <div class="flex my-4 justify-center">
            <Button :ctx="data.button" />
        </div>
        <Logos :ctx="data.logos" />
    </div>
</template>
<script setup>
import data from '~/content/story.json'
</script>