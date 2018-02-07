const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

var Meal = {

  new: function(mealId, foodId) {
    return database('meal_foods').insert({'meal_id': mealId, 'food_id': foodId})
  },

  find: function(mealId) {
    let formattedResponse = {}
    return database('meal_foods')
      .join('meals', 'meal_foods.meal_id', '=', 'meals.id')
      .join('foods', 'meal_foods.food_id', '=', 'foods.id')
      .select('foods.id','foods.calories', 'foods.name')
      .select('meals.name as mealName', 'meals.id as mealId')
      .where('meals.id', mealId)
      .then(function(foods) {
        formattedResponse.id = foods[0].mealId
        formattedResponse.name = foods[0].mealName
        let foodList = []
        for (let i=0; i<foods.length; i++) {
          let foodInfo = {}
          foodInfo.id = foods[i].id
          foodInfo.name = foods[i].name
          foodInfo.calories = foods[i].calories
          foodList.push(foodInfo)
        }
        formattedResponse.foods = foodList
        return formattedResponse
      })
  },

  // all: function() {
  //   return database('meals').pluck('id')
  //     .then(function(ids) {
  //       ids.
  //     })
  // },



  remove: function(mealId, foodId) {
    return database('meal_foods').where('meal_id', mealId).andWhere('food_id', foodId).del()
  },

}


module.exports = Meal
