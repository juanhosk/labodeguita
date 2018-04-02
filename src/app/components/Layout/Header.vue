<template>
  <v-toolbar fixed flat v-scroll="onScroll" id="top-bar">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One {{ offsetTop }}</v-btn>
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
    },
    watch: {
      offsetTop () {
        document.getElementById('top-bar').style.backgroundColor = this.offsetTop <= 100 ? 'transparent' : '#dc3250'
      }
    }
  }
</script>
