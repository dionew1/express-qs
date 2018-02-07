const Meal = require('../models/meal')

// const  show = function(req, res, next) {
//   let id = req.params.id
//
//   Meal.find(id)
//     .then(function(meal) {
//       if(!meal){
//         return res.sendStatus(404)
//       } else {
//         res.json(meal)
//       }
//     })
// }

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

// const remove = function(req, res, next) {
//   let id = req.params.id
//
//   Meal.remove(id)
//   .then(function(meal) {
//     if(!meal){
//       return res.sendStatus(404)
//     } else {
//       res.sendStatus(202)
//     }
//   })
// }

// const create = function(req, res, next) {
//   let mealInfo = req.body.meal
//   Food.new(mealInfo)
//     .then(function(meal) {
//       if(!meal){
//         return res.sendStatus(404)
//       } else {
//         res.json(meal)
//       }
//     })


module.exports = { index }
