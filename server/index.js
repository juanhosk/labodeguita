const express = require('express')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const messagesRoutes = require('./routes/Messages')

// Import and set Nuxt.js options
let config = require('../nuxt/nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// routes
app.use('/messages', messagesRoutes)

// Give nuxt middleware to express
app.use(nuxt.render)

// Start express server
app.listen(port, host)
