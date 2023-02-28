<template>
    <div>
        <Single :ctx="projectPicker('gu-puds')" />
        <Duo :ctx="projectPicker('project-five','project-three')" />
        <Single :ctx="projectPicker('project-two')" />
        <PasswordAuth v-if="!userAuth.isLoggedIn" />
    </div>
</template>
<script setup>
import data from '~/content/projects.json'
import { useUserAuth } from '~/store/userAuth'

const userAuth = useUserAuth()

function projectPicker(first, second) {
    const pickedProjects = data.projects.filter(project => project.card.slug === first || project.card.slug === second)

    return pickedProjects
}


</script>