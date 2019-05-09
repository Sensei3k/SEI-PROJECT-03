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
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1991, 11, 25),
    location: 'London'
  }, {
    username: 'paulo',
    email: 'paulo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1995, 2, 13),
    location: 'London'
  }, {
    username: 'elleo',
    email: 'elleo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1994, 2, 19),
    location: 'London'

  }, {
    username: 'adeo',
    email: 'adeo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1992, 6, 16),
    location: 'London'
  })
    .then(() => mongoose.connection.close())
    .catch(err => {
      console.log(err)
      mongoose.connection.close()
    })
})
