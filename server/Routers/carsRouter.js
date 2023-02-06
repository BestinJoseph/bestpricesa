import express from 'express'
import { upload } from '../Config/imageLoader.js'
const router = express.Router()

import { getAllCars, postCar, updateCarImages } from '../Controllers/carsControllers.js'


router.route('/').all().get(getAllCars)
router.route('/').all().post(postCar)
router.route('/:_id/images').all(upload).put(updateCarImages)

export default router
