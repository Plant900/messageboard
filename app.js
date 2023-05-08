const express = require('express')
const app = express()
const router = require('./routes/routes.js')
require('dotenv').config()
const connectDB = require('./config/mongoDB.js')()
const cors = require('cors')

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())
app.use('/api', router)

module.exports = app
