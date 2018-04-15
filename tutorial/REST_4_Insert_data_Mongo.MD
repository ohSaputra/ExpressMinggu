## Insert data in MongoDB using (Mongoose)[http://mongoosejs.com/]

1. In your controller file, make a method called `addOneSomething` and use `create` method from `mongoose`.
```js
// file: employee.controller.js
const addOneEmployee = (req, res) => {
  return Employee.create()
}
```

2. Get your data from your form using `body-parser` and `req.body`.
```js
// file: employee.controller.js
const addOneEmployee = (req, res) => {
  const { first_name, gender, last_name,
    birth_date, hire_date } = req.body

  return Employee.create()
}
```

3. Insert the data inside `create` function and make a callback.
```js
// file: employee.controller.js
const addOneEmployee = (req, res) => {
  const { first_name, gender, last_name,
    birth_date, hire_date } = req.body

  return Employee.create({
    first_name,
    last_name,
    gender,
    birth_date,
    hire_date
  }, (err, result) => {
    // some logics
  })
}
```

4. Add your error handling inside the callback.
```js
// file: employee.controller.js
const addOneEmployee = (req, res) => {
  const { first_name, gender, last_name,
    birth_date, hire_date } = req.body

  return Employee.create({
    first_name,
    last_name,
    gender,
    birth_date,
    hire_date
  }, (err, result) => {
    // if found error
      if (err) {
        console.error(err)
        res
          .status(500)
          .json({ message: `Error creating new employee` })

        // if succeed
      } else {
        console.log(`New employee created.`)

        res
          .status(201)
          .json(result)
      }
  })
}
```

5. Dont forget to add your method in exports.
```js
// file: employee.controller.js
// Exports your function
module.exports = {
  getEmployee,
  addOneEmployee,
}
```

6. Use the functions inside your router file, with a `post` method.
```js
// file: routes.js

router
  .route('/employee')
  .get(employeeCtrl.getEmployee)
  .post(employeeCtrl.addOneEmployee)

```