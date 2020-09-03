const express = require('express')
const app = express()
const http = require('http').createServer(app)
const { readDb } = require('./db')

// const server = http.createServer(app)
const PORT = 8000

app.post('/', (req, res) => {
  readDb()
    .then(data => {
      console.log(data)
      res.send(JSON.stringify(data))
    })
})

// app.post('/test', req => {
//   console.log(req)
// })
// app.get('/test', (req, res) => {
//   console.log(req)
//   res.send(console.log('hey'))
// })

// app.listen(PORT, console.log('listening on port', PORT))
http.listen(PORT)
console.log('test')
