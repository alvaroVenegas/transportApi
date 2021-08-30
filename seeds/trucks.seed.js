
const mongoose = require("mongoose");
const Truck = require('../models/Truck.model')
const urlDb = require('../utils/urls')

const truckssSeed = [
    {
        mark: "Volvo",
        model: "FH-12",
        code: 1,
        plate: '1111-AAA',
        dateITV: 2021225
    },
    {
        mark: "Mercedes",
        model: "Atos",
        code: 2,
        plate: '2222-BBB',
        dateITV: 2021225
    },
    {
        mark: "Volvo",
        model: "FH-12",
        code: 3,
        plate: '1112-AAA',
        dateITV: 2021225
    },
    {
        mark: "Volvo",
        model: "FH-12",
        code: 4,
        plate: '1113-AAA',
        dateITV: 2021225
    },
    {
        mark: "Volvo",
        model: "FH-12",
        code: 5,
        plate: '1114-AAA',
        dateITV: 2021225
    },
    {
        mark: "Renault",
        model: "Super-2",
        code: 6,
        plate: '3453-CDK',
        dateITV: 2021225
    },
    {
        mark: "Renault",
        model: "Master",
        code: 7,
        plate: '3587-DGF',
        dateITV: 2021225
    },
    {
        mark: "MAN",
        model: "LSFD",
        code:  8,
        plate: '4566-ABD',
        dateITV: 2021225
    },
    {
        mark: "Mercedes",
        model: "Mega",
        code: 9,
        plate: '9383-JDL',
        dateITV: 2021225
    },
    {
        mark: "Skania",
        model: "Rotwailer",
        code: 10,
        plate: '3738-LDF',
        dateITV: 2021225
    },

];

mongoose
    .connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Conectado a la base de datos desde el seed...");

        const allTrucks = await Truck.find();

        if (allTrucks.length) {
            await Truck.collection.drop();
            console.log("Colección eliminada!!");
        }
    })
    .then(async () => {
        await Truck.insertMany(truckssSeed);
        console.log("Semilla Plantada");
    })
    .catch((error) => {
        console.log("Error al plantar la semilla", error);
    })
    .finally(() => mongoose.disconnect());
