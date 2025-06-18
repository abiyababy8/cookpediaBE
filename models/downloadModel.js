const mongoose = require('mongoose')
const downloadRecipeSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        require: true
    },
    recipeName: {
        type: String,
        require: true
    },
    recipeCuisine: {
        type: String,
        require: true
    },
    count: {
        type: Number,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    recipeImage: {
        type: String,
        require: true
    },
})
const downloadRecipes = mongoose.model('downloadRecipes', downloadRecipeSchema)
module.exports = downloadRecipes