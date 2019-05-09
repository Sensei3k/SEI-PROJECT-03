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
    username: 'kristiano',
    email: 'kristiano@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1991, 11, 25),
    location: 'London',
    image: 'https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_human_blank_user_avatar_mannequin_dummy-512.png'
  }, {

    // 2.)
    username: 'paulo',
    email: 'paulo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1995, 2, 13),
    location: 'London',
    image: 'https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_human_blank_user_avatar_mannequin_dummy-512.png'
  }, {

    // 3.)
    username: 'elleo',
    email: 'elleo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1994, 2, 19),
    location: 'London',
    image: 'https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png'

  }, {

    // 4.)
    username: 'Sensei',
    email: 'ade@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1992, 6, 17),
    location: 'London',
    image: 'https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_human_blank_user_avatar_mannequin_dummy-512.png'

  }, {

    // 5.)
    username: 'luke',
    email: 'luke@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1993, 5, 11),
    location: 'London',
    image: 'https://i.pinimg.com/736x/d2/e7/ab/d2e7ab5a97279f2fa98db80fc80482ca--male-model-headshots-professional-headshots.jpg'

  }, {

    // 6.)
    username: 'harrison',
    email: 'harrison@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1996, 8, 17),
    location: 'London',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0MTI1OTI0Nl5BMl5BanBnXkFtZTgwMTY1NTk5NjE@._V1_.jpg'

  }, {

    // 7.)
    username: 'lara',
    email: 'lara@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1998, 9, 27),
    location: 'London',
    image: 'https://i.pinimg.com/736x/c0/00/ff/c000ffde132b9ff55342a698e95a5cc5--dark-blonde-model-face.jpg'

  }, {

    // 8.)
    username: 'veronica ',
    email: 'veronica@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1996, 4, 23),
    location: 'London',
    image: 'http://www.thevandallist.com/wp-content/uploads/2013/09/tumblr_mrdcfp8RMG1r615eio1_1280.jpg'

    // 9.)
  }, {
    username: 'hannah',
    email: 'hannah@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(2000, 2, 11),
    location: 'London',
    image: 'https://i.pinimg.com/736x/fc/d9/06/fcd906e2a207577f265958f8fcc150ed.jpg'

    // 10.)
  }, {
    username: 'valentina',
    email: 'valentina@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1999, 4, 18),
    location: 'London',
    image: 'http://static.squarespace.com/static/518e4bc6e4b0cf61a0111788/53268a29e4b03d5774a7c8b7/53268b5ce4b0eeecbb6811f1/1395035012542/_TRA7056.jpg'
  })
    .then(() => mongoose.connection.close())
    .catch(err => {
      console.log(err)
      mongoose.connection.close()
    })
})
