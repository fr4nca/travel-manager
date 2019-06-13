const User = require('../models/User')
const { validationResult } = require('express-validator/check')

module.exports = {
  async registerUser(req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.send('ok')
  }
}
