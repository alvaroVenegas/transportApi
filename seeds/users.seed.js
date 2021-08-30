
const mongoose = require("mongoose");
const User = require('../models/User.model')
const urlDb = require('../utils/urls')

const usersSeed = [
    {
        userName: "Alvaro",
        lastName: 'Venegas',
        rol: "admin",
        email: "alvaro@transport.com",
        password: "1234Abcd"
    }/*,
    {
        userName: "Sara",
        lastName: 'Peñasco',
        rol: "driver",
        email: "sara@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Juan",
        lastName: 'Lopez',
        rol: "driver",
        email: "juan@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Antonio",
        lastName: 'Rojo',
        rol: "driver",
        email: "antonio@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Carlos",
        lastName: 'Jimenez',
        rol: "driver",
        email: "carlos@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Veronica",
        lastName: 'Muñoz',
        rol: "driver",
        email: "veronica@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Miriam",
        lastName: 'Muñoz',
        rol: "driver",
        email: "miriam@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Pedro",
        lastName: 'Jimenez',
        rol: "driver",
        email: "pedro@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "John",
        lastName: 'Paez',
        rol: "driver",
        email: "john@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Blue",
        lastName: 'Venegas',
        rol: "office",
        email: "blue@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "John",
        lastName: 'McClain',
        rol: "office",
        email: "johnM@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "John",
        lastName: 'Rambo',
        rol: "office",
        email: "JohnR@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Ricardo",
        lastName: 'Antolin',
        rol: "office",
        email: "ricardo@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Gonzalo",
        lastName: 'Castaño',
        rol: "office",
        email: "gonzalo@transport.com",
        password: "1234Abcd"
    },
    {
        userName: "Rocio",
        lastName: 'Fernandez',
        rol: "office",
        email: "rocio@transport.com",
        password: "1234Abcd"
    },*/

];

mongoose
    .connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Conectado a la base de datos desde el seed...");

        const allUsers = await User.find();

        if (allUsers.length) {
            await User.collection.drop();
            console.log("Colección eliminada!!");
        }
    })
    .then(async () => {
        await User.insertMany(usersSeed);
        console.log("Semilla Plantada");
    })
    .catch((error) => {
        console.log("Error al plantar la semilla", error);
    })
    .finally(() => mongoose.disconnect());
