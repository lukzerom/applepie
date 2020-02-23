const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    check,
    validationResult
} = require('express-validator');
const User = require('../models/User');
const Order = require('../models/Order');
const Recipes = require('../models/Recipe');

// @route GET api/orders
// @desc Get all user orders
// @access Private

router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find({
            order: req.user.id
        }).sort({
            date: -1
        });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route POST api/orders
// @desc Add order
// @access Private

router.post(
    '/',
    [
        auth,
        [
            check('mealNames', 'Please put some meals to order')
            .not()
            .isEmpty(),
            check('tableNumber', 'Please enter table number')
            .not()
            .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            mealNames,
            tableNumber,
            remarks
        } = req.body;

        try {
            const newOrder = new Order({
                mealNames,
                tableNumber,
                remarks,
                user: req.user.id
            });

            const order = await newOrder.save();
            res.json(order);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error ');
        }
    }
);

// @route PUT api/order/:id
// @desc Edit order
// @access Private

router.put('/:id', auth, async (req, res) => {
    const {
        mealNames,
        tableNumber,
        remarks
    } = req.body;

    const orderFields = {};

    if (mealNames) orderFields.mealNames = mealNames;
    if (tableNumber) orderFields.tableNumber = tableNumber;
    if (remarks) orderFields.remarks = remarks;

    try {
        let order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }

        //Make sure user owns contacts

        if (order.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'Not authorized'
            });
        }

        order = await Order.findByIdAndUpdate(
            req.params.id, {
                $set: orderFields
            }, {
                new: true
            }
        );
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error ');
    }
});

// @route DELETE api/order/:id
// @desc Delete order
// @access Private

router.delete('/:id', auth, async (req, res) => {
    try {
        let order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                msg: 'Order  not found'
            });
        }

        //Make sure user owns contacts

        if (order.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'Not authorized'
            });
        }
        await Order.findByIdAndRemove(req.params.id);

        res.json({
            msg: 'Order removed'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error ');
    }
});

module.exports = router;