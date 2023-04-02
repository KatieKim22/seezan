const { Schema } = require('mongoose');

const categorySchema = new Schema({
    car: {
        type: String,
    },
    homewear: {
        type: String,
    },
    rent: {
        type: String,
    }

})

module.exports = categorySchema;