// add a movie to the  list
// update movie infor
// remove movie
// see only related movies

const express = require('express')

const server = express()

let actors = [
  {
    id: 1,
    name: 'Mimi Rogers',
    movies: 1
  }
]
let movies = [
  {
    id: 1,
    name: 'The Lord of Rainbows',
    released: true,
    rating: 5
  },
  {
    id: 2,
    name: 'The Lords',
    released: true,
    rating: 3
  },
  {
    id: 3,
    name: 'Things fall Apat',
    released: true,
    rating: 3
  },
  {
    id: 4,
    name: 'The Lord of Rainbows',
    released: false,
    rating: 1
  }
]


server.get('/', (req, res) => {
  res.status(200).json({ api: 'is up and running' })
})

server.get('/api/movies', (req, res) => {
  res.status(200).json(movies)
})
server.post('/api/movies', (req, res) => {
  const movie = req.body // grab data from body
  movies.push(movie) // add to store
  res.status(201).json(movies) // return data
})


module.exports = server
