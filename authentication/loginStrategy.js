const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User.model');

const loginStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req, email, password, done) => {
        try{
            let userExist = await User.findOne({email})
            if(!userExist){
                const error = new Error('El usuario no existe')
                error.status = 401
                return done(error, null)
            }
            const comparePassword = await bcrypt.compare(password, userExist.password)
            if(!comparePassword){
                const error = new Error('Contraseña incorrecta')
                error.status = 400
                return done(error, null)
            }
            userExist.password = null;
            return done(null,userExist)
        }catch(error){
            return done(error, null);
        }
    }
)

module.exports = loginStrategy;
