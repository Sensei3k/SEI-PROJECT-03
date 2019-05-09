const router = require('express').Router()
const usersController = require('../controllers/users')
//const authController = require('../controllers/auth')
//const secureRoute = require('../lib/secureRoute')

router.get('/', (req,res) => res.json({ message: 'Welcome to the Dating App API' }))

router.get('/users', usersController.index)
router.get('/users/:id', usersController.show)
router.post('/users', usersController.create)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.delete)


//router.post('/register', authController.register)
//router.post('/login', authController.login)



module.exports = router