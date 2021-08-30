const User = require('../models/User.model');
const passport = require('passport');
const bcrypt = require('bcrypt')

const getRegister = (req, res, next) => {
    try {
        return res.render('register');
        //return res.status(200).json(users)

    } catch (error) {
        return next(error)
    }
};

const getUser = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch {
        return res.status(500).json(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const users = await User.findById(id);
        return res.status(200).json(users);
    } catch (error) {
        return next(error)
    }
};

const postUser = (req, res, next) => {
    const { email, userName, lastName, password, rol } = req.body;

    if (!email || !userName || !lastName || !password) {
        const error = 'Completa todos los campos'
        //return res.render('registerview', { error });
        return next(error)
    }
    const done = (error, user) => {

        if (error) return next(error);
        /*Si quisiera que el usuario registrado se logueara 
        automaticamente despues de registrar

        //console.log('entrando a reques.login', user)
        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }
            //return res.redirect('/user/register');
        });*/
        return res.status(201).json(user)
    };
    passport.authenticate('register', done)(req);
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const userDeleted = await User.findByIdAndDelete(id)
        return res.status(200).json(userDeleted);
    } catch (error) {
        return next(error)
    }
};

const putUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const userPut = new User(req.body)
        userPut._id = id
        const userUpdated = await User.findByIdAndUpdate(id, userPut)
        return res.status(200).json(userUpdated)
    } catch (error) {
        return next(error)
    }
};

const putPassword = async (req, res, next) => {
    try {
        const userPwd = req.user
        const newPassword = req.body.newPassword
        const saltRounds = 15;
        const passwordHas = await bcrypt.hash(newPassword, saltRounds)
        userPwd.password = passwordHas       
        const userMG = await User.findByIdAndUpdate(userPwd._id, userPwd)
        return res.status(200).json('Password modificada')
    } catch {
        return res.status(500).json('Error al cambiar la password')
    }
};

module.exports = {
    getRegister,
    getUser,
    getUserById,
    postUser,
    deleteUser,
    putUser,
    putPassword
}