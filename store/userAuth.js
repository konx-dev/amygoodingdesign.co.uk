import { defineStore } from 'pinia'

export const useUserAuth = defineStore('UserAuth', () => {
    const isLoggedIn = ref(false)

    function passwordAccepted() {
      isLoggedIn.value = true
    }

    return { isLoggedIn, passwordAccepted }
})