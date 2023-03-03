export default defineNuxtRouteMiddleware((to, from) => {

    if (userAuth.isLoggedIn === false) {
        if (privateRoutes.filter(route => route.card.slug === to.params.slug)) {
            return navigateTo('/')
        }
    }
})

import data from '~/content/projects.json'
import { useUserAuth } from '~/store/userAuth'

const userAuth = useUserAuth()

checkUserAuthentication()

function checkUserAuthentication() {
    if (localStorage.setPassword) {
      userAuth.passwordAccepted()
    }
}

const privateRoutes = data.projects.filter(project => project.card.private === true)