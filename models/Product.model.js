const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        stock: { type: Number, required: true },
        img: {type: String}
    },
    {
        timestamps: true
    }
);
const Product = mongoose.model("products", productSchema);

module.exports = Product;
