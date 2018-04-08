// Call the library
const mongoose = require('mongoose')

// Employees Database url
const DB_URL = 'mongodb://localhost:27017/employees'

// Connect your Database
mongoose.connect(DB_URL)

// Event handling for connections
// If succeed or connected
mongoose.connection.on('connected', () =>
  console.log(`Mongoose connected to ${DB_URL}`) )

// if error
mongoose.connection.on('error', (err) =>
  console.error(`Mongoose fail on: ${err}`) )

// if disconnected
mongoose.connection.on('disconnected', () =>
  console.log('Mongoose successfully disconnected.') )

// If suddenly shutdown
const gracefullShutdown = (msg, callback) =>
  mongoose.connection.close(() => {
    console.log(`Mongooose disconnected through ${msg}`)
    callback()
  })

// If app terminate
process.on('SIGINT', () =>
  gracefullShutdown('APP Termination (SIGINT)', () =>
    process.exit(0) )
)