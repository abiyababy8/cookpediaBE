const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const router = new express.Router()
// get all recipes
router.get('/all-recipes', recipeController.getAllRecipesController)
// add testimony
router.post('/add-testimony', testimonyController.addTestimonyController)
// add user
router.post('/register', userController.addUserController)
// login user
router.post('/login',userController.loginUserController)
module.exports = router;