const express = require('express')
const router = express.Router()

const UsersController = require('../controllers/UsersController')

// @route   POST  /api/users
// @desc    Register a user
// @access  Public
router.post('/', UsersController.registerUser)

module.exports = router
