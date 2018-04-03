<template>
  <v-card class="square">
    <v-card-media    
      :src="src"
      height="200px"
      style="overflow: visible;"
    >
      <v-avatar
        :size="'100px'"
        id="my-account-avatar"
        class="grey lighten-4"
      >
        <img class="img-style" src="/logos/logo.png" alt="avatar">
      </v-avatar>
    </v-card-media>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      src: require('~/assets/entrada2.jpg')
    })
  }
</script>
<style lang="scss" scoped>
  .img-style {
    border: 4px solid white;
    border-radius: 50%;
  }
  .pic {
    border: none!important;
  }
</style>
