const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const downloadRecipeController = require('../controllers/downloadRecipeController')
const saveRecipeController = require('../controllers/saveRecipeController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router = new express.Router()
// get all recipes
router.get('/all-recipes', recipeController.getAllRecipesController)
// add testimony
router.post('/add-testimony', testimonyController.addTestimonyController)
// add user
router.post('/register', userController.addUserController)
// login user
router.post('/login', userController.loginUserController)
// get recipe
router.get('/recipe/:id/view', jwtMiddleware, recipeController.getRecipeController)
//get related recipes
router.get('/related-recipe', jwtMiddleware, recipeController.relatedRecipeController)
// add to downloaded recipes
router.post('/recipe/:id/download', jwtMiddleware, downloadRecipeController.addToDownloadRecipeController)
// save recipe
router.post('/recipe/:id/save', jwtMiddleware, saveRecipeController.addToSavedRecipeController)
// get user saved recipes
router.get('/get-saved-recipes', jwtMiddleware, saveRecipeController.getUserSavedRecipeController)
//delete saved recipe
router.delete('/recipe/:id/remove', jwtMiddleware, saveRecipeController.removeSaveRecipeController)
//upload profile pic
router.post('/user/edit', jwtMiddleware, userController.editUserController)
// get all users
router.get('/all-users', jwtMiddleware, userController.getAllUsersController)
//get all download list
router.get('/all-downloads',jwtMiddleware,downloadRecipeController.getAllDownloadListController)
module.exports = router;