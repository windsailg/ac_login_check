const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/login-machine',
  { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoDB error！')
})
db.once('open', () => {
  console.log('mongoDB connected')
})

module.exports = db
