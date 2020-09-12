const express = require('express')
const router = express.Router()

const users = require('../../models/user')

router.get('/', (req, res) => {
  users.find().lean().then(user => res.render('success', { user }))
})

router.post('/', (req, res) => {
  const userLoginData = req.body

  let userEmail = ''
  userEmail = req.body.email.trim()

  let userPassword = ''
  userPassword = req.body.password.trim()

  if (!userEmail || !userPassword) {
    userEmail += 'isNotDefine'
    userPassword += 'isNotDefine'
  }

  let loginStatus = false
  return users.find()
    .lean()
    .then(user => {
      user.forEach(item => {
        if (item.email.includes(userEmail) && item.password.includes(userPassword)) {
          console.log(item)
          loginStatus = true
        }
      })
    })
    .then(() => {
      if (loginStatus) {
        return res.render('success', { userLoginData })
      } else if (!loginStatus) {
        return res.redirect('/loginFail')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
