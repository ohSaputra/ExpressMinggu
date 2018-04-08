// import express library
const express = require('express')

// import Router library from express
const router = express.Router()

// import controller to route
const userCtrl = require('../app/controller/user.controller')
const employeeCtrl = require('../app/controller/employee.controller')

// get root request
router
  .route('/')
  .get(userCtrl.helloWorld)

router
  .route('/:name/:address', )
  .get(userCtrl.userFunction)

router
  .route('/employee')
  .get(employeeCtrl.getEmployee)
  .post(userCtrl.addOneEmployee)

module.exports = router