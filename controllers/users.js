const User = require('../models/User')

function indexRoute(req, res, next) {
  //get all the users from the database
  User.find()
    .then(users => res.json(users)) //send as JSON
    .catch(next) //catch any errors
}

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
}

function createRoute(req, res, next) {

  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
}

function updateRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next)

}

function deleteRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

function showProfileRoute(req, res, next) {
  // get a specific character
  // User.findById(req.params.id)
  //   .select('-email -password -passwordConfirmation -__v') // convert the user ID into the whole user object
  //   .then(user => res.json(user)) // send it as JSON
  //   .catch(next) // handle our errors

  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
}


function commentCreateRoute(req, res, next) {
  //  add the currentUser to the data
  req.body.user = req.currentUser // this comes from `secureRoute`
  // find the user we want to add a comment to
  User.findById(req.params.id)
    .then(user => {
      // add a comment to the character
      user.comments.push(req.body)
      return user.save()
    })
    .then(user => res.json(user))
    .catch(next)
}



module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  showProfile: showProfileRoute,
  commentCreate: commentCreateRoute
}
