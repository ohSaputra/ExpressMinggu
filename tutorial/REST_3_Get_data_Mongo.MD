## Get data from MongoDB using Mongoose:

1. After you make previous model (mine is `employee.model.js`), you can make a `<your_model_name>_controller.js` inside `controller` folder. In my case i will name it as `employee.controller.js`.
2. Import `mongoose` and your model into this controller.
```js
// employee.controller.js
// calling the library
const mongoose = require('mongoose')
const Employee = mongoose.model('<your_model_name>')
```
3. Make a callback function for express:
```js
// employee.controller.js
// get employee data
const getEmployee = (req, res) => {}
```
4. Use your model for return
```js
// employee.controller.js
Employee
    .find()
    .exec((err, result) => {}
```
5. Add your event handling for error, not found, and succeed. Inside your `exec()` function.
```js
// employee.controller.js
if (err) {
  console.error(err)
  res
    .status(500)
    .json({ message: `Error finding employee` })

    // if not found any data
} else if (result.length == 0) {
  console.log('Data employee not found.')

  res
    .status(404)
    .json({ message: `Data not found` })

  // if succeed
} else {
  console.log(`Found employee: ${result.length}`)

  res
    .status(200)
    .json(result)
}
```
6. Final method will be like.
```js
// employee.controller.js
// get employee data
const getEmployee = (req, res) =>
  Employee
    .find()
    .exec((err, result) => {

      // if found error
      if (err) {
        console.error(err)
        res
          .status(500)
          .json({ message: `Error finding employee` })

          // if not found any data
      } else if (result.length == 0) {
        console.log('Data employee not found.')

        res
          .status(404)
          .json({ message: `Data not found` })

        // if succeed
      } else {
        console.log(`Found employee: ${result.length}`)

        res
          .status(200)
          .json(result)
      }
    })
```
7. Last exports your function:
```js
// employee.controller.js
module.exports = {
  getEmployee
}
```