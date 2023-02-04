import Cars from '../Models/carModels.js'

export const getAllCars = async (req, res) => {
    try {
        const cars = await Cars.find()
        res.status(200).json({errors: null, data: { cars }, success: true})
    } catch (err) {
<<<<<<< HEAD
        res.status(200).json({errors: err, data: null, success: false})
=======
        console.log(err.code)
        res.status(200).json({errors: err, data: null, success: true})
>>>>>>> a137a05 (update 20230204)
    }
}

export const postCar = async (req, res) => {
    try {
<<<<<<< HEAD
        Cars.create({ ...req.body }).then( car => {
            if (car) {
                res.status(200).json({errors: null, data: { car }, success: true})
            } else {
                res.status(200).json({errors: err, data: { msg: 'something went wrong!'}, success: false})
            }
        })
    } catch (err) {
        res.status(200).json({errors: err, data: null, success: false})
=======
        
    } catch (err) {
        
>>>>>>> a137a05 (update 20230204)
    }
}