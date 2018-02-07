const Food = require('../models/food')

const  show = function(req, res, next) {
  let id = req.params.id

  Food.find(id)
    .then(function(food) {
      if(!food){
        return res.sendStatus(404)
      } else {
        res.json(food)
      }
    })
}

const index = function(req, res, next) {
  Food.all()
    .then(function(foods) {
      if(!foods){
        return res.sendStatus(404)
      } else {
        res.json(foods)
      }
    })
}

const create = function(req, res, next) {
  let foodInfo = req.body.food
  Food.new(foodInfo)
    .then(function(food) {
      if(!food){
        return res.sendStatus(404)
      } else {
        res.json(food)
      }
    })
}

module.exports = { show, index, create }
