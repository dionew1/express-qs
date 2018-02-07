const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

var Food = {
  find: function(id) {
    return database('foods').where('id', id)
    .then(function(food) {
      return food[0]
    })
  },

  all: function() {
    return database('foods').select('*')
      .then(function(foods) {
        return foods
      })
  },

  remove: function(id) {
    return database('foods').where('id', id).del()
  },

  new: function(foodData) {
    return database('foods').insert(foodData, ['id', 'name', 'calories'])
    .then(function(food) {
      return food
    })
  },

  edit: function(id, foodData)  {
    return database('foods').where('id', id).update(foodData, ['id', 'name', 'calories'])
    .then(function(food) {
      return food
    })
  }

}

module.exports = Food
