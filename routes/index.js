const router = require('express').Router()

router.use('/api', require('./mediaRoutes.js'))
router.use('/api', require('./omdbRoutes.js'))

module.exports = router
