// Import DB
const db = require('../../config/dbSql')

// Import library
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Destructure DB and Only use User model
const { User } = db

// register
const register = (req, res) => {
  const { username, email, password } = req.body

  return User
    .findOrCreate({
      where: { username },
      defaults: {
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      } })
    .spread((result, created) => {
      if (created) {
        console.log('Successfully resgistering new user')

        return res
          .status(201)
          .json({ data: result })
      } else {
        console.log('Username has been registered.')

        return res
          .status(400)
          .json({ error: `Username has been registered.` })
      }
    })
}

// login
const login = (req, res) => {
  const { username, password } = req.body

  return User
    .findOne({ where: { username } })
    .then(user => {
      if (user) {
        console.log(`Find user with the username: ${username}`)

        if (bcrypt.compareSync(password, user.password)) {

          const token = jwt.sign({
            username,
            email: user.email,
          }, `s0m3_s3cret_c0de`, { expiresIn: 60 })

          return res
            .status(200)
            .json({
              success: true,
              token
            })
        } else
          return res
            .status(401)
            .json({ error: `Wrong password` })

      } else {
        console.log(`Username not found`)

        return res
          .status(401)
          .json({ error: `Username not found` })
      }
    })
}

// authentication
const authentication = (req, res, next) => {
  const { authorization } = req.headers

  if (authorization) {
    jwt.verify(authorization, `s0m3_s3cret_c0de`, (error, decoded) => {
      if (error) {
        return res
          .status(401)
          .json({ error: `Your token is expired.` })
      } else {
        req.username = decoded.username
        req.email = decoded.email

        next()
      }
    })

  } else {
    return res
      .status(403)
      .json({ error: `You must login in order to access this data.` })
  }
}

// exports
module.exports = {
  register,
  login,
  authentication
}