const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const messagesRoutes = require('./routes/Messages')

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt/nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // routes
  app.use('/messages', messagesRoutes)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}

start()
