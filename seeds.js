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
    location: 'London',
    //bethnal green
    coordinates: {
      latitude: 51.5273,
      longitude: 0.0555
    },
    image: '../images/cpu-profile-images/placeholder.jpg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'
  }, {

    // 2.)
    username: 'Paul',
    email: 'paulo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1995, 2, 13),
    location: 'London',
    //wimbledon
    coordinates: {
      latitude: 51.4214,
      longitude: 0.2055
    },
    image: '../images/cpu-profile-images/placeholder.jpg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'
  }, {

    // 3.)
    username: 'Elleo',
    email: 'elleo@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1994, 2, 19),
    location: 'London',
    //elephant & castle
    coordinates: {
      latitude: 51.4952,
      longitude: 0.1008
    },
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
    location: 'London',
    //tottenham
    coordinates: {
      latitude: 51.5152,
      longitude: 0.1419
    },
    image: '../images/cpu-profile-images/placeholder.jpg',
    gender: 'Male',
    interests: 'biking, swimming, hiking, eating, music'

  }, {

    // 5.)
    username: 'Luke',
    email: 'luke@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dateOfBirth: new Date(1993, 5, 11),
    location: 'London',
    //stratford
    coordinates: {
      latitude: 51.5431,
      longitude: 0.0072
    },
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
    //canary wharf
    coordinates: {
      latitude: 51.5035,
      longitude: 0.0184
    },
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
    //croydon
    coordinates: {
      latitude: 51.3784,
      longitude: 0.1026
    },
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
    //sloane square
    coordinates: {
      latitude: 51.4923,
      longitude: 0.1562
    },
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
    location: 'London',
    //southfields
    coordinates: {
      latitude: 51.4448,
      longitude: 0.2068
    },
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
    //old street
    coordinates: {
      latitude: 51.5257,
      longitude: 0.0875
    },
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
