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


function commentCreateRoute(req, res, next) {
  //  add the currentUser to the data
  req.body.user = req.currentUser // this comes from `secureRoute`
  // find the user we want to add a comment to
  User.findById(req.params.id)
    //.populate('comments.user')
    //.select('comments username')
    .then(user => {
      // add a comment to the user
      user.comments.push(req.body)
      return user.save()
    })
    // .populate('comments.user')
    // .select('comments username')
    .then(user => res.json(user))
    .catch(next)
}



module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute
}
