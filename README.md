# Quantified-Self Backend

**Summary**

This application is the backend for the Turing School Quantified Self project.  It is an API built in Node.js with the Express framework and the knex.js query library.   

## Installation

1) Clone this repo
`https://github.com/dionew1/express-qs.git`

2) Navigate to the root directory

3) Install dependences
`npm install`

4) Create databases
`psql`
`CREATE DATABASE quantified_self;`
`CREATE DATABASE quantified_self_test;`

5) Build the database
`knex migrate:latest`
`knex migrate:latest --env test`

6) Seed the database
`knex seed:run`

7) Start the server
`npm start`

Optionally, you can also include
`npm install webpack-dev-server --save-dev`, which will allow you to run the command `webpack-dev-server` that automatically reloads your files as they change, so that you don't have to manually rebuild every time you want to see your changes.

**API**

All endpoints are RESTful and all responses are in JSON format. Some important things to note:

The base url for API endpoints are: https://enigmatic-ravine-22013.herokuapp.com
Requests are case sensitive
Params for POST and PUT requests should be passed as x-www-form-urlencoded

The following endpoints are available. All endpoints will return the data as JSON.

## Food Endpoints:

GET /api/v1/foods - returns all foods currently in the database

GET /api/v1/foods/:id - returns the food object with the specific :id you've passed in or 404 if the food is not found

POST /api/v1/foods - allows creating a new food with the parameters:
{ food: { name: "Name of food here", calories: "Calories here"} }
If food is successfully created, the food item will be returned. If the food is not successfully created, a 400 status code will be returned. Both name and calories are required fields.

PATCH /api/v1/foods/:id - allows one to update an existing food with the parameters:
{ food: { name: "Name of food here", calories: "Calories here"} }
If food is successfully updated (name and calories are required fields), the food item will be returned. If the food is not successfully updated, a 400 status code will be returned.

DELETE /api/v1/foods/:id - will delete the food with the id passed in. If the food can't be found, a 404 will be returned.


## Meal Endpoints:

GET /api/v1/meals - returns all the meals in the database along with their associated foods

GET /api/v1/meals/:meal_id/foods - returns all the foods associated with the meal with an id specified by :meal_id or a 404 if the meal is not found

POST /api/v1/meals/:meal_id/foods/:id - adds the food with :id to the meal with :meal_id
This creates a new record in the MealFoods table to establish the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.

DELETE /api/v1/meals/:meal_id/foods/:id - removes the food with :id from the meal with :meal_id
This deletes the existing record in the MealFoods table that creates the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.


## Tests

Run tests with npm test
Run all tests with npm test test/*
Specify a test with npm test test/<test-name>.js

## Contributing

This project welcomes contributions from the community. Contributions are
accepted using GitHub pull requests; for more information, see
[GitHub documentation - Creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

For a good pull request, we ask you provide the following:

1. Include a clear description of your pull request in the description
   with the basic "what" and "why"s for the request.
2. The tests should pass as best as you can. GitHub will automatically run
   the tests as well, to act as a safety net.
3. The pull request should include tests for the change. A new feature should
   have tests for the new feature and bug fixes should include a test that fails
   without the corresponding code change and passes after they are applied.
   The command `npm run test-cov` will generate a `coverage/` folder that
   contains HTML pages of the code coverage, to better understand if everything
   you're adding is being tested.
4. If the pull request is a new feature, please include appropriate documentation
   in the `README.md` file as well.
5. To help ensure that your code is similar in style to the existing code,
   run the command `npm run lint` and fix any displayed issues.

## Contributors

Dione Wilson
Aurora Ziobrowski
