import Cars from '../Models/carModels.js'

export const getAllCars = async (req, res) => {
    try {
        const cars = await Cars.find()
        res.status(200).json({errors: null, data: { cars }, success: true})
    } catch (err) {
<<<<<<< HEAD
<<<<<<< HEAD
        res.status(200).json({errors: err, data: null, success: false})
=======
=======
>>>>>>> a137a05706b2bc203f994e7d052219442d071bf9
        console.log(err.code)
        res.status(200).json({errors: err, data: null, success: true})
>>>>>>> a137a05 (update 20230204)
    }
}

export const postCar = async (req, res) => {
    try {
<<<<<<< HEAD
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
=======
        
    } catch (err) {
        
>>>>>>> a137a05706b2bc203f994e7d052219442d071bf9
    }
}