<template>
  <div>
    <v-toolbar
      height="60px"
      app fixed flat
      v-scroll="onScroll"
      :color="$device.isMobile ? 'primary' : offsetTop <= 100 ? 'transparent' : 'primary'"
    >
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-avatar class="logo-avatar"><img src="/logos/logo.svg" /></v-avatar>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
    >
      <div class="pa-1" height="60px">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          nuxt
          v-for="link in links"
          :key="link.text"
          :to="link.url"
          :style="{ backgroundColor: $vuetify.theme[link.color] }"
        >
          <v-list-tile-content>
            <v-list-tile-title class="drawer-item-text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: null,
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
.drawer-item-text {
  font-weight: bold !important;
  color: black !important;
}
</style>
