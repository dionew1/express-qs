exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meal_foods RESTART IDENTITY')
  .then(function() {
    let info = [{ meal_id: 1 , food_id: 1 }, { meal_id: 2 , food_id: 2 },
                { meal_id: 3 , food_id: 3 }, { meal_id: 4 , food_id: 4 }]
    return Promise.all(
      knex('meal_foods').insert(info)
    )
  })
}
