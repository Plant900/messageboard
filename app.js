const express = require('express')
const app = express()
const router = require('./routes/routes.js')
require('dotenv').config()
const connectDB = require('./config/mongoDB.js')()

app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log('Server listening')
})
