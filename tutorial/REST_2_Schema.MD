# How to make a Database Schema:

1. First look at your database and define what fields inside each table.
2. After you define the database fields, you can make your schema. Since i have an `employee` tables with these fields:
  * first_name
  * last_name
  * gender
  * birth_date
  * hire_date

SO my schema will be named as `employee.model.js` and the schema will look like:
```js
// employee.model.js
// calling mongoose library
const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  gender: String,
  birth_date: Date,
  hire_date: Date,
})
  ```
3. If you need to make a field to be required you can pass a required parameter like this:
```js
// employee.model.js
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
```
4. Register the schema into mongoose:
```js
// employee.model.js
// register the schema
mongoose.model('Employee', employeeSchema, 'employee')
```
5. Last import your schema to `db.js`
```js
// db.js
// BRING YOUR SCHEMA & MODEL
require('../app/model/employee.model')
```