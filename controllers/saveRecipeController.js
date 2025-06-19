const savedRecipes = require('../models/saveRecipeModel')

exports.addToSavedRecipeController = async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    const { name, image } = req.body
    try {
        const existingRecipe = await savedRecipes.findOne({ recipeId: id, userId: userId })
        if (existingRecipe) {
            res.status(401).json('Selected recipe already exists in your collection! ')
        }
        else {
            const newRecipe = new savedRecipes({
                recipeId: id, name, image, userId
            })
            await newRecipe.save()
            res.status(201).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.getUserSavedRecipeController = async (req, res) => {
    console.log("inside getUserSavedRecipeController")
    const userId = req.userId
    try {
        const usersaveRecipes = await savedRecipes.find({ userId: userId })
        res.status(201).json(usersaveRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.removeSaveRecipeController = async (req, res) => {
    const { id } = req.params
    try {
        const removedRecipe = await savedRecipes.findByIdAndDelete({ _id: id })
        res.status(200).json(removedRecipe)
    } catch (error) {
        res.status(401).json(error)
    }
}