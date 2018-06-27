<template>
  <v-parallax :src="src" height="350">
    <div class="img-center"> 
      <v-avatar
        :size="'100px'"
        id="my-account-avatar"
        class="grey lighten-4"
      >
        <img class="img-style" :src="usuario" alt="avatar">
      </v-avatar><br>
    </div>
  </v-parallax>
</template>
<script>
  export default {
    data: () => ({
      src: require('~/assets/entrada2.jpg'),
      usuario: require('~/assets/usuario-nofoto.jpg')
    })
  }
</script>
<style lang="scss" scoped>
  .img-style {
    border: 4px solid white;
    border-radius: 50%;
  }
  .img-center {
    margin: auto auto;
  }

</style>
