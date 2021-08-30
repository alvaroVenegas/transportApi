const passport = require('passport')

const getLogin = (req, res, next) => {
    return res.render('login');
}

const postLogin = (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        const error = 'Completa todos los campos'
        //return res.render('register', { error });
        return next(error)
    }
    const done = (error, user) => {
        if (error) return next(error);

        req.logIn(user, (error, u) => {
            if (error) {
                return next(error);
            };
            //console.log('usuario logeado')
            return res.status(200).json(user)
            //return res.redirect('/');
        });
    };

    passport.authenticate('login', done)(req);
}

const logOut = (req, res, next) => {
    if (req.user) {
        req.logout();
        
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            return res.status(200).json('Hasta pronto!!');
            //return res.redirect('/');
        });
    } else {
        return res.status(200).json('No había usuario logueado');
    }
}

module.exports = { 
    getLogin,
    postLogin,
    logOut
}