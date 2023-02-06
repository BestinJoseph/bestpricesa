import express from 'express'
const router = express.Router()

import { getAllCars, postCar } from '../Controllers/carsControllers.js'


router.route('/').all().get(getAllCars)
router.route('/').all().post(postCar)

export default router
