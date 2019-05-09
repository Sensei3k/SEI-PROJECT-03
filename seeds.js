const mongoose = require('mongoose')
const User = require('./models/User')

const { dbUri } = require('./config/environment')
//connect to the database
mongoose.connect(dbUri, (err, db) => {
  //delete what is currently stored in the database
  db.dropDatabase()
  //add new objects to database
  User.create({
    username: 'kristiano',
    email: 'kristiano@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'paulo',
    email: 'paulo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'elleo',
    email: 'elleo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'adeo',
    email: 'adeo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  })
    .then(() => mongoose.connection.close())
    .catch(err => {
      console.log(err)
      mongoose.connection.close()
    })
})
