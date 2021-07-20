require('dotenv').config()
const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('Db connected ✔'))
  .catch(e => console.error(e))
