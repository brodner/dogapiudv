const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required:  [true, 'El nombre de usuario es requerido']
  },
  name: {
    type: String,
    required:  [true, 'El nombre es requerido']
  },
  paswordHash: {
    type: String,
    required:  [true, 'la contraseña es requerida']
  },
  favoritedogs: {
    type: Array
  }
})

const User = model('User', userSchema)

module.exports = User