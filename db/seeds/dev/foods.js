exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods CASCADE ')
  .then(function() {
    return Promise.all([
      knex('foods').insert([{ name: "Pizza", calories:  300 },
      { name: "Chicken", calories:  360 },
      { name: "Cereal", calories:  230 },
      { name: "Corn", calories:  220 },
      { name: "Yogurt", calories:  130 },
      { name: "Apple", calories:  100 },
      { name: "Sandwich", calories:  500 }
      ])
    ])
  })
}
