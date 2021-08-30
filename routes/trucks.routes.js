const express = require('express')
const router = express.Router()
const { isAdmin, isOffice } = require('../middlewares/auth.middleware')
const { getCreate, getTrucks, getTruckById, postTruck, deleteTruck, putTruck } = require('../controller/truck.controller')

router.get('/create', [isOffice], getCreate)

router.post('/create', [isOffice], postTruck);

router.get('/', [isOffice], getTrucks)

router.get('/:id', [isOffice], getTruckById)

router.delete('/delete/:id', [isOffice], deleteTruck)

router.put('/update/:id', [isOffice], putTruck)

module.exports = router