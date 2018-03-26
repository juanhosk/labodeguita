<template>
  <v-app>
    <header-c></header-c>

    <v-content>
      <v-container fluid class="pa-0 ma-0">
        <nuxt/>
      </v-container>
    </v-content>

    <footer-c></footer-c>
  </v-app>
</template>
<script>
  import { HeaderC, FooterC } from '~/components/Layout'

  export default {
    components: { HeaderC, FooterC }
  }
</script>
