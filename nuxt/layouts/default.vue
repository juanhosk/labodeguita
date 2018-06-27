<template>
  <v-app>
    <drawer-c v-if="$device.isMobile"></drawer-c>
    <header-c v-if="!$device.isMobile"></header-c>

    <v-content>
      <v-container fluid class="pa-0 ma-0">
        <nuxt/>
      </v-container>
    </v-content>

    <footer-c></footer-c>
  </v-app>
</template>
<script>
  import { HeaderC, DrawerC, FooterC } from '~/components/Layout'

  export default {
    components: { HeaderC, DrawerC, FooterC }
  }
</script>
