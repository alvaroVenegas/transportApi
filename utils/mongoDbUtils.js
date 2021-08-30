const mongoose = require('mongoose');
const mongoDbUrl = require('./urls');
require('dotenv').config()
const userDb = process.env.MONGODBURL || 'mongodb://localhost:27017/transportsApi'

/*const connect = () => {
    mongoose
        .connect( userDb, {useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false}) 
        .then (res => {
            console.log('Conectado con la base de datos')
        })
        .catch(error => {
            console.log('Error al conectar con la base de datos')
        });
};*/

const connect = async () => {
    try {
        const db = await mongoose.connect(userDb, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});
        const { name, host } = db.connection;
        console.log(`Conectado correctamente a la db ${name} en ${host}`);
    }catch(error) {
        console.log('Error al conectar con la base de datos')
    };
}

module.exports = {
    connect,
    userDb
};