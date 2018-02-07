const environment = process.env.NODE_ENV || 'development'
const express = require('express');
const router = express.Router();
const configuration = require('../../knexfile')[environment]
const foodsController = require('../../controllers/foodsController')

router.get('/', foodsController.index)
// router.post('/', foodsController.create)
router.get('/:id', foodsController.show)
router.delete('/:id', foodsController.remove)

module.exports = router
