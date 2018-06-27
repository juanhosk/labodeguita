<template>
  <v-toolbar
    height="50px"
    app fixed flat
    v-scroll="onScroll"
    :color="offsetTop <= 100 ? 'transparent' : 'primary'"
  >
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-for="(link, key) in links" :key="key"
        nuxt :to="link.url" :color="link.color"
        depressed light class="square t-btn"
        :class="offsetTop <= 100 ? 't-btn--hover' : ''"
      >
       {{ link.text }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
  export default {
    data: () => ({
      offsetTop: 0,
      links: [
        {
          url: 'users',
          color: 'primary',
          text: 'Tu cuenta'
        },
        {
          url: '',
          color: 'secondary',
          text: 'Pedidos'
        },
        {
          url: '',
          color: 'neutral',
          text: 'Contacto'
        }
      ]
    }),
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    }
  }
</script>
<style lang="scss" scoped>
.logo-avatar {
  position: absolute;
  left: calc(50% - 24px);

  img {
    width: 100px;
  }
}

.t-btn {
  width: 110px;

  &.t-btn--hover:hover {
    height: 70px;
  }
}
</style>
