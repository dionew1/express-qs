const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

var Meal = {
  // find: function(id) {
  //   return database('meals').where('id', id)
  //   .then(function(meal) {
  //     return meal[0]
  //   })
  // },

  // all: function() {
  //   return database('meals').pluck('id')
  //     .then(function(ids) {
  //       ids.
  //     })
  // },



  // remove: function(id) {
  //   return database('meals').where('id', id).del()
  // },

// Issue with mealData being undefined?!?!? Why?
  // new: function(mealData) {
  //   return database('meals').insert(mealData)
  //
  // }


}

module.exports = Meal
