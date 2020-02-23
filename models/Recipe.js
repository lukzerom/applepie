const mongoose = require('mongoose');

const RecipesShema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    mealName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    recipeText: {
        type: String,
    },
    belongsTo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('recipe', RecipesShema)