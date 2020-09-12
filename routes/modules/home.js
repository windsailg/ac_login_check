const express = require('express')
const router = express.Router()

const users = require('../../models/user')
router.use(express.static('public'))

router.get('/', (req, res) => {
  users.find()
    .lean()
    .then(() => res.render('index'))
    .catch(error => console.error(error))
})

router.get('/loginFail', (req, res) => {
  const loginFail = true
  users.find()
    .lean()
    .then(() => res.render('index', { loginFail }))
})

module.exports = router
