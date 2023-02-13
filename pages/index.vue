
import Gallery from '~~/components/images/Gallery.vue';

<template>
    <div>
        <ImagesGallery :ctx="data.gallery" />
        <PagebuilderHeroText :ctx="data['hero-text']" />
        <div class="flex my-4 justify-center">
            <CoreButton :ctx="data.button" />
        </div>
    </div>
</template>
<script setup>
import data from '~/content/story.json'
</script>