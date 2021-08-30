const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        //console.log('autorizado')
        return next();
    } else {
        //return res.redirect("/login");
        return res.status(500).json('No esta logueado');
    }
};

const isAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.rol === "admin") {
            // el objeto req.user lo añade passport después que express-session lo recupere
            //console.log('Es admin')
            return next();
        } else {
            //return res.redirect("/");
            //console.log('No es admin..')
            return res.status(403).json('No es admin');
        }
    } else {
        //return res.redirect("/login");
        return res.status(401).json('No esta logueado');
    }
};

const isOffice = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.rol === "admin" || req.user.rol === 'office') {
            // el objeto req.user lo añade passport después que express-session lo recupere
            console.log('Es admin u office')
            return next();
        } else {
            //return res.redirect("/");
            return res.status(403).json('No es admin ni office');
        }
    } else {
        //return res.redirect("/login");
        return res.status(401).json(error);
    }
};

module.exports = {
    isAuth,
    isAdmin,
    isOffice
}