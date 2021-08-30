const Truck = require('../models/Truck.model');

const getCreate = (req, res, next) => {
    try {
        return res.render('createTruck');
    } catch (error) {
        return next(error)
    }
};

const getTrucks = async (req, res, next) => {
    try {
        const trucks = await Truck.find()
        return res.status(201).json(trucks)
    } catch (error) {
        return next(error);
    }
};

const getTruckById = async (req, res, next) => {
    try {
        const { id } = req.params
        const trucks = await Truck.findById(id)
        return res.status(201).json(trucks)
    } catch (error) {
        return next(error);
    }
};

const postTruck = async (req, res, next) => {
    try{
        const{mark, model, plate} = req.body
        const dateITVForm = req.body.dateITV
        const dateITV = Date.parse(dateITVForm)
        const code = await findCodeTruck()
        const truck = new Truck({mark, model, code, plate, dateITV})
        const truckInsert = await truck.save()
        return res.status(201).json(truckInsert)
    }catch(error){
        return next(error)
    }
};

const deleteTruck = async (req, res, next) => {
    try{
        const {id} = req.params
        const truckDeleted= await Truck.findByIdAndDelete(id)
        return res.status(200).json(truckDeleted);
    }catch(error){
        return next(error)
    }
}; 

const putTruck = async (req, res, next) => {
    try {
        const { id } = req.params
        const truckPut = new Truck(req.body)
        truckPut._id = id
        const truckUpdated = await Truck.findByIdAndUpdate(id , truckPut)
        return res.status(200).json(truckUpdated)
    } catch (error) {
        return next(error)
    }
};

const findCodeTruck = async () => {
    const lastCodeArray = await Truck.find({},{code:1,_id:0}).sort({code:-1})
    let lastCode = lastCodeArray[0];
    return lastCode.code + 1
};

module.exports = {
    getCreate,
    getTrucks,
    getTruckById,
    postTruck,
    deleteTruck,
    putTruck
}