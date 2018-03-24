<template>
  <section>
    <v-parallax :src="portada" height="600">
      <v-layout
      column
      align-center
      justify-center
      class="white--text"
      >
        <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
        <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
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
        portada: require('~/assets/hero.jpeg')
      }
    }
  }
</script>

