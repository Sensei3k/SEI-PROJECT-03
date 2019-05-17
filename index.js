require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { port, dbUri } = require('./config/environment')

//invoke the express module
const app = express()

//connect to the database
mongoose.connect(dbUri)

app.use(express.static(`${__dirname}/dist`))
//config the middleware
app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandler)

//set the backend to listen for ajax requests
app.listen(port, () => console.log(`Your CRUSH is listening to port ${port}`))
