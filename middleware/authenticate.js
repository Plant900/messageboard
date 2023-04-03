const User = require('../models/User.js')

const authenticate = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization

    if (!bearer) {
      return next()
    }

    const sessionID = bearer.substring(7, bearer.length)
    console.log('ID', sessionID)

    const user = await User.findOne({ sessionID })
    if (!user) {
      req.isAuthenticated = false
    } else {
      req.isAuthenticated = true
      req.user = user
    }
    next()
  } catch (error) {
    console.error(error)
    res.json({ error: 'Internal server error' })
  }
}

module.exports = authenticate
