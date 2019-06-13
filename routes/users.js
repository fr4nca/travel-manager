const express = require('express')
const router = express.Router()

const UsersController = require('../controllers/UsersController')

const { check } = require('express-validator/check')

// @route   POST  /api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please add a name')
      .not()
      .isEmpty(),
    check('email', 'Please, enter a valid email').isEmail(),
    check(
      'password',
      'Please, enter a password with at least 6 characters.'
    ).isLength({ min: 6 })
  ],
  UsersController.registerUser
)

module.exports = router
