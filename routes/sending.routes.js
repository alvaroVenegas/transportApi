const express = require('express');
const router = express.Router();
const { isAdmin, isOffice } = require('../middlewares/auth.middleware')
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware');
const { getCreate, getSendings, getSendingById, postSending, deleteSending, putSending } = require('../controller/sending.controller');

router.get('/create', [isOffice], getCreate)
router.get('/', [isOffice], getSendings)
router.get('/:id', [isOffice], getSendingById)

router.post('/create', [isOffice, upload.single('document'), uploadToCloudinary], postSending);

router.delete('/delete/:id', [isOffice], deleteSending)

router.put('/update/:id', [isOffice], putSending)

module.exports = router





