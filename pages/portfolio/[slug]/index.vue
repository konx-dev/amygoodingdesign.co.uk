<template>
    <div>
        <component :is="item.blockType" :ctx="item" v-for="item in entry.content" :key="item.id"></component>
    </div>
</template>
<script setup>
import data from '~/content/projects.json'

function currentRoute() {
    const route = useRoute()
    return route.params.slug
}

function setPageData() {
    const setData = data.projects.filter(project => project.card.slug === currentRoute())
    // console.log(setData[0].content)
    return setData[0]
}

const entry = setPageData()

</script>


