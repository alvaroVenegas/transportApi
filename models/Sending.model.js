const mongoose = require('mongoose');

const sendingSchema = new mongoose.Schema(
    {
        date:  { type: Number },
        truck: { type: mongoose.Types.ObjectId, ref: 'trucks' },
        driver: { type: mongoose.Types.ObjectId, ref: 'users' },

        direction: {
            city: { type: mongoose.Types.ObjectId, ref: 'cities' },
            street: { type: String, required: true },
            number: { type: Number },
            other:  { type: String }
        },
        
        products: [
            {
                product: {type: mongoose.Types.ObjectId, ref: 'products'},
                amountProducts: { type: Number, required: true },
            }
        ],
        document: {type: String}
    },
    {
        timestamps: true
    }
);

const Sending = mongoose.model('sendings', sendingSchema);

module.exports = Sending;

