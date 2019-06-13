const express = require('express')
const router = express.Router()

const TravelsController = require('../controllers/TravelsController')

// @route   GET  /api/travels
// @desc    Get all user travels
// @access  Private
router.get('/', TravelsController.getAllTravels)

// @route   POST  /api/travels
// @desc    Add a travel
// @access  Private
router.post('/', TravelsController.createTravel)

// @route   PUT  /api/travels/:id
// @desc    Update a travel
// @access  Private
router.put('/:id', TravelsController.updateTravel)

// @route   DELETE  /api/travels/:id
// @desc    Delete travel
// @access  Private
router.delete('/:id', TravelsController.deleteTravel)

module.exports = router
