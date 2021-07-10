const express = require('express')
const app = express()
const axios = require('axios')
const PORT = 3001
app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.originalUrl)
  response.location('./public')
})

app.get('/dogs',(request,res)=>{
  axios.get('https://dog.ceo/api/breeds/list/all')
  .then(response => res.status(201).send(response.data))
})

app.get('/dogs/:breed',(request,res)=>{
  const { breed } = request.params
  axios.get(`https://dog.ceo/api/breed/${breed}/images`)
  .then(response => res.status(201).send(response.data))
  .catch(err => res.status(404).json({"message":err.message}) )
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
