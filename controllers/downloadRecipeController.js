const downloadRecipes = require('../models/downloadModel')
exports.addToDownloadRecipeController = async (req, res) => {
    const { id } = req.params
    const userId = req.payload
    const { name, image, cuisine } = req.body
    console.log(id, userId, name, image, cuisine)
    try {
        const existingRecipe = await downloadRecipes.findOne({ recipeId: id })
        if (existingRecipe) {
            // we only need to update the count by +1
            existingRecipe.count += 1
            await existingRecipe.save()
            res.status(201).json(existingRecipe)
        }
        else {
            //insert new document with count = 1
            const newRecipe = new downloadRecipes({
                recipeId: id, recipeName: name, recipeCuisine: cuisine, count: 1, userId: userId, recipeImage: image
            })
            await newRecipe.save()
            res.status(201).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}