// calling library
const express = require('express')

// execute express
const app = express()

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

// get root request
app.get('/', helloWorld)

app.get('/:name/:address', userFunction)

// set express to running on port 3000
app.listen(3000)