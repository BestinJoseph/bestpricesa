import Dealer from '../Models/dealerModels.js'

export const getAllDealers = async (req, res) => {
    try {
        Dealer.find().then( dealers => {
            if(dealers) {
                res.status(200).json({errors: null, data: { dealers }, success: true})
            } else {
                res.status(200).json({errors: err, data: { msg: 'something went wrong!'}, success: false})
            }
        })
    } catch (err) {
        res.status(200).json({errors: err, data: null, success: false})
    }
}

export const postDealer = async (req, res) => {
    try {
        Dealer.create({ ...req.body }).then( dealer => {
            if (dealer) {
                res.status(200).json({errors: null, data: { dealer }, success: true})
            } else {
                res.status(200).json({errors: err, data: { msg: 'something went wrong!'}, success: false})
            }
        })
    } catch (err) {
        res.status(200).json({errors: err, data: null, success: false})
    }
}

export const updateDealerCars = async (req, res) => {
    console.log(req.params._id)
    try {
        Dealer.findByIdAndUpdate( req.params._id, { $push: { cars: {car: req.body.car, price: req.body.price, stock: req.body.stock} } }, {new: true, useFindAndModify: false}).then ( dealer => {
            if (dealer) {
                res.status(200).json({errors: null, data: { dealer }, success: true})
            } else {
                res.status(200).json({errors: "something went wrong", data: null, success: false})
            }
        })
    } catch (err) {
        res.status(200).json({errors: err, data: null, success: false})
    }
}