const express = require('express')
const path = require('path')
const app = express()

app.use('/static', express.static('app/assets/dist'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('app/templates/index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})