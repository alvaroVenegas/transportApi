const express = require('express');
const router = express.Router()
const { getSendingDriver } = require('../controller/driver.controller');

router.get('/', getSendingDriver);

module.exports = router