const http = require('http')
const app = require('./app')
const cors = require('cors')

app.use(
  cors({
    origin: '*',
  })
)

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
