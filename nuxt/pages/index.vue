<template>
  <div>
    <section-image-principal v-if="!$device.isMobile"></section-image-principal>
    <section-caracteristics></section-caracteristics>
  </div>
</template>
<script>
  import { SectionImagePrincipal, SectionCaracteristics } from '~/components/Main'
  export default {
    components: {
      SectionImagePrincipal,
      SectionCaracteristics
    }
  }
</script>
