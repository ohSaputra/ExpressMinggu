// import express library
const express = require('express')

// import Router library from express
const router = express.Router()

// import controller to route
const employeeCtrl = require('../app/controller/myEmployee.controller')

// get root request
router
  .route('/')
  .get(() => res.send(`Hello World!`))

router
  .route('/employee')
  .get(employeeCtrl.getEmployee)

module.exports = router