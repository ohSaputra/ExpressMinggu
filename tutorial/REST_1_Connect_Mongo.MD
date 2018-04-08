## How to connect MongoDB into your express server:

1. First, install [Mongoose](https://github.com/Automattic/mongoose/) using NPM:
```
npm install --save mongoose
```
or by using [Yarn](https://github.com/yarnpkg/yarn):
```
yarn add mongoose
```
2. Inside your `config` folder make a file named with `db.js`
3. Call `mongoose` inside `db.js` using:
```js
// Call the library
const mongoose = require('mongoose')
```
4. Define URL of the database
```js
// Employees Database url
const DB_URL = 'mongodb://localhost:27017/<YOUR_DATABASE_GOES HERE>'
```
5. Connect your Database using:
```js
// Connect your Database
mongoose.connect(DB_URL)
```
6. Make event handling for each process of connection:
```js
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
```
7. Make an event handling if app terminate forcefully, e.g. Shutdown:
```js
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
```
8. And import/require `db.js` at the top of `server.js`