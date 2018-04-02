const nodeExternals = require('webpack-node-externals')

module.exports = {
  modulesDir: '../node_modules',
  /*
  ** Head elements
  ** Adds Roboto font and Material Icons
  */
  head: {
    title: 'La Bodeguita',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'La Bodeguita de Hoyo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Adds Vuetify & eslint into vendor.bundle.js
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Loads plugins into the app
  */
  plugins: ['~/plugins/vuetify'],
  /*
  ** Loads CSS globally
  */
  css: ['~/assets/style/app.styl']
}
