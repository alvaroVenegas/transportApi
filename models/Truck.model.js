const mongoose = require('mongoose');

const trucksSquema = new mongoose.Schema(
    {
        mark: { type: String, required: true },
        model: { type: String, required: true },
        code: {type: Number},
        plate: { type: String, required: true},
        dateITV: {type: Number },
    },    
    {
        timestamps: true,
    }
);

const Truck = mongoose.model('trucks',trucksSquema);

module.exports = Truck;