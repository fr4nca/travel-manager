const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

// @route   GET  /api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', AuthController.getLoggedUser)

// @route   POST  /api/auth
// @desc    Login user and get token
// @access  Public
router.post('/', AuthController.loginUser)

module.exports = router
