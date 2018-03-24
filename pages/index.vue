<template>
  <v-content>
    <section-image-principal></section-image-principal>
    <section-caracteristics></section-caracteristics>
  </v-content>
</template>
<script>
  import { SectionImagePrincipal, SectionCaracteristics } from '~/components/MainComponents'
  export default {
    components: {
      SectionImagePrincipal,
      SectionCaracteristics
    }
  }
</script>
