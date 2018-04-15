const db = require('../../config/dbSql')
const { Employees } = db

const getEmployee = (req, res) => {
  return Employees
    .findAll({
      limit: 10
    })
    .then(result => {
      if (result)
        res
          .status(200)
          .json(result)
      else
        res
          .status(500)
          .json({ message: `Could not find Employee` })
    })
}

// addOneEmployee

// updateOneEmployee

// deleteOneEmployee

module.exports = {
  getEmployee
}