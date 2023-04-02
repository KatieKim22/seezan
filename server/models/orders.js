const { Schema } = require('mongoose');

const ordersSchema = new Schema({
    status: {
        type: String
    },
    products: {
        type: String
    },
    amount: {
        type: Number
    },
    address: {
        type: String,
    },
    userInfo: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
})

module.exports = ordersSchema;