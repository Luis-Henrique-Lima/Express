const express = require('express')
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
  res.send('inscreva se')
})

app.get('/tarefas', (req, res) => {
    res.send('Vamos Trabalhar')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})