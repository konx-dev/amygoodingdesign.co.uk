import { defineStore } from 'pinia'

export const useUserAuth = defineStore('UserAuth', () => {
    const isLoggedIn = ref(false)

    return { isLoggedIn }
  })