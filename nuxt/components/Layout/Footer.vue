<template>
  <v-footer height="auto">
    <v-card flat tile width="100%">
      <v-card-title class="primary white--text">
        <strong class="subheading">Siguenos en las redes!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          dark
          class="mx-3"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="grey lighten-3">
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
          <v-flex xs3 layout column>
            <span class="body-2">CONTACTO</span>
            <div>
              28240 Hoyo de Manzanares, Madrid
            </div>
            <div>
              Av de la Paloma Nº 10
            </div>
            <div>
              info@example.com
            </div>
            <div>
              918 56 57 88
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        &copy;2018 — <strong>La Bodeguita</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: ['fab home', 'fab home', 'fab home', 'fab home', 'fab home'],
      rows: [
        {
          title: 'Company Name',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
        },
        {
          title: 'Products',
          children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
        },
        {
          title: 'Useful Links',
          children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
        }
      ]
    })
  }
</script>
