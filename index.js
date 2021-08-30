const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const mongoDbUtils = require('./utils/mongoDbUtils')
const passport = require('passport')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const userRoutes = require('./routes/user.routes')
require('./authentication')
const loginRoutes = require('./routes/login.routes')
const mongoDbUrl = require('./utils/urls');
const path = require('path')
const indexRoutes = require('./routes/index.routes')
const sendingRoutes = require('./routes/sending.routes')
const {isAuth} = require('./middlewares/auth.middleware')
const driverRoutes = require('./routes/driver.routes')
const productRoutes = require('./routes/product.routes')
const trucksRoutes = require('./routes/trucks.routes')

const PORT = process.env.PORT || 3000;
const app = express();

mongoDbUtils.connect()

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
    },
    store: MongoStore.create({ mongoUrl: mongoDbUtils.userDb }),
}));

//Pasport y session
app.use(passport.initialize()); 
app.use(passport.session());
//json en el body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Expone la carpeta
app.use(express.static(path.join(__dirname, 'public')));
//vistas
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');

app.use('/login', loginRoutes)
app.use('/', indexRoutes)
app.use(isAuth)
app.use('/user', userRoutes)
app.use('/sending', sendingRoutes)
app.use('/drivers', driverRoutes)
app.use('/products', productRoutes)
app.use('/trucks', trucksRoutes)

app.use('*' , (req , res) => {
    const error = new Error("Ruta desconocida")
    error.status(404)
    return res.status(404).json(error)
})

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
})

app.disable('x-powered-by')
app.listen(PORT, () => {
    console.log(`Esperando peticiones en el puerto: ${PORT}`)
});
