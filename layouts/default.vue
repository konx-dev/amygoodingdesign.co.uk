<template>
    <div>
      <the-header></the-header>
      <slot></slot>
      <the-footer></the-footer>
    </div>
  </template>
  <script>
  import TheHeader from '~/components/header/TheHeader.vue';
  import TheFooter from '~/components/footer/TheFooter';
  export default {
        components: {
            TheHeader,
            TheFooter
      }
  }
  </script>