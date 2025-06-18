const recipes = require('../models/recipeModel')
exports.getAllRecipesController = async (req, res) => {
    console.log("Inside getAllRecipesController!")
    try {
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }
    catch (err) {
        res.status(401).json(err)
    }
}
//get any specific recipe details
exports.getRecipeController = async (req, res) => {
    console.log("Inside getRecipeController")
    const { id } = req.params
    console.log(id)
    try {
        const recipe = await recipes.findById({ _id: id })
        res.status(200).json(recipe)
    } catch (error) {
        res.status(401).json(error)
    }
}
//get related recipes
exports.relatedRecipeController = async (req, res) => {
    console.log("Inside relatedRecipeController")
    const cuisineType = req.query.cuisine
    console.log(cuisineType)
    try {
        const relatedRecipes = await recipes.find({ cuisine: cuisineType })
        res.status(200).json(relatedRecipes)

    } catch (error) {
        res.status(401).json(error)
    }
}