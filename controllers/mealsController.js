const Meal = require('../models/meal')

const  show = function(req, res, next) {
  let mealId = req.params.meal_id

  Meal.find(mealId)
    .then(function(meal) {
      if(!meal){
        return res.sendStatus(404)
      } else {
        res.json(meal)
      }
    })
}

const index = function(req, res, next) {
  Meal.all()
    .then(function(meals) {
      if(!meals){
        return res.sendStatus(404)
      } else {
        res.json(meals)
      }
    })
}

const remove = function(req, res, next) {
  let mealId = req.params.meal_id
  let foodId = req.params.id

  Meal.remove(mealId, foodId)
  .then(function(meal) {
    if(!meal){
      return res.sendStatus(404)
    } else {
      res.sendStatus(202)
    }
  })
}

const create = function(req, res, next) {
  let mealId = req.params.meal_id
  let foodId = req.params.id
  Meal.new(mealId, foodId)
    .then(function(meal) {
      if(!meal){
        return res.sendStatus(404)
      } else {
        return res.sendStatus(201)
      }
    })
}


module.exports = { create, remove, show, index }
