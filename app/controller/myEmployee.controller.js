const db = require('../../config/dbSql')

const getEmployee = (req, res) => {
  return db.Employees
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

module.exports = {
  getEmployee
}