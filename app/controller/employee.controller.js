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

// Exports your function
module.exports = {
  getEmployee
}