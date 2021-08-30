const express = require('express');
const { getLogin, postLogin, logOut } = require('../controller/login.controller');
const router = express.Router()


router.get('/', getLogin);

router.post('/', postLogin);

router.post('/out', logOut);

module.exports = router;