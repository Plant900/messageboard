const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate.js')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const User = require('../models/User.js')
const Message = require('../models/Message.js')

router.get('/', (req, res) => {
  res.send('To implement: get all messages')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('Received POST request')
})

router.get('/login', (req, res) => {
  res.send('login page')
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const sessionID = crypto.randomBytes(8).toString('hex')
    const user = await User.findOneAndUpdate(
      { email },
      { sessionID },
      { new: true }
    )
    if (!user) {
      return res.send('No user with given email exists')
    } else {
      console.log('User has been logged in')
      return res.send({ message: 'User logged in', user })
    }
  } catch (error) {
    console.error(error)
    res.send({ message: 'Internal server error' })
  }
})

router.get('/signup', (req, res) => {
  res.send('login page')
})

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body

    const exists = await User.findOne({ email })
    if (exists) {
      return res.status(409).send({ message: 'Username taken' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const sessionID = crypto.randomBytes(8).toString('hex')
    const newUser = new User({
      email,
      password: hashedPassword,
      sessionID,
    })

    await newUser.save()
    console.log('New user has been created.')
    res.send({ message: 'User created', user: newUser })
  } catch (error) {
    console.error(error)
    res.send({ message: 'Internal server error' })
  }
})

router.get('/protected', authenticate, (req, res) => {
  if (!req.isAuthenticated) {
    res.send('Not authenticated')
  } else if (req.isAuthenticated) {
    res.send('Authenticated')
  }
})

router.get('/messages', authenticate, async (req, res) => {
  if (!req.isAuthenticated) {
    const messages = await Message.find({ user: { $exists: false } })
    return res.json(messages.reverse())
  } else if (req.isAuthenticated) {
    const messages = await Message.find()
    return res.json(messages.reverse())
  }
})

router.post('/newMessage', authenticate, async (req, res) => {
  const { text } = req.body
  if (!text) {
    return res.send('Text is required.')
  }

  if (!req.isAuthenticated) {
    const message = new Message({ text })
    await message.save()
    return res.json(message)
  } else if (req.isAuthenticated) {
    const message = new Message({ text, user: req.user._id })
    await message.save()
    return res.json(message)
  }
})

module.exports = router
