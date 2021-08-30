const Sending = require('../models/Sending.model');

const getCreate = (req, res, next) => {
    try {
        return res.render('createSending');
    } catch (error) {
        return next(error)
    }
};

const getSendings = async (req, res, next) => {
    try {
        const sendings = await Sending
            .find()
            .populate('truck')
            .populate('products.product')
            //.populate('direction.city')
            .populate('driver')
        return res.status(201).json(sendings)
    } catch (error) {
        return next(error);
    }
};

const getSendingById = async (req, res, next) => {
    try {
        const { id } = req.params
        const sendings = await Sending
            .findById(id)
            .populate('truck')
            .populate('products.product')
            //.populate('direction.city')
            .populate('driver')

        return res.status(201).json(sendings)
    } catch (error) {
        return next(error);
    }
};

const postSending = async (req, res, next) => {
    try {
        
                const dateForm = req.body.date
                const date = Date.parse(dateForm)
                req.body.date = date
                const sending = new Sending(req.body)
                const sendingInsert = await sending.save()
        
        /*
        const products = []
        const{truck, driver } = req.body
        const dateForm = req.body.date
        const date = Date.parse(dateForm)
        //console.log(date)
        const direction = {
            city : req.body.city,
            street : req.body.street,
            number : req.body.number,
            other : req.body.other
        }
        const product = {
            product : req.body.product,
            amountProducts : req.body.amountProducts
        }
        products.push(product)
        const document = req.fileUrl ? req.fileUrl : ''
        const sending = new Sending({date, truck, driver, direction, products, document})
        //console.log('sending -->' , sending)
        const sendingInsert = await sending.save()
        //console.log(sendingInsert)
        */
        return res.status(201).json(sendingInsert)

    } catch (error) {
        return next(error)
    }
};

const deleteSending = async (req, res, next) => {
    try {
        const { id } = req.params
        const sendingDeleted = await Sending.findByIdAndDelete(id)
        return res.status(200).json(sendingDeleted);
    } catch (error) {
        return next(error)
    }
};

const putSending = async (req, res, next) => {
    try {
        const { id } = req.params
        const sendingPut = new Sending(req.body)
        sendingPut._id = id
        const sendingUpdated = await Sending.findByIdAndUpdate(id, sendingPut)
        return res.status(200).json(sendingUpdated)
    } catch (error) {
        return next(error)
    }
};

module.exports = {
    getCreate,
    getSendings,
    getSendingById,
    postSending,
    deleteSending,
    putSending
}