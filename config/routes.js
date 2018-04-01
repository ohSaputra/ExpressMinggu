// import express library
const express = require('express')

// import Router library from express
const router = express.Router()

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
router
  .get('/', helloWorld)

router
  .get('/:name/:address', userFunction)

module.exports = router