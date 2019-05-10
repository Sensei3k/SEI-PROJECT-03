const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Please provide a username',
    unique: 'That username is already registered'
  },
  email: {
    type: String,
    required: 'Please provide an email address',
    unique: 'That email is already registered'
  },
  password: {
    type: String,
    required: 'Please provide a password'
  },
  dateOfBirth: {
    type: Date
    // required: 'Please enter your date of birth'
  },
  location: {
    type: String
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  image: {
    type: String
  },
  interests: {
    type: String
  }
}, {
  toJSON: {
    virtuals: true,
    transform(doc, json) {
      delete json.password
      delete json.__v
      return json
    }
  }
})

//virtual fields not saved in database - store plaintext password for later
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(plaintext) {
    this._passwordConfirmation = plaintext
  })

// check if the password stored (virtual) matches the password in database
userSchema.pre('validate', function checkPasswords(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

// if the password has changed - hash the password and save it in the database
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

// "methods" in below is used to assign isPasswordValid function to all users
userSchema.methods.isPasswordValid = function isPasswordValid(plaintext) {
  //checks if the plain text password when hashed would equal
  //the hash in the data base
  return bcrypt.compareSync(plaintext, this.password)
}




module.exports = mongoose.model('User', userSchema)
