<template>
    <div>
        <Single :ctx="projectPicker('project-one')" />
        <Duo :ctx="projectPicker('project-five','project-three')" />
        <Single :ctx="projectPicker('project-two')" />
    </div>
</template>
<script setup>
import data from '~/content/projects.json'

function projectPicker(first, second) {
    const pickedProjects = data.projects.filter(project => project.card.slug === first || project.card.slug === second)

    return pickedProjects
}


</script>