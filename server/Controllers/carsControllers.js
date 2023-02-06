import Cars from '../Models/carModels.js'

export const getAllCars = async (req, res) => {
    try {
        const cars = await Cars.find()
        res.status(200).json({errors: null, data: { cars }, success: true})
    } catch (err) {
        res.status(200).json({errors: err, data: null, success: false})
    }
}

export const postCar = async (req, res) => {
    try {
        Cars.create({ ...req.body }).then( car => {
            if (car) {
                res.status(200).json({errors: null, data: { car }, success: true})
            } else {
                res.status(200).json({errors: err, data: { msg: 'something went wrong!'}, success: false})
            }
        })
    } catch (err) {
        res.status(200).json({errors: err, data: null, success: false})
    }
}