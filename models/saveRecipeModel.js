const mongoose = require('mongoose')
const saveRecipeSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
})
const savedRecipes = mongoose.model('savedRecipes', saveRecipeSchema)
module.exports = savedRecipes