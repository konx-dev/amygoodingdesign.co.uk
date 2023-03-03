<template>
    <div v-if="entry">
        <component :is="item.blockType" :ctx="item" v-for="item in entry.content" :key="item.id"></component>
    </div>
</template>
<script>
import data from '~/content/projects.json'

import ContentBlock from '~/components/pagebuilder/ContentBlock.vue'
import ImageSingle from '~/components/pagebuilder/ImageSingle.vue'

definePageMeta({
    middleware: ['user-auth']
})

export default {
    components: {
        ContentBlock,
        ImageSingle
    },
    data() {
        return {
            entry: null,
            isPrivate: null
        }
    },
    mounted() {
        this.setPageData()
    },
    methods: {
        currentRoute() {
            const route = useRoute()
            return route.params.slug
        },
        setPageData() {
            const setData = data.projects.filter(project => project.card.slug === this.currentRoute())
            this.entry = setData[0]
            this.isPrivate = setData[0].card.private
        }
    }
}
</script>