const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

var Meal = {

  new: function(mealId, foodId) {
    return database('meal_foods').insert({'meal_id': mealId, 'food_id': foodId})
  },

  find: function(mealId) {
    return getMeal(mealId)
  },

  all: function() {
    return database('meals').pluck('id')
            .then(function(ids) {
              getMealList(ids)
            })
            .then(function(response)  {
              // console.log(response)
            })
  },

  remove: function(mealId, foodId) {
    return database('meal_foods').where('meal_id', mealId).andWhere('food_id', foodId).del()
  },
}

const getMealList = (mealIds) =>  {
  let mealPromises = []
  for (let i=0; i < mealIds.length; i++) {
    getMeal(mealIds[i])
    .then(function(response)  {
      mealPromises.push(response)
      // console.log(mealPromises)
    })
  }
  Promise.all(mealPromises)
  .then(function(response)  {
    console.log(response)
  })
  // console.log(mealList)
}

const getMeal = (mealId) => {
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
}


module.exports = Meal
