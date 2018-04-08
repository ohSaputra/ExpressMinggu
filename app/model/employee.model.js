// calling mongoose library
const mongoose = require('mongoose')

// define the table structure
const employeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: String,
  birth_date: Date,
  hire_date: Date,
})

// register the schema
mongoose.model('Employee', employeeSchema, 'employee')