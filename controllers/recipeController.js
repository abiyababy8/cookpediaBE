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