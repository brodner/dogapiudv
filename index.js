const express = require('express')
const app = express()
const PORT = 3001
app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.originalUrl)
  response.location('./public')
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
