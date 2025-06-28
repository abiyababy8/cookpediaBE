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
exports.addRecipeController = async (req, res) => {
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType } = req.body
    try {
        const existingRecipe = await recipes.findOne({ name: name })
        if (existingRecipe) {
            res.status(406).json(`${name} already exists in our collection`)
        }
        else {
            const newRecipe = new recipes({ name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.updateRecipeController = async (req, res) => {
    const { id } = req.params
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType } = req.body
    try {

        const updateRecipe = await recipes.findByIdAndUpdate({ _id: id },
            { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType },
            { new: true })
        await updateRecipe.save()
        res.status(201).json(updateRecipe)
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.removeRecipeController = async (req, res) => {
    const { id } = req.params
    try {
        const removeRecipes = await recipes.findByIdAndDelete({ _id: id })
        res.status(200).json(removeRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
}