// fungsi helloWorld
const helloWorld = (request, respond) =>
  respond.send('Hello World!')

// fungsi user get name dan address
const userFunction = (req, res) => {
  const { name, address } = req.params

  res
    .status(200)
    .json({
      name,
      address,
    })
  }

// get employee data
const getEmployee = (req, res) => {
  const dummyEmployee = {
    name: 'Sarah',
    address: 'Any street',
    birth_date: '1962-07-03',
    hire_date: '1989-05-09',
  }

  return res
    .status(200)
    .json(dummyEmployee)
}

// insert one employee
const addOneEmployee = (req, res) => {
  const { name, address } = req.body

  return res
    .status(200)
    .json({
      ...req.body
    })
}

// exports functions
module.exports = {
  helloWorld,
  userFunction,
  getEmployee,
  addOneEmployee,
}