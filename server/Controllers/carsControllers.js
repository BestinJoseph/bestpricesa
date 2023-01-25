import Cars from '../Models/carModels.js'

export const getAllCars = async (req, res) => {
    try {
        const cars = Cars.find()
        res.status(200).json({errors: null, data: {msg: 'list of cars goes here'}})
    } catch (err) {
        res.status(200).json({errors: err, data: null, success: true})
    }
}
