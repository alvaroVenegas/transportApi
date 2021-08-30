const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const validations = require('../utils/validations')

const registerStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback:true
    },
    async (req, email, password, done) => {
        try {
            const userExist = await User.findOne({email:email})
            if(userExist){
                const error = new Error('El usuario ya existe')
                return done(error, null)
            }
            if (!validations.validationEmail(email)){
                const error = new Error('El email introducido no es válido')
                return done (error, null)
            }
            if(!validations.validationPassword(password)){
                const error = new Error('El password introducido no es válido')
                return done (error, null)
            }
            const saltRounds = 15;
            const passwordHas = await bcrypt.hash(password, saltRounds)
            const newUser = new User(
                {
                    userName : req.body.userName,
                    lastName : req.body.lastName,
                    email : email,
                    password : passwordHas,
                    rol : req.body.rol
                }
            )
            const userMG = await newUser.save();
            userMG.password = null;
            return done (null, userMG)
        }catch(error){
            return done(error, null)
        }
    }    
)
module.exports = registerStrategy