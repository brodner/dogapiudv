//const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../../models/User/schema')

loginRouter.post('/', async (request, response) => {
  const { body } = request
  const { username, password } = body

  const user = await User.findOne({ username })

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.paswordHash)

  if (!(user && passwordCorrect)) {
    response.status(401).json({
      error: 'Usuario o contraseña erronea'
    })
  }

  response.send({
    name: user.name,
    username: user.username,
    favoritedogs: user.favoritedogs
  })
})

module.exports = loginRouter
