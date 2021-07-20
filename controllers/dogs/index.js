const express = require('express')
const dogApi = express.Router()
const axios = require('axios')

dogApi.get('/', (request, res) => {
  axios
    .get('https://dog.ceo/api/breeds/list/all')
    .then(response => res.status(201).send(response.data))
})

dogApi.get('/:breed', (request, res) => {
  const { breed } = request.params
  axios
    .get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => res.status(201).send(response.data))
    .catch(err => res.status(404).json({ message: err.message }))
})
module.exports = dogApi
