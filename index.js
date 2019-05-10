const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { port, dbUri } = require('./config/environment')
const routes = require('./config/routes')
//invoke the express module
const app = express()
//connect to the database
mongoose.connect(dbUri)


app.use(bodyParser.json())
app.use('/api', routes)

app.listen(port, () => console.log(`App is listening on port ${port}`))
