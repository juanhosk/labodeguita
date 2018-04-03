<template>
  <v-toolbar
    height="50px"
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
      <v-btn
        v-for="(link, key) in links" :key="key"
        :nuxt="link.url" :color="link.color"
        depressed light class="square"
        :class="offsetTop <= 100 ? 'tbtn-hover' : ''"
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
          url: '',
          color: 'primary',
          text: 'Tu cuenta'
        },
        {
          url: '',
          color: 'secondary',
          text: 'Tu cuenta'
        },
        {
          url: '',
          color: 'neutral',
          text: 'Tu cuenta'
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
    left: calc( 50% - 24px );

    img {
      width: 100px;
    }
  }

  .tbtn-hover:hover {
    height: 70px;
  }
</style>
