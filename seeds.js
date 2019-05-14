const mongoose = require('mongoose')
const User = require('./models/User')

const { dbUri } = require('./config/environment')
//connect to the database
mongoose.connect(dbUri, (err, db) => {
  //delete what is currently stored in the database
  db.dropDatabase()
  //add new objects to database
  User.create({

    // 1.)
    username: 'Kristiano',
    email: 'kristiano@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1991, 11, 25),
    location: 'New York',
    image: '../images/cpu-profile-images/cristiano-ronaldo.jpg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'
  }, {

    // 2.)
    username: 'John',
    email: 'paulo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1995, 2, 13),
    location: 'London',
    image: '../images/cpu-profile-images/John.jpg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'
  }, {

    // 3.)
    username: 'Elleo',
    email: 'elleo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1994, 2, 19),
    location: 'New York',
    image: '../images/cpu-profile-images/elmo.jpg',
    gender: 'Female',
    interests: 'biking, swimming, hiking, eating, music'
  }, {

    // 4.)
    username: 'Sensei',
    email: 'ade@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1992, 6, 17),
    location: 'New York',
    image: '../images/cpu-profile-images/foreveralone.jpeg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'

  }, {

    // 5.)
    username: 'Luke',
    email: 'luke@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1993, 5, 11),
    location: 'New York',
    image: '../images/cpu-profile-images/Luke.jpg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'
  }, {

    // 6.)
    username: 'Harrison',
    email: 'harrison@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1996, 8, 17),
    location: 'London',
    image: '../images/cpu-profile-images/Harrison.jpg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'

  }, {

    // 7.)
    username: 'Lara',
    email: 'lara@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1998, 9, 27),
    location: 'London',
    image: '../images/cpu-profile-images/Lara.jpg',
    gender: 'Female',
    interests: 'biking, swimming, hiking, eating, music'

  }, {

    // 8.)
    username: 'Veronica ',
    email: 'veronica@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1996, 4, 23),
    location: 'London',
    image: '../images/cpu-profile-images/Veronica.jpg',
    gender: 'Female',
    interests: 'biking, swimming, hiking, eating, music'

    // 9.)
  }, {
    username: 'Hannah',
    email: 'hannah@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(2000, 2, 11),
    location: 'New York',
    image: '../images/cpu-profile-images/Hannah.jpg',
    gender: 'Female',
    interests: 'biking, swimming, hiking, eating, music'

    // 10.)
  }, {
    username: 'Valentina',
    email: 'valentina@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1999, 4, 18),
    location: 'London',
    image: '../images/cpu-profile-images/Valentina.jpg',
    gender: 'Female',
    interests: 'biking, swimming, beach, painting, travel'
  })
    .then(() => mongoose.connection.close())
    .catch(err => {
      console.log(err)
      mongoose.connection.close()
    })
})
