<template>
  <v-toolbar
    :app="$device.isMobile"
    fixed flat
    v-scroll="onScroll"
    :color="$device.isMobile ? 'primary' : offsetTop <= 100 ? 'transparent' : 'primary'"
  >
    <template v-if="$device.isMobile">
        <v-toolbar-side-icon dark></v-toolbar-side-icon>
        <v-avatar class="logo-avatar"><img src="/logos/logo.svg"/></v-avatar>
    </template>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$device.isMobile">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
  export default {
    data: () => ({
      offsetTop: 0
    }),
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    }
  }
</script>
<style scoped>
  .logo-avatar {
    position: absolute;
    left: calc( 50% - 24px );
  }

  .logo-avatar > img {
    width: 100px;
  }
</style>
