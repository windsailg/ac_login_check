const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')

router.use('/', home)
router.use('/loginSuccess', login)
router.use('/loginFail', home)

module.exports = router
