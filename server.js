// CALL THE DATABASE
// require('./config/db')

// calling library
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// execute express
const app = express()

// initiate default port
const defaultPort = 3000

// import routes dari config/routes
// const router = require('./config/routes')
const router = require('./config/routesSql')

// set static frontend
app.use(express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(__dirname +
  '/node_modules'))

// Parsing body from post data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// add router to express
app.use('/api', router)

// set express to running on port 3000
const server = app.listen(defaultPort, () => {
  const port = server.address().port

  console.log(`Magic happen on port: ${port}`)
})