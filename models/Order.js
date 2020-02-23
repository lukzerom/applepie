const mongoose = require('mongoose');

const OrderShema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    mealNames: {
        type: Array,
        required: true
    },
    tableNumber: {
        type: String,
        required: true

    },
    remarks: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('order', OrderShema)