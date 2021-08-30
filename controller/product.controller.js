const Product = require('../models/Product.model');

const getCreate = (req, res, next) => {
    return res.render('createProduct');
}

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        //console.log(products)
        return res.status(201).json(products)
    } catch (error) {
        return next(error);
    }
}

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params
        const products = await Product.findById(id)
        //console.log(products)
        return res.status(200).json(products)
    } catch (error) {
        return next(error);
    }
}

const postProduct = async (req, res, next) => {
    try{
        const{productName, stock} = req.body
        const img = req.fileUrl ? req.fileUrl : ''
        const product = new Product({productName, stock, img})
        const productInsert = await product.save()
        return res.status(201).json(productInsert)
    }catch(error){
        return next(error)
    }
}

const deleteProduct = async (req, res, next) => {
    try{
        const {id} = req.params
        const productDeleted= await Product.findByIdAndDelete(id)
        return res.status(200).json(productDeleted);
    }catch(error){
        return next(error)
    }
}

const putProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        if(req.body.img == ""){
            delete req.body.img
        }
        const productPut = new Product(req.body)
        productPut._id = id
        const productUpdated = await Product.findByIdAndUpdate(id , productPut)
        return res.status(200).json(productUpdated)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    getCreate,
    getProducts,
    getProductById,
    postProduct,
    deleteProduct,
    putProduct
}