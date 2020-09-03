const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').createServer(app)
const { readDb, addQuest, addObjectives } = require('./db')

// const server = http.createServer(app)
const PORT = 8000

app.use(bodyParser())
app.post('/', (req, res) => {
  readDb()
    .then(data => {
      // console.log(data)
      res.send(JSON.stringify(data))
    })
})

app.post('/add-quest', (req, res) => {
  addQuest(req.body.quest)
    .then(result => {
      console.log(result)
      addObjectives(result.id, req.body.quest.objectives)
    })
  // console.log(req.body)
  // req.body.quest.objectives.map(obj => console.log(obj))
})

http.listen(PORT)
