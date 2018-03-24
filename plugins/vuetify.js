import Vue from 'vue'
import Vuetify from 'vuetify'
// import colors from 'vuetify/es5/util/colors'

// You can also specify those components you are going to use for 'a la carte' build:
// https://github.com/vuetifyjs/nuxt/blob/master/template/plugins/vuetify.js
// https://github.com/vuetifyjs/a-la-carte/blob/master/template/src/main.js

Vue.use(Vuetify, {
  theme: {
    'primary': '#dc3250',
    'secondary': '#fad296',
    'accent': '#e5697f',
    'error': '#F44336',
    'warning': '#ffeb3b',
    'info': '#fbe2bc',
    'success': '#81C784',
    'neutral': '#fffaf0'
  }
})
