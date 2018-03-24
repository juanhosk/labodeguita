import Vue from 'vue'
import Vuetify from 'vuetify'
// import colors from 'vuetify/es5/util/colors'

// You can also specify those components you are going to use for 'a la carte' build:
// https://github.com/vuetifyjs/nuxt/blob/master/template/plugins/vuetify.js
// https://github.com/vuetifyjs/a-la-carte/blob/master/template/src/main.js

Vue.use(Vuetify, {
  theme: {
    'primary': '#29B6F6',
    'secondary': '#66BB6A',
    'accent': '#F44336',
    'error': '#F44336',
    'warning': '#ffeb3b',
    'info': '#42A5F5',
    'success': '#81C784',
    'neutral': '#f5f5f5'
  }
})
