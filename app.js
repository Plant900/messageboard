const express = require('express')
const app = express()
const router = require('./routes/routes.js')
require('dotenv').config()
const connectDB = require('./config/mongoDB.js')()

app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log('Server listening on port 3000!')
})
