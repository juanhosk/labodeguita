<template>
  <v-toolbar
    fixed flat
    v-scroll="onScroll"
    :color="offsetTop <= 100 ? 'transparent' : 'primary'"
  >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
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
