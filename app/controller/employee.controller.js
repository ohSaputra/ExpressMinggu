// calling the library
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

// get employee data
const getEmployee = (req, res) =>
  Employee
    .find()
    .exec((err, result) => {

      // if found error
      if (err) {
        console.error(err)
        res
          .status(500)
          .json({ message: `Error finding employee` })

          // if not found any data
      } else if (result.length == 0) {
        console.log('Data employee not found.')

        res
          .status(404)
          .json({ message: `Data not found` })

        // if succeed
      } else {
        console.log(`Found employee: ${result.length}`)

        res
          .status(200)
          .json(result)
      }
    })

// insert one employee
const addOneEmployee = (req, res) => {
  const { first_name, last_name, birth_date, hire_date } = req.body

  return Employee
    .create({
      first_name,
      last_name,
      gender,
      birth_date,
      hire_date
    })
    .exec((err, result) => {
      // if found error
      if (err) {
        console.error(err)
        res
          .status(500)
          .json({ message: `Error creating new employee` })

        // if succeed
      } else {
        console.log(`New employee created.`)

        res
          .status(204)
          .json(result)
      }
    })
}

// Exports your function
module.exports = {
  getEmployee,
  addOneEmployee,
}