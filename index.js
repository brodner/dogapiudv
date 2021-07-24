const mongo = require('./mongo')
const express = require('express')
const logger = require('./logger')
const app = express()
const cors = require('cors')
const PORT = 3001
const dogApi = require('./controllers/dogs')
const usersRouter = require('./controllers/User/create')
const loginRouter = require('./controllers/User/login')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.originalUrl)
  response.location('./public')
})

app.use('/dogs', dogApi)

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
