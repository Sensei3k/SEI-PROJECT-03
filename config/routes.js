const router = require('express').Router()
const usersController = require('../controllers/users')
const authController = require('../controllers/auth')
const matchController = require('../controllers/matches')
//const secureRoute = require('../lib/secureRoute')

router.get('/', (req,res) => res.json({ message: 'Welcome to the CRUSH API' }))

router.get('/users', usersController.index)
router.post('/users', usersController.create)
router.get('/users/:id', usersController.show)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.delete)

router.get('/users/show/:id', usersController.showProfile)

router.post('/register', authController.register)
router.post('/login', authController.login)
//router.post('/register', authController.register)
//router.post('/login', authController.login)

//router.post('/characters/:id/comments', secureRoute, charactersController.commentCreate)
router.post('/characters/:id/comments', usersController.commentCreate)

router.get('/users/:id/matches', matchController.match)
//router.get('/matches/:id', matchController.match)



module.exports = router
