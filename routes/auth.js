const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

const { check } = require('express-validator/check')
const auth = require('../middleware/auth')

// @route   GET  /api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, AuthController.getLoggedUser)

// @route   POST  /api/auth
// @desc    Login user and get token
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please, enter a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  AuthController.loginUser
)

module.exports = router
