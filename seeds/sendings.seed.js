
const mongoose = require("mongoose");
const Sending = require('../models/sending.model')
const urlDb = require('../utils/urls')

mongoose
    .connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Conectado a la base de datos desde el seed...");

        const allSendings = await Sending.find();

        if (allSendings.length) {
            await Sending.collection.drop();
            console.log("Colección eliminada!!");
        }
    })
    .then(async () => {
        await Sending.insertMany(sendingsSeed);
        console.log("Semilla Plantada");
    })
    .catch((error) => {
        console.log("Error al plantar la semilla", error);
    })
    .finally(() => mongoose.disconnect());


const sendingsSeed = [
    {
        date: null ,
        truck: null,
        driver: null,

        direction: {
            //city: { type: mongoose.Types.ObjectId, ref: 'city' },
            city:  'Madrid',
            street: 'C/ Sol',
            number: 12,
            other:  'Local'
        },
        products: [
            {
                product: {type: mongoose.Types.ObjectId, ref: 'product'},
                amountProducts: { type: Number, required: true },
            }
        ],
        products: null,
        amountProducts: 5,
         
    }
]
        