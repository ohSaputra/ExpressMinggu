// import express library
const express = require('express')

// import Router library from express
const router = express.Router()

// import controller to route
const employeeCtrl = require('../app/controller/myEmployee.controller')
const userCtrl = require('../app/controller/myUser.controller')

// get root request
router
  .route('/')
  .get(() => res.send(`Hello World!`))

router
  .route('/employee')
  .get(userCtrl.authentication, employeeCtrl.getEmployee)

router
  .route(`/register`)
  .post(userCtrl.register)

router
  .route(`/login`)
  .post(userCtrl.login)

module.exports = router