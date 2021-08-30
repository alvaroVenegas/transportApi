const mongoose = require('mongoose');
const Product = require('../models/Product.model');
const urlDb = require('../utils/urls')

const productsSeed = [
    {
        productName: 'Vigas H-20',
        stock: 200,
    },
    {
        productName: 'Vigas H-40',
        stock: 200,
    },
    {
        productName: 'Vigas H-60',
        stock: 200,
    },
    {
        productName: 'Vigas H-80',
        stock: 200,
    },
    {
        productName: 'Vigas H-100',
        stock: 200,
    },
    {
        productName: 'Placa 20mm',
        stock: 200,
    },
    {
        productName: 'Placa 40mm',
        stock: 200,
    },
    {
        productName: 'Placa 60mm',
        stock: 200,
    },
    {
        productName: 'Placa 80mm',
        stock: 200,
    },
    {
        productName: 'Placa 100mm',
        stock: 200,
    },
    {
        productName: 'Ferralla 1mm',
        stock: 200,
    },
    {
        productName: 'Ferralla 2mm',
        stock: 200,
    },
]

mongoose
    .connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Conectado a la base de datos desde el seed...");

        const allProducts = await Product.find();

        if (allProducts.length) {
            await Product.collection.drop();
            console.log("Colección eliminada!!");
        }
    })
    .then(async () => {
        await Product.insertMany(productsSeed);
        console.log("Semilla Plantada");
    })
    .catch((error) => {
        console.log("Error al plantar la semilla", error);
    })
    .finally(() => mongoose.disconnect());