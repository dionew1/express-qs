const environment = process.env.NODE_ENV || 'development'
const express = require('express');
const router = express.Router();
const configuration = require('../../knexfile')[environment]
const foodsController = require('../../controllers/foodsController')
const mealsController = require('../../controllers/mealsController')

// router.get('/', mealsController.index)
router.post('/:meal_id/foods/:id', mealsController.create)
router.get('/:meal_id/foods', mealsController.show)
router.delete('/:meal_id/foods/:id', mealsController.remove)

module.exports = router
