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

const remove = function(req, res, next) {
  let id = req.params.id

  Food.remove(id)
  .then(function(food) {
    if(!food){
      return res.sendStatus(404)
    } else {
      res.sendStatus(202)
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

const update = function(req, res, next) {
  let id = req.params.id
  let foodInfo = req.body.food
  Food.edit(id, foodInfo)
    .then(function(food) {
      if(!food){
        return res.sendStatus(404)
      } else {
        res.json(food[0])
      }
    })
}


module.exports = { show, index, remove, create, update}
