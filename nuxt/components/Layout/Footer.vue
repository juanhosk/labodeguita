<template>
  <v-footer height="auto">
    <v-card flat tile width="100%">
      <v-card-title class="primary white--text" :class="$device.isMobile ? 'd-flex' : ''">
        <template v-if="!$device.isMobile">
          <strong class="subheading">Siguenos en las redes!</strong>
          <v-spacer></v-spacer>
        </template>
        <v-btn
          v-for="(social, key) in socials"
          :key="key"
          :href="social.link"
          target="_blank"
          icon
          dark
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="grey lighten-3" v-if="!$device.isMobile">
        <v-layout>
          <v-flex
            v-for="(col, i) in rows"
            :key="i"
            xs3
          >
            <span class="body-2" v-text="col.title.toUpperCase()"/>
            <div
              v-for="(child, i) in col.children"
              :key="i"
              v-text="child"
            />
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center noselect">
        &copy;2018 — <strong>La Bodeguita</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      socials: [
        {
          link: 'https://www.facebook.com',
          icon: 'fab fa-facebook-square'
        },
        {
          link: 'https://www.instagram.com',
          icon: 'fab fa-instagram'
        },
        {
          link: 'https://goo.gl/maps/xYPebcj62yy',
          icon: 'fab fa-google'
        }
      ],
      rows: [
        {
          title: 'Mapa del sitio',
          children: ['Tu cuenta', 'Nuestros productos', 'Ayuda']
        },
        {
          title: 'Contacto',
          children: ['Av de la Paloma Nº 10', '28240 Hoyo de Manzanares, Madrid', 'labodeguita.ice@gmail.com', '91 856 57 88']
        }
      ]
    })
  }
</script>
