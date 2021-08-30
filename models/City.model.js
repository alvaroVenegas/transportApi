const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
    {
        nombre: {type:String }
    }
);

const City = mongoose.model('cities',citySchema);

module.exports = City;