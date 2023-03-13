<template>
    <div class="mx-auto container my-5 md:my-10 lg:my-16 px-6">
        <Single :ctx="projectPicker('gu-puds')" />
        <Duo :ctx="projectPicker('gu-puds','project-three')" />
        <Single :ctx="projectPicker('gu-puds')" />
        <PasswordAuth v-if="!userAuth.isLoggedIn" />
    </div>
</template>
<script setup>
import data from '~/content/projects.json'
import { useUserAuth } from '~/store/userAuth'

const userAuth = useUserAuth()

function projectPicker(first, second) {
    const pickedProjects = data.projects.filter(project => project.card.slug === first || project.card.slug === second)

    return checkProjectPrivacy(pickedProjects)
}

function checkProjectPrivacy(val) {

    if (userAuth.isLoggedIn) {
        return val
    } else {
        return val.filter(project => project.card.private === false)
    }
}

</script>