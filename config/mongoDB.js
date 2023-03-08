const mongoose = require('mongoose')

let connectDB = () => {
  mongoose
    .connect(
      'mongodb+srv://User1:User1@members-only.cdb0j6c.mongodb.net/data?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('MongoDB connected')
    })
    .catch((err) => {
      console.error('MongoDB connection error: ', err)
    })
}

module.exports = connectDB
