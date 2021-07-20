const User = require('../../models/User/schema')
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()

usersRouter.post('/', async (request, response) => {
  try {
    const { body } = request
    const { username, name, password, favoritedogs = [] } = body
    const saltRounds = 10
    const paswordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
      username,
      name,
      paswordHash,
      favoritedogs
    })
    const savedUser = await user.save()

    response.status(201).json(savedUser)
  } catch (error) {
    response.status(411).json({ message: error.message })
  }
})

module.exports = usersRouter
