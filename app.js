const express = require('express')
const app = express()
const router = require('./routes/routes.js')
require('dotenv').config()
const connectDB = require('./config/mongoDB.js')()
const port = process.env.PORT || 3001
const cors = require('cors')

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())
app.use('/api', router)

app.listen(port, () => console.log(`App listening on port ${port}!`))
