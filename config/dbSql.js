const Sequelize = require('sequelize')
const path = require('path')

// set database account
const DATABASE = 'employees'
const USERNAME = 'root'
const PASSWORD = 'anjay'

// configure the database
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
})

// test the connection
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error(`Unable to connect to the database,
    with error: ${err}`))

const db = {
  // Import your schema here
  Employees: sequelize.import(path.join(__dirname, '../app/model/myEmployee.model')),
  User: sequelize.import(path.join(__dirname, '../app/model/myUser.model')),

  sequelize,
  Sequelize,
}

// export the database
module.exports = db