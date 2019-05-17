const router = require('express').Router()
const usersController = require('../controllers/users')
const authController = require('../controllers/auth')
const matchController = require('../controllers/matches')
const secureRoute = require('../lib/secureRoute')

//set the routes and paths for each ajax request
router.get('/', (req,res) => res.json({ message: 'Welcome to the CRUSH API' }))

router.get('/users', secureRoute, usersController.index)
router.post('/users', secureRoute, usersController.create)
router.get('/users/:id', secureRoute, usersController.show)
router.put('/users/:id', secureRoute, usersController.update)
router.delete('/users/:id', secureRoute, usersController.delete)
router.get('/users/:id/matches', secureRoute, matchController.match)
router.post('/users/:id/comments', secureRoute, usersController.commentCreate)

router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router
