const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const { validationResult } = require('express-validator/check')

const User = require('../models/User')

module.exports = {
  async getLoggedUser(req, res, next) {
    try {
      const user = await User.findById(req.user.id).select('-password')
      res.json(user)
    } catch (e) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  },
  async loginUser(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (!user) return res.status(400).json({ msg: 'Invalid credentials' })

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('jwt_secret'),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (e) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
}
