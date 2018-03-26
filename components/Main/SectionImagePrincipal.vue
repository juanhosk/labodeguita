<template>
  <section>
    <v-parallax :src="portada" height="600">
      <v-layout
      column
      align-center
      justify-center
      class="white--text"
      >
        <img :src="logo" alt="logo" height="200">
        <v-btn
          class="blue lighten-2 mt-5"
          dark
          large
          href="/pre-made-themes"
        >
          Get Started
        </v-btn>
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

