<template>
  <section style="margin-top: -50px;">
    <v-parallax :src="portada" height="500">
      <v-layout
      column
      align-center
      justify-center
      class="white--text noselect"
      >
        <img :src="logo" alt="logo" height="200">
      </v-layout>
    </v-parallax>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        portada: require('~/assets/entrada2.jpg'),
        logo: require('~/static/logos/logo.png')
      }
    }
  }
</script>
