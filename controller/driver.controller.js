const Sending = require('../models/Sending.model')

const getSendingDriver =  async(req, res, next) => {
    try{
        const driver = req.user
        console.log(driver._id)
        const sendings = await Sending.find({driver: driver._id})
        console.log(sendings)
        return res.status(200).json(sendings)
    }catch{
        return res.status(500).json(error)
    }
}

module.exports = {
    getSendingDriver
}