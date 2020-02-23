const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {
    check,
    validationResult
} = require('express-validator');
const User = require('../models/User')
const Order = require('../models/Order')
const Recipe = require('../models/Recipe')


// @route GET api/recipes
// @desc Get all user recipes
// @access Private

router.get('/', auth, async (req, res) => {


    try {
        const recipes = await Recipe.find({
            user: req.user.id
        }).sort({
            mealName: -1
        });
        res.json(recipes)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
});



// @route POST api/recipes
// @desc Add recipe
// @access Private

router.post('/', [
    auth,
    [
        check('mealName', 'Please put meal name').not().isEmpty(),
        check('price', 'Please put a price as number').isNumeric()

    ],
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        mealName,
        price,
        recipeText,
        belongsTo
    } = req.body;

    try {
        const newRecipe = new Recipe({
            mealName,
            price,
            recipeText,
            belongsTo,
            user: req.user.id
        })


        const recipe = await newRecipe.save();
        res.json(recipe)
    } catch (err) {

        console.error(err.message)
        res.status(500).send("Server error ")

    }

});


// @route PUT api/recipe:id
// @desc Update recipe
// @access Private

router.put('/:id', auth, async (req, res) => {

    const {
        mealName,
        price,
        recipeText,
        belongsTo
    } = req.body;


    const recipeFields = {}

    if (mealName) recipeFields.mealName = mealName;
    if (price) recipeFields.price = price;
    if (recipeText) recipeFields.recipeText = recipeText;
    if (belongsTo) recipeFields.belongsTo = belongsTo;

    try {

        let recipe = await Recipe.findById(req.params.id)

        if (!recipe) {
            return res.status(404).json({
                msg: "Recipe not found"
            })
        }

        //Make sure user owns recipes

        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({
                nsg: "Not authorized"
            })
        }

        recipe = await Recipe.findByIdAndUpdate(req.params.id, {
            $set: recipeFields
        }, {
            new: true
        });
        res.json(recipe)

    } catch (err) {

        console.error(err.message)
        res.status(500).send("Server error ")
    }
});


// @route DELETE api/recipes/:id
// @desc Delete recipe
// @access Private

router.delete('/:id', auth, async (req, res) => {


    try {

        let recipe = await Recipe.findById(req.params.id)

        if (!recipe) {
            return res.status(404).json({
                msg: "Recipe not found"
            })
        }

        //Make sure user owns recipe

        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: "Not authorized"
            })
        }
        await Recipe.findByIdAndRemove(req.params.id)

        res.json({
            msg: "Recipe removed"
        })

    } catch (err) {

        console.error(err.message)
        res.status(500).send("Server error ")
    }
});




module.exports = router;