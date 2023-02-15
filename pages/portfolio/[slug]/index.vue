<template>
    <div>
        {{ pageData }}
    </div>
</template>
<script setup>
import data from '~/content/projects.json'

function currentRoute() {
    const route = useRoute()
    return route.params.slug
}

const pageData = data.projects.filter(project => project.card.slug === currentRoute())

</script>

