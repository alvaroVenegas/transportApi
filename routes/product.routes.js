const express = require('express')
const router = express.Router()
const { isAdmin, isOffice } = require('../middlewares/auth.middleware')
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware')
const { getCreate, postProduct, getProductById, getProducts, deleteProduct, putProduct } = require('../controller/product.controller')

router.get('/create', [ isOffice], getCreate)

router.post('/create', [isOffice,upload.single('img'), uploadToCloudinary], postProduct);

router.get('/', [ isOffice], getProducts)

router.get('/:id', [ isOffice], getProductById)

router.delete('/delete/:id', [isOffice], deleteProduct)

router.put('/update/:id',  [isOffice], putProduct)

module.exports = router