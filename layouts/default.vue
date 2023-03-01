<template>
  <div>
    <the-header></the-header>
    <slot></slot>
    <the-footer></the-footer>
  </div>
</template>
<script setup>
import { useUserAuth } from '~/store/userAuth'

const userAuth = useUserAuth()

onMounted(() => {
  checkUserAuthentication()
})

function checkUserAuthentication() {
  if (localStorage.setPassword) {
    userAuth.passwordAccepted()
  }
}

</script>