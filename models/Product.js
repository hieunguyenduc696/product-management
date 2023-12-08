const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
}, { timestamps: true });

module.exports = mongoose.model('product', ProductSchema);
