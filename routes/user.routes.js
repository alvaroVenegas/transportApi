const express = require('express');
const router = express.Router()
const { isAdmin, isAuth } = require('../middlewares/auth.middleware');
const { getRegister, getUser, getUserById, postUser, deleteUser, putUser, putPassword } = require('../controller/user.controller');

router.put('/password', putPassword)

router.get('/register', [isAdmin], getRegister);
router.get('/:id', [isAdmin], getUserById)
router.get('/', [isAdmin], getUser)

router.post('/register', [isAdmin], postUser);

router.delete('/:id', [isAdmin], deleteUser)

router.put('/:id', [isAdmin], putUser)


module.exports = router

