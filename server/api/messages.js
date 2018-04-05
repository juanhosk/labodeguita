const router = require('express').Router()

router.get('/messages', (req, res) => {
  res.json({
    success: true
  })
})

module.exports = router
