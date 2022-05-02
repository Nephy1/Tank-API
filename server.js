const express = require('express')
const tanks = require('./data/models/tanks')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
let PORT = process.env.PORT || 3000
app.use(express.static('public'))


mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
)
  .then(function () {
    console.log('Connected to DB...')
  })
  .catch(function (err) {
    console.log(err)
  })

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});