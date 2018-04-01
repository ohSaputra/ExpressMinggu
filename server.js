// calling library
const express = require('express')

// execute express
const app = express()

// import routes dari config/routes
const router = require('./config/routes')

// add router to express
app.use('/', router)

// set express to running on port 3000
app.listen(3000)